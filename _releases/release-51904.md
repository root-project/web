---
layout: releases
version: 5.19/04
release_date: 2008-05-14
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.19.04.source.tar.gz](https://root.cern.ch/download/root_v5.19.04.source.tar.gz) |  24M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux.slc4.gcc3.4 | [root_v5.19.04.Linux.slc4.gcc3.4.tar.gz](https://root.cern.ch/download/root_v5.19.04.Linux.slc4.gcc3.4.tar.gz) |  43M |
| Linux.slc4_amd64.gcc3.4 | [root_v5.19.04.Linux.slc4_amd64.gcc3.4.tar.gz](https://root.cern.ch/download/root_v5.19.04.Linux.slc4_amd64.gcc3.4.tar.gz) |  44M |
| macosx i386 gcc 4.0 | [root_v5.19.04.macosx-i386-gcc-4.0.tar.gz](https://root.cern.ch/download/root_v5.19.04.macosx-i386-gcc-4.0.tar.gz) |  43M |
| macosx i386 icc 9.1 | [root_v5.19.04.macosx-i386-icc-9.1.tar.gz](https://root.cern.ch/download/root_v5.19.04.macosx-i386-icc-9.1.tar.gz) |  46M |
| macosx powerpc gcc 4.0 | [root_v5.19.04.macosx-powerpc-gcc-4.0.tar.gz](https://root.cern.ch/download/root_v5.19.04.macosx-powerpc-gcc-4.0.tar.gz) |  43M |
| SunOS.5.9 | [root_v5.19.04.SunOS.5.9.tar.gz](https://root.cern.ch/download/root_v5.19.04.SunOS.5.9.tar.gz) |  47M |
| win32 (dbg) | [root_v5.19.04.win32.debug.tar.gz](https://root.cern.ch/download/root_v5.19.04.win32.debug.tar.gz) |  80M |
| win32 | [root_v5.19.04.win32.tar.gz](https://root.cern.ch/download/root_v5.19.04.win32.tar.gz) |  42M |
| Windows Visual Studio 90 (dbg) | [root_v5.19.04.win32.vc90.debug.tar.gz](https://root.cern.ch/download/root_v5.19.04.win32.vc90.debug.tar.gz) | 100M |
| Windows Visual Studio 90 | [root_v5.19.04.win32.vc90.tar.gz](https://root.cern.ch/download/root_v5.19.04.win32.vc90.tar.gz) |  42M |
| win32gcc | [root_v5.19.04.win32gcc.tar.gz](https://root.cern.ch/download/root_v5.19.04.win32gcc.tar.gz) |  46M |


## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v5-19-04 v5-19-04
~~~


## Windows
Windows 7/Vista/XP/NT/2000 are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **tar**: the traditional variant. Unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).

