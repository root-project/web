---
title: Graphics
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The basic whiteboard on which an object is drawn is called in ROOT a canvas (class [TCanvas](https://root.cern/doc/master/classTCanvas.html)). A canvas is an area mapped to a window directly under the control of the display manager.<br>

A canvas contains one or more independent graphical areas: the pads (class [TPad](https://root.cern.ch/doc/master/classTPad.html)). A pad is graphical entity that contains graphical objects. A pad can contain other pads (unlimited pad hierarchy). A pad is a linked list of primitives of any type (graphs, histograms, shapes, tracks, etc.).

Adding an element to a pad is done by the `Draw()` method of each class.

Painting a pad is done by the `Paint()` method of each object in the list of primitives.

## Graphic classes

ROOT provides the following classes for graphics, among others:

- [TCanvas](https://root.cern/doc/master/classTCanvas.html)

- [TPad](https://root.cern.ch/doc/master/classTPad.html)

### Working with graphics

....

#### Drawing objects

The [TObject](https://root.cern/doc/master/classTObject.html) class has the virtual method `Draw()` by which objects can be "drawn".
The object is "drawn" on a canvas ([TCanvas](https://root.cern/doc/master/classTCanvas.html) class) that contain one or more pads ([TPad](https://root.cern.ch/doc/master/classTPad.html) class).

- Use the Draw() method to draw an object.

```
object.Draw()
```

_**Example**_

A one-dimensional sine function shall be drawn.

Use the [TF1](https://root.cern/doc/master/classTF1.html) class to create an object that is a one-dimensional function defined between a lower and upper limit.

```
TF1 f1("func1","sin(x)",0,10)
f1.Draw()
```
A canvas is displayed.

<center><div id="c1" style="width:500px; height:350px"></div></center>
<script src="https://root.cern/js/dev/scripts/JSRootCore.js" type="text/javascript"></script>
<script type='text/javascript'> JSROOT.OpenFile("./graphics_canvas.root", function(file) {
file.ReadObject("c1", function(obj) {JSROOT.draw("c1", obj, "");});});</script>

*Figure: Canvas (right-click on the image to interact with the object).*