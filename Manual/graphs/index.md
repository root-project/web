---
title: Graphs
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---
Advanced organizer ...

> **Tutorials**
>
> Graph tutorials are available at → [https://root.cern/doc/master/group__tutorial__graphs.html](https://root.cern/doc/master/group__tutorial__graphs.html)

## Graph classes

The following graph classes are available in ROOT, among others:

[TGraph](https://root.cern/doc/master/classTGraph.html): A graph.

[TGraphErrors](https://root.cern/doc/master/classTGraphErrors.html): A graph with error bars.

[TGraphAsymmErrors](https://root.cern/doc/master/classTGraphAsymmErrors.html)

[TGraphPolar](https://root.cern/doc/master/classTGraphPolar.html): A polar graph including error bars.

[TGraphQQ](https://root.cern/doc/master/classTGraphQQ.html): Draws quantile-quantile plots.

[TMultiGraph](https://root.cern/doc/master/classTMultiGraph.html)

[TGraph2D](https://root.cern/doc/master/classTGraph2D.html): Graph made of three arrays X, Y and Z with the same number of points each.

[TGraph2DErrors](https:/root.cern/doc/master/classTGraph2DErrors.html): A `TGraph2D` with error bars.

## Working with graphs

Advanced organizer ...

### Creating a graph

Use a graph constructor to create a graph object.

_**Example**_

Arrays of coordinates are defined and then graph with the [TGraph](https://root.cern/doc/master/classTGraph.html) constructor is created.<br>
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

The [TGraphPainter](https://root.cern/doc/master/classTGraph.html) class implements all drawing options.

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

For detailed information on the drawing options for graph classes, refer to [TGraphPainter](https://root.cern/doc/master/classTGraph.html).

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

- Use the graph `Fit()` methods (for example [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#a61269bcd47a57296f0f1d57ceff8feeb), for fitting graphs.

For more information on the `Fit()` method, see *Fitting histograms*.

## Graphs with error bars

A [TGraphErrors](https://root.cern/doc/master/classTGraphErrors.html) is a [TGraph](https://root.cern/doc/master/classTGraph.html) with error bars.

The [TGraphPainter](https://root.cern/doc/master/classTGraph.html) class implements all drawing options for graphs with error bars.

`TGraphErrors` uses 4 parameters: X, Y (as in TGraph), X-errors, and Y-errors (the size of the errors in the x
and y direction).

_**Example_**

{% highlight C++ %}
{
   c1 = new TCanvas("c1","A Simple Graph with error bars",200,10,700,500);
   c1->SetGrid();
   
// Creating the coordinate arrays:
   Int_t n = 10;
   Float_t x[n] = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   Float_t y[n] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};

//Creating the error arrays:
   Float_t ex[n] = {.05,.1,.07,.07,.04,.05,.06,.07,.08,.05};
   Float_t ey[n] = {.8,.7,.6,.5,.4,.4,.5,.6,.7,.8};

// Create the TGraphErrors and draw it.
   gr = new TGraphErrors(n,x,y,ex,ey);
   gr->SetTitle("TGraphErrors Example");
   gr->SetMarkerColor(4);
   gr->SetMarkerStyle(21);
   gr->Draw("ALP");
  c1->Update();
}
{% endhighlight %}