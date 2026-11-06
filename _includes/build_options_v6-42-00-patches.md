| Build option | Effect | Default |
|--------------|--------|---------|
| `arrow` | Enable support for Apache Arrow | OFF |
| `asimage` | Enable support for image processing via libAfterImage | ON |
| `asserts` | Enable asserts (defaults to ON for CMAKE_BUILD_TYPE=Debug and/or dev=ON) | OFF |
| `builtin_bvh` | Build bvh from an in-built source tarball (does not require network) | ON |
| `builtin_cdt` | Build CDT from an in-built source tarball (does not require network) | ON |
| `builtin_cfitsio` | Build CFITSIO from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_civetweb` | Build civetweb from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_clang` | Build bundled copy of Clang (advanced option) | ON |
| `builtin_cling` | Build bundled copy of Cling. Only build with an external cling if you know what you are doing: associating ROOT commits with cling commits is tricky. (advanced option) | ON |
| `builtin_fftw3` | Build FFTW3 from an automatically downloaded source tarball (requires network) [GPL] | OFF |
| `builtin_freetype` | Build freetype from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_ftgl` | Build FTGL from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_gif` | Build libgif from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_gl2ps` | Build gl2ps from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_glu` | Build libtess-GLU from an internal source tarball (does not require network) | OFF |
| `builtin_gsl` | Build GSL from an automatically downloaded source tarball (requires network) [GPL] | OFF |
| `builtin_gtest` | Build googletest from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_jpeg` | Build libjpeg from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_jsroot` | Install JSROOT to run webgui widgets (requires network) | OFF |
| `builtin_llvm` | Build bundled copy of LLVM (advanced option) | ON |
| `builtin_lz4` | Build lz4 from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_lzma` | Build lzma from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_mathjax` | Install mathjax package for mathtext rendering in JSROOT (requires network) | OFF |
| `builtin_mathtext` | Build mathtext from an in-built source tarball (does not require network) | ON |
| `builtin_nlohmannjson` | Build nlohmann/json from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_openssl` | Build OpenSSL from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_openui5` | Install openui5 package to run webgui widgets (requires network) | OFF |
| `builtin_pcre` | Build PCRE2 from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_png` | Build libpng from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_tbb` | Build TBB from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_tiff` | Build libtiff from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_unuran` | Build unuran from an automatically downloaded source tarball (requires network) [GPL] | OFF |
| `builtin_vdt` | Build VDT from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_xrootd` | Build XRootD from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_xxhash` | Build xxHash from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_zlib` | Build zlib from an automatically downloaded source tarball (requires network) | OFF |
| `builtin_zstd` | Build zstd from an automatically downloaded source tarball (requires network) | OFF |
| `ccache` | Enable ccache usage for speeding up builds | OFF |
| `cefweb` | Enable support for CEF (Chromium Embedded Framework) web-based display | OFF |
| `check_connection` | Fail the configuration step if there is no internet connection, but it's required for the build | ON |
| `clad` | Build clad, the cling automatic differentiation plugin (requires network, or existing source directory indicated with -DCLAD_SOURCE_DIR=<clad_src_path>) | ON |
| `cocoa` | Use native Cocoa/Quartz graphics backend (MacOS X only) | OFF |
| `coverage` | Enable compile flags for coverage testing | OFF |
| `cuda` | Enable support for CUDA (requires CUDA toolkit >= 7.5) | OFF |
| `curl` | Enable support for HTTP(S) through libcurl | ON |
| `daos` | Enable RNTuple support for Intel DAOS | OFF |
| `dataframe` | Enable ROOT RDataFrame | ON |
| `davix` | Enable support for Davix (HTTP/WebDAV access) | ON |
| `dcache` | Enable support for dCache (requires libdcap from DESY) | OFF |
| `dev` | Enable recommended developer compilation flags, reduce exposed includes | OFF |
| `distcc` | Enable distcc usage for speeding up builds (ccache is called first if enabled) | OFF |
| `experimental_adaptivecpp` | Build AdaptiveCPP for SYCL support | OFF |
| `experimental_genvectorx` | Build GenvectorX (requires SYCL support) | OFF |
| `fcgi` | Enable FastCGI support in HTTP server | OFF |
| `fftw3` | Enable support for FFTW3 [GPL] | OFF |
| `fitsio` | Enable support for reading FITS images | ON |
| `fortran` | Build Fortran components of ROOT, stemming from cernlib | OFF |
| `gdml` | Enable support for GDML (Geometry Description Markup Language) | ON |
| `geom` | Enable support for the geometry library. Disabling this will also disable Eve and gviz3d. | ON |
| `geombuilder` | Enable support for the geombuilder library | OFF |
| `gnuinstall` | Perform installation following the GNU guidelines | OFF |
| `gviz` | Enable support for Graphviz (graph visualization software) | OFF |
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
| `opengl` | Enable support for OpenGL (requires libGL and libGLU) | ON |
| `pyroot` | Enable support for automatic Python bindings (PyROOT) | ON |
| `pythia8` | Enable support for Pythia 8.x [GPL] | OFF |
| `qt6canv` | Enable Qt6 canvas (requires Qt6::Gui) | OFF |
| `qt6web` | Enable support for Qt6 web-based display (requires Qt6::WebEngineCore and Qt6::WebEngineWidgets) | OFF |
| `roofit` | Build the advanced fitting package RooFit, and RooStats for statistical tests. If xml is available, also build HistFactory. | ON |
| `root7` | Build ROOT 7 experimental components of ROOT | ON |
| `runtime_cxxmodules` | Enable runtime support for C++ modules | ON |
| `shared` | Use shared 3rd party libraries if possible | ON |
| `soversion` | Set version number in sonames for shared libraries. Not recommended, as the pcm and rootmap files do not (yet) support versioning and always point to the non-versioned shared libraries. | OFF |
| `spectrum` | Enable support for TSpectrum | ON |
| `sqlite` | Enable support for SQLite | ON |
| `ssl` | Enable support for SSL encryption via OpenSSL | ON |
| `test_distrdf_dask` | Enable distributed RDataFrame tests that use dask | OFF |
| `test_distrdf_pyspark` | Enable distributed RDataFrame tests that use pyspark | OFF |
| `testsupport` | Build the ROOT::TestSupport library required to use all features of ROOT_ADD_GTEST and similar macros (requires gtest at build time) | OFF |
| `thisroot_scripts` | Build scripts like thisroot.{sh, fish, etc.} that set environment paths for using ROOT. Usually not needed when building ROOT for the distribution with a package manager. | ON |
| `tmva` | Build TMVA multi variate analysis library | ON |
| `tmva-cpu` | Build TMVA with CPU support for deep learning (requires BLAS) | ON |
| `tmva-cudnn` | Enable support for cuDNN (default when CUDA is enabled) | ON |
| `tmva-gpu` | Build TMVA with GPU support for deep learning (requires CUDA) | OFF |
| `tmva-pymva` | Enable usage of Python ML libraries in TMVA (requires NumPy, works only with TensorFlow<=2.15) | OFF |
| `tpython` | Build the TPython class that allows you to run Python code from C++ | ON |
| `unfold` | Enable the unfold package [GPL] | OFF |
| `unuran` | Enable support for UNURAN (package for generating non-uniform random numbers) [GPL] | OFF |
| `uring` | Enable support for io_uring (requires liburing. Actual kernel support is detected at runtime) | OFF |
| `use_gsl_cblas` | Use the CBLAS library from GSL [GPL] instead of finding a more optimized BLAS library automatically with FindBLAS (the GSL CBLAS is less performant but more portable) | OFF |
| `vdt` | Enable support for VDT (fast and vectorisable mathematical functions) | ON |
| `vecgeom` | Enable support for VecGeom vectorized geometry library | OFF |
| `webgui` | Build Web-based UI components of ROOT | ON |
| `win_broken_tests` | Enable broken tests on Windows | OFF |
| `winrtdebug` | Link against the Windows debug runtime library | OFF |
| `x11` | Enable support for X11/Xft | ON |
| `xml` | Enable support for XML (requires libxml2) | ON |
| `xrootd` | Enable support for XRootD file server and client | ON |
| | **Auxiliary build options** | |
| `all` | Enable all optional components by default | OFF |
| `asan` | Build ROOT with address sanitizer instrumentation (see core/sanitizer for details) | OFF |
| `clingtest` | Enable cling tests (Note: that this makes llvm/clang symbols visible in libCling) | OFF |
| `fail-on-missing` | Fail at configure time if a required package cannot be found | OFF |
| `gminimal` | Enable only required options by default, but include X11/Cocoa | OFF |
| `minimal` | Enable only required options by default | OFF |
| `rootbench` | Build rootbench if rootbench exists in root or if it is a sibling directory (implies testing=ON) | OFF |
| `roottest` | Build roottest (implies testing=ON) | OFF |
| `testing` | Enable testing with CTest | OFF |
