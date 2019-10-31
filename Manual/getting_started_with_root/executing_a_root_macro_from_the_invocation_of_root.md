---
title: Executing a ROOT macro from the invocation of ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can pass a macro to ROOT in its invocation.

### Example

```
   $ root -l -b 'myCode.C("some String", 12)'
```

The exact kind of quoting depends on the used shell. This example works for bash-like shells.