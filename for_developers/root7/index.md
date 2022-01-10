---
title: ROOT 7
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

For the first time since 20 year (i.e. ever), the ROOT team plans to introduce backward incompatible changes for crucial interfaces.
ROOT won't actually *break* backward compatibility: old interfaces will simply stay frozen.
You will need to migrate your code to those new interfaces to benefit from their new features.
This new major version of ROOT will make ROOT much simpler and safer to use: we want to increase clarity and usability.

The ROOT team will be releasing parts of ROOT 7 throughout the coming years.
Previews will gradually sneak into the ROOT sources, in the `namespace ROOT::Experimental` for those parts that are not yet cast in stone, and in the `namespace ROOT` for those that are.
We will use standard C++ types, standard interface behavior (e.g. with respect to ownership and thread safety), good documentation and tests.

## Building ROOT 7
### Pre-requisites
Support for the c++17 standard is required. Usage of g++ >= 7 or clang >= 5 is recommended.
### Relevant cmake variables
ROOT 7 will be built if at least one of these conditions is satisfied:
- the `CMAKE_CXX_STANDARD` cmake variable is set to at least `17`
- the `root7` cmake variable is set to `ON`

Building from source would look similar to this:

    $ mkdir root7_build
    $ cd root7_build
    $ cmake -DCMAKE_CXX_STANDARD=17 path/to/root/source
    $ cmake --build . -- -j4

## ROOT 7 Features

ROOT's new interface personality is already in production with [`ROOT::RDataFrame`](https://root.cern/doc/master/classROOT_1_1RDataFrame.html).
Next up is the `TTree` successor [`ROOT::Experimental::RNTuple`](https://root.cern/doc/master/structROOT_1_1Experimental_1_1RNTuple.html).

Still in the design phase are ROOT's new graphics and histogram packages, with tutorials such as 
for [ROOT 7 graphics](https://github.com/root-project/root/tree/master/tutorials/rcanvas),
for [histograms and ntuple](https://github.com/root-project/root/tree/master/tutorials/v7),
and specifically for [drawing and styling the new histograms](https://github.com/root-project/root/blob/master/tutorials/rcanvas/rh1.cxx).
