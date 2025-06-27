---
layout: releases
version: 6.34.10
release_date: 2025-06-27
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v634/release-notes.html#release-6.34.10).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.34.10.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.34.10.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 280M |
| Almalinux 9.6 | [root_v6.34.10.Linux-almalinux9.6-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.34.10.Linux-almalinux9.6-x86_64-gcc11.5.tar.gz) | 299M |
| Almalinux 10.0 | [root_v6.34.10.Linux-almalinux10.0-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.10.Linux-almalinux10.0-x86_64-gcc14.2.tar.gz) | 309M |
| Debian 12 | [root_v6.34.10.Linux-debian12-x86_64-gcc12.2.tar.gz](https://root.cern/download/root_v6.34.10.Linux-debian12-x86_64-gcc12.2.tar.gz) | 286M |
| Fedora 41 | [root_v6.34.10.Linux-fedora41-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.34.10.Linux-fedora41-x86_64-gcc14.3.tar.gz) | 296M |
| Ubuntu 22.04 | [root_v6.34.10.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.34.10.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 289M |
| Ubuntu 24.04 | [root_v6.34.10.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.34.10.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 287M |
| macOS 15.5 arm64 Xcode 17 | [root_v6.34.10.macos-15.5-arm64-clang170.pkg](https://root.cern/download/root_v6.34.10.macos-15.5-arm64-clang170.pkg) | 443M |
| macOS 15.5 arm64 Xcode 17 | [root_v6.34.10.macos-15.5-arm64-clang170.tar.gz](https://root.cern/download/root_v6.34.10.macos-15.5-arm64-clang170.tar.gz) | 293M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.34.10.source.tar.gz](https://root.cern/download/root_v6.34.10.source.tar.gz) | 190M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/arm64-mac155-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-almalinux10.0-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-almalinux9.6-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-debian12-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-fedora41-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.10/x86_64-ubuntu24.04-gcc133-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-34-10 v6-34-10
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

