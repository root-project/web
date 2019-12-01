---
title: Data Frame
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---
ROOT offers with [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) a high level interface for analysis of data stored in [TTree](https://root.cern/doc/master/classTTree.html)s, CSV files and other data formats. 

> **Tutorials**
>
> Data frame tutorials are available at → [https://root.cern.ch/doc/master/group__tutorial__dataframe.html](https://root.cern.ch/doc/master/group__tutorial__dataframe.html)

The following is a brief introduction to ROOT data frames. For detailed information, see → [https://root.cern/doc/master/classROOT_1_1RDataFrame.html](https://root.cern/doc/master/classROOT_1_1RDataFrame.html).

## Data analysis with RDataFrame

Usually a ROOT data analysis is a sequence of operations to be performed on data sets. [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) provides the necessary methods to perform most common operations required by ROOT analysis.

In detail, `RDataFrame` supports the following workflow for data analysis:

1. Creating a data frame object (using `RDataFrame`'s constructor) by specifying the data set.

2. Applying a series of transformations to the data by:

	- [Applying filters](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations). This "cuts" the rows of the data set.
	
	- [Creating custom columns](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#transformations). Custom columns can, for example, contain the results of a computation.

3. [Applying actions on the transformed data](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#actions). Actions (instant or lazy) or are used to produce a result out of the data.


## Parallel execution

[RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) can perform multi-threaded event loops to speed up the execution of its actions. 

- Use the [ROOT::EnableImplicitMT()]https://root.cern/doc/master/namespaceROOT.html#a06f2b8b216b615e5abbc872c9feff40f method **before** constructing a `RDataFrame` object.

This enables ROOT's implicit multi-threading for all objects and methods that provide an internal parallelization mechanism. 

The following objects and methods automatically take advantage of multi-threading:

- [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html): Runs internally the event-loop by parallelizing over clusters of entries.

- [TTree::GetEntry](https://root.cern/doc/master/classTTree.html#a9fc48df5560fce1a2d63ecd1ac5b40cb): Reads multiple branches in parallel.
 
- [TTree::FlushBaskets](https://root.cern/doc/master/classTTree.html#a2c67417486903b12f1149f97ca47525f): Writes multiple baskets to disk in parallel.
 
- [TTreeCacheUnzip](https://root.cern/doc/master/classTTreeCacheUnzip.html): Decompresses the baskets contained in a [TTreeCache](https://root.cern/doc/master/classTTreeCache.html) in parallel.
    
- `THx::Fit`: Performs in parallel the evaluation of the objective function over the data.

- [TMVA::DNN](https://root.cern/doc/master/namespaceTMVA_1_1DNN.html): Trains a deep neural networks in parallel.

- [TMVA::BDT](https://root.cern/doc/master/namespaceTMVA.html#aa80d9b85c1bb794248940dd499e132b4): Trains a classifier in parallel and multi-class BDTs are evaluated in parallel



