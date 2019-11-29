---
title: Releases
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "download"
---

{% assign sorted = site.releases | reverse %}

<ul>
{% for release in sorted %}
{% if release.state == "pro" %}
<li> <b>PRO</b> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
{% if release.state == "old" %}
<li> <b>OLD</b> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
{% endfor %}
</ul>

### Version 6

<ul>
{% for release in sorted %}
{% assign v = release.version | slice: 0 %}
{% if release.state != "pro" and release.state != "old" %}
{% if  v == '6' %}
<li> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
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