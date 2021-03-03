---
layout: single
title: Interactive or Built Applications
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

You can use the Cling C++ interpreter or Python for your interactive sessions and to
write macros, or compile your program to run at full speed. In both cases, you can also
create a GUI.

Start ROOT at the system prompt and the ROOT prompt is displayed and C++ code can be
executed interactively:

```
root [0] int i = 7
(int) 7
root [1] ++i
(int) 8
```


## Rapid Prototyping
Every programmer knows that, though compiled applications run much faster, interpreted
scripts are easier to create and debug.  This is why data analysis programs usually offer
an interactive shell to the user.  Thanks to the C++ interpreter Cling, the ROOT
framework provides a way to incrementally develop and debug your program and, at the
same time, makes it smooth to transform your work into a compiled application.

In addition, the user can choose to build a stand-alone application or a (static or, by
default, shared) library.  In the latter case, the user can load such library from the
ROOT shell (i.e. via the Cling interpreter), from a ROOT macro (that is a sequence of
C++ statements to be executed step by step by the interpreter), or from a compiled
application.

The C++ programming language is probably the most performant language today, and C++
compilers can produce highly optimized executable code. However, the C++ language may
be quite complicate for newcomers or unexperienced programmers.  If you don't feel
confortable with C++ programs, you will be happy to know that ROOT allows to have an
interactive session based on the Python interpreter.

## Performant Applications
There are two ways to obtain the maximum speed from your data analysis program.  First,
you can build your stand-alone application with the C++ compiler, loading the ROOT
libraries.  Second, you can produce your own library, and load it from the C++
interpreter (either interactively or with a ROOT macro) or from another compiled
application.

It is possible to write your code in such a way that it can be run interactively or
compiled to produce a library or a stand-alone application.  The changes are limited
to few pre-processor directives and to the main function.  However, if you always want
to use the C++ interpreter, you don't even need to apply such additional coding.
Instead, you can write your macro and compile it to make a library just before using it,
directly from the ROOT shell.  The next times you execute the same macro (may be on
different data) ROOT will use the compiled version by loading the library produced
the first time, obtaining practically the same performance as a compiled application.
Even if you don't plan to run twice the same macro, there are cases in which the time
needed to produce the library is shorter than the time saved by running a compiled,
rather than an interactive, program.

## User Interface
ROOT provides different ways to create a graphical user interface (GUI).  The simplest
starting point is an existing ROOT window: one can change its graphical settings by
selecting "Editor" from the "View" menu, and can save the result into a C++ file.
You could also start by writing the code from scratch, following the several examples
provided with ROOT, but the easiest way is probably to use the GUI editor to visually
create the GUI and to automatically create the corresponding C++ code.

Once you obtained the C++ source produced by ROOT, you only need to assign the correct
behavior to all buttons, sliders, etc.  The underlying model of every ROOT GUI is the
signal-slot technique, also adopted by the Qt library.
