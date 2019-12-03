---
layout: releases
version: 5.34/01
release_date: 2012-07-13
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Release Notes
The release notes for this release can be found [here]({{ '/download/all_releases/root-version-v5-34-00-patch-release-notes#01' | relative_url }}).

## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.34.01.source.tar.gz](https://root.cern.ch/download/root_v5.34.01.source.tar.gz) |  54M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc5 gcc4.3 | [root_v5.34.01.Linux-slc5-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.34.01.Linux-slc5-gcc4.3.tar.gz) |  48M |
| Linux slc5_amd64 gcc4.3 | [root_v5.34.01.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.34.01.Linux-slc5_amd64-gcc4.3.tar.gz) |  48M |
| Scientific Linux Cern 6_amd64 gcc4.6 | [root_v5.34.01.Linux-slc6_amd64-gcc4.6.tar.gz](https://root.cern.ch/download/root_v5.34.01.Linux-slc6_amd64-gcc4.6.tar.gz) |  48M |
| macosx106 i386 gcc 4.2 | [root_v5.34.01.macosx106-i386-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.34.01.macosx106-i386-gcc-4.2.tar.gz) |  42M |
| macosx106 gcc 4.2 | [root_v5.34.01.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.34.01.macosx106-x86_64-gcc-4.2.tar.gz) |  44M |
| Windows Visual Studio 10 (dbg) | [root_v5.34.01.win32.vc10.debug.tar.gz](https://root.cern.ch/download/root_v5.34.01.win32.vc10.debug.tar.gz) | 150M |
| Windows Visual Studio 10 | [root_v5.34.01.win32.vc10.tar.gz](https://root.cern.ch/download/root_v5.34.01.win32.vc10.tar.gz) |  59M |
| Windows Visual Studio 90 (dbg) | [root_v5.34.01.win32.vc90.debug.tar.gz](https://root.cern.ch/download/root_v5.34.01.win32.vc90.debug.tar.gz) | 146M |
| Windows Visual Studio 90 | [root_v5.34.01.win32.vc90.tar.gz](https://root.cern.ch/download/root_v5.34.01.win32.vc90.tar.gz) |  57M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-icc11-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc6-gcc46-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-icc11-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc6-gcc46-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-gcc46-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-gcc46-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.6/x86_64-slc5-gcc46-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.01/x86_64-slc5-gcc46-opt/root/bin/thisroot.sh
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
git checkout -b v5-34-01 v5-34-01
~~~
