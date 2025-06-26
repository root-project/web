---
title: Multi-threading
layout: single
sidebar:
  nav: "manual"
---

ROOT can benefit from multi-threading by being able to do work in parallel.
If parallelism is managed internally by ROOT, we talk about _implicit_ multi-threading. On the other hand, if the application itself is in charge of creating threads and distributing work among them, the multi-threading is _explicit_. Below we describe how to use ROOT in either case.

## Implicit multi-threading

Some parts of ROOT are able to spread work over multiple threads in order to exploit the multiple cores of a machine. This happens under the hood, and you benefit from the speedup "for free".

By default, ROOT runs in sequential mode; in order to activate implicit multi-threading (IMT), one must call [ROOT::EnableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#a06f2b8b216b615e5abbc872c9feff40f){:target="_blank"}.
[ROOT::DisableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#af6b6120e5533533bfe589e5ed91845f0){:target="_blank"} disables IMT, i.e. it goes back to sequential mode.

The most prominent IMT example in ROOT is {% include ref class="RDataFrame" namespace="ROOT" %}, which is able to automatically run its computation on all cores:

{% highlight C++ %}
// This activates implicit multi-threading
ROOT::EnableImplicitMT();

// The analysis below runs in parallel
ROOT::RDataFrame rdf("mytree", "myfile.root");
auto h = rdf.Filter("x > 0").Histo1D("x");
h->Draw();
{% endhighlight %}

{% highlight Python %}
import ROOT

# This activates implicit multi-threading
ROOT.EnableImplicitMT()

# The analysis below runs in parallel
rdf = ROOT.RDataFrame("mytree", "myfile.root")
h = rdf.Filter("x > 0").Histo1D("x")
h.Draw()
{% endhighlight %}

There are two options to limit the number of threads ROOT is going to use: using `ROOT::EnableImplicitMT(4)` or setting the environment variable ROOT_MAX_THREADS, for example:
{% highlight Bash %}
export ROOT_MAX_THREADS=4
root.exe ${arguments}
{% endhighlight %}

For further information about RDataFrame, please visit → [RDataFrame manual]({{ '/manual/data_frame' | relative_url }}).

In addition to RDataFrame, the methods and classes below also implement IMT in ROOT:
- [TTree::GetEntry()](https://root.cern/doc/master/classTTree.html#a9fc48df5560fce1a2d63ecd1ac5b40cb){:target="_blank"}: Reads and decompresses multiple branches in parallel.

- [TTree::Fill()](https://root.cern/doc/master/classTTree.html#a00e0c422f5e4f6ebcdeef57ff23e9067){:target="_blank"}: to fill and compress the branches of a tree, possibly flushing their content to disk.

- [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a): Performs in parallel the evaluation of the objective function over the data.

- [TMVA::DNN](https://root.cern/doc/master/namespaceTMVA_1_1DNN.html){:target="_blank"}: Trains a deep neural network in parallel.

- [TMVA::BDT()](https://root.cern/doc/master/namespaceTMVA.html#aa80d9b85c1bb794248940dd499e132b4){:target="_blank"}: Trains a classifier in parallel and evaluates multi-class BDTs in parallel.

## Explicit multi-threading

You can also use ROOT classes in an application that explicitly manages multiple threads. In such a scenario, you need to be aware of the _thread safety level_ that each interface supports. Below there are some instructions depending on that level:

- _Thread unsafe_: make sure that any usage of thread unsafe objects is serialized, for instance through locks.
You should not use thread unsafe objects concurrently by multiple threads even if every thread uses its own copy of an object and even if the threads use objects of different (thread unsafe) types, as they may directly or indirectly share state in a thread unsafe manner.

- _Conditionally thread safe_: you can use conditionally safe objects concurrently by multiple threads as long as the threads do not share the same objects (i.e. every thread uses a local instance of its objects).
In addition, you can share the same conditionally safe object among threads as long as all threads use only `const` methods of the shared object.
You can freely use instances of different conditionally safe types concurrently in different threads.

- _Thread safe_: you can freely use thread safe objects concurrently in multiple threads.

In multi-threaded applications, you should call [ROOT::EnableThreadSafety()](https://root.cern/doc/master/namespaceROOT.html#a3332c2f629881ab608768fa6846f440e).
Otherwise you need to consider ROOT objects as being thread unsafe.

With `ROOT::EnableThreadSafety()`, types whose name starts with an `R` (e.g. {% include ref class="RDataFrame" namespace="ROOT" %}) generally are conditionally thread safe.
Most of the core, math and I/O related classes are conditionally thread safe ({% include ref class="TTree" %}, {% include ref class="TDirectory" %}, {% include ref class="TFile" %}, `TH*`, {% include ref class="TMinuit" %}).
Most of the general infrastructure classes (e.g. {% include ref class="TROOT" %}, {% include ref class="TClass" %}) are thread safe.

For more detail see the individual class documentation.
