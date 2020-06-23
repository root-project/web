---
layout: releases
version: 5.27/06
release_date: 2010-09-29
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.27.06.source.tar.gz](https://root.cern/download/root_v5.27.06.source.tar.gz) |  28M |
| root_v5.27.06a.source | [root_v5.27.06a.source.tar.gz](https://root.cern/download/root_v5.27.06a.source.tar.gz) |  28M |
| root_v5.27.06b.source | [root_v5.27.06b.source.tar.gz](https://root.cern/download/root_v5.27.06b.source.tar.gz) |  28M |
| root_v5.27.06c.source | [root_v5.27.06c.source.tar.gz](https://root.cern/download/root_v5.27.06c.source.tar.gz) |  28M |
| root_v5.27.06d.source | [root_v5.27.06d.source.tar.gz](https://root.cern/download/root_v5.27.06d.source.tar.gz) |  28M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc4 gcc3.4 | [root_v5.27.06.Linux-slc4-gcc3.4.tar.gz](https://root.cern/download/root_v5.27.06.Linux-slc4-gcc3.4.tar.gz) |  53M |
| Linux slc4_amd64 gcc3.4 | [root_v5.27.06.Linux-slc4_amd64-gcc3.4.tar.gz](https://root.cern/download/root_v5.27.06.Linux-slc4_amd64-gcc3.4.tar.gz) |  55M |
| Linux slc5 gcc4.3 | [root_v5.27.06.Linux-slc5-gcc4.3.tar.gz](https://root.cern/download/root_v5.27.06.Linux-slc5-gcc4.3.tar.gz) |  53M |
| Linux slc5_amd64 gcc4.3 | [root_v5.27.06.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern/download/root_v5.27.06.Linux-slc5_amd64-gcc4.3.tar.gz) |  54M |
| macosx powerpc gcc 4.0 | [root_v5.27.06.macosx-powerpc-gcc-4.0.tar.gz](https://root.cern/download/root_v5.27.06.macosx-powerpc-gcc-4.0.tar.gz) |  42M |
| macosx106 i386 gcc 4.2 | [root_v5.27.06.macosx106-i386-gcc-4.2.tar.gz](https://root.cern/download/root_v5.27.06.macosx106-i386-gcc-4.2.tar.gz) |  42M |
| macosx106 gcc 4.2 | [root_v5.27.06.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern/download/root_v5.27.06.macosx106-x86_64-gcc-4.2.tar.gz) |  42M |
| solarisCC5 5.11 i386 | [root_v5.27.06.solarisCC5-5.11-i386.tar.gz](https://root.cern/download/root_v5.27.06.solarisCC5-5.11-i386.tar.gz) |  51M |
| win32 (dbg) | [root_v5.27.06.win32.debug.tar.gz](https://root.cern/download/root_v5.27.06.win32.debug.tar.gz) | 104M |
| win32 | [root_v5.27.06.win32.tar.gz](https://root.cern/download/root_v5.27.06.win32.tar.gz) |  51M |
| Windows Visual Studio 90 (dbg) | [root_v5.27.06.win32.vc90.debug.tar.gz](https://root.cern/download/root_v5.27.06.win32.vc90.debug.tar.gz) | 135M |
| Windows Visual Studio 90 | [root_v5.27.06.win32.vc90.tar.gz](https://root.cern/download/root_v5.27.06.win32.vc90.tar.gz) |  53M |
| win32gcc gcc 4.3 | [root_v5.27.06.win32gcc-gcc-4.3.tar.gz](https://root.cern/download/root_v5.27.06.win32gcc-gcc-4.3.tar.gz) |  42M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/i686-winxp-vc9-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/win32_vc71_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/slc4_ia32_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/slc4_ia32_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/i386-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/i386-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/slc4_amd64_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/slc4_amd64_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/x86_64-slc5-gcc43-dbg
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.27.06/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
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
git checkout -b v5-27-06 v5-27-06
~~~
