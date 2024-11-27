---
title: Documenting ROOT Pythonizations
layout: single
toc: no
toc_sticky: no
sidebar:
  nav: "for_developers"
---

Some ROOT classes have *pythonizations* that require additional documentation. These can be added as special boxes to the rendered Doxygen page of their corresponding C++ class. As an example, see the Python-specific [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python) docs. This documentation is written in the pythonization files corresponding to the original C++ class, which can be found in `<root_sources>/bindings/pyroot/pythonizations/python/ROOT/_pythonization`.
Documentation is added as a module-level docstring, which should follow the template below. Replace `{CLASS_NAME}`  with the corresponding C++ class name and `{DOCUMENTATION_BODY}` with the documentation body. The documentation body supports standard Doxygen tags and other formatting methods (see also the [documentation formatting tips]({{'for_developers/docs/useful_tips' | relative_url}})).

```
r'''
\pythondoc {CLASS_NAME}
{DOCUMENTATION_BODY}
\endpythondoc
'''
```

The documentation added this way can be directly linked to by appending `#python` to the URL of the doxygen page (i.e., [https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python)).
