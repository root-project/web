---
layout: releases
version: 6.14/04
release_date: 2018-08-23

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Highlights

This version restores zlib as the default compression algorithm for ROOT files.
We have seen branch data that LZ4 did not compress well; until those cases are optimized, ROOT will resort to its well understood, traditional compression algorithm zlib.

## Release Notes

The release notes for this release can be found [here](https://root.cern.ch/doc/v614/release-notes.html#release-6.1404).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.14.04.source.tar.gz](https://root.cern.ch/download/root_v6.14.04.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.14.04.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-centos7-x86_64-gcc4.8.tar.gz) | 141M |
| Linux fedora26 gcc7.2 | [root_v6.14.04.Linux-fedora26-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-fedora26-x86_64-gcc7.2.tar.gz) | 128M |
| Linux fedora27 gcc7.2 | [root_v6.14.04.Linux-fedora27-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-fedora27-x86_64-gcc7.2.tar.gz) | 128M |
| Linux fedora28 gcc8.1 | [root_v6.14.04.Linux-fedora28-x86_64-gcc8.1.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-fedora28-x86_64-gcc8.1.tar.gz) | 127M |
| Ubuntu 14 gcc4.8 | [root_v6.14.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 125M |
| Ubuntu 16 gcc5.4 | [root_v6.14.04.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 127M |
| Ubuntu 17 gcc7.2 | [root_v6.14.04.Linux-ubuntu17-x86_64-gcc7.2.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-ubuntu17-x86_64-gcc7.2.tar.gz) | 133M |
| Ubuntu 18 gcc7.3 | [root_v6.14.04.Linux-ubuntu18-x86_64-gcc7.3.tar.gz](https://root.cern.ch/download/root_v6.14.04.Linux-ubuntu18-x86_64-gcc7.3.tar.gz) | 133M |
| OsX 10.12 clang90 | [root_v6.14.04.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.14.04.macosx64-10.12-clang90.dmg) | 126M |
| OsX 10.12 clang90 | [root_v6.14.04.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.14.04.macosx64-10.12-clang90.tar.gz) | 125M |
| OsX 10.13 clang91 | [root_v6.14.04.macosx64-10.13-clang91.dmg](https://root.cern.ch/download/root_v6.14.04.macosx64-10.13-clang91.dmg) | 126M |
| OsX 10.13 clang91 | [root_v6.14.04.macosx64-10.13-clang91.tar.gz](https://root.cern.ch/download/root_v6.14.04.macosx64-10.13-clang91.tar.gz) | 126M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.04.win32.vc15.debug.exe](https://root.cern.ch/download/root_v6.14.04.win32.vc15.debug.exe) | 181M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.04.win32.vc15.debug.zip](https://root.cern.ch/download/root_v6.14.04.win32.vc15.debug.zip) | 294M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.04.win32.vc15.exe](https://root.cern.ch/download/root_v6.14.04.win32.vc15.exe) |  79M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.04.win32.vc15.zip](https://root.cern.ch/download/root_v6.14.04.win32.vc15.zip) |  108M |



## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-mac1013-clang91-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-fedora27-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-fedora26-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-fedora28-gcc81-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-ubuntu17-gcc72-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-ubuntu18-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT and the corresponding compiler from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.04/x86_64-centos7-gcc48-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-14-04 v6-14-04
~~~


## Windows
We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **zip**: the traditional variant. Unpack e.g. with [7zip](http://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).



