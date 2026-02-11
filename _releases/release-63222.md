---
layout: releases
version: 6.32.22
release_date: 2026-02-11
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v632/release-notes.html#release-6.32.22).
Among the other minor fixes and improvements, this release addresses [CVE-2026-24811](https://nvd.nist.gov/vuln/detail/CVE-2026-24811) and
[CVE-2026-24812](https://nvd.nist.gov/vuln/detail/CVE-2026-24812).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.32.22.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.32.22.Linux-almalinux8.10-x86_64-gcc8.5.tar.gz) | 281M |
| Almalinux 9.7 | [root_v6.32.22.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.32.22.Linux-almalinux9.7-x86_64-gcc11.5.tar.gz) | 300M |
| Almalinux 10.1 | [root_v6.32.22.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.32.22.Linux-almalinux10.1-x86_64-gcc14.3.tar.gz) | 308M |
| Ubuntu 22.04 | [root_v6.32.22.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.32.22.Linux-ubuntu22.04-x86_64-gcc11.4.tar.gz) | 288M |
| Ubuntu 24.04 | [root_v6.32.22.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.32.22.Linux-ubuntu24.04-x86_64-gcc13.3.tar.gz) | 286M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.32.22.macos-14.8-x86_64-clang160.pkg](https://root.cern/download/root_v6.32.22.macos-14.8-x86_64-clang160.pkg) | 448M |
| macOS 14.8 x86_64 Xcode 16 | [root_v6.32.22.macos-14.8-x86_64-clang160.tar.gz](https://root.cern/download/root_v6.32.22.macos-14.8-x86_64-clang160.tar.gz) | 294M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.32.22.macos-15.7-arm64-clang170.pkg](https://root.cern/download/root_v6.32.22.macos-15.7-arm64-clang170.pkg) | 432M |
| macOS 15.7 arm64 Xcode 17 | [root_v6.32.22.macos-15.7-arm64-clang170.tar.gz](https://root.cern/download/root_v6.32.22.macos-15.7-arm64-clang170.tar.gz) | 287M |
| macOS 26.2 arm64 Xcode 17 | [root_v6.32.22.macos-26.2-arm64-clang170.pkg](https://root.cern/download/root_v6.32.22.macos-26.2-arm64-clang170.pkg) | 426M |
| macOS 26.2 arm64 Xcode 17 | [root_v6.32.22.macos-26.2-arm64-clang170.tar.gz](https://root.cern/download/root_v6.32.22.macos-26.2-arm64-clang170.tar.gz) | 282M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.32.22.source.tar.gz](https://root.cern/download/root_v6.32.22.source.tar.gz) | 186M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/arm64-mac262-clang170-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-almalinux10.1-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-almalinux8.10-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-almalinux9.7-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-mac148-clang160-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-ubuntu22.04-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.22/x86_64-ubuntu24.04-gcc133-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-32-22 v6-32-22
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.

