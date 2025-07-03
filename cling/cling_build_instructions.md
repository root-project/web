---
title: Cling Build Instructions
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

## Community support

You can get cling 1.2 from conda-feedstock and there is a user providing an  [external PPA](https://launchpad.net/~ppa-verse/+archive/ubuntu/cling) for debian.

## Building from source

### Build script

You can download and run this <a href="https://raw.github.com/Axel-Naumann/cling-all-in-one/master/clone.sh">build script</a>.

### Manual build

Alternatively, you can build manually.
Start by checking out llvm, clang and cling:

{% highlight C++ %}
git clone -b cling-llvm18 https://github.com/root-project/llvm-project.git src
git clone https://github.com/root-project/cling.git
{% endhighlight %}

Then use CMake to configure &amp; build cling:

{% highlight shell %}
mkdir build
cd build
cmake -G Ninja -DCMAKE_BUILD_TYPE=Release -DLLVM_BUILD_TOOLS=Off -DLLVM_EXTERNAL_PROJECTS=cling -DLLVM_EXTERNAL_CLING_SOURCE_DIR=../cling -DLLVM_ENABLE_PROJECTS=clang -DLLVM_TARGETS_TO_BUILD="host;NVPTX" ../src/llvm
cmake --build .
cmake --build . --target install
{% endhighlight %}

See also README [on the repository](https://github.com/root-project/root/blob/master/interpreter/cling/README.md).
