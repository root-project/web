---
title: ROOT Version v5-34-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<a id='head'></a>
## Changes in head of v5-34-00-patches branch

*None*.

<a id='38'></a>
## Changes in version v5-34-38 (March 12, 2018)

NOTE: this release exists to backport support for LZ4 compression also to the old v5.34 branch. Do not expect further updates.

* Core
   * Fix the validity of TRef after the first ProcessID is full.
* I/O
   * Add support for LZ4 compression.
   * Properly handle 'cycle' number larger than 32767 by rounding to zero rather than a negative number.
   * Properly propagate errors in OpenExcessFiles in TFileMerger ([ROOT-8167](http://sft.its.cern.ch/jira/browse/ROOT-8167)).
* TTree
   * Fix detection of errors that appears in nested TTreeFormula [ROOT-8218]
* Graphics
   * Fix `TText` copy constructor as requested [here](https://sft.its.cern.ch/jira/browse/ROOT-8116).
   * In `TMarker3DBox` when a box marker has a size equal to zero it is not painted. Painting it produced a dot with the X11 backend.

<a id='36'></a>
## Changes in version v5-34-36 (April 5, 2016)

*  Build system
    * Added option 'builtin_openssl' to build OpenSSL internally. Needed mainly for Mac OS X 10.11 (El Capitan).
* Core
    * TObject instances allocated as part of an array and made part of a collection, as for example the TCanvas instances into the global list of instances, are not longer deleted if the content of the collection is deleted.  Technically the element of the array are now treated by collections as if they have been allocated on the stack.  This fixes the issue described at ([ROOT-7846](http://sft.its.cern.ch/jira/browse/ROOT-7846)).
* I/O
    * Resolve an issue when space is freed in a large `ROOT` file and a TDirectory is updated and stored the lower (less than 2GB) freed portion of the file ([ROOT-8055](http://sft.its.cern.ch/jira/browse/ROOT-8055)).
*  Montecarlo
    * Re-introduced method TPythia6:Pytune()
*  TTree
    * Fix ([ROOT-7423](http://sft.its.cern.ch/jira/browse/ROOT-7423)) TTreeCache may not stop the learning phase when asynchronous prefetching is enabled.
    * Fix the issue described in the (following forum post(https://root.cern.ch/phpBB3/viewtopic.php?t=20269)), where a some order of calls to TTree::Scan and TTree::Write resulted in invalid output.
    * Repair setting the branch address of a leaflist style branch taking directly the address of the struct.  (Note that leaflist is nonetheless still deprecated and declaring the struct to the interpreter and passing the object directly to create the branch is much better).
* Graphics
   * `TGraph::GetHistogram()` was resetting the TimeDisplay attribute of axis. The problem was reported [here](https://sft.its.cern.ch/jira/browse/ROOT-7766).
   * When painting a `TH3` as 3D boxes, `TMarker3DBox` ignored the max and min values specified by `SetMaximum()` and `SetMinimum()`. The problem was reported [here](https://root.cern.ch/phpBB3/viewtopic.php?f=3&t=20906&p=90632#p90632).
   *  When using time format in axis, `TGaxis::PaintAxis()` may in some cases call `strftime()` with invalid parameter causing a crash.
  This problem was reported [here](https://sft.its.cern.ch/jira/browse/ROOT-7689).
  * `TASImage` When the first or last point of a wide line is exactly on the window limit the line is drawn vertically or horizontally.
  This problem was mentioned [here](https://sft.its.cern.ch/jira/browse/ROOT-8021)
  *  Make sure that `TLatex` text strings containing "\" (ie: rendered using `TMathText`) produce an output in PDF et SVG files.
  * New version of libpng (1.2.55) as requested [here](https://sft.its.cern.ch/jira/browse/ROOT-8045).

* TNetXNGFileStager
    *   Fix ([ROOT-7703](http://sft.its.cern.ch/jira/browse/ROOT-7703)) This restores the behavior of Locate() to that found with TXNetFileStager: Rather than return only the xrootd server's reply, the endpoint hostname is looked up and Locate() returns the full url, including the path.
* TWebFile
    *   Fix ([ROOT-7809](http://sft.its.cern.ch/jira/browse/ROOT-7809)) Returns an error for a redirect which does not specify the new URI, rather than going into a loop.
    *   Fix ([ROOT-7817](http://sft.its.cern.ch/jira/browse/ROOT-7817)) Avoid a crash under some circumstances when trying to open an invalid path.
* SQL
    *   Fix TPgSQLStatement::SetBinary to actually handle binary data (previous limited to ascii).

<a id='34'></a>
## Changes in version v5-34-34 (October 2, 2015)


*   Build
    *   Support for gcc 5.1 and CMake builds ([ROOT-7440](http://sft.its.cern.ch/jira/browse/ROOT-7440)). To make it work required to disable #define private public for this compiler.
    *   Support for Intel ICC 15.
    *   Fix in the RPATH treatment that is needed for MacOS X 10.11 (El Capitan)
    *   Handle build for the missing OpenSSL ([ROOT-7680](https://sft.its.cern.ch/jira/browse/ROOT-7680))
    *   Implemented the options 'minimal' and 'minimal'
*   I/O
    *   Fix the issue described at ([ROOT-7500](http://sft.its.cern.ch/jira/browse/ROOT-7500)): crash due to change in base class which versioned derived class.
*  TTree
    *   Fix ([ROOT-6885](http://sft.its.cern.ch/jira/browse/ROOT-6885)) This affects very large TChain with friend trees.
*  JSROOT
    *  Upgraded to latest JSROOT version 3.8
*  RooFit
    * Patch on behalf of our LHCb P2VV friends.
*  Montecarlo
    * Fix [hack] to support Pythia8 > 200

<a id='32'></a>
## Changes in version v5-34-32 (June 23, 2015)


*   Build
    *   Pythia6 not found with CMake ([ROOT-7333](http://sft.its.cern.ch/jira/browse/ROOT-7333))
    *   Fixes in .license and .credits commands ([ROOT-7311](http://sft.its.cern.ch/jira/browse/ROOT-7311))
    *   bindexplib.exe support for x64
*   I/O.
    *   Properly handle the reload/recreate of TClass for STL containers (fixes [ROOT-7239](http://sft.its.cern.ch/jira/browse/ROOT-7239))
    *   Fix the ordering of the keys in a TFile being written; in particular fixing the result of GetKey and FindKey which were no longer returning the lastest cycle for a TFile being written since v5.34/11.
*   Graphics
    *   In the animated gif it is now possible to specify the delay between the last image and the fist image in case of infinite loop ([ROOT-7263](http://sft.its.cern.ch/jira/browse/ROOT-7263)).
    *   2D stats painting now takes the stats format into account when painting Integral. This problem was mentioned [here](https://root.cern.ch/phpBB3/viewtopic.php?f=3&t=19746).
    *   Fix [ROOT-6703](https://sft.its.cern.ch/jira/browse/ROOT-6703).
*   Proof
    *   In TProofPerfAnalysis, add functionality to save derived objects created / drawn during the calls.
    *   Add support for aliases ([ROOT-7392](https://sft.its.cern.ch/jira/browse/ROOT-7392))
    *   Consolidate support for trees in sub-directories
*   Tree
    *   Fixes a regression: allow supported URLs to contain wildcards in TChain Add ([ROOT-7296](https://sft.its.cern.ch/jira/browse/ROOT-7296)).
    *   Fixes a crash possible after using TChain::AddBranchToCache with the automatic cache creation enabled ([ROOT-7015](https://sft.its.cern.ch/jira/browse/ROOT-7015)).

<a id='30'></a>
## Changes in version v5-34-30 (April 23, 2015)


*   Build
    *   Update CMake and configure scripts for gcc 5
    *   Fixed build problems with Mac OS X
*   Core

    *   TextInput: prevent history file clashes from concurrent processes ([ROOT-6539](http://sft.its.cern.ch/jira/browse/ROOT-6539)).
*   I/O.
    *   Properly skip the content of base class onfile that have been removed from the in-memory class layout.
    *   Properly support TStreamerInfo written by ROOT v4.00.
*   Graphics
    *   The axis titles in case of a TTree x:y:z plot with the option COLZ were not correct.
    *   New option "Rotate scene" in the "Extras" tab of the GL Viewer. It allows to do a real rotation instead of a wobbling when the "Auto Rotator" is launched.
    *   Implement TStyle::SetLineScalePS() to control le global basic line width in TTeXDump.
    *   When a TGraph2D was entirely in the plane Z=0 the 3D could not be defined.

<a id='28'></a>
## Changes in version v5-34-28 (March 24, 2015)


*   Build system
    *   Fix problem with libraries starting with the same same ([ROOT-7048](http://sft.its.cern.ch/jira/browse/ROOT-7048))
    *   Support for CMake version > 3.1
*   Proof
    *   Added support for addition of workers while running to TPacketizer to use in dynamic startups.
    *   Added possibility to simulate a dynamic startup in PROOF-Lite to test the new packetizer feature.
    *   Fixed several bugs in setting up the environment for workers added dynamically.
*   Graphics
    *   Better adjustment of the tilde accent position in case of Cocoa backend.
    *   When printing a coloured 2D histograms (with option COLZ) into a PDF or PostScript file, the preview on screen using many standard PDF previewer tools showed very thin white lines between the bins as well as in the color palette. This made very ugly the final output. This problem is due to bad implementation of anti-aliasing in these previewers. A way to bypass this issue was to turn off the anti-aliasing in the previewer but then the rest of the document does not look nice. This problem is now bypassed with a fix in both PDF and PostScript output.
*   Interpreter
    *   Include <iostream> in CINT also for frameworks ([ROOT-7103](http://sft.its.cern.ch/jira/browse/ROOT-7103)).
*   NetxNG
    *   Restore functionality to TNetXNGFile, which is available when access root files by other methods, and allow access to root files within a zip archive ([ROOT-7185](http://sft.its.cern.ch/jira/browse/ROOT-7185))<span class="Apple-tab-span" style="white-space:pre"></span>
*   Montecarlo
    *   Support for Pythia8 version > 8.2 ([ROOT-7070](http://sft.its.cern.ch/jira/browse/ROOT-7185))

<a id='26'></a>
## Changes in version v5-34-26 (February 20, 2015)


*   Hists
    *   Fix the problem reported [here](https://root.cern.ch/phpBB3/viewtopic.php?f=3&t=19186).
*   Graphics
    *   Fix an issue with transparent pad in TTexDump.
    *   In TMathText \mu is now working for Postscript output.
    *   Implement transparent colors in TTeXDump using TiKZ "opacity".
*   Core
    *   Fix crash in TClonesArray::ExpandCreateFast [ROOT-7046.](http://sft.its.cern.ch/jira/browse/ROOT-7046)
*   I/O
    *   Prevent crashes when using default constructed TFile and TDirectoryFile ( [ROOT-7005](http://sft.its.cern.ch/jira/browse/ROOT-7005))
    *   Better support of TString and std::string in XML/JSON streamers
    *   Solve problem in TBufferXML to support default streamer (no + sign in LinkDef.h file)
    *   Support of STL containers in JSON
    *   Correct representation of multi-dimensional arrays in JSON
    *   Special handling of std::map in JSON
    *   xml: support all standard symbols in node names
*   TTree
    *   Fix memory leak of CollectionProxy for non split branch for an STL collection. ( [ROOT-7019](http://sft.its.cern.ch/jira/browse/ROOT-7019))
    *   Significantly improve the scheduling of I/O rules in split TTree solving [ROOT-7009.](http://sft.its.cern.ch/jira/browse/ROOT-7009)
*   JSROOT
    *   Several files can now be loaded simultaneously
    *   Use d3.time.scale to display time scales
    *   Implemented drag and drop to superimpose histograms or graphs
    *   Allow selection of drawing option via context menu
    *   Better support of touch devices
    *   Provide simple layout, making it default
*   Net/http
    *   New command interface: One could register an arbitrary command to the server, which become visible in the web browser. Then, when the item is clicked by the user, the command ends-up in a gROOT->ProcessLineSync() call.
    *   Custom property can be configured for any item in the server: One could configure an icon for each item visible in the browser. Or one could 'hide' any item from the user (but keep access with normal http requests). Via such properties one could specify which item is drawn when web page is loaded or configure monitoring. See tutorials/http/httpcontrol.C macro for more details.
    *   Implement exe.json requests to be able to execute any method of registered objects. This request is used to provide remote TTree::Draw() functionality
    *   Correctly set 'Cache-Control' headers when replying to http requests
    *   Better support of STL containers when converting objects into json with TBufferJSON class
*   Net/Proof
    *   Implement workaround for compilation problem against xrootd installations not offering the include/xrootd/private headers.

<a id='25'></a>
## Changes in version v5-34-25 (January 12, 2015)


*   Build system
    *   Changed of the order of libraries in link statement to avoid problems. [ROOT-6855](http://sft.its.cern.ch/jira/browse/ROOT-6855)
*   Core
    *   Correct the order of initialization and thread locking when create the TClass sub list (data members, base, functions) to prevent a thread from using the list before it is completely created.
    *   Implement TDictionary::op=() given that it has a copy ctor (Coverity).
*   Tree
    *   Improved TChain Add and AddFile handling of URLs. TChain Add will no longer try to match wildcard characters if the filename is a URL, and URLs can now include both a treename and a query string ('?') at the end. Alternatively a treename may be given as a fragment identifier ('#') after a query string. [ROOT-6869](https://sft.its.cern.ch/jira/browse/ROOT-6869)
*   I/O
    *   Implementation of XROOTD cross-protocol redirects in ROOT (Lukasz Janyst)
*   Hist
    *   Improve TH1::SmoothArray (ROOT-6906)
    *   Implement GetNhists() in THStack to return the number of histograms in the stack.
*   MathCore
    *   Speed-up binned AD GoF Test using approximate formula for sigma when N>2000.
*   Minuit2
    *   Improve print-out of status when running Minimizer::Hesse()
*   RooFit
    *   RooSecondMoment. Introduce first moment as offset in calculation of second moment
         to promote numeric stability of calculation when first moment is large
    *   RooCmdConfig. Increase length of string arguments allowed
    *   RooCustomizer. When replace operations are executed with missing source or target expressions,
         ignore the offending operation with a warning message, rather than canceling the
         entire transaction
*   RooStats
    *   Add option to use option Offset() when creating likelihood inside the RooStats tools for better numerical stability in fits. This is done using the new static function RooStats::UseNLLOffset().
*   Graphics
    *   When a text size was equal or smaller than 0 the PDF file was corrupted.
    *   In TTeXDump the underscore `_` produced an error outside the TeX math context.
    *   TLatex: Improve the square-root drawing in case it is small.
    *   Use float numbers instead of integer to describe graphics paths in SVG output in order to avoid rounding problems ([ROOT-6994](https://sft.its.cern.ch/jira/browse/ROOT-6994)<span style="font-family: Verdana, sans-serif; font-size: 12px;">).</span>
    *   <font face="Verdana, sans-serif"><span style="font-size: 12px;">Implement missing math symbols in SVG output.</span></font>
    *   Improvements in TPDF and TPostScript for fill patterns 1, 2 and 3.
*   GUI
    *   New TGTextViewostream class. A TGTextViewostream is a text viewer widget. It is a specialization of TGTextView and std::ostream, and it uses a TGTextViewStreamBuf, who inherits from std::streambuf, allowing to stream text directly to the text view in a cout-like fashion
    *   New tutorial showing how to use the TGTextViewostream widget
*   Geom
    *   Restructuring TGeoBranchArray to allow allocation and copying in pre-booked memory.
    *   New feature allowing to prioritise certain volume paths in the case where overlaps cannot be avoided. This can happen for example after mis-aligning the geometry. The typical use case is to prioritise sensor-like volumes which are defined as sensitive in the misaligned tracking geometry and which become shadowed by overlaps with nearby structures. A usage example is provided in $ROOTSYS/tutorials/geom/parallel_world.C.

<a id='24'></a>
## Changes in version v5-34-24 (December 2, 2014)


*   Graphics
    *   With the Cocoa backend on Mac, the PDF and PS output produced miss-aligned exponents because the GetTextExtend method behaved differently in batch mode and "screen" mode. This is now fixed.<span id="1415712572773S" style="display: none;"> </span><span id="1415712574786S" style="display: none;"> </span><span id="1415712577352S" style="display: none;"> </span><span id="1415712578079S" style="display: none;"> </span>
    *   In TTextDump the text color was ignored. It was always black.
*   <span id="1415712588484S" style="display: none;"> </span><span id="1415712587967S" style="display: none;"> </span><span id="1415712587529S" style="display: none;"> </span><span id="1415712587019S" style="display: none;"> </span>MathCore
    *   New version of TStatistic class
*   Vc
    *   Update to the new version, 0.7.4 (the same as in the ROOT 6 branches)
*   IO
    *   Set the default for Davix to enable Davix.GSI.GridMode, to be consistent with the comment in the default system rootrc. GridMode is needed to use https with usual grid https endpoints such as SEs. [ROOT-6897](http://sft.its.cern.ch/jira/browse/ROOT-6897)
*   Hist
    *   Remove TH1::Clone and use (as before 5.34.23) TObject::Clone for cloning histogram
    *   Use TH1::Copy instead of TH1::Clone in TH1 and TProfile::RebinAxis
*   Core
    *   Put dictionary generated code into the ROOTDict namespace against a [bug in MSVC 12, 13](https://connect.microsoft.com/VisualStudio/feedback/details/817601/connectcrash-long-file-causes-vc12-update-1-c-compiler-to-crash-works-in-vc11)
*   RooStats
    *   Fix a problem in the BernsteinCorrection

<a id='23'></a>
## Changes in version v5-34-23 (November 7, 2014)


*   Build System
    *   Fix for [ROOT-6812](https://sft.its.cern.ch/jira/browse/ROOT-6812): Can't compile v5-34-22 on MacOS X in "configure mode"
    *   Silence anachronism warning on Windows with Vc.
    *   Add --enable-cxx14 and --cxxflag and --cflags to the configure script. For now --enable-cxx14 uses -std=c++1y. --cxxflag and --cflags should be used when custom configuring ROOT with compiler flags that affects binary compatibility (like -std=c++1y for example). This prevents this kind of important customization, historically done in MyRules.mk, from being 'forgotten' from root-config.
    *   Fix for [ROOT-6751](http://sft.its.cern.ch/jira/browse/ROOT-6751): etcdir not set
    *   CMake changes required for Mac OSX10.10 (Yosemite) - [ROOT-6836](http://sft.its.cern.ch/jira/browse/ROOT-6836)
*   Core

    *   Fix thread_local declaration (affecting gcc 4.7)
    *   Many changes to improve thread safety.
*   Math
    *   Fix for [ROOT-6879](http://sft.its.cern.ch/jira/browse/ROOT-6879): TMinuit destructor when gROOT has been already deleted
*   Histograms
    *   Fix TAxis::Copy function did not correctly handle the case where not all bins had labels.
    *   Implement TH1::Clone()
    *   Fix for [ROOT-6838](https://sft.its.cern.ch/jira/browse/ROOT-6838): memory leak in fftw classes
*   TTree
    *   Fix compilation on OSX 10.10 (Yosemite), see [ROOT-6856](https://sft.its.cern.ch/jira/browse/ROOT-6856)]
*   Graphics
    *   Fix for [ROOT-6561](https://sft.its.cern.ch/jira/browse/ROOT-6561): The character positioning was not correct with the cocoa backend.
    *   In some cases an extra point was drawn when a TGraph2D was drawn with P, P0 or PCOL.
    *   The hollow fill style was not rendered correctly by TTexDump. ([ROOT-6841](https://sft.its.cern.ch/jira/browse/ROOT-6841))
    *   It was possible to interactively zoom outside the histograms' limits. Protections have been added.
    *   Fix an [issue](http://root.cern.ch/phpBB3/viewtopic.php?f=3&t=18778) with E0 option and log scale.
    *   Better line width matching with screen and pdf output ([ROOT-6858](https://sft.its.cern.ch/jira/browse/ROOT-6858))
*   Http
    *   Imported new version of http server and jsroot (Sergey Linev)

<a id='22'></a>
## Changes in version v5-34-22 (October 10, 2014)


*   Build System
    *   Fix for [ROOT-6700](https://sft.its.cern.ch/jira/browse/ROOT-6700): Splash screen not shown with CMake builds with cocoa
*   I/O.
    *   Fix reading large files (2Gb+) containing a memberwise streamed classes with bases.
*   Hist
    *   Fix TH1::Rebin for [ROOT-6706](https://sft.its.cern.ch/jira/browse/ROOT-6706)
    *   Fix several thread safety problems in the handling of TFormulas.
*   MathCore
    *   Add function TKDTreeBinning::FindBin(x)
    *   Fix Anderson-Darling 2 samples test ([ROOT-6666](https://sft.its.cern.ch/jira/browse/ROOT-6666))
    *   Add Anderson-Darling test for binned data (histograms) ([ROOT-6069)](https://sft.its.cern.ch/jira/browse/ROOT-6069)
*   Graphics
    *   Implement typographically correct minus sign for axis labels and stats.
    *   New drawing option "violin" for 2D histograms.
*   TTree
    *   Prevent the possible implicit invalidation of a TTree's TTreeCache pointer, e.g. found with GetCacheRead(), after the cache has been explicitly requested with SetCacheSize(-1) ([ROOT-6698](https://sft.its.cern.ch/jira/browse/ROOT-6698))
*   Roofit
    *   Fix fitting of RooChebyshev in 2 separate ranges ([ROOT-6664](https://sft.its.cern.ch/jira/browse/ROOT-6664))
*   XNet
    *   Fix for wrong ReadV size from dCache [ROOT-6639](https://sft.its.cern.ch/jira/browse/ROOT-6639).

<a id='21'></a>
## Changes in version v5-34-21 (September 9, 2014)


*   Build System
    *   Polished a number of issues related to the CMake builds.
        *   The -pthread flag is now property set
        *   Improved FindPythia6.cmake
        *   Fixed warnings caused by assert() with NDEBUG
        *   The build area usable for running tests without the need of -Dtesting=ON
    *   Added new targets to support the release process (version, dist, distsrc)
*   GUI
    *   Added the mouse event information in the ROOT browser status bar (as in the TCanvas).
*   I/O
    *   Support for TTreePerfStat and multiple TTree.
    *   Disable the loading of the I/O rules form the file which could lead to a linear increase in time needed to open a ROOT file when opening many files.
    *   Fix [ROOT-6645](https://sft.its.cern.ch/jira/browse/ROOT-6645): problem in creating TTree when using TClass::IgnoreTObject.
*   PyRoot
    *   Fix end of processes issues ([ROOT-6547](https://sft.its.cern.ch/jira/browse/ROOT-6547)).
*   NetxNG
    *   Several fixes for XRootD v4 following tests from LHCb and ATLAS

<a id='20'></a>
## Changes in version v5-34-20 (August 13, 2014)


*   Thread support
    *   Update making ROOT I/O thread safe. This includes many changes including a complete change in the way IsOnHeap is calculated (requires valgrind-root.supp to hide valgrind false positive), the removal of StreamerInfo re-compilation, the addition of missing locks and the addition of the use of atomics and thread_local keyword, the merge CINT and ROOT locks, the extension of caching to avoid need for locks, performance improvements in TThread, clarification and extension of the interface to access elements details for a StreamerInfo and removal of more global variables.
    *   **IsOnHeap**

        The new algorithm relies on "<tt>TObject::operator new</tt>” writing a special values into memory in order to have <tt>TObject</tt>'s constructor determine if the object was made on the heap. This leads valgrind to issue:

        <pre>==9273== Conditional jump or move depends on uninitialised value(s)
        ==9273==    at 0x4E83982: TObject::TObject() (TObject.cxx:74)
        </pre>

        which is suppressed by <tt>$ROOTSYS/etc/valgrind-root.supp</tt>. A false positive happens only if an object derived from <tt>TObject</tt> is created on the stack and the stack happen to have the value <tt>0x99999999</tt> where the operator new would have wrote it. The consequence of a false positive is a double delete if, in addition, this object is an histogram or tree and this object was registered with a TFile object also allocated the stack.
    *   **TVirtualStreamerInfo interface changes**

        The existing interface:

        <pre>   virtual TStreamerElement *GetElem(Int_t id) const;
           virtual Int_t       GetOffset(Int_t id) const;
        </pre>

        now always takes an id which is the index of the, potentially covering more than one real data member, elements in the optimized list of elements.

        <pre>   virtual TStreamerElement *GetElement(Int_t id) const;
           virtual Int_t       GetElementOffset(Int_t id) const;
        </pre>

        are new an always take an id which is the index of the StreamerElement in the complete list (the non split list).
*   Cint
    *   Fix [ROOT-6542.](https://sft.its.cern.ch/jira/browse/ROOT-6542)
*   Core
    *   Fix [ROOT-6445](https://sft.its.cern.ch/jira/browse/ROOT-6445): TThread initialization prevent TApplication::Terminate() without user input.
*   TTree
    *   Add support for turn on and customizing the TTreeCache from the environment and .rootrc (see [commit 2201cac9](http://root.cern.ch/gitweb?p=root.git;a=commitdiff;h=2201cac9d4b38c4f3a7f485cd64861ed4c7dabe1))
*   Graphics
    *   Fix ROOT-6470: The marker definition in the TeX output generated by TTeXDump was misplaced.
    *   Implement the option FUNC for 2D histograms.<span style="white-space:pre" class="Apple-tab-span"></span>
*   Proof, NetxNG
    *   Add support for XRootD 4

<a id='19'></a>
## Changes in version v5-34-19 (Jul 9, 2014)


*   Core
    *   Fix compiler warning in TArray ([ROOT-5864.](https://sft.its.cern.ch/jira/browse/ROOT-5864)).
    *   Prevent out-of-bounds access in TClass::EscapeChars. ([ROOT-6239.](https://sft.its.cern.ch/jira/browse/ROOT-6239)).
*   I/O
    *   Fix memory leak in TKeyXML ([ROOT-6139.](https://sft.its.cern.ch/jira/browse/ROOT-6139)).
    *   Prevent random behavior in case of corrupted file (fNbytesFree)([ROOT-6240.](https://sft.its.cern.ch/jira/browse/ROOT-6240)).
    *   Allow TBranch::DropBaskets to drop the write basket if it is empty.
    *   Add support for multi-dimensional array in Cintex (when dictionary is generated via genreflex) ([ROOT-6243.](https://sft.its.cern.ch/jira/browse/ROOT-6243)).
    *   Better error handling and object deletion in TKey (fixes [ROOT-5648.](https://sft.its.cern.ch/jira/browse/ROOT-5648) and [ROOT-5649.](https://sft.its.cern.ch/jira/browse/ROOT-5649)).
*   TTree
    *   TTreePerfStats now calculated properly the unzipping time for its given TTree only.
    *   Fix TTreeCache learning when used by TTree::Draw (problem with SetEntryRange) ; this solves [ROOT-6103.](https://sft.its.cern.ch/jira/browse/ROOT-6103)
    *   Fix TTreeFormula to prevent miscaculation in case [ROOT-5545](http://root.cern.ch/phpBB3/viewtopic.php?t=18049>involving TCutG</a>.</li>

*   Proof
    *   Disable by default memory checks during event loop as they can impact significantly performance with fast I/O devices (no impact for CPU intensive tasks). They can be enabled by setting the parameter PROOF_MemLogFreq or the env PROOF_MEMLOGFREQ to the checking period in terms of events.
    *   Lite: reduce default number of old session logs kept in the sandbox to 1, to avoid filling up the sandbox.
    *   Server side: add support unix secondary groups in group access control.
    *   Fix memory leak in TProofDraw due to double histogram cloning. Affects repeated queries with large histograms.

* RooFit
    *   Fix the computation of fit parameter errors in weighted extended maximum likelihood fits

* RooStats
    *   Improve StandardHypoTestInvDemo macro to add option (enableDetailedOutput) to save the fit result informations for every generated toy event in the output result file. Fix also the running with Proof.

* HistFactory
    *   Fix initialisation of data member of some classes (e.g. ShapeSys)

* Vc
    *   Upgrade to latest Vc version (0.7.3)

* TMath
    *   Add a new more accurate (although a factor of 2 slower) implementation of TMath::RMS.

*   GUI
    *   The "Move Opaque" way to place interactively objects on canvas, has been extended to all objects.
    *   Implement the Guide Lines to place object on the canvas.
    *   The transparency sliders change the transparency only for the edited object.
    *   For a fine adjustment at the pixel level, the arrow keys can be used to move object on pad.
    *   The zoom on axis and on 2D histogram has be improved. A shaded area is shown instead on simple lines. Also it is possible to zoom a 2D histogram with a shaded rectangle.
*   Graphics
    *   TGaxis::SetMaxDigits() was not active on standalone TGaxis.
    *   With the Cocoa backend on Mac the text string were a bit too large compared to the TTF rendering.
    *   Fix ([ROOT-6305.](https://sft.its.cern.ch/jira/browse/ROOT-6305)).
    *   Add color setters allowing the transparency definition.
    *   Fix some alignment issue in TLegend.
    *   TLatex interface to TMathText did not work in case the text size was specified in dots.
*   Math
    *   Import from master version a new improved version of Minimizer interface.
    *   Introduce a new class ROOT::Math::BasicMinimizer for implementing some common method of the MInimizer class. This new class is used by several GSL minimisers.
    *   Add the parameter bound values in FitResult.
    *   Improve MinimizerOptions class. Use it as the container for the options in ROOT::Math::Minimizer.
    *   poly several improvements and fixes to GeneticMinimizer
*   Minuit2
    *   add a new method to set the name of an existing parameter ([ROOT-5387](https://sft.its.cern.ch/jira/browse/ROOT-5387)).
*   GenVector
    *   Fix a bug in VectorUtill::RotateZ
*   Hist
    *   Improve the merging of histogram with user defined binning ([ROOT-5542](https://sft.its.cern.ch/jira/browse/ROOT-5542))
    *   Fix a bug when some of the merged histogram have zero entries ([ROOT-5509](https://sft.its.cern.ch/jira/browse/ROOT-5509))
    *   Fix a bug when merging histograms without bin limits with histogram with bin limits.
    *   Fix the projections of TProfile2D to TProfile, by implementing TProfile2D::ProfileX(Y) and the projections TProfile3D to TProfile2D by implementing TProfile3D::Project3DProfile ([ROOT-6620](https://sft.its.cern.ch/jira/browse/ROOT-6220))
    *   Improve the title of the created histograms in SetShowProjections
    *   Merge from the master a new version of TUnfold (v.17)
    *   Fix TH1::Fit to draw only the function when fitting an histogram already plotted in a pad. (See [RootTalk-18071](http://root.cern.ch/phpBB3/viewtopic.php?f=3&t=18071))
*   Net
    *   New HTTP Server package

        A new HTTP Server package has been introduced. The idea behind such server is to provide direct access to the data from a running ROOT application. Any object can be streamed when requested and delivered to the browser.

        To start http server, at any time create instance of the **`THttpServer`** class like:

        `serv = new THttpServer("http:8080");`

        This will start civetweb-based http server on port 8080\. Then, one should be able to open address "http://localhost:8080" in any modern browser and browse objects created in application. By default, the server can access files, canvases and histograms via gROOT. All such objects can be displayed with JSRootIO graphics.

        At any time one could register other objects with the command:

        `TGraph* gr = new TGraph(10);
         gr->SetName("gr1");
         serv->Register("graphs/subfolder", gr);`

        If the object content is changing in the application, like for example histograms being continuously filled, one could enable the monitoring flag in the browser, then the object view will be regularly updated.

    *   Introduce GZIP compression on the server side. Now one can request JSON (or any other data) in zipped form like:

        `wget http://localhost:8080/Canvases/c1/root.json.gz`

        This solves problem with JSON using over network - such compressed file is about the same size as binary buffer. For that particular canvas (from hsimple.C example)

        <table>

        <tbody>

        <tr>

        <td>root.json</td>

        <td>12994 bytes</td>

        </tr>

        <tr>

        <td>root.json?compact=3</td>

        <td>8695 bytes</td>

        </tr>

        <tr>

        <td>root.json.gz?compact=3</td>

        <td>2071 bytes</td>

        </tr>

        </tbody>

        </table>

        It is factor 4 less data, transmitted between server and client.

        "root.bin" request has also been modified. Now it is just data produced by TBufferFile without any additional headers.One can also compress such data with gzip:

        `wget http://localhost:8080/Canvases/c1/root.bin.gz`

*   Build
    *   Do not parse rootlogon.C during make htmldoc ([ROOT-4394](https://sft.its.cern.ch/jira/browse/ROOT-4394)).

<a id='18'></a>
## Changes in version v5-34-18 (Mar 14, 2014)

 <font size="-2">Binary Incompatible</font>

*   Build System
    *   Fix build problem on OSX 10.9 with the new Xcode 5.1 and clang-503.0.38 (undefined symbol TStreamerInfo::WriteBufferAux<char**>()).
*   Graphics
    *   Implement this option `pads`. This option is equivalent to the one in `THStack`. It allows to draw all the `TGraphs` in separated pads.
    *   Introduce the flag `CanvasPreferGL` in `rootrc.in`. So OpenGL can be use by default. The default value for this flag is 0 (no OpenGL).
    *   Fix size issues with the FTGL text.
    *   Make `TMathText` work with FTGL
*   Hist
    *   TH2Poly: implement a simple version of "Scale"
*   Core
    *   TUrl: Fix bug inadvertently introduced in 5.34/15 preventing PROOF from working at all.
*   Proof
    *   See Core (important)
    *   Fixed bug [ROOT-5337](https://sft.its.cern.ch/jira/browse/ROOT-5337) preventing proper use of existing TH2, TH3 histograms with the draw functionatlty.
*   Math

    *   Include in the distribution the Vc library from Matthias Kretz (see Vc [Web Site](http://code.compeng.uni-frankfurt.de/projects/vc))
    *   Include in the distribution also the vdt mathematical library from D.Piparo, V. Innocente, T. Hauth (see [vdt Web](https://svnweb.cern.ch/trac/vdt))
    *   Remove in TLorentzVector the constructor using default input values. Now can be used only the default constructor to build a vector with zero values or the constructor passing 4 values. (this fixes [ROOT-4592](https://sft.its.cern.ch/jira/browse/ROOT-4592)).

<a id='17'></a>
## Changes in version v5-34-17 (Feb 24, 2014)

 <font size="-2">Binary Incompatible</font>

*   I/O
    *   Fix schema evolution for std::map when one of the type (key or value) is a class and changed ('was renamed'). This fixes [ROOT-6064.](https://sft.its.cern.ch/jira/browse/ROOT-6064)
*   Graphics
    *   The histogram drawing option "9" as been removed. It is not needed anymore since the line compression has been implemented in `TPadPainter`.

## Changes in version v5-34-16

*   This version does not exist.

## Changes in version v5-34-15 (Feb 11, 2014)
 <font size="-2">Binary Incompatible</font>

*   Platform support
    *   On OSX >= 10.8 use by default the Cocoa backend instead of X11\. The Cocoa backend works much better on Retina displays. To build the X11 version configure with --disable-cocoa.
*   CINT / genreflex
    *   Enable Intel compiler icpc in genreflex ([ROOT-5848](https://sft.its.cern.ch/jira/browse/ROOT-5848)).
*   Core
    *   Fixed the implementation of TClass::InheritsFrom(const char*) when the class does not have a dictionary.
*   I/O
    *   Fix the reading of the case where the last branch/data member of a class in no longer in memory, and is the source of a rule, it was inadervently marked as not-to-be read (effectively preventing the execution of the rule). ([ROOT-5831](https://sft.its.cern.ch/jira/browse/ROOT-5831)).
*   TTree
    *   Prevent spurrious warning (<tt>TRefTable::Add: SetParent must be called before adding</tt>) when a TRef-ed object is stored in the TTree list of user info.
    *   Extended TTreeIndex and TTreeFormula to support 64 integers.
*   Graphics
    *   <tt>TPad::Print()</tt> really works on <tt>TCanvas</tt> only. A protection has been added in case it is called on a pure TPad.
    *   Implement the Candle Plots (Box Plots) for 2D histograms.
*   Hist
    *   Add an error message in TH1::GetBinWidth/GetBinLowEdge when called from a TH2/TH3 histograms. (ROOT-5049)
*   Pythia6 and Pythia8
    *   Fix in Pythia6 for longer than 8 char beam names, like: "gamma/mu+"
    *   Fix in Pythia8 to allow initialisation for beams with different energies, and add some useful information printing methods.

<a id='14'></a>
## Changes in version v5-34-14 (Dec 16, 2013)

 <font size="-2">Binary Incompatible</font>

*   Net
    *   Import of TDavixFile plugin for the DavIx HTTP/WEBDAV access library. The TDavixFile will replace TWebFile for HTTP file access as it supports all possible HTTP/WEBDAV features, including the writing of files. To compile this plugin use the $ROOTSYS/build/unix/installDavix.sh script to install libdavix. To turn this plugin on by default edit $ROOTSYS/etc/system.rootrc and set: Davix.UseOldClient: no.
    *   Import of the TNetXNGFile plugin, which uses the Next Generation (NG) xrootd client code. To compile this plugin use the $ROOTSYS/build/unix/installXrootd.sh script to install xrootd >= 3.3.5, needed by the NG plugin.
*   MathCore
    *   Add a protection to create the Minimizer classes in multiple threads (Fix [5335](https://sft.its.cern.ch/jira/browse/ROOT-5335))
*   Graphics
    *   New option "noclear"in THStack::Draw() (Fix [5241](https://sft.its.cern.ch/jira/browse/ROOT-5241)).
    *   SVG output: some markers did not show in Google-Chrome.
*   Hist
    *   Add a new function TH1::Chisquare (see [4722](https://sft.its.cern.ch/jira/browse/ROOT-4722)). Add in TGraph::Chisquare the possibility to compute the chi-square in the given function range. The default is now to use all graph points (different than 5.34.13).
    *   Fix a bug in TAxis::SetBinLabel, when updating a bin label (Fix [5025](https://sft.its.cern.ch/jira/browse/ROOT-5025)).
    *   Improve TH2::FillRandom to use the integral of the function in the bin. Make a check that it can be used only for TF2 functions (Fix [5608](https://sft.its.cern.ch/jira/browse/ROOT-5608)).
    *   Implement for all TProfile classes SetBinLengths. (Fix [5611](https://sft.its.cern.ch/jira/browse/ROOT-5611))
*   CINT / Reflex
    *   Pass "--gccxmlopt" to gccxml also with --print; allow lcg-g++-* ([ROOT-5810](https://sft.its.cern.ch/jira/browse/ROOT-5810), f145436)

<a id='13'></a>
## Changes in version v5-34-13 (Dec 1, 2013)

 <font size="-2">Binary Incompatible</font>

*   I/O
    *   Fix an issue with the file generated by MakeProject when std::set or std::multimap are involved. This fixes [ROOT-5730](https://sft.its.cern.ch/jira/browse/ROOT-5730)
*   Graphics
    *   In <tt>TColor::SetPalette</tt> predefined palettes were redefined even if it was not necessary.
    *   Better way to handle the string input in the Pad toolbar.
*   Core/Meta
    *   Implement passing of Reflex Properties to the new TClassAttributeMap.
*   Hist
    *   Adopt THnBase (and thus THnSparse and THn) to changes in TAxis::SetRange().

## Changes in version v5-34-12 (Nov 19, 2013)
 <font size="-2">Binary Incompatible</font>

*   Platform support
    *   Completed OSX 10.9 (Mavericks) port, roottest runs now without errors to completion.
*   Core
    *   Fixed possible buffer overflow in TDirectory::DecodeNameCycle (it was also affecting multi-dataset processing by name in PROOF).
*   I/O
    *   Add TBuffer::ReadVersionNoCheckSum to allow reading the version of classes that were always versioned but used to have a version number equal to zero (and no byte counte was stored).
*   TTree
    *   Fix a problem when a TTree alias was used in a boolean expression. In some circumstances the branch(es) used in the alias would not be loaded properly leading to random results (i.e. passing the result on the previous entries' value).
*   Graphics
    *   In TGaxis: In some case the format use to build the axis labels was incorrect. (cf: Jira report ROOT-5635).
    *   New static function to change the position of the "power of 10" near the axis.
*   Proof
    *   TSelectorList (used for the output list) now derives from THashList speeding up names lookups during merging
*   MathMore
    *   Add possibility to skip a given n value of quasi-random numbers

<a id='11'></a>
## Changes in version v5-34-11 (Oct 31, 2013)

 <font size="-2">Binary Incompatible</font>

*   Platform support
    *   Added support for OSX 10.9 (Mavericks). OSX 10.9 comes only with the clang compilers and the new libc++ C++ run-time library. As libc++ is not compatible with libstdc++, third party C++ libraries have to be recompiled on 10.9 to be able to be used with ROOT.
*   Core
    *   Fix thread safety of the creation of a TThread was an already running thread.
    *   Reduce the risk of out-of-order execution of file and socket closing (compared to when the libraries are unloaded) by using atexit.
    *   Extend TInterpreter interface with a DeleteVariable() method so that all RooFits interpreter interactions can now be handled through the abstract interface.
    *   Fix end of process issues when a TApplication object is not [created and then] deleted before the end of main. [ROOT-5620](https://sft.its.cern.ch/jira/browse/ROOT-5620) and [GENSER-157](https://sft.its.cern.ch/jira/browse/GENSER-157)
*   I/O
    *   I/O protocol "xroot://" now also supported and doing same as "root://".
    *   Properly call an I/O rule that applies to a whole object that is split (deficiency introduced in v5.34/10). This fixes [ROOT-5483](https://sft.its.cern.ch/jira/browse/ROOT-5483)
    *   Fix a memory leak while reading a std::vector<bool>. This fixes [ROOT-5539](https://sft.its.cern.ch/jira/browse/ROOT-5539).
    *   Fix thread safety of TGenCollectionProxy's iterator creation.
    *   Fix a memory issue when cloning some file with freed-up blocks. This fixes [ROOT-5616](https://sft.its.cern.ch/jira/browse/ROOT-5616)
*   TTree

    *   Fix spurrious issue when same name was twice in branch name. This fixes [ROOT-5628](https://sft.its.cern.ch/jira/browse/ROOT-5628)
*   RooFit (with substantial contributions from M. Schiller)

    *   Various speedups in core code in management of expression trees (faster lookup of nodes, cloning of expression trees etc...)
    *   Make RooAbsArg::setExpensiveObjectCache() virtual so that cache association of RooRealVar objects never happens. Fixes ROOT-5502
    *   Trim verbosity of algorithms that optimize likelihood calculations prior to fit: nodes evaluated in cache-and-track mode are only reported if there are less than 20, otherwise only the number of such nodes is reported
    *   Add option to optimize calculation of likelihoods represented by stacks of RooHistFuncs stored in a RooRealSum by evaluating them as a genuine binned likelihood, rather than as a probability density function with an extended likelihood term. To activate this feature, the RooRealSumPdf must have a boolean attribute "BinnedLikelihood" set.
    *   Modify workspace strategy for importing functions and pdfs with embbeded datasets (such a RooHistPdf). Now store datasets that were not already imported in workspace in a separate 'embedded datasets namespace' that is also visible to the user. Previously such imported datasets were inivisible.
    *   Extend string buffer size of RooDataSet ctor with importSlices() argument
    *   Bug fix in RooRealIntegral in classification of exclusive lvalue branches
    *   Add horizontal morphing option to RooMomentMorph [ M. Baak ]
    *   Modify RooCintUtils to route all interpreter interactions through TInterpreter rather than calling CINT functions directly. This unifies the RooFit code with that in the master branch that now works with cling rather than cint.
    *   Make RooAbsReal::plotOn() version taking a RooLinkedList of arguments a public method
    *   Fix potential race condition bidirectional memory-mapped pipe used for multi-core likelihood parallelization
    *   Fixes to SumW2Error() option of RooAbsPdf::plotOn()
    *   RooHistPdf now has analytical integrals over subranges
    *   RooFit::Minimizer() option now recognized by RooAbsReal::chi2FitTo()
    *   In RooRandom() allow internal generator to be modified by user
    *   In RooRandom::uniform() for arrays use TRandoms RndmArray method for greater speed.
    *   Optimize histfactory classes PiecewiseInterpolation and FlexibleInterpVar for speed
    *   Fix in handling of extended likelihood terms when using SumW2Error correction for weighted unbinned data
*   PROOF
    *   Import improvements in TProofBench: recording and display of the maximum rate during query, CPU efficiency calculation for PROOF-Lite runs, better measurement of wall time.
    *   MInor fixes in the new dataset manager mostly for multi-dataset processing
*   Graphics
    *   In TLatex some operators like #minus #plus #mp #hbar ... ignored the color defined by the operator #color.
    *   In TLatex: implement #minus and #plus typographically better than the standard "-" and "+".
    *   Make sure all greek and math symbols are printed correctly by TTexDump.
    *   Implement dummy operators #mbox and #hbox to improve the compatibility between TLatex, TMathText and TTexDump.
    *   In TMathText: implement \frac using \over.
    *   In TMathText: Treat \mbox as \hbox to improve the compatibility with TTexDump.
    *   TLegend:
        *   The line attribute of objects in the legend were not taken into account with the option "e".
        *   In case of automatic computation of the legend items' size, the text size was wrong if the font precision was set to 3.
        *   Improve the spacing between lines. Due to the way the vertical text centring is done (bounding based) the spacing between lines may appeared irregular in some cases.
        *   The error bar in the legend (option "E") didn't have the line attributes when drawn alone (without option "L").
    *   In PDF files, italic greek characters were not correct for non null text angle.
*   Eve
    *   Bugfix in TEveStraightLineSet::ComputeBBox() -- existence of markers was not checked before creating a null bounding box. This lead to objects with no lines (only markers) being skipped during rendering, effectively making them invisible.
*   MathCore
    *   Speed-up TMath::NInt by making it inline and using templates (see [ROOT-5290](https://sft.its.cern.ch/jira/browse/ROOT-5290))
    *   Use std::abs to implement TMath::Abs (see [ROOT-5473](https://sft.its.cern.ch/jira/browse/ROOT-5473))
*   MathMore
    *   Add quasi-random numbers based on GSL
*   SMatrix
    *   Add several improvements to the Cholesky decomposition provided by M. Schiller

<a id='10'></a>
## Changes in version v5-34-10 (Aug 29, 2013)

 <font size="-2">Binary Incompatible</font>

*   Core
    *   Improve TFormula performance when it calls C++ functions
*   I/O
    *   Add proper support for custom collection (i.e class that have a CollectionProxy but are not STL collections).
    *   Fix support of iotype=Double32_t in Cintex when this was the only used of Double32_t seen by genreflex
*   TTree
    *   Fix the reading a 8 bit integer by TTree::ReadFile and TTree::ReadStream
*   Eve
    *   Consolidate handling of TGFileBrowser* TEveBrowser::fFileBrowser member, see [ROOT-5294](https://sft.its.cern.ch/jira/browse/ROOT-5294).
    *   Fix TEveTrackPropagator::LineIntersectPlane, see [ROOT-5373](https://sft.its.cern.ch/jira/browse/ROOT-5373).
*   PROOF
    *   Dynamic addition of workers to a currently running process (currently supported by the unit packetizer)
    *   Interface with igprof for fast statistic profiling.
    *   Fix PROOF-Lite crash at destruction reported in [ROOT-5280](https://sft.its.cern.ch/jira/browse/ROOT-5280).
    *   Import patch to fix fatal bug in xproofd affecting setups using authentication introduced in 5-34-06 (synptom: session do not start).
    *   Modification of output sending protocol to control memory usage as described in [PROOF-30](https://sft.its.cern.ch/jira/browse/PROOF-30).
*   Graphics
    *   <tt>TGraph::Draw()</tt> needed at least the option <tt>AL</tt> to draw the graph axis even when there was no active canvas or when the active canvas did not have any axis defined. This was counter-intuitive. Now if <tt>TGraph::Draw()</tt> is invoked without parameter and if there is no axis defined in the current canvas, the option <tt>ALP</tt> is automatically set.
    *   TH1s were drawn improperly in "Logx" mode if "X" axis starts at negative values (see Jira report ROOT-4505).
    *   Fix some misplacements of characters in TLatex formulae (with TASImage).
    *   New class <tt>TTeXDump</tt> to generate PGF/TikZ vector graphics output
    *   Allow parenthesis in PDF and PS file names.
*   RooFit (with substantial contributions from M. Schiller)
    *   Deprecate RooComplex, adapt rest of code to use std::complex instread
    *   New faster & more precise implementation of complex error function
    *   Analytical integrals for RooChebychev
    *   In RooAbsPdf::plotOn() allow to project an asymmetry of region
    *   Change multi-core likelihood calculation strategy: keep master node idle and farm out all calculations to slave nodes
    *   Fix treatment of weighted datasets with RooSimultaneous (Fixes ROOT-5229)
    *   Implement new method of interprocess communication for multi-core likelihood calculation with lower IO overhead: a class BidirMMapPipe, which buffers communications internally and minimizes times spent in OS
    *   Make RooAbsReal::EvalError contain std::strings rather than character arrays to support untruncated lengthy error messages
    *   Implement Kahan summation of likelihood components over process boundaries
    *   Bug fix in assignment of extended term calculation to slave process ID, which caused extended term to be omitted in some special cases
    *   Check for positive eigenvalues of covariance matrix with weights squared when using SumW2Error() option in RooAbsPdf::fitTo()
    *   Implement analytical integrals and maximum reporting for RooKeysPdf
    *   Save RooRealVar bin boundaries in sorted vector instead of set to speed up bin lookup
    *   Update hashing algorithm to construct unique object names from crc32 to FNV1a to obtain better hashing for short strings

<a id='09'></a>
## Changes in version v5-34-09 (Jun 26, 2013)

 <font size="-2">Binary Incompatible, xproofd not usable with authentication (use >= 5.34/10)</font>

*   Core.
    *   Add TInterpreter::SetClassSharedLibs to extend and replace G__set_class_autoloading_table
*   I/O.
    *   Fix the handling of rule that specify a version range "[1-]" but applies to a classes with a specified version numbered. It now properly applies to all schemas.
    *   Prevent out-of-bounds access when switching a TBuffer from Read to Write mode.
    *   Fix spurrious (fatal) removal of duplicate part of branch names.
         Since v5-34-06 (specifically commit b454e81), a TTree fails to save the content of a branch that is part of a split STL collection and whose name (of the data member) match some other component of the branch name (and the two must be separted my at least one level).
         For example out.OBJ.vec.OBJect or TH1DMEtoEDM_MEtoEDMConverter_MEtoEDMConverterRun_TEST.obj.MEtoEdmObject.object. When reading the file back in **v5-34-06, 07 or 08**, this will result in the data not being written and the missing data not being noticed in any way by the I/O .. but of course, it is not being read. When reading the file back with v5-34-05 or below, this can result in error messages like:

        <pre>Error in <tbufferfile::readversion>: Could not find the StreamerInfo with a checksum of 0x20000 for the class "TH1F" in output.root.</tbufferfile::readversion></pre>

    *   Issue an error/warning when the source field of a I/O customization rule is not a list of "type name"
    *   No longer ignore rules that target an existing member but do not have it as a source; instead this rule signal that the input should be ignored.
    *   Issue a Fatal error when TTree::BranchOld is called for a non-TObject class.
    *   Fix ROOT-5297 by fixing the implementation of TClass's MoveAddressInRepository.
    *   Fix several issues found by running clang's AddressSanitizer
*   CINT.
    *   Fix rootcint -I / defined_in on Windows for histfactory (a079afe).
*   Proof
    *   Import fixes for TProofBench in dynamic startup mode. TProofBench needs to know the maximum number of workers and to setup the context for the benchmark run. For this it was relying on TProof::GetParallel and TProof::GetListOfSlaveInfos. The information obtained was not correct in the case of a dynamic worker setup. This patch fixes several small issues related to this which are also relevant for the dynamic addition of workers.

<a id='08'></a>
## Changes in version v5-34-08 (May 31, 2013)

 <font size="-2">xproofd not usable with authentication (use >= 5.34/10)</font>

*   Meta and I/O
    *   Avoid null pointer deference in TStreamerBase.
    *   Add Error message when missing dictionary for STL collection.
    *   Issue an error in the case of missing dictionary for STL base class of compiled classes.
    *   Prevent integer overflow (unsigned int/int conversion) in TEmulatedMapProxy.
    *   Implement a correct Write() method also writing the map value.
    *   Add a example on how to grab the aggregate size on disk or memory for a branch.
    *   Give example on how to create nested subdirectories.

    *   add support for some the I/O rule element to be optional (in particular source and target)
*   Proof
    *   Import some fixes from the master, mostly related to dynamic startup.
    *   Import fix for the processing rate and local sub-merging (thanks to B. Butler, M. Swiatlowski).
    *   Import improvement in worker log naming and handling, relevant for the dynamic mode.
    *   Import fix for potential issue with the generation of the TProofBench PAR files.
*   Geom
    *   Precision fix for TGeoPolygon affecting convexity checks and subsequently navigation for nearby vertices at large coordinates values.
    *   Precision fix for safety calculation for a conical segment of a polycone
    *   Precision fix for Boolean nodes affecting distance calculations from boundary points with inconsistent in/out state
    *   Added user-defined extensions to volumes and nodes. This can be done inheriting from the base class TGeoExtension. To attach a user TObject derived class, one can use the reference counted TGeoRCExtension. The TGeoExtension class allows for either using or not reference counting. A utility TGeoRCPtr was added to allor smart reference counted pointers. To attach a user extension, use TGeoVolume::SetUserExtension() or TGeoNode::SetUserExtension(). To grab a reference counted pointer use GrabUserExtension(), to simply use/release use the method GetExtension().
    *   Added possibility to draw polygons in 2D using TGeoPolygon::Draw() or TGeoXtru::DrawPolygon()

![](http://root.cern.ch/drupal/sites/default/files/images/polygon.preview.gif)

<a id='07'></a>
## Changes in version v5-34-07 (April 26, 2013)

 <font size="-2">xproofd not usable with authentication (use >= 5.34/10)</font>

*   I/O
    *   Repair support for std::bitset (broken in v5-34-06).

## Changes in version v5-34-06 (April 19, 2013)
 <font size="-2">Binary Incompatible, xproofd not usable with authentication (use >= 5.34/10)</font>

*   Core
    *   Prevent silent potential data corruption when reaching more than 16777215 references objects and increase the maximum number of references object to 16777215*65535\. This addresses the Savannah report [#97630](https://savannah.cern.ch/bugs/?97630) and [#93360](https://savannah.cern.ch/bugs/?93360).
    *   In TPRegexp::Compile() do not call Optimize() if regexp compilation has failed. Add a static flag 'Bool_t TPRegexp::fgThrowAtCompileError' that allows callers to intercept a faulty regexp being passed to Compile(). When this flag is in effect, a failed regexp compilation throws a std::runtime_error. Add member function 'Bool_t TPRegexp::IsValid() const' that returns true if the object holds a valid compiled representation of the regexp.
    *   Add support in genreflex for data member that are arrays and are source or target of an I/O customization rule
    *   TClonesArray::Delete now deletes properly the content of the objects even when they are representing an emulated class.
*   IO
    *   Allow the implicit conversion from any type of numerical STL collection to any other type of numerical STL collection (e.g. vector<int> to list<float>)
    *   Implement the implicit rule for matching pair (based on being able to convert their content)
    *   hadd now enables Cintex (if it has been built) so that library that are autoloaded and have a Reflex dictionary are effectively used. This fixes Savannah Report [#100759](https://savannah.cern.ch/bugs/?100759).
    *   In genreflex add support for some the I/O rule element to be optional (in particular source and target)
    *   Extent/correct the detection of renamed classes
    *   Implementation the streamerInfo actions for kBits
    *   Improve performace of reading a vector of non-class type by 25% (i.e. std::vector<int>).</int>
    *   Improve performance of reading a branch with an std::list<int> by 25% by migrating to using the StreamerInfoAction and by implementing the access to iterator (creation, copy, increment, delete) via template function (rather than reallying on the slow mechanism using 'At' (and its use of the fEnv) ...)
    *   Remove inadvertent match between 2 unrelated STL collection containing objects.
    *   Add the concept of implicit rules to (centrally) support automatic translation of STL collection from numeric type to other numeric type or for when the contained class has some rules. Currently enabled only when the target is an std::vector.
    *   Fix the Conversion of a Double32 or Float16 inside a collection of object to another type (the previous implemetation was not supporting the customization of the factor nor the number of bits).
*   TTree
    *   In SetBranchAddress, use the result of CheckBranchAddressType to decide whether to actually use the address or not. This avoid mis-using the user's pointer (but also might make invalid/awkward code fails). To prevent the check (and hence for the use a pointer no matter what), the user needs to cast the pointer to a void*.
    *   SetBranchAddress now returns an error code.
    *   In TTree::SetBranchAddress, properly reset the TargetClass when the address is changed (back) to the original type.
    *   Issue an error message if the class type of the argument to TTree::SetBranchAddress can not be determined (missing dictionary but having only a typeid).
    *   Correct the behavior when attempting to create a branch with split level zero with an object that requires the use a TBranchObject (for example TVector3). See the ROOT Forum [#15975](http://root.cern.ch/phpBB3/viewtopic.php?t=15975)
    *   Properly handle the evolution of an STL container containing a class with contains sub-object.
    *   Extend the output of TTree::Print(debugInfo) to include the action sequence information (and add support for the sub option 'func' that also prints the function's (mangled) name.
*   Math
    *   Put explicit template instantiations from ChebyshevPol.h in implementation file, to avoid duplicate symbols that prevented static linking from succeeding.
*   Net
    *   The class TS3WebFile was modified to support also reading files hosted by Google using the S3 protocol. Its TFile plugin was also modified to reflect this.
*   Proof
    *   Import patch [#46634](http://root.cern.ch/viewvc?rev=46634&root=root&view=rev) removing the dependence on the XRootD header XrdSutAux.hh
    *   Import patch [#48766](http://root.cern.ch/viewvc?rev=48766&root=root&view=rev) fixing a possible double-delete when a selector is processed by object.
    *   Import patch [#48939](http://root.cern.ch/viewvc?rev=48939&root=root&view=rev) fixing problem in pq2-verify.
    *   Import patch [#49113](http://root.cern.ch/viewvc?rev=49113&root=root&view=rev) fixing a possible crash in submerger mode due to missing protection.
*   PyROOT
    *   Support for python3.3.
*   GL
    *   Make camera state streamable. See tutorials/eve/camera_restore.C
*   Eve
    *   TEveRGBAPalette: fix bug in palette color interpolation.
*   RooFit
    *   **Fix for the notorious 'proxy error' problem that would crash toy studies
         of complex models after a couple of hours of running**
    *   Eliminated most memory leaks
    *   Support up to 9 arguments in RenameVariables() argument of RooWorkspace::import()
    *   Introduce new generic MultiArg() named argument that can be passed to any RooFit function taking named argument with the purpose of extending the maximum number of accepted named arguments. Since MultiArg() can be nested inside RooMultiArg() there is now no technical limitation on the numer of named arguments that can be passed
    *   In RooCategory interpert the null-range as the default range so categories behave analogous to RooAbsReals when used with ranges
    *   In RooPlot avoid drawing of stray entry in first bin when user has TH1::DefaultSumW2() set to kTRUE
    *   Improve robustness of likelihood offsetting procedure that is enable via the Offset(kTRUE)
         argument to RooAbsPdf::createNLL() or RooAbsPdf::fitTo()
    *   In RooWorkspace allow to access snapshot contents as RooArgSet [ JIRA-ROOT-178 ]
    *   Fix bug in parallelized likelihood calculations (NumCPU(n)) for models that have extended likelihood components in one bin. With this fix likelihood parallization will work robustly for all known HistFactory-style models
    *   Add new strategies to parallelize likelihood calculations over multiple cores. New strategies allow to distribute whole pdf components over cores instead of splitting them internally. This is particularly efficient for small components (with few associated dataset entries). The new 'hybrid' parallelization option will automatically select this strategy for small components, while keeping the 'BulkPartition' internal splitting for larger components
    *   In RooMinuit improve retrieval of MINOS status code
    *   Update RooNovosibirsk with analytical integral (M. Petric -JIRA-ROOT-5013)
    *   In RooProfileLL fix crash in call to bestFitObs() prior to calling getVal() [ JIRA-ROOT-4884 ]
    *   Allow Bool_t datatypes in TTrees to be associate with RooRealVars in RooDataSets [ JIRA-ROOT-179 ]
    *   Fix RooAbsData::addColumn() for datasets that are internally represented as a composit dataset,
         i.e datasets from RooSimultaneous::generate() [ JIRA-ROOT-4771 ]
    *   In RooFitResult::createHessePdf() fix variable mapping problem in info message [JIRA-ROOT-4993 ]
    *   Fix chi^2 calculation when empty bins are present in RooCurve::calculateChi2() [ JIRA-ROOT-4826 ]
    *   Fix RooAbsReal copy ctor - include plot label as well [ JIRA-ROOT-4987 ]
    *   Fix possible hangup in NumCPU() multi-core parallization of likelihood when complex errors
         occur on the server-side
*   HistFactory
    *   Fix broken schema evolution of class HistFactory::Measurement with full backward compatibility
*   RooStats
    *   In ModelConfig add sanity check that objects passed to SetNuisanceParameters(),
         SetPOI() etc are genuine variable objects and not functions

<a id='05'></a>
## Changes in version v5-34-05 (Feb 14, 2013)

 <font size="-2">Binary Incompatible</font>

*   Core
    *   Updated the class checksum calculation to be more platform independent. Notably this changes the value of checksum for classes that inherit from STL collections.
*   I/O
    *   Enhance the performance of reading STL collection by 25%.
    *   Enabled the implicit conversion from any colletion of a Type to any other collection of a compatible type. Compatible types includes two numerical types, two class for a explicit renaming I/O customization rule and two std::pair of compatible types.
    *   Fix compilation errors with castor 2.1.13-6 (DLL_DECL is not defined in Castor anymore)
    *   Remove a race condition in the asynchronous TFile prefetecher. This fixes the Savannah report
    *   Added possibility to merge only a list of objects/folders from the input files, specified by name,
        or to skip them from merging. This is fully integrated with the new PartialMerge(flags) schema.

Usage:
The names of the objects to be merged or skipped have to be specified using the interface:

    _TFileMerger::AddObjectNames(const char *names)_
 This method can be called several times to add object names. Several names can be added with one
call separated by single blancs (no blanc at the end). Directory names are accepted, applying the
merging selection to all content. Two new options are being supported for partial merging:

    _TFileMerger::PartialMerge_**(flags | kOnlyListed)**
 This will merge only the objects in the files having the names in the specified list. If a folder is
specified, it whole content will be merged

     _TFileMerger::PartialMerge_**(flags | kSkipListed)**

This will skip merging for the specified objects. If a folder is specified, its whole content will be skipped

**Important note:** The kOnlyListed and kSkipListed flags have to be bitwise OR-ed
on top of the merging defaults: kAll | kIncremental (as in the example $ROOTSYS/tutorials/io/mergeSelective.C)

*   Graphics
    *   Implement <tt>#backslash</tt> in TLatex.
    *   Add the optional parameter "alpha" to TColor::SetPalette. The default value is 1\. (opaque palette). Any value between 0\. and 1 define the level of transparency. 0\. being fully transparent and 1\. fully opaque.
    *   Implement transparency for GL in Pad (<tt>gStyle->SetCanvasPreferGL(1)</tt>).
    *   Fix a [problem with the option SAME](https://savannah.cern.ch/bugs/?100221).
*   Proof
    *   Correctly set the PROOF internal protocol value to the level required by the new dataset staging request functionality.
    *   Import patch [#48355](http://root.cern.ch/viewvc?rev=48355&root=root&view=rev) with important fixes in TDataSetManagerAliEn.
    *   Import patch [#48439](http://root.cern.ch/viewvc?rev=48439&root=root&view=rev) with fixes/modifications in xpdtest, setxrd.sh and installXrootd.sh.
*   Eve
    *   Added a few extra class members to TEveRecTrackT needed by ALICE.
*   RooFit
    *   Make sure 'generic projection terms' of a RooProdPdf, as well assits payload
         are associated with the expensive object cache of the RooProdPdf, so that
         these are cached in workspace files when persisted
    *   Make RooFFTConvPdf support convolution in a range narrower than the
         the full domain (the narrow range can be specified as part of the 'cache' binning
         associated with the convolution observable that also controls the sampling density)
    *   In RooChi2Var offer an explicit choice between modified and normal chi^2 calculation
    *   In RooWorkspace improve functionality of importClassCode(): include files specified
         in the class code that are have encoded path names are now also found and stored
         [ Savannah #100027 ]
    *   Reorder ctor order of RooMultiVarGaussian so that version with RooArgList
         for the mu vector is accessible in the workspace factory.

<a id='04'></a>
## Changes in version v5-34-04 (Jan 10, 2013)

 <font size="-2">Binary Incompatible</font>

*   Core
    *   Fixes two thread safety issues affecting accessing TClonesArray objects in more than one thread (see revision [#47726](http://root.cern.ch/viewvc?rev=47726&root=root&view=rev)).
    *   Import patch [#48132](http://root.cern.ch/viewvc?rev=48132&root=root&view=rev) fixing an issue in TUnixSystem::RedirectOutput; this resolves the Savannah report [#96935](http://savannah.cern.ch/bugs/?96935).
*   I/O
    *   Prevent a segmentation fault at the time a TFile is closed and/or deleted if it contains a TTree that is stored in a subdirectory.
    *   Prevent infinite loop when encountering unzipping error. This resolves the Savannah report [#99523](http://savannah.cern.ch/bugs/?99523).
    *   Import patch [#48115](http://root.cern.ch/viewvc?rev=48115&root=root&view=rev) in TFileMerger basically skipping, for non-mergeable objects, the check on recurrent names. This should fix the Savannah report [#99015](http://savannah.cern.ch/bugs/?99015).
*   Proof
    *   Import patch [#46864](http://root.cern.ch/viewvc?rev=46864&root=root&view=rev) fixing a crash in TStatus::Add in the case of missing files. This was a regression introduced by branch patch [#45751](http://root.cern.ch/viewvc?rev=45751&root=root&view=rev) (import of [#45283](http://root.cern.ch/viewvc?rev=45283&root=root&view=rev)).
    *   Import patch [#46992](http://root.cern.ch/viewvc?rev=46992&root=root&view=rev) addressing a possible crash after finalisation.
    *   Import patch [#47067](http://root.cern.ch/viewvc?rev=47067&root=root&view=rev) fixing possible (random) failure of test 22.
    *   Import patch [#47235](http://root.cern.ch/viewvc?rev=47235&root=root&view=rev) fixing a file permission issue in afdsmgrd.
    *   Import patch [#47238](http://root.cern.ch/viewvc?rev=47238&root=root&view=rev) fixing a few issues preventing proper cleaning of the 'data' directory when running stressProof in Proof-Lite.
    *   Import patch [#47251](http://root.cern.ch/viewvc?rev=47251&root=root&view=rev) fixing an issue with unexpected settings in TStatus::fBits.
    *   Import patch [#47270](http://root.cern.ch/viewvc?rev=47270&root=root&view=rev) adding notification of the estimated time left (and, at the end, of the processing time) also when running in batch mode.
    *   Import patch [#47367](http://root.cern.ch/viewvc?rev=47367&root=root&view=rev) fixing an issue with TDSet::Validate.
    *   Import patch [#47444](http://root.cern.ch/viewvc?rev=47444&root=root&view=rev) to not print all progress messages during the merging phase in non-tty mode (avoid filling up the logs with useless info).
    *   Import patch [#47451](http://root.cern.ch/viewvc?rev=47451&root=root&view=rev) to add flexibility in defining directories for PAR packages.
    *   Import patches [#47528](http://root.cern.ch/viewvc?rev=47528&root=root&view=rev) and [#47573](http://root.cern.ch/viewvc?rev=47573&root=root&view=rev) to support specifying the check version option in TProof::EnablePackage.
    *   Import patch [#47664](http://root.cern.ch/viewvc?rev=47664&root=root&view=rev) fixing an undefined variable in TSelEventGen (proofbench PAR package).
    *   Import patch [#47729](http://root.cern.ch/viewvc?rev=47729&root=root&view=rev) fixing a backward incompatibility introduced by patch [#45751](http://root.cern.ch/viewvc?
                rev=45751&root=root&view=rev).
    *   Import patch [#47832](http://root.cern.ch/viewvc?rev=47832&root=root&view=rev) to make sure that the fSlaves list contains always ALL workers, even those which did not initially startup; this way GetListOfSlaveInfos can be used to find out which workers had problems starting up.
    *   Import patch [#47833](http://root.cern.ch/viewvc?rev=47833&root=root&view=rev) to make sure that the XrdProofClient instance is always defined when calling MapClient. This was not done for example when using the weak authentication protocol 'host', or similar protocols not requiring a real authentication token.
    *   Import patches [#48060](http://root.cern.ch/viewvc?rev=48060&root=root&view=rev) and [#48239](http://root.cern.ch/viewvc?rev=48239&root=root&view=rev) introducing an improved dataset management model where the PROOF (ROOT) dataset manager is a light frontend to the experiment file catalogs; TDataSetManagerFile is still used as local cache of the experiment information or to store the work-in-progress status of the dataset manager daemon. This model is expected to solve the scalability issues observed currently at AAFs. The patches include the new class TDataSetManagerAliEn with the first concrete implementation of experiment catalog interface and a new version of afdsmgrd able to cope with the new dataset model.
    *   Import patch [#48063](http://root.cern.ch/viewvc?rev=48063&root=root&view=rev) fixing fixing possible deadlock in session startup.
    *   Import patch [#48068](http://root.cern.ch/viewvc?rev=48068&root=root&view=rev) fixing some issues in TProofBench.
    *   Import patches [#48086](http://root.cern.ch/viewvc?rev=48086&root=root&view=rev) and [#48099](http://root.cern.ch/viewvc?rev=48099&root=root&view=rev) fixing some building issues.
    *   Import patch [#48104](http://root.cern.ch/viewvc?rev=48104&root=root&view=rev) fixing fixes failure in TProofBench.
    *   Import patch [#48122](http://root.cern.ch/viewvc?rev=48122&root=root&view=rev) turning-off role checking for localhost connections (not required and limiting daemon test applications).
    *   Import patches [#48016](http://root.cern.ch/viewvc?rev=48016&root=root&view=rev) and [#48127](http://root.cern.ch/viewvc?rev=48127&root=root&view=rev) with several fixes in xproofd.
    *   Import patch [#48130](http://root.cern.ch/viewvc?rev=48130&root=root&view=rev) adding the executable 'ptest' which can be used to test the status of the daemon.
    *   Import patches [#48130](http://root.cern.ch/viewvc?rev=48130&root=root&view=rev) and [#48141](http://root.cern.ch/viewvc?rev=48141&root=root&view=rev) to support building ROOT using an untagged xrootd (e.g. the trunk).
    *   Import patch [#48166](http://root.cern.ch/viewvc?rev=48166&root=root&view=rev) reducing verbosity during merge of TProofOutputFile in no debug mode.
    *   Import patches [#48211](http://root.cern.ch/viewvc?rev=48211&root=root&view=rev) and [#48226](http://root.cern.ch/viewvc?rev=48226&root=root&view=rev) to fix possible deadlocks associated with the handling of asynchronous timers.
*   Tree
    *   Import patch [#47057](http://root.cern.ch/viewvc?rev=47057&root=root&view=rev) in TTree::Merge to make sure that things are really written out to disk before attempting any reading; solves an issue in TFileMerger when the merged file is written to a xrootd backend.
    *   TTree::ReadFile and TTree::ReadStream now skip empty lines and commented out line (starting with #) before looking for a description. (This fixes the most recent part of the Savannah report [#28084](http://savannah.cern.ch/bugs/?28084)).
    *   In TTree::ReadFile and TTree::ReadStreama allow colon (:) as the separator for the list of branch and types even in the case of a comma separated file. This resolves the Savannah report [#99528](http://savannah.cern.ch/bugs/?99528).
*   Graphics
    *   Import the TMathText class.
    *   In the following example the white spaces were ignored.

        <pre>	   _TFileMerger::AddObjectNames(const char *names)_
        	</pre>

    *   Fit parameters with very long names destroyed the stats display.
    *   Import new palettes from the trunk.
    *   New drawing option "SC" for TPie to draw the labels with the slices' colours.
    *   Modify the <tt>Clear</tt> function in order to be able to reuse a <tt>TGraph2D</tt> after a <tt>Clear</tt> is performed.
    *   In <tt>TGraph2D::GetHistogram()</tt> the lower and higher axis limits are always different.
*   PyROOT
    *   Reworked GIL release to be as close to the C++ call as possible
*   Hist
    *   Fix a bug in fitting TGraphAsymErrors when including error in x (see Forum [#15564](http://root.cern.ch/phpBB3/viewtopic.php?f=3&t=15564))
    *   Improve TAxis::SetRange with the possibility to include/exclude also underflow and overflow bins (see issue [#97331](http://savannah.cern.ch/bugs/?97331))
    *   Fix a bug in re-using the stored fit function in the histogram for fitting a second time
*   Minuit
    *   Fix a problem in TMinuitMinimizer when all parameters are fixed (see [#99058](https://savannah.cern.ch/bugs/?99058))
*   RooFit
    *   Fix a bug,introduced in 5.34.01, when generating the correct number of events when using the Extended() option ([#98832](https://savannah.cern.ch/bugs/index.php?98832))
    *   Import in RooPoisson the implementation of the analytical integral for the mean
*   RooStats
    *   Fix an issue in FactorizePdf (see Forum [#15694](http://root.cern.ch/phpBB3/viewtopic.php?f=15&t=15694))
    *   Fix a memory leak in SPlot ([#99400](https://savannah.cern.ch/bugs/?99400))
    *   Add functions in RooStatsUtils to factorize the pdf and to remove constraint terms. Speed-up the SimpleLikelihoodRatio evaluation by avoiding to evaluate the constraints
    *   Fix the AsymptoticCalculator to try to use same binning for Asimov data set as observed data
    *   Add support for generating same toys for alternate hypothesis at each point to get more stable bands
*   HistFactory
    *   <a id="fck_paste_padding">Add ability to use ﻿</a><a id="fck_paste_padding">﻿multiple shape-factors in a single sample, to use multiple asimov datasets and improved histfactory navigation. Add new hist2workspace executable</a>

<a id='03'></a>
## Changes in version v5-34-03 (Oct 25, 2012)

 <font size="-2">Binary Incompatible</font>

*   Build System
    *   Fix in ACliC for builds with --enable-soversion on MacOS X.
*   IO
    *   Fix for reloading TClass via Cintex (This fixes Savannah issue [#97765](http://savannah.cern.ch/bugs/?97765).
*   TTree
    *   In the case where the content of STL collection has one of its member removed, avoid mistakenly trying to read if SetAddress is called more than once on that branch.
    *   In TTreeSQL prevent a spurrious duplicate column error (Fixes Savannah issues [#98126](http://savannah.cern.ch/bugs/?98126).
*   RooFit

    *   Fix a bug in level-2 optimization of likelihoods involving pdfs containing products of conditional pdfs
    *   Import weight variable of imported dataset if no weight variable is specified (Savannah #95641)

    *   When importing TH1s in a RooDataHist omit 'average bin density' correction factor as that
         proves to be very uninuitive (Savannah #96153)

    *   In RooStreamParser fix parsing issue for variables starting with an 'i' (Savannah #82458)

    *   Allow to import RooPlots in workspace with crashing (Savannah #94239)

    *   Fix crash in reading of RooVectorDataStore of variabes with weights stored (Savannah #94908)

    *   RooProduct and RooAddition now accept multiple copies of the same input argument, e.g. a*a or a+a (Savannah #94925)

    *   In fitTo() only invoke SUMW2 afterburner if there are >0 free parameters (Savannah #92332)

    *   Fix documentation of RooFormulaVar (Savannah #93498)

    *   In RooAbsData::splot() don't add extra weight variable when split()-ting binned datasets (Savannah #93867)

    *   Fix dynamic updated of mapped binning of RooLinearVar (Savannah #82087)

*   RooStats

    *   Fix a bug in re-defining the same set in ModelConfig::DefineSetInWS
    *   Fix a memory leak in using the test statistics detailed output
    *   Fix the computation of p-values in ProfileLikelihoodCalculator::GetHypoTest for multi-dimensional models (with more than one parameter of interest)
*   FFTW
    *   Fix bug [#97707](https://savannah.cern.ch/bugs/?97707) in TFFTComplexReal::SetPoint(ipoint, c)
*   MathCore
    *   Fix a bug in the Fitter class in setting a different error scale for likelihood fits (see post [#15368](http://root.cern.ch/phpBB3/viewtopic.php?f=15&t=15368))
*   Graphics
    *   Implementation of MacOS X back-end finished.
    *   When <tt>GetX(YZ)axis</tt> were called on a <tt>TGraph2D</tt>, the frame limit and plotting options were changed.
    *   Thick dashed lines were not correct in TASImage files
*   GL
    *   Make sure to pass identity matrix to TGeoCompositeShape::PaintComposite() when transformation is not included in boolean operation.
    *   Enable automatic scaling of surface normals when transformation matrix is a scaling transformation.
    *   Add option preventing GL viewer to disregard very small objects. Call TGLLogicalShape::SetIgnoreSizeForCameraInterest(kTRUE);
    *   Fix a bug in CSG operations that manifested with gcc-4.7 (only with optimization on).
    *   Move enums from global namespace:
        *   EOverlap moved to Rgl namespace;
        *   EClipType moved into class TGLClip as EType;
        *   EPosition and EManip type were not used and have been removed.
    *   Fix a bug in arc-ball camera rotation mode (when camera center was moved from window center).
*   EVE
    *   Fix an issue in Eve shutdown sequence.

<a id='02'></a>
## Changes in version v5-34-02 (Sept 21, 2012)

 <font size="-2">Binary Incompatible</font>

*   Build System
    *   When checking if "-std=c++11" compiler option exists use the compiler that is selected via --with-cxx.
*   Thread
    *   In Thread::Join, avoid a dead lock/race condition that sometimes prevented the TFilePrefetcher from properly finishing.
*   Meta
    *   Making sure that when we lookup for an existing entry we look for an exact match (as oppose to doing a lookup of the unqualified name) to avoid unrelated nested typedef/names to over-ride global scope classes that are marked for autoloading (r42421).
*   I/O
    *   Avoid spurious error message when reading an existing file with a class inheriting from std::string ([r45117](http://root.cern.ch/viewvc?rev=45117&root=root&view=rev))
    *   Corrected the calculation of the number of read calls in TRFIOFile (See the forum [post](http://root.cern.ch/phpBB3/viewtopic.php?f=3&t=14673&p=64367#p64367) on the subject. Fixed by revision [45140](http://root.cern.ch/viewvc?rev=45140&root=root&view=rev)).
    *   Add protection against corrupted ROOT File (wrong length stored in the file header) (Revision [45170](http://root.cern.ch/viewvc?rev=45170&root=root&view=rev)).
    *   Fix file->Get("Lumi/physics;2") to properly retrieve the 2nd cycle (revision [45243](http://root.cern.ch/viewvc?rev=45243&root=root&view=rev)).
    *   Implement TChain::RemoveFriend to avoid leaving the TChain in an unstable state (See the forum [post](http://root.cern.ch/phpBB3/viewtopic.php?t=15206) on the subject.  Fixed by revision [46069](http://root.cern.ch/viewvc?rev=46069&root=root&view=rev)).
*   Proof
    *   Import patches [#45846](http://root.cern.ch/viewvc?rev=45846&root=root&view=rev), [#45847](http://root.cern.ch/viewvc?rev=45847&root=root&view=rev) and [#45849](http://root.cern.ch/viewvc?rev=45849&root=root&view=rev) fixing a few consistency issues (honoring 'workers=N' when passed as option in PROOF-Lite, parallel dataset verification when PROOF is sequential).
    *   Import patches [#45876](http://root.cern.ch/viewvc?rev=45876&root=root&view=rev), [#45823](http://root.cern.ch/viewvc?rev=45823&root=root&view=rev) and [#45827](http://root.cern.ch/viewvc?rev=45827&root=root&view=rev) fixing, in stressProof, sandbox cleaning and adding some switches to better control log saving an path in case of failures. The patch also adds the correct switches in test/CMakeList.txt for cmake -based test running.
    *   Import patch [#45759](http://root.cern.ch/viewvc?rev=45759&root=root&view=rev) fixing possible double delete in TProofDraw.
    *   Import patches [#45283](http://root.cern.ch/viewvc?rev=45283&root=root&view=rev), [#45289](http://root.cern.ch/viewvc?rev=45289&root=root&view=rev), [#45318](http://root.cern.ch/viewvc?rev=45318&root=root&view=rev), [#45348](http://root.cern.ch/viewvc?rev=45348&root=root&view=rev), [#45367](http://root.cern.ch/viewvc?rev=45367&root=root&view=rev), [#45570](http://root.cern.ch/viewvc?rev=45570&root=root&view=rev), [#45610](http://root.cern.ch/viewvc?rev=45610&root=root&view=rev), [#45614](http://root.cern.ch/viewvc?rev=45614&root=root&view=rev), [#45615](http://root.cern.ch/viewvc?rev=45615&root=root&view=rev), [#45632](http://root.cern.ch/viewvc?rev=45632&root=root&view=rev), [#45634](http://root.cern.ch/viewvc?rev=45634&root=root&view=rev), [#45282](http://root.cern.ch/viewvc?rev=45282&root=root&view=rev), [#45696](http://root.cern.ch/viewvc?rev=45696&root=root&view=rev), [#45697](http://root.cern.ch/viewvc?rev=45697&root=root&view=rev), [#45718](http://root.cern.ch/viewvc?rev=45718&root=root&view=rev) and [#45740](http://root.cern.ch/viewvc?rev=45740&root=root&view=rev) automatizing the usage of file-based technology to handle outputs (see [Handling Outputs](/handling-outputs)).
    *   Import patch [#45664](http://root.cern.ch/viewvc?rev=45664&root=root&view=rev) fixing an issue with afdsmgrd build in the case a '--prefix=' was passed.
    *   Import patches [#45283](http://root.cern.ch/viewvc?rev=45283&root=root&view=rev) (parts), [#45318](http://root.cern.ch/viewvc?rev=45318&root=root&view=rev), [#45607](http://root.cern.ch/viewvc?rev=45607&root=root&view=rev), [#45610](http://root.cern.ch/viewvc?rev=45610&root=root&view=rev), [#45613](http://root.cern.ch/viewvc?rev=45613&root=root&view=rev), [#45614](http://root.cern.ch/viewvc?rev=45614&root=root&view=rev) (parts), [#45630](http://root.cern.ch/viewvc?rev=45630&root=root&view=rev), [#45632](http://root.cern.ch/viewvc?rev=45632&root=root&view=rev) (parts) and [#45643](http://root.cern.ch/viewvc?rev=45643&root=root&view=rev) fixing several issues:
         - consolidation of username definition in the automatic LOCALDATASERVER setting (by xproofd);
         - fix for TProof::GetUser (Savannah issue #92533)
         - use of LOCALDATASERVER in ProofAux.C, fixing potential failures of stressProof
         - fix for potential segv in the destructors of TPacketizerUnit and TVirtualPacketizer
         - fix issue with merging elements in ProcFileElements which was causing spurious failures in stressProof, test #19
    *   Import patches [#45568](http://root.cern.ch/viewvc?rev=45568&root=root&view=rev) and [#45597](http://root.cern.ch/viewvc?rev=45597&root=root&view=rev) fixing a few issues in PROOF-Lite.
    *   Import patches [#45092](http://root.cern.ch/viewvc?rev=45092&root=root&view=rev) and [#45093](http://root.cern.ch/viewvc?rev=45093&root=root&view=rev) adding functions to retrieve environment information from the nodes, typically from the master (datadir or some env settings).
         **Warning:** This change in binary incompatible.
    *   Import patch [#45181](http://root.cern.ch/viewvc?rev=45181&root=root&view=rev) fixing a crash in xproofd when using security.
*   Graphics
    *   The time axis behavior should now be correct along time zone and summer saving time. A fix has been done with the of Philippe Gras (CEA Saclay. IRFU/SEDI) and Julian Sitarek (IFAE). Time axis transported from a time zone to an other in a ROOT file are correct too. A new example test have been introduced to test the time axis (timeonaxis3.C)
*   GUI

    *   Prevent the use of a global by TGLabel before it is initialized (revision [#46073](http://root.cern.ch/viewvc?rev=46073&root=root&view=rev)
*   EVE

    *   Avoid crash in TEveTrack::TEveTrack(TEveMCTrack*) constructor when PDG code is unknown. fCharge is set to 0 in this case.
    *   Add support for asymmetric calorimeters in TEveCalo classes (Christian Pulvermacher).
*   RooFit
    *   Fix a bug in RooBernsteing for degree 1 polynomial ([#97190](https://savannah.cern.ch/bugs/index.php?97190))
*   RooStats
    *   Fix a bug in using the correct one-sided test statistics in the AsymptoticCalculator (see corresponding discussion on RooStats mailing list)
    *   Fix a bug in SimpleInterval
    *   Improve LikelihoodIntervalPlot for drawing 2D contours
    *   Fix the evaluation of the likelihood  for ConditionalObservables
    *   Fix setting a second time the nuisance pdf in the ToyMCSampler. This bug affect the HybridCalculator when using different nuisance pdf's for the null and alternate models.
    *   Fix generation of AsymptoticCalculator::GenerateAsimovData  for counting models containing several observables
*   HistFactory
    *   Import changes described in revision [45703](http://root.cern.ch/viewvc?view=rev&revision=45703)
    *   Import changes to have model built without a data tag selected
*   Hist
    *   Update projection methods to re-set binning on a previously existing histogram ([#94101](https://savannah.cern.ch/bugs/?94101) and [#95808](https://savannah.cern.ch/bugs/?95808))
*   Minuit
    *   Apply some fixes in TMInuitMinimizer: fix resetting the configuration in a second Minos run and fix the number of contour points.

<a id='01'></a>
## Changes in version v5-34-01 (July 13, 2012)

 <font size="-2">Binary Incompatible</font>

*   Core
    *   Avoid risk of executing the tear down routines twice at process termination when -q is used and there is no input file descriptor. (revision 44838).
    *   Fix linking of qtcint.dll when explicitly linking is required (see [the related forum post](http://root.cern.ch/phpBB3/viewtopic.php?t=14943)).
*   I/O
    *   Fail gracefully instead of segfaulting on broken files in GetStreamerInfoList (Fixes Savannah [#5439](http://savannah.cern.ch/patch/?5439)).
    *   Avoid seg fault when deleting a reseted TMemFile (revision 44749).
    *   Avoid seg in I/O operation if you change the prefetch settings after the cache is created (revision 44755).
    *   Add an explicit 'Close' for the read cache so that we can insure that all the (concurrent) outstanding connection/use of the TFile are closed before closing the file.
*   TTree
    *   Restore support for the TTreeCache use case where the lifetime of the TTreeCache is explicitly managed by the user and detach from the TFile/TTree via a call to: file.SetCacheRead(0);
    *   Fixes issue in TChainIndex that made reading the first entry of the 2nd and subsequent files in the TChain not beeing properly reading when using the index. (Fixes Savannah [#94910](http://savannah.cern.ch/bugs/?94910)).
    *   Avoid an unnecessary flushing of the TTreeCache after the first time it filled (revision 44750)
*   Proof
    *   Import patch [#44606](http://root.cern.ch/viewvc?rev=44606&root=root&view=rev) adding support for gcc4.7 in afdsmgrd (version 1.0.3).
    *   Import patch [#44701](http://root.cern.ch/viewvc?rev=44701&root=root&view=rev) with several important fixes in xproofd. Patch is server side only; only the upgrade of xproofd (or libXrdProofd) are required.
*   RooFit
    *   Fix bug in binned generation of extended pdf (patch [#44630](http://root.cern.ch/viewvc?rev=44630&root=root&view=rev) )
*   HistFactory
    *   Fix a problem for pyroot and an issue in creating directory (patch [#44579](http://root.cern.ch/viewvc?view=rev&revision=44579) ).
*   Hist
    *   Fix bug in merging histograms and profile when first histogram to merge is empty (bug [#95190](https://savannah.cern.ch/bugs/?95190) and [#94295](https://savannah.cern.ch/bugs/?94295))
    *   Enable TBrowser to access THnSparse with more than 16 axes (r44827).
*   THtml
    *   Set ROOTSYS in makehtml by calling root instead of root.exe (bug [#95635](https://savannah.cern.ch/bugs/index.php?95645>#95645</a> and <a href=), r44726)
*   OpenGL
    *   If creation of frame-buffer object for saving of a screenshot fails, fallback to using back-buffer. This can be disabled via the following rootrc setting:
           OpenGL.SavePictureFallbackToBB: off
         Latest SLC5, SLC6 intel/mesa drivers seem to often lie that they support FBOs and then fail when asked to provide it.
    *   Provide switching between standard and arc-ball rotation in TGLViewer (keybinding 'a').
    *   Allow setting of non-standard coordinate systems (arbitrary up and forward direction) via new function TGLViewer::ReinitializeCurrentCamera().
*   EVE
    *   Add new type of track path-mark - TEvePathMatk::kLineSegment. This is to be used for silicon strip detectors rec-hits, especially for low pT tracks where searching for closest point of approach to a line segment is more robust that searching for intersection with a plane.
    *   Add support for somewhat continuous energy loss along track propagation. This only makes sense if many path-marks are set for a given track, see TEveTrack::fDpDs.

## Changes in v5-34-00 (June 5, 2012)

*   TTree
    *   Repair the plotting of string histogram by TTree::Draw
*   Net
    *   Fix in TWebFile reading using https (via TSSLSocket).
*   IO
    *   Optimization in TFileMerger for the case where there is only one file to 'merge' (patch [#44533](http://root.cern.ch/viewvc?rev=44533&root=root&view=rev)).
*   Proof
    *   Import patches [#44411](http://root.cern.ch/viewvc?rev=44411&root=root&view=rev) and [#44425](http://root.cern.ch/viewvc?rev=44425&root=root&view=rev) fixing a problem in handling local files in TDataSetManager::ScanFile;
    *   Import version 1.0.2 of afdsmgrd (patches [#44243](http://root.cern.ch/viewvc?rev=44243&root=root&view=rev), [#44292](http://root.cern.ch/viewvc?rev=44292&root=root&view=rev) and [#44332](http://root.cern.ch/viewvc?rev=44332&root=root&view=rev)) with several important fixes for PEAC and AAFs and the integration in the cmake build
    *   Import patch [#44397](http://root.cern.ch/viewvc?rev=44397&root=root&view=rev) changing the default merging procedure used histograms to cover correctly all the cases.
    *   Import patches for Coverity-related issues
*   THtml
    *   Also check for modifications in headers ([bug #94695](https://savannah.cern.ch/bugs/index.php?94695), r44323).
*   Textinput
    *   Always move to right after prompt before writing text ([bug #91752](https://savannah.cern.ch/bugs/index.php?91752), r44337).
    *   Implement ^G: abort an incremental search and restore the original line (r44337).
*   CINT
    *   genreflex: fix an issue with base classes defining operator new() ([bug #94981](https://savannah.cern.ch/bugs/?94981), r44403).
*   Misc
    *   Remove using namespace declarations ([bug #94452](https://savannah.cern.ch/bugs/index.php?94452), r44342-44352, r44368).