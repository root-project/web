---
title: Fitting histograms
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Fitting is the method for modeling the expected distribution of events in a physics data analysis. ROOT offers various options to perform the fitting of the data:
- [Fit() method](#using-the-fit-method): You can fit histograms and graphs programmatically with the `Fit()` method.
- Minimization packages: ROOT provides [several minimization packages]({{ "/manual/math/#minimization-libraries-and-classes" | relative_url }}).
- [Using the ROOT::Fit classes](#using-rootfit-classes)
- [Fit Panel](#using-the-fit-panel): After a histogram is drawn, the Fit Panel GUI is best used for prototyping the fit.
- [RooFit]({{ "/manual/roofit" | relative_url }}): The RooFit library is a toolkit for modeling the expected distribution of events in a physics analysis.

{% include tutorials name="Fit" url="fit" %}

## Using the Fit() method

The `Fit()` method is implemented for:
- the histogram classes {% include ref class="TH1" %}
- the sparse histogram classes {% include ref class="THnSparse" %}
- the graph classes {% include ref class="TGraph" %}, {% include ref class="TGraph2D" %} and {% include ref class="TMultiGraph" %} (for fitting a collection of graphs with the same function)

### Using TH1::Fit() and TGraph::Fit()

You can fit a [TF1](https://root.cern/doc/master/classTF1.html) function `f1` to a histogram with the [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method, which has the following signature:

{% highlight C++ %}
TFitResultPtr Fit(TF1 *f1,
                  const char *option="",
                  const char *goption="",
                  double xxmin=0.0,
                  double xxmax=0.0);
{% endhighlight %}

The function returns a TFitResultPtr, which is explained [later in this manual](#the-fit-result-object).

By default, the fitted function object is added to the histogram and is drawn on the current pad.

For a detailed explanation of the `option` and `goption` strings, see [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"}.

The `xmin` and `xmax` parameters optionally specify the fit range.

The signature of [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#aa978c8ee0162e661eae795f6f3a35589){:target="_blank"} is the same, but the supported options are slightly different: `L`, `WL`, and `I` are exclusive to [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"}, while `EX0` and `ROB` only apply to [TGraph::Fit()](https://root.cern/doc/master/classTGraph.html#aa978c8ee0162e661eae795f6f3a35589){:target="_blank"} (these options are explained in the linked function documentations).

### Fitting 1-D histograms with pre-defined functions

Use the [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} method to fit a 1-D histogram with a pre-defined function.
The name of the pre-defined function is the first parameter.
For pre-defined functions, you do not need to set initial values for the parameters.

See the [TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} documentation for the full list of pre-defined functions.

_**Example**_

A histogram object `hist` is fit with a Gaussian:

{% highlight C++ %}
hist.Fit("gaus");
{% endhighlight %}

### Fitting 1-D histograms with user-defined functions

You can also fit any {% include ref class="TF1" %} function that you defined yourself in one of the ways listed in the [class documentation](https://root.cern/doc/master/classTF1.html) to a 1-D histogram.

_**Example**_

In this example, we create a TF1 `func` from a general C++ function with parameters:

{% highlight C++ %}
// Define a function with three parameters.
double fitf(double *x,double *par) {
   double arg = 0;
   if (par[2]!=0) arg = (x[0] - par[1])/par[2];
   double fitval = par[0]*TMath::Exp(-0.5*arg*arg);
   return fitval;
}

// Create a TF1 object using the fitf function. The last three parameters
// specify the range and the number of parameters for the function.
TF1 *func = new TF1("fit",fitf,-3,3,3);
{% endhighlight %}

Now the `fitf` function is fitted to the histogram.

{% highlight C++ %}
// Open a ROOT file and get a histogram.
TFile *f = new TFile("hsimple.root");
TH1F *hpx = f->Get<TH1F>("hpx");

// Set the initial parameters to the mean and RMS of the histogram.
func->SetParameters(500,hpx->GetMean(),hpx->GetRMS());

// Give the parameters names.
func->SetParNames("Constant","Mean_value","Sigma");

// Call TH1::Fit with the name of the TF1 object.
hpx->Fit("fit");
{% endhighlight %}

### Configuring the fit

The following configuration actions are available when fitting a histogram or graph using the `Fit()` method (relevant tutorials linked in parathesis):

- [Fixing and setting parameter bounds](#fixing-and-setting-parameter-bounds)
- **Fitting subranges** and  **multiple subranges** ([multifit.C](https://root.cern/doc/master/multifit_8C.html) / [multifit.py](https://root.cern/doc/master/multifit_8py.html)).
  The tutorial shows how to fit several Gaussian functions with different parameters to separate subranges of the same histogram.
- **Fitting the convolution of two functions** ([fitConvolution.C](https://root.cern/doc/master/fitConvolution_8C.html) / [fitConvolution.py](https://root.cern/doc/master/fitConvolution_8py.html))
- **Fitting the normalized sum of functions** ([fitNormSum.C](https://root.cern/doc/master/fitNormSum_8C.html) / [fitNormSum.py](https://root.cern/doc/master/fitNormSum_8py.html))
- [Adding functions to the list](#adding-functions-to-the-list)


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

There is function with 6 parameters. Then a setup like the following is possible: Parameters 0 to 2 can vary freely, parameter 3 has boundaries [-10, 4] with the initial value -1.5, and parameter 4 is fixed to 0.

{% highlight C++ %}
func->SetParameters(0,3.1,1.e-6,-1.5,0,100);
func->SetParLimits(3,-10,4);
func->FixParameter(4,0);
{% endhighlight %}

<p><a name="adding-functions-to-the-list"></a></p>
**Adding functions to the list**

The example `$ROOTSYS/tutorials/fit/multifit.C`  illustrates how to fit several functions on the same histogram.
By default a fit command deletes the previously fitted function in the histogram object. You can specify the option
`+` in the second parameter to add the newly fitted function to the existing list of functions for the histogram.

{% highlight C++ %}
hist->Fit("f1","+","",-2,2)
{% endhighlight %}

Note that the fitted function(s) are saved with the histogram when it is written to a ROOT file.



### Accessing fit results

You can obtain the following results of a fit:

- [associated function](#associated-function)
- [parameter values](#accessing-the-fit-parameters-and-results)
- [errors](#associated-errors)
- **covariance and correlation matrix** (via the [fit result object](#the-fit-result-object) explained below)

<p><a name="associated-function"></a></p>
**Associated function**

One or more objects (typically a `TF1\*`) can be added to the list of functions associated to each histogram.
[TH1::Fit()](https://root.cern/doc/master/classTH1.html#a63eb028df86bc86c8e20c989eb23fb2a){:target="_blank"} adds the fitted function to this list.

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
double chi2 = fit->GetChisquare();

// Value of the first parameter.
double p1 = fit->GetParameter(0);

// Error of the first parameter.
double e1 = fit->GetParError(0);
{% endhighlight %}

With the fit option `S`,  you can access the full result of the fit including the covariance and correlation matrix.

<p><a name="associated-errors"></a></p>
**Associated errors**

By default, for each bin, the sum of weights is computed at fill time. You can also call [TH1::Sumw2()](https://root.cern/doc/master/classTH1.html#aefa4ee94f053ec3d217f3223b01fa014){:target="_blank"} to force the storage
and computation of the sum of the square of weights per bin. If `Sumw2()` has been called, the error per bin is computed
as the `sqrt(sum of squares of weights)`. Otherwise, the error is set equal to the `sqrt(bin content).

To return the error for a given bin number, use:

{% highlight C++ %}
double error = h->GetBinError(bin);
{% endhighlight %}

Empty bins are excluded in the fit when using the Chi-square fit method. When fitting an histogram representing
counts (that is with Poisson statistics) it is recommended to use the Log-Likelihood method (option `L` or `WL`), particularly
in case of low statistics.

### Fit statistics box for plots

You can change the statistics box to display the fit parameters with the [TStyle::SetOptFit()](https://root.cern/doc/master/classTStyle.html#aedeb1d117d9f16af9f8ad430bf956d64){:target="_blank"} method. This parameter has four digits: `mode = pcev (default = 0111)`

- `p = 1`: Print probability.
- `c = 1`: Print Chi-square/number of degrees of freedom.
- `e = 1`: Print errors (if e=1, v must be 1).
- `v = 1`: Print name/values of parameters.

_**Example**_

To print the fit probability, parameter names, values, and errors, use:

{% highlight C++ %}
gStyle->SetOptFit(1011);
{% endhighlight %}

## The fit result object

When fitting an histogram (a {% include ref class="TH1" %} object) or a graph (a {% include ref class="TGraph" %} object), it is possible to return a {% include ref class="TFitResult" %} via the {% include ref class="TFitResultPtr" %} object, which behaves as a smart pointer to a  {% include ref class="TFitResult" %}. {% include ref class="TFitResultPtr" %} is the return object of [TH1::Fit](https://root.cern/doc/master/classTH1.html#a7e7d34c91d5ebab4fc9bba3ca47dabdd){:target="_blank"} or [TGraph::Fit](https://root.cern/doc/master/classTGraph.html#aa978c8ee0162e661eae795f6f3a35589){:target="_blank"}.

By default {% include ref class="TFitResultPtr" %} contains only the status of the fit and can be obtained by an automatic conversion of {% include ref class="TFitResultPtr" %} to an integer. If the fit option `S` is used instead, {% include ref class="TFitResultPtr" %} contains {% include ref class="TFitResult" %} and behaves as a smart pointer to it.

The {% include ref class="TFitResult" %} class inherits from [ROOT::Fit::FitResult](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html){:target="_blank"}.
In addition to the base FitResult class, it provides some methods to return
a covariance or correlation matrix as a `TMatrixDSym` object.
Furthermore, {% include ref class="TFitResult" %} can be stored in ROOT files.
All fit result objects support printing with [FitResult::Print()](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html#a879917fed14db36f8d63fb0170d68d1d){:target="_blank"}.

_**Example**_

{% highlight C++ %}
// TFitResultPtr contains only the fit status.
int fitStatus = hist->Fit(myFunction);

// TFitResultPtr contains the TFitResult.
TFitResultPtr r = hist->Fit(myFunction,"S");

// Access the covariance matrix.
TMatrixDSym cov = r->GetCovarianceMatrix();

// Retrieve the fit chi2.
double chi2 = r->Chi2();

// Retrieve the value for the parameter 0.
double par0 = r->Parameter(0);

// Retrieve the error for the parameter 0.
double err0 = r->ParError(0);

// Print the full information of the fit including covariance matrix.
r->Print("V");

// Store the result in a ROOT file.
r->Write();
{% endhighlight %}


## Using ROOT::Fit classes

[ROOT::Fit](https://root.cern/doc/master/namespaceROOT_1_1Fit.html) is the namespace for fitting classes (regression analysis). The fitting classes are part of the [MathCore library]({{ '/manual/math#mathcore-library' | relative_url }}).<br>
The defined classes can be classified in the following groups:

- [Fit method classes](https://root.cern/doc/master/group__FitMethodFunc.html){:target="_blank"}: Classes describing fit method functions like:
   - [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html){:target="_blank"}: Class for binned fits using the least square methods.
   - [ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html){:target="_blank"}: Class for evaluating the log likelihood for binned Poisson likelihood fits.
   - [ROOT::Fit::LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"}: Calls for likelihood fits.

- [Fit data classes](https://root.cern/doc/master/group__FitData.html): Classes for describing the input data for fitting, including:
    - Binned datasets ([ROOT::Fit::BinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1BinData.html){:target="_blank"}): data points containing both coordinates and a corresponding value or weight with optionally an error on the value or the coordinate.
      They are used for least square (chi-square) fits of histograms or {% include ref class="TGraph" %} objects.
    - Un-binned datasets ([ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html){:target="_blank"}): They are used for fitting vectors of data points, for example from a {% include ref class="TTree" %}.


- [User fitting classes](https://root.cern/doc/master/group__FitMain.html){:target="_blank"}: Classes for fitting a given dataset:
    - [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html){:target="_blank"} for executing the fit.
    - [ROOT::Fit::FitConfig](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitConfig.html){:target="_blank"} for configuring the fit.
    - [ROOT::Fit::ParameterSettings](https://root.cern/doc/master/classROOT_1_1Fit_1_1ParameterSettings.html){:target="_blank"} to define the properties of the fit parameters (initial values, bounds, etc.).
    - [ROOT::Fit::FitResult](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html){:target="_blank"} for storing the result of the fit.

The fitter classes use the generic interfaces for parametric function evaluations, [ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}, to define the fitting model function, and the [ROOT::Math::Minimizer](https://root.cern/doc/master/classROOT_1_1Math_1_1Minimizer.html){:target="_blank"}  interface to perform the minimization of the target function.

### Creating the data object

_**Example: filling a binned dataset from a histogram**_

There is histogram, represented as a {% include ref class="TH1" %} type object. Now a `ROOT:Fit::BinData` object is created and filled.

{% highlight C++ %}
ROOT::Fit::DataOptions opt;
opt.fIntegral = true;
ROOT::Fit::DataRange range(xmin,xmax);
ROOT::Fit::BinData data(opt,range);

// Fill the bin data using the histogram. You can do this by using the
// ROOT::Fit::FillData() helper function from the histogram library.
TH1 * h1 = gDirectory->Get<TH1>("myHistogram");
ROOT::Fit::FillData(data, h1);
{% endhighlight %}

[ROOT::Fit::DataOptions](https://root.cern/doc/master/structROOT_1_1Fit_1_1DataOptions.html){:target="_blank"} controls some fitting options.
In this example, the `fIntegral` option is set to integrate the fit function over each bin instead of using the value at the bin centers.
The call to [ROOT::Fit::DataRange](https://root.cern/doc/master/classROOT_1_1Fit_1_1DataRange.html){:target="_blank"} sets the fit range to the interval between `xmin` and `xmax`.

**Using un-binned data**

- Use the [ROOT::Fit::UnBinData](https://root.cern/doc/master/classROOT_1_1Fit_1_1UnBinData.html){:target="_blank"} class for un-binned data.

For creating un-binned datasets, there are two possibilities:
1. Copy the data inside a `ROOT::Fit::UnBinData` object.<br>
Create an empty `ROOT::Fit::UnBinData` object, iterate on the data and add the data point one by one. An input `ROOT::Fit::DataRange` object is passed in order to copy
the data according to the given range.
2. Use `ROOT::Fit::UnBinData` as a wrapper to an external data storage.<br>
In this case the `ROOT::Fit::UnBinData` object is created from an iterator or pointers to the data and the data are not copied inside.
The data cannot be selected according to a specified range. All the data points will be included in the fit.

`ROOT::Fit::UnBinData` supports also weighted data. In addition to the data points (coordinates), which
can be of arbitrary `k` dimensions, the class can be constructed from a vector of weights.

_**Example**_

Data are taken from a standard vector.

{% highlight C++ %}
// The data points that we want to transfer to the ROOT::Fit::UnBinData
std::vector<double> dataVec{1., 2., 3., 4., 5.};

// When creating the fitData object, it is important to create it with the right size.
ROOT::Fit::UnBinData fitData(dataVec.size());
for (std::size_t i = 0; i < dataVec.size(); ++i) {
   fitData.Add(dataVec[i]);
}
{% endhighlight %}

_**Example**_

In this example a two-dimensional `UnBinData` object is created with the contents from a tree.

{% highlight C++ %}
TFile * file = TFile::Open("hsimple.root");
TTree *ntuple = 0;
file->GetObject("ntuple",ntuple);

// Select from the tree the data that should be used for fitting.
// Use TTree::Draw.
int nevt = ntuple->Draw("px:py","","goff");
double * x = ntuple->GetV1();
double * y = ntuple->GetV2();
ROOT::Fit::UnBinData data(nevt, x, y );
{% endhighlight %}

### Creating a fit model

To fit a dataset, a model is needed to describe the data, such as a probability density function (PDF) describing the observed data or a hypothetical function describing the relationship between the independent variables `X` and the single dependent variable `Y`. The model can have any number of k independent variables. For example, in fitting a k-dimensional histogram, the independent variables `X` are the coordinates of the bin centers and `Y` is the bin weight.

The model function needs to be expressed as function of some unknown parameters. The fitting will find the best parameter value to describe the observed data.

You can for example use the {% include ref class="TF1" %} class, the parametric function class, to describe the model function.
But the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html){:target="_blank"} class takes as input a more general parametric function object, the abstract interface class [ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}. It describes a generic one-dimensional or multi-dimensional function with parameters.
This interface extends the abstract [ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"} class with methods to set or retrieve parameter values and to evaluate the function given by the independent vector of values `X` and the vector of parameters `P`.

You convert a {% include ref class="TF1" %} object in a [ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}, using the wrapper class [ROOT::Math::WrappedMultiTF1](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5c8071dfd2d9d6661de283f5e363566b){:target="_blank"}.

_**Example**_

{% highlight C++ %}
TF1 * f1 = new TF1("f1","gaus");
ROOT::Math::WrappedMultiTF1 fitFunction(f1, f1->GetNdim() );
ROOT::Fit::Fitter fitter;
fitter.SetFunction( fitFunction, false);
{% endhighlight %}

When creating a wrapper, the parameter values stored in {% include ref class="TF1" %} are copied to the [ROOT::Math::WrappedMultiTF1](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5c8071dfd2d9d6661de283f5e363566b){:target="_blank"} object. The function object representing the model function is given to the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html){:target="_blank"} class using the [Fitter::SetFunction](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#ada9af6981d4212951f8120d848f729ab){:target="_blank"} method.

You can also provide a function object that implements the derivatives of the function with respect to the parameters. In this case you must
provide the function object as a class deriving from the [ROOT::Math::IParametricGradFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a2e698159de0fa9c0bfb713f673464147){:target="_blank"} interface.

Note that the [ROOT::Math::WrappedMultiTF1](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5c8071dfd2d9d6661de283f5e363566b){:target="_blank"} wrapper class implements also the gradient interface, using internally [TF1::GradientPar](https://root.cern/doc/master/classTF1.html#a3fb34a1cc39b386c550827cf1e38e2dd){:target="_blank"}, which is based on numerical differentiation, apart for the case of linear functions (this is when [TF1::IsLinear()](https://root.cern/doc/master/classTF1.html#ab3fbb4f517a7589cbacd5535e630cfb6){:target="_blank"} is `true`). The parameter derivatives of the model function can be useful to some minimization algorithms, such as FUMILI (see → [FUMILI]({{ "/manual/math/#fumili-minimization-package" | relative_url}})). However, in general is better to leave the minimization algorithm (for example TMinuit, see → [TMinuit]({{ "/manual/math/#tminuit" | relative_url}})) to compute the needed derivatives using its own customised numerical differentiation algorithm. To avoid providing the parameter derivations to the fitter, explicitly set [Fitter::SetFunction](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a5f80d18031a54675a9f33670d495d0a5){:target="_blank"} to  `false`.

### Configuring the fit

Use the [ROOT::Fit::FitConfig](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitConfig.html){:target="_blank"} class (contained in the [ROOT::Fit::ParameterSettings](https://root.cern/doc/master/classROOT_1_1Fit_1_1ParameterSettings.html){:target="_blank"} class) for configuring the fit.

There are the following fit configurations:

- Setting the initial values of the parameters.
- Setting the parameter step sizes.
- Setting eventual parameter bounds.
- Setting the minimizer library and the particular algorithm to use.
- Setting different minimization options (print level, tolerance, max iterations, etc. . . ).
- Setting the type of parameter errors to compute (parabolic error, minor errors, re-normalize errors using fitted chi2 values).

_**Example**_

Setting the lower and upper bounds for the first parameter and a lower bound for the second parameter:

{% highlight C++ %}
fitter.SetFunction( fitFunction, false);
fitter.Config().ParSettings(0).SetLimits(0,1.E6);
fitter.Config().ParSettings(2).SetLowerLimit(0);
{% endhighlight %}

Note that a [ROOT::Fit::ParameterSettings](https://root.cern/doc/master/classROOT_1_1Fit_1_1ParameterSettings.html){:target="_blank"} objects exists for each fit parameter and it created by the [ROOT::Fit::FitConfig](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitConfig.html){:target="_blank"} class, after the model function has been set in the fitter. Only when the function is set, the number of parameter is known and automatically the `FitConfig` creates the corresponding `ParameterSetting` objects.

Various minimizers can be used in the fitting process. They can be implemented in different libraries and loaded at run time. Each different minimizer (for example Minuit, Minuit2, FUMILI, etc.) consists of a different implementation of the [ROOT::Math::Minimizer](https://root.cern/doc/master/classROOT_1_1Math_1_1Minimizer.html){:target="_blank"}  interface. Within the same minimizer, thus within the same class implementing the `Minimizer` interface, different algorithms exist.

If the requested minimizer is not available in ROOT, the default one is used. The default minimizer type and algorithm can be specified by using the static function `ROOT::Math::MinimizerOptions::SetDefaultMinimizer("minimizerName")`.

### Performing the fit

Depending on the available input data and the selected function for fitting, you can use one of the methods of the [ROOT::Fit::Fitter](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html) class to perform the fit.

**Pre-defined fitting methods**

The following pre-defined fitting methods are available:

- Least-square fit: [Fitter::LeastSquare(const BinData &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a44dc06cfe20c1036657e78d939b34593){:target="_blank"} or [Fitter::Fit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#ae6b7c345d4e0b62ebec1a9d08afd233c){:target="_blank"}.
Both methods should be used when the binned data values follow a Gaussian distribution. These fit methods are implemented using the [ROOT::Fit::Chi2FCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Chi2FCN.html#af0040f12bc304dd9610daec9d0dfed70){:target="_blank"} class.

- Binned likelihood fit: [Fitter::LikelihoodFit(const Bindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a61a145587e2b65e90e4f05d3df2d6004){:target="_blank"}. This method should be used when the binned data values follow a Poisson or a multinomial distribution. The Poisson case (extended fit) is the default and in this case the function normalization is also fit to the data. This method is implemented by the
[ROOT::Fit::PoissonLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1PoissonLikelihoodFCN.html) class.

- Un-binned likelihood fit: [Fitter::LikelihoodFit(const UnBindata &)](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a980281c2d7ecfbf94fe584fc3da1a566){:target="_blank"}. By default the fit is not extended, this is the normalization is not fitted to the data. This method is implemented using the [LogLikelihoodFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1LogLikelihoodFCN.html){:target="_blank"} class.

- Linear fit: A linear fit can be chosen if the model function is linear in the parameters.

**User-defined fitting methods**

You can also implement your own fitting methods. You can implement your own version of the method function using on its own dataset objects and functions.

Use [ROOT::Fit::Fitter::SetFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a4460b05f7905ae72060b0aec2f255ad0){:target="_blank"} to set the method function and [ROOT::Fit::FitFCN](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a3e214693aaf77708cbf96432ce4bc2d2){:target="_blank"} for fitting. <BR/>
You can pass the method function also in `ROOT::Fit::FitFCN`, but in this case a previously defined fitting configuration is used.

The possible type of method functions that are based in `ROOT::Fit::Fitter::SetFCN` are:

- A generic functor object implementing `operator()(const double * p)` where `p` is the parameter vector. In this case you need to pass the number of parameters, the function object and optionally a vector of initial
parameter values. Other optional parameter include the size of the datasets and a flag specifying if it is a `chi2` (least-square fit). If the last two parameters are given, the `chi2/ndf` can be computed after fitting the data.

{% highlight C++ %}
template <class Function>
bool Fitter::SetFCN(unsigned int npar, Function &f,
                    const double *initialParameters = nullptr,
                    unsigned int dataSize = 0,
                    bool isChi2Fit = false);
{% endhighlight %}

- A function object implementing the [ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"} interface.

{% highlight C++ %}
bool Fitter::SetFCN(const ROOT::Math::IBaseFunctionMultiDim &f,
                    const double *initialParameters = nullptr,
                    unsigned int dataSize = 0,
                    bool isChi2Fit = false);
{% endhighlight %}

- A function object implementing the [ROOT::Math::FitMethodFunction](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a4146844bcfb2608f1dd869ffc968e6f7){:target="_blank"} interface. This is an interface class that extends [ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"} with some additional functions which can be used when fitting is done. The extra functionality is required by some fitting algorithms like [FUMILI]({{"/manual/math/#fumili-minimization-package" | relative_url}}) or `GSLMultiFit`.


{% highlight C++ %}
bool Fitter::SetFCN(const ROOT::Math::FitMethodFunction &f,
                    const double *initialParameters = nullptr,
                    unsigned int dataSize = 0);
{% endhighlight %}

- An old-Minuit like FCN interface (this is a free function with the signature `fcn(int &npar, double *gin, double &f, double *u, int flag)`.

{% highlight C++ %}
typedef void (*MinuitFCN)(int &npar, double *gin, double &f, double *u, int flag);
bool Fitter::SetFCN(MinuitFCN fcn, int npar,
                    const double *initialParameters = nullptr,
                    unsigned int dataSize = 0,
                    bool isChi2Fit = false)
{% endhighlight %}

### Example: simultaneous fit of two histograms

One good example that covers most of the `ROOT::Fit` features is the simultaneous fit of two histograms (see the [combinedFit.C](https://root.cern/doc/master/combinedFit_8C.html) / [combinedFit.py](https://root.cern/doc/master/combinedFit_8py.html) tutorial).

### Computing confidence intervals

With the [fit result object](#the-fit-result-object) returned by [Fitter::Result()](https://root.cern/doc/master/classROOT_1_1Fit_1_1Fitter.html#a6d61049616443be88ac26da881557ba7),
you can compute the confidence intervals after the fit (see [ROOT::Fit::FitResult::GetConfidenceIntervals](https://root.cern/doc/master/classROOT_1_1Fit_1_1FitResult.html#a546a3b6ca8231e2870d1c5082374ad59){:target="_blank"}).
Given an input dataset (for example a `BinData` object) and a confidence level value (for example 68%), it computes the lower and upper band values of the model function at the given data points.

You can take a loot at the [ConfidenceIntervals.C](https://root.cern/doc/master/ConfidenceIntervals_8C.html) tutorial for an example.

## Using the Fit Panel

After you have drawn a histogram (see → [Drawing a histograms]({{ "/manual/histograms/#drawing-a-histogram" | relative_url}})), you can use the Fit Panel for fitting the data. The Fit Panel is best suited for prototyping

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
