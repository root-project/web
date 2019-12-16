---
title: Downloading ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


We are developing ROOT according to the principle of _Release early and release
often_. However, since a very large portion of the user base requires a stable
product we generally keep at least three versions of the system available for
download. The _development_, _production_ and _old_ versions. The _development_ version
can be build from sources.

## Download and install ROOT

### Latest ROOT Releases

The following recent versions are available for download:

{% include releases_list state="pro" label="PRO" single_column="yes" %}
{% include releases_list state="old" label="OLD" single_column="yes" %}

**[More ...]({{'/download/all_releases' | relative_url}})**

### Building from sources

  1. Clone the repository:
```
$ git clone https://github.com/root-project/root.git
```
  2. Make a directory for building
```
$ mkdir build
$ cd build
```
  3. Run cmake and make
```
$ cmake ../root
$ make -j8
```
  4. Setup and run ROOT
```
$ source bin/thisroot.sh
$ root
```

## Production release
This is a version we feel comfortable with to exposing to a large audience for serious work.
We may issue patch releases of _production_ versions with bug fixes. We release about two
_production_ versions per year. The _old_ version is the previous _production_ version that
people might need for some time before switching to the new version.

## Release candidate
A Release Candidate is a preview of the next __production_ release_. It allows users to
make their code ready for the new _production_ release, and to provide early feedback.

## Development release
Use this to get access to the latest and greatest, but as a side effect there might be some
instabilities. However, by trying out the _development_ version you can help us converge
much more quickly to a stable version that can then become the new _production_ version.

## Nightlies
You can [download nightly snapshots of ROOT]({{ '/download/nightlies' | relative_url }}). That's useful
to check whether a bug fix actually fixes an issue you reported, or to see the newest
feature you heard about. It helps us _tremendously_ to get feedback from you on nightlies:
please try them out and report back to us!

## Using binaries
After unpacking / installing the binary, and before using ROOT you should use a special
script distributed with ROOT:<br>
`source <pathname>/root/bin/thisroot.sh` (there are versions for [t]csh and fish, too.)<br>
where `<pathname>` is the location where you unpacked the ROOT distribution.
Typically add these lines to your `.profile` or `.login` files.

## Docker (Experimental)
We also provide ROOT in Docker containers, for more information see [Docker Hub](https://hub.docker.com/r/rootproject/root-ubuntu16/).


