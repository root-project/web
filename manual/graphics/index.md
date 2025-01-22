---
title: Graphics
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides powerful graphics capabilities for displaying and interacting with graphical object like plots, histograms, 2D and 3D
graphical objects, etc. Here the basic functions and principles are presented, which can be applied to graphs (→ see [Graphs]({{ '/manual/graphs' | relative_url }})) and histograms (→ see [Histograms]({{ '/manual/histograms' | relative_url }})).

The basic whiteboard on which an object is drawn is called in ROOT a canvas
(class {% include ref class="TCanvas" %}). A canvas is an area mapped to a window directly
under the control of the display manager.<br>

A canvas contains one or more independent graphical areas: the pads
(class {% include ref class="TPad" %}). A pad is graphical entity that contains graphical
objects. A pad can contain other pads (unlimited pad hierarchy). A pad is a linked list of
primitives of any type (graphs, histograms, shapes, tracks, etc.).

Adding an element to a pad is done by the `Draw()` method of each class.

Painting a pad is done by the automatic call to `Paint()` method of each object in the list of primitives.

{% include tutorials name="Graphics" url="graphics" %}

## Graphic classes

ROOT provides [numerous graphic classes](https://root.cern/doc/master/group__Graphics.html), of which the following are among the most used:

- {% include ref class="TCanvas" %}

- {% include ref class="TPad" %}

## Working with graphics

ROOT offers many possibilities to work with graphics, for example:

- [drawing objects](#drawing-objects)
- [drawing objects with special characters in its name](#drawing-objects-with-special-characters-in-its-name)
- [using the context menu for manipulating objects](#using-the-context-menu-for-manipulating-objects)
- [using the Graphics Editor for objects](#using-the-graphics-editor-for-objects)

### Drawing objects

Most of the ROOT classes have a `Draw()` method by which they can be "drawn" on a canvas
({% include ref class="TCanvas" %} class) that contain one or more pads
({% include ref class="TPad" %} class). When an object is drawn, you can interact with it.

- Use the `Draw()` method to draw an object.

{% highlight C++ %}
   object.Draw()
{% endhighlight %}

_**Example**_

A one-dimensional sine function shall be drawn.

Use the {% include ref class="TF1" %} class to create an object that is a one-dimensional
function defined between a lower and upper limit.

{% highlight C++ %}
   TF1 f1("func1","sin(x)",0,10)
   f1.Draw()
{% endhighlight %}

The function is displayed in a canvas.

{% include figure_jsroot
   file="graphics.root" object="func1" width="500px" height="350px"
   caption="Canvas (point to the bottom left light blue square or right-click
   on the image to interact with the object)."
%}

### Using the context menu for manipulating objects

Right-click on the function to display the context menu.

{% include figure_image
   img="context-menu.png"
   caption="Context menu for manipulating objects."
%}

Here you can change many properties of the object like title, name, range, line and fill attributes etc. For example, you can change the range by clicking `SetRange`.

{% include figure_image
   img="set-range.png"
   caption="SetRange dialog window."
%}

Select a range, for example 5, 25.

{% include figure_image
   img="new-range.png"
   caption="Range 5, 25 for sin(x)."
%}

### Using the Graphics Editor for objects

You can edit an existing object in a canvas by right-clicking the object or by using the Graphics Editor.

- Click **View** and then select **Editor**.

{% include figure_image
   img="editor.png"
   caption="Editor for setting attributes interactively."
%}

You can draw and edit basic primitives starting from an empty canvas or on top of a picture. There is a toolbar that you can use to draw objects.

- Click **View** and then select **Toolbar**.

{% include figure_image
   img="toolbar.png"
   caption="Toolbar providing more options."
%}


## Graphical objects

This section lists some of the graphical objects that ROOT provides. Usually,
one defines these graphical objects with their constructor and draws them with their `Draw()`
method:

- _Lines_: Use {% include ref class="TLine" %} to create a line.
- _Arrows_: Use {% include ref class="TArrow" %} to create an arrow.
- _Polylines_: Use {% include ref class="TPolyLine" %} to create a polyline.
- _Ellipses_: Use {% include ref class="TEllipse" %} to create an ellipse.
- _Rectangles_: Use {% include ref class="TBox" %} or {% include ref class="TWbox" %} to create a rectangle.
- _Markers_: Use {% include ref class="TMarker" %} to create a marker.
- _Curly lines and arcs_: Use {% include ref class="TCurlyLine" %} and {% include ref class="TCurlyArc" %} to create curly lines and arcs for Feynman diagrams.
- _Text and Latex_: Use {% include ref class="TText" %} to draw simple text. {% include ref class="TLatex" %} for complex text like mathematical formulas. Text can be embedded in a box using {% include ref class="TPaveLabel" %}, {% include ref class="TPaveText" %} and {% include ref class="TPavesText" %}.
- and [_more ..._](https://root.cern/doc/master/group__BasicGraphics.html)


## Colors and color palettes

Colors are managed by the class {% include ref class="TColor" %}. A color is defined by its
RGB or HLS components. It can be accessed via an
[index](https://root.cern/doc/master/classTColor.html#C00) or
[by name ](https://root.cern/doc/master/classTColor.html#C02) for the predefined colors.
Colors can be grouped in [palettes](https://root.cern/doc/master/classTColor.html#C05). More
than 60 [High quality palettes](https://root.cern/doc/master/classTColor.html#C06) are predefined.
Color can also be [transparent](https://root.cern/doc/master/classTColor.html#C07).


## Graphical objects attributes and styles

There are the following classes for changing the attributes of graphical objects:

- [TAttFill](https://root.cern/doc/master/classTAttFill.html){:target="_blank"} : Used for filling an area with color and a style.

- [TAttLine](https://root.cern/doc/master/classTAttLine.html){:target="_blank"} : Used for setting the color, width and style of a line.

- [TAttMarker](https://root.cern/doc/master/classTAttMarker.html){:target="_blank"} : Used for setting the color, size and style for a marker.

- [TAttText](https://root.cern/doc/master/classTAttText.html){:target="_blank"} : Used for setting text attributes like alignment, angle, color, size and  font.

### Creating and modifying a style

When objects are created, their default attributes (taken from {% include ref class="TAttFill" %}, {% include ref class="TAttLine" %}, {% include ref class="TAttMarker" %}, {% include ref class="TAttText" %})
are taken from the current style. The current style is
an object of the {% include ref class="TStyle" %} class and can be referenced via the global
variable `gStyle` (→ see [ROOT classes, data types and global variables]({{ '/manual/root_architecture_and_components/#global-root-variables' | relative_url }})).

ROOT provides [several predefined styles](https://root.cern/doc/master/classTStyle.html#ae160d96e47e9507bbd220241f1a04602).
Among them:  `Classic`, `Plain` or `Modern` (used when ROOT starts).

#### Setting the current style

- Use the `SetStyle()` method, to set the current style.

{% highlight C++ %}
   gROOT->SetStyle("Plain"); // Set the current style to "Plain"
{% endhighlight %}

You can get a pointer to an existing style with:

{% highlight C++ %}
   auto style = gROOT->GetStyle("Classic"); // Get a pointer to the "Classic" style.
{% endhighlight %}

> **Note**
>
> When an object is created, its attributes are taken from the current style. For example,
> you may have created an histogram in a previous session and saved it in a ROOT file. Meanwhile,
> if you have changed the style, the histogram will be drawn with the old attributes.
> You can force the current style attributes to be set when you read an object from a file by:
>
> `gROOT->ForceStyle();`


#### Creating additional styles

- Use the {% include ref class="TStyle" %} constructor to create additional styles.

{% highlight C++ %}
   auto st1 = new TStyle("st1","my style");
   st1->Set....
   st1->cd();  // This becomes now the current style.
{% endhighlight %}

#### Getting the attributes of the current style

You can force objects (in a canvas or pad) to get the attributes of the current style.

{% highlight C++ %}
   canvas->UseCurrentStyle();
{% endhighlight %}


## Axis

Axis are automatically built in by various high level objects such as histograms or graphs.
{% include ref class="TAxis" %} manages the axis and is referenced by {% include ref class="TH1" %} and {% include ref class="TGraph" %}.
To make a graphical representation of an histogram axis, {% include ref class="TAxis" %} references
the {% include ref class="TGaxis" %} class.

- Use the `GetXaxis()`, `GetYaxis()` or `GetZaxis()` methods to get the axis for an histogram or graph.

_**Example**_

{% highlight C++ %}
   auto axis = histo->GetXaxis();
{% endhighlight %}

### Setting the axis title

- Use the `SetTitle()` method to set the title of an axis.

_**Example**_

{% highlight C++ %}
   axis->SetTitle("My axis title");
{% endhighlight %}

If the axis is embedded into a histogram or a graph, you first have to extract the axis object.

_**Example**_

{% highlight C++ %}
   histo->GetXaxis()->SetTitle("My axis title")
{% endhighlight %}

### Setting axis attributes

The axis graphical attributes are managed via the class {% include ref class="TAttAxis" %}.

_**Example**_

{% highlight C++ %}
   auto axis = histo->GetXaxis();
   axis->SetLabelColor(kRed); // change the labels'color to red
{% endhighlight %}

### Setting the number of divisions

- Use the [`SetNdivisions`](https://root.cern/doc/master/classTAttAxis.html#ae3067b6d4218970d09418291cbd84084)
method to set the number of divisions for an axis.

_**Example**_

{% highlight C++ %}
   auto axis = histo->GetXaxis();
   axis->SetNdivisions(510); // Set 10 primary divisions and 5 secondary divisions.
{% endhighlight %}


### Labels tuning

Several [axis' attributes can be changed](https://root.cern/doc/master/classTGaxis.html#GA06).
For instance the [size](https://root.cern/doc/master/classTAttAxis.html#a59684f3441f945f1b2d4e6970ad3d1b5),
the [distance to the axis](https://root.cern/doc/master/classTAttAxis.html#a73c13dee8312d852b41f2234021e2ffc),
the [alignment](https://root.cern/doc/master/classTAxis.html#a0abc742bbcfc963863ab3668ce810cc6) etc ...

[SetMaxDigits()](https://root.cern/doc/master/classTAttAxis.html#aac05911a829616a11bb659f88a10cbad)
set the maximum number of digits permitted for the axis labels above which the notation
with $10^N$ is used.

Labels can also be tuning individually thanks to [ChangeLabel()](https://root.cern/doc/master/classTGaxis.html#GA10a).

### Setting the axis range

- Use [TAxis::SetRange()](https://root.cern/doc/master/classTAxis.html#aed523b084d6b3f24f6b1128d7810e199){:target="_blank"} or [TAxis::SetRangeUser()](https://root.cern/doc/master/classTAxis.html#ac85f8261dedc23bbe68f90afd196cdb8){:target="_blank"} to zoom the axis.

The `SetRange()` method parameters are bin numbers. For example if a histogram plots the
values from 0 to 500 and has 100 bins, `SetRange(0,10)` will cover the values 0 to 50.

The `SetRangeUser()` method parameters are user coordinates. If the start or end is in the
middle of a bin the resulting range is approximation. It finds the low edge bin for the
start and the high edge bin for the high.

For a general description see the ["How to set ranges on axis" FAQ](https://root-forum.cern/t/how-to-set-ranges-on-axis/28254).

### Setting time units for axis

Axis can be labeled with time and date. Such axis are called "Time axis". A detailed
description is given in the [TGaxis reference page](https://root.cern/doc/master/classTGaxis.html#GA14).

Basically three methods allow to manage such axis:

 1. `SetTimeDisplay()` to set an axis as a time axis.
 2. `SetTimeFormat()` to define the format used for time plotting.
 3. `SetTimeOffset()` to change the time offset.

_**Example**_

{% highlight C++ %}
{
   auto c = new TCanvas("c","Time on axis",0,0,600,400);

   // Create and fill some example histogram
   auto h = new TH1F("h","Time on X axis",30000,0.,20000.);
   for (Int_t i=1;i<30000;i++) {
      Float_t noise = gRandom->Gaus(0,120);
      h->SetBinContent(i,noise);
   }

   // Define the X axis as a "Time axis"
   TDatime dh(2001,9,23,15,00,00);     // Encode a date
   auto axis = h->GetXaxis();          // Retrieve the X axis
   axis->SetTimeDisplay(1);            // X axis will be a "Time axis"
   axis->SetTimeFormat("%d %b - %Hh"); // Define the format of the axis labels: day and hour
   axis->SetTimeOffset(dh.Convert());  // Set a proper offset

   h->Draw();
}
{% endhighlight %}

{% include figure_jsroot
   file="graphics.root" object="c" width="600px" height="400px"
   caption="A simple time axis with day and hour."
%}


### Drawing an axis independently of a graph or a histogram

- Use the {% include ref class="TGaxis" %} class to draw an axis
[independently of a graph or a histogram](https://root.cern/doc/master/hist055__Graphics__xyplot_8C.html).

This may be useful if you want to draw a
[supplementary axis](https://root.cern/doc/master/hist010__TH1__two__scales_8C.html) for a plot.


## Legends

A legend is almost always present on a plot. ROOT provides an easy to use tool allowing
a direct link between the legend drawn and the legended objects. Therefore, when one of the
object attributes is changed, the legend is automatically changed also.

- Use the {% include ref class="TLegend" %} class to add a legend to graph.

A {% include ref class="TLegend" %} is a panel with several entries ({% include ref class="TLegendEntry" %} class).

The method [BuildLegend](https://root.cern/doc/master/classTPad.html#a6eebfec5f3dbdb3cd656b26114db28fb)
automatically build a {% include ref class="TLegend" %} with all the objects present
in a {% include ref class="TPad" %}.

## Canvas and pad

A canvas ({% include ref class="TCanvas" %}) is a graphical entity that contains graphical objects that are called
pads ({% include ref class="TPad" %}). A pad is a graphical container that contains other graphical objects like histograms and arrows. It also can contain other pads, called sub-pads. When an object is drawn, it is always in the so-called active pad.

### Accessing the active pad

- Use the global variable `gPad` to access the active pad.

For more information on global variables, → see
[ROOT classes, data types and global variables]({{ '/manual/root_architecture_and_components/#global-root-variables' | relative_url }}).

_**Example**_

If you want to change the fill color of the active pad to blue, but you do not know the name of the active pad, you can use `gPad`.

{% highlight C++ %}
   gPad->SetFillColor(kBlue);
{% endhighlight %}

### Accessing an object in an active pad

- Use the [TPad::GetPrimitive(const char* name)](https://root.cern/doc/master/classTPad.html#adb7202cb06fa935fc61659ab58c0064d){:target="_blank"} method to access an object in an active pad.

_**Example**_

{% highlight C++ %}
   root [0] obj = gPad->GetPrimitive("myobjectname")
   (class TObject*)0x1063cba8
{% endhighlight %}

A pointer to the object `myobjectname` is returned and put into the `obj` variable.<br>
The type of the returned pointer is a `TObject*` that has a name.

### Hiding an object in a pad

You can hide an object in a pad by removing it from the list of objects owned by that pad.

- Use the [TPad::GetListOfPrimitives()](https://root.cern/doc/master/classTPad.html#a49b81164e3c006664bfefe3892077964){:target="_blank"} method to list is accessible objects of a pad.

- Use the `Remove()` method to remove the object from the list.

_**Example**_

First, a pointer to the object is needed.<br>
Second, a pointer to the list of objects owned by the pad is needed.<br>
Then you can remove the object from the list, i.e. pad.<br>
The object disappears as soon as the pad is updated.

{% highlight C++ %}
   root [1] obj = gPad->GetPrimitive("myobjectname")
   root [2] li = gPad->GetListOfPrimitives()
   root [3] li->Remove(obj)
{% endhighlight %}

### Updating a pad

For performance reasons, a pad is not updated with every change. Instead, the pad has a “bit-modified” that triggers a redraw.<br>
The “bit-modified” is automatically set by:

- touching the pad with the mouse, for example by resizing it with the mouse,

- finishing the execution of a script,

- adding or modifying primitives, for example the name and title of an object.

You can set the “bit-modified” by using the `Modified()` method.

_**Example**_

{% highlight C++ %}
// The pad has changed.
   root [0] pad1->Modified()

// Recursively updating all modified pads:
   root [1] c1->Update()
{% endhighlight %}

A subsequent call to [TCanvas::Update()](https://root.cern/doc/master/classTCanvas.html#a83bb3270c4e4cd4250730d5586ceebd6){:target="_blank"} scans the list of sub-pads and repaints the pads.

### Dividing a pad into sub-pads

To draw multiple objects on a
canvas ({% include ref class="TCanvas" %}), you can it into sub-pads ({% include ref class="TPad" %}).<br>
There are two ways to divide a pad into sub-pads:

- [building pad objects and draw them into a parent pad](#sub-pad),

- [automatically divide a pad into horizontal and vertical sub-pads](#divide).

<p><a name="sub-pad"></a></p>
**Creating a single sub-pad**

To build sub-pads in a pad, you must indicate the size and the position of the sub-pads.

_**Example**_

A sub-pad is to be built into the active pad (pointed by `gPad`). First, the sub-pad is
build using the {% include ref class="TPad" %} constructor.

{% highlight C++ %}
   root [0] auto spad1 = new TPad("spad1","The first subpad",.1,.1,.5,.5)
{% endhighlight %}

The NDC (normalized coordinate system) coordinates are specified for the lower left point `(0.1, 0.1)` and for the upper right point `(0.5, 0.5)`.<br>
Then the sub-pad is drawn.

{% highlight C++ %}
   root [0] spad1->Draw()
{% endhighlight %}

For building more sub-pads, repeat this procedure as many times as necessary.

<p><a name="divide"></a></p>
**Dividing a pad into sub-pads**

- Use the [TPad::Divide()](https://root.cern/doc/master/classTPad.html#a2714ddd7ba72d5def84edc1fbaea8658){:target="_blank"} method to divide a pad into sub-pads.

### Coordinate systems of a pad

For a {% include ref class="TPad" %} the following coordinate systems are available:
- [user coordinates](#user_coordinate_system)
- [normalized coordinates (NDC)](#ndc)
- [pixel coordinates](#pixel_coordinate_system)

You can convert from one system of coordinates to another.

<p><a name="user_coordinate_system"></a></p>
**User coordinate system**

Most methods of {% include ref class="TPad" %} use the user coordinate system, and all graphic primitives have their parameters defined in terms of user coordinates. By default, when an empty pad is drawn, the
user coordinates are set to a range from 0 to 1 starting at the lower left corner.

- Use the [TPad::range(float x1,float y1,float x2,float y2)](https://root.cern/doc/master/classTPad.html#a608b9c0c673c66bb5c8946955ec11098){:target="_blank"} method to set the user coordinate system.<br/>
The arguments `x1` and `x2` define the new range in the x direction, and `y1` and `y2` define the new range in the y direction.

_**Example**_

Both coordinates go from -100 to 100, with the center of the pad at (0,0).

{% highlight C++ %}
   root [0] TCanvas MyCanvas ("MyCanvas")
   root [1] gPad->Range(-100,-100,100,100)
   {% endhighlight %}

<p><a name="ndc"></a></p>
**Normalized coordinate system (NDC)**

Normalized coordinates are independent of the window size and of the user system. The coordinates range from 0 to 1 and (0, 0) correspond to the bottom-left corner of the pad.

<p><a name="pixel_coordinate_system"></a></p>
**Pixel coordinate system**

The pixel coordinate system is used by functions such as `DistanceToPrimitive()` and `ExecuteEvent()`. Its primary use is for cursor position, which is always given in pixel coordinates. If (`px`,`py`) is the
cursor position, `px=0` and `py=0` corresponds to the top-left corner of the pad, which is the standard convention in windowing systems.

<p><a name="convert"></a></p>
**Converting between coordinate systems**

{% include ref class="TPad" %} provides some methods to convert from one system of coordinates to another.

In the following table, a point is defined by:
- `(px,py)` in pixel coordinates,
- `(ux,uy)` in user coordinates,
- `(ndcx,ndcy)` in normalized coordinates,
- `(apx, apy)` in absolute pixel coordinates.

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Conversion</th>
      <th scope="col">Methods (from TPad)</th>
      <th scope="col">Returns</th>
    </tr>
    <tr>
      <td>NDC to pixel</td>
      <td>UtoPixel(ndcx)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>VtoPixel(ndcy)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>Pixel to user</td>
      <td>PixeltoX(px)</td>
      <td>Double_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>PixeltoY(py)</td>
      <td>Double_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>PixeltoXY(px,py,&ux,&uy)</td>
      <td>Double_t ux,uy</td>
    </tr>
        <tr>
      <td>User to pixel</td>
      <td>XtoPixel(ux)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>YtoPixel(uy)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>XYtoPixel(ux,uy,&px,&py)</td>
      <td>Int_t px,py</td>
    </tr>
        <tr>
      <td>User to absolute pixel</td>
      <td>XtoAbsPixel(ux)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>YtoAbsPixel(uy)</td>
      <td>Int_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>XYtoAbsPixel(ux,uy,&apx,&apy)</td>
      <td>Int_t apx,apy</td>
    </tr>
                <tr>
      <td>Absolute pixel to user</td>
      <td>AbsPixeltoX(apx)</td>
      <td>Double_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>AbsPixeltoY(apy)</td>
      <td>Double_t</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>AbsPixeltoXY(apx,apy,&ux,&uy)</td>
      <td>Double_t ux,uy</td>
    </tr>
  </tbody>
</table>

> **Note**
>
> All the pixel conversion functions along the Y axis consider that `py=0` is at the top
> of the pad except `PixeltoY()`, which assumes that the position `py=0` is at the bottom
> of the pad. To make `PixeltoY()` converting the same way as the other conversion
> functions, it should be used the following way (`p` is a pointer to a {% include ref class="TPad" %}):<br>
{% highlight C++ %}
p->PixeltoY(py - p->GetWh());
{% endhighlight %}


### Setting the Log Scale

Setting the scale to logarithmic or linear is a pad's attribute because you may want to
draw the same histogram in linear scale in one pad and in log scale in another pad.
Setting log scale does not propagate to sub-pads.

[TPad defines log scale](https://root.cern/doc/master/classTPad.html#ae79fc15f5e392ba9edf59e18bb3aecd4)
for the three directions `x`, `y` and `z`.

_**Example**_

{% highlight C++ %}
   root [0] gPad->SetLogx(1); // Set the x axis to log in the current pad
   root [1] gPad->SetLogy(0); // Set the y axis to linear in the current pad
{% endhighlight %}


### Copying a canvas

- Use the [TCanvas::DrawClonePad](https://root.cern/doc/master/classTCanvas.html#afcb8727555c9c2be024eb307fd3d295a){:target="_blank"} method to make a copy of the canvas.

You can also use the [TObject:DrawClone()](https://root.cern/doc/master/classTObject.html#a7cd0f76ae1791c469f9472a9d4c8d6f9){:target="_blank"} method, to draw a clone of this object in the current selected pad.

### Printing a canvas

Once a canvas is created and shows plots ready to be included in a publication as a `.png`
or a `.pdf` image, the [Print()](https://root.cern/doc/master/classTPad.html#ae44fee7e51d69841c1dce4b899eee14d)
method can be used. All the standard output formats are provided.

_**Example**_

{% highlight C++ %}
   auto c = new TCanvas(); // Create a canvas
   h->Draw();              // Draw an histogram in the canvas
   c->Print("c1.pdf");     // Save the canvas in a .pdf file
{% endhighlight %}

## Drawing objects with special characters in its name

In general, avoid using objects that containing special character like `\`, `/`, `#` etc. in the objects names. Also object names starting with a number might be not accessible from the ROOT command line.
`/` is the separator for the directory level in a ROOT file therefore an object having a `/` in its name cannot be accessed from the command line.

Nevertheless, some objects may be named in this way and saved in a ROOT file. The following macro shows how to access such an object in a ROOT file.

{% highlight C++ %}
#include "Riostream.h"
#include "TFile.h"
#include "TList.h"
#include "TKey.h"

void draw_object(const char *file_name = "myfile.root", const char *obj_name = "name")
{
// Open the ROOT file.
   TFile *file = TFile::Open(file_name);
   if (!file || file->IsZombie()) {
      std::cout << "Cannot open " << file_name << "! Aborting..." << std::endl;
      return;
   }

// Get the list of keys.
   TList *list = (TList *)file->GetListOfKeys();
   if (!list) {
      std::cout << "Cannot get the list of TKeys! Aborting..." << std::endl;
      return;
   }

// Try to find the proper key by its object name.
   TKey *key = (TKey *)list->FindObject(obj_name);
   if (!key) {
      std::cout << "Cannot find a TKey named" << obj_name << "! Aborting..." << std::endl;
      return;
   }

// Read the object itself.
   TObject *obj = ((TKey *)key)->ReadObj();
   if (!obj) {
      std::cout << "Cannot read the object named " << obj_name << "! Aborting..." << std::endl;
      return;
   }

// Draw the object.
   obj->Draw();
}

{% endhighlight %}

## 3D graphics

[3D graphics tools](https://root.cern/doc/master/group__Graphics3D.html) for "Event Display",
"Basic 3D" and OPen GL rendering are provided.

{% include tutorials name="Geometry" url="geom" %}
<br>
{% include tutorials name="OpenGL" url="gl" %}
