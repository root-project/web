---
title: Pro
layout: single
sidebar:
  nav: "releases"
---

Releases with this term are in Production.

{% include releases_list state="pro" label="" single_column="yes" %}

### Release Notes

{% assign sorted = site.releases | reverse %}

{% for release in sorted %}
{% if release.state == "pro" %}
{% assign version = release.version %}
{% endif %}
{% endfor %}

{% assign tag1 = version | truncate: 4, "" | replace: ".","" | prepend: "v"%}
{% assign tag2 = version | replace: "/","" | prepend: "release-" %}

The release notes for this release can be found [here](https://root.cern/doc/{{tag1}}/release-notes.html#{{tag2}}).
