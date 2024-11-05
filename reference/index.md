---
title: All Reference Guides
layout: single
sidebar:
  nav: "manual"
---

The Reference Guide is available for all major ROOT releases.
This page gives the list of all the past versions.

| ROOT Version           | HTML link                                                                  | Download links                        | Link to the Tag file                                 | Link to the QCH file                                 |
|------------------------|----------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------|------------------------------------------------------|
| HEAD of the git master | [browse](https://root.cern/doc/master/){:target="_blank"}                  |                                       | [tag file](https://root.cern/doc/master/ROOT.tag.gz) | [qch file](https://root.cern/doc/master/ROOT.qch.gz) |
| 6.34                   | [browse](https://root.cern/doc/v634/){:target="_blank"}                    | {% include download name="html634" %} | [tag file](https://root.cern/doc/v634/ROOT.tag.gz)   |
| 6.32                   | [browse](https://root.cern/doc/v632/){:target="_blank"}                    | {% include download name="html632" %} | [tag file](https://root.cern/doc/v632/ROOT.tag.gz)   |
| 6.30                   | [browse](https://root.cern/doc/v630/){:target="_blank"}                    | {% include download name="html630" %} | [tag file](https://root.cern/doc/v630/ROOT.tag.gz)   |
| 6.28                   | [browse](https://root.cern/doc/v628/){:target="_blank"}                    | {% include download name="html628" %} | [tag file](https://root.cern/doc/v628/ROOT.tag.gz)   |
| 6.26                   | [browse](https://root.cern/doc/v626/){:target="_blank"}                    | {% include download name="html626" %} | [tag file](https://root.cern/doc/v626/ROOT.tag.gz)   |
| 6.24                   | [browse](https://root.cern/doc/v624/){:target="_blank"}                    | {% include download name="html624" %} | [tag file](https://root.cern/doc/v624/ROOT.tag.gz)   |
| 6.22                   | [browse](https://root.cern/doc/v622/){:target="_blank"}                    | {% include download name="html622" %} | [tag file](https://root.cern/doc/v622/ROOT.tag.gz)   |
| 6.20                   | [browse](https://root.cern/doc/v620/){:target="_blank"}                    | {% include download name="html620" %} | [tag file](https://root.cern/doc/v620/ROOT.tag.gz)   |
| 6.18                   | [browse](https://root.cern/doc/v618/){:target="_blank"}                    | {% include download name="html618" %} | [tag file](https://root.cern/doc/v618/ROOT.tag.gz)   |
| 6.16                   | [browse](https://root.cern/doc/v616/){:target="_blank"}                    | {% include download name="html616" %} | [tag file](https://root.cern/doc/v616/ROOT.tag.gz)   |
| 6.14                   | [browse](https://root.cern/doc/v614/){:target="_blank"}                    | {% include download name="html614" %} | [tag file](https://root.cern/doc/v614/ROOT.tag.gz)   |
| 6.12                   | [browse](https://root.cern/doc/v612/){:target="_blank"}                    | {% include download name="html612" %} | [tag file](https://root.cern/doc/v612/ROOT.tag.gz)   |
| 6.10                   | [browse](https://root.cern/doc/v610/){:target="_blank"}                    | {% include download name="html610" %} | [tag file](https://root.cern/doc/v610/ROOT.tag.gz)   |
| 6.08                   | [browse](https://root.cern/doc/v608/){:target="_blank"}                    | {% include download name="html608" %} | [tag file](https://root.cern/doc/v608/ROOT.tag.gz)   |
| 6.06                   | [browse](https://root.cern/root/html606/){:target="_blank"}                | {% include download name="html606" %} | [tag file](https://root.cern/doc/v606/ROOT.tag.gz)   |
| 6.04                   | [browse](https://root.cern/root/html604/ClassIndex.html){:target="_blank"} | {% include download name="html604" %} |                                                      |
| 6.02                   | [browse](https://root.cern/root/html602/ClassIndex.html){:target="_blank"} | {% include download name="html602" %} |                                                      |
| 5.34                   | [browse](https://root.cern/root/html534/ClassIndex.html){:target="_blank"} | {% include download name="html534" %} |                                                      |
| 5.32                   | [browse](https://root.cern/root/html532/ClassIndex.html){:target="_blank"} | {% include download name="html532" %} |                                                      |
| 5.30                   | [browse](https://root.cern/root/html530/ClassIndex.html){:target="_blank"} | {% include download name="html530" %} |                                                      |
| 5.28                   | [browse](https://root.cern/root/html528/ClassIndex.html){:target="_blank"} | {% include download name="html528" %} |                                                      |
| 5.26                   | [browse](https://root.cern/root/html526/ClassIndex.html){:target="_blank"} | {% include download name="html526" %} |                                                      |
| 5.24                   | [browse](https://root.cern/root/html524/ClassIndex.html){:target="_blank"} | {% include download name="html524" %} |                                                      |

If your project documentation is done via Doxygen and it depends on ROOT, you may want to
link your project documentation to the ROOT reference guide. This can be done using ROOT
tag file (corresponding to your ROOT version) produced by
[Doxygen](https://www.doxygen.nl){:target="_blank"} available in the previous table.

The .qch column is a file that you can use with [qt-assistant](https://doc.qt.io/qt-5/qtassistant-index.html), or for embedded help functionality in the open-source IDE [QtCreator](https://www.qt.io/download-open-source){:target="_blank"}. For example, pressing F1 on top of a function will take you to its documentation on the [right sidebar](https://www.creatis.insa-lyon.fr/~grenier/?p=273){:target="_blank"}. Hovering the mouse on an object will show you a pop-up with its brief description. You can also consult the HTML reference guide without having to open a web browser or needing Internet access, just by clicking on the Help icon of the left sidebar. To enable these functionalities, go to Tools, Options, Help, Documentation, Add, Select the downloaded qch file (and do not delete it later). More detailed instructions are to be found on [this blog post](https://root.cern/blog/code-horsepower-f1/).
