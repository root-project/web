---
title: "Generating dictionaries"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Generating dictionaries

A dictionary ("reflection database") contains information about the types and functions that are available in a library.

With a dictionary you can call functions inside libraries. Dictionaries are also needed to write a class into a ROOT file (→ see [ROOT files]({{ '/manual/root_files' | relative_url }})).

A dictionary consists of a source file, which contains the type information needed by Cling and ROOT's I/O subsystem. This source file needs to be generated from the library's headers and then compiled, linked and loaded. Only then does Cling and ROOT know what is inside a library.

There are two ways to generate a dictionary:

- using ACLiC

- using `rootcling`

### Using ACLiC to generate dictionaries

With a given header file `MyHeader.h`, ACliC automatically generates a dictionary:

```
      root[] .L MyHeader.h+
```

### Using rootcling to generate dictionaries manually

You can manually create a dictionary by using `rootcling`:

{% highlight C++ %}
   rootcling -f DictOutput.cxx -c OPTIONS Header1.h Header2.h ... Linkdef.h
{% endhighlight %}

- `DictOutput.cxx` Specifies the output file that will contain the dictionary. It will be accompanied by a header file `DictOutput.h`.

- `OPTIONS` are:

	- `Isomething`: Adding an include path, so that `rootcling` can find the files included in `Header1.h`, `Header2.h`, etc.

    - `DSOMETHING`: Define a preprocessor macro, which is sometimes needed to parse the header files.

- `Header1.h Header2.h...`: The headers files.

- `Linkdef.h`: Tells `rootcling`, which classes should be added to the dictionary, → see [Selecting dictionary entries: Linkdef.h](#selecting-dictionary-entries-linkdefh).

> **Note**
>
> Dictionaries that are used within the same project must have unique names.
>
> Compiled object files relative to dictionary source files cannot reside in the same library or in two libraries loaded by the same application if the original source files have the same name.
_**Example**_

In the first step, a `TEvent` and a `TTrack` class is defined. Next an event object is created to add tracks to it. The track objects have a pointer to their event. This shows that the I/O system correctly handles circular references.

In the second step, a `TEvent` and a `TTrack` call are implemented.<br/>After that you can use `rootcling` to manually generate a directory. This generates the `eventdict.cxx` file.

**The TEvent.h header**

{% highlight C++ %}
#ifndef __TEvent__
#define __TEvent__
#include "TObject.h"
class TCollection;
class TTrack;

class TEvent : public TObject {
private:
   Int_t fId; // Event sequential id
   Float_t fTotalMom;       // Total momentum.
   TCollection *fTracks;    // Collection of tracks.
public:
   TEvent() { fId = 0; fTracks = 0; }
   TEvent(Int_t id);
   ~TEvent();
   void AddTrack(TTrack *t);
   Int_t GetId() const { return fId; }
   Int_t GetNoTracks() const;
   void Print(Option_t *opt="");
   Float_t TotalMomentum();
   ClassDef(TEvent,1);     //Simple event class.
};
{% endhighlight %}

**The TTrack.h header**

{% highlight C++ %}
#ifndef __TTrack __
#define __TTrack__
#include "TObject.h"

class TEvent;
class TTrack : public TObject {
private:
   Int_t fId;       // Track sequential id.
   TEvent *fEvent;  // TEvent to which track belongs.
   Float_t fPx;     // x part of track momentum.
   Float_t fPy;     // y part of track momentum.
   Float_t fPz;     // z part of track momentum.
public:
   TTrack() { fId = 0; fEvent = 0; fPx = fPy = fPz = 0; }
   TTrack(Int_t id, Event *ev, Float_t px,Float_t py,Float_t pz);
   Float_t Momentum() const;
   TEvent *GetEvent() const { return fEvent; }
   void Print(Option_t *opt="");
   ClassDef (TTrack,1);    //Simple track class.
};
{% endhighlight %}

**Implementation of TEvent and TTrack class**

{% highlight C++ %}
TEvent.cxx:
#include <iostream.h>
#include "TOrdCollection.h"
#include "TEvent.h"
#include "TTrack.h"
...

TTrack.cxx:
#include <iostream.h>
#include "TMath.h"
#include "Track.h"
#include "Event.h"
...
{% endhighlight %}

**Using rootcling to generate the dictionary**

{% highlight C++ %}
rootcling eventdict.cxx -c TEvent.h TTrack.h
{% endhighlight %}

**eventdict.cxx - the generated dictionary**

{% highlight C++ %}
void TEvent::Streamer(TBuffer &R__b) {

// Stream an object of class TEvent.
   if (R__b.IsReading()) {
      Version_t R__v = R__b.ReadVersion();
      TObject::(R__b);
      R__b >> fId;
      R__b >> fTotalMom;
      R__b >> fTracks;
   } else {
      R__b.WriteVersion(TEvent::IsA());
      TObject::Streamer(R__b);
      R__b << fId;
      R__b << fTotalMom;
      R__b << fTracks;
   }
}
{% endhighlight %}

## Selecting dictionary entries: Linkdef.h

To select which types and functions should go into a dictionary, create a `Linkdef.h` file that you use when you call `rootcint` manually. The `Linkdef.h` file is passed as the last argument to `rootcint`. It must end on `Linkdef.h, LinkDef.h`, or `linkdef.h`. For example, `My_Linkdef.h` is correct, `Linkdef_mine.h` is not.

The `Linkdef.h` file contains directives for `rootcint`, for what a dictionary should be created: select the types and functions that will be accessible from the prompt (or in general through CINT) and for I/O.

### Preamble: deselection

A `Linkdef.h` file starts with the following preamble:

```
#ifdef __CINT__
#pragma link off all globals;
#pragma link off all classes;
#pragma link off all functions;
#pragma link C++ nestedclasses;
```
The first line protects the compiler from seeing the `rootcint` directives. The `rootcint` directives are in the form of `#pragma` statements. A `#pragma` link of all _something_ says that by default, `rootcint` should not generate the dictionary for anything it sees.

The nested classes directive tells `rootcint` not to ignore `nestedclasses`, this is, classes defined inside classes like here:

```
class Outer {
public:
  class Inner {
  public:
    // we want a dictionary for this one, too!
    ...
  };
  ...
};
```


### Selection

In the next step, tell `rootcint` for which objects the dictionary should be generated for:

```
#pragma link C++ class AliEvent+;
#pragma link C++ function StrDup;
#pragma link C++ function operator+(const TString&amp;,const TString&amp;);
#pragma link C++ global gROOT;
#pragma link C++ global gEnv;
#pragma link C++ enum EMessageTypes;
```


> **Note**
>
> **The `+` after the class name: This enables an essential feature for `rootcint`. It is not a default setting, so you must add `+`at the end.

### Selection by file name

Sometimes it is easier to say: Create a dictionary for everything defined in the `MyHeader.h` file.
<br>Write the following statement into the `Linkdef.h` file:

```
#pragma link C++ defined_in "subdir/MyHeader.h";
```

Make sure that `subdir/MyHeader.h` corresponds to one of the header files that is passed to `rootcint`.

### Closing

Add the following line at the end of the `Linkdef.h` file:

```
#endif /* __CINT__ */.
```

### Example of a Linkdef.h file

```
#ifdef __CINT__
#pragma link off all globals;
#pragma link off all classes;
#pragma link off all functions;
#pragma link C++ nestedclasses;
#pragma link C++ global gHtml;
#pragma link C++ class THtml;
#endif
```


## Embedding the rootcling call into a GNU Makefile

Use the following statement to compile and run the code.

```
.L MyCode.C+
```

If you need to use a Makefile, there is the following rule for generating a dictionary (see code snippet below). It will create a new source file, which you should
compile like all the other sources in your library. In addition, you need to
add the include path for ROOT, and you might have to link against ROOT's libraries: `libCore`.

This rule generates the `rootcling` dictionary for the headers `$(HEADERS)` and a library
containing the dictionary and the compiled `$(SOURCES)`:

```
MyDict.cxx: $(HEADERS) Linkdef.h
[TAB]     rootcling -f $@ -c $(CXXFLAGS) -p $^
libMyLib.so: MyDict.cxx $(SOURCES)
[TAB]     g++ -shared -o$@ `root-config --ldflags` $(CXXFLAGS) -I$(ROOTSYS)/include $^
```

## Adding a class to ROOT

You can extend ROOT with your own classes, or rather, you can use your own classes with ROOT.

### Using a class in the interpreter (cling or PyROOT)

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


### Storing your class in ROOT files or in a TTree

You want to either create a {% include ref class="TTree" %} branch of your class or store an object of your class in a ROOT file.

{% highlight C++ %}
   MyClass obj;
   auto file = TFile::Open("out.root", "RECREATE");
   file->WriteObject(&obj, "myObj");
{% endhighlight %}

For this to work, ROOT needs to know about the `MyClass` type: its data members, base classes, how to construct such an object when reading it back, etc.
This is provided through a [dictionary]({{'/manual/root_io/#generating-dictionaries' | relative_url }}).

#### Constructors

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

#### Member initialization

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
