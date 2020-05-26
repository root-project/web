---
layout: releases
version: 5.34/36
release_date: 2016-04-05
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

## Highlights

Bug fix release.

## Release Notes

The release notes for this release can be found [here]({{ '/download/all_releases/root-version-v5-34-00-patch-release-notes#36' | relative_url }}).

The fixed/completed list of JIRA tickets are:

*   [[ROOT-3234](https://sft.its.cern.ch/jira/browse/ROOT-3234)] - make install fails when configured with afs
*   [[ROOT-4352](https://sft.its.cern.ch/jira/browse/ROOT-4352)] - Some compilation errors in /net/auth/src/TAFS.cxx
*   [[ROOT-4399](https://sft.its.cern.ch/jira/browse/ROOT-4399)] - TString::Tokenize() with subsequent delimiters
*   [[ROOT-6923](https://sft.its.cern.ch/jira/browse/ROOT-6923)] - Memory leak with circular TTree
*   [[ROOT-7689](https://sft.its.cern.ch/jira/browse/ROOT-7689)] - Crash in TGaxis::PaintAxis() in certain cases when using time format
*   [[ROOT-7693](https://sft.its.cern.ch/jira/browse/ROOT-7693)] - configure builds libSQLite, but TSQLServer needs libRSQLite.
*   [[ROOT-7703](https://sft.its.cern.ch/jira/browse/ROOT-7703)] - TNetXNGFileStager::Locate does not give same answer as TXNetFileStager::Locate
*   [[ROOT-7742](https://sft.its.cern.ch/jira/browse/ROOT-7742)] - a bug in thisroot.sh (ROOT env setup) for bash
*   [[ROOT-7756](https://sft.its.cern.ch/jira/browse/ROOT-7756)] - AliEve (based on TEveManager) crashes on El Capitan
*   [[ROOT-7758](https://sft.its.cern.ch/jira/browse/ROOT-7758)] - Configuration of 32 bit build is wrong on 64 bit systems
*   [[ROOT-7766](https://sft.its.cern.ch/jira/browse/ROOT-7766)] - SetTimeDisplay is set to false when SetLogy is enabled
*   [[ROOT-7809](https://sft.its.cern.ch/jira/browse/ROOT-7809)] - TWebFile infinite loop for 301 redirects without Location
*   [[ROOT-8021](https://sft.its.cern.ch/jira/browse/ROOT-8021)] - PaintLine not correctly drawn if out of pad
*   [[ROOT-8031](https://sft.its.cern.ch/jira/browse/ROOT-8031)] - TTree auto (read) cache setup during Fill
*   [[ROOT-8032](https://sft.its.cern.ch/jira/browse/ROOT-8032)] - minimal/gminimal use CACHE FORCE OFF on core build features
*   [[ROOT-8045](https://sft.its.cern.ch/jira/browse/ROOT-8045)] - Shipped libpng is outdated, has multiple security issues
*   [[ROOT-8055](https://sft.its.cern.ch/jira/browse/ROOT-8055)] - File corruption after TTree deletion
*   [[ROOT-8070](https://sft.its.cern.ch/jira/browse/ROOT-8070)] - Problem linking ROOT libs with cmake on windows
*   [[ROOT-8076](https://sft.its.cern.ch/jira/browse/ROOT-8076)] - ROOT5 series fails to build (with C++11 enabled) on OS X 10.11.4 and Xcode 7.3
*   [[ROOT-7667](https://sft.its.cern.ch/jira/browse/ROOT-7667)] - Getter for polylines in TEveTrackPropagator
*   [[ROOT-7776](https://sft.its.cern.ch/jira/browse/ROOT-7776)] - Integrate GSL 2.0 in ROOT

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.34.36.source.tar.gz](https://root.cern.ch/download/root_v5.34.36.source.tar.gz) |  72M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| CentOS Cern 7 gcc4.8 | [root_v5.34.36.Linux-centos7-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-centos7-x86_64-gcc4.8.tar.gz) |  72M |
| CentOS Cern 7 gcc4.9 | [root_v5.34.36.Linux-centos7-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-centos7-x86_64-gcc4.9.tar.gz) |  73M |
| Linux fedora20 gcc4.8 | [root_v5.34.36.Linux-fedora20-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-fedora20-x86_64-gcc4.8.tar.gz) |  58M |
| Scientific Linux Cern 6 gcc4.4 | [root_v5.34.36.Linux-slc6-x86_64-gcc4.4.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-slc6-x86_64-gcc4.4.tar.gz) |  70M |
| Scientific Linux Cern 6 gcc4.7 | [root_v5.34.36.Linux-slc6-x86_64-gcc4.7.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-slc6-x86_64-gcc4.7.tar.gz) |  71M |
| Scientific Linux Cern 6 gcc4.8 | [root_v5.34.36.Linux-slc6-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-slc6-x86_64-gcc4.8.tar.gz) |  71M |
| Scientific Linux Cern 6 gcc4.9 | [root_v5.34.36.Linux-slc6-x86_64-gcc4.9.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-slc6-x86_64-gcc4.9.tar.gz) |  73M |
| Scientific Linux Cern 6 gcc5.1 | [root_v5.34.36.Linux-slc6-x86_64-gcc5.1.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-slc6-x86_64-gcc5.1.tar.gz) |  73M |
| Ubuntu 12 gcc4.6 | [root_v5.34.36.Linux-ubuntu12-x86_64-gcc4.6.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-ubuntu12-x86_64-gcc4.6.tar.gz) |  58M |
| Ubuntu 14 gcc4.8 | [root_v5.34.36.Linux-ubuntu14-x86_64-gcc4.8.tar.gz](https://root.cern.ch/download/root_v5.34.36.Linux-ubuntu14-x86_64-gcc4.8.tar.gz) |  62M |
| OsX 10.9 clang60 | [root_v5.34.36.macosx64-10.9-clang60.dmg](https://root.cern.ch/download/root_v5.34.36.macosx64-10.9-clang60.dmg) |  56M |
| OsX 10.9 clang60 | [root_v5.34.36.macosx64-10.9-clang60.tar.gz](https://root.cern.ch/download/root_v5.34.36.macosx64-10.9-clang60.tar.gz) |  56M |
| OsX 10.10 clang70 | [root_v5.34.36.macosx64-10.10-clang70.dmg](https://root.cern.ch/download/root_v5.34.36.macosx64-10.10-clang70.dmg) |  57M |
| OsX 10.10 clang70 | [root_v5.34.36.macosx64-10.10-clang70.tar.gz](https://root.cern.ch/download/root_v5.34.36.macosx64-10.10-clang70.tar.gz) |  56M |
| OsX 10.11 clang70 | [root_v5.34.36.macosx64-10.11-clang70.dmg](https://root.cern.ch/download/root_v5.34.36.macosx64-10.11-clang70.dmg) |  58M |
| OsX 10.11 clang70 | [root_v5.34.36.macosx64-10.11-clang70.tar.gz](https://root.cern.ch/download/root_v5.34.36.macosx64-10.11-clang70.tar.gz) |  58M |
| Windows Visual Studio 2010 (dbg) | [root_v5.34.36.win32.vc10.debug.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc10.debug.exe) |  92M |
| Windows Visual Studio 2010 (dbg) | [root_v5.34.36.win32.vc10.debug.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc10.debug.zip) | 140M |
| Windows Visual Studio 2010 | [root_v5.34.36.win32.vc10.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc10.exe) |  46M |
| Windows Visual Studio 2010 | [root_v5.34.36.win32.vc10.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc10.zip) |  63M |
| Windows Visual Studio 2012 (dbg) | [root_v5.34.36.win32.vc11.debug.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc11.debug.exe) |  98M |
| Windows Visual Studio 2012 (dbg) | [root_v5.34.36.win32.vc11.debug.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc11.debug.zip) | 151M |
| Windows Visual Studio 2012 | [root_v5.34.36.win32.vc11.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc11.exe) |  47M |
| Windows Visual Studio 2012 | [root_v5.34.36.win32.vc11.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc11.zip) |  64M |
| Windows Visual Studio 2013 (dbg) | [root_v5.34.36.win32.vc12.debug.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc12.debug.exe) |  99M |
| Windows Visual Studio 2013 (dbg) | [root_v5.34.36.win32.vc12.debug.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc12.debug.zip) | 152M |
| Windows Visual Studio 2013 | [root_v5.34.36.win32.vc12.exe](https://root.cern.ch/download/root_v5.34.36.win32.vc12.exe) |  47M |
| Windows Visual Studio 2013 | [root_v5.34.36.win32.vc12.zip](https://root.cern.ch/download/root_v5.34.36.win32.vc12.zip) |  64M |



## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-centos7-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-centos7-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-slc6-gcc48-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-slc6-gcc49-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-mac109-clang60-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-mac1010-clang70-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-mac1011-clang70-opt
~~~


## Example for setting up ROOT and the corresponding compiler from AFS
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.9/x86_64-slc6-gcc49-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.34.36/x86_64-slc6-gcc49-opt/root/bin/thisroot.sh
~~~

## Git
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v5-34-36 v5-34-36
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