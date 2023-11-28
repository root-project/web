---
layout: single
title: Reporting Security Issues
sidebar:
  nav: "about"
---

If you would like to report a security issue, please consider giving us a "reasonable" warning time by contacting us privately.
If we fail to respond, you are very welcome to publish the issue you have found.

## Reporting

Please report security issues to rootdev@cern.ch

## Known security issues

### 2023-11-26: Open port for control of web GUI allows read and write access to file system.

Affected releases: v6.30.00 v6.28.08 v6.28.06 v6.28.04 v6.28.02 v6.28.00 v6.26.10 v6.26.08 v6.26.06 v6.26.04 v6.26.02 v6.26.00.

Introduced by commit [466fbd63a5d8486cd9f566bec8f70298161693c9](https://github.com/root-project/root/commit/466fbd63a5d8486cd9f566bec8f70298161693c9). For earlier versions, ROOT needed manual configuration to enable this.

Vulnerability: remote attackers can connect to a port, by default in the range 8800..9800, opened by ROOT's WebGui subsystem, such as `TBrowser`, and control the process. As such, only interactive usage is affected. Any action that the process can perform can in principle be performed by the attacker, such as reading or modifying (including deleting) files.

Fixed by commit:
  - master: [5937613cbf7f167d826152adb567ae0eb97ff21a](https://github.com/root-project/root/commit/5937613cbf7f167d826152adb567ae0eb97ff21a)
  - v6-30-00-patches: [4a9f1561238e15c73ca5ebfa31baa80cd4ba056f](https://github.com/root-project/root/commit/4a9f1561238e15c73ca5ebfa31baa80cd4ba056f)
  - v6-28-00-patches: [492215d16019e8e0002f2c275814ed451a7ff126](https://github.com/root-project/root/commit/492215d16019e8e0002f2c275814ed451a7ff126)
  - v6-26-00-patches: [a40379c5b48af3d1f049cb8bd394cd5c99fed9c0](https://github.com/root-project/root/commit/a40379c5b48af3d1f049cb8bd394cd5c99fed9c0)
