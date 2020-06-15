---
title: ROOT Version v5-28-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<div class="content">
<p>A new production version ROOT v5-28-00h has been released November 24, 2011.</p>

<p>The AFS version of v5-28-00h for many different platforms and compilers can be found at:</p>
<code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.28.00h/ </code>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code> <a href="ftp://root.cern.ch/root/root_v5.28.00h.source.tar.gz" target="_blank">ftp://root.cern.ch/root/root_v5.28.00h.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span> using:</p>
<code> svn co <a href="http://root.cern.ch/svn/root/tags/v5-28-00h" target="_blank" title="http://root.cern.ch/svn/root/tags/v5-28-00h">http://root.cern.ch/svn/root/tags/v5-28-00h</a> root </code>

<p>After obtaining the source read the file <a href="/node/103" target="_blank">README/INSTALL</a> <span style="color:#B22222;">(broken)</span> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-28-00-patches branch do:</p>
<code> svn co <a href="http://root.cern.ch/svn/root/branches/v5-28-00-patches" target="_blank" title="http://root.cern.ch/svn/root/branches/v5-28-00-patches">http://root.cern.ch/svn/root/branches/v5-28-00-patches</a> root </code>

<h2>Changes in the head of the v5-28-00-patches branch</h2>

<ul>
	<li>Cint
	<ul>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=42805&amp;root=root&amp;view=rev" target="_blank">#42805</a> fixing the problem <a href="https://savannah.cern.ch/bugs/index.php?83909" target="_blank">#83909</a> which leading to failure of the auto-dictionary generator when dealing with class template inside a namespace.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=42757&amp;root=root&amp;view=rev" target="_blank">#42757</a> fixing memory leak due to multiple allocations of gLibraryVersion.</li>
		<li>Add missing implementation for TGenericClassInfo::GetDirectoryAutoAdd.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Adapt patch <a href="http://root.cern.ch/viewvc?rev=42671&amp;root=root&amp;view=rev" target="_blank">#42671</a> fixing a problem with TProof::Load reported in the PROOF forum, caused by the fact that the additional files were not copied in the master sandbox but left in the cache.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=42904&amp;root=root&amp;view=rev" target="_blank">#42904</a> in TProofOutputFile changing the default mode for merging histograms in TFileMerger, to reduce the memory footprint.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40744&amp;root=root&amp;view=rev" target="_blank">#40744</a> fixing usage of enums in the PDB macro in TProofMonSenderML and TProofMonSenderSQL.</li>
		<li>Adapt/import patches <a href="http://root.cern.ch/viewvc?rev=38922&amp;root=root&amp;view=rev" target="_blank">#38922</a> and <a href="http://root.cern.ch/viewvc?rev=42921&amp;root=root&amp;view=rev" target="_blank">#42921</a> to add the possibility to disable reconnections via the variable TXSocket.Reconnect (0 disable reconnections; default is 1) .</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=43245&amp;root=root&amp;view=rev" target="_blank">#43245</a> fixing an issue with forcing local copies of files before merging (bit not always honored).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Resolve <a href="https://savannah.cern.ch/bugs/index.php?89645" target="_blank">#89645</a> which could lead to segmentation fault when writing a sparse branch (in a large TTree) with a very long branch name.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00h (November 24, 2011)</h2>

<ul>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=40912&amp;root=root&amp;view=rev" target="_blank">#40912</a> and <a href="http://root.cern.ch/viewvc?rev=40923&amp;root=root&amp;view=rev" target="_blank">#40923</a> adding the possibility to skip the checks for the data directories during session startup, as they may significantly slowdown the startup process is the medium is busy.</li>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=41313&amp;root=root&amp;view=rev" target="_blank">#41313</a>, <a href="http://root.cern.ch/viewvc?rev=41336&amp;root=root&amp;view=rev" target="_blank">#41336</a>, <a href="http://root.cern.ch/viewvc?rev=41355&amp;root=root&amp;view=rev" target="_blank">#41355</a>, <a href="http://root.cern.ch/viewvc?rev=41378&amp;root=root&amp;view=rev" target="_blank">#41378</a> and <a href="http://root.cern.ch/viewvc?rev=41383&amp;root=root&amp;view=rev" target="_blank">#41383</a> fixing unprivileged multi-user support and access control.</li>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=41393&amp;root=root&amp;view=rev" target="_blank">#41393</a> and <a href="http://root.cern.ch/viewvc?rev=41399&amp;root=root&amp;view=rev" target="_blank">#41399</a> fixing possible issues with PATH and LD_LIBRARY_PATH settings for proofserv.</li>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=40576&amp;root=root&amp;view=rev" target="_blank">#40576</a>, <a href="http://root.cern.ch/viewvc?rev=40699&amp;root=root&amp;view=rev" target="_blank">#40699</a> and <a href="http://root.cern.ch/viewvc?rev=40758&amp;root=root&amp;view=rev" target="_blank">#40758</a> with the improvements in PROOF monitoring.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=41493&amp;root=root&amp;view=rev" target="_blank">#41493</a> fixing return codes on TProof::EnablePackage(...) failures.</li>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=41785&amp;root=root&amp;view=rev" target="_blank">#41785</a> and <a href="http://root.cern.ch/viewvc?rev=41786&amp;root=root&amp;view=rev" target="_blank">#41786</a> fixing an issue with packetizers preventing proper entry range processing and the file ordering in datasets.</li>
	</ul>
	</li>
	<li>Build System
	<ul>
		<li>Enable configuration of internal CINT array sizes (r42192 r42209, <a href="https://savannah.cern.ch/bugs/?88752" target="_blank">#88752</a>).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00g (September 14, 2011)</h2>

<ul>
	<li>Core
	<ul>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40534&amp;root=root&amp;view=rev" target="_blank">#40534</a> to silence spurious warnings when removing objects from TObjectTable.</li>
		<li>Allow home directory to be specified via HOME shell var in case there is no correct passwd file entry, fixes issue <a href="http://savannah.cern.ch/bugs/?83268" target="_blank">83268</a></li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Fix the handling of emulated class containing variable size array of objects.</li>
		<li>Update MakeProject to properly handle classes containing variable size array of objects.</li>
		<li>Prevents a memory leak in the handling of associative containers stored in a TTree, fixes issue <a href="https://savannah.cern.ch/bugs/?85910" target="_blank">#85910</a></li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Lift ancien restriction (imposed by VC++6) preventing the proper use of unsigned long long by TTreeFormula.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import new version 0.9.6 of afdsmgrd (patch <a href="http://root.cern.ch/viewvc?rev=40573&amp;root=root&amp;view=rev" target="_blank">#40573</a>) with improvements needed by ALICE.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40659&amp;root=root&amp;view=rev" target="_blank">#40659</a> fixing a possible seg violation when exiting ROOT.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40660&amp;root=root&amp;view=rev" target="_blank">#40660</a> restoring operability of the dynamic startup (broken by patch 36553).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00f (August 8, 2011)</h2>

<ul>
	<li>TTree
	<ul>
		<li>Import fix <a href="http://root.cern.ch/viewvc?rev=40077&amp;root=root&amp;view=rev" target="_blank">#40077</a> to prevent the use of non-existent memory when reading in an object that is part of an STL collection and which used to contains an embedded object (and this data member has been removed)(bug <a href="https://savannah.cern.ch/bugs/?83793" target="_blank">#83793</a>).</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import fix <a href="http://root.cern.ch/viewvc?rev=39628&amp;root=root&amp;view=rev" target="_blank">#39628</a> in TH1::LabelsInflate or Deflate (bug <a href="https://savannah.cern.ch/bugs/?83066" target="_blank">#83066</a>).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import new version of afdsmgrd (patch <a href="http://root.cern.ch/viewvc?rev=39968&amp;root=root&amp;view=rev" target="_blank">#39968</a>) with a fix needed by ALICE.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=39442&amp;root=root&amp;view=rev" target="_blank">#39442</a> and <a href="http://root.cern.ch/viewvc?rev=40186&amp;root=root&amp;view=rev" target="_blank">#40186</a> improving histogram merging by using TH1::Add when the axis are equal; this is much faster than TH1::Merge and uses less memory.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40017&amp;root=root&amp;view=rev" target="_blank">#40017</a>&nbsp;making the query exit status available for monitoring and in the output list.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=37663&amp;root=root&amp;view=rev" target="_blank">#37663</a>&nbsp;consolidating the behavior of TProof::ClearPackages.</li>
		<li>Import patch <a href="http://root.cern.ch/viewvc?rev=40359&amp;root=root&amp;view=rev" target="_blank">#40359</a>&nbsp; fixing an issue showing up in PROOF-Lite when merging via files.</li>
	</ul>
	</li>
	<li>Netx/Xrootd
	<ul>
		<li>Import patches <a href="http://root.cern.ch/viewvc?rev=40435&amp;root=root&amp;view=rev" target="_blank">#40435</a> and <a href="http://root.cern.ch/viewvc?rev=40436&amp;root=root&amp;view=rev" target="_blank">#40436</a> &nbsp; to fix the issues preventing proper notification of XrdClient authentication errors.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00e (June 21, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Additional fix for Ubuntu 11.04.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39152" target="_blank">#39152</a> improving solidity of file name matching in TPacketizerFile.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39171" target="_blank">#39171</a> fixing merging of TProofOutputFiles with submergers (see <a href="http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12598" target="_blank" title="http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12598">http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12598</a>).</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39173" target="_blank">#39173</a> to include transmission of the orginal weight to TProofDraw is 'DrawSelect' operations. See <a href="http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12728" target="_blank" title="http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12728">http://root.cern.ch/phpBB3/viewtopic.php?f=13&amp;t=12728</a> .</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39309" target="_blank">#39309</a> importing version 0.9.3 of afdsmgrd.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39579" target="_blank">#39579</a> avoid a segmentation fault when reading file where the AutoFlush mechanism has been disabled and the TTreeCache is requested nonetheless.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39580" target="_blank">#39580</a> fixing an issue with connections via a SSH tunnel.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39585" target="_blank">#39585</a> and <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39835" target="_blank">#39835</a> fixing an issue preventing the correct handling of a 'Stop' request.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39835" target="_blank">#39835</a> fixing an issue screwing up the number of events to be processed when specified; the patch also fixes an issue with the option 'ForceLocal' on 'file:///' URLs.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Help rootcint survive Linkdef.h line containing only '#' (r39158, r39160).</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Fix an issue when reading file that prevented the proper reading of the TObject::fBits when TObject is in a split TTree, which prevented the proper registering of referenced objects (See report <a href="https://savannah.cern.ch/bugs/?80907" target="_blank">#80907</a>).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Reduce the memory used by a TTree by sharing the scratch buffer used to hold the compressed data.</li>
		<li>Avoid an infinite loop in the TTreeCache when reading a small file that has not been clustered See Savannah <a href="http://savannah.cern.ch/bugs/?82337" target="_blank">#82337</a>.</li>
	</ul>
	</li>
	<li>Xroot integration
	<ul>
		<li>Add xrdsssadmin to the list of exported xrootd executables.</li>
		<li>In XrdSecProtocolkrb5, make sure that the client is in front of a terminal before issuing a 'kinit'. Final protection against the 'kerberos issue'. Imported from HEAD.</li>
	</ul>
	</li>
	<li>Geometry
	<ul>
		<li>Geometry imported from HEAD. This contains several fixes related to navigation functionality close to boundaries.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00d (May 7, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Add support for Ubuntu 11.04 (fixes issue <a href="https://savannah.cern.ch/bugs/index.php?81624" target="_blank">#81624</a>).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import the dataset stager daemon (afdsmgrd).</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39074" target="_blank">#39074</a> in TProof and TProofServ, fixing an issue affecting the result of subsequent worker activation/deactivation requests when worker ordinal numbers were not in increasing order; the patch also adds support for block requests and for a return code with the result of the action.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=39088" target="_blank">#39088</a> fixing some issues in TPacketizerUnit, particularly visible in clusters with inhomogeneous machines.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Recognize protected, static data members in base classes (r38962)</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix memory corruption when piping from a file (r38967 r38968, <a href="https://savannah.cern.ch/bugs/index.php?78460" target="_blank">#78460</a>).</li>
		<li>Allow for spaces between '#' and "pragma" in Linkdef.h (r39093, <a href="https://savannah.cern.ch/bugs/index.php?80481" target="_blank">#80481</a>).</li>
		<li>Add missing initialization of TClass::fStreamerFunc.</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Avoid spurrious warning message when reading file with a TTree writen with ROOT 5.29/03 or later:<code>Warning in <tstreamerinfo::compile>: Counter fNClusterRange should not be skipped from class TTree</tstreamerinfo::compile></code></li>
		<li>Avoid spurrious warning message when reading a file containing an 'empty' collection whose content has gone through schema evolution: <code>Error in <tbufferfile::readversion>: Could not find the StreamerInfo with a checksum of - 849380031 for the class "NeverWritten" in memberwise.root.</tbufferfile::readversion></code></li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>In TBranchRef, avoid re-reading the same entry too many times.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00c (Apr 15, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>In ./configure don't use xml2-config when --with-xml-incdir and --with-xml-libdir are set (fixes issue <a href="https://savannah.cern.ch/bugs/index.php?79835" target="_blank">#79835</a>).</li>
		<li>Build the AliEn plugin when XRD is being build or available.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Finally added support for floating point exception handling on MacOS X. The issue is that OS X uses the SSE unit for all FP math by default, not the x87 FP unit, so one has to use _MM_SET_EXCEPTION_MASK.</li>
		<li>Prevent crash in rootcint when too few parameters are passed.</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Fix support for the automatic addition to the current directory (for TTree and TH1 for example) in TKey::Read(TObject*)</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Improve performance of the BranchRef mechanism (by avoid duplicate reading of the RefTable)</li>
		<li>Prevent segmentation fault when re-using a TTree object to read from a file (fixes issue <a href="https://savannah.cern.ch/bugs/index.php?79648" target="_blank">#79648</a>).</li>
		<li>Fix the reading of THashList when stored in TTree (see <a href="http://root.cern.ch/phpBB3/viewtopic.php?p=53684" target="_blank">this report</a> in the forum.)</li>
		<li>Fix a typo in the code generated by MakeProxy that prevented the dictionary generation for some of the STL containers used in the proxy.</li>
		<li>Fix the reading of file produced by v4.00/08 where some of the (rarely used) baskets were not completely initialized properly.</li>
		<li>Honor the flag TSelector::kAbortFile in TTree::Process.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38226" target="_blank">#38226</a> in test/stressProof.cxx, fixing the order in which objects are destroyed at the end of the test.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38538" target="_blank">#38538</a> fixing a problem with the interrupt of sockets turning 'bad'. Should solve some of the cases were slow response was experienced.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38570" target="_blank">#38570</a>,<a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38574" target="_blank">#38574</a> adding support for log file truncation.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38572" target="_blank">#38572</a>,<a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38575" target="_blank">#38575</a>&nbsp;to filter out PROOF internal objects when displaying or printing the output list.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38580" target="_blank">#38580</a>,<a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38581" target="_blank">#38581</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38588" target="_blank">#38588</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38632" target="_blank">#38632</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38765" target="_blank">#38765</a> fixing a problem with log path transmission when the node dies early or not even starts.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38220" target="_blank">#38220</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38221" target="_blank">#38221</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38222" target="_blank">#38222</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38227" target="_blank">#38227</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38228" target="_blank">#38228</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38577" target="_blank">#38577</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38593" target="_blank">#38593</a>, <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38594" target="_blank">#38594</a> , <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38600" target="_blank">#38600</a> adding the possibility to access the files on the workers via the same port used by PROOF.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38616" target="_blank">#38616</a> fixing a bug while checking the first event against the file event ranges; the bug was introduced in 5.28/00 and the effect was that any specification of the number of entries to process was ignored.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38618" target="_blank">#38618</a> fixing an issue with setting the default output file name when merging files with TProofOutputFile.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38691" target="_blank">#38691</a> in TProofOutputFile, fixing issue affecting the case when temporary files are created on a shared file system other than the one with the sandboxes. This case, which seems to be a rather common one, should be now fully supported.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38758" target="_blank">#38758</a> and <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38760" target="_blank">#38760</a> adding missing calls to closedir() and TSystem::FreeDirectory. This solves the problem of open file descriptors in for xproofd after a scan of a dataset directory tree.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38810" target="_blank">#38810</a> to correctly honour the TSelector::kAbortFile settings during processing. This patch also fixes other related issues, in particular with the reporting of the non-processed {files, events} in the final 'MissingFiles' list.</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38709" target="_blank">#38709</a> and <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38779" target="_blank">#38779</a> improving the monitoring to send additional information about memory usage during the query, the name and size (# of files) of the dataset processed (if any). It also adds the possibility to send the information to multiple monitoring collectors. Documentation updated at <a href="http://root.cern.ch/drupal/content/enabling-query-monitoring" target="_blank" title="http://root.cern.ch/drupal/content/enabling-query-monitoring">http://root.cern.ch/drupal/content/enabling-query-monitoring</a> <span style="color:#B22222;">(broken)</span>.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38720" target="_blank">#38720</a> fix a problem in pq2-ana-dist with the labels of the distribution histogram, occurring when machines are represented by IPs instead of FQD names</li>
	</ul>
	</li>
	<li>GUI
	<ul>
		<li>Fixed a bug preventing to browse geometries inside ROOT files.</li>
	</ul>
	</li>
	<li>Graf
	<ul>
		<li>Fix a precision problem in the text positioning in TPostScript.cxx. When the pad limits along X or Y were very close the text position might be wrong. This was found thanks to the test #15 in stressGraphics. The text position is now computed using double precision variable only.</li>
		<li>Like <tt>SetPoint</tt> the method <tt>Apply</tt> modifies the graph content. So, a logic similar to the one implemented in <tt>SetPoint</tt> should be done, ie:
		<ol>
			<li>if <tt>fHistogram</tt> exists it is reset.</li>
			<li>if <tt>gPad</tt> exist a <tt>gPad-&gt;Modified()</tt> is issued.</li>
		</ol>
		</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Fix for #79685, where methods of python classes got mixed up when loaded into CINT (the overloads where selected on return type, now on return type and full, scoped method name). Additionally, automatic memory management and casts of TPyReturn should be more easy to deal with.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix the merge of histograms with labels</li>
		<li>Fix various bugs when using the buffer (automatic binning) &nbsp;</li>
		<li>Fix for TProfile::Merge (bug <a href="https://savannah.cern.ch/bugs/index.php?79675" target="_blank">#79765</a>)</li>
		<li>Fix in all the TH2::Projection and TH3::Projection the compatibility with a previously existing histogram (bug <a href="https://savannah.cern.ch/bugs/index.php?78745" target="_blank">#78745</a>)</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00b (Mar 16, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>For Windows build, fix a fatal error when parsing the -optimize:0 flag.</li>
		<li>Another attempt to fix an issue when the build directory path name contains a "...-x...", <a href="https://savannah.cern.ch/bugs/index.php?76844" target="_blank">#76844</a>.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Fix lookup of functions with prototype when one of the parameters is of function pointer type (r38251, <a href="https://savannah.cern.ch/bugs/index.php?78657" target="_blank">#78657</a>).</li>
		<li>Don't try to invoke destructors of unnamed structs (r38253, <a href="https://savannah.cern.ch/bugs/index.php?78837" target="_blank">#78837</a>).</li>
		<li>Don't prepend prec_stl to headers included for automatic dictionaries (r38272, vector&lt;vector&lt;int&gt; &gt; at <a href="http://root.cern.ch/phpBB3/viewtopic.php?f=3&amp;t=12121" target="_blank">forum</a>).</li>
		<li>Fix <span class="geshifilter"><code class="cpp geshifilter-cpp"><span style="color: #339900;">#pragma link C++ class NameSpace::*;</span></code></span> which before was only creating a dictionary for the first class (r38281).</li>
		<li>Do not treat a failure in opening a shared library as an interpreter error (r38377, <a href="https://savannah.cern.ch/bugs/index.php?78511" target="_blank">#78511</a>).</li>
		<li>Cintex
		<ul>
			<li>Fix iotype directive (selection property) for non-structs (request by CMS, r38204).</li>
			<li>Do not give up on transient members even if their type is not known to Reflex but is known to CINT (r38203).</li>
		</ul>
		</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Prevent the incorrect reading of the content of a base class that was streamed member-wise.</li>
		<li>Remove spurious message in the handling of STL containers (<a href="https://savannah.cern.ch/bugs/index.php?78789" target="_blank">#78789</a>).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Fix the issue with TTree::Draw, SetMakeClass and collection reported in <a href="http://root.cern.ch/phpBB3/viewtopic.php?t=12237" target="_blank">this forum post</a>.</li>
		<li>Fix the case of a split collection containing at least one data member which is an instance of class with one or more base classes that can not be split (for example std::vector<int>). See savannah <a href="https://savannah.cern.ch/bugs/?79235" target="_blank">#79235</a>.</int></li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38215" target="_blank">#38215</a> adding a missing protection in TFileInfo::Print().</li>
		<li>Import patches <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38347" target="_blank">#38347</a> and <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38348" target="_blank">#38348</a> in PROOF-Lite fixing a problem with passing the 'varexp' and 'selection' strings for processing, preventing correct usage of the operators '|' and '||' in TTreeFormula, and making sure that the required dataset is registered when such option is specified in TProofOutputFile.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38380" target="_blank">#38380</a> fixing a possible truncation in the TProofOutputFile constructor when 'Proof.Localroot' is defined.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-28-00a (Feb 21, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Fix an issue when the build directory path name contains a "...-x..." (r37621, r37720).</li>
		<li>Check consistently for Fink or MacPorts libraries. Fixes <a href="https://savannah.cern.ch/bugs/index.php?76678" target="_blank">#76678</a>.</li>
		<li>Fix for redhat and debian targets. Fixes <a href="https://savannah.cern.ch/bugs/index.php?77308" target="_blank">#77308</a>.</li>
		<li>Several of out-of-source build fixes.</li>
		<li>Fix for building using gcc 4.6 (<a href="https://savannah.cern.ch/bugs/index.php?77991" target="_blank">#77991</a>).</li>
		<li>Allow external libafterimage &gt; 1020 (<a href="https://savannah.cern.ch/bugs/index.php?77990" target="_blank">#77990</a>).</li>
		<li>Remove unneeded dependencies for linuxppc and linuxppc64 (<a href="https://savannah.cern.ch/bugs/index.php?77989" target="_blank">#77989</a>).</li>
		<li>Fix for check_lib64() in ./configure misreporting 32-bit libraries. Fixes issue <a href="https://savannah.cern.ch/bugs/index.php?78398" target="_blank">78398</a>.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Added two new macros in RVersion.h, ROOT_FULL_VERSION_CODE and ROOT_FULL_VERSION(a,b,c,p).</li>
		<li>Fixes in TRef::SetAction(). Fixes <a href="https://savannah.cern.ch/bugs/?77570" target="_blank">77570</a> and <a href="https://savannah.cern.ch/bugs/?77725" target="_blank">77725</a>.</li>
		<li>Fix initialization of noTree in hadd (<a href="https://savannah.cern.ch/bugs/?77981" target="_blank">77981</a>).</li>
		<li>Avoid unneeded TROOT::LoadMacro() call when loading a plugin.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38102" target="_blank">#38109</a> fixing a the MD5 initialization in TFileInfo.</li>
		<li>Fix in TList::Delete(), check for 0 before dereferencing. Fixes issue <a href="https://savannah.cern.ch/bugs/?78529" target="_blank">78529</a>.</li>
	</ul>
	</li>
	<li>Cint
	<ul>
		<li>Insure that CINT and ROOT are initialized before initializing Cintex.</li>
		<li>Make sure that .x script.C is actually executed by CINT even when being called indirectly (for example via a call to TApplication::InitializeGraphics triggered by a library autoload) in the middle of a CINT code section where noexec has been set to true (for example the parsing of another script that is being loaded). (Fix Savannah <a href="https://savannah.cern.ch/bugs/index.php?76526" target="_blank">#76526</a>.)</li>
		<li>Implement x86-64 support for varargs without horrendous assembler code. Makes the code independent of any low level compiler changes and fixes clang support.</li>
		<li>Fix dictionary for <tt>seekdir()</tt> on newest Cygwin (r37726).</li>
		<li>Provide default argument for set's second template parameter (<a href="https://savannah.cern.ch/bugs/index.php?76671" target="_blank">bug #76671</a>, r37737).</li>
		<li>Fix parsing of spaces-in-structs (r37746, r37748).</li>
		<li>Enable Qt CINT dictionary for current (4.7) versions (r37747).</li>
		<li>Fix #inclusion of ROOT headers in automatic dictionary generator (<a href="http://root.cern.ch/phpBB3/viewtopic.php?f=3&amp;t=11933" target="_blank">forum</a>, r37774).</li>
		<li>More fixes to parsing spaces in type names in declarations (r37777).</li>
		<li>Function arguments of type pointer to function returning <tt>long xyz</tt> lost their <tt>long</tt> part: fixed (r37783, r37785).</li>
		<li>Unloading libraries was sometimes causing errors with the (re-)initialization of unrelated libraries (r38154).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix typo in TStreamerInfo.h (<a href="https://savannah.cern.ch/bugs/?76697" target="_blank">#76697</a>).</li>
		<li>Fix the reading of empty collection of object when reading without the library.</li>
		<li>Improve error recovery in case of corrupted zipped buffer.</li>
		<li>Properly set the 'optimization' of the StreamerInfo when the StreamerInfo in memory and the StreamerInfo on a file for the same class do not agree/match (thus avoiding a segmentation fault when a StreamerInfo with the wrong optimization level is used).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Fix the implementation of TChain::ResetBranchAddress(TBranch *).</li>
		<li>Fix memory leak in TTree::OptimizeBasket.</li>
		<li>Fix the behavior of TTreeCache when reading the file backward and when reading older not clustered files.</li>
		<li>In TTreeCloner, add a new option to re-introduce the ability to clone into a TTree that has more branches than the input TTree.</li>
		<li>Fix support for option 'a' for TGraphs in TTree::Draw (<a href="https://savannah.cern.ch/bugs/?77706" target="_blank">#77706</a>).</li>
		<li>Significantly improve the performance of TTree::SetBranchAddress and TBranchElement::SetAddress.</li>
		<li>Prevent the unlimited growth of the TBasket's buffer even if the basket is reused.</li>
		<li>Put TBranchElement::ValidateAddress() inline in header.</li>
	</ul>
	</li>
	<li>Graf
	<ul>
		<li>Revision <a href="http://root.cern.ch/viewvc?view=rev&amp;revision=37541" target="_blank">#37541</a> created a problem with COL option displayed in LogZ.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37664" target="_blank">#37664</a> fixing a crash when running vs servers not having the fix for the missing files list (&lt; 5.28/00)</li>
		<li>Import fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37894" target="_blank">#37894</a> adding support for option ':lite:' to TProof::GetDataSets; this allows to fill the map with only the summary information about the datasets (the header of TFileCollections), significantly increasing the speed and the memory footprint when the number of datasets is very large. Should solve Savannah issue #77303</li>
		<li>Import fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37897" target="_blank">#37897</a> adding support for '.' in user names in dataset paths (see Savannah issue #77378)</li>
		<li>Import fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37934" target="_blank">#37934</a> in TDataSetManagerFile::NotifyUpdate, improving handling of the case when the file with the global list of datasets does not exist. Fixes an error occurring in new installations or with new dataset directories.</li>
		<li>Import change <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37942" target="_blank">#37942</a> in TProof::Load, adding support for multiple-file specification. See also <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37976" target="_blank">#37976</a>.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37951" target="_blank">#37951</a> fixing an issue with the port when using bonjour for worker auto-registration.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37969" target="_blank">#37969</a> fixing a bug affecting the order in which query results are registered when two queries started within the same second.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37976" target="_blank">#37976</a> fixing an issue with worker names in PROOF-Lite.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37980" target="_blank">#37980</a> fixing an issue with event number ranges in the packetizers.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38102" target="_blank">#38102</a> fixing an issue with enabling packages with option 'notOnClient' in PROOF-Lite.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38142" target="_blank">#38142</a> fixing a possible appearance of spurious log messages in PROOF-Lite.</li>
		<li>Import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38143" target="_blank">#38143</a> defining envs ROOTPROOFCLIENT and ROOTPROOFLITE when appropriate, so that they can be used in BUILD.sh and/or SETUP.C .</li>
		<li>In TProofMgrLite, import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38177" target="_blank">#38177</a> fixing an issue with the validity check for existing sessions.</li>
		<li>In TProofMgrLite, import patch <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=38180" target="_blank">#38180</a> fixing a few issues in the SQL monitoring interface.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import fix <a href="http://root.cern.ch/viewvc?view=rev&amp;revision=37701" target="_blank">#37701</a> for the drawing of 2D TEfficiency objects&nbsp;</li>
		<li>Fix bug <a href="https://savannah.cern.ch/bugs/index.php?77149" target="_blank">#77149</a>&nbsp;in LabelsDeflate for TProfile (imported the fix <a href="http://root.cern.ch/viewcvs?view=rev&amp;revision=37911" target="_blank">#37911</a>)</li>
		<li>Fix a bug in TProfileXD::GetStats which is affecting the global effective entries (bug <a href="https://savannah.cern.ch/bugs/index.php?77751" target="_blank">#77751</a>)</li>
		<li>Fix TEfficiency::Draw() and possibility to pick and change axes ranges</li>
		<li>Fix TGraphAsymmErrors() for the case of weighted histograms (bug #<a href="https://savannah.cern.ch/bugs/index.php?78249" target="_blank">78249</a>)</li>
		<li>Fix a bug when fitting a TH2 with a 1D function</li>
	</ul>
	</li>
	<li>Geom and GDML
	<ul>
		<li>Fix string handling issues.</li>
	</ul>
	</li>
	<li>GUI
	<ul>
		<li>Fix problems with context menus as reported <a href="http://root.cern.ch/phpBB3/viewtopic.php?f=3&amp;t=12039" target="_blank">on the forum</a></li>
		<li>Only call XFreeColors if we are on a &lt;= 8 plane machine (to match calls to XAllocColor). This fixes the bug <a href="https://savannah.cern.ch/bugs/?77329" target="_blank">#77329</a></li>
		<li>Allow to override CTRL+S behavior by using the TGMainFrame::BindKey() function. Fixes the bug <a href="https://savannah.cern.ch/bugs/?78057" target="_blank">#78057</a></li>
	</ul>
	</li>
	<li>
	<div>RooFit / RooStats</div>

	<ul>
		<li>
		<div>RooFit</div>

		<ul>
			<li>
			<div>Added protectNegativeMean(bool) optional to gracefully handel cases when expectation is negative</div>
			</li>
			<li>
			<div>Added setNoRounding(bool) option to switch between rounding number of events</div>

			<div>Incremented version number for schema evolution</div>
			</li>
		</ul>
		</li>
		<li>
		<div>RooFitCore</div>

		<ul>
			<li>
			<div>Added handeling of a special case in analytic integral for RooRealSumPdf</div>
			</li>
		</ul>
		</li>
		<li>
		<div>RooStats</div>

		<ul>
			<li>
			<div>Fixed printout in number of toy MC used in FeldmanCousins and NeymanConstruction&nbsp;</div>
			</li>
			<li>
			<div>Added SetOneSided(bool) option to ProfileLiklihoodTestStat for one-sided upper limits</div>
			</li>
			<li>
			<div>Fixed a bug in LikelihoodInterval when having constant parameter</div>
			</li>
			<li>
			<div>Add missing default constructor (needed for PROOF)&nbsp;in NumEventsTestStats</div>
			</li>
			<li>
			<div>Fix calculation of p values and errors in HypoTestResult for discrete distributions and for weighted sampling.</div>
			</li>
			<li>
			<div>Added SetPOIPointsToTest(RooAbsData) method to FeldmanCousins tool, so that user can have control over which points in the parameter of interest to test (still using "profile construction" for nuisance parameters). &nbsp;Additionally, added SetParameterPointsToTest, that has the same&nbsp;functionality as NeymanConstruction::SetParameterPointsToTest.&nbsp;</div>
			</li>
		</ul>
		</li>
		<li>
		<div>HistFactory</div>

		<ul>
			<li>
			<div>Fixed header definition in PiecewiseInterpolation</div>
			</li>
			<li>
			<div>Added analytic integration in PiecewiseInterpolation</div>
			</li>
			<li>
			<div>Added HistoToWorkspaceFactoryFast and MakeModelAndMeasurementsFast which implement the equivalent model produced by the original HistFactory, but in "standard form" instead of "number counting form". &nbsp;Instead of splitting the histogram into bins and having a RooPoisson for each bin, this makes an extended Pdf with that interpolates between RooHistFuncs. &nbsp;For situations with many bins, this is 5-15x faster and uses much less memory. &nbsp;This model also works better with tools that require toy Monte Carlo. &nbsp;This new model is the new default in hist2workspace. &nbsp;The old model is still available with hist2workspace -number_counting_form input.xml.</div>
			</li>
			<li>Fix dictionary on Fedora (r38188, <a href="https://savannah.cern.ch/bugs/?78554" target="_blank">issue #78554</a>).</li>
		</ul>
		</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>New version 3.0.2</li>
	</ul>
	</li>
</ul>

<p>See the release notes for what is new in the version 5.28/00 production release.</p>
</div>

</div>

