---
title: ROOT Version v5-10-00 Patch Release Notes
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


<div class="content">
<p>Binaries are currently not available for patch releases.</p>

<p>To get the source of the head of the v5-10-00-patches branch do:</p>
<code>svn co <a href="http://root.cern.ch/svn/root/branches/v5-10-00-patches" title="http://root.cern.ch/svn/root/branches/v5-10-00-patches">http://root.cern.ch/svn/root/branches/v5-10-00-patches</a> root </code>

<p>After obtaining the source read the file <a href="/get-root-sources">README/INSTALL</a>&nbsp; <span style="color:#B22222;">(broken)</span>.</p>

<h2>Changes in the head of the v5-10-00-patches branch</h2>

<ul>
	<li>TTree:
	<ul>
		<li>Fix memory leak which happens when the content of the basket does not compress well (aka it should be rare).</li>
	</ul>
	</li>
</ul>
</div>
