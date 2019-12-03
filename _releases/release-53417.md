---
layout: releases
version: 5.34/17
release_date: 2014-02-24
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Release Notes
The release notes for this release can be found [here]({{ '/download/all_releases/root-version-v5-34-00-patch-release-notes#17' | relative_url }}).

## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.34.17.source.tar.gz](https://root.cern.ch/download/root_v5.34.17.source.tar.gz) |  64M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc5 gcc4.3 | [root_v5.34.17.Linux-slc5-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.34.17.Linux-slc5-gcc4.3.tar.gz) |  56M |
| Linux slc5_amd64 gcc4.3 | [root_v5.34.17.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.34.17.Linux-slc5_amd64-gcc4.3.tar.gz) |  57M |
| Scientific Linux Cern 6_amd64 gcc4.4 | [root_v5.34.17.Linux-slc6_amd64-gcc4.4.tar.gz](https://root.cern.ch/download/root_v5.34.17.Linux-slc6_amd64-gcc4.4.tar.gz) |  54M |
| Scientific Linux Cern 6_amd64 gcc4.7 | [root_v5.34.17.Linux-slc6_amd64-gcc4.7.tar.gz](https://root.cern.ch/download/root_v5.34.17.Linux-slc6_amd64-gcc4.7.tar.gz) |  57M |
| Scientific Linux Cern 6_amd64 gcc4.8 | [root_v5.34.17.Linux-slc6_amd64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.17.Linux-slc6_amd64-gcc4.8.tar.gz) |  57M |
| Windows Visual Studio 10 (dbg) | [root_v5.34.17.win32.vc10.debug.tar.gz](https://root.cern.ch/download/root_v5.34.17.win32.vc10.debug.tar.gz) | 147M |
| Windows Visual Studio 10 | [root_v5.34.17.win32.vc10.tar.gz](https://root.cern.ch/download/root_v5.34.17.win32.vc10.tar.gz) |  69M |
| Windows Visual Studio 11 (dbg) | [root_v5.34.17.win32.vc11.debug.tar.gz](https://root.cern.ch/download/root_v5.34.17.win32.vc11.debug.tar.gz) | 161M |
| Windows Visual Studio 11 | [root_v5.34.17.win32.vc11.tar.gz](https://root.cern.ch/download/root_v5.34.17.win32.vc11.tar.gz) |  71M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc5-gcc46-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc5-gcc47-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc46-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc47-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/i686-slc6-gcc47-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc5-gcc46-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc46-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc48-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc5-gcc47-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc47-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/i686-slc5-gcc47-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/i686-slc6-gcc47-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/i686-slc5-gcc47-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.8/x86_64-slc6-gcc48-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.17/x86_64-slc6-gcc48-opt/root/bin/thisroot.sh
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
git checkout -b v5-34-17 v5-34-17
~~~
