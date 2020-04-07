---
title: How to setup ROOT externals from AFS/CVMFS
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The following instructions are useful for setting up an environment with all the required
ROOT externals coming from the central installations in AFS or CVMFS. This is exactly the
same scripts used by the continuous integration system (Jenkins).

## For *slc* and *centos* systems using the gcc compiler
The instructions are a single line to source an existing script in AFS/CVMFS. In the following example OS is 'slc6', the compiler is 'gcc49', and build type is 'release'.
```
# on AFS:
source /afs/cern.ch/sw/lcg/app/releases/ROOT-externals/ROOT-latest/x86_64-slc6-gcc49-opt/setup.sh
# on CVMFS
source /cvmfs/sft.cern.ch/lcg/views/ROOT-latest/x86_64-slc6-gcc49-opt/setup.csh
```

## For all the other compilers (icc, clang,...) and systems
In this case we can use the script that is used by jenkins. The script expects 4 arguments:

- LABEL is system OS and version. E.g. 'slc6', 'centos7', 'fedora14', 'mac1012', etc.
- COMPILER is the compiler and version. E.g. 'icc16', 'clang37', 'native' (for the native compiler), etc.
- BUILDTYPE is the type of the build. E.g. Release, Debug
- EXTERNALS is the label for the set of versions of the externals. Typically 'ROOT-date', but 'ROOT-latest' is a safe bet.
```
git clone http://root.cern.ch/git/rootspi.git
source rootspi/jenkins/jk-setup.sh slc6 icc14 Release ROOT-latest
```

## Debugging an existing nightly build
Often when a build has failed in the nightlies we are required to debug it. The following are the instructions to get the correct environment for starting the debug session. As input you need to know the **node name** and the **working directory** in the build node (and the password of the *sftnight* account). You can get this information from the logs in Jenkins or CDash.
```
$ ssh sftnight@<node-name>
$ cd <work-directory>
$ source setup.sh
$ cd build
$ ctest -V -R <failing test>
or
$ make <failing target>
```