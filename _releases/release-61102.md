---
layout: releases
version: 6.11/02
release_date:  2017-10-06
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Highlights

This is a development release. We created it to expose to users part of the enourmous amount of new functionalities which have been integrated in ROOT and will be available in ROOT 6.12/00.
These are some of the highlights of the new features you can find in ROOT 6.11/02:

- Even more endemic parallelism - Among the many things, a parallelised hadd (**hadd -j**) and a parallel enabled prompt: just try it **root -t**!
- An enhanced TDataFrame. Now it's possible to cache datasets in memory, to create readers for any data format (not just ROOT) thanks to the new TDataSource interface, much faster type inference via an improved jitting, a plethora of new options for saving  datasets on disk.
- The LZ4 compression algorithm can be now used for faster reading and writing.
- Writing files in parallel with TBufferMerger has become much faster and scalable.

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.11.02.source.tar.gz](https://root.cern.ch/download/root_v6.11.02.source.tar.gz) | 153M |


## Binary distributions

Note that this release supports osx 10.13 and XCode9 only if built from sources.

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.11.02.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.11.02.Linux-centos7-x86_64-gcc4.8.tar.gz) | 130M |
| Linux fedora22 gcc5.3 | [root_v6.11.02.Linux-fedora22-x86_64-gcc5.3.tar.gz](https://root.cern.ch/download/root_v6.11.02.Linux-fedora22-x86_64-gcc5.3.tar.gz) | 117M |
| Ubuntu 16 gcc5.4 | [root_v6.11.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.11.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 117M |
| OsX 10.11 clang80 | [root_v6.11.02.macosx64-10.11-clang80.dmg](https://root.cern.ch/download/root_v6.11.02.macosx64-10.11-clang80.dmg) | 116M |
| OsX 10.11 clang80 | [root_v6.11.02.macosx64-10.11-clang80.tar.gz](https://root.cern.ch/download/root_v6.11.02.macosx64-10.11-clang80.tar.gz) | 116M |
| OsX 10.12 clang81 | [root_v6.11.02.macosx64-10.12-clang81.dmg](https://root.cern.ch/download/root_v6.11.02.macosx64-10.12-clang81.dmg) | 119M |
| OsX 10.12 clang81 | [root_v6.11.02.macosx64-10.12-clang81.tar.gz](https://root.cern.ch/download/root_v6.11.02.macosx64-10.12-clang81.tar.gz) | 119M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-mac1011-clang80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-fedora22-gcc53-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-mac1012-clang80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS on LXPLUS7

~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.11.02/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~
