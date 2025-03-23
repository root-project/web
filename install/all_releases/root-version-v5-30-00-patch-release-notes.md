---
title: ROOT Version v5-30-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<div class="content">
<p>A new production version ROOT v5-30-06 has been released January 10, 2012.</p>

<p>The AFS version of v5-30-06 for many different platforms and compilers can be found at:</p>
<code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.30.06/ </code>

<p>The complete source tree for all systems (39 MB) is available here:</p>
<code> <a href="ftp://root.cern/root/root_v5.30.06.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.30.06.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/node/92" target="_blank">Git</a> using:</p>
<code> git clone http://root.cern/git/root.git root-v5-30; cd root-v5-30; git checkout -b v5-30-06 </code>

<p>After obtaining the source read the file <a href="/node/103" target="_blank">README/INSTALL</a> <span>(broken)</span> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-30-00-patches branch do:</p>
<code> git clone -b v5-30-00-patches http://root.cern/git/root.git root-v5-30 </code>

<h2>Changes in the head of the v5-30-00-patches branch</h2>

<ul>
	<li>Cint
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42805&amp;root=root&amp;view=rev" target="_blank">#42805</a> fixing the problem <a href="https://savannah.cern.ch/bugs/index.php?83909" target="_blank">#83909</a> which leading to failure of the auto-dictionary generator when dealing with class template inside a namespace.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42757&amp;root=root&amp;view=rev" target="_blank">#42757</a> fixing memory leak due to multiple allocations of gLibraryVersion.</li>
		<li>Add missing implementation for TGenericClassInfo::GetDirectoryAutoAdd.</li>
	</ul>
	</li>
	<li>IO
	<ul>
		<li>Repaired chirp plugin.</li>
		<li>Prevent negative consequences of call SetAutoFlush with a default value (44279, bug <a href="https://savannah.cern.ch/bugs/?94669" target="_blank">#94669</a><a>).</a></li>
		<li>In TTreeSQL prevent a spurious duplicate column error (Fixes Savannah issues <a href="http://savannah.cern.ch/bugs/?98126" target="_blank">#98126</a>.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Make sure that in the tertiary operator implementation we always load the branch that are needed (even in the case cond ? y : -y where cond is false). This fixes <a href="https://savannah.cern.ch/bugs/?90826" target="_blank">#90826</a>.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Reorder pq2 libraries for Ubuntu 11.10 (<a href="http://root.cern/viewvc?rev=42660&amp;root=root&amp;view=rev" target="_blank">r42660</a>).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42578&amp;root=root&amp;view=rev" target="_blank">#42578</a> fixing in getProof.C some issues mostly related to PROOF-Lite.</li>
		<li>Import class to analyse the performance tree (see <a href="http://root.cern/drupal/content/analysing-performance-tree" target="_blank">description</a>) <span>(broken)</span></li>
		<li>Adapt patch <a href="http://root.cern/viewvc?rev=42671&amp;root=root&amp;view=rev" target="_blank">#42671</a> fixing a problem with TProof::Load reported in the PROOF forum, caused by the fact that the additional files were not copied in the master sandbox but left in the cache.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41745&amp;root=root&amp;view=rev" target="_blank">#41745</a> fixing TFileCollection::Merge.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42904&amp;root=root&amp;view=rev" target="_blank">#42904</a> in TProofOutputFile changing the default mode for merging histograms in TFileMerger, to reduce the memory footprint.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42921&amp;root=root&amp;view=rev" target="_blank">#42921</a> to add also to TXUnixSocket the possibility to disable reconnections via the variable TXSocket.Reconnect (0 disable reconnections; default is 1) .</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43245&amp;root=root&amp;view=rev" target="_blank">#43245</a> fixing an issue with forcing local copies of files before merging (bit not always honored).</li>
		<li><a>Import patch </a><a href="http://root.cern/viewvc?rev=44048&amp;root=root&amp;view=rev" target="_blank">#44048</a> removing the automatic creation of TDrawFeedback by TProofChain.</li>
	</ul>
	</li>
	<li>Graf3D
	<ul>
		<li>Import rev 42084 from trunk: Fix crash on exit when stamped element map is not empty.</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Patch for<a href="http://savannah.cern.ch/bugs/?91505" target="_blank"> #91505</a>: allow null-characters in strings passed through the binding.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-06 (January 10, 2012)</h2>

<ul>
	<li>TTree
	<ul>
		<li>Resolve <a href="https://savannah.cern.ch/bugs/index.php?89645" target="_blank">#89645</a> which could lead to segmentation fault when writing a sparse branch (in a large TTree) with a very long branch name.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Adapt patches <a href="http://root.cern/viewvc?rev=42142&amp;root=root&amp;view=rev" target="_blank">#42142</a> and <a href="http://root.cern/viewvc?rev=42451&amp;root=root&amp;view=rev" target="_blank">#42451</a> to stressProof adding a return code consistent with standard test facilities and the option '-noprogress' to switch off the progress information which may create problems in wrapper applications intercepting the output (e.g. ctest)</li>
	</ul>
	</li>
	<li>Geometry
	<ul>
		<li>Port patch <a href="http://root.cern/viewvc?view=rev&amp;sortby=rev&amp;revision=40117" target="_blank">#40117</a> that fixes an issue with usage of reflection matrices in assemblies and affected the GEANT4 interface.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-05 (November 24, 2011)</h2>

<ul>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41958&amp;root=root&amp;view=rev" target="_blank">#41958</a> and <a href="http://root.cern/viewvc?rev=41999&amp;root=root&amp;view=rev" target="_blank">#41999</a> to improve checks, definition and cleaning of the working dir in tutorials/proof/getProof.C</li>
	</ul>
	</li>
	<li>Build System
	<ul>
		<li>Enable configuration of internal CINT array sizes (r42194 r42211, <a href="https://savannah.cern.ch/bugs/?88752" target="_blank">#88752</a>).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-04 (November 8, 2011)</h2>

<ul>
	<li>TTree
	<ul>
		<li>Fix hadd when merger TFiles with more than one key for a TTree when doing a slow TTree merge. This fixes <a href="http://savannah.cern.ch/bugs/?88224" target="_blank">#88224</a></li>
		<li>Fix the asynchronous prefetcher in case of TChain</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Add support for building with external xrootd 3.1.0 or newer.</li>
		<li>Backport of <a href="http://xrootd.cern.ch/cgi-bin/cgit.cgi/xrootd/commit/?id=d10c528900539891037566b5d26c26be1c662132" target="_blank">bug #87880</a>.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Textinput: display the prompt when calling Getline() (r41662).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41785&amp;root=root&amp;view=rev" target="_blank">#41785</a> and <a href="http://root.cern/viewvc?rev=41786&amp;root=root&amp;view=rev" target="_blank">#41786</a> fixing an issue with packetizers preventing proper entry range processing and the file ordering in datasets.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41788&amp;root=root&amp;view=rev" target="_blank">#41788</a> fixing an issue with AddInputData when objects are TTree or derived.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41801&amp;root=root&amp;view=rev" target="_blank">#41801</a> fixing an issue in the packetizers potentially crashing PROOF-Lite at exit when using file-resident outputs.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-03 (October 20, 2011)</h2>

<ul>
	<li>Core
	<ul>
		<li>Textinput: fix cursor move to next line for non-Windows (r41042).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>In TTree::GetLeaf (and thus indirectly in TTree::Scan, TTree::Draw), properly handle the case where the branch name has a slash in its name (but the leaf does not). This fixes <a href="http://savannah.cern.ch/bugs/?86946" target="_blank">#86946</a></li>
		<li>Fix an issue leading to reading too many elements of a split collection when one the data member needs to be cached for an i/o customization rule.</li>
	</ul>
	</li>
	<li>Graf2D
	<ul>
		<li>Backport fix to be compatible with libpng 1.5.</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>Critical bug fix "return string-&gt;GetString()" and some optimization for TGridJDL.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41313&amp;root=root&amp;view=rev" target="_blank">#41313</a>, <a href="http://root.cern/viewvc?rev=41336&amp;root=root&amp;view=rev" target="_blank">#41336</a>, <a href="http://root.cern/viewvc?rev=41355&amp;root=root&amp;view=rev" target="_blank">#41355</a>, <a href="http://root.cern/viewvc?rev=41378&amp;root=root&amp;view=rev" target="_blank">#41378</a> and <a href="http://root.cern/viewvc?rev=41383&amp;root=root&amp;view=rev" target="_blank">#41383</a> fixing unprivileged multi-user support and access control.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41393&amp;root=root&amp;view=rev" target="_blank">#41393</a> and <a href="http://root.cern/viewvc?rev=41399&amp;root=root&amp;view=rev" target="_blank">#41399</a> fixing possible issues with PATH and LD_LIBRARY_PATH settings for proofserv.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=40576&amp;root=root&amp;view=rev" target="_blank">#40576</a>, <a href="http://root.cern/viewvc?rev=40699&amp;root=root&amp;view=rev" target="_blank">#40699</a>, <a href="http://root.cern/viewvc?rev=40744&amp;root=root&amp;view=rev" target="_blank">#40744</a> and <a href="http://root.cern/viewvc?rev=40758&amp;root=root&amp;view=rev" target="_blank">#40758</a> with the improvements in PROOF monitoring.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41493&amp;root=root&amp;view=rev" target="_blank">#41493</a>, <a href="http://root.cern/viewvc?rev=41526&amp;root=root&amp;view=rev" target="_blank">#41526</a> and <a href="http://root.cern/viewvc?rev=41530&amp;root=root&amp;view=rev" target="_blank">#41530</a> fixing return codes on TProof::EnablePackage(...) failures.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-02 (September 22, 2011)</h2>

<ul>
	<li>Core
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40820&amp;root=root&amp;view=rev" target="_blank">#40820</a>. Make sure in BuildRealData, to consider all the data member of a transient class (class version 0) as transient. This fixes the issue <a href="https://savannah.cern.ch/bugs/?86352" target="_blank">#86352</a> in Savannah.</li>
		<li>Textinput: fix handling of ESC / Meta (r40778).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40141&amp;root=root&amp;view=rev" target="_blank">#40141</a> fixing support for '<em>proto</em> ://' in TUrl.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40659&amp;root=root&amp;view=rev" target="_blank">#40659</a> fixing a possible seg violation when exiting ROOT.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40660&amp;root=root&amp;view=rev" target="_blank">#40660</a> restoring operability of the dynamic startup (broken by patch 36553).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40115&amp;root=root&amp;view=rev" target="_blank">#40115</a> with a few fixes in proofbench, including the possibility to run from any directory.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=40912&amp;root=root&amp;view=rev" target="_blank">#40912</a> and <a href="http://root.cern/viewvc?rev=40923&amp;root=root&amp;view=rev" target="_blank">#40923</a> adding the possibility to skip the checks for the data directories during session startup, as they may significantly slowdown the startup process is the medium is busy.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Update the customization rule parser to allow rule for unsigned int data members.</li>
		<li>Fix the handling of emulated class containing variable size array of objects.</li>
		<li>Update MakeProject to properly handle classes containing variable size array of objects.</li>
		<li>Prevents a memory leak in the handling of associative containers stored in a TTree, fixes issue <a href="https://savannah.cern.ch/bugs/?85910" target="_blank">#85910</a></li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Fix a bug in the computation the one-side Profile Likelihood test statistics (bug <a href="https://savannah.cern.ch/bugs/?86013" target="_blank">#86013</a>) which was introduced in 5.30.01 when using the RooMinimizer for the computation of the test statistic. Fix also the case when no nuisance parameters are present.&nbsp;</li>
		<li>Fix in ModelConfig the re-definition of parameter sets.</li>
		<li>Speedup computation of p-values (Integral) in SamplingDistribution by caching the empirical cdf.</li>
		<li>Fix the rest of the pdf components cache in ToyMCSampler when setting a new pdf</li>
		<li>Fix some minor issues in plotting SamplingDistribution's obtained from the HypoTestInverter</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix a bug in the TEfficiency destructor (see this <a href="http://root.cern/phpBB3//viewtopic.php?f=3&amp;t=13398" target="_blank">post</a> on Root Forum)&nbsp;</li>
	</ul>
	</li>
	<li>FitPanel
	<ul>
		<li>Fix a bug in using an already existing fit function (bug <a href="http:// https://savannah.cern.ch/bugs/?86251" target="_blank">#86251</a>)&nbsp;</li>
	</ul>
	</li>
	<li>HIstFactory
	<ul>
		<li>Fix for bug <a href="https://savannah.cern.ch/bugs/?85481" target="_blank">#85481</a>.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-30-01 (August 18, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Reorder lzma.h search in ./configure, fixes issue <a href="https://savannah.cern.ch/bugs/?83938" target="_blank">#83938</a>.</li>
		<li>CMake fixes (r40282, r40283).</li>
		<li>On OSX check in ./configure if a library is compatible with the architecture.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Textinput: fix handling of keyboard modifiers (r40118).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40272&amp;root=root&amp;view=rev" target="_blank">#40272</a> adding Hash(), IsSortable() and CompareTo() so that TParameter can be used in hash and/or sorted lists (e.g. gDirectory).</li>
		<li>Properly support tilde (~) in TSystem::ExpandPathName() even when they are not the first character</li>
		<li>Make sure we write at the end of the file in which we redirect stdout/stderr (avoid overwriting)</li>
		<li><a href="https://savannah.cern.ch/bugs/?85226" target="_blank">Import patch </a> <a href="http://root.cern/viewvc?rev=40534&amp;root=root&amp;view=rev" target="_blank">#40534</a> to silence spurious warnings when removing objects from TObjectTable.</li>
		<li>Allow home directory to be specified via HOME shell var in case there is no correct passwd file entry, fixes issue <a href="http://savannah.cern.ch/bugs/?83268" target="_blank">83268</a></li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Repair the handling of failing to load a shared library <a href="https://savannah.cern.ch/bugs/?85226" target="_blank">#85226.</a></li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Re-active the command line option -O and -T in hadd</li>
		<li>Repair the merging of a single file in hadd (was not copying the TTree data.)</li>
		<li>Add missing dictionary for ROOT::ECompressionAlgorithm</li>
		<li>Fix a crash at the end of the process when a broken ROOT File (zombie) has been opened (fixes <a href="https://savannah.cern.ch/bugs/?84035" target="_blank">#84035</a>.)</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Import fix <a href="http://root.cern/viewvc?rev=40077&amp;root=root&amp;view=rev" target="_blank">#40077</a> to prevent the use of non-existent memory when reading in an object that is part of an STL collection and which used to contains an embedded object (and this data member has been removed)(bug <a href="https://savannah.cern.ch/bugs/?83793" target="_blank">#83793</a>).</li>
		<li>Lift ancien restriction (imposed by VC++6) preventing the proper use of unsigned long long by TTreeFormula.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import new version 0.9.6 of afdsmgrd (patch <a href="http://root.cern/viewvc?rev=40573&amp;root=root&amp;view=rev" target="_blank">#40573</a>) with improvements/fixes needed by ALICE.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40017&amp;root=root&amp;view=rev" target="_blank">#40017</a>&nbsp;making the query exit status available for monitoring and in the output list.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40068&amp;root=root&amp;view=rev" target="_blank">#40068</a>&nbsp;fixing an issue affecting GetSessionLogs in PROOF-Lite when invoked from the dialog box.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40138&amp;root=root&amp;view=rev" target="_blank">#40138</a>&nbsp;fixing "workers=n" in PROOF-Lite.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40170&amp;root=root&amp;view=rev" target="_blank">#40170</a>&nbsp;fixing an issue with directory assertion in xproofd.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40186&amp;root=root&amp;view=rev" target="_blank">#40186</a>&nbsp;fixing an issue preventing immediate cleaning of histograms after merging with TH1::Add (histogram were still destroyed at the end of the query). The patch adds also master memory usage in TStatus.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=40243&amp;root=root&amp;view=rev" target="_blank">#40243</a> and <a href="http://root.cern/viewvc?rev=40247&amp;root=root&amp;view=rev" target="_blank">#40247</a> &nbsp;fixing a possible segv when leaving proofbench.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40359&amp;root=root&amp;view=rev" target="_blank">#40359</a>&nbsp; fixing an issue showing up in PROOF-Lite when merging via files.</li>
	</ul>
	</li>
	<li>Rpdutils
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=40120&amp;root=root&amp;view=rev" target="_blank">#40120</a>&nbsp; fixing a compilation issue on OSX Lion.</li>
	</ul>
	</li>
	<li>Netx/Xrootd
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=40435&amp;root=root&amp;view=rev" target="_blank">#40435</a> and <a href="http://root.cern/viewvc?rev=40436&amp;root=root&amp;view=rev" target="_blank">#40436</a> &nbsp; to fix the issues preventing proper notification of XrdClient authentication errors.</li>
	</ul>
	</li>
	<li>RooFit
	<ul>
		<li>Issue NLL error in RooRealSumPdf::expectedEvents() if return value is negative</li>
		<li>Allow non-integer event counts in the extended likelihood term</li>
		<li>Make automatic class import in RooWorkspace work properly with binary ROOT releases</li>
		<li>In RooMinuit allocate MINUIT space for all initially constant parameters</li>
		<li>in RooMinuit add option to control maximum evaluation count for each MINUIT operation</li>
		<li>Streamline code in RooAbsArg to speed up import of complex pdfs in RooWorkspace</li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Apply a fix in HypoTestInverter to run a single point</li>
		<li>Fix the streaming of the HypoTestInverterResult which was resulting in some crashes</li>
		<li>Fix a bug in merging the HypoTestInverterResult objects &nbsp;</li>
		<li>Switch on the flag AlwaysReuseNLL for the Likelihood test statistics</li>
		<li>Fix a bug in FrequentistCalculator when computing the MLE for the nuisances when constant parameters are present.</li>
		<li>Fix bug <a href="https://savannah.cern.ch/bugs/index.php?84542" target="_blank">#84542</a> in HypoTestInverter</li>
		<li>Fix a bug in interpolating limits in HypoTestInverterResult happening when the last point was higher than next-to-last.</li>
		<li>Use the RooMinimizer when computing the profile likelihood test statistics &nbsp;</li>
	</ul>
	</li>
	<li>HistFactory
	<ul>
		<li>Global observables associated parameters that are set constant in the XML are removed. The Global observable name associated with a HistoSys was nom_XXX and is now nom_alpha_XXX, this could lead to problems in combinations in which one channel had only a HistoSys and another channel had an OverallSys associated to the same systematic name XXX.</li>
	</ul>
	</li>
	<li>TTreeViewer
	<ul>
		<li>Remove a call to TString::InitialCapacity, who was producing warning messages of the form:<br />
		Warning in &amp;ltTString::InitialCapacity&gt;: obsolete as of v5-30-00 and will be removed from v5-32-00.</li>
	</ul>
	</li>
	<li>MathCore
	<ul>
		<li>Apply fix for compiling on Fedora 16 i686 ( bug<a href="https://savannah.cern.ch/bugs/?84867" target="_blank"> #84867</a>)</li>
	</ul>
	</li>
</ul>

<h2>Changes in v5-30-00 (June 28, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Changes to CMake: improve detection of external packages (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39804" target="_blank">r39804</a>).</li>
		<li>Use Apple clang v3 by default when available (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39805" target="_blank">r39805</a>).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Add xz package, which builds liblzma as builtin, so it is always available.</li>
		<li>Extend valgrind suppression file.</li>
		<li>Fix memory leak in test/Event.</li>
		<li>Fix memory leak in the new TFile prefetcher.</li>
		<li>Add explicit fatal error message in TFileMerger and hadd when the size of the output file goes over the maximum limit (TTree::Set/GetMaxTreeSize). See <a href="https://savannah.cern.ch/bugs/index.php?83405" target="_blank">Savannah #83405</a></li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Properly recognize a TClonesArray data member even if the requested type was a typedef (to TClonesArray) that is in a namespace (for example edm::Event::ContainerType).(<a href="http://root.cern/viewcvs?view=rev&amp;revision=39786" target="_blank">39786</a>)</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>TextInput: improved treatment of read-ahead buffer (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39790" target="_blank">r39790</a>)</li>
		<li>TextInput: no unnecessary redraws (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39862" target="_blank">r39862</a>)</li>
		<li>TextInput: home / end key on debian (<a href="http://savannah.cern.ch/bugs/?83478" target="_blank">bug #83478</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39863" target="_blank">r39863</a>)</li>
		<li>TextInput: fix bug in clear-to-end-of-line visible on Windows ssh-ing to Linux (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39884" target="_blank">r39884</a>)</li>
		<li>TextInput: fix possible crash in paren-matching (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39910" target="_blank">r39910</a>)</li>
		<li>TextInput: fix infinite loop handling SIGABRT (e.g. .qqqqqqqq) (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39941" target="_blank">r39941</a>)</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import the stable version 3.0.4</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39835" target="_blank">r39835</a> fixing open issues with honoring the request for processing a fixed number of events and the correct handling of 'ForceLocal' requests when for local files; also fixes an issue with the handling of 'Stop' in PROOF-Lite.</li>
		<li>Fix coverity warnings in TProofServ and TProofNodes (patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39878" target="_blank">r39878</a>)</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39967" target="_blank">r39967</a> introducing the protocol "pod://" to automatically address the entry point of the available PoD installation, and protocol "lite://" for PROOF-Lite sessions (in the place of "lite"; behavior of "" unchanged).</li>
	</ul>
	</li>
	<li>TMVA
	<ul>
		<li>Fix stress test issue with ICC11 / 64bit.(<a href="http://root.cern/viewcvs?view=rev&amp;revision=39890" target="_blank">39890</a>)</li>
	</ul>
	</li>
</ul>

<h2>Changes in v5-30-00-rc2 (June 15, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Changes to CMake: TextInput, Windows dictionaries (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39554" target="_blank">r39554</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39582" target="_blank">r39582</a>).</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix error when linking statically on OSX.</li>
		<li>On non-Windows, root.exe is now killed when root is killed (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39540" target="_blank">r39540</a>).</li>
		<li>TextInput: improved history management (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39537" target="_blank">r39537</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39539" target="_blank">r39539</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39570" target="_blank">r39570</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39711" target="_blank">r39711</a>).</li>
		<li>TextInput: reset the terminal to a sane state after even more signals (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39538" target="_blank">r39538</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39541" target="_blank">r39541</a>)</li>
		<li>TextInput: on Windows, get dedicated handle to CONIN$, CONOUT$ to prevent redirection from stealing it (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39543" target="_blank">r39543</a>).</li>
		<li>TextInput: on Windows, redraw the prompt if ROOT moved the cursor (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39604" target="_blank">r39604</a>).</li>
		<li>TextInput: proper event loop for full line mode (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39560" target="_blank">r39560</a>).</li>
		<li>TextInput: continue reading if ESC was entered, fixes ESC-f etc (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39709" target="_blank">r39709</a>).</li>
		<li>TextInput: handle ROOT running in background (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39591" target="_blank">r39591</a>).</li>
		<li>TextInput: reset input modifier for each new input, e.g. "Ctrl is pressed"; make it unsigned (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39597" target="_blank">r39597</a>, <a href="http://root.cern/viewcvs?view=rev&amp;revision=39703" target="_blank">r39703</a>).</li>
		<li>On Windows, don't expand urls like root://user@any.where.com:1234//~user/...(<a href="http://root.cern/viewcvs?view=rev&amp;revision=39624" target="_blank">r39624</a>).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Allow to explicit veto or force the splitting of a class to insure that its custom streamer is always used ((<a href="http://root.cern/viewcvs?view=rev&amp;revision=39694" target="_blank">39694</a>) fixing <a href="https://savannah.cern.ch/bugs/index.php?83119" target="_blank">Savannah #83119</a></li>
		<li>Reduce memory footprint of the TFilePrefetch mechanism.</li>
		<li>Introduce TBuffer::AutoExpand</li>
		<li>Make the memcpy in TBuffer::Expand optional. Avoid this memcpy from TBasket::Reset.</li>
		<li>Improve error handling in MakeProject, (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39692" target="_blank">r39692</a>) fixing <a href="https://savannah.cern.ch/bugs/index.php?83188" target="_blank">Savannah #83188</a></li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Reduce the memory used by a TTree by sharing the scratch buffer used to hold the compressed data.</li>
		<li>Do no assume that there is a least one '.root' in the filename passed to TChain::Add.(<a href="http://root.cern/viewcvs?view=rev&amp;revision=39588" target="_blank">r39588</a>)</li>
		<li>Improve error recover in TTreeCloner in case of missing TTree or unwriteable file (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39720" target="_blank">39720</a>) fixing <a href="https://savannah.cern.ch/bugs/index.php?83140" target="_blank">Savannah #83140</a></li>
		<li>Make sure the TTreeCloner properly carry forward the value of the kDoNotUseBufferMap bit in the branch (Addendum to (<a href="http://root.cern/viewcvs?view=rev&amp;revision=38801" target="_blank">38801</a>)</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39579" target="_blank">r39579</a> avoid a segmentation fault when reading file where the AutoFlush mechanism has been disabled and the TTreeCache is requested nonetheless.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39580" target="_blank">r39580</a> fixing an issue with connections via a SSH tunnel.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=39585" target="_blank">r39585</a> fixing an issue preventing the correct handling of a 'Stop' request.</li>
	</ul>
	</li>
	<li>Graf3d
	<ul>
		<li>Generalize transition-point search in RhoZ projection, fixing a rare infinite loop in projections of TEveStraightLineSet class.</li>
		<li>Add GUI for auto-saving of images in the "Extras" tab of GL-viewer GUI.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Avoid possible buffer underrun for empty (e.g. '@'-cancelled) commands (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39705" target="_blank">r39705</a>).</li>
	</ul>
	</li>
	<li>THtml
	<ul>
		<li>Adapt to new (now standard) location of the headers of TMVA and the RooFit family (<a href="http://root.cern/viewcvs?view=rev&amp;revision=39713" target="_blank">r39713</a>).</li>
	</ul>
	</li>
</ul>
</div>

