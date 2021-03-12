---
layout: releases
version: 6.20/06
release_date: 2020-06-10
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v620/release-notes.html#release-6.2006).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.20.04.source.tar.gz](https://root.cern/download/root_v6.20.06.source.tar.gz) | 160M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | <a href="https://root.cern/download/root_v6.20.06.Linux-centos7-x86_64-gcc4.8.tar.gz">root_v6.20.06.Linux-centos7-x86_64-gcc4.8.tar.gz</a> | 184M |
| Linux fedora29 gcc8.3 | <a href="https://root.cern/download/root_v6.20.06.Linux-fedora29-x86_64-gcc8.3.tar.gz">root_v6.20.06.Linux-fedora29-x86_64-gcc8.3.tar.gz</a> | 219M |
| Linux fedora30 gcc9.3 | <a href="https://root.cern/download/root_v6.20.06.Linux-fedora30-x86_64-gcc9.3.tar.gz">root_v6.20.06.Linux-fedora30-x86_64-gcc9.3.tar.gz</a> | 223M |
| Linux fedora31 gcc9.2 | <a href="https://root.cern/download/root_v6.20.06.Linux-fedora31-x86_64-gcc9.2.tar.gz">root_v6.20.06.Linux-fedora31-x86_64-gcc9.2.tar.gz</a> | 223M |
| Ubuntu 14 gcc4.8 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz">root_v6.20.06.Linux-ubuntu14-x86_64-gcc4.8.tar.gz</a> | 190M |
| Ubuntu 16 gcc5.4 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz">root_v6.20.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz</a> | 198M |
| Ubuntu 18 gcc7.5 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu18-x86_64-gcc7.5.tar.gz">root_v6.20.06.Linux-ubuntu18-x86_64-gcc7.5.tar.gz</a> | 216M |
| Ubuntu 19 gcc8.3 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu19-x86_64-gcc8.3.tar.gz">root_v6.20.06.Linux-ubuntu19-x86_64-gcc8.3.tar.gz</a> | 217M |
| Ubuntu 19 gcc9.2 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu19-x86_64-gcc9.2.tar.gz">root_v6.20.06.Linux-ubuntu19-x86_64-gcc9.2.tar.gz</a> | 222M |
| Ubuntu 20 gcc9.3 | <a href="https://root.cern/download/root_v6.20.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz">root_v6.20.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz</a> | 222M |
| OsX 10.13 clang100 | <a href="https://root.cern/download/root_v6.20.06.macosx64-10.13-clang100.tar.gz">root_v6.20.06.macosx64-10.13-clang100.tar.gz</a> | 133M |
| OsX 10.14 clang100 | <a href="https://root.cern/download/root_v6.20.06.macosx64-10.14-clang100.tar.gz">root_v6.20.06.macosx64-10.14-clang100.tar.gz</a> | 134M |
| OsX 10.15 clang110 | <a href="https://root.cern/download/root_v6.20.06.macosx64-10.15-clang110.tar.gz">root_v6.20.06.macosx64-10.15-clang110.tar.gz</a> | 134M |

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-20-06 v6-20-06
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
