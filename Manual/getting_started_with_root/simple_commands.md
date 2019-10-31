---
title: Simple commands
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can use ROOT to execute simple commands on the ROOT prompt.
Every command typed at the ROOT prompt is stored in the `.root_hist` file in your home directory.

## Examples

### Simple operations:
```
   root[0] 21+21
   (int) 42
```
```
   root[1] sqrt(42)
   6.4807407
```
### Relational operators:
```
   root [2] 42 > 98
   false
```

Calling a function from a ROOT class like [TMath](https://root.cern/doc/master/namespaceTMath.html).
```
   root [3] Math::Pi()
   3.1415927
```