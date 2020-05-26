---
layout: releases
version: 6.02/01
release_date: 2014-10-14
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/root-version-v6-02-00-patch-release-notes)

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.02.01.source.tar.gz](https://root.cern.ch/download/root_v6.02.01.source.tar.gz) |  94M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Scientific Linux Cern 6_amd64 gcc4.8 | [root_v6.02.01.Linux-slc6_amd64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.02.01.Linux-slc6_amd64-gcc4.8.tar.gz) | 140M |
| OsX 10.9 i386 | [root_v6.02.01.macosx64-10.9-i386.tar.gz](https://root.cern.ch/download/root_v6.02.01.macosx64-10.9-i386.tar.gz) | 127M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.01/x86_64-slc6-gcc48-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.01/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.01/x86_64-mac109-clang51-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.01

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.8/x86_64-slc6-gcc48-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.01/x86_64-slc6-gcc48-opt/root/bin/thisroot.sh
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
git checkout -b v6-02-01 v6-02-01
~~~
