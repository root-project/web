---
title: RooFit
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides with the RooFit library a toolkit for modeling the expected distribution of events in a physics analysis. Models can be used to perform unbinned maximum likelihood fits, create plots, and generate "toy Monte Carlo" samples for various studies.

{% include tutorials name="RooFit" url="roofit" %}

> **Topical Manuals**
>
> For RooFit, Topical Manuals are available at [Topical Manuals - RooFit]({{ '/topical/#roofit' | relative_url }}).<br>
> They contain in-depth information about RooFit.

> **RooFit in the ROOT forum**
>
> Discuss RooFit and RooStats in the [ROOT forum](https://root-forum.cern.ch/c/roofit-and-roostats/12){:target="_blank"}.


## Mathematical model

The core functionality of RooFit is to enable the modeling of ‘event data’ distributions, where each event is a discrete occurrence in time, and has one or more measured observables associated with it. Experiments of this nature result in data sets obeying Poisson (or binomial) statistics.

The natural modeling language for such distributions are probability density functions (PDF) `F(x;p)` that describe the probability density of the distribution of the observables `x` in terms of function in parameter `p`.
The defining properties of PDFs, unit normalization with respect to all observables and positive definiteness, also provide important benefits for the design of a structured modeling language: PDFs are easily added with intuitive interpretation of fraction coefficients.
They allow construction of higher dimensional PDFs out of lower dimensional building block with an intuitive language to introduce and describe correlations between observables.
And they also allow the universal implementation of toy Monte Carlo sampling techniques, and are of course an prerequisite for the use of (un-binned) maximum likelihood parameter estimation technique.

## Design

RooFit introduces a granular structure in its mapping of mathematical data models components to C++ objects: instead of aiming for a monolithic entity describing a data model, each mathematical symbol is represented by a separate object. A feature of this design philosophy is that all RooFit models always consist of multiple objects.

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Mathematical concept</th>
      <th scope="col">Roofit class</th>
    </tr>
    <tr>
      <td>Variable</td>
      <td>RooRealVar</td>
    </tr>
    <tr>
      <td>Function</td>
      <td>RooAbsReal</td>
    </tr>
    <tr>
      <td>PDF</td>
      <td>RooAbsPdf</td>
    </tr>
    <tr>
      <td>Integral</td>
      <td>RooRealIntegral</td>
    </tr>
    <tr>
      <td>Space point</td>
      <td>RooArgSet</td>
    </tr>
    <tr>
      <td>List of space points</td>
      <td>RooAbsData</td>
    </tr>
  </tbody>
</table>

_**Example**_

A Gaussian PDF consists typically of four objects:
- three objects representing the observable, the mean and the sigma parameters,
- one object representing a Gaussian PDF.

{% highlight C++ %}
// Observable with lower and upper bound:
RooRealVar mes{"mes", "m_{ES} (GeV)", 5.20, 5.30};

// Parameters with starting value, lower bound, upper bound:
RooRealVar sigmean{"sigmean", "B^{#pm} mass", 5.28, 5.20, 5.30};
RooRealVar sigwidth{"sigwidth", "B^{#pm} width", 0.0027, 0.001, 1.};

// Build a Gaussian PDF:
RooGaussian signal{"signal", "signal PDF", mes, sigmean, sigwidth};
{% endhighlight %}

Model building operations such as addition, multiplication, integration are represented by separate operator objects and make the modeling language scale well to models of arbitrary complexity.

## Examples

### Signal and background model

Taking a Gaussian PDF, the following example constructs a one-dimensional PDF with a Gaussian signal component and an [ARGUS](https://en.wikipedia.org/wiki/ARGUS_distribution) background component.<br/>All individual components of the RooFit PDF (the variables, component PDFs, and the combined PDF) are all created individually by calling the constructors directly.

{% highlight C++ %}
// Put this in a file called runArgusModel.C and run it with root.

void runArgusModel()
{
   using namespace RooFit;

   // Observable:
   RooRealVar mes("mes", "m_{ES} (GeV)", 5.20, 5.30);

   // Parameters:
   RooRealVar sigmean("sigmean", "B^{#pm} mass", 5.28, 5.20, 5.30);
   RooRealVar sigwidth("sigwidth", "B^{#pm} width", 0.0027, 0.001, 1.);

   // Build a Gaussian PDF:
   RooGaussian signalModel("signal", "signal PDF", mes, sigmean, sigwidth);

   // Build Argus background PDF:
   RooRealVar argpar("argpar", "argus shape parameter", -20.0, -100., -1.);
   RooArgusBG background("background", "Argus PDF", mes, RooConst(5.291), argpar);

   // Construct a signal and background PDF:
   RooRealVar nsig("nsig", "#signal events", 200, 0., 10000);
   RooRealVar nbkg("nbkg", "#background events", 800, 0., 10000);
   RooAddPdf model("model", "g+a", {signalModel, background}, {nsig, nbkg});

   // The PDF is used to generate an un-binned toy data set, then the PDF is
   // fit to that data set using an un-binned maximum likelihood fit.
   // Then the data are visualized with the PDF overlaid.

   // Generate a toy MC sample from composite PDF:
   std::unique_ptr<RooDataSet> data{model.generate(mes, 2000)};

   // Perform extended ML fit of composite PDF to toy data:
   model.fitTo(*data);

   // Create a RooPlot to draw on. We don't manage the memory of the returned
   // pointer. Instead we let it leak such that the plot still exists at the end of
   // the macro and we can take a look at it.
   RooPlot *mesframe = mes.frame();

   // Plot toy data and composite PDF overlaid:
   data->plotOn(mesframe);
   model.plotOn(mesframe);
   model.plotOn(mesframe, Components(background), LineStyle(ELineStyle::kDashed));

   mesframe->Draw();
}
{% endhighlight %}

{% include figure_jsroot
   file="roofit.root" object="mesframe" width="600px" height="400px"
   caption="Roofit plot."
%}

It is also possible to organize all individual components of the RooFit PDF (the variables, component PDFs, and the combined PDF) in a container class  `myWorkspace` that has an associated factory tool to create trees of RooFit objects of arbitrary complexity using a construction language.

{% highlight C++ %}
{
   using namespace RooFit;

   RooWorkspace ws{"myWorkspace"};
   ws.factory("Gaussian::gauss(mes[5.20,5.30],mean[5.28,5.2,5.3],width[0.0027,0.001,1])");
   ws.factory("ArgusBG::argus(mes,5.291,argpar[-20,-100,-1])");
   ws.factory("SUM::sum(nsig[200,0,10000]*gauss,nbkg[800,0,10000]*argus)");

   // Retrieve pointers to variables and PDFs for later use.
   RooAbsPdf *sum = ws.pdf("sum"); // Returns as RooAbsPdf*
   RooRealVar *mes = ws.var("mes"); // Returns as RooRealVar*

   // Generate a toy MC sample from composite PDF.
   std::unique_ptr<RooDataSet> data{sum->generate(*mes, 2000)};

   // Perform extended ML fit of composite PDF to toy data.
   sum->fitTo(*data);

   // Plot toy data and composite PDF overlaid.
   RooPlot *mesframe = mes->frame();
   data->plotOn(mesframe);
   sum->plotOn(mesframe);
   sum->plotOn(mesframe, Components(*ws.pdf("argus")), LineStyle(kDashed));

   mesframe->Draw();
}
{% endhighlight %}

### Convolution of two PDFs

The [Signal and background model](#signal-and-background-model) example illustrated the use of the `RooAddPdf` addition operator. It is also possible to construct convolutions of PDFs using the FFT convolution operator.

{% highlight C++ %}
RooWorkspace ws{"ws"};

ws.factory("Landau::landau(t[-10,30],ml[5,-20,20],sl[1,0.1,10])");
ws.factory("Gaussian::gauss(t,mg[0],sg[2,0.1,10])");
RooRealVar *t = ws.var("t");
RooAbsPdf *landau = ws.pdf("landau");
RooAbsPdf *gauss = ws.pdf("gauss");

// Construct convoluted PDF lxg(x) = landau(x) (*) gauss(x).
RooFFTConvPdf lxg{"lxg", "landau (X) gauss", *t, *landau, *gauss};

// Alternative construction method using workspace
// ws.factory("FCONV::lxg(x,landau,gauss)");
{% endhighlight %}

You can use PDF's `lxg` for fitting, plotting and event generation in exactly the same way as the PDF model of The [Signal and background model](#signal-and-background-model) example.

### Multi-dimensional PDF

You can construct multi-dimensional PDFs with and without correlations using the `RooProdPdf` product operator. The example below shows how to construct a 2-dimensional PDF with correlations of the form `F(x|y)*G(y)` where the conditional PDF `F(x|y)` describes the distribution in observable `x` given a value of `y`, and PDF `G(y)` describes the distribution in observable `y`.

{% highlight C++ %}
RooWorkspace ws{"ws"};

// Construct F(x|y), a Gaussian in x with a mean that depends on y.
ws.factory("PolyVar::meanx(y[-5,5],{a0[-0.5,-5,5],a1[-0.5,-1,1]})");
ws.factory("Gaussian::gaussx(x[-5,5],meanx,sigmax[0.5])");

// Construct G(y), an Exponential in y.
ws.factory("Exponential::gaussy(y,-0.2)");

// Construct M(x,y) = F(x|y)*G(y).
ws.factory("PROD::model(gaussx|y,gaussy)");

RooRealVar *xs = ws.var("x");
RooAbsPdf *model = ws.pdf("model");
model->Print("");
{% endhighlight %}

The result is:

```
RooProdPdf::model[ gaussy * gaussx|y ] = 0.606531
```

Fitting, plotting and event generation with multi-dimensional PDFs is very similar to that of one-dimensional PDFs. Continuing the above example, you can use:

{% highlight C++ %}
std::unique_ptr<RooDataSet> data{model->generate({*x, *ws.var("y")}, 10000)};

model->fitTo(*data);

RooPlot *frame = x->frame();
data->plotOn(frame);
model->plotOn(frame);

frame->Draw();
{% endhighlight %}

## Working with likelihood functions and profile likelihood

Given a PDF and a data set, you can build a likelihood function with [RooAbsPdf::createNLL()](https://root.cern/doc/master/classRooAbsPdf.html#a4c6d7383fa64bda3a7d62beef08f4510):

{% highlight C++ %}
std::unique_ptr<RooAbsReal> nll{pdf.createNLL(data)};
{% endhighlight %}

The likelihood function behaves like a regular RooFit function and can be drawn in the same way as PDFs

{% highlight C++ %}
RooPlot* frame = myparam.frame();
nll->plotOn(frame);
{% endhighlight %}

You can also similarly construct the profile likelihood, which is the likelihood minimized taking into account the nuisance parameters, this is, for a likelihood `L(p,q)` where `p` is a parameter of interest and `q` is a nuisance parameter, the value of the profile likelihood `PL(p)` is the value of `L(p,q)` at the value of `q` where `L(p,q)` is lowest. A profile likelihood is construct as follows:

{% highlight C++ %}
std::unique_ptr<RooAbsReal> pll{nll->createProfile(<paramOfInterest>)};
{% endhighlight %}


_**Example**_

A toy PDF and a data set are constructed. A likelihood scan and a profile likelihood scan are compared in one of the parameters:

{% highlight C++ %}
using namespace RooFit; // for the command arguments like Bins(), Range(), etc.

// Construct the model
RooWorkspace ws("ws");

ws.factory("Gaussian::g1(x[-20,20],mean[-10,10],sigma_g1[3, 0.1, 10.0])");
ws.factory("Gaussian::g2(x,mean,sigma_g2[4,3,6])");
ws.factory("SUM::model(frac[0.5,0,1]*g1,g2)");

RooRealVar *x = ws.var("x");
RooRealVar *frac = ws.var("frac");
RooAbsPdf *model = ws.pdf("model");

// Generate 1000 events
std::unique_ptr<RooDataSet> data{model->generate(*x, 1000)};

// We set sigma_g1 constant to simplify the fit
ws.var("sigma_g1")->setConstant();

// Create a likelihood function
std::unique_ptr<RooAbsReal> nll{model->createNLL(*data)};

// Minimize the likelihood
RooMinimizer(*nll).minimize("Minuit2");

// Plot a likelihood scan in parameter frac
RooPlot *frame1 = frac->frame(Bins(10), Range(0.01, 0.95));
nll->plotOn(frame1, ShiftToZero());

// Plot the profile likelihood scan in parameter frac
std::unique_ptr<RooAbsReal> pll_frac{nll->createProfile(*frac)};
pll_frac->plotOn(frame1, LineColor(kRed));

frame1->Draw();
{% endhighlight %}

{% include figure_jsroot
   file="roofit.root" object="likelihood" width="600px" height="400px"
   caption="The likelihood and the profile likelihood in the frac parameter."
%}

_**Python**_
In Python, the example above look like this:

{% highlight Python %}
import ROOT

# Construct the model
ws = ROOT.RooWorkspace("w")
g1 = ws.factory("Gaussian::g1(x[-20,20],mean[-10,10],sigma_g1[3, 0.1, 10.0])")
g2 = ws.factory("Gaussian::g2(x,mean,sigma_g2[4,3,6])")
model = ws.factory("SUM::model(frac[0.5,0,1]*g1,g2)")

x = ws["x"]
frac = ws["frac"]

# Generate 1000 events
data = model.generate([x], 1000)

# We set sigma_g1 constant to simplify the fit
ws["sigma_g1"].setConstant()

# Create likelihood function
nll = model.createNLL(data)

# Minimize likelihood
minimiser = ROOT.RooMinimizer(nll)
minimiser.minimize("Minuit2")

# Plot likelihood scan in parameter frac
frame1 = frac.frame(Bins=10, Range=(0.01, 0.95))
nll.plotOn(frame1, ShiftToZero=True)

# Plot the profile likelihood in frac
pll_frac = nll.createProfile([frac])
pll_frac.plotOn(frame1, LineColor="kRed")

frame1.Draw()
{% endhighlight %}

