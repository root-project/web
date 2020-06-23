---
layout: releases
version: 6.08/06
release_date: 2017-03-02
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v608/release-notes.html#release-6.0806).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.08.06.source.tar.gz](https://root.cern/download/root_v6.08.06.source.tar.gz) | 149M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.08.06.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.08.06.Linux-centos7-x86_64-gcc4.8.tar.gz) | 196M |
| Linux fedora22 gcc5.3 | [root_v6.08.06.Linux-fedora22-x86_64-gcc5.3.tar.gz](https://root.cern/download/root_v6.08.06.Linux-fedora22-x86_64-gcc5.3.tar.gz) | 185M |
| Linux fedora24 gcc6.1 | [root_v6.08.06.Linux-fedora24-x86_64-gcc6.1.tar.gz](https://root.cern/download/root_v6.08.06.Linux-fedora24-x86_64-gcc6.1.tar.gz) | 165M |
| Ubuntu 14 gcc4.8 | [root_v6.08.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.08.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 182M |
| Ubuntu 16 gcc5.4 | [root_v6.08.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.08.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 186M |
| OsX 10.10 clang70 | [root_v6.08.06.macosx64-10.10-clang70.dmg](https://root.cern/download/root_v6.08.06.macosx64-10.10-clang70.dmg) | 157M |
| OsX 10.10 clang70 | [root_v6.08.06.macosx64-10.10-clang70.tar.gz](https://root.cern/download/root_v6.08.06.macosx64-10.10-clang70.tar.gz) | 158M |
| OsX 10.11 clang80 | [root_v6.08.06.macosx64-10.11-clang80.dmg](https://root.cern/download/root_v6.08.06.macosx64-10.11-clang80.dmg) | 163M |
| OsX 10.11 clang80 | [root_v6.08.06.macosx64-10.11-clang80.tar.gz](https://root.cern/download/root_v6.08.06.macosx64-10.11-clang80.tar.gz) | 163M |
| OsX 10.12 clang80 | [root_v6.08.06.macosx64-10.12-clang80.dmg](https://root.cern/download/root_v6.08.06.macosx64-10.12-clang80.dmg) | 169M |
| OsX 10.12 clang80 | [root_v6.08.06.macosx64-10.12-clang80.tar.gz](https://root.cern/download/root_v6.08.06.macosx64-10.12-clang80.tar.gz) | 170M |



## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.08.06/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.08.06/x86_64-mac1010-clang70-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.08.06/x86_64-mac1011-clang73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.08.06/x86_64-mac1012-clang80-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/contrib/gcc/4.8/x86_64-centos7-gcc48-opt/setup.sh
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.08.06/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-08-06 v6-08-06
~~~

