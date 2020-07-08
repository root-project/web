---
title: Cling
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

## What is Cling

Cling is an interactive C++ interpreter, built on the top of LLVM and Clang libraries.
Its advantages over the standard interpreters are that it has command line prompt and uses
just-in-time (JIT) compiler for compilation. Many of the developers (e.g. Mono in their
project called [CSharpRepl](https://www.mono-project.com/CsharpRepl)) of such
kind of software applications name them interactive compilers.

One of Cling's main goals is to provide contemporary, high-performance alternative of the
current C++ interpreter in the ROOT project - CINT. The backward-compatibility with CINT is
major priority during the development.

## Download

To get the sources and build it yourself, see [here]({{cling_build_instructions | relative_url_}}).
To get a binary snapshot, see <a href="https://root.cern/download/cling//">here</a>.

## Command Line

Cling has its own command line, which looks like any other Unix shell. The emacs-like
command line editor is what we call interactive command line or interactive shell.

Once we start Cling it automatically includes several header files and its own runtime
universe. Thus it creates the minimal environment for the user to start.

### Grammar

Cling is capable to parse everything that Clang can do. In addition, Cling can parse some
interpreter-specific C++ extensions.

### Metaprocessor

Cling Metaprocessor provides convenient and easy to use interface for changing the
interpreter's internal state or for executing handy commands. Cling provides the following
metaprocessor commands:

**syntax:** _.(command), where command is:_

  * `.x filename.cxx` - loads filename and calls void filename() if defined
  * `.L library | filename.cxx` - loads library or filename.cxx
  * `.printAST` - shows the abstract syntax tree after each processed entity
  * `.I path` - adds an include path

## Resources

  * [Forum](https://root-forum.cern.ch/)
  * Contact the developers at [cling-dev@cern.ch](mailto:cling-dev@cern.ch)
  * LLVM Developers' Meeting, _"Creating cling, an interactive interpreter interface for clang"_,
    Axel Naumann, Philippe Canal, Paul Russo, Vassil Vassilev, 04.11.2010, San Jose, CA, United
    States ([slides](https://llvm.org/devmtg/2010-11/Naumann-Cling.pdf))
  * Google Tech Talk ([slides](https://github.com/root-project/cling/blob/master/www/docs/talks/AxelNaumann-cling-GoogleTech.pdf),
    [video](https://www.youtube.com/watch?v=f9Xfh8pv3Fs))
  * more [clang-centric presentations](https://github.com/root-mirror/cling/tree/master/www/docs/talks)

## Used Technologies

The [Low Level Virtual Machine (LLVM)](https://llvm.org/) is a compiler infrastructure, written
in C++, which is designed for compile-time, link-time, run-time, and "idle-time" optimization
of programs written in arbitrary programming languages. Originally implemented for C/C++,
the language-independent design (and the success) of LLVM has since spawned a wide variety
of front ends, including Objective-C, Fortran, Ada, Haskell, Java bytecode, Python, Ruby,
ActionScript, GLSL, and others.

[Clang](https://clang.llvm.org/) is a compiler front end for the C, C++,
Objective-C and Objective-C++ programming languages. It uses the Low Level Virtual Machine
(LLVM) as its back end, and as such Clang is part of LLVM releases since LLVM 2.6. Its goal
is to offer a replacement to the GNU Compiler Collection (GCC). Development is sponsored by
Apple. Clang is available under a free software licence.

