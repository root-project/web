---
title: Installing ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

ROOT is available on Linux, Mac, and Windows. To install it, we highly recommend (ordered by priority) either:

1. Use a [package manager](#install-via-a-package-manager)
2. Download a [pre-compiled binary](#download-a-pre-compiled-binary-distribution)

Further ways to install ROOT on your computer are listed in the table of content on the right. Which one is best for you depends on your operating system and usage requirements.

In all cases, make sure to always use the most recent ROOT release possible to get the latest bug fixes, features and quick user support.
The latest stable ROOT release is
[{% include root_stable_version %}]({% include root_stable_version_relative_url %}) ([about ROOT versioning scheme]({{ '/about/versioning' | relative_url }})).

# Download a pre-compiled binary distribution

We distribute pre-compiled ROOT for several major Linux distributions as well as MacOS and (as a beta) Windows.
The steps to install a pre-compiled binary are simple:

1. Install all [required dependencies]({{'/install/dependencies' | relative_url}}) with the system package manager
2. [Download the release]({{'/install/all_releases' | relative_url}}) for the desired platform and ROOT version
3. Unpack the archive
4. Add the ROOT libraries and executables to your environment by sourcing the appropriate `thisroot.*` script. These setup scripts can be found in the ROOT binary release, in the `bin` directory.

For example, on {% include root_stable_os %}, a user could execute the following bash commands to install ROOT v{% include root_stable_version %}, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}):

```bash
$ wget https://root.cern/download/{% include root_stable_sample %}
$ tar -xzvf {% include root_stable_sample %}
$ source root/bin/thisroot.sh # also available: thisroot.{csh,fish,bat}
```

To avoid having to `source thisroot.sh` every time one needs to use ROOT, it is typical to add the command to
`.bashrc`, `.profile` or analogous configuration files.
Note, however, that sourcing `thisroot.sh` might interfere with ROOT versions installed with different methods.

And on Windows, for example, after the installation, open a `x86 Native Tools Command Prompt for VS 2019`, cd to your home directory (`cd %USERPROFILE%`) and call `thisroot.bat` (let's assume you installed ROOT in `C:\root`). Then you can start ROOT:

```bat
**********************************************************************
** Visual Studio 2019 Developer Command Prompt v16.11.3
** Copyright (c) 2021 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x86'

C:\Program Files (x86)\Microsoft Visual Studio\2019\Community>cd %USERPROFILE%

C:\Users\username>c:\root\bin\thisroot.bat

C:\Users\username>root
   ------------------------------------------------------------------
  | Welcome to ROOT {% include root_stable_version %}                        https://root.cern |
  | (c) 1995-2021, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for win32 on {% include root_stable_version_date %}, 11:34:39                         |
  | From tags/{% include root_stable_version_dash %}@{% include root_stable_version_dash %}                                        |
  | With MSVC 19.29.30133.0                                          |
  | Try '.help', '.demo', '.license', '.credits', '.quit'/'.q'       |
   ------------------------------------------------------------------

root [0]
```

If you are interested in testing (unstable) development features, you can check out the [nightlies](nightlies){:target="\_blank"}.

# Install via a package manager

> **Supported by the community:** these packages are not maintained by the ROOT team, but by helpful members of the community. Please go through each package manager's standard channels to report any related issue. If you package ROOT and would like to be added to the list below, please contact us by clicking the letter icon at the bottom of the page.

## Conda

For any Linux distribution and MacOS, ROOT is available as a [conda package](https://anaconda.org/conda-forge/root/){:target="\_blank"}. To create a new conda environment containing ROOT and activate it, execute

```sh
$ conda config --set channel_priority strict
$ conda create -c conda-forge --name <my-environment> root
$ conda activate <my-environment>
```
Setting `channel_priority` to `strict` is required to avoid conflicts on some platforms,
see [the relevant conda docs](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-channels.html#strict-channel-priority){:target="\_blank"} for more information.

The conda package uses C++17.

More instructions about using this package are available in [this blog post](https://iscinumpy.gitlab.io/post/root-conda/){:target="\_blank"}.

Please report any issues with the conda package [here](https://github.com/conda-forge/root-feedstock){:target="\_blank"}.

## Snap

On many Linux distributions, ROOT can be installed via Snap. For example, on Ubuntu:

```sh
$ sudo snap install root-framework
$ snap run root-framework
# or if there is no fear of conflicts with other installations:
$ root # and the output of `which root` should contain `/snap`
```

To use ROOT from Python, the Snap package bundles its own Python 3.8 interpreter
that knows where to find the ROOT libraries. This is done to avoid interference
with other system packages. You should use `pyroot` rather than `python` to make
use of the PyROOT features with the Snap package:
```python
$ pyroot
Python 3.8.10 (default, Jun 22 2022, 20:18:18)
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import ROOT
>>>
```

The Snap package uses C++17. See our [dedicated blog post]({{'/blog/snap-announcement/' | relative_url}}) for more information, or visit the official [ROOT Snap package](https://snapcraft.io/root-framework){:target="\_blank"} page.

## Linux package managers

ROOT can be directly installed from the operating system's package manager in the following Linux distributions:

### Fedora

Fedora's [ROOT package](https://src.fedoraproject.org/rpms/root){:target="\_blank"} can be installed with

```sh
$ dnf install root
```

More typically, however, users will want more than just the base package. The full list of components can be seen at
<https://src.fedoraproject.org/rpms/root/>{:target="\_blank"} by clicking in one of the offered versions.
To install ROOT with support for python and notebooks, for example, run

```sh
$ dnf install root python3-root root-notebook
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

The Arch package uses C++17.

### Gentoo

The Gentoo package for ROOT is [sci-physics/root](https://packages.gentoo.org/packages/sci-physics/root){:target="\_blank"}.
It can be installed with

```sh
$ emerge sci-physics/root
```

### <a name="nixos_nix_nixpkgs" />NixOS/Nix/Nixpkgs

The package name for ROOT in nixpkgs is `root`. It can be installed into the user environment using

```sh
$ nix-env -f '<nixpkgs>' -iA root
```

Running in a temporary environment can be achieved with

```sh
$ nix-shell -p root --run root
```

A `root5` package is provided for the legacy software support.

If you encounter any issues, feel free report them to the [nixpkgs issue tracker](https://github.com/NixOS/nixpkgs/issues).

### Ubuntu and Debian-based distributions

The ROOT team is working on the release of an official `.deb` package. More news on this topic very soon.<br>
In the meanwhile, ROOT is available on Ubuntu via [conda](#conda) or our [pre-compiled binaries](#download-a-pre-compiled-binary-distribution).

### Slackware

ROOT is available for Slackware 15.0 via [slackbuilds](https://slackbuilds.org/repository/15.0/academic/root/).
You can install it either by following the official slackbuilds
[HOWTO](https://slackbuilds.org/howto/), or via `sbopkg` (need to be installed in advance):
```sh
sqg -p root -o root­queue   # Create a queue for ROOT with dependencies
sbopkg -i rootqueue        # Install ROOT with it's dependencies
```
Remember, that the official recommendation for all slackbuilds (including ROOT) is that you
chose the FULL INSTALL for Slackware.


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

### Nix/Nixpkgs

The same instructions as [for Linux](#nixos_nix_nixpkgs) apply when running on macOS.

# LCG releases on CVMFS

## Standalone ROOT

If your platform mounts [CVMFS](https://cernvm.cern.ch/portal/filesystem){:target="\_blank"}
ROOT is directly available via [LCG releases](http://lcginfo.cern.ch/){:target="\_blank"}.

ROOT installations with minimal external dependencies are available for Fedora, Ubuntu, CentOS7 and MacOS at:

```
/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/<version>/<platform>
```

For example, to set up ROOT {% include root_stable_version %} on a {% include root_stable_os %} machine, just run:

```
source /cvmfs/sft.cern.ch/lcg/app/releases/ROOT/{% include root_stable_version_dot %}/{% include root_stable_dir %}/bin/thisroot.sh
```

Make sure you use your system's default compiler, just like this ROOT build.

## Complete environment

ROOT, Geant4 and many other packages with all their dependencies are available as LCG _views_:

```
/cvmfs/sft.cern.ch/lcg/views/LCG_<version>/<platform>
```

LCG views are available for CentOS 7, RHEL 9 (which also covers the binary-compatible AlmaLinux 9), and the latest macOS and Ubuntu releases.
For example, on CERN LXPLUS (AlmaLinux 9), you can set up a full environment that contains ROOT 6.30.02 with:

```bash
source /cvmfs/sft.cern.ch/lcg/views/LCG_105/x86_64-el9-gcc11-opt/setup.sh
```

To check what ROOT version is contained in an LCG release, you can visit [lcginfo.cern.ch](http://lcginfo.cern.ch/){:target="\_blank"}.


## Gentoo Prefix on CVMFS

ROOT is also experimentally available in a [Gentoo Prefix](https://wiki.gentoo.org/wiki/Project:Prefix){:target="\_blank"} installation
inside the contrib area of the SFT CVMFS repository. To use it from there, run
```
$ /cvmfs/sft.cern.ch/lcg/contrib/gentoo/linux/x86_64/startprefix
```
This will drop you into a new shell where all software from the prefix is available.

# Run in a Docker container

ROOT Docker containers for several linux flavours are available at [ROOT's official DockerHub](https://hub.docker.com/u/rootproject){:target="\_blank"}.

For example, to try out the latest ROOT release just run the following command in your terminal (after starting docker engine):
```cmd
docker run -it rootproject/root:latest
```

For more instructions on running root's docker image, visit the **Get Started** section of [ROOT's official DockerHub](https://hub.docker.com/r/rootproject/root){:target="\_blank"}.


# Run on CERN LXPLUS

Users with a CERN computing account can simply connect to `lxplus.cern.ch` via SSH and start `root`: the latest stable version is installed as a normal system package.

Note that certain features (e.g. multi-threading capabilities) are not available on `lxplus.cern.ch` (or, equivalently, `lxplus7.cern.ch`) due to incompatible versions of certain ROOT dependencies on CentOS7. You can use `lxplus8.cern.ch` to get access to CentOS8, where this limitation is not present.

# Build from source

In case no other installation method is available, or if you want full control over the options ROOT is built with,
it is possible to compile ROOT from source. See [Building ROOT from source]({{'/install/build_from_source' | relative_url}}) for detailed instructions.

As a quick summary, after installing all [required dependencies]({{'/install/dependencies' | relative_url}}), ROOT can be compiled with these commands on most UNIX-like systems:

```bash
# The latest stable branch gets updated automatically on each release.
# You may update your local copy by issuing a `git pull` command from within `root_src/`.
$ git clone --branch latest-stable --depth=1 https://github.com/root-project/root.git root_src
$ mkdir root_build root_install && cd root_build
$ cmake -DCMAKE_INSTALL_PREFIX=../root_install ../root_src # && check cmake configuration output for warnings or errors
$ cmake --build . -- install -j4 # if you have 4 cores available for compilation
$ source ../root_install/bin/thisroot.sh # or thisroot.{fish,csh}
```

And similarly, on Windows, inside a `x86 Native Tools Command Prompt for VS 2019`, ROOT can be compiled with these commands:

```bat
rem The `latest-stable` branch gets updated automatically on each release.
rem You may update your local copy by issuing a `git pull` command from within `root_src`.
C:\Users\username>git clone --branch latest-stable --depth=1 https://github.com/root-project/root.git root_src
C:\Users\username>mkdir root_build root_install && cd root_build
C:\Users\username>cmake -G"Visual Studio 16 2019" -A Win32 -Thost=x64 -DCMAKE_VERBOSE_MAKEFILE=ON -DCMAKE_INSTALL_PREFIX=../root_install ../root_src
C:\Users\username>cmake --build . --config Release --target install
C:\Users\username>..\root_install\bin\thisroot.bat
```
