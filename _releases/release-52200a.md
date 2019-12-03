---
layout: releases
version: 5.22/00a
release_date: 2009-02-12
state:

toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.22.00a.source.tar.gz](https://root.cern.ch/download/root_v5.22.00a.source.tar.gz) |  25M |




## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/logs
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/doc
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_ia32_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/win32_vc71_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_ia32_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_amd64_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/osx105_ia32_gcc401_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_amd64_gcc43_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_amd64_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/osx105_ia32_gcc401
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_amd64_gcc43
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/i686-winxp-vc9-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/x86_64-slc5-gcc34-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_ia32_gcc43_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/x86_64-slc5-gcc34-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/slc4_ia32_gcc43
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/i686-slc5-gcc34-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/i686-slc5-gcc34-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/win32_vc71
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00a/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
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
git checkout -b v5-22-00a v5-22-00a
~~~
