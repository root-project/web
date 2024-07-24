---
title: Dependencies
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "install"
---

The page lists the prerequisite packages that need to be installed on the different platforms to be able to configure, build and run ROOT.

The table of content can be used to quickly jump to your operating system.

For a more comprehensive list of dependencies depending on the operating system version,
we recommend checking the [docker image repository](https://github.com/root-project/root-docker/tree/master), under the file `packages` of your corresponding system

## Supported compilers

### From v6.30:
- C++17 support is required
- GCC 8 or later is supported
- Clang 6 or later is supported

### From v6.26:
- C++14 support is required
- GCC 5 or later is supported
- Clang 6 or later is supported

### Until v6.24:
- C++11 support is required
- GCC 4.8 or later is supported
- Clang 3.4 or later is supported

## Fedora, Scientific Linux and CentOS

Use `yum install <package>` or the graphical "Add/Remove Software" program.

### Required packages

*   **make:** for /usr/bin/make
*   **cmake:** for /usr/bin/cmake
*   **gcc-c++:** for  for /usr/bin/g++
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libX11-devel:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libXpm-devel:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libXft-devel:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libXext-devel:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **python:** (**python38** on CentOS 8)
*   **openssl-devel:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so

As a one-liner for Fedora 33, CentOS 8:

```bash
sudo yum install git make cmake gcc-c++ gcc binutils \
libX11-devel libXpm-devel libXft-devel libXext-devel python openssl-devel \
xrootd-client-devel xrootd-libs-devel
```

### Most common optional packages

*   **gcc-gfortran:** for /usr/bin/gfortran
*   **pcre-devel:** for /usr/bin/pcre-config
*   **mesa-libGL-devel:** for /usr/include/GL/gl.h and for /usr/lib[64]/libGL.so
*   **mesa-libGLU-devel:** for /usr/include/GL/glu.h and for /usr/lib[64]/libGLU.so
*   **mysql-devel:** for /usr/bin/mysql_config
*   **fftw-devel:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **libuuid-devel** required during the build. More [info here](https://root-forum.cern.ch/t/cannot-compile-root-v6-22-08-with-debug-symbols-and-all-options/44242).
*   **openldap-devel:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python3-numpy:** needed for PyMVA
*   **libxml2-devel:** for /usr/bin/xml2-config
*   **gsl-devel:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a
*   **readline-devel:** required at the linking stage.
*   RHEL based distributions (CentOS, Scientific Linux) will require enabling of the [EPEL](https://fedoraproject.org/wiki/EPEL) additional software repository and in order to install packages below:
*   **ftgl-devel:** for /usr/bin/pkg-config
*   **cfitsio-devel:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **R-devel, R-Rcpp-devel, R-RInside-devel:** needed for R bindings.
*   RHEL 8 based distributions (CentOS 8) will require enabling of the PowerTools](https://wiki.centos.org/FAQ/CentOS8/UnshippedPackages) additional software repository and in order to install packages below:
*   **avahi-compat-libdns_sd-devel:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **glew-devel:** for /usr/include/GL/glew.h and for /usr/lib[64]/libGLEW.so
*   **graphviz-devel:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **qt5-qtwebengine-devel:** required for **qt5web** component

As a one-liner for Fedora 33:
```bash
sudo yum install gcc-gfortran pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel libuuid-devel \
avahi-compat-libdns_sd-devel openldap-devel python-devel python3-numpy \
libxml2-devel gsl-devel readline-devel qt5-qtwebengine-devel \
R-devel R-Rcpp-devel R-RInside-devel
```

CentOS 8 requires adding the EPEL repository. Additionally, some packages in CentOS 8 [were moved to the PowerTools repository](https://root-forum.cern.ch/t/root-dependencies-can-not-install-in-centos8/42010). Therefore it needs to be enabled as well:
```bash
sudo yum install epel-release
sudo yum config-manager --set-enabled powertools
sudo yum install gcc-gfortran pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel libuuid-devel \
avahi-compat-libdns_sd-devel openldap-devel python-devel python3-numpy \
libxml2-devel gsl-devel readline-devel qt5-qtwebengine-devel \
R-devel R-Rcpp-devel R-RInside-devel
```

## Ubuntu and other Debian-based distributions

Use `sudo apt-get install <package>` or use the graphical "Synaptic Package Manager" program.

### Required packages

*   **dpkg-dev**  for dpkg-architecture (needed by configure to locate system libraries)
*   **cmake:** for /usr/bin/cmake
*   **g++:** for /usr/bin/g++
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libx11-dev:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libxpm-dev:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libxft-dev:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libxext-dev:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **libpng:** png library
*   **libjpeg:** jpeg library
*   **python3:** (see [here](https://root.cern/install/build_from_source/#root-python-and-pyroot) for info on supported Python versions)
*   **libssl-dev:** for `/usr/include/openssl/pem.h`, `/usr/lib/libssl.so` and `/usr/lib/libcrypto.so` (on older systems the package might be called `openssl-dev`)
*   **libtbb-dev:** TBB parallelism library
*   **libvdt-dev:** Vectorization library, available starting from Ubuntu 23.10, otherwise builtin is used.

As a one-liner:

```bash
sudo apt-get install binutils cmake dpkg-dev g++ gcc libssl-dev git libx11-dev \
libxext-dev libxft-dev libxpm-dev python3 libtbb-dev libvdt-dev
```

### Most common optional packages

*   **gfortran:** for /usr/bin/gfortran
*   **libpcre3-dev:** for /usr/bin/pcre-config
*   **libglu1-mesa-dev:** for /usr/include/GL/gl.h and for /usr/lib/libGL.so
*   **libglew-dev:** for /usr/include/GL/glew.h and for /usr/lib/libGLEW.so
*   **libftgl-dev:** for /usr/bin/pkg-config
*   **libmysqlclient-dev:** for /usr/bin/mysql_config
*   **libfftw3-dev:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **libcfitsio-dev:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **libgraphviz-dev:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **libavahi-compat-libdnssd-dev:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **libldap2-dev:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python3-dev:** for /usr/include/python3.10/Python.h and for /usr/lib/libpython3.10.so
*   **python3-numpy:** needed for PyMVA
*   **libxml2-dev:** for /usr/bin/xml2-config
*   **libkrb5-dev:** for /usr/include/krb5.h and for /usr/lib/libkrb5.so
*   **libgsl-dev:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a
*   **r-base:** needed for R bindings. In addition R packages **Rcpp** and **RInside** need to be installed.
*   **qtwebengine5-dev:** required for **qt5web** component
*   **nlohmann-json3-dev:** required for **ROOTEve**

As a one-liner:

```bash
sudo apt-get install gfortran libpcre3-dev \
libglu1-mesa-dev libglew-dev libftgl-dev \
libfftw3-dev libcfitsio-dev libgraphviz-dev \
libavahi-compat-libdnssd-dev libldap2-dev \
 python3-dev python3-numpy libxml2-dev libkrb5-dev \
libgsl-dev qtwebengine5-dev nlohmann-json3-dev libmysqlclient-dev
```

On Debian, substitute `libmysqlclient-dev` with `libmariadb-dev`.

## openSUSE

Minimal set:

```bash
sudo zypper install bash binutils cmake gcc gcc-c++ git libXext-devel \
libXft-devel libXpm-devel python xrootd-client-devel xrootd-libs-devel
```

Most common optional packages:

```bash
sudo zypper install gcc-fortran pcre-devel Mesa glew-devel libpng16-devel \
pkgconf-pkg-config libmariadb-devel fftw3-devel cfitsio-devel graphviz-devel \
libdns_sd avahi-compat-mDNSResponder-devel openldap2-devel python-devel python-numpy \
libxml2-devel krb5-devel gsl-devel chromium libQt5Gui-devel libqt5-qtwebengine-devel
```

## MacOS

* **Xcode developer package:** Xcode is found on the Mac App store. Install command line tools through the XCode preferences and/or running in a terminal  `xcode-select --install`

## Windows

### ROOT 6

*   **[CMake](https://cmake.org/download/)** (version >= 16.3)
*   **[Microsoft Visual C++](https://visualstudio.microsoft.com/)** (ROOT6 requires at least Visual Studio 2019 version 16.1). The **Community** version is free, fully-featured for students, open-source contributors, and individuals.
The **Desktop Development With C++** workload is also needed. You must manually activate it by clicking on the checkbox available on the installation menu of **Visual Studio Installer**.
*   **[Python](https://python.org)** (see [here](https://root.cern/install/build_from_source/#root-python-and-pyroot) for info on supported Python versions). If you download a binary release, you need to install the exact same Python version used for the compilation of the binary.


### ROOT 5 (deprecated)

If you are using Windows make sure you have installed Microsoft Visual C++ (e.g., the
[no-cost edition](https://www.microsoft.com/express/vc/){:target="_blank"}) plus `CMake`.
The `CMake` build will work directly **without the need** to install
[cygwin](https://cygwin.com){:target="_blank"} as it was required previously before the adaption of `CMake`.
