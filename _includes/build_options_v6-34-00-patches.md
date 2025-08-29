| Build option | Effect | Default |
|--------------|--------|---------|
| `arrow` | Enable support for Apache Arrow | OFF |
| `asimage` | Enable support for image processing via libAfterImage | ON |
| `asserts` | Enable asserts (defaults to ON for CMAKE_BUILD_TYPE=Debug and/or dev=ON) | OFF |
| `builtin_cfitsio` | Build CFITSIO internally (requires network) | OFF |
| `builtin_clang` | Build bundled copy of Clang | ON |
| `builtin_cling` | Build bundled copy of Cling. Only build with an external cling if you know what you are doing: associating ROOT commits with cling commits is tricky. | ON |
| `builtin_cppzmq` | Use ZeroMQ C++ bindings installed by ROOT (requires network) | OFF |
| `builtin_davix` | Build Davix internally (requires network) | OFF |
| `builtin_fftw3` | Build FFTW3 internally (requires network) | OFF |
| `builtin_freetype` | Build bundled copy of freetype | OFF |
| `builtin_ftgl` | Build bundled copy of FTGL | OFF |
| `builtin_gl2ps` | Build bundled copy of gl2ps | OFF |
| `builtin_glew` | Build bundled copy of GLEW | OFF |
| `builtin_gsl` | Build GSL internally (requires network) | OFF |
| `builtin_gtest` | Build googletest internally (requires network) | OFF |
| `builtin_llvm` | Build bundled copy of LLVM | ON |
| `builtin_lz4` | Build bundled copy of lz4 | OFF |
| `builtin_lzma` | Build bundled copy of lzma | OFF |
| `builtin_nlohmannjson` | Use nlohmann/json.hpp file distributed with ROOT | OFF |
| `builtin_openssl` | Build OpenSSL internally (requires network) | OFF |
| `builtin_openui5` | Use openui5 bundle distributed with ROOT | ON |
| `builtin_pcre` | Build bundled copy of PCRE | OFF |
| `builtin_tbb` | Build TBB internally (requires network) | OFF |
| `builtin_unuran` | Build bundled copy of unuran | OFF |
| `builtin_vc` | Build Vc internally (requires network) | OFF |
| `builtin_vdt` | Build VDT internally (requires network) | OFF |
| `builtin_veccore` | Build VecCore internally (requires network) | OFF |
| `builtin_xrootd` | Build XRootD internally (requires network) | OFF |
| `builtin_xxhash` | Build bundled copy of xxHash | OFF |
| `builtin_zeromq` | Build ZeroMQ internally (requires network) | OFF |
| `builtin_zlib` | Build bundled copy of zlib | OFF |
| `builtin_zstd` | Build included libzstd, or use system libzstd | OFF |
| `ccache` | Enable ccache usage for speeding up builds | OFF |
| `cefweb` | Enable support for CEF (Chromium Embedded Framework) web-based display | OFF |
| `clad` | Build clad, the cling automatic differentiation plugin (requires network, or existing source directory indicated with -DCLAD_SOURCE_DIR=<clad_src_path>) | ON |
| `cocoa` | Use native Cocoa/Quartz graphics backend (MacOS X only) | OFF |
| `coverage` | Enable compile flags for coverage testing | OFF |
| `cuda` | Enable support for CUDA (requires CUDA toolkit >= 7.5) | OFF |
| `daos` | Enable RNTuple support for Intel DAOS | OFF |
| `dataframe` | Enable ROOT RDataFrame | ON |
| `davix` | Enable support for Davix (HTTP/WebDAV access) | ON |
| `dcache` | Enable support for dCache (requires libdcap from DESY) | OFF |
| `dev` | Enable recommended developer compilation flags, reduce exposed includes | OFF |
| `distcc` | Enable distcc usage for speeding up builds (ccache is called first if enabled) | OFF |
| `fcgi` | Enable FastCGI support in HTTP server | OFF |
| `fftw3` | Enable support for FFTW3 [GPL] | OFF |
| `fitsio` | Enable support for reading FITS images | ON |
| `fortran` | Build Fortran components of ROOT | OFF |
| `gdml` | Enable support for GDML (Geometry Description Markup Language) | ON |
| `geombuilder` | Enable support for the geombuilder library | OFF |
| `geom` | Enable support for the geometry library. Disabling this will also disable Eve and gviz3d. | ON |
| `gnuinstall` | Perform installation following the GNU guidelines | OFF |
| `gviz` | Enable support for Graphviz (graph visualization software) | OFF |
| `html` | Build THtml, the legacy ROOT documentation system (deprecated) | OFF |
| `http` | Enable support for HTTP server | ON |
| `imt` | Enable support for implicit multi-threading via Intel® Thread Building Blocks (TBB) | ON |
| `libcxx` | Build using libc++ | OFF |
| `llvm13_broken_tests` | Enable broken tests with LLVM 13 on Windows | OFF |
| `macos_native` | Disable looking for libraries, includes and binaries in locations other than a native installation (MacOS only) | OFF |
| `mathmore` | Build libMathMore extended math library (requires GSL) [GPL] | OFF |
| `memory_termination` | Free internal ROOT memory before process termination (experimental, used for leak checking) | OFF |
| `minuit2_mpi` | Enable support for MPI in Minuit2 | OFF |
| `minuit2_omp` | Enable support for OpenMP in Minuit2 | OFF |
| `mpi` | Enable support for Message Passing Interface (MPI) | OFF |
| `mysql` | Enable support for MySQL databases | ON |
| `odbc` | Enable support for ODBC databases (requires libiodbc or libodbc) | OFF |
| `opengl` | Enable support for OpenGL (requires libGL and libGLU) | ON |
| `pgsql` | Enable support for PostgreSQL | ON |
| `proof` | Enable support for PROOF | OFF |
| `pyroot` | Enable support for automatic Python bindings (PyROOT) | ON |
| `pythia8` | Enable support for Pythia 8.x [GPL] | OFF |
| `qt5web` | Enable support for Qt5 web-based display (requires Qt5::WebEngine and Qt5::WebEngineWidgets) | OFF |
| `qt6web` | Enable support for Qt6 web-based display (requires Qt6::WebEngineCore and Qt6::WebEngineWidgets) | OFF |
| `r` | Enable support for R bindings (requires R, Rcpp, and RInside) | OFF |
| `roofit_multiprocess` | Build RooFit::MultiProcess and multi-process RooFit::TestStatistics classes (requires ZeroMQ >= 3.4.5 built with -DENABLE_DRAFTS and cppzmq). | OFF |
| `roofit` | Build the advanced fitting package RooFit, and RooStats for statistical tests. If xml is available, also build HistFactory. | ON |
| `root7` | Build ROOT 7 components of ROOT | ON |
| `rpath` | Link libraries with built-in RPATH (run-time search path) | ON |
| `runtime_cxxmodules` | Enable runtime support for C++ modules | ON |
| `shadowpw` | Enable support for shadow passwords | OFF |
| `shared` | Use shared 3rd party libraries if possible | ON |
| `soversion` | Set version number in sonames (recommended) | OFF |
| `spectrum` | Enable support for TSpectrum | ON |
| `sqlite` | Enable support for SQLite | ON |
| `ssl` | Enable support for SSL encryption via OpenSSL | ON |
| `test_distrdf_dask` | Enable distributed RDataFrame tests that use dask | OFF |
| `test_distrdf_pyspark` | Enable distributed RDataFrame tests that use pyspark | OFF |
| `testsupport` | Build the ROOT::TestSupport library required to use all features of ROOT_ADD_GTEST and similar macros (requires gtest at build time) | OFF |
| `tmva-cpu` | Build TMVA with CPU support for deep learning (requires BLAS) | ON |
| `tmva-cudnn` | Enable support for cuDNN (default when CUDA is enabled) | ON |
| `tmva-gpu` | Build TMVA with GPU support for deep learning (requries CUDA) | OFF |
| `tmva` | Build TMVA multi variate analysis library | ON |
| `tmva-pymva` | Enable support for Python in TMVA (requires numpy) | ON |
| `tmva-rmva` | Enable support for R in TMVA | OFF |
| `tmva-sofie` | Build TMVA with support for sofie - fast inference code generation (requires protobuf 3) | OFF |
| `tpython` | Build the TPython class that allows you to run Python code from C++ | ON |
| `unfold` | Enable the unfold package [GPL] | OFF |
| `unuran` | Enable support for UNURAN (package for generating non-uniform random numbers) [GPL] | OFF |
| `uring` | Enable support for io_uring (requires liburing and Linux kernel >= 5.1) | OFF |
| `use_gsl_cblas` | Use the CBLAS library from GSL instead of finding a more optimized BLAS library automatically with FindBLAS (the GSL CBLAS is less performant but more portable) | ON |
| `vc` | Enable support for Vc (SIMD Vector Classes for C++) | OFF |
| `vdt` | Enable support for VDT (fast and vectorisable mathematical functions) | ON |
| `veccore` | Enable support for VecCore SIMD abstraction library | OFF |
| `vecgeom` | Enable support for VecGeom vectorized geometry library | OFF |
| `webgui` | Build Web-based UI components of ROOT | ON |
| `win_broken_tests` | Enable broken tests on Windows | OFF |
| `winrtdebug` | Link against the Windows debug runtime library | OFF |
| `x11` | Enable support for X11/Xft | ON |
| `xml` | Enable support for XML (requires libxml2) | ON |
| `xrootd` | Enable support for XRootD file server and client | ON |
| | **Auxiliary build options** | |
| `all` | Enable all optional components by default | OFF |
| `asan` | Build ROOT with address sanitizer instrumentation | OFF |
| `clingtest` | Enable cling tests (Note: that this makes llvm/clang symbols visible in libCling) | OFF |
| `fail-on-missing` | Fail at configure time if a required package cannot be found | OFF |
| `gminimal` | Enable only required options by default, but include X11 | OFF |
| `minimal` | Enable only required options by default | OFF |
| `rootbench` | Build rootbench if rootbench exists in root or if it is a sibling directory. | OFF |
| `roottest` | Build roottest if roottest exists in root or if it is a sibling directory. | OFF |
| `testing` | Enable testing with CTest | OFF |
