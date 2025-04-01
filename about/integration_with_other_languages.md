---
layout: single
title: Integration with other languages
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

ROOT is written in C++ but is integrated with other languages such as Python and R.

## Python
The ROOT Python interface and bindings are provided through an extension module that
allows the user to interact with any ROOT class from the Python interpreter. This is
done generically using the ROOT dictionary, therefore there is no need to generate
any Python wrapper code to include new ROOT classes. At the same time ROOT offers
the possibility to execute and evaluate any Python command or start a Python shell
from the ROOT/Cling prompt. Further details are available in the
[Python interface manual]({{ "/manual/python" | relative_url }}). One of the most
powerful features of ROOT's Python interface is that bindings are created automatically
for every entity present in the ROOT type system. In other words, even if a header is
interpreted at runtime, Python bindings will be created automatically.

## R
The interface to R, ROOT R, is an interface allowing to call R functions using an R
C++ interface. It allows to translate some datatypes from C++ to R inside the R
environment and vice versa in an easy way to get the most from both R and ROOT.
With this tool, the user cam tacke advantage of any existing library or R package.
ROOT R also provides a R events processing system, which allows to use the R graphical
system from C++.
