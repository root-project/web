---
title: "Interacting with Shared Libraries:rootcling"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Not only can cling interpret C++, it can also call functions inside libraries! But it
needs a bit of help: the dictionary. These dictionaries are also needed to write a class
to a ROOT file.

## Dictionaries

A dictionary ("reflection database") contains information about the types and functions
that are available in a library.

ROOT's dictionary consists of a source file which contains the type information needed by
cling and ROOT's I/O subsystem. This source file needs to be generated from the library's
headers and then compiled, linked and loaded - only then does cling and ROOT know what's
inside a library.

## Using ACLiC to generate dictionaries

ROOT can automatically generate dictionaries for you, given a header file. For that just run

```
.L MyHeader.h+
```

The "+" at the end (ACLiC) invokes the dictionary generator and all the rest.


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
  - `Linkdef.h` is the magic file that steers rootcling; [it's worth its own paragraph!](#selecting-dictionary-entries-linkdefh)


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

## Selecting Dictionary Entries: Linkdef.h

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

### The End

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
