---
title: I/O Concepts
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

This page explains the mechanisms and concepts behind ROOT's I/O facilities, i.e. how ROOT converts your objects into a stream of bytes and back.
It assumes that you have read the introduction on → [ROOT files]({{ '/manual/root_files/' | relative_url }}), → [I/O of custom classes]({{ '/manual/io_custom_classes/' | relative_url }}), and → [Trees]({{ '/manual/trees/' | relative_url }}).

## ROOT files, directories, and keys

ROOT stores data in ROOT files ({% include ref class="TFile" %}), see → [ROOT files]({{ '/manual/root_files/' | relative_url }}).
It does so in a machine independent format.

Similar to a file system directory, a `TFile` can contain directories ({% include ref class="TDirectory" %}) and objects, accessible through the directory's _keys_ ({% include ref class="TKey" %})).
A `TFile` is a directory itself: it inherits from `TDirectory`.

Directories can be "entered" by [`TDirectory::cd()`](https://root.cern/doc/master/classTDirectory.html#af42d9b50db9b4575b13ea265ad8995fb); created by [`TDirectory::mkdir()`](https://root.cern/doc/master/classTDirectory.html#aad2cf362d9574db6538804afa9794827); and removed by [`TDirectory::rmdir()`](https://root.cern/doc/master/classTDirectory.html#a528126c0a528d7f7a5888c7ee74ae41d).

### The global "current directory"
ROOT uses two globals (thread-local static, to be precise) that point to the most recently opened file [`gFile`](https://root.cern/doc/master/classTFile.html),
and the "current" directory [`gDirectory`](https://root.cern/doc/master/classTDirectory.html).
The most recently opened ROOT file is always also the current directory.
You can change the current directory by assigning to `gDirectory`; you can see the current directory with [`TDirectory::pwd()`](https://root.cern/doc/master/classTDirectory.html#aeafd432926424a3e76c27be1cb947937)

Some objects operate (at least by default) on that global directory.
An example is [`TObject::Write()`](https://root.cern/doc/master/classTObject.html#a211e8b1ab4ef54a5f2ecbe809945fee8) (unlike the preferred [`TDirectory::WriteObject()`](https://root.cern/doc/master/classTDirectory.html#a67b115afae97366254dfd44a7f46f66f)), or the `TTree` constructor if no directory is specified.

Also object ownership relates to the current directory, see → [Object ownership]({{ '/manual/object_ownership/' | relative_url }}).

ROOT's interpreter interfaces (both C++ and Python) make the objects of the current directory available as if they were variables.
This is a strong motivation to use valid C++ identifiers as key names, i.e. without spaces, not starting with a digit, etc.

_**Example**_

Here, we show how opening a `TFile` changes `gDirectory`, and how one can use an object stored in the current directory as if it was a declared variable.

{% highlight C++ %}
root [0] gDirectory->pwd()

Rint:/
root [1] TFile f1("my.root");
root [2] gDirectory->pwd()

my.root:/
root [3] hist->Draw() // for `hist` from `my.root`
{% endhighlight %}

`Rint:/` corresponds to "ROOT's in-memory" directory, the default directory during startup.

### Adding and removing objects from a ROOT file

When writing an object to a ROOT file, ROOT creates a directory "entry" ({% include ref class="TKey" %}) representing the object, which mainly consists of a name and the object's persistent data.
You can think of a `TFile` as a collection of `TKeys`, possibly inside nested `TDirectory`-s.

The name of the `TKey` can be either explicitly stated when writing, or it can be determined from `TObject::GetName()` for classes inheriting from `TObject`.

_**Example**_

{% highlight C++ %}
void WriteHist(TH1* hist) {
  gDirectory->WriteObject(hist, "explicitName");
  // OR:
  hist->Write(); // key named `TH1::GetName()` inside `gDirectory`
}
{% endhighlight %}

An object read into memory is independent from the object on disk.
Changes of the in-memory object are not propagated to disk.
Instead, a new version of the object needs to be saved, for instance passing `"overwrite"` as option to [ `TDirectory::WriteObject()`](https://root.cern/doc/master/classTDirectory.html#a67b115afae97366254dfd44a7f46f66f), see the documentation of [`TDirectoryFile::WriteTObject()`](https://root.cern/doc/master/classTDirectoryFile.html#ae1bb32dcbb69de7f06a3b5de9d22e852).

Removing an object from a `TDirectory` using [`TDirectory::Delete()`](https://root.cern/doc/master/classTDirectory.html#a09e51150c19fd5a0aa9278a4158202ca) will generally not free the corresponding disk space.
Instead, the storage occupied by the deleted object will be made available (as a [`TFree`](https://root.cern/doc/master/classTFree.html) for subsequent objects to be written to this file.
Use → [`hadd`]({{ '/manual/root_files/#merging-root-files-with-hadd' | relative_url }}) to defragment a ROOT file by rewriting it.

### Iterating over a directory's content

`TFile` gives access to the list of keys through its base class, [TDirectoryFile::GetListOfKeys()](https://root.cern/doc/master/classTDirectoryFile.html#a8599cbd2c3fd8004e78f1f40be6771d2).

_**Example**_

Get the list of keys from the demo.root file and print them.

{% highlight C++ %}
root[] TFile f("demo.root")
root[] f.GetListOfKeys()->Print()

TKey Name = h0,     Title = histo    nr:0,     Cycle = 1
TKey Name = h1,     Title = histo    nr:1,     Cycle = 1
...
{% endhighlight %}

For instance if you do not know an object's name upfront, it can be useful to iterate through all of a directory's entries.

_**Example**_

{% highlight C++ %}
TFile f("demo.root");
// f.GetListOfKeys() contains `TObject*`, but we know they are really `TKey*`
for (TKey *key: ROOT::RangeStaticCast<TKey*>(*f.GetListOfKeys())) {
  std::cout << "key: " << key->GetName()
    << " points to an object of class: " << key->GetClassName() << '\n';
}
{% endhighlight %}

The output of such an `iterate.C` ROOT macro could be:

```
root[] .x iterate.C

key: h0 points to an object of class: TH1F
key: h1 points to an object of class: TH1F
...
```

Note the concept of name cycles, see → [Opening and inspecting a ROOT file]({{ 'manual/root_files/#opening-and-inspecting-a-root-file' | relative_url }}).

## ROOT's C++ object serialization: from memory to disk and back

Writing an object to file means writing the current values of the object's data members.
This is done with the help of what ROOT calls a _streamer_:
each serializable class has such a streamer which converts all data members into a buffer of raw bytes (see [TBuffer](https://root.cern/doc/master/classTBuffer.html)).

Variables of composite data types such as classes, structures, and arrays can be decomposed into simple types such as longs, shorts, floats, and chars.
These values are then written out in a machine-independent representation.

This happens recursively:
a second streamer will be invoked for a member of class type, to stream that class's members.
A similar recursion happens for all base classes.
In the end, the buffer contains all the simple data members of all the classes that make up that particular object.

At runtime, ROOT needs to determine which streamer function to call for a given object.
Using the `ClassDef` macro inside the class definition makes this operation more performant:
without `ClassDef`, the object's dynamic type has to be looked up to determine which streamer to invoke.
See also → [The `ClassDef` Macro]({{ '/manual/io_custom_classes/#the-classdef-macro' | relative_url }})).

Data members of certain types need special treatment, for instance pointers and references.
This will be explained below.

The methods of a class are not written to the ROOT file, it contains only the persistent data members.

See also → [Restrictions on types ROOT I/O can handle]({{ '/manual/io_custom_classes/#restrictions-on-types-root-io-can-handle' | relative_url }}).

### Generating streamers

Streamers are C++ functions that are usually created as part of a class's dictionary, see → [I/O of custom classes]({{ 'manual/io_custom_classes/#generating-dictionaries' | relative_url }}).

`rootcling` parses the class definition and determines how to stream the object in an optimal way, and which streamers need to be invoked for base classes and members.

### Excluding data members from I/O

To prevent a data member from being written to the file, insert a `!` as the first character in a single-line comment (`//`) following the declaration of the member.

To accommodate doxygen-style documentation, this annotation can also be written as `///<!`. 

_**Example**_

{% highlight C++ %}
class Event {
   TDirectory *fTransient; //! This won't be stored
   Float_t fPt;            // This will be stored
   int fMemberWithDoc;     ///<! The member documentation
};
{% endhighlight %}

### Marking pointers as never null

For a small performance benefit, pointer data members can be marked as always be pointing to valid memory (never being null):
this is done with the annotation `//->` or `///<->`.

A pointer marked as such must not point back to the current object, not even indirectly.

_**Example**_

{% highlight C++ %}
TClonesArray *fTracks;
TH1F *fH; //->
{% endhighlight %}

The pointer data member `fH` is marked as never null: ROOT will be able to perform additional optimizations.
`fTracks`, instead, will always be checked for `nullptr`.

### Array data members of fixed and variable size

ROOT supports I/O of fixed size arrays out of the box. For variable-size arrays, a special comment syntax is available to specify the name of a data member that holds the size of the array. Here is an example:

_**Example**_

{% highlight C++ %}
struct Event {
   char fType[20]; // fixed-size array, all good
   int fNVertex;
   float *fVertices; //[fNVertex]
};
{% endhighlight %}

The comment `//[fNVertex]` tells ROOT that the length of the array is stored in the corresponding variable. In general, the syntax is:

{% highlight C++ %}
TYPE *MEMBER; //[LENGTH]
{% endhighlight %}

`LENGTH` must be the name of a data member that is defined _before_ the array member, or in a base class.

> **Note**
> Pointers to simple types (e.g. `float*`, `int*`) are assumed to be variable-size arrays. 

### Preventing splitting

When data is written to a [TTree](https://root.cern/doc/master/classTTree.html), compound objects will be split by default (see -> [Splitting]({{ '/manual/trees/#splitting' | relative_url }})), i.e. a column will be created for each data member.

If you know that a certain data member will always have to be read as a full object, it can be more performant to prevent its splitting.
To do so, add `//||` as an annotation to its declaration:

_**Example**_

{% highlight C++ %}
EventHeader fEvtHdr; //|| This data member will always be read as a whole
{% endhighlight %}

### Double32_t: storing doubles with single precision

Some values have inherent reduced precision, yet benefit from double precision arithmetics.
The type alias `Double32_t` represents a value that has double precision in memory, but it is stored with lower, adjustable precision.

The actual size on disk (before compression) is determined by the parameter next to the data element declaration:

_**Example**_

{% highlight C++ %}
Double32_t m_data; //[min,max<,nbits>]
{% endhighlight %}

If the comment is absent or does not contain `min`, `max`, `nbits`, the member is saved with single precision.

The `min` and `max` values themselves, if present, are saved with 32-bits precision. `min` and `max` can be either a floating point number or one of the following trivial mathematical expressions: `pi`, `2*pi`, `pi/2`, `pi/4`.

If `nbits` is present, the member is saved with `nbits`-bits precision. For more details, see [this tutorial](https://root.cern/doc/master/double32_8C.html).

### Custom streamers

Usually, streamers are generated automatically by `rootcling` (see → [I/O of custom classes]({{ 'manual/io_custom_classes/#generating-dictionaries' | relative_url }})). However, you can also create your own streamer.
A common use case is as a post-read hook, for instance for the registration of a read object with other objects.

_**Example**_

You need to tell `rootcling` not to build a streamer, by ending the `#pragma` statement with a `-`, e.g.

{% highlight C++ %}
#pragma link C++ class Event-;
{% endhighlight %}

The following is an example of a customized `Streamer` function for `Event`. It takes a {% include ref class="TBuffer" %} as a parameter, and first checks to see if this is a case of reading or writing the buffer.

_**Example**_

{% highlight C++ %}
void Event::Streamer(TBuffer &buf)
{
   if (buf.IsReading()) {
      Event::Class()->ReadBuffer(buf, this);
      fReadTime = time(); // store the time of reading
   } else {
      Event::Class()->WriteBuffer(buf, this);
   }
}
{% endhighlight %}

> **Note**
> A class with a custom streamer cannot be split, and its members cannot be stored member-wise.

### Disable storage of TObject data members in derived classes

Types do not have to inherit from {% include ref class="TObject" %} for ROOT to be able to read/write them: the presence of a dictionary is sufficient.

Classes that do inherit from `TObject` can exclude TObject's data members from their I/O invoking `MyClass->Class::IgnoreObjectStreamer()`.

This is useful in case you do not use `TObject`'s `fBits` and `fUniqueID` data members and saving some space in the output file is important.

### Storing networks of objects pointing at each other

ROOT supports storing multiple objects with complex networks of pointers between them, including in the presence of circular dependencies.

The network of pointers is preserved on disk and recreated when the data is read.

Note that in the special case of an object being pointed to, where one of its members is *also* pointed to, that member will be serialized both as part of the object and independently.


## Compression and performance

Compressing data saves disk space, at the cost of additional work for the CPU to write and read the data.
If your analysis is one of the rare cases which spends most of the time in CPU work, using uncompressed data might be beneficial.

Most analyses on the other hand will benefit from one of the fast compression algorithms that also reduce the amount of data to be read from disk or transferred over the network.
The compression factor, that is, the saving of storage space, varies with the type of data. A buffer containing `N` identical values is compressed better than a set of values with higher entropy.

ROOT offers [several options](https://root.cern/doc/master/structROOT_1_1RCompressionSetting_1_1EAlgorithm.html#ad5ed4ef81888f5406ae0f018ff45fd96), such as LZMA with very high compression ratio, or LZ4 with very high decompression throughput, or ZSTD with a good compromise in performance.
The default compression for [`RNTuple`](https://root.cern/doc/master/structROOT_1_1Experimental_1_1RNTuple.html) is determined based on the data; for everything else it's zlib with compression level 1.

Algorithm and compression level can be selected using [`TFile::SetCompressionAlgorithm()`](https://root.cern/doc/master/classTFile.html#a8ed2b3d3f644d739766e16cb70a49393) and [`TFile::SetCompressionLevel()`](https://root.cern/doc/master/classTFile.html#a39aa992efad9e7b4232124c4069d7861), respectively, at the time data is written. A compression level of 0 turns off compression completely. Both algorithm and level can be set an the same time using [`TFile::SetCompressionSettings()`](https://root.cern/doc/master/classTFile.html#a6eea127e5d730e6fe516840aaf995cb9).
The recommended algorithm for general purpose analysis data can be set with:
{% highlight C++ %}
myFile.SetCompressionSettings(ROOT::RCompressionSetting::EDefaults::kUseAnalysis)
{% endhighlight %}

Note that different objects in a ROOT file might have been written with different compression settings. Even different branches or different baskets in a TTree might be using different settings.

## XML interface

ROOT supports writing objects to XML files instead of ROOT files.
While XML files are generally inappropriate for storing data (e.g. worse I/O performance, larger size, no compression), they can be opened with a normal text editor.

Therefore XML files should only be used for small amounts of data, typically histogram files, images, geometries, calibrations.
XML files use the same streaming technology as regular ROOT files:
any class with a dictionary can be stored in XML format. Contrary to ROOT files, XML files do not support subdirectories or trees.

To create an XML file, specify a filename with `.xml` extension when calling [TFile::Open()](https://root.cern/doc/master/classTFile.html#ad8870806a04da2c2f4aa02bee4ec6833){:target="_blank"}.

## Storing the class data layout

ROOT files store data members' values together with some related metadata, e.g. their names and types.
This allows ROOT to find discrepancies between the class layout in memory at the time of writing and at the time of reading, if the class definition changes over time (enabling [schema evolution](#dealing-with-changes-in-class-layouts-schema-evolution)).
It also allows ROOT to read data of classes for which no dictionary is available - potentially even when the corresponding library has not been loaded.

ROOT's reflection library (`TClass`) provides the name and type information, which is written to ROOT files in the form of `TStreamerInfo` objects, describing a class's members and types.
The `TStreamerInfo` objects for all classes written to a file are accessible through [`TFile::GetStreamerInfoList()`](https://root.cern/doc/master/classTFile.html#ae67582a93f93f75bffbb547366f8ce15).

These class description objects are versioned, as different generations of the same type might be written to different files, which in the end are merged, resulting in a file with multiple versions for the same type.

As long as a ROOT file that contains it has been opened, a class's `TStreamerInfo` for a given version can be retrieved through [`TClass::GetStreamerInfo(int version)`](https://root.cern/doc/master/classTClass.html#ab2d5b55c397ae9ccd165cf4050135e13).
It contains entries for each data member and base class, in the form of `TStreamerElement` objects.
They can be accessed through [`TStreamerInfo::GetStreamerElement()`](https://root.cern/doc/master/classTStreamerInfo.html#a0d509be926937dcf20210ed1b9b8cb50).

[`TFile::MakeProject()`](https://root.cern/doc/master/classTFile.html#a5fdd58dba517dd7b70b43332295e529d) can use the information from a `TStreamerInfo` to construct a C++ header which contains the class data members and their types, but no member functions.
This allows to create libraries of compiled objects simply from a data file, even if the original library is not available.

### Abstraction of I/O operations on collections: collection proxy

Instead of implementing dedicated streaming functions for `std::vector`, `std::list`, etc., as well as ROOT's collection types, ROOT implements an abstraction layer for the required I/O functionality, such as creation, insertion, and clearing.
They give access to collection data from disk, no matter what the original collection type was, and whether or not a dictionary for that collection (and its specific template specialization) exists.
These can be adapted to custom collections.

The abstract interface ("protocol") to implement is [`TVirtualCollectionProxy`](https://root.cern/doc/master/classTVirtualCollectionProxy.html); a concrete example is [`TGenMapProxy`](https://root.cern/doc/master/classTGenMapProxy.html) for `std::map`.
For a given class, the collection proxy can be queried and set with [`TClass::GetCollectionProxy()`](https://root.cern/doc/master/classTClass.html#ab7882c918085281531221d020f153d8b) and [`TClass::SetCollectionProxy()`](https://root.cern/doc/master/classTClass.html#a45f73de56aee8d780e871b6c6d52c6f1), respectively.

## Dealing with changes in class layouts: schema evolution

With long-lived data, changes in the data layout become a concern. When a class layout (i.e. data member names, their types, order, etc.) changes, existing persistent data may no longer correspond to the foreseen target of the read operation: the in-memory layout of the latest version of a class definition might now differ from the persisted layout.
"Schema evolution" is ROOT's solution to this problem: in the case of a mismatch between the in-memory version and the persistent version of a class, ROOT maps the data in the file to the new layout of the object in memory.

ROOT supports two types of schema evolution: [automatic schema evolution](#automatic-schema-evolution), which deals with changes in the class definition (e.g., reorder of data members, changes in their types, etc.), and "I/O rules" which allow for fine-tuned [manual schema evolution](#manual-schema-evolution-user-defined-io-customization-rules).

### Automatic schema evolution

Automatic schema evolution supports the following scenarios:

- Change in the order of data members in the class.
- Addition of a data member: the value of the missing member will be left unchanged by the I/O (so usually the value set by the default constructor).
- Removal of a data member: the corresponding data is not read.
- Move of a data member from a derived class to a base class or vice-versa.
- Change of the type of a member if it is a simple type or a pointer to a simple type, including `Double32_t` and `Float16_t`. A warning is given in case of loss of precision.
- Addition or removal of a base class.
- Change of a member type from `T*` to `T` or back.
- Change of a member type from `T*` to `unique_ptr<T>` or back.
- Change of a member type from C-style array (such as `int[3]`) to its `std::array` counterpart (such as `array<int, 3>`).
- Change from variable-size array and size (such as `float *fArray; //[fSize]` and `int fSize`) to `std::vector` (such as `std::vector<float> fArray;`).
- Change between STL collection types, from / to `std::vector`, `std::queue`, `std::deque`, `std::list`, `std::forward_list`, `std::set`, `std::multiset`, `std::unordered_set`, `std::unordered_multiset`, `std::valarray`, `std::bitset`.
- Change of STL associative containers, from / to `std::map`, `std::unordered_map`, `std::multimap`, `std::unordered_map`, `std::unordered_multimap` `std::vector<std::pair<key,value>>`.

All transformations above are applied transparently with no intervention required on the part of user: ROOT will automatically recognize these cases and apply the relevant rules.

_**Example**_

Here is an example of the class layout changes that automatic schema evolution supports:

{% highlight C++ %}
// A class that was written as:
class MyClass : MyBaseClass {
   int a;
   float b;
   MyOtherClass *c;
   Pointee *d;
   std::list<Thing> e;
};

// ...can be read as:
class MyClass : MyOtherClass { // base class changed
   double b; // type changed
   int a; // order changed
   char d; // new data member added
   // removed data member MyOtherClass *c
   std::unique_ptr<Pointee> d; // raw to unique pointer
   std::vector<Thing> e; // change in collection kind
};
{% endhighlight %}

### Manual schema evolution: user-defined I/O customization rules

The [automatic schema evolution](#automatic-schema-evolution) described above allows reading back the serialized data object if the definition of the classes representing these objects changed in one of the supported ways. It is also possible to manually set rules for arbitrary data transformations upon reading the classes.

ROOT provides two interfaces for users to define the conversion rules. The recommended way is to add a rule to the dictionary file by specifying it in the corresponding linkdef file. Alternatively, rules can be inserted into the {% include ref class="TClass" %} object using its C++ API.

#### Specifying I/O customization rules in a linkdef file

I/O customization rules can be part of the generated dictionary for a class. These rules are specified through a [linkdef file]({{ '/manual/io_custom_classes/#selecting-dictionary-entries-linkdefh' | relative_url }}). The syntax of the rules is as follows:

{% highlight C++ %}
#pragma read                                  \
  sourceClass="ClassA"                        \
  source="double m_a; double m_b; double m_c" \
  version="[4-5,7,9,12-]"                     \
  checksum="[12345,123456]"                   \
  targetClass="ClassB"                        \
  target="m_x"                                \
  embed="true"                                \
  include="iostream,cstdlib"                  \
  code="{ m_x = onfile.m_a * onfile.m_b * onfile.m_c; }"
{% endhighlight %}

The arguments in the rules have the following meaning:

- `sourceClass` (mandatory): The name of the persisted class used as input for the rule.
- `source` (mandatory): A semicolon-separated list of data member declarations defining the data members of the source class that the rule needs to access.
- `version`: A comma-separated list of versions or version ranges of the source class. The list has to be enclosed in square brackets. This rule is only applied to input classes matching any of these versions. One of `checksum` or `version` must be present. The version is an integer number, whereas the version range is one of the following:
    - `a-b`: all the version numbers between and including `a` and `b`.
    - `-a`: all the version numbers `<= a`.
    - `a-`: all the version numbers `>= a`.

- `checksum`: A comma-separated list of checksums of the source class that that this rule is applied to. The list has to be enclosed in square brackets. One of `checksum` or `version` must be present.
- `targetClass` (mandatory): Defines the name of the in-memory class that this rule is applied to.
- `target` (mandatory): A semicolon-separated list of target class data member names that this rule is potentially updating.
- `embed`: if `true` (the default), the rule is written to the output file if an object of this class is serialized.
- `include`: A comma-separated list of header files that need to be included for the code snippet.
- `code`: The C++ code snippet implementing the rule's actions.

The C++ code snippet has access to the following pre-defined variables:

   * `newObj`: variable pointing to the target in-memory object.
   * `oldObj`: a variable of type {% include ref class="TVirtualObject" %}, behaving as a pointer to the source object.
   * variables representing the data members of the target object declared in the `target` property of the rule.
   * `onfile.variable_name`: variables declared in the source property of the rule


#### Specifying I/O customization rules through the C++ API

The schema evolution C++ API consists of the following classes:

- [TSchemaRuleSet](https://root.cern/doc/master/classROOT_1_1Detail_1_1TSchemaRuleSet.html){:target="_blank"}: objects of this type manage the sets of rules and ensure their consistency. There can be no conflicting rules in the rule sets. The rule sets are owned by the {% include ref class="TClass" %} objects corresponding to the target classes defined in the rules and can be accessed using [`TClass::GetSchemaRules()`](https://root.cern/doc/master/classTClass.html#a8ffa89c0d9362cd77d957fed12ea9fca){:target="_blank"} and [`TClass::AdoptSchemaRules()`](https://root.cern/doc/master/classTClass.html#a484ed223d16ffbf0d35cee567e6f6225){:target="_blank"}.
- [TSchemaRule](https://root.cern/doc/master/classROOT_1_1TSchemaRule.html){:target="_blank"}: it represent the rules and their fields have exactly the same meaning as the ones of rules specified in the dictionaries (see [above](#specifying-io-customization-rules-in-a-linkdef-file)).

#### Schema evolution with custom streamers

If you have written your own `Streamer` as described in [Custom streamers](#custom-streamers), you will have to manually add code for each version and manage the evolution of your class. When you add or remove data members, you must modify the `Streamer` by hand. ROOT assumes that you have increased the class version number in the `ClassDef` statement and introduced the relevant test in the read part of the Streamer. For example, if a new version of the `Event` class above includes a new member: `Int_t fNew` the `ClassDef` statement should be changed to `ClassDef(Event,2)` and the following lines should be added to the read part of the `Streamer`:

{% highlight C++ %}
   if (R__v > 1) R__b >> fNew;
   else fNew = 0;        // set to some default value
{% endhighlight %}

If, in the same new version 2 you remove the member `fH`, you must add
the following code to read the histogram object into some temporary
object and delete it:

{% highlight C++ %}
   if (R__v) < 2 {
      TH1F *dummy = 0;
      R__b >> dummy;
      delete dummy;
   }
{% endhighlight %}

Our experience with manual schema evolution shows that it is easy to
make mistakes and mismatches between `Streamer` writers and readers are frequent
and increase as the number of classes increase. We recommend you use
`rootcling` to automatically generate dictionaries for your classes and profit from the automatic schema evolution.
