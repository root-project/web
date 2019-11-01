---
title: Adding a class to ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can extend ROOT with your own classes.

When defining a class, it inherits from [TObject](https://root.cern/doc/master/classTObject.html).

## Defining a class

The definition of a class requires the following steps:

  - Inheriting from [TObject](https://root.cern/doc/master/classTObject.html).

  - Integrating the class to ROOT.

  - Calling the `ClassImp` macro.

  - Providing a constructor.

The steps are explained in the following sections, followed by an example.

### Inheriting from TObject

The [TObject](https://root.cern/doc/master/classTObject.html) class provides the default behaviour and protocols for the objects in the ROOT system. The [TObject](https://root.cern/doc/master/classTObject.html) class is the primary interface to classes providing object I/O (writing the class into a ROOT file), error handling, inspection, introspection, and drawing.

Therefore, your class should inherit from [TObject](https://root.cern/doc/master/classTObject.html).

### Integrating the class to ROOT

Add the following line to your class header file, to integrate your class to ROOT:

```
ClassDef(ClassName,ClassVersionID)
```

The `ClassVersionID` is used by the ROOT I/O system. It is written on the output stream and during reading You can check this `ClassVersionID` during reading and take appropriate action depending on the value of ClassVersionID.
Every time you change the data members of a class, increase its `ClassVersionID` by 1.
Set `ClassVersionID` >= 1.
Set `ClassVersionID` = 0 in case you do not need object I/O.

_**Example**_

In the `TLine.h` file:

```
ClassDef(TLine,1);
```

### Calling the ClassImp macro

Call the `ClassImp` macro to give your class Run Time Type Identification (RTTI) and full I/O capabilities. In addition, you can generate properly documentation for your class using [THtml](https://root.cern/doc/master/classTHtml.html).

Add the following line to your class header file:

```
ClassImp(ClassName);
```

_**Example**_

In the `Tline.cxx` file:

```
ClassImp(TLine)
```

### Constructors

ROOT requires for every class to have one of the following constructors:

  - **Default constructor**
   A constructor with zero parameters or with one or more parameters all with default values.

  - **I/O constructor**
   A constructor with exactly one parameter which type is a pointer to one of the types marked as an `ioctortype`.

The default constructor or I/O constructor is called whenever an object is being read from a ROOT database.

_**Example for a class**_

```
#include "TObject.h"

// Define the ABC class and make it inherit from TObject. Then the ABC class can also be written to a ROOT file.
class ABC: public TObject {
public:
Float_t a, b, c, p;
ABC() : a(0), b(0), c(0), p(0){};

//Integrating the ABC class to ROOT.
ClassDef (ABC,1)
};

//Call the ClassImp macro to give the ABC class RTTI and full I/O capabilities.

#if !defined(__CLING__)
ClassImp(ABC);
#endif
```


## Adding a class with a shared library

(to be added)

## Generating directories with rootcling

`rootcling` takes as input a set of headers and generates as output the dictionary C++ code and a `pcm` file.

      rootcling *output*.cxx -c *header_1*.h *header_2*.h

The `pcm` file is needed for the correct functioning of the dictionary at runtime. It should be located in the directory where the shared library is installed in which the compiled dictionary resides.

> **Note**
>
> Dictionaries that are used within the same project must have unique names.
>
> Compiled object files relative to dictionary source files cannot reside in the same library or in two libraries loaded by the same application if the original source files have the same name.

_**Example**_

In the first step, a `TEvent` and a `TTrack` class is defined. Next an event object is created to add tracks to it. The track objects have a pointer to their event. This shows that the I/O system correctly handles circular references.

In the second step, the `TEvent `and the `TTrack `call are implemented. After that you can use `rootcling` to generate the directory. This generates the `eventdict.cxx` file.

**The TEvent.h header**
```
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
```

**The TTrack.h header**
```
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
```

**Implementation of TEvent and TTrack class**
```
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
```

**Using rootcling to generate the dictionaries**
```
rootcling eventdict.cxx -c TEvent.h TTrack.h
```

**eventdict.cxx - the generated dictionary**
```
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
```

`Streamer()` is used to stream an object to/from a [TBuffer](https://root.cern/doc/master/classTBuffer.html). The `TBuffer` class overloads `operator<<() `and `operator>>() `for all basic types and for pointers to objects. These operators write and read from the buffer and take care of any needed byte swapping to make the buffer machine independent. During writing, the `TBuffer` keeps track of the objects that have been written and multiple references to the same object are replaced by an index. In addition, the class information of the object is stored.

`ShowMembers()` is used by the `Dump()` and `Inspect()` methods of [TObject](https://root.cern/doc/master/classTObject.html).
