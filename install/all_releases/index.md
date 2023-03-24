---
title: Releases
layout: single-release
toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---

<table style="border: 0px ;"><tr>
<td style="border: 0px"><b><font size="5">{{ page.title }}</font></b></td>
<td style="border: 0px"><a href="{{ 'feed/releases.xml' | relative_url }}"><img style="width:auto; height:2.0em;" src="{{'/assets/images/feed.svg' | relative_url}}"></a></td>
</tr></table>
<br>
{% include releases_list state="latest" label="LATEST STABLE" single_column="yes" %}

### Version 6

{% include releases_list version="6" %}

### Version 5

{% include releases_list version="5" %}

### Version 4

{% include releases_list version="4" %}

### Version 3

{% include releases_list version="3" %}

<hr>

Release notes can be found on the respective release page.

Release notes for old releases can be found [here]({{ '/install/all_releases/old_release_notes' | relative_url }}).

All releases files can be download from [here](https://root.cern/download/).
