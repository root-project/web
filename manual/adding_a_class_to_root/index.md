---
title: Adding a class to ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can extenduse ROOT with your own classes, or rather: use your own classes with ROOT.

## Using a class in the interpreter (cling or PyROOT)

To load a C++ class definition into the interpreter, simply `#include` the class's header - and probably load the relevant library.

{% highlight C++ %}
root [0] .L libMyKlass
root [1] #include "MyKlass.h"
root [2] MyKlass obj; obj.DoSomething();
{% endhighlight %}

{% highlight Python %}
import ROOT
ROOT.gSystem.Load('libMyKlass')
ROOT.gInterpreter.Declare('#include "MyKlass.h"')
obj = ROOT.MyKlass()
obj.DoSomething()
{% endhighlight %}

This will load `libMyClass.so` on Linux or macOS, while for Windows it loads `libMyKlass.dll`.
For macOS, also `libMyKlass.dylib` will be tried.

You can simplify both the C++ and the PyROOT version by adding the line

{% highlight C++ %}
R__LOAD_LIBRARY(libMyClass)
{% endhighlight %}

to the file `MyKlass.h`; this will cause to automatically load the library, and allows you to skip the `.L` / `ROOT.gSystem.Load()` line.


## Storing your class in ROOT Files or TTree

Suppose you want to create a `TTree` branch from your class, or you want to store an object of your class into a ROOT file:
{% highlight C++ %}
MyKlass obj;
auto file = TFile::Open("out.root", "RECREATE");
file->WriteObject(&obj, "myObj");
{% endhighlight %}

For this to work, ROOT needs to know about the type `MyClass`: its data members, base classes, how to construct such an object when reading it back, etc.
This is [provided through a dictionary]({{'/manual/interacting_with_shared_libraries/#generating-dictionaries' | relative_url }}), which can be easily [generated using CMake]({{'/manual/integrate_root_into_my_cmake_project/#root_generate_dictionary' | relative_url }}).

### Constructors

ROOT's I/O feature requires for every class to have one of the following constructors:

  - **Default constructor**<br>
   A public constructor with zero parameters or with one or more parameters all with default values: `MyKlass(int = 42);`

  - **I/O constructor**<br>
   A constructor with exactly one parameter of type "pointer to `ioctortype`":

{% highlight C++ %}
struct ioctortype;
class MyKlass {
protected:
  MyKlass() = default; // protected: cannot be used by ROOT I/O
public:
  MyKlass(ioctortype*);
...
{% endhighlight %}

### Member Initialization

When setting your object's values, ROOT will also set pointers.
If a pointer is non-null, it has to assume that the object points to something, and will delete the pointed-to object.
To prevent a crash here, make sure you initialize your pointers in the constructor used by the I/O - the default constructor or the I/O constructor:

{% highlight C++ %}
class MyKlass {
private:
   std::string *fStr = nullptr;
...
{% endhighlight %}

The crucial part here is `= nullptr`, which tells ROOT I/O that it won't have to delete anything in a freshly constructed `MyKlass` object.
