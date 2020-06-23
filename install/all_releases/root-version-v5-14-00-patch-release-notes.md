---
title: ROOT Version v5-14-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>A new production version ROOT v5.14-00i has been released October 24, 2007.</p>

<p>Binaries are currently not available for patch releases.</p>

<p>The complete source tree for all systems (21.4 MB) is available here:</p>
<code><a href="ftp://root.cern/root/root_v5.14.00i.source.tar.gz">ftp://root.cern/root/root_v5.14.00i.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer">Subversion</a> using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-14-00i" title="http://root.cern/svn/root/tags/v5-14-00i">http://root.cern/svn/root/tags/v5-14-00i</a> root </code>

<p>After obtaining the source read the file <a href="/drupal/content/installing-root-source" target="_blank">README/INSTALL</a>.</p>

<h2>Changes in the head of the v5-14-00-patches branch</h2>

<ul>
	<li>configure:
	<ul>
		<li>fix location of SQL tutorial; fixes a problem for Windows build only.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Reflex:
	<ul>
		<li>Add explicit dependency of genreflex.(bat|sh) on genreflex python files or they won't be copied on windows (due to BUILDPYTHON=no).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00i (October 23, 2007)</h2>

<ul>
	<li>RooFit:
	<ul>
		<li>Roofit tar did not have binary flag and hence did not work on Windows.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Cintex:
	<ul>
		<li>Remove limitation on length of type names.</li>
		<li>Register unknown scopes as 'a', not 'n'. Fixes <a href="https://savannah.cern.ch/bugs/?24227" rel="nofollow" target="_blank">24227</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TreePlayer:
	<ul>
		<li>in MakeSelector() remove limit on file name length and extend branch names from 128 to 1024 (will be completely dynamic too in the future).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>MathCore:
	<ul>
		<li>Add dictionary for all the coordinates classes based on Double32_t and for LorentzVector &lt;PtEtaPhiM4D&lt;Double32_t&gt; &gt;.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TUnixSystem:
	<ul>
		<li>Don't return after handling kSigChild in DispatchSignals().</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00h (September 8, 2007)</h2>

<ul>
	<li>Meta
	<ul>
		<li>Increase caching of typedef information in TCint and TClass, improving the efficiency of library loading by up to a factor 5.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TDCacheFile
	<ul>
		<li>ReadBuffers() with vector read is implemented. Dcache version 1.7.0-39 with this functionality has just been released. We've tried with ROOT version 5.14 and 5.16. It's amazing! On some applications we got up to 12 times performance increase!</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTreeCache
	<ul>
		<li>Reject request from TTree object other than the one that created the TTreeCache object (Hence preventing a crash is 2 trees are read from the same TFile object and one of them is being cached).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTree
	<ul>
		<li>Set gBranch properly before cloning a TBasket, the TBasket streamer needs it on read.</li>
		<li>In Fast Merging, allow the input and output trees to have a different number of branches. This allow for dropping branches when doing a fast cloning.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>CINT/Reflex/Cintex
	<ul>
		<li>Fix for enums used in functions not having any constants once passed through Cintex.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TXMLSetup.h
	<ul>
		<li>Fix compiler warning when compiling with gcc in strict mode.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>RooFit
	<ul>
		<li>fix memory leak in RooProdPdf.cxx.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00g (July 9, 2007)</h2>

<ul>
	<li>CINT/Reflex/Cintex
	<ul>
		<li>Allow interpreter access to variables in namespaces with Reflex dictionary.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTree MakeProxy
	<ul>
		<li>Improve memory usage (Fixes issue <a href="https://savannah.cern.ch/bugs/?25697" rel="nofollow" target="_blank">25697</a>)</li>
		<li>Enable support for array with 3 dimensions and more (Fixes issue <a href="https://savannah.cern.ch/bugs/?26727" rel="nofollow" target="_blank">26727</a>)</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TGFALFile, TRFIOFile
	<ul>
		<li>Since the GFAL and RFIO URLs can have the form: rfio:///castor?path=FILEPATH we need to use TUrl::GetFileAndOptions() to get the file name to be passed to the GFAL and RFIO API's.</li>
		<li>Add support for older libshift that do not support the :/// and ?filetype=raw syntax.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>rpm and debian build systems:
	<ul>
		<li>Remove reference to deprecated package pythia.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TDCacheFile:
	<ul>
		<li>Add support for gsidcap protocol.</li>
		<li>Work around the missing 'vector read' in the DCache protocol by requesting all the needed data in a single sequential read request (aka reading too much data but reducing the number of messages). This improves performances by a factor 20 to 50 depending on network topology.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>mathcore
	<ul>
		<li>fix a bug in the calculation of eta for the LorentzVector classes</li>
		<li>add some optimization in the vector classes</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00f (May 29, 2007)</h2>

<ul>
	<li>Pyroot
	<ul>
		<li>Add a protection in the case of where a base class is Emulated (fixes issue <a href="http://savannah.cern.ch/bugs/?25369" rel="nofollow" target="_blank">25369</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Hist, IO
	<ul>
		<li>Fix memory leaks (fixes issue <a href="http://savannah.cern.ch/bugs/?25371" rel="nofollow" target="_blank">25371</a> and <a href="http://savannah.cern.ch/bugs/?25373" rel="nofollow" target="_blank">25373</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>IO
	<ul>
		<li>Fix problem with CollectionProxy for non stl container (fixes issue <a href="https://savannah.cern.ch/bugs/index.php?25397" rel="nofollow" target="_blank">25397</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>CINT/Reflex
	<ul>
		<li>Fix handling of constness for genreflex generated function call wrappers.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>CINT
	<ul>
		<li>Work around a compiler bug in gcc 3.2.3 (which lead to crash in rootcint).</li>
		<li>Improve re-entranceness of G__process_cmd().</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Base
	<ul>
		<li>Add protection in error handlers against TROOT not yet being initialized (fixes issue <a href="http://savannah.cern.ch/bugs/?26200" rel="nofollow" target="_blank">26200</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Tree
	<ul>
		<li>In the TBrowser, when drilling through a TTree and clicking on a member function that returns an object, we now also list the data members.</li>
		<li>Properly handle the case where the return value of a member function is an STL collection.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>GFAL
	<ul>
		<li>In TGFALFile ctor fStatCached was not initialized causing random SysStat() behaviour (fixes issue <a href="http://savannah.cern.ch/bugs/?26628" rel="nofollow" target="_blank">26628</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>libGlobusAuth
	<ul>
		<li>The Globus authentication plugin now links statically all Globus libs to prevent Globus libs (libssl and libcrypto) to be used by other ROOT plugins.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>ACliC
	<ul>
		<li>Ensure that when a 32-bit binary is run on a 64-bit platform ACliC compiles with the -m32 flag.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Unuran
	<ul>
		<li>Add missing dependency that broke parallel make.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00e (March 29, 2007)</h2>

<ul>
	<li>Intel icc v10 support
	<ul>
		<li>Add support for the soon to be released Intel icc v10 compiler.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>make:
	<ul>
		<li>Fix broken parallel build in case configured with option --enable-explicitlink.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Cintex:
	<ul>
		<li>Fix return by reference of integers (fixes issue <a href="http://savannah.cern.ch/bugs/?24549" rel="nofollow" target="_blank">24549</a>).</li>
		<li>Fix a bad declaration of the scope of vector&lt;LinkManager::Link*&gt;::iterator as a namespace when declaring a typedef of LinkManager class (fixes issue <a href="http://savannah.cern.ch/bugs/?25077" rel="nofollow" target="_blank">25077</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>CINT:
	<ul>
		<li>Increase G__MAXSTRUCT and G__MAXTYPEDEF to 24000. This has no visible effect on the memory used by CINT.</li>
		<li>A one-dimensional array of length one was being treated as if it were a scalar. This results in ROOT seeing an incorrect data member name, which makes tree I/O offset calculations fail.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTree:
	<ul>
		<li>Fix memory leak which happens when the content of the basket does not compress well (aka it should be rare).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TObjArray:
	<ul>
		<li>Make the TObjArray::operator[] methods out-of-line.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>hadd
	<ul>
		<li>Dynamically load libTreePlayer to allow support for TTrees build with an index.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00d (March 9, 2007)</h2>

<ul>
	<li>SMatrix
	<ul>
		<li>Fix a bug found by LHCb (W. Hulsbergen) in the += and -= operators for symmetric matrices when using expressions like A += B + C</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Cintex:
	<ul>
		<li>Fix memory leak when calculating class offsets with instance (from S. Snyder).</li>
		<li>Making Cintex more robust on dictionary autoload order (fixes issue <a href="http://savannah.cern.ch/bugs/?24450" rel="nofollow" target="_blank">24450</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TStreamerInfo:
	<ul>
		<li>Add code to allow the schema evolution from a container of doubles to the <em>same</em> container of Double32_t and vice et versa.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TEnv:
	<ul>
		<li>don't issue a warning in case of duplicate resources where the resource and value are exactly the same. Fixes issue <a href="http://savannah.cern.ch/bugs/?24157" rel="nofollow" target="_blank">24157</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TCint:
	<ul>
		<li>In LoadLibraryMap() maintain directory order as specified in the LD_LIBRARY_PATH.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Mac OS X:
	<ul>
		<li>Fix options for gfortran.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>FitPanel:
	<ul>
		<li>Fix segv when closing panel.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>rootcint:
	<ul>
		<li>In ShowMember(), std::string no longer need a special case. This fix enables I/O for C-style array of strings (issue <a href="http://savannah.cern.ch/bugs/?23724" rel="nofollow" target="_blank">23724</a>).</li>
	</ul>
	</li>
</ul>

<ul>
	<li>PyRoot:
	<ul>
		<li>Only strip namespaces in current class, not in template parameters (issue <a href="http://savannah.cern.ch/bugs/?23724" rel="nofollow" target="_blank">23724</a>).</li>
		<li>Fix for handling temporaries by PyROOT/CINT of classes with new/delete operators (issue <a href="http://savannah.cern.ch/bugs/?23388" rel="nofollow" target="_blank">23388</a>).</li>
		<li>Fix 32 bit cutoff (Int_t used where Long_t needed) when converting unsigned long (long)s (issue <a href="http://savannah.cern.ch/bugs/?24100" rel="nofollow" target="_blank">24100</a>).</li>
		<li>Restore void*&amp; function argument converter.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TCastorFile, TRFIOFile, rootd and Globus authentication:
	<ul>
		<li>Disabling of 'chdir($HOME)' in 'rootd' when running in Castor mode. This is because $HOME may point to a directory not available on the servers.</li>
		<li>A few optimizations in the Globus authentication.</li>
		<li>Fixes in TCastorFile, TRFIOFile, TAuthenticate already in the head. The possibility to change the authentication mode on the fly is relevant here.</li>
		<li>A couple of bug fixes in rpdutils.cxx found by testing these changes.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00c (February 12, 2007)</h2>

<ul>
	<li>Makefile:
	<ul>
		<li>The gif icons were not copied to the icons directory when doing "make install".</li>
	</ul>
	</li>
</ul>

<ul>
	<li>makestatic.sh:
	<ul>
		<li>Exclude unuran and gdml modules.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Cintex:
	<ul>
		<li>Fix for <a href="http://savannah.cern.ch/bugs/?23428" rel="nofollow" target="_blank">23428</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Tree:
	<ul>
		<li>Fix for <a href="http://savannah.cern.ch/bugs/?23567" rel="nofollow" target="_blank">23567</a>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00b (January 17, 2007)</h2>

<ul>
	<li>Cintex:
	<ul>
		<li>Fix for <a href="http://savannah.cern.ch/bugs/?22866" rel="nofollow" target="_blank">22866</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Reflex:
	<ul>
		<li>Fix for <a href="http://savannah.cern.ch/bugs/?22952" rel="nofollow" target="_blank">22952</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Fix problem with MacroPath and DynamicPath expansion in case the paths are extended via <code>~/.rootrc</code> and/or <code>./.rootrc</code> files. Fixes issue <a href="http://savannah.cern.ch/bugs/?22954" rel="nofollow" target="_blank">22954</a>.</li>
</ul>

<ul>
	<li>TEnv:
	<ul>
		<li>avoid reading <code>./.rootrc</code> twice in case the workingdirectory is <code>~</code>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TFile::Open to xrootd on Mac OS X Intel:
	<ul>
		<li>fixed issue <a href="http://savannah.cern.ch/bugs/?22597" rel="nofollow" target="_blank">22597</a>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-14-00a (January 10, 2007)</h2>

<ul>
	<li>genreflex:
	<ul>
		<li>Ordering of dictionary classes needed for a proper conversion to CINT</li>
		<li>Remove warning on windows</li>
		<li>For the ordering patch, remove dependency on python 2.4</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Reflex:
	<ul>
		<li>Fix bug <a href="http://savannah.cern.ch/bugs/?22339" rel="nofollow" target="_blank">22339</a>, genmap not finding input file going back to a simpler implementation of error reporting. Only dl* function errors need to reported for this class.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>ROOTClassEnhancer.cxx:
	<ul>
		<li>A problem has been detected by Ioannis running the POOL regression tests with the latest ROOT production release. The problem shows up in a rather complex model (CMS inspired I think) involving a vector of pairs containing objects embedding pool::Refs in split mode. The wrong offset is calculated for the pool::Ref producing a core dump when doing a dynamic_cast.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>THistPainter.cxx:
	<ul>
		<li>This bug is connected with fixing bug <a href="http://savannah.cern.ch/bugs/?22317" rel="nofollow" target="_blank">22317</a> which I submitted previously. Unfortunately, I got it only after release 5.14 was published. Due to the fix in THistPainter::PaintBarH the PaintAxis call was moved to the very end of the routine. But, actually, it should come before the X and Y axis pointers being permuted back. As I checked, now it looks like X axis attributes have effect on the Y axis and vice versa.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>v6_opr.cxx:
	<ul>
		<li>Move in opr.c G__bstore() function, test to long double before that of double.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTreeCache.cxx:
	<ul>
		<li>Avoid division by zero in entry number estimation.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TChainIndex.cxx:
	<ul>
		<li>In TChainIndex::DeleteIndices prevent a double delete. This fixes issue <a href="http://savannah.cern.ch/bugs/?22722" rel="nofollow" target="_blank">22722</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Pythonize.cxx:
	<ul>
		<li>Backport of fix for <a href="http://savannah.cern.ch/bugs/?22599" rel="nofollow" target="_blank">22599</a>.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TGFSContainer.cxx:
	<ul>
		<li>Month was off by one.</li>
	</ul>
	</li>
</ul>
</div>
