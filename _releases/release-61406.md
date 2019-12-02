---
layout: releases
version: 6.14/06
release_date: 2018-11-05

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

## Highlights

MacOS 10.14 / Xcode 10 is now supported, and several bugs have been fixed.

## Release Notes
The release notes for this release can be found [here](https://root.cern.ch/doc/v614/release-notes.html#release-6.1406).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.14.06.source.tar.gz](https://root.cern.ch/download/root_v6.14.06.source.tar.gz) | 155M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.14.06.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-centos7-x86_64-gcc4.8.tar.gz) | 141M |
| Linux fedora27 gcc7.3 | [root_v6.14.06.Linux-fedora27-x86_64-gcc7.3.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-fedora27-x86_64-gcc7.3.tar.gz) | 132M |
| Linux fedora28 gcc8.2 | [root_v6.14.06.Linux-fedora28-x86_64-gcc8.2.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-fedora28-x86_64-gcc8.2.tar.gz) | 131M |
| Ubuntu 14 gcc4.8 | [root_v6.14.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 141M |
| Ubuntu 16 gcc5.4 | [root_v6.14.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 142M |
| Ubuntu 18 gcc7.3 | [root_v6.14.06.Linux-ubuntu18-x86_64-gcc7.3.tar.gz](https://root.cern.ch/download/root_v6.14.06.Linux-ubuntu18-x86_64-gcc7.3.tar.gz) | 149M |
| OsX 10.12 clang90 | [root_v6.14.06.macosx64-10.12-clang90.dmg](https://root.cern.ch/download/root_v6.14.06.macosx64-10.12-clang90.dmg) | 126M |
| OsX 10.12 clang90 | [root_v6.14.06.macosx64-10.12-clang90.tar.gz](https://root.cern.ch/download/root_v6.14.06.macosx64-10.12-clang90.tar.gz) | 125M |
| OsX 10.13 clang100 | [root_v6.14.06.macosx64-10.13-clang100.dmg](https://root.cern.ch/download/root_v6.14.06.macosx64-10.13-clang100.dmg) | 128M |
| OsX 10.13 clang100 | [root_v6.14.06.macosx64-10.13-clang100.tar.gz](https://root.cern.ch/download/root_v6.14.06.macosx64-10.13-clang100.tar.gz) | 127M |
| OsX 10.14 clang100 | [root_v6.14.06.macosx64-10.14-clang100.dmg](https://root.cern.ch/download/root_v6.14.06.macosx64-10.14-clang100.dmg) | 128M |
| OsX 10.14 clang100 | [root_v6.14.06.macosx64-10.14-clang100.tar.gz](https://root.cern.ch/download/root_v6.14.06.macosx64-10.14-clang100.tar.gz) | 127M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.06.win32.vc15.debug.exe](https://root.cern.ch/download/root_v6.14.06.win32.vc15.debug.exe) | 182M |
| **preview** Windows Visual Studio 2017 (dbg) | [root_v6.14.06.win32.vc15.debug.zip](https://root.cern.ch/download/root_v6.14.06.win32.vc15.debug.zip) | 294M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.06.win32.vc15.exe](https://root.cern.ch/download/root_v6.14.06.win32.vc15.exe) |  79M |
| **preview** Windows Visual Studio 2017 | [root_v6.14.06.win32.vc15.zip](https://root.cern.ch/download/root_v6.14.06.win32.vc15.zip) | 108M |



## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-mac1012-clang90-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-fedora27-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-fedora28-gcc82-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-mac1014-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-ubuntu18-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-mac1013-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.14.06/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-14-06 v6-14-06
~~~


## Windows
Windows 7/Vista/XP/NT/2000 are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **tar**: the traditional variant. Unpack e.g. with [7zip](http://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).


