---
title: Using Cling commands to control ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can pass commands directly to ROOT by placing a dot before the command.

Type at the ROOT prompt:
    `.<command>`

The most used commands are:

`.q`
Quit ROOT.

`.?`
Provides a list of all commands.

`.!<OS_command>`
Access the shell of the operating system. For example .!ls or .!pwd.

`.x <file_name>`
Execute a macro.

`.L <file_name>`
Load a macro or library.

`.L <file_name>+`
Compile a macro.

`.help`
Provides a list of all commands.

`.class`
List the available ROOT classes.