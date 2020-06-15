---
layout: releases
version: 6.04/14
release_date: 2016-02-03
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v604/release-notes.html#release-6.0414).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.04.14.source.tar.gz](https://root.cern.ch/download/root_v6.04.14.source.tar.gz) |  96M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.04.14.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-centos7-x86_64-gcc4.8.tar.gz) | 160M |
| CentOS Cern 7 gcc4.9 | [root_v6.04.14.Linux-centos7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-centos7-x86_64-gcc4.9.tar.gz) | 167M |
| Linux fedora20 gcc4.8 | [root_v6.04.14.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 143M |
| Linux fedora21 gcc4.9 | [root_v6.04.14.Linux-fedora21-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-fedora21-x86_64-gcc4.9.tar.gz) | 149M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.04.14.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-slc6-x86_64-gcc4.8.tar.gz) | 160M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.04.14.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-slc6-x86_64-gcc4.9.tar.gz) | 167M |
| Ubuntu 14 gcc4.8 | [root_v6.04.14.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.04.14.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 149M |
| OsX 10.9 clang60 | [root_v6.04.14.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.04.14.macosx64-10.9-clang60.dmg) | 139M |
| OsX 10.9 clang60 | [root_v6.04.14.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.04.14.macosx64-10.9-clang60.tar.gz) | 139M |
| OsX 10.10 clang70 | [root_v6.04.14.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v6.04.14.macosx64-10.10-clang70.dmg) | 139M |
| OsX 10.10 clang70 | [root_v6.04.14.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v6.04.14.macosx64-10.10-clang70.tar.gz) | 140M |
| OsX 10.11 clang70 | [root_v6.04.14.macosx64-10.11-clang70.dmg](https://root.cern.ch/download/root_v6.04.14.macosx64-10.11-clang70.dmg) | 141M |
| OsX 10.11 clang70 | [root_v6.04.14.macosx64-10.11-clang70.tar.gz](https://root.cern.ch/download/root_v6.04.14.macosx64-10.11-clang70.tar.gz) | 142M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-centos7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-centos7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-mac1010-clang70-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-mac1011-clang70-opt
~~~


## Example for setting up ROOT and the corresponding compiler from AFS
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.04.14/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-04-14 v6-04-14
~~~
