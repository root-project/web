---
title: General documentation guidelines
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

Classes and methods can be documented both in the .cxx and .h files. For the long descriptions
of a class functionality and its methods we usually prefer the .cxx file.

## Class documentation
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

## Method documentation
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

## Free functions documentation

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



## Data Member documentation

**IMPORTANT:** It is crucial to use `///<` and only `///<` to comment data members: this
comment is correctly understood by genreflex/rootcling.
The usage of other Doxygen constructs can interfere with the I/O subsystem!

{% highlight C++ %}
  Double_t fMymember          ///< My Member
  Double_t fMyTransientMember ///<! My Member
{% endhighlight %}

The usage of "//!" will still result in transiency of members but not in Doxygen documentation.

## Tutorials' documentation

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
