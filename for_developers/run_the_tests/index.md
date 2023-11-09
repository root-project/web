---
title: Running the ROOT battery of tests
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

Running all ROOT tests on at least a platform before sending a PR or before pushing anything to the ROOT repository is **mandatory**.
The ROOT continuous integration infrastructure allows to automatically check the PR also on a battery of platform, for example including macos and linux boxes.
In order to be able to run all tests, the simple steps below need to be followed

## Prepare Your Development Area for Building and Testing ROOT

Create a directory to store the local repositories. Within the directory, clone both the root project as well as the [roottest](https://github.com/root-project/roottest) test suite.
```
mkdir RootDevelopment
cd RootDevelopment
git clone https://github.com/root-project/root
git clone https://github.com/root-project/roottest
```
Create a build folder, run the cmake command to configure and build root and rootest:
```
mkdir build
cd build
echo Note the cmake options
cmake -DCMAKE_BUILD_TYPE=Debug -Dtesting=ON -Droottest=ON ../root
cmake --build . -j8
```

## Inspect and run the tests
Tests can then be executed using the ctest command in the build directory:

```
ctest -N                (list all tests)
ctest -j N              (Run all tests on N cores)
```

Run the following command to access all available options:
```
ctest --help             (list all available options)
```

To learn more about testing, and adding tests, visit the [roottest repository](https://github.com/root-project/roottest#roottest).
