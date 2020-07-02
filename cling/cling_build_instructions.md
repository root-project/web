---
title: Cling Build Instructions
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

## Binaries cling

You can find our nightly binary snapshots <a href="https://root.cern/download/cling/">here</a>

## Building from source

### Build script

You can download and run this <a href="https://raw.github.com/Axel-Naumann/cling-all-in-one/master/clone.sh">build script</a>.

### Manual build

Alternatively, you can build manually.
Start by checking out llvm, clang and cling:

<pre>
<div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">git clone</span> http:<span style="color: #000000; font-weight: bold;">//</span>root.cern.ch<span style="color: #000000; font-weight: bold;">/</span>git<span style="color: #000000; font-weight: bold;">/</span>llvm.git src
<span style="color: #7a0874; font-weight: bold;">cd</span> src
<span style="color: #c20cb9; font-weight: bold;">git checkout</span> cling-patches
<span style="color: #7a0874; font-weight: bold;">cd</span> tools
<span style="color: #c20cb9; font-weight: bold;">git clone</span> http:<span style="color: #000000; font-weight: bold;">//</span>root.cern.ch<span style="color: #000000; font-weight: bold;">/</span>git<span style="color: #000000; font-weight: bold;">/</span>cling.git
<span style="color: #c20cb9; font-weight: bold;">git clone</span> http:<span style="color: #000000; font-weight: bold;">//</span>root.cern.ch<span style="color: #000000; font-weight: bold;">/</span>git<span style="color: #000000; font-weight: bold;">/</span>clang.git
<span style="color: #7a0874; font-weight: bold;">cd</span> clang
<span style="color: #c20cb9; font-weight: bold;">git checkout</span> cling-patches
<span style="color: #7a0874; font-weight: bold;">cd</span> ..<span style="color: #000000; font-weight: bold;">/</span>..</pre></div>
</pre>

Then use CMake to configure &amp; build cling:

<pre>
<div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">mkdir</span> build
<span style="color: #7a0874; font-weight: bold;">cd</span> build
cmake -DCMAKE_INSTALL_PREFIX=<span style="color: #7a0874; font-weight: bold;">[</span>Install Path<span style="color: #7a0874; font-weight: bold;">]</span> -DCMAKE_BUILD_TYPE=<span style="color: #7a0874; font-weight: bold;">[</span>Build configuration, e.g. Release or Debug<span style="color: #7a0874; font-weight: bold;">]</span> ..\src
cmake <span style="color: #660033;">--build</span> .
cmake <span style="color: #660033;">--build</span> . <span style="color: #660033;">--target</span> <span style="color: #c20cb9; font-weight: bold;">install</span></pre></div>
</pre>

### cling-patches?

Cling needs a couple of patches on top of clang (but can work with an original build of llvm). These are the commits that above build instructions correspond to - which is mostly interesting to package maintainers:
<table><caption>Revisions / tags of llvm and clang to build a cling release.</caption>
<tr><th>cling release</th><th>upstream llvm and clang</th><th>cling-patches on clang</th></tr><tr><td>0.5</td><td>5.0 release series</td><td><a href="https://root.cern.ch/gitweb/?p=clang.git;a=commit;h=287240897208a004509a2be4525aa83acbb2ba5f">287240</a>..<a href="https://root.cern.ch/gitweb/?p=clang.git;a=commit;h=27d2d5b247e83f3ac5d6e9f36d25d168a6afc97a">27d2d5</a> (aka <a href="https://root.cern.ch/gitweb/?p=clang.git;a=shortlog;h=refs/tags/cling-patches-rrelease_50">cling-patches-rrelease_50</a>)</td></tr></table>
