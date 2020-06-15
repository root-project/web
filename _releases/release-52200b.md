---
layout: releases
version: 5.22/00b
release_date: 2009-05-14
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Source distributions

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [root_v5.22.00b.source.tar.gz](https://root.cern.ch/download/root_v5.22.00b.source.tar.gz) |  25M |




## Installations in AFS and CVMFS
Standalone installations with minimal external dependencies are available at:
~~~
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/osx105_ia32_gcc401_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_amd64_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_amd64_gcc43_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_ia32_gcc34_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_amd64_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_amd64_gcc43
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_ia32_gcc34
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/x86_64-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/x86_64-slc5-gcc34-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/i686-slc5-gcc43-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/x86_64-slc5-gcc34-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/i686-slc5-gcc34-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/x86_64-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_ia32_gcc43_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/i686-slc5-gcc34-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/i686-slc5-gcc43-opt
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/slc4_ia32_gcc43
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/osx105_ia32_gcc401
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/win32_vc71_dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/i686-winxp-vc9-dbg
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/doc
~~~

## AFS
Versions for many different platforms and compilers are available at:
/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b

To use ROOT directly from AFS:
~~~
. /afs/cern.ch/sw/lcg/external/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
. /afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00b/x86_64-slc5-gcc43-opt/root/bin/thisroot.sh
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
git checkout -b v5-22-00b v5-22-00b
~~~
