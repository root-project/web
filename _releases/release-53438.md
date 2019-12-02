---
layout: releases
version: 5.34/38
release_date: 2018-03-12

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

<!-- ## Highlights
NOT YET IMPLEMENTED
-->
## Release Notes
The release notes for this release can be found [here](/root-version-v5-34-00-patch-release-notes#38).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.34.38.source.tar.gz](https://root.cern.ch/download/root_v5.34.38.source.tar.gz) |  72M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Ubuntu 14 gcc4.8 | [root_v5.34.38.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.38.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) |  62M |
| OsX 10.11 clang80 | [root_v5.34.38.macosx64-10.11-clang80.dmg](https://root.cern.ch/download/root_v5.34.38.macosx64-10.11-clang80.dmg) |  59M |
| OsX 10.11 clang80 | [root_v5.34.38.macosx64-10.11-clang80.tar.gz](https://root.cern.ch/download/root_v5.34.38.macosx64-10.11-clang80.tar.gz) |  58M |
| Windows Visual Studio 2012 (dbg) | [root_v5.34.38.win32.vc11.debug.exe](https://root.cern.ch/download/root_v5.34.38.win32.vc11.debug.exe) |  98M |
| Windows Visual Studio 2012 (dbg) | [root_v5.34.38.win32.vc11.debug.zip](https://root.cern.ch/download/root_v5.34.38.win32.vc11.debug.zip) | 151M |
| Windows Visual Studio 2012 | [root_v5.34.38.win32.vc11.exe](https://root.cern.ch/download/root_v5.34.38.win32.vc11.exe) |  47M |
| Windows Visual Studio 2012 | [root_v5.34.38.win32.vc11.zip](https://root.cern.ch/download/root_v5.34.38.win32.vc11.zip) |  65M |
| Windows Visual Studio 2013 (dbg) | [root_v5.34.38.win32.vc12.debug.exe](https://root.cern.ch/download/root_v5.34.38.win32.vc12.debug.exe) |  99M |
| Windows Visual Studio 2013 (dbg) | [root_v5.34.38.win32.vc12.debug.zip](https://root.cern.ch/download/root_v5.34.38.win32.vc12.debug.zip) | 151M |
| Windows Visual Studio 2013 | [root_v5.34.38.win32.vc12.exe](https://root.cern.ch/download/root_v5.34.38.win32.vc12.exe) |  47M |
| Windows Visual Studio 2013 | [root_v5.34.38.win32.vc12.zip](https://root.cern.ch/download/root_v5.34.38.win32.vc12.zip) |  64M |


## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v5-34-38 v5-34-38
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

