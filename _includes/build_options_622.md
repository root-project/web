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
| root7 | OFF | ROOT 7 support ([read more](#enabling-experimental-features-aka-root7)) |
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
