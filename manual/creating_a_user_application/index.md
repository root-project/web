---
title: Creating a user application with ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Using the example of creating and displaying a canvas, the following shows how you can
create a standalone user application based on ROOT libraries.

Three different kind of standalone user applications are presented:

- [Generating a PDF file](#generating-a-pdf-file).
- [Displaying a canvas](#displaying-a-canvas).
- [Getting ROOT prompt](#getting-root-prompt).


## A simple code example

With the following code a canvas is drawn (→ see also [Graphics]({{ '/manual/graphics' | relative_url }})):

{% highlight C++ %}
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph;x; sin(x)");
   f1->Draw();
{% endhighlight %}

{% include figure_image
   img="canvas.png"
   caption="A simple canvas."
%}

A standalone program in C++ should be created with this code.

> **Note**
>
> If you use this code in a ROOT macro (→ see [ROOT macros and shared libraries]({{ '/manual/interacting_with_shared_libraries' | relative_url }})),
> you can only execute it with ROOT.


## Generating a PDF file

A standalone program in C++ contains the `main()` function, the starting point for the
application execution. For this reason, create a C++ file that you can compile.

The first lines of the C++ file include ROOT header files. The names of the ROOT header
files are almost always the same as the class names (here {% include ref class="TF1" %} and {% include ref class="TCanvas" %}).

{% highlight C++ %}
#include "TF1.h"
#include "TCanvas.h"

int main(int argc, char **argv)
{
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph;x; sin(x)");
   f1->Draw();
   c->Print("demo1.pdf");
   return 0;
}
{% endhighlight %}

Save the code in a file, for example as `demo1.cxx`.

On Linux and MacOS compile the `demo1.cxx` file as follows :

{% highlight C++ %}
$ g++ demo1.cxx $(root-config --glibs --cflags --libs) -o demo1
{% endhighlight %}

The equivalent command on Windows is:

{% highlight C++ %}
$ cl -nologo -MD -GR -EHsc demo1.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
{% endhighlight %}


Then you can run the program as follows:

{% highlight C++ %}
$ ./demo1
{% endhighlight %}

The following message is displayed:

{% highlight C++ %}
Info in <TCanvas::Print>: pdf file demo1.pdf has been created
{% endhighlight %}

The `demo1.pdf` file is saved in the current working directory. The pdf file contains the
plot of the `f1` function.

## Displaying a canvas


Use {% include ref class="TApplication" %} to display the output on a screen.
{% include ref class="TApplication" %} creates a ROOT application environment that
provides an interface to the windowing system event loops and event handlers.

To run the canvas as a standalone application you must create a `TApplication` object.
Calling the `Run()` method starts the event loop.

{% highlight C++ %}
#include "TF1.h"
#include "TApplication.h"
#include "TCanvas.h"
#include "TRootCanvas.h"

int main(int argc, char **argv)
{
   TApplication app("app", &argc, argv);
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph;x; sin(x)");
   f1->Draw();
   c->Modified(); c->Update();
   TRootCanvas *rc = (TRootCanvas *)c->GetCanvasImp();
   rc->Connect("CloseWindow()", "TApplication", gApplication, "Terminate()");
   app.Run();
   return 0;
}
{% endhighlight %}

Save the code in a file, for example as `demo2.cxx`.

On Linux and MacOS compile the `demo2.cxx` file as follows :

{% highlight C++ %}
$ g++ demo2.cxx $(root-config --glibs --cflags --libs) -o demo2
{% endhighlight %}

The equivalent command on Windows is:

{% highlight C++ %}
$ cl -nologo -MD -GR -EHsc demo2.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
{% endhighlight %}


Then you can run the program as follows:

{% highlight C++ %}
$ ./demo2
{% endhighlight %}

## Getting ROOT prompt

You can use {% include ref class="TRint" %} to create an environment provides an interface
to the windows manager and eventloops via the inheritance of {% include ref class="TApplication" %}.
In addition `TRint`provides an interactive access to the Cling C++ interpreter via the
command line.

{% highlight C++ %}
#include "TF1.h"
#include "TRint.h"
#include "TCanvas.h"

int main(int argc, char **argv)
{
   TRint app("app", &argc, argv);
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph;x; sin(x)");
   f1->Draw();
   c->Modified(); c->Update();
   app.Run();
   return 0;
}
{% endhighlight %}


Save the code in a file, for example `demo3.cxx`.

On Linux and MacOS compile the `demo3.cxx` file as follows :

{% highlight C++ %}
$ g++ demo3.cxx $(root-config --glibs --cflags --libs) -o demo3
{% endhighlight %}

The equivalent command on Windows is:

{% highlight C++ %}
$ cl -nologo -MD -GR -EHsc demo3.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
{% endhighlight %}


Then you can run the program as follows:

{% highlight C++ %}
$ ./demo3
{% endhighlight %}
