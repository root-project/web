---
title: Developing portable ROOT macros
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


Portable ROOT macros run both with the Cling interpreter and ACLiC (*Compiling Your Code*).

Therefore, it recommended not to use the Cling extensions and program around the Cling limitations.

If it is not possible to program around the Cling limitations, use the C preprocessor symbols
defined for Cling and `rootcling`:

  - `__CLING__` is defined for both ROOT and `rootcling`.

  - `__ROOTCLING__` (and `__MAKECINT__` for backward compatibility) is only defined in rootcling.

Use `!defined(__CLING__) || defined(__ROOTCLING__)` to bracket code that needs to be seen by
the compiler and `rootcling`, but will be invisible to the interpreter.

-- or ­--

Use `!defined(__CLING__)` to bracket code that should be seen only by the compiler and not by Cling nor `rootcling`.

### Example

Hiding the declaration and initialization of the array `gArray `from both Cling and `rootcling`:

```
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #endif
```

Cling and `rootcling` will ignore all statements between the `#if !defined (__CLING__)`
and `#endif`. Because ACLiC calls `rootcling` to build a dictionary, the declaration of
`gArray` will not be included in the dictionary, and consequently, `gArray` will not be
available at the command line even if ACLiC is used.

if you want use the ROOT macro in the interpreter, you have to bracket the usage of `gArray`
between the `#if`'s, since the definition is not visible.

```
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #elif defined(__ROOTCLING__)
   int gArray[];
   #endif
```

`gArray` will be visible to `rootcling`, but still not visible to Cling. If you use ACLiC,
`gArray` will be available at the command line.

## Included header files

It is recommended to write ROOT macros with the needed include statements, even a few header
files are not handled correctly by Cling.

You can include following types of headers in the interpreted and compiled mode:

  - The subset of standard C/C++ headers defined in `$ROOTSYS/Cling/include`.

  - Headers of classes defined in a previously loaded library (including ROOT own). The
  defined class must have a name known to ROOT (i.e. a class with a `ClassDef`).

Hiding header files from rootcling that are necessary for the compiler but optional for
the interpreter can lead to a fatal error.

### Example

```
   #ifndef __CLING__
   #include "TTree.h"
   #else
   class TTree;
   #endif
   class subTree : public TTree {
   };
```

In this case, rootcling does not have enough information about the
[TTree](https://root.cern/doc/master/classTTree.html) class to produce the correct
dictionary file.

If you try this, rootcling and compiling will be error free. However, instantiating a
subTree object from the Cling command line will cause a fatal error.

In general, it is recommended to let rootcling see as many header files as possible.