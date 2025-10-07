---
layout: releases
version: 6.32.18
release_date: 2025-10-07
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

This release includes bugfixes for issues signalled by ATLAS and CMS as well as some reorganisation of the supported platforms.
The release notes for this release can be found [here](https://root.cern/doc/v632/release-notes.html#release-6.32.18).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.32.18.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.32.18.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 282M |
| Almalinux 9.6 | [root_v6.32.18.Linux-almalinux9.6-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.32.18.Linux-almalinux9.6-x86_64-gcc11.5.tar.gz) | 299M |
| Almalinux 10.0 | [root_v6.32.18.Linux-almalinux10.0-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.32.18.Linux-almalinux10.0-x86_64-gcc14.2.tar.gz) | 308M |
| Ubuntu 22.04 | [root_v6.32.18.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.32.18.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 288M |
| Ubuntu 24.04 | [root_v6.32.18.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.32.18.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 286M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.32.18.macos-14.8-x86_64-clang160.pkg](https://root.cern/download/root_v6.32.18.macos-14.8-x86_64-clang160.pkg) | 447M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.32.18.macos-14.8-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.32.18.macos-14.8-x86_64-clang160.tar.gz) | 293M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.32.18.macos-15.7-arm64-clang170.pkg](https://root.cern/download/root_v6.32.18.macos-15.7-arm64-clang170.pkg) | 444M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.32.18.macos-15.7-arm64-clang170.tar.gz](https://root.cern/download/root_v6.32.18.macos-15.7-arm64-clang170.tar.gz) | 292M |
| macOS 26.0 arm64 Xcode 17 | [root_v6.32.18.macos-26.0-arm64-clang170.pkg](https://root.cern/download/root_v6.32.18.macos-26.0-arm64-clang170.pkg) | 424M |
| macOS 26.0 arm64 Xcode 17 | [root_v6.32.18.macos-26.0-arm64-clang170.tar.gz](https://root.cern/download/root_v6.32.18.macos-26.0-arm64-clang170.tar.gz) | 281M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.32.18.win32.vc17.exe](https://root.cern/download/root_v6.32.18.win32.vc17.exe) | 119M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.32.18.win32.vc17.zip](https://root.cern/download/root_v6.32.18.win32.vc17.zip) | 162M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.32.18.win64.vc17.exe](https://root.cern/download/root_v6.32.18.win64.vc17.exe) | 123M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.32.18.win64.vc17.zip](https://root.cern/download/root_v6.32.18.win64.vc17.zip) | 168M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.32.18.source.tar.gz](https://root.cern/download/root_v6.32.18.source.tar.gz) | 186M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/arm64-mac157-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/arm64-mac260-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-almalinux10.0-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-almalinux9.6-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-mac148-clang160-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.18/x86_64-ubuntu24.04-gcc133-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-32-18 v6-32-18
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.

## Windows

Windows 10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to `C:\root` then call `C:\root\bin\thisroot.bat` before using ROOT to set up required environment variables. Call instead `thisroot.ps1` if you run from a `powershell` (the default terminal in Visual Studio Code).

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio (and Python) than the one installed on your system.
 * Don't forget to select the component â€œDesktop development with C++" when running the Visual Studio Installer.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).

