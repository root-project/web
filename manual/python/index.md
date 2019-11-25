---
title: Python interface
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides an interface to Python, which is enabled via a set of bindings called PyROOT.<br>
PyROOT is enabled by default in ROOT.

For using PyROOT a Python version > 2.2 is required.<br>
The top level Python module `ROOT.py` is located in $ROOTSYS/lib. The ROOT.py module imports the `libPyROOT.so` ROOT extension module and performs an initialization similar to ROOT.


> **Tutorials**
>
> PyROOT tutorials are available at → [https://root.cern/doc/master/group__tutorial__pyroot.html](https://root.cern/doc/master/group__tutorial__pyroot.html)

## Running PyROOT from Python interpreter

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



## Running Python from ROOT/Cling interpreter

In ROOT can run any Python command via the [TPython](https://root.cern/doc/master/classTPython.html) class.
 
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