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

{% highlight C++ %}
git clone -b cling-llvm13 https://github.com/root-project/llvm-project.git src
git clone https://github.com/root-project/cling.git
{% endhighlight %}

Then use CMake to configure &amp; build cling:

{% highlight shell %}
mkdir build
cd build
cmake -G Ninja -DCMAKE_BUILD_TYPE=Release -DLLVM_BUILD_TOOLS=Off -DLLVM_EXTERNAL_PROJECTS=cling -DLLVM_EXTERNAL_CLING_SOURCE_DIR=../cling -DLLVM_ENABLE_PROJECTS=clang -DLLVM_TARGETS_TO_BUILD="host;NVPTX" src/llvm
cmake --build .
cmake --build . --target install
{% endhighlight %}

### cling patches?

Cling needs a couple of patches on top of clang (but can work with an original build of llvm).
These are the commits that above build instructions correspond to - which is mostly interesting
to package maintainers:

<table>
   <caption>Revisions / tags of llvm and clang to build a cling release.</caption>
   <tr>
      <th>cling release</th>
      <th>upstream llvm and clang</th>
      <th>cling-patches on clang</th>
   </tr>
   <tr>
      <td>0.5</td>
      <td>5.0 release series</td>
      <td>
      <a href="https://root.cern/gitweb/?p=clang.git;a=commit;h=287240897208a004509a2be4525aa83acbb2ba5f">287240</a>..
      <a href="https://root.cern/gitweb/?p=clang.git;a=commit;h=27d2d5b247e83f3ac5d6e9f36d25d168a6afc97a">27d2d5</a>
      (aka <a href="https://root.cern/gitweb/?p=clang.git;a=shortlog;h=refs/tags/cling-patches-rrelease_50">cling-patches-rrelease_50</a>)
      </td>
      <td>0.7</td>
      <td>9.0 release series</td>
      <td>
      </td>
   </tr>
</table>
