---
layout: releases
version: 6.10/00
release_date: 2017-06-13
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

This is the first release of the 6.10 production series. It includes a number of new features and here are some highlights:

   * Automatic colouring of plots. How? Check this out [here](https://root.cern/doc/master/classTHistPainter.html#HP061).
   * The [TDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) framework landed in ROOT: it is possible to analyse data contained in ROOT trees in a functional manner taking advantage transparently of all cores of your machine
   * More building blocks for expressing parallelism: check out our [TThreadExecutor](https://root.cern/doc/v610/classROOT_1_1TThreadExecutor.html) class!
   * More parallelism behind the scenes, for example parallel compression when writing to a TTree. Just let ROOT run your code in parallel: invoke [ROOT::EnableImplicitMT()](https://root.cern/doc/v610/namespaceROOT.html#ade6e397b327482d267ad54de92db4b89)
   * A faster ROOT: for example lots of symbols are now hidden, TMethodCall is now twice as fast as before.
   * ClassDefInline(MyClass, 3) adds ClassDef functionality without the need to generate a dictionary, which is especially useful for scripts and other non-framework code.

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v610/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.10.00.source.tar.gz](https://root.cern.ch/download/root_v6.10.00.source.tar.gz) | 150M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.10.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.10.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 146M |
| Linux fedora22 gcc5.3 | [root_v6.10.00.Linux-fedora22-x86_64-gcc5.3.tar.gz](https://root.cern.ch/download/root_v6.10.00.Linux-fedora22-x86_64-gcc5.3.tar.gz) | 133M |
| Linux fedora24 gcc6.1 | [root_v6.10.00.Linux-fedora24-x86_64-gcc6.1.tar.gz](https://root.cern.ch/download/root_v6.10.00.Linux-fedora24-x86_64-gcc6.1.tar.gz) | 113M |
| Ubuntu 14 gcc4.8 | [root_v6.10.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.10.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 131M |
| Ubuntu 16 gcc5.4 | [root_v6.10.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.10.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 133M |
| OsX 10.10 clang70 | [root_v6.10.00.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v6.10.00.macosx64-10.10-clang70.dmg) | 115M |
| OsX 10.10 clang70 | [root_v6.10.00.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v6.10.00.macosx64-10.10-clang70.tar.gz) | 116M |
| OsX 10.11 clang80 | [root_v6.10.00.macosx64-10.11-clang80.dmg](https://root.cern.ch/download/root_v6.10.00.macosx64-10.11-clang80.dmg) | 120M |
| OsX 10.11 clang80 | [root_v6.10.00.macosx64-10.11-clang80.tar.gz](https://root.cern.ch/download/root_v6.10.00.macosx64-10.11-clang80.tar.gz) | 120M |
| OsX 10.12 clang80 | [root_v6.10.00.macosx64-10.12-clang80.dmg](https://root.cern.ch/download/root_v6.10.00.macosx64-10.12-clang80.dmg) | 123M |
| OsX 10.12 clang80 | [root_v6.10.00.macosx64-10.12-clang80.tar.gz](https://root.cern.ch/download/root_v6.10.00.macosx64-10.12-clang80.tar.gz) | 123M |



## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-mac1012-clang80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-mac1010-clang70-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-mac1011-clang80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-fedora22-gcc53-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-fedora24-gcc61-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/contrib/gcc/4.8/x86_64-centos7-gcc48-opt/setup.sh
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.10.00/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-10-00 v6-10-00
~~~
