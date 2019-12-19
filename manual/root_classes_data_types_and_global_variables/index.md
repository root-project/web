---
title: ROOT classes, data types and global variables
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT is modular scientific software toolkit and provides numerous ROOT classes for big data processing, statistical analysis, visualization and storage, → see [ROOT classes]('root-classes").

ROOT uses predefined and machine independent data types to ensure the size of variables, → see [Machine independent data types](#machine-independent-data-types).

ROOT has a set of global ROOT variables that apply to a ROOT session, → see [Global ROOT variables](#global-root-variables).

**Naming conventions**

The following naming conventions apply to ROOT objects:

-   ROOT classes begin with `T` <br>

    Examples: [TLine](https://root.cern/doc/master/classTLine.html), [TTree](https://root.cern/doc/master/classTTree.html)

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

## ROOT classes

In addition to the ROOT core classes (→ see [ROOT core classes](="#root-core-classes")), there are ROOT classes available for the following topics:

-   Geometry

-   Graphical User Interface

-   Graphics

-   Histograms

-   Input/Output

-   Math

-   Monte Carlo

-   TMVA

-   Multi variate analysis

-   Trees

-   and many more

> **ROOT Reference Guide**
>
> The [ROOT Reference Guide](https://root.cern/doc/master/index.html) provides a complete list of all available ROOT classes and their documentation. It is the central source of information for all ROOT classes.

## ROOT core classes

The ROOT core classes consist of:

-   **ROOT base classes** <br>
   The ROOT base classes provide the core of the system.
   They are available to all other ROOT classes. <br>
   The ROOT base class [TObject](https://root.cern/doc/master/classTObject.html) is the mother of all ROOT objects, → see [TObject - the ROOT base class](#tobject---the-root-base-class).

-   **Containers** <br>
   Containers correspond to collections. A collection is a group of related objects that provide a flexible alternative to arrays, lists and trees, → see [ROOT collections]({{ '/manual/root_collections' | relative_url }}).

### TObject - the ROOT base class

In ROOT, almost all ROOT classes inherit from the common ROOT base class [TObject](https://root.cern/doc/master/classTObject.html).

The `TObject` class provides default behavior and protocol for all objects in the ROOT system.

`TObject` provides protocol, this is (abstract) member functions, for:

-   Object I/O (`Read()`, `Write()`)

-   Error handling (`Warning()`, `Error()`, `SysError()`, `Fatal()`)

-   Sorting (`IsSortable()`, `Compare()`, `IsEqual()`, `Hash()`)

-   Inspection (`Dump()`,`Inspect()`)

-   Printing (`Print()`)

-   Drawing (`Draw()`, `Paint()`, `ExecuteEvent()`)

-   Bit handling (`SetBit()`, `TestBit()`)

-   Memory allocation (`operatornew and delete`, `IsOnHeap()`)

-   Access to meta information (`IsA()`, `InheritsFrom()`)

-   Object browsing (`Browse()`, `IsFolder()`)

The virtual method `Draw()` is the entry point for the graphics rendering of ROOT objects, → see [ROOT collections]({{ '/manual/graphics' | relative_url }}).


### TROOT - entry point to ROOT

The [TROOT](https://root.cern/doc/master/classTROOT.html) object is the entry point to the ROOT system. The single instance of `TROOT` is accessible via the global variable `gROOT` (→ see [gROOT](#groot)). Using the `gROOT` variable, you have access to basically every object created in a ROOT based program. The `TROOT` object is a container of several lists pointing to the main ROOT objects.


## Understanding ROOT's class structure

ROOT provides a set of tools to help you understand the existing class structure, the data structure in memory, and the structure of files.

- [TFile::ls](https://root.cern/doc/master/classTFile.html#a0b6ce84d5fecb4d34fc4fa38824320c2): Lists objects in a file or directory.
	- `list->ls()`: Lists objects in a collection pointed by list.
	- `list->Dump()`: Dumps all objects in a collection pointed by list.

- [TFile::Map](https://root.cern/doc/master/classTFile.html#aa096e9759947ec077bbdba0663d3a223): Lists the contents of a file sequentially. One line is printed for every record written to the file with the following information:
	- Date/Time when the object was written.
	- Position of the object (starting byte number).
	- Number of bytes occupied by the object.
	- Object class name.
	- Compression factor (if the file is compressed).
	
- [TClass::Draw](https://root.cern/doc/master/classTClass.html#ac11f715e58e6d0c360f4c80577a5484a): Draws the detailed class inheritance structure. All ROOT classes are documented with their associated inheritance tree. This tree can be generated interactively with `object->DrawClass()` or by selecting `DrawClass` item when right-clicking an object in a canvas.
    
- [TObject::Inspect](https://root.cern/doc/master/classTObject.html#a09f1614be7c5b3c35770529cc151449d) Dumps the contents of this object in a graphics canvas. A table is displayed where, for each data member, its name, current value and its title are given. If a data member is a pointer to another object, one can click on the pointer and, in turn, inspect the pointed object,etc.

- [TObject::Dump](https://root.cern/doc/master/classTObject.html#a2a79fcd627629cb2b19d54bf6a6935db): Same as `TObject::Inspect`, except that the output is on stdout. An object dump can be written to a file.

- ROOT object browser ([TBrowser](https://root.cern/doc/master/classTBrowser.html)): Allows you to browse collections, such as the list of classes, geometries, files and [TTrees](https://root.cern/doc/master/classTTree.html).


## Machine independent data types

Different machines may have different lengths for the same data type.

The `int` data type for example may be 16 bits on some old machines and 32 bits on some newer ones.

To ensure the size of your variables, use these predefined data types in ROOT:

-   `Char_t`: Signed character 1 byte.

-   `UChar_t`: Unsigned character 1 byte.

-   `Short_t`: Signed short integer 2 bytes.

-   `UShort_t`: Unsigned short integer 2 bytes.

-   `Int_t`: Signed integer 4 bytes.

-   `UInt_t`: Unsigned integer 4 bytes.

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

### gStyle

`gStyle` holds the current style, which is the global object of class [TStyle](https://root.cern/doc/master/classTStyle.html) .

### gDirectory

 `gDirectory` is a pointer to the current directory.

### gPad

`gPad` points to an active pad on which a graphic object is drawn.


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
