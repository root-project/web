---
title: ROOT Version v5-32-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<p>A new production version ROOT v5-32-04 has been released June 13, 2012.</p>

<p>The AFS version of v5-32-04 for many different platforms and compilers can be found at:</p>

<p><code>/afs/cern.ch/sw/lcg/app/releases/ROOT/5.32.04/ </code></p>

<p>The complete source tree for all systems (54 MB) is available here:</p>

<p><code><a href="ftp://root.cern/root/root_v5.32.04.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.32.04.source.tar.gz</a> </code></p>

<p>Alternatively get the source from <a href="/node/92" target="_blank">Git</a> using:</p>

<p><code>git clone http://root.cern/git/root.git root-v5-32 cd root-v5-32 git checkout -b v5-32-04 v5-32-04 </code></p>

<p>After obtaining the source read the file <a href="/node/103" target="_blank">README/INSTALL</a> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-32-00-patches branch do:</p>

<p><code>git clone -b v5-32-00-patches http://root.cern/git/root.git root-v5-32 </code></p>

<h2>Changes in head of v5-32-00-patches branch</h2>

<ul>
	<li>I/O
	<ul>
		<li>Corrected the calculation of the number of read calls in TRFIOFile (See the forum <a href="http://root.cern/phpBB3/viewtopic.php?f=3&amp;t=14673&amp;p=64367#p64367" target="_blank">post</a> on the subject. Fixed by revision 45140).</li>
		<li>Add protection against corrupted ROOT File (wrong length stored in the file header) (Revision 45170).</li>
		<li>Fix for recent versions of castor (Revision 48474).</li>
		<li>&nbsp;</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=45092&amp;root=root&amp;view=rev" target="_blank">#45092</a> and <a href="http://root.cern/viewvc?rev=45093&amp;root=root&amp;view=rev" target="_blank">#45093</a> adding functions to retrieve environment information from the nodes, typically from the master (datadir or some env settings).
		<p><b>Warning:</b> This change in binary incompatible.</p>
		</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Silence warnings on MacOS 10.7 with current XCode (r46000).</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-32-04 (June 13, 2012)</h2>

<ul>
	<li>Core
	<ul>
		<li>Avoid risk of executing the tear down routines twice at process termination when -q is used and there is no input file descriptor. (revision 44838).</li>
		<li>Fix linking of qtcint.dll when explicitly linking is required (see <a href="http://root.cern/phpBB3/viewtopic.php?t=14943" target="_blank">the related forum post</a>).</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>Fix in TWebFile reading using https (via TSSLSocket).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Avoid seg in I/O operation if you change the prefetch settings after the cache is created (revision 44755).</li>
		<li>Add an explicit 'Close' for the read cache so that we can insure that all the (concurrent) outstanding connection/use of the TFile are closed before closing the file.
		<p><strong>Warning: Binary incompatible change in TFileCacheRead.h</strong></p>
		</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>ReadFile() must stop at EOF (r44196, bug <a href="https://savannah.cern.ch/bugs/?94455" target="_blank">#94455</a>).</li>
		<li>Prevent negative consequences of call SetAutoFlush with a default value (44279, bug <a href="https://savannah.cern.ch/bugs/?94669" target="_blank">#94669</a>).</li>
		<li>Repair the plotting of string histogram by TTree::Draw</li>
		<li>Fixes issue in TChainIndex that made reading the first entry of the 2nd and subsequent files in the TChain not being properly reading when using the index. (Fixes Savannah <a href="http://savannah.cern.ch/bugs/?94910" target="_blank">#94910</a>).</li>
		<li>Avoid an unnecessary flushing of the TTreeCache after the first time it filled (revision 44750)</li>
	</ul>
	</li>
	<li><a>Proof </a>
	<ul>
		<li><a>Import patch </a><a href="http://root.cern/viewvc?rev=44397&amp;root=root&amp;view=rev" target="_blank">#44397</a> changing the default merging procedure used histograms to cover correctly all the cases.</li>
		<li><a>Import patch </a><a href="http://root.cern/viewvc?rev=44048&amp;root=root&amp;view=rev" target="_blank">#44048</a> removing the automatic creation of TDrawFeedback by TProofChain.</li>
		<li><a>Import patch </a><a href="http://root.cern/viewvc?rev=44701&amp;root=root&amp;view=rev" target="_blank">#44701</a> fixing several stability issues in xproofd. Patch is server side only; only the upgraded xproofd (or libXrdProofd) is equired.</li>
		<li><a>Import patch </a><a href="http://root.cern/viewvc?rev=42703&amp;root=root&amp;view=rev" target="_blank">#42703</a> removing unused variables in xproofd.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>genreflex: fix an issue with base classes defining operator new() (<a href="https://savannah.cern.ch/bugs/?94981" target="_blank">bug #94981</a>, r44426).</li>
	</ul>
	</li>
	<li>RooFit
	<ul>
		<li>Fix bug in binned generation of extended pdf (patch <a href="http://root.cern/viewvc?rev=44630&amp;root=root&amp;view=rev" target="_blank">#44630</a> )</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix bug in merging histograms and profile when first histogram to merge is empty (bug <a href="https://savannah.cern.ch/bugs/?95190" target="_blank">#95190</a> and <a href="https://savannah.cern.ch/bugs/?94295" target="_blank">#94295</a>)</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-32-03 (May 9, 2012)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Port to gcc 4.7 in both c++03 and c++11 mode.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix a (10 year) old issue with wrong MacOS X TZ reporting (which for OSX included the DST). Now we return purely the geographical TZ offset from UTC independent of DST (as for all other platforms).</li>
		<li>On MacOS X correctly return the physical memory in GetSysInfo().</li>
		<li>Enable AltGr on Windows (r44098, bug <a href="https://savannah.cern.ch/bugs/?94123" target="_blank">#94123</a><a>).</a></li>
	</ul>
	</li>
	<li><a>I/O </a>
	<ul>
		<li><a>In TFileMerger and hadd when objects can not be merged do <b>not</b> overwrite the last object in the set with the first (but rather, appending it to the output file like the others elements of the set). This fixes Savannah </a><a href="https://savannah.cern.ch/bugs/?93193" target="_blank">#93193</a></li>
		<li><a>In TSeqCollection::Merge (and hence in TFileMerger), do not append non-mergeable object but rather add a copy of the original. This fixes Savannah issue </a><a href="https://savannah.cern.ch/bugs/?93401" target="_blank">#93401</a>.</li>
		<li>In TFileMerger and hadd, re-enable the warning about non-mergeable objects.</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Fix circular TTree when its contains objects. This fixes Savannah issue <a href="https://savannah.cern.ch/bugs/?93282" target="_blank">#93282</a>.</li>
	</ul>
	</li>
	<li>TreeViewer
	<ul>
		<li>Fix a problem with array names (e.g. fVertex[]) as reported <a href="http://root.cern/phpBB3//viewtopic.php?f=3&amp;t=14507" target="_blank">on the forum</a>.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42921&amp;root=root&amp;view=rev" target="_blank">#42921</a> to add also to TXUnixSocket the possibility to disable reconnections via the variable TXSocket.Reconnect (0 disable reconnections; default is 1) .</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=42775&amp;root=root&amp;view=rev" target="_blank">#42775</a>, <a href="http://root.cern/viewvc?rev=42788&amp;root=root&amp;view=rev" target="_blank">#42788</a>, <a href="http://root.cern/viewvc?rev=42882&amp;root=root&amp;view=rev" target="_blank">#42882</a> and <a href="http://root.cern/viewvc?rev=42883&amp;root=root&amp;view=rev" target="_blank">#42883</a> enabling parallel dataset verification.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=43101&amp;root=root&amp;view=rev" target="_blank">#43101</a>, <a href="http://root.cern/viewvc?rev=43884&amp;root=root&amp;view=rev" target="_blank">#43884</a> and <a href="http://root.cern/viewvc?rev=43886&amp;root=root&amp;view=rev" target="_blank">#43886</a> adding in proofbench full support for dataset generation on external storage.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43567&amp;root=root&amp;view=rev" target="_blank">#43567</a> fixing a few issues with dataset verification of back-ends different from xrootd.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-32-02 (March 27, 2012)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Fix for building with external OpenSSL in non system location. Fixes issue <a href="https://savannah.cern.ch/bugs/index.php?92502" target="_blank">#92502</a>, r43338.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Avoid creating dictionary where TClass can not find the CINT dictionary for an STL collection (case of nested collection where the inner collection are requested with the explicit std::). This fixes the Savannah report <a href="https://savannah.cern.ch/bugs/index.php?92491" target="_blank">92491</a>.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix the merging (hadd and TFileMerger) of TTree in subdirectories when an incremental merge is requested (or needed). See the post <a bugs="" href="https://savannah.cern.ch/bugs/index.php?92486" savannah.cern.ch="">#92486</a>).</li>
		<li>In TChainIndex (and hence tree friendship involving chains), properly handle the case where the requested index is too high. (See Forum <a href="http://root.cern/phpBB3/viewtopic.php?p=61833" target="_blank">#61833)</a>.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43245&amp;root=root&amp;view=rev" target="_blank">#43245</a> fixing an issue with forcing local copies of files before merging (bit not always honored).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43295&amp;root=root&amp;view=rev" target="_blank">#43295</a> to remove dependencies of netx on xrootd-related internal headers (the patch also removes external support for xrootd versions older than 4 years)</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43107&amp;root=root&amp;view=rev" target="_blank">#43107</a> to add the possibility to force submerging at node level, i.e. one submerger per physical machine; in this way the network traffic can be minimized, for example when merging large output files.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43426&amp;root=root&amp;view=rev" target="_blank">#43426</a> fixing a problem with TProofOutputFile (more flexibility in the automatic definition of the env LOCALDATASERVER).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43440&amp;root=root&amp;view=rev" target="_blank">#43440</a> fixing an issue with the username used to access a remote file in the xproofd daemon. Fixes a problem when retrieving files from workers where the username is different, e.g. PoD on gLite.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43470&amp;root=root&amp;view=rev" target="_blank">#43470</a> fixing an backward compatibility issue affecting TProofBench::MakeDataSet.</li>
	</ul>
	</li>
	<li>QT
	<ul>
		<li>Repair generation of qtcint (see the forum post <a href="http://root.cern/phpBB3/viewtopic.php?t=13636" target="_blank">#13636</a>.</li>
	</ul>
	</li>
	<li>Histfactory
	<ul>
		<li>adjusts the ranges of the nuisance parameters for the statistical uncertainties and adds a simple method that is needed for the analytical Barlow-Beeston-lite-like optimization.</li>
		<li>fix a typo in the XML parsing for an option that has rarely been used.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-32-01 (February 29, 2012)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Various corrections to the cmake build system.</li>
		<li>Better Solaris 11.11 / CC 5.12 support (r42776, r42777).</li>
		<li>Make distribution roottest-able, add missing stress files (r42879, r42880).</li>
		<li>Do not remove essential files during make clean (bug <a href="https://savannah.cern.ch/bugs/index.php?90487" target="_blank">#90487</a>, r43131).</li>
	</ul>
	</li>
	<li>Cint
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42566&amp;root=root&amp;view=rev" target="_blank">#42566</a> fixing an issue preventing the generation on the dictionary for MathCore on some 32bits distributions This fixes <a href="https://savannah.cern.ch/bugs/?90906" target="_blank">#90906</a>.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42805&amp;root=root&amp;view=rev" target="_blank">#42805</a> fixing the problem <a href="https://savannah.cern.ch/bugs/index.php?83909" target="_blank">#83909</a> which leading to failure of the auto-dictionary generator when dealing with class template inside a namespace.</li>
		<li>Fix parsing of templated function names in Linkdefs (Savannah <a href="https://savannah.cern.ch/bugs/index.php?90486" target="_blank">#90486</a>, <a href="http://root.cern/viewvc?rev=42849&amp;root=root&amp;view=rev" target="_blank">r42849</a>).</li>
		<li>Fix G__ONELINE at 1024 even if configuring --with-cint-longline (<a href="https://savannah.cern.ch/bugs/index.php?90330" target="_blank">bug #90330</a>, r42584).</li>
		<li>Warn if selection.xml references a field that does not exist (<a href="https://savannah.cern.ch/bugs/index.php?90061" target="_blank">bug #90061</a>, r42899).</li>
		<li>Silence warning in Shadow.h on Windows (r42902).</li>
		<li>Fix the executing of <tt>TPad * pp = (TPad*)gPad</tt>, see the <a href="http://root.cern/phpBB3/viewtopic.php?t=14197" target="_blank">report on the forum.</a></li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42757&amp;root=root&amp;view=rev" target="_blank">#42757</a> fixing memory leak due to multiple allocations of gLibraryVersion.</li>
		<li>Add missing implementation for TGenericClassInfo::GetDirectoryAutoAdd.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Initialize the thread local gDirectory to gROOT rather than null (this is in particular useful to support TObject::Clone which needs a non-zero gDirectory)</li>
		<li>Resolve <a href="https://savannah.cern.ch/bugs/index.php?88174" target="_blank">#88174</a> which lead to failure in hadd and the TFileMerger (See patch <a href="http://root.cern/viewvc?rev=42802&amp;root=root&amp;view=rev" target="_blank">#42802</a>).</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Resolve <a href="https://savannah.cern.ch/bugs/index.php?89645" target="_blank">#89645</a> which could lead to segmentation fault when writing a sparse branch (in a large TTree) with a very long branch name.</li>
		<li>Make sure that in the tertiary operator implementation we always load the branch that are needed (even in the case cond ? y : -y where cond is false). This fixes <a href="https://savannah.cern.ch/bugs/?90826" target="_blank">#90826</a>.</li>
	</ul>
	</li>
	<li>Net
	<ul>
		<li>Fix in case of redirection in TWebFile (fixes issue <a href="https://savannah.cern.ch/bugs/index.php?91689" target="_blank">91689</a>).</li>
	</ul>
	</li>
	<li>RooFit
	<ul>
		<li>Extend string parsing buffer in RooWorkspace factory to 10k</li>
		<li>Allow explicit control over normalization of constraint terms through argument GlobalObservables() in RooAbsPdf::fitTo()</li>
		<li>In RooMultiVarGaussian Support analytical integration of parameters as well</li>
		<li>Faster parameter lookup inside RooMinuit</li>
		<li>Bug fix in RooAddPdf in handling of recursive fractions with non-extended pdfs</li>
		<li>Bug fix in RooAddPdf::expectedEvents() with fraction coefficients where transformation by range integral ratio is needed for expected yield</li>
		<li>Bug fix in RooHist::makePullHist (solves Savannah #89945)</li>
		<li>Bug fix in RooCurve::findPoint (solves Savannah #89949)</li>
		<li>Bug fix in RooDataHist::adjustBinning (solves Savannah #89947)</li>
		<li>Bug fix in error messaging in RooProdPdf (solves Savannah #89125)</li>
		<li>Bug fix in private copy ctor of RooDataHist (solves Savannah #85506)</li>
		<li>Documentation fix for RooAbsData (solves Savannah #84662)</li>
		<li>Add option house average instead of bin center for residual and pull histograms (patch #4948)</li>
		<li>Use createIntegral() inside RooAbsReal::createPlotProjection so that pdf projections with multiple ranges are supported</li>
		<li>Bug fix in RooAbsData::fillHistogram (solves Savannah #83858)</li>
		<li>Apply auto-conversion to vector-based data storage in legacy RooDataSet constructors that take TTrees as argument</li>
		<li>In RooAbsOptTestStatistic disable cache-and-track optimization if storage class is not RooVectorDataStore (as it is only supported by this class)</li>
		<li>Bug fix in RooRealMPFE -- pass applyWeightSquared flag to remote server - fixes problems with weighted likelihoods calculated with &gt;1 CPU (solves Savannah #84369)</li>
		<li>Bug fix in RooAbsTestStatistic, forward applyWeightSquared flag to all components (solves Savannah #88479)</li>
		<li>In RooTruthModel fix analytical integration ranges for 'expBasis' for non-standard ranges</li>
		<li>Bug fix in RooAbsHiddenReal - fix infinite loop cause by typo</li>
		<li>In RooAbsAnaConvPdf only evaluate convolutions that are prefixed by a non-zero coefficient</li>
		<li>Bug fix in RooEffProd normalization when explicit normalization range is used</li>
		<li>In RooVectorDataStore fix caching of conditional pdfs in level-2 cache mode</li>
		<li>In RooVectorDataStore restrict cache recalculation to active elements (restores normal performance scaling behavior for NCPU&gt;1)</li>
		<li>Fix bug in RooAbsAnaConv so that generation from convoluted pdfs also works after persistence (solves Savannah#90986)</li>
		<li>Fix bug in RooCachedReal so that passthrough debug mode is functional</li>
		<li>Fix uninitialized data member in RooCachedReal to fix unreproducible behavior when fitting with parameterized integral caching</li>
		<li>Bug fix in RooGaussModel in sinh and cosh convolution terms (solves Savannah #90845)</li>
		<li>Bug fix in expression of partial integral in RooSpHarmonic</li>
		<li>Reduce abundant info messages in operation of RooAbsCachedReal and RooCachedReal to debug stream</li>
		<li>Make size of RooAICRegistry payload scale dynamically to support complex fits</li>
		<li>Fix memory leak in RooAbsTestStatistic</li>
		<li>In RooEffGenContext use known maximum of efficiency function if advertised for more efficient operation</li>
		<li>Fix persistence problems in RooUnblind* classes (solves Savannah #91268)</li>
		<li>In RooProdPdf terminate calculation when value is &lt;= cutoff rather than <cutoff cutoff="" default="" for="" li="" of="" useful=""> </cutoff></li>
		<li>In RooAbsAnaConvPdf improve performance by caching range name strings in RooNameReg</li>
		<li>Make payload of RooCacheManager scale dynamically to improve performance of complex fits</li>
		<li>In RooHistPdf also fast-track integration over named ranges if these map to the full range definition</li>
		<li>In RooDataHist fix bug in partial bin volume corrections in partial integrals.</li>
		<li>Remove stray debug comment in RooAbsData</li>
		<li>Make RooDataSet::fillHistogram() also work correctly for weighted datasets</li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Use flag=2 for constant term optimization in the evaluation of the profile likelihood test statistic</li>
		<li>Fix a bug in running an automatic scan in the HypoTestInverter.</li>
		<li>Fix a bug in making the Asimov data set in the AsymptoticCalculator when using workspaces generated with the new HistFactory version (see this RootForum&nbsp;<a href="http://root.cern/phpBB3//viewtopic.php?f=15&amp;t=13863" target="_blank">post</a>).</li>
		<li>Add possibility to make an AsimovDataSet using &nbsp;nominal nuisance parameter values</li>
		<li>Add ProfileLikelihoodTestStat::SetOneSidedDiscovery() for q0 and added ::SetSigned() option to allow test statistic to probe fluctuations corresponding to p-values &gt;50%.</li>
		<li>Misc. fixes to SamplingDistPlot and HypoTestPlot</li>
	</ul>
	</li>
	<li>HistFactory
	<ul>
		<li>Fix a bug in ParamHistFunc constructor needed for bin-by-bin uncertainties (StatError Activate="True" and ShapeFactor) to work properly</li>
		<li>Change Poisson constraint terms to use "no rounding" flag, important for asymptotic calculations.</li>
		<li>Added InterpCode=4 to FlexibleInterpVar which avoids kink in likelihood near alpha=0 that cause problems for MINUIT.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Remove extra semicolon in THnSparse_internal.h (bug <a href="https://savannah.cern.ch/bugs/index.php?89917" target="_blank">#89917</a>, r42532)</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import in stressProof the patches introducing new tests, adding a return code consistent with standard test facilities and the option '-noprogress' to switch off the progress information which may create problems in wrapper applications intercepting the output (e.g. ctest). Patches imported: 42000,42142,42302,42303,42376,42386,42387,42393,42400,42416,42434,42451,42462 .</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42578&amp;root=root&amp;view=rev" target="_blank">#42578</a> fixing in getProof.C some issues mostly related to PROOF-Lite.</li>
		<li>Import class to analyse the performance tree (see <a href="http://root.cern/drupal/content/analysing-performance-tree" target="_blank">description</a> <span style="color:#B22222;">(broken)</span> )</li>
		<li>Adapt patch <a href="http://root.cern/viewvc?rev=42671&amp;root=root&amp;view=rev" target="_blank">#42671</a> fixing a problem with TProof::Load reported in the PROOF forum, caused by the fact that the additional files were not copied in the master sandbox but left in the cache.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42798&amp;root=root&amp;view=rev" target="_blank">#42798</a> in TDataSetManagerFile consolidating the way duplicates are removed.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42904&amp;root=root&amp;view=rev" target="_blank">#42904</a> in TProofOutputFile changing the default mode for merging histograms in TFileMerger, to reduce the memory footprint.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43074&amp;root=root&amp;view=rev" target="_blank">#43074</a> fixing the way errors are handled when uploading files (e.g. UploadPackage).</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=43157&amp;root=root&amp;view=rev" target="_blank">#43157</a> fixing a compilation issue with xrootd 3.0.2 .</li>
	</ul>
	</li>
	<li>Core / Textinput
	<ul>
		<li>Handle '{' on windows keyboards requiring Shift+AltGr+... (<a href="https://savannah.cern.ch/bugs/index.php?90192" target="_blank">bug #90192</a>, r42582, r42595).</li>
	</ul>
	</li>
	<li>Graf3D
	<ul>
		<li>Import rev 42084 from trunk: Fix crash on exit when stamped element map is not empty.</li>
	</ul>
	</li>
	<li>GUI
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42940&amp;root=root&amp;view=rev" target="_blank">#42940</a> fixing a problem with new style when using SetBackgroundPixmap() with flat buttons.</li>
	</ul>
	</li>
	<li>PyROOT
	<ul>
		<li>Patch for<a href="http://savannah.cern.ch/bugs/?91505" target="_blank"> #91505</a>: allow null-characters in strings passed through the binding.</li>
	</ul>
	</li>
</ul>

<h2>Changes in v5-32-00 (December 2, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Refine (aka fix) configuration of internal CINT array sizes (r42210, <a href="https://savannah.cern.ch/bugs/?88752" target="_blank">#88752</a>).</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import fix<a href="http:// http://root.cern/viewvc?rev=42155&amp;root=root&amp;view=rev" target="_blank"> #42155</a> from the trunk to fix for bug <a href="https://savannah.cern.ch/bugs/index.php?88561" target="_blank">#88561</a></li>
		<li>THnSparse: fix calculation of number of entries (r42190)</li>
		<li>Import r42237 to optimize the merging of histograms in case of equal axes.</li>
	</ul>
	</li>
	<li>Minuit2
	<ul>
		<li>Import fix <a href="http:// http://root.cern/viewvc?rev=42147&amp;root=root&amp;view=rev" target="_blank">#42147</a> in Minuit2Minimizer for fixing bug <a href="https://savannah.cern.ch/bugs/?89111" target="_blank">#89111</a> &nbsp;seen only on Windows</li>
	</ul>
	</li>
	<li>Roofit
	<ul>
		<li>Add binned integration support for RooStats</li>
	</ul>
	</li>
	<li>HistFactory
	<ul>
		<li>Add ParamHistFunc for bin by bin statistical errors for template shapes</li>
	</ul>
	</li>
	<li>Math
	<ul>
		<li>Fix warning "undefined order of evaluation" in KDTree (r42191).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Adapt patch <a href="http://root.cern/viewvc?rev=42142&amp;root=root&amp;view=rev" target="_blank">#42142</a> fixing the return code of stressProof.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42238&amp;root=root&amp;view=rev" target="_blank">#42238</a> fixing checks of controlling envs and parameters in TPerfStat.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=42248&amp;root=root&amp;view=rev" target="_blank">#42248</a> fixing name of the internal directory in the draw functions of TProofBench.</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Zero out unused slots in TClonesArray::ExpandCreateFast(), was causing stale TClonesArray elements across TTree entries (r42333).</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Fix issue in case of corrupted file with unreadable StreamerInfo record (<a href="https://savannah.cern.ch/bugs/?87896" target="_blank">#87896</a>).</li>
	</ul>
	</li>
</ul>

<h2>Changes in v5-32-00-rc2 (November 16, 2011)</h2>

<ul>
	<li>Build System
	<ul>
		<li>Port to IBM AIX 7.</li>
		<li>Port to Solaris 11.11.11.</li>
		<li>Fix for libMathCore being removed from root.exe by smart linkers like on Ubuntu 11.</li>
		<li>Fixing missing dependency on Windows cmake build.</li>
		<li>Enable configuration of internal CINT array sizes (r41942, <a href="https://savannah.cern.ch/bugs/?88752" target="_blank">#88752</a>).</li>
	</ul>
	</li>
	<li>Core
	<ul>
		<li>Fix the user of TThread static function before the creation of any TThread object.</li>
		<li>Make TSystem::StackTrace() work on Solaris and Ubuntu.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41771&amp;root=root&amp;view=rev" target="_blank">#41771</a> fixing an issue locating the xrootd authentication framework plugin in the PROOF client</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41772&amp;root=root&amp;view=rev" target="_blank">#41772</a> fixing an issue with the configuration of xrootd lib paths when xrootd libs are in system lib paths.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41785&amp;root=root&amp;view=rev" target="_blank">#41785</a> and <a href="http://root.cern/viewvc?rev=41786&amp;root=root&amp;view=rev" target="_blank">#41786</a> fixing an issue with packetizers preventing proper entry range processing and the file ordering in datasets.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41788&amp;root=root&amp;view=rev" target="_blank">#41788</a> fixing an issue with AddInputData when objects are TTree or derived.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41801&amp;root=root&amp;view=rev" target="_blank">#41801</a> fixing an issue in the packetizers potentially crashing PROOF-Lite at exit when using file-resident outputs.</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41869&amp;root=root&amp;view=rev" target="_blank">#41869</a> cleaning-up and simplifying the configuration of xrootd-related list of libraries.</li>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41958&amp;root=root&amp;view=rev" target="_blank">#41958</a> and <a href="http://root.cern/viewvc?rev=41999&amp;root=root&amp;view=rev" target="_blank">#41999</a> to improve checks, definition and cleaning of the working dir in tutorials/proof/getProof.C</li>
		<li>Import patch <a href="http://root.cern/viewvc?rev=41904&amp;root=root&amp;view=rev" target="_blank">#41904</a> extending TProofMgr::Ping functionality to 'xrootd' too. This is useful to test if an xrootd server is available at a given address.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import patch #42017 to fix a bug in SetContent with time display histograms&nbsp;</li>
		<li>TCanvas::SaveAs() in a .C produced invalid C++ code for histograms drawn with the option COLZ (patch #42107)</li>
	</ul>
	</li>
	<li>MathCore
	<ul>
		<li>Import patch #41834 to fix a bug in TMath::Quantiles</li>
		<li>Import patch #41984 for fixes in Fitter classes for weighted and extended likelihood fits</li>
	</ul>
	</li>
	<li>MathMore
	<ul>
		<li>Import patch #42011 for fixing pruning of warning messages in Interpolation classes</li>
	</ul>
	</li>
	<li>RooFit/RooFitCore
	<ul>
		<li>Import patch <a href="http://root.cern/viewvc?view=rev&amp;revision=41862" target="_blank">#41862</a>, #41871, #41899, #41976 to improve cache optimizations</li>
		<li>Patch #42089 (add new bin-integrator)</li>
		<li>Patch #42128 (various optimizations in pdf handling)</li>
		<li>Patch #42153 (further optimizations, expand bin-integrator to 2/3d, support for mixed binned/unbinned generation)</li>
	</ul>
	</li>
	<li>RooStats
	<ul>
		<li>Import patch #41799 to fix NLL evaluations in the AsymptoticCalculator</li>
		<li>Import patch #41810 to fix computation of expected limits in HypoTestInverterResult</li>
		<li>Import patch #41985 to fix for zero toys in HypoTest calculators</li>
		<li>Import patch #41887 to fix for reusing of NLL in SimpleLikelihoodRatioTestStat&nbsp;</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>
