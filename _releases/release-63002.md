---
layout: releases
version: 6.30/02
release_date: 2023-11-28

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

This release addresses a security issue found after the initial release of 6.30.00.
Please upgrade!

Other than that, these are the highlights for 6.30.00 and 6.30.02:

`RDataFrame` now has a [ProgressBar](https://root.cern/doc/v630/classROOT_1_1RDataFrame.html#progressbar) to do the obvious
and [RDatasetSpec](https://root.cern/doc/v630/classROOT_1_1RDF_1_1Experimental_1_1RDatasetSpec.html) to programmatically define metadata and input files.
See that in action in the tutorial [`df106_HiggsToFourLeptons.py`](https://root.cern/doc/v630/df106__HiggsToFourLeptons_8py.html) / [`df106_HiggsToFourLeptons.C`](https://root.cern/doc/v630/df106__HiggsToFourLe\
ptons_8C.html).

Distributed `RDataFrame` - just like many other parts of ROOT - got a performance boost!

A new plot type, [`TScatter`](https://root.cern/blog/new-class-tscatter/) is now available:
it's able to draw a scatter plot of four variables in a single plot.

Minuit2 is now the default minimizer.

In other news, this release adds support for GCC 13 and macOS 14.
It requires C++17.
Python2 support is now deprecated.


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v630/release-notes.html#release-6.3002).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.8 | [root_v6.30.02.Linux-almalinux8.8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.30.02.Linux-almalinux8.8-x86_64-gcc8.5.tar.gz) | 269M |
| Almalinux 9.3 | [root_v6.30.02.Linux-almalinux9.3-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.30.02.Linux-almalinux9.3-x86_64-gcc11.4.tar.gz) | 284M |
| Centosstream 8 | [root_v6.30.02.Linux-centosstream8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.30.02.Linux-centosstream8-x86_64-gcc8.5.tar.gz) | 272M |
| Centosstream 9 | [root_v6.30.02.Linux-centosstream9-x86_64-gcc11.3.tar.gz](https://root.cern/download/root_v6.30.02.Linux-centosstream9-x86_64-gcc11.3.tar.gz) | 287M |
| Fedora 37 | [root_v6.30.02.Linux-fedora37-x86_64-gcc12.3.tar.gz](https://root.cern/download/root_v6.30.02.Linux-fedora37-x86_64-gcc12.3.tar.gz) | 283M |
| Fedora 38 | [root_v6.30.02.Linux-fedora38-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.30.02.Linux-fedora38-x86_64-gcc13.2.tar.gz) | 287M |
| Fedora 39 | [root_v6.30.02.Linux-fedora39-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.30.02.Linux-fedora39-x86_64-gcc13.2.tar.gz) | 287M |
| Ubuntu 20.04 | [root_v6.30.02.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.30.02.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz) | 278M |
| Ubuntu 22.04 | [root_v6.30.02.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.30.02.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 282M |
| Ubuntu 23.04 | [root_v6.30.02.Linux-ubuntu23.04-x86_64-gcc12.3.tar.gz](https://root.cern/download/root_v6.30.02.Linux-ubuntu23.04-x86_64-gcc12.3.tar.gz) | 283M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.02.macos-12.7-arm64-clang140.pkg](https://root.cern/download/root_v6.30.02.macos-12.7-arm64-clang140.pkg) | 423M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.02.macos-12.7-arm64-clang140.tar.gz](https://root.cern/download/root_v6.30.02.macos-12.7-arm64-clang140.tar.gz) | 270M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.02.macos-12.7-x86_64-clang140.pkg](https://root.cern/download/root_v6.30.02.macos-12.7-x86_64-clang140.pkg) | 437M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.02.macos-12.7-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.30.02.macos-12.7-x86_64-clang140.tar.gz) | 281M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.02.macos-13.6-arm64-clang150.pkg](https://root.cern/download/root_v6.30.02.macos-13.6-arm64-clang150.pkg) | 445M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.02.macos-13.6-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.02.macos-13.6-arm64-clang150.tar.gz) | 282M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.02.macos-13.6-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.02.macos-13.6-x86_64-clang150.pkg) | 459M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.02.macos-13.6-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.02.macos-13.6-x86_64-clang150.tar.gz) | 293M |
| macOS 14.1 arm64 Xcode 15 | [root_v6.30.02.macos-14.1-arm64-clang150.pkg](https://root.cern/download/root_v6.30.02.macos-14.1-arm64-clang150.pkg) | 445M |
| macOS 14.1 arm64 Xcode 15 | [root_v6.30.02.macos-14.1-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.02.macos-14.1-arm64-clang150.tar.gz) | 282M |
| macOS 14.1 x86_64 Xcode 15 | [root_v6.30.02.macos-14.1-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.02.macos-14.1-x86_64-clang150.pkg) | 459M |
| macOS 14.1 x86_64 Xcode 15 | [root_v6.30.02.macos-14.1-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.02.macos-14.1-x86_64-clang150.tar.gz) | 293M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.02.win32.vc17.debug.exe](https://root.cern/download/root_v6.30.02.win32.vc17.debug.exe) | 237M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.02.win32.vc17.debug.zip](https://root.cern/download/root_v6.30.02.win32.vc17.debug.zip) | 359M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.30.02.win32.vc17.exe](https://root.cern/download/root_v6.30.02.win32.vc17.exe) | 119M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.30.02.win32.vc17.zip](https://root.cern/download/root_v6.30.02.win32.vc17.zip) | 163M |
| Windows Visual Studio 2022 64-bit x64  (debug) | [root_v6.30.02.win64.vc17.debug.exe](https://root.cern/download/root_v6.30.02.win64.vc17.debug.exe) | 245M |
| Windows Visual Studio 2022 64-bit x64  (debug) | [root_v6.30.02.win64.vc17.debug.zip](https://root.cern/download/root_v6.30.02.win64.vc17.debug.zip) | 372M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.02.win64.vc17.exe](https://root.cern/download/root_v6.30.02.win64.vc17.exe) | 125M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.02.win64.vc17.zip](https://root.cern/download/root_v6.30.02.win64.vc17.zip) | 171M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.30.02.source.tar.gz](https://root.cern/download/root_v6.30.02.source.tar.gz) | 176M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/arm64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/arm64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/arm64-mac141-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-almalinux8.8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-almalinux9.3-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-centosstream8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-centosstream9-gcc113-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-fedora37-gcc123-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-fedora38-gcc132-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-fedora39-gcc132-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-mac141-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-ubuntu20.04-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.02/x86_64-ubuntu23.04-gcc123-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-30-02 v6-30-02
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.

## Windows

Windows 10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
