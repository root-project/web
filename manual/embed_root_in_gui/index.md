---
title: How to embed ROOT in a GUI
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Introduction

In the past we [described](https://root-forum.cern.ch/t/how-to-embed-a-tcanvas-in-external-applications/28247) how to embed a [TCanvas](https://root.cern/doc/master/classTCanvas.html) in external applications, but this recipe might not work anymore, like for example with [Qt](https://www.qt.io/) on MacOS.

In this case we recommend to embed the new web-based widgets in [Qt](https://www.qt.io/) application using QWebEngine, as decribed in [this page](https://github.com/root-project/root/tree/master/tutorials/webgui/qt5web)

