---
layout: releases
version: 6.02/12
release_date: 2015-06-24
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Release Notes
The release notes for this release can be found [here](https://root.cern.ch/root-version-v6-02-00-patch-release-notes)

## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.02.12.source.tar.gz](https://root.cern.ch/download/root_v6.02.12.source.tar.gz) |  95M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.02.12.Linux-cc7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-cc7-x86_64-gcc4.8.tar.gz) | 148M |
| CentOS Cern 7 gcc4.9 | [root_v6.02.12.Linux-cc7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-cc7-x86_64-gcc4.9.tar.gz) | 153M |
| Linux fedora20 gcc4.8 | [root_v6.02.12.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 133M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.02.12.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-slc6-x86_64-gcc4.8.tar.gz) | 147M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.02.12.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-slc6-x86_64-gcc4.9.tar.gz) | 153M |
| Ubuntu 14 gcc4.8 | [root_v6.02.12.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.02.12.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 133M |
| OsX 10.8 clang51 | [root_v6.02.12.macosx64-10.8-clang51.dmg](https://root.cern.ch/download/root_v6.02.12.macosx64-10.8-clang51.dmg) | 133M |
| OsX 10.8 clang51 | [root_v6.02.12.macosx64-10.8-clang51.tar.gz](https://root.cern.ch/download/root_v6.02.12.macosx64-10.8-clang51.tar.gz) | 133M |
| OsX 10.9 clang60 | [root_v6.02.12.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.02.12.macosx64-10.9-clang60.dmg) | 131M |
| OsX 10.9 clang60 | [root_v6.02.12.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.02.12.macosx64-10.9-clang60.tar.gz) | 132M |
| OsX 10.10 clang61 | [root_v6.02.12.macosx64-10.10-clang61.dmg](https://root.cern.ch/download/root_v6.02.12.macosx64-10.10-clang61.dmg) | 133M |
| OsX 10.10 clang61 | [root_v6.02.12.macosx64-10.10-clang61.tar.gz](https://root.cern.ch/download/root_v6.02.12.macosx64-10.10-clang61.tar.gz) | 133M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-cc7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-cc7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-mac1010-clang61-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-mac108-clang51-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-slc6-gcc49-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.02.12/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
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
git checkout -b v6-02-12 v6-02-12
~~~
