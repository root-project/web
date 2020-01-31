---
title: Supported platforms
layout: single
sidebar:
  nav: "download"
toc: true
toc_sticky: true
---

ROOT can be build on the following combination of CPU's, operating systems and compilers.

## ROOT 6
The compiler needs to support -std=c++11 to be able to build version 6.

- **freebsd7** for FreeBSD 7.x with gcc >= 4.8
- **linux** for i386 Linux with gcc >= 4.8
- **linuxx8664gcc** for x86-64 Linux with gcc >= 4.8
- **macosx** for MacOS X >= 10.8 with clang
- **openbsd** for OpenBSD >= 5.x with gcc >= 4.8

### In preparation
- **linuxx8664icc** for x86-64 Linux with Intel icc >= 15
- **linuxarm** for ARM Linux with gcc >= 4.8
- **linuxarm64** for ARMv8-A (AArch64) Linux with gcc >= 4.8
- **linuxppc64gcc** for PPC 64 Linux with gcc >= 4.8

## ROOT 5

- **aixgcc** for AIX >= 5.x with gcc >= 4.8
- **freebsd7** for FreeBSD 7.x with gcc >= 4.8
- **linux** for i386 Linux with gcc >= 4.8
- **linuxarm** for ARM Linux with gcc >= 4.8
- **linuxarm64** for ARMv8-A (AArch64) Linux with gcc >= 4.8
- **linuxppcgcc** for PPC Linux with gcc >= 4.8
- **linuxppc64gcc** for PPC 64 Linux with gcc >= 4.8
- **linuxx8664gcc** for x86-64 Linux with gcc >= 4.8
- **linuxx8664icc** for x86-64 Linux with Intel icc >= 13
- **linuxx8664k1omicc** for x86-64 Linux for Intel MIC with Intel icc >= 13
- **linuxx32gcc** for x32 Linux ABI with gcc >= 4.8
- **macosx** for MacOS X >= 10.8 with clang
- **macosxicc** for MacOS X >= 10.8 with Intel icc >= 13 (Intel only)
- **macosx64** for MacOS X >= 10.8 with gcc >= 4.8 64 bit mode
- **openbsd** for OpenBSD >= 5.x with gcc >= 4.8
- **win32** for Win32 with Visual Studio >= 2008 / vc >= 9
- **win32gcc** for Win32 with cygwin/gcc with gcc >= 4.8
- **win64gcc** for Win64 with cygwin/gcc with gcc >= 4.8

The words in bold are the architecture names used by the `./configure` script. The
default architecture for a platform is auto-detected by cmake and ./configure, but
alternative architectures can be specified using one of the above architecture names.