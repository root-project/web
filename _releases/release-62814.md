---
layout: releases
version: 6.28.14
release_date: 2026-02-11
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v628/release-notes.html#release-6.28.14).
Among the other minor fixes and improvements, this release addresses [CVE-2026-24811](https://nvd.nist.gov/vuln/detail/CVE-2026-24811) and
[CVE-2026-24812](https://nvd.nist.gov/vuln/detail/CVE-2026-24812).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.28.14.Linux-AlmaLinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.28.14.Linux-AlmaLinux8.10-x86_64-gcc8.5.tar.gz) | 260M |
| Almalinux 9.7 | [root_v6.28.14.Linux-AlmaLinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.28.14.Linux-AlmaLinux9.7-x86_64-gcc11.5.tar.gz) | 277M |
| Almalinux 10.1 | [root_v6.28.14.Linux-AlmaLinux10.1-x86_64-gcc14.3.tar.gz](https://root.cern/download/root_v6.28.14.Linux-AlmaLinux10.1-x86_64-gcc14.3.tar.gz) | 284M |
| Ubuntu 22 | [root_v6.28.14.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.28.14.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 276M |
| Ubuntu 24 | [root_v6.28.14.Linux-ubuntu24-x86_64-gcc13.3.tar.gz](https://root.cern/download/root_v6.28.14.Linux-ubuntu24-x86_64-gcc13.3.tar.gz) | 274M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.28.14.source.tar.gz](https://root.cern/download/root_v6.28.14.source.tar.gz) | 177M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.14/almalinux10.1x86_64-gcc143-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.14/almalinux8.10x86_64-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.14/almalinux9.7x86_64-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.14/x86_64-ubuntu22-gcc114-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.28.14/x86_64-ubuntu24-gcc133-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-28-14 v6-28-14
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.
