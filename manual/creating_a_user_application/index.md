---
title: Creating a user application with ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Starting from a simple ROOT macro creating and displaying a canvas, this section shows how to
create a standalone user application based on ROOT libraries.

Three different kind of standalone user applications are presented:

- [Batch example generating a PDF file](#batch-example-generating-a-pdf-file)
- [Interactive example displaying a canvas](#interactive-example-displaying-a-canvas)
- [Example using ROOT prompt](#example-using-root-prompt)


## The simple ROOT macro

The following code can be executed interactively at the ROOT prompt:

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

Now, let's see how to create a standalone application with this simple code.


## Batch example generating a PDF file

A C++ standalone application must contain the `main()` function, the starting point for the
application execution.

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

On Linux and MacOS compile and run the `demo1.cxx` file as following :

{% highlight C++ %}
$ g++ demo1.cxx $(root-config --glibs --cflags --libs) -o demo1
$ ./demo1
{% endhighlight %}

The equivalent command on Windows is:

```
> cl -nologo -MD -GR -EHsc demo1.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
> demo1
```

> **Note**
>
> You can use `root-config --cflags` to be sure to use the correct compiler flags (Debug vs Release)

The following message is displayed:

{% highlight bash %}
Info in <TCanvas::Print>: pdf file demo1.pdf has been created
{% endhighlight %}

The `demo1.pdf` file is saved in the current working directory. The pdf file contains the
plot of the `f1` function.

## Interactive example displaying a canvas


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

On Linux and MacOS compile and run the `demo2.cxx` file as following :

{% highlight bash %}
$ g++ demo2.cxx $(root-config --glibs --cflags --libs) -o demo2
$ ./demo2
{% endhighlight %}

The equivalent command on Windows is:

```
> cl -nologo -MD -GR -EHsc demo2.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
> demo2
```

> **Note**
>
> You can use `root-config --cflags` to be sure to use the correct compiler flags (Debug vs Release)

## Example using ROOT prompt

You can use {% include ref class="TRint" %} to create an environment provides an interface
to the windows manager and event loop via the inheritance of {% include ref class="TApplication" %}.
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

On Linux and MacOS compile and run the `demo3.cxx` file as following :

{% highlight bash %}
$ g++ demo3.cxx $(root-config --glibs --cflags --libs) -o demo3
$ ./demo3
{% endhighlight %}

The equivalent command on Windows is:

```
> cl -nologo -MD -GR -EHsc demo3.cxx -I %ROOTSYS%\include /link -LIBPATH:%ROOTSYS%\lib libCore.lib libGpad.lib libHist.lib
> demo3
```

> **Note**
>
> You can use `root-config --cflags` to be sure to use the correct compiler flags (Debug vs Release)

