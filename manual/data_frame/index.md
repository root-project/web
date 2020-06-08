---
title: Data frames
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

With [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}, ROOT offers
a modern, high-level interface for analysis of data stored in
{% include ref class="TTree" %}s, CSV files and other data formats, in C++ or Python.

{% include tutorials name="Data frame" url="dataframe" %}

<br>
The following is a brief introduction to ROOT data frames. For detailed information on ROOT data frames, see → [RDataFrame's reference guide](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}.

## Data analysis with RDataFrame

[RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"} provides the necessary methods to perform all operations required by your analysis.

Every `RDataFrame` program follows this workflow:

1. Construct a data frame object by specifying a data set. `RDataFrame` supports single TTrees as well as multiple ROOT TTrees (i.e., TChains), CSV files, SQLite files, and it can be extended to custom data formats.

2. Transform the data frame by:

   - [applying filters](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations){:target="_blank"}. This selects only specific rows of the data set.

   - [creating custom columns](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations){:target="_blank"}. Custom columns can, for example, contain the results of a computation that must be performed for every row of the data set.

3. [Produce results](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#actions){:target="_blank"}. _Actions_ are used to aggregate data into results. Most actions are _lazy_, i.e. they are not executed on the spot, but registered with `RDataFrame` and executed only when a result is accessed for the first time. The most typical result produced by ROOT analyses is a histogram, but `RDataFrame` supports any kind of data aggregation operation, including [writing out new ROOT files](https://root.cern.ch/doc/master/classROOT_1_1RDF_1_1RInterface.html#a233b7723e498967f4340705d2c4db7f8).

## How does it look in code?
This is a simple cut-and-fill with `RDataFrame`:

```c++
ROOT::RDataFrame df("mytree", {"f1.root", "f2.root"});
auto h = df.Filter("x > 0").Histo1D("x");
h->Draw(); // the event loop is run here, upon first access to one of the results
```

The lazy triggering of the _event loop_ (i.e. the loop over all data) makes it easy to generate multiple results while reading the data only once:

```c++
// C++11 lambda expressions and C++ functions are also supported as filter expressions
auto filtered_df = df.Filter([](float x) { return x > 0; }, {"x"});
auto hx = filtered_df.Histo1D("x");
auto hy = filtered_df.Histo1D("y");
hx->Draw(); // event loop is run here, both hx and hy are filled
```

As a last example, let's filter the events, define a new quantity, produce a control plot _and_ write out the filtered dataset, all in the same multi-thread event loop:

```c++
ROOT::EnableImplicitMT(); // enable multi-threading (see below)
ROOT::RDataFrame df(treename, filenames); // create dataframe
auto df2 = df.Filter("x > 0").Define("y", "x*x"); // filter and define new column
auto control_h = df2.Histo1D("y"); // book filling of a control plot
// write out new dataset. this triggers the event loop and also fills the booked control plot
df2.Snapshot("newtree", "newfile.root", {"x","y"});
```

For more examples, including ones in Python, see [the tutorials](https://root.cern/doc/master/group__tutorial__dataframe.html).

## Parallel execution

[RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) can perform multi-threaded event loops to speed up the execution of its actions. Each thread will process part of the data set, and `RDataFrame` will then merge the thread-local partial results before returning the final result to the user.

- To enable parallel data processing, call the [ROOT::EnableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#a06f2b8b216b615e5abbc872c9feff40f){:target="_blank"} function **before** constructing a `RDataFrame` object.

This enables ROOT's implicit multi-threading for all objects and methods that provide an internal parallelization mechanism.

In addition to [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}, the following objects and methods also automatically take advantage of multi-threading:

- [TTree::GetEntry](https://root.cern/doc/master/classTTree.html#a9fc48df5560fce1a2d63ecd1ac5b40cb){:target="_blank"}: Reads multiple branches in parallel.

- [TTree::FlushBaskets](https://root.cern/doc/master/classTTree.html#a2c67417486903b12f1149f97ca47525f){:target="_blank"}: Writes multiple baskets to disk in parallel.

- {% include ref class="TTreeCacheUnzip" %}: Decompresses the baskets contained in a {% include ref class="TTreeCache" %} in parallel.

- `THx::Fit`: Performs in parallel the evaluation of the objective function over the data.

- [TMVA::DNN](https://root.cern/doc/master/namespaceTMVA_1_1DNN.html){:target="_blank"}: Trains a deep neural networks in parallel.

- [TMVA::BDT](https://root.cern/doc/master/namespaceTMVA.html#aa80d9b85c1bb794248940dd499e132b4){:target="_blank"}: Trains a classifier in parallel and multi-class BDTs are evaluated in parallel
