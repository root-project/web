---
title: Old
layout: single
sidebar:
  nav: "download"
---

Releases with this term are Old.

{% include releases_list state="old" label="" single_column="yes" %}

### Release Notes

{% assign sorted = site.releases | reverse %}

{% for release in sorted %}
{% if release.state == "old" %}
{% assign version = release.version %}
{% endif %}
{% endfor %}

{% assign tag1 = version | truncate: 4, "" | replace: ".","" | prepend: "v"%}
{% assign tag2 = version | replace: "/","" | prepend: "release-" %}

The release notes for this release can be found [here](https://root.cern/doc/{{tag1}}/release-notes.html#{{tag2}}).
