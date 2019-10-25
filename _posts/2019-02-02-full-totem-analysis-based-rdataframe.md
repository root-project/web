---
title:  "Full Totem Analysis based on RDataFrame and distributed on a big Spark cluster with PyRDF!"
layout: posts
author:
---

Milosz Blaszkiewicz and Aleksandra Mnich (AGH University of Science and Technology - Poland)
wanted to evaluate a set of Big Data tools for the analysis of the data from the TOTEM experiment
which will enable interactive or semi-interactive work with large amounts of data. They ended up
re-implementing a full Totem analysis in a declarative fashion using
[RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) and distributing
their calculations over a big Spark cluster with
[PyRDF](https://github.com/shravan97/PyRDF).
Check it out [on CDS](https://cds.cern.ch/record/2655457)!

<center>
<img src="{{'/assets/images/Full_Totem_Analysis_based_on_RDataFrame.png' | relative_url}}">
</center>