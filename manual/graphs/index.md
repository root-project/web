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
A histogram is used for continuous data, where the bins represent ranges of data (binned data), see → [Fitting histograms]({{ "/manual/fitting" | relative_url }}).

{% include tutorials name="Graph" url="graphs" %}

## Graph classes

ROOT provides numerous graph classes, of which the following are among the most used:

[TGraph](https://root.cern/doc/master/classTGraph.html){:target="_blank"}: A graph.

[TGraphErrors](https://root.cern/doc/master/classTGraphErrors.html){:target="_blank"}: A graph with error bars.

[TGraphBentErrors](https://root.cern/doc/master/classTGraphBentErrors.html){:target="_blank"}: A {% include ref class="TGraph" %} with bent, asymmetric error bars.

[TGraphMultiErrors](https://root.cern/doc/master/classTGraphMultiErrors.html){:target="_blank"}: A {% include ref class="TGraph" %} with asymmetric error bars and multiple y error dimensions.

[TGraphPolar](https://root.cern/doc/master/classTGraphPolar.html){:target="_blank"}: A polar graph including error bars.

[TGraphQQ](https://root.cern/doc/master/classTGraphQQ.html){:target="_blank"}: Draws quantile-quantile plots.

[TMultiGraph](https://root.cern/doc/master/classTMultiGraph.html){:target="_blank"}: A collection of {% include ref class="TGraph" %} (or derived) objects.

[TGraph2D](https://root.cern/doc/master/classTGraph2D.html){:target="_blank"}: Graph made of three arrays X, Y and Z with the same number of points each.

[TGraph2DErrors](https://root.cern/doc/master/classTGraph2DErrors.html){:target="_blank"}: A {% include ref class="TGraph2D" %} with error bars.

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

`F1`: As F, but the filled area is no more repartee around X=0 or Y=0.

`F2`: Draws a filled area poly line connecting the center of bins.

`A`: Axis are drawn around the graph.

`C`: A smooth curve is drawn.

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

### Setting titles for a graph

Before giving the axis of a graph a title you need to draw the graph first. 

You can set the title by getting the axis and calling the [TGraph::SetTitle()](https://root.cern/doc/master/classTGraph.html#a56aed9b71c9ea7dc48285c8ecc285aed){:target="_blank"} method.

You can use the [TAxis::CenterTitle](https://root.cern/doc/master/classTAxis.html#a7eeb578be928e04606ed5510d8472953){:target="_blank"} method to center the title.

_**Example**_

Assuming that `n`, `x`, and `y` are defined. Then the titles of the `x` and `y` axes are set as follows:

{% highlight C++ %}
   root[] gr5 = new TGraph(n,x,y)
   root[] gr5->Draw()
   <TCanvas::MakeDefCanvas>: created default TCanvas with name c1
   root[] gr5->Draw("ALP")
   root[] gr5->GetXaxis()->SetTitle("X-Axis")
   root[] gr5->GetYaxis()->SetTitle("Y-Axis")
   root[] gr5->GetXaxis()->CenterTitle()
   root[] gr5->GetYaxis()->CenterTitle()
   root[] gr5->Draw("ALP")
{% endhighlight %}

### Zooming a graph

To zoom a graph you can create a histogram with the desired axis range first. Draw the empty histogram and then
draw the graph using the existing axis from the histogram.

_**Example**_

{% highlight C++ %}
{
   TCanvas *c1 = new TCanvas("c1","A Zoomed Graph",200,10,700,500);
   TH2F *hpx = new TH2F("hpx","Zoomed Graph Example",10,0,0.5,10,1.0,8.0);
   hpx->SetStats(kFALSE); // no statistics
   hpx->Draw();

   Int_t n = 10;
   Double_t x[10] = {-.22,.05,.25,.35,.5,.61,.7,.85,.89,.95};
   Double_t y[10] = {1,2.9,5.6,7.4,9,9.6,8.7,6.3,4.5,1};
   
   TGraph *gr = new TGraph(n,x,y);
   gr->SetMarkerColor(4);
   gr->SetMarkerStyle(20);
   gr->Draw("LP");
}
{% endhighlight %}

{% include figure_image
   img="zoom.png"
   caption="A zoomed graph."
%}

### Fitting graphs

- Use the graph `Fit()` methods (for example [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#a61269bcd47a57296f0f1d57ceff8feeb){:target="_blank"}), for fitting graphs.

For more information on the `Fit()` method, → see [Fitting histograms]({{ "/manual/fitting" | relative_url }}).


## Graphs with error bars


A {% include ref class="TGraphErrors" %} is a {% include ref class="TGraph" %} with error bars.

The {% include ref class="TGraphPainter" %} class implements all drawing options for graphs with error bars.

{% include ref class="TGraphErrors" %} uses 4 parameters: X, Y (as in {% include ref class="TGraph" %}), X-errors, and Y-errors (the size of the errors in the x and y direction).

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

A {% include ref class="TMultiGraph" %} is a collection of {% include ref class="TGraph" %} (or derived) objects.

- Use [TMultiGraph::Add()](https://root.cern/doc/master/classTMultiGraph.html#a2e3c69dd70582da81cf1e32414cc5e2d){:target="_blank"} to add a new graph to the list.

The {% include ref class="TMultiGraph" %} owns the objects in the list. The drawing and fitting options are the same as for {% include ref class="TGraph" %}.

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

A {% include ref class="TGraph2D" %} graph is a graphics object that is made of three arrays `X`, `Y` and `Z` with the same number of points each.

The {% include ref class="TGraph2D" %} class has the following constructors:

- With a dimension n of an array and three arrays `x`, `y`, and `z` (can be arrays of doubles, floats, or integers).

{% highlight C++ %}
   TGraph2D *g = new TGraph2D(n,x,y,z);
{% endhighlight %}

- With only the dimension n of an array.

 {% highlight C++ %}
   TGraph2D *g = new TGraph2D(n);
 {% endhighlight %}
 
- Internal arrays are filled with the `SetPoint()` method at the position `i` with the values `x`, `y`, `z`.

{% highlight C++ %}
   g->SetPoint(i,x,y,z);
{% endhighlight %}

- Without parameters. Use the `SetPoint()` method to fill the internal arrays.

{% highlight C++ %}
   TGraph2D *g = new TGraph2D();
{% endhighlight %}

- From a file. The arrays are read from the ASCII file, for example `graph.dat` according to a specified format. The format’s default value is
`%lg %lg %lg`.

{% highlight C++ %}
   TGraph2D *g = new TGraph2D("graph.dat");
{% endhighlight %}

Note that in any of last three cases, you can use the `SetPoint()` method to change a data point or to add
a new one. If the data point index `(i)` is greater than the size of the internal arrays, they are automatically extended.

### Drawing options

You can draw a {% include ref class="TGraph2D" %} with any drawing option valid for 2D histogram drawing. In this case, an intermediate 2D
histogram is filled using the Delaunay triangles technique to interpolate the data set.

You can also use the following specific drawing options for {% include ref class="TGraph2D" %} graphs:

- `TRI`: Delaunay triangles are drawn using the filled area. A hidden surface drawing technique is used. The surface
is painted with the current fill area color. The edges of the triangles are painted with the current line color.
- `TRIW`: Delaunay triangles are drawn as wire frames.
- `TRI1`: Delaunay triangles are painted with color levels. The edges of the triangles are painted with the
current line color.
- `TRI2`: Delaunay triangles are painted with color levels.
- `P`: Draws a marker at each vertex.
- `P0`: Draws a circle at each vertex. Each circle background is white.

_**Example**_

{% highlight C++ %}
{
   TCanvas *c = new TCanvas("c","Graph2D example",0,0,700,600);
   Double_t x, y, z, P = 6.;
   Int_t np = 200;
   TGraph2D *dt = new TGraph2D();
   TRandom *r = new TRandom();
   for (Int_t N=0; N<np; N++) {
      x = 2*P*(r->Rndm(N))-P;
      y = 2*P*(r->Rndm(N))-P;
      z = (sin(x)/x)*(sin(y)/y)+0.2;
      dt->SetPoint(N,x,y,z);
   }
   gStyle->SetPalette(55);
   dt->Draw("surf1");
}
{% endhighlight %}

{% include figure_image
   img="graph2d.png"
   caption="A TGraph2D with the drawing option surf1."
%}

