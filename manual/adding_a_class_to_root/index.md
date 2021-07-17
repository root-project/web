---
title: Adding a class to ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can extend ROOT with your own classes, or rather, you can use your own classes with ROOT.

## Using a class in the interpreter (cling or PyROOT)

To load a C++ class definition into the interpreter,  it is sufficient to `#include` the header of the class - and probably load the appropriate library.

{% highlight C++ %}
root [0] .L libMyClass
root [1] #include "MyClass.h"
root [2] MyClass obj; obj.DoSomething();
{% endhighlight %}

{% highlight Python %}
import ROOT
ROOT.gSystem.Load('libMyClass')
ROOT.gInterpreter.Declare('#include "MyClass.h"')
obj = ROOT.MyClass()
obj.DoSomething()
{% endhighlight %}

This loads `libMyClass.so` on Linux or macOS, while  `libMyClass.dll` is loaded on Windows.
On macOS, also `libMyClass.dylib` is tried.

You can simplify both the C++ and the PyROOT version by adding the following line to the  `MyClass.h` file.

{% highlight C++ %}
   R__LOAD_LIBRARY(libMyClass)
{% endhighlight %}

This causes the library to be loaded automatically and allows you to skip the `.L` / `ROOT.gSystem.Load()` line.


## Storing your class in ROOT files or in a TTree

You want to either create a {% include ref class="TTree" %} branch of your class or store an object of your class in a ROOT file.

{% highlight C++ %}
   MyClass obj;
   auto file = TFile::Open("out.root", "RECREATE");
   file->WriteObject(&obj, "myObj");
{% endhighlight %}

For this to work, ROOT needs to know about the `MyClass` type: its data members, base classes, how to construct such an object when reading it back, etc.
This is provided through a [dictionary]({{'/manual/interacting_with_shared_libraries/#generating-dictionaries' | relative_url }}) that can be easily generated with [CMake]({{'/manual/integrate_root_into_my_cmake_project/#root_generate_dictionary' | relative_url }}).

### Constructors

ROOT's I/O function requires that each class have one of the following constructors:

  - **Default constructor**<br>
   A public constructor with zero parameters or with one or more parameters that all have default values: `MyClass(int = 42);`.

  - **I/O constructor**<br>
   A constructor with exactly one parameter of type "pointer to `ioctortype`".

{% highlight C++ %}
   struct ioctortype;
   class MyKlass {
   protected:
     MyClass() = default;    // Protected: Cannot be used by ROOT I/O.
   public:
     MyClass(ioctortype*);
    ...
{% endhighlight %}

### Member initialization

When you set the values of your object, ROOT also sets pointers.
If a pointer is non-null, it must assume that the object is pointing to something and will delete object it is pointing to.
To avoid a crash here, make sure you initialize your pointers in the constructor used by the I/O - the default constructor or the I/O constructor.

{% highlight C++ %}
   class MyClass {
   private:
      std::string *fStr = nullptr;
   ...
{% endhighlight %}

The crucial part here is `= nullptr`, which tells the ROOT I/O that it does not need to delete anything in a freshly constructed `MyClass` object.
