---
title: Integrate ROOT into my CMake project
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Integrating ROOT into your [CMake](https://cmake.org) based project should be straight
forward. The main interface is the CMake command
[find_package(...)](https://cmake.org/cmake/help/latest/command/find_package.html), which
defines the following standard variables:

variable | type | description
---------|-------|--------------
ROOT_INCLUDE_DIRS |  PATH | include directories for the ROOT installation
ROOT_LIBRARIES   |  LIST | Libraries to link against. The actual list of libraries is composed using the COMPONENTS listed in the find_package(...)
ROOT_DEFINITIONS  | STRING | Compile definitions needed to use ROOT
ROOT_CXX_FLAGS  | STRING | C++ compiler flags used to build ROOT
ROOT_CC_FLAGS  | STRING | C compiler flags used to build ROOT
ROOT\_<library\>_LIBRARY |  PATH | Full path for each of the ROOT libraries listed in COMPONENTS
ROOT\_<command\>_CMD | PATH | Full path for each ROOT executable (rootcling, root, hadd, etc.)
ROOT\_<option\>_FOUND  | BOOL |  True for each enabled build option (e.g. cocoa, python, xrootd, etc.)
ROOT_FOUND |  BOOL | True if the ROOT package has been found
ROOT_USE_FILE  | PATH   |  Path to a CMake module which makes use of the previous variables and loads modules with useful macros or functions such as ROOT_GENERATE_DICTIONARY

## Adding Additional libraries
The user can force additional ROOT libraries in the `ROOT_LIBRARIES` variable using the COMPONENTS option in `find_package(...)` command. For example to add the `RooStats` library the user can specify it as an extra component (the name of the component is the name of the library without any library prefix or suffix).
~~~
find_package(ROOT COMPONENTS RooStats)
~~~
## Useful commands
ROOT provides a number of CMake macros/functions that are used internally but can also be used by projects layered on top of  ROOT.
### ROOT_GENERATE_DICTIONARY
Generate dictionary for a set of header files (convenient wrapper on top of rootcling command).
~~~~
ROOT_GENERATE_DICTIONARY( dictionary headerfiles ... [STAGE1]
                         LINKDEF linkdeffiles ...
                         [MODULE module] [DEPENDENCIES dep1 dep2 ...]
                         [OPTIONS opt1 opt2 ...] )
~~~~
The file ${dictionary}.cxx and ${dictionary}.pcm are created using the header and linkdef files calling the rootcling command. Optionally OPTIONS and MODULE can be provided to customize the way the rootcling is called and the name for the .pcm files.

### REFLEX_GENERATE_DICTIONARY
Generate dictionary for a set of header files (convenient wrapper on top of rootcling command).
```
REFLEX_GENERATE_DICTIONARY( dictionary headerfiles ...
                          SELECTION selection ...
                          [DEPENDENCIES dep1 dep2 ...]
                          [OPTIONS opt1 opt2 ...] )
```
The file ${dictionary}.cxx and ${dictionary}.pcm are created using the headers and selection file calling the genreflex command. Optionally OPTIONS can be provided to customize the way the genreflex is called.

## Full example (Event project)
Following is an example of a project that creates a library including a dictionary and an executable.
~~~~
# CMakeLists.txt for event package. It creates a library with dictionary and a main program
cmake_minimum_required(VERSION 3.0 FATAL_ERROR)
project(event)

# You need to tell CMake where to find the ROOT installation. This can be done in a number of ways:
#   - ROOT built with classic configure/make use the provided $ROOTSYS/etc/cmake/FindROOT.cmake
#   - ROOT built with CMake. Add in CMAKE_PREFIX_PATH the installation prefix for ROOT
list(APPEND CMAKE_PREFIX_PATH $ENV{ROOTSYS})

#---Locate the ROOT package and defines a number of variables (e.g. ROOT_INCLUDE_DIRS)
find_package(ROOT REQUIRED COMPONENTS RIO Net)

#---Define useful ROOT functions and macros (e.g. ROOT_GENERATE_DICTIONARY)
include(${ROOT_USE_FILE})

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
ROOT_GENERATE_DICTIONARY(G__Event Event.h LINKDEF EventLinkDef.h)

#---Create a shared library with geneated dictionary
add_library(Event SHARED Event.cxx G__Event.cxx)
target_link_libraries(Event ${ROOT_LIBRARIES})

#---Create  a main program using the library
add_executable(Main MainEvent.cxx)
target_link_libraries(Main Event)
~~~~