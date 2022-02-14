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
Yet, despite knowing the forefront impact on your workflow, scientific robustness, many of us physicist are not trained to deal with errors with the proper tools, and we still deploy inefficient and manual ways to hack them "as quickly as possible", hoping (with uncertainty and fear) that they "won't come back". Because we will encounter errors much more frequently than we might think at first place, it makes sense to invest some "initial setup time" to create a robust platform for tackling and fixing these in a systematic way. Rather than reacting with insecurity to these or keeping them in the back of the mind as a passive or transient threat, let's assume they will be an important key player in our development, a learning tool that will appear continuously and is worth optimizing. In the same way that one does no longer use a pen if one wants to send 10000 letters, compared to only 10.

## IDEs to the rescue
IDEs are very powerful tools to detect errors (thanks e.g. to Clang), trace them back to the right point in the source code, and even automatically suggest the solution. ROOT scripts, as well as standalone C++ programs relying on ROOT libraries, can be integrated with minimum effort into these. Examples on the steps to follow are explained in older blog posts for the [Visual Studio](https://root.cern/blog/root-on-vscode/) and [Eclipse](https://root.cern/blog/debuging-root-scripts-in-eclipse/) IDEs. In this post, I will focus on a third option, the open-source [QtCreator IDE](https://www.qt.io/download-open-source).

## QtCreator

Note: while optimized for Qt applications, QtCreator is totally generic, it can compile and run any C++ program, CMake project, Makefile, etc. You don't even need to know what Qt means. You don't need to use QMake either. Your project will be equally compilable from a terminal with Make / CMake than via QtCreator, which just acts as a non-invasive interface.

### Installation steps

You can find (usually) outdated versions of QtCreator in your package manager, but I recommend to use the [online installer](https://www.qt.io/download-open-source), which then periodically checks for updates at program start. If you prefer not to open a user account with them, you can use the [offline installer](https://www.qt.io/offline-installers/?hsLang=en). While installing, I recommend to deactivate all Qt library options, newer CMake versions or Ninja. You will just need QtCreator.

### Open a C++ CMake project

You can open any CMake project you have on your computer by clicking on "File", "Open File or Project", and double-clicking on your "CMakeLists.txt". If you rather use Makefiles, that's also supported via the [Import](https://doc.qt.io/qtcreator/creator-project-generic.html#importing-a-generic-project) menu.

Let me load into QtCreator the [simplest CMake example](https://cmake.org/cmake/help/latest/guide/tutorial/A%20Basic%20Starting%20Point.html). After "Open File or Project", you can specify in what folder to build your program. The option "Manage Kits" allows you to tune your compiler version. "Tools, Options, Build, Default Properties" allows you to setup a default directory. Once you "Configure Project", CMake will be run. In the "Projects" Pane, you can tune any CMake flag as needed, as well as specify command line arguments when running. The "Build" icon compiles your project, and the "Run" one executes it.

### The Power of F1

Let's assume now that you have forgotten what class "std::cout" has. Luckily, Qt has an in-built (offline) help support system. For a first-time configuration, you will just need to download the Help Book of your library, in this case the std library from [cppreference](https://en.cppreference.com/w/Cppreference:Archives#Qt_help_book) or via your package manager (sudo apt install cppreference-doc-en-qch). Then, in "Tools", "Options", "Help", "Documentation", you can add the downloaded (or /usr/share/ installed) ".qch" file.

Once this is set, you can either CTRL+Click on your function to go the source code definition, or press F1, and the HTML documentation will appear on your right side without having to type / search anything online.

![tutorial](https://user-images.githubusercontent.com/10653970/153931729-271fbefd-c73a-4739-8ff3-39bec7c35eec.png)

The ROOT framework also has a ".qch" Help Book available [for download](https://root.cern/reference/), thus you'll be able to quickly consult any documentation using the F1 key, rather than searching online, which can be useful in case you are traveling and have no Internet access.

You can not only check the documentation with F1, but fully opening the full HTML reference on the left pane, on the Help icon.

Alternatively, you can also open the Help Books and search it using [Qt Assistant](https://doc.qt.io/qt-5/assistant-details.html).

### SectionXXX

https://root.cern/blog/debuging-root-scripts-in-eclipse/
https://root-forum.cern.ch/t/using-root-gui-in-eclipse/30581
https://twiki.cern.ch/twiki/bin/view/CMSPublic/BristolEclipseTutorial
https://petrstepanov.wordpress.com/2015/11/15/compile-cern-root-program-with-roofit-in-eclipse/

### clang-format
astylerc, clang-format
...
auto-format alt-F! 

### git
git commit Altg-C
...

### Clang-analyzer
auto-fixits
todo...

### CTests

CTests

... and others

### Doxygen warnings finding

screenshot how to quickly find doxyerrors --> WARN_NOPARAMDOC YES?  —   spellchecking!

DOCSET for Apple
migrate2CMake
tutorials pollute sources & broken Kernels
https://stackoverflow.com/questions/17955686/using-automatic-documentation-of-my-own-function-with-qt-creator

## Debugging tools

### Building ROOT in Debug Mode

### GDB

todo...

### Valgrind

todo...

### Hellgrind

todo...

### Callgrind

todo....

### GUICommandPlugin

todo...

and linev++ https://marketplace.visualstudio.com/items?itemName=albertopdrf.root-file-viewer

## Quick recipe Summary

- [Install QtCreator](https://www.qt.io/download-open-source) deactivating all extra options
- Download Std Help Book from [cppreference](https://en.cppreference.com/w/Cppreference:Archives#Qt_help_book) or package manager (sudo apt install cppreference-doc-en-qch)
- Download [ROOT Help Book](https://root.cern/reference/)
- Add both ".qch" files via "Tools", "Options", "Help", "Documentation"
