---
title: Installing ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

ROOT is available on Linux, Mac, and (as a beta release) on Windows.<br>
The latest stable ROOT release is {% include root_stable_version %} ([about ROOT versioning scheme]({{ '/about/versioning' | relative_url }})).

There are several ways to install ROOT on your computer: they are all listed in the table of content on the right. Which one is best for you depends on your operating system and usage requirements.
In all cases, make sure to always use the most recent ROOT release possible to get the latest bug fixes, features and quick user support.

# Download a pre-compiled binary distribution

We distribute pre-compiled ROOT for several major Linux distributions as well as MacOS and (as a beta) Windows.
The steps to install a pre-compiled binary are simple:

1. Install all [required dependencies]({{'/install/dependencies' | relative_url}}) with the system package manager
1. [Download the release]({{'/install/binary_releases' | relative_url}}) for the desired platform and ROOT version
1. Unpack the archive
1. Add the ROOT libraries and executables to your environment by sourcing the appropriate `thisroot.*` script. These setup scripts can be found in the ROOT binary release, in the `bin` directory.

For example, on Ubuntu 19, a user could execute the following bash commands to install ROOT v6.20/04, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}):

```bash
$ wget https://root.cern/download/root_v6.20.04.Linux-ubuntu19-x86_64-gcc9.2.tar.gz
$ tar -xzvf root_v6.20.04.Linux-ubuntu19-x86_64-gcc9.2.tar.gz
$ source root/bin/thisroot.sh # also available: thisroot.{csh,fish,bat}
```

To avoid having to `source thisroot.sh` every time one needs to use ROOT, it is typical to add the instruction to
`.bashrc`, `.profile` or analogous configuration files.
Note, however, that sourcing `thisroot.sh` might interfere with ROOT versions installed with different methods.

# Install via a package manager

> **Supported by the community:** these packages are not maintained by the ROOT team, but by helpful members of the community. Please go through each package manager's standard channels to report any related issue. If you package ROOT and would like to be added to the list below, please contact us by clicking the letter icon at the bottom of the page.

## Linux package managers

ROOT can be directly installed from the operating system's package manager in the following Linux distributions:

### Fedora

Fedora's [ROOT package](https://src.fedoraproject.org/rpms/root){:target="\_blank"} can be installed with

```sh
$ yum install root
```

More typically, however, users will want more than just the base package. The full list of components can be seen at
<https://src.fedoraproject.org/rpms/root/>{:target="\_blank"} by clicking in one of the offered versions.
To install ROOT with support for python and notebooks, for example, run

```sh
$ yum install root python3-root root-notebook
```

### CentOS

ROOT is available on CentOS via [EPEL](https://fedoraproject.org/wiki/EPEL){:target="\_blank"}. To install ROOT on CentOS, just run

```sh
$ yum install epel-release
$ yum install root
```

### Arch Linux

Arch's [ROOT package](https://www.archlinux.org/packages/community/x86_64/root){:target="\_blank"} can be installed with

```sh
$ pacman -Syu root
```

### Gentoo

The Gentoo package for ROOT is [sci-physics/root](https://packages.gentoo.org/packages/sci-physics/root){:target="\_blank"}.
It can be installed with

```sh
$ emerge sci-physics/root
```

## Conda

For any Linux distribution and MacOS, ROOT is available as a [conda package](https://anaconda.org/conda-forge/root/){:target="\_blank"}. To create a new conda environment containing ROOT and activate it, execute

```sh
$ conda create -c conda-forge --name <my-environment> root
$ conda activate <my-environment>
```

More instructions about using the conda package are available in [this blog post](https://iscinumpy.gitlab.io/post/root-conda/).

Please report any issues with the conda package [here](https://github.com/conda-forge/root-feedstock){:target="\_blank"}.

## Homebrew for MacOS

On Mac, ROOT is also available as a [homebrew formula](https://formulae.brew.sh/formula/root){:target="\_blank"}.
You can install it with

```sh
$ brew install root
```

# LCG releases on CVMFS

## Pre-built ROOT without dependencies

If your platform mounts [CVMFS](https://cernvm.cern.ch/portal/filesystem){:target="\_blank"} (as, for example, CERN lxplus does),
ROOT is directly available as an [LCG release](http://lcginfo.cern.ch/){:target="\_blank"}.

ROOT installations with minimal external dependencies are available for Fedora, Ubuntu, Centos 7 and MacOS at:

```
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/<version>/<platform>
```

For example, to set up ROOT 6.20/04 on a Centos7 machine that already has all [ROOT required dependencies]({{'/install/dependencies' | relative_url}}) installed, just run:

```
source /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.20.04/x86_64-centos7-gcc48-opt/bin/thisroot.sh
```

## ROOT plus dependencies

On Centos7, ROOT as well as its dependencies and many other packages are also available as an LCG _view_:

```
/cvmfs/sft.cern.ch/lcg/views/LCG_<version>/<platform>
```

For example, to set up a full environment with ROOT 6.20/02 on CERN lxplus, you can run:

```
source /cvmfs/sft.cern.ch/lcg/views/LCG_97/x86_64-centos7-gcc8-dbg/setup.sh
```

To check what ROOT version is contained in an LCG release, check [lcginfo.cern.ch](http://lcginfo.cern.ch/){:target="\_blank"}.

## ROOT nightly builds

ROOT nightly builds for Centos7 are also available on CVMFS. They are not as stable as official releases, but contain the very latest features and bug fixes.
LCG views nightly builds plus dependencies are at `/cvmfs/sft-nightlies.cern.ch/lcg/views/dev3/latest/<platform>`.

# Run in a Docker container

ROOT Docker containers for several linux flavours are available at [ROOT's official DockerHub](https://hub.docker.com/r/rootproject){:target="\_blank"}.

For example, to try out the latest ROOT release just run `docker run rootproject/root`.

# Run on CERN lxplus

Users with a CERN computing account can simply connect to `lxplus.cern.ch` via SSH and start `root`: the latest stable version is installed as a normal system package.

# Build from source

In case no other installation method is available, or if you want full control over the options ROOT is built with,
it is possible to compile ROOT from source. See [Building ROOT from source]({{'/install/build_from_source' | relative_url}}) for detailed instructions.

As a quick summary, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}), ROOT can be compiled with these commands on most UNIX-like systems:

```bash
# substitute `v6-20-00-patches` with the patches branch of the latest release
$ git clone --branch v6-20-00-patches https://github.com/root-project/root.git root_src
$ mkdir root_build root_install && cd root_build
$ cmake -DCMAKE_INSTALL_PREFIX=../root_install ../root_src # && check cmake configuration output for warnings or errors
$ cmake --build . -- install -j4 # if you have 4 cores available for compilation
$ source ../root_install/bin/thisroot.sh # or thisroot.{fish,csh}
```
