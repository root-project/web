---
title: Formatting Comments for Doxygen
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT team has adopted [Doxygen](https://www.doxygen.nl){:target="_blank"} for generating
the [Reference Guide](https://root.cern/doc/master/){:target="_blank"}. Here you will find a number of conventions
and tips to be used in source code to generate proper documentation.

## How to generate locally the doxygen documentation
Developers can generate the documentation locally to review the results of their changes
before committing them to the repository. First compile and install ROOT, then the process is as follows:

{% highlight sh %}
$ cd <root_sources>/documentation/doxygen
$ source <root_install_location>/bin/thisroot.sh
$ make
{% endhighlight %}

By default, the results are located at `${HOME}/rootdoc/html`. This process will generate
the full documentation, which may take several hours to complete! To minimize the generation
time and preview only the changes you’ve made locally, edit the script
`$ROOTSYS/documentation/doxygen/makeinput.sh` to limit the number of input files being scanned.
Typically, you should keep only the folder(s) containing the documentation you are
currently working on. To view the results of this local build, open the file
`{HOME}/rootdoc/html/index.html` in your preferred web browser.

### Compilation prerequisites on Ubuntu
- `apt install doxygen make jupyter-nbconvert`
- `pip install scandir nbformat metakernel ipykernel`
- Optional: `apt install qhelpgenerator-qt5`. In case of older Ubuntu versions, use `qt4-dev-tools`
instead, and modify in the `Doxyfile` `QHG_LOCATION` to
`/usr/lib/x86_64-linux-gnu/qt4/bin/qhelpgenerator`

## General Guidelines
Classes and methods can be documented both in the .cxx and .h files. For the long descriptions
of a class functionality and its methods we usually prefer the .cxx file.

### Class documentation
The documentation for the class is in general located at the beginning of the .cxx file.
The `\class` Doxygen command is mandatory otherwise Doxygen will not associate the comments
to the proper class.  The first sentence is a brief description of the class and will
appear in all class listings. For an example see the TF2 class documentation:

{% highlight C++ %}
/** \class TF2
A 2-Dim function with parameters

TF2 graphics function is via the TH1 drawing functions.
Example of a function

    TF2 *f2 = new TF2("f2","sin(x)*sin(y)/(x*y)",0,5,0,5);
    f2->Draw();

\image html tf2_function2.png
See TF1 class for the list of functions formats
*/
{% endhighlight %}

### Method documentation
Methods are documented just before the method/function is defined in the .cxx file.
The use of `\param[in]` and `\param[out]` is encouraged to document the parameters of the
method. The agreed formatting is as follows:

{% highlight C++ %}
////////////////////////////////////////////////////////////////////////////////
/// Compute distance from point px,py to a function
///
/// \param[in] px x position
/// \param[in] py y position
///
/// Compute the closest distance of approach from point px,py to this function.
/// The distance is computed in pixels units.

Int_t TF2::DistancetoPrimitive(Int_t px, Int_t py)
{
...
}
{% endhighlight %}

### Free functions documentation

Doxygen does not document default parameters of free functions if the only doxygen
documentation provided for the function is in source files (as opposed to header files).
To bypass this issue it is enough to provide a brief documentation for such functions in
the header file. For example if the source file is:

{% highlight C++ %}
   ////////////////////////////////////////////////////////////////////////////////
   /// @param[in] numthreads Number of threads to use. If not specified or
   ///                       set to zero, the number of threads is automatically
   ///                       decided by the implementation. Any other value is
   ///                       used as a hint.
   ///
   /// ROOT must be built with the compilation flag `imt=ON` for this feature to be available.

    [...]

   void EnableImplicitMT(UInt_t numthreads)
{% endhighlight %}

and the header file:

{% highlight C++ %}
   /// Enable ROOT's implicit multi-threading for all objects and methods that provide an internal
   /// parallelisation mechanism.
   void EnableImplicitMT(UInt_t numthreads = 0);
{% endhighlight %}

Then a [proper documentation](https://root.cern/doc/master/namespaceROOT.html#a06f2b8b216b615e5abbc872c9feff40f){:target="_blank"}
with the default parameters is generated.



### Data Member documentation

**IMPORTANT:** It is crucial to use `///<` and only `///<` to comment data members: this
comment is correctly understood by genreflex/rootcling.
The usage of other Doxygen constructs can interfere with the I/O subsystem!

{% highlight C++ %}
  Double_t fMymember          ///< My Member
  Double_t fMyTransientMember ///<! My Member
{% endhighlight %}

The usage of "//!" will still result in transiency of members but not in Doxygen documentation.

### Tutorials' documentation

ROOT tutorials are also included in the ROOT documentation. The tutorials'
macros headers should look like:

{% highlight C++ %}
/// \file
/// \ingroup tutorial_hist
/// \notebook
/// Getting Contours From TH2D.
///
/// #### Image produced by `.x ContourList.C`
/// The contours' values are drawn next to each contour.
/// \macro_image
///
/// #### Output produced by `.x ContourList.C`
/// It shows that 6 contours and 12 graphs were found.
/// \macro_output
///
/// #### `ContourList.C`
/// \macro_code
///
/// \authors  Josh de Bever, Olivier Couet
{% endhighlight %}

This example shows that four new directives have been implemented:

 1. `\macro_image`
 The images produced by this macro are shown. A caption can be added to document
 the pictures: `\macro_image This is a picture`. When the option `(nobatch)`
 is passed, the macro is executed without the batch option.
 Some tutorials generate pictures (png or pdf) with `Print` or `SaveAs`.
 Such pictures can be displayed with `\macro_image (picture_name.png[.pdf])`
 When the option (tcanvas_js) is used the image is displayed as JavaScript.
 For ROOT 7 tutorials, when the option (rcanvas_js) is used the image is displayed as json file.

 2. `\macro_code`
 The macro code is shown.  A caption can be added: `\macro_code This is code`

 3. `\macro_output`
 The output produced by this macro is shown. A caption can be added:
 `\macro_output This the macro output`

 4. `\notebook`
 To generate the corresponding jupyter notebook. In case the tutorial does
 not generate any graphics output, the option `-nodraw` should be added.
 This directive needs [jupyter to be properly installed](https://jupyter.org/install) when
 building the documentation of tutorials having this directive.


Note that the doxygen directive `\authors` or `\author` must be the last one
of the macro header.

## Useful tips for common documentation artifacts
A couple of useful online web tools for the conversion and formatting:

- [HTML to Markdown converter](https://www.browserling.com/tools/html-to-markdown){:target="_blank"}
- [Latex equation editor](https://www.codecogs.com/latex/eqneditor.php){:target="_blank"}

### Code blocks
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

### Macros and generated figures
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

### Images
Images should be placed in in directory `documentation/doxygen/images` with the name `<class>_<figurename>.png`. They are referenced in the comments with the `\image` doxygen command:

{% highlight C++ %}
\image html tf2_function2.png
{% endhighlight %}

### Formulas
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

### Tables

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

### Grouping classes in modules

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

### Include additional documentation pages in HTML or Markdown format

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
