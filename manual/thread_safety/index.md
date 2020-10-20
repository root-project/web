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
You should not use thread unsafe objects concurrently by multiple threads even if every thread uses its own copy of an object and even if the threads use objects of _different_ (thread unsafe) types.

- Conditionally thread safe: you can use conditionally safe objects concurrently by multiple threads as long as the threads do not share the same object (i.e. every thread uses a local instance of its objects).
In addition, you can share the same conditionally safe object among threads as long as all threads use only `const` methods of the shared object.
You can freely use instances of _different_ conditionally safe types concurrently in different threads.

- Thread safe: you can freely use thread safe objects concurrently in multiple threads.

Unless otherwise stated, classes starting with `R` (e.g. {% include ref class="RDataFrame" %}) are conditionally thread safe.
Types whose name starts `T` (e.g. {% include ref class="TUrl" %}) as well as globals (such as `gStyle`) are thread unsafe.
You can find the exceptions from the general thread safety guarantuees in the Doxygen class documention.
Notably, most I/O classes starting with `T` (e.g. {% include ref class="TFile" %}) are conditionally thread safe, and `gROOT` is thread safe.
