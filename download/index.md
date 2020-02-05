---
title: Downloading and installing ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "download"
---


## Download a package

### Production release

The _production_ release is a version we feel comfortable with to exposing to a large audience for serious work.
We may issue patch releases of _production_ versions with bug fixes. We release about two
_production_ versions per year. The _old_ version is the previous _production_ version that
people might need for some time before switching to the new version.

The following latest _production_ and _old_ version are available for download:

{% include releases_list state="pro" label="PRO" single_column="yes" %}
{% include releases_list state="old" label="OLD" single_column="yes" %}

See → [All releases]({{'/download/all_releases' | relative_url}}).

### Development release
Use this to get access to the latest and greatest, but as a side effect there might be some
instabilities. However, by trying out the _development_ version you can help us converge
much more quickly to a stable version that can then become the new _production_ version.

The _development_ version can be build from GitHub sources.<br>
See → [ROOT sources]({{'/download/building_root/get_root_sources' | relative_url}}).

### Release candidate
A release candidate is a preview of the next _production_ release. It allows users to
make their code ready for the new _production_ release, and to provide early feedback.

### Nightlies
You can download nightly snapshots of ROOT. That is useful to check whether a bug fix actually fixes an issue you reported, or to see the newest
feature you heard about. It helps us _tremendously_ to get feedback from you on nightlies: please try them out and report back to us!<br>
See → [Nightlies]({{ '/download/nightlies' | relative_url }}).

### Docker (experimental)
We also provide ROOT in Docker containers.<br>
See → [Docker Hub](https://hub.docker.com/r/rootproject/root-ubuntu16/).

## Building ROOT

**Building ROOT with CMake**

ROOT uses the CMake cross-platform build-generator tool as a primary build system.<br>
See → [Building ROOT with CMake]({{'/download/building_root' | relative_url}}).

**Building ROOT with make (old method)**

The classic build with `configure/make` is is still available but it will not be evolving with the new features of ROOT.<br>
See → [Building ROOT with make]({{'/download/building_root/build_root_old_method' | relative_url}}).


