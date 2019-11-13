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
When an object is drawn, you can interact with it.

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


{% include figure_jsroot
   file="graphics_canvas.root" canvas="c1" width="500px" height="350px"
   caption="Canvas (point the bottom left light blue square or right-click
   on the image to interact with the object)."
%}

## Canvas and pad

A canvas ([TCanvas](https://root.cern/doc/master/classTCanvas.html)) is a graphical entity that contains graphical objects that are called pads ([TPad](https://root.cern.ch/doc/master/classTPad.html)). A pad is a graphical container that contains other graphical objects like histograms and arrows. It also can contain other pads, called sub-pads. When an object is drawn, it is always in the so-called active pad.

### Accessing the active pad

- Use the global variable `gPad`, to access the active pad.

For more information on global variables, → see [ROOT classes, data types and global variables]({{ '/Manual/root_classes_data_types_and_global_variables' | relative_url }})

_**Example**_

If you want to change the fill color of the active pad to blue, but you do not know the name of the active pad, you can use `gPad`.

```
gPad->SetFillColor(38)
```

### Accessing an object in an active pad

- Use the [TPad::GetPrimitive(const char* name)](https://root.cern/doc/master/classTPad.html#af757a87208deb609e0b0d29e6edfaf94) method to access an object in an active pad.

_**Example**_

```
root[] obj = gPad->GetPrimitive("myobjectname")
(class TObject*)0x1063cba8
```

A pointer to the object `myobjectname` is returned and put into the `obj` variable.<br>
The type of the returned pointer is a `TObject*` that has a name.

### Hiding an object in a pad

You can hide an object in a pad by removing it from the list of objects owned by that pad.

- Use the [TPad::GetListOfPrimitives()](https://root.cern/doc/master/classTPad.html#a2bf11bfddaa3f25ae259c3d55203f0f4) method to list is accessible objects of a pad.

- Use the `Remove()` method to remove the object from the list.

_**Example**_

First, a pointer to the object is needed.<br>
Second, a point to the list of objects owned by the pad is needed.<br>
Then you can remove the object from the list, i.e. pad.<br>
The object disappears as soon as the pas is updated.

```
root[1] obj = gPad->GetPrimitive("myobjectname")
root[2] li = gPad->GetListOfPrimitives()
root[3] li->Remove(obj)
```

### Updating a pad

For performance reasons, a pad is not updated with every change. Instead, the pad has a “bit-modified” that triggers a redraw.<br>
The “bit-modified” is automatically set by:

- touching the pad with the mouse, for example by resizing it with the mouse,

- finishing the execution of a script,

- Adding or modifying primitives, for example the name and title of an object.

You can set the “bit-modified” by using the `Modified()` method.

_**Example**_

```
// The pad has changed.
root[] pad1->Modified()
// Recursively updating all modified pads:
root[] c1->Update()
```

A subsequent call to [TCanvas::Update()](https://root.cern/doc/master/classTCanvas.html#a83bb3270c4e4cd4250730d5586ceebd6) scans the list of sub-pads and repaints the pads.

### Dividing a pad into sub-pads

To draw multiple objects on a canvas ([TCanvas](https://root.cern/doc/master/classTCanvas.html)), you can divide pad ([TPad](https://root.cern.ch/doc/master/classTPad.html)) into sub-pads.<br>
There are two ways to divide a pad into sub-pads:

- building pad objects and draw them into a parent pad,

- automatically divide a pad into horizontal and vertical sub-pads.

#### Creating a single sub-pad

To build sub-pads in a pad, you must indicate the size and the position of the sub-pads.

_**Example**_

A sub-pad is to be built into the active pad (pointed by `gPad`). First, the sub-pad is build the the TPad [TPad](https://root.cern.ch/doc/master/classTPad.html) constructor.

```
root[] spad1 = new TPad("spad1","The first subpad",.1,.1,.5,.5)
```
The NDC (Normalized Coordinate System) coordinates are specified for the lower left point `(0.1, 0.1)` and for the upper right point `(0.5, 0.5)`.<br>
Then the sub-pad is drawn.

```
root[] spad1->Draw()
```

For building more sub-pads, repeat this procedure as many times as necessary.

#### Dividing a pad into sub-pads

- Use the [TPad::Divide()](https://root.cern/doc/master/classTPad.html#a064b8ae1d12a9be393c0e22c5958cc7c) method to divide a pad into sub-pads.

