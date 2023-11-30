---
layout: releases
version: 6.26/00
release_date: 2022-03-03
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Retracted
Due to a [security vulnerability](/about/security#known-security-issues), this version of ROOT has been retracted; please upgrade to [v6.26/14](/releases/release-62614).

## Highlights

The major new features of v6.26 are:
- RooFit now comes with way nicer [python interfaces](https://root.cern/doc/v626/release-notes.html#new-pythonizations) and automatic [GPU acceleration](https://indico.cern.ch/event/855454/contributions/4596763/)!
- Try [distributed RDataFrame](https://indico.cern.ch/event/1019958/contributions/4419751/): many physicists already use it to run RDataFrame-based  analyses in parallel on clusters. It now supports Dask, which means it runs virtually anywhere you want.
- Experimental [`RDataFrame::Vary()`](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#systematics) for systematic variations within the same event loop, with a wonderful, simple interface.
- [SOFIE](https://root.cern/doc/v626/release-notes.html#sofie-code-generation-for-fast-inference-of-deep-learning-models) can take your trained ONNX model and generate blazingly fast C++ code from it, depending *only* on BLAS.
- `TBrowser` is now using ROOT's new web-based graphics and GUI! You can always switch back, but we'd love to hear your feedback!

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.2600).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | root_v6.26.00.source.tar.gz | 185M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 8 | root_v6.26.00.Linux-centos8-x86_64-gcc8.5.tar.gz | 208M |
| Fedora 32 | root_v6.26.00.Linux-fedora32-x86_64-gcc10.3.tar.gz | 230M |
| Fedora 34 | root_v6.26.00.Linux-fedora34-x86_64-gcc11.2.tar.gz | 278M |
| Ubuntu 18.04 | root_v6.26.00.Linux-ubuntu18-x86_64-gcc7.5.tar.gz | 225M |
| Ubuntu 20.04 | root_v6.26.00.Linux-ubuntu20-x86_64-gcc9.3.tar.gz | 225M |
| macOS 10.15 x86_64 Xcode 12 | root_v6.26.00.macos-10.15-x86_64-clang120.pkg | 335M |
| macOS 10.15 x86_64 Xcode 12 | root_v6.26.00.macos-10.15-x86_64-clang120.tar.gz | 218M |
| macOS 11.6 arm64 Xcode 12 | root_v6.26.00.macos-11.6-arm64-clang120.pkg | 318M |
| macOS 11.6 arm64 Xcode 12 | root_v6.26.00.macos-11.6-arm64-clang120.tar.gz | 205M |
| macOS 11.6 x86_64 Xcode 12 | root_v6.26.00.macos-11.6-x86_64-clang120.pkg | 333M |
| macOS 11.6 x86_64 Xcode 12 | root_v6.26.00.macos-11.6-x86_64-clang120.tar.gz | 217M |
| macOS 12.2 arm64 Xcode 13 | root_v6.26.00.macos-12.2-arm64-clang130.pkg | 320M |
| macOS 12.2 arm64 Xcode 13 | root_v6.26.00.macos-12.2-arm64-clang130.tar.gz | 206M |
| macOS 12.2 x86_64 Xcode 13 | root_v6.26.00.macos-12.2-x86_64-clang130.pkg | 335M |
| macOS 12.2 x86_64 Xcode 13 | root_v6.26.00.macos-12.2-x86_64-clang130.tar.gz | 218M |
| **preview** Windows Visual Studio 2019 (debug) | root_v6.26.00.win32.vc16.debug.exe | 200M |
| **preview** Windows Visual Studio 2019 (debug) | root_v6.26.00.win32.vc16.debug.zip | 298M |
| **preview** Windows Visual Studio 2019 | root_v6.26.00.win32.vc16.exe | 105M |
| **preview** Windows Visual Studio 2019 | root_v6.26.00.win32.vc16.zip | 143M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/arm64-mac116-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/arm64-mac122-clang130-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-centos8-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-fedora32-gcc103-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-fedora34-gcc112-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-mac1015-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-mac116-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-mac122-clang130-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.00/x86_64-ubuntu20-gcc93-opt
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-00 v6-26-00
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
