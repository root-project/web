---
title: Building ROOT from source
layout: single
toc: true
toc_sticky: true
---

## Introduction

ROOT uses the [CMake](http://www.cmake.org/){:target="\_blank"} cross-platform build-generator tool as the
primary build system.<br> CMake does not build the project, it generates the files needed by
your build tool (GNU make, Ninja, Visual Studio, etc) for building ROOT.

If you are really anxious about getting a functional ROOT build, go to the [Quick Start](#quick-start) section.<br>
If you are a CMake novice, start on [Basic CMake usage]({{'/install/basic_cmake' | relative_url}}) and then go back to the
[Quick Start](#quick-start).
<br>The [Options](#build-options) and the [Variables](#variables) section is a reference for customizing your build. If you already have experience with CMake, this is the recommended starting point.

## Preparation
Make sure you have installed all [required dependencies]({{'/install/dependencies' | relative_url}}) before building ROOT.

## Quick start

The following are the basic instructions for UNIX-like systems. We will use the command-line, non-interactive CMake interface.

1. Download and unpack the [ROOT sources for a specific release]({{'/install/binary_releases' | relative_url}}) (make sure to download the "Source distribution" and not a binary distribution) or simply clone ROOT's git repository and check out the branch you would like to build, for example:
```bash
# substitute `v6-20-00-patches` with the patches branch of the latest release
$ git clone --branch v6-20-00-patches https://github.com/root-project/root.git root_src
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
CMake will detect your development environment, perform a series of test and generate the files required for building ROOT. CMake will use default values for all build parameters. See the [Build Options](#options) and [Variables](#variables) sections for fine-tuning your build
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

> TODO: explain how ROOT features/STL backports interact with C++ standards and how to pick a standard

## Enabling experimental features, aka ROOT7

New and improved versions of standard ROOT components are being implemented under codename ROOT7.

Turning on C++14 or higher using `-DCMAKE_CXX_STANDARD={14,17,...}` will automatically enable ROOT7.
Alternatively, you can explicitly enable ROOT7 with `-Droot7=ON`, which will in turn set the standard to C++14 if a
value was not already specified by the user.

## Building ROOT with CUDA suppot

> TODO: explain how to add support for CUDA, what build options are important...

## Built-in dependencies and external dependencies

> TODO: explain how built-in work, which libraries are available as built-in (or how to find out), what the behavior is, mention fail-on-missing, etc.

## System-wide installation

> TODO: explain how to install ROOT as a system package, i.e. using gnuinstall and installing in /opt

## All build options

Each build option is a boolean variable that can be turned ON or OFF. The current value is recorded in the CMake cache (CMakeCache.txt file on the build directory) and therefore it is not needed to be specified on the cmake command each time. Please note that some of the options might be turned OFF automatically for some platforms or if the required external library or component can not be satisfied. The user can view and edit the full list of options using the `ccmake` utility or `cmake-gui` for Windows. Note that on Windows some of the options are not yet implemented.

The user can set any CMake variable or option that controls the build process from the `cmake` command line. The command using the option `-D <var>:<type>=<value>` creates an entry in the CMake cache. This is the list of the ROOT-specific CMake options:

| option name  | default value  | description |
|----------------|-----------------|---------------|
| afdsmgrd | OFF | Dataset manager for PROOF-based analysis facilities |
| afs | OFF | AFS support, requires AFS libs and objects |
| alien | ON | AliEn support, requires libgapiUI from ALICE |
| all | OFF | Enable all optional components |
| asimage | ON | Image processing support, requires libAfterImage |
| astiff | ON | Include tiff support in image processing |
| bonjour | ON | Bonjour support, requires libdns_sd and/or Avahi |
| builtin_afterimage | ON | Built included libAfterImage, or use system libAfterImage |
| builtin_fftw3 | OFF | Built the FFTW3 library internally (downloading tarfile from the Web) (ROOT 6 only)|
| builtin_ftgl | ON | Built included libFTGL, or use system libftgl |
| builtin_freetype | OFF | Built included libfreetype, or use system libfreetype |
| builtin_glew | ON | Built included libGLEW, or use system libGLEW |
| builtin_pcre | OFF | Built included libpcre, or use system libpcre |
| builtin_zlib | OFF | Built included libz, or use system libz |
| builtin_lzma | OFF | Built included liblzma, or use system liblzma |
| builtin_davix | OFF | Built the Davix library internally (downloading tarfile from the Web) |
| builtin_gsl | OFF | Built the GSL library internally (downloading tarfile from the Web) |
| builtin_cfitsio | OFF | Built the FITSIO library internally (downloading tarfile from the Web) |
| builtin_xrootd | OFF | Built the XROOTD internally (downloading tarfile from the Web) |
| builtin_llvm | ON | Built the LLVM internally |
| builtin_tbb | OFF | Built the TBB internally |
| cxx11 | ON | Build using C++11 compatible mode, requires gcc > 4.7.x or clang |
| cxx14 | OFF | Build using C++14 compatible mode, requires gcc > 4.9.x or clang |
| cxx17 | OFF | Build using C++17 compatible mode, requires gcc > 7.1.x or clang |
| libcxx | OFF | Build using libc++, requires cxx11 option (MacOS X only, for the time being) |
| castor | ON | CASTOR support, requires libshift from CASTOR >= 1.5.2 |
| ccache | OFF | Enable ccache usage for speeding up builds |
| chirp | ON | Chirp support (Condor remote I/O), requires libchirp_client |
| cling | ON | Enable new CLING C++ interpreter |
| cocoa | * | Use native Cocoa/Quartz graphics backend (MacOS X only) |
| davix | * | DavIx library for HTTP/WEBDAV access |
| dcache | ON | dCache support, requires libdcap from DESY |
| exceptions | ON | Turn on compiler exception handling capability |
| explicit link | * | Explicitly link with all dependent libraries |
| fail-on-missing | OFF | Fail the configure step if a required external package is missing|
| fftw3 | ON | Fast Fourier Transform support, requires libfftw3 |
| fitsio | ON | Read images and data from FITS files, requires cfitsio |
| fortran | * | Enable the Fortran components of ROOT |
| gdml | * | GDML writer and reader |
| geocad | OFF | ROOT-CAD Interface |
| genvector | ON | Build the new libGenVector library |
| gfal | ON | GFAL support, requires libgfal |
| glite | ON | gLite support, requires libglite-api-wrapper v.3 from GSI (https://subversion.gsi.de/trac/dgrid/wiki) |
| globus | OFF | Globus authentication support, requires Globus toolkit |
| gminimal | OFF | Do not automatically search for support libraries, but include X11 |
| gnuinstall | OFF | Perform installation following the GNU guidelines |
| gsl_shared | OFF | Enable linking against shared libraries for GSL (default no) |
| gviz | ON | Graphs visualization support, requires graphviz |
| hdfs | ON | HDFS support; requires libhdfs from HDFS >= 0.19.1 |
| http | * | HTTP Server support |
| imt | ON | Enable ROOT Multithreading Capabilities  (default ON from version 6.10)|
| jemalloc | OFF | Using the jemalloc allocator |
| krb5 | ON | Kerberos5 support, requires Kerberos libs |
| ldap | ON | LDAP support, requires (Open)LDAP libs |
| mathmore | ON | Build the new libMathMore extended math library, requires GSL (vers. >= 1.8) |
| memstat | * | A memory statistics utility, helps to detect memory leaks |
| minimal | OFF | Do not automatically search for support libraries |
| minuit2 | * | Build the new libMinuit2 minimizer library |
| monalisa | ON | Monalisa monitoring support, requires libapmoncpp |
| mt | OFF | Multi-threading support (deprecated and unused since ROOT v6.12) |
| mysql | ON | MySQL support, requires libmysqlclient |
| odbc | ON | ODBC support, requires libiodbc or libodbc |
| opengl | ON | OpenGL support, requires libGL and libGLU |
| oracle | ON | Oracle support, requires libocci |
| pgsql | ON | PostgreSQL support, requires libpq |
| pythia6 | ON | Pythia6 EG support, requires libPythia6 |
| pythia6_nolink | OFF | Delayed linking of Pythia6 library |
| pythia8 | ON | Pythia8 EG support, requires libPythia8 |
| python | ON | Python ROOT bindings, requires python >= 2.2 |
| qt | | Qt graphics backend, requires libqt >= 4.8 |
| qtgsi | * | GSI's Qt integration, requires libqt >= 4.8 |
| roofit | * | Build the libRooFit advanced fitting package |
| root7 | OFF | ROOT 7 support ([read more](/root-7)) |
| roottest | OFF | Include roottest in the test suit, if roottest exists in root or if it is a sibling directory |
| ruby | OFF | Ruby ROOT bindings, requires ruby >= 1.8 |
| r | OFF | R ROOT bindings, requires R, Rcpp and RInside |
| rfio | ON | RFIO support, requires libshift from CASTOR >= 1.5.2 |
| rpath | OFF | Set run-time library load path on executables and shared libraries (at installation area) |
| runtime_cxxmodules | OFF | Enable runtime c++ modules |
| sapdb | ON | MaxDB/SapDB support, requires libsqlod and libsqlrte |
| shadowpw | ON | Shadow password support |
| shared | ON | Use shared 3rd party libraries if possible |
| soversion | OFF | Set version number in sonames (recommended) |
| sqlite | ON | SQLite support, requires libsqlite3 |
| srp | ON | SRP support, requires SRP source tree |
| ssl | ON | SSL encryption support, requires openssl |
| tbb | OFF | TBB multi-threading support, requires TBB |
| table | * | Build libTable contrib library |
| tcmalloc | OFF | Using the tcmalloc allocator |
| testing | OFF | Enable test suit of ROOT with CTest |
| thread | ON | Using thread library (cannot be disabled) |
| tmva | ON | Build TMVA multi variate analysis library |
| unuran | * | UNURAN - package for generating non-uniform random numbers |
| vc | * | Vc adds a few new types for portable and intuitive SIMD programming |
| vdt | ON | VDT adds a set of fast and vectorisable mathematical functions |
| winrtdebug | OFF | Link against the Windows debug runtime library |
| xft | ON | Xft support (X11 antialiased fonts) |
| xml | ON | XML parser interface |
| xrootd | ON | Build xrootd file server and its client (if supported) |
| x11 | * | X11 support |

> \* The default value for these options is platform dependent.

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

> TODO: do users need to know about the actual CMake variables?

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
