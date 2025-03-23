---
title: ROOT Version v5-24-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>A new production version ROOT v5-24-00b has been released Oct 11, 2009.</p>

<p>Binary tar balls are not available for patch releases.</p>

<p>The AFS version of v5-24-00b for many different platforms and compilers can be found at:</p>
<code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.24.00b/ </code>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code> <a href="ftp://root.cern/root/root_v5.24.00b.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.24.00b.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span> using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-24-00b" target="_blank" title="http://root.cern/svn/root/tags/v5-24-00b">http://root.cern/svn/root/tags/v5-24-00b</a> root </code>

<p>After obtaining the source read the file README/INSTALL (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-24-00-patches branch do:</p>
<code> svn co <a href="http://root.cern/svn/root/branches/v5-24-00-patches" target="_blank" title="http://root.cern/svn/root/branches/v5-24-00-patches">http://root.cern/svn/root/branches/v5-24-00-patches</a> root </code>

<h2>Changes in the head of the v5-24-00-patches branch</h2>

<ul>
	<li>Core
	<ul>
		<li>Fix sandbox access violation in Gentoo when running ./configure.</li>
		<li>On MacOS X determine correct ROOTSYS in case libCore.so is a symlink (as was already done on Linux systems).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>TDCacheFile: dCap client does not ignore ?filetype=raw and other options, so remove it. Fixes issue <a href="https://savannah.cern.ch/bugs/index.php?57409" target="_blank">#57409</a>.</li>
		<li>TDCacheFile: increase readahead size from 8k to 128k and make it settable via DCACHE_RA_BUFFER env var.</li>
		<li>TDCacheFile: fix regression which caused dcap://host:port/path to fail.</li>
		<li>Make long and long long equivalent. Make vector&lt;long&gt; and vector&lt;long long&gt; equivalent (and hence suppress: TStreamerInfo::BuildOld:0: RuntimeWarning: Cannot convert DataHeaderElement_p2::m_Hashes from type:vector&lt;unsigned long long&gt; to type:vector&lt;unsigned long&gt;, skip element )</li>
		<li>Fix TStreamerInfo::CompareContent to properly look at only persistent members and to properly match members.</li>
		<li>Allow streaming of base classes with an external streamer and Reflex dictionaries (r31300, issue <a href="https://savannah.cern.ch/bugs/index.php?59093" target="_blank">#59093</a>)</li>
		<li>Avoid spurious warning message when reading file produced by ROOT v5.27 and above.</li>
		<li>Avoid spurious warning message when reading file with a TTree written with ROOT 5.29/03 or later:<code>Warning in <tstreamerinfo::compile>: Counter fNClusterRange should not be skipped from class TTree</tstreamerinfo::compile></code></li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>CINT's limits.h was exposing a CINT-only preprocessor expression to external preprocessors (r30669, issue <a href="https://savannah.cern.ch/bugs/index.php?56225" target="_blank">#56225</a>)</li>
		<li>Remove the artificial methods <tt>Streamer()</tt> and <tt>StreamerNVirtual()</tt> injected by Cintex. They were causing an overhead for I/O and <tt>Streamer()</tt> was introducing a vtable. (r31078)</li>
		<li>Flag the artificial method <tt>ShowMembers()</tt> injected by Cintex as virtual only if the class already has a vtable. Otherwise CINT believes there is a vtable where there isn't. (r31078, issue <a href="https://savannah.cern.ch/bugs/index.php?58277" target="_blank">#58277</a>)</li>
		<li>Allow softlinks when locating genreflex.py (r31535 r31544 r31557 r31564, issue <a href="https://savannah.cern.ch/bugs/index.php?59896" target="_blank">#59896</a>)</li>
		<li>Work around warning "cast from pointer-to-function and pointer to object" in some Reflex dictionaries. (r32074 r32091, <a href="https://savannah.cern.ch/bugs/index.php?61758" target="_blank">bug #61758</a>)</li>
	</ul>
	</li>
	<li>net/krb5auth
	<ul>
		<li>Explicitly add include path for the openssl headers to avoid problems on some systems (e.g. kubuntu)</li>
	</ul>
	</li>
	<li>net/globusauth
	<ul>
		<li>Extend support for Globus installations coming with Debian/Fedora/EPE</li>
	</ul>
	</li>
	<li>proofd
	<ul>
		<li>Fix a problem in XrdProofdProofServ::FreeClientID (fix for issue <a href="https://savannah.cern.ch/bugs/index.php?57061" target="_blank">#57061</a>).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Disable the read and write cache when merging Trees in the "fastclone" mode.</li>
		<li>Remove serious slow down in some cases of reading TTrees where some of the data member has been 'removed' form the current class layout.</li>
		<li>&nbsp;</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Fix a problem with the xrootd build when running make via 'sudo' (issue <strong>[Bad link]</strong>).</li>
		<li>Fix a problem with the detection of libreadline and lib(n)curses (fixes issue with CentOS on the forum, affecting probably all the distributions of the Red-Hat family installing readline).</li>
		<li>Add support for OpenSSL 1.0.0 (required by new linux distributions, e.g. Fedora 12).</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for issue <strong>[Bad link]</strong> and <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-24-00b (Oct 11, 2009)</h2>

<ul>
	<li>Hist
	<ul>
		<li>Fix a problem in default constructor of TH2 and TH3, issue <a href="https://savannah.cern.ch/bugs/index.php?56712" target="_blank">#56712</a></li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-24-00a (Oct 8, 2009)</h2>

<ul>
	<li>MacOS X Snow Leopard
	<ul>
		<li>Support for 32-bit build on 64-bit Snow Leopard.</li>
	</ul>
	</li>
	<li>gcc 4.4.1
	<ul>
		<li>Add support for gcc 4.4.1 (gcc guys did not fix issue reported in 4.4.0 for 4.4.1).</li>
	</ul>
	</li>
	<li>Threads
	<ul>
		<li>Add support for native recursive mutexes (pthread and Win32) and remove not satisfactory generic recursive implementation.</li>
		<li>Remove support for older pthread versions (PthreadDraftVersion &lt; 10), all modern systems support version 10 now.</li>
	</ul>
	</li>
	<li>PROOF
	<ul>
		<li>Fix a couple of memory leaks showing up when running repeated queries in PROOF-Lite</li>
		<li>Fix several issues in TProofOutputFile showing up in particular in PROOF-Lite</li>
		<li>Import workaround r29504. This allows to setup xproofd to serve in optimized way multiple ROOT version independently of the fix in the TTreeCache initialization (patch 29126).</li>
		<li>Fix a problem with TProofServ::CopyFromCache potentially slowing down session start-up in PROOF-Lite with compiled selectors.</li>
		<li>In TDataSetManager::ScanDataSet in browse mode, show by default only users' datasets instead of all</li>
		<li>In TDataSetManagerFile, import fixes 29171:
		<ul>
			<li>Correctly classify as TTree all TTree derived classes (e.g. TNtuple's)</li>
			<li>Fix a problem in saving the end-point URL for local files</li>
			<li>Fix realtime notification during 'verify'</li>
		</ul>
		</li>
		<li>In TFileMerger, fix file descriptor leak (bug #54591)</li>
		<li>In TPacketizerAdaptive and TPacketizer, import change 30574 removing, as default,&nbsp; the limit on the number of workers accessing a given file server</li>
		<li>In XrdProofdManager, import fix 30573 to fix the behaviour of the xpd.allowedusers directive</li>
	</ul>
	</li>
	<li>Krb5Auth
	<ul>
		<li>Fix to detect the correct version of (krb5_c_)valid_cksumtype</li>
	</ul>
	</li>
	<li>GlobusAuth
	<ul>
		<li>fix due to TString(int) ctor now being explicit.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix tab completion for the case.<code> root [0] .x tutorials/ [TAB]</code></li>
		<li>Add support for skipping the reading of the $HOME/&lt;name&gt; (e.g. $HOME/.rootrc) resource file. To do this set the shell variable ROOTENV_NO_HOME. This might be useful in case the home directory resides on an automounted remote file system and one wants to avoid this file system from being mounted. Fix for issue <strong>[Bad link]</strong>.</li>
		<li>In TUnixSystem::GetLinuxProcInfo(), make sure that the file is valid before using it. Fixes occasional segv observed in PROOF.</li>
		<li>In TUnixSystem and TWinNTSystem, change the dynamic library search order. First look into LD_LIBRARY_PATH (or PATH on Windows) and then in what is specified in Root.DynamicPath. This allows by changing LD_LIBRARY_PATH to search for alternative versions of plugins without changing the rootrc file(s).</li>
		<li>Fix in root-config a problem with relative symbolic links.</li>
		<li>Change TExMap hash, key and values from (U)Long_t to (U)Long64_t. This makes TExMap streamable in a portable way. On 64-bit platforms there is no difference, but on 32-bit platforms all values will now be 64-bit. This fixes a big portability issue with THnSparse which uses TExMap internally where the versions created on a 32-bit platform could not be read on a 64-bit platform and vice versa.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Speed up the dictionary initialization: nlogn instead of n^2 (r29296, <a href="http://savannah.cern.ch/bugs/?52457" target="_blank">issue #52457</a>).</li>
		<li>Fix the implementation of ShowMembers in the case where the members of a class with a genreflex dictionary are of type with a rootcint dictionary and no genreflex dictionary.</li>
		<li>genreflex: generate the correct ClassDef function implementations for templated classes in namespaces (r29489).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Insure that the TTreeCloner (fast merging) is able to also copy 'uninitialized' TStreamerInfo describing abstract classes (This fixed savannah report #52856)</li>
		<li>Enhance support for reading class (A) stored in a vector where one the member is no longer part of the current class layout (of class A) and the member is a class type .</li>
		<li>Repair nesting of 'named' TTreeFormula (<a href="http://savannah.cern.ch/bugs/?53994" target="_blank">issue #53994</a>).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix the initialization of the checksum information for a TSchemaRule (hence fixing the lookup based on checksum)</li>
		<li>In TFile, import fix 30170 to retrieve the correct local file name (inclusive of prefix) in TFile::Open()</li>
	</ul>
	</li>
	<li>Windows
	<ul>
		<li>Increase the stack size to 4Mb (default is 1Mb) on Windows.</li>
		<li>ix a problem when generating ROOT resource version from ROOT_RELEASE when it contains 00 (e.g. 5.24.00).</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix a bug in the projection of TH3 when calling the method more than one time (issue <a href="https://savannah.cern.ch/bugs/?53038" target="_blank" title="https://savannah.cern.ch/bugs/?53038">https://savannah.cern.ch/bugs/?53038</a>).</li>
	</ul>
	</li>
	<li>Minuit2
	<ul>
		<li>Fix the building when using OpenMP (issue <a href="https://savannah.cern.ch/bugs/?52666" target="_blank" title="https://savannah.cern.ch/bugs/?52666">https://savannah.cern.ch/bugs/?52666</a>).</li>
		<li>Add a protection against very small step sizes which can cause nan values in InitialGradientCalculator</li>
		<li>Fix a compilation error when compiling with -DDEBUG</li>
		<li>Fix a bug when exiting from MnFunctionCross when the minimum was invalid</li>
		<li>Fix a problem in Minuit2Minimizer restoring ROOT error level after fitting</li>
	</ul>
	</li>
	<li>Minuit
	<ul>
		<li>Fixes in TMinuitMinimizer:&nbsp;issue&nbsp;<a href="https://savannah.cern.ch/bugs/?54279" target="_blank">#54279</a> and forcing the use of gradient functions when requested</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for issue <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
	<li>RooFit
	<ul>
		<li>Fix for persistence of RooDataHist</li>
		<li>Fix in RooProfileLL:&nbsp;save and restore values of profiled parameters when finding global minimum</li>
		<li>Fix in RooDataHist in handling of weights in set()</li>
		<li>Fix in RooRealIntegral in forwarding of normalization set in createIntegral()<span id="1251382838745S" style="display: none;"> </span></li>
		<li>Fix in import of multiple weighted datasets in RooDataSet</li>
		<li>Fix for correct handling of nevt=0 cases in RooMCStudy of a p.d.f in extended mode</li>
		<li>Fix in constructor of RooSimultaneous</li>
		<li>Fix in product generator context - Generate uniform distribution of non-dependent observables</li>
		<li>Fix in copy constructor of RooDataHist</li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Fix a bug in the constructor of FeldmanCousins.cxx</li>
		<li>Improve the LikelihoodInterval::LowerLimit() and UpperLimit()</li>
		<li>Fix RooStatUtils::SetParameters (see <a href="http://root.cern/viewvc?view=rev&amp;revision=29521" target="_blank" title="http://root.cern/viewvc?view=rev&amp;revision=29521">http://root.cern/viewvc?view=rev&amp;revision=29521</a> )</li>
		<li>Fix a problem in ProfileLikelihoodCalculator::GetHypoTest() when there are no nuisance parameters&nbsp;</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>In TFileStager, import fix 30170 introducing a check on the locality of the path when initializing a TFileStager implementation; this allows to avoid blocking when testing a local path with "root://" protocol</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Fix a problem in XrdClientAdmin::Prepare preventing bulk prepare requests to work correctly</li>
		<li>In XrdClient, import fixes in XrdClientVector, bulk prepare, cache handling.</li>
	</ul>
	</li>
	<li>SMatrix
	<ul>
		<li>Use static look-up tables for the indices of symmetric matrices</li>
		<li>Remove a warning observed on some platform in the Cholesky decomposition</li>
	</ul>
	</li>
	<li>GenVector
	<ul>
		<li>Fix for issue <a href="https://savannah.cern.ch/bugs/?56057" target="_blank">#56057</a></li>
		<li>Add dictionary for functions in VectorUtil.h</li>
	</ul>
	</li>
</ul>

</div>
