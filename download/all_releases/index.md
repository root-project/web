---
title: Releases
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

  - **PRO** [Release 6.18/04 - 2019-09-11]({{ '/download/all_releases/release-61804' | relative_url }})
  - **OLD** [Release 6.16/00 - 2019-01-23]({{ '/download/all_releases/release-61600' | relative_url }})

{% assign sorted = site.releases | reverse %}

### Version 6

<ul>
{% for release in sorted %}
{% assign v = release.version | slice: 0 %}
{% if  v == '6' %}
<li> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
{% endfor %}
</ul>

### Version 5

<ul>
{% for release in sorted %}
{% assign v = release.version | slice: 0 %}
{% if  v == '5' %}
<li> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
{% endfor %}
</ul>

Release notes can be found on the respective release page; release notes for old releases
can be found [here]({{ '/download/all_releases/old_release_notes' | relative_url }}).

All releases files can be download from [here](https://root.cern.ch/download/).