---
layout: releases
version: 6.28/02
release_date: 2023-03-23
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

This release fixes a couple of crucial bugs, notably regarding [`RVec` masking](https://github.com/root-project/root/pull/12411)
and [use of multi-threaded `RDataFrame` with `TTreeIndex`](https://github.com/root-project/root/pull/12342).

The release notes for this release can be found [here](https://root.cern/doc/v628/release-notes.html#release-6.2802).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.28.02.source.tar.gz](https://root.cern/download/root_v6.28.02.source.tar.gz) | 177M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | [root_v6.28.02.Linux-centos8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.28.02.Linux-centos8-x86_64-gcc8.5.tar.gz) | 224M |
| Fedora 36 | [root_v6.28.02.Linux-fedoraVERSION_ID=36-x86_64-gcc12.2.tar.gz](https://root.cern/download/root_v6.28.02.Linux-fedoraVERSION_ID=36-x86_64-gcc12.2.tar.gz) | 300M |
| Ubuntu 18 | [root_v6.28.02.Linux-ubuntu18-x86_64-gcc7.5.tar.gz](https://root.cern/download/root_v6.28.02.Linux-ubuntu18-x86_64-gcc7.5.tar.gz) | 242M |
| Ubuntu 20 | [root_v6.28.02.Linux-ubuntu20-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.28.02.Linux-ubuntu20-x86_64-gcc9.4.tar.gz) | 244M |
| Ubuntu 22 | [root_v6.28.02.Linux-ubuntu22-x86_64-gcc11.3.tar.gz](https://root.cern/download/root_v6.28.02.Linux-ubuntu22-x86_64-gcc11.3.tar.gz) | 290M |
| macOS 11.7 arm64 Xcode 12 | [root_v6.28.02.macos-11.7-arm64-clang120.pkg](https://root.cern/download/root_v6.28.02.macos-11.7-arm64-clang120.pkg) | 343M |
| macOS 11.7 arm64 Xcode 12 | [root_v6.28.02.macos-11.7-arm64-clang120.tar.gz](https://root.cern/download/root_v6.28.02.macos-11.7-arm64-clang120.tar.gz) | 223M |
| macOS 11.7 x86_64 Xcode 12 | [root_v6.28.02.macos-11.7-x86_64-clang120.pkg](https://root.cern/download/root_v6.28.02.macos-11.7-x86_64-clang120.pkg) | 358M |
| macOS 11.7 x86_64 Xcode 12 | [root_v6.28.02.macos-11.7-x86_64-clang120.tar.gz](https://root.cern/download/root_v6.28.02.macos-11.7-x86_64-clang120.tar.gz) | 234M |
| macOS 12.6 arm64 Xcode 14 | [root_v6.28.02.macos-12.6-arm64-clang140.pkg](https://root.cern/download/root_v6.28.02.macos-12.6-arm64-clang140.pkg) | 341M |
| macOS 12.6 arm64 Xcode 14 | [root_v6.28.02.macos-12.6-arm64-clang140.tar.gz](https://root.cern/download/root_v6.28.02.macos-12.6-arm64-clang140.tar.gz) | 222M |
| macOS 12.6 x86_64 Xcode 14 | [root_v6.28.02.macos-12.6-x86_64-clang140.pkg](https://root.cern/download/root_v6.28.02.macos-12.6-x86_64-clang140.pkg) | 354M |
| macOS 12.6 x86_64 Xcode 14 | [root_v6.28.02.macos-12.6-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.28.02.macos-12.6-x86_64-clang140.tar.gz) | 233M |
| macOS 13.2 arm64 Xcode 14 | [root_v6.28.02.macos-13.2-arm64-clang140.pkg](https://root.cern/download/root_v6.28.02.macos-13.2-arm64-clang140.pkg) | 341M |
| macOS 13.2 arm64 Xcode 14 | [root_v6.28.02.macos-13.2-arm64-clang140.tar.gz](https://root.cern/download/root_v6.28.02.macos-13.2-arm64-clang140.tar.gz) | 222M |
| macOS 13.2 x86_64 Xcode 14 | [root_v6.28.02.macos-13.2-x86_64-clang140.pkg](https://root.cern/download/root_v6.28.02.macos-13.2-x86_64-clang140.pkg) | 354M |
| macOS 13.2 x86_64 Xcode 14 | [root_v6.28.02.macos-13.2-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.28.02.macos-13.2-x86_64-clang140.tar.gz) | 233M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.28.02.win32.vc17.debug.exe](https://root.cern/download/root_v6.28.02.win32.vc17.debug.exe) | 232M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.28.02.win32.vc17.debug.zip](https://root.cern/download/root_v6.28.02.win32.vc17.debug.zip) | 352M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.28.02.win32.vc17.exe](https://root.cern/download/root_v6.28.02.win32.vc17.exe) | 120M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.28.02.win32.vc17.zip](https://root.cern/download/root_v6.28.02.win32.vc17.zip) | 164M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.28.02.win64.vc17.exe](https://root.cern/download/root_v6.28.02.win64.vc17.exe) | 125M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.28.02.win64.vc17.zip](https://root.cern/download/root_v6.28.02.win64.vc17.zip) | 171M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/arm64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/arm64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/arm64-mac132-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-fedoraversion_id=36-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-mac132-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.02/x86_64-ubuntu22-gcc113-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-28-02 v6-28-02
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
