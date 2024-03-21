---
layout: releases
version: 6.26/16
release_date: 2024-03-20
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.2616).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.9 | [root_v6.26.16.Linux-AlmaLinux8.9-x86_64-gcc8.5.relwithdebinfo.tar.gz](https://root.cern/download/root_v6.26.16.Linux-AlmaLinux8.9-x86_64-gcc8.5.relwithdebinfo.tar.gz) | 602M |
| Almalinux 8.9 | [root_v6.26.16.Linux-AlmaLinux8.9-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.26.16.Linux-AlmaLinux8.9-x86_64-gcc8.5.tar.gz) | 237M |
| Ubuntu 20 | [root_v6.26.16.Linux-ubuntu20-x86_64-gcc9.4.relwithdebinfo.tar.gz](https://root.cern/download/root_v6.26.16.Linux-ubuntu20-x86_64-gcc9.4.relwithdebinfo.tar.gz) | 622M |
| Ubuntu 20 | [root_v6.26.16.Linux-ubuntu20-x86_64-gcc9.4.tar.gz](https://root.cern/download/root_v6.26.16.Linux-ubuntu20-x86_64-gcc9.4.tar.gz) | 248M |
| Ubuntu 22 | [root_v6.26.16.Linux-ubuntu22-x86_64-gcc11.4.debug.tar.gz](https://root.cern/download/root_v6.26.16.Linux-ubuntu22-x86_64-gcc11.4.debug.tar.gz) | 426M |
| Ubuntu 22 | [root_v6.26.16.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.26.16.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 250M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.16.macos-12.7-x86_64-clang140.pkg](https://root.cern/download/root_v6.26.16.macos-12.7-x86_64-clang140.pkg) | 395M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.16.macos-12.7-x86_64-clang140.relwithdebinfo.pkg](https://root.cern/download/root_v6.26.16.macos-12.7-x86_64-clang140.relwithdebinfo.pkg) | 407M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.16.macos-12.7-x86_64-clang140.relwithdebinfo.tar.gz](https://root.cern/download/root_v6.26.16.macos-12.7-x86_64-clang140.relwithdebinfo.tar.gz) | 266M |
| macOS 12.7 x86_64 Xcode 14 | [root_v6.26.16.macos-12.7-x86_64-clang140.tar.gz](https://root.cern/download/root_v6.26.16.macos-12.7-x86_64-clang140.tar.gz) | 254M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.26.16.source.tar.gz](https://root.cern/download/root_v6.26.16.source.tar.gz) | 186M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-almalinux8.9-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-almalinux8.9-gcc85relwithdebinfo-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-mac127-clang140-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-mac127-clang140.relwithdebinfo-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-ubuntu20-gcc94-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-ubuntu20-gcc94relwithdebinfo-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-ubuntu22-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.16/x86_64-ubuntu22-gcc114debug-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-16 v6-26-16
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.