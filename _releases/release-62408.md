---
layout: releases
version: 6.24/08
release_date: 2022-10-05
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v624/release-notes.html#release-6.2408).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.24.08.source.tar.gz](https://root.cern/download/root_v6.24.08.source.tar.gz) | 178M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 7 | [root_v6.24.08.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.24.08.Linux-centos7-x86_64-gcc4.8.tar.gz) | 183M |
| Fedora 32 | [root_v6.24.08.Linux-fedora32-x86_64-gcc10.3.tar.gz](https://root.cern/download/root_v6.24.08.Linux-fedora32-x86_64-gcc10.3.tar.gz) | 265M |
| Ubuntu 16 | [root_v6.24.08.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.24.08.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 195M |
| Ubuntu 18 | [root_v6.24.08.Linux-ubuntu18-x86_64-gcc7.5.tar.gz](https://root.cern/download/root_v6.24.08.Linux-ubuntu18-x86_64-gcc7.5.tar.gz) | 255M |
| Ubuntu 20 | [root_v6.24.08.Linux-ubuntu20-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.24.08.Linux-ubuntu20-x86_64-gcc9.4.tar.gz) | 255M |
| macOS 10.15 x86_64 Xcode 12 | [root_v6.24.08.macos-10.15-x86_64-clang120.pkg](https://root.cern/download/root_v6.24.08.macos-10.15-x86_64-clang120.pkg) | 320M |
| macOS 10.15 x86_64 Xcode 12 | [root_v6.24.08.macos-10.15-x86_64-clang120.tar.gz](https://root.cern/download/root_v6.24.08.macos-10.15-x86_64-clang120.tar.gz) | 207M |
| macOS 11.7 arm64 Xcode 12 | [root_v6.24.08.macos-11.7-arm64-clang120.pkg](https://root.cern/download/root_v6.24.08.macos-11.7-arm64-clang120.pkg) | 304M |
| macOS 11.7 arm64 Xcode 12 | [root_v6.24.08.macos-11.7-arm64-clang120.tar.gz](https://root.cern/download/root_v6.24.08.macos-11.7-arm64-clang120.tar.gz) | 195M |
| macOS 11.7 x86_64 Xcode 12 | [root_v6.24.08.macos-11.7-x86_64-clang120.pkg](https://root.cern/download/root_v6.24.08.macos-11.7-x86_64-clang120.pkg) | 318M |
| macOS 11.7 x86_64 Xcode 12 | [root_v6.24.08.macos-11.7-x86_64-clang120.tar.gz](https://root.cern/download/root_v6.24.08.macos-11.7-x86_64-clang120.tar.gz) | 206M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.24.08.win32.vc17.debug.exe](https://root.cern/download/root_v6.24.08.win32.vc17.debug.exe) | 196M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.24.08.win32.vc17.debug.zip](https://root.cern/download/root_v6.24.08.win32.vc17.debug.zip) | 297M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.24.08.win32.vc17.exe](https://root.cern/download/root_v6.24.08.win32.vc17.exe) |  99M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.24.08.win32.vc17.zip](https://root.cern/download/root_v6.24.08.win32.vc17.zip) | 134M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/arm64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-fedora32-gcc103-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-mac1015-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-ubuntu20-gcc94-opt
~~~


## Example for setting up ROOT from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.08/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-24-08 v6-24-08
~~~


## Windows

Windows 10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
