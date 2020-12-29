---
title: Histograms
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Histograms play a fundamental role in any kind of physical analysis. Histograms not only serve to visualize measurements, but also represent a powerful form of data reduction. ROOT supports histograms up to three dimensions.

**Binned data**

A histogram is used for continuous data, where the bins represent ranges of data. ROOT supports constant and variable bin widths.<br>
A graph or chart is a plot of categorical variables, this is un-binned data, see → [Graphs]({{ '/manual/graphs' | relative_url }}).

{% include tutorials name="Histogram" url="hist" %}

## Histogram classes

ROOT supports the following histogram types:

-   Histograms up to three dimensions (1-D, 2-D, 3-D).

-   Profile histograms, which are used to display the mean value of Y and its standard deviation for each bin in X.

All histogram classes are derived from the {% include ref class="TH1" %} base class.

The following histogram classes are available in ROOT, among others:

### 1-D histograms

  - [TH1C](https://root.cern/doc/master/classTH1C.html){:target="_blank"}: One byte per channel. Maximum bin content = 127.

  - [TH1S](https://root.cern/doc/master/classTH1S.html){:target="_blank"}: One short per channel. Maximum bin content = 32767.

  - [TH1I](https://root.cern/doc/master/classTH1I.html){:target="_blank"}: One int per channel. Maximum bin content = 2147483647.

  - [TH1F](https://root.cern/doc/master/classTH1F.html){:target="_blank"}: One float per channel. Maximum precision 7 digits.

  - [TH1D](https://root.cern/doc/master/classTH1D.html){:target="_blank"}: One double per channel. Maximum precision 14 digits.

### 2-D histograms

  - [TH2C](https://root.cern/doc/master/classTH2C.html){:target="_blank"}: One byte per channel. Maximum bin content = 127.

  - [TH2S](https://root.cern/doc/master/classTH2S.html){:target="_blank"}: One short per channel. Maximum bin content = 32767.

  - [TH2I](https://root.cern/doc/master/classTH2I.html){:target="_blank"}: One int per channel. Maximum bin content = 2147483647.

  - [TH2F](https://root.cern/doc/master/classTH2F.html){:target="_blank"}: One float per channel. Maximum precision 7 digits.

  - [TH2D](https://root.cern/doc/master/classTH2D.html){:target="_blank"}: One double per channel. Maximum precision 14 digits.

### 3-D histograms

  - [TH3C](https://root.cern/doc/master/classTH3C.html){:target="_blank"}: One byte per channel. Maximum bin content = 127.

  - [TH3S](https://root.cern/doc/master/classTH3S.html){:target="_blank"}: One short per channel. Maximum bin content = 32767.

  - [TH3I](https://root.cern/doc/master/classTH3I.html){:target="_blank"}: One int per channel. Maximum bin content = 2147483647.

  - [TH3F](https://root.cern/doc/master/classTH3F.html){:target="_blank"}: One float per channel. Maximum precision 7 digits.

  - [TH3D](https://root.cern/doc/master/classTH3D.html){:target="_blank"}: One double per channel. Maximum precision 14 digits.

### Profile histograms

  - [TProfile](https://root.cern/doc/master/classTProfile.html){:target="_blank"}: Profile histogram to display the mean value of Y and its error for each bin in X.

  - [TProfile2D](https://root.cern/doc/master/classTProfile2D.html){:target="_blank"}: Profile2D histograms are used to display the mean value of Z and its RMS for each cell in X,Y.

  - [TProfile3D](https://root.cern/doc/master/classTProfile3D.html){:target="_blank"}: Profile3D histograms are used to display the mean value of T and its RMS for each cell in X,Y,Z.

### Bin numbering

All histogram types support fixed or variable bin sizes. 2-D histograms may have fixed size bins along X and variable size bins along Y or vice-versa.

**Conventions**

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

**Re-binning**

You can re-bin a histogram via the [TH1::Rebin()](https://root.cern/doc/master/classTH1.html#aff6520fdae026334bf34fa1800946790){:target="_blank"} method. It returns a new histogram with the re-binned contents. If bin errors were stored, they are recomputed during the re-binning.

## Working with histograms


### Creating and copying a histogram

- Use a histogram constructor to create a histogram object.

_**Examples**_

In the following examples, histograms are created for the classes {% include ref class="TH1I" %}, {% include ref class="TH2F" %}, {% include ref class="TH3D" %}:

{% highlight C++ %}
   TH1* h1 = new TH1I("h1", "h1 title", 100, 0.0, 4.0);
   TH2* h2 = new TH2F("h2", "h2 title", 40, 0.0, 2.0, 30, -1.5, 3.5);
   TH3* h3 = new TH3D("h3", "h3 title");
{% endhighlight %}

-- or ­--

- Clone/copy an existing histogram with the `Clone()` method.

_**Example**_

{% highlight C++ %}
   TH1* hc = (TH1*)h1->Clone();
{% endhighlight %}

### Filling a histogram

- Fill a histogram with the [TH1::Fill()](https://root.cern/doc/master/classTH1.html#a77e71290a82517d317ea8d05e96b6c4a){:target="_blank"} method.

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

- Fill a histogram with random numbers with the [TH1::FillRandom()](https://root.cern/doc/master/classTH1.html#a1e9d6258ae798a0eb52aef58a72758a5){:target="_blank"} method.

The `FillRandom()` method uses the contents of an existing `TF1` function or another `TH1` histogram (for all dimensions).

_**Example**_

A histogram is randomly filled 10 000 times with a default Gaussian distribution of mean 0 and sigma 1.

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
{% endhighlight %}

Use the [TH1::GetRandom()](https://root.cern/doc/master/classTH1.html#a4dd1bbf1cbeea1e7da03e781d01cf232){:target="_blank"} method to get a random number distributed according the contents of a histogram.

### Adding, multiplying and dividing histograms

Following operations are supported on histograms or between histograms:

-   Addition of a histogram to the current histogram.

-   Additions of two histograms with coefficients and storage into the current histogram.

-   Multiplications and divisions are supported in the same way as additions.

You can use the operators (+, *, /) or the {% include ref class="TH1" %} methods `Add()`, `Multiply()` and `Divide()`.

_**Examples**_

Multiplying a histogram object with a constant:

{% highlight C++ %}
   h1.Scale(const)
{% endhighlight %}

Creating a new histogram without changing the original one:

{% highlight C++ %}
   TH1F h3 = 8*h1;
{% endhighlight %}

Multiplying two histograms and put the result in the third one:

{% highlight C++ %}
   TH1F h3 = h1*h2;
{% endhighlight %}

### Drawing a histogram

  - Use the [TH1::Draw()](https://root.cern/doc/master/classTH1.html#aa53a024a9e94d5ec91e3ef49e49563da){:target="_blank"} method to draw a histogram.

    It creates a {% include ref class="THistPainter" %} object that specializes the drawing of the histogram. The `THistPainter` class is separated from the histogram, so that the histogram does not contain the graphics overhead.

  - Use the [TH1::DrawCopy()](https://root.cern/doc/master/classTH1.html#aa19b24b96284284d677cd73f00d29d79){:target="_blank"} method to create a copy of the histogram when drawing it.

  - Use the [TH1::DrawNormalized()](https://root.cern/doc/master/classTH1.html#a46394b325a71d59fe0009172079b4a62){:target="_blank"} method to draw a normalized copy of a histogram.

_**Example**_

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
{% endhighlight %}

{% include figure_jsroot
   file="histograms.root" object="h1" width="500px" height="350px"
   caption="Histogram drawn with Draw()."
%}

#### Getting the bin width

- Use the [GetBinWidth()](https://root.cern/doc/master/classTH1.html#ad69a5fa0002361fd77f37990a29d1aa3){:target="_blank"} method to get the bin width of a histogram.

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
   h1.GetBinWidth(0)

   (double) 0.060000000
{% endhighlight %}

#### Drawing options

> **Note**
>
> The drawing options are not case sensitive.

**Drawing options for all histogram classes**

For detailed information on the drawing options for all histogram classes, refer to [THistPainter](https://root.cern/doc/master/classTHistPainter.html#HP01a){:target="_blank"}.

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

For detailed information on the drawing options for 1-D histogram classes, refer to [THistPainter](https://root.cern/doc/master/classTHistPainter.html#HP01b){:target="_blank"}.

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

For detailed information on the drawing options for 2-D histogram classes, refer to {% include ref class="THistPainter" %}.

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

`LIST`: Generates a list of {% include ref class="TGraph" %} objects for each contour.

`FB`: To be used with `LEGO` or `SURFACE`, suppresses the Front-Box.

`BB`: To be used with `LEGO` or `SURFACE`, suppresses the back-box.

`A`: To be used with `LEGO` or `SURFACE`, suppresses the axis.

`SCAT`: Draws a scatter-plot (default).

`SPEC`: Uses the {% include ref class="TSpectrum2Painter" %} tool for drawing.

`TEXT`: Draws bin contents as text (format set via `gStyle->SetPaintTextFormat`).

`TEXTnn`: Draws bin contents as text at angle nn (0 < nn < 90).

`[cutg]`: Draws only the sub-range selected by the {% include ref class="TCutG" %} name "`cutg`".

`Z`: The Z option can be specified with the options: `BOX`, `COL`, `CONT`, `SURF`, and `LEGO` to display.

**Drawing options for 3-D histogram classes**

For detailed information on the drawing options for 3-D histogram classes, refer to {% include ref class="THistPainter" %}.

By default, 3-D histograms are drawn as scatter plots.

`BOX`: Draws a box for each cell with volume proportional to the contents.

`LEGO`: Same as `BOX`.

`ISO`: Draws an iso surface.

`FB`: Suppresses the front-box.

`BB`: Suppresses the back-box.

`A`: Suppresses the axis.

### Drawing a histogram with error bars

You can draw a histogram with error bars.

_**Example**_

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
{% endhighlight %}

A canvas with the histogram is displayed.

- Click `View`, and then click `Editor`.

- Click on the histogram.

In the `Style` tab, you can select the error bars to displayed for the histogram.

{% include figure_image
   img="histogram-error-select.png"
   caption="Selection of error bars for a histogram."
%}

- Select `Simple`.

The size of the error bars is equal to the square root of the number of events in the histogram.

{% include figure_image
   img="histogram-error-bars.png"
   caption="Error bars for a histogram."
%}

Instead of using the `Editor`, you also can simply draw the error bars by:

{% highlight C++ %}
   h1.Draw("e");
{% endhighlight %}


### Example: Histogramming a data analysis

In [Example: Using a ROOT macro for data analysis]({{ '/manual/trees#example-using-a-root-macro-for-data-analysis' | relative_url }}) was shown how to create a ROOT macro for analyzing a tree in a ROOT file.

Here it is shown, how to create a histogram for a variable `hPosX` for this data analysis.

_**Example**_

A 1-D histogram {% include ref class="TH1F" %} is created for the X position of particles (`hPosX`).

{% highlight C++ %}

#include "TFile.h"
#include "TTree.h"
#include "TBranch.h"
#include "TH1F.h"

const Int_t kMaxfParticles = 1293;

void AnalyzeTree()
{
// Variables used to store the data.

// Sum of data size (in bytes) of all events.
   Int_t totalSize = 0;

// Size of the current event.
   Int_t     eventSize = 0;

// X position of the particles.
   TH1F     *hPosX;

// List of branches.
   TBranch  *nParticlesBranch;
   TBranch  *particlesPosXBranch;
   TBranch  *particlesMomentumBranch;

// Declaration of leaf types
   Int_t nParticles;
   Double_t  particlesPosX[kMaxfParticles];
   Double_t  particlesMomentum[kMaxfParticles];

// Open the ROOT file.
   TFile *f = TFile::Open("http://root.cern/files/introtutorials/eventdata.root");
   if (f == 0) {

// If we cannot open the file, print an error message and return immediately.
      printf("Error: cannot open http://root.cern/files/introtutorials/eventdata.root!\n");
      return;
   }

// Get a pointer to the tree.
   TTree *tree = (TTree *)f->Get("EventTree");

// To use SetBranchAddress() with simple types (e.g. double, int) instead of objects (e.g. std::vector<Particle>).
   tree->SetMakeClass(1);

// Connect the branches with their member variables.
   tree->SetBranchAddress("fParticles", &nParticles, &nParticlesBranch);
   tree->SetBranchAddress("fParticles.fPosX", particlesPosX, &particlesPosXBranch);
   tree->SetBranchAddress("fParticles.fMomentum", particlesMomentum, &particlesMomentumBranch);

// Create the TH1F histogram.
   hPosX = new TH1F("hPosX", "Position in X", 20, -5, 5);

// Enable bin errors.
   hPosX->Sumw2();

   Long64_t nentries = tree->GetEntries();
   for (Long64_t i=0;i<nentries;i++) {

// We only need the number of particles ...
      nParticlesBranch->GetEntry(i);

// ... and their position in X...
      particlesPosXBranch->GetEntry(i);

// ... and their momentum.
      particlesMomentumBranch->GetEntry(i);

// Do the actual analysis.
      for (int iParticle = 0; iParticle < nParticles; ++iParticle) {
         if (particlesMomentum[iParticle] > 40.0)
            hPosX->Fill(particlesPosX[iParticle]);
      }
   }

// Fit the histogram.
   hPosX->Fit("pol2");

// Draw the histogram.
   hPosX->Draw();
}
{% endhighlight %}


## Profile histograms

Profile histograms are used to display the mean value of `Y` and its error for each bin in `X`.

When you fill a profile histogram with the [TProfile.Fill()](https://root.cern/doc/master/classTProfile.html#ab851e2083286f48bee2a74ea816f6125){:target="_blank"} method:

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

The displayed bin content for bin `J` of a {% include ref class="TProfile" %}is always [h(J)](https://root.cern/doc/master/RSha256_8hxx.html#acf9942d15f0dd0ac4fc5ca66096a3f6d){:target="_blank"}.
The corresponding bin error is by default [e(J)](https://root.cern/doc/master/RSha256_8hxx.html#af62772e2f383ddbe93a93eff2a5f543a){:target="_blank"}.
In case the option `s` is used (in the constructor or by calling [TProfile::BuildOptions](https://root.cern/doc/master/classTProfile.html#a1ff9340284c73ce8762ab6e7dc0e6725){:target="_blank"}) the displayed error is `s(J)`.

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
   file="histograms.root" object="hprof" width="500px" height="350px"
   caption="A profile histogram example."
%}
