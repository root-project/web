---
title: Executing a ROOT macro
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can execute a ROOT macro:

  - at the system prompt,
  - at the ROOT prompt,
  - by loading it to a ROOT session.

1.  To execute a ROOT macro at the **system prompt**, type:

   ```
   root MacroName.C
   ```

2.  To execute a ROOT macro at the **ROOT prompt**, type:

   ```
   .x MacroName.C`
   ```


3.  To load a ROOT macro to a ROOT session, type (at the ROOT prompt):

   ```
   .L MacroName.C
   MacroName()
   ```

> **Note**
>
> You can load multiple ROOT macros, as each ROOT macro has a unique name in the ROOT name space.