---
layout: releases
version: 6.20/00
release_date: 2020-02-26
state: pro

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

## Highlights

A new compression algorithm [ZSTD](https://github.com/facebook/zstd.git) was added. Please use it: it’s faster than the default zlib, and it compresses better. (We don’t want to change the default: we want old ROOT versions to be able to read new files.) The release notes show how to use it.

The new prompt functionality `root[0] .help TTree::Draw` does what you’d expect it to do: open ROOT’s documentation on TTree::Draw in a browser window (or, if remote, show the URL so you can click it.) We hope you’ll enjoy that!

RooFit has lots of improvements in this release, from considerable speed-ups to a myriad of fixed bugs.

ROOT does not show its splash screen during start-up anymore. In case you miss it, just run `root -a`.

PyROOT receives a major upgrade in v6.22. You’ll need to get prepared by a couple of Python code changes on your side, notably when instantiating class templates from Python. The release notes spell out the details.
ROOT’s prompt as well as its Jupyter interface now allow you to re-declare many things:

```
root [0] int a = 0;
root [1] float a = 42.;
```

And many, many bugs were fixed - thanks for your reports!

## Release Notes
The release notes for this release can be found [here](https://root.cern/doc/v620/release-notes.html).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.20.00.source.tar.gz](https://root.cern/download/root_v6.20.00.source.tar.gz) | 160M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 aarch64 gcc4.8 | [root_v6.20.00.Linux-centos7-aarch64-gcc4.8.tar.gz](https://root.cern/download/root_v6.20.00.Linux-centos7-aarch64-gcc4.8.tar.gz) | 135M |
| CentOS Cern 7 gcc4.8 | [root_v6.20.00.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.20.00.Linux-centos7-x86_64-gcc4.8.tar.gz) | 184M |
| Linux fedora29 gcc8.3 | [root_v6.20.00.Linux-fedora29-x86_64-gcc8.3.tar.gz](https://root.cern/download/root_v6.20.00.Linux-fedora29-x86_64-gcc8.3.tar.gz) | 218M |
| Linux fedora30 gcc9.2 | [root_v6.20.00.Linux-fedora30-x86_64-gcc9.2.tar.gz](https://root.cern/download/root_v6.20.00.Linux-fedora30-x86_64-gcc9.2.tar.gz) | 223M |
| Ubuntu 14 gcc4.8 | [root_v6.20.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern/download/root_v6.20.00.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) | 190M |
| Ubuntu 16 gcc5.4 | [root_v6.20.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz](https://root.cern/download/root_v6.20.00.Linux-ubuntu16-x86_64-gcc5.4.tar.gz) | 197M |
| Ubuntu 18 gcc7.4 | [root_v6.20.00.Linux-ubuntu18-x86_64-gcc7.4.tar.gz](https://root.cern/download/root_v6.20.00.Linux-ubuntu18-x86_64-gcc7.4.tar.gz) | 216M |
| Ubuntu 19 gcc8.3 | [root_v6.20.00.Linux-ubuntu19-x86_64-gcc8.3.tar.gz](https://root.cern/download/root_v6.20.00.Linux-ubuntu19-x86_64-gcc8.3.tar.gz) | 216M |
| macOS 10.13 clang100 | [root_v6.20.00.macosx64-10.13-clang100.tar.gz](https://root.cern/download/root_v6.20.00.macosx64-10.13-clang100.tar.gz) | 133M |
| macOS 10.13 clang100 | [root_v6.20.00.macosx64-10.13-clang100.pkg](https://root.cern/download/root_v6.20.00.macosx64-10.13-clang100.pkg) | 134M |
| macOS 10.14 clang110 | [root_v6.20.00.macosx64-10.14-clang110.tar.gz](https://root.cern/download/root_v6.20.00.macosx64-10.14-clang110.tar.gz) | 134M |
| macOS 10.14 clang110 | [root_v6.20.00.macosx64-10.14-clang110.pkg](https://root.cern/download/root_v6.20.00.macosx64-10.14-clang110.pkg) | 135M |
| macOS 10.15 clang110 | curl -O https://root.cern/download/root_v6.20.00.macosx64-10.15-clang110.tar.gz | 134M |
| macOS 10.15 clang110 | curl -O https://root.cern/download/root_v6.20.00.macosx64-10.15-clang110.pkg | 135M |
| **preview** Windows Visual Studio 2019 (dbg) | [root_v6.20.00.win32.vc16.debug.exe](https://root.cern/download/root_v6.20.00.win32.vc16.debug.exe) | 155M |
| **preview** Windows Visual Studio 2019 (dbg) | [root_v6.20.00.win32.vc16.debug.zip](https://root.cern/download/root_v6.20.00.win32.vc16.debug.zip) | 227M |
| **preview** Windows Visual Studio 2019 | [root_v6.20.00.win32.vc16.exe](https://root.cern/download/root_v6.20.00.win32.vc16.exe) |  85M |
| **preview** Windows Visual Studio 2019 | [root_v6.20.00.win32.vc16.zip](https://root.cern/download/root_v6.20.00.win32.vc16.zip) | 115M |

For macOS 10.15, please download the binaries with `curl` in a terminal, until we have set up signing of the package. ROOT downloaded with a browser will be blocked by macOS and cannot be run.

## Installations in CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-fedora30-gcc92-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-mac1015-clang110-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-ubuntu19-gcc83-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-fedora29-gcc83-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-centos7-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-ubuntu14-gcc48-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-ubuntu18-gcc74-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/centos7-aarch64-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-mac1013-clang100-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-ubuntu16-gcc54-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-mac1014-clang110-opt
~~~


## Example for setting up ROOT from CVMFS
~~~
. /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.00/x86_64-centos7-gcc48-opt/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-20-00 v6-20-00
~~~


## Windows
Windows 7/Vista/XP/NT/2000 are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start, or open directly. You can double-click ROOT to start it, ROOT files get registered with Windows.
 * **tar**: the traditional variant. Unpack e.g. with [7zip](http://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\root then call C:\root\bin\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes
 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
