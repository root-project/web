---
title: Getting ROOT sources
layout: single
sidebar:
  nav: "download"
toc: true
toc_sticky: true
---

To obtain the ROOT sources you can either download a specific version from the
[download page](/node/102) or access the Git repository directly. You can also
[browse the repository](https://github.com/root-project/root) directly.

## Sources from released versions
ROOT's sources can be downloaded for each of the releases and unpacked with
~~~
$ wget https://root.cern.ch/download/root_<version>.source.tar.gz
$ tar -zxf root_<version>.source.tar.gz
~~~

## Direct Git repository access
Unlike many other projects, ROOT's master branch is expected to always work. It is a snapshot of the current development; we appreciate feedback from people using it. The main advantages of using the trunk are:

- you get the most recent features
- you can easily benefit from bug fixes should you find one
- to fix or extend ROOT you can change ROOT's sources yourself and send the changes (git diff) as feedback

The entire ROOT source can be obtained from our public Git repository:

~~~
$ git clone http://github.com/root-project/root.git
~~~

A specific tag can be obtained by using:

~~~
$ cd root
$ git tag -l
$ git checkout -b v6-12-06 v6-12-06
~~~

