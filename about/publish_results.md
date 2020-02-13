---
layout: single
title: Publish Results
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

Results can be visualized with histograms, scatter plots or fitting functions. ROOT
graphics may be adjusted real-time by a few mouse clicks.  High-quality plots can be
saved as PDF or in other formats.  In addition to plots showing histograms (from 1 to 3
dimensions) and fits, ROOT graphics classes also provide all widgets that can be used
to build a graphical user interface. For each graphical object displayed by ROOT, the
user may decide to change settings via the graphical editor, that also allows to save
the result in the form of a ROOT macro. Finally, a graphical browser is provided to
access all user and ROOT objects.

## Making Plots
The final step of data processing is usually the production of graphics showing different
aspects of the result.  The most widely used plots in the physics community involve a
combination of histograms and functions, but graphs of different kinds are also
available.  The graphical result is displayed inside a ROOT "canvas", that is a graphical
window or some part of it.  The result can contain one or more "pads" (that are
independent sub-canvases) and can be saved into a number of different formats.

First, because a canvas is a ROOT object, it can be saved into a ROOT file as any other
ROOT object (or user class inheriting from the common base ROOT class).  However, it is
also possible to automatically generate and save the C++ code that would produce the
same result.  Both ways allow the user to save his work and start again from the same
point to make further changes.

Second, to include the result in a paper, presentation or web site, it is necessary to
convert the canvas into one of the common graphical formats.  ROOT allows the user to
export both to bitmap graphics, as PNG or JPEG, and to vector graphics, as Encapsulated
PostScript or PDF.  The former choice is usually better for web pages or presentations,
while vector graphics can be used to produce high-quality print-outs as a poster or
press-quality publication.

## Histograms
The ROOT framework provides 1D, 2D and 3D histograms. While 3D histograms are very
seldom used, 1D and 2D histograms are the daily food for all physicists.  The user
may plot one histogram in linear or logarithmic scale (independently on each axis),
superimpose different histograms, or perform histogram operations like bin-wise sum or
division.  ROOT histograms can be interactively changed once they have been plot into a
canvas.  3D views can be even rotated with the mouse!

Graphical settings, as line color and thickness for each component (the axes, the ticks,
the labels and so on), can be changed either in the code or interactively, and the
changes are kept by the histogram (but the same is true also for functions and graphs).
A number of plotting options are available for the user, covering practically all
different use cases.

## Graphics Examples
High Energy Physics publications feature advanced examples of ROOT graphics (see this
example coming from
[Nature](http://www.nature.com/nature/journal/v522/n7554/fig_tab/nature14474_F2.html){:target="_blank"}).
You can also take a tour to the [screenshots]({{'gallery' | relative_url}}) session of the site for more
images.
