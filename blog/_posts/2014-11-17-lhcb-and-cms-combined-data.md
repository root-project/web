---
title:  "LHCb and CMS combined data"
layout: archive
author:
---

{% include figure_image
   img="/assets/images/CMSLHCb_EDfig2_1_07c6b.png"
%}


This figure has been extracted from [this article](http://cds.cern.ch/record/1970675). We
will not comment the content of the write-up, but rather give some highlights of the
technologies used to obtain this plot!

  - A very rich statistical model had to be implemented for the final fit of the invariant
    mass of the B meson. [RooFit]({{ '/manual/roofit' | relative_url }}) provides all the
    building blocks for the modelling of the pdfs, errors and for the combination of the
    datasets.

  - Notice the units of the axes: ROOT allows you to specify Latex code for the description of the
    quantities plotted. In order to obtain an expressive plot, carrying a message about the
    measurement and the data analysis being carried out, it is fundamental to have the freedom
    to be extremely precise when it comes to axes!

  - Points for data, models for signal and background: clear and elegant line styles and colors
    are needed. The advanced graphics of ROOT provide all the building blocks to create a plot
    beautiful enough to end up on Nature. This is a rather technical remark but it is useful to
    underline how the [transparency](https://root.cern/doc/master/classTColor.html#C07) effect
    of the fill color of the two histograms can improve the clarity of the scientific result
    displayed by the plot.