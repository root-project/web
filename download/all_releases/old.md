---
title: Old
layout: single
sidebar:
  nav: "download"
---

Older releases

{% assign sorted = site.releases | reverse %}

<ul style="list-style-type:none">
{% for release in sorted %}
{% if release.state == "old" %}
<li> <a href="{{ release.url | relative_url }}"> {{ release.title}} </a></li>
{% assign version = release.version %}
{% endif %}
{% endfor %}
</ul>

### Release Notes

{% assign tag1 = version | truncate: 4, "" | replace: ".","" | prepend: "v"%}
{% assign tag2 = version | replace: "/","" | prepend: "release-" %}

The release notes for this release can be found [here](https://root.cern/doc/{{tag1}}/release-notes.html#{{tag2}}).
