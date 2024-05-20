---
title: Building ROOT from source
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

ROOT uses the [CMake](https://www.cmake.org/){:target="\_blank"} cross-platform build-generator tool as the
primary build system.<br> CMake does not build the project, it generates the files needed by
your build tool (GNU make, Ninja, Visual Studio, etc) for building ROOT.

If you want to get to a functional ROOT build as soon as possible, go to the [Quick Start](#quick-start) section.<br>
If you are a CMake novice, start on [Basic CMake usage]({{'/install/basic_cmake' | relative_url}}) and then go back to the
[Quick Start](#quick-start).
<br>The [Options](#all-build-options) and the [Variables](#relevant-cmake-variables) section is a reference for customizing your build. If you already have experience with CMake, this is the recommended starting point.

## Preparation

Make sure you have installed all [required dependencies]({{'/install/dependencies' | relative_url}}) before building ROOT.

## Quick start

The following are the basic instructions for UNIX-like systems and Windows. We will use the command-line, non-interactive CMake interface. On Windows, open a `[x86|x64] Native Tools Command Prompt for vs 2022`.

1. Download and unpack the [ROOT sources for a specific release]({{'/install/all_releases' | relative_url}}) (make sure to download the "Source distribution" and not a binary distribution) or simply clone ROOT's git repository and check out the branch you would like to build, for example:

   ```bash
   # The latest stable branch gets updated automatically on each release.
   # Your may update your local copy by issuing a `git pull` command.
   # The `--depth=1` option will save some download time during clone at the cost of
   # slightly increased time for the first `git pull`.
   $ git clone --branch latest-stable --depth=1 https://github.com/root-project/root.git root_src
   ```
   In the following we will refer to the directory where ROOT sources are (e.g. `root_src` above) as `<sourcedir>`.

2. Create a directory for the build and a directory for the installation. It is not supported to build ROOT in the source directory. Then change (`cd`) to the build directory:

   ```bash
   $ mkdir <builddir> <installdir>
   $ cd <builddir>
   ```

3. Execute the `cmake` command on the shell replacing `<sourcedir>` and `<installdir>` appropriately.

   On UNIX-like systems:
   ```bash
   $ cmake -DCMAKE_INSTALL_PREFIX=<installdir> <sourcedir>
   ```
   On Windows:
   ```bat
   cmake -G"Visual Studio 17 2022" -A Win32 -Thost=x64 -DCMAKE_INSTALL_PREFIX=<installdir> <sourcedir>
   ```
   `-G"Visual Studio 17 2022"` is the generator (here Visual Studio 2022), `-A Win32` is for the architecture (here 32 bit), so replace `-A Win32` with `-A x64` to build in 64 bit mode, and `-Thost=x64` is to use the native x64 toolset (to increase the available memory for the builds).

   CMake will detect your development environment, perform a series of test and generate the files required for building ROOT. CMake will use default values for all build parameters. See the [Build Options](#all-build-options) and [Variables](#relevant-cmake-variables) sections for fine-tuning your build.

   This can fail if CMake cannot detect your toolset, or if it thinks that the environment is not sane enough. In this case make sure that the toolset that you intend to use is the only one reachable from the shell and that the shell itself is the correct one for you development environment. You can force CMake to use a given build tool, see the Usage section.

4. Proceed to use IDE project files or start the build from the build directory, after CMake has finished running:

   On UNIX-like systems:
   ```bash
   $ cmake --build . --target install [-- <options to the native tool>]
   ```
   On Windows:
   ```bat
   cmake --build . --config [Release|Debug|RelWithDebInfo] --target install [-- <options to the native tool>]
   ```
   On Windows, the `--config [Release|Debug|RelWithDebInfo]` is needed at build time.

   The `--build` option tells cmake to invoke the underlying build tool (make, ninja, xcodebuild, msbuild, etc).

   The underlying build tool can also be invoked directly of course, but the` cmake --build` command is more portable.

   On UNIX systems (with make or ninja) you can speedup the build with `cmake --build . --  -jN` where N is the number of available cores.

5. Setup ROOT in your environment:

   On UNIX-like systems:
   ```bash
   $ source <installdir>/bin/thisroot.sh # also available for other shells: thisroot.csh, thisroot.fish, thisroot.bat
   ```
   To have ROOT setup automatically at each login, that command can be appended to a `.profile`, `.login`, `.bashrc` or equivalent configuration file.

   On Windows:
   ```bat
   <installdir>/bin/thisroot.bat # also available for PowerShell: thisroot.ps1
   ```

## Caveats

As it makes use of a C++ interpreter, ROOT has somewhat stricter requirements than other C++ libraries: applications that depend on ROOT
*must* be compiled with the same C++ standard with which ROOT was compiled.
The relevant cmake flag is [`CMAKE_CXX_STANDARD`](https://cmake.org/cmake/help/latest/variable/CMAKE_CXX_STANDARD.html){:target="_blank"}.
For example, from the command line, the standard can be selected by passing one of 11, 14, 17,... such as `-DCMAKE_CXX_STANDARD=17`.
Generally speaking, newer standards are only supported by newer ROOT versions.
See also the [supported C++ standards in each ROOT version](https://root.cern/install/dependencies/#supported-compilers).

Also note that compatibility with compilers shipped with `devtoolset`s on CentOS or Red Hat is not guaranteed.

## ROOT, Python and PyROOT

PyROOT, the set of Python bindings of ROOT, supports any Python version that is not [end-of-life](https://devguide.python.org/versions/).
This means it supports the 5 latest major versions of Python 3.

ROOT uses the standard [`FindPython3`](https://cmake.org/cmake/help/latest/module/FindPython3.html) from CMake to find Python at build time.
You can give it [some hints](https://cmake.org/cmake/help/latest/module/FindPython3.html#hints) to find the desired Python installation.
To precisely control the Python version that PyROOT is built against, we recommend using a `virtualenv` or `conda` environment, because CMake will first look for Python in active virtual environments.
Alternatively, you can define the `Python3_ROOT_DIR` hint in the CMake configuration step.

## Building ROOT with CUDA support

To build ROOT with CUDA support, you need to have [Nvidia's CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit){:target="\_blank"} installed,
and optionally [Nvidia's Cudnn](https://developer.nvidia.com/cudnn){:target="\_blank"} library. The relevant CMake
options to set are `CMAKE_CUDA_HOST_COMPILER` (usually set to the same as `CMAKE_CXX_COMPILER`), and `CMAKE_CUDA_STANDARD`.
Starting with ROOT 6.20.06 it is possible to set `CMAKE_CXX_STANDARD` and `CMAKE_CUDA_STANDARD` to different values
to allow to compile ROOT with C++17 while CUDA code with C++14 when using CUDA 9 or 10. In addition to these options,
the relevant ROOT build options to enable are `-Dcuda=ON -Dcudnn=ON -Dtmva-gpu=ON`.

## System-wide installation

There are two main methods of installing ROOT from source: _location independent_ and _fixed location_. The former is
advised for a personal installation of ROOT, while the latter for a system-wide installation. Both require to set the
`CMAKE_INSTALL_PREFIX` variable at configuration time (its default is `/usr/local` if unset). The mode of installation
is controlled via the `gnuinstall` option during configuration.

### Location Independent Installation (gnuinstall=OFF)

This is the configuration used by the binary releases on the website. This method requires setting environment variables
such as `PATH`, `LD_LIBRARY_PATH`, and `PYTHONPATH`. This is usually done by sourcing the script `bin/thisroot.sh` or
equivalent for your shell from the installation directory. The installation can be done by running

```
$ cmake --build . --target install
```

from the build directory. If ROOT is built with `-Drpath=ON`, then it is usually not necessary to set `LD_LIBRARY_PATH`
after installation. It is also important to note that with this method it is usually not possible to customize
installation paths like `CMAKE_INSTALL_BINDIR`, `CMAKE_INSTALL_LIBDIR`, etc.

### Fixed Location Installation (gnuinstall=ON)

The fixed location installation method is enabled with `-Dgnuinstall=ON` at configuration time, which then also allows
the tuning of destinations for the various components by setting the variables `CMAKE_INSTALL_xxxDIR`, where `xxx` is `BIN`,
`LIB`, `INCLUDE`, etc. The full list is available in `cmake/modules/RootInstallDirs.cmake` inside the repository and
also in the list of variables below. The fixed location installation method does not require setting any environment
variables when ROOT is installed into default system paths (e.g. `/usr`, `/usr/local`). However, if
`CMAKE_INSTALL_LIBDIR` is a directory that is not searched for by the linker, it is recommended to enable
`-Drpath=ON` or to add `CMAKE_INSTALL_LIBDIR` to `/etc/ld.so.conf` in order to avoid having to set `LD_LIBRARY_PATH`
to be able to run ROOT. Nevertheless, it may still be necessary to set `PYTHONPATH` with this method if PyROOT is not
installed into one of the system paths searched for by Python (run `python -m site` to see this list of paths). This
can be done with `export PYTHONPATH=$(root-config --libdir)` if `root-config` is already in your `PATH`.

## All build options

Each build option is a boolean variable that can be turned ON or OFF. The current value is recorded in the CMake cache (CMakeCache.txt file on the build directory) and therefore it is not needed to be specified on the cmake command each time. Please note that some of the options might be turned OFF automatically for some platforms or if the required external library or component can not be satisfied. The user can view and edit the full list of options using the `ccmake` utility or `cmake-gui` for Windows. Note that on Windows some of the options are not yet implemented.

The user can set any CMake variable or option that controls the build process from the `cmake` command line. Passing `cmake -D <var>=<value>` creates an entry in the CMake cache. The list of the ROOT-specific CMake options can be found below.
**Note**: Some options have platform-dependent default values (e.g. cocoa is `ON` on apple)

Click on one of the following dropdowns to see the full list of build options for a specific ROOT release:

<details markdown="1"><summary markdown="span">build options for ROOT 6.32</summary>

{% include build_options_v6-32-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.30</summary>

{% include build_options_v6-30-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.28</summary>

{% include build_options_v6-28-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.26</summary>

{% include build_options_v6-26-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.24</summary>

{% include build_options_v6-24-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.22</summary>

{% include build_options_v6-22-00-patches.md %}

</details>

### Relevant CMake variables
Here are some of the CMake variables that are used often, along with a brief explanation and ROOT-specific notes. For full documentation, check the CMake docs or execute `cmake --help-variable VARIABLE_NAME`.

| Variable                  | Type   | Explanation                                                                                                                                                                                                                       |
|---------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CMAKE_BUILD_TYPE          | STRING | Sets the build type for make based generators. Possible values are Release, MinSizeRel, Debug, RelWithDebInfo and Optimized. On systems like Visual Studio the user sets the build type with the IDE settings. Default is Release |
| CMAKE_INSTALL_PREFIX      | PATH   | Path where ROOT will be installed if make install is invoked or the “INSTALL” target is built.                                                                                                                                    |
| CMAKE_C_COMPILER          | PATH   | Full path to the C compiler.  Alternatively you can specify the environment variable CC before invoking cmake                                                                                                                     |
| CMAKE_C_FLAGS             | STRING | Extra flags to use when compiling C source files.                                                                                                                                                                                 |
| CMAKE_CXX_COMPILER        | PATH   | Full path to the C++ compiler.  Alternatively you can specify the environment variable CXX before invoking cmake                                                                                                                  |
| CMAKE_CXX_FLAGS           | STRING | Extra flags to use when compiling C++ source files.                                                                                                                                                                               |
| CMAKE_CXX_STANDARD        | STRING | Define the C++ standard version to use when building ROOT, and for the interpreter at runtime (see [supported C++ standards in each ROOT version](https://root.cern/install/dependencies/#supported-compilers))                   |
| CMAKE_Fortran_COMPILER    | PATH   | Full path to the Fortran compiler. Alternatively you can specify the environment variable FC before invoking cmake                                                                                                                |
| CMAKE_INSTALL_BINDIR      | PATH   | Install destination for user executables (bin)                                                                                                                                                                                    |
| CMAKE_INSTALL_LIBDIR      | PATH   | Install destination for object code libraries (lib or lib64 or lib/<multiarch-tuple> on Debian)                                                                                                                                   |
| CMAKE_INSTALL_INCLUDEDIR  | PATH   | Install destination for C/C++ header files (include)                                                                                                                                                                              |
| CMAKE_INSTALL_SYSCONFDIR  | PATH   | Install destination for read-only single-machine data (etc)                                                                                                                                                                       |
| CMAKE_INSTALL_MANDIR      | PATH   | Install destination for  man documentation (DATAROOTDIR/man)                                                                                                                                                                      |
| CMAKE_INSTALL_DATAROOTDIR | PATH   | Install directory for read-only architecture-independent data (share)                                                                                                                                                             |
| CMAKE_INSTALL_DATADIR     | PATH   | Install destination read-only architecture-independent data (DATAROOTDIR/root)                                                                                                                                                    |
| CMAKE_INSTALL_MACRODIR    | PATH   | Install destination for ROOT macros (DATAROOTDIR/macros)                                                                                                                                                                          |
| CMAKE_INSTALL_ICONDIR     | PATH   | Install destination for icons (DATAROOTDIR/icons)                                                                                                                                                                                 |
| CMAKE_INSTALL_FONTDIR     | PATH   | Install destination for fonts (DATAROOTDIR/fonts)                                                                                                                                                                                 |
| CMAKE_INSTALL_SRCDIR      | PATH   | Install destination for sources (DATAROOTDIR/src)                                                                                                                                                                                 |
| CMAKE_INSTALL_DOCDIR      | PATH   | Install destination for documentation root (DATAROOTDIR/doc/root)                                                                                                                                                                 |
| CMAKE_INSTALL_TESTDIR     | PATH   | Install destination for tests (DOCDIR/test)                                                                                                                                                                                       |
| CMAKE_INSTALL_TUTDIR      | PATH   | Install destination for tutorials (DOCDIR/tutorials)                                                                                                                                                                              |
| CMAKE_INSTALL_ACLOCALDIR  | PATH   | Install destination for locale-dependent data (DATAROOTDIR/aclocal)                                                                                                                                                               |
| CMAKE_INSTALL_ELISPDIR    | PATH   | Install destination for lisp files (DATAROOTDIR/emacs/site-lisp)                                                                                                                                                                  |
| CMAKE_INSTALL_CMAKEDIR    | PATH   | Install destination for cmake modules (DATAROOTDIR/cmake)                                                                                                                                                                         |

### Additional variables
A number of additional variables to control the way ROOT is built.

| Variable | Type | Explanation |
|----------|-------|---------------|
| LLVM_BUILD_TYPE | STRING | Build type for the bundled LLVM. It is used to set the CMAKE_BUILD_TYPE for the /interpreter/ subdirectory |

### External and built-in dependencies

ROOT depends on several external libraries, depending on the features you enable at configuration time.

Some of these external libraries can also be built together with ROOT (aka. "built-ins").

At the CMake configuration step, ROOT follows the following logic to resolve dependencies:

1. Look for the dependency on the system (e.g. `xrootd`)
2. If the external dependency is not found...
   1. ...but there is a corresponding built-in, enable it (e.g., set `builtin_xrootd=ON`)
   2. ...and there is *no* corresponding built-in, disable the feature requiring the dependency if possible (e.g. disable `pyroot` if Python is not found)

There are some build options that allow you to control this logic:

  * `fail-on-missing`: instead of falling back to a built-in or disabling a feature, fail the configuration. This is useful if you want to make the outcome of the configuration more deterministic (*recommended!*). The default value is `OFF`.
  * `builtin_<name of dependency>` (e.g. `builtin_xrootd`): enable specific built-in by default, meaning don't even check if the dependency is available on the system before falling back to the built-in. Useful in combination with `fail-on-missing` if you already know a specific dependency is not available. See the [build options](https://root.cern/install/build_from_source/#all-build-options) for the list of possible built-ins. Default value is `OFF`, except for `builtin_llvm`, `builtin_clang`, and `builtin_cling` where the default is `ON`.
  * `builtin_all`: meta-flag to enable all built-ins by default. Default value is `OFF`.

Some exceptions to the rule: LLVM, Clang, and Cling. Since these dependencies need to be patched to support ROOT, they are built-in by default.

CMake will look for the external dependencies at a number of standard places in your system, but the user can influence the search by setting some environment variables before invoking the CMake command or by setting package specific CMake variables to their exact location.

The actual cached values used by CMake for the exact location of libraries and include files of the used external libraries can be inspected and modified using the `ccmake` utility.

| Package Name | Variable                                             | Type | Description                                              |
|--------------|------------------------------------------------------|------|----------------------------------------------------------|
| CFITSIO      | CFITSIO                                              | PATH | Installation of CFITSIO                                  |
|              | CFITSIO_INCLUDE_DIR                                  | PATH | Directory where to find fitsio.h                         |
|              | CFITSIO_LIBRARIES                                    | PATH | Full path to cfitsio library                             |
| FFTW         | FFTW_DIR                                             | PATH | Installation of FFTW                                     |
|              | FFTW_INCLUDE_DIR                                     | PATH | Directory where to find fftw3.h                          |
|              | FFTW_LIBRARY                                         | PATH | Full path to fftw3 library                               |
| GraphViz     | GRAPHVIZ_DIR                                         | PATH | Installation of GraphViz                                 |
|              | GRAPHVIZ_INCLUDE_DIR                                 | PATH | Directory where to find graphviz/graph.h                 |
|              | GRAPHVIZ_CDT_LIBRARY                                 | PATH | Full path to cdt library                                 |
|              | GRAPHVIZ_GVC_LIBRARY                                 | PATH | Full path to gvc library                                 |
|              | GRAPHVIZ_GRAPH_LIBRARY                               | PATH | Full path to graph library                               |
|              | GRAPHVIZ_PATHPLAN_LIBRARY                            | PATH | Full path to pathplan library                            |
| GSL          | GSL_ROOT_DIR                                         | PATH | Environment variable to the GSL installation.            |
|              | GSL_CONFIG_EXECUTABLE                                | PATH | Full path to gsl-config program                          |
| LZMA         | LZMA_DIR                                             | PATH | Installation of LZMA                                     |
|              | LZMA_INCLUDE_DIR                                     | PATH | Directory where to find lzma.h                           |
|              | LZMA_LIBRARY                                         | PATH | Full path to lzma library                                |
| MySQL        | MYSQL_DIR                                            | PATH | Installation of MySQL                                    |
|              | MYSQL_CONFIG_EXECUTABLE                              | PATH | Full path to mysql_config program                        |
| ODBC         | ODBC_DIR                                             | PATH | Installation of ODBC                                     |
|              | ODBC_INCLUDE_DIR                                     | PATH | Directory where to find sqlext.h                         |
|              | ODBC_LIBRARY                                         | PATH | Full path to libodbc library                             |
| OpenGL       | OPENGL_INCLUDE_DIR                                   | PATH | Location where to find  GL/gl.h                          |
|              | OPENGL_gl_LIBRARY                                    | PATH | Full path to  GL  library                                |
| PCRE         | PCRE_CONFIG_EXECUTABLE                               | PATH | Full path to pcre_config program                         |
| PostgreSQL   | POSTGRESQL_INCLUDE_DIR                               | PATH | Directory where to find l ibpq-fe.h                      |
|              | POSTGRESQL_LIBRARY                                   | PATH | Full path to pq library                                  |
| Pythia 8     | PYTHIA8_DIR                                          | ENV  | Environment variable pointing to installation of Pythia8 |
|              | PYTHIA8_INCLUDE_DIR                                  | PATH | Directory where to find Pythia8/Pythia.h                 |
|              | PYTHIA8_LIBRARY                                      | PATH | Full path to Pythia8 library                             |
| Python 3     | <A href="#root-python-and-pyroot">More info here</A> |      |                                                          |
| XROOTD       | XROOTD_ROOT_DIR                                      | PATH | Directory where to find XROOTD                           |
