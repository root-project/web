---
title: All Reference Guides
layout: single
sidebar:
  nav: "manual"
---

The Reference Guide is available for all major ROOT releases.
This page gives the list of all the past versions.

{% assign d = 'https://root.cern/doc/' %}
{% assign r = 'https://root.cern/root/' %}
{% assign g = 'https://root.cern/download/' %}

| ROOT Version           | HTML link                                                | Download links                                                    | Link to the Tag file                | Link to the QCH file                |
|------------------------|----------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------|-------------------------------------|
| HEAD of the git master | [browse]({{d}}master/){:target="_blank"}                 | [htmlmaster.tar.gz](https://root.cern/download/htmlmaster.tar.gz) | [tag file]({{d}}master/ROOT.tag.gz) | [qch file]({{d}}master/ROOT.qch.gz) |
| 6.36                   | [browse]({{d}}v636/){:target="_blank"}                   | [htmlv6-36-00-patches.tar.gz]({{g}}htmlv6-36-00-patches.tar.gz)   | [tag file]({{d}}v636/ROOT.tag.gz)   |                                     |
| 6.34                   | [browse]({{d}}v634/){:target="_blank"}                   | [htmlv6-34-00-patches.tar.gz]({{g}}htmlv6-34-00-patches.tar.gz)   | [tag file]({{d}}v634/ROOT.tag.gz)   |                                     |
| 6.32                   | [browse]({{d}}v632/){:target="_blank"}                   | [htmlv6-32-00-patches.tar.gz]({{g}}htmlv6-32-00-patches.tar.gz)   | [tag file]({{d}}v632/ROOT.tag.gz)   |                                     |
| 6.30                   | [browse]({{d}}v630/){:target="_blank"}                   | {% include download name="html630" %}                             | [tag file]({{d}}v630/ROOT.tag.gz)   |                                     |
| 6.28                   | [browse]({{d}}v628/){:target="_blank"}                   | {% include download name="html628" %}                             | [tag file]({{d}}v628/ROOT.tag.gz)   |                                     |
| 6.26                   | [browse]({{d}}v626/){:target="_blank"}                   | {% include download name="html626" %}                             | [tag file]({{d}}v626/ROOT.tag.gz)   |                                     |
| 6.24                   | [browse]({{d}}v624/){:target="_blank"}                   | {% include download name="html624" %}                             |                                     |                                     |
| 6.22                   | [browse]({{d}}v622/){:target="_blank"}                   | {% include download name="html622" %}                             |                                     |                                     |
| 6.20                   | [browse]({{d}}v620/){:target="_blank"}                   | {% include download name="html620" %}                             |                                     |                                     |
| 6.18                   | [browse]({{d}}v618/){:target="_blank"}                   | {% include download name="html618" %}                             |                                     |                                     |
| 6.16                   | [browse]({{d}}v616/){:target="_blank"}                   | {% include download name="html616" %}                             |                                     |                                     |
| 6.14                   | [browse]({{d}}v614/){:target="_blank"}                   | {% include download name="html614" %}                             |                                     |                                     |
| 6.12                   | [browse]({{d}}v612/){:target="_blank"}                   | {% include download name="html612" %}                             |                                     |                                     |
| 6.10                   | [browse]({{d}}v610/){:target="_blank"}                   | {% include download name="html610" %}                             |                                     |                                     |
| 6.08                   | [browse]({{d}}v608/){:target="_blank"}                   | {% include download name="html608" %}                             |                                     |                                     |
| 6.06                   | [browse]({{r}}html606/){:target="_blank"}                | {% include download name="html606" %}                             |                                     |                                     |
| 6.04                   | [browse]({{r}}html604/ClassIndex.html){:target="_blank"} | {% include download name="html604" %}                             |                                     |                                     |
| 6.02                   | [browse]({{r}}html602/ClassIndex.html){:target="_blank"} | {% include download name="html602" %}                             |                                     |                                     |
| 5.34                   | [browse]({{r}}html534/ClassIndex.html){:target="_blank"} | {% include download name="html534" %}                             |                                     |                                     |
| 5.32                   |                                                          | {% include download name="html532" %}                             |                                     |                                     |
| 5.30                   |                                                          | {% include download name="html530" %}                             |                                     |                                     |
| 5.28                   |                                                          | {% include download name="html528" %}                             |                                     |                                     |
| 5.26                   |                                                          | {% include download name="html526" %}                             |                                     |                                     |
| 5.24                   |                                                          | {% include download name="html524" %}                             |                                     |                                     |

If your project documentation is done via Doxygen and it depends on ROOT, you may want to
link your project documentation to the ROOT reference guide. This can be done using ROOT
tag file (corresponding to your ROOT version) produced by
[Doxygen](https://www.doxygen.nl){:target="_blank"} available in the previous table.

The .qch column is a file that you can use with [qt-assistant](https://doc.qt.io/qt-5/qtassistant-index.html), or for embedded help functionality in the open-source IDE [QtCreator](https://www.qt.io/download-open-source){:target="_blank"}. For example, pressing F1 on top of a function will take you to its documentation on the [right sidebar](https://www.creatis.insa-lyon.fr/~grenier/?p=273){:target="_blank"}. Hovering the mouse on an object will show you a pop-up with its brief description. You can also consult the HTML reference guide without having to open a web browser or needing Internet access, just by clicking on the Help icon of the left sidebar. To enable these functionalities, go to Tools, Options, Help, Documentation, Add, Select the downloaded qch file (and do not delete it later). More detailed instructions are to be found on [this blog post](https://root.cern/blog/code-horsepower-f1/).

