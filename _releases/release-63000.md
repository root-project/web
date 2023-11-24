---
layout: releases
version: 6.30/00
release_date: 2023-11-07
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

`RDataFrame` now has a [ProgressBar](https://root.cern/doc/v630/classROOT_1_1RDataFrame.html#progressbar) to do the obvious
and [RDatasetSpec](https://root.cern/doc/v630/classROOT_1_1RDF_1_1Experimental_1_1RDatasetSpec.html) to programmatically define metadata and input files.
See that in action in the tutorial [`df106_HiggsToFourLeptons.py`](https://root.cern/doc/v630/df106__HiggsToFourLeptons_8py.html) / [`df106_HiggsToFourLeptons.C`](https://root.cern/doc/v630/df106__HiggsToFourLeptons_8C.html).

Distributed `RDataFrame` - just like many other parts of ROOT - got a performance boost!

A new plot type, [`TScatter`](https://root.cern/blog/new-class-tscatter/) is now available:
it's able to draw a scatter plot of four variables in a single plot.

Minuit2 is now the default minimizer.

In other news, this release adds support for GCC 12 and macOS 14.
It requires C++17.
Python2 support is now deprecated.


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v630/release-notes.html).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Alma Linux 8.8 | [root_v6.30.00.Linux-AlmaLinux8.8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.30.00.Linux-AlmaLinux8.8-x86_64-gcc8.5.tar.gz) | 272M |
| Alma Linux 9.2 | [root_v6.30.00.Linux-AlmaLinux9.2-x86_64-gcc11.3.tar.gz](https://root.cern/download/root_v6.30.00.Linux-AlmaLinux9.2-x86_64-gcc11.3.tar.gz) | 287M |
| CentOS 8 | [root_v6.30.00.Linux-centos8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.30.00.Linux-centos8-x86_64-gcc8.5.tar.gz) | 275M |
| CentOS 9 | [root_v6.30.00.Linux-centos9-x86_64-gcc11.3.tar.gz](https://root.cern/download/root_v6.30.00.Linux-centos9-x86_64-gcc11.3.tar.gz) | 291M |
| Fedora 37 | [root_v6.30.00.Linux-Fedora37-x86_64-gcc12.3.tar.gz](https://root.cern/download/root_v6.30.00.Linux-Fedora37-x86_64-gcc12.3.tar.gz) | 286M |
| Fedora 38 | [root_v6.30.00.Linux-Fedora38-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.30.00.Linux-Fedora38-x86_64-gcc13.2.tar.gz) | 290M |
| Fedora 39 | [root_v6.30.00.Linux-Fedora39-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.30.00.Linux-Fedora39-x86_64-gcc13.2.tar.gz) | 290M |
| Ubuntu 20 | [root_v6.30.00.Linux-ubuntu20-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.30.00.Linux-ubuntu20-x86_64-gcc9.4.tar.gz) | 296M |
| Ubuntu 22 | [root_v6.30.00.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.30.00.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 297M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.00.macos-12.7-arm64-clang140.pkg](https://root.cern/download/root_v6.30.00.macos-12.7-arm64-clang140.pkg) | 429M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.00.macos-12.7-arm64-clang140.tar.gz](https://root.cern/download/root_v6.30.00.macos-12.7-arm64-clang140.tar.gz) | 273M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.00.macos-12.7-x86_64-clang140.pkg](https://root.cern/download/root_v6.30.00.macos-12.7-x86_64-clang140.pkg) | 443M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.00.macos-12.7-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.30.00.macos-12.7-x86_64-clang140.tar.gz) | 284M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.00.macos-13.6-arm64-clang150.pkg](https://root.cern/download/root_v6.30.00.macos-13.6-arm64-clang150.pkg) | 451M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.00.macos-13.6-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.00.macos-13.6-arm64-clang150.tar.gz) | 285M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.00.macos-13.6-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.00.macos-13.6-x86_64-clang150.pkg) | 465M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.00.macos-13.6-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.00.macos-13.6-x86_64-clang150.tar.gz) | 296M |
| macOS 14.1 arm64 Xcode 15 | [root_v6.30.00.macos-14.1-arm64-clang150.pkg](https://root.cern/download/root_v6.30.00.macos-14.1-arm64-clang150.pkg) | 449M |
| macOS 14.1 arm64 Xcode 15 | [root_v6.30.00.macos-14.1-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.00.macos-14.1-arm64-clang150.tar.gz) | 283M |
| macOS 14.1 x86_64 Xcode 15 | [root_v6.30.00.macos-14.1-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.00.macos-14.1-x86_64-clang150.pkg) | 465M |
| macOS 14.1 x86_64 Xcode 15 | [root_v6.30.00.macos-14.1-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.00.macos-14.1-x86_64-clang150.tar.gz) | 296M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.00.win32.vc17.debug.exe](https://root.cern/download/root_v6.30.00.win32.vc17.debug.exe) | 238M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.00.win32.vc17.debug.zip](https://root.cern/download/root_v6.30.00.win32.vc17.debug.zip) | 361M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.30.00.win32.vc17.exe](https://root.cern/download/root_v6.30.00.win32.vc17.exe) | 121M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.30.00.win32.vc17.zip](https://root.cern/download/root_v6.30.00.win32.vc17.zip) | 166M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.00.win64.vc17.exe](https://root.cern/download/root_v6.30.00.win64.vc17.exe) | 126M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.00.win64.vc17.zip](https://root.cern/download/root_v6.30.00.win64.vc17.zip) | 173M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.30.00.source.tar.gz](https://root.cern/download/root_v6.30.00.source.tar.gz) | 176M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/almalinux8.8x86_64-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/almalinux9.2x86_64-gcc113-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/arm64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/arm64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/arm64-mac141-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-centos9-gcc113-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-fedora37-gcc123-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-fedora38-gcc132-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-fedora39-gcc132-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-mac141-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.00/x86_64-ubuntu22-gcc114-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-30-00 v6-30-00
~~~

See [instructions to build from source](../install/#build-from-source){:target="\_blank"}.

## Windows

Windows 11/10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
