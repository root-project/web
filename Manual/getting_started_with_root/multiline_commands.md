---
title: Multi-line commands
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can use ROOT to execute multi-line commands on the ROOT prompt.

1.  Type at the ROOT prompt:
   ` {`
    to begin a multi-line command.

2.  Type one command per line.

3.  Type:
    `}`
    to end the multi-line command.

### Example

```
   root [0] {

   root [1] Int_t j = 0;

   root [2] for (Int_t i = 0; i < 3; i++)

   root [3] {

   root [4] j= j + i;

   root [5] cout << "i = " << i << ", j = " << j << endl;

   root [6] }

   root [7] }

   i = 0, j = 0

   i = 1, j = 1

   i = 2, j = 3
```