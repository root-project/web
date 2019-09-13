---
title: Downloading ROOT
layout: single
---


We are developing ROOT according to the principle of Release early and release
often. However, since a very large portion of the user base requires a stable
product we generally keep at least three versions of the system available for
download. The development, production and old versions.

### The development version
evolves quickly, with monthly releases. Use this to get access to the latest and
greatest, but as a side effect there might be some instabilities. However, by
trying out the development version you can help us converge much more quickly to
a stable version that can then become the new production version. If you are a n
ew user we would advice you to try directly the development version.

### The RC version
is a Release Candidate of the next production release. We typically have two RC's
(one month and two weeks) prior to a production release. The idea of the RC is to
only contain bug fixes and to provide a stable test platform for users to ready
their code for the new production release.

### The production version
is a version we feel comfortable with to exposing to a large audience for serious
work. We may issue patch releases of production versions with bug fixes. The
change rate of this version is much lower than for the development version.
In the order of 6 months. The old version is the previous production version
that people might need for some time before switching to the new version.

### For each of the three active versions
we provide the full source and pre-compiled binaries for most of the supported
platforms. After downloading and unpacking (usually it is enough to double click
on the file you downloaded "tar file" or "dmg file" ) please read the included
README/README file on how to set the necessary environment variables.

Basically it is enough to use a special script distributed with ROOT:
  - For the sh shell family do: . `<pathname>/root/bin/thisroot.sh`
  - For the csh shell family do: `source <pathname>/root/bin/thisroot.csh`
where `<pathname>` is the location where you unpacked the ROOT distribution.
Typically add these lines to your `.profile` or `.login` files.

### Docker (Experimental)
We also provide ROOT in Docker containers, for more information see Docker Hub.

### The following recent versions are available for download: