---
title: Thread safetiness
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT classes support one of the following thread-safety levels:

- Thread unsafe: objects must not be used concurrently by different thread, even if objects are not shared among threads.

- Conditionally thread safe: objects can be used safe by multiple threads concurrently as long as mutiple threads do not share the same object (i.e. every thread has a private copy of the objects).  In addition, objects can be shared among threads as long as all threads use only `const` methods of the shared objects.

- Thread safe: objects can safely be shared and used concurrently by multiple threads.

Unless otherwise stated, classes starting with `R` (e.g. `RDataFrame`) are conditionally thread safe.
Classes starting with `T` (e.g. `TDirectory`) are thread unsafe.

_**Examples**_

TODO
