---
title: Pro
layout: single
sidebar:
  nav: "download"
---

Releases with this term are in Production.

{% assign sorted = site.releases | reverse %}

<ul style="list-style-type:none">
{% for release in sorted %}
{% if release.state == "pro" %}
<li> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% endif %}
{% endfor %}
</ul>

### Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v618/release-notes.html#release-6.1804).
