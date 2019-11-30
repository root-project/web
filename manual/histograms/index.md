---
title: Histograms
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Histograms play a fundamental role in any kind of physical analysis. Histograms not only serve to visualize measurements, but also represent a powerful form of data reduction. ROOT supports histograms up to three dimensions.

> **Tutorials**
>
> Histogram tutorials are available at → [https://root.cern/doc/master/group__tutorial__hist.html](https://root.cern/doc/master/group__tutorial__hist.html)

## Histogram classes

ROOT supports the following histogram types:

-   Histograms up to three dimensions (1-D, 2-D, 3-D).

-   Profile histograms, which are used to display the mean value of Y and its standard deviation for each bin in X.

All histogram classes are derived from the [TH1](https://root.cern/doc/master/classTH1.html) base class.

The following histogram classes are available in ROOT, among others:

### 1-D histograms

  - [TH1C](https://root.cern/doc/master/classTH1C.html): One byte per channel. Maximum bin content = 127.

  - [TH1S](https://root.cern/doc/master/classTH1S.html): One short per channel. Maximum bin content = 32767.

  - [TH1I](https://root.cern/doc/master/classTH1I.html): One int per channel. Maximum bin content = 2147483647.

  - [TH1F](https://root.cern/doc/master/classTH1F.html): One float per channel. Maximum precision 7 digits.

  - [TH1D](https://root.cern/doc/master/classTH1D.html): One double per channel. Maximum precision 14 digits.

### 2-D histograms

  - [TH2C](https://root.cern/doc/master/classTH2C.html): One byte per channel. Maximum bin content = 127.

  - [TH2S](https://root.cern/doc/master/classTH2S.html): One short per channel. Maximum bin content = 32767.

  - [TH2I](https://root.cern/doc/master/classTH2I.html): One int per channel. Maximum bin content = 2147483647.

  - [TH2F](https://root.cern/doc/master/classTH2F.html): One float per channel. Maximum precision 7 digits.

  - [TH2D](https://root.cern/doc/master/classTH2D.html): One double per channel. Maximum precision 14 digits.

### 3-D histograms

  - [TH3C](https://root.cern/doc/master/classTH3C.html): One byte per channel. Maximum bin content = 127.

  - [TH3S](https://root.cern/doc/master/classTH3S.html): One short per channel. Maximum bin content = 32767.

  - [TH3I](https://root.cern/doc/master/classTH3I.html): One int per channel. Maximum bin content = 2147483647.

  - [TH3F](https://root.cern/doc/master/classTH3F.html): One float per channel. Maximum precision 7 digits.

  - [TH3D](https://root.cern/doc/master/classTH3D.html): One double per channel. Maximum precision 14 digits.

### Profile histograms

  - [TProfile](https://root.cern/doc/master/classTProfile.html): Profile histogram to display the mean value of Y and its error for each bin in X.

  - [TProfile2D](https://root.cern/doc/master/classTProfile2D.html): Profile2D histograms are used to display the mean value of Z and its RMS for each cell in X,Y.

  - [TProfile3D](https://root.cern/doc/master/classTProfile3D.html): Profile3D histograms are used to display the mean value of T and its RMS for each cell in X,Y,Z.

### Bin numbering

All histogram types support fixed or variable bin sizes. 2-D histograms may have fixed size bins along X and variable size bins along Y or vice-versa.

#### Conventions

For all histogram types: `nbins`, `xlow`, `xup`:

-   bin# 0 contains the underflow.

-   bin# 1 contains the first bin with low-edge (`xlow` INCLUDED).

-   The second to last bin (bin# nbins) contains the upper-edge (`xup` EXCLUDED).

-   The last bin (bin# `nbins+1`) contains the overflow.

-   In case of 2-D or 3-D histograms, a *global bin* number is defined.

_**Example**_

Assuming a 3-D histogram `h` with `binx`, `biny`, `binz`, the function returns a global/linear bin number.

`Int_t bin = h->GetBin(binx, biny, binz);`

This *global bin* is useful to access the bin information independently of the dimension.

#### Re-binning

You can re-bin a histogram via the [TH1::Rebin()](https://root.cern/doc/master/classTH1.html#aff6520fdae026334bf34fa1800946790) method. It returns a new histogram with the re-binned contents. If bin errors were stored, they are recomputed during the re-binning.

## Working with histograms

Advanced organizer ...

### Creating and copying a histogram

- Use a histogram constructor to create a histogram object.

_**Examples**_

In the following examples, histograms are created for the classes [TH1I](https://root.cern/doc/master/classTH1I.html), [TH2F](https://root.cern/doc/master/classTH2F.html), [TH3D](https://root.cern/doc/master/classTH3D.html):

{% highlight C++ %}
   TH1* h1 = new TH1I("h1", "h1 title", 100, 0.0, 4.0);
   TH2* h2 = new TH2F("h2", "h2 title", 40, 0.0, 2.0, 30, -1.5, 3.5);
   TH3* h3 = new TH3D("h3", "h3 title");
{% endhighlight %}

-- or ­--

- Clone/copy an existing histogram with the `Clone()` method.

_**Example**_

`TH1* hc = (TH1*)h1->Clone();`

### Filling a histogram

- Fill a histogram with the [TH1::Fill()](https://root.cern/doc/master/classTH1.html#a77e71290a82517d317ea8d05e96b6c4a) method.

_**Examples**_

{% highlight C++ %}
   h1->Fill(x);
   h1->Fill(x,w); // with weight
   h2->Fill(x,y);
   h2->Fill(x,y,w);
   h3->Fill(x,y,z);
   h3->Fill(x,y,z,w);
{% endhighlight %}

The `Fill()` method computes the bin number corresponding to the given x, y or z argument and increments this bin by the given weight.<br>
The `Fill()` method returns the bin number for 1-D histograms or *global bin* number for 2-D and 3-D histograms.

#### Filling a histogram with random numbers

- Fill a histogram with random numbers with the [TH1::FillRandom()](https://root.cern/doc/master/classTH1.html#a1e9d6258ae798a0eb52aef58a72758a5) method.

The `FillRandom()` method uses the contents of an existing `TF1` function or another `TH1` histogram (for all dimensions).

_**Example**_

A histogram is randomly filled 10 000 times with a default Gaussian distribution of mean 0 and sigma 1.

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
{% endhighlight %}

Use the [TH1::GetRandom()](https://root.cern/doc/master/classTH1.html#a4dd1bbf1cbeea1e7da03e781d01cf232) method to get a random number distributed according the contents of a histogram.

### Adding, multiplying and dividing histograms

Following operations are supported on histograms or between histograms:

-   Addition of a histogram to the current histogram.

-   Additions of two histograms with coefficients and storage into the current histogram.

-   Multiplications and divisions are supported in the same way as additions.

You can use the operators (+, *, /) or the [TH1](https://root.cern/doc/master/classTH1.html) methods `Add()`, `Multiply()` and `Divide()`.

_**Examples**_

Multiplying a histogram object with a constant:

`h1.Scale(const)`

Creating a new histogram without changing the original one:

`TH1F h3 = 8*h1;`

Multiplying two histograms and put the result in the third one:

`TH1F h3 = h1*h2;`

### Drawing a histogram

  - Use the [TH1::Draw()](https://root.cern/doc/master/classTH1.html#aa53a024a9e94d5ec91e3ef49e49563da) method to draw a histogram.

    It creates a [THistPainter](https://root.cern/doc/master/classTHistPainter.html) object that specializes the drawing of the histogram. The `THistPainter` class is separated from the histogram, so that the histogram does not contain the graphics overhead.

  - Use the [TH1::DrawCopy()](https://root.cern/doc/master/classTH1.html#aa19b24b96284284d677cd73f00d29d79) method to create a copy of the histogram when drawing it.

  - Use the [TH1::DrawNormalized()](https://root.cern/doc/master/classTH1.html#a46394b325a71d59fe0009172079b4a62) method to draw a normalized copy of a histogram.

_**Example**_

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
{% endhighlight %}

{% include figure_jsroot
   file="h1.root" object="h1" width="500px" height="350px"
   caption="Histogram drawn with Draw()."
%}

#### Drawing options

> **Note**
>
> The drawing options are not case sensitive.

**Drawing options for all histogram classes**

For detailed information on the drawing options for all histogram classes, refer to
[THistPainter](https://root.cern/doc/master/classTHistPainter.html#HP01a).

`AXIS`: Draws only the axis.

`HIST`: When a histogram has errors, it is visualized by default with error bars. To visualize it without errors, use HIST together with the required option (for example "`HIST SAME C`").

`SAME`: Superimposes on previous picture in the same pad.

`CYL`: Uses cylindrical coordinates.

`POL`: Uses polar coordinates.

`SPH`: Uses spherical coordinates.

`PSR`: Uses pseudo-rapidity/phi coordinates.

`LEGO`: Draws a lego plot with hidden line removal.

`LEGO1`: Draws a lego plot with hidden surface removal.

`LEGO2`: Draws a lego plot using colors to show the cell contents.

`SURF`: Draws a surface plot with hidden line removal.

`SURF1`: Draws a surface plot with hidden surface removal.

`SURF2`: Draws a surface plot using colors to show the cell contents.

`SURF3`: Same as SURF with a contour view on the top.

`SURF4`: Draws a surface plot using Gouraud shading.

`SURF5`: Same as `SURF3` but only the colored contour is drawn. Used with option `CYL`, `SPH` or `PSR`, it allows to draw colored contours on a sphere, a cylinder or in a pseudo rapidly space. In Cartesian or polar coordinates, option SURF3 is used.

_**Example**_

{% highlight C++ %}
   TH2F h2("h2","Histogram filled with random numbers",40,-4,4,40,-20,20);
   float px, py;
   for (int i = 0; i < 25000; i++) {
      gRandom->Rannor(px,py);
      h2.Fill(px,5*py);
   }
   h2.Draw("LEGO1");
{% endhighlight %}

{% include figure_image
   img="histo-lego.png"
   caption="Histogram drawn with Draw(\"LEGO1\")."
%}

{% highlight C++ %}
   h2.Draw("LEGO1 POL");
{% endhighlight %}

{% include figure_image
   img="histo-lego-pol.png"
   caption="Histogram drawn with Draw(\"LEGO1 POL\")."
%}

**Drawing options for 1-D histogram classes**

For detailed information on the drawing options for 1-D histogram classes, refer to
[THistPainter](https://root.cern/doc/master/classTHistPainter.html#HP01b).

`AH`: Draws the histogram, but not the axis labels and tick marks.

`B`: Draws a bar chart.

`C`: Draws a smooth curve through the histogram bins.

`E`: Draws error bars.

`E0`: Draws error bars including bins with 0 contents.

`E1`: Draws error bars with perpendicular lines at the edges

`E2`: Draws error bars with rectangles.

`E3`: Draws a filled area through the end points of the vertical error bars.

`E4`: Draws a smoothed filled area through the end points of the error bars.

`L`: Draws a line through the bin contents.

`P`: Draws a (poly)marker at each bin using the histogram's current marker style.

`P0`: Draws current marker at each bin including empty bins.

`PIE`: Draws a pie chart.

`H`: Draws a histogram with a * at each bin.

`LF2`: Draws a histogram with option `L` but with a filled area. `L` also draws a filled area if the histogram fill color is set but the fill area corresponds to the histogram contour.

`9`: Forces a histogram to be drawn in high resolution mode. By default, the histogram is drawn in low resolution in case the number of bins is greater than the number of pixels in the current pad.

`][`: Draws a histogram without the vertical lines for the first and the last bin. Use it, when superposing many histograms on the same picture.

**Drawing options for 2-D histogram classes**

For detailed information on the drawing options for 2-D histogram classes, refer to [THistPainter](https://root.cern/doc/master/classTHistPainter.html).

By default, 2-D histograms are drawn as scatter plots.

`ARR`: Arrow mode. Shows gradient between adjacent cells.

`BOX`: Draws a box for each cell with surface proportional to contents.

`BOX1`: A sunken button is drawn for negative values, a raised one for positive values

`COL`: Draws a box for each cell with a color scale varying with contents.

`COLZ`: Same as `COL` with a drawn color palette.

`CONT`: Draws a contour plot (same as `CONT0`).

`CONTZ`: Same as `CONT` with a drawn color palette.

`CONT0`: Draws a contour plot using surface colors to distinguish contours.

`CONT1`: Draws a contour plot using line styles to distinguish contours.

`CONT2`: Draws a contour plot using the same line style for all contours.

`CONT3`: Draws a contour plot using fill area colors.

`CONT4`: Draws a contour plot using surface colors (`SURF2` option at `theta = 0`).

`CONT5`: Uses Delaunay triangles to compute the contours.

`LIST`: Generates a list of [TGraph](https://root.cern/doc/master/classTGraph.html) objects for each contour.

`FB`: To be used with `LEGO` or `SURFACE`, suppresses the Front-Box.

`BB`: To be used with `LEGO` or `SURFACE`, suppresses the back-box.

`A`: To be used with `LEGO` or `SURFACE`, suppresses the axis.

`SCAT`: Draws a scatter-plot (default).

`SPEC`: Uses [TSpectrum2Painter](https://root.cern/doc/master/classTSpectrum2Painter.html) tool for drawing.

`TEXT`: Draws bin contents as text (format set via `gStyle->SetPaintTextFormat`).

`TEXTnn`: Draws bin contents as text at angle nn (0 < nn < 90).

`[cutg]`: Draws only the sub-range selected by the [TCutG](https://root.cern/doc/master/classTCutG.html) name "`cutg`".

`Z`: The Z option can be specified with the options: `BOX`, `COL`, `CONT`, `SURF`, and `LEGO` to display.

**Drawing options for 3-D histogram classes**

For detailed information on the drawing options for 3-D histogram classes, refer to [THistPainter](https://root.cern/doc/master/classTHistPainter.html).

By default, 3-D histograms are drawn as scatter plots.

`BOX`: Draws a box for each cell with volume proportional to the contents.

`LEGO`: Same as `BOX`.

`ISO`: Draws an iso surface.

`FB`: Suppresses the front-box.

`BB`: Suppresses the back-box.

`A`: Suppresses the axis.

### Profile histograms

Profile histograms are used to display the mean value of Y and its error for each bin in X.

When you fill a profile histogram with [TProfile.Fill()](https://root.cern/doc/master/classTProfile.html#ab851e2083286f48bee2a74ea816f6125):

- `H[j]` contains for each bin `j` the sum of the `y` values for this bin.

- `L[j]` contains the number of entries in the bin `j`.

- `e[j]` or `s[j]` will be the resulting error depending on the selected option.

The following formulae show the cumulated contents (capital letters) and the values displayed by the printing or plotting routines (small letters) of the elements for bin `J`. 

`E[j] = sum Y**2`<br>
`L[j] = number of entries in bin J`<br>
`H[j] = sum Y`<br>
`h[j] = H[j] / L[j]`<br>
`s[j] = sqrt[E[j] / L[j] - h[j]**2]`<br>
`e[j] = s[j] / sqrt[L[j]]`<br>

The displayed bin content for bin `J` of a [TProfile](https://root.cern/doc/master/classTProfile.html) is always [h(J)](https://root.cern/doc/master/RSha256_8hxx.html#acf9942d15f0dd0ac4fc5ca66096a3f6d). 
The corresponding bin error is by default [e(J)](https://root.cern/doc/master/RSha256_8hxx.html#af62772e2f383ddbe93a93eff2a5f543a). 
In case the option `s` is used (in the constructor or by calling  [TProfile::BuildOptions](https://root.cern/doc/master/classTProfile.html#a1ff9340284c73ce8762ab6e7dc0e6725)) the displayed error is `s(J)`.

In the special case where `s[j]` is zero, when there is only one entry per bin, `e[j]` is computed from the average of the `s[j]` for all bins. This approximation is used to keep the bin during a fit operation.

_**Example**_
{% highlight C++ %}
{
  auto c1 = new TCanvas("c1","Profile histogram example",200,10,700,500);
  auto hprof  = new TProfile("hprof","Profile of pz versus px",100,-4,4,0,20);
  Float_t px, py, pz;
  for ( Int_t i=0; i<25000; i++) {
    gRandom->Rannor(px,py);
    pz = px*px + py*py;
    hprof->Fill(px,pz,1);
  }
  hprof->Draw();
}
{% endhighlight %}

{% include figure_jsroot
   file="profile_1.root" object="hprof" width="500px" height="350px"
   caption="A profile histogram example."
%}

### Fitting histograms

#### Fitting 1-D histograms with pre-defined functions

- Use the [TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a) method to fit a 1-D histogram with a pre-defined function. The name of the pre-definded function is the first parameter. For pre-defined functions, you do not need to set initial values for the parameters.

_**Example**_

A histogram object `hist` is fit with a gaussian:

{% highlight C++ %}
   root[] hist.Fit("gaus");
{% endhighlight %}

The following pre-defined functions are available:

- `gaus`: Gaussian function with 3 parameters: `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)`

- `expo`: Exponential function with 2 parameters: `f(x) = exp(p0+p1*x)`

- `polN`: Polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*x2 +...`

- `chebyshevN`: Chebyshev polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*(2*x2-1) +...`

- `landau`: Landau function with mean and sigma. This function has been adapted from the `CERNLIB` routine `G110 denlan` (see [TMath::Landau](https://root.cern/doc/master/namespaceTMath.html#a656690875991a17d35e8a514f37f35d9)).

- `gausn`: Normalized form of the gaussian function with 3 parameters `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)/(p2*sqrt(2PI))`


#### Fitting a 1-D histogram with user-defined functions

First you create a [TF1](https://root.cern/doc/master/classTF1.html) object, then use the name of the `TF1` fitting function in the [Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a) method.

You can create the `TF1` fitting function as follows:

- from an existing expressions defined in [TFormula](https://root.cern/doc/master/classTFormula.html),

- defining your own function.

**Creating a TF1 fitting function with a TFormula expression**

_**Example**_

A `myfit` function is created with 3 parameters in the range between 0 and 2.

{% highlight C++ %}
   myfit->SetParName(0,"c0");
   myfit->SetParName(1,"c1");
   myfit->SetParName(2,"slope");
   myfit->SetParameter(0, 1);
   myfit->SetParameter(1, 0.05);
   myfit->SetParameter(2, 0.2);
{% endhighlight %}

Then you can use the function for fitting.

{% highlight C++ %}
   hist->Fit("myfit");
{% endhighlight %}

**Creating a user TF1 fitting function**

A `TF1` fitting function must have two parameters:

- `Double_t *v`: Pointer to the variable array. This array must be a 1-D array with `v[0] = x` in case of a 1-dim histogram, `v[0] =x`, `v[1] = y` for a 2-D histogram, etc.

- `Double_t *par`: Pointer to the parameter array. par will contain the current values of parameters when it is called by the `FCN` function.

_**Example**_

An 1-D histogram is fit with a user-defined function.<br>
See also the `fitexample.C` tutorial.

{% highlight C++ %}
   // Define a function with 3 parameters
   Double_t fitf(Double_t *x,Double_t *par) {
      Double_t arg = 0;
      if (par[2]!=0) arg = (x[0] - par[1])/par[2];
      Double_t fitval = par[0]*TMath::Exp(-0.5*arg*arg);
      return fitval;
    }
{% endhighlight %}

Now the `fitf` function is used to fit a histogram.

{% highlight C++ %}
   void fitexample() {
   // Open a ROOT file and get a histogram.
   TFile *f = new TFile("hsimple.root");
   
   TH1F *hpx = (TH1F*)f->Get("hpx");

   // Create a TF1 object using the fitf function.
   // The last three parameters specify the number of parameters for the function.
   TF1 *func = new TF1("fit",fitf,-3,3,3);

   // Set the parameters to the mean and RMS of the histogram.
   func->SetParameters(500,hpx->GetMean(),hpx->GetRMS());

   //Giving the parameters names.
   func->SetParNames ("Constant","Mean_value","Sigma");

   // Call TH1::Fit with the name of the TF1 object.
   hpx->Fit("fit");
   }
 {% endhighlight %}

#### Accessing the fitted function parameters and results

- Use the [TH1::GetFunction()](https://root.cern/doc/master/classTH1.html#a9e78dd45433c2193988c76461e8c089c) method to access the fitted function parameters.

_**Examples**_

{% highlight C++ %}
   root[] TF1 *fit = hist->GetFunction(function_name);
   root[] Double_t chi2 = fit->GetChisquare();
   
// Value of the first parameter:
   root[] Double_t p1 = fit->GetParameter(0);

// Error of the first parameter:
   root[] Double_t e1 = fit->GetParError(0);
 {% endhighlight %}



