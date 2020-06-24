| Build option | Effect | Default |
|--------------|--------|---------|
| `alien` | Enable support for AliEn (requires libgapiUI from ALICE) | OFF |
| `arrow` | Enable support for Apache Arrow | OFF |
| `asimage` | Enable support for image processing via libAfterImage | ON |
| `builtin_afterimage` | Build bundled copy of libAfterImage | OFF |
| `builtin_cfitsio` | Build CFITSIO internally (requires network) | OFF |
| `builtin_clang` | Build bundled copy of Clang | ON |
| `builtin_davix` | Build Davix internally (requires network) | OFF |
| `builtin_fftw3` | Build FFTW3 internally (requires network) | OFF |
| `builtin_freetype` | Build bundled copy of freetype | OFF |
| `builtin_ftgl` | Build bundled copy of FTGL | OFF |
| `builtin_gl2ps` | Build bundled copy of gl2ps | OFF |
| `builtin_glew` | Build bundled copy of GLEW | OFF |
| `builtin_gsl` | Build GSL internally (requires network) | OFF |
| `builtin_llvm` | Build bundled copy of LLVM | ON |
| `builtin_lz4` | Build bundled copy of lz4 | OFF |
| `builtin_lzma` | Build bundled copy of lzma | OFF |
| `builtin_openssl` | Build OpenSSL internally (requires network) | OFF |
| `builtin_pcre` | Build bundled copy of PCRE | OFF |
| `builtin_tbb` | Build TBB internally (requires network) | OFF |
| `builtin_unuran` | Build bundled copy of unuran | OFF |
| `builtin_vc` | Build Vc internally (requires network) | OFF |
| `builtin_vdt` | Build VDT internally (requires network) | OFF |
| `builtin_veccore` | Build VecCore internally (requires network) | OFF |
| `builtin_xrootd` | Build XRootD internally (requires network) | OFF |
| `builtin_xxhash` | Build bundled copy of xxHash | OFF |
| `builtin_zlib` | Build bundled copy of zlib | OFF |
| `builtin_zstd` | Build included libzstd, or use system libzstd | OFF |
| `ccache` | Enable ccache usage for speeding up builds | OFF |
| `cefweb` | Enable support for CEF (Chromium Embedded Framework) web-based display | OFF |
| `clad` | Build clad, the cling automatic differentiation plugin (requires network) | ON |
| `cocoa` | Use native Cocoa/Quartz graphics backend (MacOS X only) | OFF |
| `coverage` | Enable compile flags for coverage testing | OFF |
| `cuda` | Enable support for CUDA (requires CUDA toolkit >= 7.5) | OFF |
| `cudnn` | Enable support for cuDNN (default when Cuda is enabled) | ON |
| `cxxmodules` | Enable support for C++ modules | OFF |
| `dataframe` | Enable ROOT RDataFrame | ON |
| `davix` | Enable support for Davix (HTTP/WebDAV access) | ON |
| `dcache` | Enable support for dCache (requires libdcap from DESY) | OFF |
| `dev` | Enable recommended developer compilation flags, reduce exposed includes | OFF |
| `exceptions` | Enable compiler exception handling | ON |
| `fcgi` | Enable FastCGI suppport in HTTP server | OFF |
| `fftw3` | Enable support for FFTW3 | ON |
| `fitsio` | Enable support for reading FITS images | ON |
| `fortran` | Build Fortran components of ROOT | OFF |
| `gdml` | Enable support for GDML (Geometry Description Markup Language) | ON |
| `gfal` | Enable support for GFAL (Grid File Access Library) | ON |
| `gnuinstall` | Perform installation following the GNU guidelines | OFF |
| `gsl_shared` | Enable linking against shared libraries for GSL (default no) | OFF |
| `gviz` | Enable support for Graphviz (graph visualization software) | OFF |
| `http` | Enable suppport for HTTP server | ON |
| `imt` | Enable support for implicit multi-threading via Intel® Thread Bulding Blocks (TBB) | ON |
| `jemalloc` | Use jemalloc memory allocator | OFF |
| `libcxx` | Build using libc++ | OFF |
| `macos_native` | Disable looking for libraries, includes and binaries in locations other than a native installation (MacOS only) | OFF |
| `mathmore` | Build libMathMore extended math library (requires GSL) | ON |
| `memory_termination` | Free internal ROOT memory before process termination (experimental, used for leak checking) | OFF |
| `memstat` | Build memory statistics utility (helps to detect memory leaks) | OFF |
| `minuit2` | Build Minuit2 minimization library | OFF |
| `mlp` | Enable support for TMultilayerPerceptron classes' federation | ON |
| `monalisa` | Enable support for monitoring with Monalisa (requires libapmoncpp) | OFF |
| `mpi` | Enable support for Message Passing Interface (MPI) | OFF |
| `mysql` | Enable support for MySQL databases | ON |
| `odbc` | Enable support for ODBC databases (requires libiodbc or libodbc) | OFF |
| `opengl` | Enable support for OpenGL (requires libGL and libGLU) | ON |
| `oracle` | Enable support for Oracle databases (requires Oracle Instant Client) | ON |
| `pgsql` | Enable support for PostgreSQL | ON |
| `pyroot` | Enable support for automatic Python bindings (PyROOT) | ON |
| `pyroot_legacy` | Use legacy Python bindings for ROOT | OFF |
| `pythia6` | Enable support for Pythia 6.x | ON |
| `pythia6_nolink` | Delayed linking of Pythia6 library | OFF |
| `pythia8` | Enable support for Pythia 8.x | ON |
| `qt5web` | Enable support for Qt5 web-based display (requires Qt5WebEngine) | OFF |
| `r` | Enable support for R bindings (requires R, Rcpp, and RInside) | OFF |
| `roofit` | Build RooFit advanced fitting package | ON |
| `root7` | Build ROOT 7 components of ROOT (requires C++14 standard or higher) | ON |
| `rpath` | Link libraries with built-in RPATH (run-time search path) | OFF |
| `runtime_cxxmodules` | Enable runtime support for C++ modules | ON |
| `shadowpw` | Enable support for shadow passwords | OFF |
| `shared` | Use shared 3rd party libraries if possible | ON |
| `soversion` | Set version number in sonames (recommended) | OFF |
| `spectrum` | Enable support for TSpectrum | ON |
| `sqlite` | Enable support for SQLite | ON |
| `ssl` | Enable support for SSL encryption via OpenSSL | ON |
| `tcmalloc` | Use tcmalloc memory allocator | OFF |
| `tmva` | Build TMVA multi variate analysis library | ON |
| `tmva-cpu` | Build TMVA with CPU support for deep learning (requires BLAS) | ON |
| `tmva-gpu` | Build TMVA with GPU support for deep learning (requries CUDA) | OFF |
| `tmva-pymva` | Enable support for Python in TMVA (requires numpy) | ON |
| `tmva-rmva` | Enable support for R in TMVA | OFF |
| `unuran` | Enable support for UNURAN (package for generating non-uniform random numbers) | OFF |
| `vc` | Enable support for Vc (SIMD Vector Classes for C++) | OFF |
| `vdt` | Enable support for VDT (fast and vectorisable mathematical functions) | ON |
| `veccore` | Enable support for VecCore SIMD abstraction library | OFF |
| `vecgeom` | Enable support for VecGeom vectorized geometry library | OFF |
| `vmc` | Build VMC simulation library | OFF |
| `webgui` | Build Web-based UI components of ROOT (requires C++14 standard or higher) | ON |
| `win_broken_tests` | Enable broken tests on Windows | OFF |
| `winrtdebug` | Link against the Windows debug runtime library | OFF |
| `x11` | Enable support for X11/Xft | ON |
| `xml` | Enable support for XML (requires libxml2) | ON |
| `xproofd` | Enable LEGACY support for XProofD file server and client (requires XRootD v4 with private-devel) | OFF |
| `xrootd` | Enable support for XRootD file server and client | ON |
| | **Auxiliary build options** | |
| `all` | Enable all optional components by default | OFF |
| `asan` | Build ROOT with address sanitizer instrumentation | OFF |
| `clingtest` | Enable cling tests (Note: that this makes llvm/clang symbols visible in libCling) | OFF |
| `gminimal` | Enable only required options by default, but include X11 | OFF |
| `minimal` | Enable only required options by default | OFF |
| `rootbench` | Build rootbench if rootbench exists in root or if it is a sibling directory. | OFF |
| `roottest` | Build roottest if roottest exists in root or if it is a sibling directory. | OFF |
| `testing` | Enable testing with CTest | OFF |
