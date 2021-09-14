---
title: Trees
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

As introduced in → [Storing columnar data in a ROOT file and reading it back]({{ '/manual/root_files/#storing-columnar-data-in-a-root-file-and-reading-it-back' | relative_url }}),
ROOT can handle large columnar datasets.
In the aforementioned section, we made use of {% include ref class="RDataFrame" namespace="ROOT" %} to write and
read back a simple dataset.
However, RDataFrame does not access data by itself, but acts as a proxy for other data sources.
Traditionally, columnar data storage in ROOT has been provided by {% include ref class="TTree" %}, used for example
by all LHC (Large Hadron Collider) experiments.
Trees are optimized for reduced disk space and columnar access.

A tree consists of a list of independent columns, called branches. A branch can contain values of any fundamental type, C++ objects, or collections of those.
The {% include ref class="TBranch" %} class represents a branch.

For convenience, ROOT also provides the {% include ref class="TNtuple" %} class which is a {% include ref class="TTree" %}
that is limited to contain floating-point numbers only.

In addition to the documentation in this manual, we recommend to take a look at the TTree tutorials.

{% include tutorials name="Tree" url="tree" %}

> **RNTuple**
>
> [RNTuple](https://root.cern/doc/master/md_tree_ntuple_v7_doc_README.html){:target="_blank"} (for N-tuple and nested tuple) is the experimental evolution of {% include ref class="TTree" %} columnar data storage. `RNTuple` introduces new interfaces that are more robust.

## Tree classes

ROOT provides numerous classes for trees and branches, of which the following are among the most used:

- [TTree](https://root.cern/doc/master/classTTree.html){:target="_blank"}: Represents a columnar data set. Any C++ type can be stored in its columns.

- [TNtuple](https://root.cern/doc/master/classTNtuple.html){:target="_blank"}: A simple `TTree` restricted to a list of float variables only.

- [TBranch](https://root.cern/doc/master/classTBranch.html){:target="_blank"}: Organizes columns, i.e. branches, of a `TTree`.

- [TChain](https://root.cern/doc/master/classTChain.html){:target="_blank"}: A list of ROOT files containing `TTree` objects.


## Working with trees

ROOT offers many possibilities to work with trees, for example:

- [Creating a tree](#creating-a-tree)
- [Creating a tree from a folder structure](#creating-a-tree-from-a-folder-structure)
- [Filling a tree](#filling-a-tree)
- [Writing a tree](#writing-a-tree)
- [Printing the summary of a tree](#printing-the-summary-of-a-tree)
- [Showing an entry of a tree](#showing-an-entry-of-a-tree)
- [Scanning trees](#scanning-trees)

### Creating a tree

- Use the {% include ref class="TTree" %} constructor to create a tree.

_**Example**_

{% highlight C++ %}
   TTree t("MyTree","Example Tree");
{% endhighlight %}

It creates a tree with the title `Example Tree`.

_**Example: A simple tree**_

The following script builds a {% include ref class="TTree" %} from an ASCII file containing
statistics about the staff at CERN. Both, `staff.C` and `staff.dat` are in available in
`$ROOTSYS/tutorials/tree`.

The following script declares a structure called `staff_t`. It opens the ASCII file, creates
a ROOT file and a `TTree`. Then it creates one branch with the
[TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a){:target="_blank"}
method.<br/>The first parameter of the `Branch()` method is the branch name. <br/>The second
parameter is the address from which the first leaf is to be read. In this example, it is
the address of the structure staff. Once the branch is defined,
the script reads the data from the ASCII file into the `staff_t`
structure and fills the tree. The ASCII file is closed, and the ROOT file is written to
disk saving the tree. Trees and histograms are created in the current directory, which is
the ROOT file in our example. Hence an `f->Write()` saves the tree.

{% highlight C++ %}
{
// Create the structure to hold the variables for the branch.
   struct staff_t {
   Int_t cat;
   Int_t division;
   Int_t flag;
   Int_t age;
   Int_t service;
   Int_t children;
   Int_t grade;
   Int_t step;
   Int_t nation;
   Int_t hrweek;
   Int_t cost;
   };
   staff_t staff;

// Open the ASCII file.
   FILE *fp = fopen("staff.dat","r");
   char line[81];

// Create a new ROOT file.
   TFile *f = new TFile("staff.root","RECREATE");

// Create a TTree.
   TTree *tree = new TTree("T","Staff data from ASCII file");

// Create one branch with all information from the structure.
   tree->Branch("staff",&staff.cat,"cat/I:division:flag:age:service:
   children:grade:step:nation:hrweek:cost");

// Fill the tree from the values in ASCII file.
   while (fgets(&line,80,fp)) {
      sscanf(&line[0],"%d%d%d%d",&staff.cat,&staff.division,
      &staff.flag,&staff.age);
      sscanf(&line[13],"%d%d%d%d",&staff.service,&staff.children,
      &staff.grade,&staff.step);
      sscanf(&line[24],"%d%d%d",&staff.nation,&staff.hrweek,
      &staff.cost);
      tree->Fill();
   }

// Check what the tree looks like.
   tree->Print();
   fclose(fp);
   f->Write();
}
{% endhighlight %}

<p><a name="example-building-a-tree-from-an-ascii-file"></a></p>
_**Example: Building a tree from an ASCII file**_


The tutorial {% include tutorial name="cernbuild" %} provides an example how to build a {% include ref class="TTree" %} from an ASCII file.
The input file is `cernstaff.dat` that contains statistics about the staff at CERN.

The `cernbuild.C` ROOT macro creates a root file (`cernstaff.root`) and prints the tree `T` and its branches with [TTree::Print()](https://root.cern/doc/master/classTTree.html#a7a0006d38d5066b533e040aa16f97094){:target="_blank"}.

{% highlight C++ %}
root [0] .x cernbuild.C
******************************************************************************
*Tree    :T         : CERN 1988 staff data                                   *
*Entries :     3354 : Total =          176339 bytes  File  Size =      15005 *
*        :          : Tree compression factor =   2.74                       *
******************************************************************************
*Br    0 :Category  : Category/I                                             *
*Entries :     3354 : Total  Size=      14073 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    1 :Flag      : Flag/i                                                 *
*Entries :     3354 : Total  Size=      14049 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    2 :Age       : Age/I                                                  *
*Entries :     3354 : Total  Size=      14043 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    3 :Service   : Service/I                                              *
*Entries :     3354 : Total  Size=      14067 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
...
...
...
{% endhighlight %}

### Creating a tree from a folder structure

You can build a folder structure and create a tree with branches for each of the sub-folders.

_**Example**_

`TTree folder_tree("MyFolderTree","/MyFolder");`

`MyFolder` is the top folder. `/` indicates the {% include ref class="TTree" %}  constructor that a folder is being used.
You can fill the tree by placing the data into the folder structure and then calling the [TTree::Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067){:target="_blank"} method.


### Filling a tree

- Use the [TTree:Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067){:target="_blank"} method to fill a {% include ref class="TTree" %} instance.

A loop on all defined branches (see → [Branches](#branches)) is executed.

### Writing a tree

The data of a tree are saved in a ROOT file (see → [ROOT files]({{ '/manual/root_files' | relative_url }})).

- Use the [TTree::Write()](https://root.cern/doc/master/classTTree.html#af6f2d9ae4048ad85fcae5d2afa05100f){:target="_blank"} method to write the tree into a ROOT file.

The `TTree::Write()` method is needed to write the ROOT file header.

When writing a {% include ref class="TTree" %} to a ROOT file and if the ROOT file size reaches the value stored in the [TTree::GetMaxTreeSize()](https://root.cern/doc/master/classTTree.html#aca38baf017a203ddb3119a9ab7283cd9){:target="_blank"}, the current ROOT file is closed and a new ROOT file is created. If the original ROOT file is named `myfile.root`, the subsequent ROOT files are named `myfile_1.root`, `myfile_2.root`, etc.

**Autosave**

`Autosave` gives you the option to save all branch buffers every n byte. It is recommended to use `Autosave` for large acquisitions. If the acquisition fails to complete, you can recover the ROOT file and all the contents since the last `Autosave`.

- Use the [TTree::SetAutosave()](https://root.cern/doc/master/classTTree.html#a76259576b0094536ad084cde665c13a8){:target="_blank"} method to set the number of bytes between `Autosave`.

You can also use [TTree::SetAutosave()](https://root.cern/doc/master/classTTree.html#a76259576b0094536ad084cde665c13a8){:target="_blank"} in the acquisition loop every n entry.

### Printing the summary of a tree

- Use the [TTree::Print(Option_t * option = "")](https://root.cern/doc/master/classTTree.html#a7a0006d38d5066b533e040aa16f97094){:target="_blank"} method to print a summary of the tree contents.

- `option = "all"`: Friend trees are also printed.
- `option = "toponly"`:  Only the top level branches are printed.
- `option = "clusters"`: Information about the cluster of baskets is printed.

_**Example**_

{% highlight C++ %}
root[] TFile f("cernstaff.root")
root[] T->TTree::Print()

******************************************************************************
*Tree    :T         : CERN 1988 staff data                                   *
*Entries :     3354 : Total =          175531 bytes  File  Size =      47246 *
*        :          : Tree compression factor =   3.69                       *
******************************************************************************
*Br    0 :Category  : Category/I                                             *
*Entries :     3354 : Total  Size=      13985 bytes  File Size  =       4919 *
*Baskets :        1 : Basket Size=      32000 bytes  Compression=   2.74     *
*............................................................................*
*Br    1 :Flag      : Flag/i                                                 *
*Entries :     3354 : Total  Size=      13965 bytes  File Size  =       2165 *
*Baskets :        1 : Basket Size=      32000 bytes  Compression=   6.23     *
*............................................................................*
*Br    2 :Age       : Age/I                                                  *
*Entries :     3354 : Total  Size=      13960 bytes  File Size  =       3489 *
*Baskets :        1 : Basket Size=      32000 bytes  Compression=   3.86     *
*............................................................................*
*Br    3 :Service   : Service/I                                              *
*Entries :     3354 : Total  Size=      13980 bytes  File Size  =       2214 *
...
...
...
{% endhighlight %}

### Showing an entry of a tree

- Use the [TTree::Show()](https://root.cern/doc/master/classTTree.html#a10e5e7424059bc7d17502331b41b0c16){:target="_blank"} method to access one entry of a tree.

_**Example**_

Showing an entry from the `cernstaff.root` file (see → [Building a tree from an ASCII file](#example-building-a-tree-from-an-ascii-file)).

{% highlight C++ %}
root[] TFile f("cernstaff.root")
root[] T->Show(42)

======> EVENT:42
Category = 301
Flag = 13
Age = 56
Service = 31
Children = 0
Grade = 9
Step = 8
Hrweek = 40
Cost = 8645
Division = EP
Nation = CH
{% endhighlight %}

### Scanning trees

- Use the [TTree::Scan()](https://root.cern/doc/master/classTTree.html#af8a886acab51b16d8ddbf65667c035e4){:target="_blank"} method to display all values of the list of leaves.

_**Example**_

Scanning the `cernstaff.root` file (see → [Building a tree from an ASCII file](#example-building-a-tree-from-an-ascii-file)).

{% highlight C++ %}
   root[] TFile f("cernstaff.root")
   root[] T->Scan("Cost:Age:Children")

   ************************************************
   *    Row *    Cost *       Age *    Children   *
   ************************************************
   *     0 *    11975 *        58 *             0 *
   *     1 *    10228 *        63 *             0 *
   *     2 *    10730 *        56 *             2 *
   *     3 *     9311 *        61 *             0 *
   *     4 *     9966 *        52 *             2 *
   *     5 *     7599 *        60 *             0 *
   *     6 *     9868 *        53 *             1 *
   *     7 *     8012 *        60 *             1 *
   *     8 *     8813 *        51 *             0 *
   *     9 *     7850 *        56 *             1 *
   *    10 *     7599 *        51 *             0 *
   *    11 *     9315 *        54 *             2 *
   *    12 *     7599 *        54 *             0 *
   *    13 *     7892 *        46 *             0 *
   *    14 *     7850 *        54 *             1 *
   *    15 *     7599 *        57 *             0 *
   *    16 *     8137 *        55 *             0 *
   *    17 *     7850 *        55 *             1 *
   *    18 *     7294 *        57 *             1 *
   *    19 *     8101 *        51 *             2 *
   *    20 *     5720 *        54 *             0 *
   *    21 *    15832 *        57 *             1 *
   *    22 *    12226 *        63 *             1 *
   *    23 *    13135 *        56 *             0 *
   *    24 *     9617 *        49 *             0 *
{% endhighlight %}

### Indexing trees

- Use [TTree::BuildIndex()](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bd0b06eea6c12b998){:target="_blank"} method to build an index table using expressions depending on the value in the leaves.

The index is built in the following way:
- A pass on all entries is made like in [TTree::Draw()](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bTTree::Draw()d0b06eea6c12b998){:target="_blank"}.
- `var1` = `majorname`
- `var2` = `minorname`
- `sel = 231` × _majorname_ + _minorname_
- For each entry in the tree the `sel` expression is evaluated and the result array is sorted into `fIndexValues`.

Once the index is calculated, an entry can be retrieved with
[TTree::GetEntryWithIndex(majornumber, minornumber)](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bTTree::Draw()d0b06eea6c12b998){:target="_blank"}.

_**Example**_

{% highlight C++ %}
// To create an index using the leaves "Run" and "Event".
   tree.BuildIndex("Run","Event");

// To read entry corresponding to Run=1234 and Event=56789.
   tree.GetEntryWithIndex(1234,56789);
   {% endhighlight %}

Note that `majorname` and `minorname` can be expressions using original tree variables e.g., `"run-90000"` or `"event +3*xx"`.

In case an expression is specified, the equivalent expression must be computed when calling
[TTree::GetEntryWithIndex(majornumber, minornumber)](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bTTree::Draw()d0b06eea6c12b998){:target="_blank"}.
To build an index with only `majorname`, specify `minorname="0"` (default).

Once the index is built, it can be saved with the `TTree` object with `tree.Write()`.

The most convenient place to create the index is at the end of the filling process just before saving the tree header. If a previous index was calculated, it will be redefined by this new call.

Note that this function can also be applied to a {% include ref class="TChain" %}. The return value is the number of entries in the Index (< 0 indicates failure).

## Tree Viewer

With the Tree Viewer you can examine a tree in a GUI.

> **Note**
>
> You can also use the ROOT Object Browser to examine a tree that is saved in a ROOT file. See → [ROOT Object Browser]({{ '/manual/root_files#root-object-browser' | relative_url }}).

- Use the {% include ref class="TTreeViewer" %} class to open the ROOT file (containing the tree) in the Tree Viewer.

_**Example**_

Open the Tree Viewer for the `cernstaff.root` file (see → [Building a tree from an ASCII file](#example-building-a-tree-from-an-ascii-file)) that contains the tree `T`.

{% highlight C++ %}
   root[] TFile f("cernstaff.root")
   root[] new TTreeViewer("T")
{% endhighlight %}

{% include figure_image
img="tree_viewer.png"
caption="Tree Viewer."
%}

The left panel contains the list of trees and their branches. The right panel displays the leaves or variables in the tree.

### Drawing correlating variables in a scatterplot

You can show the correlation between the variables, listed in the {% include ref class="TTreeViewer" %}, by drawing a scatterplot.

- Select a variable in the {% include ref class="TTreeViewer" %}  and drag it to the `X:-empty-` entry.
- Select a second variable and drag it to the `Y:-empty-` entry.

{% include figure_image
img="variables_for_scatterplot_small.png"
caption="Variables Age and Cost selected for the scatterplot."
%}

- Click `Scatterplot`.

{% include figure_image
img="scatterplot-icon.png"
caption="Scatterplot icon."
%}

The scatterplot is drawn.

{% include figure_jsroot
   file="trees.root" object="CostAge" width="500px" height="350px"
   caption="Scatterplot of the variables Age and Cost."
%}

Note that not each `(x,y) point on a scatterplot represents two values in your N−tuple. In fact, the scatterplot is a grid and each square in
the grid is randomly populated with a density of dots that’s proportional to the number of values in that grid.

## Branches

You can organize columns, this is branches, of a tree with the {% include ref class="TBranch" %} class. A variable on a `TBranch` is called a leaf ({% include ref class="TLeaf" %}). If two variables are independent and it is certain that the variables will not be used together, they should be placed on separate branches.

The branch type differs by what is stored in it. A branch can contain the following data:

- an entire object,
- a list of simple variables,
- contents of a folder,
- contents of a {% include ref class="TList" %},
- an array of objects.

If two variables are independent and the variables will not be used together, place them on separate branches.
If the variables are related, such as the coordinates of a point, create one branch with both coordinates on it.

### Adding a branch

- Use the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a){:target="_blank"} method to add a {% include ref class="TBranch" %} to a tree:

{% highlight C++ %}
   auto branch = tree.Branch(branchname, address, leaflist, bufsize)
{% endhighlight %}

`address` is the address of the first item of a structure.
`leaflist` is the concatenation of all the variable names and types separated by a colon character. The variable name and the variable type are separated by a slash (/). The variable type must be one character.
For more information on adding a branch to tree, see → {% include ref class="TTree" %}.

> **Note**
>
> Do *not* use the {% include ref class="TBranch" %} constructor to add a branch to a tree.

### Adding a branch with a folder

- Use the following syntax to add a branch with a folder:

{% highlight C++ %}
   tree->Branch("/aFolder")
{% endhighlight %}

This creates one branch for each element in the folder. The method returns the total number of branches created.

### Adding a branch with STL collections

A `STLcollection` is a address of a pointer to `std::vector`, `std::list`, `std::deque`, `std::set` or `std::multiset` containing pointers to objects.

- Use the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a){:target="_blank"} method to add a `STLcollection`:

{% highlight C++ %}
   auto branch = tree.Branch(branchname, STLcollection, buffsize, splitlevel);
 {% endhighlight %}

If the `splitlevel` is a value bigger than 100 [TTree::kSplitCollectionOfPointers](https://root.cern/doc/master/classTTree.html#a6d07819a66bb97bafd460adfad555114ae3b257c9ade74c1a53383d800c0a708c){:target="_blank"}  then the `STLcollection` will be written in split mode.

If a dynamic structures changes with each entry, you have to redefine the branch address with [TBranch::SetAddress](https://root.cern/doc/master/classTBranch.html#a63e019ffc9c53ba249bd729da6a78657){:target="_blank"}  before filling the branch again.

### Adding a branch with objects

- Use the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a){:target="_blank"} method to add objects to a tree:

{% highlight C++ %}
   MyClass object;
   auto branch = tree.Branch(branchname, &object, bufsize, splitlevel)
{% endhighlight %}

`&object` must be the address of a valid object. The object must not be destroyed (this is be deleted)
until the {% include ref class="TTree" %} is deleted or
[TTree::ResetBranchAddress](https://root.cern/doc/master/classTTree.html#a181eb19c03433781fde2fa94443710dc){:target="_blank"}
is called.

The following values are available for the `splitlevel`:

`splitlevel=0`<br>
The object is serialized in the branch buffer.

`splitlevel=1 (default)`<br>
This branch is automatically into sub-branches, with one sub-branch for each
data member or object of the object itself. If the object member is a [TClonesArray](https://root.cern/doc/master/classTClonesArray.html){:target="_blank"}, it is processed as it is with `splitlevel=2`.

`splitlevel=2`<br>
This branch is automatically split into sub-branches, with one sub-branch for each
data member or object of the object itself. If the object member is a [TClonesArray](https://root.cern/doc/master/classTClonesArray.html){:target="_blank"} it is processed as a [TObject](https://root.cern/doc/master/classTObject.html){:target="_blank"}, but only for one branch.

### Adding a branch to an existing tree
You can add a branch to an existing tree.

_**Example**_

If one variable in the tree was computed with a certain algorithm, you may want to try another algorithm and compare the results. To do this, you can add a new branch, fill it, and save the tree.

{% highlight C++ %}
void tree3AddBranch() {
   TFile f("tree3.root", "update");
   Float_t new_v;
   auto t3 = f->Get<TTree>("t3");
   auto newBranch = t3->Branch("new_v", &new_v, "new_v/F");
   Long64_t nentries = t3->GetEntries();    // Read the number of entries in the t3.
   for (Long64_t i = 0; i < nentries; i++) {
      new_v = gRandom->Gaus(0, 1);
      newBranch->Fill();
   }
   t3->Write("", TObject::kOverwrite);       // Save only the new version of the tree.
}
{% endhighlight %}

`kOverwrite` in the `Write()` method causes the tree to be overwritten.

## Examples for writing and reading trees

The following sections are examples of writing and reading trees that range in complexity from a simple tree with
a few variables to a tree with folders and complex event objects.

### A tree with a C structure

> Tutorial
>
>  {% include tutorial name="tree2" %}

In this tutorial is shown:

- how to build branches from a C structure
- how to make a branch with a fixed length array
- how to make a branch with a variable length array
- how to read selective branches
- how to fill a histogram from a branch
- how to [TTree::Draw](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2){:target="_blank"} to draw a 3D plot

### Adding friends to trees

> Tutorial
>
>  {% include tutorial name="tree3" %}

Adding a branch is often not possible because the tree is a read-only file and you do not have permission to save the modified tree with the new branch. Even if you do have the permission, you risk loosing the original tree with an unsuccessful attempt to save the modification. Since trees are usually large, adding a branch could extend it over the 2 GB limit. In this case, the attempt to write the tree fails, and the original data is may also be corrupted. In addition, adding a branch to a tree enlarges the tree and increases the amount of memory needed to read an entry, and therefore decreases the performance.

For these reasons ROOT offers the concept of friends for trees (and chains) by adding a branch manually with [TTree::AddFriend()](https://root.cern/doc/master/classTTree.html#a011d362261b694ee7dd780bad21f030b){:target="_blank"}.

The [TTree::AddFriend()](https://root.cern/doc/master/classTTree.html#a011d362261b694ee7dd780bad21f030b){:target="_blank"} method has two parameters, the first is the tree name and the second is the name of the ROOT file where the friend tree is saved.
[TTree::AddFriend()](https://root.cern/doc/master/classTTree.html#a011d362261b694ee7dd780bad21f030b){:target="_blank"} automatically opens the friend file.


### Importing an ASCII file into a tree

Use [TTree::ReadFile()](https://root.cern/doc/master/classTTree.html#a9c8da1fbc68221b31c21e55bddf72ce7){:target="_blank"} to automatically define the structure of the {% include ref class="TTree" %} and read the data from a formatted ASCII file.

_**Example**_

{% highlight C++ %}
{
   gROOT->Reset();
   TFile *f = new TFile("basic2.root","RECREATE");
   TH1F *h1 = new TH1F("h1","x distribution",100,-4,4);
   TTree *T = new TTree("ntuple","data from ascii file");
   Long64_t nlines = T->ReadFile("basic.dat","x:y:z");
   printf(" found %lld pointsn",nlines);
   T->Draw("x","z>2");
   T->Write();
}
{% endhighlight %}


## Using trees for data analysis

The following methods are available for data analysis using trees:

- [TTree::Draw()](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2){:target="_blank"}

- [TTree::MakeClass()](https://root.cern/doc/master/classTTree.html#ac4ceaf4ae0b87412acf94093043cc2de){:target="_blank"}

- [TTree::MakeSelector()](https://root.cern/doc/master/classTTree.html#abe2c6509820373c42a88f343434cbcb4){:target="_blank"}

### Using TTree:Draw()

With the [TTree::Draw()](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2){:target="_blank"} method, you can easily plot a variable (a leaf).

_**Example**_

Open the `cernstaff.root` file (see → [Building a tree from an ASCII file](#example-building-a-tree-from-an-ascii-file)) and lists its content.

{% highlight C++ %}
root [] TFile f("cernstaff.root")
root [] f.ls()
TFile**      cernstaff.root
 TFile*      cernstaff.root
  KEY: TTree   T;1   CERN 1988 staff data
{% endhighlight %}

The `cernstaff.root` file contains the {% include ref class="TTree" %}  `T`. A pointer is created to the tree.

{% highlight C++ %}
   root [] TTree *MyTree = T
{% endhighlight %}

To show the different `Draw()` options, a canvas with four sub-pads is created.

{% highlight C++ %}
   root [] TCanvas *myCanvas = new TCanvas()
   root [] myCanvas->Divide(2,2)
{% endhighlight %}

The first pad with is activated with [TCanvas::cd](https://root.cern/doc/master/classTCanvas.html#ad996aa7bc34186944363b48963de4de5){:target="_blank"}.

{% highlight C++ %}
   root [] myCanvas->cd(1)
{% endhighlight %}

The `Cost` variable is drawn. [TTree::Draw](https://root.cern/doc/master/classTCanvas.html#a2309e37a6471e07f9dad3e5af1fe5561){:target="_blank"}
automatically creates a histogram. The style of the histogram is inherited from the {% include ref class="TTree" %} attributes.

{% highlight C++ %}
   root [] MyTree->Draw("Cost")
{% endhighlight %}

{% include figure_jsroot
   file="trees.root" object="c1" width="500px" height="350px"
   caption="The variable `Cost` drawn in a histogram."
%}

Next, the second pad is activated and scatter plot is drawn. Two dimensions (here `Cost` and `Age`) are separated by a colon ("x:y").<br>
In general, this parameter is a string containing up to three expressions, one for each dimension, separated by a colon (“e1:e2:e3”).

{% highlight C++ %}
   root [] myCanvas->cd(2)
   root [] MyTree->Draw("Cost:Age")
{% endhighlight %}

{% include figure_jsroot
   file="trees.root" object="c2" width="500px" height="350px"
   caption="The variable `Cost` and `Age` drawn in a histogram."
%}

Next, the third pad is activated and a selection is added. `Cost` versus `Age` for the entries where the nation is equal to `"CH"` is drawn.<br>
You can use any C++ operator. The value of the selection is used as a weight when filling
the histogram. If the expression includes only Boolean operations the result is 0
(histogram is not filled) or 1 (histogram is filled).

{% highlight C++ %}
   root [] myCanvas->cd(3)
   root [] MyTree->Draw("Cost:Age","Nation == \"CH\"")
{% endhighlight %}

{% include figure_jsroot
   file="trees.root" object="c3" width="500px" height="350px"
   caption="The variable `Cost` and `Age` with a selection drawn in a histogram."
%}

Next, the fourth pad is activated and the histogram is drawn with the draw option `surf2`.
Refer to the {% include ref class="THistPainter" %} class for possible draw options.

{% highlight C++ %}
   root [] myCanvas->cd(4)
   root [] MyTree->Draw("Cost:Age","Nation == \"CH\"","colz")
{% endhighlight %}

{% include figure_jsroot
   file="trees.root" object="c4" width="500px" height="350px"
   caption="The variable `Cost` and `Age` with a selection and a draw option drawn in a histogram."
%}

The [TTree::Draw()](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2){:target="_blank"} method also accepts {% include ref class="TCut" %} objects. A {% include ref class="TCut" %} object is
a specialized string object used for {% include ref class="TTree" %} selections.


### Using TTree::MakeClass()

- Use the [TTree::MakeClass()](https://root.cern/doc/master/classTTree.html#ac4ceaf4ae0b87412acf94093043cc2de){:target="_blank"}
method, to generate a skeleton class for looping over the entries of a tree.


### Using TTree::MakeSelector()

- Use the [TTree::MakeSlelector()](https://root.cern/doc/master/classTTree.html#abe2c6509820373c42a88f343434cbcb4){:target="_blank"}
 class, to generate a skeleton selector class for looping over a tree.


### Example: Using a ROOT macro for data analysis

The following example shows a simple ROOT macro for analyzing a tree. The ROOT macro calculates the sum of all event sizes.

_**Example**_

{% highlight C++ %}
#include "TFile.h"
#include "TTree.h"
#include "TBranch.h"

void CountEvents()
{
// Variables used to store the data.

// Sum of data size (in bytes) of all events.
   Int_t totalSize = 0;

// Size of the current event.
   Int_t eventSize = 0;

// Pointer to the event.fEventsize branch.
   TBranch *eventSizeBranch = 0;

// Open the ROOT file.
   TFile *f = TFile::Open("http://root.cern/files/introtutorials/eventdata.root");
   if (f == 0) {

// If we cannot open the ROOT file, print an error message and return immediately.
      printf("Error: cannot open http://root.cern/files/introtutorials/eventdata.root!\n");
      return;
   }

// Get a pointer to the tree.
   TTree *tree = (TTree *)f->Get("EventTree");

// Use SetBranchAddress() with simple types (e.g. double, int) instead of objects (e.g. std::vector<Particle>).
   tree->SetMakeClass(1);

// Connect the branch "fEventSize" with the variable eventSize that we want to contain the data.
// While we are at it, ask the tree to save the branch in eventSizeBranch.
   tree->SetBranchAddress("fEventSize", &eventSize, &eventSizeBranch);

// First, get the total number of entries.
   Long64_t nentries = tree->GetEntries();

// Then loop over all of them.
   for (Long64_t i=0;i<nentries;i++) {

// Load the data for TTree entry number "i" from branch
// fEventSize into the connected variable (eventSize).
      eventSizeBranch->GetEntry(i);
      totalSize += eventSize;
   }
   Int_t sizeInMB = totalSize/1024/1024;
   printf("Total size of all events: %d MB\n", sizeInMB);
}

{% endhighlight %}

Now you can create a histogram, for example for the X position of the particles (`hPosX`).


## Using Chains

A chain is a list of ROOT files containing {% include ref class="TTree" %} objects. A chain is created via the {% include ref class="TChain" %} object.

_**Example**_

There are three ROOT files `file1.root`, `file2.root` and `file3.root`. Each ROOT file contains a tree `T`. A chain is created with
[TChain::Add()](https://root.cern/doc/master/classTChain.html#a9510cc7fc76ff28c30e6775bd9085d6e){:target="_blank"}.

{% highlight C++ %}
   TChain chain("T");
   chain.Add("file1.root");
   chain.Add("file2.root");
   chain.Add("file3.root");
{% endhighlight %}

The name of the {% include ref class="TChain" %} is the same as the name of the tree.

The {% include ref class="TChain" %} class is derived from the {% include ref class="TTree" %}class.

_**Example**_

To generate an histogram corresponding to the attribute `x` in the tree `T` by processing sequentially the three files of this chain, you can write:

{% highlight C++ %}
   chain.Draw("x");
{% endhighlight %}

The next example illustrates how to set the address of an object to be read and how to loop on all events of all files of the chain.

{% highlight C++ %}
TH1F* hnseg(nullptr);
void processChain(){
// Create a chain out of three ROOT files.
   TChain chain("T");
   chain.Add("file1.root");
   chain.Add("file2.root");
   chain.Add("file3.root");

// Create an histogram.
   hnseg = new TH1F("hnseg","Number of segments for selected tracks",4096,0,8192);

// Specify the address where to read the event object.
// In the program writing the ROOT files, the event was stored in a branch called "event".
   Event *event = new Event();

// The object must be created before setting the branch address.
   chain.SetBranchAddress("event", &event);

// Start main loop on all events.
// In case you want to read only a few branches, use TChain::SetBranchStatus to activate/deactivate a branch.
   Int_t nevent = chain.GetEntries();
   for (Int_t i=0;i<nevent;i++) {
      chain.GetEvent(i);              //Read the complete accepted event in memory.
      hnseg->Fill(event->GetNseg());  //Fill the histogram with number of segments.
   }
{% endhighlight %}

## N-tuples

An N-tuple {% include ref class="TNtuple" %} is a simple {% include ref class="TTree" %} restricted to a list of float variables only.

### Writing simple N-tuples

In the following example, three independent variables (voltage, pressure and temperature) and one variable (current) which depends on the others according to very simple law, and an additional Gaussian smearing, are written to a ROOT file.

_**Example**_

{% highlight C++ %}
void write_ntuple_to_file(){
   TFile ofile("ntuple.root","CREATE");

// Initialize the TNtuple.
   TNtuple cond_data("cond_data","Example N-Tuple","Potential:Current:Temperature:Pressure");

// Fill it randomly to fake the acquired data.
   TRandom3 rndm;
   float pot,cur,temp,pres;
   for (int i=0;i<10000;++i){

// Get voltage.
      pot=rndm.Uniform(0.,10.);

// Get temperature.
      temp=rndm.Uniform(250.,350.);

// Get pressure.
      pres=rndm.Uniform(0.5,1.5);

// Current.
      cur=pot/(10.+0.05*(temp-300.)-0.2*(pres-1.));

// Add some random smearing (measurement errors).
// 1% error on voltage.
      pot*=rndm.Gaus(1.,0.01);

// 0.3 absolute error on temperature.
      temp+=rndm.Gaus(0.,0.3);

// 1% error on pressure.
      pres*=rndm.Gaus(1.,0.02);

// 1% error on current.
      cur*=rndm.Gaus(1.,0.01);

// Write to an N-tuple.
      cond_data.Fill(pot,cur,temp,pres);
   }

// Save the N-tuple and close the ROOT file.
cond_data.Write();
}
{% endhighlight %}

In the ROOT Object Browser you can find the columns of your n-tuple written as leafs. Clicking on one of the leafs obtains the histogram of the appropriate variable.

{% highlight C++ %}
   TFile f("ntuple.root")
   TBrowser b
{% endhighlight %}

{% include figure_image
img="root-object-browser-potential.png"
caption="N-tuple in the ROOT Object Browser."
%}

Use the following commands at the system prompt or in the ROOT shell to draw a simple correlation plot:

{% highlight C++ %}
   $ root ntuple.root
   root [1] cond_data->Draw("Current:Potential")
{% endhighlight %}

{% include figure_jsroot
   file="trees.root" object="potential" width="600px" height="450px"
   caption="Current/Potential correlation plot."
%}

### Reading N-tuples

The following example shows how to read the data from a ROOT N-tuple.

_**Example**_

{% highlight C++ %}
void read_ntuple_from_file(){

// Open a ROOT file, save the N-tuple and close the ROOT file.

   TFile in_file("ntuple.root");
   TNtuple* my_tuple;in_file.GetObject("cond_data",my_tuple);
   float pot,cur,temp,pres;
   float* row_content;
   cout << "Potential\tCurrent\tTemperature\tPressure\n";
   for (int irow=0;irow<my_tuple->GetEntries();++irow){
      my_tuple->GetEntry(irow);
      row_content = my_tuple->GetArgs();
      pot = row_content[0];
      cur = row_content[1];
      temp = row_content[2];
      pres = row_content[3];
      cout << pot << "\t" << cur << "\t" << temp << "\t" << pres << endl;
   }
}
{% endhighlight %}

{% highlight C++ %}
.x read_ntuple_from_file.C
Potential     Current     Temperature     Pressure
10.0756       1.19547     266.282         0.795519
5.37825       0.484204    324.413         1.23512
3.86672       0.449388    271.75          0.724136
8.90976       0.825837    316.434         0.981151
7.38798       0.681633    313.64          1.26236
2.07977       0.229839    279.348         0.597366
1.40566       0.148727    289.691         1.18724
7.5371        0.778955    286.499         0.657541
3.32501       0.427904    259.546         0.926214
3.70217       0.312457    333.17          0.643932
6.12199       0.591663    306.463         0.974056
4.30285       0.416644    309.89          1.18534
...           ...         ...             ...
{% endhighlight %}

### Writing arbitrary N-tuples

You can write N-tuples of arbitrary type by using the {% include ref class="TBranch" %} class. This is especially important as
[TNtuple::Fill()](https://root.cern/doc/master/classTNtuple.html#a7fd062e6a5cc4e4af50b9096b73feaa0){:target="_blank"} accepts only floats.

_**Example**_

The same N-tuple as before is created, but the branches are booked directly. The `Fill()` function then fills the current values of the connected variables to the tree.

{% highlight C++ %}
void write_ntuple_to_file_advanced(const std::string& outputFileName="ntuple.root",unsigned int numDataPoints=1000000)
{
   TFile ofile(outputFileName.c_str(),"RECREATE");

// Initialize the TNtuple.
   TTree cond_data("cond_data", "Example N-tuple");

// Define the variables and book them for the N-tuple.
   float pot,cur,temp,pres;
   cond_data.Branch("Potential", &pot, "Potential/F");
   cond_data.Branch("Current", &cur, "Current/F");
   cond_data.Branch("Temperature", &temp, "Temperature/F");
   cond_data.Branch("Pressure", &pres, "Pressure/F");
   for (int i=0;i<numDataPoints;++i){

// Fill it randomly to fake the acquired data.
      pot=gRandom->Uniform(0.,10.)*gRandom->Gaus(1.,0.01);
      temp=gRandom->Uniform(250.,350.)+gRandom->Gaus(0.,0.3);
      pres=gRandom->Uniform(0.5,1.5)*gRandom->Gaus(1.,0.02);
      cur=pot/(10.+0.05*(temp-300.)-0.2*(pres-1.))*
      gRandom->Gaus(1.,0.01);

// Write to the N-tuple.
      cond_data.Fill();
      }

// Save the N-tuple and close the ROOT file.
   cond_data.Write();
   ofile.Close();
}
{% endhighlight %}

## Reading TTrees, TChains and TNtuples

The {% include ref class="TTreeReader" %} class provides a simple, robust and fast interface to read values from ROOT columnar data sets such as {% include ref class="TTree" %}, {% include ref class="TChain" %} or {% include ref class="TNtuple" %}.

_**Example**_

A simple example using a `TTreeReader`.

{% highlight C++ %}
// Create a histogram.
   auto myHist = new TH1F("h1","ntuple",100,-4,4);

// Open the file containing the tree.
   auto myFile = TFile::Open("hsimple.root");

// Create a TTreeReader for the tree.
   TTreeReader myReader("ntuple", myFile);

// The branch "px" contains floats; access them as myPx.
   TTreeReaderValue<Float_t> myPx(myReader, "px");

// The branch "py" contains floats, too; access those as myPy.
   TTreeReaderValue<Float_t> myPy(myReader, "py");

// Loop over all entries of the TTree or TChain.
   while (myReader.Next()) {
      // Just access the data as if myPx and myPy were iterators (note the '*'in front of them):
      myHist->Fill(*myPx + *myPy);
   }
   myHist->Draw();
 {% endhighlight %}
