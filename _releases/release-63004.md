---
layout: releases
version: 6.30.04
release_date: 2024-01-31

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

This patch release of the 6.30 branch not only features a few bug fixes, but rather remarkable runtime performance optimizations.
The memory footprint of the plugin manager has been reduced. Moreover, the mechanism by which symbols are looked up by the interpreter was improved, avoiding to open and close a large number 
of libraries at startup, which improves considerably the user experience as well as cpu efficiency on batch jobs. More verbose output is now provided if wrong settings are used for the web-based widgets, 
the usage of the loopback device is enforced and only one connection is allowed to RBrowser.

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v630/release-notes.html#release-6.3004).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Centosstream 8 | [root_v6.30.04.Linux-centosstream8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.30.04.Linux-centosstream8-x86_64-gcc8.5.tar.gz) | 272M |
| Centosstream 9 | [root_v6.30.04.Linux-centosstream9-x86_64-gcc11.3.tar.gz](https://root.cern/download/root_v6.30.04.Linux-centosstream9-x86_64-gcc11.3.tar.gz) | 287M |
| Ubuntu 20.04 | [root_v6.30.04.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.30.04.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz) | 293M |
| Ubuntu 22.04 | [root_v6.30.04.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.30.04.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 293M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.04.macos-12.7-arm64-clang140.pkg](https://root.cern/download/root_v6.30.04.macos-12.7-arm64-clang140.pkg) | 423M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.30.04.macos-12.7-arm64-clang140.tar.gz](https://root.cern/download/root_v6.30.04.macos-12.7-arm64-clang140.tar.gz) | 270M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.04.macos-12.7-x86_64-clang140.pkg](https://root.cern/download/root_v6.30.04.macos-12.7-x86_64-clang140.pkg) | 438M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.30.04.macos-12.7-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.30.04.macos-12.7-x86_64-clang140.tar.gz) | 281M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.04.macos-13.6-arm64-clang150.pkg](https://root.cern/download/root_v6.30.04.macos-13.6-arm64-clang150.pkg) | 445M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.30.04.macos-13.6-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.04.macos-13.6-arm64-clang150.tar.gz) | 282M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.04.macos-13.6-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.04.macos-13.6-x86_64-clang150.pkg) | 460M |
| macOS 13.6 x86_64 Xcode 15 | [root_v6.30.04.macos-13.6-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.04.macos-13.6-x86_64-clang150.tar.gz) | 293M |
| macOS 14.3 arm64 Xcode 15 | [root_v6.30.04.macos-14.3-arm64-clang150.pkg](https://root.cern/download/root_v6.30.04.macos-14.3-arm64-clang150.pkg) | 445M |
| macOS 14.3 arm64 Xcode 15 | [root_v6.30.04.macos-14.3-arm64-clang150.tar.gz](https://root.cern/download/root_v6.30.04.macos-14.3-arm64-clang150.tar.gz) | 282M |
| macOS 14.3 x86_64 Xcode 15 | [root_v6.30.04.macos-14.3-x86_64-clang150.pkg](https://root.cern/download/root_v6.30.04.macos-14.3-x86_64-clang150.pkg) | 460M |
| macOS 14.3 x86_64 Xcode 15 | [root_v6.30.04.macos-14.3-x86_64-clang150.tar.gz](https://root.cern/download/root_v6.30.04.macos-14.3-x86_64-clang150.tar.gz) | 293M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.04.win32.vc17.debug.exe](https://root.cern/download/root_v6.30.04.win32.vc17.debug.exe) | 236M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.30.04.win32.vc17.debug.zip](https://root.cern/download/root_v6.30.04.win32.vc17.debug.zip) | 359M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.04.win64.vc17.exe](https://root.cern/download/root_v6.30.04.win64.vc17.exe) | 125M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.30.04.win64.vc17.zip](https://root.cern/download/root_v6.30.04.win64.vc17.zip) | 171M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.30.04.source.tar.gz](https://root.cern/download/root_v6.30.04.source.tar.gz) | 176M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/arm64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/arm64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/arm64-mac143-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-centosstream8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-centosstream9-gcc113-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-mac136-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-mac143-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-ubuntu20.04-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.30.04/x86_64-ubuntu22.04-gcc114-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-30-04 v6-30-04
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
