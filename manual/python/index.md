---
title: "Python interface: PyROOT"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT can be used from Python thanks to its Python-C++ bindings, called **PyROOT**. PyROOT is HEP's entrance to all C++ from Python, e.g. for frameworks and their steering code. The PyROOT bindings are *automatic* and *dynamic*: no pre-generation of Python wrappers is necessary.

With PyROOT, all the ROOT functionality can be accessed from Python while, at the same time, benefiting from the performance of the ROOT C++ libraries.

PyROOT is compatible with both Python2 (>= 2.7) and Python3.

> Using PyROOT requires working knowledge of Python. Detailed information about the Python language can be found in the [Python Language Reference](https://docs.python.org/3/reference/){:target="_blank"}.

Together with ROOT 6.22, a major revision of PyROOT has been released. This **new PyROOT** has extensive support for *modern C++* (it operates on top of [cppyy](https://cppyy.readthedocs.io/)), is more *pythonic* and is able to *interoperate* with widely-used Python data-science libraries (e.g. [NumPy](https://numpy.org/), [pandas](https://pandas.pydata.org/), [Numba](https://numba.pydata.org/)). Therefore, we strongly recommend to move to the new PyROOT!

## Building and installing
PyROOT is enabled by default when building and installing ROOT. Please refer to [Building ROOT from source]({{ '/install/build_from_source' | relative_url }}) for specific information on how PyROOT can be built, and to [Installing ROOT]({{ '/install' | relative_url }}) to learn about the ways to install ROOT.

## Getting started

Once ROOT has been installed, PyROOT can be used both from the Python prompt and from a Python script. The entry point to PyROOT is the `ROOT` module, which needs to be imported first: 

```python
import ROOT
```

After that, all the ROOT C++ functionality (classes, functions, etc.) can be accessed via the `ROOT` module. In the example below, we show how to create a histogram (an instance of the `TH1F` class) and randomly fill it with a gaussian distribution.

```python
h = ROOT.TH1F("myHist", "myTitle", 64, -4, 4)
h.FillRandom("gaus")
```

### Tutorials

There are a number of tutorials that show how to use the various ROOT features from Python. They can be found in the link below. 

{% include tutorials name="PyROOT" url="pyroot" %}

## Interactive graphics

Just like from C++, it is also possible to create interactive ROOT graphics from Python thanks to PyROOT. As an example, let's consider the following code, which creates a one-dimensional function and draws it:

```python
>>> import ROOT
>>> f = ROOT.TF1("f1", "sin(x)/x", 0., 10.)
>>> f.Draw()
```

As a result of running the code above from the Python prompt, a new canvas will open up to show the drawn function:

{% include figure_image
img="tf1_draw.png"
caption="Example of graphics generated with PyROOT."
%}

> **Note that** the code above can also be written in a script file and executed with Python. In that case, the script will run to completion and the Python process will terminate, making the created canvas disappear. If you want to keep the Python process alive and thus be able to inspect your canvas, run the script with `python -i script_name.py`.

## User interface

Besides being the entry point to all ROOT functionality, the `ROOT` Python module also offers an interface to configure PyROOT and to manipulate PyROOT objects at a lower level. The next subsections describe in more detail the characteristics of the PyROOT user interface.

### Configuration options

After importing the ROOT module, one can access the PyROOT configuration object as `ROOT.PyConfig`. Such object has a set of properties that can be modified to steer the behaviour of PyROOT. For the configuration to be taken into account, it needs to be applied right after `ROOT` is imported. For example:

```python
import ROOT
ROOT.PyConfig.OptionName1 = SomeValue1
ROOT.PyConfig.OptionName2 = SomeValue2
```

The available configuration options are described next:

- `DisableRootLogon` (default `False`): just like it happens in C++, PyROOT also supports the [rootlogon](https://root.cern/doc/master/rootlogon_8C.html) functionality. When PyROOT starts, it will look for a file called `.rootlogon.py` in the user's home directory and, if such file exists, PyROOT will import it. This can be used to make some settings every time PyROOT is launched, for example defining some style for your plots:

```python
# Content of .rootlogon.py
import ROOT
myStyle = ROOT.TStyle('MyStyle','My graphics style')
myStyle.SetCanvasColor(ROOT.kBlue) # My canvases will have blue color!
ROOT.gROOT.SetStyle('MyStyle')
```

If PyROOT cannot find `.rootlogon.py` in the user's home directory, it will look for the equivalent in C++ (`.rootlogon.C`), first in [ROOT's etc directory](https://root.cern/doc/master/classTROOT.html#ab8e51627a12d886d6c8177b46481352a), then in the user's home directory and finally in the current working directory. Note that it is also possible to use both the Python and the C++ rootlogons, since the latter can be loaded from the former, for instance with `ROOT.gROOT.LoadMacro('.rootlogon.C')`.

If the user would like to completely disable the rootlogon functionality, they can do so by setting `PyConfig.DisableRootLogon` to `True`. 

- `IgnoreCommandLineOptions` (default `True`): if a PyROOT script is executed with some command line arguments, they will be ignored by default by ROOT, so the user is free to process them as they wish. However, by setting `PyConfig.IgnoreCommandLineOptions` to `False`, those arguments will be forwarded to ROOT for parsing, e.g. to enable the batch mode from the command line. A complete list of the arguments accepted by ROOT can be found [here]({{ '/manual/first_steps_with_root/#starting-root-with-command-line-options' | relative_url }}).

- `ShutDown` (default `True`): when PyROOT is terminating, during its cleanup phase, the ROOT C++ interpreter is shut down. If PyROOT is executed as part of a longer-running application that needs the C++ interpreter, `PyConfig.Shutdown` can be set to `False` to prevent that shutdown.

- `StartGUIThread` (default `True`): when not executing in [interactive mode](https://docs.python.org/3/tutorial/interpreter.html#interactive-mode), PyROOT starts a thread that periodically polls for ROOT events (e.g. GUI events) to process them. If a given PyROOT application does not need this event processing, it can prevent the creation of the thread by setting `PyConfig.StartGUIThread` to `False`.

### Enabling batch mode

When running in batch mode, PyROOT will not display any graphics. There are two ways in which a user can activate the batch mode:

1. Passing `-b` as a command line argument, e.g. `python -b my_pyroot_script.py`. For this to work, `PyConfig.IgnoreCommandLineOptions` must be set to `False` inside the PyROOT script, as discussed [here]({{ '/manual/python/#configuration-options' | relative_url }}).

2. Calling `gROOT.SetBatch` in the PyROOT script, right after importing `ROOT`:

```python
import ROOT
ROOT.gROOT.SetBatch(True)
```

### Low-level manipulation of objects

When instantiating a C++ class from Python via PyROOT, both a C++ object and its Python proxy object are created. Such Python object forwards any access to its internal C++ object, thus acting as a proxy. PyROOT offers some functions to inspect or manipulate Python proxies and their C++ counterparts, based on functionality provided by [cppyy](https://cppyy.readthedocs.io/en/latest/lowlevel.html). All these functions can be accessed as `ROOT.NameOfFunction` and they are listed next:

- `AddressOf(obj)`: when applied to a Proxy object `obj`, it returns an indexable buffer of length 1, whose only element is the address of the C++ object proxied by `obj`. The address of the buffer is the same as the address of the address of the C++ object. This function is kept for backwards compatibility with old PyROOT versions.

- `addressof(obj, field, byref)`: similarly to `AddressOf`, it can be used to obtain the address of an internal C++ object from its Python proxy. However, `addressof` returns that address as an integer, not as an indexable buffer. Furthermore, `addressof` accepts two more parameters: `field` and `byref`. `field` can be used to specify the name of a field in a struct, in order to get the address of that field. If `byref` is set to true, `addressof` returns the address of the address of the C++ object. Equivalent to [cppyy's `addressof`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#capsules). Example of usage:

```python
>>> import ROOT
>>> ROOT.gInterpreter.Declare("struct MyStruct { int foo; float bar; };")
True
>>> mys = ROOT.MyStruct()
>>> ROOT.addressof(mys) # Address of mys' C++ object
94352024283040L
>>> ROOT.addressof(mys, 'foo') # Address of "foo" field (same as address of object) 
94352024283040L
>>> ROOT.addressof(mys, 'bar') # Address of "bar" field
94352024283044L
>>> ROOT.addressof(mys, byref = True) # Address of address of mys' C++ object
140376843834640L
```

Moreover, `addressof` can be used in conjunction with `TTree::Branch` from Python as shown [here](https://github.com/root-project/root/blob/d1d035e17b9b8dd97bcd146dd6e0c84a0d1aa4a1/bindings/pyroot/pythonizations/test/ttree_branch.py#L134).

- `AsCObject`: equivalent to [cppyy's `as_cobject`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#capsules).

- `BindObject`: equivalent to [cppyy's `bind_object`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#c-c-casts).

- `MakeNullPointer(class_proxy)`: equivalent to `BindObject(0, class_proxy)`, it returns a Proxy object of the class represented by `class_proxy` that is bound to a C++ null pointer. For example, `MakeNullPointer(TTree)` returns a `TTree` proxy object which internally points to null. This function is kept for backwards compatibility with old PyROOT versions.

- `SetOwnership(obj, python_owns)`: a Python proxy can either own or not own its internal C++ object. If a Python proxy owns its C++ object and the proxy is being destroyed, the C++ object will be deleted too. This ownership can be modified for a given Python proxy with `SetOwnership`. For example, when calling `SetOwnership(obj, False)`, the user makes sure that the C++ object proxied by `obj` will not be deleted by PyROOT when `obj` is garbage collected; this is useful e.g. if the user knows the deletion will happen in C++ and wants to prevent a double delete. This functionality should be used with care not to produce memory leaks.

## Loading user libraries & jitting

PyROOT allows to use *any C++ library* from Python, not only ROOT. This is possible thanks to the automatic and dynamic bindings between Python and C++ that PyROOT provides: without any prior generation of wrappers, at execution time, PyROOT can load and call into C++ code. The following sub-sections cover different supported scenarios for dynamic C++ code invocation.

### Jitting strings with code

ROOT comes with a [C++ interpreter]({{ '/manual/first_steps_with_root/#using-the-interactive-c-interpreter-cling' | relative_url }}) to which we can request to process a given piece of C++ code. Sometimes, if such code is short (e.g. the definition of a small function or class) or for rapid exploration/debugging, it is enough the place the C++ code in a Python string and give it to the interpreter. The code will be just-in-time compiled (jitted) and immediately available for invocation, as shown in the example below, which calls the constructor of the C++ class `A` and function `f` from Python after defining them via the interpreter.

```python
import ROOT

# Write some C++ code in a string
cpp_code = """
// Function definition
int f(int i) { return i*i; }

// Class definition
class A {
public:
    A() { cout << "Hello PyROOT!" << endl; }
};
"""

# Inject the code in the ROOT interpreter
ROOT.gInterpreter.ProcessLine(cpp_code)

# We find all the C++ entities in Python, right away!
a = ROOT.A()   # prints Hello PyROOT!
x = ROOT.f(3)  # x = 9
```

### Including a header

If the C++ code we want to use is in a header, we can also ask the interpreter to include it. Let's assume we have a header called `my_header.h` with the following content:

```cpp
int f(int i) { return i*i; }

class A {
public:
    A() { cout << "Hello PyROOT!" << endl; }
};
```

We can execute the code below:

```python
 # Make the header known to the interpreter
 ROOT.gInterpreter.ProcessLine('#include "my_header.h"')

 # We find all the C++ entities in Python, right away!
 a = ROOT.A()   # prints Hello PyROOT!
 x = ROOT.f(3)  # x = 9
```

### Loading a library

It is also possible to dynamically load C++ libraries with PyROOT and call into them. This time let's suppose our code is split between a header `my_header.h`:

```cpp
int f(int i);

class A {
public:
    A();
};
```

and a source file:

```cpp
#include "my_header.h"

int f(int i) { return i*i; }

A::A() { cout << "Hello PyROOT!" << endl; }
```

Assuming we create a C++ library `my_cpp_library.so` from the code above, we can load and use such library like so:

```python
 # First include header, then load C++ library
ROOT.gInterpreter.ProcessLine('#include "my_header.h"')`
ROOT.gSystem.Load('./my_cpp_library.so')

# We find all the C++ entities in Python, right away!
a = ROOT.A()   # prints Hello PyROOT!
x = ROOT.f(3)  # x = 9
```

## TPython: running Python from C++

ROOT also allows to run Python code from C++ via the `TPython` class.

The example below shows how to use `Exec` to run a Python statement, `Eval` to evaluate a Python expression and get its result back in C++ and `Prompt` to start an interactive Python session. 

```cpp
root [0] TPython::Exec( "print(1 + 1)" )
2
root [1] auto b = (TBrowser*)TPython::Eval( "ROOT.TBrowser()" )
(TBrowser *) @0x7ffec81094f8
root [2] TPython::Prompt()
>>> i = 2
>>> print(i)
2
```

For a more complete description of the `TPython` interface, please check the reference guide for {% include ref class="TPython" %}.

## JupyROOT: (Py)ROOT for Jupyter notebooks

[Jupyter notebooks](https://jupyter.org/) provide a web-based interface that can be used to do interactive computing with ROOT.

### How to use it

Two kernels (or language flavours) allow to run ROOT from Jupyter: *Python* (2 and 3) and *C++*. In order to use such kernels, there are mainly two options:

- Local ROOT installation: to install ROOT locally, please follow the instructions [here]({{ '/install' | relative_url }}). In addition to ROOT, two Python packages are required, which can be installed e.g. with `pip`:

```shell
pip install jupyter
pip install metakernel
```

Once all requirements are installed, a Jupyter server with the Python and C++ kernels can be started by running from a terminal:

```shell
root --notebook
```

- SWAN: CERN provides an online service to create and run Jupyter notebooks, called [SWAN](https://swan.cern.ch). With this option no installation is required: a browser and a working Internet connection are enough. Both the Python and C++ kernels are available in SWAN.

Many ROOT tutorials are available in the form of Jupyter notebooks. For example, most [PyROOT tutorials](https://root.cern/doc/master/group__tutorial__pyroot.html) are listed with two buttons below to obtain their notebook version and to open them in SWAN, respectively.

### JavaScript graphics

The ROOT graphics are also available in Jupyter, both in Python and C++. Moreover, the user can choose between two modes:
- *Static* (default): the graphics are displayed as a static image in the output of the notebook cell.
- *Interactive*: the graphics are shown as an interactive JavaScript display. In order to activate this mode, the `%jsroot on` line needs to be included in a cell. Once enabled, the mode will stay on until it is disabled with `%jsroot off` (i.e. no need to enable it in every cell). This is an example for a Python notebook:

```python
%jsroot on
c = ROOT.TCanvas()
f1 = ROOT.TF1("func1", "sin(x)", 0, 10)
f1.Draw()
c.Draw() # Necessary to make the graphics show!
```

Executing the code above in a cell will make the following interactive canvas appear as output:

{% include figure_jsroot
   file="/manual/graphics/graphics.root" object="func1" width="500px" height="350px"
%}

> **Note that** the creation and drawing of a canvas are necessary when displaying ROOT graphics in a notebook. If no canvas is drawn in the cell, no graphics output will be shown!


## New PyROOT: Backwards-Incompatible Changes

The new PyROOT has some backwards-incompatible changes with respect to its predecessor, which are listed next:
- Instantiation of function templates must be done using square brackets instead of parentheses. For example, if we consider the following
  code snippet:

```python
>>> import ROOT

>>> ROOT.gInterpreter.Declare("""
template<typename T> T foo(T arg) { return arg; }
""")

>>> ROOT.foo['int']  # instantiation
cppyy template proxy (internal)

>>> ROOT.foo('int')  # call (auto-instantiation from arg type)
'int'
```

Note that the above does not affect class templates, which can be instantiated either with parenthesis or square brackets:

```python
>>> ROOT.std.vector['int'] # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>

>>> ROOT.std.vector('int') # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>
```

- Overload resolution in new cppyy has been significantly rewritten, which sometimes can lead to a different overload choice
(but still a compatible one!). For example, for the following overloads of `std::string`:

```cpp
string (const char* s, size_t n)                           (1)
string (const string& str, size_t pos, size_t len = npos)  (2)
```

when invoking `ROOT.std.string(s, len(s))`, where `s` is a Python string, the new PyROOT will pick (2) whereas the old
would pick (1).

- The conversion between `None` and C++ pointer types is not allowed anymore. Instead, `ROOT.nullptr` should be used:

```python
>>> ROOT.gInterpreter.Declare("""
class A {};
void foo(A* a) {}
""")

>>> ROOT.foo(ROOT.nullptr)  # ok

>>> ROOT.foo(None)          # fails
TypeError: void ::foo(A* a) =>
TypeError: could not convert argument 1
```

- Old PyROOT has `ROOT.Long` and `ROOT.Double` to pass integer and floating point numbers by reference. In the new
PyROOT, `ctypes` must be used instead.

```python
>>> ROOT.gInterpreter.Declare("""
void foo(int& i) { ++i; }
void foo(double& d) { ++d; }
""")

>>> import ctypes

>>> i = ctypes.c_int(1)
>>> d = ctypes.c_double(1.)

>>> ROOT.foo(i); i
c_int(2)

>>> ROOT.foo(d); d
c_double(2.0)
```

- When a character array is converted to a Python string, the new PyROOT only considers the characters before the
end-of-string character:

```python
>>> ROOT.gInterpreter.Declare('char MyWord[] = "Hello";')

>>> mw = ROOT.MyWord

>>> type(mw)
<class 'str'>

>>> mw  # '\x00' is not part of the string
'Hello'
```

- Any Python class derived from a base C++ class now requires the base class to define a virtual destructor:

```python
>>> ROOT.gInterpreter.Declare("class CppBase {};")
 True
>>> class PyDerived(ROOT.CppBase): pass
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: CppBase not an acceptable base: no virtual destructor
```

- There are several name changes for what concerns cppyy APIs and proxy object attributes, including:

| Old PyROOT/cppyy                          | New PyROOT/cppyy                |
|-------------------------------------------|---------------------------------|
| cppyy.gbl.MakeNullPointer(klass)          | cppyy.bind\_object(0, klass)    |
| cppyy.gbl.BindObject / cppyy.bind\_object | cppyy.bind\_object              |
| cppyy.AsCObject                           | libcppyy.as\_cobject            |
| cppyy.add\_pythonization                  | cppyy.py.add\_pythonization     |
| cppyy.compose\_method                     | cppyy.py.compose\_method        |
| cppyy.make\_interface                     | cppyy.py.pin\_type              |
| cppyy.gbl.nullptr                         | cppyy.nullptr                   |
| cppyy.gbl.PyROOT.TPyException             | cppyy.gbl.CPyCppyy.TPyException |
| buffer.SetSize(N)                         | buffer.reshape((N,))            |
| obj.\_\_cppname\_\_                       | obj.\_\_cpp\_name\_\_           |
| obj.\_get\_smart\_ptr                     | obj.\_\_smartptr\_\_            |
| callable.\_creates                        | callable.\_\_creates\_\_        |
| callable.\_mempolicy                      | callable.\_\_mempolicy\_\_      |
| callable.\_threaded                       | callable.\_\_release\_gil\_\_   |

- New PyROOT does not parse command line arguments by default anymore. For example, when running
`python my_script.py -b`, the `-b` argument will not be parsed by PyROOT, and therefore the
batch mode will not be activated. If the user wants to enable the PyROOT argument parsing again,
they can do so by starting their Python script with:

```python
import ROOT
ROOT.PyConfig.IgnoreCommandLineOptions = False
```

- In new PyROOT, `addressof` should be used to retrieve the address of fields in a `struct`,
for example:

```python
>>> ROOT.gInterpreter.Declare("""
struct MyStruct {
  int a;
  float b;
};
""")

>>> s = ROOT.MyStruct()

>>> ROOT.addressof(s, 'a')
94015521402096L

>>> ROOT.addressof(s, 'b')
94015521402100L

>>> ROOT.addressof(s)
94015521402096L
```

In old PyROOT, `AddressOf` could be used for that purpose too, but its behaviour was inconsistent.
`AddressOf(o)` returned a buffer whose first position contained the address of object `o`, but
`Address(o, 'field')` returned a buffer whose address was the address of the field, instead
of such address being contained in the first position of the buffer.
Note that, in the new PyROOT, `AddressOf(o)` can still be invoked, and it still returns a buffer
whose first position contains the address of object `o`.

- In old PyROOT, there were two C++ classes called `TPyMultiGenFunction` and `TPyMultiGradFunction`
which inherited from `ROOT::Math::IMultiGenFunction` and `ROOT::Math::IMultiGradFunction`, respectively.
The purpose of these classes was to serve as a base class for Python classes that wanted to inherit
from the ROOT::Math classes. This allowed to define Python functions that could be used for fitting
in Fit::Fitter.
In the new PyROOT, `TPyMultiGenFunction` and `TPyMultiGradFunction` do not exist anymore, since their
functionality is automatically provided by new cppyy: when a Python class inherits from a C++ class,
a wrapper C++ class is automatically generated. That wrapper class will redirect any call from C++
to the methods implemented by the Python class. Therefore, the user can make their Python function
classes inherit directly from the ROOT::Math C++ classes, for example:

```python
import ROOT

from array import array

class MyMultiGenFCN( ROOT.Math.IMultiGenFunction ):
    def NDim( self ):
        return 1

    def DoEval( self, x ):
        return (x[0] - 42) * (x[0] - 42)

    def Clone( self ):
        x = MyMultiGenFCN()
        ROOT.SetOwnership(x, False)
        return x

def main():
    fitter = ROOT.Fit.Fitter()
    myMultiGenFCN = MyMultiGenFCN()
    params = array('d', [1.])
    fitter.FitFCN(myMultiGenFCN, params)
    fitter.Result().Print(ROOT.std.cout, True)

if __name__ == '__main__':
    main()
```

- Inheritance of Python classes from C++ classes is not working in some cases. This is described
in [ROOT-10789](https://sft.its.cern.ch/jira/browse/ROOT-10789) and
[ROOT-10582](https://sft.its.cern.ch/jira/browse/ROOT-10582).
This affects the creation of GUIs from Python, e.g. in the
[Python GUI tutorial](https://root.cern/doc/master/gui__ex_8py.html), where the inheritance
from `TGMainFrame` is not working at the moment. Future releases of ROOT will fix these
issues and provide a way to program GUIs from Python, including a replacement for TPyDispatcher,
which is no longer provided.

- When iterating over an `std::vector<std::string>` from Python, the elements returned by
the iterator are no longer of type Python `str`, but `cppyy.gbl.std.string`. This is an
optimization to make the iteration faster (copies are avoided) and it allows to call
modifier methods on the `std::string` objects.

```python
>>> import cppyy

>>> cppyy.cppdef('std::vector<std::string> foo() { return std::vector<std::string>{"foo","bar"};}')

>>> v = cppyy.gbl.foo()

>>> type(v)
<class cppyy.gbl.std.vector<string> at 0x4ad8220>

>>> for s in v:
...   print(type(s))  # s is no longer a Python string, but an std::string
...
<class cppyy.gbl.std.string at 0x4cd41b0>
<class cppyy.gbl.std.string at 0x4cd41b0>
```
