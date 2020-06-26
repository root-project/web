---
title: Make PyROOT more pythonic
summary: Add pythonizations for ROOT classes, which make it easier to use ROOT from Python.
layout: single
author: Enric Tejedor
state:

sidebar:
  nav: "contribute"
---

ROOT's Python bindings, called [PyROOT]({{'manual/python' | relative_url}}), allow to access all the ROOT C++ functionality
from Python.

In order to make it easier to use ROOT from Python, or to use a more pythonic syntax, PyROOT provides many pythonizations
for ROOT classes. A pythonization is a piece of code that injects some new behaviour in a ROOT class, e.g. to add new methods,
to make the class iterable from Python or to override arithmetic operators. Pythonizations can be implemented in Python or in C++
(via the Python C/API).

[Here](https://github.com/root-project/root/tree/master/bindings/pyroot/pythonizations/python/ROOT/pythonization) you can
find the code for the current ROOT pythonizations. For example,
[this pythonization](https://github.com/root-project/root/blob/d1d035e17b9b8dd97bcd146dd6e0c84a0d1aa4a1/bindings/pyroot/pythonizations/python/ROOT/pythonization/_tseqcollection.py#L257-L259)
is adding Python item access methods to `TSeqCollection`, more precisely by defining a pythonizor function, decorated
with `@pythonization`, which injects the new methods in the class.

If you have an idea for a new pythonization that you think would be useful and need some guidance to write it,
please let us know!

## Expected Results
Addition of new pythonizations: code that injects new behaviour in ROOT classes when used from Python via PyROOT.

## Requirements
Good Python knowledge. Familiarity with the Python/C API is necessary if the pythonization is to be implemented in C++.
