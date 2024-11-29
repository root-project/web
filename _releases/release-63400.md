---
layout: releases
version: 6.34.00
release_date: 2024-11-29
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

Six months after the 6.32 release, 6.34 is now available. The new ROOT comes with many new features (see the [release notes](https://root.cern/doc/v634/release-notes.html)) as well as improved stability: more than 200 items in the ROOT trackers have been addressed for this release.

Some highlights:
  - RNTuple: the first version of the RNTuple on-disk binary format was finalized. Future versions of ROOT will be able to read back RNTuple data written as of this release. Check out [this talk at the CHEP 2024 conference](https://indico.cern.ch/event/1338689/contributions/6077632/) and [this blogpost](https://root.cern/blog/rntuple-binary-format) to learn more about RNTuple, the new HEP data storage software technology!
  - Python interface: more stability and functionality, also thanks to the latest Cling C++ interpreter version, powered by LLVM 18.
  - Machine learning training directly from ROOT datasets much larger than the memory of the machine is now possible. Read the data with RDataFrame, apply transformations if needed and then feed your favourite ML tool. For a full description, see [the presentation at CHEP 2024](https://indico.cern.ch/event/1338689/contributions/6015940/)
  - RDataFrame: scaling on many cores was improved, memory usage significantly reduced. Moreover, the interface for distributed execution has been expanded for a more rewarding user experience.
  - RooFit: the power of automatic differentiation can be now transparently used thanks to CLAD - see [this talk at the ICHEP 2024 conference](https://indico.cern.ch/event/1291157/contributions/5889615/).
  - Graphics: Javascript interactive visualisation is now the default for notebooks, moreover the web graphics functionality has been further expanded.
  - Build infrastructure: not a functionality per se, but a boost in stability. This release was integrated and tested on more than ten Linux flavours (on x86, ARM and NVidia GPUs), four types of Windows configurations as well as four macOS versions (yes, the Apple Beta was there too!)

Please note that 6.34 is a short term support release. As such, it is not meant to be used for data taking. It will be superseded by the 6.36 release, which is foreseen in May 2025. Patch releases of 6.34 will be provided until June 30th 2025.

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.34.00-rc1.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 278M |
| Almalinux 9.4 | [root_v6.34.00-rc1.Linux-almalinux9.4-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-almalinux9.4-x86_64-gcc11.4.tar.gz) | 297M |
| Debian 12 | [root_v6.34.00-rc1.Linux-debian12-x86_64-gcc12.2.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-debian12-x86_64-gcc12.2.tar.gz) | 284M |
| Fedora 40 | [root_v6.34.00-rc1.Linux-fedora40-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-fedora40-x86_64-gcc14.2.tar.gz) | 304M |
| Fedora 41 | [root_v6.34.00-rc1.Linux-fedora41-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-fedora41-x86_64-gcc14.2.tar.gz) | 294M |
| Ubuntu 20.04 | [root_v6.34.00-rc1.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz) | 288M |
| Ubuntu 22.04 | [root_v6.34.00-rc1.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 287M |
| Ubuntu 24.04 | [root_v6.34.00-rc1.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz) | 285M |
| Ubuntu 24.10 | [root_v6.34.00-rc1.Linux-ubuntu24.10-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00-rc1.Linux-ubuntu24.10-x86_64-gcc14.2.tar.gz) | 287M |
| macOS 13.7 arm64 Xcode 15 | [root_v6.34.00-rc1.macos-13.7-arm64-clang150.pkg](https://root.cern/download/root_v6.34.00-rc1.macos-13.7-arm64-clang150.pkg) | 414M |
| macOS 13.7 arm64 Xcode 15 | [root_v6.34.00-rc1.macos-13.7-arm64-clang150.tar.gz](https://root.cern/download/root_v6.34.00-rc1.macos-13.7-arm64-clang150.tar.gz) | 271M |
| macOS 14.7 x86_64 Xcode 16 | [root_v6.34.00-rc1.macos-14.7-x86_64-clang160.pkg](https://root.cern/download/root_v6.34.00-rc1.macos-14.7-x86_64-clang160.pkg) | 445M |
| macOS 14.7 x86_64 Xcode 16 | [root_v6.34.00-rc1.macos-14.7-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.34.00-rc1.macos-14.7-x86_64-clang160.tar.gz) | 293M |
| macOS 15.1 arm64 Xcode 16 | [root_v6.34.00-rc1.macos-15.1-arm64-clang160.pkg](https://root.cern/download/root_v6.34.00-rc1.macos-15.1-arm64-clang160.pkg) | 434M |
| macOS 15.1 arm64 Xcode 16 | [root_v6.34.00-rc1.macos-15.1-arm64-clang160.tar.gz](https://root.cern/download/root_v6.34.00-rc1.macos-15.1-arm64-clang160.tar.gz) | 284M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.34.00-rc1.win32.python311.vc17.exe](https://root.cern/download/root_v6.34.00-rc1.win32.python311.vc17.exe) | 122M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.34.00-rc1.win32.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.34.00-rc1.win32.python311.vc17.relwithdebinfo.exe) | 484M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.34.00-rc1.win32.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.34.00-rc1.win32.python311.vc17.relwithdebinfo.zip) | 954M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.34.00-rc1.win32.python311.vc17.zip](https://root.cern/download/root_v6.34.00-rc1.win32.python311.vc17.zip) | 166M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.34.00-rc1.win64.python311.vc17.exe](https://root.cern/download/root_v6.34.00-rc1.win64.python311.vc17.exe) | 126M |
| Windows Visual Studio 2022 64-bit x64 (release with debugging information) | [root_v6.34.00-rc1.win64.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.34.00-rc1.win64.python311.vc17.relwithdebinfo.exe) | 497M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.34.00-rc1.win64.python311.vc17.zip](https://root.cern/download/root_v6.34.00-rc1.win64.python311.vc17.zip) | 173M |
| root_v6.34.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz | [root_v6.34.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.34.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 278M |
| root_v6.34.00.Linux-almalinux9.5-x86_64-gcc11.5.tar.gz | [root_v6.34.00.Linux-almalinux9.5-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.34.00.Linux-almalinux9.5-x86_64-gcc11.5.tar.gz) | 297M |
| root_v6.34.00.Linux-debian12-x86_64-gcc12.2.tar.gz | [root_v6.34.00.Linux-debian12-x86_64-gcc12.2.tar.gz](https://root.cern/download/root_v6.34.00.Linux-debian12-x86_64-gcc12.2.tar.gz) | 284M |
| root_v6.34.00.Linux-fedora40-x86_64-gcc14.2.tar.gz | [root_v6.34.00.Linux-fedora40-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00.Linux-fedora40-x86_64-gcc14.2.tar.gz) | 304M |
| root_v6.34.00.Linux-fedora41-x86_64-gcc14.2.tar.gz | [root_v6.34.00.Linux-fedora41-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00.Linux-fedora41-x86_64-gcc14.2.tar.gz) | 294M |
| root_v6.34.00.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz | [root_v6.34.00.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.34.00.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz) | 288M |
| root_v6.34.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz | [root_v6.34.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.34.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 287M |
| root_v6.34.00.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz | [root_v6.34.00.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.34.00.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz) | 285M |
| root_v6.34.00.Linux-ubuntu24.10-x86_64-gcc14.2.tar.gz | [root_v6.34.00.Linux-ubuntu24.10-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.34.00.Linux-ubuntu24.10-x86_64-gcc14.2.tar.gz) | 287M |
| root_v6.34.00.macos-13.7-arm64-clang150.tar.gz | [root_v6.34.00.macos-13.7-arm64-clang150.tar.gz](https://root.cern/download/root_v6.34.00.macos-13.7-arm64-clang150.tar.gz) | 271M |
| root_v6.34.00.macos-14.7-x86_64-clang160.tar.gz | [root_v6.34.00.macos-14.7-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.34.00.macos-14.7-x86_64-clang160.tar.gz) | 293M |
| root_v6.34.00.macos-15.1-arm64-clang160.tar.gz | [root_v6.34.00.macos-15.1-arm64-clang160.tar.gz](https://root.cern/download/root_v6.34.00.macos-15.1-arm64-clang160.tar.gz) | 284M |
| root_v6.34.00.win32.python311.vc17.exe | [root_v6.34.00.win32.python311.vc17.exe](https://root.cern/download/root_v6.34.00.win32.python311.vc17.exe) | 122M |
| root_v6.34.00.win32.python311.vc17.relwithdebinfo.exe | [root_v6.34.00.win32.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.34.00.win32.python311.vc17.relwithdebinfo.exe) | 486M |
| root_v6.34.00.win32.python311.vc17.relwithdebinfo.zip | [root_v6.34.00.win32.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.34.00.win32.python311.vc17.relwithdebinfo.zip) | 955M |
| root_v6.34.00.win32.python311.vc17.zip | [root_v6.34.00.win32.python311.vc17.zip](https://root.cern/download/root_v6.34.00.win32.python311.vc17.zip) | 166M |
| root_v6.34.00.win64.python311.vc17.exe | [root_v6.34.00.win64.python311.vc17.exe](https://root.cern/download/root_v6.34.00.win64.python311.vc17.exe) | 126M |
| root_v6.34.00.win64.python311.vc17.relwithdebinfo.exe | [root_v6.34.00.win64.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.34.00.win64.python311.vc17.relwithdebinfo.exe) | 498M |
| root_v6.34.00.win64.python311.vc17.zip | [root_v6.34.00.win64.python311.vc17.zip](https://root.cern/download/root_v6.34.00.win64.python311.vc17.zip) | 173M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.34.00.source.tar.gz](https://root.cern/download/root_v6.34.00.source.tar.gz) | 188M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/root
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-almalinux9.5-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-debian12-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-fedora40-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-fedora41-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-ubuntu20.04-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-ubuntu24.04-gcc132-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.34.00/x86_64-ubuntu24.10-gcc142-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-34-00 v6-34-00
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
