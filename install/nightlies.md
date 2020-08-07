---
title: Nightlies
layout: single
---

This page lists all the ways you can install a bleeding-edge version of ROOT, i.e. one that was built last night from the head of the development branch.

> **Disclaimer**
>
> The usual nightly restrictions apply: a build might have failed, a build might be unavailable for a particular configuration, features might be missing or not yet in release quality.

## Pre-compiled binaries

Pre-compiled binaries for various platforms are available [at this link](https://root.cern/download/nightly/?C=N;O=D){:target="_blank"}.
The [usual instructions]({{ '/install/#download-a-pre-compiled-binary-distribution' | relative_url}}) for the usage of our binary distributions apply.

## LCG nightlies

If you have access to LCG, as it is the case on LXPLUS, for example, ROOT nightlies can be obtained by sourcing the relevant scripts:

```
source /cvmfs/sft.cern.ch/lcg/nightlies/dev3/<DAY>/lcgenv/*/<PLATFORM+Compiler>/lcgenv-env.sh
source /cvmfs/sft.cern.ch/lcg/nightlies/dev3/<DAY>/ROOT/HEAD/<PLATFORM+Compiler>/bin/thisroot.sh
```

## Conda package

ROOT nightly builds are available as conda packages hosted on our website.
To create a new conda environment with the latest ROOT build, you can use:

```
conda create -n root-nightly -c conda-forge -c https://root.cern/download/conda-nightly/latest root-nightly
```

You can then activate this environment with

```
conda activate root-nightly
```

More instructions about using the ROOT conda package are available in [this blog post](https://iscinumpy.gitlab.io/post/root-conda/).

Please report any issues with the conda package [here](https://github.com/conda-forge/root-feedstock){:target="\_blank"}.
