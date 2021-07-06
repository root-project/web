---
title: Adding a class to ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can extend ROOT with your own classes. When defining a class, it inherits from {% include ref class="TObject" %}.

## Defining a class

The definition of a class requires the following steps:

  - Inheriting from {% include ref class="TObject" %}.

  - Integrating the class to ROOT.

  - Providing a constructor.

### Inheriting from TObject

The {% include ref class="TObject" %} class provides the default behaviour and protocols for the objects in the ROOT system. The {% include ref class="TObject" %} class is the primary interface to classes providing object I/O (writing the class into a ROOT file), error handling, inspection, introspection, and drawing.

Therefore, your class should inherit from {% include ref class="TObject" %}.

### Integrating the class to ROOT

Add the following line to your class header file, to integrate your class to ROOT:

{% highlight C++ %}
   ClassDef(ClassName,ClassVersionID)
{% endhighlight %}

The `ClassVersionID` is used by the ROOT I/O system. It is written on the output stream and during reading. You can check this `ClassVersionID` during reading and take appropriate action depending on the value of `ClassVersionID`.
Every time you change the data members of a class, increase its `ClassVersionID` by 1.<br>
Set `ClassVersionID` >= 1.<br>
Set `ClassVersionID` = 0 in case you do not need object I/O.

_**Example**_

In the `TLine.h` file:

{% highlight C++ %}
   ClassDef(TLine,1);
{% endhighlight %}

> **Note**
>
>  A call to the `ClassImp` macro is not needed anymore.

### Constructors

ROOT requires for every class to have one of the following constructors:

  - **Default constructor**<br>
   A constructor with zero parameters or with one or more parameters all with default values.

  - **I/O constructor**<br>
   A constructor with exactly one parameter which type is a pointer to one of the types marked as an `ioctortype`.

The default constructor or I/O constructor is called whenever an object is being read from a ROOT database.

_**Example for a class**_

{% highlight C++ %}
#include "TObject.h"

// Define the ABC class and make it inherit from TObject. Then the ABC class can also be written to a ROOT file.
   class ABC: public TObject {
   public:
   Float_t a, b, c, p;
   ABC() : a(0), b(0), c(0), p(0){};

//Integrating the ABC class to ROOT.
   ClassDef (ABC,1)
};

{% endhighlight %}

