---
title: ROOTBinder Checklist
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

ROOTBinder is hosted [in this github repository](https://github.com/cernphsft/rootbinder){:target="_blank"}.
In order to upgrade the container which is launched in [Binder](https://mybinder.org){:target="_blank"}, the
steps to be taken are the following:

## What if something goes wrong

It is possible that something goes wrong and the link to the interactive demo has to be
interrupted. In this case the file https://root.cern.ch/notebooks/rootbinder.html has to be
modified so to redirect to a page which clarifies the current status of the demo,
for example: https://root.cern.ch/rootbinder-unreachable .

## Preparation of the ROOT tarball

* Clone the repository locally and enter the `rootbinder` directory.
* Build the container from the dockerfile: `docker build`.
* Start the docker container: `docker run -t -i NAMEOFTHEIMAGE`
  * The list of images is available with the command `docker images`
* Build the desired version of ROOT calling the build directory "root"
* Make a compressed tarball of root and copy it to https://root.cern.ch/notebooks/rootbinderdata

## Test and preparation of the image in Binder

* Fork the rootbinder repository in your private set
* Build the docker image via the Binder web interface
* Check the notebooks are correctly working
* Repeat the procedure with the main repository