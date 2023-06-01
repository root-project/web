---
title: "New class TScatter"
layout: archive
author: Olivier Couet
---

<center>
   <img src="{{'/assets/images/scatter.png' | relative_url}}" alt="TScatter" style="width: 60%" width="1600" height="749" />
</center>

2D Scatter plots are a very popular way to represent scientific data. [Many scientific plotting
packages](https://matplotlib.org/stable/gallery/shapes_and_collections/scatter.html#sphx-glr-gallery-shapes-and-collections-scatter-py)
have this functionality. ROOT itself offers this kind of tools via:

  - [The option `SCAT` to draw 2D histograms](https://root.cern/doc/master/classTHistPainter.html#HP11).
    But that's indeed a fake scatter plot because the points drawn are random in each bin.
    The number of points being proportional to the cell content.
  - [The option `P` to draw TGraph](https://root.cern/doc/master/classTGraphPainter.html#GrP1).
    A marker will be drawn at each point positions but all markers will have the same size and the same color.
  - [The 'COL' option of `TTree::Draw`](https://root.cern/doc/master/classTTree.html#a73450649dc6e54b5b94516c468523e45).
    `tree.Draw("e1:e2:e3","","col");` a 2D scatter is produced with e1 vs e2, and e3 is mapped on the current
    color palette. That's a bit better as it allows to draw three variables on a 2D plot. But
    one need to create a {% include ref class="TTree" %} or a {% include ref class="TNtuple" %} that's
    a bit heavy when the data are already stored in simple vectors.

Therefore there was a need for a new class able to produce, in a simple way, this famous
multi-variables way to visualize data.

In order to full-fill these requirements a new class, {% include ref class="TScatter" %}, has been
implemented. It is able to draw a four variables scatter plot on a single plot. The first two variables
are the x and y coordinates of the markers, the third one is mapped on the current color map, and
the fourth one on the marker size.

Note that it is recommended to use a transparent color map as markers will, most of the time, overlap.

The code to produce a scatter plot with the new class is as simple as:

{% highlight C++ %}
void scatter()
{
   auto canvas = new TCanvas();
   gStyle->SetPalette(kBird, 0, 0.6); // define a transparent palette

   const int n = 100;
   double x[n];
   double y[n];
   double c[n];
   double s[n];

   // Define four random data set
   auto r  = new TRandom();
   for (int i=0; i<n; i++) {
      x[i] = 100*r->Rndm(i);
      y[i] = 200*r->Rndm(i);
      c[i] = 300*r->Rndm(i);
      s[i] = 400*r->Rndm(i);
   }

   auto scat = new TScatter(n, x, y,c,s);
   scat->SetMarkerStyle(20);
   scat->SetMarkerColor(kRed);
   scat->SetTitle("Scatter plot;X;Y");
   scat->Draw("A");
}
{% endhighlight %}

