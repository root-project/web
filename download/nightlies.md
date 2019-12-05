---
title: Nightlies
layout: single
sidebar:
  nav: "download"
---


**Disclaimer:** The usual nightly restrictions apply: a build might have failed, a build
might be unavailble for a particular configuration, features might be missing are not
yet in release quality.

## Where to find nightly builds:

  - [Directory](https://root.cern/download/nightly/?C=N;O=D) with nightly binaries for various platforms
  - CVMFS:
<br>
Source the relevant setup scripts, such as:
```
source /cvmfs/sft.cern.ch/lcg/nightlies/dev3/<DAY>/lcgenv/*/<PLATFORM+Compiler>/lcgenv-env.sh
source /cvmfs/sft.cern.ch/lcg/nightlies/dev3/<DAY>/ROOT/HEAD/<PLATFORM+Compiler>/bin/thisroot.sh
```
Or, Gentoo prefix (platform independent), execute:
```
/cvmfs/sft.cern.ch/lcg/contrib/gentoo/linux/x86_64/startprefix`
```