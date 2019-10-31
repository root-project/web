---
title: Using the interactive C++ interpreter Cling
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT uses the interactive C++ interpreter Cling that is built on top of the
**L**ow **L**evel **V**irtual **M**achine ([LLVM]) and the [Clang libraries].
Cling provides command line prompt and a just-in-time (JIT) compiler for compilation.

> **Note**
>
> When using the interactive interpreter Cling, unlike to pure C++ language, no semicolon (;) is required at the end of the line.