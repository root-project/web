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

Painting a pad is done by the `Paint()` method of each object in the list of primitives.

{% include tutorials name="Graphics" url="graphics" %}

## Graphic classes

ROOT provides numerous graphic classes, of which the following are among the most used:

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
- _Rectangles_: Use {% include ref class="TBox" %} or {% include ref class="TWBox" %} to create a rectangle.
- _Markers_: Use {% include ref class="TMarker" %} to create a marker.
- _Curly lines and arcs_: Use {% include ref class="TCurlyLine" %} and {% include ref class="TCurlyArc" %} to create curly lines and arcs for Feynman diagrams.
- _Text and Latex_: Use {% include ref class="TText" %} to draw simple text. {% include ref class="TLatex" %} for complex text like mathematical formulas. Text can be embedded in a box using {% include ref class="TPaveLabel" %}, {% include ref class="TPaveText" %} and {% include ref class="TPavesText" %}.
- and [_more ..._](https://root.cern/doc/master/group__BasicGraphics.html)

## Graphical objects attributes and styles

There are the following classes for changing the attributes of graphical objects:

- [TAttFill](https://root.cern/doc/master/classTAttFill.html){:target="_blank"} : Used for filling an area with color and a style.

- [TAttLine](https://root.cern/doc/master/classTAttLine.html){:target="_blank"} : Used for setting the color, width and style of a line.

- [TAttMarker](https://root.cern/doc/master/classTAttMarker.html){:target="_blank"} : Used for setting the styles for a marker.

- [TAttText](https://root.cern/doc/master/classTAttText.html){:target="_blank"} : Used for setting text attributes like alignment, color, size, font etc.

### Creating and modifying a style

When objects are created, their default attributes (taken from {% include ref class="TAttFill" %}, {% include ref class="TAttLine" %}, {% include ref class="TAttMarker" %}, {% include ref class="TAttText" %}) are taken from the current style. The current style is an object of the {% include ref class="TStyle" %} class and can be referenced via the global variable `gStyle` (→ see [ROOT classes, data types and global variables]({{ '/manual/root_architecture_and_components#global-root-variables' | relative_url }})).

ROOT provides two styles:

- `Default`

- `Plain`

**Creating the `Default` style**

The `Default` style is created by:

{% highlight C++ %}
   auto default = new TStyle("Default","Default Style");
{% endhighlight %}

**Creating the `Plain` style**

The `Plain` style is useful if you, for example, are working on a monochrome display.

{% highlight C++ %}
auto plain  = new TStyle("Plain","Plain Style (no colors/fill areas)");

   plain->SetCanvasBorderMode(0);
   plain->SetPadBorderMode(0);
   plain->SetPadColor(0);
   plain->SetCanvasColor(0);
   plain->SetTitleColor(0);
   plain->SetStatColor(0);

{% endhighlight %}

#### Setting the current style

- Use the `SetStyle()` method, to set the current style.

{% highlight C++ %}
   gROOT->SetStyle(style_name);
{% endhighlight %}

You can get a pointer to an existing style with:

{% highlight C++ %}
   auto style = gROOT->GetStyle(style_name);
{% endhighlight %}

> **Note**
>
> When an object is created, its attributes are taken from the current style. For example, you may have created an histogram in a previous session and saved it in a ROOT file. Meanwhile, if you have changed the style, the histogram will be drawn with the old attributes.
> You can force the current style attributes to be set when you read an object from a file by:
>
> `gROOT->ForceStyle();`


#### Creating additional styles

- Use the {% include ref class="TStyle" %} constructor to create additional styles.

{% highlight C++ %}
TStyle *st1 = new TStyle("st1","my style");
   st1->Set....
   st1->cd();  This becomes now the current style.
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
   TAxis *axis = histo->GetXaxis()
{% endhighlight %}

### Setting the axis title

- Use the `SetTitle()` method to set the tile of an axis.

_**Example**_

{% highlight C++ %}
   axis->SetTitle("My axis title");
{% endhighlight %}

If the axis is embedded into a histogram or a graph, you first have to extract the axis object.

_**Example**_

{% highlight C++ %}
   histo->GetXaxis()->SetTitle("My axis title")
{% endhighlight %}

### Setting axis options and characteristics

The available axis options are listed in the following example.

_**Example**_

{% highlight C++ %}
   TAxis *axis = histo->GetXaxis();

   axis->SetAxisColor(Color_t color = 1);
   axis->SetLabelColor(Color_t color = 1);
   axis->SetLabelFont(Style_t font = 62);
   axis->SetLabelOffset(Float_t offset = 0.005);
   axis->SetLabelSize(Float_t size = 0.04);
   axis->SetNdivisions(Int_t n = 510, Bool_t optim = kTRUE);
   axis->SetNoExponent(Bool_t noExponent = kTRUE);
   axis->SetTickLength(Float_t length = 0.03);
   axis->SetTitleOffset(Float_t offset = 1);
   axis->SetTitleSize(Float_t size = 0.02)
{% endhighlight %}

### Setting the number of divisions

- Use the `TAxis::SetNdivisions(ndiv,optim)` method to set the number of divisions for an axis.

`ndiv` and `optim` are defined as follows:

- `ndiv = N1 + 100*N2 + 10000*N3`, with: `N1` = number of first division, `N2` = number of secondary divisions, `N3` = number of tertiary divisions.<br>
- `optim` = `kTRUE (default)`: The divisions’ number will be optimized around the specified value.<br>
- `optim` = `kFALSE`, or n < 0: The axis will be forced to use exactly n divisions.

_**Example**_

`ndiv = 0`: no tick marks.<br>
`ndiv = 2`: 2 divisions, one tick mark in the middle of the axis.<br>
`ndiv = 510`: 10 primary divisions, 5 secondary divisions.<br>
`ndiv = -10`: exactly 10 primary divisions.


### Zooming the axis

- Use [TAxis::SetRange()](https://root.cern/doc/master/classTAxis.html#aed523b084d6b3f24f6b1128d7810e199){:target="_blank"} or [TAxis::SetRangeUser()](https://root.cern/doc/master/classTAxis.html#ac85f8261dedc23bbe68f90afd196cdb8){:target="_blank"} to zoom the axis.

The `SetRange()` method parameters are bin numbers. For example if a histogram plots the values from 0 to 500 and has 100 bins, `SetRange(0,10)` will cover the values 0 to 50.

The `SetRangeUser()` method parameters are user coordinates. If the start or end is in the middle of a bin the resulting range is approximation. It finds the low edge
bin for the start and the high edge bin for the high.

### Setting time units for axis

- Use the `SetTimeDisplay()` method to set an axis as a time axis.

_**Example**_

For a histogram `histo`, the x-axis is set as time axis.

{% highlight C++ %}
   histo->GetXaxis()->SetTimeDisplay(1);
{% endhighlight %}

For a time axis, you can set the

- [time formats](#time_formats)

- [time offset](#time_offset)

<p><a name="time_formats"></a></p>
**Time formats**

The time format defines the format of the labels along the time axis. It can be changed using the `TAxis::SetTimeFormat()` method. The time format used if from the C function `strftime()`.
It is a string containing the following formatting characters, <br/>
for date:<br>
`%a`: abbreviated weekday name<br>
`%b`: abbreviated month name<br>
`%d`: day of the month (01-31)<br>
`%m`: month (01-12)<br>
`%y`: year without century<br>
`%Y`: year with century<br>

for time:<br>
`%H`: hour (24-hour clock)<br>
`%I`: hour (12-hour clock)<br>
`%p`: local equivalent of AM or PM<br>
`%M`: minute (00-59)<br>
`%S`: seconds (00-61)<br>
`%%`: %<br>

The other characters are output as is. For example to have a format like `dd/mm/yyyy`, use:

{% highlight C++ %}
~~~ .cpp h->GetXaxis()->SetTimeFormat("%d/%m/%Y"); ~~~
{% endhighlight %}

<p><a name="time_offset"></a></p>
**Time offset**

The time is a time in seconds in the UNIX standard UTC format (this is an universal time, not the local time), defining the starting date of an histogram axis. This date should be greater than 01/01/95 and is given in seconds.
<br> There are the three ways to define the time offset:

- **Setting the global default time offset.**

_**Example**_

{% highlight C++ %}
   TDatime da(2003,02,28,12,00,00);
   gStyle->SetTimeOffset(da.Convert());
{% endhighlight %}

Notice the usage of `TDateTime` to translate an explicit date into the time in seconds required by `SetTimeFormat`.

If no time offset is defined for a particular axis, the default time offset will be used.

- **Setting a time offset to a particular axis.**

_**Example**_

{% highlight C++ %}
   TDatime dh(2001,09,23,15,00,00);
   h->GetXaxis()->SetTimeOffset(dh.Convert());
{% endhighlight %}

- **Using `SetTimeFormat` together with the time format**

The time offset can be specified using the control character `%F` after the normal time format. `%F` is followed by the date in the format: yyyy-mm-dd hh:mm:ss.

_**Example**_

{% highlight C++ %}
   histo->GetXaxis()->SetTimeFormat("%d\/%m\/%y%F2000-02-28 13:00:01");
{% endhighlight %}


Notice that this date format is the same used by the `TDateString` function AsSQLString. If needed, this function can be used to translate a time in seconds into a character string which can be appended after `%F`. If the time format is not specified (before `%F`), the automatic one will be used.

If a time axis has no specified time offset, the global time offset will be stored in the axis data structure.

_**Example**_

{% highlight C++ %}
   gStyle->SetTitleH(0.08);
   TDatime da(2003,02,28,12,00,00);
   gStyle->SetTimeOffset(da.Convert());

   auto ct = new TCanvas("ct","Time on axis",0,0,600,600);
   ct->Divide(1,3);

   auto ht1 = new TH1F("ht1","ht1",30000,0.,200000.);
   auto ht2 = new TH1F("ht2","ht2",30000,0.,200000.);
   auto ht3 = new TH1F("ht3","ht3",30000,0.,200000.);
   for (Int_t i=1;i<30000;i++) {
      auto noise = gRandom->Gaus(0,120);
      ht1->SetBinContent(i,noise);
      ht2->SetBinContent(i,noise*noise);
      ht3->SetBinContent(i,noise*noise*noise);
   }

   ct->cd(1);
   ht1->GetXaxis()->SetLabelSize(0.06);
   ht1->GetXaxis()->SetTimeDisplay(1);
   ht1->GetXaxis()->SetTimeFormat("%d/%m/%y%F2000-02-28 13:00:01");
   ht1->Draw();

   ct->cd(2);
   ht2->GetXaxis()->SetLabelSize(0.06);
   ht2->GetXaxis()->SetTimeDisplay(1);
   ht2->GetXaxis()->SetTimeFormat("%d/%m/%y");
   ht2->Draw();

   ct->cd(3);
   ht3->GetXaxis()->SetLabelSize(0.06);
   TDatime dh(2019,12,4,15,00,00);
   ht3->GetXaxis()->SetTimeDisplay(1);
   ht3->GetXaxis()->SetTimeOffset(dh.Convert());
   ht3->Draw();
{% endhighlight %}

{% include figure_jsroot
   file="graphics.root" object="ct" width="600px" height="600px"
   caption="Time axis."
%}


### Drawing an axis independently of a graph or a histogram

- Use the {% include ref class="TGaxis" %} class to draw an axis independently of a graph or a histogram.

This may be useful if you want to draw a supplementary axis for a graph.


## Legends

- Use the {% include ref class="TLegend" %} class to add a legend to graph.

A {% include ref class="TLegend" %} is a panel with several entries ({% include ref class="TLegendEntry" %} class).

A legend is defined with default coordinates, border size and option. The legend coordinates (NDC) in the current pad are `x1`, `y1`, `x2`, `y2`. The default text attributes for the legend are:
- Alignment = 12 left adjusted and vertically centered
- Angle = 0 (degrees)
- Color = 1 (black)
- Size = calculate when number of entries is known
- Font = helvetica-medium-r-normal scalable font = 42, and bold = 62 for title

The title is a regular entry and supports {% include ref class="TLatex" %}. The default is no title (header = 0).

- Use the [AddEntry()](https://root.cern/doc/master/classTLegend.html#a0fa2f13a4fea32bf9e1558a7b8df2d24){:target="_blank"} method to a add a new entry to a legend.

The parameters are:
- `*objis` a pointer to an object having a marker, a line, or a fill attributes (a histogram, or a graph).
- `label` is the label to be associated to the object.
- `option`:
   - "`L`": Draws a line associated with line attributes of `obj`, if `obj` inherits from {% include ref class="TAttLine" %}.
   - "`P`": Draw a poly-marker associated with marker attributes of `obj`, if `obj` inherits {% include ref class="TAttMarker" %}.
   - "`F`": Draws a box with fill associated with fill attributes of `obj`, if `obj` inherits {% include ref class="TAttFill" %}.

_**Example**_

The following legend contains a histogram, a function and a graph. The histogram is put in the legend using its reference pointer whereas the graph and the function are added using their names. Because {% include ref class="TGraph" %} constructors do not have the {% include ref class="TGraph" %} name as parameter, the graph name should be specified using the `SetName()` method.

{% highlight C++ %}
{
   auto c1 = new TCanvas("c1","c1",600,500);
   gStyle->SetOptStat(0);

// Histogram:
   auto h1 = new TH1F("h1","TLegend Example",200,-10,10);
   h1->FillRandom("gaus",30000);
   h1->SetFillColor(kGreen);
   h1->SetFillStyle(3003);
   h1->Draw();

// Function:
   auto f1=new TF1("f1","1000*TMath::Abs(sin(x)/x)",-10,10);
   f1->SetLineColor(kBlue);
   f1->SetLineWidth(4);
   f1->Draw("same");
   const Int_t n = 20;
   Double_t x[n], y[n], ex[n], ey[n];
   for (Int_t i=0;i<n;i++) {
      x[i]  = i*0.1;
      y[i]  = 1000*sin(x[i]+0.2);
      x[i]  = 17.8*x[i]-8.9;
      ex[i] = 1.0;
      ey[i] = 10.*i;
   }

// Graph:
   auto gr = new TGraphErrors(n,x,y,ex,ey);
   gr->SetName("gr");
   gr->SetLineColor(kRed);
   gr->SetLineWidth(2);
   gr->SetMarkerStyle(21);
   gr->SetMarkerSize(1.3);
   gr->SetMarkerColor(7);
   gr->Draw("P");

// Creating a legend.
   auto legend = new TLegend(0.1,0.7,0.48,0.9);
   legend->SetHeader("The Legend Title","C"); // option "C" allows to center the header
   legend->AddEntry(h1,"Histogram filled with random numbers","f");
   legend->AddEntry("f1","Function abs(#frac{sin(x)}{x})","l");
   legend->AddEntry("gr","Graph with error bars","lep");
   legend->Draw();
}
{% endhighlight %}

{% include figure_jsroot
   file="graphics.root" object="legend" width="600px" height="500px"
   caption="Legend containing a histogram, a function and a graph."
%}

## Canvas and pad

A canvas ({% include ref class="TCanvas" %}) is a graphical entity that contains graphical objects that are called
pads ({% include ref class="TPad" %}). A pad is a graphical container that contains other graphical objects like histograms and arrows. It also can contain other pads, called sub-pads. When an object is drawn, it is always in the so-called active pad.

### Accessing the active pad

- Use the global variable `gPad` to access the active pad.

For more information on global variables, → see [ROOT classes, data types and global variables]({{ '/manual/root_architecture_and_components' | relative_url }}).

_**Example**_

If you want to change the fill color of the active pad to blue, but you do not know the name of the active pad, you can use `gPad`.

{% highlight C++ %}
   gPad->SetFillColor(38)
{% endhighlight %}

### Accessing an object in an active pad

- Use the [TPad::GetPrimitive(const char* name)](https://root.cern/doc/master/classTPad.html#af757a87208deb609e0b0d29e6edfaf94){:target="_blank"} method to access an object in an active pad.

_**Example**_

{% highlight C++ %}
   root[] obj = gPad->GetPrimitive("myobjectname")
   (class TObject*)0x1063cba8
{% endhighlight %}

A pointer to the object `myobjectname` is returned and put into the `obj` variable.<br>
The type of the returned pointer is a `TObject*` that has a name.

### Hiding an object in a pad

You can hide an object in a pad by removing it from the list of objects owned by that pad.

- Use the [TPad::GetListOfPrimitives()](https://root.cern/doc/master/classTPad.html#a2bf11bfddaa3f25ae259c3d55203f0f4){:target="_blank"} method to list is accessible objects of a pad.

- Use the `Remove()` method to remove the object from the list.

_**Example**_

First, a pointer to the object is needed.<br>
Second, a point to the list of objects owned by the pad is needed.<br>
Then you can remove the object from the list, i.e. pad.<br>
The object disappears as soon as the pas is updated.

{% highlight C++ %}
   root[1] obj = gPad->GetPrimitive("myobjectname")
   root[2] li = gPad->GetListOfPrimitives()
   root[3] li->Remove(obj)
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
   root[] pad1->Modified()

// Recursively updating all modified pads:
   root[] c1->Update()
{% endhighlight %}

A subsequent call to [TCanvas::Update()](https://root.cern/doc/master/classTCanvas.html#a83bb3270c4e4cd4250730d5586ceebd6){:target="_blank"} scans the list of sub-pads and repaints the pads.

### Dividing a pad into sub-pads

To draw multiple objects on a
canvas ({% include ref class="TCanvas" %}), you can divide
pad ({% include ref class="TPad" %}) into sub-pads.<br>
There are two ways to divide a pad into sub-pads:

- [building pad objects and draw them into a parent pad](#sub-pad),

- [automatically divide a pad into horizontal and vertical sub-pads](#divide).

<p><a name="sub-pad"></a></p>
**Creating a single sub-pad**

To build sub-pads in a pad, you must indicate the size and the position of the sub-pads.

_**Example**_

A sub-pad is to be built into the active pad (pointed by `gPad`). First, the sub-pad is
build the {% include ref class="TPad" %} constructor.

{% highlight C++ %}
   root[] spad1 = new TPad("spad1","The first subpad",.1,.1,.5,.5)
{% endhighlight %}

The NDC (normalized coordinate system) coordinates are specified for the lower left point `(0.1, 0.1)` and for the upper right point `(0.5, 0.5)`.<br>
Then the sub-pad is drawn.

{% highlight C++ %}
   root[] spad1->Draw()
{% endhighlight %}

For building more sub-pads, repeat this procedure as many times as necessary.

<p><a name="divide"></a></p>
**Dividing a pad into sub-pads**

- Use the [TPad::Divide()](https://root.cern/doc/master/classTPad.html#a064b8ae1d12a9be393c0e22c5958cc7c){:target="_blank"} method to divide a pad into sub-pads.

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

- Use the [TPad::range(float x1,float y1,float x2,float y2)](https://root.cern/doc/master/classTPad.html#ae50a151ce00ad2414495314923f1b911){:target="_blank"} method to set the user coordinate system.<br/>
The arguments `x1` and `x2` define the new range in the x direction, and `y1` and `y2` define the new range in the y direction.

_**Example**_

Both coordinates go from -100 to 100, with the center of the pad at (0,0).

{% highlight C++ %}
   TCanvas MyCanvas ("MyCanvas")
    gPad->Range(-100,-100,100,100)
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


### Copying a canvas

- Use the [TCanvas::DrawClonePad](https://root.cern/doc/master/classTCanvas.html#afcb8727555c9c2be024eb307fd3d295a){:target="_blank"} method to make a copy of the canvas.

You can also use the [TObject:DrawClone()](https://root.cern/doc/master/classTObject.html#a7cd0f76ae1791c469f9472a9d4c8d6f9){:target="_blank"} method, to draw a clone of this object in the current selected pad.

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
