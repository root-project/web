---
title: Install ROOT
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---


We are developing ROOT according to the principle of _release early and release
often_. However, since a very large portion of the user base requires a stable
product we generally provide at least **three versions for download**:
- _production_
- _old_
- _development_


> **ROOT Installation Guide**
> 
> For information on installing ROOT after you have downloaded it, refer to the [ROOT Installation Guide]({{ '/resources/building_root' | relative_url }}).

## Downloading the latest ROOT production release

The _production_ release is a version we feel comfortable with to exposing to a large audience for serious work.
We may issue patch releases of _production_ versions with bug fixes. We release about two
_production_ versions per year. The _old_ version is the previous _production_ version that
people might need for some time before switching to the new version.

The following latest _production_ and _old_ version are available for download:

{% include releases_list state="pro" label="PRO" single_column="yes" %}
{% include releases_list state="old" label="OLD" single_column="yes" %}

**[More ...]({{'/download/all_releases' | relative_url}})**

### Building ROOT from GitHub sources

Here is a brief summary of how to build ROOT.<br>
For detailed information, → see [Building ROOT]({{ '/resources/building_root' | relative_url }}).

- Clone the repository.
{% highlight C++ %}
   $ git clone https://github.com/root-project/root.git
{% endhighlight %}

- Make a directory for building.
{% highlight C++ %}
   $ mkdir build
   $ cd build
{% endhighlight %}

- Run cmake and make.
{% highlight C++ %}
   $ cmake ../root
   $ make -j8
{% endhighlight %}

.Setup and run ROOT.
{% highlight C++ %}
   $ source bin/thisroot.sh
   $ root
{% endhighlight %}

### Using binaries
After unpacking/installing the binaries and before using ROOT, use the following script distributed with ROOT:

{% highlight C++ %}
   source <pathname>/root/bin/thisroot.sh
{% endhighlight %}

`<pathname>` is the location where you unpacked the ROOT distribution.<br>
Add these lines to your `.profile` or `.login` files.<br>
There are versions for `[t]csh` and `fish`, too.


## Development release
Use this to get access to the latest and greatest, but as a side effect there might be some
instabilities. However, by trying out the _development_ version you can help us converge
much more quickly to a stable version that can then become the new _production_ version.

The _development_ version can be build from GitHub sources.

## Release candidate
A release candidate is a preview of the next _production_ release. It allows users to
make their code ready for the new _production_ release, and to provide early feedback.

## Nightlies
You can [download nightly snapshots of ROOT]({{ '/download/nightlies' | relative_url }}). That is useful
to check whether a bug fix actually fixes an issue you reported, or to see the newest
feature you heard about. It helps us _tremendously_ to get feedback from you on nightlies: please try them out and report back to us!

## Docker (Experimental)
We also provide ROOT in Docker containers. For more information, see → [Docker Hub](https://hub.docker.com/r/rootproject/root-ubuntu16/).


