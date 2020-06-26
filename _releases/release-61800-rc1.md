---
layout: releases
version: 6.18/00-rc1
release_date: 2020-06-26
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v618/release-notes.html#release-6.1800).

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.18.00-rc1.source.tar.gz](https://root.cern/download/root_v6.18.00-rc1.source.tar.gz) | 158M |


## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|

## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~

## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-18-00-rc1 v6-18-00-rc1
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
