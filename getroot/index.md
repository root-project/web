---
title: "Get ROOT"
layout: single
sidebar:
  nav: "getroot"
---

## Curated by the ROOT Core developers

* [**Conda-Forge**](https://anaconda.org/channels/conda-forge/packages/root/overview) **(Linux, macOS):** `mamba env create -n root-640 "root=6.40.*"`
* **Binaries (Linux, macOS, Windows):** instructions per release [here](https://root.cern/install/all_releases/)
* [**CVMFS ROOT only**](https://cvmfs.readthedocs.io/en/stable/) **(Linux, macOS):** instructions per release [here](https://root.cern/install/all_releases/)
* [**CVMFS full LCG package suites**](https://lcginfo.cern.ch/) **(Linux, macOS):** `. /cvmfs/sft.cern.ch/lcg/views/LCG_<release number>/<platform>/setup.sh`
* [**Sources**](https://github.com/root-project/root)**:** Instructions [here](https://root.cern/getroot/build_from_source.html)

### In alpha mode:

* [**PyPi**](https://pypi.org/project/root/) **(Linux, from 6.42.00 macOS):** `pip install root`

## Possible thanks to external packagers

* [**Arch Linux**](https://archlinux.org/packages/extra/x86_64/root/)**:** `sudo pacman -S root`
* [**Fedora**](https://packages.fedoraproject.org/pkgs/root/root/) **Linux:** `sudo yum install root`
* [**Gentoo**](https://packages.gentoo.org/packages/sci-physics/root) **Linux:** `sudo emerge –ask sci-physics/root`
* [**Homebrew**](https://formulae.brew.sh/formula/root) **(macOS):** `brew install root`
* [**Macports**](https://ports.macports.org/port/root6/details/) **(macOS):** `sudo port install root6`
* [**Nix**](https://search.nixos.org/packages?query=root#show=root) **(Linux, macOS):** `nix-shell -p root`


## For CERN users:

* [**LXPLUS**](https://lxplusdoc.web.cern.ch) **nodes**: the latest ROOT is already installed
* [**SWAN**](https://swan.cern.ch) **Notebook Service**: ROOT comes with all available software stacks