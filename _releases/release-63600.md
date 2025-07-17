---
layout: releases
version: 6.36.00
release_date: 2025-05-25
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v636/release-notes.html#release-6.36.00).

Highlights:

🐍 Python Interface
 * Unified Histogram Interface (UHI): ROOT histograms now implement UHI ,enhancing interoperability with external python libraries for plotting and enabling pythonic indexing and slicing for histogram manipulation - see the doc here!
 * The interoperability of ROOT and NumPy arrays was enhanced in many areas.

💾 RNTuple 
 * The RNTuple core API moved from experimental to production, out of the Experimental namespace, and the RNTuple libraries are now always built with ROOT (i.e., no need to explicitly enable the root7 build option anymore). User code using the production API will now benefit from ROOT's regular API stability. 
 * Production classes include the RNTupleReader and RNTupleWriter, and associated classes. Some advanced classes, such as the RNTupleParallelWriter, will be moved to production in a later release.

📚 Documentation
 * A veritable Tutorials Renovation Campaign took place: it is now more intuitive to navigate through the individual parts of the ROOT tutorials, our collection of code examples. Some tutorials were added to showcase the new features, some were modernized to modern C++ standards and some were moved to the legacy folder. 

📈 RDataFrame
 * Local and distributed APIs are now made uniform, and the distributed RDataFrame module is out of the Experimental namespace 🥳 
 * RNTuple processing has been improved with automatic conversion of collection types to the ergonomic ROOT::RVec, and you can now save the modified RNTuple with Snapshot
 * Many improvements to the well-known RDataFrame functionalities were added, including parsing of CSV files, Display, Report, AsNumpy, reading pandas dataframes and numpy arrays.

📊 RooFit
 * Creating HistFactory models from many histograms is up to an order of magnitude faster. In an ATLAS example, the workspace creation time went from 15 minutes to 1:30 minutes!
 * Automatic differentiation, powered by Clad,  is transparently available to users, providing improved numerical stability as well as much more runtime performance.

🧑‍💻 C++ Interpreter
 * Existing code can now be interpreted and just-in-time compiled according to the C++23 standard for the platforms that support it.

 As previously announced, the 6.36 cycle supersedes the STS 6.34 one, which will be stopped in June.


## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.36.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.36.00.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 276M |
| Almalinux 9.5 | [root_v6.36.00.Linux-almalinux9.5-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.36.00.Linux-almalinux9.5-x86_64-gcc11.5.tar.gz) | 297M |
| Debian 12 | [root_v6.36.00.Linux-debian12-x86_64-gcc12.2.tar.gz](https://root.cern/download/root_v6.36.00.Linux-debian12-x86_64-gcc12.2.tar.gz) | 283M |
| Fedora 41 | [root_v6.36.00.Linux-fedora41-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.36.00.Linux-fedora41-x86_64-gcc14.2.tar.gz) | 304M |
| Fedora 42 | [root_v6.36.00.Linux-fedora42-x86_64-gcc15.1.tar.gz](https://root.cern/download/root_v6.36.00.Linux-fedora42-x86_64-gcc15.1.tar.gz) | 304M |
| Ubuntu 22.04 | [root_v6.36.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.36.00.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 287M |
| Ubuntu 24.04 | [root_v6.36.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.36.00.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 283M |
| Ubuntu 25.04 | [root_v6.36.00.Linux-ubuntu25.04-x86_64-gcc14.2.tar.gz](https://root.cern/download/root_v6.36.00.Linux-ubuntu25.04-x86_64-gcc14.2.tar.gz) | 286M |
| macOS 13.7 arm64 Xcode 15 | [root_v6.36.00.macos-13.7-arm64-clang150.pkg](https://root.cern/download/root_v6.36.00.macos-13.7-arm64-clang150.pkg) | 409M |
| macOS 13.7 arm64 Xcode 15 | [root_v6.36.00.macos-13.7-arm64-clang150.tar.gz](https://root.cern/download/root_v6.36.00.macos-13.7-arm64-clang150.tar.gz) | 269M |
| macOS 14.7 x86_64 Xcode 16 | [root_v6.36.00.macos-14.7-x86_64-clang160.pkg](https://root.cern/download/root_v6.36.00.macos-14.7-x86_64-clang160.pkg) | 439M |
| macOS 14.7 x86_64 Xcode 16 | [root_v6.36.00.macos-14.7-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.36.00.macos-14.7-x86_64-clang160.tar.gz) | 291M |
| macOS 15.5 arm64 Xcode 17 | [root_v6.36.00.macos-15.5-arm64-clang170.pkg](https://root.cern/download/root_v6.36.00.macos-15.5-arm64-clang170.pkg) | 436M |
| macOS 15.5 arm64 Xcode 17 | [root_v6.36.00.macos-15.5-arm64-clang170.tar.gz](https://root.cern/download/root_v6.36.00.macos-15.5-arm64-clang170.tar.gz) | 290M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.36.00.win32.python311.vc17.exe](https://root.cern/download/root_v6.36.00.win32.python311.vc17.exe) | 124M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.36.00.win32.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.36.00.win32.python311.vc17.relwithdebinfo.exe) | 341M |
| Windows Visual Studio 2022 32-bit x86 (release with debugging information) | [root_v6.36.00.win32.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.36.00.win32.python311.vc17.relwithdebinfo.zip) | 535M |
| Windows Visual Studio 2022 32-bit x86 | [root_v6.36.00.win32.python311.vc17.zip](https://root.cern/download/root_v6.36.00.win32.python311.vc17.zip) | 167M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.36.00.win64.python311.vc17.exe](https://root.cern/download/root_v6.36.00.win64.python311.vc17.exe) | 128M |
| Windows Visual Studio 2022 64-bit x64 (release with debugging information) | [root_v6.36.00.win64.python311.vc17.relwithdebinfo.exe](https://root.cern/download/root_v6.36.00.win64.python311.vc17.relwithdebinfo.exe) | 352M |
| Windows Visual Studio 2022 64-bit x64 (release with debugging information) | [root_v6.36.00.win64.python311.vc17.relwithdebinfo.zip](https://root.cern/download/root_v6.36.00.win64.python311.vc17.relwithdebinfo.zip) | 554M |
| Windows Visual Studio 2022 64-bit x64 | [root_v6.36.00.win64.python311.vc17.zip](https://root.cern/download/root_v6.36.00.win64.python311.vc17.zip) | 174M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.36.00.source.tar.gz](https://root.cern/download/root_v6.36.00.source.tar.gz) | 195M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/arm64-mac155-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-almalinux9.5-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-debian12-gcc122-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-fedora41-gcc142-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-fedora42-gcc151-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-mac147-clang160-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-ubuntu24.04-gcc133-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.36.00/x86_64-ubuntu25.04-gcc142-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-36-00 v6-36-00
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

