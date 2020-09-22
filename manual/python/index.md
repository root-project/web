---
title: "Python interface: PyROOT"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT can be used from Python because of its Python-C++ bindings, called PyROOT. PyROOT is HEP's entrance to all C++ from Python, for example, for frameworks and their steering code. The PyROOT bindings are *automatic* and *dynamic*: no pre-generation of Python wrappers is necessary.

With PyROOT, all the ROOT functionality can be accessed from Python while, at the same time, benefiting from the performance of the ROOT C++ libraries.

PyROOT is compatible with both Python2 (>= 2.7) and Python3.

> Using PyROOT requires working knowledge of Python. Detailed information about the Python language can be found in the [Python Language Reference](https://docs.python.org/3/reference/){:target="_blank"}.

Together with ROOT 6.22, a major revision of PyROOT has been released. The new PyROOT has extensive support for *modern C++* (it operates on top of [cppyy](https://cppyy.readthedocs.io/){:target="_blank"}), is more *pythonic* and is able to *interoperate* with widely-used Python data-science libraries (for example, [NumPy](https://numpy.org/){:target="_blank"}, [pandas](https://pandas.pydata.org/){:target="_blank"}, [Numba](https://numba.pydata.org/){:target="_blank"}).<br/>Therefore, we strongly recommend to use the new PyROOT.

{% include tutorials name="PyROOT" url="pyroot" %}

## Getting started

When ROOT is installed, you can use PyROOT both from the Python prompt and from a Python script. The entry point to PyROOT is the `ROOT` module, which you must import first: 

```python
import ROOT
```

Then you can access the ROOT C++ classes, functions, etc. via the `ROOT` module. 

_**Example**_

This examples shows how you can create a histogram (an instance of the {% include ref class="TH1F" %} class) and randomly fill it with a gaussian distribution.

```python
h = ROOT.TH1F("myHist", "myTitle", 64, -4, 4)
h.FillRandom("gaus")
```

## Interactive graphics

Just like from C++, you can also create interactive ROOT graphics from Python with PyROOT. 

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
> You can also write the above code in a script file and execute it with Python. In that case, the script will run to completion and the Python process will terminate, making the created canvas disappear. If you want to keep the Python process alive and thus be able to inspect your canvas, run the script with `python -i script_name.py`.

## User interface

Besides being the entry point to all ROOT functionality, the `ROOT` Python module also provides an interface to configure PyROOT and to manipulate PyROOT objects at a lower level.

### Configuration options

After importing the ROOT module, you can access the PyROOT configuration object as `ROOT.PyConfig`. Such an object has a set of properties that you can modify to steer the behaviour of PyROOT. For the configuration to be taken into account, it needs to be applied right after `ROOT` is imported. 

_**Example**_

```python
import ROOT
ROOT.PyConfig.DisableRootLogon = True
ROOT.PyConfig.IgnoreCommandLineOptions = False
```

The available configuration options are:

- `DisableRootLogon` (default `False`): Just like in C++, PyROOT also supports [rootlogon](https://root.cern/doc/master/rootlogon_8C.html){:target="_blank"}. When PyROOT starts, it will look for a file called `.rootlogon.py` in the user's home directory. If such file exists, PyROOT will import it. You can use it to make some settings every time PyROOT is launched, for example, defining some style for your plots:

```python
# Content of .rootlogon.py
import ROOT
myStyle = ROOT.TStyle('MyStyle','My graphics style')
myStyle.SetCanvasColor(ROOT.kBlue) # My canvases will have blue color!
ROOT.gROOT.SetStyle('MyStyle')
```

If PyROOT cannot find `.rootlogon.py` in the user's home directory, it will look for the equivalent in C++ (`.rootlogon.C`), first in [ROOT's etc directory](https://root.cern/doc/master/classTROOT.html#ab8e51627a12d886d6c8177b46481352a){:target="_blank"}, then in the user's home directory and finally in the current working directory. Note that it is also possible to use both the Python and the C++ rootlogons, since the latter can be loaded from the former, for instance with `ROOT.gROOT.LoadMacro('.rootlogon.C')`.

If you would like to completely disable the rootlogon functionality, set `PyConfig.DisableRootLogon` to `True`. 

- `IgnoreCommandLineOptions` (default `True`): If a PyROOT script is executed with some command line arguments, they will be ignored by default by ROOT, so you can process them as you wish. However, by setting `PyConfig.IgnoreCommandLineOptions` to `False`, those arguments will be forwarded to ROOT for parsing, for example, to enable the batch mode from the command line. For a complete list of the arguments accepted by ROOT, → see [Starting ROOT with command line options]({{ '/manual/first_steps_with_root/#starting-root-with-command-line-options' | relative_url }}).

- `ShutDown` (default `True`): when PyROOT is terminating, during its cleanup phase, the ROOT C++ interpreter is shut down. If PyROOT is executed as part of a longer-running application that needs the C++ interpreter, you can set `PyConfig.ShutDown` to `False` to prevent that shutdown.

- `StartGUIThread` (default `True`): except when executed from [IPython](https://ipython.org/){:target="_blank"}, a [Jupyter](https://jupyter.org/){:target="_blank"} notebook or in [interactive mode](https://docs.python.org/3/tutorial/interpreter.html#interactive-mode){:target="_blank"}, PyROOT starts a thread that periodically polls for ROOT events (for example GUI events) to process them. If a given PyROOT application does not need this event processing, you can prevent the creation of the thread by setting `PyConfig.StartGUIThread` to `False`.

### Enabling batch mode

When running in batch mode, PyROOT will not display any graphics. You can activate the batch mode as follows:

1. Pass `-b` as a command line argument, for example, `python -b my_pyroot_script.py`. For this to work, you must set `PyConfig.IgnoreCommandLineOptions` to `False` inside the PyROOT script, as discussed in [Configuration options]({{ '/manual/python/#configuration-options' | relative_url }}).

2. Call `gROOT.SetBatch` in the PyROOT script, right after importing `ROOT`:

```python
import ROOT
ROOT.gROOT.SetBatch(True)
```

### Low-level manipulation of objects

When instantiating a C++ class from Python via PyROOT, both a C++ object and its Python proxy object are created. Such a Python object forwards any access to its internal C++ object, thus acting as a proxy. PyROOT offers functions to inspect or manipulate Python proxies and their C++ counterparts, based on functionality provided by [cppyy](https://cppyy.readthedocs.io/en/latest/lowlevel.html).<br/>
You can access these functions with the pattern `ROOT.NameOfFunction` as follows:

- `AddressOf(obj)`: When applied to a Proxy object `obj`, it returns an indexable buffer of length 1, whose only element is the address of the C++ object proxied by `obj`. The address of the buffer is the same as the address of the address of the C++ object. This function is kept for backwards compatibility with old PyROOT versions.

- `addressof(obj, field, byref)`: Similarly to `AddressOf`, you can use it to obtain the address of an internal C++ object from its Python proxy. However, `addressof` returns that address as an integer, not as an indexable buffer. Furthermore, `addressof` accepts two more parameters: `field` and `byref`. You can use `field` to specify the name of a field in a struct, in order to get the address of that field. If you set `byref` to true, `addressof` returns the address of the address of the C++ object. This function is equivalent to [cppyy's `addressof`](https://cppyy.readthedocs.io/en/latest/lowlevel.html#capsules). Example usage:

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

- `MakeNullPointer(class_proxy)`: Equivalent to `BindObject(0, class_proxy)`, it returns a Proxy object of the class represented by `class_proxy` that is bound to a C++ null pointer. For example, `MakeNullPointer(TTree)` returns a `TTree` proxy object which internally points to null. This function is kept for backwards compatibility with old PyROOT versions.

- `SetOwnership(obj, python_owns)`: A Python proxy can either own or not own its internal C++ object. If a Python proxy owns its C++ object and the proxy is being destroyed, the C++ object will be deleted too. This ownership can be modified for a given Python proxy with `SetOwnership`. For example, when calling `SetOwnership(obj, False)`, the user makes sure that the C++ object proxied by `obj` will not be deleted by PyROOT when `obj` is garbage collected; this is useful for example, if the user knows the deletion will happen in C++ and wants to prevent a double delete. This functionality should be used with care not to produce memory leaks.

## Loading user libraries and Just-In-Time compilation (JITting)

With PyROOT you can use *any C++ library* from Python, not only the ROOT libraries. This is possible because of the automatic and dynamic bindings between Python and C++ that PyROOT provides.
Without any prior generation of wrappers, at execution time, PyROOT can load C++ code and call into it.

This allows for writing high-performance C++, compiling it, and using it from Python.
The following options are available, ordered by complexity and performance:

1. [Just-in-time compilation of small strings](#JITString): Small functions and classes to be used from Python. Especially useful for testing and debugging.
1. [Just-in-time compilation of entire files](#JITHeader): Small or medium-size C++ code in single files.
1. [Loading C++ libraries, JITting headers](#JITLoadLib): Larger C++ code in libraries. Allows for optimizing code for high performance. Headers compiled just in time.
1. [Loading C++ libraries with dictionaries](#JITLoadDict): Load large and very large, high-performance C++ projects, no just-in-time compilation.


<a name="JITString"></a>
### 1. Just-in-time compilation of small strings

ROOT has a [C++ interpreter]({{ '/manual/first_steps_with_root/#using-the-interactive-c-interpreter-cling' | relative_url }}), which can process C++ code. Sometimes, if such code is short (for exmple, the definition of a small function or class) or for rapid exploration or debugging. To do this, place the C++ code in a Python string, which is passed to the interpreter.
The code will be just-in-time compiled (jitted) and is immediately available for invocation, as shown in the following example. Here, the constructor of the C++ class `A` and the function `f` are called from Python after defining them via the interpreter.

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
### 2. Just-in-time compilation of entire files

If you want to use the C++ code in a header, you can also use the interpreter to include and compile it on the fly. 

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
### 3. Loading C++ libraries, JITting headers

You can also dynamically load C++ libraries with PyROOT, and call the functions from the library. The advantage of this method is that
all code in the library needs to be compiled only once, possibly with optimizations (`-O2`, `-O3`). You can use it again from Python without any further JITting.
It is, however, necessary to JIT the headers to make the code usable in Python.

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
### 4. Loading C++ libraries with dictionaries

For larger analysis frameworks, one may not want to compile the headers each time the Python interpreter is started. One may also
want to read or write custom C++/C objects in ROOT files, and use them with `RDataFrame` or similar tools.
A large analysis framework might further have multiple libraries.
In these cases, you generate [ROOT dictionaries]({{ 'manual/interacting-with-shared-libraries' | relative_url }}), and add these to the libraries, which will provide ROOT
with the necessary information on how to generate Python bindings on the fly.
This is what the large LHC experiments do to steer their analysis frameworks from Python.

1. Create one or multiple C++ libraries, for example, as a CMake project that uses ROOT, see → [CMake details]({{ '/manual/integrate_root_into_my_cmake_project' | relative_url }})
1. [Optional] Add [`ClassDef` macros]({{ 'manual/adding_a_class_to_root' | relative_url }}) for classes that should be read or written from or into files.
1. Have ROOT generate a dictionary of all classes that should receive I/O capabilities, i.e. that can be written into ROOT files.
   Use a [`LinkDef.h` file]({{ '/manual/interacting_with_shared_libraries/#selecting-dictionary-entries-linkdefh' | relative_url }})
   to select which classes or functions ROOT should include in the dictionary.

   The corresponding cmake instructions would look similar to this:
   ```cmake
   # Generate G__AnalysisLib.cxx with all the necessary class info:
   ROOT_GENERATE_DICTIONARY(G__AnalysisLib inc/classA.h inc/classB.h ...
                             LINKDEF LinkDef.h)

    add_library(AnalysisLib SHARED
       src/classA.cxx
       src/classB.cxx
       ...
       G__AnalysisLib.cxx) # Important: Here, all dictionary info is directly compiled into the library.

    # Ensure dictionary is generated before compiling the library:
    add_dependencies(AnalysisLib G__AnalysisLib)
   ```
1. Implement the C++ side, and compile the library using CMake.
1. On the Python side, load the libraries with high-performance C++ in one go:
   ```python
   import ROOT
   ROOT.gSystem.Load('./libAnalysisLib.so')
   ```
   > **NB** If either ROOT or the headers that were used to create the dictionaries were moved to a different location, and ROOT cannot
   > find them (it will issue an error in this case), the location of the headers has to be communicated to ROOT:
   > ```python
   > import ROOT
   > ROOT.gInterpreter.AddIncludePath('path/to/headers/')
   > ROOT.gSystem.Load('./libAnalysisLib.so')
   > ```

   The loading of C++ libraries can even be automated using the `__init__.py` of a Python package.



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

For a more complete description of the `TPython` interface, see → {% include ref class="TPython" %}.

## JupyROOT: (Py)ROOT for Jupyter notebooks

[Jupyter notebooks](https://jupyter.org/){:target="_blank"} provide a web-based interface that you can use for interactive computing with ROOT.

### How to use it

Two kernels (or language flavours) allow to run ROOT from Jupyter: *Python* (2 and 3) and *C++*. In order to use such kernels, there are mainly two options:

- Local ROOT installation: to install ROOT locally, see → [Installing ROOT]({{ '/install' | relative_url }}). In addition to ROOT, two Python packages are required, which can be installed, for example, with `pip`:

```shell
pip install jupyter
pip install metakernel
```

When all requirements are installed, you can start a Jupyter server with the Python and C++ kernels from a terminal:

```shell
root --notebook
```

- SWAN: CERN provides an online service to create and run Jupyter notebooks, called [SWAN](https://swan.cern.ch){:target="_blank"}. With this option no installation is required: a browser and a working Internet connection are enough. Both the Python and C++ kernels are available in SWAN.

Many ROOT tutorials are available as Jupyter notebooks. For example, most [PyROOT tutorials](https://root.cern/doc/master/group__tutorial__pyroot.html){:target="_blank"} are listed with two buttons below to obtain their notebook version and to open them in SWAN, respectively.

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
   file="python.root" object="func1" width="500px" height="350px"
%}

> **Note**
>
> The creation and drawing of a canvas are necessary when displaying ROOT graphics in a notebook. If no canvas is drawn in the cell, no graphics output will be shown.


## New PyROOT: Backwards-incompatible changes

The new PyROOT has the following backwards-incompatible changes with respect to its predecessor:
- Instantiation of function templates must be done using square brackets instead of parentheses.

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

- Overload resolution in new cppyy has been significantly rewritten, which sometimes can lead to a different overload choice
(but still a compatible one).

_**Example**_

For example, for the following overloads of `std::string`:

```cpp
string (const char* s, size_t n)                           (1)
string (const string& str, size_t pos, size_t len = npos)  (2)
```

when invoking `ROOT.std.string(s, len(s))`, where `s` is a Python string. The new PyROOT will pick (2) whereas the old would pick (1).

- The conversion between `None` and C++ pointer types is not allowed anymore. Use `ROOT.nullptr` instead:

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

- Old PyROOT has `ROOT.Long` and `ROOT.Double` to pass integer and floating point numbers by reference. In the new PyROOT, you must use `ctypes` instead.

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

- When a character array is converted to a Python string, the new PyROOT only considers the characters before the end-of-string character:

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

- There are the folloing name changes for what concerns cppyy APIs and proxy object attributes:

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
| obj.\_\_cppname\_\_                       | type(obj).\_\_cpp\_name\_\_         |
| obj.\_get\_smart\_ptr                     | obj.\_\_smartptr\_\_            |
| callable.\_creates                        | callable.\_\_creates\_\_        |
| callable.\_mempolicy                      | callable.\_\_mempolicy\_\_      |
| callable.\_threaded                       | callable.\_\_release\_gil\_\_   |

- New PyROOT does not parse command line arguments by default anymore.
<br/>For example, when running `python my_script.py -b`, the `-b` argument will not be parsed by PyROOT, and therefore the
batch mode will not be activated. If you want to enable the PyROOT argument parsing again, start your Python script with:

```python
import ROOT
ROOT.PyConfig.IgnoreCommandLineOptions = False
```

- In new PyROOT, `addressof` should be used to retrieve the address of fields in a `struct`.


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
in Fit::Fitter.<br/>
In the new PyROOT, `TPyMultiGenFunction` and `TPyMultiGradFunction` do not exist anymore, since their
functionality is automatically provided by new cppyy: when a Python class inherits from a C++ class,
a wrapper C++ class is automatically generated. That wrapper class will redirect any call from C++
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

- Inheritance of Python classes from C++ classes is not working in some cases, see → [ROOT-10789](https://sft.its.cern.ch/jira/browse/ROOT-10789){:target="_blank"} and
[ROOT-10582](https://sft.its.cern.ch/jira/browse/ROOT-10582){:target="_blank"}.
This affects the creation of GUIs from Python, for example, in the
[Python GUI tutorial](https://root.cern/doc/master/gui__ex_8py.html){:target="_blank"}, where the inheritance
from `TGMainFrame` is not working at the moment. Future releases of ROOT will fix these
issues and provide a way to program GUIs from Python, including a replacement for `TPyDispatcher`,
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

- When obtaining the boolean value of a C++ instance proxy, both old and new PyROOT return
`False` when such proxy points to null. On the other hand, when the proxy points to a C++ object,
old PyROOT just returns `True`, while new PyROOT has slightly modified this behaviour: in new
cppyy, if `__len__` is available, the result of `__len__` is used to determine truth. This is
done to comply with the normal Python behaviour, where `__len__` is tried if `__bool__` is not
present (see → [object.__bool__](https://docs.python.org/3.8/reference/datamodel.html#object.__bool__){:target="_blank"}).

_**Example**_

The following code shows how the insertion of `__len__` changes the boolean value of an instance proxy:

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

- In new cppyy, buffer objects are represented by the `LowLevelView` type. If such a buffer
points to null, it is not iterable, unlike in the old PyROOT. For example, in the following
code, `GetX()` returns a null pointer and therefore an exception will be thrown when calling
`list(x)`:

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
