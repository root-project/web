---
title: ROOT architecture and components
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Introduction

ROOT is modular scientific software toolkit and provides [numerous tools]({{'manual/functional_parts' | relative_url}})
for big data processing, statistical analysis, visualization and storage.

The [ROOT Reference Guide](https://root.cern/doc/master/index.html) provides a complete list
of all available ROOT classes and their documentation. It is the central source of information
for all ROOT classes.

The source code is available on [GitHub](https://github.com/root-project/root) and many
examples are available as [tutorials](https://root.cern/doc/master/group__Tutorials.html).

ROOT is implementing new interfaces following [new design style](#new-root-classes).

ROOT contains several classes developed in the past which are
following a specific naming convention and a [special inheritance scheme](#tobject---the-root-base-class).


ROOT has a set of global ROOT variables that apply to a ROOT session, → see [Global ROOT variables](#global-root-variables).


## Naming conventions

The following naming conventions apply to ROOT objects:

-   ROOT classes begin with `T` <br>
    Examples: {% include ref class="TLine" %}, {% include ref class="TTree" %}

-   Non-class types end with `_t` <br>
    Example: [Int_t](https://root.cern/doc/master/RtypesCore_8h.html#a3885b911a54b47a4e61671f45dd45d0b)

-   Data members begin with `f` <br>
    Example: `fTree`

-   Member functions begin with a capital letter. <br>
    Example: `Loop()`

-   Constants begin with `k` <br>
    Examples: `kInitialSize`, `kRed`

-   Global variables begin with `g` followed by a capital letter. <br>
    Example: `gEnv`

-   Static data members begin with `fg` <br>
    Example: `fgTokenClient`

-   Enumeration types begin with `E` <br>
    Example: `EColorLevel`

-   Locals and parameters begin with a lower case <br>
    Example: `nbytes`

-   Getters and setters begin with Get and Set <br>
    Examples: `SetLast()`, `GetFirst()`



## TObject - the ROOT base class

In ROOT, almost all ROOT classes inherit from the common ROOT base class {% include ref class="TObject" %}.

The `TObject` class provides default behavior and protocol such as:

-   Object I/O (`Read()`, `Write()`)

-   Inspection (`Dump()`,`Inspect()`, `ls()`)

-   Printing (`Print()`)

-   Drawing (`Draw()`)

-   Access to meta information (`IsA()`, `InheritsFrom()`)

_**Examples**_

- [TFile::ls](https://root.cern/doc/master/classTFile.html#a0b6ce84d5fecb4d34fc4fa38824320c2): Lists objects in a file or directory.
   - `list->ls()`: Lists objects in a collection pointed by list.
   - `list->Dump()`: Dumps all objects in a collection pointed by list.



- [TObject::Inspect](https://root.cern/doc/master/classTObject.html#a09f1614be7c5b3c35770529cc151449d) Dumps the contents of this object in a graphics canvas. A table is displayed where, for each data member, its name, current value and its title are given. If a data member is a pointer to another object, one can click on the pointer and, in turn, inspect the pointed object,etc.

- [TObject::Dump](https://root.cern/doc/master/classTObject.html#a2a79fcd627629cb2b19d54bf6a6935db): Same as `TObject::Inspect`, except that the output is on stdout. An object dump can be written to a file.

- ROOT Object Browser ({% include ref class="TBrowser" %}): Allows you to browse collections, such as the list of classes, geometries, files and {% include ref class="TTree" %}. → See also [ROOT Object Browser]({{ '/manual/root_files/#root-object-browser' | relative_url }}).


## Global ROOT variables

ROOT has a set of global ROOT variables that apply to a ROOT session.

### gROOT

Via the global `gROOT` variable, a single instance of {% include ref class="TROOT" %} is accessible. The global gROOT variable holds the information relative to the current session.

By using the global `gROOT` variable, you get the access to every object created in a ROOT program. The `TROOT` object has several lists pointing to the main ROOT objects. During a ROOT session, the global `gROOT` variable keeps a series of collections to manage these objects.
They can be accessed via the `gROOT::GetListOf()...` methods.

The `gROOT::GetListOf()...` methods return a {% include ref class="TSeqCollection" %}, meaning a collection of objects. They can be used to do list operations such as finding an object, traversing a list and calling a method for each of the members.
See {% include ref class="TCollection" %} for the full set of methods supported for a ROOT collection.

_**Example**_

For finding a canvas called `c1`, you can use:

{% highlight C++ %}
   gROOT->GetListOfCanvases()->FindObject("c1")
{% endhighlight %}

This returns a pointer to a {% include ref class="TObject" %}. Before you can use it as a canvas, you need to cast it to a {% include ref class="TCanvas" %}.

### gFile

`gFile` is the pointer to the current opened ROOT file in a ROOT session ({% include ref class="TFile" %}).

### gStyle

`gStyle` holds the current style, which is the global object of class {% include ref class="TStyle" %}.

### gSystem

A generic interface to the [underlying Operating System](https://root.cern/doc/master/classTSystem.html).

### gDirectory

 `gDirectory` is a pointer to the current directory.

### gPad

`gPad` points to an active pad on which a graphic object is drawn.


### gRandom

`gRandom` is a pointer to the current random number generator ({% include ref class="TRandom" %} interface).
By default, it points to a {% include ref class="TRandom3" %} object. You can replace the current
random number generator by deleting `gRandom` and recreating with your own desired generator.

_**Example**_

{% highlight C++ %}
   delete gRandom;
   gRandom = new TRandomRanluxpp(0); //seed=0
{% endhighlight %}


{% include ref class="TRandomRanluxpp" %} is another generator based on [Ranlux++]( {{ 'blog/ranluxpp' | relative_url }} ).

### gEnv

`gEnv` contains all the environment settings for the current session and is of type {% include ref class="TEnv" %}.

`gEnv` is set by reading the contents of the `.rootrc` file (or `$ROOTSYS/etc/system.rootrc`) at the beginning of a ROOT session.

### gGeoManager

`gGeoManager` is used to access the geometry manager class created with {% include ref class="TGeoManager" %}.


## New ROOT classes

The new interface styles follow the
[C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)
where reasonable in our context. Most noticeably this means

- new classes are in `namespace ROOT`and their names begin with `R`; headers are in `include/ROOT/` and are included as `<ROOT/...>`;  libraries are starting with `libROOT...`
- use of references as parameters instead of pointers,
- massive reduction of virtual functions (and calls), no more TObject inheritance,
- use of stdlib classes (`std::vector`, `std::string`) instead of `TList` and friends,
- separation of concerns, including separation of internal (`ROOT::Internal::`) and user-facing functionality.
