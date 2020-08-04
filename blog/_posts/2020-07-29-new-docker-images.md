---
title: "ROOT Docker images reloaded"
layout: archive
author: Enrico Guiraud
---

Hello,
Enrico here with an update on the [ROOT Docker images](https://hub.docker.com/r/rootproject/root)!

Since the ROOT team [announced the release of ROOT Docker images]({{ 'blog/root-docker-container-alpha-version/' | relative_url }}), in 2017,
we have received overwhelmingly positive feedback, the [community has contributed Dockerfiles](https://github.com/root-project/root-docker/graphs/contributors) for more platforms such as Centos7 and Arch Linux, and the images have been downloaded thousands of times, with the now fairly dated `rootproject/root-ubuntu16` image towering over other available options at over 100k downloads. ROOT Docker images are definitely not in the alpha phase anymore, and are now listed among other installation options on our [brand new installation page]({{ 'install' | relative_url }}).

As a consequence, we are renewing our effort in supporting up-to-date, ready-to-deploy ROOT Docker images.

To this end, we are making a few simplifying changes: firstly, starting today, [`rootproject/root`](https://hub.docker.com/r/rootproject/root), by default, will correspond to an image based on Ubuntu 20.04 and not Fedora as it was until now. We are aware this might break some CI workflows, but we believe this one-time breaking change is necessary as the Ubuntu package is guaranteed to always be available on the same day as each ROOT release, because the ROOT team themselves produces it.

The other major change is that we are switching from a "many images, many tags" model to a single ROOT Docker image, [`rootproject/root`](https://hub.docker.com/r/rootproject/root), with tags for several platforms and ROOT versions. This follows a scheme similar to [Python](https://hub.docker.com/_/python), [MySQL](https://hub.docker.com/_/mysql) and other popular [Docker official images](https://docs.docker.com/docker-hub/official_images), and it lets us flexibly add tags for more platform/ROOT version combinations as we go along. Another advantage is that users have only [one README](https://hub.docker.com/r/rootproject/root) to check out to see all available tags.
Note that this means that all images other than [`rootproject/root`](https://hub.docker.com/r/rootproject/root) are deprecated. We will not remove existing images, but, if possible, users should switch away from other images (such as the immensely popular `rootproject/root-ubuntu16`) and use a recent [`rootproject/root`](https://hub.docker.com/r/rootproject/root) tag.

A big thanks to everyone who contributed to [root-docker](https://github.com/root-project/root-docker), with code or by participating in related discussions.

As usual, we are looking forward to hear your feedback! You find us [on the forum](https://root-forum.cern.ch).

### Update (30/07/2020):

Thanks to our friendly neighborhood CVMFS developers, the latest ROOT Docker images are now also available as "unpacked" singularity containers. This means that on machines where CVMFS is present (e.g. on LXPLUS) you can start a ROOT singularity container with

```
singularity exec /cvmfs/unpacked.cern.ch/registry.hub.docker.com/rootproject/root:6.22.00-ubuntu20.04 root
```

More information on container images on CVMFS can be found [at this link](https://cvmfs.readthedocs.io/en/latest/cpt-containers.html#using-unpacked-cern-ch).
