---
title: Running the ROOT battery of tests
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "resources"
---

Running all ROOT tests on at least a platform before sending a PR or before pushing anything to the ROOT repository is *mandatory*.
The ROOT continuous integration infrastructure allows to automatically check the PR also on a battery of platform, for example including macos and linux boxes.
In order to be able to run all tests, the simple steps below need to be followed

## Prepare your development area and build ROOT

```
mkdir RootDevelopment
cd RootDevelopment
git clone https://github.com/root-project/root
git clone https://github.com/root-project/roottest
mkdir build
cd build
echo Note the cmake options
cmake -DCMAKE_BUILD_TYPE=Debug -Dtesting=ON -Droottest=ON ../root
```

## Inspect and run the tests
From within the build directory

  - List all tests:  *ctest -N*
  - List all test matching a regex:  *ctest -N -R myregex*
  - Run all tests on N cores: *ctest -j N*