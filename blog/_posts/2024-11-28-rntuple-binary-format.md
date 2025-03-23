---
title: "First Release of the RNTuple On-Disk Format"
layout: archive
author: Jakob Blomer
---

You may have heard of RNTuple, from
[CHEP'24](https://indico.cern.ch/event/1338689/contributions/6077632/),
[from](https://indico.jlab.org/event/459/contributions/11594/)
[other](https://indico.cern.ch/event/855454/contributions/4596512/)
[talks](https://indico.cern.ch/event/773049/contributions/3474746/), or from
[our previous ROOT blog post](https://root.cern/blog/rntuple-update/).
In case you haven't: RNTuple is ROOT's new I/O system for event data.
Think of it as TTree, but more compact, faster, modern and more robust.
With respect to TTree, we routinely see file size reductions between 10%-50%, multiple times faster read throughput,
and much better write performance and multicore scalability.
RNTuple can fully harness the performance of modern
[NVMe drives](https://en.wikipedia.org/wiki/NVM_Express) and
[object stores](https://en.wikipedia.org/wiki/Object_storage),
and it comes with a modern, safe, and feature rich API.

After [6 years of R&D](https://indico.cern.ch/event/764726/), RNTuple reached an important milestone:
we released the [first official version of the on-disk binary format](https://github.com/root-project/root/blob/v6-34-00-patches/tree/ntuple/v7/doc/BinaryFormatSpecification.md)!
This first version is part of the ROOT 6.34 release.
When you now open a ROOT file and you do `.ls`, objects shown as `ROOT::RNTuple` are stored in this new on-disk layout.
What does it mean for you, in a nutshell?
**It means that all future ROOT versions will be able to read back such objects.**

<center>
    <img
    src="{{'/assets/images/rntuple_blog_ls.png' | relative_url}}"
    alt="Listing of an RNTuple in a ROOT file"
    style="width: 40%" width="384" height="86" />
</center>

That sounds simple and obvious, yet it has significant implications behind the scenes.
The on-disk format, to recap, defines the layout of the bits on disk that hold a certain data set.
If we want to store, say, a list of particles described as

```cpp
class Particle {
   float pt;
   int charge;
};
```

the on-disk format decides on things like [endianness](https://en.wikipedia.org/wiki/Endianness) of the numbers,
if we store all particles consecutively or we first store all `pt` and then all `charge` values [[1]](#footnote1),
how we remember the in-memory layout of Particle, the compression block size, where we put data checksums, and so forth.
Once the format is fixed and applications write (large amounts of) data,
there are severe restrictions on what can still be practically changed.

Why then, you may ask, did we change at all from the TTree format?
The reason is that some of RNTuple's biggest advantages are intimately linked to the on-disk representation.
Perhaps most importantly: the savings in data volume.
For instance, for both CMS NanoAODs and ATLAS PHYSLITE files,
compared to TTree we can store the same content in substantially fewer bytes:

<center>
    <img
    src="{{'/assets/images/rntuple_blog_physlite.png' | relative_url}}"
    alt="RNTuple storage efficiency for an ATLAS PHYSLITE file"
    style="width: 40%" width="740" height="534" />
    <img
    src="{{'/assets/images/rntuple_blog_agc.png' | relative_url}}"
    alt="RNTuple storage efficiency for the Analysis Grand Challenge data set (CMS NanoAOD format)"
    style="width: 40%" width="618" height="597" />
</center>

This, and other reasons related to the robustness and the use of modern storage systems, convinced us to introduce a new on-disk format after more than 25 years of TTree. With RNTuple, we aim at a new, stable format for the exabytes of data to be expected during the lifetime of upcoming experiments (e.g., the experiments at the HL-LHC, DUNE, and beyond).[[2]](#footnote2)

Obviously, designing for such long time spans requires adding the provisions to adapt to future environments.
For RNTuple, we put mechanisms in place for forward- and backward-compatibility
to enable new software versions to read old data and old software versions to read new data.
For your own data models, you may know such mechanisms under the name "schema evolution".
For the RNTuple format itself, similar techniques are implemented in order to add, for instance,
optional information such as metadata in the future.

Some other key features of the new format are
  - a [formal specification](https://github.com/root-project/root/blob/v6-34-00-patches/tree/ntuple/v7/doc/BinaryFormatSpecification.md),
  allowing third parties to easily write data readers and writers without reverse engineering the code;
  - strict use of 64 bit checksums both on data and metadata, ensuring data integrity;
  - forward looking limits that prepare us, e.g.,
  for storing hundreds of thousands of columns in files of hundreds of terabytes each;
  - preparation for native use of object stores such as S3 or DAOS;
  - support for new types, such as `std::variant`, `std::optional`,
  and the upcoming half precision floating point `std::float16_t`.

Now, you may wonder how to actually read and write RNTuples.
To do so, RNTuple comes with [a new set of APIs](https://root.cern/doc/master/group__tutorial__ntuple.html), too!
Modern, safe, and easy to use correctly (so we hope!).
The API, in contrast to the on-disk format, is still evolving thanks to early adopters' feedback and is not quite ready to leave the experimental stage.

An external API review, _a first for the ROOT team_, conducted by the
[High Energy Physics Center for Computational Excellence](https://www.anl.gov/hep-cce) is still just about to conclude.
Expect to see a first set of production APIs in ROOT 6.36, scheduled for the second quarter of 2025.
Meanwhile, please feel free to try out [the current state](https://root.cern/releases/release-63400/)
and tell us what you think!
The ATLAS, CMS, and LHCb experiments already include initial support for the API,
so you may get your next RNTuple from your experiment.
If you have analysis code in RDataFrame: job done.
RDataFrame transparently processes TTree and RNTuple datasets interchangeably.

To close this post, I'd like to show you the first RNTuple ever written with the official specification.
What you see is the [hex dump](https://en.wikipedia.org/wiki/Hex_dump) of https://root.cern/files/RNTuple.root,
visualized with the [RNTuple viewer](https://codeberg.org/silverweed/rntviewer).
You'd like to know more? Open the file in ROOT 6.34, for instance with the new RBrowser!

<center>
    <img
    src="{{'/assets/images/rntuple_blog_hex.png' | relative_url}}"
    alt="Hex dump of the first RNTuple file"
    style="width: 100%" width="1346" height="1173" />
</center>

<a name="footnote1">[1]</a> ROOT does and has always done the latter.
It is sometimes called columnar storage and it allows, e.g.,
to efficiently plot only `pt` without having to read `charge`.

<a name="footnote2">[2]</a> TTree, of course, will remain available in ROOT!
So you don't need to worry about existing ROOT files.

