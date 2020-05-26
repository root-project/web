---
layout: releases
version: 6.13/02
release_date: 2018-03-20
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Highlights

- LZ4 is now the default compression format, accelerating reading by factors; see e.g. [this presentation](https://indico.fnal.gov/event/16264/contribution/8/material/slides/0.pdf)
- New graphics style “ATLAS" - thanks, ATLAS!
- Auto-coloring for TF1 (drawing options PFC, PLC and PMC)
- New color palette “cividis” compatible with color vision deficiency
- Memory footprint reduction and a faster ROOT due to reduced reading of its PCH
- Improved performance of parallelised operations - thread safety has been enhanced with a read-write lock, also reducing contention during gROOT and TObject destructions.
- I/O support for std::vector with custom allocator.
- C++17 support: you can enable it with the "-Dcxx17=ON" cmake option
- Added templated version TBuffer::WriteObject
- Implement reading of objects data from JSON; new TBufferJSON::ToJSON() and TBufferJSON::FromJSON() methods
- New ROOT::Experimental::TVec allows to spell operations on vector elements without loops, also in TDataFrame

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.13.02.source.tar.gz](https://root.cern.ch/download/root_v6.13.02.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.13.02.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-centos7-x86_64-gcc4.8.tar.gz) | 134M |
| Linux fedora26 gcc7.2 | [root_v6.13.02.Linux-fedora26-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-fedora26-x86_64-gcc7.2.tar.gz) | 122M |
| Linux fedora27 gcc7.2 | [root_v6.13.02.Linux-fedora27-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-fedora27-x86_64-gcc7.2.tar.gz) | 122M |
| Ubuntu 14 gcc4.8 | [root_v6.13.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 120M |
| Ubuntu 16 gcc5.4 | [root_v6.13.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 121M |
| Ubuntu 17 gcc7.2 | [root_v6.13.02.Linux-ubuntu17-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.02.Linux-ubuntu17-x86_64-gcc7.2.tar.gz) | 127M |
| OsX 10.12 clang90 | [root_v6.13.02.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.13.02.macosx64-10.12-clang90.dmg) | 125M |
| OsX 10.12 clang90 | [root_v6.13.02.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.13.02.macosx64-10.12-clang90.tar.gz) | 126M |
| OsX 10.13 clang90 | [root_v6.13.02.macosx64-10.13-clang90.dmg](https://root.cern.ch/download/root_v6.13.02.macosx64-10.13-clang90.dmg) | 125M |
| OsX 10.13 clang90 | [root_v6.13.02.macosx64-10.13-clang90.tar.gz](https://root.cern.ch/download/root_v6.13.02.macosx64-10.13-clang90.tar.gz) | 126M |



## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-mac1012-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-mac1013-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-fedora26-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-fedora27-gcc72-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS

~~~
ssh lxplus7.cern.ch
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.02/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-13-02 v6-13-02
~~~

