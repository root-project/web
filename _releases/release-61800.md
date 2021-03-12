---
layout: releases
version: 6.18/00
release_date: 2019-06-25

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

ROOT v6.18/00 is a consolidation release with many performance improvements! Its more than 2000 commits since v6.16/00 also introduce several new features:

- A new builtin zlib library that's based on CMS's fork of the Cloudflare implementation. It noticeably accelerates decompression on current CPUs.
- A simple `auto obj = dir->Get<MyClass>("some object");` (where `dir` can be a file)
- Pythonizations for `RDataFrame` providing `AsNumPy`
- New leaf types `/f`, `/d` for Float16_t and Double32_t: `tree->Branch("floatArray",  floatArray,  "floatArray[7]/f[0,100]");   // Float16_t array with range from 0 to 100`
- Several new functions for `RVec`, e.g. `DeltaR`
- The RooJohnson PDF was added to RooFit
- Considerably faster, STL-style iteration through RooArgSet and RooArgList
- Transparency for lines, texts and markers in the TeX output.
- Many new features in JSROOT, including initial WebVR support thanks to Diego Marcos (get your Cardboards ready!)
- Added support for GCC9, macos 10.15 (Catalina beta 2) and Xcode 11.0 beta

If you build against ROOT using its CMake infrastructure you might be interested in the changes to `ROOT_GENERATE_DICTIONARY` and `ROOT_STANDARD_LIBRARY_PACKAGE`. For this and what else is new please have a look at the [release notes](https://root.cern/doc/v618/release-notes.html)!

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v618/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.18.00.source.tar.gz](https://root.cern/download/root_v6.18.00.source.tar.gz) | 158M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.18.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.18.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 137M |
| Linux fedora29 gcc8.3 | [root_v6.18.00.Linux-fedora29-x86_64-gcc8.3.tar.gz](https://root.cern/download/root_v6.18.00.Linux-fedora29-x86_64-gcc8.3.tar.gz) | 155M |
| Linux fedora30 gcc9.1 | [root_v6.18.00.Linux-fedora30-x86_64-gcc9.1.tar.gz](https://root.cern/download/root_v6.18.00.Linux-fedora30-x86_64-gcc9.1.tar.gz) | 158M |
| Ubuntu 14 gcc4.8 | [root_v6.18.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.18.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 137M |
| Ubuntu 16 gcc5.4 | [root_v6.18.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.18.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 144M |
| Ubuntu 18 gcc7.4 | [root_v6.18.00.Linux-ubuntu18-x86_64-gcc7.4.tar.gz](https://root.cern/download/root_v6.18.00.Linux-ubuntu18-x86_64-gcc7.4.tar.gz) | 153M |
| OsX 10.13 clang100 | [root_v6.18.00.macosx64-10.13-clang100.dmg](https://root.cern/download/root_v6.18.00.macosx64-10.13-clang100.dmg) | 130M |
| OsX 10.13 clang100 | [root_v6.18.00.macosx64-10.13-clang100.tar.gz](https://root.cern/download/root_v6.18.00.macosx64-10.13-clang100.tar.gz) | 129M |
| OsX 10.14 clang100 | [root_v6.18.00.macosx64-10.14-clang100.dmg](https://root.cern/download/root_v6.18.00.macosx64-10.14-clang100.dmg) | 131M |
| OsX 10.14 clang100 | [root_v6.18.00.macosx64-10.14-clang100.tar.gz](https://root.cern/download/root_v6.18.00.macosx64-10.14-clang100.tar.gz) | 130M |


## Example for setting up ROOT from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.18.00/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-18-00 v6-18-00
~~~


## Windows
Windows 7/Vista/XP/NT/2000 are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **tar**: the traditional variant. Unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio as the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).

