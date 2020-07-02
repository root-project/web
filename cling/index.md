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
project called <a href="http://www.mono-project.com/CsharpRepl">CSharpRepl</a>) of such
kind of software applications name them interactive compilers.

One of Cling's main goals is to provide contemporary, high-performance alternative of the
current C++ interpreter in the ROOT project - CINT. The backward-compatibility with CINT is
major priority during the development.

## Download

To get the sources and build it yourself, see <a href="http://root.cern.ch/d/drupal/content/cling-build-instructions">here</a>.
To get a binary snapshot, see <a href="https://root.cern.ch/d/download/cling//">here</a>.

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
interpreter's internal state or for executing handy commands. Cling provides the following metaprocessor commands:

**syntax:** _.(command), where command is:_

<ul>
  <li> .x filename.cxx - loads filename and calls void filename() if defined</li>
  <li> .L library | filename.cxx - loads library or filename.cxx</li>
  <li> .printAST - shows the abstract syntax tree after each processed entity</li>
  <li> .I path - adds an include path</li>
</ul>

## Resources

<ul>
  <li> <a href="http://root.cern.ch/phpBB3/viewforum.php?f=21">Forum</a></li>
  <li> Contact the developers at <a href="mailto:cling-dev@cern.ch">cling-dev@cern.ch</a></li>
  <li> LLVM Developers' Meeting, <i>"Creating cling, an interactive interpreter interface for clang"</i>, Axel Naumann, Philippe Canal, Paul Russo, Vassil Vassilev, 04.11.2010, San Jose, CA, United States - <a href="http://llvm.org/devmtg/2010-11/Naumann-Cling.pdf">Slides</a> | <a href="http://llvm.org/devmtg/2010-11/videos/Naumann_Cling-desktop.mp4">Video</a></li>
  <li> Google Tech Talk (<a href="sites/d35c7d8c.web.cern.ch/files/AxelNaumann-cling-GoogleTech_0.pdf">slides</a> | <a href="http://www.youtube.com/watch?v=f9Xfh8pv3Fs">video</a>)</li>
  <li> more <a href="https://github.com/root-mirror/cling/tree/master/www/docs/talks">clang-centric presentations</a></li>
</ul>

## Used Technologies

The <a href="http://llvm.org/">Low Level Virtual Machine (LLVM)</a> is a compiler infrastructure, written in C++, which is designed for compile-time, link-time, run-time, and "idle-time" optimization of programs written in arbitrary programming languages. Originally implemented for C/C++, the language-independent design (and the success) of LLVM has since spawned a wide variety of front ends, including Objective-C, Fortran, Ada, Haskell, Java bytecode, Python, Ruby, ActionScript, GLSL, and others.

<a href="http://clang.llvm.org/">Clang</a> is a compiler front end for the C, C++,
Objective-C and Objective-C++ programming languages. It uses the Low Level Virtual Machine
(LLVM) as its back end, and as such Clang is part of LLVM releases since LLVM 2.6. Its goal
is to offer a replacement to the GNU Compiler Collection (GCC). Development is sponsored by
Apple. Clang is available under a free software licence.

