---
title: "Recent Common Vulnerabilities: does ROOT need to be updated?"
layout: archive
author: Danilo Piparo
---

Let’s start with ROOT’s official statement - below you can find more [explanations](#explanations).

## ROOT's official statement
Two vulnerabilities, [CVE-2026-24811](https://nvd.nist.gov/vuln/detail/CVE-2026-24811) and [CVE-2026-24812](https://nvd.nist.gov/vuln/detail/CVE-2026-24812), have been identified in the zlib code distributed with the ROOT framework. Under certain circumstances, a maliciously crafted `.root` file or compressed data packet can be used to exploit these two bugs during the decompression of data in the files `inffast.c` (pointer arithmetic error) and `inftrees.c` (buffer overflow), respectively, in the local zlib library. As a consequence this might lead to a buffer overflow, and, subsequently, to obtaining service user privileges (but not root privileges). A proof-of-concept, however, is still pending. Also, for successful exploitation, ROOT versions up to and including 6.36.00-rc1 must have been compiled with explicitly specifying (i.e. opting-in) the usage of the "built-in" zlib. When using external zlib libraries, these vulnerabilities cannot be exploited. Users of the ROOT package are advised to upgrade to the officially supported versions 6.32.22, 6.30.10, 6.28/14, or 6.26/16, or any release of the 6.36 or 6.38 series (all ROOT releases [here](https://root.cern/install/all_releases/)).

## More explanations <a name="explanations"></a>

### What happened?
Two vulnerabilities, [CVE-2026-24811](https://nvd.nist.gov/vuln/detail/CVE-2026-24811) and [CVE-2026-24812](https://nvd.nist.gov/vuln/detail/CVE-2026-24812), have been identified in the zlib source code distributed with ROOT.

### What does that mean for me?
*No proof-of-concept exploit has been made publicly available so far.*

However, under certain circumstances, a maliciously crafted ROOT file or compressed data packet could be used to exploit these two bugs during the decompression of data generating a so-called [buffer overflow](https://en.wikipedia.org/wiki/Buffer_overflow) or some pointer arithmetic error.
As a consequence this might potentially lead to a buffer overflow, and, subsequently, to obtaining service user privileges (but not administrator privileges).

### Is my ROOT release affected?
*Most users are not affected.*

You are only affected if you are using a release older than [6.36.00](https://root.cern/releases/release-63600/) and you configured it to use the built-in zlib.
In other words, release [6.36.00](https://root.cern/releases/release-63600/) and newer are not affected. Releases older than [6.36.00](https://root.cern/releases/release-63600/) compiled with the `builtin-zlib` option set to `OFF` (the default) are also not affected. It is worth noting that HEP experiments typically have control of every single package of their software stacks and typically do not rely on ROOT's builtins’ code or packages.

### How can I check if I am affected by the problem?
*That is very simple, just one command.*

If you are using a release older than [6.36.00](https://root.cern/releases/release-63600/), just type
```bash
root-config --features|grep builtin_zlib
```
If no output is printed, the build is not affected by the problem.

### What if I need to use an active but older release series?
*Also in this case, there are solutions for you.*

If ROOT is not configured with the built-in zlib (the `builtin-zlib` configure option set to `OFF`) any release can be safely used: the vulnerabilities are about ROOT’s built-in zlib.
If you are using one of the four actively supported release series, with builtin-zlib set to ON, we recommend upgrading to the latest patch release of your branch:

 - [6.32.22](https://root.cern/releases/release-63222/)
 - [6.30.10](https://root.cern/releases/release-63010/)
 - [6.28/14](https://root.cern/releases/release-62814/)
 - [6.26/18](https://root.cern/releases/release-62618/)

To know more about actively supported releases, see the [Release and Support Plan](https://root.cern/install/all_releases/).

Best,
    Danilo for the ROOT Project


