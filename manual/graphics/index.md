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

> **Tutorials**
>
> Graphics tutorials are available at → [https://root.cern/doc/master/group__tutorial__graphics.html](https://root.cern/doc/master/group__tutorial__graphics.html)

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

{% highlight C++ %}
object.Draw()
{% endhighlight %}

_**Example**_

A one-dimensional sine function shall be drawn.

Use the [TF1](https://root.cern/doc/master/classTF1.html) class to create an object that is a one-dimensional function defined between a lower and upper limit.

{% highlight C++ %}
TF1 f1("func1","sin(x)",0,10)
f1.Draw()
{% endhighlight %}

The function is displayed in a canvas.

{% include figure_jsroot
   file="tf1.root" object="func1" width="500px" height="350px"
   caption="Canvas (point the bottom left light blue square or right-click
   on the image to interact with the object)."
%}

#### Using the Graphics Editor for objects

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

You can create the following graphical objects:

- Arc of circle
- Arrow
- Diamond
- Ellipse
- Pad
- PaveLabel
- PaveText or PavesText
- PolyLine
- Text string


## Graphical objects

The following sections introduce some of the graphical objects that ROOT provides. Usually, one defines these
graphical objects with their constructor and draws them with their `Draw()` method.

## Axis

Axis are automatically built in by various high level objects such as histograms or graphs. [TAxis](https://root.cern.ch/doc/master/classTAxis.html) manages the axis and is referenced by [TH1](https://root.cern.ch/doc/master/classTH1.html) and [TGraph](https://root.cern.ch/doc/master/classTGraph.html). To make a graphical representation of an histogram axis, [TAxis](https://root.cern.ch/doc/master/classTAxis.html) references the [TGaxis](https://root.cern.ch/doc/master/classTGaxis.html) class.

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

`ndiv` = `N1` + 100*`N2` + 10000*`N3`<br>
   with:<br>
   `N1` = Number of first division.
   `N2` = Number of secondary divisions.
   `N3` = Number of tertiary divisions.
`optim` = `kTRUE (default)`: The divisions’ number will be optimized around the specified value.
`optim` = `kFALSE`, or n < 0: The axis will be forced to use exactly n divisions.

### Setting time units for axis

- Use the `SetTimeDisplay()` method to set an axis as a time axis.

_**Example**_

For a histogram `histo`, the x-axis is set as time axis.

{% highlight C++ %}
histo->GetXaxis()->SetTimeDisplay(1);
{% endhighlight %}

For a time axis, you can set the

- time format

- time offset

#### Time formats

The Time format defines the format of the labels along the time axis. It can be changed using the `TAxis::SetTimeFormat()` method. The time format used if from the C function `strftime()`. 
It is a string containing the following formatting characters,

for date:
`%a`: abbreviated weekday name
`%b`: abbreviated month name
`%d`: day of the month (01-31)
`%m`: month (01-12)
´%y´: year without century
´%Y´: year with century

for time:
`%H`: hour (24-hour clock)
`%I`: hour (12-hour clock)
`%p`: local equivalent of AM or PM
`%M`: minute (00-59)
`%S`: seconds (00-61)
`%%`: %

The other characters are output as is. For example to have a format like dd/mm/yyyy, use:

{% highlight C++ %}
~~~ .cpp h->GetXaxis()->SetTimeFormat("%d/%m/%Y"); ~~~
{% endhighlight %}

#### Time offset

The time is a time in seconds in the UNIX standard UTC format (this is an universal time, not the local time), defining the starting date of an histogram axis. This date should be greater than 01/01/95 and is given in seconds.
<br> There are the following ways to define the time offset:

**Setting the global default time offset.**

_**Example**_

{% highlight C++ %}
   TDatime da(2003,02,28,12,00,00);
   gStyle->SetTimeOffset(da.Convert());
{% endhighlight %}

Notice the usage of `TDateTime` to translate an explicit date into the time in seconds required by `SetTimeFormat`.

If no time offset is defined for a particular axis, the default time offset will be used. 

**Setting a time offset to a particular axis.**

_**Example**_

{% highlight C++ %}
   TDatime dh(2001,09,23,15,00,00);
   h->GetXaxis()->SetTimeOffset(dh.Convert()); 
{% endhighlight %}

**Using `SetTimeFormat` together with the time format**

The time offset can be specified using the control character %F after the normal time format. %F is followed by the date in the format: yyyy-mm-dd hh:mm:ss.

_**Example**_

{% highlight C++ %}
histo->GetXaxis()->SetTimeFormat("%d\/%m\/%y%F2000-02-28 13:00:01");
{% highlight C++ %}
    
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
{% highlight C++ %}

{% include figure_image
   img="time-axis.png"
   caption="Time axis."
%}

## Canvas and pad

A canvas ([TCanvas](https://root.cern/doc/master/classTCanvas.html)) is a graphical entity that contains graphical objects that are called pads ([TPad](https://root.cern.ch/doc/master/classTPad.html)). A pad is a graphical container that contains other graphical objects like histograms and arrows. It also can contain other pads, called sub-pads. When an object is drawn, it is always in the so-called active pad.

### Accessing the active pad

- Use the global variable `gPad`, to access the active pad.

For more information on global variables, → see [ROOT classes, data types and global variables]({{ '/manual/root_classes_data_types_and_global_variables' | relative_url }})

_**Example**_

If you want to change the fill color of the active pad to blue, but you do not know the name of the active pad, you can use `gPad`.

{% highlight C++ %}
gPad->SetFillColor(38)
{% endhighlight %}

### Accessing an object in an active pad

- Use the [TPad::GetPrimitive(const char* name)](https://root.cern/doc/master/classTPad.html#af757a87208deb609e0b0d29e6edfaf94) method to access an object in an active pad.

_**Example**_

{% highlight C++ %}
root[] obj = gPad->GetPrimitive("myobjectname")
(class TObject*)0x1063cba8
{% endhighlight %}

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

- Adding or modifying primitives, for example the name and title of an object.

You can set the “bit-modified” by using the `Modified()` method.

_**Example**_

{% highlight C++ %}
// The pad has changed.
root[] pad1->Modified()
// Recursively updating all modified pads:
root[] c1->Update()
{% endhighlight %}

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

{% highlight C++ %}
root[] spad1 = new TPad("spad1","The first subpad",.1,.1,.5,.5)
{% endhighlight %}

The NDC (Normalized Coordinate System) coordinates are specified for the lower left point `(0.1, 0.1)` and for the upper right point `(0.5, 0.5)`.<br>
Then the sub-pad is drawn.

{% highlight C++ %}
root[] spad1->Draw()
{% endhighlight %}

For building more sub-pads, repeat this procedure as many times as necessary.

#### Dividing a pad into sub-pads

- Use the [TPad::Divide()](https://root.cern/doc/master/classTPad.html#a064b8ae1d12a9be393c0e22c5958cc7c) method to divide a pad into sub-pads.

