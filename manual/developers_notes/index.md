---
title: Developers notes
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

# Material to be moved elsewhere....


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

________

### Introspection, reflection and run time type identification (RTTI)

Introspection, which is also referred to as reflection, run time type identification (RTTI) is the ability of a class to reflect upon itself.

ROOT implements reflection with the {% include ref class="TClass" %} class. It provides all information about a class, a full description of data members and methods, including the comment field and the method
parameter types.

If the class is a descendent of {% include ref class="TObject" %}, you can check if an object inherits from a specific class, you can use the
[TObject::InheritsFrom()](https://root.cern/doc/master/classTObject.html#ab80cf94f9f66badac741633f944ae02a) method. The method returns `kTrue` if the object inherits from the specified class name or {% include ref class="TClass" %}.

{% highlight C++ %}
   Bool_t b = obj->InheritsFrom("TLine");
   Bool_t b = obj->InheritsFrom(TLine::Class());
{% endhighlight %}

ROOT and Cling rely on reflection and the class dictionary to identify the type of a variable at run time. With the
{% include ref class="TObject" %} inheritance are some methods available that use introspection to help you see the data in the object or class.

_**Example**_
{% highlight C++ %}
// Lists all data members and their current values.
   obj->Dump();

// Opens a window to browse data members.
   obj->Inspect();

// Draws the class inheritance tree.
   obj->DrawClass(); // Draws the class inheritance tree
{% endhighlight %}

### ROOT collections

To store an object in a ROOT collection, it must be a descendent of {% include ref class="TObject" %}. This is convenient if you want to store
objects of different classes in the same Root collection and execute the method of the same name on all members of the
ROOT collection.

_**Example**_

The list of graphics primitives are in a ROOT collection called {% include ref class="TList" %}. When the canvas is
drawn, the `Paint()` method is executed on the entire ROOT collection. Each member may be a different class, and if the `Paint()`
method is not implemented, [TObject::Paint()](https://root.cern/doc/master/classTObject.html#adb30f2d116033afa49028b43e05a7d8e) will be executed.

For more information on ROOT collection, → see [ROOT collections]({{ '/manual/root_collections' | relative_url }}).

### Input and output

The [TObject::Write()](https://root.cern/doc/master/classTObject.html#a19782a4717dbfd4857ccd9ffa68aa06d) method is the interface to the ROOT I/O system. It streams the object into a buffer using the
`Streamer()` method. It supports cycle numbers and automatic schema evolution.

### Paint()/Draw()

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

### SavePrimitive()

The [TObject::SavePrimitive()](https://root.cern/doc/master/classTObject.html#a9ee00859ee3b190759028d690e1ddf83) method is called by a canvas on its list of primitives, when the canvas is saved as a ROOT macro. The purpose of
`SavePrimitve()` is to save a primitive as a C++ statement(s). Most ROOT classes implement the `SavePrimitive()`
method. It is recommended that `SavePrimitive()` is implemented in user defined classes if it is to be drawn on
a canvas. Such that the command `TCanvas::SaveAs(Canvas.C)` will preserve the user-class object in the resulting ROOT macro.

### GetObjectInfo()
The [TObject::GetObjectInfo()](https://root.cern/doc/master/classTObject.html#a9d60cac505e7172b6d7d584b5bd563da) method is called when displaying the event status in a canvas. To show the event status window, select the
`Options` menu and then the `EventStatus` item. The method returns a string of information about the object at position
(x, y). Every time the cursor moves, the object under the cursor executes the `GetObjectInfo()` method. The string is
then shown in the status bar. There is a default implementation in {% include ref class="TObject" %}, but it is typically overridden for classes
that can report peculiarities for different cursor positions (for example the bin contents in a {% include ref class="TH1" %}).

### Bit masks and unique ID
A {% include ref class="TObject" %} descendent inherits two data members:
- `fBits`
- `fUniqueID`

`fBitsis`is a 32-bit data member used with a bit mask to get object information. Bits 0 - 13 are reserved as global bits, bits 14 - 23 can be used in different class
hierarchies.

{% highlight C++ %}
   enum EObjBits {
// If can be deleted.
   kCanDelete = BIT(0),

// If destructor must call RecursiveRemove().
   kMustCleanup = BIT(3),

// For backward compatibility only.
   kObjInCanvas = BIT(3),

// If referenced by TRef or TRefArray.
   kIsReferenced = BIT(4),

// If has a TUUID, fUniqueID=UUIDNumber.
   kHasUUID = BIT(5),

// If cannot be picked in a pad.
   kCannotPick = BIT(6),

// If does not want a context menu.
   kNoContextMenu = BIT(8),

// Object actor succeeded but the object should not be used.
   kInvalidObject = BIT(13)
};
{% endhighlight %}

For example, the `kMustCleanup` and `kCanDelete` bits are used in {% include ref class="TObject" %}. They can be set by any object and should not be reused. Make sure not to overlap them in any
given hierarchy. The bit 13 (kInvalidObject) is set when an object could not be read from a ROOT file. It will check this bit and will skip to the next object on the file.

_______
_
## CMake and dictionary

## Useful commands
ROOT provides a number of `CMake` macros and functions that are used internally but can also be used by projects layered on top of ROOT.

### ROOT_GENERATE_DICTIONARY
`ROOT_GENERATE_DICTIONARY` generates a dictionary for a set of header files (convenient wrapper on top of the `rootcling` command).

{% highlight cmake %}
   ROOT_GENERATE_DICTIONARY( dictionary headerfiles ... [STAGE1]
      LINKDEF linkdeffiles ...
      [MODULE module] [DEPENDENCIES dep1 dep2 ...]
      [OPTIONS opt1 opt2 ...] )
{% endhighlight %}

The `${dictionary}.cxx` and `${dictionary}.pcm` files are created using the header and the `linkdef` files, calling the `rootcling` command. Optionally, you can provide `OPTIONS` and `MODULE` to customize the way the `rootcling` command is called and the name for the `.pcm` files.

As an alternative, `REFLEX_GENERATE_DICTIONARY` offers the same underlying functionality with a slightly different interface:

{% highlight cmake %}
   REFLEX_GENERATE_DICTIONARY( dictionary headerfiles ...
      SELECTION selection ...
      [DEPENDENCIES dep1 dep2 ...]
      [OPTIONS opt1 opt2 ...] )
{% endhighlight %}

