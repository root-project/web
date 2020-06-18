---
title:  "Development release 6.09/02 is out!"
layout: archive
author:
---

This is the first ROOT development release of the 6.09 series! It is meant to offer a
preview of the many features which will be included in the 6.10 production release.

This is the first ROOT development release of the 6.09 series! It is meant to offer a preview of the many features which will be included in the 6.10 production release.

Some highlights:

   * Automatic colouring of plots. How? Check this out [here](https://root.cern/doc/master/classTHistPainter.html#HP061).
   * The [TDataFrame](https://root.cern/doc/master/classROOT_1_1Experimental_1_1TDataFrame.html) framework landed in ROOT: it is possible to analyse data contained in ROOT trees in a functional manner taking advantage transparently of all cores of your machine
   * More building blocks for expressing parallelism: check out our [TThreadExecutor](https://root.cern/doc/master/classROOT_1_1TThreadExecutor.html) class!
   * More parallelism behind the scenes, for example parallel compression when writing to a TTree. Just let ROOT run your code in parallel: invoke [ROOT::EnableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#ade6e397b327482d267ad54de92db4b89)
   * A faster ROOT: for example lots of symbols are now hidden, TMethodCall is now twice as fast as before.
   * ClassDefInline(MyClass, 3) adds ClassDef functionality without the need to generate a dictionary, which is especially useful for scripts and other non-framework code.
