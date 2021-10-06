---
title: I/O
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

This page explains what needs to be done to store your classes using ROOT, be it object-wise or as columnar data, see → [trees]({{ '/manual/trees/' | relative_url }}).

It also explains the mechanisms and concepts behind ROOT's I/O facilities, i.e. how ROOT converts your objects into a stream of bytes and back.


## ROOT files, directories, and keys

ROOT stores data in ROOT files ({% include ref class="TFile" %}), see → [ROOT files]({{ '/manual/root_files/' | relative_url }}).
It does so in machine independent format (IEEE floating point, Big Endian byte ordering).

Similar to a file system directory, a `TFile` can contain directories ({% include ref class="TDirectory" %}) and objects, accessible through the directory's _keys_ ({% include ref class="TKey" %})).
A `TFile` is a directory itself: it inherits from `TDirectory`.

Directories can be "entered" by [`TDirectory::cd()`](https://root.cern/doc/master/classTDirectory.html#af42d9b50db9b4575b13ea265ad8995fb); created by [`TDirectory::mkdir()`](https://root.cern/doc/master/classTDirectory.html#aad2cf362d9574db6538804afa9794827); removed by [`TDirectory::rmdir()`](https://root.cern/doc/master/classTDirectory.html#a528126c0a528d7f7a5888c7ee74ae41d).

### Opening a ROOT file

Use [TFile::Open()](https://root.cern/doc/master/classTFile.html#ad8870806a04da2c2f4aa02bee4ec6833){:target="_blank"} to open a ROOT file.
While this operation might return a valid pointer to a `TFile` object,
this object might not be able to access data, for instance because ROOT was unable to open the file in the filesystem.
Use [TObject::IsZombie()](https://root.cern/doc/master/classTObject.html#aaa8418b9b6692a12d8d0e500c51911bf){:target="_blank"} to check whether the ROOT file was successfully opened.

{% highlight C++ %}
std::unique_ptr<TFile> file( TFile::Open("file.root") );
if (file->IsZombie()) {
   std::cerr << "Error opening file" << endl;
   exit(-1);
}
{% endhighlight %}

### The global "current directory"
ROOT uses two globals (thread-local static, to be precise) that point to the most recently opened file [`gFile`](https://root.cern/doc/master/classTFile.html),
and the "current" directory [`gDirectory`](https://root.cern/doc/master/classTDirectory.html).
The most recently opened ROOT file is always also the current directory.
You can change the current directory by assigning to `gDirectory`; you can see the current directory with [`TDirectory::pwd()`](https://root.cern/doc/master/classTDirectory.html#aeafd432926424a3e76c27be1cb947937)

Some objects operate (at least by default) on that global directory.
An example is [`TObject::Write()`](https://root.cern/doc/master/classTObject.html#a211e8b1ab4ef54a5f2ecbe809945fee8) (unlike the preferred [`TDirectory::WriteObject()`](https://root.cern/doc/master/classTDirectory.html#a67b115afae97366254dfd44a7f46f66f)), or the `TTree` constructor if no directory is specified.

_**Example**_

{% highlight C++ %}
root [0] gDirectory->pwd()

Rint:/
root [1] TFile f1("my.root");
root [2] gDirectory->pwd()

my.root:/
{% endhighlight %}

`Rint:/` corresponds to "ROOT's in-memory" directory, the default directory during startup.

## Viewing the contents of a ROOT file

{% include ref class="TFile" %} is a descendent of {% include ref class="TDirectory" %}, which means it behaves like a `TDirectory`. You can list the contents, print the
name, and create subdirectories. In a ROOT session, you are always in a directory and the directory you are in is
called the current directory and is stored in the global variable `gDirectory` (see → [gDirectory]({{ '/manual/root_architecture_and_components/#gdirectory' | relative_url }})).

### Physical layout of a ROOT file

- Use the [TFile::Map()](https://root.cern/doc/master/classTFile.html#a5568f2f0a4a678ffaf769d0bf210610f){:target="_blank"} method to view the physical layout of a ROOT file.

The output prints the date/time, the start record address, the number of bytes in the record, the class name of the record and the compression factor.

_**Example**_

{% highlight C++ %}
root[] f.Map()

20191010/122600    At:100     N=114    TFile
20191010/122600    At:214     N=429    TH1F           CX = 2.31
20191010/122600    At:643     N=424    TH1F           CX = 2.33
20191010/122600    At:1067    N=426    TH1F           CX = 2.32
20191010/122600    At:1493    N=425    TH1F           CX = 2.33
20191010/122600    At:1918    N=429    TH1F           CX = 2.31
20191010/122600    At:2347    N=424    TH1F           CX = 2.33
20191010/122600    At:2771    N=418    TH1F           CX = 2.37
20191010/122600    At:3189    N=428    TH1F           CX = 2.31
20191010/122600    At:3617    N=422    TH1F           CX = 2.34
20191010/122600    At:4039    N=421    TH1F           CX = 2.35
20191010/122600    At:4460    N=431    TH1F           CX = 2.30
20191010/122600    At:4891    N=424    TH1F           CX = 2.34
20191010/122600    At:5315    N=430    TH1F           CX = 2.31
20191010/122600    At:5745    N=426    TH1F           CX = 2.33
20191010/122600    At:6171    N=425    TH1F           CX = 2.34
20191010/122600    At:6596    N=3055   StreamerInfo   CX = 3.08
20191010/122600    At:9651    N=732    KeysList
20191010/122600    At:10383   N=53     FreeSegments
20191010/122600    At:10436   N=1      END
{% endhighlight %}

### Logical contents of a ROOT file

ROOT provides not only sequential access to the content of a ROOT file, but also random or direct access.

{% include ref class="TFile" %} keeps a list of {% include ref class="TKey" %} objects, which is an index to the objects in the ROOT file.

The `TKey` class describes the record headers of objects in the ROOT file. With the `GetListOfKeys()` method you get the list of keys.

_**Example**_

Get the list of keys from the demo.root file and print them.

{% highlight C++ %}
root[0] TFile f("demo.root")
root[1] f.GetListOfKeys()->Print()

TKey Name = h0,     Title = histo    nr:0,     Cycle = 1
TKey Name = h1,     Title = histo    nr:1,     Cycle = 1
TKey Name = h2,     Title = histo    nr:2,     Cycle = 1
TKey Name = h3,     Title = histo    nr:3,     Cycle = 1
TKey Name = h4,     Title = histo    nr:4,     Cycle = 1
TKey Name = h5,     Title = histo    nr:5,     Cycle = 1
TKey Name = h6,     Title = histo    nr:6,     Cycle = 1
TKey Name = h7,     Title = histo    nr:7,     Cycle = 1
TKey Name = h8,     Title = histo    nr:8,     Cycle = 1
TKey Name = h9,     Title = histo    nr:9,     Cycle = 1
TKey Name = h10,    Title = histo    nr:10,    Cycle = 1
TKey Name = h11,    Title = histo    nr:11,    Cycle = 1
TKey Name = h12,    Title = histo    nr:12,    Cycle = 1
TKey Name = h13,    Title = histo    nr:13,    Cycle = 1
TKey Name = h14,    Title = histo    nr:14,    Cycle = 1
{% endhighlight %}

**Finding TKey objects**

With the `TFile::Get()` method, you can find [TKey](https://root.cern/doc/master/classTKey.html){:target="_blank"} objects.

_**Example**_

{% highlight C++ %}
   root[] TH1F *h9 = (TH1F*)f.Get("h9");
{% endhighlight %}

The `Get()` method finds the `TKey` object with name **h9**.


In detail, the following happens when executing `GetObject()`:

- The key with name `hpx;1` is found in the list of keys.

- A {% include ref class="TBuffer" %}object is created.

- The buffer is read from the ROOT file.

- An empty object is created by calling the default constructor for the class referenced in {% include ref class="TKey" %}.

- The [Streamer()](https://root.cern/doc/master/classTClass.html#ac1c95f1787550ebc5367590aedacbd67){:target="_blank"} method is called for this new object.

In case there is an object with multiple cycles, you can pick a particular cycle with a name like `hpx;` (for example `hpx;2`).

 You can also directly access the keys, for example when the names of the objects contained in the ROOT file are not known or when a long series of objects needs to be read sequentially.

 _**Example**_

This example illustrates how to loop over all keys of a ROOT file.

{% highlight C++ %}
for (TObject* keyAsObj : *inputFile.GetListOfKeys()){
    auto key = dynamic_cast<TKey*>(keyAsObj);
    std::cout << "Key name: " << key->GetName() << " Type: " << key->GetClassName() << std::endl;
}
{% endhighlight %}



**Iterating over objects**

Keys are available in a {% include ref class="TList" %} of {% include ref class="TKey" %}s. Therefore, you can iterate over the list of keys.

_**Example**_

The `TKeys` of the `demo.root` file are iterated.

{% highlight C++ %}
{
   TFile f("demo.root");
   TIter next(f.GetListOfKeys());
   TKey *key;
   while ((key=(TKey*)next())) {
      printf("key: %s points to an object of class: %s at %dn", key->GetName(),
      key->GetClassName(),key->GetSeekKey());
   }
}
{% endhighlight %}

The output is of the `iterate.C` ROOT macro is:

{% highlight C++ %}
root[] .x iterate.C

key: h0 points to an object of class: TH1F at 150
key: h1 points to an object of class: TH1F at 503
key: h2 points to an object of class: TH1F at 854
key: h3 points to an object of class: TH1F at 1194
key: h4 points to an object of class: TH1F at 1539
key: h5 points to an object of class: TH1F at 1882
key: h6 points to an object of class: TH1F at 2240
key: h7 points to an object of class: TH1F at 2582
key: h8 points to an object of class: TH1F at 2937
key: h9 points to an object of class: TH1F at 3293
key: h10 points to an object of class: TH1F at 3639
key: h11 points to an object of class: TH1F at 3986
key: h12 points to an object of class: TH1F at 4339
key: h13 points to an object of class: TH1F at 4694
{% endhighlight %}

### Objects in memory and on disk

[TFile::ls()](https://root.cern/doc/master/classTFile.html#a0b6ce84d5fecb4d34fc4fa38824320c2){:target="_blank"} lists with option `-d` the objects on disk and with option `-m` the objects in memory.<br/>
If no option is specified, both are listed, first the objects in memory, then the objects on disk.<br/>
The current directory is stored in the global variable [gDirectory]({{ '/manual/root_architecture_and_components/#gdirectory' | relative_url }}).

_**Example**_

{% highlight C++ %}
root[] TFile *f = new TFile("hsimple.root");
root[] gDirectory->ls("-m")
TFile**         hsimple.root   Demo ROOT file with histograms
 TFile*         hsimple.root   Demo ROOT file with histograms
{% endhighlight %}

_**Example**_

This example lists the objects on disk in the current directory.

{% highlight C++ %}
root[] gDirectory->ls("-d")
TFile**         hsimple.root   Demo ROOT file with histograms
 TFile*         hsimple.root   Demo ROOT file with histograms
  KEY: TH1F     hpx;1   This is the px distribution
  KEY: TH2F     hpxpy;1   py vs px
  KEY: TProfile hprof;1   Profile of pz versus px
  KEY: TNtuple  ntuple;1   Demo ntuple
{% endhighlight %}

To transfer an object from disk to memory, you have to use it explicitly.

_**Example**_

Drawing `hprof`from the `hsimple.root` reads it from the ROOT file and creates an object in memory.

{% highlight C++ %}
root[] hprof->Draw()
<TCanvas::MakeDefCanvas>: created default TCanvas with name c1

root[] f->ls()
TFile** hsimple.root
TFile* hsimple.root
OBJ: TProfile hprof Profile of pz versus px : 0
KEY: TH1F hpx;1 This is the px distribution
KEY: TH2F hpxpy;1 py vs px
KEY: TProfile hprof;1 Profile of pz versus px
KEY: TNtuple ntuple;1 Demo ntuple
{% endhighlight %}

The line beginning with `OBJ` indicates that an {% include ref class="TProfile" %} object, called `hprof`, has been added in memory to this directory.
This new `hprof` object in memory is independent from the `hprof` object on disk. If you make changes to the `hprof` object in memory, they are not propagated to the `hprof` object on disk. A new version of the `hprof` object is only saved
if you use the `Write()` method.

## Streamers

When talking about "writing an object to a file", what is actually meant is writing the current values of the data members.  The most common way to do this is to decompose (also called serialize) the object into its data elements and then write them to disk. This decomposition is done by a `Streamer`. Each class that is to be stored in a ROOT file requires a `Streamer`, which decomposes the class and "streams" its members into a buffer.

Variables of composite data types such as classes, structures, and arrays can be decomposed in simple types such as longs, shorts, floats, and chars.

The methods of the class are not written to the ROOT file, it contains only the persistent data members. To decompose the parent classes, the `Streamer` calls the `Streamer` of the parent classes. It moves up the inheritance tree until it reaches an ancestor with no parent. To serialize the object data members, it calls their `Streamers`. These in turn move up their own inheritance tree and so on. The simple data elements are written directly to the buffer. Finally, the buffer contains all the simple data members of all the classes that make up that particular object. Data members that are references are never stored, it is always the responsibility of the object's constructor to set them correctly.

### Automatically generated streamers

A streamer typically calls on other `Streamers`: its parent's streamers and data members. This architecture requires that all classes have `Streamers`, because eventually they will be called. To ensure that a class has a `Streamer`, `rootcling` automatically creates one in the `ClassDef` macro defined in `$ROOTSYS/include/Rtypes.h`. `ClassDef` defines several methods for each class, and one of them is the `Streamer`. The automatically generated streamer is complete and can be used as long as no customization is required.

The `Event` class is defined in `$ROOTSYS/test/Event.h`.  It inherits from {% include ref class="TObject" %}.

_**Example**_

A simple example of a class with several data members.

{% highlight C++ %}
   class Event : public TObject {
   private:
   TDirectory *fTransient;      //! Current directory.
   Float_t fPt;                 //! Transient value.
   char fType[20];
   Int_t fNtrack;
   Int_t fNseg;
   Int_t fNvertex;
   UInt_t fFlag;
   Float_t fTemperature;
   EventHeader fEvtHdr;         //|| Do no split.
   TClonesArray *fTracks;       //->
   TH1F *fH;                    //->
   Int_t fMeasures[10];
   Float_t fMatrix[4][4];
   Float_t *fClosestDistance;   //[fNvertex]
{% endhighlight %}

The `Event` class is added to the dictionary with `rootcling`.

{% highlight C++ %}
rootcling -f EventDict.cxx -c Event.h EventLinkDef.h
{% endhighlight %}

The `EventDict.cxx` file contains the automatically generated `Streamer` for `Event`.

{% highlight C++ %}
   void Event::Streamer(TBuffer &R__b){

// Stream an object of class Event.
   if (R__b.IsReading()) {
      Event::Class()->ReadBuffer(R__b, this);
      } else {
      Event::Class()->WriteBuffer(R__b, this);
         }
      }
{% endhighlight %}

When writing an `Event` object, [TClass::WriteBuffer()](https://root.cern/doc/master/classTClass.html#aff0609831684cbd2162ede5e4cbc3ee7){:target="_blank"}  is called. `TClass::WriteBuffer`writes the current version number of the `Event` class, and its contents into the buffer `R__b`. The `Streamer` calls [TClass::ReadBuffer()](https://root.cern/doc/master/classTClass.html#af8641160ad76a62e62ee1271cb559347){:target="_blank"} when reading an
`Event` object. The `TClass::ReadBufferRead()` method reads the information from buffer `R__b` into the `Event` object.

### Transient data members

To prevent a data item from being written to the file, insert a `!` as the first character in the comment (`//`). It tells ROOT not to store this data item in a ROOT file when saving the class.

_**Example**_

{% highlight C++ %}
   class Event : public TObject {
   private:
   TDirectory *fTransient;       //! Current directory.
   Float_t fPt;                  //! Transient value
...
{% endhighlight %}

### The pointer to objects

The string `->` in the comment of the members `*fH` and `*fTracks` tells the automatic `Streamer` to assume
that these point to valid objects and that the `Streamer` of the objects can be called, instead of the more expensive `R__b << fH`. Note that there is no check for the validity of the pointer value. In particular, if the pointer points, directly or indirectly, back to the current object, this leads to an infinite recursion and the abrupt end of the process.

_**Example**_

{% highlight C++ %}
   TClonesArray *fTracks;       //->
   TH1F *fH;                    //->
{% endhighlight %}

### Variable length array

When the `Streamer` finds a pointer to a simple type, it assumes it is an array. Somehow it needs to know how many elements are in the array in order to allocate enough space in the buffer and write out the appropriate number of elements. This is done in the class definition.

_**Example**_

{% highlight C++ %}
   class Event : public TObject {
   private:
   char fType[20];
   Int_t fNtrack;
   Int_t fNseg;
   Int_t fNvertex;
   ...
   Float_t *fClosestDistance;         //[fNvertex]
{% endhighlight %}

The `fClosestDistance` array is defined as a pointer of floating point numbers. A comment mark (`//`), and the number
in square brackets tell the `Streamer` the length of the array for this object. In general the syntax is:

{% highlight C++ %}
<simple type> *<name>//[<length>]
{% endhighlight %}

The length cannot be an expression. If a variable is used, it must be an integer data element of the class. It must be defined before it is used or in a base class.

The same notation applies to variable length arrays of objects and variable length arrays of pointers to objects.

{% highlight C++ %}
   MyObject *obj;        //[fNojbs]
   MyObject **objs;      //[fDatas]
{% endhighlight %}

### Double32_t

Mathematical operations very often require double precision, but when storing, single precision is usually sufficient. For this purpose the typedef `Double32_t` is supported, which is stored in memory as double and on disk as float or integer.  The actual size on disk (before compression) is determined by the parameter next to the data element declaration.

_**Example**_

{% highlight C++ %}
   Double32_t m_data;    //[min,max<,nbits>]
{% endhighlight %}

If the comment is absent or does not contain `min`, `max`, `nbits`, the member is saved as a float.

If `min` and `max` are present, they are saved with 32 bits precision. `min` and `max` can be explicit values or expressions of values known to `rootlcing` (for example `pi`).

If `nbits` is present, the member is saved as integer with nbits bits precision. For more details, see the I/O-tutorials `double32.C`.

### Preventing splitting

If you want to prevent a data item from being split when you write it to a tree, add `||` directly after the comment. This is only useful for object data members.

_**Example**_

{% highlight C++ %}
   EventHeader fEvtHdr;        //|| Do not split the header.
{% endhighlight %}


### Streamers with special additions

Usually, a `Streamer` is generated by `rootcling`. However, you can also create your own `Streamer`. There are two reasons why you should create your own streamer:

1. If you have a non-persistent data item that you want to initialize to a value depending on the data items you read.
2. If you need to handle or schema evolution yourself.

_**Example**_

First, you need to tell `rootcling` not to build a `Streamer`.  The input to the `rootcling` command (in the makefile) is a list of classes in a `LinkDef.h` file. For example, the list of classes for `Event` is listed in `$ROOTSYS/test/EventLinkDef.h`. `-` at the end of the class name indicates `rootcling` not to generate a `Streamer`.
In this example can see that the `Event` class is the only one for which `rootcling` is instructed not to generate a `Streamer`.

{% highlight C++ %}
#ifdef __ROOTCLING__

#pragma link off all globals;
#pragma link off all classes;
#pragma link off all functions;
#pragma link C++ class EventHeader+;
#pragma link C++ class Event-;
#pragma link C++ class HistogramManager+;
#pragma link C++ class Track+;
#endif
#pragma link C++ class EventHeader+;
{% endhighlight %}


The `+` sign indicates `rootcling` to use the `Streamer` system.

The following is an example of a customized `Streamer` for `Event`. The `Streamer` takes a  {% include ref class="TBuffer" %} as a parameter, and first checks to see if this is a case of reading or writing the buffer.

_**Example**_

{% highlight C++ %}
   void Event::Streamer(TBuffer &R__b) {
   if (R__b.IsReading()) {
   Event::Class()->ReadBuffer(R__b, this);
   fTransient = gDirectory; //save current directory
   fPt= TMath::Sqrt(fPx*fPx + fPy*fPy + fPz*fPz);
   } else {
      Event::Class()->WriteBuffer(R__b, this);
      }
   }
{% endhighlight %}

### Writing objects

A `Streamer` breaks the objects into data members and writes them to a buffer. It does not write the buffer to a file, but simply fills a buffer with bytes representing the object. This allows, for example, to write the buffer to a file. For example, you can write it to a socket to send it over the network.

A buffer is written to a file by loading the dictionary for a class before an object of that type can be stored.

The [TObject::Write()](https://root.cern/doc/master/classTObject.html#a19782a4717dbfd4857ccd9ffa68aa06d){:target="_blank"} method does the following:

- Creates a {% include ref class="TKey" %} object in the current directory.
- Creates a {% include ref class="TBuffer" %} object, which is part of the newly created {% include ref class="TKey" %}.
- Fills the {% include ref class="TBuffer" %}  with a call to the `class::Streamer` method.
- Creates a second buffer for compression, if needed.
- Reserves space by scanning the {% include ref class="TFree" %} list. At this point, the size of the buffer is known.
- Writes the buffer to the file.
- Releases the {% include ref class="TBuffer" %} part of the key.

This means that the [TObject::Write()](https://root.cern/doc/master/classTObject.html#a19782a4717dbfd4857ccd9ffa68aa06d){:target="_blank"} calls the `Streamer` method of the class to build the buffer. The buffer is in the key and the key is written to disk. Once written to disk, the memory consumed by the buffer part is released. The key part of the {% include ref class="TKey" %} is kept. The key consumes about 60 bytes, whereas the buffer, since it contains the object data, can be very large.

### Ignoring object Streamers

A class can ignore the {% include ref class="TObject" %} `Streamer` with the `MyClass->Class::IgnoreObjectStreamer()` method. When the
 `kIgnoreTObjectStreamerbit` class is set (by calling the `IgnoreTObjectStreamer()` method), the automatically generated `Streamer` does not call [TObject::Streamer](https://root.cern/doc/master/classTClass.html#ac1c95f1787550ebc5367590aedacbd67){:target="_blank"}, and the `TObject` part of the class is not streamed to the file. This is useful
in case you do not use the `TObject` `fBits` and `fUniqueIDdata` members. You gain space on the file, and you do not loose functionality if you do not use the `fBits` and `fUniqueID`.

### Streaming a TClonesArray

When writing a {% include ref class="TClonesArray" %}, it bypasses by default the `Streamer` of the member class and uses a more efficient internal mechanism to write the members to the file.

You can override the default and specify that the member class `Streamer` is used by setting the [TClonesArray::BypassStreamer](https://root.cern/doc/master/classTClonesArray.html#a28b32cc35a81a3feac2ee38fe491f47d){:target="_blank"} bit to false:

{% highlight C++ %}
   TClonesArray *fTracks;
   fTracks->BypassStreamer(kFALSE);             // Use the member Streamer.
{% endhighlight %}


When the `kBypassStreamer` bit is set, the automatically generated `Streamer` can call directly the [TClass::WriteBuffer](https://root.cern/doc/master/classTClass.html#aff0609831684cbd2162ede5e4cbc3ee7){:target="_blank"} method. Bypassing the `Streamer` improves the performance when writing or reading the objects in the {% include ref class="TClonesArray" %}.

However, the drawback is when a {% include ref class="TClonesArray" %} is written with `split=0` bypassing the `Streamer`, the `StreamerInfo` of the class in the array being optimized, one cannot later use the {% include ref class="TClonesArray" %}. with `split > 0`.

For example, there is a problem with the following scenario: a class `Foo` has a `TClonesArray` of `Bar` objects the `Foo` object is written with `split=0` to tree `T1`. In this case the `StreamerInfo` for the class `Bar` is created in optimized mode in such a way that data members of the same type are written as an array improving the I/O performance. In a new program, `T1` is read and a new tree `T2` is created with the object `Foo` in `split > 1`.

When the `T2branch` is created, the `StreamerInfo` for the class `Bar` is created with no optimization (mandatory for the split mode). The optimized `Bar` `StreamerInfo` is going to be used to read the {% include ref class="TClonesArray" %} in `T1`. The result are `Bar` objects with data member values not in the right sequence. The solution to this problem is to call `BypassStreamer(kFALSE)` for the {% include ref class="TClonesArray" %}. In this case, the normal `Bar::Streamer` function is  called. The `Bar::Streamer` function works independently if the `Bar` `StreamerInfo` has been generated in optimized mode or not.

## Pointers and references in persistency

An object pointer as a data member presents a challenge for the streaming software. If the object being pointed to is stored each time, it could create circular dependencies, consuming a large amount of memory. The network of references must be preserved on disk and recreated when the file is read. If you use independent I/O operations for pointers and their referenced objects you can use the {% include ref class="TRef" %} class.

**Streaming C++ pointers**

When ROOT encounters a pointer data member, it calls the object's `Streamer` and labels it with a unique object identifier, which is unique to an I/O operation. If there is another pointer to the object in the same I/O operation, the first object is referenced, that is, it is not savedagain. When reading the file, the object is rebuilt and
the references are recalculated.

In this way, the network of pointers and their objects is rebuilt and can be used as it was used before persistence.
was persistent. If the pointer contains the address of an object embedded in another object (as opposed to being pointed to by a pointer), the object is duplicated at read time. To avoid this, make the pointer a transient data member.

**TRef class**

If the object is split into multiple files or multiple branches of one or more {% include ref class="TTree" %}, standard C++ pointers cannot be used because each I/O operation writes the referenced objects and multiple copies exist. In addition, if the pointer is read before the referenced object, it is null and may cause a system error at runtime. To address these limitations, ROOT provides the {% include ref class="TRef" %} class. See the Reference Guide for information on using the {% include ref class="TRef" %} class.

## Compression and performance

ROOT uses a compression algorithm based on the well-known gzip algorithm. It supports nine levels of compression.
The default compression level for ROOT is 1. The compression level can be set with the [TFile::SetCompressionLevel()](https://root.cern/doc/master/classTFile.html#a39aa992efad9e7b4232124c4069d7861){:target="_blank"} method. Experience with this algorithm shows that a compression level of 1.3 is the optimum for raw data files and about 2 for most DST files. Choosing 1 as the default is a tradeoff between the time it takes to read and write the object versus the storage space savings.

To specify no compression, set the level to 0.

It is recommended to use compression when the time spent on I/O operations is small compared to the total processing time. If the I/O operation is increased by a factor of 5, this is still a small percentage of the total time and can compress the data by a factor of 10. On the other hand, if the amount of time spent on I/O is large, the compression can have a large impact on the
the performance of the program.

The compression factor, that is, the saving of storage space, varies with the type of data. A buffer with an equal field of values is compressed so that the value is written only once. For example, a track has the mass of a pion, which is always the same, and the charge of the pion, which is either positive or negative. For 1000 pions, the mass is written only once and the charge is written only twice (positive and negative). If the data is sparse, that is, if there are many zeros, the compression factor is also high.

The time to decompress an object is small compared to the compression time and is independent of the selected compression level. Note that the compression level can be changed at any time, but the new compression level applies only to newly written objects. Consequently, a ROOT file may contain objects with different compression levels.

The following table shows four runs of the demo script, which generates 15 histograms with different compression parameters. To make the numbers more meaningful, the macro was modified to generate 1000 histograms.

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <th scope="col">Compression level</th>
      <th scope="col">Bytes</th>
      <th scope="col">Write time (s)</th>
      <th scope="col">Read time (s)</th>
    </tr>
    <tr>
      <td>0</td>
      <td>1,004,998</td>
      <td>4.77</td>
      <td>0.07</td>
    </tr>
    <tr>
      <td>1</td>
      <td>438,366</td>
      <td>6.67</td>
      <td>0.05</td>
    </tr>
    <tr>
      <td>5</td>
      <td>429,871</td>
      <td>7.03</td>
      <td>0.06</td>
    </tr>
          <tr>
      <td>9</td>
      <td>426,899</td>
      <td>8.47</td>
      <td>0.05</td>
    </tr>
  </tbody>
</table>


## Schema evoluttion

Schema evolution is a problem that occurs with long-lived data. When a schema changes, existing persistent data may no longer be accessible unless the system provides a mechanism for accessing data created with earlier versions of the schema. At
the lifetime of the collaboration, class definitions (that is, the schema) are likely to change frequently. Not only may the class itself change, but any parent classes or data member classes may also change. This makes te support for schema evolution necessary.

ROOT fully supports schema evolution. The following figure illustrates some of the scenarios.

{% include figure_image
img="schema_evolution.png"
caption="The ROOT schema evolution."
%}

The upper half represents different versions of the shared library with the class definitions. These are the in-memory class versions. The lower half represents data files containing different versions of the classes.

- An old version of a shared library and a file with new class definitions - this can be the case when someone has not updated the library and reads a new file.
- Reading a shared library file that is missing a class definition (that is, missing class D).
- Reading a file without any class definitions. This may be the case if the class definition is lost or unavailable.
- The current version of a shared library and an old file with old class versions (backward compatibility). This is often the case when old data is read.
- Reading a file with a shared library created with `MakeProject`. This is the case when someone has already read the data without shared library and used the ROOT function `MakeProject` to read the class definitions and shared library.

In the case of a mismatch between the in-memory version and the persistent version of a class, ROOT maps the persistent to the one in memory. For example, you can change the class definition at will:

- Change the order of data members in the class.
- Add new data members. By default, the value of the missing member will be 0 or in case of an object it is set to null.
- Remove data members.
- Move a data member to a base class or vice-versa.
- Change the type of a member if it is a simple type or a pointer to a simple type. If a loss of precision occurs, a warning is given.
- Add or remove a base class.

ROOT supports schema evolution by storing a class description of every version of the class ever written to disk. When an object is written to a file, the description of the current class version is also written.  This description is implemented in the {% include ref class="TStreamerInfo" %} class.

### TStreamerInfo class

Each class has a list of `StreamerInfo objects`, one for each version of the class, if that version has been written to disk at least once. When an object is read from a file, the system uses the `StreamerInfo` list to decode an object to the current version. The `StreamerInfo` is composed of {% include ref class="TStreamerElement" %}. Each {% include ref class="TStreamerElement" %} describes a persistent data member of the class. By default, all data members of a class are persistent. To exclude a data member (that is, make it non-persistent) add a `!` after the comment characters.

_**Example**_

The pointer  `*fPainter` of a {% include ref class="TH1" %} is not persistent.

{% highlight C++ %}
TVirtualHistPainter* fPainter     //!Pointer to histogram painter.
{% endhighlight %}

### TStreamerElement class

A {% include ref class="TStreamerElement" %} describes a data element of a simple type, object, array, pointer or container. The offset in the {% include ref class="TStreamerElement" %} is the starting address of the data for this data element.

_**Example**_

{% highlight C++ %}
BASE     TNamed offset= 0     type=67     The basis for a named object.
BASE     TAttLine offset= 28    type= 0      Line attributes.
{% endhighlight %}

In this example, the  {% include ref class="TNamed" %} data starts at byte 0, and {% include ref class="TAttLine" %} starts at byte 28. The offset is machine and compiler dependent and is computed when the `StreamerInfo` is analyzed. The types are defined in the `TStreamerInfo.h` file:

{% highlight C++ %}
enum EReadWrite {
kBase=0, kChar=1,kShort=2,kInt=3,kLong=4,
kFloat=5, kCounter=6,kCharStar=7, kDouble=8,kUChar=11,
kUShort=12, kUInt=13,kULong=14,kBits=15,kOffsetL=20,
kOffsetP=40, kObject=61,kAny=62,kObjectp=63,kObjectP=64,
kTString=65, kTObject=66,kTNamed=67,kSkip=100,kSkipL=120,
kSkipP=140, kConv=200, kConvL=220,kConvP=240,kStreamer=500,
kStreamLoop=501, kMissing=99999
};
{% endhighlight %}

The  [TClass::GetStreamerInfo](https://root.cern/doc/master/classTClass.html#ab2d5b55c397ae9ccd165cf4050135e13){:target="_blank"} method analyzes the `StreamerInfo` the same way it would be analyzed by referring to the class. While analyzing the `StreamerInfo`, it computes the offsets. The type field is the type of the {% include ref class="TStreamerElement" %}. It is specific to the `StreamerInfo` definition.


### Example: TH1 StreamerInfo

In the `StreamerInfo` of the {% include ref class="TH1" %} class there are the four base classes: {% include ref class="TNamed" %}, {% include ref class="TAttLine" %}, {% include ref class="TAttFill" %}, and {% include ref class="TAttMarker" %}. These are followed by a list of the data members. Each data member is implemented by a {% include ref class="TStreamerElement" %} object.

{% highlight C++ %}
root[] TH1::Class()->GetStreamerInfo()->ls()
StreamerInfo for class: TH1, version=3
BASE           TNamed           offset= 0 type=67 The basis for a named object
BASE           TAttLine            offset= 28 type= 0 Line attributes
BASE           TAttFill              offset= 40 type= 0 Fill area attributes
BASE          TAttMarker        offset= 48 type= 0 Marker attributes
Int_t            fNcells               offset= 60 type= 3 number of bins(1D
TAxis           fXaxis                offset= 64 type=61 X axis descriptor
TAxis           fYaxis                offset=192 type=61 Y axis descriptor
TAxis           fZaxis                offset=320 type=61 Z axis descriptor
Short_t        fBarOffset         offset=448 type= 2(1000*offset)for bar charts or legos
Short_t       fBarWidth          offset=450 type= 2 (1000*width)for bar charts or legos
Stat_t         fEntries              offset=452 type= 8 Number of entries
Stat_t         fTsumw              offset=460 type= 8 Total Sum of weights
Stat_t         fTsumw2            offset=468 type= 8 Total Sum of squares of weights
Stat_t         fTsumwx            offset=476 type= 8 Total Sum of weight*X
Stat_t         fTsumwx2           offset=484 type= 8 Total Sum of weight*X*X
Double_t    fMaximum          offset=492 type= 8 Maximum value for plotting
Double_t    fMinimum           offset=500 type= 8 Minimum value for plotting
Double_t    fNormFactor       offset=508 type= 8 Normalization factor
TArrayD     fContour             offset=516 type=62 Array to display contour levels
TArrayD     fSumw2              offset=528 type=62 Array of sum of squares of weights
TString fOption                    offset=540 type=65 histogram options
TList* fFunctions                  offset=548 type=63 ->Pointer to list of functions
i= 0, TNamed        type= 67,    offset= 0, len=1, method=0
i= 1, TAttLine        type= 0,       offset= 28, len=1, method=142484480
i= 2, TAttFill          type= 0,       offset= 40, len=1, method=142496992
i= 3, TAttMarker   type= 0,       offset= 48, len=1, method=142509704
i= 4, fNcells          type= 3,       offset= 60, len=1, method=0
i= 5, fXaxis           type= 61,     offset= 64, len=1, method=1081287424
i= 6, fYaxis           type= 61,     offset=192, len=1, method=1081287548
i= 7, fZaxis           type= 61,     offset=320, len=1, method=1081287676
i= 8, fBarOffset    type= 22,     offset=448, len=2, method=0
i= 9, fEntries        type= 28,     offset=452, len=8, method=0
i=10, fContour     type= 62,     offset=516, len=1, method=1081287804
i=11, fSumw2      type= 62,     offset=528, len=1, method=1081287924
i=12, fOption       type= 65,     offset=540, len=1, method=1081288044
i=13, fFunctions  type= 63,     offset=548, len=1, method=1081288164
{% endhighlight %}

**Optimized StreamerInfo**

The entries starting with `i = 0` is the optimized format of the `StreamerInfo`. Consecutive data members of the same simple type and size are collapsed and read at once into an array for performance optimization.

{% highlight C++ %}
i= 0, TNamed        type= 67,  offset= 0,  len=1,  method=0
i= 1, TAttLine        type= 0,    offset= 28, len=1, method=142484480
i= 2, TAttFill          type= 0,    offset= 40, len=1, method=142496992
i= 3, TAttMarker   type= 0,    offset= 48, len=1, method=142509704
{% endhighlight %}

For example, the five data members beginning with `fEnties` and the three data members beginning with `fMaximum`, are put into an array called `fEntries (i = 9)` with the length 8.

{% highlight C++ %}
i= 9, fEntries    type= 28,    offset=452, len=8, method=0
{% endhighlight %}

Only data members of simple types are combined, data members of objects are not combined. For example, the three axes data members remain separate. The "method" is a handle to the method that reads the object.

### Automatic schema evolution

When a class is defined in ROOT, it must include the `ClassDef` macro as the last line in the header file inside the class definition. The syntax is:

{% highlight C++ %}
ClassDef(<ClassName>,<VersionNumber>)
{% endhighlight %}

The version number identifies that particular version of the class. If a class has version 0, it is not stored in a root file, but its base class(es) are. The reason may be that this class has no data elements worth storing or all real information in the base classes. The version number is written to the file in the `Streamer` by calling [TBuffer::WriteVersion](https://root.cern/doc/master/classTBuffer.html#abefa9e3ea80451e4a4fe2d53455296ea){:target="_blank"}. The designer of the class does not need to make any manual change in the `Streamer`. The development of the ROOT scheme mechanism is automatic and handled by the `StreamerInfo`.

### Manual data model evolution capabilities

The automatic data model schema evolution implemented in ROOT allows reading back the serialized data object if the definition of the classes representing these objects has changed slightly (some of the data members have been removed or some new ones have been added). It is also possible to manually set the rules for more sophisticated data transformations on reading to load the serialized objects into data structures that have changed significantly.

ROOT provides two interfaces for users to define the conversion rules. The first way is to define a rule in the dictionary file, and the second way is to insert it into the {% include ref class="TClass" %} object using the C++ API.

There are two types of conversion rules. The first of them, the normal rules, are the ones that should be used in most cases. They provide buffered input data and an address of the in-memory target object, and allow the user to specify the conversion function that maps the read data to the output format. The second type of rule, raw rules, also provide the pointer to the target object, but the input is a raw {% include ref class="TBuffer" %} object that contains the input data item declared as input to the rule. This type of rule is mainly provided to handle the file format changes that cannot be handled otherwise, and should generally not be used if there is no other option.

**The dictionaries**

The easiest way to specify the conversion rules is to use a dictionary. You can do this either in a `LinkDef` file or in the selection xml file that is passed to `genreflex`. The syntax of the rules is as follows:

_For dictionaries created from a LinkDef file_

{% highlight C++ %}
#pragma read     \
sourceClass="ClassA"     \
source="double m_a; double m_b; double m_c"     \
version="[4-5,7,9,12-]"     \
checksum="[12345,123456]"     \
targetClass="ClassB"     \
target="m_x"     \
embed="true"     \
include="iostream,cstdlib"     \
code="{m_x = onfile.m_a * onfile.m_b * onfile.m_c; }"     \

#pragma readraw     \
sourceClass="TAxis"     \
source="fXbins"     \
targetClass="TAxis"     \
target="fXbins"     \
version="[-5]"      \
include="TAxis.h"      \
code="     \
{     \
Float_t * xbins=0;      \
Int_t n = buffer.ReadArray( xbins );      \
fXbins.Set( xbins );      \
}"
{% endhighlight %}

_For REFLEX dictionaries_

{% highlight C++ %}
<ioread sourceClass="ClassA"
     source="double m_a; double m_b; double m_c"
     version="[4-5,7,9,12-]"
     checksum="[12345,123456]"
     targetClass="ClassB"
     target="m_x"
     embed="true"
     include="iostream,cstdlib">
<![CDATA[
m_x = onfile.m_a * onfile.m_b * onfile.m_c;
]] >
</ioread>
<ioreadraw sourceClass="TAxis"
     source="fXbins"
     targetClass="TAxis"
     target="fXbins"
     version="[-5]"
     include="TAxis.h">
<![CDATA[
     Float_t *xbins = 0;
      Int_t n = buffer.ReadArray( xbins ) ;
     fXbins.Set( xbins );
]] >
</ioreadraw>
{% endhighlight %}

The variables in the rules have the following meaning:

- `sourceClass`<br/>The field defines the on-disk class that is the input for the rule.
- `source`<br/>A semicolon-separated list of values defining the source class data members that need to be cached and accessible via object proxy when the rule is executed. The values are either the names of the data members or the type-name pairs (separated by a space). If types are specified then the ondisk structure can be generated and used in the code snippet defined by the user.
- `version`<br/>A list of versions of the source class that can be an input for this rule. The list has to be enclosed in a square bracket and be a comma-separated list of versions or version ranges. The version is an integer number, whereas the version range is one of the following:<br/>
“a-b”: a and b are integers and the expression means all the numbers between and including a and b.<br/>
“-a”: a is an integer and the expression means all the version numbers smaller than or equal to a.<br/>
“a-”: a is an integer and the expression means all the version numbers greater than or equal to a.
- `checksum`<br/>A list of checksums of the source class that can be an input for this rule. The list has to be enclosed in a square brackets and is a comma-separated list of integers.
- `targetClass`<br/>The field is obligatory and defines the name of the in-memory class that this rule can be applied to.
- `target`<br/>A semicolon-separated list of target class data member names that this rule is capable of calculating.
- `embed`<br/>This property tells the system if the rule should be written in the output file is some objects of this class are serialized.
- `include`<br/>A list of header files that should be included in order to provide the functionality used in the code snippet. The list is comma delimited.
- `code`<br/>An user specified code snippet.

**The C++ API**

The schema evolution C++ API consists of the follwing classes:
-  [TSchemaRuleSet](https://root.cern/doc/master/classROOT_1_1Detail_1_1TSchemaRuleSet.html){:target="_blank"}
-  [TSchemaRule"](https://root.cern/doc/master/classROOT_1_1TSchemaRule.html){:target="_blank"}

Objects of the [TSchemaRule"](https://root.cern/doc/master/classROOT_1_1TSchemaRule.html){:target="_blank"}class represent the rules and their fields have exactly the same meaning as the ones of rules specified in the dictionaries. [TSchemaRuleSet](https://root.cern/doc/master/classROOT_1_1Detail_1_1TSchemaRuleSet.html){:target="_blank"} objects manage the sets of rules and ensure their consistency. There can be no conflicting rules in the rule sets. The rule sets are owned by the {% include ref class="TClass" %} objects corresponding to the target classes defined in the rules and can be accessed using `TClass::{Get|Adopt}SchemaRules`.

## XML interface

You can save a canvas to an XML file, that is a `file.xml` file instead of a `file.root`. XML files have no advantages over the normal ROOT files, except that the information in these files can be edited with a normal text editor.

XML files should only be used for small amounts of data, typically histogram files, images, geometries, calibrations.
The XML file is created in memory before it is stored on disk. As for normal ROOT files, XML files use the same I/O mechanism that the ROOT/Cling dictionary uses. Any class that has a dictionary can be stored in XML format. XML files do not support subdirectories or trees.

To create an XML file, specify a filename with an `.xml` extension when calling [TFile::Open()](https://root.cern/doc/master/classTFile.html#ad8870806a04da2c2f4aa02bee4ec6833){:target="_blank"}. `TFile::Open()` recognizes that you are trying to open an XML file and returns a {% include ref class="TXMLFile" %} object. When a XML file is open in write mode, you can use [TObject::Write()](https://root.cern/doc/master/classTObject.html#a19782a4717dbfd4857ccd9ffa68aa06d){:target="_blank"} to write an object into the XML file.

_**Example**_

{% highlight C++ %}
// Example of a session saving a histogram to a XML file.
   TFile *f = TFile::Open("Example.xml","recreate");
   TH1F *h = new TH1F("h","test",1000,-2,2)
   h->FillRandom("gaus");
   h->Write();
  delete f;

// Example of a session saving a histogram to a XML file.
   TFile *f = TFile::Open("Example.xml");
   TH1F *h = (TH1F*)f->Get("h");
   h->Draw();
   canvas->Print("Example.xml");
{% endhighlight %}



