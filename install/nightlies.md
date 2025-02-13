---
title: Nightlies
layout: single
sidebar:
  nav: "install"
---

This page lists all the ways you can install a bleeding-edge version of ROOT, i.e. one that was built last night from the head of the development branch.

> **Disclaimer**
>
> The usual nightly restrictions apply: a build might have failed, a build might be unavailable for a particular configuration, features might be missing or not yet in release quality.

## Pre-compiled binaries

Pre-compiled binary nightlies for various platforms are not available at the moment.
The [usual instructions]({{ '/install/#download-a-pre-compiled-binary-distribution' | relative_url}}) for the usage of our binary distributions apply.

## LCG nightlies

If you have access to LCG, as it is the case on LXPLUS, for example, ROOT nightlies can be obtained by sourcing the relevant scripts:

```
source /cvmfs/sft.cern.ch/lcg/views/dev3/latest/<Platform+compiler>/setup.sh
```
- To get a ROOT version a few days old, replace `latest` with the desired day.

## Conda package

ROOT nightly builds as conda packages are not available at the moment.

More instructions about using the ROOT conda package are available in [this blog post](https://iscinumpy.gitlab.io/post/root-conda/).

Please report any issues with the conda package [here](https://github.com/conda-forge/root-feedstock){:target="\_blank"}.
