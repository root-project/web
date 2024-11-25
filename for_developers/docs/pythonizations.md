---
title: Documenting ROOT Pythonizations
layout: single
toc: no
toc_sticky: no
sidebar:
  nav: "for_developers"
---

Some ROOT classes have *pythonizations* that require additional documentation. These can be added as special boxes to the rendered Doxygen page of their corresponding C++ class. As an example, see the Python-specific [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python) docs. This documentation is written in the pythonization files corresponding to the original C++ class, which can be found in `<root_sources>/bindings/pyroot/pythonizations/python/ROOT/_pythonization`. Documentation is added as a module-level docstring, which should following the template below, replacing `{CLASS_NAME}` with the corresponding C++ class name, `{BLOCK_TITLE}` with the title of the documentation block (in most cases, "PyROOT" is used) and `{DOCUMENTATION_BODY}` with the documentation body, which supports the usual Doxygen tags and other formatting methods (see also the [documentation formatting tips](../useful_tips)).

```
r"""
/**
\class {CLASS_NAME}
\brief \parblock \endparblock
\htmlonly
<div class="pyrootbox">
\endhtmlonly
\anchor python

## {BLOCK_TITLE}

{DOCUMENTATION_BODY}

\htmlonly
</div>
\endhtmlonly
*/
"""
```

The `\anchor` tag adds a permalink to the PyROOT box on rendered documentation page, allowing for easy linking to the Python-specific documentation by appending `#python` to the URL of the doxygen page (i.e., [https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python](https://root.cern/doc/master/classROOT_1_1RDataFrame.html#python)).
