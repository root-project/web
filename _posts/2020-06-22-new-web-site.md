---
title:  "New ROOT Web Site!"
layout: archive
author: Olivier Couet
---

If you are reading this blog post it means you are surfing on the New ROOT Web Site!

This new web site is a complete redesign, in terms of content as well as the 
technology behind it.

We are now using [Jekyll](https://jekyllrb.com) to generate static web pages.
Jekyll was created by Tom Preston-Werner, one of the GitHub's founder, it is distributed 
under the open-source MIT license. The main advantages are:

  - We can version-control our web pages; the workflow is very similar
    to that of ROOT's source, making it ideal for the ROOT team. For instance, ROOT users
    and developers can make Pull Requests on it as one would do for code. 
    It makes changes much easier!
  - The look and feel of the web site is "theme-based". We chose
    [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) with some
    [customizations](https://github.com/root-project/minimal-mistakes).
  - Because the generated site is static, it's much easier to embed ROOT-specific tools like
    [JSROOT output]({{'manual/graphics#drawing-objects' | relative_url }}) and therefore have interactive plots.

On the content side, we kept the all main items which made the past ROOT web site so successful,
such as "Forum & Help" or the "ROOT Reference Guide". 
The main new entries are:

   - [Manual]({{'manual' | relative_url }}): It provides detailed information about the use and 
     applications of ROOT. It contains many, often interactive examples, so that you can immediately
     start interacting with ROOT.
   - [Install]({{'install' | relative_url }}): an equivalent entry already existed in the previous site, but 
     this one has been completely redesigned in a more modern way to facilitate the ROOT installation 
     on all possible platforms. 

The ROOT team hopes you will enjoy the new ROOT web site! Do not hesitate to give
feedback on it either via the [forum](https://root-forum.cern.ch), by creating an 
[Issue](https://github.com/root-project/web/issues/new), or better yet by creating 
[Pull Requests](https://github.com/root-project/web/compare).