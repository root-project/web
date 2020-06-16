---
layout: releases
version: 6.04/00
release_date: 2015-06-02
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

The ROOT team is proud to announce the release of ROOT 6.04/00 featuring many usability enhancements. Highlights of this release include:

*   a new `TFormula` implementation that uses cling
*   I/O of C++11 containers
*   TTreeCache is now enabled by default to accelerate analyses
*   many new beautiful palettes ([kBird!](https://root.cern/doc/master/classTColor.html#C06)) that are optimized against
[monotonic perceptual ordering]( {% post_url 2014-05-31-rainbow-color-map %} )

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/root/html604/notes/release-notes.html)

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.04.00.source.tar.gz](https://root.cern.ch/download/root_v6.04.00.source.tar.gz) |  95M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.04.00.Linux-cc7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-cc7-x86_64-gcc4.8.tar.gz) | 161M |
| CentOS Cern 7 gcc4.9 | [root_v6.04.00.Linux-cc7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-cc7-x86_64-gcc4.9.tar.gz) | 166M |
| Linux fedora20 gcc4.8 | [root_v6.04.00.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 147M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.04.00.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-slc6-x86_64-gcc4.8.tar.gz) | 160M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.04.00.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-slc6-x86_64-gcc4.9.tar.gz) | 166M |
| Ubuntu 14 gcc4.8 | [root_v6.04.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 151M |
| OsX 10.8 clang51 | [root_v6.04.00.macosx64-10.8-clang51.dmg](https://root.cern.ch/download/root_v6.04.00.macosx64-10.8-clang51.dmg) | 141M |
| OsX 10.8 clang51 | [root_v6.04.00.macosx64-10.8-clang51.tar.gz](https://root.cern.ch/download/root_v6.04.00.macosx64-10.8-clang51.tar.gz) | 142M |
| OsX 10.9 clang60 | [root_v6.04.00.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.04.00.macosx64-10.9-clang60.dmg) | 139M |
| OsX 10.9 clang60 | [root_v6.04.00.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.04.00.macosx64-10.9-clang60.tar.gz) | 140M |
| OsX 10.10 clang61 | [root_v6.04.00.macosx64-10.10-clang61.dmg](https://root.cern.ch/download/root_v6.04.00.macosx64-10.10-clang61.dmg) | 142M |
| OsX 10.10 clang61 | [root_v6.04.00.macosx64-10.10-clang61.tar.gz](https://root.cern.ch/download/root_v6.04.00.macosx64-10.10-clang61.tar.gz) | 142M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-cc7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-mac1010-clang61-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-cc7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-mac108-clang51-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.00/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
~~~

## Direct Git repository access
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git tag -l
git checkout -b v6-04-00 v6-04-00
~~~
