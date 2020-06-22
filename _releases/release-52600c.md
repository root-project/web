---
layout: releases
version: 5.26/00c
release_date: 2010-07-23
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.26.00c.source.tar.gz](https://root.cern.ch/download/root_v5.26.00c.source.tar.gz) |  28M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| Linux slc4 gcc3.4 | [root_v5.26.00c.Linux-slc4-gcc3.4.tar.gz](https://root.cern.ch/download/root_v5.26.00c.Linux-slc4-gcc3.4.tar.gz) |  54M |
| Linux slc4_amd64 gcc3.4 | [root_v5.26.00c.Linux-slc4_amd64-gcc3.4.tar.gz](https://root.cern.ch/download/root_v5.26.00c.Linux-slc4_amd64-gcc3.4.tar.gz) |  56M |
| Linux slc5 gcc4.3 | [root_v5.26.00c.Linux-slc5-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.26.00c.Linux-slc5-gcc4.3.tar.gz) |  54M |
| Linux slc5_amd64 gcc4.3 | [root_v5.26.00c.Linux-slc5_amd64-gcc4.3.tar.gz](https://root.cern.ch/download/root_v5.26.00c.Linux-slc5_amd64-gcc4.3.tar.gz) |  55M |
| macosx104 powerpc gcc 4.0 | [root_v5.26.00c.macosx104-powerpc-gcc-4.0.tar.gz](https://root.cern.ch/download/root_v5.26.00c.macosx104-powerpc-gcc-4.0.tar.gz) |  42M |
| macosx105 i386 gcc 4.0 | [root_v5.26.00c.macosx105-i386-gcc-4.0.tar.gz](https://root.cern.ch/download/root_v5.26.00c.macosx105-i386-gcc-4.0.tar.gz) |  40M |
| macosx106 i386 gcc 4.2 | [root_v5.26.00c.macosx106-i386-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.26.00c.macosx106-i386-gcc-4.2.tar.gz) |  43M |
| macosx106 gcc 4.2 | [root_v5.26.00c.macosx106-x86_64-gcc-4.2.tar.gz](https://root.cern.ch/download/root_v5.26.00c.macosx106-x86_64-gcc-4.2.tar.gz) |  43M |
| win32 (dbg) | [root_v5.26.00c.win32.debug.tar.gz](https://root.cern.ch/download/root_v5.26.00c.win32.debug.tar.gz) |  97M |
| win32 | [root_v5.26.00c.win32.tar.gz](https://root.cern.ch/download/root_v5.26.00c.win32.tar.gz) |  51M |
| Windows Visual Studio 90 (dbg) | [root_v5.26.00c.win32.vc90.debug.tar.gz](https://root.cern.ch/download/root_v5.26.00c.win32.vc90.debug.tar.gz) | 127M |
| Windows Visual Studio 90 | [root_v5.26.00c.win32.vc90.tar.gz](https://root.cern.ch/download/root_v5.26.00c.win32.vc90.tar.gz) |  53M |


## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v5-26-00c v5-26-00c
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

