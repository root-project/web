---
title: Transform GNU-makefile tests to CMake
summary: ROOT's test suite has several crucial tests that still try on GNU-Makefile. We need to integrate them with CMake.
layout: single
author: Axel Naumann
state:

sidebar:
  nav: "contribute"
---

ROOT's main test suite [roottest](https://github.com/root-project/roottest/) has several tests that still use GNU-Makefiles.
For Windows, to ease maintenance, and to get rid of a legacy tool called `rmkdepend` we need to transform them to CMake.
Start with a simple one, e.g. [`root/tree/string/Makefile`](https://github.com/root-project/roottest/blob/master/root/tree/string/Makefile)!

## Expected Results
Less GNU-Makefiles, more consistent / complete CMake-based setup.

## Requirements
Basic CMake and GNU make knowledge; there is nothing ROOT specific.
