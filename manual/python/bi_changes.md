
## New PyROOT: Backwards-Incompatible Changes

ROOT 6.22 makes the new (experimental) PyROOT its default. This new PyROOT is designed on top of the new cppyy, which
provides more and better support for modern C++. The documentation for cppyy and the new features it provides can be
found [here](https://cppyy.readthedocs.io).

The new PyROOT has some backwards-incompatible changes with respect to its predecessor, which are listed next:
- Instantiation of function templates must be done using square brackets instead of parentheses. For example, if we consider the following
  code snippet:
~~~ {.python}
> import ROOT

> ROOT.gInterpreter.Declare("""
template<typename T> T foo(T arg) { return arg; }
""")

> ROOT.foo['int']  # instantiation
 cppyy template proxy (internal)

> ROOT.foo('int')  # call (auto-instantiation from arg type)
'int'
~~~

Note that the above does not affect class templates, which can be instantiated either with parenthesis or square brackets:
~~~ {.python}
> ROOT.std.vector['int'] # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>

> ROOT.std.vector('int') # instantiation
<class cppyy.gbl.std.vector<int> at 0x5528378>
~~~

- Overload resolution in new cppyy has been significantly rewritten, which sometimes can lead to a different overload choice
(but still a compatible one!). For example, for the following overloads of `std::string`:
~~~ {.cpp}
string (const char* s, size_t n)                           (1)
string (const string& str, size_t pos, size_t len = npos)  (2)
~~~
when invoking `ROOT.std.string(s, len(s))`, where `s` is a Python string, the new PyROOT will pick (2) whereas the old
would pick (1).

- The conversion between `None` and C++ pointer types is not allowed anymore. Instead, `ROOT.nullptr` should be used:
~~~ {.python}
> ROOT.gInterpreter.Declare("""
class A {};
void foo(A* a) {}
""")

> ROOT.foo(ROOT.nullptr)  # ok

> ROOT.foo(None)          # fails
TypeError: void ::foo(A* a) =>
TypeError: could not convert argument 1
~~~

- Old PyROOT has `ROOT.Long` and `ROOT.Double` to pass integer and floating point numbers by reference. In the new
PyROOT, `ctypes` must be used instead.
~~~ {.python}
> ROOT.gInterpreter.Declare("""
void foo(int& i) { ++i; }
void foo(double& d) { ++d; }
""")

> import ctypes

> i = ctypes.c_int(1)
> d = ctypes.c_double(1.)

> ROOT.foo(i); i
c_int(2)

> ROOT.foo(d); d
c_double(2.0)
~~~

- When a character array is converted to a Python string, the new PyROOT only considers the characters before the
end-of-string character:
~~~ {.python}
> ROOT.gInterpreter.Declare('char MyWord[] = "Hello";')

> mw = ROOT.MyWord

> type(mw)
<class 'str'>

> mw  # '\x00' is not part of the string
'Hello'
~~~

- Any Python class derived from a base C++ class now requires the base class to define a virtual destructor:
~~~ {.python}
> ROOT.gInterpreter.Declare("class CppBase {};")
 True
> class PyDerived(ROOT.CppBase): pass
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: CppBase not an acceptable base: no virtual destructor
~~~

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
~~~ {.python}
import ROOT
ROOT.PyConfig.IgnoreCommandLineOptions = False
~~~

- In new PyROOT, `addressof` should be used to retrieve the address of fields in a struct,
for example:
~~~ {.python}
> ROOT.gInterpreter.Declare("""
struct MyStruct {
  int a;
  float b;
};
""")

> s = ROOT.MyStruct()

> ROOT.addressof(s, 'a')
94015521402096L

> ROOT.addressof(s, 'b')
94015521402100L

> ROOT.addressof(s)
94015521402096L
~~~
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
~~~ {.python}
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
~~~

- Inheritance of Python classes from C++ classes is not working in some cases. This is described
in [ROOT-10789](https://sft.its.cern.ch/jira/browse/ROOT-10789) and
[ROOT-10582](https://sft.its.cern.ch/jira/browse/ROOT-10582).
This affects the creation of GUIs from Python, e.g. in the
[Python GUI tutorial](https://root.cern.ch/doc/master/gui__ex_8py.html), where the inheritance
from `TGMainFrame` is not working at the moment. Future releases of ROOT will fix these
issues and provide a way to program GUIs from Python, including a replacement for TPyDispatcher,
which is no longer provided.

- When iterating over an `std::vector<std::string>` from Python, the elements returned by
the iterator are no longer of type Python `str`, but `cppyy.gbl.std.string`. This is an
optimization to make the iteration faster (copies are avoided) and it allows to call
modifier methods on the `std::string` objects.
~~~ {.python}
> import cppyy

> cppyy.cppdef('std::vector<std::string> foo() { return std::vector<std::string>{"foo","bar"};}')

> v = cppyy.gbl.foo()

> type(v)
<class cppyy.gbl.std.vector<string> at 0x4ad8220>

> for s in v:
...   print(type(s))  # s is no longer a Python string, but an std::string
...
<class cppyy.gbl.std.string at 0x4cd41b0>
<class cppyy.gbl.std.string at 0x4cd41b0>
~~~
