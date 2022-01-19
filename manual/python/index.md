---
title: "Python interface: PyROOT"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

PyROOT allows the creation of bindings between Python and C++ in a *dynamic* and *automatic* way. It is HEP's entrance to all C++ from Python, for example, for frameworks and their steering code.

With PyROOT you can access the full ROOT C++ functionality from Python while benefiting from the performance of the ROOT C++ libraries.

PyROOT is compatible with both Python2 (>= 2.7) and Python3.

> The usage of PyROOT requires working knowledge of Python.<br/>
> For detailed information on Python, refer to the [Python Language Reference](https://docs.python.org/3/reference/){:target="_blank"}.

Since ROOT 6.22, PyROOT has extensive support for *modern C++* (it operates on top of [cppyy](https://cppyy.readthedocs.io/){:target="_blank"}), is more *pythonic* and is able to *interoperate* with widely-used Python data-science libraries (for example, [NumPy](https://numpy.org/){:target="_blank"}, [pandas](https://pandas.pydata.org/){:target="_blank"}, [Numba](https://numba.pydata.org/){:target="_blank"}).

{% include tutorials name="PyROOT" url="pyroot" %}

## Getting started

When ROOT is installed, you can use PyROOT both from the Python prompt and from a Python script. The entry point to PyROOT is the `ROOT` module, which you must import first:

```python
import ROOT
```

Then you can access the ROOT C++ classes, functions, etc. via the `ROOT` module.

_**Example**_

This example shows how you can create a histogram (an instance of the {% include ref class="TH1F" %} class) and randomly fill it with a gaussian distribution.

```python
h = ROOT.TH1F("myHist", "myTitle", 64, -4, 4)
h.FillRandom("gaus")
```

## Interactive graphics

Just like from the ROOT command prompt, you can also create interactive ROOT graphics with PyROOT.

_**Example**_

A one-dimensional function is created and drawn:

```python
>>> import ROOT
>>> f = ROOT.TF1("f1", "sin(x)/x", 0., 10.)
>>> f.Draw()
```

When the above code is executed from the Python prompt, a new canvas opens and displays the drawn function:

{% include figure_image
img="tf1_draw.png"
caption="Example of graphics generated with PyROOT."
%}

> **Note**
>
> You can also write the above code in a script file and execute it with Python. In that case, the script runs to completion and the Python process is terminated, so the generated canvas disappears.
> <br/>If you want to keep the Python process alive and thus inspect your canvas, execute the script with:<br/>
> ``` python -i script_name.py ```

## User interface

Besides being the entry point to all ROOT functionality, the `ROOT` module also provides an interface to configure PyROOT and to manipulate PyROOT objects at a lower level.

### Configuration options

After importing the ROOT module, you can access the PyROOT configuration object as `ROOT.PyConfig`. This object has a set of properties that you can modify to steer the behaviour of PyROOT. For the configuration to be taken into account, it needs to be applied right after the `ROOT` module is imported.

_**Example**_

```python
import ROOT
ROOT.PyConfig.DisableRootLogon = True
ROOT.PyConfig.IgnoreCommandLineOptions = False
```

The available configuration options are:

- `DisableRootLogon` (default `False`): Just like in C++, PyROOT also supports [rootlogon](https://root.cern/doc/master/rootlogon_8C.html){:target="_blank"}. When PyROOT starts, it looks for a file called `.rootlogon.py` in the user's home directory. If such file exists, PyROOT imports it. You can use it to make some settings every time PyROOT is launched, for example, defining some style for your plots:

    ```python
    # Content of .rootlogon.py
    import ROOT
    myStyle = ROOT.TStyle('MyStyle','My graphics style')
    myStyle.SetCanvasColor(ROOT.kBlue) # My canvases are blue!
    ROOT.gROOT.SetStyle('MyStyle')
    ```

    If PyROOT cannot find `.rootlogon.py` in the user's home directory, it looks for the equivalent in C++ (`.rootlogon.C`), first in [ROOT's etc directory](https://root.cern/doc/master/classTROOT.html#ab8e51627a12d886d6c8177b46481352a){:target="_blank"}, then in the user's home directory and finally in the current working directory.

    Note that it is also possible to use both the Python and the C++ rootlogons, since the latter can be loaded from the former, for example with `ROOT.gROOT.LoadMacro('.rootlogon.C')`.

    If you want to disable the rootlogon functionality, set `PyConfig.DisableRootLogon` to `True`.

- `IgnoreCommandLineOptions` (default `True`): If a PyROOT script is run with some command line arguments, ROOT ignores them by default, so you can process them as you wish. However, by setting `PyConfig.IgnoreCommandLineOptions` to `False`, those arguments are forwarded to ROOT for parsing, for example, to enable the batch mode from the command line.<br/>For a complete list of the arguments accepted by ROOT, see [Starting ROOT with command line options]({{ '/manual/first_steps_with_root/#command-line-options' | relative_url }}).

- `ShutDown` (default `True`): When the application is finished, more precisely during PyROOT's cleanup phase, the ROOT C++ interpreter is shut down by default.<br/>If PyROOT is executed as part of a longer-running application that needs the C++ interpreter, you can set `PyConfig.ShutDown` to `False` to prevent that shutdown.

- `StartGUIThread` (default `True`): Unless executed from [IPython](https://ipython.org/){:target="_blank"}, a [Jupyter](https://jupyter.org/){:target="_blank"} notebook or in [interactive mode](https://docs.python.org/3/tutorial/interpreter.html#interactive-mode){:target="_blank"}, PyROOT starts a thread that periodically polls for ROOT events (for example GUI events) to process them. If a given PyROOT application does not need this event processing, you can prevent the creation of the thread by setting `PyConfig.StartGUIThread` to `False`.

### Enabling batch mode

When running in batch mode, PyROOT does not display any graphics. You can activate the batch mode as follows:

1. Pass `-b` as a command line argument, for example, `python -b my_pyroot_script.py`.<br/>For this to work, you must set `PyConfig.IgnoreCommandLineOptions` to `False` inside the PyROOT script, see [Configuration options]({{ '/manual/python/#configuration-options' | relative_url }}).

2. Call `gROOT.SetBatch` in the PyROOT script, *right after* importing `ROOT`:

    ```python
    import ROOT
    ROOT.gROOT.SetBatch(True)
    ```

### Low-level manipulation of objects

When instantiating a C++ class from Python via PyROOT, both a C++ object and its Python proxy object are created. Such a Python object forwards any access to its internal C++ object, thus acting as a proxy. PyROOT provides functions to inspect or manipulate Python proxies and their C++ counterparts, based on the functionality provided by [cppyy](https://cppyy.readthedocs.io/en/latest/lowlevel.html).<br/>
You can access these functions with the `ROOT.NameOfFunction` pattern as follows:

- `AddressOf(obj)`: When applied to a Proxy object `obj`, it returns an indexable buffer of length 1, whose only element is the address of the C++ object proxied by `obj`. The address of the buffer is the same as the address of the address of the C++ object. This function is kept for backwards compatibility with old PyROOT versions.

- `addressof(obj, field, byref)`: Similarly to `AddressOf`, you can use it to obtain the address of an internal C++ object from its Python proxy. However, `addressof` returns that address as an integer, not as an indexable buffer. Furthermore, `addressof` accepts two more parameters: `field` and `byref`. You can use `field` to specify the name of a field in a struct, in order to get the address of that field. If you set `byref` to `True`, `addressof` returns the address of the address of the C++ object. This function is equivalent to [cppyy's `addressof`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#capsules).

    _**Example**_

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

    Moreover, you can use `addressof` in conjunction with `TTree::Branch` from Python as shown in [ttree_branch.py](https://github.com/root-project/root/blob/d1d035e17b9b8dd97bcd146dd6e0c84a0d1aa4a1/bindings/pyroot/pythonizations/test/ttree_branch.py#L134).

- `AsCObject`: Equivalent to [cppyy's `as_cobject`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#capsules){:target="_blank"}.

- `BindObject`: Equivalent to [cppyy's `bind_object`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#c-c-casts){:target="_blank"}.

- `MakeNullPointer(class_proxy)`: Equivalent to `BindObject(0, class_proxy)`, it returns a proxy object of the class represented by `class_proxy` that is bound to a C++ null pointer.<br/>For example, `MakeNullPointer(TTree)` returns a `TTree` proxy object that internally points to null. This function is kept for backwards compatibility with old PyROOT versions.

- `SetOwnership(obj, python_owns)`: A Python proxy can either own or not own its internal C++ object. If a Python proxy owns its C++ object and the proxy is being destroyed, the C++ object is deleted too. This ownership can be modified for a given Python proxy with `SetOwnership`.<br>For example, by calling `SetOwnership(obj, False)`, you make sure that the C++ object proxied by `obj` is not deleted by PyROOT when `obj` is garbage collected. This is useful for example, if you know that the deletion will happen in C++ and you want to prevent a double delete.<br/>Use this functionality with care not to produce any memory leaks.

## Creating C++ templated class instances

You can create an instance of any C++ templated class. Remember to instatiate the template first, before creating the object instance.

Below you can find an example of instantiating an `std::vector`.

_**Example**_

```python
>>> import ROOT
>>> v = ROOT.std.vector[int]()
>>> for i in range(0, 10):
...    v.push_back(i)
...
>>> for i in v:
...     print(i, end=' ')
1 2 3 4 5 6 7 8 9
>>>
>>> list(v)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>>
```

The parameters to the template instantiation can either be an actual type or value (as is used here, `int`), or a string representation of the parameters (e.g. `'double'`), or a mixture of both (e.g. `'TCanvas, 0'` or `'double', 0` ).

## Passing Python callables to C++

It is possible to pass a Python callable to a C++ callable (e.g. a function) that expects an `std::function` or a function pointer.

_**Example**_

```python
import ROOT

ROOT.gInterpreter.Declare("""
    void call_with_1(const std::function<void(int)> &f) { f(1); }
    """)

def print_arg(x):
    print(x)

ROOT.call_with_1(print_arg)  # prints 1
```

A common usecase is to construct objects of the `TF{1,2,3}` family of classes with Python functions as arguments, which allows to perform operations as plotting and fitting of histograms with such functions.

The signature of the Python callable must accept exactly two arrays. The first array contains the `x`, `y`, `z`, and `t` values for the call; the second array contains the values that parameterize the function. For more details, see the {% include ref class="TF1" %} documentation and the examples below.

_**Example**_

This is an example of a parameterless Python function that is plotted on a default canvas:

```python
import ROOT

def identity(arr, par):
    return arr[0]

# create an identity function
f = ROOT.TF1('pyf1', identity, -1., 1.)

# plot the function
c = ROOT.TCanvas()
f.Draw()
```

The following is an example of a parameterized Python callable instance that is plotted on a default canvas:

```python
import ROOT

class Linear:
    def __call__(self, arr, par):
        return par[0] + arr[0]*par[1]

# create a linear function with offset 5, and pitch 2
l = Linear()
f = ROOT.TF1('pyf2', l, -1., 1., 2)
f.SetParameters(5., 2.)

# plot the function
c = ROOT.TCanvas()
f.Draw()
```

Note that this time the constructor is told that there are two parameters, and note in particular how these parameters are set. It is also possible to keep the parameters as data members of the callable instance and use and set them directly from Python.

## Loading user libraries and Just-In-Time compilation (JITting)

With PyROOT you can use *any C++ library* from Python, not only the ROOT libraries. This is possible because of the automatic and dynamic bindings between Python and C++ that PyROOT provides.
Without any prior generation of wrappers, at execution time, PyROOT can load C++ code and call into it.

This enables you to write high-performance C++, compile it and use it from Python.
The following options are available, ordered by complexity and performance:

-  [Just-in-time compilation of small strings](#JITString): Small functions and classes to be used from Python. Especially useful for testing and debugging.
-  [Just-in-time compilation of entire files](#JITHeader): Small or medium-size C++ code in single files.
-  [Loading C++ libraries, JITting headers](#JITLoadLib): Larger C++ code in libraries. Allows for optimizing code for high performance. Headers compiled just in time.
-  [Loading C++ libraries with dictionaries](#JITLoadDict): Load large and very large, high-performance C++ projects, no just-in-time compilation.


<a name="JITString"></a>
### Just-in-time compilation of small strings

ROOT has a [C++ interpreter]({{ '/manual/first_steps_with_root/#running-c-code' | relative_url }}), which can process C++ code. Sometimes such a code is short, e.g. for the definition of a small function or a class or for rapid exploration or debugging. To do this, place the C++ code in a Python string, which is passed to the interpreter.
The code is just-in-time compiled (jitted) and it is immediately available for invocation, as shown in the following example. Here, the constructor of the C++ class `A` and the function `f` are called from Python after defining them via the interpreter.

_**Example**_

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

<a name="JITHeader"></a>
### Just-in-time compilation of entire files

If you want to use the C++ code in a header, you can use the interpreter to include and compile it on the fly.

_**Example**_

There is a header called `my_header.h` with the following content:

```cpp
int f(int i) { return i*i; }

class A {
public:
    A() { cout << "Hello PyROOT!" << endl; }
};
```

In Python, you can access it like this:

```python
 # Make the header known to the interpreter
 ROOT.gInterpreter.ProcessLine('#include "my_header.h"')

 # We find all the C++ entities in Python, right away!
 a = ROOT.A()   # prints Hello PyROOT!
 x = ROOT.f(3)  # x = 9
```

<a name="JITLoadLib"></a>
### Loading C++ libraries, JITting headers

You can dynamically load C++ libraries with PyROOT, and call the functions from the library. The advantage of this method is that
all code in the library needs to be compiled only once, possibly with optimizations (`-O2`, `-O3`). You can use it again from Python without any further JITting.
However, it is necessary to JIT the headers to make the code usable in Python.

_**Example**_

With the following header `my_header.h`:

```cpp
int f(int i);

class A {
public:
    A();
};
```

and the source file:

```cpp
#include "my_header.h"

int f(int i) { return i*i; }

A::A() { cout << "Hello PyROOT!" << endl; }
```

you can create the library `my_cpp_library.so`. In Python, you can load and use it as follows:

```python
 # First include header, then load C++ library
ROOT.gInterpreter.ProcessLine('#include "my_header.h"')`
ROOT.gSystem.Load('./my_cpp_library.so')

# We find all the C++ entities in Python, right away!
a = ROOT.A()   # prints Hello PyROOT!
x = ROOT.f(3)  # x = 9
```

<a name="JITLoadDict"></a>
### Loading C++ libraries with dictionaries

For larger analysis frameworks, one may not want to compile the headers each time the Python interpreter is started. One may also
want to read or write custom C++/C objects in ROOT files, and use them with {% include ref class="RDataFrame" namespace="ROOT" %} or similar tools.

A large analysis framework might further have multiple libraries. In these cases, you generate ROOT dictionaries, and add these to the libraries, which provides ROOT with the necessary information on how to generate Python bindings on the fly.
This is what the large LHC experiments do to steer their analysis frameworks from Python.

For more information on how to generate ROOT dictionaries, please refer to [this section]({{ 'manual/io_custom_classes/#generating-dictionaries' | relative_url }}) of the manual. 

Once the library with dictionaries is available, load it with high-performance C++ in one step:

```python
import ROOT
ROOT.gSystem.Load('./libAnalysisLib.so')
```

> **Note**
> If either ROOT or the headers that were used to create the dictionaries were moved to a different location, and ROOT cannot
> find them (it returns an error in this case), the location of the headers has to be communicated to ROOT:

> ```python
> import ROOT
> ROOT.gInterpreter.AddIncludePath('path/to/headers/')
> ROOT.gSystem.Load('./libAnalysisLib.so')
> ```

The loading of C++ libraries can even be automated using the `__init__.py` of the Python package.


## Pythonizing C++ user classes

PyROOT allows to inject new behaviour in C++ user classes that are used from Python - this is known as "pythonizing" those C++ classes. The aim here is to make C++ classes more "pythonic" or easier to use from Python, for example by making a C++ class iterable in Python or by defining how its objects should be represented as strings in Python.

Pythonizations for C++ classes can be registered by providing a function, the "pythonizor", which is decorated with the `@pythonization` decorator. The decorator specifies to which class or classes the pythonization should be applied, and the pythonizor function contains the code that performs the pythonization. For instance, the following code snippet registers a pythonization for class `C` that adds a new attribute to that class:

```python
from ROOT import pythonization

@pythonization("C")
def pythonizor_for_C(klass):
    klass.new_attr = 'New attribute' # injects a new attribute in the class
```

The very same mechanism is used internally in ROOT to pythonize ROOT classes, and it can be applied to user classes too since ROOT v6.26.

A more thorough explanation of the `@pythonization` decorator, its parameters and more examples of usage can be found in the tutorial {% include tutorial_py name="pyroot002_pythonizationDecorator" %}.


## TPython: running Python from C++

With ROOT you can execute Python code from C++ via the {% include ref class="TPython" %} class.

The following example shows how you can use `Exec` to execute a Python statement. `Eval` is used to evaluate a Python expression and get its result back in C++ and `Prompt` to start an interactive Python session.

_**Example**_

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

For a more complete description of the `TPython` interface, see {% include ref class="TPython" %}.

## JupyROOT: (Py)ROOT for Jupyter notebooks

[Jupyter notebooks](https://jupyter.org/){:target="_blank"} provide a web-based interface that you can use for interactive computing with ROOT.

### How to use ROOT with Jupyter notebooks

Two kernels (or language flavours) allow to use ROOT from Jupyter: *Python* (2 and 3) and *C++*. In order to use such kernels, there are mainly two options:

- Local ROOT installation: to install ROOT locally, see [Installing ROOT]({{ '/install' | relative_url }}).<br/>In addition to ROOT, two Python packages are required that you can install, for example, with `pip`:

    ```shell
    pip install jupyter
    pip install metakernel
    ```

    When all requirements fulfilled, you can start a Jupyter server with the Python and C++ kernels from a terminal:

    ```shell
    root --notebook
    ```

- SWAN: CERN provides an online service to create and run Jupyter notebooks, called [SWAN](https://swan.cern.ch){:target="_blank"}. With this option no installation is required: a browser and a working Internet connection are enough. Both the Python and C++ kernels are available in SWAN.

Many ROOT tutorials are available as Jupyter notebooks. For example, most [PyROOT tutorials](https://root.cern/doc/master/group__tutorial__pyroot.html){:target="_blank"} are listed with two buttons below to obtain their notebook version and to open them in SWAN, respectively.

### JavaScript graphics

The ROOT graphics are also available in Jupyter, both in Python and C++. Moreover, you can choose between two modes:
- *Static* (default): The graphics are displayed as a static image in the output of the notebook cell.
- *Interactive*: The graphics are shown as an interactive JavaScript display. In order to activate this mode, include `%jsroot on` in a cell. Once enabled, the mode stays on until it is disabled with `%jsroot off` (i.e. no need to enable it in every cell).

_**Example**_

```python
%jsroot on
c = ROOT.TCanvas()
f1 = ROOT.TF1("func1", "sin(x)", 0, 10)
f1.Draw()
c.Draw() # Necessary to make the graphics show!
```

If you execute the above code in a cell, the output shows the following interactive canvas:

{% include figure_jsroot
   file="python.root" object="func1" width="500px" height="350px"
%}

> **Note**
>
> The creation and drawing of a canvas are necessary when displaying ROOT graphics in a notebook. If no canvas is drawn in the cell, no graphics output is shown.


## New PyROOT: Backwards-incompatible changes

The new PyROOT has the following backwards-incompatible changes with respect to its predecessor:

### Instantiation of function templates

Instantiation of function templates must be done using square brackets instead of parentheses.

_**Example**_

Consider the following code snippet:

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

Note that the above code does not affect class templates, which can be instantiated either with parenthesis or square brackets:

```python
>>> ROOT.std.vector['int'] # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>

>>> ROOT.std.vector('int') # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>
```

### Overload resolution

Overload resolution in new cppyy has been significantly rewritten, which sometimes can lead to a different overload choice
(but still a compatible one).

_**Example**_

For example, for the following overloads of `std::string`:

```cpp
string (const char* s, size_t n)                           (1)
string (const string& str, size_t pos, size_t len = npos)  (2)
```

when invoking `ROOT.std.string(s, len(s))`, where `s` is a Python string. The new PyROOT picks (2) whereas the old picks (1).

### Conversion between None and C++ pointer types

The conversion between `None` and C++ pointer types is not allowed anymore. Use `ROOT.nullptr` instead:

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

### Passing fundamental types by reference

Old PyROOT has `ROOT.Long` and `ROOT.Double` to pass integer and floating point numbers by reference. In the new PyROOT, you must use `ctypes` instead.

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

### Conversion to Python strings

When a character array is converted to a Python string, the new PyROOT only considers the characters before the end-of-string character:

```python
>>> ROOT.gInterpreter.Declare('char MyWord[] = "Hello";')

>>> mw = ROOT.MyWord

>>> type(mw)
<class 'str'>

>>> mw  # '\x00' is not part of the string
'Hello'
```

### Inheritance from C++ classes

Any Python class derived from a base C++ class now requires the base class to define a virtual destructor:

```python
>>> ROOT.gInterpreter.Declare("class CppBase {};")
 True
>>> class PyDerived(ROOT.CppBase): pass
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: CppBase not an acceptable base: no virtual destructor
```

### Changes of the cppyy APIs

There are the following name changes for what concerns cppyy APIs and proxy object attributes:

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
| obj.\_\_cppname\_\_                       | type(obj).\_\_cpp\_name\_\_     |
| obj.\_get\_smart\_ptr                     | obj.\_\_smartptr\_\_            |
| callable.\_creates                        | callable.\_\_creates\_\_        |
| callable.\_mempolicy                      | callable.\_\_mempolicy\_\_      |
| callable.\_threaded                       | callable.\_\_release\_gil\_\_   |


### Parsing of command line arguments

New PyROOT does not parse command line arguments by default anymore.
<br/>For example, when running `python my_script.py -b`, the `-b` argument is not parsed by PyROOT, and therefore the
batch mode is not activated. If you want to enable the PyROOT argument parsing again, start your Python script with:

```python
import ROOT
ROOT.PyConfig.IgnoreCommandLineOptions = False
```

### Addressing fields in structures

In new PyROOT, use `addressof` to retrieve the address of fields in a `struct`.


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

Note that in the new PyROOT `AddressOf(o)` can still be invoked, and it still returns a buffer
whose first position contains the address of object `o`.

### Alternative for TPyMultiGenFunction and TPyMultiGradFunction

In old PyROOT, there were two C++ classes called `TPyMultiGenFunction` and `TPyMultiGradFunction`
which inherited from `ROOT::Math::IMultiGenFunction` and `ROOT::Math::IMultiGradFunction`, respectively.
The purpose of these classes was to serve as a base class for Python classes that wanted to inherit
from the ROOT::Math classes. This allowed to define Python functions that could be used for fitting
in Fit::Fitter.<br/>
In the new PyROOT, `TPyMultiGenFunction` and `TPyMultiGradFunction` do not exist anymore, since their
functionality is automatically provided by new cppyy: if a Python class inherits from a C++ class,
a wrapper C++ class is automatically generated. That wrapper class redirects any call from C++
to the methods implemented by the Python class.

_**Example**_

You can make your Python function classes inherit directly from the ROOT::Math C++ classes.

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

### Iterating over an std::vector<std::string>

When iterating over an `std::vector<std::string>` from Python, the elements returned by
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

### Conversion to boolean value

When obtaining the boolean value of a C++ instance proxy, both old and new PyROOT return
`False` when such proxy points to null. On the other hand, when the proxy points to a C++ object,
old PyROOT just returns `True`, while new PyROOT has slightly modified this behaviour: in new
cppyy, if `__len__` is available, the result of `__len__` is used to determine truth. This is
done to comply with the default Python behaviour, where `__len__` is tried if `__bool__` is not
present (see [object.__bool__](https://docs.python.org/3.8/reference/datamodel.html#object.__bool__){:target="_blank"}).

_**Example**_

The following code shows how the insertion of `__len__` changes the boolean value of an instance proxy.

```python
>>> import ROOT
>>> ROOT.gInterpreter.Declare('class A {};')

>>> a = ROOT.A()
>>> bool(a)
True

>>> ROOT.A.__len__ = lambda self : 0
>>> bool(a)  # False because len(a) == 0
False
```

### Iterating over buffer objects

In new cppyy, buffer objects are represented by the `LowLevelView` type. If such a buffer
points to null, it is not iterable, unlike in the old PyROOT.
<br/>For example, in the following code, `GetX()` returns a null pointer and therefore an exception is thrown when calling `list(x)`:

```python
>> import ROOT

>> g = ROOT.TGraph()
>> x = g.GetX()

>> xl = list(x)  # throws ReferenceError
```

The code above can be protected by checking for the validity of `x`:

```python
>>> xl = list(x) if x else 'your default'
```
