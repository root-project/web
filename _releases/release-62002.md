---
layout: releases
version: 6.20/02
release_date: 2020-03-15
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v620/release-notes.html#release-6.2002).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.20.02.source.tar.gz](https://root.cern/download/root_v6.20.02.source.tar.gz) | 160M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.20.02.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.20.02.Linux-centos7-x86_64-gcc4.8.tar.gz) | 184M |
| Linux fedora29 gcc8.3 | [root_v6.20.02.Linux-fedora29-x86_64-gcc8.3.tar.gz](https://root.cern/download/root_v6.20.02.Linux-fedora29-x86_64-gcc8.3.tar.gz) | 218M |
| Linux fedora30 gcc9.2 | [root_v6.20.02.Linux-fedora30-x86_64-gcc9.2.tar.gz](https://root.cern/download/root_v6.20.02.Linux-fedora30-x86_64-gcc9.2.tar.gz) | 223M |
| Ubuntu 14.04 gcc4.8 | [root_v6.20.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.20.02.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 190M |
| Ubuntu 16.04 gcc5.4 | [root_v6.20.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.20.02.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 197M |
| Ubuntu 18.04 gcc7.5 | [root_v6.20.02.Linux-ubuntu18-x86_64-gcc7.5.tar.gz](https://root.cern/download/root_v6.20.02.Linux-ubuntu18-x86_64-gcc7.5.tar.gz) | 216M |
| Ubuntu 19.04 gcc8.3 | [root_v6.20.02.Linux-ubuntu19-x86_64-gcc8.3.tar.gz](https://root.cern/download/root_v6.20.02.Linux-ubuntu19-x86_64-gcc8.3.tar.gz) | 216M |
| macOS 10.13 clang100 | curl -O https://root.cern/download/root_v6.20.02.macosx64-10.13-clang100.tar.gz | 133M |
| macOS 10.15 clang110 | curl -O https://root.cern/download/root_v6.20.02.macosx64-10.15-clang110.tar.gz | 134M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-fedora30-gcc92-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-mac1015-clang110-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-ubuntu19-gcc83-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-fedora29-gcc83-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-ubuntu18-gcc74-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/centos7-aarch64-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-mac1013-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-mac1014-clang110-opt
~~~


## Example for setting up ROOT from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.02/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-20-02 v6-20-02
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


