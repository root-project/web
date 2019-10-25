---
title:  "Commandline tools for ROOT files inspection, modification and automated plotting"
layout: posts
author: Danilo Piparo
---

Create a unix-like set of Python command line tools to explore, modify and display the content of ROOT files.

One of the more powerful features of ROOT is the one to allow to store in ROOT files C++ objects created starting from ROOT or user classes. While the exploration of ROOT files is guaranteed by the ROOT C++ api, simple and general command line tools to explore their content are missing and systematically re-programmed by users driven by very specific use cases. This situation clearly needs improvement.
This project deliverables are:

1. A set of Python command line tools which allows to explore the content of ROOT files. The product will take into account the fs-like logical organisation of the content. A collection of "pretty-printers" will be provided to dump on terminal the most relevant content of the most used ROOT classes, such as histograms, graphs, trees and functions.
2. A Python command line tool to produce elegant plots automatically starting from graphs and histograms present in a ROOT file, providing the possibility to select via regular expressions a subset of objects to draw. In addition, it is a requirement that identically/similarly structured files can be treated simultaneously for the comparison of the objects they contain. Statistical tests could be taken into account to quantify the compatibility of the corresponding histograms.

### General Guidelines

+ The code of the scripts will be developed against the ROOT master.
+ The code must be testable by design. Every feature is to be tested thoroughly, using both the python unittest framework and a series of *integration* tests using CTest. For this latter category, examples could be a series of command-lines acting on reference rootfiles with an expected output.