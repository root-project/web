---
layout: releases
version: 6.28/04
release_date: 2023-05-07

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Retracted
Due to a [security vulnerability](/about/security#known-security-issues), this version of ROOT has been retracted; please upgrade to [v6.28/10](/releases/release-62810).

## Highlights

This opatch release includes important improvements, including support for

- GCC 13
- Xcode 14
- macOS 13.3

It also introduces preliminary, non-production support for C++20:
please [report](https://github.com/root-project/root/issues/new?assignees=&labels=bug&template=bug_report.md&title=) any issues you see with ROOT while migrating your software to C++20, so we as a community can make progress quickly.

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v628/release-notes.html#release-6.2804).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | root_v6.28.04.source.tar.gz | 177M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | root_v6.28.04.Linux-centos8-x86_64-gcc8.5.tar.gz | 225M |
| Fedora 36 | root_v6.28.04.Linux-fedoraVERSION_ID=36-x86_64-gcc12.2.tar.gz | 301M |
| Ubuntu 18.04 | root_v6.28.04.Linux-ubuntu18-x86_64-gcc7.5.tar.gz | 243M |
| Ubuntu 20.04 | root_v6.28.04.Linux-ubuntu20-x86_64-gcc9.4.tar.gz | 244M |
| Ubuntu 22.04 | root_v6.28.04.Linux-ubuntu22-x86_64-gcc11.3.tar.gz | 291M |
| macOS 11.7 arm64 Xcode 12 | root_v6.28.04.macos-11.7-arm64-clang120.pkg | 344M |
| macOS 11.7 arm64 Xcode 12 | root_v6.28.04.macos-11.7-arm64-clang120.tar.gz | 223M |
| macOS 11.7 x86_64 Xcode 12 | root_v6.28.04.macos-11.7-x86_64-clang120.pkg | 359M |
| macOS 11.7 x86_64 Xcode 12 | root_v6.28.04.macos-11.7-x86_64-clang120.tar.gz | 235M |
| macOS 12.6 arm64 Xcode 14 | root_v6.28.04.macos-12.6-arm64-clang140.pkg | 341M |
| macOS 12.6 arm64 Xcode 14 | root_v6.28.04.macos-12.6-arm64-clang140.tar.gz | 223M |
| macOS 12.6 x86_64 Xcode 14 | root_v6.28.04.macos-12.6-x86_64-clang140.pkg | 355M |
| macOS 12.6 x86_64 Xcode 14 | root_v6.28.04.macos-12.6-x86_64-clang140.tar.gz | 234M |
| macOS 13.3 arm64 Xcode 14 | root_v6.28.04.macos-13.3-arm64-clang140.pkg | 354M |
| macOS 13.3 arm64 Xcode 14 | root_v6.28.04.macos-13.3-arm64-clang140.tar.gz | 230M |
| macOS 13.3 x86_64 Xcode 14 | root_v6.28.04.macos-13.3-x86_64-clang140.pkg | 367M |
| macOS 13.3 x86_64 Xcode 14 | root_v6.28.04.macos-13.3-x86_64-clang140.tar.gz | 240M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.28.04.win32.vc17.debug.exe | 233M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.28.04.win32.vc17.debug.zip | 352M |
| Windows Visual Studio 2022 32-bit x86  | root_v6.28.04.win32.vc17.exe | 120M |
| Windows Visual Studio 2022 32-bit x86  | root_v6.28.04.win32.vc17.zip | 164M |
| Windows Visual Studio 2022 64-bit x64  | root_v6.28.04.win64.vc17.exe | 125M |
| Windows Visual Studio 2022 64-bit x64  | root_v6.28.04.win64.vc17.zip | 172M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/arm64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/arm64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/arm64-mac133-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-fedoraversion_id=36-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-mac133-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.04/x86_64-ubuntu22-gcc113-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-28-04 v6-28-04
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
