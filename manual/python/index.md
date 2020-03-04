---
title: Python interface PyROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides an interface to Python, which is enabled via a set of bindings called PyROOT.<br>
PyROOT is enabled by default in ROOT.

For using PyROOT, a Python version > 2.2 is required.<br>
The top level Python module `ROOT.py` is located in `$ROOTSYS/lib`. The `ROOT.py` module imports the `libPyROOT.so` ROOT extension module and performs an initialization similar to ROOT.

> **Python**
>
> The usage of Python with ROOT requires working knowledge of Python. For detailed information on Python, refer to Python language references such as [Python Language Reference](https://docs.python.org/3/reference/){:target="_blank"}.

{% include tutorials name="PyROOT" url="pyroot" %}

## Running PyROOT from the Python interpreter

Ensure that the Python command is executed where the `libPyROOT.so` ROOT extension module is located. This is the main entry point for any Python script using the ROOT classes.

PyROOT scripts work as a usual Python scripts. You just need to import ROOT:

```
import ROOT
```

_**Example**_

```
from ROOT import TCanvas, TF1

c1 = TCanvas( 'c1', 'Example with Formula', 200, 10, 700, 500 )

# Create a one dimensional function and draw it.
fun1 = TF1( 'fun1', 'abs(sin(x)/x)', 0, 10 )
c1.SetGrid()
fun1.Draw()
```


## Running Python from the ROOT/Cling interpreter

In ROOT can run any Python command via the {% include ref class="TPython" %} class.

 _**Example**_

{% highlight C++ %}
root [0] TPython::Exec( "print 1 + 1" )
2
root [1] auto b = (TBrowser*)TPython::Eval( "ROOT.TBrowser()" )
(class TObject*)0x8d1daa0
root [2] TPython::Prompt()
>>> i = 2^D
root [3] TPython::Prompt()
>>> print i
2
{% endhighlight %}