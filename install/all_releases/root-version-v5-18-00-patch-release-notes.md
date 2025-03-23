---
title: ROOT Version v5-18-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>A new production version ROOT v5.18-00f has been released Nov 3, 2008.</p>

<p>Binaries are currently not available for patch releases.</p>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code><a href="ftp://root.cern/root/root_v5.18.00f.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.18.00f.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span> using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-18-00f" target="_blank" title="http://root.cern/svn/root/tags/v5-18-00f">http://root.cern/svn/root/tags/v5-18-00f</a> root </code>

<p>After obtaining the source read the file README/INSTALL <span style="color:#B22222;">(broken)</span> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-18-00-patches branch do:</p>
<code> svn co <a href="http://root.cern/svn/root/branches/v5-18-00-patches" target="_blank" title="http://root.cern/svn/root/branches/v5-18-00-patches">http://root.cern/svn/root/branches/v5-18-00-patches</a> root </code>

<h2>Changes in the head of the v5-18-00-patches branch</h2>

<ul>
	<li>Netx, PROOF modules
	<ul>
		<li>Fix compilation warnings about deprecated headers and shadowed variables</li>
	</ul>
	</li>
	<li>Smatrix
	<ul>
		<li>Fix a compilation warning obtained when instantiating an SVector with size=1</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00f (Nov 3, 2008)</h2>

<ul>
	<li>TTree
	<ul>
		<li>Improve the way branches are matched for a Fast Merge. Now support the case where one of the branches in the output tree in not present. Also supports the case where branches are not the same order.</li>
	</ul>
	</li>
	<li>Reflex
	<ul>
		<li>Fix TEMPLATE_DEFAULTS and nested templates [savannah #36024].</li>
		<li>Fix problem with template default arguments, introduced by the cache of name normalization results [savannah #43356].</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00e (Oct 24, 2008)</h2>

<ul>
	<li>TXNetFile
	<ul>
		<li>Add dynamic synchronization of the internal cache size to the one set in TTree; this allows to get by default a close to optimal working point (from F. Furano).</li>
		<li>Correctly increment counters for read calls (from F. Furano).</li>
	</ul>
	</li>
	<li>xrootd
	<ul>
		<li>Import new version 20081007-0500 with many important fixes both on the client side (memory leaks, cache handling) and on the server side (e.g. fake disconnections in XrdLink)</li>
	</ul>
	</li>
	<li>TUUID
	<ul>
		<li>Correct TUUID time code was inactive due to obsolete R__LONGLONG ifdef.</li>
	</ul>
	</li>
	<li>libAfterImage
	<ul>
		<li>Fix a compilation problem on Mac OS X 10.5.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Fix handling of pointer to bool (see <a href="https://savannah.cern.ch/bugs/?37597" rel="nofollow" target="_blank">savannah #37597</a>)</li>
		<li>Reflex: enable cache of normalized type name fragments to speed up dictionary generation.</li>
		<li>Cintex: comply with SELinux.</li>
	</ul>
	</li>
	<li>Meta/IO
	<ul>
		<li>Fix reading of very long class names from a ROOT file.</li>
		<li>Read the StreamerInfo for STL classes after the other classes to insure the Collection proxy will be set correctly and thus fix some case where the TBrowser could not drill through collection of objects in bare root.</li>
	</ul>
	</li>
	<li>Cintex
	<ul>
		<li>use mmap for trampoline; enables libCintex on SELinux protected OS (e.g. SLC5).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00d (May 29, 2008)</h2>

<ul>
	<li>TXNetSystem
	<ul>
		<li>Go back to the redirector when relevant; this fixes problems of sequential operations on files in the same session, for example multiple calls to AccessPathName.</li>
	</ul>
	</li>
	<li>TPluginManager
	<ul>
		<li>Load plugin macros in alphabetical order. The most generic plugin should be loaded last (and should have a name like P0N0_xxxx.C, so it sorts last).</li>
	</ul>
	</li>
	<li>TDSetElement
	<ul>
		<li>Fix a bug in Validate(TDSetElement *) affecting correct element validation in multi-level-master setups.</li>
	</ul>
	</li>
	<li>TMessage
	<ul>
		<li>Uncompress could fail in certain cases.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Insure that kBranchAny or kBranchObject is set even if the file was created by a version of ROOT older than 5-18-00c and the top level branch is not split; this allows to properly read file written with ROOT 5.18/00 through 5.18/00b.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00c (May 19, 2008)</h2>

<ul>
	<li>TRFIOFile, TCastorFile
	<ul>
		<li>Make sure the anchor part of the URL is not passed to the Castor low-level functions. This is needed to correctly open elements of archives files.</li>
	</ul>
	</li>
	<li>configure, config/Makefile.in, xrootd/Module.mk
	<ul>
		<li>Add a new option '--with-xrootd-opts="..."' to 'configure' to specify additional configuration flags to xrootd; for example, to build the Perl interface the following should be used:<br />
		<code>./configure --with-xrootd-opts="--enable-perlint" &lt;other-options&gt;</code></li>
	</ul>
	</li>
	<li>xrootd
	<ul>
		<li>disable the build by default of the client Perl interface: it generates several warnings from SWIG and it does not build on some systems</li>
	</ul>
	</li>
	<li>TFile
	<ul>
		<li>Call TFile::Open() recursively on the path GetFileAndOptions() (instead of using the TFile constructor) in the case no dedicated plug-in is found. This fixes a problem with opening "srm://srm.cern.ch//castor/..." and "/castor/..." as reported by Atlas.</li>
	</ul>
	</li>
	<li>TXNetFile
	<ul>
		<li>Correctly honor the create/recreate options coming from TFile::Open().</li>
		<li>Allow the size of the (written) file to be retrieved after the Close() (solves several reported file size mismatches).</li>
	</ul>
	</li>
	<li>TDirectory
	<ul>
		<li>Fix in GetDirectory(), that did not work when the file name has the form: <a href="http://root.cern/pippa.root:/LL" target="_blank">http://root.cern/pippa.root:/LL</a>.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Fix support for array of pointer in an interpreted class/struct (this affect the result of MakeClass.</li>
	</ul>
	</li>
	<li>Cintex
	<ul>
		<li>Solve a mismatch (with CINT) on how the memory is allocated in new/delete functions.</li>
	</ul>
	</li>
	<li>Reflex
	<ul>
		<li>Add missing RFLX_API declarations, relevant e.g. for GCC's visibility=hidden.</li>
	</ul>
	</li>
	<li>TUnixSystem
	<ul>
		<li>Fix for MacOS X 64-bit support.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Repair writing Foreign class in XML files.</li>
		<li>Avoid mistaking a Foreign class for which the StreamerInfo has not yet been built for a class coming from a ROOT file written by ROOT v2 or less. In particular this could lead to an unwanted call to TStreamerInfo::BuildEmulated() in the case where the object is being read from a TBuffer not attached to a TFile (TMessage for example) and lead to a Fatal error.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Remove the calls to MapObject introduce in revision 21384 when are unnecessary hence restoring lost performance in case where the TTree contains many simple type (double, int, etc.). Fixes issue <a href="http://savannah.cern.ch/bugs/?32940" rel="nofollow" target="_blank">32940</a>.</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Do not remove DISPLAY from environ; this may lead to some warnings, but those can be fixed by the user, whereas that is not the case for setting DISPLAY back.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00b (March 10, 2008)</h2>

<ul>
	<li>Xrootd
	<ul>
		<li>Fixes and optimizations in the client:
		<ul>
			<li>Potential cache thrashing problem with big blocks requests.</li>
			<li>Optimization in closing files.</li>
		</ul>
		</li>
		<li>Fixes in the GSI module:
		<ul>
			<li>Double deletion in some specific cases.</li>
			<li>Support for large (&gt; 32 bits) certificate serial numbers in CRL handling.</li>
		</ul>
		</li>
	</ul>
	</li>
	<li>TFile, TAlienFile, TXNetFile, TVirtualMonitoring, TMonalisaWriter
	<ul>
		<li>Add abstract monitoring interface for the relevant steps during file opening (bare open, initialization, ...).</li>
		<li>Add concrete implementation in TMonalisaWriter.</li>
		<li>Enable monitoring of the open steps in TAlienFile and TXNetFile.</li>
	</ul>
	</li>
	<li>TWebFile:
	<ul>
		<li>When in raw mode, don't try to read the "root" signature in TWebFile::Init(). This fixes the problem with TFile::Cp() returning a 4 byte difference and failing.</li>
	</ul>
	</li>
	<li>PyRoot:
	<ul>
		<li>A patch that allows direct assignment of unsigned int and unsigned long. Fixes issue <a href="https://savannah.cern.ch/bugs/?33890" rel="nofollow" target="_blank">33890</a>.</li>
	</ul>
	</li>
	<li>CINT:
	<ul>
		<li>Reflex: rootmap files end on ".rootmap". Fixes issue <a href="http://savannah.cern.ch/bugs/?34099" rel="nofollow" target="_blank">34099</a>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-18-00a (February 21, 2008)</h2>

<ul>
	<li>CINT:
	<ul>
		<li>Correct the sizes of the internal structures (source line buffer, number of classes/enums/... and typedefs); they were too small.</li>
		<li>Fix CINT's representation of <code>size_t</code>: use <code>typeid</code> instead of <code>sizeof</code> to identify the underlying type.</li>
		<li>Remove a left-over bytecode debug statement.</li>
		<li>Fix a problem with <code>G__param_match()</code> in the way enum are handled (enum are handled as in in parts of CINT).</li>
		<li>Fix a problem with autoloading of templated classes, where the loaded class name (e.g. <code>vector&lt;MyClass,allocator&lt;MyClass&gt; &gt;</code> or <code>A&lt;long long&gt;</code>) is not the expected class name (e.g. <code>vector&lt;MyClass&gt;</code> or <code>A&lt;Long64_t&gt;</code>).</li>
		<li>Allow selection of functions and exclusion of functions and methods using their prototype: attribute <code>proto_name</code> for exact match, <code>proto_pattern</code> for pattern matching.</li>
		<li>Rename <code>std::basic_string&lt;char...&gt;</code> to <code>string</code> in genreflex-generated rootmap file.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TFile:
	<ul>
		<li>Add optimizations in TFile::Cp() for netx and add extra error handling to make the routine more robust.</li>
		<li>Avoid an infinite loop under certain error conditions during the file open procedure via a local cache read.</li>
	</ul>
	</li>
</ul>
</div>
