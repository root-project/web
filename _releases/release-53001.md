---
layout: releases
version: 5.30/01
release_date: 2011-08-18
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/root/html530/notes/release-notes.html#patch-releases)

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.30.01.source.tar.gz](https://root.cern/download/root_v5.30.01.source.tar.gz) |  39M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc5 gcc4.3 | [root_v5.30.01.Linux-slc5-gcc4.3.tar.gz](https://root.cern/download/root_v5.30.01.Linux-slc5-gcc4.3.tar.gz) |  55M |
| Linux slc5_amd64 gcc4.3 | [root_v5.30.01.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern/download/root_v5.30.01.Linux-slc5_amd64-gcc4.3.tar.gz) |  56M |
| macosx106 i386 gcc 4.2 | [root_v5.30.01.macosx106-i386-gcc-4.2.tar.gz](https://root.cern/download/root_v5.30.01.macosx106-i386-gcc-4.2.tar.gz) |  45M |
| macosx106 gcc 4.2 | [root_v5.30.01.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern/download/root_v5.30.01.macosx106-x86_64-gcc-4.2.tar.gz) |  45M |
| win32 (dbg) | [root_v5.30.01.win32.debug.tar.gz](https://root.cern/download/root_v5.30.01.win32.debug.tar.gz) | 110M |
| win32 | [root_v5.30.01.win32.tar.gz](https://root.cern/download/root_v5.30.01.win32.tar.gz) |  54M |
| Windows Visual Studio 10 (dbg) | [root_v5.30.01.win32.vc10.debug.tar.gz](https://root.cern/download/root_v5.30.01.win32.vc10.debug.tar.gz) | 147M |
| Windows Visual Studio 10 | [root_v5.30.01.win32.vc10.tar.gz](https://root.cern/download/root_v5.30.01.win32.vc10.tar.gz) |  57M |
| Windows Visual Studio 90 (dbg) | [root_v5.30.01.win32.vc90.debug.tar.gz](https://root.cern/download/root_v5.30.01.win32.vc90.debug.tar.gz) | 143M |
| Windows Visual Studio 90 | [root_v5.30.01.win32.vc90.tar.gz](https://root.cern/download/root_v5.30.01.win32.vc90.tar.gz) |  56M |
| win32gcc gcc 4.3 | [root_v5.30.01.win32gcc-gcc-4.3.tar.gz](https://root.cern/download/root_v5.30.01.win32gcc-gcc-4.3.tar.gz) |  44M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i686-winxp-vc9-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-slc5-icc11-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i686-slc5-icc11-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i686-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i386-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/i386-mac106-gcc42-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.01/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
~~~

## Direct Git repository access
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git tag -l
git checkout -b v5-30-01 v5-30-01
~~~
