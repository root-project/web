---
title: Creating a ROOT macro
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


The name of the ROOT macro and the file name (without file extension) in which the macro
is saved must match.

1. Create a new file in your preferred text editor.

2. Use the following general structure for the ROOT macro:

   ```
      void MacroName() {
         ...

         your lines of C++ code
         code line ends with ;
         ...
      }
   ```

3.  Save the file ROOT macro, using the macro name as file name: **MacroName**.C
