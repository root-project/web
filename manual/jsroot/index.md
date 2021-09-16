---
title: JSROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Introduction

JavaScript ROOT (JSROOT) provides interactive graphics in the web browsers for most of the ROOT classes like histograms ([TH1](https://root.cern/doc/master/classTH1.html)/[TH2](https://root.cern/doc/master/classTH2.html)/[TH3](https://root.cern/doc/master/classTH3.html)), graphs ([TGraph](https://root.cern/doc/master/classTGraph.html)), functions ([TF1](https://root.cern/doc/master/classTF1.html)) and many others. Reading of binary and JSON ROOT files is supported.

The flexible and powerful [JSROOT API](https://root.cern/js/latest/api.htm) used in different web-based applications to implement interactive display of user data - [CERNBox](https://swan.docs.cern.ch/intro/cernbox/), [iPython notebooks](https://ipython.org/notebook.html), [THttpServer](https://root.cern/doc/master/classTHttpServer.html) UI and many others.

The JSROOT code, documentation, and many examples can be found on the [JSROOT website](https://root.cern/js/),
with many [examples](https://root.cern/js/latest/examples.htm).
Its source code repository is [in GitHub](https://github.com/root-project/jsroot/) and there is also a
[reference guide](https://root.cern/js/latest/jsdoc/JSROOT.html).

## Users's Guide

The [JSROOT user's guide] (https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md) describes its [installation](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#installing-jsroot),
how to [draw objects in JSROOT](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#drawing-objects-in-jsroot),
gives a list of [supported classes](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#supported-root-classes-by-jsroot)  with many examples, and more advanced techniques like [superimposing objects](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#superimposing-draw-objects) and displaying [TTree](https://root.cern/doc/master/classTTree.html) data using the [TTree::Draw syntax](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#ttree-draw)
There is also a chapter about the [Geometry viewer](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#geometry-viewer) and more.

## Interactive Graphics

Here is a couple of *interactive* examples you can also find in the [main JSROOT website](https://root.cern/js/)

{% include figure_jsroot
   file="rf107.root" object="rf107_plotstyles" width="500px" height="350px"
   caption="Roofit canvas with different plot styles"
%}

{% include figure_jsroot
   file="rootgeom.root" object="simple1" width="500px" height="350px"
   caption="3D ROOT geometry"
%}

## JSROOT & OpenUI5 GUI

In the [JSROOT user's guide](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md), there is also a [short introduction](https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#use-with-openui5) on using JSROOT with [OpenUI5](https://openui5.org/) to create interactive Web based GUI. [OpenUI5](https://openui5.org/) is a web toolkit for developers to ease and speed up the development of full-blown HTML5 web applications. You can find its impressive list of controls [here](https://openui5.hana.ondemand.com/controls)

The association of JSROOT and OpenUI5 allowed us to create the new web based [RCanvas](https://root.cern/doc/master/classROOT_1_1Experimental_1_1RCanvas.html) and [RBrowser](https://root.cern/doc/master/classROOT_1_1Experimental_1_1RBrowser.html) classes.

{% include figure_image
   img="rcanvas.png"
   caption="The new, web based RCanvas."
%}

{% include figure_image
   img="rcanvas_editor.png"
   caption="The RCanvas with its graphics editor."
%}

{% include figure_image
   img="rbrowser.png"
   caption="The new, web based RBrowser."
%}


