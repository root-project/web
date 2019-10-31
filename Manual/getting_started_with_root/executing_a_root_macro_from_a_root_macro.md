---
title: Executing a ROOT macro from a ROOT macro
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can execute a RROT macro conditionally inside another ROOT macro.

Call the interpreter [`TROOT::ProcessLine()`](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5).

`ProcessLine()` takes a parameter, which is a pointer to an int or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
This contains the error as defined in enum `TInterpreter::EErrorCode` with `TInterpreter::kSuccess`
as being the value for a successful execution.

### Example

The example `$ROOTSYS/tutorials/tree/cernstaff.C` calls a macro to build a ROOT file, if it does not exist.

```
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
      gROOT->ProcessLine(".x cernbuild.C");
   }
```