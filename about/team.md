---
layout: single
title: Team
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

{% for author in site.data.authors %}
{% if author[1].tag == "team" %}
#### {{ author[1].name }}
<img src="{{author[1].avatar | relative_url}}" width="30%" style="padding: 0 15px; float: left;">
{{author[1].bio}}
{% endif %}
{% endfor %}
