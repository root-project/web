---
title: Nightlies
layout: single
---

> **Disclaimer**
>
> The usual nightly restrictions apply: a build might have failed, a build might be unavailable for a particular configuration, features might be missing or not yet in release quality.

## Where to find nightly builds:

  - [Directory](https://root.cern/download/nightly/?C=N;O=D){:target="_blank"} with nightly binaries for various platforms
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
