---
title: Installing ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

ROOT is available on Linux, Mac, and (as a beta release) on Windows.<br>
The latest stable ROOT release is
[{% include root_stable_version %}]({% include root_stable_version_relative_url %}) ([about ROOT versioning scheme]({{ '/about/versioning' | relative_url }})).

There are several ways to install ROOT on your computer: they are all listed in the table of content on the right. Which one is best for you depends on your operating system and usage requirements.
In all cases, make sure to always use the most recent ROOT release possible to get the latest bug fixes, features and quick user support.

# Download a pre-compiled binary distribution

We distribute pre-compiled ROOT for several major Linux distributions as well as MacOS and (as a beta) Windows.
The steps to install a pre-compiled binary are simple:

1. Install all [required dependencies]({{'/install/dependencies' | relative_url}}) with the system package manager
1. [Download the release]({{'/install/all_releases' | relative_url}}) for the desired platform and ROOT version
1. Unpack the archive
1. Add the ROOT libraries and executables to your environment by sourcing the appropriate `thisroot.*` script. These setup scripts can be found in the ROOT binary release, in the `bin` directory.

For example, on Ubuntu 19, a user could execute the following bash commands to install ROOT v6.22/00, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}):

```bash
$ wget https://root.cern/download/root_v6.22.00.Linux-ubuntu19-x86_64-gcc9.2.tar.gz
$ tar -xzvf root_v6.22.00.Linux-ubuntu19-x86_64-gcc9.2.tar.gz
$ source root/bin/thisroot.sh # also available: thisroot.{csh,fish,bat}
```

To avoid having to `source thisroot.sh` every time one needs to use ROOT, it is typical to add the instruction to
`.bashrc`, `.profile` or analogous configuration files.
Note, however, that sourcing `thisroot.sh` might interfere with ROOT versions installed with different methods.

# Install via a package manager

> **Supported by the community:** these packages are not maintained by the ROOT team, but by helpful members of the community. Please go through each package manager's standard channels to report any related issue. If you package ROOT and would like to be added to the list below, please contact us by clicking the letter icon at the bottom of the page.

## Conda

For any Linux distribution and MacOS, ROOT is available as a [conda package](https://anaconda.org/conda-forge/root/){:target="\_blank"}. To create a new conda environment containing ROOT and activate it, execute

```sh
$ conda create -c conda-forge --name <my-environment> root
$ conda activate <my-environment>
```

More instructions about using the conda package are available in [this blog post](https://iscinumpy.gitlab.io/post/root-conda/).

Please report any issues with the conda package [here](https://github.com/conda-forge/root-feedstock){:target="\_blank"}.

## Snap

On many Linux distributions, ROOT can be installed via Snap. For example, on Ubuntu:

```sh
$ sudo snap install root-framework
$ snap run root-framework
# or if there is no fear of conflicts with other installations:
$ root # and the output of `which root` should contain `/snap`
```

See our [dedicated blog post]({{/blog/snap-announcement/ | relative_url}}) for more information, or visit the official [ROOT Snap package](https://snapcraft.io/root-framework){:target="\_blank"} page.

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

### Ubuntu and Debian-based distributions

The ROOT team is working on the release of an official `.deb` package. More news on this topic very soon.<br>
In the meanwhile, ROOT is available on Ubuntu via [conda](#conda) or our [pre-compiled binaries](#download-a-pre-compiled-binary-distribution).

## MacOS package managers

### Homebrew

On Mac, ROOT is also available as a [homebrew formula](https://formulae.brew.sh/formula/root){:target="\_blank"}.
You can install it with

```sh
$ brew install root
```

### Macports

After [installing macports](https://www.macports.org/install.php), the [ROOT port](https://ports.macports.org/port/root6/summary/) can be installed with

```sh
$ sudo port install root6
```

# LCG releases on CVMFS

## Pre-built ROOT without dependencies

If your platform mounts [CVMFS](https://cernvm.cern.ch/portal/filesystem){:target="\_blank"} (as, for example, CERN LXPLUS does),
ROOT is directly available as an [LCG release](http://lcginfo.cern.ch/){:target="\_blank"}.

ROOT installations with minimal external dependencies are available for Fedora, Ubuntu, CentOS 7 and MacOS at:

```
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/<version>/<platform>
```

For example, to set up ROOT 6.22/00 on a CentOS7 machine that already has all [ROOT required dependencies]({{'/install/dependencies' | relative_url}}) installed, just run:

```
source /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.00/x86_64-centos7-gcc48-opt/bin/thisroot.sh
```

## ROOT plus dependencies

On CentOS7, ROOT as well as its dependencies and many other packages are also available as an LCG _view_:

```
/cvmfs/sft.cern.ch/lcg/views/LCG_<version>/<platform>
```

For example, to set up a full environment with ROOT 6.20/02 on CERN LXPLUS, you can run:

```
source /cvmfs/sft.cern.ch/lcg/views/LCG_97/x86_64-centos7-gcc8-dbg/setup.sh
```

To check what ROOT version is contained in an LCG release, check [lcginfo.cern.ch](http://lcginfo.cern.ch/){:target="\_blank"}.

## Gentoo Prefix on CVMFS

ROOT is also experimentally available in a [Gentoo Prefix](https://wiki.gentoo.org/wiki/Project:Prefix){:target="\_blank"} installation
inside the contrib area of the SFT CVMFS repository. To use it from there, run
```
$ /cvmfs/sft.cern.ch/lcg/contrib/gentoo/linux/x86_64/startprefix
```
This will drop you into a new shell where all software from the prefix is available.

# Run in a Docker container

ROOT Docker containers for several linux flavours are available at [ROOT's official DockerHub](https://hub.docker.com/r/rootproject){:target="\_blank"}.

For example, to try out the latest ROOT release just run `docker run -it rootproject/root`.

# Run on CERN LXPLUS

Users with a CERN computing account can simply connect to `lxplus.cern.ch` via SSH and start `root`: the latest stable version is installed as a normal system package.

Note that certain features (e.g. multi-threading capabilities) are not available on `lxplus.cern.ch` (or, equivalently, `lxplus7.cern.ch`) due to incompatible versions of certain ROOT dependencies on CentOS7. You can use `lxplus8.cern.ch` to get access to CentOS8, where this limitation is not present.

# Build from source

In case no other installation method is available, or if you want full control over the options ROOT is built with,
it is possible to compile ROOT from source. See [Building ROOT from source]({{'/install/build_from_source' | relative_url}}) for detailed instructions.

As a quick summary, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}), ROOT can be compiled with these commands on most UNIX-like systems:

```bash
# substitute `v6-22-00-patches` with the patches branch of the latest release
$ git clone --branch v6-22-00-patches https://github.com/root-project/root.git root_src
$ mkdir root_build root_install && cd root_build
$ cmake -DCMAKE_INSTALL_PREFIX=../root_install ../root_src # && check cmake configuration output for warnings or errors
$ cmake --build . -- install -j4 # if you have 4 cores available for compilation
$ source ../root_install/bin/thisroot.sh # or thisroot.{fish,csh}
```
