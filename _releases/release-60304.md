---
layout: releases
version: 6.03/04
release_date: 2015-04-22
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.03.04.source.tar.gz](https://root.cern.ch/download/root_v6.03.04.source.tar.gz) |  93M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.03.04.Linux-cc7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.03.04.Linux-cc7-x86_64-gcc4.8.tar.gz) | 157M |
| Linux fedora20 gcc4.8 | [root_v6.03.04.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.03.04.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 142M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.03.04.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.03.04.Linux-slc6-x86_64-gcc4.8.tar.gz) | 156M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.03.04.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.03.04.Linux-slc6-x86_64-gcc4.9.tar.gz) | 162M |
| Ubuntu 14 gcc4.8 | [root_v6.03.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.03.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 142M |
| OsX 10.8 clang51 | [root_v6.03.04.macosx64-10.8-clang51.dmg](https://root.cern.ch/download/root_v6.03.04.macosx64-10.8-clang51.dmg) | 137M |
| OsX 10.8 clang51 | [root_v6.03.04.macosx64-10.8-clang51.tar.gz](https://root.cern.ch/download/root_v6.03.04.macosx64-10.8-clang51.tar.gz) | 138M |
| OsX 10.9 clang60 | [root_v6.03.04.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.03.04.macosx64-10.9-clang60.dmg) | 136M |
| OsX 10.9 clang60 | [root_v6.03.04.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.03.04.macosx64-10.9-clang60.tar.gz) | 136M |
| OsX 10.10 clang61 | [root_v6.03.04.macosx64-10.10-clang61.dmg](https://root.cern.ch/download/root_v6.03.04.macosx64-10.10-clang61.dmg) | 138M |
| OsX 10.10 clang61 | [root_v6.03.04.macosx64-10.10-clang61.tar.gz](https://root.cern.ch/download/root_v6.03.04.macosx64-10.10-clang61.tar.gz) | 138M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-mac1010-clang61-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-slc6-gcc48-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-mac108-clang51-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-cc7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-cc7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-slc6-gcc49-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-cc7-gcc48-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-cc7-gcc49-dbg
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.03.04/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
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
git checkout -b v6-03-04 v6-03-04
~~~
