---
title: "Support for redefinitions in Cling, ROOT's C++ interpreter"
layout: archive
author: Javier Lopez Gomez
---

Back in ROOT 6.20, we introduced a big quality-of-life improvement for interpreted C++. Since then, the feedback we gathered convinced us that it's time for the world to know about declaration shadowing!

Prior to the 6.20 release, a user couldn't redefine a function, variable, or class whose definition was already provided for a particular interpreter session. If you have used ROOT for quite some time, it's almost sure that you have seen this already:

{% highlight C++ %}
root [0] int i;
root [1] double i = 1.0;
input_line_4:2:9: error: redefinition of 'i' with different type: 'double' vs 'int'
  double i = 1.0;
         ^
input_line_3:2:6: note: previous definition is here
  int i;
{% endhighlight %}

While this behavior is expected from a ISO-compliant C++ compiler, it doesn't seem convenient for interpreted C++ where users expect a behavior closer to a scripting language like Python. This issue was especially visible in Jupyter notebooks, where cells that provided a definition couldn't be edited and re-run without restarting the C++ kernel. We knew it was annoying and we fixed it in the 6.20 release.

## Do I have to do anything to enable this?
No. Support for redefinitions is automatically enabled for the ROOT prompt and Jupyter notebooks as of 6.20. Therefore, the following is now legal in a ROOT interpreter session:

{% highlight C++ %}
root [0] int i = 0
(int) 0
root [1] double i = 1.0
(double) 1.0000000
root [2] // Note that `i` can become a different thing, e.g. a function
root [3] double i(double x) { return x - 1; }
root [4] i(3.141592653)
(double) 2.1415927
{% endhighlight %}

However if you are using Cling standalone, this feature is considered optional and thus disabled at startup. In any case, you can manually turn it on/off as follows:

{% highlight C++ %}
gClingOpts->AllowRedefinition = 1; // or 0 to disable
{% endhighlight %}

## The gritty details
Formally, the ISO C++ one-definition-rule (ODR) forbids multiple definitions in order to ensure a consistent view of an entity across different translation units. The technique implemented in Cling does not, however, violate the ODR as each definition is internally enclosed in its own namespace. This ensures the uniqueness of the qualified (and mangled) name of each definition. The trick is completed by making the latest definition available in the global scope by fixing up the translation unit lookup table.

For more information, you can take a look at Cling [issue #259](https://github.com/root-project/cling/issues/259), where part of the brainstorm took place. Also, you can refer to our [conference paper](https://dl.acm.org/doi/abs/10.1145/3377555.3377901) published in the Proceedings of the 29th International Conference on Compiler Construction (CC 2020).

## Summary
This feature allows a user to redefine functions, variables, or classes declared within the same interpreter session. We hope that our users will enjoy this as much as we enjoyed implementing it.

Special thanks go to Chandler Carruth, Axel Huebl et al. for providing some initial ideas on which the final design was built, and to Axel Naumann and Vassil Vassilev for reviewing the implementation and the submitted paper.
