---
layout: releases
version: 6.38.00
release_date: 2025-11-27
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v638/release-notes.html#release-6.38.00).

The focus for this release was on expanding usability from Python and interoperability with its ecosystem, data analysis and modernisation. However, there is much more than that: ease of installation, runtime performance, stability (>250 items in our trackers have been addressed). See the full [release notes](https://root.cern/doc/v638/release-notes.html#release-6.38.00) and highlights below! 

📦 Distribution
 - In alpha mode, you can install 6.38 releases with pip on Linux: pip install root 🚀

📈 RDataFrame
 - Ergonomics: You don’t need to write template arguments for Snapshot any more
 - You can snapshot systematic variations to TTree in `experimental` mode. See [systematic variations](https://root.cern/doc/v638/classROOT_1_1RDataFrame.html#systematics) for the details!
 - Distributed RDataFrame: RNTuples are treated internally as TTrees. Without API changes, your processing of RNTuples will be even faster than before!

🐍 Python Interface
 - In RDataFrame, you can pass to `Define` and `Filter` a set of Python functions wider than before.
 - An enhanced Unified Histogram Interface (UHI) implementation is now even more stable, thanks to a reinforced testing suite extending the [UHI testing helper](https://uhi.readthedocs.io/en/latest/testing.html).

7️⃣ ROOT7
 - New highly performant histograms are available for testing: see [these examples](https://root.cern/doc/v638/group__tutorial__histv7.html)!
 - `ROOT::Experimental::RFile`, a minimal and modern interface to ROOT files, [is there](https://root.cern/doc/v638/classROOT_1_1Experimental_1_1RFile.html)!

💾 RNTuple
 - Clarity: you can support RNTuple with the classic browser, profiting from several visual improvements, including a new treemap visualization of field sizes.
 - Parallelism: The parallel writer became part of the stable API. See it in action in [this example](https://root.cern/doc/v638/ntpl009__parallelWriter_8C.html).
 - Performance: (vectors of) fixed-size arrays are now treated in bulk
 - Usability: automatic schema evolution is now akin to the classic I/O behavior. You can read expert documentation in `tree/ntuple/doc/SchemaEvolution.md`.

🧑🏽‍💻 C++ Interpreter
 - The LLVM powering Cling has been upgraded to version 20: more runtime performance and features thanks to the new compiler!
 - You can use SYCL interactively if you build ROOT with `-Dexperimental_adaptivecpp=ON`.
 
📊 RooFit
 - With the RooMultiPdf, you can minimize floating categorical variables, e.g. for models with variables that toggle between different background shapes. 

Please note that 6.38 is a short term support release. As such, it is not meant to be used for data taking. It will be superseded by the 6.40 release, which is foreseen in May 2026. Patch releases of 6.38 will be provided until June 2026.

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.38.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.38.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 289M |
| Almalinux 9.7 | [root_v6.38.00.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.38.00.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz) | 312M |
| Almalinux 10.1 | [root_v6.38.00.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.38.00.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz) | 319M |
| Debian 13 | [root_v6.38.00.Linux-debian13-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.38.00.Linux-debian13-x86_64-gcc14.2.tar.gz) | 315M |
| Fedora 42 | [root_v6.38.00.Linux-fedora42-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.38.00.Linux-fedora42-x86_64-gcc15.2.tar.gz) | 340M |
| Fedora 43 | [root_v6.38.00.Linux-fedora43-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.38.00.Linux-fedora43-x86_64-gcc15.2.tar.gz) | 359M |
| Ubuntu 22.04 | [root_v6.38.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.38.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 301M |
| Ubuntu 24.04 | [root_v6.38.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.38.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 318M |
| Ubuntu 25.10 | [root_v6.38.00.Linux-ubuntu25.10-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.38.00.Linux-ubuntu25.10-x86_64-gcc15.2.tar.gz) | 317M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.38.00.macos-14.8-x86_64-clang160.pkg](https://root.cern/download/root_v6.38.00.macos-14.8-x86_64-clang160.pkg) | 476M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.38.00.macos-14.8-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.38.00.macos-14.8-x86_64-clang160.tar.gz) | 314M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.38.00.macos-15.7-arm64-clang170.pkg](https://root.cern/download/root_v6.38.00.macos-15.7-arm64-clang170.pkg) | 453M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.38.00.macos-15.7-arm64-clang170.tar.gz](https://root.cern/download/root_v6.38.00.macos-15.7-arm64-clang170.tar.gz) | 303M |
| macOS 26.1 arm64 Xcode 17 | [root_v6.38.00.macos-26.1-arm64-clang170.pkg](https://root.cern/download/root_v6.38.00.macos-26.1-arm64-clang170.pkg) | 472M |
| macOS 26.1 arm64 Xcode 17 | [root_v6.38.00.macos-26.1-arm64-clang170.tar.gz](https://root.cern/download/root_v6.38.00.macos-26.1-arm64-clang170.tar.gz) | 315M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.38.00.win32.python311.vc17.exe](https://root.cern/download/root_v6.38.00.win32.python311.vc17.exe) | 130M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.38.00.win32.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.38.00.win32.python311.vc17.relwithdebinfo.exe) | 359M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.38.00.win32.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.38.00.win32.python311.vc17.relwithdebinfo.zip) | 565M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.38.00.win32.python311.vc17.zip](https://root.cern/download/root_v6.38.00.win32.python311.vc17.zip) | 179M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.38.00.win64.python311.vc17.exe](https://root.cern/download/root_v6.38.00.win64.python311.vc17.exe) | 136M |
| Windows Visual Studio 2022 64-bit x64 (release with debugging information) | [root_v6.38.00.win64.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.38.00.win64.python311.vc17.relwithdebinfo.exe) | 371M |
| Windows Visual Studio 2022 64-bit x64 (release with debugging information) | [root_v6.38.00.win64.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.38.00.win64.python311.vc17.relwithdebinfo.zip) | 585M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.38.00.win64.python311.vc17.zip](https://root.cern/download/root_v6.38.00.win64.python311.vc17.zip) | 186M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.38.00.source.tar.gz](https://root.cern/download/root_v6.38.00.source.tar.gz) | 369M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/arm64-mac157-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-almalinux10.1-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-almalinux9.7-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-debian13-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-fedora42-gcc152-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-fedora43-gcc152-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-ubuntu24.04-gcc133-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.38.00/x86_64-ubuntu25.10-gcc152-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-38-00 v6-38-00
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
