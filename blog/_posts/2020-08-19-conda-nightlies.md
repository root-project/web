---
title: "Living at ROOT's bleeding edge, with Conda"
layout: archive
author: Enrico Guiraud
---

Sometimes ROOT users get bitten by nasty bugs, and we ROOT developers try our best to squash them as quickly as possible.
New features and improvements are also constantly merged in ROOT's main development branch, either coming from ROOT developers or as contributions from the community.
Be it bug fixes or new features, however, users typically have to wait for a ROOT release that includes them to try them out.
Or, you know, compile the very latest ROOT from source code -- but nobody has time for _that_!

If you are a ROOT power user with no time to lose, or you just want to quickly try out that new feature you heard about, or you _really_ need a bug fix that was merged _yesterday_ to get those fancy plots done, I have good news for you! Thanks to the great folks behind ROOT's [conda package](https://root.cern/install/#conda), not only you can install the latest ROOT stable version on your computer [in under 5 minutes](https://indico.cern.ch/event/759388/contributions/3306849/), but from today you can also install the bleeding edge, unreleased development version of ROOT _from yesterday_ with the following one-liner:

```bash
$ conda create --name root-nightly -c conda-forge -c https://root.cern/download/conda-nightly/latest root-nightly
```

That command creates a Conda environment called `root-nightly` which contains the very latest ROOT with the very latest goodies.
To activate the environment and use that ROOT version, just call

```
$ conda activate root-nightly
```

The usual disclaimer about nightly builds applies: minor bugs might crop in and features might not yet be production-ready.

A big thanks goes to Chris Burr for all the help in making this happen.
A nice blog post by Henry Schreiner, also maintainer of the ROOT Conda package, about the ins and outs of ROOT in Conda is [at this link](https://iscinumpy.gitlab.io/post/root-conda/).
All available distribution channels for ROOT nightly builds are listed at [https://root.cern/install/nightlies](https://root.cern/install/nightlies).

Let us know what you think by clicking the comment button below!
