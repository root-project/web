---
title: Useful tips for common documentation artifacts
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---
A couple of useful online web tools for the conversion and formatting:

- [HTML to Markdown converter](https://www.browserling.com/tools/html-to-markdown){:target="_blank"}
- [Latex equation editor](https://www.codecogs.com/latex/eqneditor.php){:target="_blank"}

## Code blocks
Simple code blocks are documented by indenting the code 4 spaces.

{% highlight C++ %}
    TEfficiency* pEff = 0;
    TFile* pFile = new TFile("myfile.root","recreate");
{% endhighlight %}

 Longer code blocks can done with fenced lines consisting of 3 or more tilde (~) characters on a line. The end of the block should have the same number of tildes. Here is an example (note that tildes should start on first column!):

{% highlight C++ %}
~~~ {.cpp}
TEfficiency* pEff = 0;
TFile* pFile = new TFile("myfile.root","recreate");

//h_pass and h_total are valid and consistent histograms
if(TEfficiency::CheckConsistency(h_pass,h_total))
{
  ...
}
~~~
{% endhighlight %}

## Macros and generated figures
The keywords `Begin_Macro` and `End_Macro` are understood by the filter command to extract the code and produce the figure that will be inserted automatically in place. If in addition one wants to show the macro's code the parameter `source` should added to the `Begin_Macro` directive: `Begin_Macro(source)`. The code enclosed by  `Begin_Macro` and `End_Macro` can be plain C++ code:

{% highlight C++ %}
Begin_Macro
{
   c  = new TCanvas("c","c",0,0,300,300);
   TF2 *f2 = new TF2("f2","0.1+(1-(x-2)*(x-2))*(1-(y-2)*(y-2))",0.999,3.002,0.999,3.002);
   f2->SetContour(99); gStyle->SetPalette(kDeepSea);
   f2->Draw("surf2Z"); f2->SetTitle("kDeepSea");
}
End_Macro
{% endhighlight %}

 or a file name containing the code to be executed:

{% highlight C++ %}
Begin_Macro(source)
../../../tutorials/graphs/multipalette.C
End_Macro
{% endhighlight %}

`Begin_Macro` also accept the image file type as option. `"png"` or `"svg"`.
`"png"` is the default value. For example: `Begin_Macro(source, svg)` will show
the code of the macro and the image will be is svg format. The `"width"` keyword
can be added to define the width of the picture in pixel: `"width=400"` will
scale a picture to 400 pixel width. This allow to define large pictures which
can then be scaled down to have a better definition.

## Images
Images should be placed in in directory `documentation/doxygen/images` with the name `<class>_<figurename>.png`. They are referenced in the comments with the `\image` doxygen command:

{% highlight C++ %}
\image html tf2_function2.png
{% endhighlight %}

## Formulas
In paragraph formulas can be added with `\f$`, for example `\f$  \frac{1}{1 - x}\f$`. Column centered and multi-line formulas can be added with the commands `\f[ ... \f]` or `\f{...}{ ...\f}`. See the following examples:

{% highlight C++ %}
\f[
   \frac{1}{w_{new}} = \frac{1}{w_{1}} + \frac{1}{w_{2}}
\f]

\f{eqnarray*}{
   w &=& \frac{\sigma L}{N_{gen} \epsilon_{trig}} \\
     &-& \sigma ...\ cross\ section \\
     &-& L ...\ luminosity \\
     &-& N_{gen}\ ... number\ of\ generated\ events \\
     &-& \epsilon_{trig}\ ...\ (known)\ trigger\ efficiency \\
\f}
{% endhighlight %}

## Tables

Markdown tables are very convening for tabulated documentation. See the following example:

{% highlight C++ %}
/// Possible option values are:
///
/// option | description
/// -------|----------------------------------------
/// "SAME" | superimpose on top of existing picture
/// "L"    | connect all computed points with a straight line
/// "C"    | connect all computed points with a smooth curve
/// "FC"   | draw a fill area below a smooth curve
///
{% endhighlight %}

## Grouping classes in modules

You can group the classes according to the corresponding packages (e.g. math, hist, tree, etc...). In order to do this, you need to define first somewhere, as a code comment or in a separate page a
group using the `\defgroup` tag.
Example

{% highlight C++ %}
/**
  \defgroup Hist Histogram Library

  The Histogram library is documented in the class TH1.

*/
{% endhighlight %}

Then one needs to add in the class description comments the `\ingroup` tag. For example in the class TH1, which is part of the Hist group one should add

{% highlight C++ %}
/**
   \class TH1
   \ingroup Hist
....
*/
{% endhighlight %}

## Include additional documentation pages in HTML or Markdown format

One can add extra pages for the documentation in HTML or Markdown format (preferable) in the  package/doc  directory (e.g. hist/doc). These page could be used to
provide a general documentation of the package. The pages should be included in a file with name as the package name and the .md or .html suffix (e.g. hist.md).
The file should contain, in addition to the package description, the Doxygen command `\page [name] [title]` which defines the internal page name (used to reference that page) and
the page title.

For example:

{% highlight C++ %}
/**

 \page HistPage The Histogram Library

This page provides a description of the Histogram library.

*/
{% endhighlight %}

Inside page you can reference to groups or other pages using the Doxygen commands `\subpage [refname] ["text"]` and `\ref [refname] ["text"]`.
See as example the existing `math/doc/Math.md` file.
