---
title: ROOT Version v5-26-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>A new production version ROOT v5-26-00g has been released September 29, 2011.</p>

<p>Binary tar balls are not available for patch releases.</p>

<p>The AFS version of v5-26-00g for many different platforms and compilers can be found at:</p>
<code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.26.00g/ </code>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code> <a href="ftp://root.cern/root/root_v5.26.00g.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.26.00g.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span> using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-26-00g" target="_blank" title="http://root.cern/svn/root/tags/v5-26-00g">http://root.cern/svn/root/tags/v5-26-00g</a> root </code>

<p>After obtaining the source read the file <a href="/node/103" target="_blank">README/INSTALL</a> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-26-00-patches branch do:</p>
<code> svn co <a href="http://root.cern/svn/root/branches/v5-26-00-patches" target="_blank" title="http://root.cern/svn/root/branches/v5-26-00-patches">http://root.cern/svn/root/branches/v5-26-00-patches</a> root </code>

<h2>Changes in the head of the v5-26-00-patches branch</h2>

<ul>
	<li>configure
	<ul>
		<li>Import patches to support smooth configuration on Ubuntu 11.04 or newer (automatic detection of the new location of the system libraries)</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patches #41393 and #41399 fixing possible issues with PATH and LD_LIBRARY_PATH settings for proofserv.</li>
		<li>Adapt patch <a href="http://root.cern/viewvc?rev=39078&amp;root=root&amp;view=rev" target="_blank">#39078</a> to bypass a compilation problem with gcc 4.5.2 on linux.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00g (September 29, 2011)</h2>

<ul>
	<li>Core
	<ul>
		<li>Allow home directory to be specified via HOME shell var in case there is no correct passwd file entry, fixes issue <a href="http://savannah.cern.ch/bugs/?83268" target="_blank">83268</a></li>
	</ul>
	</li>
	<li>xrootd
	<ul>
		<li>Backport in xrootd of <a href="http://root.cern/viewvc/trunk/net/xrootd/src/xrootd/src/XrdSecsss/XrdSecProtocolsss.cc?r1=37905&amp;r2=37998" target="_blank">this fix</a> for ATLAS.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00f (June 21, 2011)</h2>

<ul>
	<li>IO
	<ul>
		<li>Avoid spurious warning message when reading file with a TTree written with ROOT 5.29/03 or later:<code>Warning in <tstreamerinfo::compile>: Counter fNClusterRange should not be skipped from class TTree</tstreamerinfo::compile></code></li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>In TProofPlayerRemote::IsClient, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36440" target="_blank">#36440</a> adding a missing protection to fix a crash in submerger mode when the output list contained TProofOutputFile objects.</li>
		<li>In TProof, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=35965" target="_blank">#35965</a> to correctly update the number of submergers when workers die (it should fix an issue experienced by ALICE).</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36552" target="_blank">#36552</a> fixing TH1::IntegralAndError()</li>
		<li>Import fix <a href="http://root.cern/viewvc?rev=39628&amp;root=root&amp;view=rev" target="_blank">#39628</a> in TH1::LabelsInflate or Deflate (bug <a href="https://savannah.cern.ch/bugs/?83066" target="_blank">#83066</a>).</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>In XrdSecProtocolkrb5, fix possible source of infinite loop during token init (backport from the Xroot head).</li>
		<li>In XrdClientConn, fix possible source of infinite loop during the authentication phase (includes check on the tty; backport from the Xroot head)</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00e (Oct 13, 2010)</h2>

<ul>
	<li>Cint
	<ul>
		<li>When generating code for the typedef within a class, make sure to treat bool as a built-in.</li>
		<li>Avoid a segmentation fault when parsing a class with virtual inheritance and a using declaration.</li>
		<li>genreflex: fix for functions taking a template with an array template parameter (r35203, <a href="https://savannah.cern.ch/bugs/?71800" target="_blank">bug #71800</a>).</li>
		<li>Properly set the class version for ClassDef()'ed classes with a Reflex dictionary (r35514, r35515; <a href="https://savannah.cern.ch/bugs/?72749" target="_blank">bug #72749</a>).</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Prevent the use of an optimized StreamerInfo when reading a collection streamed member wise. The solves <a href="https://savannah.cern.ch/bugs/index.php?73642 " target="_blank">the issue 73642 reported in Atlas' Savannah.</a></li>
		<li>Fix TTree::Draw's problem with STL container accessed via a function (See <a href="https://savannah.cern.ch/bugs/index.php?72398" target="_blank">bug #72398</a>)</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>In TFileStager::IsStaged, Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32312" target="_blank">#32312</a>: always close files after testing.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Fix out-of-bounds buffer access in RecvLogFile().</li>
	</ul>
	</li>
	<li>Math
	<ul>
		<li>Fix a problem in both Minuit2Minimizer and TMInuitMinimizer when re-defining a parameter (see ROOT&nbsp;Forum post&nbsp;<a href="http://root.cern/phpBB2/viewtopic.php?t=9947" target="_blank">9947</a>).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00d (Aug 24, 2010)</h2>

<ul>
	<li><a>Cint </a>

	<ul>
		<li><a>Enable genreflex selection of free-standing operators (r34616 r34639, </a><a href="https://savannah.cern.ch/bugs/?70660" target="_blank">bug #70660</a>)</li>
		<li>Correctly handle C++-style comments in multi-line input. (r34746, <a href="https://savannah.cern.ch/bugs/?71186" target="_blank">bug #71186</a>)</li>
		<li>Fix reset of value reference after parameter conversion (r34763).</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Add a protection when reading a file that contains a collection streamed memberwise .. but the collection was always empty.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import change <a href="http://root.cern/viewcvs?view=rev&amp;revision=33437" target="_blank">#33437</a> and <a href="http://root.cern/viewcvs?view=rev&amp;revision=34714" target="_blank">#34714</a>: fixing an issue with binary location when configuring with '--prefix='.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00c (Jul 6, 2010)</h2>

<ul>
	<li>Core
	<ul>
		<li>Restore and improve time required to startup root.exe and load shared libraries.</li>
		<li>Improve configure's -fPIC detection for static libraries (r32354).</li>
		<li>Support of version detection for non-English Microsoft Compilers (r32434, <a href="https://savannah.cern.ch/bugs/index.php?63411" target="_blank">bug #63411</a>).</li>
		<li><span class="geshifilter"><code class="cpp geshifilter-cpp">TString<span style="color: #008080;">::</span><span style="color: #007788;">operator</span><span style="color: #000040;">+</span><span style="color: #000080;">=</span><span style="color: #008000;">(</span><span style="color: #0000ff;">double</span><span style="color: #008000;">)</span></code></span> had an insufficient precision (r32435, <a href="https://savannah.cern.ch/bugs/index.php?62965" target="_blank">bug #62965</a>).</li>
		<li>Fix terminal interaction of ROOT started in the background (r32638).</li>
		<li>Fixes in TRefArray for issues: <strong>[Bad link]</strong>, <strong>[Bad link]</strong>, <strong>[Bad link]</strong>.</li>
		<li>Fix warning issued by VC9 in TTimeStamp.h, fixes issue: <strong>[Bad link]</strong>.</li>
		<li>Do not skip the first line when reading a root history file (<strong>[Bad link]</strong>).</li>
		<li>If the process is not attached to a tty or if it is in the background, do not ask the (absent) user if the process should be prevented from exiting in case of error (<strong>[Bad link]</strong>)</li>
		<li>Improve's ACLiC handling of include directive (in particular add support for directory named "something-ICC" (r32784 r32873)</li>
		<li>Fix the ACLiC .d file by using the build directory in the target part (rather than the source directory) (<strong>[Bad link]</strong>)</li>
		<li>In ACLiC's dependency files (.d) make sure to only use the unix notation (on windows) (<strong>[Bad link]</strong>)</li>
		<li>Fix ACLiC's .d file dictionary version part (<strong>[Bad link]</strong>)</li>
		<li>Make the error message of TClonesArray::SetClass(const char*) more specific. (<strong>[Bad link]</strong>)</li>
		<li>Editline now allows FILE* based I/O on stdin if it's not a tty (<a href="http://savannah.cern.ch/bugs/?67484" target="_blank">Savannah #67484</a>, r33561).</li>
		<li>In TClassTable, normalize 'long long' to 'Long64_t' in lookups as we are already doing on input (<a href="http://savannah.cern.ch/bugs/?66312" target="_blank">Savannah #66312</a>, r34038).</li>
		<li>Add protection in TUnixSystem::StackTrace() in case gApplication is 0 (<strong>[Bad link]</strong>).</li>
		<li>Add missing entry for gsidcap protocol in P020_TDCacheSystem.C plugin macro (<strong>[Bad link]</strong>).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Added support for reading file written by 5.27/02 and containing a data member like: <code> std::container<data> *fDataObjects;</data></code> which has been streamed member-wise (see revision r33173 of the trunk).</li>
		<li>Avoid spurious warning message when reading file produced by ROOT v5.27 and above.</li>
		<li>Properly handle the case where a read rule is associate with the 'current' TStreamerInfo when this TStreamerInfo is used for writing.</li>
		<li>If the process is not attached to a tty or if it is in the background, do not ask the (absent) user if the process should be prevented from exiting in case of error (<strong>[Bad link]</strong>)</li>
		<li>Improve's ACLiC handling of include directive (in particular add support for directory named "something-ICC" (r32784 r32873)</li>
		<li>Fix the ACLiC .d file by using the build directory in the target part (rather than the source directory) (<strong>[Bad link]</strong>)</li>
		<li>In ACLiC's dependency files (.d) make sure to only use the unix notation (on windows) (<strong>[Bad link]</strong>)</li>
		<li>Fix ACLiC's .d file dictionary version part (<strong>[Bad link]</strong>)</li>
		<li>Make the error message of TClonesArray::SetClass(const char*) more specific. (<strong>[Bad link]</strong>)</li>
	</ul>
	</li>
	<li>Meta/Cint
	<ul>
		<li>Prevent the automatic dictionary's name from containing colon characters (r32383).</li>
		<li>Add dictionary for <span class="geshifilter"><code class="cpp geshifilter-cpp">vector<span style="color: #000080;">&lt;</span>pair<span style="color: #000080;">&lt;</span><span style="color: #0000ff;">int</span>, <span style="color: #0000ff;">int</span><span style="color: #000080;">&gt;</span> <span style="color: #000080;">&gt;</span></code></span> used in <span class="geshifilter"><code class="cpp geshifilter-cpp">TSchemaRule</code></span> (r32476, <a href="https://savannah.cern.ch/bugs/index.php?53130" target="_blank">bug #53130</a>).</li>
		<li>Prevent object related to TClass and CINT from being allocated inside a TMapFile.</li>
		<li>Fix the handling of function pointer types in TCint (r33121).</li>
		<li>Fix out of string range access error in TClassEdit (<strong>[Bad link]</strong>).</li>
		<li>Avoid reading before the start of an empty string in TClassEdit.cxx (<strong>[Bad link]</strong>)</li>
		<li>Add one more valgrind suppression about TClassRef (<strong>[Bad link]</strong>).</li>
		<li>Add missing protection against creation of CINT and Meta objects during a TMapFile streaming (<strong>[Bad link]</strong>)</li>
		<li>Remove fixed length array in TCint.cxx (<strong>[Bad link]</strong>)</li>
		<li>Avoid problem case where TROOT::LoadClass is being called with a string that is changed/deleted during its execution (by an autoload for example). This fixes the problem seen in the forum topic <strong>[Bad link]</strong> (<strong>[Bad link]</strong>)</li>
	</ul>
	</li>
	<li>Cint
	<ul>
		<li>PyCintex now uses RuntimeError instead of string exception (r32422, <a href="https://savannah.cern.ch/bugs/index.php?63328" target="_blank">bug #63328</a>)</li>
		<li>In genreflex, fix suppression of array-bounds warning with GCC (r32433, <a href="https://savannah.cern.ch/bugs/index.php?63267" target="_blank">bug #63267</a>).</li>
		<li>Improve detection of character set to not swallow some non-ASCII7 characters (r32445).</li>
		<li>Fix crashes in function invocations through Cintex on Windows with debug runtime (r32634).</li>
		<li>Work around an issue with calling virtual destructors in bases on Windows (r32635).</li>
		<li>Don't generate collection proxy for Windows iterators (r32637).</li>
		<li>Fix uninitialized members reported by Coverity (r32639, r32640, r32641).</li>
		<li>Avoid using colons in the AutoDict file names (<strong>[Bad link]</strong>).</li>
		<li>Replace a crash by an error message in the case where stdout or stderr is already redirect when a redirection is asked for ( r32416).</li>
		<li>properly reset G__value::reftype.reftype when needed in the bytecode engine (<strong>[Bad link]</strong>)</li>
		<li>Do not cause an overflow signal just because we cast the result of line processing to a long. Set it to LONG_MAX/MIN instead. (<strong>[Bad link]</strong>).</li>
		<li>In shift operators, do not always promote to long, stop at int first. (<strong>[Bad link]</strong>)</li>
		<li>Fix the cases where the wrong function's parameter was being reset (<strong>[Bad link]</strong>)</li>
		<li>Fix random memory read in G__cattemplatearg by avoid to use a pointer into memory that might be moved (<strong>[Bad link]</strong>)</li>
		<li>Try to load explicitly ./filename but filename as the earlier is more friendly to dlopen (<strong>[Bad link]</strong>)</li>
		<li>make sure we are loading the dictionary information about member function before looking for a template member function instance. This fixes the report <strong>[Bad link]</strong> in Savannah.(<strong>[Bad link]</strong>)</li>
		<li>Make sure to autoload a class before allocating any object of that type (<strong>[Bad link]</strong>)</li>
		<li>Properly parse typedef long long* pointer when there is more than one space between the star and the typedef name. Generate the dictionary for vector &lt; long long &gt; and vector &lt; unsigned long long &gt; (<strong>[Bad link]</strong>)</li>
		<li>Make sure the list of library is recalculated whenever G__smart_unload is used; This fixes Savannah <strong>[Bad link]</strong> (<strong>[Bad link]</strong>)</li>
		<li>Avoid premature deletion of objects used as the default parameter of an interpreted function.</li>
		<li>Fix a crash caused by a misplaced semicolon (<a href="https://savannah.cern.ch/bugs/index.php?68454" target="_blank">issue #68454</a>, r33860)</li>
		<li>Avoid a crash when interpreting an (illegal) call to a non-static member function without an object</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Prevent DropBaskets from dropping baskets that are not stored individually (and hence potentially not recoverable).</li>
		<li>Fix a lookup problem resulting a TTree::Draw not finding the data in some (complex) case of object nesting.</li>
		<li>Do not core dump when called with an empty chain. Show the branches of a chain's underlying's tree's friend in addition to the branches of the chain and of the chain's friends (<strong>[Bad link]</strong>).</li>
		<li>Add missing re-initialization in TBranchProxy (part of TTree::MakeProxy) (<strong>[Bad link]</strong>).</li>
		<li>When drawing a polymarker make Same is the same as same (<strong>[Bad link]</strong>)</li>
		<li>Fix a couple of internal memory leaks (<strong>[Bad link]</strong>)</li>
		<li>Properly re-update the friend branch address when the friend is a chain composed of 'smaller' trees than the main chain is. This fixes savannah <strong>[Bad link]</strong> (<strong>[Bad link]</strong>)</li>
		<li>Improve the error message(s) issued by TTree::Show in case of failure to load the data (<strong>[Bad link]</strong>)</li>
		<li>Add missing protection in the case we have an embedded object in a split branch which has been 'removed' from the current schema (<strong>[Bad link]</strong>)</li>
		<li>Do no use any array dimension in the branchnames created by TTree::ReadFile (<strong>[Bad link]</strong>)</li>
		<li>In TTree::Draw: Avoid confusing '2000 &lt; var' with in a file name '2000' (due to IsFileInIncludePath stripping what it thinks to be an I/O indirection) (<strong>[Bad link]</strong>)</li>
		<li>In TChain::SetEntryList use only the treename to lookup the (sub)entryList (instead subdir/treename) (<strong>[Bad link]</strong>)</li>
		<li>Do no over-write the default value for TTree::fgMaxTreeSize as it is the one we want (and the setting smaller than expected by a factor 10) (<strong>[Bad link]</strong>)</li>
		<li>Add missing protection in the case we have an embedded object in a split branch which has been 'removed' from the current schema (<strong>[Bad link]</strong>)</li>
		<li>Make sure that gPerfStats is properly updated if the TTreePerfStats is deleted (<strong>[Bad link]</strong>)</li>
		<li>Properly detect all ACLiC modes in TSelector::GetSelector (<strong>[Bad link]</strong>)</li>
		<li>Update TTree::SetDirectory to allow update the BranchRef when needed. This fixes the forum topic <strong>[Bad link]</strong> (<strong>[Bad link]</strong>)</li>
		<li>Avoid attempting to print the content of empty TClonesArray even if this 'content' are strings (see roottest/root/treeformula/scan/execmissingString.C) (<strong>[Bad link]</strong>)</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix the problem with ternary operator: <a href="http://savannah.cern.ch/bugs/?67398" target="_blank">#67398</a></li>
		<li>TFormula: unary minus could cause a wrong GetExpFormula() (<a href="https://savannah.cern.ch/bugs/?68905" target="_blank">#68905</a>, r34001).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>In XrdProofdAdmin, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32808" target="_blank">#32808</a>: fix bug preventing a correct check of the exported paths</li>
		<li>In TProofServ, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32812" target="_blank">#32812</a> and <a href="http://root.cern/viewcvs?view=rev&amp;revision=32814" target="_blank">#32814</a>: fix bug affecting the behaviour of kBuildPackage for packages in the global directories</li>
		<li>In TXProofMgr, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32815" target="_blank">#32815</a>: disable TXSocket handling while sending / receiving files; this fixes occasional freeze in TXProofMgr::GetFile / TXProofMgr::PutFile due to a screw up of the synchronization in the TXSocket pipe</li>
		<li>In TProofMgr, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32874" target="_blank">#32874</a>: avoid contacting the DNS when initializing TProofMgr as base class of TProofMgrLite: it is not needed and it may introduce long startup delays</li>
		<li>In TProof, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=32833" target="_blank">#32833</a>:<span style="font-family: monospace;"> </span>fix a problem counting valid nodes in sequential or 'masteronly' mode,<span style="font-family: monospace;"> </span>generating the fake error message "GoParallel: attaching to candidate!"</li>
		<li>In TProofLite, import changes (<a href="http://root.cern/viewcvs?view=rev&amp;revision=32897" target="_blank">#32897</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=32898" target="_blank">#32898</a> and <a href="http://root.cern/viewcvs?view=rev&amp;revision=32900" target="_blank">#32900)</a> to fix a problem with the unix sock path length affecting MacOS X</li>
		<li>In&nbsp; XrdProofdManager, XrdProofdProofServMgr import fix&nbsp; <a href="http://root.cern/viewcvs?view=rev&amp;revision=32953" target="_blank">#32953</a> to fix a problem with the unix sock path length affecting MacOS X</li>
		<li>In&nbsp; XrdProofdProofServMgr import fix&nbsp; <a href="http://root.cern/viewcvs?view=rev&amp;revision=33003" target="_blank">#33003</a> to fix a problem with open file descriptors potentially showing up in the case of very fast daemon restarts (and many users).</li>
		<li>In TProofServ import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33009" target="_blank">#33009</a>: in Reset(), check that the directory make sense; fixes an issue with a fake error message in PROOF-Lite when issuing TProof::SetParallel().</li>
		<li>In TProofPlayerLite import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33015" target="_blank">#33015</a>: properly initialize the merging progress counter; fixes problem with negative values for '<em>workers still sending</em>' in PROOF-Lite .</li>
		<li>In TProofLite import fixes <a href="http://root.cern/viewcvs?view=rev&amp;revision=33027" target="_blank">#33027</a> and <a href="http://root.cern/viewcvs?view=rev&amp;revision=33035" target="_blank">#33035</a>: fix possible segvs when processing a dataset where none of the files had been validated and/or when starting a query right after.</li>
		<li>In TProof import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33153" target="_blank">#33153</a>: fix an issue with the parsing of the option field when forcing the creation of a new session, e.g. TProof::Open("&lt;master&gt;/?N") .</li>
		<li>In TProofServ import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33418" target="_blank">#33418</a>: make sure that information used internally in the option field on the master (about the aclic option) is not sent to workers while issuing the Process message.</li>
		<li>In TXProofMgr import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33639" target="_blank">#33639</a>:<span style="font-family: monospace;"> </span>fix problem affecting TProofMgr::Find.</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33640" target="_blank">#33640</a>: fix a few issues affecting the usage of tree friends in PROOF and a bug<span style="font-family: monospace;"> </span>affecting the locality check for files in TDSet.<span style="font-family: monospace;"> </span></li>
		<li>In TProof::ClearData() import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33639" target="_blank">#33641</a>:<span style="font-family: monospace;"> f</span>ix problem observed when the dataset repository is empty<span style="font-family: monospace;"> </span></li>
		<li>In TProof import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33648" target="_blank">#33648</a>: fix an issue with the workers names in TSlaveInfo in PROOF-Lite .<span style="font-family: monospace;"> </span></li>
		<li>In TPacketizerAdaptive and TPacketizer, import part of fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=33781" target="_blank">#33781</a>: fix a subtle bug affecting the (possibly rare) case when not all entries are required and # entries does not correspond to an complete subset of files (e.g. # entries = 1001000 with files of 100000 entries each).</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import fixes to build on MacOS X 10.4 (<a href="http://root.cern/viewcvs?view=rev&amp;revision=32679" target="_blank">#32679</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=32680" target="_blank">#32680</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=32683" target="_blank">#32683</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=32707" target="_blank">#32707</a>)</li>
		<li>Import fixes <a href="http://root.cern/viewcvs?view=rev&amp;revision=32800" target="_blank">#32800</a>:
		<ul>
			<li>Tiny fix in XrdSecProtocolkrb5.cc (remove a redundant unlock)</li>
			<li>Improvements in 'xrdgsiproxy':
			<ul>
				<li>Add support for -exists (-e) switch for the 'info' mode (as in 'grid-proxy-info') to test existence and validity of a proxy.</li>
				<li>Add also support for a clock skew in testing validity (default 30 secs; can be changed with the switch -clockskew).</li>
			</ul>
			</li>
		</ul>
		</li>
		<li>Import fixes <a href="http://root.cern/viewcvs?view=rev&amp;revision=33677" target="_blank">#33677</a> fixing a fake authentication failure with proxies created by voms-proxy-init when the input certificates are PKCS12-formatted</li>
	</ul>
	</li>
	<li>GUI
	<ul>
		<li>Fix double deletion in TGFileBrowser (r32684, <a href="https://savannah.cern.ch/bugs/index.php?64596" target="_blank">bug #64596</a>)</li>
		<li>Fix crash in TBrowser when looking for an icon associated with a class for which TClass::GetClass(class_name) was returning 0 (r32516, <a href="https://savannah.cern.ch/bugs/index.php?64082" target="_blank">bug #64082</a>)</li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Fix a minor bug in HybridPlot::Draw (<a href="https://savannah.cern.ch/bugs/index.php?64854" target="_blank">bug #64854</a>)</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix <a href="http://savannah.cern.ch/bugs/index.php?70229" target="_blank">issue #70229</a></li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00b (Feb 9, 2010)</h2>

<ul>
	<li>Core
	<ul>
		<li>Editline: allow cooked terminal interaction after creation of TRint (r32170, <a href="https://savannah.cern.ch/bugs/index.php?62119" target="_blank">bug #62119</a>)</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>TDCacheFile: fix regression which caused dcap://host:port/path to fail.</li>
		<li>Added TXMLEngine::ParseString.</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>TGrid::Mkdir() and TAlien::Mkdir() return now an Int_t instead of a Bool_t. Patch is needed for the ALICE ODBC.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Improve heap efficiency of function calls through Cintex. (r32081, r32088)</li>
		<li>Work around warning "cast from pointer-to-function and pointer to object" in some Reflex dictionaries. (r32074 r32085, <a href="https://savannah.cern.ch/bugs/index.php?61758" target="_blank">bug #61758</a>)</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?view=rev&amp;revision=32237" target="_blank">#32237</a> to fix a problem occurring when submergers cannot open the required sockets (output was not always sent to the master).</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>New version (v20100205-0000) containing a crucial fix on the server side required by ALICE. This version also includes the new SSL module for authentication needed by Castor.</li>
		<li>Import&nbsp; crucial fix <a href="../../../../../../../viewvc?view=rev&amp;revision=32322" target="_blank">#32322</a> on for the krb5 security module.</li>
	</ul>
	</li>
	<li>TMVA
	<ul>
		<li>Method ReadStateFromStream() made public again: accommodate reading of weights from 'in memory' text-weightfiles.</li>
		<li>Method ReadStateFromXMLString() added: accommodate reading of weights from 'in memory' xml-weightfiles.</li>
		<li>MethodLikelihood: fix bug that prevented saving of method specific histograms.</li>
		<li>Remove global pointer access from inline functions.</li>
		<li>Import fix <a href="../../../../../../../viewvc?view=rev&amp;revision=32302" target="_blank">#32302</a> for the missing external symbol problem for PDF::IGetVal</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-26-00a (Jan 19, 2010)</h2>

<ul>
	<li>Core
	<ul>
		<li>Hide editline's symbols to prevent clashes with readline (r31990, <a href="http://root.cern/phpBB2/viewtopic.php?p=41352" target="_blank">Forum post 41352</a>).</li>
		<li>Fix in rootcint when using the -p option (<strong>[Bad link]</strong>).</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Fix function invocations through Cintex in non-optimized builds (r31991).</li>
		<li>For Cintex wrappers, respect NX bit also on MacOS X (r32009, <a href="https://savannah.cern.ch/bugs/?61225" target="_blank">#61225</a>).</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix a bug in TGraph::Eval when evaluating at the graph point values.</li>
		<li>Fix a bug in TH3::Project3D when using on 2 3d histograms with same name (fix <a href="https://savannah.cern.ch/bugs/?61464" target="_blank">#61464</a>)</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Protect TTree::OptimizeBaskets() in case of very high compression factors (&gt; 100). TTree::Fill now calls TTree::OptimizeBaskets() with the fAutoFlush value instead of the total number of bytes written so far.</li>
		<li>In the TTreeViewer, show the branches of a chain's underlying's tree's friend in addition to the branches of the chain and of the chain's friends.</li>
	</ul>
	</li>
	<li>Graf
	<ul>
		<li>TLatex: revert <a href="http://root.cern/viewvc?view=rev&amp;revision=29285" target="_blank" title="http://root.cern/viewvc?view=rev&amp;revision=29285">http://root.cern/viewvc?view=rev&amp;revision=29285</a> this fix had side effects. Indexes on Greek characters did not work.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Fix memory leaks in TProofServ::HandleProcess and TEventIterTree (fix <a href="http://root.cern/viewvc?view=rev&amp;revision=31946" target="_blank">#31946</a>)</li>
		<li>Fix double deletion in TProofServ::HandleSubMerger and memory leak in TEventIterUnit (fix <a href="http://root.cern/viewvc?view=rev&amp;revision=32003" target="_blank">#32003</a>)</li>
		<li>Fix a problem with real-time notification during dataset verification (fix <a href="http://root.cern/viewvc?view=rev&amp;revision=32031" target="_blank">#32031</a>)</li>
		<li>XrdProofd plugin (fixes <a href="http://root.cern/viewvc?view=rev&amp;revision=31934" target="_blank">#31934</a>, <a href="http://root.cern/viewvc?view=rev&amp;revision=31935" target="_blank">#31935</a> and <a href="http://root.cern/viewvc?view=rev&amp;revision=31937" target="_blank">#31937</a>):
		<ul>
			<li>Fix an issue with return codes of sending methods preventing a proper detection of failures by masters and/or clients</li>
			<li>Fix an issue with the garbage collection of inter-daemon connections</li>
			<li>Reduce the locked phase during inter-daemon broadcasting</li>
		</ul>
		</li>
	</ul>
	</li>
	<li>Math
	<ul>
		<li>Fix a bug in the multinomial random generation (&nbsp;ROOT::Math::Random::Multinomial ).</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix <a href="http://savannah.cern.ch/bugs/?59945" target="_blank">#59945</a> and <a href="https://savannah.cern.ch/bugs/?61105" target="_blank">#61105</a>.</li>
		<li>Properly handle the extra thread created in PyROOT to process events (r31983 and r31996, <a href="http://root.cern/phpBB2/viewtopic.php?t=9640" target="_blank">Forum post 9640</a> and <a href="http://root.cern/phpBB2/viewtopic.php?t=7748" target="_blank">7748</a>).</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>
</div>


