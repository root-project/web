---
layout: releases
version: 6.40.00
release_date: 2026-05-20
state: latest
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---
## Release Notes
The full release notes for this release can be found [here](https://root.cern/doc/v640/release-notes.html#release-6.40.00). 

This release represents a massive leap toward the future of ROOT 7. We’ve unlocked game-changing capabilities, including the ability to opt-out of automatic class registration, experimental access to high-performance, multithreading-optimized histograms, and a sleek, ergonomic new file interface (RFile) designed for modern workflows.

But we didn't stop there. We’ve streamlined the entire codebase for peak efficiency and addressed over 160 items in our trackers to ensure rock-solid stability and cutting-edge features ([see the full list here](https://root.cern/doc/v640/release-notes.html#items-addressed-for-this-release)). Dive into the full [release notes](https://root.cern/doc/v640/release-notes.html) and explore the highlights below!

🔓**Opt-out of automatic class registration** Break free from histograms and objects automatically attaching to the current (T)directory! Enable this game-changing capability invoking ROOT::Experimental::DisableObjectAutoRegistration(): unlock more control by [exploring the documentation](https://root.cern.ch/doc/master/namespaceROOT_1_1Experimental.html#a74fae8f88965b8c79dfbd25bebbce3a4).
Histograms More features in the new histograms! Concurrent filling is now available, also to save memory in highly multithreaded applications. This feature is even integrated into RDataFrame: [check out the tutorials](https://root.cern/doc/v640/group__tutorial__histv7.html)!

🤖 **Machine Learning** The Data Loader has been reimagined as ROOT::Experimental::ML::RDataLoader! This powerful tool now performs cluster-aligned reads with a sophisticated shuffling strategy and supports multiple RDataFrames as input. Seamlessly output to NumPy, PyTorch, or TensorFlow, while leveraging new under- and oversampling support for dual-class eager loading.
 I/O Experience a brand-new, streamlined HTTP I/O implementation powered by [libcurl](https://curl.se/libcurl/)! This update delivers modern remote read capabilities, including advanced compression, secure transport, and S3 support, all across 🐧🍎🪟.

🔀 **RNTuple** Multiple threads can share a single reader efficiently thanks to the “active entry tokens” added to the RNTupleReader: very useful for data processing frameworks!

🌳 **Ready to evolve beyond TTree::Draw?** We’ve provided a comprehensive [Rosetta Stone](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#rosetta-stone) to help you seamlessly transition to RDataFrame! This is the perfect path for high-performance RNTuple support or scaling your workflows across multithreaded and distributed environments.

🚀 **RDataFrame analysis** By streamlining the memory ownership model and implementing a sophisticated sharing mechanism, RDataFrame now minimizes redundant just-in-time compilation across computation graphs. Experience faster setup times and a significant reduction in memory footprint within a single application!

📦 **Builtins** We’ve dramatically streamlined our codebase. The builtin package footprints have been [slashed by a factor of 4x](https://root.cern/doc/v640/release-notes.html#moving-from-builtin-dependencies-to-system-provided-packages). This makes ROOT lighter and faster to build than ever, while pivoting toward a robust reliance on high-performance system packages.



## Binary distributions
Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.40.00-rc1.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 294M |
| Almalinux 9.7 | [root_v6.40.00-rc1.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz) | 317M |
| Almalinux 10.1 | [root_v6.40.00-rc1.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz) | 323M |
| Debian 13 | [root_v6.40.00-rc1.Linux-debian13-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-debian13-x86_64-gcc14.2.tar.gz) | 325M |
| Fedora 43 | [root_v6.40.00-rc1.Linux-fedora43-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-fedora43-x86_64-gcc15.2.tar.gz) | 368M |
| Fedora 44 | [root_v6.40.00-rc1.Linux-fedora44-x86_64-gcc16.0.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-fedora44-x86_64-gcc16.0.tar.gz) | 372M |
| Ubuntu 22.04 | [root_v6.40.00-rc1.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 306M |
| Ubuntu 24.04 | [root_v6.40.00-rc1.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 323M |
| Ubuntu 26.04 | [root_v6.40.00-rc1.Linux-ubuntu26.04-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.40.00-rc1.Linux-ubuntu26.04-x86_64-gcc15.2.tar.gz) | 327M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.40.00-rc1.macos-14.8-x86_64-clang160.pkg](https://root.cern/download/root_v6.40.00-rc1.macos-14.8-x86_64-clang160.pkg) | 477M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.40.00-rc1.macos-14.8-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.40.00-rc1.macos-14.8-x86_64-clang160.tar.gz) | 312M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.40.00-rc1.macos-15.7-arm64-clang170.pkg](https://root.cern/download/root_v6.40.00-rc1.macos-15.7-arm64-clang170.pkg) | 464M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.40.00-rc1.macos-15.7-arm64-clang170.tar.gz](https://root.cern/download/root_v6.40.00-rc1.macos-15.7-arm64-clang170.tar.gz) | 308M |
| macOS 26.4 arm64 Xcode 21 | [root_v6.40.00-rc1.macos-26.4-arm64-clang210.pkg](https://root.cern/download/root_v6.40.00-rc1.macos-26.4-arm64-clang210.pkg) | 479M |
| macOS 26.4 arm64 Xcode 21 | [root_v6.40.00-rc1.macos-26.4-arm64-clang210.tar.gz](https://root.cern/download/root_v6.40.00-rc1.macos-26.4-arm64-clang210.tar.gz) | 320M |
| Windows Visual Studio 2025 32-bit x86 | [root_v6.40.00-rc1.win32.python314.vc18.exe](https://root.cern/download/root_v6.40.00-rc1.win32.python314.vc18.exe) | 152M |
| Windows Visual Studio 2025 32-bit x86 | [root_v6.40.00-rc1.win32.python314.vc18.zip](https://root.cern/download/root_v6.40.00-rc1.win32.python314.vc18.zip) | 213M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.40.00-rc1.win64.python311.vc17.exe](https://root.cern/download/root_v6.40.00-rc1.win64.python311.vc17.exe) | 137M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.40.00-rc1.win64.python311.vc17.zip](https://root.cern/download/root_v6.40.00-rc1.win64.python311.vc17.zip) | 188M |
| Windows Visual Studio 2025 64-bit x64 (release with debugging information) | [root_v6.40.00-rc1.win64.python314.vc18.relwithdebinfo.exe](https://root.cern/download/root_v6.40.00-rc1.win64.python314.vc18.relwithdebinfo.exe) | 447M |
| Windows Visual Studio 2025 64-bit x64 (release with debugging information) | [root_v6.40.00-rc1.win64.python314.vc18.relwithdebinfo.zip](https://root.cern/download/root_v6.40.00-rc1.win64.python314.vc18.relwithdebinfo.zip) | 709M |
| Almalinux 8.10 | [root_v6.40.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.40.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 294M |
| Almalinux 9.7 | [root_v6.40.00.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.40.00.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz) | 317M |
| Almalinux 10.1 | [root_v6.40.00.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.40.00.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz) | 323M |
| Debian 13 | [root_v6.40.00.Linux-debian13-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.40.00.Linux-debian13-x86_64-gcc14.2.tar.gz) | 325M |
| Fedora 43 | [root_v6.40.00.Linux-fedora43-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.40.00.Linux-fedora43-x86_64-gcc15.2.tar.gz) | 368M |
| Fedora 44 | [root_v6.40.00.Linux-fedora44-x86_64-gcc16.1.tar.gz](https://root.cern/download/root_v6.40.00.Linux-fedora44-x86_64-gcc16.1.tar.gz) | 372M |
| Ubuntu 22.04 | [root_v6.40.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.40.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 306M |
| Ubuntu 24.04 | [root_v6.40.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.40.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 323M |
| Ubuntu 26.04 | [root_v6.40.00.Linux-ubuntu26.04-x86_64-gcc15.2.tar.gz](https://root.cern/download/root_v6.40.00.Linux-ubuntu26.04-x86_64-gcc15.2.tar.gz) | 327M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.40.00.macos-14.8-x86_64-clang160.pkg](https://root.cern/download/root_v6.40.00.macos-14.8-x86_64-clang160.pkg) | 477M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.40.00.macos-14.8-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.40.00.macos-14.8-x86_64-clang160.tar.gz) | 312M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.40.00.macos-15.7-arm64-clang170.pkg](https://root.cern/download/root_v6.40.00.macos-15.7-arm64-clang170.pkg) | 463M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.40.00.macos-15.7-arm64-clang170.tar.gz](https://root.cern/download/root_v6.40.00.macos-15.7-arm64-clang170.tar.gz) | 308M |
| macOS 26.4 arm64 Xcode 21 | [root_v6.40.00.macos-26.4-arm64-clang210.pkg](https://root.cern/download/root_v6.40.00.macos-26.4-arm64-clang210.pkg) | 479M |
| macOS 26.4 arm64 Xcode 21 | [root_v6.40.00.macos-26.4-arm64-clang210.tar.gz](https://root.cern/download/root_v6.40.00.macos-26.4-arm64-clang210.tar.gz) | 320M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.40.00.win32.python311.vc17.exe](https://root.cern/download/root_v6.40.00.win32.python311.vc17.exe) | 132M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.40.00.win32.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.40.00.win32.python311.vc17.relwithdebinfo.exe) | 365M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.40.00.win32.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.40.00.win32.python311.vc17.relwithdebinfo.zip) | 575M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.40.00.win32.python311.vc17.zip](https://root.cern/download/root_v6.40.00.win32.python311.vc17.zip) | 181M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.40.00.win64.python311.vc17.exe](https://root.cern/download/root_v6.40.00.win64.python311.vc17.exe) | 137M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.40.00.win64.python311.vc17.zip](https://root.cern/download/root_v6.40.00.win64.python311.vc17.zip) | 188M |
| Windows Visual Studio 2025 64-bit x64 (release with debugging information) | [root_v6.40.00.win64.python314.vc18.relwithdebinfo.exe](https://root.cern/download/root_v6.40.00.win64.python314.vc18.relwithdebinfo.exe) | 447M |
| Windows Visual Studio 2025 64-bit x64 (release with debugging information) | [root_v6.40.00.win64.python314.vc18.relwithdebinfo.zip](https://root.cern/download/root_v6.40.00.win64.python314.vc18.relwithdebinfo.zip) | 709M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.40.00.source.tar.gz](https://root.cern/download/root_v6.40.00.source.tar.gz) | 328M |

## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/arm64-mac157-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/arm64-mac264-clang210-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-almalinux10.1-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-almalinux9.7-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-debian13-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-fedora43-gcc152-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-fedora44-gcc161-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-mac148-clang160-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-ubuntu24.04-gcc133-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.40.00/x86_64-ubuntu26.04-gcc152-opt
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:
~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-40-00 v6-40-00
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

