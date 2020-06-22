---
layout: releases
version: 6.09/02
release_date: 2017-03-08
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

This is the first ROOT development release of the 6.09 series! It is meant to offer a preview of the many features which will be included in the 6.10 production release.

Some highlights:

   * Automatic colouring of plots. How? Check this out [here](https://root.cern/doc/master/classTHistPainter.html#HP061).
   * The [TDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html) framework landed in ROOT: it is possible to analyse data contained in ROOT trees in a functional manner taking advantage transparently of all cores of your machine
   * More building blocks for expressing parallelism: check out our [TThreadExecutor](https://root.cern/doc/master/classROOT_1_1TThreadExecutor.html) class!
   * More parallelism behind the scenes, for example parallel compression when writing to a TTree. Just let ROOT run your code in parallel: invoke [ROOT::EnableImplicitMT()](https://root.cern/doc/master/namespaceROOT.html#ade6e397b327482d267ad54de92db4b89)
   * A faster ROOT: for example lots of symbols are now hidden, TMethodCall is now twice as fast as before.
   * ClassDefInline(MyClass, 3) adds ClassDef functionality without the need to generate a dictionary, which is especially useful for scripts and other non-framework code.

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.09.02.source.tar.gz](https://root.cern.ch/download/root_v6.09.02.source.tar.gz) | 150M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.09.02.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.09.02.Linux-centos7-x86_64-gcc4.8.tar.gz) | 143M |
| Linux fedora22 gcc5.3 | [root_v6.09.02.Linux-fedora22-x86_64-gcc5.3.tar.gz](https://root.cern.ch/download/root_v6.09.02.Linux-fedora22-x86_64-gcc5.3.tar.gz) | 130M |
| Linux fedora24 gcc6.1 | [root_v6.09.02.Linux-fedora24-x86_64-gcc6.1.tar.gz](https://root.cern.ch/download/root_v6.09.02.Linux-fedora24-x86_64-gcc6.1.tar.gz) | 110M |
| Ubuntu 14 gcc4.8 | [root_v6.09.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.09.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 129M |
| Ubuntu 16 gcc5.4 | [root_v6.09.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.09.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 130M |
| OsX 10.10 clang70 | [root_v6.09.02.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v6.09.02.macosx64-10.10-clang70.dmg) | 113M |
| OsX 10.10 clang70 | [root_v6.09.02.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v6.09.02.macosx64-10.10-clang70.tar.gz) | 114M |
| OsX 10.11 clang80 | [root_v6.09.02.macosx64-10.11-clang80.dmg](https://root.cern.ch/download/root_v6.09.02.macosx64-10.11-clang80.dmg) | 118M |
| OsX 10.11 clang80 | [root_v6.09.02.macosx64-10.11-clang80.tar.gz](https://root.cern.ch/download/root_v6.09.02.macosx64-10.11-clang80.tar.gz) | 118M |
| OsX 10.12 clang80 | [root_v6.09.02.macosx64-10.12-clang80.dmg](https://root.cern.ch/download/root_v6.09.02.macosx64-10.12-clang80.dmg) | 125M |
| OsX 10.12 clang80 | [root_v6.09.02.macosx64-10.12-clang80.tar.gz](https://root.cern.ch/download/root_v6.09.02.macosx64-10.12-clang80.tar.gz) | 125M |



## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/ubuntu14-x86_64-gcc4.8
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/x86_64-mac1011-clang73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/x86_64-mac1010-clang70-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/x86_64-mac1012-clang80-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS

*From a centos7 node, for example lxplus7*:
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.09.02/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-09-02 v6-09-02
~~~

