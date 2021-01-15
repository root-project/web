---
title: "A Snap package for ROOT on Linux"
layout: archive
author: James Carroll
---

There is a new experimental package format for ROOT, based on the [Snap package manager](https://snapcraft.io) from Canonical. This package can be ideal for new ROOT users, new Linux users, or people whose ROOT requirements might be entirely satisfied with an immutable container image. 

Take a look at the store listing at [https://snapcraft.io/root-framework](https://snapcraft.io/root-framework), where you can find installations for some common distributions, e.g. [Ubuntu](https://snapcraft.io/install/root-framework/ubuntu), [Mint](https://snapcraft.io/install/root-framework/mint), [Debian](https://snapcraft.io/install/root-framework/debian), [Fedora](https://snapcraft.io/install/root-framework/fedora), [OpenSUSE](https://snapcraft.io/install/root-framework/opensuse), [CentOS](https://snapcraft.io/install/root-framework/centos), [Arch](https://snapcraft.io/install/root-framework/arch), and more!

On Ubuntu, it is as simple as:
```
sudo snap install root-framework && root
```

You might be able to even just search for the ROOT Framework and install it in a single click!

![ROOT in the Ubuntu App Store]({{ '/assets/images/snap_announcement_01.png' | relative_url }})

This is a full-fat installation of ROOT, complete with its utilities such as `hadd`, PyROOT via Python 3.8 (with SciPy, NumPy, Pandas and Matplotlib), and JupyROOT.
You will get these bundled by default, and since the whole package is based on container technology, they cannot interfere with any of your system libraries and can be easily upgraded (automatically!), removed, and mixed alongside other ROOT installations.

Just run `root` in the terminal after installation and you can get to work instantly.
Give `root --notebook` a go and try out the JupyROOT support.
As a special case, if you want PyROOT, you must run `pyroot` rather than `python`.
This ensures you get the bundled version of Python in the container rather than the host system, but from there you can `import ROOT` normally and run your scripts.
You can also pass parameters to `pyroot` as if it were `python`, e.g. `pyroot -i $(root-config --tutdir)/pyroot/fillrandom.py`.

There is no need to mount the `$HOME` directory, graphical support should work by default, and a lot of optional packages are built by default.
The goal is to provide a Docker-like experience for ROOT but blur the distinction between the container and host environment, in a way that is convenient for users. 
For example, by simply adding a shortcut to start ROOT in the start menu of most systems under the science section.


## Tell Me More
### Sandboxing
Most snap packages are under a sandboxing model that might subtly interfere with a user's regular workflow.
This means that the ROOT snap cannot just access a user's camera or microphone for example, since this makes little sense for ROOT. However, one notable feature is that ROOT is limited to accessing files in the users home directory (aside from over the network).
Furthermore, the snap will be prevented from accessing hidden files/folders in the top level of the home directory itself, such as `$HOME/.ssh`.

To help make this work, the `$HOME` variable, and `gSystem->HomeDirectory()` will return a modified value for the users home directory, generally `/home/example/snap/root-framework/current/`. If a user wants to make use of `rootlogin.c` for the entire application, keep in mind it will look for it in `$HOME` which points there instead. 
If you make use of the parallel installation ability mentioned below, this can be an advantage as each installed version of the ROOT snap will have a unique `$HOME`, and may have different `rootlogin` files, history, etc.

To be clear, this does not prevent you from reading and writing to `/home/example/desktop/` for example.
The value for the current working directory works the same as normal.
If ROOT is opened with the current working directory set to to `/home/example`, you can access your desktop folder as simply `./desktop`.

```
$ pwd
/home/james
$ echo "Hello World" >> Example.txt
$ root
   ------------------------------------------------------------------
  | Welcome to ROOT 6.22/06                        https://root.cern |
  | (c) 1995-2020, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for linuxx8664gcc on Jan 08 2021, 20:08:00                 |
  | From tags/v6-22-06@v6-22-06                                      |
  | Try '.help', '.demo', '.license', '.credits', '.quit'/'.q'       |
   ------------------------------------------------------------------

root [0] .!cat Example.txt
Hello World
root [1] .!pwd
/home/james
```

### Automatic Updates
Snaps update automatically, using delta patches to be bandwidth efficient.
Due to the container properties, this should be a safe operation, so that jumping from one version of ROOT to the next can be done even if it upgrades to an entirely different compiler toolchain.

### Nightlies & Tracks
Nightly builds are produced and accessible with
`sudo snap install root-framework --edge`.

If you are already using the snap and want to swap to the edge branch, use
`sudo snap refresh root-framework --channel=edge`.

A track in Snapcraft terms is a separate branch of a project that can be downloaded instead of the default release.
The default release is called "latest", and its stable channel will generally follow the newest stable ROOT release.
As a result, users will automatically update to newer branches of ROOT.
However, in some scenarios people may like to use an older release, and tracks could be used to provide this in the future.

If there is a demand to produce these tracks, please provide some feedback and it can be looked into!
The following example syntax would be usable if/when tracks are declared.

```
sudo snap install root-framework --channel=v6-22/stable
```

### Multiple Installations of the ROOT Snap
[https://snapcraft.io/docs/parallel-installs](https://snapcraft.io/docs/parallel-installs) 

[https://snapcraft.io/docs/commands-and-aliases](https://snapcraft.io/docs/commands-and-aliases)

This feature is still experimental, but its possible to have both the ROOT stable snap and the ROOT nightly snap alongside each other.
However to make proper use of this functionality, it helps to understand Snap aliases.

The `root` command itself is an alias, because the snap package is called `root-framework`. When installed from the Snap Store, an alias is created automatically between `root` and `root-framework`.
For the other binaries such as `hadd`, the original names are namespaced, so `hadd` in the namespaced form is `root-framework.hadd`.
When you install extra instances of a snap, you must decide which aliases you wish to use manually. 


```
sudo snap set system experimental.parallel-instances=true
sudo snap install root-framework
sudo snap install root-framework_nightly --edge --unaliased
```

While `root` will point to the stable version, you can run `sudo snap prefer root-framework_nightly` so that the next invocation of `root` will be from the nightly branch.
You can also alias individual commands, or simply use the unaliased binary names, such as `root-framework_nightly.root`.

It is preferable to use Snap aliases rather than Bash aliases, a snap alias will affect all system users.

The additional installations of snaps will all have their own unique `$HOME` values, so can have differing `rootlogin` files and different history for each snap instance.

### Windows Subsystem for Linux 2.
[https://discourse.ubuntu.com/t/using-snapd-in-wsl2/12113](https://discourse.ubuntu.com/t/using-snapd-in-wsl2/12113)

Officially, running snaps on WSL2 is unsupported.
This is because WSL2 has a custom init system rather than systemd.
Unofficially, it is possible to get it working reasonably well anyway, but this is not directly supported.

Having personally tried it, it is possible to get JupyROOT in the snap running in a web browser on Windows, and for some people, the snap on WSL2 might make sense.

Other virtual machine platforms, such as Virtualbox should be able to install Snaps without issues.


### CUDA & OpenGL
At the moment, CUDA is not supported, but this may change in the future.

OpenGL generally works fine in a Snap environment for most GPUs.
A notable exception is amdgpu-pro drivers, and NVidia proprietary drivers on Debian and Debian derivatives (but excluding Ubuntu and Ubuntu derivatives).
These issues can be resolved pending upstream work in the future.

### Performance
There should not be any observable performance difference from the snap version of ROOT and any other version, a macro that takes an hour to run outside the snap should take an hour to run inside it.

### Creating Independent Executables
Creating independent executables is not supported in the snap environment.
The ABI is not stable, the compiler toolchain will be foreign to most systems, and the automatic updates would ruin this regularly even if you managed to hack it into working.
If this is essential to your workflow, you are likely better suited with an alternative package.

### Packages and executables outside the Snap container
Executing binaries from outside the snap environment from inside the environment itself will not work due to the sandboxing, and the image itself is by default inflexible, so that adding more Python modules for example involves either rebuilding the snap or using debug modes.
If there are binaries and packages that might make sense inside the container, please give feedback and they can be considered to be default!

If you want to change the CMake parameters, add some extra packages or some extra Python modules, you might be pleasantly surprised with the Snapcraft build system and there are some instructions on my personal Github page on how to do it. [https://github.com/MrCarroll/root-snap](https://github.com/MrCarroll/root-snap)

### IDEs
Because the snap purposefully keeps its files away from the normal system, IDEs do not work with the ROOT snap.
Consider using `root --notebook` to access JupyROOT for an IDE-like experience.
If this is insufficient, you are likely better suited with an alternative package.

### Alternate CPU architectures
Currently the ROOT snap is only built for AMD64/x86_64.

Snaps can work on other architectures soon and if there is a demand for alternative architectures such as ARM64, please give feedback and it can be considered.
In the meantime, the Snapcraft build system should generally work on ARM64 and various other architectures, so you might be able to make your own.

## Summary
In summary, I hope there are a lot of users for whom a Snap package of ROOT might make sense. Prior to uploading this blog post, there are already several thousand downloads, going well above my personal expectations, and the issue tracker has not crashed yet so I amm hopeful that it is being successful in helping get ROOT into people's hands. 

Please feel free to give your feedback on this package. Whilst not everything will be actionable, knowing what issues people have can help guide future improvements. In particular, feedback about additional python modules, issues with the sandboxing, and performance regressions are appreciated, though any feedback at all would be very much appreciated. You can get in touch with me on the ROOT forums as @james-carroll; or feel free to report issues at [https://github.com/MrCarroll/root-snap](https://github.com/MrCarroll/root-snap), where you can also find information on building your own custom ROOT snap.

Special thanks go to Axel Naumann for being responsive and helping to reduce the bus factor of this package; thanks to my good friend Theodore Zorbas for giving me the inspiration to tackle this project and being my guinea pig for testing it, thanks to the ROOT community for already investing significant time in making ROOT easier to package, thanks to Canonical for the Snapcraft tooling, hosting, and build servers, and thanks to GitHub for their hosting and build servers too! Between Canonical and GitHub this entire package is built and distributed free of cost.
