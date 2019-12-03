---
layout: releases
version: 5.28/00e
release_date: 2011-06-21
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---



## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.28.00e.source.tar.gz](https://root.cern.ch/download/root_v5.28.00e.source.tar.gz) |  30M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc5 gcc4.3 | [root_v5.28.00e.Linux-slc5-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.28.00e.Linux-slc5-gcc4.3.tar.gz) |  54M |
| Linux slc5_amd64 gcc4.3 | [root_v5.28.00e.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.28.00e.Linux-slc5_amd64-gcc4.3.tar.gz) |  55M |
| macosx106 i386 gcc 4.2 | [root_v5.28.00e.macosx106-i386-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.28.00e.macosx106-i386-gcc-4.2.tar.gz) |  44M |
| macosx106 gcc 4.2 | [root_v5.28.00e.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.28.00e.macosx106-x86_64-gcc-4.2.tar.gz) |  44M |
| win32 (dbg) | [root_v5.28.00e.win32.debug.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.debug.tar.gz) | 108M |
| win32 | [root_v5.28.00e.win32.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.tar.gz) |  53M |
| Windows Visual Studio 10 (dbg) | [root_v5.28.00e.win32.vc10.debug.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.vc10.debug.tar.gz) | 145M |
| Windows Visual Studio 10 | [root_v5.28.00e.win32.vc10.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.vc10.tar.gz) |  56M |
| Windows Visual Studio 90 (dbg) | [root_v5.28.00e.win32.vc90.debug.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.vc90.debug.tar.gz) | 140M |
| Windows Visual Studio 90 | [root_v5.28.00e.win32.vc90.tar.gz](https://root.cern.ch/download/root_v5.28.00e.win32.vc90.tar.gz) |  54M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i686-winxp-vc9-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-gcc44-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i686-slc5-icc11-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i686-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i386-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-icc11-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/i386-mac106-gcc42-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.4/x86_64-slc5-gcc44-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00e/x86_64-slc5-gcc44-opt/root/bin/thisroot.sh
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
git checkout -b v5-28-00e v5-28-00e
~~~
