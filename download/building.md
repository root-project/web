---
title: Building ROOT
layout: single
sidebar:
  nav: "download"
toc: true
toc_sticky: true
---

## Supported platforms for building ROOT

- **freebsd7** for FreeBSD 7.x with gcc >= 4.8
- **linux** for i386 Linux with gcc >= 4.8
- **linuxx8664gcc** for x86-64 Linux with gcc >= 4.8
- **macosx** for MacOS X >= 10.8 with clang
- **openbsd** for OpenBSD >= 5.x with gcc >= 4.8

The compiler needs to support -std=c++11 to be able to build ROOT version 6.<br>
See also → [Supported platforms]({{'/download/building_root/supported_platforms' | relative_url}}).

## Prerequisites for building ROOT

Depending on the used platform, some prerequisites must be met.<br>
See → [Build Prerequisites]({{'/download/building_root/build_prerequisites' | relative_url}}).

## Building ROOT with CMake

ROOT uses the CMake cross-platform build-generator tool as a primary build system.<br>
See → [Building ROOT with CMake]({{'/download/building_root' | relative_url}}).
