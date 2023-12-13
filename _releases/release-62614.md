---
layout: releases
version: 6.26/14
release_date: 2023-11-28
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

This release addresses a security issue found in 6.26/12 and all other previous releases of the 6.26 cycle.
Please upgrade!

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.2614).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | [root_v6.26.14.Linux-centos8-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.26.14.Linux-centos8-x86_64-gcc8.5.tar.gz) | 209M |
| Ubuntu 20.04 | [root_v6.26.14.Linux-ubuntu20-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.26.14.Linux-ubuntu20-x86_64-gcc9.4.tar.gz) | 227M |
| Ubuntu 22.04 | [root_v6.26.14.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.26.14.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 268M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.26.14.macos-12.7-arm64-clang140.pkg](https://root.cern/download/root_v6.26.14.macos-12.7-arm64-clang140.pkg) | 319M |
| macOS 12.7 arm64 Xcode 14 | [root_v6.26.14.macos-12.7-arm64-clang140.tar.gz](https://root.cern/download/root_v6.26.14.macos-12.7-arm64-clang140.tar.gz) | 207M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.14.macos-12.7-x86_64-clang140.pkg](https://root.cern/download/root_v6.26.14.macos-12.7-x86_64-clang140.pkg) | 334M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.14.macos-12.7-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.26.14.macos-12.7-x86_64-clang140.tar.gz) | 218M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.26.14.win32.vc17.debug.exe](https://root.cern/download/root_v6.26.14.win32.vc17.debug.exe) | 211M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.26.14.win32.vc17.debug.zip](https://root.cern/download/root_v6.26.14.win32.vc17.debug.zip) | 319M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.26.14.win32.vc17.exe](https://root.cern/download/root_v6.26.14.win32.vc17.exe) | 107M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.26.14.win32.vc17.zip](https://root.cern/download/root_v6.26.14.win32.vc17.zip) | 146M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.26.14.win64.vc17.exe](https://root.cern/download/root_v6.26.14.win64.vc17.exe) | 112M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.26.14.win64.vc17.zip](https://root.cern/download/root_v6.26.14.win64.vc17.zip) | 153M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.26.14.source.tar.gz](https://root.cern/download/root_v6.26.14.source.tar.gz) | 186M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.14/arm64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.14/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.14/x86_64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.14/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.14/x86_64-ubuntu22-gcc114-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-14 v6-26-14
~~~

See [instructions to build from source](../install/#build-from-source){:target="\_blank"}.

## Windows

Windows 10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
