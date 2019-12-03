---
layout: releases
version: 6.04/12
release_date: 2015-12-04
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

## Highlights
Patch release of 6.04 with some essential fixes required by ATLAS. See the release notes for details.

## Release Notes
The release notes for this release can be found [here](https://root.cern.ch/doc/v604/release-notes.html#release-6.0412)

## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.04.12.source.tar.gz](https://root.cern.ch/download/root_v6.04.12.source.tar.gz) |  95M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.9 | [root_v6.04.12.Linux-cc7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-cc7-x86_64-gcc4.9.tar.gz) | 167M |
| Linux fedora20 gcc4.8 | [root_v6.04.12.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 144M |
| Linux fedora21 gcc4.9 | [root_v6.04.12.Linux-fedora21-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-fedora21-x86_64-gcc4.9.tar.gz) | 149M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.04.12.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-slc6-x86_64-gcc4.8.tar.gz) | 160M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.04.12.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-slc6-x86_64-gcc4.9.tar.gz) | 167M |
| Ubuntu 14 gcc4.8 | [root_v6.04.12.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.12.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 148M |
| OsX 10.9 clang60 | [root_v6.04.12.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.04.12.macosx64-10.9-clang60.dmg) | 139M |
| OsX 10.9 clang60 | [root_v6.04.12.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.04.12.macosx64-10.9-clang60.tar.gz) | 139M |
| OsX 10.10 clang70 | [root_v6.04.12.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v6.04.12.macosx64-10.10-clang70.dmg) | 139M |
| OsX 10.10 clang70 | [root_v6.04.12.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v6.04.12.macosx64-10.10-clang70.tar.gz) | 140M |
| OsX 10.11 clang70 | [root_v6.04.12.macosx64-10.11-clang70.dmg](https://root.cern.ch/download/root_v6.04.12.macosx64-10.11-clang70.dmg) | 139M |
| OsX 10.11 clang70 | [root_v6.04.12.macosx64-10.11-clang70.tar.gz](https://root.cern.ch/download/root_v6.04.12.macosx64-10.11-clang70.tar.gz) | 139M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-cc7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-mac1010-clang70-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-mac1011-clang70-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.12/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
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
git checkout -b v6-04-12 v6-04-12
~~~