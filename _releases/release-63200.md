---
layout: releases
version: 6.32/00
release_date: 2024-05-28
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v632/release-notes.html#release-6.3200).
Highlights:

* **RDataFrame** - zero-code-change experience when moving from processing a TTree to processing an RNTuple, as well as a greatly improved Distributed RDataFrame: ROOT is ready to run at your favourite Analysis Facility – it even allows you to profit from an interactive experience backed by a distributed system using your current batch system (e.g. HTCondor, like the lxplus+lxbatch combination at CERN): [try it now](https://github.com/root-project/root/blob/v6-32-00-patches/tutorials/dataframe/distrdf004_dask_lxbatch.py)!  
* **RooFit** - The new vectorizing CPU evaluation backend is the default for likelihood minimization, now up to 10x faster on a single CPU core! 
* **PyROOT** - the interop engine of PyROOT, [cppyy](https://cppyy.readthedocs.io/en/latest/), was upgraded to its latest version, blurring the boundaries between Python and C++ in ROOT better than ever, e.g. the conversion of NumPy arrays to vectors, implicit conversion from nested Python tuples to nested initializer lists, and improved overload resolution. 
* **RNTuple** – The RNTuple on-disk format was updated to release candidate 2, in preparation of the binary format first production freeze. The RNTuple API come with a major refactoring, improving consistency across different parts and improving overall robustness. Moreover: 
   * Merging of RNTuple data with hadd is now supported.  
   * A new RNTupleParallel writer class creates RNTuple data in highly concurrent settings.  
   * A new RNTupleInspector utility class provides information about the on-disk metadata of an RNTuple. 
* **Cling** - Speaking of interpreters, the new PyROOT is glorified by a new LLVM version, LLVM 16, that comes with numerous advantages, among which a better support for C++ 20 as well as better and faster generated code. 
* **Graphics** - The ROOT release 6.32 brings a lot of impressive enhancements to the Web Graphics package, surpassing the features and capabilities of version 6.30. This update provides users with a secure and more robust Web Graphics. Try it with the command `root –web`! 
* **REve** - Lightweight rendering of any shape on the scale of hundred thousand of instances. The box, hexagon, and cone shape are showcased in the [eve7 examples](https://github.com/root-project/root/tree/v6-32-00-patches/tutorials/eve7).  The rendering of transparent objects is greatly improved. 

All that comes with a greatly improved stability: more than 250 items in the ROOT trackers have been addressed for this release. Excellent news for experiments planning to include this release in their production software stacks!

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.9 | [root_v6.32.00.Linux-almalinux8.9-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.32.00.Linux-almalinux8.9-x86_64-gcc8.5.tar.gz) | 280M |
| Almalinux 9.4 | [root_v6.32.00.Linux-almalinux9.4-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.32.00.Linux-almalinux9.4-x86_64-gcc11.4.tar.gz) | 297M |
| Fedora 39 | [root_v6.32.00.Linux-fedora39-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.32.00.Linux-fedora39-x86_64-gcc13.3.tar.gz) | 283M |
| Ubuntu 20.04 | [root_v6.32.00.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.32.00.Linux-ubuntu20.04-x86_64-gcc9.4.tar.gz) | 288M |
| Ubuntu 22.04 | [root_v6.32.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.32.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 286M |
| Ubuntu 24.04 | [root_v6.32.00.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz](https://root.cern/download/root_v6.32.00.Linux-ubuntu24.04-x86_64-gcc13.2.tar.gz) | 285M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.32.00.macos-13.6-arm64-clang150.pkg](https://root.cern/download/root_v6.32.00.macos-13.6-arm64-clang150.pkg) | 415M |
| macOS 13.6 arm64 Xcode 15 | [root_v6.32.00.macos-13.6-arm64-clang150.tar.gz](https://root.cern/download/root_v6.32.00.macos-13.6-arm64-clang150.tar.gz) | 269M |
| macOS 14.5 arm64 Xcode 15 | [root_v6.32.00.macos-14.5-arm64-clang150.pkg](https://root.cern/download/root_v6.32.00.macos-14.5-arm64-clang150.pkg) | 432M |
| macOS 14.5 arm64 Xcode 15 | [root_v6.32.00.macos-14.5-arm64-clang150.tar.gz](https://root.cern/download/root_v6.32.00.macos-14.5-arm64-clang150.tar.gz) | 280M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.32.00.win32.vc17.debug.exe](https://root.cern/download/root_v6.32.00.win32.vc17.debug.exe) | 236M |
| Windows Visual Studio 2022 32-bit x86  (debug) | [root_v6.32.00.win32.vc17.debug.zip](https://root.cern/download/root_v6.32.00.win32.vc17.debug.zip) | 360M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.32.00.win32.vc17.exe](https://root.cern/download/root_v6.32.00.win32.vc17.exe) | 117M |
| Windows Visual Studio 2022 32-bit x86  | [root_v6.32.00.win32.vc17.zip](https://root.cern/download/root_v6.32.00.win32.vc17.zip) | 160M |
| Windows Visual Studio 2022 64-bit x64  (debug) | [root_v6.32.00.win64.vc17.debug.exe](https://root.cern/download/root_v6.32.00.win64.vc17.debug.exe) | 244M |
| Windows Visual Studio 2022 64-bit x64  (debug) | [root_v6.32.00.win64.vc17.debug.zip](https://root.cern/download/root_v6.32.00.win64.vc17.debug.zip) | 372M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.32.00.win64.vc17.exe](https://root.cern/download/root_v6.32.00.win64.vc17.exe) | 121M |
| Windows Visual Studio 2022 64-bit x64  | [root_v6.32.00.win64.vc17.zip](https://root.cern/download/root_v6.32.00.win64.vc17.zip) | 166M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.32.00.source.tar.gz](https://root.cern/download/root_v6.32.00.source.tar.gz) | 184M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/arm64-mac145-clang150-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-almalinux8.9-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-almalinux9.4-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-fedora39-gcc133-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-ubuntu20.04-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.00/x86_64-ubuntu24.04-gcc132-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-32-00 v6-32-00
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
