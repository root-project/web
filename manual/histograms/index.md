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

  - {% include ref class="TH1C" %}: One byte per channel. Maximum bin content = 127.

  - {% include ref class="TH1S" %}: One short per channel. Maximum bin content = 32767.

  - {% include ref class="TH1I" %}: One int per channel. Maximum bin content = 2147483647.

  - {% include ref class="TH1F" %}: One float per channel. Maximum precision 7 digits.

  - {% include ref class="TH1D" %}: One double per channel. Maximum precision 14 digits.

### 2-D histograms

  - {% include ref class="TH2C" %}: One byte per channel. Maximum bin content = 127.

  - {% include ref class="TH2S" %}: One short per channel. Maximum bin content = 32767.

  - {% include ref class="TH2I" %}: One int per channel. Maximum bin content = 2147483647.

  - {% include ref class="TH2F" %}: One float per channel. Maximum precision 7 digits.

  - {% include ref class="TH2D" %}: One double per channel. Maximum precision 14 digits.

### 3-D histograms

  - {% include ref class="TH3C" %}: One byte per channel. Maximum bin content = 127.

  - {% include ref class="TH3S" %}: One short per channel. Maximum bin content = 32767.

  - {% include ref class="TH3I" %}: One int per channel. Maximum bin content = 2147483647.

  - {% include ref class="TH3F" %}: One float per channel. Maximum precision 7 digits.

  - {% include ref class="TH3D" %}: One double per channel. Maximum precision 14 digits.

### Profile histograms

  - {% include ref class="TProfile" %}: Profile histogram to display the mean value of Y and its error for each bin in X.

  - {% include ref class="TProfile2D" %}: Profile2D histograms are used to display the mean value of Z and its RMS for each cell in X,Y.

  - {% include ref class="TProfile3D" %}: Profile3D histograms are used to display the mean value of T and its RMS for each cell in X,Y,Z.

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
   TFile *f = TFile::Open("http://root.cern/eventdata.root");
   if (f == 0) {
   
// If we cannot open the file, print an error message and return immediately.
      printf("Error: cannot open http://root.cern/eventdata.root!\n");
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


## Fitting histograms

> **Tutorials**
>
> Fitting tutorials are available at → [https://root.cern/doc/master/group__tutorial__fit.html](https://root.cern/doc/master/group__tutorial__fit.html){:target="_blank"}

### Fitting 1-D histograms with pre-defined functions

- Use the [TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method to fit a 1-D histogram with a pre-defined function. The name of the pre-definded function is the first parameter. For pre-defined functions, you do not need to set initial values for the parameters.

_**Example**_

A histogram object `hist` is fit with a Gaussian:

{% highlight C++ %}
   root[] hist.Fit("gaus");
{% endhighlight %}

The following pre-defined functions are available:

- `gaus`: Gaussian function with 3 parameters: `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)`

- `expo`: Exponential function with 2 parameters: `f(x) = exp(p0+p1*x)`

- `polN`: Polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*x2 +...`

- `chebyshevN`: Chebyshev polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*(2*x2-1) +...`

- `landau`: Landau function with mean and sigma. This function has been adapted from the `CERNLIB` routine `G110 denlan` (see → [TMath::Landau](https://root.cern/doc/master/namespaceTMath.html#a656690875991a17d35e8a514f37f35d9){:target="_blank"}).

- `gausn`: Normalized form of the Gaussian function with 3 parameters `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)/(p2*sqrt(2PI))`


### Fitting 1-D histograms with user-defined functions

First you create a {% include ref class="TF1" %} object, then use the name of the `TF1` fitting function in the [Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method.

You can create the `TF1` fitting function as follows:

- from an existing expressions defined in {% include ref class="TFormula" %},

- by defining your own function.

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

Now the `fitf` function is used to fit the histogram.

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

### Accessing the fitted function parameters and results

- Use the [TH1::GetFunction()](https://root.cern/doc/master/classTH1.html#a9e78dd45433c2193988c76461e8c089c){:target="_blank"} method to access the fitted function parameters.

_**Examples**_

{% highlight C++ %}
   root[] TF1 *fit = hist->GetFunction(function_name);
   root[] Double_t chi2 = fit->GetChisquare();

// Value of the first parameter:
   root[] Double_t p1 = fit->GetParameter(0);

// Error of the first parameter:
   root[] Double_t e1 = fit->GetParError(0);
{% endhighlight %}

### Configuring the fit

The following configuration actions are available when fitting a histogram or graph using the `Fit()` method:

- [Fixing and setting parameter bounds](#fixing-and-setting-parameter-bounds)
- [Fitting subranges](#fitting-subranges)
- [Fitting multiple sub ranges](#fitting-multiple-sub-ranges)


<p><a name="fixing-and-setting-parameter-bounds"></a></p>
**Fixing and setting parameter bounds**

For pre-defined functions like `poln`, `exp`, `gaus`, and `landau`, the parameter initial values are set automatically.

For not pre-defined functions, the fit parameters must be initialized before invoking the `Fit()` method.

- Use the [TF1::SetParLimits()](https://root.cern/doc/master/group__tutorial__fit.html){:target="_blank"} method to set the bounds for one parameter.

{% highlight C++ %}
   func->SetParLimits(0,-1,1);
{% endhighlight %}

When the lower and upper limits are equal, the parameter is fixed.

_**Example**_

The parameter is fixed 4 at 10.

{% highlight C++ %}
   func->SetParameter(4,10);
   func->SetParLimits(4,10,10);
{% endhighlight %}

- Use the [TF1::FixParameter()](https://root.cern/doc/master/classTF1.html#ae8869189ca9a2affe690fe26dcaa6c8c){:target="_blank"} method to fix a parameter to 0.

_**Example**_

{% highlight C++ %}
   func->SetParameter(4,0);
   func->FixParameter(4,0);
{% endhighlight %}

You do not need to set the limits for all parameters.

_**Example**_

There is function with 6 parameters. Then there is a setup possible like the following: parameters 0 to 2 can vary freely, parameter 3 has boundaries [-10, 4] with the initial value -1.5, and parameter 4 is fixed to 0.

{% highlight C++ %}
   func->SetParameters(0,3.1,1.e-6,-1.5,0,100);
   func->SetParLimits(3,-10,4);
   func->FixParameter(4,0);
{% endhighlight %}

<p><a name="fitting-subranges"></a></p>
**Fitting subranges**

By default, [TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} fits the function on the defined histogram range. You can specify the `R` option in the second
parameter of `TH1::Fit()` to restrict the fit to the range specified in the {% include ref class="TF1" %} constructor.

_**Example**_

The fit will be limited to -3 to 3, the range specified in the `TF1` constructor:

{% highlight C++ %}
   root[] TF1 *f1 = new TF1("f1","[0]*x*sin([1]*x)",-3,3);
   root[] hist->Fit("f1","R");
{% endhighlight %}

You can also specify a range in the call to `TH1::Fit()`.

{% highlight C++ %}
   root[] hist->Fit("f1","","",-2,2)
{% endhighlight %}

See also the ROOT macros `$ROOTSYS/tutorials/fit/myfit.C` and `multifit.C` for more detailed examples.

<p><a name="fitting-multiple-sub-ranges"></a></p>
**Fitting multiple sub ranges**

You can find a ROOT macro for fitting multiple sub ranges at `$ROOTSYS/tutorials/fit/multifit.C`. It shows how to use several Gaussian functions
with different parameters on separate sub ranges of the same histogram.

_**Example**_

Four {% include ref class="TF1" %} objects are created, one for each sub range.

{% highlight C++ %}
   g1 = new TF1("m1","gaus",85,95);
   g2 = new TF1("m2","gaus",98,108);
   g3 = new TF1("m3","gaus",110,121);

// The total is the sum of the three, each has 3 parameters.
   total = new TF1("mstotal","gaus(0)+gaus(3)+gaus(6)",85,125);
{% endhighlight %}

The histogram are filled with bins defined in the array `x`.

{% highlight C++ %}
   h = new TH1F("g1","Example of several fits in subranges",np,85,134);
   h->SetMaximum(7);
   for (int i=0; i<np; i++) {
      h->SetBinContent(i+1,x[i]);
   }

// Define the parameter array for the total function.
   Double_t par[9];
{% endhighlight %}

When fitting simple functions, such as a Gaussian, the initial values of the parameters are automatically computed. In the more complicated case of the sum of 3 Gaussian functions, the initial values of parameters must be set.
In this particular case, the initial values are taken from the result of the individual fits.

{% highlight C++ %}
// Fit each function and add it to the list of functions.
   h->Fit(g1,"R");
   h->Fit(g2,"R+");
   h->Fit(g3,"R+");

// Get the parameters from the fit
   g1->GetParameters(&par[0]);
   g2->GetParameters(&par[3]);
   g3->GetParameters(&par[6]);

// Use the parameters on the sum
   total->SetParameters(par);
   h->Fit(total,"R+");
{% endhighlight %}

### Result of the fit

You can obtain the following results of a fit:

- [fitted function](#associated-function)
- [parameter values](#accessing-the-fit-parameters-and-results)
- [errors](#associated-errors)
- [covariance and correlation matrix](#fit-statistics)

<p><a name="associated-function"></a></p>
**Associated function**

One or more objects (typically a `TF1\*`) can be added to the list of functions (`fFunctions`) associated to each histogram.
[TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} adds the fitted function to this list.

Given a histogram `h`, you can retrieve the associated function with:

{% highlight C++ %}
   TF1 *myfunc = h->GetFunction("myfunc");
{% endhighlight %}

<p><a name="accessing-the-fit-parameters-and-results"></a></p>
**Accessing the fit parameters and results**

If the histogram or graph is made persistent, the list of associated functions is also persistent.

Retrieve a pointer to the function with the [TH1::GetFunction()](https://root.cern/doc/master/classTH1.html#a9e78dd45433c2193988c76461e8c089c){:target="_blank"} method. Then you can retrieve the fit parameters from the function.

_**Example**_

{% highlight C++ %}
   TF1 *fit = hist->GetFunction(function_name);
   Double_t chi2 = fit->GetChisquare();

// Value of the first parameter.
   Double_t p1 = fit->GetParameter(0);

// Error of the first parameter.
   Double_t e1 = fit->GetParError(0);
{% endhighlight %}

With the fit option `S`,  you can access the full result of the fit including the covariance and correlation matrix.

<p><a name="associated-errors"></a></p>
**Associated errors**

By default, for each bin, the sum of weights is computed at fill time. You can also call [TH1::Sumw2()](https://root.cern/doc/master/classTH1.html#aefa4ee94f053ec3d217f3223b01fa014){:target="_blank"} to force the storage
and computation of the sum of the square of weights per bin. If `Sumw2()` has been called, the error per bin is computed
as the sqrt(sum of squares of weights). oOtherwise, the error is set equal to the sqrt(bin content).

To return the error for a given bin number, use:

{% highlight C++ %}
   Double_t error = h->GetBinError(bin);
{% endhighlight %}

Empty bins are excluded in the fit when using the Chi-square fit method. When fitting an histogram representing
counts (this is with Poisson statistics) it is recommended to use the Log-Likelihood method (option `L` or `WL`), particularly
in case of low statistics.

<p><a name="fit-statistics"></a></p>
**Fit statistics**

You can change the statistics box to display the fit parameters with the [TStyle::SetOptFit()](https://root.cern/doc/master/classTStyle.html#aedeb1d117d9f16af9f8ad430bf956d64){:target="_blank"} method. This parameter has four digits: `mode = pcev (default = 0111)`

- `p = 1`: Print probability.
- `c = 1`: Print Chi-square/number of degrees of freedom.
- `e = 1`: Print errors (if e=1, v must be 1).
- `v = 1`: Print name/values of parameters.

_**Example**_

To print the fit probability, parameter names/values, and errors, use:

{% highlight C++ %}
   gStyle->SetOptFit(1011);
{% endhighlight %}


### Using the Fit Panel

The following section describes how to use the Fit Panel using an example.

Given is a histogram following a Gaussian distribution.

{% highlight C++ %}
   TH1F *h1 = new TH1F("h1", "h1", 200, -5,5);
   TF1 *f1 = new TF1("f1", "[2]*TMath::Gaus(x,[0],[1])");
   f1->SetParameters(1,1,1);
   h1->FillRandom("f1");
   h1->Draw();
{% endhighlight %}

- Right-click on the object and then click `FitPanel`.<br>
You also can select `Tools` and then click `Fit Panel`.

{% include figure_image
   img="context-menu_fitpanel.png"
   caption="FitPanel in the context menu."
%}

The Fit Panel is displayed.

{% include figure_image
   img="fitpanel.png"
   caption="Fit Panel."
%}

In the `Fit Function` section you can select the function that should be used for fitting.<br>
The following types of functions are listed here:

- Pre-defined functions that will depend on the dimensionality of the data.

- Functions present in `gDirectory`. These functions were already created by the user through a ROOT macro.

- Previously used functions. Functions that fitted the current data previously, if the data is able to store such functions.

Select a fitting function.

- Click `Set Parameters...` to set the parameters of the selected function.

The `Set Parameters of...` dialog window is displayed.

{% include figure_image
   img="set-parameters.png"
   caption="Set Parameters of... dialog window."
%}

- Set the parameters for the fit function.

- In the `General` tab, select the general options for fitting.<br>
This includes the method that will be used, as well as what fit options will be used with it and the draw options. You can also constrain the range of the function used for the fitting.

- In the `Minimization` tab, select the minimization algorithm for fitting.

- Click `Fit`.

{% include figure_jsroot
   file="histograms.root" object="fitted" width="500px" height="350px"
   caption="A fitted histogram."
%}

### Using ROOT::Fit classes

[ROOT::Fit](https://root.cern/doc/master/namespaceROOT_1_1Fit.html) is the namespace for fitting classes (regression analysis). The fitting classes are part of the [MathCore library]({{ '/manual/math#mathcore-library' | relative_url }}).<br>
The defined classes can be classified in the following groups:

- [Fit method classes](https://root.cern/doc/master/group__FitMethodFunc.html){:target="_blank"}: Classes describing fit method functions like:
   - [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html){:target="_blank"}: Class for binned fits using the least square methods.
   - [ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html){:target="_blank"}: Class for evaluating the log likelihood for binned Poisson likelihood fits.
   - [ROOT::Fit::LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"}: Calls for likelihood fits.

- [Fit data classes](https://root.cern/doc/master/group__FitData.html): Classes for describing the input data for fitting. These classes are, among others, [ROOT::Fit::BinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1BinData.html){:target="_blank"}, for binned data sets
 (data points containing both coordinates and a corresponding value/weight with optionally an error on the value or the coordinate), and [ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html)c, for un-binned data sets.

- [User fitting classes](https://root.cern/doc/master/group__FitMain.html){:target="_blank"}: Classes for fitting a given data set.

#### Creating the input data

There are two types of input data:
- Binned data ([ROOT::Fit::BinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1BinData.html){:target="_blank"}): They are used for least square (chi-square) fits of histograms or {% include ref class="TGraph" %} objects.
- Un-binned data ([ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html){:target="_blank"}): They are used for fitting vectors of data points, for example from a {% include ref class="TTree" %}[TTree].

**Using binned data**

- Use the [ROOT::Fit::BinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1BinData.html){:target="_blank"} class for binned data.

_**Example**_

There is histogram, represented as a {% include ref class="TH1" %} type object. Now a `ROOT:Fit::BinData` object is created and filled.

{% highlight C++ %}
   ROOT::Fit::DataOptions opt;
   opt.fIntegral = true;
   ROOT::Fit::BinData data(opt);

// Fill the bin data by using the histogram:
   TH1 * h1 = (TH1*) gDirectory->Get("myHistogram");
   ROOT::Fit::FillData(data, h1);
{% endhighlight %}

By using [ROOT::Fit::DataOptions](https://root.cern/doc/master/structROOT_1_1Fit_1_1DataOptions.html){:target="_blank"} you can specify the data range and some fitting options.

**Using un-binned data**

- Use the [ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html){:target="_blank"} class for un-binned data.

For creating un-binned data sets, there are two possibilities:
1. Copy the data inside a `ROOT::Fit::UnBinData` object.<br>
Create an empty `ROOT::Fit::UnBinData` object, iterate on the data and add the data point one by one. An input `ROOT::Fit::DataRange` object is passed in order to copy
the data according to the given range.
2. Use `ROOT::Fit::UnBinData` as a wrapper to an external data storage.<br>
In this case the `ROOT::Fit::UnBinData` object is created from an iterator or pointers to the data and the data are not copied inside.
The data cannot be selected according to a specified range. All the data points will be included in the fit.

`ROOT::Fit::UnBinData` supports also weighted data. In addition to the data points (coordinates), which
can be of arbitrary `k` dimensions, the class can be constructed from a vector of weights.

_**Example**_

Data are taken from a histogram (TH1 object).

{% highlight C++ %}
   double * buffer = histogram->GetBuffer();

// Number of entry is first entry in the buffer.
   int n = buffer[0];

// When creating the data object, it is important to create it with the size of the data.
   ROOT::Fit::UnBinData data(n);
   for (int i = 0; i < n; ++i)
      data.add(buffer[2*i+1]);
{% endhighlight %}

#### Creating a fit model

The model function needs to be expressed as function of some unknown parameters. The fitting will find the best
parameter value to describe the observed data.

You can for example use the {% include ref class="TF1" %} class, the parametric function class to describe the model function.
But the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html){:target="_blank"} class takes as input a more general parametric function object, the abstract interface class [ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}. It describes a generic one-dimensional or multi-dimensional function with parameters.
This interface extends the abstract [ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"} class with methods to set/retrieve parameter values and to evaluate the function
given the independent vector of values X and vector of parameters P.

#### Configuring the fit

Use the [ROOT::Fit::FitConfig](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitConfig.html){:target="_blank"} (contained in the [ROOT::Fit::ParameterSettings](https://root.cern/doc/master/classROOT_1_1Fit_1_1ParameterSettings.html){:target="_blank"} class) class for configuring the fit.

There the following fit configurations:

- Setting the initial values of the parameters.
- Setting the parameter step sizes.
- Setting eventual parameter bounds.
- Setting the minimizer library and the particular algorithm to use.
- Setting different minimization options (print level, tolerance, max iterations, etc. . . ).
- Setting the type of parameter errors to compute (parabolic error, minor errors, re-normalize errors using fitted chi2 values).

_**Example**_

Setting the lower/upper bounds for the first parameter and a lower bound for the second parameter:

{% highlight C++ %}
   fitter.SetFunction( fitFunction, false);
   fitter.Config().ParSettings(0).SetLimits(0,1.E6);
   fitter.Config().ParSettings(2).SetLowerLimit(0);
{% endhighlight %}

#### Performing the fit

Depending on the available input data and the selected function for fitting, you can use one of the methods of the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html) class to perform the fit.

The following pre-defined fitting methods are available:

- Least-square fit: [Fitter::LeastSquare(const BinData &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a44dc06cfe20c1036657e78d939b34593){:target="_blank"} or [Fitter::Fit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#ae6b7c345d4e0b62ebec1a9d08afd233c){:target="_blank"}.
Both methods should be used when the binned data values follow a Gaussian distribution. These fit methods are implemented using the class [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html#af0040f12bc304dd9610daec9d0dfed70){:target="_blank"}.

- Binned likelihood fit: [Fitter::LikelihoodFit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a61a145587e2b65e90e4f05d3df2d6004){:target="_blank"}. This method should be used when the binned data values follow a Poisson or a multinomial distribution. The Poisson case
(extended fit) is the default and in this case the function normalization is also fit to the data. This method is implemented by the
[ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html) class

- Un-Binned likelihood fit: [Fitter::LikelihoodFit(const UnBindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a980281c2d7ecfbf94fe584fc3da1a566){:target="_blank"}. By default the fit is not extended, this is the normalization is not fitted to the data. This
method is implemented using the [LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"} class.

- Linear fit: A linear fit can be selected, if the model function is linear in the parameters.

#### Fit result

The result of the fit is contained in the [ROOT::Fit::Result](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#acb09076a64e460e493dcc74fa7b36668){:target="_blank"} object.

You can print the result of the fit with the [FitResult::Print()](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html#a879917fed14db36f8d63fb0170d68d1d){:target="_blank"} method.

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