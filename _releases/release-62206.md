---
layout: releases
version: 6.22/06
release_date: 2020-12-01
state: latest

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v622/release-notes.html#release-6.2206).
Most notable are added support for macOS Big Sur (11.0), on both x64_64 and M1 (Apple Silicon).

The previous patch release 6.22/04 was not announced due to a fatal issue in the I/O subsystem discovered right after tagging.

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.22.06.source.tar.gz](https://root.cern/download/root_v6.22.06.source.tar.gz) | 165M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 7 | [root_v6.22.06.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.22.06.Linux-centos7-x86_64-gcc4.8.tar.gz) | 186M |
| Fedora 30 | [root_v6.22.06.Linux-fedora30-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.22.06.Linux-fedora30-x86_64-gcc9.3.tar.gz) | 225M |
| Fedora 31 | [root_v6.22.06.Linux-fedora31-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.22.06.Linux-fedora31-x86_64-gcc9.3.tar.gz) | 225M |
| Fedora 32 | [root_v6.22.06.Linux-fedora32-x86_64-gcc10.2.tar.gz](https://root.cern/download/root_v6.22.06.Linux-fedora32-x86_64-gcc10.2.tar.gz) | 227M |
| Ubuntu 16 | [root_v6.22.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.22.06.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 200M |
| Ubuntu 18 | [root_v6.22.06.Linux-ubuntu18-x86_64-gcc7.5.tar.gz](https://root.cern/download/root_v6.22.06.Linux-ubuntu18-x86_64-gcc7.5.tar.gz) | 218M |
| Ubuntu 19 | [root_v6.22.06.Linux-ubuntu19-x86_64-gcc9.2.tar.gz](https://root.cern/download/root_v6.22.06.Linux-ubuntu19-x86_64-gcc9.2.tar.gz) | 223M |
| Ubuntu 20 | [root_v6.22.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.22.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz) | 224M |
| macOS 10.13 x86_64 Xcode 10 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.13-x86_64-clang100.pkg` | 315M |
| macOS 10.13 x86_64 Xcode 10 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.13-x86_64-clang100.tar.gz` | 200M |
| macOS 10.14 x86_64 Xcode 10 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.14-x86_64-clang100.pkg` | 314M |
| macOS 10.14 x86_64 Xcode 10 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.14-x86_64-clang100.tar.gz` | 200M |
| macOS 10.15 x86_64 Xcode 12 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.15-x86_64-clang120.pkg` | 308M |
| macOS 10.15 x86_64 Xcode 12 | `curl -O https://root.cern/download/root_v6.22.06.macos-10.15-x86_64-clang120.tar.gz` | 197M |
| macOS 11.0 x86_64 Xcode 12 | `curl -O https://root.cern/download/root_v6.22.06.macos-11.0-x86_64-clang120.pkg` | 309M |
| macOS 11.0 x86_64 Xcode 12 | `curl -O https://root.cern/download/root_v6.22.06.macos-11.0-x86_64-clang120.tar.gz` | 197M |
| **preview** Windows Visual Studio 2019 (debug) | [root_v6.22.06.win32.vc16.debug.exe](https://root.cern/download/root_v6.22.06.win32.vc16.debug.exe) | 154M |
| **preview** Windows Visual Studio 2019 (debug) | [root_v6.22.06.win32.vc16.debug.zip](https://root.cern/download/root_v6.22.06.win32.vc16.debug.zip) | 226M |
| **preview** Windows Visual Studio 2019 | [root_v6.22.06.win32.vc16.exe](https://root.cern/download/root_v6.22.06.win32.vc16.exe) |  84M |
| **preview** Windows Visual Studio 2019 | [root_v6.22.06.win32.vc16.zip](https://root.cern/download/root_v6.22.06.win32.vc16.zip) | 113M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-fedora30-gcc93-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-fedora31-gcc93-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-fedora32-gcc102-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-mac1013-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-mac1014-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-mac1015-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-mac110-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-ubuntu19-gcc92-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-ubuntu20-gcc93-opt
~~~


## Example for setting up ROOT from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.06/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-22-06 v6-22-06
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
