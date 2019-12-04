---
layout: releases
version: 6.13/08
release_date: 2018-05-15

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.13.08.source.tar.gz](https://root.cern.ch/download/root_v6.13.08.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.13.08.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-centos7-x86_64-gcc4.8.tar.gz) | 139M |
| Linux fedora26 gcc7.2 | [root_v6.13.08.Linux-fedora26-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-fedora26-x86_64-gcc7.2.tar.gz) | 126M |
| Linux fedora27 gcc7.2 | [root_v6.13.08.Linux-fedora27-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-fedora27-x86_64-gcc7.2.tar.gz) | 126M |
| Linux fedora28 gcc8.0 | [root_v6.13.08.Linux-fedora28-x86_64-gcc8.0.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-fedora28-x86_64-gcc8.0.tar.gz) | 125M |
| Ubuntu 14 gcc4.8 | [root_v6.13.08.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 124M |
| Ubuntu 16 gcc5.4 | [root_v6.13.08.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 125M |
| Ubuntu 17 gcc7.2 | [root_v6.13.08.Linux-ubuntu17-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-ubuntu17-x86_64-gcc7.2.tar.gz) | 131M |
| Ubuntu 18 gcc7.3 | [root_v6.13.08.Linux-ubuntu18-x86_64-gcc7.3.tar.gz](https://root.cern.ch/download/root_v6.13.08.Linux-ubuntu18-x86_64-gcc7.3.tar.gz) | 131M |
| OsX 10.12 clang90 | [root_v6.13.08.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.13.08.macosx64-10.12-clang90.dmg) | 124M |
| OsX 10.12 clang90 | [root_v6.13.08.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.13.08.macosx64-10.12-clang90.tar.gz) | 123M |
| OsX 10.13 clang91 | [root_v6.13.08.macosx64-10.13-clang91.dmg](https://root.cern.ch/download/root_v6.13.08.macosx64-10.13-clang91.dmg) | 125M |
| OsX 10.13 clang91 | [root_v6.13.08.macosx64-10.13-clang91.tar.gz](https://root.cern.ch/download/root_v6.13.08.macosx64-10.13-clang91.tar.gz) | 125M |
| win32.vc15 (dbg) | [root_v6.13.08.win32.vc15.debug.zip](https://root.cern.ch/download/root_v6.13.08.win32.vc15.debug.zip) | 265M |
| win32.vc15 | [root_v6.13.08.win32.vc15.zip](https://root.cern.ch/download/root_v6.13.08.win32.vc15.zip) |  95M |



## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-mac1012-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-fedora28-gcc80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-mac1013-clang91-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-fedora27-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-fedora26-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-ubuntu17-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-ubuntu18-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/contrib/gcc/4.8/x86_64-centos7-gcc48-opt/setup.sh
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.13.08/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-13-08 v6-13-08
~~~

