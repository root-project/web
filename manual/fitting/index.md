---
title: Fitting histograms
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Fitting is the method for modeling the expected distribution of events in a physics data analysis. ROOT offers various options to perform the fitting of the data:
- [Fit Panel](#using-the-fit-panel): After a histogram is drawn, the Fit Panel GUI is best used for prototyping the fit.
- [Fit() method](#using-the-fit-method): You can fit histograms and graphs programmatically with the `Fit()` method.
- Minimization packages: ROOT provides several minimization packages like [Minuit2](({{ '/manual/math/#minuit2-library' | relative_url }})) and FUMILI.
- [RooFit]({{ '/manual/roofit' | relative_url }}): The RooFit library is a toolkit for modeling the expected distribution of events in a physics analysis.

{% include tutorials name="Fit" url="fit" %}

## Using the Fit Panel

After you have drawn a histogram (see → [Drawing a histograms]({{ '/manual/histograms/#drawing-a-histogram' | relative_url }})), you can use the Fit Panel for fitting the data. The Fit Panel is best suited for prototyping

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

## Using the Fit() method

The `Fit()` method is implemented for:
- the histogram classes {% include ref class="TH1" %}
- the sparse histogram classes {% include ref class="THnSparse" %}
- the graph classes {% include ref class="TGraph" %}, {% include ref class="TGraph2D" %} and {% include ref class="TMultiGraph" %} (for fitting a collection of graphs with the same function)

### Using TH1::Fit()

- Use the [TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method to fit a histogram programmatically.<br>By default, the fitted function object is added to the histogram and is drawn in the current pad.

The signature is:

{% highlight C++ %}
   TFitResultPtr Fit(TF1 *function, Option_t *option, Option_t *goption,<br> Axis_t xxmin, Axis_t xxmax)
{% endhighlight %}

`function`: Pointer to the fitted function (the fit model) object.

`option`: The fitting option, with the following options:
- `W`: Sets all weights to 1 for non empty bins; ignore error bars.
- `WW`: Sets all weights to 1 including empty bins; ignore error bars.
- `I`: Uses integral of function in bin instead of value at bin center.
- `L`: Uses a log likelihood method (default is chi-square method). To be used when the histogram represents counts.
- `WL`: Weighted log likelihood method. To be used when the histogram has been filled with weights different than 1.
- `P`: Uses Pearson chi-square method. Uses expected errors instead of the observed one given by [TH1::GetBinError()](https://root.cern/doc/master/classTH1.html#a3af6cc15ab6c2490428c9b691885d919){:target="_blank"} (default case). The expected error is instead estimated from the the square-root of the bin function value.
- `Q`: Quiet mode (minimum printing).
- `V`: Verbose mode (default is between `Q` and `V`).
- `S`: The result of the fit is returned in the {% include ref class="TFitResultPtr" %}.
- `E`: Performs better errors estimation using the Minos technique.
- `M`: Improves fit results, by using the IMPROVE algorithm of {% include ref class="TMinuit" %}.
- `R`: Uses the range specified in the function range.
- `N`: Does not store the graphics function, does not draw.
- `0`: Does not plot the result of the fit. By default the fitted function is drawn unless the option `N` is specified.
- `+`: Adds this new fitted function to the list of fitted functions (by default, the previous function is deleted and only the last one is kept).
- `B`: Use this option when you want to fix one or more parameters and the fitting function is a predefined one, like `polN`, `expo`, `landau`, `gaus`.<br>Note that in case of pre-defined functions, some default initial values and limits are set.
- `C`: In case of linear fitting, do no calculate the chisquare (saves time).
- `F`: If fitting a linear function (e.g., `polN`), switch to use the default minimizer (e.g., {% include ref class="TMinuit" %}). By default, `polN` functions are fitted by the linear fitter.

`goption`: The graphics option that is the same as [TH1::Draw()](https://root.cern/doc/master/classTH1.html#aa53a024a9e94d5ec91e3ef49e49563da){:target="_blank"}.

`xxmin`, `xxmax`: Specifies the range over which to apply the fit.

### Using TGraph::Fit()

The signature for fitting {% include ref class="TGraph" %} is the same as for the {% include ref class="TH1" %}. 

Only the following options only apply for fitting histograms:
- `L`
- `WL`
- `I`

The following options only apply for [TGraph::Fit](https://root.cern/doc/master/classTGraph.html#a61269bcd47a57296f0f1d57ceff8feeb){:target="_blank"}:
- `EX0`: When fitting a {% include ref class="TGraphErrors" %} or a {% include ref class="TgraphAsymErrors" %}, the errors on the coordinates are not used in the fit.
- `ROB`: Use the Robust fitting in case of linear fitting . Computes the LTS regression coefficients (robust (resistant) regression), using the default fraction of good points.
- `ROB=0.x`: As above, but compute the LTS regression coefficients, using 0.x as a fraction of good points.

## Using the TF1 function class

In the following section is described how to use the {% include ref class="TF1" %} class that is used for fitting histograms and graphs.

### Fitting 1-D histograms with pre-defined functions

- Use the [TH1::Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method to fit a 1-D histogram with a pre-defined function. The name of the pre-definded function is the first parameter. For pre-defined functions, you do not need to set initial values for the parameters.

_**Example**_

A histogram object `hist` is fit with a Gaussian:

{% highlight C++ %}
   root[] hist.Fit("gaus");
{% endhighlight %}

The following pre-defined functions are available:

- `gaus`: Gaussian function with three parameters: `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)`

- `expo`: Exponential function with two parameters: `f(x) = exp(p0+p1*x)`

- `polN`: Polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*x2 +...`

- `chebyshevN`: Chebyshev polynomial of degree `N`, where `N` is a number between 0 and 9: `f(x) = p0 + p1*x + p2*(2*x2-1) +...`

- `landau`: Landau function with mean and sigma. This function has been adapted from the `CERNLIB` routine `G110 denlan` (see → [TMath::Landau](https://root.cern/doc/master/namespaceTMath.html#a656690875991a17d35e8a514f37f35d9){:target="_blank"}).

- `gausn`: Normalized form of the Gaussian function with three parameters `f(x) = p0*exp(-0.5*((x-p1)/p2)ˆ2)/(p2*sqrt(2PI))`


### Fitting 1-D histograms with user-defined functions

First you create a {% include ref class="TF1" %} object, then use the name of the `TF1` fitting function in the [Fit()](https://root.cern.ch/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method.

You can create the `TF1` fitting function as follows:

- from an existing expressions defined in {% include ref class="TFormula" %} (with and without parameters),

- by defining your own function.

**Creating a TF1 fitting function with a TFormula expression**

_**Example**_

The {% include ref class="TF1" %} constructor is used with the formula `sin(x)/x`.

{% highlight C++ %}
   root[] TF1 *f1 = new TF1("f1","sin(x)/x",0,10)
{% endhighlight %}

You can also use a {% include ref class="TF1" %} object in the constructor of another {% include ref class="TF1" %}.

{% highlight C++ %}
   root[] TF1 *f2 = new TF1("f2","f1*2",0,10)
{% endhighlight %}

_**Example**_

The {% include ref class="TF1" %} constructor is used with the formula `x*sin(x)` and two parameters.<br>
The parameter index is enclosed in square brackets.

{% highlight C++ %}
   root[] TF1 *f1 = new TF1("f1","[0]*x*sin([1]*x)",-3,3);
{% endhighlight %}

Use `SetParameter()` to set the initial values.

{% highlight C++ %}
   root[] f1->SetParameter(0,10);
{% endhighlight %}

Use `SetParameters()` to set multiple parameters at once.

{% highlight C++ %}
   root[] f1->SetParameters(10,5);
{% endhighlight %}


**Creating a user TF1 fitting function**

You can define your own function and then pass the function pointer to the {% include ref class="TF1" %} constructor. Your function for a {% include ref class="TF1" %} constructor must have the following signature:

{% highlight C++ %}
   Double_t fitf(Double_t *x,Double_t *par)
{% endhighlight %}


`Double_t *x`: Pointer to the variable array. This array must be a 1-D array with `v[0] = x` in case of a 1-D histogram, `v[0] =x`, `v[1] = y` for a 2-D histogram, etc.

`Double_t *par`: Pointer to the parameter array. `par` contains the current values of parameters when it is called by the `FCN()` function.

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

//Give the parameters names.
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
as the sqrt(sum of squares of weights). Otherwise, the error is set equal to the sqrt(bin content).

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


## Using ROOT::Fit classes

[ROOT::Fit](https://root.cern/doc/master/namespaceROOT_1_1Fit.html) is the namespace for fitting classes (regression analysis). The fitting classes are part of the [MathCore library]({{ '/manual/math#mathcore-library' | relative_url }}).<br>
The defined classes can be classified in the following groups:

- [Fit method classes](https://root.cern/doc/master/group__FitMethodFunc.html){:target="_blank"}: Classes describing fit method functions like:
   - [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html){:target="_blank"}: Class for binned fits using the least square methods.
   - [ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html){:target="_blank"}: Class for evaluating the log likelihood for binned Poisson likelihood fits.
   - [ROOT::Fit::LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"}: Calls for likelihood fits.

- [Fit data classes](https://root.cern/doc/master/group__FitData.html): Classes for describing the input data for fitting. These classes are, among others, [ROOT::Fit::BinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1BinData.html){:target="_blank"}, for binned data sets
 (data points containing both coordinates and a corresponding value/weight with optionally an error on the value or the coordinate), and [ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html)c, for un-binned data sets.

- [User fitting classes](https://root.cern/doc/master/group__FitMain.html){:target="_blank"}: Classes for fitting a given data set.

### Creating the input data

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

### Creating a fit model

The model function needs to be expressed as function of some unknown parameters. The fitting will find the best
parameter value to describe the observed data.

You can for example use the {% include ref class="TF1" %} class, the parametric function class to describe the model function.
But the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html){:target="_blank"} class takes as input a more general parametric function object, the abstract interface class [ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}. It describes a generic one-dimensional or multi-dimensional function with parameters.
This interface extends the abstract [ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"} class with methods to set/retrieve parameter values and to evaluate the function
given the independent vector of values X and vector of parameters P.

### Configuring the fit

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

### Performing the fit

Depending on the available input data and the selected function for fitting, you can use one of the methods of the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html) class to perform the fit.

The following pre-defined fitting methods are available:

- Least-square fit: [Fitter::LeastSquare(const BinData &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a44dc06cfe20c1036657e78d939b34593){:target="_blank"} or [Fitter::Fit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#ae6b7c345d4e0b62ebec1a9d08afd233c){:target="_blank"}.
Both methods should be used when the binned data values follow a Gaussian distribution. These fit methods are implemented using the class [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html#af0040f12bc304dd9610daec9d0dfed70){:target="_blank"}.

- Binned likelihood fit: [Fitter::LikelihoodFit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a61a145587e2b65e90e4f05d3df2d6004){:target="_blank"}. This method should be used when the binned data values follow a Poisson or a multinomial distribution. The Poisson case
(extended fit) is the default and in this case the function normalization is also fit to the data. This method is implemented by the
[ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html) class.

- Un-binned likelihood fit: [Fitter::LikelihoodFit(const UnBindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a980281c2d7ecfbf94fe584fc3da1a566){:target="_blank"}. By default the fit is not extended, this is the normalization is not fitted to the data. This
method is implemented using the [LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"} class.

- Linear fit: A linear fit can be selected, if the model function is linear in the parameters.

### Fit result

The result of the fit is contained in the [ROOT::Fit::Result](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#acb09076a64e460e493dcc74fa7b36668){:target="_blank"} object.

You can print the result of the fit with the [FitResult::Print()](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html#a879917fed14db36f8d63fb0170d68d1d){:target="_blank"} method.

