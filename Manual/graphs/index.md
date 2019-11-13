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
   file="graph.root" canvas="c1" width="500px" height="350px"
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
   gr1->Draw("A*");
{% endhighlight %}

{% include figure_jsroot
   file="graph-star.root" canvas="c1" width="500px" height="350px"
   caption="Graph drawn with Draw(\"A\*\")."
%}

## Fitting graphs