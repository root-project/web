---
layout: releases
version: 6.06/02
release_date: 2016-03-03
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

Patch version on top of 6.06/00 with a number of fixes. See release notes for details.

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v606/release-notes.html#release-6.0602).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.06.02.source.tar.gz](https://root.cern/download/root_v6.06.02.source.tar.gz) | 103M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.06.02.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.06.02.Linux-centos7-x86_64-gcc4.8.tar.gz) | 162M |
| CentOS Cern 7 gcc4.9 | [root_v6.06.02.Linux-centos7-x86_64-gcc4.9.tar.gz](https://root.cern/download/root_v6.06.02.Linux-centos7-x86_64-gcc4.9.tar.gz) | 168M |
| Linux fedora20 gcc4.8 | [root_v6.06.02.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.06.02.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 145M |
| Linux fedora21 gcc4.9 | [root_v6.06.02.Linux-fedora21-x86_64-gcc4.9.tar.gz](https://root.cern/download/root_v6.06.02.Linux-fedora21-x86_64-gcc4.9.tar.gz) | 151M |
| Linux fedora22 gcc5.1 | [root_v6.06.02.Linux-fedora22-x86_64-gcc5.1.tar.gz](https://root.cern/download/root_v6.06.02.Linux-fedora22-x86_64-gcc5.1.tar.gz) | 151M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.06.02.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.06.02.Linux-slc6-x86_64-gcc4.8.tar.gz) | 161M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.06.02.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern/download/root_v6.06.02.Linux-slc6-x86_64-gcc4.9.tar.gz) | 168M |
| Ubuntu 14 gcc4.8 | [root_v6.06.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.06.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 146M |
| OsX 10.9 clang60 | [root_v6.06.02.macosx64-10.9-clang60.dmg](https://root.cern/download/root_v6.06.02.macosx64-10.9-clang60.dmg) | 140M |
| OsX 10.9 clang60 | [root_v6.06.02.macosx64-10.9-clang60.tar.gz](https://root.cern/download/root_v6.06.02.macosx64-10.9-clang60.tar.gz) | 141M |
| OsX 10.10 clang70 | [root_v6.06.02.macosx64-10.10-clang70.dmg](https://root.cern/download/root_v6.06.02.macosx64-10.10-clang70.dmg) | 141M |
| OsX 10.10 clang70 | [root_v6.06.02.macosx64-10.10-clang70.tar.gz](https://root.cern/download/root_v6.06.02.macosx64-10.10-clang70.tar.gz) | 141M |
| OsX 10.11 clang70 | [root_v6.06.02.macosx64-10.11-clang70.dmg](https://root.cern/download/root_v6.06.02.macosx64-10.11-clang70.dmg) | 144M |
| OsX 10.11 clang70 | [root_v6.06.02.macosx64-10.11-clang70.tar.gz](https://root.cern/download/root_v6.06.02.macosx64-10.11-clang70.tar.gz) | 144M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-centos7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-centos7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-mac1010-clang70-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-mac1011-clang70-opt
~~~


## Example for setting up ROOT and the corresponding compiler from AFS
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.02/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-06-02 v6-06-02
~~~
