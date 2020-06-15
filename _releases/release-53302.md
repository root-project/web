---
layout: releases
version: 5.33/02
release_date: 2012-03-06
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.33.02.source.tar.gz](https://root.cern.ch/download/root_v5.33.02.source.tar.gz) |  53M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc5 gcc4.3 | [root_v5.33.02.Linux-slc5-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.33.02.Linux-slc5-gcc4.3.tar.gz) |  47M |
| Linux slc5_amd64 gcc4.3 | [root_v5.33.02.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.33.02.Linux-slc5_amd64-gcc4.3.tar.gz) |  48M |
| OsX 10.7 i386 | [root_v5.33.02.macosx64-10.7-i386.tar.gz](https://root.cern.ch/download/root_v5.33.02.macosx64-10.7-i386.tar.gz) |  46M |
| macosx106 i386 gcc 4.2 | [root_v5.33.02.macosx106-i386-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.33.02.macosx106-i386-gcc-4.2.tar.gz) |  42M |
| macosx106 gcc 4.2 | [root_v5.33.02.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.33.02.macosx106-x86_64-gcc-4.2.tar.gz) |  43M |
| Windows Visual Studio 10 (dbg) | [root_v5.33.02.win32.vc10.debug.tar.gz](https://root.cern.ch/download/root_v5.33.02.win32.vc10.debug.tar.gz) | 149M |
| Windows Visual Studio 10 | [root_v5.33.02.win32.vc10.tar.gz](https://root.cern.ch/download/root_v5.33.02.win32.vc10.tar.gz) |  58M |
| Windows Visual Studio 90 (dbg) | [root_v5.33.02.win32.vc90.debug.tar.gz](https://root.cern.ch/download/root_v5.33.02.win32.vc90.debug.tar.gz) | 144M |
| Windows Visual Studio 90 | [root_v5.33.02.win32.vc90.tar.gz](https://root.cern.ch/download/root_v5.33.02.win32.vc90.tar.gz) |  56M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-slc5-icc11-dbg
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.33.02/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
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
git checkout -b v5-33-02 v5-33-02
~~~
