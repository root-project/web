---
title: "New color schemes"
layout: archive
author: Olivier Couet
---

Choosing an appropriate color scheme is essential for making results easy to understand and
interpret. Factors like colorblindness and converting colors to grayscale for publications
can impact accessibility. Furthermore, results should be aesthetically pleasing. The following
three color schemes, recommended by M. Petroff in [arXiv:2107.02270v2](https://arxiv.org/pdf/2107.02270)
and available on [GitHub](https://github.com/mpetroff/accessible-color-cycles)
under the MIT License, meet these criteria.

<center>
   <img src="{{'/assets/images/accessiblecolorschemes.png' | relative_url}}" alt="Accessible color schemes" style="width: 60%" width="1600" height="749" />
</center>

The following example demonstrates how to use the accessible color schemes (in this case, the one
with six colors) to represent a THStack. It also shows that the grayscale version is an
acceptable alternative.

<center>
   <img src="{{'/assets/images/thstackcolorscheme1.png' | relative_url}}" alt="THStack color schemes 1" style="width: 60%" width="1600" height="749" />
</center>

<center>
   <img src="{{'/assets/images/thstackcolorscheme2.png' | relative_url}}" alt="THStack color schemes 2" style="width: 60%" width="1600" height="749" />
</center>

{% highlight C++ %}
void thstackcolorscheme()
{
   auto c1 = new TCanvas();
   auto hs = new THStack("hs","Stacked 1D histograms colored using 6-colors scheme");

   // Create six 1-d histograms  and add them in the stack
   auto h1st = new TH1F("h1st","A",100,-4,4);
   h1st->FillRandom("gaus",20000);
   h1st->SetFillColor(kP6Blue);
   hs->Add(h1st);

   auto h2st = new TH1F("h2st","B",100,-4,4);
   h2st->FillRandom("gaus",15000);
   h2st->SetFillColor(kP6Yellow);
   hs->Add(h2st);

   auto h3st = new TH1F("h3st","C",100,-4,4);
   h3st->FillRandom("gaus",10000);
   h3st->SetFillColor(kP6Red);
   hs->Add(h3st);

   auto h4st = new TH1F("h4st","D",100,-4,4);
   h4st->FillRandom("gaus",10000);
   h4st->SetFillColor(kP6Grape);
   hs->Add(h4st);

   auto h5st = new TH1F("h5st","E",100,-4,4);
   h5st->FillRandom("gaus",10000);
   h5st->SetFillColor(kP6Gray);
   hs->Add(h5st);

   auto h6st = new TH1F("h6st","F",100,-4,4);
   h6st->FillRandom("gaus",10000);
   h6st->SetFillColor(kP6Violet);
   hs->Add(h6st);

   // Draw the stack with colors.
   hs->Draw();
   TLegend *l = gPad->BuildLegend(.8,.55,1.,.9,"","F");
   l->SetLineWidth(0);
   l->SetFillStyle(0);

   // Draw the stack using gray scale.
   auto c2 = new TCanvas();
   c2->SetGrayscale();
   hs->Draw();
   l->Draw();
}
{% endhighlight %}

These new color schemes, now in the master version of ROOT, will be available
in version 6.34.
