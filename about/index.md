---
layout: single
title: About ROOT
sidebar:
  nav: "about"
---

ROOT is a framework for data processing, born at CERN, at the heart of the research
on high-energy physics. Every day, thousands of physicists use ROOT applications
to analyze their data or to perform simulations. With ROOT you can:

  - [Save data](save_data) You can save your data (and any C++ object) in a compressed binary form
in a ROOT file. The object format is also saved in the same file: the ROOT files
are self-descriptive. Even in the case the source files describing the data model
are not available, the information contained in a ROOT file is be always readable.
ROOT provides a data structure, the tree, that is extremely powerful for fast access
of huge amounts of data - orders of magnitude faster than accessing a normal file.

  - [Access data](access_data) Data saved into one or several ROOT files can be accessed from your PC,
from the web and from large-scale file delivery systems used e.g. in the GRID.
ROOT trees spread over several files can be chained and accessed as a unique object,
allowing for loops over huge amounts of data.

  - [Mine data](mine_data) Powerful mathematical and statistical tools are provided to operate on
your data. The full power of a C++ application and of parallel processing is
available for any kind of data manipulation. Data can also be generated following
any statistical distribution and modeled, making it possible to simulate complex
systems.

  - [Publish results](publish_results) Results can be displayed with histograms, scatter plots, fitting
functions. ROOT graphics may be adjusted real-time by few mouse clicks. Publication-
quality figures can be saved in PDF or other formats.

  - [Run interactively or build your own application](interactive_or_built_applications) You can use the Cling C++ interpreter
for your interactive sessions and to write macros, or you can compile your program
to run at full speed. In both cases, you can also create a graphical user interface.

  - [Use ROOT within other languages](integration_with_other_languages) ROOT provides a set of bindings in order to seamlessly
integrate with existing languages such as Python, R and Mathematica.
