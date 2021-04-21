---
title: Building ROOT from source
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

## Introduction

ROOT uses the [CMake](https://www.cmake.org/){:target="\_blank"} cross-platform build-generator tool as the
primary build system.<br> CMake does not build the project, it generates the files needed by
your build tool (GNU make, Ninja, Visual Studio, etc) for building ROOT.

If you are really anxious about getting a functional ROOT build, go to the [Quick Start](#quick-start) section.<br>
If you are a CMake novice, start on [Basic CMake usage]({{'/install/basic_cmake' | relative_url}}) and then go back to the
[Quick Start](#quick-start).
<br>The [Options](#all-build-options) and the [Variables](#relevant-cmake-variables) section is a reference for customizing your build. If you already have experience with CMake, this is the recommended starting point.

## Preparation
Make sure you have installed all [required dependencies]({{'/install/dependencies' | relative_url}}) before building ROOT.

## Quick start

The following are the basic instructions for UNIX-like systems. We will use the command-line, non-interactive CMake interface.

1. Download and unpack the [ROOT sources for a specific release]({{'/install/all_releases' | relative_url}}) (make sure to download the "Source distribution" and not a binary distribution) or simply clone ROOT's git repository and check out the branch you would like to build, for example:
```bash
# substitute `v6-22-00-patches` with the patches branch of the latest release
$ git clone --branch v6-22-00-patches https://github.com/root-project/root.git root_src
```

If you are interested in the latest stable (as opposed to a specific) version, you can get a copy as follows:
```bash
$ git clone --branch latest-stable https://github.com/root-project/root.git root_src
```
This branch is expected to be updated regularly on each release. Therefore, users who cloned this branch can upgrade to the latest release in a straightforward way:
```bash
$ git pull
```

In the following we will refer to the directory where ROOT sources are (e.g. `root_src` above) as `<sourcedir>`.
1. Create a directory for the build and a directory for the installation. It is not supported to build ROOT in the source directory. Then change (`cd`) to the build directory:
```bash
$ mkdir <builddir> <installdir>
$ cd <builddir>
```
1. Execute the `cmake` command on the shell replacing `<sourcedir>` and `<installdir>` appropriately:
```bash
$ cmake -DCMAKE_INSTALL_PREFIX=<installdir> <sourcedir>
```
CMake will detect your development environment, perform a series of test and generate the files required for building ROOT. CMake will use default values for all build parameters. See the [Build Options](#all-build-options) and [Variables](#relevant-cmake-variables) sections for fine-tuning your build
This can fail if CMake cannot detect your toolset, or if it thinks that the environment is not sane enough. In this case make sure that the toolset that you intend to use is the only one reachable from the shell and that the shell itself is the correct one for you development environment. You can force CMake to use a given build tool, see the Usage section.
1. Proceed to use IDE project files or start the build from the build directory, after CMake has finished running:
```bash
$ cmake --build . --target install [-- <options to the native tool>]
```
The `--build` option tells cmake to invoke the underlying build tool (make, ninja, xcodebuild, msbuild, etc).
The underlying build tool can also be invoked directly of course, but the` cmake --build` command is more portable.
On UNIX systems (with make or ninja) you can speedup the build with `cmake --build . --  -jN` where N is the number of available cores.
1. Setup ROOT in your environment:
```bash
$ source <installdir>/bin/thisroot.sh # or thisroot.{csh,fish,bat} depending on the environment
```
To have ROOT setup automatically at each login, that command can be appended to a `.profile`, `.login`, `.bashrc` or equivalent configuration file.

## Caveats

As it makes use of a C++ interpreter, ROOT has somewhat stricter requirements than other C++ libraries: applications that depend on ROOT
*must* be compiled with the same C++ standard with which ROOT was compiled.

Also note that compatibility with compilers shipped with `devtoolset`s on CentOS or Red Hat is not guaranteed.

## ROOT, Python and PyROOT

PyROOT, the set of Python bindings of ROOT, changed its structure and build/installation process in v6.22. In the following the main aspects are summarized for both after and before v6.22.

### After v6.22

The main feature introduced in v6.22 concerning the PyROOT build system is the possibility to build for both Python3 and Python2 (MultiPython), available only if the version of CMake used to build is >= 3.14. In the following, build and installation processes both with CMake >= 3.14 and < 3.14 are described.

#### CMake >= 3.14

In this case, PyROOT libraries are built by default with both Python3 and Python2. For each Python version X.Y used to build PyROOT (e.g. 3.8, 2.7, etc.) the following libraries will appear both in the build directory and in the installation directory:
- `libROOTPythonizationsX_Y.so`
- `libcppyX_Y.so`
- `libcppyy_backendX_Y.so`

The following pure Python modules will appear as well:
- `ROOT`
- `cppyy`
- `cppyy_backend`

If no option is specified, PyROOT will be built for the most recent Python3 and Python2 versions that CMake can find. If only one version can be found, PyROOT will be built only for that version. Moreover, for a given Python installation to be considered, it must provide both the Python interpreter (binary) and the development package. To build PyROOT, it is thus suggested to verify that python-dev is present and install it if not.

In order to build with specific Python installations (not necessarily the highest ones) hints to CMake can be provided by using `-DPython2_ROOT_DIR=python2_dir` and/or `-DPython3_ROOT_DIR=python3_dir` to point to the root directory of some desired Python installation. Similarly, `Python2_EXECUTABLE` and/or `Python3_EXECUTABLE` can be used to point to particular Python executables.

PyROOT can be built with only one version of Python even if multiple installations are present in the system. For this purpose, the option `-DPYTHON_EXECUTABLE=/path/to/python_exec` must be used to point to the desired Python installation. Note that if `PYTHON_EXECUTABLE` is specified, neither `Python3_EXECUTABLE` or `Python2_EXECUTABLE` will be taken into consideration.

When executing a Python script, the Python version used will determine which version of the PyROOT libraries will be loaded. Therefore, once the ROOT environment has been set (e.g. via `source $ROOTSYS/bin/thisroot.sh`), PyROOT can be used from any of the Python versions it has been built for.

_**Example**_
```bash
# Specify -DPython3_EXECUTABLE and -DPython2_EXECUTABLE in order not to pick the highest Python3 and Python2 versions
$ cmake -DCMAKE_INSTALL_PREFIX=<installdir> -DPython3_EXECUTABLE=<python3interpreter> -DPython2_EXECUTABLE=<python2interpreter> <sourcedir>
$ cmake --build . --target install [-- <options to the native tool>]
$ source <installdir>/bin/thisroot.sh
# ROOT can be imported from both Python versions used to build
$ <python3interpreter>
>>> import ROOT
>>>
$ <python2interpreter>
>>> import ROOT
>>>
```

The following other components are built and installed along with PyROOT:
- `TPython`: its library (`libROOTTPython.so`) is built only for the highest Python version that PyROOT is built with. Therefore, in a Python3-Python2 ROOT build, the Python code executed with `TPython` must be Python3-compliant.
- `JupyROOT`: built for both Python3 and Python2, it consists of a library `libJupyROOTX_Y.so` and a pure Python module `JupyROOT`.
- `JsMVA`: it consists of a pure Python module which can be used with both Python versions.


#### CMake < 3.14

If CMake version is < 3.14, the MultiPython feature is not available. PyROOT will thus be built only for one Python version: this is either the one found by CMake, usually the highest available in the system, or the one provided by setting the variable `PYTHON_EXECUTABLE`.

### Before v6.22

For ROOT <= 6.20, an older version of PyROOT (not based on Cppyy) will be built. This same version can be built also in versions >= 6.22 by specifying `-Dpyroot_legacy=ON`. In this case the Python version used to build will be by default the one pointed by the executable `python`. A specific Python installation can be used by setting `PYTHON_EXECUTABLE`.


## Setting the C++ standard

ROOT needs to be configured and built with the same C++ standard as the programs that will make use of it.
The relevant cmake flag is [`CMAKE_CXX_STANDARD`](https://cmake.org/cmake/help/latest/variable/CMAKE_CXX_STANDARD.html){:target="_blank"}.
For example, from the command line, the standard can be selected by passing one of 11, 14, 20,... such as `-DCMAKE_CXX_STANDARD=14`.

### ROOT STL backports

ROOT backports certain useful C++ standard library features to make them available in C++11, for example `std::make_unique` and `std::string_view`.
The backports can be found [here in the reference guide](https://root.cern/doc/master/dir_7780993579c9aa6baf9598fd7cc29d54.html).
The backports are disabled, falling back to the actual C++ standard library implementation if it provides it, depending for instance on the C++ standard ROOT is compiled with and the compiler version.

## Enabling experimental features, aka ROOT7

New and improved versions of standard ROOT components are being implemented under codename ROOT7.

Turning on C++14 (see [Setting the C++ standard](#setting-the-c-standard)) or higher will automatically enable ROOT7.
Alternatively, you can explicitly enable ROOT7 with `-Droot7=ON`, which will in turn set the standard to C++14 if a
value was not already specified by the user.

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

<details markdown="1"><summary markdown="span">build options for ROOT 6.22</summary>

{% include build_options_v6-22-00-patches.md %}

</details>

<details markdown="1"><summary markdown="span">build options for ROOT 6.24</summary>

{% include build_options_v6-24-00-patches.md %}

</details>

### Relevant CMake variables
Here are some of the CMake variables that are used often, along with a brief explanation and ROOT-specific notes. For full documentation, check the CMake docs or execute `cmake --help-variable VARIABLE_NAME`.

| Variable | Type | Explanation |
|----------|-------|---------------|
| CMAKE_BUILD_TYPE | STRING | Sets the build type for make based generators. Possible values are Release, MinSizeRel, Debug, RelWithDebInfo and Optimized. On systems like Visual Studio the user sets the build type with the IDE settings. Default is  RelWithDebInfo |
| CMAKE_INSTALL_PREFIX | PATH | Path where ROOT will be installed if make install is invoked or the “INSTALL” target is built. |
| CMAKE_C_FLAGS | STRING | Extra flags to use when compiling C source files. |
| CMAKE_CXX_FLAGS | STRING | Extra flags to use when compiling C++ source files.|
| BUILD_SHARED_LIBS | BOOL | Flag indicating if shared libraries will be built. Its default value is ON. |
| CMAKE_Fortran_COMPILER | PATH | Full path to the Fortran compiler. Alternatively you can specify the environment variable FC before invoking cmake |
| CMAKE_C_COMPILER | PATH | Full path to the C compiler.  Alternatively you can specify the environment variable CC before invoking cmake |
| CMAKE_CXX_COMPILER | PATH | Full path to the C++ compiler.  Alternatively you can specify the environment variable CXX before invoking cmake |
| CMAKE_INSTALL_BINDIR | PATH | Install destination for user executables (bin) |
| CMAKE_INSTALL_LIBDIR | PATH | Install destination for object code libraries (lib or lib64 or lib/<multiarch-tuple> on Debian) |
| CMAKE_INSTALL_INCLUDEDIR | PATH | Install destination for C/C++ header files (include) |
| CMAKE_INSTALL_SYSCONFDIR | PATH | Install destination for read-only single-machine data (etc) |
| CMAKE_INSTALL_MANDIR | PATH | Install destination for  man documentation (DATAROOTDIR/man) |
| CMAKE_INSTALL_DATAROOTDIR | PATH | Install directory for read-only architecture-independent data (share) |
| CMAKE_INSTALL_DATADIR | PATH | Install destination read-only architecture-independent data (DATAROOTDIR/root) |
| CMAKE_INSTALL_MACRODIR | PATH | Install destination for ROOT macros (DATAROOTDIR/macros) |
| CMAKE_INSTALL_ICONDIR | PATH | Install destination for icons (DATAROOTDIR/icons) |
| CMAKE_INSTALL_FONTDIR | PATH | Install destination for fonts (DATAROOTDIR/fonts) |
| CMAKE_INSTALL_SRCDIR | PATH | Install destination for sources (DATAROOTDIR/src) |
| CMAKE_INSTALL_DOCDIR | PATH | Install destination for documentation root (DATAROOTDIR/doc/root) |
| CMAKE_INSTALL_TESTDIR | PATH | Install destination for tests (DOCDIR/test) |
| CMAKE_INSTALL_TUTDIR | PATH | Install destination for tutorials (DOCDIR/tutorials) |
| CMAKE_INSTALL_ACLOCALDIR | PATH | Install destination for locale-dependent data (DATAROOTDIR/aclocal) |
| CMAKE_INSTALL_ELISPDIR | PATH | Install destination for lisp files (DATAROOTDIR/emacs/site-lisp) |
| CMAKE_INSTALL_CMAKEDIR | PATH | Install destination for cmake modules (DATAROOTDIR/cmake) |

### Additional variables
A number of additional variables to control the way ROOT is built.

| Variable | Type | Explanation |
|----------|-------|---------------|
| LLVM_BUILD_TYPE | STRING | Build type for the bundled LLVM. It is used to set the CMAKE_BUILD_TYPE for the /interpreter/ subdirectory |

### External libraries

ROOT requires a number of external libraries that the CMake system needs to locate. The list of externals depends on the build options that have been enabled. CMake will look for these third party products at a number of standard places in your system but the user can influence the search by setting some environment variables before invoking the CMake command or by setting package specific CMake variables to their exact location.

The actual cached values used by CMake for the exact location of libraries and include files of the used external libraries can be inspected and modified using the `ccmake` utility.

| Package Name | Variable | Type | Description |
|-------------------|-----------|------|---------------|
| AfterImage | AFTERIMAGE_CONFIG_EXECUTABLE | PATH | Full path to afterimage-config program |
| Alien | ALIEN_DIR | PATH | Directory where Alien is installed (-DALIEN_DIR=$ALIEN_DIR/api)  |
| Bonjour | BONJOUR_INCLUDE_DIR |  PATH | Directory where to find dns_sd.h |
|         | AVAHI_INCLUDE_DIR |  PATH | Directory where avahi-client/client.h (Linux) |
|         | AVAHI_client_LIBRARY |  PATH | Full path to libavahi-client.so library |
| CASTOR  | CASTOR_DIR |  PATH | Environment variable to the Castor installation. |
|         | CASTOR_INCLUDE_DIR |  PATH | Path to rfio_api.h file |
|         | CASTOR_shift_LIBRARY |  PATH | Full path to shift library |
| CFITSIO | CFITSIO |  PATH | Installation of CFITSIO |
|         | CFITSIO_INCLUDE_DIR |  PATH | Directory where to find fitsio.h |
|         | CFITSIO_LIBRARIES |  PATH | Full path to cfitsio library |
| FFTW | FFTW_DIR |  PATH | Installation of FFTW |
|      | FFTW_INCLUDE_DIR |  PATH | Directory where to find fftw3.h |
|      | FFTW_LIBRARY |  PATH | Full path to fftw3 library |
| GraphViz | GRAPHVIZ_DIR |  PATH | Installation of GraphViz |
|          | GRAPHVIZ_INCLUDE_DIR |  PATH | Directory where to find graphviz/graph.h |
|          | GRAPHVIZ_CDT_LIBRARY |  PATH | Full path to cdt library |
|          | GRAPHVIZ_GVC_LIBRARY |  PATH | Full path to gvc library |
|          | GRAPHVIZ_GRAPH_LIBRARY |  PATH | Full path to graph library |
|          | GRAPHVIZ_PATHPLAN_LIBRARY |  PATH | Full path to pathplan library |
| GSL  | GSL_ROOT_DIR |  PATH | Environment variable to the GSL installation. |
|          | GSL_CONFIG_EXECUTABLE |  PATH | Full path to gsl-config program |
| Kerberos 5 | KRB5_DIR |  PATH | Installation of Kerberos5 |
|            | KRB5_INCLUDE_DIR |  PATH | Directory where to find krb5.h |
|            | KRB5_MIT_LIBRARY |  PATH | Full path to k5crypto library |
|            | KRB5_LIBRARY |  PATH | Full path to krb5 library |
|            | KRB5_INIT |  PATH | Full path to kinit program |
| LZMA       | LZMA_DIR |  PATH | Installation of LZMA |
|            | LZMA_INCLUDE_DIR |  PATH | Directory where to find lzma.h |
|            | LZMA_LIBRARY |  PATH | Full path to lzma library |
| MySQL         | MYSQL_DIR |  PATH | Installation of MySQL |
|               | MYSQL_CONFIG_EXECUTABLE |  PATH | Full path to mysql_config program |
| ODBC | ODBC_DIR |  PATH | Installation of ODBC |
|      | ODBC_INCLUDE_DIR |  PATH | Directory where to find sqlext.h |
|      | ODBC_LIBRARY |  PATH | Full path to libodbc library |
| Oracle | ORACLE_DIR |  ENV | Environment variable to the Oracle installation. |
|        | ORACLE_INCLUDE_DIR |  PATH | Location where to find  oci.h     |
|        | ORACLE_LIBRARY_OCCI |  PATH | Full path to  libocci  library  |
|        | SQLPLUS_EXECUTABLE |  PATH | Full path to the  sqlplus  program |
| OpenGL | OPENGL_INCLUDE_DIR |  PATH | Location where to find  GL/gl.h     |
|        | OPENGL_gl_LIBRARY |  PATH | Full path to  GL  library  |
| PCRE         | PCRE_CONFIG_EXECUTABLE |  PATH | Full path to pcre_config program |
| PostgreSQL   | POSTGRESQL_INCLUDE_DIR |  PATH | Directory where to find l ibpq-fe.h |
|              | POSTGRESQL_LIBRARY |  PATH | Full path to pq library |
| Pythia 6 | PYTHIA6_LIBRARY |  PATH | Full path to pythia6 library |
| Pythia 8 | PYTHIA8_DIR | ENV | Environment variable pointing to installation of Pythia8 |
|          | PYTHIA8_INCLUDE_DIR |  PATH | Directory where to find Pythia8/Pythia.h |
|          | PYTHIA8_LIBRARY |  PATH | Full path to Pythia8 library |
| Python | PYTHON_EXECUTABLE |  PATH | Python interpreter executable |
|        | PYTHON_INCLUDE_DIR |  PATH | Directory where to find  Python.h |
|        | PYTHON_LIBRARY |  PATH | Full path to  Python  library |
| XROOTD | XROOTD_ROOT_DIR | PATH | Directory where to find XROOTD |
