---
layout: releases
version: 5.30/05
release_date: 2011-11-24
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Release Notes
The release notes for this release can be found [here](https://root.cern.ch/root/html530/notes/release-notes.html#patch-releases)

## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.30.05.source.tar.gz](https://root.cern.ch/download/root_v5.30.05.source.tar.gz) |  39M |




## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/x86_64-mac106-gcc42-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/x86_64-mac106-gcc42-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/i686-slc5-gcc43-opt
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.05/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
~~~

## Direct Git repository access
The entire ROOT source can be obtained from our public Git repository:

~~~
git clone http://root.cern.ch/git/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git tag -l
git checkout -b v5-30-05 v5-30-05
~~~
