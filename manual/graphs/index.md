---
title: Graphs
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

A graph is an object made of two ({% include ref class="TGraph" %}) or three
({% include ref class="TGraph2D" %}) arrays `X`, `Y`and `Z` holding the `x`,`y` and `z`
coordinates of n points.

**Un-binned data**

A graph or chart is a set of categorical variables, this is un-binned data unlike
a histogram which holds continuous data, where the bins represent ranges of data
(binned data), see → [Histograms]({{ "/manual/histograms" | relative_url }}).

{% include tutorials name="Graph" url="graphs" %}

## Graph classes

ROOT provides numerous graph classes:

**X-Y graphs**

[TGraph](https://root.cern/doc/master/classTGraph.html){:target="_blank"}: A graph.

[TGraphErrors](https://root.cern/doc/master/classTGraphErrors.html){:target="_blank"}: A graph with symmetric error bars.

[TGraphAsymmErrors](https://root.cern/doc/master/classTGraphAsymmErrors.html){:target="_blank"}: A graph with asymmetric error bars.

[TGraphBentErrors](https://root.cern/doc/master/classTGraphBentErrors.html){:target="_blank"}: A {% include ref class="TGraph" %} with bent, asymmetric error bars.

[TGraphMultiErrors](https://root.cern/doc/master/classTGraphMultiErrors.html){:target="_blank"}: A {% include ref class="TGraph" %} with asymmetric error bars and multiple y error dimensions.

[TGraphPolar](https://root.cern/doc/master/classTGraphPolar.html){:target="_blank"}: A {% include ref class="TGraphErrors" %} represented in polar coordinates.

[TGraphQQ](https://root.cern/doc/master/classTGraphQQ.html){:target="_blank"}: Draws quantile-quantile plots.

[TMultiGraph](https://root.cern/doc/master/classTMultiGraph.html){:target="_blank"}: A collection of {% include ref class="TGraph" %} (or derived) objects.

**X-Y-Z graphs**

[TGraph2D](https://root.cern/doc/master/classTGraph2D.html){:target="_blank"}: A graph made of three arrays X, Y and Z with the same number of points each.

[TGraph2DErrors](https://root.cern/doc/master/classTGraph2DErrors.html){:target="_blank"}: A {% include ref class="TGraph2D" %} with error bars.

## Working with TGraph

This section explains how to work with a {% include ref class="TGraph" %} an its
derived classes. It covers the [creation]({{ '/manual/graphs/#creating-a-graph' | relative_url }}),
the [drawing]({{ '/manual/graphs/#drawing-a-graph' | relative_url }}) and the
[fitting]({{ '/manual/graphs/#fitting-graphs' | relative_url }}).

### Creating a graph

  - Use one of the [TGraph constructor](https://root.cern/doc/master/classTGraph.html) to
create a graph object.

{% include ref class="TGraph" %}, and its derived classes, offers a wide variety of constructors.
A {% include ref class="TGraph" %} can be created from an ASCII file, from a {% include ref class="TF1" %}, from a histogram etc ...
The most common way being the creation from C++ arrays.

_**Example**_

Arrays of coordinates are defined and then the graph is created with
the {% include ref class="TGraph" %} constructor.
The coordinates can be arrays of doubles or floats.

{% highlight C++ %}
   int n = 20;
   double x[n], y[n];
   for (int i=0; i<n; i++) {
      x[i] = i*0.1;
      y[i] = 10*sin(x[i]+0.2);
   }
   auto gr = new TGraph (n, x, y);
{% endhighlight %}

When the number of points to be stored in the graph is not known [AddPoint](https://root.cern/doc/master/classTGraph.html#a056c11b01569445bfcaf33079cf01f27)
can be used:

{% highlight C++ %}
   auto gr = new TGraph();
   for (int i=0; i<20; i++) gr->AddPoint(i*0.1, 10*sin(i*0.1+0.2));
{% endhighlight %}

### Drawing a graph

  - Use the [TGraph::Draw()](https://root.cern/doc/master/classTGraph.html#a7ee6d3572ef075dd4fa1a6deb939a986) method
  to draw a graph. Several [drawing options](https://root.cern/doc/master/classTGraphPainter.html#GP01) are available.

_**Example**_

{% highlight C++ %}
   auto gr = new TGraph();
   for (int i=0; i<20; i++) gr->AddPoint(i*0.1, 10*sin(i*0.1+0.2));
   gr->Draw();
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="gr1" width="500px" height="350px"
   caption="Graph drawn with Draw()."
%}


The "drawing option" is the unique parameter (case insensitive) of the
[TGraph::Draw()](https://root.cern/doc/master/classTGraph.html#a7ee6d3572ef075dd4fa1a6deb939a986){:target="_blank"}
method. It specifies how the graph will be graphically rendered.

_**Example**_

{% highlight C++ %}
   auto gr = new TGraph();
   for (int i=0; i<20; i++) gr->AddPoint(i*0.1, 10*sin(i*0.1+0.2));
   gr->Draw("AL*");   // Draw() specifies the drawing option.
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="gr2" width="500px" height="350px"
   caption="Graph drawn with Draw(\"AL\*\")."
%}

#### Setting titles for a graph

On the previous plot the graph title is "Graph". It is the default graph title.
The axis have no titles.
Once a graph is created it is possible to change the graph and axis titles using [TGraph::SetTitle()](https://root.cern/doc/master/classTGraph.html#a56aed9b71c9ea7dc48285c8ecc285aed){:target="_blank"} method.

You can use the [TAxis::CenterTitle](https://root.cern/doc/master/classTAxis.html#a7eeb578be928e04606ed5510d8472953){:target="_blank"} method to center the title.
Note this acts on the axis which are available only once the graph has been drawn.

_**Example**_

{% highlight C++ %}
{
   auto gr = new TGraph();
   gr->SetTitle("Graph title;X-Axis;Y-Axis");
   for (int i=0; i<20; i++) gr->AddPoint(i*0.1, 10*sin(i*0.1+0.2));
   gr->Draw();
   gr->GetXaxis()->CenterTitle()
}
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="gt" width="500px" height="350px"
   caption="Graph with titles."
%}

### Zooming a graph

To zoom a graph you can first draw a frame with the wanted limits and then draw the graph in it

_**Example**_

{% highlight C++ %}
{
   auto c = new TCanvas("c","A Zoomed Graph",200,10,700,500);
   c->DrawFrame(0,1,0.5,8);

   int n = 10;
   double x[10] = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   double y[10] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};

   auto gr = new TGraph(n,x,y);
   gr->SetMarkerColor(4);
   gr->SetMarkerStyle(20);
   gr->Draw("LP");
}
{% endhighlight %}

{% include figure_image
   img="zoom.png"
   caption="A zoomed graph."
%}

See also "[How to set ranges on axis](https://root-forum.cern.ch/t/how-to-set-ranges-on-axis/28254)"

### Fitting graphs

- Use the graph `Fit()` methods (for example [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#a61269bcd47a57296f0f1d57ceff8feeb){:target="_blank"}), for fitting graphs.

For more information on the `Fit()` method, → see [Fitting histograms]({{ "/manual/fitting" | relative_url }}).

## Graphs with error bars

A {% include ref class="TGraphErrors" %} is a {% include ref class="TGraph" %} with error bars.

Several [drawing options](https://root.cern/doc/master/classTGraphPainter.html#GP03a) are
available for graphs with error bars.

{% include ref class="TGraphErrors" %} uses 4 parameters: X, Y (as in {% include ref class="TGraph" %}), X-errors, and Y-errors (the size of the errors in the x and y direction).

When the errors are not symmetric use {% include ref class="TGraphAsymmErrors" %}. It
uses 4 vectors to define the errors. The drawing options are the same as those for [TGraphErrors](https://root.cern/doc/master/classTGraphPainter.html#GP03a)

{% include ref class="TGraphBentErrors" %} is similar to {% include ref class="TGraphAsymmErrors" %} but it has
4 extra parameters to shift (bent) the error bars. This is useful when several graphs
are drawn on the same plot and may hide each other.

{% include ref class="TGraphMultiErrors" %} is an other kind of % include ref class="TGraphAsymmErrors" %} but
multiple y error dimensions. It has a set of [specific drawing options](https://root.cern/doc/master/classTGraphPainter.html#GP03d).

{% include ref class="TGraphPolar" %} is an other kind ot graph with errors. It allows
to produce polar plots with several [plotting options](https://root.cern/doc/master/classTGraphPainter.html#GP04).

## Graphs with exclusion zone

It is possible to draw a graph with an [exclusion zone](https://root.cern/doc/master/classTGraphPainter.html#GP02).
When drawn with options `C` or `L` one side of the graph is hatched.

## Reverse axis

Sometimes it is useful to draw the axis "reversed". Ie: the X axis with its minimum on the
right and its maximum on left of the plot and the Y axis its minimum on top and its maximum
at the bottom of the plot. Some [special drawing options](https://root.cern/doc/master/classTGraphPainter.html#GP06) allow to do that.

## Logarithmic scale

Logarithmic scales can be selected for the X and Y axis of a graph. But
[only the points building the graphs are changed into log scale](https://root.cern/doc/master/classTGraphPainter.html#GP07).
Not the lines connecting them.

## TMultiGraph

A {% include ref class="TMultiGraph" %} is a collection of {% include ref class="TGraph" %} (or derived) objects.

### Creating a TMultiGraph

- Use [TMultiGraph::Add()](https://root.cern/doc/master/classTMultiGraph.html#a2e3c69dd70582da81cf1e32414cc5e2d){:target="_blank"} to add a new graph to the list.

The {% include ref class="TMultiGraph" %} owns the objects in the list. The drawing and
fitting options are the [same as for TGraph](https://root.cern/doc/master/classTGraphPainter.html#GP01).

_**Example**_

{% highlight C++ %}
{
// Create the points:
   const int n  = 10;
   double x[n]  = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   double y[n]  = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};
   double x2[n] = {-.12,.15,.35,.45,.6,.71,.8,.95,.99,1.05};
   double y2[n] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};

// Create the width of errors in x and y direction:
   double ex[n] = {.05,.1,.07,.07,.04,.05,.06,.07,.08,.05};
   double ey[n] = {.8,.7,.6,.5,.4,.4,.5,.6,.7,.8};

// Create two graphs:
   TGraph *gr1 = new TGraph(n,x2,y2);
   TGraphErrors *gr2 = new TGraphErrors(n,x,y,ex,ey);

// Create a TMultiGraph and draw it:
   TMultiGraph *mg = new TMultiGraph();
   mg->Add(gr1);
   mg->Add(gr2);
   mg->Draw("ALP");
 }
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="mg" width="500px" height="350px"
   caption="Graph with error bars."
%}

### Drawing a TMultiGraph

[TMultiGraph drawing](https://root.cern/doc/master/classTMultiGraph.html#MG01) is similar
to graph drawing and [setting titles](https://root.cern/doc/master/classTMultiGraph.html#MG01b) is
the same. [Automatic coloring](https://root.cern/doc/master/classTMultiGraph.html#MG01e) and
r[everse axis drawing](https://root.cern/doc/master/classTMultiGraph.html#MG01f) are also
available.

A [specific option](https://root.cern/doc/master/classTMultiGraph.html#MG01c) allows to draw the graph collection in 3D.

When a legend is created using [TPad::BuildLegend](https://root.cern/doc/master/classTPad.html#a6eebfec5f3dbdb3cd656b26114db28fb) all
the graphs collected in a {% include ref class="TMultiGraph" %} are
[added in the legend](https://root.cern/doc/master/classTMultiGraph.html#MG01d).

### Zooming a TMultiGraph

{% include ref class="TMultiGraph" %} limits are automatically computed from the ranges of
the graphs building it. It is also possible to [impose axis limits](https://root.cern/doc/master/classTMultiGraph.html#MG03).

### Fitting a TMultiGraph

When graphs are stored in a {% include ref class="TMultiGraph" %} they are considered as
a single set of point by the [fitting mechanism](https://root.cern/doc/master/classTMultiGraph.html#MG02).

## Automatic coloring

When several graphs are drawn on the same plot, it is possible to
[pick automatically the color](https://root.cern/doc/master/classTGraphPainter.html#GP05) of
each graph in the current color palette.


## TGraphQQ

A {% include ref class="TGraphQQ" %} allows to draw quantile-quantile plots. Such plots can
be drawn for two datasets, or for one dataset and a theoretical distribution function.


## TGraph2D

A {% include ref class="TGraph2D" %} graph is a graphics object that is made of three
arrays `X`, `Y` and `Z` with the same number of points each.

{% include ref class="TGraph2DErrors" %} derives from {% include ref class="TGraph2D" %}. It
adds 3 extra vectors to define the errors.

### Creating a TGraph2D

  - Use one of the {% include ref class="TGraph2D" %} constructors to create a 2D graph.

{% include ref class="TGraph2D" %} (and {% include ref class="TGraph2DErrors" %}) have several
constructors. For instances
[from three arrays](https://root.cern/doc/master/classTGraph2D.html#a3b3571d04ab467efc3da26c60e39dd0d) `x`, `y`, and `z`
(can be arrays of doubles, floats, or integers),
[from an ASCII file](https://root.cern/doc/master/classTGraph2D.html#a43266b55df2d9c83fee12f587f405b25), or even
[without parameter](https://root.cern/doc/master/classTGraph2D.html#a0ae3f73de5863f8aae3e9fe86c15cb05) (in that case use the `SetPoint()` method to
fill the internal arrays).

### Drawing a TGraph2D

You can draw a {% include ref class="TGraph2D" %} with any
[drawing option valid for 2D histogram](https://root.cern/doc/master/classTHistPainter.html#HP01c).
In this case, an intermediate 2D histogram is filled using the [Delaunay triangles technique](https://root.cern/doc/master/classTGraphDelaunay.html) to
interpolate the data set.

You can also use [the specific TGraph2D drawing options](https://root.cern/doc/master/classTGraph2D.html#G2D01)

_**Example**_

{% highlight C++ %}
{
   auto c = new TCanvas("c","Graph2D example",0,0,700,600);
   double x, y, z, P = 6.;
   int np = 200;
   auto dt = new TGraph2D();
   auto r  = new TRandom();
   for (int N=0; N<np; N++) {
      x = 2*P*(r->Rndm(N))-P;
      y = 2*P*(r->Rndm(N))-P;
      z = (sin(x)/x)*(sin(y)/y)+0.2;
      dt->SetPoint(N,x,y,z);
   }
   dt->Draw("tri1 p0");
}
{% endhighlight %}

{% include figure_image
   img="graph2d.png"
   caption="A TGraph2D with the drawing option TRI1 and P0."
%}


### Fitting a TGraph2D
Some tutorials show how to fit
[TGraph2D](https://root.cern/doc/master/graph2dfit_8C.html) and
[TGraph2DErrors](https://root.cern/doc/master/graph2derrorsfit_8C.html).