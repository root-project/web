---
title: Graphs
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---
A graph is an object made of two arrays `X` and `Y`, holding the `x`,`y` coordinates of n points.

**Un-binned data**

A graph or chart is a set of categorical variables, this is un-binned data.<br>
A histogram is used for continuous data, where the bins represent ranges of data (binned data), see → [Histograms]({{ '/manual/histograms' | relative_url }}).

> **Tutorials**
>
> Graph tutorials are available at → [https://root.cern/doc/master/group__tutorial__graphs.html](https://root.cern/doc/master/group__tutorial__graphs.html){:target="_blank"}

## Graph classes

The following graph classes are available in ROOT, among others:


{% include ref class="TGraph" %}: A graph.

{% include ref class="TGraphErrors" %}: A graph with error bars.

{% include ref class="TGraphAsymmErrors" %}: A `TGraph` with asymmetric error bars.

{% include ref class="TGraphBentErrors" %}: A `TGraph` with bent, asymmetric error bars.

{% include ref class="TGraphMultiErrors" %}: A `TGraph` with asymmetric error bars and multiple y error dimensions.

{% include ref class="TGraphPolar" %}: A polar graph including error bars.

{% include ref class="TGraphQQ" %}: Draws quantile-quantile plots.

{% include ref class="TMultiGraph" %}: A collection of `TGraph` (or derived) objects.

{% include ref class="TGraph2D" %}: Graph made of three arrays X, Y and Z with the same number of points each.

{% include ref class="TGraph2DErrors" %}: A `TGraph2D` with error bars.

## Working with graphs

ROOT supports the general case with non-equidistant points, and the special case with equidistant points.

### Creating a graph

Use a graph constructor to create a graph object.

_**Example**_

Arrays of coordinates are defined and then graph with the {% include ref class="TGraph" %} constructor is created.<br>
The coordinates can be arrays of doubles or floats.

{% highlight C++ %}
Int_t n = 20;
Double_t x[n], y[n];
for (Int_t i=0; i<n; i++) {
   x[i] = i*0.1;
   y[i] = 10*sin(x[i]+0.2);
}
TGraph *gr1 = new TGraph (n, x, y);
{% endhighlight %}

### Drawing a graph

- Use the `Draw()` method to draw a graph.

The {% include ref class="TGraphPainter" %} class implements all drawing options.

_**Example**_

{% highlight C++ %}
   const int n = 20;
   Double_t x[n], y[n];
   for (Int_t i=0; i<n; i++) {
      x[i] = i*0.1;
      y[i] = 10*sin(x[i]+0.2);
   }
   auto *gr1 = new TGraph (n, x, y);
   gr1->Draw();
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="gr1" width="500px" height="350px"
   caption="Graph drawn with Draw()."
%}


#### Drawing options

> **Note**
>
> The drawing options are not case sensitive.

For detailed information on the drawing options for graph classes, refer to {% include ref class="TGraphPainter" %}.

`L`: A simple poly-line between every point is drawn.

`F`: A filled area is drawn.

`F1`: As F, but the filled area is no more repartee around X=0 or Y=0

`F2`: Draws a filled area poly line connecting the center of bins.

`A`: Axis are drawn around the graph.

`C`: A smooth curve is drawn

`*` A star is plotted at each point.

`P`: The current marker of the graph is plotted at each point.

`B`: A bar chart is drawn at each point.

_**Example**_

{% highlight C++ %}
   const int n = 20;
   Double_t x[n], y[n];
   for (Int_t i=0; i<n; i++) {
      x[i] = i*0.1;
      y[i] = 10*sin(x[i]+0.2);
   }
   auto *gr1 = new TGraph (n, x, y);
   gr1->Draw("AL*");
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="gr2" width="500px" height="350px"
   caption="Graph drawn with Draw(\"AL\*\")."
%}

### Fitting graphs

- Use the graph `Fit()` methods (for example [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#a61269bcd47a57296f0f1d57ceff8feeb){:target="_blank"}, for fitting graphs.

For more information on the `Fit()` method, see *Fitting histograms*.

## Graphs with error bars

A {% include ref class="TGraphErrors" %} is a {% include ref class="TGraph" %}
with error bars.

The {% include ref class="TGraphPainter" %} class implements all drawing options for graphs with error bars.

`TGraphErrors` uses 4 parameters: X, Y (as in `TGraph`), X-errors, and Y-errors (the size of the errors in the x and y direction).

_**Example**_

{% highlight C++ %}
{
   TCanvas *c1 = new TCanvas("c1","A Simple Graph with error bars",200,10,700,500);

   c1->SetGrid();
   c1->GetFrame()->SetBorderSize(12);

// Create the coordinate arrays:
   const Int_t n = 10;
   Float_t x[n] = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   Float_t y[n] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};

// Create the error arrays:
   Float_t ex[n] = {.05,.1,.07,.07,.04,.05,.06,.07,.08,.05};
   Float_t ey[n] = {.8,.7,.6,.5,.4,.4,.5,.6,.7,.8};

// Create the TGraphErrors and draw it.
   TGraphErrors *gr = new TGraphErrors(n,x,y,ex,ey);
   gr->SetTitle("TGraphErrors Example");
   gr->SetMarkerColor(4);
   gr->SetMarkerStyle(21);
   gr->Draw("ALP");

   c1->Update();
}
{% endhighlight %}

{% include figure_jsroot
   file="graphs.root" object="ge" width="500px" height="350px"
   caption="Graph with error bars."
%}

## TMultiGraph ##

A {% include ref class="TMultiGraph" %} is a collection of TGraph (or derived) objects.

- Use [TMultiGraph::Add()](https://root.cern/doc/master/classTMultiGraph.html#a2e3c69dd70582da81cf1e32414cc5e2d){:target="_blank"} to add a new graph to the list.

The `TMultiGraph` owns the objects in the list. The drawing and fitting options are the same as for {% include ref class="TGraph" %}.

_**Example**_

{% highlight C++ %}
{
// Create the points:
   const Int_t n = 10;
   Double_t x[n] = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   Double_t y[n] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};
   Double_t x2[n] = {-.12,.15,.35,.45,.6,.71,.8,.95,.99,1.05};
   Double_t y2[n] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};

// Create the width of errors in x and y direction:
   Double_t ex[n] = {.05,.1,.07,.07,.04,.05,.06,.07,.08,.05};
   Double_t ey[n] = {.8,.7,.6,.5,.4,.4,.5,.6,.7,.8};

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

## TGraph2D ##

A {% include ref class="TGraph2D" %} graph is a graphics object that is made of three arrays X, Y and Z with the same number of points each.
