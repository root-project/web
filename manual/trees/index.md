---
title: Trees
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Introducing `TTree`

As introduced in → [Storing columnar data in a ROOT file and reading it back]({{ '/manual/root_files/#storing-columnar-data-in-a-root-file-and-reading-it-back' | relative_url }}),
ROOT can handle large columnar datasets.
In the aforementioned section, we made use of {% include ref class="RDataFrame" namespace="ROOT" %} to write and
read back a simple dataset.
RDataFrame traditionally relies on {% include ref class="TTree" %} for columnar data storage, used for example
by all LHC (Large Hadron Collider) experiments.
Trees are optimized for reduced disk space and selecting, high-throughput columnar access with reduced memory usage.

In addition to the documentation in this manual, we recommend to take a look at the TTree tutorials:

{% include tutorials name="Tree" url="tree" %}

> **RNTuple**
>
> [RNTuple](https://root.cern/doc/master/md_tree_ntuple_v7_doc_README.html){:target="_blank"} is the experimental evolution of {% include ref class="TTree" %} columnar data storage. {% include ref class="RNTuple" namespace="ROOT::Experimental" %} introduces robust interfaces, a high-performance storage layout, and an asynchronous, thread-safe scheduling.

> **RDataFrame**
>
> To access TTree data, please use {% include ref class="RDataFrame" namespace="ROOT" %}.
> `TTree` provides interfaces for low-level, expert usage.

### The tree and its data

A `TTree` behaves like an array of a data structure that resides on storage - except for one entry (or row, in database language).
That entry is accessible in memory: you can load any tree entry, ideally sequentially.
You can provide your own storage for the values of the columns of the current entry, in the form of variables.
In this case you have to tell the `TTree` about the addresses of these variables; either by calling [`TTree::SetBranchAddress()`](https://root.cern/doc/master/classTTree.html#a39b867210e4a77ef44917fd5e7898a1d), or by passing the variable when creating the branch for writing.
When "filling" (writing) the `TTree`, it will read the values out of these variables;
when reading back a `TTree` entry, it will write the values it read from storage into your variables.

### Branches and leaves

A tree consists of a list of independent columns, called branches. A branch can contain values of any fundamental type, C++ objects known to ROOT's type system, or collections of those.
When reading a tree, you can select which subset of branches should be read.
This allows you to optimize read throughput for a given analysis, and is one of the main motivations for storing data in columnar format.

Branches are represented by {% include ref class="TBranch" %} and its derived classes.

While `TBranch` represent structure, objects inheriting from {% include ref class="TLeaf" %} give access to the actual data.
Originally, any columnar data was accessible through a `TLeaf`; these days, some of the `TBranch`-derived classes provide data access themselves, such as {% include ref class="TBranchElement" %}.

### Baskets, clusters and the tree header

Every branch or leaf stores the data for its entries in buffers of a size that can be specified during branch creation (default: 32000 bytes).
Once the buffer is full, it gets compressed; the compressed buffer is called _basket_.
These baskets are written into the ROOT file.
Branches with more data per tree entry will fill more baskets than branches with less data per tree entry.
Conversely, baskets can hold many tree entries if their branch stores only a few bytes per tree entry.
This means that generally, all baskets - also of different branches - will contain data of different tree entry ranges.

To allow more efficient pre-fetching and better chunking of tree data stored in ROOT files, TTree groups baskets into _clusters_.
A cluster contains all the data of a given event range.
Trees will close baskets that are not yet full when reaching the tree entry at a cluster boundary.

TTree finds the baskets for a given entry for a given branch by means of a _header_ stored in the file.
This header also contains other auxilliary metadata.
When reading a `TTree` object, only this header is actually deserialized, until the tree's entries are loaded.
Multiple updates of these headers can often be found in files (`treename;1`, `treename;2` etc, called cycles, see → [I/O]({{ '/manual/io' | relative_url }})).
Only the last one (also accessible as `treename`) knows about all written baskets.


### `TNtuple`, the high-performance spread-sheet

For convenience, ROOT also provides the {% include ref class="TNtuple" %} class which is a tree whose branches contain only numbers of type `float`, one per tree entry.
It derives from {% include ref class="TTree" %} and is constructed with a list of column names separated by `:`.

_**Example**_

{% highlight C++ %}
// Create an n-tuple with the columns `Potential`, `Current`, `Temperature`, `Pressure`,
// each holding one `float` per tree entry.
TNtuple ntp("ntp","Example N-Tuple","Potential:Current:Temperature:Pressure");
{% endhighlight %}


## Writing a tree

When writing a `TTree` you first want to create a `TFile`
(see → [ROOT files]({{ '/manual/root_files' | relative_url }}).
Then construct the `TTree` to be stored in the file; we will later add branches to the tree.

_**Example**_

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root", "RECREATE") );
auto tree = std::make_unique<TTree>("tree", "The Tree Title");
{% endhighlight %}

{% highlight Python %}
myFile = ROOT.TFile( ROOT.TFile.Open("file.root", "RECREATE") )
tree = ROOT.TTree("tree", "The Tree Title")
{% endhighlight %}

### Creating branches

There are multiple ways to add branches to a `TTree`; the most commonly used ones are covered here.
More extensive documentation can be found in the [reference manual](https://root.cern.ch/doc/master/classTTree.html#creatingattreetoc).

> **Note**
>
> Do *not* use the {% include ref class="TBranch" %} constructor to add a branch to a tree.

> **Note**
>
> The objects *and* variables used to create branches must not be destroyed until the `TTree` is deleted or `TTree::ResetBranchAddress()` is called.
> If the address of the data to be filled changes with each tree entry, you have to inform the branch about the new address with [TBranch::SetAddress](https://root.cern/doc/master/classTBranch.html#a63e019ffc9c53ba249bd729da6a78657){:target="_blank"} before filling the tree again.


**1. Branches holding basic types**

If you have a variable of type `int`, `float`, `bool`, or any other basic type, you can create a branch (and a leaf) from it.
For fundamental datatypes, the type can be deduced from the variable and the name of the leaf will be set to the name of the branch.
In Python, that type information is not available and the leaf name and data type must be specified as third argument.
Further details are explained in the [reference guide](https://root.cern.ch/doc/master/classTTree.html#addcolumnoffundamentaltypes).

{% highlight C++ %}
float var;
tree->Branch("branch0", &var);
{% endhighlight %}

{% highlight Python %}
# Provide a one-element array, so ROOT can read data from this memory. 
from array import array
var = array('f', [ 0 ])
tree.Branch("branch0", var, "leafname/F");
{% endhighlight %}
<br/>
**2. Branches holding class type**

You can create a branch holding one of ROOT's classes, or your own type for which you have provided a dictionary (see → [I/O]({{ '/manual/io' | relative_url }})).

_Splitting_

If told, TTree will create (sub-) branches for each member of a class and its base classes.
If such a member is a class itself, that member's type can also be split.
The recusion level of nested splitting is called the "split level"; it can be configured during branch creation.

If the split level is set to 0, there is no splitting: all data members are stored in the same branch.
Data members can also be configured to be non-split as part of the dictionary; see → [I/O]({{ '/manual/io' | relative_url }}).
The default split level of 99 means to split all members at any recursion level.

_Pointers_

While references `X &` are not supported as member types, pointers are.
If the pointer is non-null, ROOT stores the object pointed to (pointee).
If multiple pointers within the same branch point to the same object during one `TBranch::Fill()` operation (as invoked by `TTree::Fill()`), that pointee will only be stored once; upon reading, all pointers will again point to the same object.

For the general case, indices into object collections could be persistified instead of pointers.
This way, the object is only stored once.

_**Example**_

ROOT's class {% include ref class="TNamed" %} has the data members `fName` and `fTitle`.
The following requests the tree to create a branch for each of them.
As `TNamed` derives from `TObject`, branches for `TObject`'s data members will also be created.

{% highlight C++ %}
TNamed var;
const int splitLevel = 99; // "all the way"
tree->Branch("branch0", &var, splitlevel);
{% endhighlight %}
<br/>
**3. Branches holding `std::vector`, `std::array`, `std::list`, etc**

Both top-level branches (those created by a call to `TTree::Branch()`) and branches created by splitting data members can hold collections such as `std::vector`, `std::array`, `std::list`, or `std::map`.
Splitting can traverse through collections:
if a member is a `std::vector<X>`, the tree can split `X` into sub-branches, too.

Such collections can also contain pointers.
For polymorphic pointees, ROOT will not just stream the base, but determine the actual object type.
If the split level is `TTree::kSplitCollectionOfPointers` then the pointees will be written in split mode, possibly adding new branches as new polymorphic derived types are encountered.

### Filling a tree

Use [TTree:Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067){:target="_blank"} to add a new entry (or "row") to the tree, and store the current values of the variables that were provided during branch creation.

### Writing the tree header

Use [TTree::Write()](https://root.cern/doc/master/classTTree.html#af6f2d9ae4048ad85fcae5d2afa05100f){:target="_blank"} to write the tree header into a ROOT file.
Earlier entries' data might already be written as part of `TTree::Fill()`.

If due to the data written during `TTree::Fill()`, the file's size increases beyond [TTree::GetMaxTreeSize()](https://root.cern/doc/master/classTTree.html#aca38baf017a203ddb3119a9ab7283cd9){:target="_blank"}, the current ROOT file is closed and a new ROOT file is created.
For an original ROOT file named `myfile.root`, the subsequent ROOT files are named `myfile_1.root`, `myfile_2.root`, etc.

_**Example**_

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root", "RECREATE") );
auto tree = std::make_unique<TTree>("tree", "The Tree Title");

float var;
tree->Branch("branch0", &var);

for (int iEntry = 0; iEntry < 1000; ++iEntry) {
   var = 0.3 * iEntry;
   // Fill the current value of `var` into `branch0`
   tree->Fill();
}

// Now write the header
tree->Write();
{% endhighlight %}

{% highlight Python %}
from array import array
import ROOT

myFile = ROOT.TFile( ROOT.TFile.Open("file.root", "RECREATE") )
tree = ROOT.TTree("tree", "The Tree Title")

# Provide a one-element array, so ROOT can read data from this memory. 
var = array('f', [ 0 ])
tree.Branch("branch0", var, "leafname/F");

for iEntry in range(1000):
   var = 0.3 * iEntry
   # Fill the current value of `var` into `branch0`
   tree.Fill()

# Now write the header
tree.Write()
{% endhighlight %}

_AutoFlush_

The tree can flush its data (i.e. its baskets) to file when reaching a given cluster size, thus closing the cluster.
By default this happens approximately every 30MB of compressed data.
The size can be adjusted using using [TTree::SetAutoFlush()](https://root.cern/doc/master/classTTree.html#ad4c7c7d70caf5657104832bcfbd83a9f){:target="_blank"}.

_AutoSave_

The tree can write a header update to file after it has collected a certain data size in baskets (by default, 300MB).
If your program crashes, you can recover the tree and its baskets written before the last autosave.

You can adjust the threshold (in bytes or entries) using [TTree::SetAutoSave()](https://root.cern/doc/master/classTTree.html#a76259576b0094536ad084cde665c13a8){:target="_blank"}.


## Reading a tree

> **Note**
>
> Please use {% include ref class="RDataFrame" namespace="ROOT" %} to read trees, unless you need to do low-level I/O!

To read a tree, you need to associate your variables with the tree's branches, as when writing.
When loading a tree entry, the tree will set the variables to the branch's value as read from the storage.
That is done by calling [`TTree::SetBranchAddress()`](https://root.cern/doc/master/classTTree.html#a39b867210e4a77ef44917fd5e7898a1d):

_**Example**_

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root") );
auto tree = myFile->Get<TTree>("TreeName");

int variable;
tree->SetBranchAddress("branchName", &variable);

for (int iEntry = 0; tree->LoadTree(iEntry) >= 0; ++iEntry) {
   // Load the data for the given tree entry
   tree->GetEntry(iEntry);

   // Now, `variable` is set to the value of the branch
   // "branchName" in tree entry `iEntry`
   printf("%d\n", variable);
}
{% endhighlight %}

In Python you can simply use the branch name as an attribute on the tree:

{% highlight Python %}
myFile = ROOT.TFile.Open("file.root")
myTree = myFile.TreeName
for entry in myTree:
   print(entry.branchName)
{% endhighlight %}


### Selecting a subset of branches to be read

You can select or deselect branches from being read by `GetEntry()` by calling [`TTree::SetBranchStatus()`](https://root.cern/doc/master/classTTree.html#aeca53bcd4482de1d883d259df6663920).
It is vividly recommended to only read the branches actually needed:
`TTree` is optimized for exactly this use case, and most analyses will only need a fraction of the available branches.

{% highlight C++ %}
// Extract the tree as above.

// Disable everything...
tree->SetBranchStatus("*", false);
// ...but the branch we need
tree->SetBranchStatus("branchName", true);

// Now proceed as above.
int variable;
tree->SetBranchAddress("branchName", &variable);
for (int iEntry = 0; tree->LoadTree(iEntry) >= 0; ++iEntry) {
   // Load the data for the given tree entry
   tree->GetEntry(iEntry);

   printf("%d\n", variable);
}
{% endhighlight %}


### Selecting a subset of entries to be read

To process only a selection of tree entries, you can use a {% include ref class="TEntryList" %}.
First you insert the tree entry numbers you want to process into the `TEntryList`.

{% highlight Python %}
entryList = ROOT.TEntryList("entryListName", "Title of the entry list")
for entry in tree:
   if entry.missingET < 100:
      entryList.Enter(tree.GetReadEntry())
myFile = ROOT.TFile.Open("entrylist.root", "RECREATE")
myFile.WriteObject(entrylist)
{% endhighlight %}

You can then re-use the `TEntryList` in subsequent processing of the tree, skipping irrelevant entries.

{% highlight Python %}
myFile = ROOT.TFile.Open("entrylist.root")
entrylist = myFile.entryListName
tree.SetEntryList(entrylist)
for entry in tree:
   # all entries will have missingET < 100
{% endhighlight %}

## Appending `TTree`s as a `TChain`

In high energy physics you always want as much data as possible.
But it's not nice to deal with files of multiple terabytes.
ROOT allows to to split data across multiple files, where you can then access the files' tree parts as one large tree.
That's done through {% include ref class="TChain" %}, which inherits from {% include ref class="TTree" %}:
it wants to know the name of the trees in the files (which can be overridden when adding files), and the file names, and will act as if it was a huge, continuous tree:

_**Example**_

{% highlight C++ %}
TChain chain("CommonTreeName");
if (chain.Add("data_*.root") != 12)
   std::cerr << "Expected to find 12 files!\n";
// Use `chain` as if it was a `TTree`
{% endhighlight %}

{% highlight Python %}
chain = ROOT.TChain("CommonTreeName")
if chain.Add("data_*.root") != 12:
   print("Expected to find 12 files!")
# Use `chain` as if it was a `TTree`
{% endhighlight %}

## Widening a `TTree` through friends

Trees are usually written just once.
While updating an existing tree is non-trivial, extending it with additional branches, potentially an "improved" version of an original branch, is straightforward.
"Friend trees" are added by calling [TTree::AddFriend()](https://root.cern/doc/master/classTTree.html#a321f2684de145cfcb01cabfce69ea910){:target="_blank"}.
Adding another tree called `T1` as a friend tree will make the branch `X` of `T1` available as both `T1.X` and - if `X` does not exist in the original tree - as `X`.

Friend trees are expected to have at least as many entries as the original tree.
The order of the friend tree's entries must preserve the entry order of the original tree.

> **Note**
>
> Care must be taken to ensure that the order of entries in the primary tree matches friends' entries. This is especially relevant when processing a tree in parallel to generate a friend tree, as the entries might be written out in an undefined order (misaligned entries).

{% highlight C++ %}
void treeWithFriend() {
   std::unique_ptr<TFile> myFile( TFile::Open("file.root") );
   auto tree = myFile->Get<TTree>("TreeName");

   std::unique_ptr<TFile> myFriendFile( TFile::Open("friend.root") );
   auto friendTree = myFriendFile->Get<TTree>("FriendTreeName");

   tree->AddFriend(friendTree);

   int variable;
   tree->SetBranchAddress("branchName", &variable);
   int variableFriend;
   tree->SetBranchAddress("FriendTreeName.friendBranchName", &variableFriend);

   // Iteration over `tree` automatically advances its friend trees.
   for (int iEntry = 0; tree->LoadTree(iEntry) >= 0; ++iEntry) {
      // Load the data for the given tree entry
      tree->GetEntry(iEntry);

      printf("%d %d\n", variable, variableFriend);
   }
{% endhighlight %}

# We still need to work on the parts below. No point in reviewing yet.

## Examining a tree

ROOT offers different ways to examine tree structure and its contents, from text to graphics.

### Printing the summary of a tree

Use [TTree::Print()](https://root.cern/doc/master/classTTree.html#a7a0006d38d5066b533e040aa16f97094){:target="_blank"} to see a summary of the tree structure.

_**Example**_

{% highlight C++ %}
root [0] tree->Print()

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
{% endhighlight %}

### Showing the content of a tree entry

Use [TTree::Show()](https://root.cern/doc/master/classTTree.html#a10e5e7424059bc7d17502331b41b0c16){:target="_blank"} to display the values of all branches for a given tree entry.

_**Example**_

{% highlight C++ %}
root[0] tree->Show(42)

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

### Showing tree data as a table

Use [TTree::Scan()](https://root.cern/doc/master/classTTree.html#af8a886acab51b16d8ddbf65667c035e4){:target="_blank"} to display a paged table of branches' values for all or some tree entries.

_**Example**_

{% highlight C++ %}
   root [0] tree->Scan("Cost:Age:Children")

   ************************************************
   *    Row *    Cost *       Age *    Children   *
   ************************************************
   *     0 *    11975 *        58 *             0 *
   *     1 *    10228 *        63 *             0 *
   *     2 *    10730 *        56 *             2 *
   *     3 *     9311 *        61 *             0 *
   *     4 *     9966 *        52 *             2 *
...
{% endhighlight %}

## Tree Viewer

With the Tree Viewer you can examine a tree in a GUI.

> **Note**
>
> You can also use the ROOT Object Browser to examine a tree that is saved in a ROOT file. See → [ROOT Object Browser]({{ '/manual/root_files#root-object-browser' | relative_url }}).

_**Example**_

{% highlight C++ %}
   root [0] new TTreeViewer(tree)
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

### Indexing a tree

- Use [TTree::BuildIndex()](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bd0b06eea6c12b998){:target="_blank"} to build an index table over expressions that depend on the value in the leaves.
This index is similar to database indexes:
it allows to quickly determine the tree entry number corresponding to the value of an expression.
These expressions should be both equality comparable (that is, not use floating point numbers where precision might cause the index lookup to fail) and unique, to make sure you get the tree entry you expect.
For high-energy physics, a common example could be a combination of run number and event number:
while each one of them might have duplications, their combination is guaranteed to be unique. 

To build an index, define a major and optionally a minor expression.
In the example above these might simply be the leaves `Run` and `Event`.
They can be expressions using original tree variables, such as `"run - 90000"`.
[TTree::BuildIndex()](https://root.cern/doc/master/classTTree.html#a3f6b5bb591ff7a5bd0b06eea6c12b998){:target="_blank"} loops over all entries and builds the lookup table from the expressions to the tree entry number.
The index can then be saved as part of the `TTree` object with `tree.Write()`.
This is done most conveniently at the end of the filling process, just before saving the tree header.

An entry can be retrieved using the index with
[TTree::GetEntryWithIndex()](https://root.cern/doc/master/classTTree.html#a8c77a02a1323019375d273299a2c14b1){:target="_blank"}.

Tree indexing works as well with a {% include ref class="TChain" %}.
