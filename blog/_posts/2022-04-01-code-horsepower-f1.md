---
title: "Coding in ROOT with the horsepower of an F1"
layout: archive
author: Fernando Hueso-González
---

# Coding in ROOT with the horsepower of an F1

If you've ever rubbed your eyes trying to decrypt C++ compilation errors from a terminal, tracing those back to the line in the ROOT script you were just typing in your text editor, then googling "CERN ROOT TTree" to fix the signature of that function you just used incorrectly, or even have barely faced the intimidating logs of valgrind output for memory detection, or manually run gdb, you should definitely keep reading.

If on top of that, your office colleague sitting next you has a fancy MATLAB installation, does everything quicker than you, and only needs to hover the mouse on a function and press F1 to access all important help, while you painfully have to google, copy-paste, rebuild project, etc, then this post is also spot on for you.

## Errors are development tools, not silly mistakes

There is a natural tendency to look at compilation or conceptual errors as unwanted accidents or mistakes that only happen rarely, because of my own inexperience, and that surely will not happen next time. As such, we are not explictly prepared nor trained to deal with them systematically. We just tackle them as a contingency and try to solve them quickly with whatever tools at hand. Yet experience tells us that errors (in programming, in mathematics, in jugdment biases) are not an exception, but rather the rule. In fact, most of the time in (robust) development is spent on debugging, either passively by looking at whatever problem pops up, or actively, by creating robust software architecture from its concepation, as well as a suite of tests that prevent these in the future in as many virtual scenarios as possible. It is not uncommon that you can write an analysis software in 5 hours, but then spend 5 days tracking down why the heck it's giving wrong results, or crashing once every 100 times, or even more worryingly, leading you silently to wrong scientific conclusions or errors in other links of your analysis chain, that are far away from its original source and thus hard to trace back.
Yet, despite knowing the forefront impact on your workflow, scientific robustness, many of us physicist are not trained to deal with errors with the proper tools, and we still deploy inefficient and manual ways to hack them "as quickly as possible", hoping (with uncertainty and fear) that they "won't come back". Because we will encounter errors much more frequently than we might think at first place, it makes sense to invest some "initial setup time" to create a robust platform for tackling and fixing these in a systematic way. Rather than reacting with insecurity to these or keeping them in the back of the mind as a passive threat, let's assume they will be an important key player in our development, a learning tool that will appear continuously and is worth optimizing. In the same way that one does no longer use a pen if he wants to send 10000 letters, compared to only 10.

## IDEs to the rescue
IDEs are very powerful tools to detect errors (thanks e.g. to Clang), trace them back to the right point in the source code, and even automatically suggest the solution. ROOT scripts, as well as standalone C++ programs relying on ROOT libraries, can be integrated with minimum effort into these. Examples on the steps to follow are explained in older blog posts for the [Visual Studio](https://root.cern/blog/root-on-vscode/) and [Eclipse](https://root.cern/blog/debuging-root-scripts-in-eclipse/) IDEs. In this post, I will focus on a third option, the open-source [QtCreator IDE](https://www.qt.io/download-open-source).

## QtCreator

Note: while optimized for Qt applications, QtCreator is totally generic, it can compile and run any C++ program, CMake project, Makefile, etc. You don't even need to know what Qt means. You don't need to use QMake either. Your project will be equally compilable from a terminal with Make / CMake than via QtCreator, which just acts as a non-invasive interface.

### Installation steps

You can find (usually) outdated versions of QtCreator in your package manager, but I recommend to use the [online installer](https://www.qt.io/download-open-source), which then periodically checks for updates at program start. If you prefer not to open a user account with them, you can use the [offline installer](https://www.qt.io/offline-installers/?hsLang=en). While installing, I recommend to deactivate all Qt library options, newer CMake versions or Ninja. You will just need QtCreator.

### Open a C++ CMake project

You can open any CMake project you have on your computer by clicking on "File", "Open File or Project", and double-clicking on your "CMakeLists.txt". If you rather use Makefiles, that's also supported via the [Import](https://doc.qt.io/qtcreator/creator-project-generic.html#importing-a-generic-project) menu.
