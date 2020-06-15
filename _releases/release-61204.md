---
layout: releases
version: 6.12/04
release_date: 2017-12-13
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

This is the first version of the v6.12 release branch! (Who likes "00"-releases anyway? And 02 had a fundamental issue fixed right after the tag.)

Here are a couple of the main news items:

* TDataFrame has new operations, e.g. storing a tree into a new file, possibly adding new branches and selecting entries.
* More supported platforms: Xcode 9.2 on MacOS 10.13, new clang, new GCC; partial support for C++17. (Windows: we are getting there, 2018 is the year!)
* Improved multi-threading capabilities: e.g. `TH1::Fit()` can evaluate in parallel and supports vectorization.
* Invoking root with `root -t` enables multi-threaded execution for internal operations - faster results!
* Convolution and normalized sums of `TF1`s.
* Several improvements in TMVA
* auto-coloring ("PFC", "PLC", "PMC" options) now also available for `TF1`
* list initialization for PyROOT: C++'s `f({"name", "title", 64, -4, 4})` (calling `void f(const TH1F& h)`) can now be invoked as `f(('name', 'title', 64, -4, 4))` in Python.
* lots of new supported classes and options in the JavaScript ROOT drawing and I/O library JSROOT.

**NOTE** that this release has a bug in GL / Eve that will be fixed shortly; see [ROOT-9158](https://sft.its.cern.ch/jira/browse/ROOT-9158)

For all details, see the release notes:

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v612/release-notes.html#release-6.1204).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.12.04.source.tar.gz](https://root.cern.ch/download/root_v6.12.04.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.12.04.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.12.04.Linux-centos7-x86_64-gcc4.8.tar.gz) | 134M |
| Linux fedora26 gcc7.2 | [root_v6.12.04.Linux-fedora26-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.12.04.Linux-fedora26-x86_64-gcc7.2.tar.gz) | 121M |
| Linux fedora27 gcc7.2 | [root_v6.12.04.Linux-fedora27-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.12.04.Linux-fedora27-x86_64-gcc7.2.tar.gz) | 121M |
| Ubuntu 14 gcc4.8 | [root_v6.12.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.12.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 119M |
| Ubuntu 16 gcc5.4 | [root_v6.12.04.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.12.04.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 121M |
| OsX 10.12 clang90 | [root_v6.12.04.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.12.04.macosx64-10.12-clang90.dmg) | 125M |
| OsX 10.12 clang90 | [root_v6.12.04.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.12.04.macosx64-10.12-clang90.tar.gz) | 125M |
| OsX 10.13 clang90 | [root_v6.12.04.macosx64-10.13-clang90.dmg](https://root.cern.ch/download/root_v6.12.04.macosx64-10.13-clang90.dmg) | 123M |
| OsX 10.13 clang90 | [root_v6.12.04.macosx64-10.13-clang90.tar.gz](https://root.cern.ch/download/root_v6.12.04.macosx64-10.13-clang90.tar.gz) | 123M |



## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-fedora26-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-fedora27-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-mac1013-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-mac1012-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.12.04/x86_64-ubuntu16-gcc54-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-12-04 v6-12-04
~~~

