---
title: Cling In Brief
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

The C++ interactive interpreter `cling` is based on <a href="http://llvm.org/">`LLVM`</a>
and its C++ frontend <a href="http://clang.llvm.org/">`clang`</a>.
It has replaced ROOT's C++ interpreter <a href="introduction-cint.html">CINT</a>.
Its main advantages:

  - Production-grade parser.
  - Just-in-time compiler (_JIT_), allowing e.g. calls into libraries without wrappers.
  - Modular C++ API from the ground up.
  - Separate parser and execution engine.
  - C++ 11... support through clang.

We have announced cling to the public in 2011. cling is in production use by CERN; bugs should be reported to the ROOT project <a href="https://root.cern.ch/bugs">here</a>.
We offer <a href="https://root.cern.ch/download/cling/">binary snapshots for download</a>.
There are <a href="cling-build-instructions.html">build instructions</a>, both for a stand-alone version of `cling` and for `cling` as part of ROOT.
We even have <a href="http://cling.web.cern.ch/cling/doxygen/">doxygen documentation</a> of cling's code.
