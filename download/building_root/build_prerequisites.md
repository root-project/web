---
title: Build Prerequisites
layout: single
sidebar:
  nav: "download"
toc: true
toc_sticky: true
---


The page lists the prerequisite packages that need to be installed on the different platforms to be able to configure and to build basic ROOT. If more advanced ROOT plugins are required look at the  `cmake` or `./configure` output and add the desired third party packages before configuring again.

- [Fedora family](#fedora)
- [Ubuntu family](#ubuntu)
- [OpenSUSE family](#opensuse)
- [Mac OS X family](#macosx)
- [Windows family](#windows)
- [AIX family](#aix)

## Fedora 18, 19 and 20; Scientific Linux 5, 6; CentOS 6, 7

*   **git:** for /usr/bin/git
*   **make:** for /usr/bin/make
*   **cmake:** for /usr/bin/cmake
*   **gcc-c++:** for  for /usr/bin/g++ (ROOT 6 requires g++ 4.8 or clang 3.4; for SLC5/SLC6)
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libX11-devel:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libXpm-devel:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libXft-devel:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libXext-devel:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **python:**  (ROOT6 requires version >= 2.7)
*   **redhat-lsb-core:**   needed by some tests (tutorials) using lsb_release and some CDash scripts

Most common optional packages:

*   **gcc-gfortran:** for /usr/bin/gfortran
*   **openssl-devel:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so
*   **pcre-devel:** for /usr/bin/pcre-config
*   **mesa-libGL-deve**l: for /usr/include/GL/gl.h and for /usr/lib[64]/libGL.so
*   **mesa-libGLU-devel**: for /usr/include/GL/glu.h and for /usr/lib[64]/libGLU.so
*   **glew-devel (may need enabling of the [EPEL](http://fedoraproject.org/wiki/EPEL) additional software repository)**: for /usr/include/GL/glew.h and for /usr/lib[64]/libGLEW.so
*   **ftgl-devel:** for /usr/bin/pkg-config
*   **mysql-devel:** for /usr/bin/mysql_config
*   **fftw-devel:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **cfitsio-devel:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **graphviz-devel:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **avahi-compat-libdns_sd-devel:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **libldap-dev:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python-devel:** for /usr/include/python2.7/Python.h and for /usr/lib/libpython2.7.so
*   **python-numpy-devel:** needed for PyMVA
*   **libxml2-devel:** for /usr/bin/xml2-config
*   **gsl-static:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a. On Fedora 16 use **gsl-devel**.
*   **r-base:** needed for R bindings. In addition R packages **Rcpp** and **RInside** need to be installed.

Use "<tt>yum install</tt> _package_" or use the graphical "Add/Remove Software" program.

Required packages:
~~~
sudo yum install git cmake gcc-c++ gcc binutils \
libX11-devel libXpm-devel libXft-devel libXext-devel
~~~

Optional packages:

~~~
sudo yum install gcc-gfortran openssl-devel pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel \
avahi-compat-libdns_sd-devel libldap-dev python-devel \
libxml2-devel gsl-static
~~~

## Ubuntu 10, 12 , 14 and 16

*   **git:** for /usr/bin/git
*   **dpkg-dev**  for dpkg-architecture (needed by configure to locate system libraries starting from 11)
*   **cmake:** for /usr/bin/cmake
*   **g++:** for /usr/bin/g++  (ROOT 6 requires g++ 4.8 or clang 3.4  for how to install g++ 4.8 on Ubuntu 12 see [ubuntuhandbook](http://ubuntuhandbook.org/index.php/2013/08/install-gcc-4-8-via-ppa-in-ubuntu-12-04-13-04/))
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libx11-dev:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libxpm-dev:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libxft-dev:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libxext-dev:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **libpng:** png library
*   **libjpeg:** jpeg library
*   **python:** (ROOT6 requires version >= 2.7)

Most common optional packages:

*   **gfortran:** for /usr/bin/gfortran
*   **openssl-dev** or **libssl-dev:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so
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

Use `sudo apt-get install _package_` or use the graphical "Synaptic Package Manager" program.

Required packages:

~~~
sudo apt-get install git dpkg-dev cmake g++ gcc binutils libx11-dev libxpm-dev \
libxft-dev libxext-dev python
~~~

Optional packages:

~~~
sudo apt-get install gfortran libssl-dev libpcre3-dev \
xlibmesa-glu-dev libglew1.5-dev libftgl-dev \
libmysqlclient-dev libfftw3-dev libcfitsio-dev \
graphviz-dev libavahi-compat-libdnssd-dev \
libldap2-dev python-dev libxml2-dev libkrb5-dev \
libgsl0-dev libqt4-dev
~~~

## openSUSE Leap 15 and Thumblweed

Minimal set:
```
sudo zypper install git bash cmake gcc-c++ gcc binutils python libXpm-devel
xorg-x11-devel libXext-devel
```

Most common optional packages:

```
sudo zypper install gcc-fortran libopenssl-devel pcre-devel Mesa glew-devel
pkgconf-pkg-config libmariadb-devel fftw3-devel cfitsio-devel graphviz-devel
libdns_sd avahi-compat-mDNSResponder-devel openldap2-devel python-devel libxml2-devel
krb5-devel gsl-devel chromium libQt5Gui-devel libqt5-qtwebengine-devel
```

## MacOS X

*   **Xcode developer package:** for make, g++, gcc, ld, etc.  Xcode is found on the MacOS X installation DVD or in the Mac App store.
    install command line tools through the XCode preferences and/or running in a terminal  `xcode-select --install`
*   **[Xquartz](http://xquartz.macosforge.org/):** for the X11 server (not needed in case the version with Cocoa native backend is build)
*   Other dependencies can be installed from [MacPorts](http://www.macports.org/)

Most common optional packages:

*   **gcc 4.x from [MacPorts](http://www.macports.org):** for /opt/local/bin/gfortran
    or alternatively use this [gfortran.dmg](http://r.research.att.com/tools/)

Alternatively ROOT can be installed directly from [MacPort](http://www.macports.org) with the command:
"<tt>sudo port install root</tt>"

## Windows

### ROOT 5 (deprecated)

If you are using Windows make sure you have installed Microsoft Visual C++ (e.g., the
[no-cost edition](http://www.microsoft.com/express/vc/){:target="_blank"}) plus `CMake`.
The `CMake` build will work directly **without the need** to install
[cygwin](http://cygwin.com){:target="_blank"} as it was required previously before the adaption of `CMake`.

### ROOT 6

*   **[Git for Windows](https://git-scm.com/download/win)**
*   **[CMake](https://cmake.org/download/)** (version >= 16.3)
*   **[Microsoft Visual C++](https://visualstudio.microsoft.com/)** (ROOT6 requires at least Visual Studio 2019 version 16.1). The **Community** version is free, fully-featured for students, open-source contributors, and individuals.
*   **[Python](https://python.org)** (ROOT6 requires version >= 2.7)

> **Note**
>
> ROOT 6 on Windows still has several known issues and missing features we are currently working on.

## AIX 5, 6 and 7

*   **git:** for /usr/bin/git
*   **bash:** for /usr/bin/bash
*   **make:** for /usr/linux/bin/make
*   **pkg-config:** for fontconfig, freetype2, xft and xrender installation
*   **fontconfig:** for /usr/lib/libfontconfig.a
*   **fontconfig-devel:** for /usr/include/fontconfig
*   **freetype2:** for /usr/lib/libfreetype.a needed by xft
*   **freetype2-devel:** for /usr/include/freetype2
*   **libxml2:** for /usr/lib/libxml2.a
*   **libxml2-devel:** for /usr/bin/xml2-config
*   **xft:** for /usr/include/X11/Xft/Xft.h and /usr/lib/libXft.a
*   **xrender:** for /opt/freeware/include/X11/extensions/Xrender.h and /usr/lib/libXrender.a
*   **zlib:** for resolving dependencies
*   **zlib-devel:** for resolving dependencies
*   **expat:** for resolving dependencies

Use `rpm -Uvh _package_` to install the above packages from [AIX Toolbox for Linux Applications](http://www-03.ibm.com/systems/power/software/aix/linux/toolbox/alpha.html). Subversion can be obtained from [collab.net](http://www.open.collab.net/downloads/community/).
