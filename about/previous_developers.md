---
layout: single
title: Previous Developers
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

The following people have been working on ROOT for some time in their career and ROOT
would not be what it is without their contributions:

{% for author in site.data.authors %}
{% if author[1].tag == "previous" %}
#### {{ author[1].name }}
<img src="{{author[1].avatar | relative_url}}" width="30%" style="padding: 0 15px; float: left;">
{{author[1].bio}}
{% endif %}
{% endfor %}
