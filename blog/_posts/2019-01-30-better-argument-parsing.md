---
title:  "Better argument parsing"
layout: archive
author: Axel Naumann
---

Use a C++ command line argument library for defining and parsing ROOT's options.

ROOT's binaries understand a mixture of short and long arguments. The parsing is done in C++,
with ad hoc C++ code. We would like to switch to a C++ command line argument library.
This would imply implementing ROOT's options (e.g. in `TApplication.cxx` and `rootcling_impl.cxx`)
using that library.

## Expected Results
* ROOT's command line arguments are parsed with a C++ library; we can combine arguments:
`root -lbq tutorials/hsimple.C`

## Requirements
Basic C++ knowledge; there is nothing ROOT specific.

