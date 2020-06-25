---
title: Improve ROOT's build system
summary: Several small-ish build system features could improve ROOT
layout: single
author: Axel Naumann
state:

sidebar:
  nav: "contribute"
---

## Header completeness

Any header should be self-contained: one should be able to `#include` it without `#including` anything else before,
Sometimes this slips through, and we end up with a header that can only be compiled in some context.
It would be great to have a new build target (likely per module) that compiles a generated `.cxx` file which only `#include`s one header, nothing else.
We could run that target as part of our test suite or nightly builds.

## Expected Results
* Standalone headers: better code!

## Requirements
Basic C++ knowledge.
