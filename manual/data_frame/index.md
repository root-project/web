---
title: Data frames
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---
ROOT offers with [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}
a high level interface for analysis of data stored in
{% include ref class="TTree" %}s, CSV files and other data formats.

{% include tutorials name="Data frame" url="dataframe" %}

<br>
The following is a brief introduction to ROOT data frames. For detailed information on ROOT data frames, see → [https://root.cern/doc/master/classROOT_1_1RDataFrame.html](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}.

## Data analysis with RDataFrame

Usually a ROOT data analysis is a sequence of operations to be performed on data sets. [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"} provides the necessary methods to perform most common operations required by a ROOT analysis.

In detail, `RDataFrame` supports the following workflow for data analysis:

1. Creating a data frame object (using [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}'s constructor) by specifying the data set.

2. Applying a series of transformations to the data by:

   - [applying filters](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations){:target="_blank"}. This "cuts" the rows of the data set.

   - [creating custom columns](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations){:target="_blank"}. Custom columns can, for example, contain the results of a computation.

3. [Applying actions on the transformed data](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#actions){:target="_blank"}. Actions (instant or lazy) or are used to produce a result out of the data.


## Parallel execution

[RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) can perform multi-threaded event loops to speed up the execution of its actions.

- Use the [ROOT::EnableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#a06f2b8b216b615e5abbc872c9feff40f){:target="_blank"} method **before** constructing a `RDataFrame` object.

This enables ROOT's implicit multi-threading for all objects and methods that provide an internal parallelization mechanism.

In addition to [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html){:target="_blank"}, the following objects and methods also automatically take advantage of multi-threading:

- [TTree::GetEntry](https://root.cern/doc/master/classTTree.html#a9fc48df5560fce1a2d63ecd1ac5b40cb){:target="_blank"}: Reads multiple branches in parallel.

- [TTree::FlushBaskets](https://root.cern/doc/master/classTTree.html#a2c67417486903b12f1149f97ca47525f){:target="_blank"}: Writes multiple baskets to disk in parallel.

- {% include ref class="TTreeCacheUnzip" %}: Decompresses the baskets contained in a {% include ref class="TTreeCache" %} in parallel.

- `THx::Fit`: Performs in parallel the evaluation of the objective function over the data.

- [TMVA::DNN](https://root.cern/doc/master/namespaceTMVA_1_1DNN.html){:target="_blank"}: Trains a deep neural networks in parallel.

- [TMVA::BDT](https://root.cern/doc/master/namespaceTMVA.html#aa80d9b85c1bb794248940dd499e132b4){:target="_blank"}: Trains a classifier in parallel and multi-class BDTs are evaluated in parallel
