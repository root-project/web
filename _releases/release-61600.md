---
layout: releases
version: 6.16/00
release_date: 2019-01-23
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Highlights

This release brings several new features:

- RDataFrame offers several new interfaces, for instance `StdDev`, `Display`, and `Graph`; see [the relevant release notes](https://root.cern/doc/v616/release-notes.html#rdataframe)
- TMVA's `MethodDL` has [lots of news](https://root.cern/doc/v616/release-notes.html#tmva-library), for instance training and evaluation of the CNN on GPUs


We have added a couple of technology previews:

- a preview of C++ modules: ROOT 6.16/00 can now run with C++ modules as part of the dictionary. This accelerates the dictionary for frameworks and reduces their memory usage. It's the result of several years of hard work, both on the clang side for the implementation of C++ modules, and on ROOT's side, for using them in the dictionary context. We expect to offer preview binaries for the next patch release, 6.16/02. See [here for details](https://root.cern/doc/v616/release-notes.html#c-modules-technology-preview).
- `clad`, the cling-plugin for automatic differentiation: ROOT is learning to take your function's C++ declaration and create a new one that will return the derivative, "simply" by transforming the source code. We hope to turn this on by default for v6.18; for now [see the release notes on `clad`](https://root.cern/doc/v616/release-notes.html#math-libraries)


If you want to experiment, try the new [experimental PyROOT](https://root.cern/doc/v616/release-notes.html#experimental-pyroot) and some of the many developments in the [WebGUI / Graphics area](https://root.cern/doc/v616/release-notes.html#web-graphics-libraries)!

First and foremost, this release has many, *many* bugs fixed: thanks to everyone who has contributes with reports, reproducers and patches!

## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v616/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.16.00.source.tar.gz](https://root.cern/download/root_v6.16.00.source.tar.gz) | 157M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v6.16.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.16.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 141M |
| Linux fedora28 gcc8.2 | [root_v6.16.00.Linux-fedora28-x86_64-gcc8.2.tar.gz](https://root.cern/download/root_v6.16.00.Linux-fedora28-x86_64-gcc8.2.tar.gz) | 150M |
| Linux fedora29 gcc8.2 | [root_v6.16.00.Linux-fedora29-x86_64-gcc8.2.tar.gz](https://root.cern/download/root_v6.16.00.Linux-fedora29-x86_64-gcc8.2.tar.gz) | 154M |
| Ubuntu 14 gcc4.8 | [root_v6.16.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.16.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 141M |
| Ubuntu 16 gcc5.4 | [root_v6.16.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.16.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 143M |
| Ubuntu 18 gcc7.3 | [root_v6.16.00.Linux-ubuntu18-x86_64-gcc7.3.tar.gz](https://root.cern/download/root_v6.16.00.Linux-ubuntu18-x86_64-gcc7.3.tar.gz) | 152M |
| OsX 10.13 clang100 | [root_v6.16.00.macosx64-10.13-clang100.dmg](https://root.cern/download/root_v6.16.00.macosx64-10.13-clang100.dmg) | 130M |
| OsX 10.13 clang100 | [root_v6.16.00.macosx64-10.13-clang100.tar.gz](https://root.cern/download/root_v6.16.00.macosx64-10.13-clang100.tar.gz) | 130M |
| OsX 10.14 clang100 | [root_v6.16.00.macosx64-10.14-clang100.dmg](https://root.cern/download/root_v6.16.00.macosx64-10.14-clang100.dmg) | 131M |
| OsX 10.14 clang100 | [root_v6.16.00.macosx64-10.14-clang100.tar.gz](https://root.cern/download/root_v6.16.00.macosx64-10.14-clang100.tar.gz) | 130M |


## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-fedora29-gcc82-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-fedora28-gcc82-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-mac1014-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-ubuntu18-gcc73-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-mac1013-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-ubuntu16-gcc54-opt
~~~


## Example for setting up ROOT from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.16.00/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-16-00 v6-16-00
~~~


## Windows
Windows 7/Vista/XP/NT/2000 are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **tar**: the traditional variant. Unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).

