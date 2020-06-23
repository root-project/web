---
title: ROOT Version v5-22-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>A new production version ROOT v5-22-00j has been released Mar 31, 2010.</p>

<p>Binary tar balls are not available for patch releases.</p>

<p>The AFS version of v5-22-00i for many different platforms and compilers can be found at:</p>
<code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.22.00j/ </code>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code> <a href="ftp://root.cern/root/root_v5.22.00j.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.22.00j.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span> using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-22-00j" target="_blank" title="http://root.cern/svn/root/tags/v5-22-00j">http://root.cern/svn/root/tags/v5-22-00j</a> root </code>

<p>After obtaining the source read the file <a href="https://root.cern/build-root-old-method" target="_blank">README/INSTALL</a> <span style="color:#B22222;">(broken) </span>(in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-22-00-patches branch do:</p>
<code> svn co <a href="http://root.cern/svn/root/branches/v5-22-00-patches" target="_blank" title="http://root.cern/svn/root/branches/v5-22-00-patches">http://root.cern/svn/root/branches/v5-22-00-patches</a> root </code>

<h2>Changes in the head of the v5-22-00-patches branch</h2>

<ul>
	<li>IO
	<ul>
		<li>Added support for reading file written by 5.27/02 and containing a data member like:
		<pre lang="cxx">
     std::container<data> *fDataObjects;</data> which has been streamed member-wise (see revision r33173 of the trunk).</pre>
		</li>
		<li>Prevent the use of an optimized StreamerInfo when reading a collection streamed member wise. The solves <a href="https://savannah.cern.ch/bugs/index.php?73642 " target="_blank">the issue 73642 reported in Atlas' Savannah.</a></li>
		<li>Avoid spurrious warning message when reading file with a TTree writen with ROOT 5.29/03 or later:<code>Warning in <tstreamerinfo::compile>: Counter fNClusterRange should not be skipped from class TTree</tstreamerinfo::compile></code></li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import fixes #33677 fixing a fake authentication failure with proxies created by voms-proxy-init when the input certificates are PKCS12-formatted</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Prevent buffer overrun due to long include directives (<a href="https://savannah.cern.ch/bugs/index.php?68546" target="_blank">issue #68546</a>, r33793).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00j (Apr 23, 2010)</h2>

<ul>
	<li>Core
	<ul>
		<li>Prevent object related to TClass and CINT from being allocated inside a TMapFile.</li>
		<li>Support cross-compilation of 32-bit binaries on MacOS X 64-bit.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00i (Mar 31, 2010)</h2>

<ul>
	<li>Xrootd
	<ul>
		<li>Import fixes to build on MacOS X 10.4 (<a href="http://root.cern/viewvc?view=rev&amp;revision=32679" target="_blank">#32679</a>,&nbsp; <a href="http://root.cern/viewvc?view=rev&amp;revision=32680" target="_blank">#32680</a>, <a href="http://root.cern/viewvc?view=rev&amp;revision=32683" target="_blank">#32683</a>, <a href="http://root.cern/viewvc?view=rev&amp;revision=32707" target="_blank">#32707</a>)</li>
	</ul>
	</li>
	<li>Meta
	<ul>
		<li>Add dictionary for <span class="geshifilter"><code class="cpp geshifilter-cpp">vector<span style="color: #000080;">&lt;</span>pair<span style="color: #000080;">&lt;</span><span style="color: #0000ff;">int</span>,<span style="color: #0000ff;">int</span><span style="color: #000080;">&gt;</span> <span style="color: #000080;">&gt;</span></code></span> used in <span class="geshifilter"><code class="cpp geshifilter-cpp">TSchemaRule</code></span> (r32475, <a href="https://savannah.cern.ch/bugs/index.php?53130" target="_blank">bug #53130</a>).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Avoid spurrious warning message when reading file produced by ROOT v5.27 and above.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00h (Feb 8, 2010)</h2>

<ul>
	<li>Xrootd
	<ul>
		<li>New version (v20100205-0000) containing several fixes needed in particular by ATLAS; this includes the new SSL module for authentication needed by Castor.</li>
		<li>Import&nbsp; crucial fix <a href="http://root.cern/viewvc?view=rev&amp;revision=32322" target="_blank">#32322</a> on for the krb5 security module</li>
	</ul>
	</li>
	<li>Krb5auth
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?view=rev&amp;revision=29438" target="_blank">#29438</a> and <a href="http://root.cern/viewvc?view=rev&amp;revision=29474" target="_blank">#29474</a> in krb5auth to fix building issues with current linux distribution (e.g. kubuntu)</li>
	</ul>
	</li>
	<li>Netx
	<ul>
		<li>Import the relevant parts of patch <a href="http://root.cern/viewvc?view=rev&amp;revision=30949" target="_blank">#30949</a> adding the possibility to set on the fly (via the option field of the URL) the new read-ahead policies explicitely introduced in XrdClient for ATLAS.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix in TXNetFile, TRFIOFile and TDCacheFile for accessing members in a zip archive <strong>[Bad link]</strong>.</li>
		<li>Add support reading TWebFiles via a web proxy.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00g (Jan 22, 2010)</h2>

<ul>
	<li>Core
	<ul>
		<li>makelib.sh: when using the --enable-explicitlink option make sure all ROOT libs are fully linked. In most cases -ld was missing. This fixes issue <strong>[Bad link]</strong>.</li>
		<li>Fix in rootcint when using the -p option (<strong>[Bad link]</strong>).</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Fix deprecation warnings for Python 2.6 (r32033, <a href="https://savannah.cern.ch/bugs/?61490" target="_blank">issue #61490</a>)</li>
		<li>Work around warning "cast from pointer-to-function and pointer to object" in some Reflex dictionaries. (r32074 r32090, <a href="https://savannah.cern.ch/bugs/index.php?61758" target="_blank">bug #61758</a>)</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>TDCacheFile: fix regression which caused dcap://host:port/path to fail.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00f (Dec 7, 2009)</h2>

<ul>
	<li>Core
	<ul>
		<li>On MacOS X determine correct ROOTSYS in case libCore.so is a symlink (as was already done on Linux systems).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>TDCacheFile: dCap client does not ignore ?filetype=raw and other options, so remove it. Fixes issue <a href="https://savannah.cern.ch/bugs/index.php?57409" target="_blank">#57409</a>.</li>
		<li>TDCacheFile: increase readahead size from 8k to 128k and make it settable via DCACHE_RA_BUFFER env var.</li>
		<li>Make vector&lt;long&gt; and vector&lt;long long&gt; equivalent (and hence suppress: TStreamerInfo::BuildOld:0: RuntimeWarning: Cannot convert DataHeaderElement_p2::m_Hashes from type:vector&lt;unsigned long long&gt; to type:vector&lt;unsigned long&gt;, skip element )</li>
		<li>Fix the reading of the TFile title in the header for file produced with v3 or older and for file larger than 2G</li>
		<li>Saves about 20% CPU time for I/O with Atlas AODs by not injecting the Streamer() trampolines in Cintex</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Fix the FastCloner re-ordering of basket per entry when the baskets are synchronized across branches (this happens after a good OptimizeBasket of the tree).</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for issue <strong>[Bad link]</strong> and <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
	<li>Reflex
	<ul>
		<li>Allow softlinks when locating genreflex.py (r31534 r31543 r31556 r31563, issue <a href="https://savannah.cern.ch/bugs/index.php?59896" target="_blank">#59896</a>)</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00e (Oct 11, 2009)</h2>

<ul>
	<li>MacOS X Snow Leopard
	<ul>
		<li>Support for 32-bit build on 64-bit Snow Leopard.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Repair nesting of 'named' TTreeFormula (<a href="http://savannah.cern.ch/bugs/?53994" target="_blank">issue #53994</a>).</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>In TUnixSystem and TWinNTSystem, change the dynamic library search order. First look into LD_LIBRARY_PATH (or PATH on Windows) and then in what is specified in Root.DynamicPath. This allows by changing LD_LIBRARY_PATH to search for alternative versions of plugins without changing the rootrc file(s).</li>
		<li>Fix in root-config a problem with relative symbolic links.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00d (July 27, 2009)</h2>

<ul>
	<li>MySQL
	<ul>
		<li>Fix portability problem between 32 and 64 bit as long is not a portable type.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix tab completion for the case
		<pre lang="cxx">
   root [0] .x tutorials/ [TAB]</pre>
		</li>
		<li>Add support for skipping the reading of the $HOME/&lt;name&gt; (e.g. $HOME/.rootrc) resource file. To do this set the shell variable ROOTENV_NO_HOME. This might be useful in case the home directory resides on an automounted remote file system and one wants to avoid this file system from being mounted. Fix for issue <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Speed up the dictionary initialization: nlogn instead of n^2. (r29297, <a href="http://savannah.cern.ch/bugs/?52457" target="_blank">issue #52457</a>).</li>
		<li>Fix the implementation of ShowMembers in the case where the members of a class with a genreflex dictionary are of type with a rootcint dictionary and no genreflex dictionary.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Insure that the TTreeCloner (fast merging) is able to also copy 'uninitialized' TStreamerInfo describing abstract classes (This fixed savannah report #52856)</li>
		<li>Enhance support for reading class (A) stored in a vector where one the member is no longer part of the current class layout (of class A) and the member is a class type .</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix the initialization of the checksum information for a TSchemaRule (hence fixing the lookup based on checksum)</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for issue <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00c (June 27, 2009)</h2>

<ul>
	<li>CINT
	<ul>
		<li>Only use workaround against Microsoft compiler bug ('unused' returned reference for forward declared classes, see v5-22-00b) on Windows; silences (correct) warnings on other platforms (r28683).</li>
		<li>Typedefs that are defined in a scope that is not part of the dictionary will not get an entry in the rootmap file, (r29026, <a href="http://savannah.cern.ch/bugs/?51846" target="_blank">issue #51846</a>).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Several fixes to properly support "flushing the write basket before streaming the branch".</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix a crash while loading 'std::set<std string="">'. This fixes issue <a href="https://savannah.cern.ch/bugs/?49779" target="_blank">#49779</a>.</std></li>
	</ul>
	</li>
	<li>rootcint
	<ul>
		<li>Correct algorithm to find ROOTSYS, now it works also if rootcint is a symlink.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00b (May 14, 2009)</h2>

<ul>
	<li>Base
	<ul>
		<li>In GetOptions() fix parsing of script names with + somewhere in path.</li>
		<li>Roll back mod made in r25519 which was not a good idea as it required the user to make two gStyle-&gt;Set... statements to get a white canvas.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Prevent a potential infinite loop when reading the StreamerInfos.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Improve performance of read back of sub-branches contains stl container of simple types</li>
		<li>Prevent an infinite loop when reading a file containing a class which is split and has a vector member that has been removed in the current class layout.</li>
		<li>Enhance support for reading class (A) stored in a vector where one the member is no longer part of the current class layout (of class A)</li>
	</ul>
	</li>
	<li>Meta
	<ul>
		<li>Support the case where loading the library needed for an autoload entry does not lead to the loading of a CINT dictionary; This happens if the library has a Reflex dictionary and Cintex is not enabled.</li>
		<li>In TClass::Clone, insure that the copy is using the same 'dictionary' as the original so that it is really setting up an alias.</li>
		<li>Insure the autoloader is properly enabled when it is needed (for example after an explicit call to TSystem::Load even without a TApplication object).</li>
	</ul>
	</li>
	<li>Cint
	<ul>
		<li>Insure that the creation and deletion of object in Cintex matches the way object are created and delete by the compiler.</li>
		<li>Fix a silent corruption of the I/O system that can be triggered by a call to UpdateMembers() before Cintex got invoked. (r28049, <a href="http://savannah.cern.ch/bugs/?48338" target="_blank">issue #48338</a>)</li>
		<li>Call TypeBase::Deallocate() instead of ::op delete in Reflex::Class::Destruct(), and only if requested. (r28086, <a href="http://savannah.cern.ch/bugs/?47076" target="_blank">issue #47076</a>)</li>
		<li>Allow transient declarations even for typedef-to-class. (r28335 + r28374, <a href="https://savannah.cern.ch/bugs/?49472" target="_blank">issue #49472</a>)</li>
		<li>Fix invalid memory access in ~ScopeBase() after UpdateMembers(). (r28337, <a href="https://savannah.cern.ch/bugs/?49533" target="_blank">issue #49533</a>)</li>
		<li>Silence warnings when compiling Reflex dictionaries with <tt>-pedantic</tt> (r28394, <a href="https://savannah.cern.ch/bugs/?49792" target="_blank">issue #49792</a>)</li>
		<li>Do not try to automatically create a dictionary for template classes that were loaded via CINTEX (r28415, <a href="https://savannah.cern.ch/bugs/?49926" target="_blank">issue 49926</a>)</li>
		<li>Work around a silly error generated by the Microsoft compiler when seeing an 'unused' returned reference to a forward declared class.</li>
	</ul>
	</li>
	<li>Graf
	<ul>
		<li>Fix in PaintAxis: the option "U", for unlabeled axis, was not implemented in case of alphanumeric axis' labels.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix bad side effect introduced in revision 28200 in TGraph::GetHistogram().</li>
	</ul>
	</li>
	<li>Geom
	<ul>
		<li>Fixed issue with un-initialized variable in TGeoScaledShape::DistFromInside(). This fixes issue <strong>[Bad link]</strong>.</li>
	</ul>
	</li>
	<li>MathCore
	<ul>
		<li>Fix bug&nbsp;<strong>[Bad link]</strong>&nbsp;in fitting TGraphErrors&nbsp;</li>
		<li>Fix a problem in likelihood fit caused by negative pdf values</li>
		<li>Fix a bug in creating the Integrator class when MathMore is not built.</li>
	</ul>
	</li>
	<li>SMatrix
	<ul>
		<li>Remove&nbsp;tolerance&nbsp;check when inverting matrices (both with BK&nbsp;or LU methods)</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import fixes in the security modules</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Fix problem with handling entry lists</li>
		<li>Fix problem with retrieving files from the cache</li>
		<li>Fix problem with schema evolution</li>
		<li>Fix problem causing random crashes when asking for the memory plot</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-22-00a (Feb 12, 2009)</h2>

<ul>
	<li>Misc
	<ul>
		<li>Add support for Microsoft Visual C++ version 9.0</li>
	</ul>
	</li>
	<li>Base
	<ul>
		<li>Fix issue <strong>[Bad link]</strong>, crash caused by PATH being larger than 8192 characters.</li>
		<li>Fix issue <strong>[Bad link]</strong>, determination of ROOTSYS broken when libCore is in a symlinked path.</li>
		<li>Fix root-config, determination of ROOTSYS broken when root-config is in a symlinked path.</li>
		<li>Fix issue in TFolder::ls() not handling wildcards properly.</li>
	</ul>
	</li>
	<li>Meta
	<ul>
		<li>Implement TClass::Clone (It replaces the copy constructor which was removed)</li>
		<li>Suppress error message in TClass::BuildRealData if the class is used 'only' for a transient member.</li>
		<li>Implement new mode 1&lt;&lt;7 for TClassEdit::ShortType() to strip off default template parameters.</li>
		<li>Fix issue <strong>[Bad link]</strong>, genreflex failing for functions taking multidimensional arrays.</li>
		<li>Prevent a segmentation fault and reintroduce the proper warning message when a file contains an empty collection of long double.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Force the TStreamerInfo used by a split branch to be non-optimized.</li>
		<li>Fix the logic when trying to match the branch from one tree to the other (avoid an infinite loop if the first branch is missing in the new tree).</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for issue <strong>[Bad link]</strong>.</li>
		<li>Windows: Create the Python module libPyROOT.pyd from libPyROOT.lib instead of copying it from libPyROOT.dll. This solves a problem in GaudiPython.</li>
	</ul>
	</li>
	<li>CINT / Reflex
	<ul>
		<li>Fix issue <strong>[Bad link]</strong>, genreflex failing for functions taking multidimensional arrays. (r27214)</li>
		<li>Don't cache Reflex::Members. Repairs Cintex for classes with duplicate dictionaries. (r27303)</li>
		<li>genreflex: prepend return type of shadows' final overriders by '::' where applicable; fixes issue <strong>[Bad link]</strong>. Also keep constness of original return type. (r27305)</li>
		<li>Correct CINT's handling of unsigned numbers larger than INT_MAX. (r27306)</li>
		<li>When looking up list&lt;A&gt;::iterator, list&lt;A&gt; was looked up only as a struct, where in fact (for CINT) it's a typedef. This prevents template instantiation (which fails during library load) and autoloading in the case of rootmap (re-) registration for types like list&lt;A&gt;::iterator. (r27310)</li>
		<li>Reflex::Type::SizeOf() was giving the wrong answer if the underlying type was not yet initialized when the derived type (e.g. array, typedef) was built; see issue <strong>[Bad link]</strong>. (r27325)</li>
		<li>Remove stray spaces in genreflex-created rootmap files for types containing (basic_)string as template argument. (r27408)</li>
		<li>Insert basic_string&amp;ltchar&gt; through Cintex for backward compatibility reasons. (r27408)</li>
		<li>Rename unsigned int template arguments as provided by GCCXML to not end on "ul", fixing issue reported by Atlas with boost::array. (r27408)</li>
	</ul>
	</li>
	<li>Fitting (MathCore +&nbsp;Hist)
	<ul>
		<li>Fix issue <strong>[Bad link]</strong> for normalization of error resulting from fitting a TGraph</li>
		<li>Fix a problem in Chi2 calculation in case of overflow</li>
		<li>Fix issue <strong>[Bad link]</strong> when setting a function range outside histogram range</li>
		<li>Fix issue <strong>[Bad link]</strong> for creating a list of functions when using TGraph default constructor</li>
		<li>Fix issue &nbsp;<strong>[Bad link]</strong> for avoiding crashes when a&nbsp;linear fit fails.</li>
	</ul>
	</li>
	<li>TAlienFile / xrootd
	<ul>
		<li>Fix issue <strong>[Bad link]</strong> TAlienFile size being recorded as size 0.</li>
		<li>Fix issue <strong>[Bad link]</strong> concerning TFile::Cp() of AliEn files.</li>
	</ul>
	</li>
	<li>XrdProofd
	<ul>
		<li>Fix a free/delete mismatch possibly causing a segv when restarting the daemon</li>
		<li>Fix a backward-incompatibility issue causing the error message "unknown action code: 5112"</li>
	</ul>
	</li>
	<li>Xrootd, import of fixes from the CVS head:
	<ul>
		<li>for possible crashes of the daemon after a 'prepare'.</li>
		<li>improving the server hostname check in GSI authentication.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix issue <strong>[Bad link]</strong> in TH3::Project3D for the error calculation in case of weighted histogram (or when using option "E") and no axis range is set.</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>
</div>
