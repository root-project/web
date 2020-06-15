---
layout: releases
version: 6.14/00
release_date: 2018-06-13

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

- LZ4 compression is now the default: it's blazingly fast when reading ROOT files!
- [ROOT::RDataFrame](https://root.cern.ch/doc/master/group__tutorial__dataframe.html) is now the recommended way for analyzing trees: simple, expressive and parallel!
- Windows is back!
- ...and this release is dedicated to our *ROOT Workshop in Sarajevo, 10-13 September 2018*: [come and register!](https://cern.ch/root2018)

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v614/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.14.00.source.tar.gz](https://root.cern.ch/download/root_v6.14.00.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.14.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 139M |
| Linux fedora26 gcc7.2 | [root_v6.14.00.Linux-fedora26-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-fedora26-x86_64-gcc7.2.tar.gz) | 127M |
| Linux fedora27 gcc7.2 | [root_v6.14.00.Linux-fedora27-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-fedora27-x86_64-gcc7.2.tar.gz) | 127M |
| Linux fedora28 gcc8.0 | [root_v6.14.00.Linux-fedora28-x86_64-gcc8.0.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-fedora28-x86_64-gcc8.0.tar.gz) | 126M |
| Ubuntu 14 gcc4.8 | [root_v6.14.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 124M |
| Ubuntu 16 gcc5.4 | [root_v6.14.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 125M |
| Ubuntu 17 gcc7.2 | [root_v6.14.00.Linux-ubuntu17-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-ubuntu17-x86_64-gcc7.2.tar.gz) | 131M |
| Ubuntu 18 gcc7.3 | [root_v6.14.00.Linux-ubuntu18-x86_64-gcc7.3.tar.gz](https://root.cern.ch/download/root_v6.14.00.Linux-ubuntu18-x86_64-gcc7.3.tar.gz) | 132M |
| Mac OS X 10.12 clang90 | [root_v6.14.00.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.14.00.macosx64-10.12-clang90.dmg) | 124M |
| Mac OS X 10.12 clang90 | [root_v6.14.00.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.14.00.macosx64-10.12-clang90.tar.gz) | 124M |
| Mac OS X 10.13 clang91 | [root_v6.14.00.macosx64-10.13-clang91.dmg](https://root.cern.ch/download/root_v6.14.00.macosx64-10.13-clang91.dmg) | 126M |
| Mac OS X 10.13 clang91 | [root_v6.14.00.macosx64-10.13-clang91.tar.gz](https://root.cern.ch/download/root_v6.14.00.macosx64-10.13-clang91.tar.gz) | 125M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.00.win32.vc15.debug.exe](https://root.cern.ch/download/root_v6.14.00.win32.vc15.debug.exe) | 164M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.00.win32.vc15.debug.zip](https://root.cern.ch/download/root_v6.14.00.win32.vc15.debug.zip) | 265M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.00.win32.vc15.exe](https://root.cern.ch/download/root_v6.14.00.win32.vc15.exe) |  70M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.00.win32.vc15.zip](https://root.cern.ch/download/root_v6.14.00.win32.vc15.zip) |  95M |



## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-mac1012-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-fedora28-gcc80-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-mac1013-clang91-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-fedora27-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-fedora26-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-ubuntu17-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-ubuntu18-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.00/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-14-00 v6-14-00
~~~

