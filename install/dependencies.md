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

## Supported compilers

### From v6.30:
- C++17 support is required
- GCC 7 or later is supported
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
*   **cmake:** (**cmake3** on CentOS 7) for /usr/bin/cmake
*   **gcc-c++:** for  for /usr/bin/g++
*   **gcc:** for /usr/bin/gcc
*   **binutils:** for /usr/bin/ld
*   **libX11-devel:** for usr/include/X11/Xlib.h and for /usr/lib/libX11.so
*   **libXpm-devel:** for /usr/include/X11/xpm.h and for /usr/lib/libXpm.so
*   **libXft-devel:** for /usr/include/X11/Xft/Xft.h and for /usr/lib/libXft.so
*   **libXext-devel:** for /usr/include/X11/extensions/shape.h and for /usr/lib/libXext.so
*   **python:** (**python38** on CentOS 8) ROOT6 requires version >= 2.7
*   **openssl-devel:** for /usr/include/openssl/pem.h and /usr/lib/libssl.so and /usr/lib/libcrypto.so

As a one-liner for Fedora 33, CentOS 8:

```bash
sudo yum install git make cmake gcc-c++ gcc binutils \
libX11-devel libXpm-devel libXft-devel libXext-devel python openssl-devel
```

As a one-liner for Scientific Linux 7 and CentOS 7:

```bash
sudo yum install git make cmake3 gcc-c++ gcc binutils \
libX11-devel libXpm-devel libXft-devel libXext-devel python openssl-devel
```

### Most common optional packages

*   **redhat-lsb-core:** needed by some tests using lsb_release
*   **gcc-gfortran:** for /usr/bin/gfortran
*   **pcre-devel:** for /usr/bin/pcre-config
*   **mesa-libGL-devel:** for /usr/include/GL/gl.h and for /usr/lib[64]/libGL.so
*   **mesa-libGLU-devel:** for /usr/include/GL/glu.h and for /usr/lib[64]/libGLU.so
*   **mysql-devel:** for /usr/bin/mysql_config
*   **fftw-devel:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **libuuid-devel** required during the build. More [info here](https://root-forum.cern.ch/t/cannot-compile-root-v6-22-08-with-debug-symbols-and-all-options/44242).
*   **openldap-devel:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python-devel:** (only on RHEL 7 based systems with default Python v.2) for /usr/include/python2.7/Python.h and for /usr/lib/libpython2.7.so
*   **python3-numpy:** (**numpy** on RHEL 7 based systems) needed for PyMVA
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
sudo yum install redhat-lsb-core gcc-gfortran pcre-devel \
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
sudo yum install redhat-lsb-core gcc-gfortran pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel libuuid-devel \
avahi-compat-libdns_sd-devel openldap-devel python-devel python3-numpy \
libxml2-devel gsl-devel readline-devel qt5-qtwebengine-devel \
R-devel R-Rcpp-devel R-RInside-devel
```

For Scientific Linux 7 and CentOS 7:
```bash
sudo yum install epel-release
sudo yum install redhat-lsb-core gcc-gfortran pcre-devel \
mesa-libGL-devel mesa-libGLU-devel glew-devel ftgl-devel mysql-devel \
fftw-devel cfitsio-devel graphviz-devel libuuid-devel \
avahi-compat-libdns_sd-devel openldap-devel python-devel numpy \
libxml2-devel gsl-devel readline-devel R-devel R-Rcpp-devel R-RInside-devel
```

CMake version >= 3.9 is required to build recent ROOT version. Therefore on RHEL 7 based systems it necessary to use the `cmake3` command to build ROOT. Default `cmake` command in Scientific Linux 7 and CentOS 7 refers to CMake version 2.8.

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
*   **libssl-dev:** for `/usr/include/openssl/pem.h`, `/usr/lib/libssl.so` and `/usr/lib/libcrypto.so` (on older systems the package might be called `openssl-dev`)

As a one-liner:

```bash
sudo apt-get install dpkg-dev cmake g++ gcc binutils libx11-dev libxpm-dev \
libxft-dev libxext-dev python libssl-dev
```

### Most common optional packages

*   **gfortran:** for /usr/bin/gfortran
*   **libpcre3-dev:** for /usr/bin/pcre-config
*   **xlibmesa-glu-dev:** for /usr/include/GL/gl.h and for /usr/lib/libGL.so
*   **libglew-dev:** for /usr/include/GL/glew.h and for /usr/lib/libGLEW.so
*   **libftgl-dev:** for /usr/bin/pkg-config
*   **libmysqlclient-dev:** for /usr/bin/mysql_config
*   **libfftw3-dev:** for /usr/include/fftw3.h and for /usr/lib/libfftw3.so
*   **libcfitsio-dev:** for /usr/include/fitsio2.h and for /usr/lib/libcfitsio.so
*   **graphviz-dev:** for /usr/include/graphviz/gvc.h and for /usr/lib/libgvc.so
*   **libavahi-compat-libdnssd-dev:** for /usr/include/dns_sd.h and for /usr/lib/libdns_sd.so
*   **libldap2-dev:** for /usr/include/ldap.h and for /usr/lib/libldap.so
*   **python-dev:** for /usr/include/python2.7/Python.h and for /usr/lib/libpython2.7.so
*   **python-numpy:** needed for PyMVA
*   **libxml2-dev:** for /usr/bin/xml2-config
*   **libkrb5-dev:** for /usr/include/krb5.h and for /usr/lib/libkrb5.so
*   **libgsl0-dev:** for /usr/include/gsl/gsl_version.h and for /usr/lib/libgsl.a
*   **r-base:** needed for R bindings. In addition R packages **Rcpp** and **RInside** need to be installed.
*   **qtwebengine5-dev:** required for **qt5web** component

As a one-liner:

```bash
sudo apt-get install gfortran libpcre3-dev \
xlibmesa-glu-dev libglew-dev libftgl-dev \
libmysqlclient-dev libfftw3-dev libcfitsio-dev \
graphviz-dev libavahi-compat-libdnssd-dev \
libldap2-dev python-dev python-numpy libxml2-dev libkrb5-dev \
libgsl0-dev qtwebengine5-dev
```

On Debian, substitute `libmysqlclient-dev` with `libmariadb-dev`.

## openSUSE

Minimal set:

```bash
sudo zypper install bash cmake gcc-c++ gcc binutils python libXpm-devel \
xorg-x11-devel libXext-devel libopenssl-devel
```

Most common optional packages:

```bash
sudo zypper install gcc-fortran pcre-devel Mesa glew-devel libpng16-devel \
pkgconf-pkg-config libmariadb-devel fftw3-devel cfitsio-devel graphviz-devel \
libdns_sd avahi-compat-mDNSResponder-devel openldap2-devel python-devel python-numpy libxml2-devel \
krb5-devel gsl-devel chromium libQt5Gui-devel libqt5-qtwebengine-devel
```

## MacOS

* **Xcode developer package:** Xcode is found on the Mac App store. Install command line tools through the XCode preferences and/or running in a terminal  `xcode-select --install`

## Windows

### ROOT 6

*   **[CMake](https://cmake.org/download/)** (version >= 16.3)
*   **[Microsoft Visual C++](https://visualstudio.microsoft.com/)** (ROOT6 requires at least Visual Studio 2019 version 16.1). The **Community** version is free, fully-featured for students, open-source contributors, and individuals.
The **Desktop Development With C++** workload is also needed. You can install it directly from the **Visual Studio Installer**
*   **[Python](https://python.org)** (ROOT6 requires version >= 2.7)


### ROOT 5 (deprecated)

If you are using Windows make sure you have installed Microsoft Visual C++ (e.g., the
[no-cost edition](https://www.microsoft.com/express/vc/){:target="_blank"}) plus `CMake`.
The `CMake` build will work directly **without the need** to install
[cygwin](https://cygwin.com){:target="_blank"} as it was required previously before the adaption of `CMake`.
