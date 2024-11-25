---
title: Generating Doxygen documentation locally
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

Developers can generate the documentation locally to review the results of their changes
before committing them to the repository. The process is as follows:

{% highlight sh %}
$ cd <root_sources>/documentation/doxygen
$ source <root_sources>/bin/thisroot.sh
$ make
{% endhighlight %}

By default, the results are located at `${HOME}/rootdoc/html`. This process will generate
the full documentation, which may take several hours to complete! To minimize the generation
time and preview only the changes you’ve made locally, edit the script
`$ROOTSYS/documentation/doxygen/makeinput.sh` to limit the number of input files being scanned.
Typically, you should keep only the folder(s) containing the documentation you are
currently working on. To view the results of this local build, open the file
`{HOME}/rootdoc/html/index.html` in your preferred web browser.

## Compilation prerequisites on Ubuntu
- `apt install doxygen make jupyter-nbconvert`
- `pip install scandir nbformat metakernel ipykernel`
- Optional: `apt install qhelpgenerator-qt5`. In case of older Ubuntu versions, use `qt4-dev-tools`
instead, and modify in the `Doxyfile` `QHG_LOCATION` to
`/usr/lib/x86_64-linux-gnu/qt4/bin/qhelpgenerator`
