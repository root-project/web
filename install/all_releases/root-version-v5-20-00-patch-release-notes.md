---
title: ROOT Version v5-20-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>To get the source of the head of the v5-20-00-patches branch do:</p>
<code>svn co <a href="http://root.cern/svn/root/branches/v5-20-00-patches" title="http://root.cern/svn/root/branches/v5-20-00-patches">http://root.cern/svn/root/branches/v5-20-00-patches</a> root </code>

<p>After obtaining the source read the file <a href="/get-root-sources" target="_blank">README/INSTALL</a> <span style="color:#B22222;">(broken)</span> (in short just do: cd root; ./configure; make).</p>

<h2>Changes in the head of the v5-20-00-patches branch</h2>

<ul>
	<li>Base
	<ul>
		<li>In GetOptions() fix parsing of script names with + somewhere in path.</li>
	</ul>
	</li>
	<li>I/O
	<ul>
		<li>Prevent a potential infinite loop when reading the StreamerInfos.</li>
	</ul>
	</li>
	<li>ACLiC
	<ul>
		<li>Repair ACLiC when the --prefix configure option is used (it could not find rootcint)</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TTree
	<ul>
		<li>Insure that the in-memory tree (not attached to a file) are saved as expected by revision 24454 (i.e. each basket saved separately) and prevent the printing of the misleading error message: Error in &lt;TBasket::Create&gt;: Cannot create key without file</li>
		<li>Improve the way branches are matched for a Fast Merge. Now support the case where one of the branches in the output tree in not present. Also supports the case where branches are not the same order.</li>
		<li>Fix memory leak in TChainIndex</li>
		<li>Several fixes to properly support "flushing the write basket before streaming the branch"</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Repaired TTreeSQL
	<ul>
		<li>The existing code was not compatible with the change made in TTree to reduce the number of baskets in memory.</li>
	</ul>
	</li>
</ul>

<ul>
	<li>TF1
	<ul>
		<li>Fixed a bug affecting the integral calculation of multi-dimensional interpreted functions</li>
	</ul>
	</li>
</ul>

<ul>
	<li>Meta/IO
	<ul>
		<li>Fix reading of very long class names from a ROOT file.</li>
	</ul>
	</li>
</ul>
</div>
