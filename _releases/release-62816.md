---
layout: releases
version: 6.28.16
release_date: 2026-06-18
state:
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Release Notes
The release notes for this release can be found [here](https://root.cern/doc/v628/release-notes.html#release-6.28.16).

## Binary distributions
Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Alma 8    | [root_v6.28.16.Linux-AlmaLinux8.10x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.28.16.Linux-AlmaLinux8.10x86_64-gcc8.5.tar.gz) | 260M |
| Alma 9    | [root_v6.28.16.Linux-AlmaLinux9.8x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.28.16.Linux-AlmaLinux9.8x86_64-gcc11.5.tar.gz) | 277M |
| Alma 10   | [root_v6.28.16.Linux-AlmaLinux10.2x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.28.16.Linux-AlmaLinux10.2x86_64-gcc14.3.tar.gz) | 284M |
| Ubuntu 22 | [root_v6.28.16.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.28.16.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 276M |
| Ubuntu 24 | [root_v6.28.16.Linux-ubuntu24-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.28.16.Linux-ubuntu24-x86_64-gcc13.3.tar.gz) | 274M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.28.16.source.tar.gz](https://root.cern/download/root_v6.28.16.source.tar.gz) | 177M |

## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.16/almalinux10.2x86_64-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.16/almalinux8.10x86_64-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.16/almalinux9.8x86_64-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.16/x86_64-ubuntu22-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.16/x86_64-ubuntu24-gcc133-opt
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:
~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-28-16 v6-28-16
~~~
See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.

## Windows
Windows 10/7/... are supported. We offer two packaging types:
 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to `C:\root` then call `C:\root\bin\thisroot.bat` before using ROOT to set up required environment variables. Call instead `thisroot.ps1` if you run from a `powershell` (the default terminal in Visual Studio Code).

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio (and Python) than the one installed on your system.
 * Don't forget to select the component “Desktop development with C++" when running the Visual Studio Installer.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).

