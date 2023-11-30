---
layout: releases
version: 6.26/06
release_date: 2022-07-29
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Retracted
Due to a [security vulnerability](/about/security#known-security-issues), this version of ROOT has been retracted; please upgrade to [v6.26/14](/releases/release-62614).

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.2606).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | root_v6.26.06.source.tar.gz | 186M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | root_v6.26.06.Linux-centos8-x86_64-gcc8.5.tar.gz | 208M |
| Fedora 32 | root_v6.26.06.Linux-fedora32-x86_64-gcc10.3.tar.gz | 230M |
| Fedora 34 | root_v6.26.06.Linux-fedora34-x86_64-gcc11.2.tar.gz | 277M |
| Ubuntu 18.04 | root_v6.26.06.Linux-ubuntu18-x86_64-gcc7.5.tar.gz | 225M |
| Ubuntu 20.04 | root_v6.26.06.Linux-ubuntu20-x86_64-gcc9.4.tar.gz | 226M |
| Ubuntu 22.04 | root_v6.26.06.Linux-ubuntu22-x86_64-gcc11.2.tar.gz | 267M |
| macOS 10.15 x86_64 Xcode 12 | root_v6.26.06.macos-10.15-x86_64-clang120.pkg | 337M |
| macOS 10.15 x86_64 Xcode 12 | root_v6.26.06.macos-10.15-x86_64-clang120.tar.gz | 219M |
| macOS 11.6 arm64 Xcode 12 | root_v6.26.06.macos-11.6-arm64-clang120.pkg | 320M |
| macOS 11.6 arm64 Xcode 12 | root_v6.26.06.macos-11.6-arm64-clang120.tar.gz | 206M |
| macOS 11.6 x86_64 Xcode 12 | root_v6.26.06.macos-11.6-x86_64-clang120.pkg | 335M |
| macOS 11.6 x86_64 Xcode 12 | root_v6.26.06.macos-11.6-x86_64-clang120.tar.gz | 218M |
| macOS 12.4 arm64 Xcode 13 | root_v6.26.06.macos-12.4-arm64-clang131.pkg | 321M |
| macOS 12.4 arm64 Xcode 13 | root_v6.26.06.macos-12.4-arm64-clang131.tar.gz | 207M |
| macOS 12.5 x86_64 Xcode 13 | root_v6.26.06.macos-12.5-x86_64-clang131.pkg | 337M |
| macOS 12.5 x86_64 Xcode 13 | root_v6.26.06.macos-12.5-x86_64-clang131.tar.gz | 219M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.26.06.win32.vc17.debug.exe | 208M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.26.06.win32.vc17.debug.zip | 317M |
| Windows Visual Studio 2022 32-bit x86  | removed due to virus false positives, stay tuned | N/A |
| Windows Visual Studio 2022 32-bit x86  | removed due to virus false positives, stay tuned | N/A |
| Windows Visual Studio 2022 64-bit x64  | removed due to virus false positives, stay tuned | N/A |
| Windows Visual Studio 2022 64-bit x64  | removed due to virus false positives, stay tuned | N/A |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/arm64-mac116-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/arm64-mac124-clang131-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-fedora32-gcc103-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-fedora34-gcc112-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-mac1015-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-mac116-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-mac125-clang131-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.06/x86_64-ubuntu22-gcc112-opt
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-06 v6-26-06
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
