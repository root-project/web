---
layout: releases
version: 6.26/10
release_date: 2022-11-16
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Retracted
Due to a [security vulnerability](/about/security#known-security-issues), this version of ROOT has been retracted; please upgrade to [v6.26/14](/releases/release-62614).

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.2610).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | root_v6.26.10.source.tar.gz | 186M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | root_v6.26.10.Linux-centos8-x86_64-gcc8.5.tar.gz | 209M |
| Fedora 32 | root_v6.26.10.Linux-fedora32-x86_64-gcc10.3.tar.gz | 231M |
| Fedora 34 | root_v6.26.10.Linux-fedora34-x86_64-gcc11.2.tar.gz | 278M |
| Fedora 36 | root_v6.26.10.Linux-fedora36-x86_64-gcc12.2.tar.gz | 279M |
| Ubuntu 18.04 | root_v6.26.10.Linux-ubuntu18-x86_64-gcc7.5.tar.gz | 226M |
| Ubuntu 20.04 | root_v6.26.10.Linux-ubuntu20-x86_64-gcc9.4.tar.gz | 227M |
| Ubuntu 22.04 | root_v6.26.10.Linux-ubuntu22-x86_64-gcc11.3.tar.gz | 268M |
| macOS 11.7 arm64 Xcode 12 | root_v6.26.10.macos-11.7-arm64-clang120.pkg | 320M |
| macOS 11.7 arm64 Xcode 12 | root_v6.26.10.macos-11.7-arm64-clang120.tar.gz | 206M |
| macOS 11.7 x86_64 Xcode 12 | root_v6.26.10.macos-11.7-x86_64-clang120.pkg | 336M |
| macOS 11.7 x86_64 Xcode 12 | root_v6.26.10.macos-11.7-x86_64-clang120.tar.gz | 219M |
| macOS 12.6 arm64 Xcode 14 | root_v6.26.10.macos-12.6-arm64-clang140.pkg | 318M |
| macOS 12.6 arm64 Xcode 14 | root_v6.26.10.macos-12.6-arm64-clang140.tar.gz | 206M |
| macOS 12.6 x86_64 Xcode 14 | root_v6.26.10.macos-12.6-x86_64-clang140.pkg | 333M |
| macOS 12.6 x86_64 Xcode 14 | root_v6.26.10.macos-12.6-x86_64-clang140.tar.gz | 218M |
| macOS 13.0 arm64 Xcode 14 | root_v6.26.10.macos-13.0-arm64-clang140.pkg | 318M |
| macOS 13.0 arm64 Xcode 14 | root_v6.26.10.macos-13.0-arm64-clang140.tar.gz | 206M |
| macOS 13.0 x86_64 Xcode 14 | root_v6.26.10.macos-13.0-x86_64-clang140.pkg | 333M |
| macOS 13.0 x86_64 Xcode 14 | root_v6.26.10.macos-13.0-x86_64-clang140.tar.gz | 218M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.26.10.win32.vc17.debug.exe | 210M |
| Windows Visual Studio 2022 32-bit x86  (debug) | root_v6.26.10.win32.vc17.debug.zip | 319M |
| Windows Visual Studio 2022 32-bit x86  | root_v6.26.10.win32.vc17.exe | 107M |
| Windows Visual Studio 2022 32-bit x86  | root_v6.26.10.win32.vc17.zip | 146M |
| Windows Visual Studio 2022 64-bit x64  | root_v6.26.10.win64.vc17.exe | 112M |
| Windows Visual Studio 2022 64-bit x64  | root_v6.26.10.win64.vc17.zip | 153M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/arm64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/arm64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/arm64-mac130-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-fedora32-gcc103-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-fedora34-gcc112-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-fedora36-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-mac117-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-mac126-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-mac130-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.10/x86_64-ubuntu22-gcc113-opt
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-10 v6-26-10
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
