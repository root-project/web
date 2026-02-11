---
layout: releases
version: 6.26.18
release_date: 2026-02-11
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v626/release-notes.html#release-6.26.18).
Among the other minor fixes and improvements, this release addresses [CVE-2026-24811](https://nvd.nist.gov/vuln/detail/CVE-2026-24811) and
[CVE-2026-24812](https://nvd.nist.gov/vuln/detail/CVE-2026-24812).

## Binary distributions

Instead of manually downloading this binary, please explore first whether your [package manager](../../install/#install-via-a-package-manager){:target="\_blank"} already provides this version.
This way, you will automatically keep up-to-date with the latest stable versions with no manual maintenance on your side.

| Platform       | Files | Size |
|-----------|-------|-----|
| Almalinux 8.10 | [root_v6.26.18.Linux-AlmaLinux8.10-x86_64-gcc8.5.tar.gz](https://root.cern/download/root_v6.26.18.Linux-AlmaLinux8.10-x86_64-gcc8.5.tar.gz) | 235M |
| Almalinux 9.7 | [root_v6.26.18.Linux-AlmaLinux9.7-x86_64-gcc11.5.tar.gz](https://root.cern/download/root_v6.26.18.Linux-AlmaLinux9.7-x86_64-gcc11.5.tar.gz) | 250M |
| Ubuntu 22 | [root_v6.26.18.Linux-ubuntu22-x86_64-gcc11.4.tar.gz](https://root.cern/download/root_v6.26.18.Linux-ubuntu22-x86_64-gcc11.4.tar.gz) | 250M |

## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v6.26.18.source.tar.gz](https://root.cern/download/root_v6.26.18.source.tar.gz) | 186M |


## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.18/almalinux8.10x86_64-gcc85-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.18/almalinux9.7x86_64-gcc115-opt
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.26.18/x86_64-ubuntu22-gcc114-opt
~~~


## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v6-26-18 v6-26-18
~~~

See [instructions to build from source](../../install/#build-from-source){:target="\_blank"}.


