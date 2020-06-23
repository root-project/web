---
layout: releases
version: 6.02/10
release_date: 2015-05-29
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Note

The release notes for this release can be found [here](https://root.cern/root-version-v6-02-00-patch-release-notes)

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.02.10.source.tar.gz](https://root.cern/download/root_v6.02.10.source.tar.gz) |  95M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.02.10.Linux-cc7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.02.10.Linux-cc7-x86_64-gcc4.8.tar.gz) | 148M |
| CentOS Cern 7 gcc4.9 | [root_v6.02.10.Linux-cc7-x86_64-gcc4.9.tar.gz](https://root.cern/download/root_v6.02.10.Linux-cc7-x86_64-gcc4.9.tar.gz) | 153M |
| Linux fedora20 gcc4.8 | [root_v6.02.10.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.02.10.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 132M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.02.10.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.02.10.Linux-slc6-x86_64-gcc4.8.tar.gz) | 147M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.02.10.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern/download/root_v6.02.10.Linux-slc6-x86_64-gcc4.9.tar.gz) | 152M |
| Ubuntu 14 gcc4.8 | [root_v6.02.10.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.02.10.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 138M |
| OsX 10.8 clang51 | [root_v6.02.10.macosx64-10.8-clang51.dmg](https://root.cern/download/root_v6.02.10.macosx64-10.8-clang51.dmg) | 133M |
| OsX 10.8 clang51 | [root_v6.02.10.macosx64-10.8-clang51.tar.gz](https://root.cern/download/root_v6.02.10.macosx64-10.8-clang51.tar.gz) | 133M |
| OsX 10.9 clang60 | [root_v6.02.10.macosx64-10.9-clang60.dmg](https://root.cern/download/root_v6.02.10.macosx64-10.9-clang60.dmg) | 131M |
| OsX 10.9 clang60 | [root_v6.02.10.macosx64-10.9-clang60.tar.gz](https://root.cern/download/root_v6.02.10.macosx64-10.9-clang60.tar.gz) | 132M |
| OsX 10.10 clang61 | [root_v6.02.10.macosx64-10.10-clang61.dmg](https://root.cern/download/root_v6.02.10.macosx64-10.10-clang61.dmg) | 133M |
| OsX 10.10 clang61 | [root_v6.02.10.macosx64-10.10-clang61.tar.gz](https://root.cern/download/root_v6.02.10.macosx64-10.10-clang61.tar.gz) | 133M |
| OsX clang61 | [root_v6.02.10.macosx64-clang61.dmg](https://root.cern/download/root_v6.02.10.macosx64-clang61.dmg) | 133M |
| OsX clang61 | [root_v6.02.10.macosx64-clang61.tar.gz](https://root.cern/download/root_v6.02.10.macosx64-clang61.tar.gz) | 133M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-cc7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-mac1010-clang61-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.10/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
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
git checkout -b v6-02-10 v6-02-10
~~~
