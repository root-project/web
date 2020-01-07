---
title: RooFit
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides with the RooFit library a toolkit for modeling the expected distribution of events in a physics analysis.

> **Tutorials**
>
> RooFit tutorials are available at → [https://root.cern/doc/master/group__tutorial__roofit.html](https://root.cern/doc/master/group__tutorial__roofit.html)

> **Topical Manuals**
>
> For RooFit, Topical Manuals are available at [Topical Manuals - RooFit]({{ '/topical/#roofit' | relative_url }}).<br>
> They contain in-depth information about RooFit.


## Mathematical model

The core functionality of RooFit is to enable the modeling of ‘event data’ distributions, where each event is a discrete occurrence in time, and has one or more measured observables associated with it.
Experiments of this nature result in data sets obeying Poisson (or binomial) statistics.

The natural modeling language for such distributions are probability density functions (probability density function = PDF) `F(x;p)` that describe the probability density of the distribution of the observables `x` in terms of function in parameter `p`.
The defining properties of probability density functions, unit normalization with respect to all observables and positive definiteness, also provide important benefits for the design of a structured modeling language: PDFs are easily added with intuitive interpretation of fraction coefficients.
They allow construction of higher dimensional PDFs out of lower dimensional building block with an intuitive language to introduce and describe correlations between observables.
And they also allow the universal implementation of toy Monte Carlo sampling techniques, and are of course an prerequisite for the use of (un-binned) maximum likelihood parameter estimation technique.

## Design

RooFit introduces a granular structure in its mapping of mathematical data models components to C++ objects: rather than aiming at a monolithic entity that describes a data model, each math symbol is presented by a separate object. A feature of this design philosophy is that all RooFit models always consist of multiple objects.

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

A Gaussian probability density function (PDF) consists typically of four objects:
- three objects representing the observable, the mean and the sigma parameters,
- one object representing a Gaussian probability density function.

{% highlight C++ %}
// Observable with lower and upper bound:
RooRealVar mes("mes","m_{ES} (GeV)",5.20,5.30);

// Parameters with starting value, lower bound, upper bound:
RooRealVar sigmean("sigmean","B^{#pm} mass",5.28,5.20,5.30);
RooRealVar sigwidth("sigwidth","B^{#pm} width",0.0027,0.001,1.);

// Build a Gaussian PDF:
RooGaussian signal("signal","signal PDF",mes,sigmean,sigwidth);
{% endhighlight %}

Model building operations such as addition, multiplication, integration are represented by separate operator objects and make the modeling language scale well to models of arbitrary complexity.

## Examples

### Signal and background model

Taking a Gaussian probability density function, the following example constructs a one-dimensional probability density function with a Gaussian signal component and a `ARGUS` phase space background component.

{% highlight C++ %}
#include "RooRealVar.h"
#include "RooConstVar.h"
#include "RooGaussian.h"
#include "RooArgusBG.h"
#include "RooAddPdf.h"
#include "RooDataSet.h"
#include "RooPlot.h"

using namespace RooFit;

void runArgusModel() {
   // Observable:
   RooRealVar mes("mes","m_{ES} (GeV)",5.20,5.30);

   // Parameters:
   RooRealVar sigmean("sigmean","B^{#pm} mass",5.28,5.20,5.30);
   RooRealVar sigwidth("sigwidth","B^{#pm} width",0.0027,0.001,1.);

   // Build a Gaussian PDF:
   RooGaussian signalModel("signal","signal PDF",mes,sigmean,sigwidth);

   // Build Argus background PDF:
   RooRealVar argpar("argpar","argus shape parameter",-20.0,-100.,-1.);
   RooArgusBG background("background","Argus PDF",mes,RooConst(5.291),argpar);

   // Construct a signal adn background PDF:
   RooRealVar nsig("nsig","#signal events",200,0.,10000);
   RooRealVar nbkg("nbkg","#background events",800,0.,10000);
   RooAddPdf model("model","g+a",RooArgList(signalModel,background),RooArgList(nsig,nbkg));

   // The PDF is used to generate an un-binned toy data set, then the PDF is fit to that data set using an un-binned maximum likelihood fit.
   // Then the data are visualized with the PDF overlaid.

   // Generate a toy MC sample from composite PDF:
   RooDataSet *data = model.generate(mes, 2000);

   // Perform extended ML fit of composite PDF to toy data:
   model.fitTo(*data);

   // Plot toy data and composite PDF overlaid:
   RooPlot* mesframe = mes.frame();
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

It is also possible to organize all individual components of the RooFit PDF (the variables, component PDFs and combined PDF) in a container class the `myWorkspace` that has an associated factory tool to create trees of RooFit objects of arbitrary complexity using a construction language.

{% highlight C++ %}
{
   using namespace RooFit;

   RooWorkspace w("myWorkspace", true);
   w.factory("Gaussian::gauss(mes[5.20,5.30],mean[5.28,5.2,5.3],width[0.0027,0.001,1])");
   w.factory("ArgusBG::argus(mes,5.291,argpar[-20,-100,-1])");
   w.factory("SUM::sum(nsig[200,0,10000]*gauss,nbkg[800,0,10000]*argus)");

   // Retrieve pointers to variables and pdfs for later use
   auto sum = w.pdf("sum"); // Returns as RooAbsPdf*
   auto mes = w.var("mes"); // Returns as RooRealVar*

   // --- Generate a toyMC sample from composite PDF ---
   RooDataSet *data = sum->generate(*mes, 2000);

   // --- Perform extended ML fit of composite PDF to toy data ---
   sum->fitTo(*data);

   // --- Plot toy data and composite PDF overlaid ---
   auto mesframe = mes->frame();
   data->plotOn(mesframe);
   sum->plotOn(mesframe);
   sum->plotOn(mesframe, Components(*w.pdf("argus")), LineStyle(kDashed));

   mesframe->Draw();
}
{% endhighlight %}

After executing the ROOT macro, the objects defined in the workspace are also available in a namespace with the same name as the workspace if the second argument of the workspace constructor is set to `true`.
That is, typing `myWorkspace::sum` at the root prompt yields:

{% highlight C++ %}
root [2] myWorkspace::sum
(RooAddPdf &) RooAddPdf::sum[ nsig * gauss + nbkg * argus ] = 0.369501
{% endhighlight %}

