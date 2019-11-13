---
title: Trees
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides the [TTree](https://root.cern/doc/master/classTTree.html) and the [TNtuple](https://root.cern/doc/master/classTNtuple.html) class to store large quantities of same-class objects. They are optimized to reduce disk space and enhance access speed.

A tree consists of a list of independent columns, called branches. The [TBranch](https://root.cern/doc/master/classTBranch.html) class represents a branch. A branch can contain all kind of data, such as objects or arrays in addition to all the simple types.

A `TNtuple` is a `TTree` that is limited to only contains floating-point numbers.


> **Tutorials**
>
> Tree tutorials are available at → [https://root.cern/doc/master/group__tutorial__tree.html](https://root.cern/doc/master/group__tutorial__tree.html)

## Tree classes

ROOT provides the following classes for trees and branches, among others:

- [TTree](https://root.cern/doc/master/classTTree.html)

- [TNtuple](https://root.cern/doc/master/classTNtuple.html)

- [TBranch](https://root.cern/doc/master/classTBranch.html)

- [TChain](https://root.cern/doc/master/classTChain.html)


## Working with trees


### Creating a tree

- Use the [TTree](https://root.cern/doc/master/classTTree.html) constructor to create a tree.

_**Example**_

{% highlight C++ %}
TTree t("MyTree","Example Tree");
{% endhighlight %}

It creates a tree with the title `Example Tree`.

### Creating a tree from a folder structure

You can build a folder structure and create a tree with branches for each of the sub-folders.

_**Example**_

`TTree folder_tree("MyFolderTree","/MyFolder");`

`MyFolder` is the top folder. `/` indicates the [TTree](https://root.cern/doc/master/classTTree.html) constructor that a folder is being used.
You can fill the tree by placing the data into the folder structure and then calling the [TTree::Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067) method.

### Example: Building a tree from an ASCII file

The tutorial `$ROOTSYS/tutorials/tree/cernbuild.C `provides an example how to build a [TTree](https://root.cern/doc/master/classTTree.html) from an ASCII file.
The input file is `cernstaff.dat` that contains statistics about the staff at CERN.

The ROOT macro `cernbuild.C` creates a root file (`cernstaff.root`) and prints the tree with [TTree:Print()](https://root.cern/doc/master/classTTree.html#a7a0006d38d5066b533e040aa16f97094).

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
*Br    4 :Children  : Children/I                                             *
*Entries :     3354 : Total  Size=      14073 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    5 :Grade     : Grade/I                                                *
*Entries :     3354 : Total  Size=      14055 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    6 :Step      : Step/I                                                 *
*Entries :     3354 : Total  Size=      14049 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    7 :Hrweek    : Hrweek/I                                               *
*Entries :     3354 : Total  Size=      14061 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    8 :Cost      : Cost/I                                                 *
*Entries :     3354 : Total  Size=      14049 bytes  One basket in memory    *
*Baskets :        0 : Basket Size=      32000 bytes  Compression=   1.00     *
*............................................................................*
*Br    9 :Division  : Division/C                                             *
*Entries :     3354 : Total  Size=      25326 bytes  File Size  =       8325 *
*Baskets :        1 : Basket Size=      32000 bytes  Compression=   2.49     *
*............................................................................*
*Br   10 :Nation    : Nation/C                                               *
*Entries :     3354 : Total  Size=      24209 bytes  File Size  =       6680 *
*Baskets :        1 : Basket Size=      32000 bytes  Compression=   3.05     *
*............................................................................*
(TFile *) nullptr
root [1]
{% endhighlight %}


### Showing an entry of a tree

- Use the [TTree::Show()](https://root.cern/doc/master/classTTree.html) method to access one entry of a tree.

_**Example**_

Showing an entry from the `cernstaff.root` file (see → *Building a tree from an ASCII file*).

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

- Use the [TTree::Scan()](https://root.cern/doc/master/classTTree.html#af8a886acab51b16d8ddbf65667c035e4) method to show all values of the list of leaves.

_**Example**_

Scanning the `cernstaff.root` file (see → *Building a tree from an ASCII file*).

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

## Tree Viewer

With the tree viewer you can examine a tree in a GUI.

- To start the tree viewer, open a root file and start the tree viewer with `startViewer()`.

_**Example**_

Open the tree viewer for the `cernstaff.root` file (see → *Building a tree from an ASCII file*).

{% highlight C++ %}
   root[] TFile f("cernstaff.root")
   root[] T->startViewer()
{% endhighlight %}

{% include figure_image
img="tree_viewer.png"
caption="Tree Viewer."
%}

## Branches

You can organize columns, i.e. branches, of a tree with the [TBranch](https://root.cern/doc/master/classTBranch.html) class. A variable on a `TBranch` is called a leaf ([TLeaf](https://root.cern/doc/master/classTLeaf.html)).

The branch type differs by what is stored in it. A branch can hold the following data:

- an entire object,
- a list of simple variables,
- contents of a folder,
- contents of a [TList]([TList](https://root.cern/doc/master/classTList.html)),
- an array of objects.

If two variables are independent and the variables will not be used together, place them on separate branches.
If the variables are related, such as the coordinates of a point, create one branch with both coordinates on it.

### Adding a branch

- Use the the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a) method to add a [TBranch]([TBranch](https://root.cern/doc/master/classTBranch.html)) to a tree:

   `auto branch = tree.Branch(branchname, address, leaflist, bufsize)`

`address` is the address of the first item of a structure.
`leaflist` is the concatenation of all the variable names and types separated by a colon character. The variable name and the variable type are separated by a slash (/). The variable type must be 1 character.
For more information on adding a branch to tree, see → [TTree](https://root.cern/doc/master/classTTree.html).

> **Note**
>
> Do *not* use the `TBranch` constructor to add a branch to a tree.

### Adding a branch with a folder

- Use the following syntax to add a branch with a folder:

   `tree->Branch("/aFolder");`

This creates one branch for each element in the folder. The method returns the total number of branches created.

### Adding a branch of STL collections

A `STLcollection` is a address of a pointer to `std::vector`, `std::list`, `std::deque`, `std::set` or `std::multiset` containing pointers to objects.

- Use the the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a) method to add a `STLcollection`:

   `auto branch = tree.Branch( branchname, STLcollection, buffsize, splitlevel);`

If the `splitlevel` is a value bigger than 100 [TTree::kSplitCollectionOfPointers](https://root.cern/doc/master/classTTree.html#a6d07819a66bb97bafd460adfad555114ae3b257c9ade74c1a53383d800c0a708c) then the `STLcollection` will be written in split mode.

If a dynamic structures changes with each entry, you have to redefine the branch address with [TBranch::SetAddress](https://root.cern/doc/master/classTBranch.html#a63e019ffc9c53ba249bd729da6a78657) before filling the branch again.

### Adding a branch of objects

- Use the the following syntax of the [TTree::Branch()](https://root.cern/doc/master/classTTree.html#ab47499eeb7793160b20fa950f4de716a) method to add objects to a tree:

{% highlight C++ %}
MyClass object;
auto branch = tree.Branch(branchname, &object, bufsize, splitlevel)
{% endhighlight %}

`&object` must be the address of a valid object. The object must not be destroyed (i.e. be deleted) until the [TTree]([TTree](https://root.cern/doc/master/classTTree.html)) is deleted or [TTree::ResetBranchAddress](https://root.cern/doc/master/classTTree.html#a181eb19c03433781fde2fa94443710dc) is called.

For the `splitlevel` the following values are available:

`splitlevel=0`<br>
The object is serialized in the branch buffer.

`splitlevel=1 (default)`<br>
This branch will automatically be split into sub-branches, with one sub-branch for each data member or object of the object itself. In case the object member is a [TClonesArray](https://root.cern/doc/master/classTClonesArray.html), it is processed as a [TObject+](https://root.cern/doc/master/classTObject.html), but only one branch.

`splitlevel=2`<br>
This branch will automatically be split into sub-branches, with one sub-branch for each data member or object of the object itself. In case the object member is a [TClonesArray](https://root.cern/doc/master/classTClonesArray.html), it is processed as a [TObject*](https://root.cern/doc/master/classTObject.html), but only one branch.

### Adding a branch to an existing tree
You can add a branch to an existing tree.

_**Example**_

If one variable in the tree was computed with a certain algorithm, you may want to try another algorithm and compare the results. To do this, you cann add a new branch, fill it, and save the tree.

{% highlight C++ %}
void tree3AddBranch() {
   TFile f("tree3.root", "update");
   Float_t new_v;
   auto t3 = f->Get<TTree>("t3");
   auto newBranch = t3->Branch("new_v", &new_v, "new_v/F");
   Long64_t nentries = t3->GetEntries(); // read the number of entries in the t3
   for (Long64_t i = 0; i < nentries; i++) {
      new_v = gRandom->Gaus(0, 1);
      newBranch->Fill();
   }
   t3->Write("", TObject::kOverwrite); // save only the new version of the tree
}
{% endhighlight %}

`kOverwrite` in the `Write()` method causes the tree to be overwritten.

### Filling a tree
- Use the [TTree:Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067) method to fill a [TTree](https://root.cern/doc/master/classTTree.html) instance.
A loop on all defined branches is executed.

## Using trees for data analysis

The following methods are available for data analysis using trees:

- [TTree::Draw()](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2)

- [TTree::MakeClass()](https://root.cern/doc/master/classTTree.html#ac4ceaf4ae0b87412acf94093043cc2de)

- [TTree::MakeSelector()](https://root.cern/doc/master/classTTree.html#abe2c6509820373c42a88f343434cbcb4)

### Using TTree:Draw()

With the [TTree::Draw()](https://root.cern/doc/master/classTTree.html#ac4016b174665a086fe16695aad3356e2) method, you  can easily plot variables (i.e. leaf).

_**Example**_

Open the `cernstaff.root` file (see → *Building a tree from an ASCII file*) and lists its content.

{% highlight C++ %}
root [0] TFile f("cernstaff.root")
root [1] f.ls()
TFile**      cernstaff.root
 TFile*      cernstaff.root
  KEY: TTree   T;1   CERN 1988 staff data
{% endhighlight %}

The `cernstaff.root` file contains the [TTree](https://root.cern/doc/master/classTTree.html) `T`. A pointer is created to the tree.

{% highlight C++ %}
root [2] TTree *MyTree = T
{% endhighlight %}

To show the different `Draw()` options, a canvas with four sub-pads is created.

{% highlight C++ %}
root [3] TCanvas *myCanvas = new TCanvas()
root [4] myCanvas->Divide(2,2)
{% endhighlight %}

The first pad with is activated with [TCanvas::cd](https://root.cern/doc/master/classTCanvas.html#ad996aa7bc34186944363b48963de4de5).

{% highlight C++ %}
root [5] myCanvas->cd(1)
{% endhighlight %}

The `Cost` variable is drawn. [TTree::Draw](https://root.cern/doc/master/classTCanvas.html#a2309e37a6471e07f9dad3e5af1fe5561) automatically creates a histogram. The style of the histogram is inherited from the [TTree](https://root.cern/doc/master/classTTree.html) attributes.

{% highlight C++ %}
root [9] MyTree->Draw("Cost")
{% endhighlight %}

{% include figure_image
img="tree-draw-1.png"
caption="The variable `Cost` drawn in a histogram."
%}

Next, the second pad is activated and scatter plot is drawn. Two dimensions (here `Cost` and `Age`) are separated by a colon ("x:y").<br>
In general, this parameter is a string that containsup to three expressions, one for each dimension, separated by a colon (“e1:e2:e3”).

{% highlight C++ %}
root [10] myCanvas->cd(2)
root [11] MyTree->Draw("Cost:Age")
{% endhighlight %}

{% include figure_image
img="tree-draw-2.png"
caption="The variable `Cost` and `Age` drawn in a histogram."
%}

Next, the third pad is activated and a selection is added. `Cost` versus `Age` for the entries where the nation is equal to `“CH”` is drawn.<br>
You can use any C++ operator. The value of the selection is used as a weight when filling the histogram. If the expression includes only Boolean operations the result is 0 (histogramm is not filled) or 1 ((histogramm is filled).

{% highlight C++ %}
root [11] myCanvas->cd(3)
root [22] MyTree->Draw("Cost:Age","Nation == \"CH\"")
{% endhighlight %}

{% include figure_image
img="tree-draw-3.png"
caption="The variable `Cost` and `Age` with a selection drawn in a histogram."
%}

Next, the fouth pad is activated and the histogram is drawn with the dra option `surf2`. Refer to the [THistPainter](https://root.cern/doc/master/classTHistPainter.html) class for possible draw options.

{% highlight C++ %}
root [11] myCanvas->cd(4)
root [22] MyTree->Draw("Cost:Age","Nation == \"CH\"","surf2")
{% endhighlight %}

{% include figure_image
img="tree-draw-4.png"
caption="The variable `Cost` and `Age` with a selection and a draw option drawn in a histogram."
%}

### Using TTree::MakeClass()

With the [TTree::MakeClass()](https://root.cern/doc/master/classTTree.html#ac4ceaf4ae0b87412acf94093043cc2de) method, you can generate a skeleton class designed to loop over the entries of the tree.


### Using TTree::MakeSelector()

With the [TTree::MakeSlelector()](https://root.cern/doc/master/classTTree.html#abe2c6509820373c42a88f343434cbcb4) class, you can generate a skeleton selector class designed to loop over a tree.


## Chains

A chain is a collection of ROOT files containing [TTree](https://root.cern/doc/master/classTTree.html) objects. A chain is created via the [TChain](https://root.cern/doc/master/classTChain.html) object.

_**Example**_

There are three ROOT files `file1.root`, `file2.root` and `file3.root`. Each file contains a tree `T`. A chain is created with [TChain::Add()](https://root.cern/doc/master/classTChain.html#a9510cc7fc76ff28c30e6775bd9085d6e).

{% highlight C++ %}
TChain chain("T");
chain.Add("file1.root");
chain.Add("file2.root");
chain.Add("file3.root");
{% endhighlight %}

The name of the [TChain](https://root.cern/doc/master/classTChain.html) is the same as the name of the tree.