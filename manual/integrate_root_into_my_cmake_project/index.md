---
title: Integrating ROOT into CMake projects
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

You can integrate ROOT into a [CMake](https://cmake.org){:target="_blank"} based project.<br/>
The main interface is the [CMake](https://cmake.org){:target="_blank"} command [find_package(...)](https://cmake.org/cmake/help/latest/command/find_package.html){:target="_blank"}.

Calling `find_package(ROOT)` makes the following variables available:

Variable | Type | Description
---------|-------|--------------
ROOT_INCLUDE_DIRS |  PATH | Include directories for the ROOT installation.
ROOT_LIBRARIES   |  LIST | Libraries to link against. The actual list of libraries is composed using the COMPONENTS listed in the find_package(...) command.
ROOT_DEFINITIONS  | STRING | Compile definitions needed to use ROOT.
ROOT_CXX_FLAGS  | STRING | C++ compiler flags used to build ROOT.
ROOT_CC_FLAGS  | STRING | C compiler flags used to build ROOT.
ROOT\_<library\>_LIBRARY |  PATH | Full path for each of the ROOT libraries listed in COMPONENTS.
ROOT\_<command\>_CMD | PATH | Full path for each ROOT executable (rootcling, root, hadd, etc.).
ROOT\_<option\>_FOUND  | BOOL |  TRUE for each enabled build option (e.g. cocoa, python, xrootd, etc.).
ROOT_FOUND |  BOOL | TRUE if the ROOT package has been found.
ROOT_USE_FILE  | PATH   |  Path to a CMake module, which makes use of the previous variables and loads modules with useful macros or functions such as `ROOT_GENERATE_DICTIONARY`.

One cmake target per ROOT library is also available, e.g. `ROOT::Core` or `ROOT::Tree`.

> **Note**
>
> To ensure compatibility between ROOT's C++ interpreter, Cling, and compiled code, your application *must* be compiled with the same C++ standard with which ROOT was compiled.<br/>
> The C++ standard used for ROOT appears for example among the flags listed by `root-config --cflags`.

## Adding additional libraries to `ROOT_LIBRARIES`
You can force additional ROOT libraries in the `ROOT_LIBRARIES` variable using the `COMPONENTS` option in the [find_package(...)](https://cmake.org/cmake/help/latest/command/find_package.html){:target="_blank"} command. For example, to add the `RooStats` library, you can specify it as an extra component (the name of the component is the name of the library without any library prefix or suffix).
{% highlight C++ %}
   find_package(ROOT COMPONENTS RooStats)
{% endhighlight %}

However, prefer passing libraries as CMake targets whenever possible (see the [full example](#full-example-event-project) below).

## Useful commands
ROOT provides a number of `CMake` macros and functions that are used internally but can also be used by projects layered on top of ROOT.

### ROOT_GENERATE_DICTIONARY
`ROOT_GENERATE_DICTIONARY` generates a dictionary for a set of header files (convenient wrapper on top of the `rootcling` command).

{% highlight C++ %}
   ROOT_GENERATE_DICTIONARY( dictionary headerfiles ... [STAGE1]
      LINKDEF linkdeffiles ...
      [MODULE module] [DEPENDENCIES dep1 dep2 ...]
      [OPTIONS opt1 opt2 ...] )
{% endhighlight %}

The `${dictionary}.cxx` and `${dictionary}.pcm` files are created using the header and the `linkdef` files, calling the `rootcling` command. Optionally, you can provide `OPTIONS` and `MODULE` to customize the way the `rootcling` command is called and the name for the `.pcm` files.

As an alternative, `REFLEX_GENERATE_DICTIONARY` offers the same underlying functionality with a slightly different interface:

{% highlight C++ %}
   REFLEX_GENERATE_DICTIONARY( dictionary headerfiles ...
      SELECTION selection ...
      [DEPENDENCIES dep1 dep2 ...]
      [OPTIONS opt1 opt2 ...] )
{% endhighlight %}

## Full example (event project)

The following is an example of a project that creates a library including a dictionary and an executable file.

{% highlight C++ %}
// CMakeLists.txt for the "event" package. It creates a library with a dictionary and a main program.
// If ROOT is not installed in a default system location you need to tell CMake where to find it.
// Sourcing `thisroot.sh` already sets the required environment variables.
// Otherwise, you must tell the build system where to look for ROOT,
// for example by passing `-DROOT_DIR="/path/to/root/installation` at CMake configuration time.

   cmake_minimum_required(VERSION 3.0 FATAL_ERROR)
   project(event)

// Locate the ROOT package and define a number of useful targets and variables.
   find_package(ROOT REQUIRED COMPONENTS RIO Net)

   include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
   ROOT_GENERATE_DICTIONARY(G__Event Event.h LINKDEF EventLinkDef.h)

// Create a shared library with a generated dictionary.
// Passing cmake targets such as `ROOT::RIO` as dependencies (rather than plain
// library names for example via ${ROOT_LIBRARIES}) ensures that properties such as required
// include directories and C++ standard are propagated to our libraries or executables.
// Note: To ensure compatibility with Cling, targets *must* be compiled using the
// same C++ standard as ROOT was compiled with.
   add_library(Event SHARED Event.cxx G__Event.cxx)
   target_link_libraries(Event PUBLIC ROOT::RIO ROOT::Net)

// Create the main program using the library.
   add_executable(Main MainEvent.cxx)
   target_link_libraries(Main Event)
{% endhighlight %}

See also the [An Introduction to Modern CMake Guide](https://cliutils.gitlab.io/modern-cmake/chapters/packages/ROOT.html){:target="_blank"} by Henry Schreiner for more information on building your ROOT project with modern CMake.
