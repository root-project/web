---
title: "ROOT macros and shared libraries"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


A ROOT macro contains pure C++ code, which additionally can contain ROOT classes and other
ROOT objects (→ see [ROOT classes, data types and global variables]({{ '/manual/root_classes_data_types_and_global_variables' | relative_url }})). A ROOT macro can consist of simple or multi-line commands,
but also of arbitrarily complex class and function definitions.

You can save a ROOT macro in a file and execute it at the ROOT prompt or the system prompt.

You also can compile a ROOT macro.

ROOT provides a lot of tutorials that are available as ROOT macros (→ see [ROOT tutorial page](https://root.cern/doc/master/group__Tutorials.html)).


## Creating ROOT macros

The name of the ROOT macro and the file name (without file extension) in which the macro is saved must match.

1. Create a new file in your preferred text editor.

2. Use the following general structure for the ROOT macro:

{% highlight C++ %}
      void MacroName() {
         ...

         your lines of C++ code
         code line ends with ;
         ...
      }
{% endhighlight %}

3.  Save the file ROOT macro, using the macro name as file name: **MacroName**.C

### Executing ROOT macros

You can execute a ROOT macro:

  - at the system prompt,
  - at the ROOT prompt,
  - by loading it to a ROOT session.

To execute a ROOT macro at the system prompt, type:

   ```
   root MacroName.C
   ```

--or--

To execute a ROOT macro at the ROOT prompt, type:

   ```
   .x MacroName.C`
   ```

-- or --

To load a ROOT macro to a ROOT session, type (at the ROOT prompt):

   ```
   .L MacroName.C
   MacroName()
   ```

> **Note**
>
> You can load multiple ROOT macros, as each ROOT macro has a unique name in the ROOT name space.

In addition, you can:
 - [execute a ROOT macro from a ROOT macro](#executing-a-ROOT-macro-from-a ROOT-macro)
 - [execute a ROOT macro from the invocation of ROOT](#executing-a-root-macro-from-the-invocation-of-root)

<p><a name="executing-a-ROOT-macro-from-a ROOT-macro"></a></p>
**Executing a ROOT macro from a ROOT macro**

You can execute a ROOT macro conditionally inside another ROOT macro.

- Call the interpreter [TROOT::ProcessLine()](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5){:target="_blank"}.

`ProcessLine()` takes a parameter, which is a pointer to an `int` or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
This contains the error as defined in enum `TInterpreter::EErrorCode` with `TInterpreter::kSuccess`
as being the value for a successful execution.

_**Example**_

The example `$ROOTSYS/tutorials/tree/cernstaff.C` calls a ROOT macro to build a ROOT file, if it does not exist.

{% highlight C++ %}
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
      gROOT->ProcessLine(".x cernbuild.C");
   }
{% endhighlight %}

<p><a name="executing-a-root-macro-from-the-invocation-of-root"></a></p>
**Executing a ROOT macro from the invocation of ROOT**

You can pass a macro to ROOT in its invocation.

_**Example**_

The exact kind of quoting depends on the used shell. This example works for bash-like shells.

```
   $ root -l -b 'myCode.C("some String", 12)'
```

### Compiling ROOT macros

You can use ACLiC (*Compiling Your Code*) to compile your code and build a dictionary and a shared library from your ROOT macro. ACliC is implemented in [TSystem::CompileMacro()](https://root.cern/doc/master/classTSystem.html).

When using ACliC, ROOT checks what library really needs to be build and calls your system's C++ compiler, linker and dictionary generator. Then ROOT loads a native shared library.

ACLiC executes the following steps:

1. Calling `rootcling` to create a dictionary.

2. Calling the the system's C++ compiler to build the shared library.

3. If there are errors, it calls the C++ compiler to build a dummy executable to clearly report the unresolved symbols.

ACLiC adds the classes and functions declared in included files with the same name as the
ROOT macro files with one of following extensions: `.h`, `.hh`, `.hpp`, `.hxx`,` .hPP`, `.hXX`.
This means that, by default, you cannot combine ROOT macros from different files into one
library by using `#include` statements; you will need to compile each ROOT macro separately.

#### Compiling a ROOT macro with ACLiC

Before you can compile your interpreted ROOT macro, you need to add the include statements for
the classes used in the ROOT macro. Only then you can build and load a shared library containing
your ROOT macro.

You can compile a ROOT macro with:

  - default optimizations

  - optimizations

  - debug symbols

Compilation ensures that the shared library is rebuilt.

> **Note**
>
> Do not call ACLiC with a ROOT macro that has a function called `main()`.

To compile a ROOT macro and build a shared library, type:

```
   root[] .L MyScript.C+
```

The `+` option compiles the code and generates a shared library. The name of the shared library is the filename
where the dot before the extension is replaced by an underscore. In addition, the shared library
extension is added.

_**Example**_

On most platforms, `hsimple.cxx` will generate `hsimple_cxx.so`.

The `+` command rebuilds the library only if the ROOT macro or any of the files it includes
are newer than the library.

When checking the timestamp, ACLiC generates a dependency file, which name is the same as
the library name, just replacing the `so` extension by the extension `d`.


To compile a ROOT macro with default optimizations, type:

```
      root[] .L MyScript.C++g
```

To compile a ROOT macro with optimizations, type:

```
      root[] .L MyScript.C++O
```

To compile a ROOT macro with debug symbols, type:

```
      root[] .L MyScript.C++
```

#### Generating dictionaries

A dictionary ("reflection database") contains information about the types and functions that are available in a library.

With a dictionary you can call functions inside libraries. They are also needed to write a class into a ROOT file.

A dictionary consists of a source file, which contains the type information needed by Cling and ROOT's I/O subsystem. This source file needs to be generated from the library's headers and then compiled, linked and loaded. Only then does Cling and ROOT know what is inside a library.

There are two ways to generate a dictionary:

- using ACLiC

- using `rootcling`

**Using ACLiC to generate dictionaries**

With a given header file `MyHeader.h`, ACliC automatically generates a dictionary:

```
      root[] .L MyHeader.h+
```

**Using rootcling to generate dictionaries**

You can manually create a dictionary by using `rootcling`:

{% highlight C++ %}
   rootcling -f DictOutput.cxx -c OPTIONS Header1.h Header2.h ... Linkdef.h
{% endhighlight %}

- `DictOutput.cxx` specifies the output file that will contain the dictionary. It will be accompanied by a header file `DictOutput.h`.

- `OPTIONS` are:

	- `Isomething`: Adding an include path, so that `rootcling` can find the files included in `Header1.h`, `Header2.h`, etc.

    - `DSOMETHING`: Define a preprocessor macro, which is sometimes needed to parse the header files.

- `Header1.h Header2.h...`: The headers files.

- `Linkdef.h`: Tells `rootcling`, which classes should be added to the dictionary.

> **Note**
>
> Dictionaries that are used within the same project must have unique names.
>
> Compiled object files relative to dictionary source files cannot reside in the same library or in two libraries loaded by the same application if the original source files have the same name.

_**Example**_

In the first step, a `TEvent` and a `TTrack` class is defined. Next an event object is created to add tracks to it. The track objects have a pointer to their event. This shows that the I/O system correctly handles circular references.

In the second step, the `TEvent `and the `TTrack` call are implemented. After that you can use `rootcling` to generate the directory. This generates the `eventdict.cxx` file.

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
   Float_t fTotalMom; // Total momentum
   TCollection *fTracks; // Collection of tracks
public:
   TEvent() { fId = 0; fTracks = 0; }
   TEvent(Int_t id);
   ~TEvent();
   void AddTrack(TTrack *t);
   Int_t GetId() const { return fId; }
   Int_t GetNoTracks() const;
   void Print(Option_t *opt="");
   Float_t TotalMomentum();
   ClassDef(TEvent,1); //Simple event class
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
   Int_t fId; //Track sequential id
   TEvent *fEvent; //tvent to which track belongs
   Float_t fPx; //x part of track momentum
   Float_t fPy; //y part of track momentum
   Float_t fPz; //z part of track momentum
public:
   TTrack() { fId = 0; fEvent = 0; fPx = fPy = fPz = 0; }
   TTrack(Int_t id, Event *ev, Float_t px,Float_t py,Float_t pz);
   Float_t Momentum() const;
   TEvent *GetEvent() const { return fEvent; }
   void Print(Option_t *opt="");
   ClassDef (TTrack,1); //Simple track class
};
{% endhighlight %}

**Implementation of TEvent and TTrack class**

{% highlight C++ %}
TEvent.cxx:
#include <iostream.h>
#include "TOrdCollection.h"
#include "TEvent.h"
#include "TTrack.h"
ClassImp(TEvent)
...

TTrack.cxx:
#include <iostream.h>
#include "TMath.h"
#include "Track.h"
#include "Event.h"
ClassImp(TTrack)
...
{% endhighlight %}

**Using rootcling to generate the dictionaries**

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

#### Setting the include path

The `$ROOTSYS/include` directory is automatically appended to the include path.

To get the include path, type:

```
   root[] .include
```

To append the include path, type:

```
   root[] .include $HOME/mypackage/include
```

Append the following line in the ROOT macro to include the include path:

```
   gSystem->AddIncludePath(" -I$HOME/mypackage/include")
```

To overwrite an existing include path, type:

```
   gSystem->SetIncludePath(" -I$HOME/mypackage/include")
```

To add a static library that should be used during linking, type:

```
   gSystem->AddLinkedLibs("-L/my/path -l*anylib*");
```

For adding a shared library, you can load it before you compile the ROOT macros, by

```
   gSystem->Load("mydir/mylib");
```


### Developing portable ROOT macros

Portable ROOT macros run both with the Cling interpreter and ACLiC (*Compiling Your Code*).

Therefore, it is recommended not to use the Cling extensions and program around the Cling limitations.

If it is not possible to program around the Cling limitations, use the C preprocessor symbols
defined for Cling and `rootcling`:

- `__CLING__` is defined for both ROOT and `rootcling`.

- `__ROOTCLING__` (and `__MAKECINT__` for backward compatibility) is only defined in rootcling.

Use `!defined(__CLING__) || defined(__ROOTCLING__)` to bracket code that needs to be seen by
the compiler and `rootcling`, but will be invisible to the interpreter.

-- or ­--

Use `!defined(__CLING__)` to bracket code that should be seen only by the compiler and not by Cling nor `rootcling`.

_**Example**_

Hiding the declaration and initialization of the array `gArray` from both Cling and `rootcling`:

{% highlight C++ %}
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #endif
{% endhighlight %}

Cling and `rootcling` will ignore all statements between the `#if !defined (__CLING__)`
and `#endif`. Because ACLiC calls `rootcling` to build a dictionary, the declaration of
`gArray` will not be included in the dictionary, and consequently, `gArray` will not be
available at the command line even if ACLiC is used.

If you want use the ROOT macro in the interpreter, you have to bracket the usage of `gArray`
between the `#if`'s, since the definition is not visible.

{% highlight C++ %}
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #elif defined(__ROOTCLING__)
   int gArray[];
   #endif
{% endhighlight %}

`gArray` will be visible to `rootcling`, but still not visible to Cling. If you use ACLiC, `gArray` will be available at the command line.

#### Included header files

It is recommended to write ROOT macros with all the needed include statements. Only a few header files are not handled correctly by Cling.

You can include following types of headers in the interpreted and compiled mode:

- The subset of standard C/C++ headers defined in `$ROOTSYS/Cling/include`.

- Headers of classes defined in a previously loaded library (including ROOT own library). The defined class must have a name known to ROOT (this is a class with a `ClassDef`).

Hiding header files from `rootcling` that are necessary for the compiler but optional for the interpreter can lead to a fatal error.

_**Example**_

{% highlight C++ %}
   #ifndef __CLING__
   #include "TTree.h"
   #else
   class TTree;
   #endif
   class subTree : public TTree {
   };
{% endhighlight %}

In this case, `rootcling` does not have enough information about the {% include ref class="TTree" %} class to produce the correct
dictionary file.

If you try this, `rootcling` and compiling will be error free. However, instantiating a
subTree object from the Cling command line will cause a fatal error.

In general, it is recommended to let `rootcling` see as many header files as possible.


Cling can not only interpret C++, but can also call functions within libraries. This is possible with the help of a dictionary. Dictionaries are also needed to write a class into a ROOT file (→ see [ROOT files]({{ '/manual/storing_root_objects' | relative_url }})). 

## Dictionaries

A dictionary ("reflection database") contains information about the types and functions
that are available in a library.

A dictionary consists of a source file that contains the type information needed by
Cling and ROOT's I/O subsystem. This source file needs to be generated from the library's
headers and then compiled, linked and loaded - only then does Cling and ROOT know what is
inside a library.

## Using ACLiC to generate dictionaries

You can use ACLiC (Compiling Your Code) to generate a dictionary, given a header file.

```
.L MyHeader.h+
```

The + option compiles the code and generates a shared library. The name of the shared library is the filename where the dot before the extension is replaced by an underscore. In addition, the shared library extension is added.


## Generating a dictionary by hand

ROOT's dictionary generator is called rootcling. You invoke it as

```
rootcling -f DictOutput.cxx -c OPTIONS Header1.h Header2.h ... Linkdef.h
```

Let's look at the different parts:

  - `DictOutput.cxx` specifies the output file that will contain the dictionary. It will
  be accompanied by a header file `DictOutput.h`
   .
  - `OPTIONS` can be simply skipped. Or it can be
    - `-Isomething` //to add an include path, i.e. to help rootcling find files included in Header1.h, Header2.h, etc.
    - `-DSOMETHING` //will define a preprocessor macro which is sometimes needed to parse header file.

  - `Header1.h Header2.h...` are the headers that rootcling will read and extract the type information from.
  - `Linkdef.h` is the magic file that steers rootcling.

## Embedding the rootcling call into a GNU Makefile

Using

```
.L MyCode.C+
```
to compile and run code is the simplest option If you really need to use a Makefile, here
is a rule for generating a dictionary. It will create a new source file which you should
compile and like like all the other sources in your library. Of course you will need to
add the include path for ROOT, and you might have to link against ROOT's libraries
`libCore`.

This rule will generate the rootcling dictionary for the headers $(HEADERS) and a library
containing the dictionary and the compiled `$(SOURCES)`:

```

MyDict.cxx: $(HEADERS) Linkdef.h
[TAB]     rootcling -f $@ -c $(CXXFLAGS) -p $^

libMyLib.so: MyDict.cxx $(SOURCES)
[TAB]     g++ -shared -o$@ `root-config --ldflags` $(CXXFLAGS) -I$(ROOTSYS)/include $^
```

## Selecting dictionary entries: Linkdef.h

To select who should go into a dictionary you will want to specify a <span style="font-family:courier new,courier,monospace;">Linkdef.h</span> file when you manually invoke <span style="font-family:courier new,courier,monospace;">rootcint</span>. It is passed as the last argument to rootcint, and it must _end_ on<span style="font-family:courier new,courier,monospace;"> Linkdef.h, LinkDef.h,</span> or <span style="font-family:courier new,courier,monospace;">linkdef.h</span>. E.g. <span style="font-family:courier new,courier,monospace;">My_Linkdef.h</span> is good, <span style="font-family:courier new,courier,monospace;">Linkdef_mine.h</span> is not.

This file contains directives to rootcint what to create a dictionary for: you select the types and functions that will be accessible from the prompt (or in general through CINT) and for I/O.

### Preamble: deselection

Basically all <span style="font-family:courier new,courier,monospace;">Linkdef.h</span> files start with this preamble:

```
#ifdef __CINT__
#pragma link off all globals;
#pragma link off all classes;
#pragma link off all functions;
#pragma link C++ nestedclasses;
```
The first line protects the compiler from seeing the rootcint directives. These directives are in the form of

`#pragma` statements; the #pragma link of all _something_ says that by default, rootcint should not generate the dictionary for anything it saw. The nestedclasses directive tells rootcint to not ignore nested classes, i.e. classes defined inside classes like here:

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

So now we have to tell rootcint what to generate the dictionary for:

```
#pragma link C++ class AliEvent+;
#pragma link C++ function StrDup;
#pragma link C++ function operator+(const TString&amp;,const TString&amp;);

#pragma link C++ global gROOT;
#pragma link C++ global gEnv;

#pragma link C++ enum EMessageTypes;
```
are examples of just that. _Note the "+" after the class name:_ this enables an essential feature for rootcint. We would love to make it the default but in some cases we will break code - so we have to ask you to add that "+" at the end!



### Selection by file name
Sometimes it's easier to say: I want a dictionary for everything defined in file MyHeader.h. With rootcint you would simply put

```
#pragma link C++ defined_in "subdir/MyHeader.h";
```
into your <span style="font-family:courier new,courier,monospace;">Linkdef.h</span> file. Of course subdir/MyHeader.h must correspond to one of the header files you passed to rootcint!

### The end

Now all that's missing is the closing

```
#endif /* __CINT__ */.
```
Here is an example Linkdef.h:

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
