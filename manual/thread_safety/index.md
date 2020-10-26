---
title: Thread safety
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT classes support one of the following thread safety levels:

- Thread unsafe: make sure that any usage of thread unsafe objects is serialized.
You should not use thread unsafe objects concurrently by multiple threads even if every thread uses its own copy of an object and even if the threads use objects of _different_ (thread unsafe) types (as they may directly or indirectly share state in a thread unsafe manner).

- Conditionally thread safe: you can use conditionally safe objects concurrently by multiple threads as long as the threads do not share the same object (i.e. every thread uses a local instance of its objects).
In addition, you can share the same conditionally safe object among threads as long as all threads use only `const` methods of the shared object.
You can freely use instances of _different_ conditionally safe types concurrently in different threads.

- Thread safe: you can freely use thread safe objects concurrently in multiple threads.

In multi-threaded applications, you should call `ROOT::EnableThreadSafety()`.
Otherwise you need to consider ROOT objects as being thread unsafe.

With `ROOT::EnableThreadSafety()`, types whose names starts with `R` (e.g. [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html)) generally are conditionally thread safe.
Most of the core, math and I/O related classes are conditionally thread safe ({% include ref class="TTree" %}, {% include ref class="TDirectory" %}, {% include ref class="TFile" %}, `TH*`, {% include ref class="TMinuit" %}).
Most of the general infrastructure classes (e.g. {% include ref class="TROOT" %}, {% include ref class="TClass" %}) are thread safe.
For more detail see the individual class documentation.
