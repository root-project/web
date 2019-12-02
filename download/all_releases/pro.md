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
<li> <a href="{{ release.url | relative_url }}"> Release {{ release.version}} - {{release.release_date}} </a></li>
{% assign version = release.version %}
{% endif %}
{% endfor %}
</ul>

### Release Notes

{% assign tag1 = version | truncate: 4, "" | replace: ".","" | prepend: "v"%}
{% assign tag2 = version | replace: "/","" | prepend: "release-" %}

The release notes for this release can be found [here](https://root.cern/doc/{{tag1}}/release-notes.html#{{tag2}}).
