---
title: "Wanted: A tool to 'warn' user of inefficient (for I/O) construct in data model"
summary: A tool to 'warn' user of inefficient (for I/O) construct in data model
layout: single
author: Danilo Piparo
state:

sidebar:
  nav: "contribute"
---

ROOT includes a extensive, flexible, and performant framework to automatically serialize
C++ objects into a platform independent binary format.  One the major strength of this
framework is the ability to support almost all C++ constructs.  The downside of this
flexibility is that the user has the choice can select for a very wide ranges of constructs
and schemas which have very different I/O performance characteristics.   Some of the
recommendations for design an I/O efficient data schema are straightforward, for example
it is better to use a sorted vector of pair than a map, and some are much more complex,
like the effect of deeper class hierarchy or the order of data members.   Creating a tool
that can analyze a given data model and give clear recommendation on how to improve its
performance would be very beneficial and improve the productivity of data model designers.

## Expected Results
* Implement prototype scanning a user data model and giving simple recommendation.
* Review and expand the list of recommendation to improve I/O efficiency.

## Requirements
Strong C++ skills, knowledge in the field of Physics and HEP computation and/or experience
with ROOT are certainly a plus.