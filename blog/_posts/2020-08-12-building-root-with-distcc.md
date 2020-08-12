---
title: "Building ROOT fast - distributed compilation with distcc"
layout: archive
author: Stefan Wunsch
---

Hello there, here is Stefan with a short guide on how you can distribute ROOT compilation with `distcc`!

ROOT is a huge project with more than 14 thousand files and above 2.5 million lines of code (counted with [`cloc /path/to/root --exclude-dir llvm`](https://github.com/AlDanial/cloc)). Consequently, a full rebuild from scratch takes a while! To give some numbers, here is what happens on my laptop:

```
Building ROOT on 4 logical cores: 86 minutes
```

How to make this faster? Besides buying a more powerful computer, another answer from the software community is [`distcc`](https://distcc.github.io/). If you have one or more spare computers reachable over the network, `distcc` allows to distribute compilation of C, C++ and objective C(++) code over multiple machines. It is simple to set up and has been recently integrated into the ROOT build system!

## Setup

But first we have to make another machine accessible for the distributed compilation, called a *volunteer* in the `distcc` terminology. Note that `distcc` distributes only the compilation step, not the preprocessing (unless you use the [`pump` mode](https://distcc.github.io/faq.html)) and linking. This means that the volunteer does not need any dependencies installed nor the machines have to share a filesystem, making the setup simple!

```bash
# Set up distcc on a second machine (a volunteer) using gcc as compiler
# Take care that gcc has the same version than on the main system!
sudo apt install gcc distcc # Or use your preferred package manager!

# Run the distcc(d) daemon!
distccd --daemon --allow-private
```

Now, let's set up your environment on the main system to detect the volunteer!

```bash
# Tell distcc where to find other servers and how many cores from the volunteers
# should be used (for me it's the ip 192.168.1.225 and 12 cores)
# Note that distcc communicates by default via the port 3632, which may be blocked
# by your firewall!
export DISTCC_HOSTS="localhost/4 192.168.1.225/12"

# Clone ROOT (assuming all dependencies are installed)
git clone https://github.com/root-project/root.git
cd root/

# Configure ROOT to use distcc
# You can also use distcc together with `-Dccache=ON` to enable caching, which is
# checked before the compilations are distributed.
cmake . -DCMAKE_CXX_COMPILER="g++" -DCMAKE_C_COMPILER="gcc" -Ddistcc="ON"

# Run the compilation distributed on 4+12 cores!
make -j16
```

## Docker

Most likely you want to make use of an existing system as a (part time) volunteer, which means that installing exactly the same compiler than on the main system can be non trivial. Luckily, [Docker](https://www.docker.com/) makes deploying services such as `distccd` simple and you can even use a Windows machine as volunteer! Just create the following [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) and follow the instructions below.

```dockerfile
# Most simple is using the same base image than your main system
FROM ubuntu:focal

# Install gcc, distcc and htop
# distccd will run by default with the distcc user
RUN apt update -y && apt install -y gcc distcc htop && useradd distcc

# Run distccd and open htop
ENTRYPOINT distccd --allow-private --daemon && htop
```

```bash
# Build the image with the dockerfile above (using Ubuntu 20.04 as the base image)
docker build -t distcc .

# On the volunteer, run the container with distccd and show htop
docker run --rm -ti -p 3632:3632 distcc
```

## Monitoring

`distcc` typically comes with the monitoring application `distccmon`, either text based (`distccmon-text`) or with a GUI (`distccmon-gnome`). Here is a screenshot of the monitoring during my build process showing the compilation of the inbuilt LLVM:

![distcc monitor]({{ '/assets/images/building_root_with_distcc.png' | relative_url }})

## Is it faster now?

On my setup I get a speedup of 3.2! The compile time goes down from 1 hour and 26 minutes to just 27 minutes.

```
Building ROOT on 4+12 logical cores: 27 minutes
Speedup: 86 / 27 = 3.2 times faster!
```

With this setup, I achieved 80% of the theoretical speed up of 4, which does not take into account that preprocessing and linking happens only on the main system. `distcc`'s [`pump` mode](https://distcc.github.io/faq.html) may improve the scaling even further. Feel free to try and tell us in the [ROOT forum](https://root-forum.cern.ch/)!
