---
layout: releases
version: 5.22/00h
release_date: 2010-02-11
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| old_source | [old_root_v5.22.00h.source.tar.gz](https://root.cern.ch/download/old_root_v5.22.00h.source.tar.gz) |  25M |
| source | [root_v5.22.00h.source.tar.gz](https://root.cern.ch/download/root_v5.22.00h.source.tar.gz) |  25M |




## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/osx105_ia32_gcc401
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/osx105_ia32_gcc401_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/slc4_ia32_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/slc4_ia32_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/slc4_amd64_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/slc4_amd64_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/doc
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00h/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
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
git checkout -b v5-22-00h v5-22-00h
~~~
