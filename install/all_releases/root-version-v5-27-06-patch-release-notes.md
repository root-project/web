---
title: ROOT Version v5-27-06 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<div class="content">
<p>This patch release is maintained on special request of ALICE for the 2010 HI run.</p>

<p>A new development version ROOT v5-27-06d has been released Feb 16, 2011.</p>

<p>The complete source tree for all systems (23.5 MB) is available here:</p>
<code><a href="ftp://root.cern/root/root_v5.27.06d.source.tar.gz" target="_blank">ftp://root.cern/root/root_v5.27.06d.source.tar.gz</a> </code>

<p>Alternatively get the source from <a href="/git-primer" target="_blank">Subversion</a> <span style="color:#B22222;">(broken)</span>using:</p>
<code> svn co <a href="http://root.cern/svn/root/tags/v5-27-06d" target="_blank" title="http://root.cern/svn/root/tags/v5-27-06d">http://root.cern/svn/root/tags/v5-27-06d</a> root </code>

<p>After obtaining the source read the file <a href="/node/103" target="_blank">README/INSTALL</a> (in short just do: cd root; ./configure; make).</p>

<p>To get the source of the head of the v5-27-06-patches branch do:</p>
<code> svn co <a href="http://root.cern/svn/root/branches/v5-27-06-patches" target="_blank" title="http://root.cern/svn/root/branches/v5-27-06-patches">http://root.cern/svn/root/branches/v5-27-06-patches</a> root </code>

<h2>Changes in the head of the v5-27-06-patches branch</h2>

<ul>
	<li>configure
	<ul>
		<li>Import patches to support smooth configuration on Ubuntu 11.04 or newer (automatic detection of the new location of the system libraries)</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Resolve <a href="https://savannah.cern.ch/bugs/index.php?89645" target="_blank">#89645</a> which could lead to segmentation fault when writing a sparse branch (in a large TTree) with a very long branch name.</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>In XrdSecProtocolkrb5, backport all fixes needed to avoid infinite 'kinit' attempts. Protection against the 'kerberos issue'. Imported from HEAD.</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patches <a href="http://root.cern/viewvc?rev=41393&amp;root=root&amp;view=rev" target="_blank">#41393</a> and <a href="http://root.cern/viewvc?rev=41399&amp;root=root&amp;view=rev" target="_blank">#41399</a> fixing possible issues with PATH and LD_LIBRARY_PATH settings for proofserv.</li>
		<li>Adapt patch <a href="http://root.cern/viewvc?rev=39078&amp;root=root&amp;view=rev" target="_blank">#39078</a> to bypass a compilation problem with gcc 4.5.2 on linux.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-27-06d (Feb 16, 2011)</h2>

<ul>
	<li>configure
	<ul>
		<li>Import patches to cope with the new versioning system of Xrootd</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=37976" target="_blank">#37976</a> fixing an issue with worker names in PROOF-Lite.</li>
		<li>Import patches improving debug options in packetizers</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Fix bug <a href="https://savannah.cern.ch/bugs/index.php?77751" target="_blank">#77751</a> in TProfileXD::GetStats which is affecting the global effective entries.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-27-06c (Feb 4, 2011)</h2>

<ul>
	<li>Proof
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36520" target="_blank">#36520</a> adding support for group manager and the {env,rootrc} settings on the fly reconfiguration; the patch also adds support for selective definition of env and rootrc variables, allowing for different values for different users, groups, SVN versions or ROOT versions.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36526" target="_blank">#36526</a> adding the possibility for the user to disable the use of submergers when set by default by the administrator (to disable set the parameter PROOF_UseMergers to -1).</li>
		<li>Import patches <a href="http://root.cern/viewcvs?view=rev&amp;revision=36537" target="_blank">#36537</a> and <a href="http://root.cern/viewcvs?view=rev&amp;revision=36592" target="_blank">#36592</a> improving diagnostics in case of segviolations or bad allocation and also fixing an issue with submergers freezing the session when was stopped because a large memory footprint.</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36540" target="_blank">#36540</a> to correctly set TProof::IsValid on the client is invalidated after an idle timeout.</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36553" target="_blank">#36553</a> fixing an issue with DeactivateWorker("*").</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36876" target="_blank">#36876</a> fixing an issue in TPacketizerFile</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36881" target="_blank">#36881</a> to consistently check both Proof.Sandbox and ProofLite.Sandbox for sandbox non-default location as done in TProofLite, and to add missing a protection on a pointer which could possibly be null after a search.</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36933" target="_blank">#36933</a> for better diagnostic for worker (de-)activation problems</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=37225" target="_blank">#37225</a> to remove an unused library dependency possibly creating problems when building against an external xrootd</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=37396" target="_blank">#37396</a> fixing a problem with the registration of missing files in the 'MissingFiles' list. This also adds two new methods to TProof: ShowMissingFiles() to facilitate the display of the list of missing files; and GetMissingFiles() to get a TFileCollection (dataset) with the missing files for further processing.</li>
		<li>Do TProof::ClearPackages via the manager (as done already for TProof::ClearPackage) so that all worker nodes are affected, even in the case of a reduced worker assignment (Alice savannah <a href="https://savannah.cern.ch/bugs/index.php?76265" target="_blank">#76265</a>).</li>
		<li>Fix issue in the packetizers determining the files and ranges to process when the first event and the number of events are within 1 unit of the boundary between files (Alice savannah <a href="https://savannah.cern.ch/bugs/index.php?75820" target="_blank">#75820</a>).</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=37664" target="_blank">#37664</a> fixing a crash when running vs servers not having the fix for the missing file (&lt;= 5.27/06b)</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36191" target="_blank">#36191</a> adding information about the directory for data in TSlaveInfo</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=37894" target="_blank">#37894</a> adding support for option ':lite:' to TProof::GetDataSets; this allows to fill the map with only the summary information about the datasets (the header of TFileCollections), significantly increasing the speed and the memory footprint when the number of datasets is very large. Should solve Savannah issue #77303</li>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=37934" target="_blank">#37934</a> in TDataSetManagerFile::NotifyUpdate, improving handling of the case when the file with the global list of datasets does not exist. Fixes an error occurring in new installations or with new dataset directories.</li>
		<li>Import change <a href="http://root.cern/viewcvs?view=rev&amp;revision=37942" target="_blank">#37942</a> in TProof::Load, adding support for multiple-file specification.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=37969" target="_blank">#37969</a> fixing a bug affecting the order in which query results are registered when two queries started within the same second.</li>
	</ul>
	</li>
	<li>TTree
	<ul>
		<li>Fix memory leak in TTree::OptimizeBasket.</li>
	</ul>
	</li>
	<li>Hist
	<ul>
		<li>Import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36552" target="_blank">#36552</a> fixing TH1::IntegralAndError()</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-27-06b (Nov 5, 2010)</h2>

<ul>
	<li>IO
	<ul>
		<li>In TStreamerInfo::BuildCheck, import missing protection (patch fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36461" target="_blank">#36461</a>).</li>
	</ul>
	</li>
	<li>Tree
	<ul>
		<li>Fix memory leak in TTree::OptimizeBasket.</li>
		<li>Backport of revs <strong>[Bad link]</strong> and <strong>[Bad link]</strong>: in TTree::AutoSave() when the option "saveself" is specified, one must also call TFile::WriteHeader().</li>
	</ul>
	</li>
	<li>Math
	<ul>
		<li>Work around a CINT parser issue (<a href="https://savannah.cern.ch/bugs/?74108" target="_blank">bug #74108</a>, r36395).</li>
	</ul>
	</li>
	<li>Proof
	<ul>
		<li>In TProofPlayerRemote::IsClient, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=36440" target="_blank">#36440</a> adding a missing protection to fix a crash in submerger mode when the output list contained TProofOutputFile objects.</li>
		<li>In TProof, import fix <a href="http://root.cern/viewcvs?view=rev&amp;revision=35965" target="_blank">#35965</a> to correctly update the number of submergers when workers die (it should fix an issue experienced by ALICE).</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36475" target="_blank">#36475</a> adding the possibility to control the resident and virtual memory of a proofserv using 'ulimit', which has less limitations and more flexibility than setrlimit.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36480" target="_blank">#36480</a> adding the possibility to deactivate a worker (i.e. remove it from the active list) during Collect in the case a failure status is received; this is used by EnablePackage to deactivate a worker where the requested packages could not be enabled properly.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36491" target="_blank">#36491</a> fixing an issue preventing correct worker-to-filenode matching and the 'ForceLocal' option to work properly.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36504" target="_blank">#36504</a> fixing an issue with submergers in the case a worker is removed during the query.</li>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36512" target="_blank">#36512</a> fixing an issue with the idle timeout (it was applied also during worker setup).</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36472" target="_blank">#36472</a> setting a more reasonable value for the default client transition time (8 hours instead of 5 mins). This should solve a sort of crisis affecting many xrootd sites with slow backends.</li>
	</ul>
	</li>
	<li>Netx
	<ul>
		<li>Import patch <a href="http://root.cern/viewcvs?view=rev&amp;revision=36474" target="_blank">#36474</a> makinng sure that the default value transition timeout is set correctly.</li>
	</ul>
	</li>
</ul>

<h2>Changes in version v5-27-06a (Oct 13, 2010)</h2>

<ul>
	<li>Tree
	<ul>
		<li>Since we consider the base class as part of the main object and split it with the same level of the derived part, do not change the splitlevel value when calling Unroll for base class .. this has the side effect of properly insuring the de-optimization of the base class streamer info and thus fixes the problem reported at <a href="https://savannah.cern.ch/bugs/?73467" target="_blank" title="https://savannah.cern.ch/bugs/?73467">https://savannah.cern.ch/bugs/?73467</a>.</li>
	</ul>
	</li>
	<li>TGeo
	<ul>
		<li>Revert revision <strong>[Bad link]</strong> causing problems in the ALICE geometery.</li>
	</ul>
	</li>
	<li>Xrootd
	<ul>
		<li>Import crucial fix in the XrdSecssl plugin.</li>
	</ul>
	</li>
	<li>CINT
	<ul>
		<li>Don't remove space between "unsigned int" (<a href="https://savannah.cern.ch/bugs/?73909" target="_blank">bug #73909</a>, r36330).</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>
</div>


