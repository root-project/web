---
title: "Wanted: Storage of HEP data via key/value storage solutions"
summary: Interface the ROOT I/O to key/value stores.
layout: single
author: Danilo Piparo
state:

sidebar:
  nav: "contribute"
---

The processing of the data acquired by the LHC experiments proved to be extremely demanding
during the data-taking period featuring a centre of mass energy of 7 TeV. The requirements
in terms of computing resources will increase during LHC Season 2 following upgrades to the
accelerator and the detectors. However, the funding for the computing infrastructure will
not scale accordingly.

These circumstances pose exciting challenges, for example in the areas of scientific software
performance and data storage solutions: the quest for the evolution of the current, successful
HEP software stack targeting the exploitation of new hardware architectures will continue.
This R&D line relates to the experiments' data I/O and aims to explore the interplay between
the ROOT* tool-kit and novel data-storage solutions based on a key/value mechanism, for
instance Seagate’s Kinetic technology.

ROOT is a C++ data visualisation, analysis and storage tool-kit extremely widely used in
HEP. Its I/O subsystem is unique: it enables users to serialise on disk, both in a row-wise
and column-wise fashion, any C++ data structure. This solution is powerful and versatile:
hundreds of petabytes of LHC collisions data have been written in ROOT format.

However, presently, ROOT can write only on files. In the context of this work, explorations
will be carried out with the goal of overcoming this limitation. During a first phase, the
storage of specific objects, histograms and graphs, will be considered: these entities are
indeed fundamental for the continuous data quality monitoring and software validation
efforts of all particle physics experiments. Benchmarks based on real-life use cases will
be performed against existing and well-established technologies, such as the DQM Gui of the
CMS experiment.

 During a second phase, investigations and prototyping will be carried out in order to
 replace the existing POSIX layer of the ROOT I/O with a set of more flexible interfaces
 that are compliant with a key-/value-storage approach. The work plan can be formulated
 in a rather modular way in order to be flexible with respect to academic time scales.
