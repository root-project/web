---
title: ROOT classes, data types and global variables
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT is modular scientific software toolkit and provides numerous ROOT classes for big data processing, statistical analysis, visualization and storage, → see *ROOT classes*.

ROOT uses predefined and machine independent data types to ensure the size of variables, → see *Machine independent data types*.

ROOT has a set of global ROOT variables that apply to a ROOT session, → see *Global ROOT variables.*

The following naming conventions apply to ROOT objects:

-   Classes begin with `T`
    Examples: [TLine](https://root.cern/doc/master/classTLine.html), [TTree](https://root.cern/doc/master/classTTree.html)

-   Non-class types end with `_t`
    Example: [Int_t](https://root.cern/doc/master/RtypesCore_8h.html#a3885b911a54b47a4e61671f45dd45d0b)

-   Data members begin with `f`
    Example: `fTree`

-   Member functions begin with a capital letter.
    Example: `Loop()`

-   Constants begin with `k`
    Examples: `kInitialSize`, `kRed`

-   Global variables begin with `g` followed by a capital letter.
    Example: `gEnv`

-   Static data members begin with `fg`
    Example: `fgTokenClient`

-   Enumeration types begin with `E`
    Example: `EColorLevel`

-   Locals and parameters begin with a lower case
    Example: `nbytes  `

-   Getters and setters begin with Get and Set
    Examples: `SetLast()`, `GetFirst()`

## ROOT classes

In addition to the ROOT core classes (→ see *ROOT core classes*), there are ROOT classes available for the following topics:

-   Geometry

-   Graphical User Interface

-   Graphics

-   Histograms

-   Input/Output

-   Math

-   Monte Carlo

-   Parallel analysis

-   Multi variate analysis

-   Trees

-   and many more

Refer to the [ROOT Reference Guide](https://root.cern/doc/master/index.html) for a complete list of all available ROOT classes.

## ROOT core classes

The ROOT core classes consist of:

-   **ROOT base classes**
   The ROOT base classes provide the core of the system.
   They are available to all other ROOT classes.
   The ROOT base class [TObject](https://root.cern/doc/master/classTObject.html) is the mother of all ROOT objects, → see *TObject -- the ROOT base class*.

-   **Containers**
   Containers correspond to collections. A collection is a group of related objects that provide a flexible alternative to arrays, lists and trees. → See *ROOT collections.*

### TObject - the ROOT base class

In ROOT, almost all ROOT classes inherit from the common ROOT base class [TObject](https://root.cern/doc/master/classTObject.html).

The `TObject` class provides default behavior and protocol for all objects in the ROOT system.

`TObject` provides protocol, i.e. (abstract) member functions, for:

-   Object I/O (`Read()`, `Write()`)

-   Error handling (`Warning()`, `Error()`, `SysError()`, `Fatal()`)

-   Sorting (`IsSortable()`, `Compare()`, `IsEqual()`, `Hash()`)

-   Inspection (`Dump()`,`Inspect()`)

-   Printing (`Print()`)

-   Drawing (`Draw()`, `Paint()`, E`xecuteEvent()`)

-   Bit handling (`SetBit()`, `TestBit()`)

-   Memory allocation (`operatornew and delete`, `IsOnHeap()`)

-   Access to meta information (`IsA()`, `InheritsFrom()`)

-   Object browsing (`Browse()`, `IsFolder()`)

The virtual method `Draw()` is the entry point for the Graphical User Interface (GUI) of ROOT.

#### Graphical User Interface (GUI)

The [TObject](https://root.cern/doc/master/classTObject.html) class has the virtual method `Draw()` by which objects can be "drawn".
The basic whiteboard on which an object is drawn is called a canvas that provides the GUI. A canvas is defined by the [TCanvas](https://root.cern/doc/master/classTCanvas.html) calls.

You can draw an object on a canvas with:

```
object.Draw()
```


_**Example**_

A one-dimensional sine function shall be drawn.

Use the [TF1](https://root.cern/doc/master/classTF1.html) class to create an object that is a one-dimensional function defined between a lower and upper limit.

On the ROOT prompt, type:
```
root[0] TF1 f1("func1","sin(x)",0,10)
root[1] f1.Draw()
```
A canvas is displayed.

<img src="{{'/assets/images/sinus-canvas.png' | relative_url}}">
*Figure: Canvas.*

### TROOT - entry point to ROOT

The [TROOT](https://root.cern/doc/master/classTROOT.html) object is the entry point to the ROOT system. The single instance of `TROOT` is accessible via the global variable `gROOT` (→ see *gROOT*). Using the `gROOT` variable, you have access to basically every object created in a ROOT based program. The `TROOT` object is a container of several lists pointing to the main ROOT objects.

## Machine independent data types

Different machines may have different lengths for the same data type.

The `int` data type for example may be 16 bits on some old machines and 32 bits on some newer ones.

To ensure the size of your variables, use these predefined data types in ROOT:

-   `Char_t`: Signed character 1 byte.

-   `UChar_t`: Unsigned character 1 byte.

-   `Short_t`: Signed short integer 2 bytes.

-   `UShort_t`: Unsigned short integer 2 bytes.

-   `Int_t`: Signed integer 4 bytes.

-  `UInt_t`: Unsigned integer 4 bytes.

-   `Long64_t`: Portable signed long integer 8 bytes.

-   `ULong64_t`: Portable unsigned long integer 8 bytes.

-   `Float_t`: Float 4 bytes.

-   `Double_t`: Float 8 bytes.

-   `Double32_t`: Double 8 bytes in memory, written as a float 4 bytes.

-   `Bool_t`: Boolean (0=false, 1=true).

## Global ROOT variables

ROOT has a set of global ROOT variables that apply to a ROOT session.

### gROOT

Via the global `gROOT` variable, a single instance of [TROOT](https://root.cern/doc/master/classTROOT.html) is accessible. The global gROOT variable holds the information relative to the current session.

By using the global `gROOT` variable, you get the access to every object created in a ROOT program. The `TROOT` object has several lists pointing to the main ROOT objects. During a ROOT session, the global `gROOT` variable keeps a series of collections to manage these objects.
They can be accessed via the `gROOT::GetListOf...` methods.

The `gROOT::GetListOf...` methods return a [TSeqCollection](https://root.cern/doc/master/classTSeqCollection.html), meaning a collection of objects. They can be used to do list operations such as finding an object, traversing a list and calling a method for each of the members.
See [TCollection](https://root.cern/doc/master/classTCollection.html) for the full set of methods supported for a collection.

_**Example**_

For finding a canvas called `c1`, you can use:

```
gROOT->GetListOfCanvases()->FindObject("c1")
```

This returns a pointer to a [TObject](https://root.cern/doc/master/classTObject.html). Before you can use it as a canvas, you need to cast it to a [TCanvas*](https://root.cern/doc/master/classTCanvas.html).

### gFile

`gFile` is the pointer to the current opened file in a ROOT session.

### gDirectory

 `gDirectory` is a pointer to the current directory.

### gPad

`gPad` points to an active pad on which a graphic object is drawn.

_**Example**_

You want to change the fill color of the active pad to blue, but you do not know the name of the active pad, you can use `gPad`.

```
gPad->SetFillColor(38)
```

### gRandom

`gRandom` is a pointer to the current random number generator. By default, it points to a [TRandom3](https://root.cern/doc/master/classTRandom3.html) object.
The following basic random distributions are provided:

-   `Rndm()` or `Uniform(min,max)`

-   `Gaus(mean,sigma)`

-   `Exp(tau)`

-   `BreitWigner(mean,sigma)`

-   `Landau(mean,sigma)`

-   `Poisson(mean)`

-   `Binomial(ntot,prob)`

You can customize your ROOT session by replacing the random number generator. You can delete `gRandom` and recreate it with your own.

_**Example**_

```
delete gRandom;
gRandom = new TRandom2(0); //seed=0
```


[TRandom2](https://root.cern/doc/master/classTRandom2.html) is another generator that uses only three words for its state.

### gEnv

`gEnv` contains all the environment settings for the current session and is of type [TEnv](https://root.cern/doc/master/classTEnv.html).

`gEnv` is set by reading the contents of the `.rootrc `file (or `$ROOTSYS/etc/system.rootrc`) at the beginning of ta ROOT session.
