---
title: Collaborate With Us
layout: single
sidebar:
  nav: "contribute"
toc: true
toc_sticky: true
---

We warmly welcome external contributions to the ROOT! By providing code, you agree to
transfer your copyright on the code to the "ROOT project". Of course you will be duly
credited and your name will appear on the
[contributors]({{'/contribute/contributors' | relative_url}}) page and in the
[CREDITS](https://raw.githubusercontent.com/root-mirror/root/master/README/CREDITS){:target="_blank"}
file shipped with every binary and source distribution. The copyright transfer is necessary
for us to be able to effectively defend the project in case of litigation.

Presently, there are two ways in which you can contribute:

1. **Via the Users' contribution section in the Forum** <br>
   The Users' Forum has a [section](https://root-forum.cern.ch/c/my-root-app-and-ideas){:target="_blank"}
   which describes how to submit contributions. It is the
   easiest way to make your code known to the community, even if it will not be
   automatically integrated in ROOT. Of course the most successful contributions will
   become part of the repository!

2. **Sending Patches** <br>
   You can send us a patch or a pull request with [Github](https://github.com/root-project/root){:target="_blank"}, provided that you follow these
   two simple rules:

    - Make sure you follow the [ROOT coding conventions]({{'/contribute/coding_conventions' | relative_url }}) in your code
    - Make sure you provide a set of tests for your feature/bug fix

Often it is useful to [contact us](https://root-forum.cern.ch){:target="_blank"} first to
discuss the code you want to develop or the bug you want to fix.

## Picking up an Idea
We maintain a set of "ideas" for talented scientists and developers to pick up. An "idea" is a sketch of a development project, a functionality a missing feature we would like to see in our tool, in your ROOT! You can inspect the ideas in the following list.

{% assign sorted = site.ideas | reverse %}

### Ideas

<ul>
{% for idea in sorted %}
{% if idea.state != "completed" %}
<li> {{idea.date | date_to_string }} <a href="{{ idea.url | relative_url }}"> {{ idea.title}} </a><br>
{{idea.summary}}
</li>
{% endif %}
{% endfor %}
</ul>

### Completed ideas

<ul>
{% for idea in sorted %}
{% if idea.state == "completed" %}
<li> {{idea.date | date_to_string }} <a href="{{ idea.url | relative_url }}"> {{ idea.title}} </a><br>
{{idea.summary}}
</li>
{% endif %}
{% endfor %}
</ul>
