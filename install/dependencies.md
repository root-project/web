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

## Fedora, Scientific Linux and CentOS

Use `yum install <package>` or the graphical "Add/Remove Software" program.

### Required packages

*   **make:** for /usr/bin/make
*   **cmake3:** for /usr/bin/cmake3
*   **gcc-c++:** for  for /usr/bin/g++ (ROOT 6 requires g++ 4.8 or clang 3.4; for SLC5/SLC6)
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libX11-devel:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libXpm-devel:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libXft-devel:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libXext-devel:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **python:**  (ROOT6 requires version >= 2.7)
*   **openssl-devel:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so

As a one-liner:

```bash
sudo yum install git cmake3 gcc-c++ gcc binutils \
libX11-devel libXpm-devel libXft-devel libXext-devel openssl-devel
```

### Most common optional packages

*   **redhat-lsb-core:** needed by some tests using lsb_release
*   **gcc-gfortran:** for /usr/bin/gfortran
*   **pcre-devel:** for /usr/bin/pcre-config
*   **mesa-libGL-deve**l: for /usr/include/GL/gl.h and for /usr/lib[64]/libGL.so
*   **mesa-libGLU-devel**: for /usr/include/GL/glu.h and for /usr/lib[64]/libGLU.so
*   **glew-devel (may need enabling of the [EPEL](https://fedoraproject.org/wiki/EPEL) additional software repository)**: for /usr/include/GL/glew.h and for /usr/lib[64]/libGLEW.so
*   **ftgl-devel:** for /usr/bin/pkg-config
*   **mysql-devel:** for /usr/bin/mysql_config
*   **fftw-devel:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **cfitsio-devel:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **graphviz-devel:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **avahi-compat-libdns_sd-devel:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **openldap-devel:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python-devel:** for /usr/include/python2.7/Python.h and for /usr/lib/libpython2.7.so
*   **python-numpy-devel:** needed for PyMVA
*   **libxml2-devel:** for /usr/bin/xml2-config
*   **gsl-devel:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a
*   **r-base:** needed for R bindings. In addition R packages **Rcpp** and **RInside** need to be installed.

As a one-liner:

```bash
sudo yum install gcc-gfortran pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel \
avahi-compat-libdns_sd-devel openldap-devel python-devel \
libxml2-devel gsl-devel
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
*   **python:** (ROOT6 requires version >= 2.7)
*   **openssl-dev** or **libssl-dev:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so

As a one-liner:

```bash
sudo apt-get install dpkg-dev cmake g++ gcc binutils libx11-dev libxpm-dev \
libxft-dev libxext-dev python openssl-dev
```

On Debian, substitute `openssl-dev` with `libssl-dev`.

### Most common optional packages

*   **gfortran:** for /usr/bin/gfortran
*   **libpcre3-dev:** for /usr/bin/pcre-config
*   **xlibmesa-glu-dev:** for /usr/include/GL/gl.h and for /usr/lib/libGL.so
*   **libglew1.5-dev:** for /usr/include/GL/glew.h and for /usr/lib/libGLEW.so
*   **libftgl-dev:** for /usr/bin/pkg-config
*   **libmysqlclient-dev:** for /usr/bin/mysql_config
*   **libfftw3-dev:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **libcfitsio-dev:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **graphviz-dev:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **libavahi-compat-libdnssd-dev:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **libldap2-dev:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python-dev:** for /usr/include/python2.7/Python.h and for /usr/lib/libpython2.7.so
*   **python-numpy-dev:** needed for PyMVA
*   **libxml2-dev:** for /usr/bin/xml2-config
*   **libkrb5-dev:** for /usr/include/krb5.h and for /usr/lib/libkrb5.so
*   **libgsl0-dev:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a
*   **libqt4-dev:** for /usr/include/qt4/Qt/qglobal.h and for /usr/lib/libQtCore.so
*   **r-base:** needed for R bindings. In addition R packages **Rcpp** and **RInside** need to be installed.

As a one-liner:

```bash
sudo apt-get install gfortran libpcre3-dev \
xlibmesa-glu-dev libglew1.5-dev libftgl-dev \
libmysqlclient-dev libfftw3-dev libcfitsio-dev \
graphviz-dev libavahi-compat-libdnssd-dev \
libldap2-dev python-dev libxml2-dev libkrb5-dev \
libgsl0-dev libqt4-dev
```

On Debian, substitute `libmysqlclient-dev` with `libmariadb-dev`.

## openSUSE

Minimal set:

```bash
sudo zypper install bash cmake gcc-c++ gcc binutils python libXpm-devel
xorg-x11-devel libXext-devel libopenssl-devel
```

Most common optional packages:

```bash
sudo zypper install gcc-fortran pcre-devel Mesa glew-devel
pkgconf-pkg-config libmariadb-devel fftw3-devel cfitsio-devel graphviz-devel
libdns_sd avahi-compat-mDNSResponder-devel openldap2-devel python-devel libxml2-devel
krb5-devel gsl-devel chromium libQt5Gui-devel libqt5-qtwebengine-devel
```

## MacOS

* **Xcode developer package:** Xcode is found on the Mac App store. Install command line tools through the XCode preferences and/or running in a terminal  `xcode-select --install`

## Windows

### ROOT 6

*   **[CMake](https://cmake.org/download/)** (version >= 16.3)
*   **[Microsoft Visual C++](https://visualstudio.microsoft.com/)** (ROOT6 requires at least Visual Studio 2019 version 16.1). The **Community** version is free, fully-featured for students, open-source contributors, and individuals.
*   **[Python](https://python.org)** (ROOT6 requires version >= 2.7)

> **Note**
>
> ROOT 6 on Windows is currently in beta, and has several known issues as well as missing features.
> We are currently working on making ROOT on Windows production-grade.

### ROOT 5 (deprecated)

If you are using Windows make sure you have installed Microsoft Visual C++ (e.g., the
[no-cost edition](https://www.microsoft.com/express/vc/){:target="_blank"}) plus `CMake`.
The `CMake` build will work directly **without the need** to install
[cygwin](https://cygwin.com){:target="_blank"} as it was required previously before the adaption of `CMake`.
