---
layout: releases
version: 6.24/00
release_date: 2021-04-15
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

## Highlights

LLVM used by ROOT has been updated to LLVM 9, which brings full C++17 support.
I/O and, as a consequence, `RDataFrame` operations have been accelerated especially for use in multi-threaded environments.

Speaking about `RDataFrame`, several new features made it into v6.24, especially noteworthy are `ROOT::RDF::RunGraphs` and the support for "indexed friends".
An experimental preview of ROOT's upcoming succession to PROOF, `ROOT.RDF.Experimental.Distributed`, is included in ROOT v6.24/00.
It is used just like `RDataFrame` and can run the analysis on a cluster.
Currently, running locally and on a Spark cluster are implemented; support for Dask is on its way.

ROOT now offers a new portable random number generator with fantastic properties: RANLUX++.
TMVA adds an interface to PyTorch, to make your TMVA tools also available for this backend, as a more flexible alternative to the PyKeras interface.

RooFit comes with speed improvements and additional robustness (`RooStats::HypoTestInverter`).
The main speed-up is due to RooFit's new, architecture-specific compute libraries:
those are automatically selected for the CPU currently in use, and accelerate `BatchMode` computations by up to 4x.
Together with the RooFit acceleration since v6.20, typical RooFit analyses will now see speed-ups of 4x..16x.
And a long-standing and highly relevant issue was fixed: binned fits are now unbiased.
If you were using `RooDSCBShape` or `RooSDSCBShape`: please switch to RooFit's superior version, `RooCrystalBall`, which replaces these two.

ROOT now supports WLCG Bearer Tokens through Davix, so allow you to use "the grid's" modern authentication mechanism.
ROOT now supports building against Xrootd 5 client libraries.

In other news, ROOTJS saw a major upgrade;
the reference guide now allows to switch ROOT versions for a given class;
and building ROOT now defaults to your compiler's default C++ standard.

And of course also this version has a long list of fixed issues, as shown in the release notes.

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v624/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.24.00.source.tar.gz](https://root.cern/download/root_v6.24.00.source.tar.gz) | 177M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS 7 | [root_v6.24.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.24.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 183M |
| Fedora 30 | [root_v6.24.00.Linux-fedora30-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.24.00.Linux-fedora30-x86_64-gcc9.3.tar.gz) | 219M |
| Fedora 31 | [root_v6.24.00.Linux-fedora31-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.24.00.Linux-fedora31-x86_64-gcc9.3.tar.gz) | 220M |
| Fedora 32 | [root_v6.24.00.Linux-fedora32-x86_64-gcc10.2.tar.gz](https://root.cern/download/root_v6.24.00.Linux-fedora32-x86_64-gcc10.2.tar.gz) | 224M |
| Ubuntu 16.04 | [root_v6.24.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.24.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 196M |
| Ubuntu 18.04 | [root_v6.24.00.Linux-ubuntu18-x86_64-gcc7.5.tar.gz](https://root.cern/download/root_v6.24.00.Linux-ubuntu18-x86_64-gcc7.5.tar.gz) | 214M |
| Ubuntu 19.04 | [root_v6.24.00.Linux-ubuntu19-x86_64-gcc9.2.tar.gz](https://root.cern/download/root_v6.24.00.Linux-ubuntu19-x86_64-gcc9.2.tar.gz) | 215M |
| Ubuntu 20.04 | [root_v6.24.00.Linux-ubuntu20-x86_64-gcc9.3.tar.gz](https://root.cern/download/root_v6.24.00.Linux-ubuntu20-x86_64-gcc9.3.tar.gz) | 216M |
| macOS 10.14 x86_64 Xcode 11 | [root_v6.24.00.macos-10.14-x86_64-clang110.pkg](https://root.cern/download/root_v6.24.00.macos-10.14-x86_64-clang110.pkg) | 327M |
| macOS 10.14 x86_64 Xcode 11 | [root_v6.24.00.macos-10.14-x86_64-clang110.tar.gz](https://root.cern/download/root_v6.24.00.macos-10.14-x86_64-clang110.tar.gz) | 210M |
| macOS 10.15 x86_64 Xcode 12 | [root_v6.24.00.macos-10.15-x86_64-clang120.pkg](https://root.cern/download/root_v6.24.00.macos-10.15-x86_64-clang120.pkg) | 321M |
| macOS 10.15 x86_64 Xcode 12 | [root_v6.24.00.macos-10.15-x86_64-clang120.tar.gz](https://root.cern/download/root_v6.24.00.macos-10.15-x86_64-clang120.tar.gz) | 207M |
| macOS 11.2 arm64 Xcode 12 | [root_v6.24.00.macos-11.2-arm64-clang120.pkg](https://root.cern/download/root_v6.24.00.macos-11.2-arm64-clang120.pkg) | 307M |
| macOS 11.2 arm64 Xcode 12 | [root_v6.24.00.macos-11.2-arm64-clang120.tar.gz](https://root.cern/download/root_v6.24.00.macos-11.2-arm64-clang120.tar.gz) | 196M |
| macOS 11.2 x86_64 Xcode 12 | [root_v6.24.00.macos-11.2-x86_64-clang120.pkg](https://root.cern/download/root_v6.24.00.macos-11.2-x86_64-clang120.pkg) | 321M |
| macOS 11.2 x86_64 Xcode 12 | [root_v6.24.00.macos-11.2-x86_64-clang120.tar.gz](https://root.cern/download/root_v6.24.00.macos-11.2-x86_64-clang120.tar.gz) | 207M |
| Windows Visual Studio 2019 (debug) | [root_v6.24.00.win32.vc16.debug.exe](https://root.cern/download/root_v6.24.00.win32.vc16.debug.exe) | 160M |
| Windows Visual Studio 2019 (debug) | [root_v6.24.00.win32.vc16.debug.zip](https://root.cern/download/root_v6.24.00.win32.vc16.debug.zip) | 235M |
| Windows Visual Studio 2019 | [root_v6.24.00.win32.vc16.exe](https://root.cern/download/root_v6.24.00.win32.vc16.exe) |  86M |
| Windows Visual Studio 2019 | [root_v6.24.00.win32.vc16.zip](https://root.cern/download/root_v6.24.00.win32.vc16.zip) | 116M |

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/arm64-mac112-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-fedora30-gcc93-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-fedora31-gcc93-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-fedora32-gcc102-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-mac1014-clang110-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-mac1015-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-mac112-clang120-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-ubuntu18-gcc75-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-ubuntu19-gcc92-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-ubuntu20-gcc93-opt
~~~


## Example for setting up ROOT from CVMFS

~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.24.00/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-24-00 v6-24-00
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
