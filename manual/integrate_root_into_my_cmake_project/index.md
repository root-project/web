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
ROOT_CXX_STANDARD  | STRING | C++ standard used to build ROOT.
ROOT\_<library\>_LIBRARY |  PATH | Full path for each of the ROOT libraries listed in COMPONENTS.
ROOT\_<command\>_CMD | PATH | Full path for each ROOT executable (rootcling, root, hadd, etc.).
ROOT\_<option\>_FOUND  | BOOL |  TRUE for each enabled build option (e.g. cocoa, python, xrootd, etc.).
ROOT_FOUND |  BOOL | TRUE if the ROOT package has been found.
ROOT_USE_FILE  | PATH   |  Path to a CMake module, which makes use of the previous variables and loads modules with useful macros or functions such as `ROOT_GENERATE_DICTIONARY`.

One [CMake](https://cmake.org){:target="_blank"} target per ROOT library is also available, e.g. `ROOT::Core` or `ROOT::Tree`.

> **Note**
>
> To ensure compatibility between ROOT's C++ interpreter, Cling, and compiled code, your
> application *must* be compiled with the same C++ standard with which ROOT was compiled.<br/>
> The C++ standard used to build ROOT is available via the ROOT_CXX_STANDARD variable and appears also among the flags listed by
> `root-config --cflags`.

## Adding additional libraries to `ROOT_LIBRARIES`

You can force additional ROOT libraries in the `ROOT_LIBRARIES` variable using the
`COMPONENTS` option in the
[find_package(...)](https://cmake.org/cmake/help/latest/command/find_package.html){:target="_blank"}
command. For example, to add the `RooStats` library, you can specify it as an extra component
(the name of the component is the name of the library without any library prefix or suffix).

{% highlight cmake %}
   find_package(ROOT COMPONENTS RooStats)
{% endhighlight %}

However, prefer passing libraries as [CMake](https://cmake.org){:target="_blank"} targets whenever possible (see the
[full example](#full-example-event-project) below).

## Full example (event project)

The following is an example of a project that creates a library and an executable file.

{% highlight cmake %}
# CMakeLists.txt for the "event" package. It creates a library and a main program.
# If ROOT is not installed in a default system location you need to tell CMake where to find it.
# Sourcing `thisroot.sh` already sets the required environment variables.
# Otherwise, you must tell the build system where to look for ROOT,
# for example by passing `-DROOT_DIR="/path/to/root/installation` at CMake configuration time.

   cmake_minimum_required(VERSION 3.0 FATAL_ERROR)
   project(event)

# Locate the ROOT package and define a number of useful targets and variables.
   find_package(ROOT REQUIRED COMPONENTS RIO Net)
   include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)

# Create a shared library.
# Passing cmake targets such as `ROOT::RIO` as dependencies (rather than plain
# library names for example via ${ROOT_LIBRARIES}) ensures that properties such as required
# include directories and C++ standard are propagated to our libraries or executables.
# Note: To ensure compatibility with Cling, targets *must* be compiled using the
# same C++ standard as ROOT was compiled with.
   add_library(Event SHARED Event.cxx)
   target_link_libraries(Event PUBLIC ROOT::RIO ROOT::Net)

# Create the main program using the library.
   add_executable(Main MainEvent.cxx)
   target_link_libraries(Main Event)
{% endhighlight %}

See also the [An Introduction to Modern CMake Guide](https://cliutils.gitlab.io/modern-cmake/chapters/packages/ROOT.html){:target="_blank"} by Henry Schreiner for more information on building your ROOT project with modern CMake.
