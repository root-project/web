---
title: Cling In Brief
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

The C++ interactive interpreter `cling` is based on [`LLVM`](https://llvm.org/)
and its C++ frontend [`clang`](https://clang.llvm.org/).
It has replaced ROOT's C++ interpreter CINT.
Its main advantages:

  - Production-grade parser.
  - Just-in-time compiler (_JIT_), allowing e.g. calls into libraries without wrappers.
  - Modular C++ API from the ground up.
  - Separate parser and execution engine.
  - C++ 11... support through clang.

We have announced cling to the public in 2011. cling is in production use by CERN; bugs
should be reported to the ROOT project [](https://root.cern.ch/bugs)here.
We offer [binary snapshots for download](https://root.cern.ch/download/cling/).
There are [build instructions]({{cling_build_instructions | relative_url_}}), both for a stand-alone
version of `cling` and for `cling` as part of ROOT.
We even have [doxygen documentation](https://cling.web.cern.ch/cling/doxygen/) of cling's
code.
