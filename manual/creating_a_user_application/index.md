---
title: Creating a user application with ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Using the example of creating and displaying a canvas, the following shows how you can create a standalone user application.<br/>
Two scenarios are presented:

- Quitting ROOT when closing the canvas
- Returning to the ROOT prompt when closing the canvas


## Creating a canvas

With the following code a canvas is drawn (→ see also [Graphics]({{ '/manual/graphics' | relative_url }})):

{% highlight C++ %}
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph; x");
   f1->Draw();
{% endhighlight %}

{% include figure_image
   img="canvas.png"
   caption="Canvas."
%}

A standalone program in C++ should be created for this code. 

> **Note**
>
> If you use this code in a ROOT macro (→ see [ROOT macros and shared libraries]({{ '/manual/interacting_with_shared_libraries' | relative_url }})), you can only execute it with ROOT.


## Quitting ROOT when closing the canvas

A standalone program in C++ contains the `main()` function, the starting point for the application execution. For this reason, create a header file that you can compile.

The first lines of a header file include ROOT header files. The names of the ROOT header files are almost always the same as the class names (for example, {% include ref class="TApplication" %}, {% include ref class="TF1" %}, {% include ref class="TCanvas" %}).

Use {% include ref class="TApplication" %} to create a ROOT application environment that provides an interface to the windowing system event loops and event handlers. 

To run the canvas as a standalone application you must create a `TApplication` object. Calling the `Run()` method starts the event loop.

{% highlight C++ %}
#include <iostream>
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
   f1->SetTitle("My graph; x");
   f1->Draw();
   c->Modified(); c->Update();
   TRootCanvas *rc = (TRootCanvas *)c->GetCanvasImp();
   rc->Connect("CloseWindow()", "TApplication", gApplication, "Terminate()");
   app.Run();
   return 0;
}
{% endhighlight %}

Save the code in file, for example `demo.cxx`.

Compile the `demo.cxx` file as follows:

{% highlight C++ %}
   g++ demo.cxx $(root-config --glibs --cflags --libs) -o demo
{% endhighlight %}

Then you can run the program as follows:

{% highlight C++ %}
   ./demo
{% endhighlight %}

## Returning to the ROOT prompt when closing the canvas

You can use {% include ref class="TRint" %} to create an environment provides an interface to the windows manager and eventloops via the inheritance of {% include ref class="TApplication" %}. In addition `TRint`provides an interactive access to the Cling C++ interpreter via the command line.

{% highlight C++ %}
#include <iostream>
#include "TF1.h"
#include "TRint.h"
#include "TCanvas.h"

int main(int argc, char **argv)
{
   TRint app("app", &argc, argv);
   TCanvas* c = new TCanvas("c", "Something", 0, 0, 800, 600);
   TF1 *f1 = new TF1("f1","sin(x)", -5, 5);
   f1->SetLineColor(kBlue+1);
   f1->SetTitle("My graph; x");
   f1->Draw();
   c->Modified(); c->Update();
   app.Run();
   return 0;
}
{% endhighlight %}


Save the code in file, for example `demo2.cxx`.

Compile the `demo2.cxx` file as follows:

{% highlight C++ %}
   g++ demo2.cxx $(root-config --glibs --cflags --libs) -o demo2
{% endhighlight %}

Then you can run the program as follows:

{% highlight C++ %}
   ./demo2
{% endhighlight %}
