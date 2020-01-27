---
title: ROOT classes, data types and global variables
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT is modular scientific software toolkit and provides numerous ROOT classes for big data processing, statistical analysis, visualization and storage, → see [ROOT core classes](#root-core-classes).

ROOT uses predefined and machine independent data types to ensure the size of variables, → see [Machine independent data types](#machine-independent-data-types).

ROOT has a set of global ROOT variables that apply to a ROOT session, → see [Global ROOT variables](#global-root-variables).

**Naming conventions**

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
   The ROOT base class {% include ref class="TObject" %} is the mother of all ROOT objects, → see [TObject - the ROOT base class](#tobject---the-root-base-class).

-   **Containers** <br>
   Containers correspond to collections. A collection is a group of related objects that provide a flexible alternative to arrays, lists and trees, → see [ROOT collections]({{ '/manual/root_collections' | relative_url }}).

### TObject - the ROOT base class

In ROOT, almost all ROOT classes inherit from the common ROOT base class {% include ref class="TObject" %}.

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

#### Introspection, reflection and run time type identification (RTTI)

Introspection, which is also referred to as reflection, run time type identification (RTTI) is the ability of a class to reflect upon itself. 

ROOT implements reflection with the {% include ref class="TClass" %} class. It provides all information about a class, a full description of data members and methods, including the comment field and the method
parameter types.

If the class is a descendent of {% include ref class="TCObject" %}, you can check if an object inherits from a specific class, you can use the
[TObject::InheritsFrom()](https://root.cern/doc/master/classTObject.html#ab80cf94f9f66badac741633f944ae02a) method. The method returns `kTrue` if the object inherits from the specified class name or {% include ref class="TClass" %}.

{% highlight C++ %}
   Bool_t b = obj->InheritsFrom("TLine");
   Bool_t b = obj->InheritsFrom(TLine::Class());
{% endhighlight %}

ROOT and Cling rely on reflection and the class dictionary to identify the type of a variable at run time. With the
{% include ref class="TObject" %} inheritance are some methods available that use introspection to help you see the data in the object or class. 

_**Ecxample_**
{% highlight C++ %}
// Lists all data members and their current values.
   obj->Dump(); 

// Opens a window to browse data members.
   obj->Inspect();

// Draws the class inheritance tree. 
   obj->DrawClass(); // Draws the class inheritance tree
{% endhighlight %}

#### ROOT collections

To store an object in a ROOT collection, it must be a descendent of {% include ref class="TObject" %}. This is convenient if you want to store
objects of different classes in the same Root collection and execute the method of the same name on all members of the
ROOT collection. 

_**Example**_
The list of graphics primitives are in a ROOT collection called {% include ref class="TList" %}. When the canvas is
drawn, the `Paint()` method is executed on the entire ROOT collection. Each member may be a different class, and if the `Paint()`
method is not implemented, [TObject::Paint()](https://root.cern/doc/master/classTObject.html#adb30f2d116033afa49028b43e05a7d8e) will be executed.

For more information on ROOT collection, → see [ROOT collections]({{ '/manual/root_collections' | relative_url }}).

#### Input and output

The [TObject::Write()](https://root.cern/doc/master/classTObject.html#a19782a4717dbfd4857ccd9ffa68aa06d) method is the interface to the ROOT I/O system. It streams the object into a buffer using the
`Streamer()` method. It supports cycle numbers and automatic schema evolution.

#### Paint()/Draw()

The `Paint()` and `Draw()` method are defaults. Their implementation in {% include ref class="TObject" %} does not use the graphics subsystem. The
[TObject::Draw()](https://root.cern/doc/master/classTObject.html#adaa7be22dce34ebb73fbf22e4bdf33a2) method is simply a call to `AppendPad`. The `Paint()` method is empty. The default is provided so that
you can call `Paint()` in a ROOT collection. The [TObject::GetDrawOption()](https://root.cern/doc/master/classTObject.html#a739367558721407a015458db50d782c4) method returns the draw option that was used when the object
was drawn on the canvas. This is especially relevant with histograms and graphs.

#### Clone()/DrawClone()

Two useful methods are [TObject::Clone()](https://root.cern/doc/master/classTObject.html#a4696036d44dcbe28970a13b8f4e5d6b2) and [TObject::DrawClone()](https://root.cern/doc/master/classTObject.html#a7cd0f76ae1791c469f9472a9d4c8d6f9). The `Clone()` method takes a snapshot of the object with the `Streamer`
and creates a new object. The `DrawClone()` method does the same thing and in addition draws the clone.

### Browse()
The [TObject::Browse()](https://root.cern/doc/master/classTObject.html#a257256699b369476a49bb17b9c1a76f4) method is called if the object is browse-able and is to be displayed in the ROOT Object Browser. 

_**Example**_

The {% include ref class="TTree" %} implementation of `Browse()`, calls the `Browse()` method for each branch. The [TBranch::Browse()](https://root.cern/doc/master/classTBranch.html#aaaf682e213335f104f4022793772518b) method displays the name
of each leaf. For the object its `Browse()` method to be called, the `IsFolder()` method must be overridden to return `true`. This does not mean it has to be a folder, it just means that it is browse-able.

#### SavePrimitive()

The [TObject::SavcePrimitive()](https://root.cern/doc/master/classTObject.html#a9ee00859ee3b190759028d690e1ddf83) method is called by a canvas on its list of primitives, when the canvas is saved as a ROOT macro. The purpose of
`SavePrimitve()` is to save a primitive as a C++ statement(s). Most ROOT classes implement the `SavePrimitive()`
method. It is recommended that `SavePrimitive()` is implemented in user defined classes if it is to be drawn on
a canvas. Such that the command `TCanvas::SaveAs(Canvas.C)` will preserve the user-class object in the resulting ROOT macro.

#### GetObjectInfo()
The [TObject::GetObjectInfo()](https://root.cern/doc/master/classTObject.html#a9d60cac505e7172b6d7d584b5bd563da) method is called when displaying the event status in a canvas. To show the event status window, select the
`Options` menu and then the `EventStatus` item. The method returns a string of information about the object at position
(x, y). Every time the cursor moves, the object under the cursor executes the `GetObjectInfo()` method. The string is
then shown in the status bar. There is a default implementation in {% include ref class="TObject" %}, but it is typically overridden for classes
that can report peculiarities for different cursor positions (for example the bin contents in a {% include ref class="TH1" %}).

#### Bit Masks and Unique ID
A {% include ref class="TObject" %} descendent inherits two data members:
- `fBits` 
- `fUniqueID`

`fBitsis`is a 32-bit data member used with a bit mask to get object information. Bits 0 - 13 are reserved as global bits, bits 14 - 23 can be used in different class
hierarchies.

{% highlight C++ %}
   enum EObjBits {
   kCanDelete = BIT(0), // If can be deleted.
   kMustCleanup = BIT(3), // If destructor must call RecursiveRemove().
   kObjInCanvas = BIT(3), // For backward compatibility only.
   kIsReferenced = BIT(4), // If referenced by TRef or TRefArray.
   kHasUUID = BIT(5), // If has a TUUID, fUniqueID=UUIDNumber. 
   kCannotPick = BIT(6), // If cannot be picked in a pad.
   kNoContextMenu = BIT(8), // If does not want a context menu.
   kInvalidObject = BIT(13) // Object yctor succeeded but the object should not be used.
};
{% endhighlight %}

For example, the `kMustCleanup` and `kCanDelete` bits are used in {% include ref class="TObject" %}. They can be set by any object and should not be reused. Make sure not to overlap them in any
given hierarchy. The bit 13 (kInvalidObject) is set when an object could not be read from a ROOT file. It will check this bit and will skip to the next object on the file.


### TROOT - entry point to ROOT

The {% include ref class="TROOT" %} object is the entry point to the ROOT system. The single instance of `TROOT` is accessible via the global variable `gROOT` (→ see [gROOT](#groot)). Using the `gROOT` variable, you have access to basically every object created in a ROOT based program. The `TROOT` object is a container of several lists pointing to the main ROOT objects.

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

- ROOT Object Browser ({% include ref class="TBrowser" %}): Allows you to browse collections, such as the list of classes, geometries, files and {% include ref class="TTree" %}. → See also [ROOT Object Browser]({{ '/manual/storing_root_objects/#root-object-browser' | relative_url }}).


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

`gFile` is the pointer to the current opened ROOT file in a ROOT session.

### gStyle

`gStyle` holds the current style, which is the global object of class {% include ref class="TStyle" %}.

### gDirectory

 `gDirectory` is a pointer to the current directory.

### gPad

`gPad` points to an active pad on which a graphic object is drawn.


### gRandom

`gRandom` is a pointer to the current random number generator. By default, it points to a {% include ref class="TRandom3" %} object.
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

{% highlight C++ %}
   delete gRandom;
   gRandom = new TRandom2(0); //seed=0
{% endhighlight %}


{% include ref class="TRandom2" %} is another generator that uses only three words for its state.

### gEnv

`gEnv` contains all the environment settings for the current session and is of type {% include ref class="TEnv" %}.

`gEnv` is set by reading the contents of the `.rootrc` file (or `$ROOTSYS/etc/system.rootrc`) at the beginning of a ROOT session.

### gGeoManager

`gGeoManager` is used to access the geometry manager class created with {% include ref class="TGeoManager" %}.


