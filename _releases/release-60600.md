---
layout: releases
version: 6.06/00
release_date: 2015-12-09
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

## Highlights

Some of the highlights of this release include:

 -  new command line utilities (try `rootls myfile.root`)
 -  a much more usable new default graphics palette,
 -  a lightweight multi-processing interface to accelerate your analyses
 -  [ROOT
notebooks](https://root.cern.ch/notebooks/HowTos/HowTo_ROOT-Notebooks.html), a fantastic new way of tutoring and doing interactive
analysis.
 - most of the [class documentation](https://root.cern.ch/doc/master/) has been
migrated to Doxygen.

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v606/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.06.00.source.tar.gz](https://root.cern.ch/download/root_v6.06.00.source.tar.gz) | 103M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.06.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 161M |
| CentOS Cern 7 gcc4.9 | [root_v6.06.00.Linux-centos7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-centos7-x86_64-gcc4.9.tar.gz) | 168M |
| Linux fedora20 gcc4.8 | [root_v6.06.00.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-fedora20-x86_64-gcc4.8.tar.gz) | 145M |
| Linux fedora21 gcc4.9 | [root_v6.06.00.Linux-fedora21-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-fedora21-x86_64-gcc4.9.tar.gz) | 151M |
| Linux fedora22 gcc5.1 | [root_v6.06.00.Linux-fedora22-x86_64-gcc5.1.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-fedora22-x86_64-gcc5.1.tar.gz) | 150M |
| Scientific Linux Cern 6 gcc4.8 | [root_v6.06.00.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-slc6-x86_64-gcc4.8.tar.gz) | 160M |
| Scientific Linux Cern 6 gcc4.9 | [root_v6.06.00.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-slc6-x86_64-gcc4.9.tar.gz) | 167M |
| Ubuntu 14 gcc4.8 | [root_v6.06.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.06.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 150M |
| OsX 10.9 clang60 | [root_v6.06.00.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v6.06.00.macosx64-10.9-clang60.dmg) | 139M |
| OsX 10.9 clang60 | [root_v6.06.00.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v6.06.00.macosx64-10.9-clang60.tar.gz) | 140M |
| OsX 10.10 clang70 | [root_v6.06.00.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v6.06.00.macosx64-10.10-clang70.dmg) | 140M |
| OsX 10.10 clang70 | [root_v6.06.00.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v6.06.00.macosx64-10.10-clang70.tar.gz) | 140M |
| OsX 10.11 clang70 | [root_v6.06.00.macosx64-10.11-clang70.dmg](https://root.cern.ch/download/root_v6.06.00.macosx64-10.11-clang70.dmg) | 142M |
| OsX 10.11 clang70 | [root_v6.06.00.macosx64-10.11-clang70.tar.gz](https://root.cern.ch/download/root_v6.06.00.macosx64-10.11-clang70.tar.gz) | 143M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-centos7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-centos7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-mac1010-clang70-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-mac1011-clang70-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/6.06.00/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
~~~

## Direct Git repository access
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-06-00 v6-06-00
~~~

