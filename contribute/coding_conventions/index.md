---
title: Coding Conventions
layout: single
sidebar:
  nav: "contribute"
toc: true
toc_sticky: true
---

## Naming conventions

For naming conventions we follow the [Taligent](https://root.cern/TaligentDocs/TaligentOnline/DocumentRoot/1.0/Docs/books/WM/WM_63.html#HEADING77){:target="_blank"}
rules. They have written a very large body of C++ and their rules seem well thought out.
No need to invent something new. The only addition/change we made is to append
an `_t` to `typedef`s and simple `struct`s, e.g.:

{% highlight C++ %}
typedef int Int_t ; struct Simple_t { ..... } ;
{% endhighlight %}

Addherence to the rules is mandatory.  After a while one really gets used to the fact that all class fields start with an `f` followed by a capitalized word, `fEnergy`, or that `TStreamerInfo` is a class. If the convention is sporadically violated debugging becomes a nightmare. The usage of a standard begin letter or token for the different types also makes it easy to parse and search the code using simple tools.

## Class definition conventions

Also here the [Taligent guide](https://root.cern/TaligentDocs/TaligentOnline/DocumentRoot/1.0/Docs/books/WM/WM_69.html){:target="_blank"}
is quite reasonable. Of course, no class data member should ever be public. Make the data
fields always private. Or protected, if you want to grant an inherited class direct
access.

### Inline

Add trivial get or setters directly in the class definition. This improves reading time since one does not have to look for it somewhere else. Add more complex inlines (longer than one line) at the bottom of the .h file. Creating separate `.icc` files increases the build time, the complexity of the build system and, more importantly, increases the number of files one possibly has to scan to find a piece of code.

### Declaration Order

In the class definition we first declare all private data members, followed by the private static members, the private methods and the private static methods. Then the protected members and methods and finally the public methods (no public data members). We put private members first since that is the language default and it gives the developer a quick view on what data members are used in a class.

## Avoid raw C types
Avoid the use of raw C types like `int`, `long`, `float`, `double` when using data that
might be written to disk. For example, the sizes of `int` and `long` are machine dependent.
On 32 bit machines `int`s and `long`s are 32 bits, but on 64 bit processors an `int` can
be either 32 or 64 bits and a `long` 64 bits, depending on the processor. For portability
reasons and consistent numerical results use the typedefs provided by ROOT's `Rtypes.h` for
the basic raw C types. E.g.: `Double_t`, `Float_t`, `Int_t` etc.

## Exception handling
Don't let every method throw an exception when a simple error return code is often enough.

## Namespaces
In ROOT 5 all classes are in the `ROOT` namespace. Some packages will be in a sub-namespace, e.g. `ROOT::Reflex`. For backward compatibility with the previous versions of ROOT, where all classes were in the global namespace, we have by default `using namespace ROOT;` in all headers. However, this can be turned off by defining the `USE_ROOT_NAMESPACE` macro.

## Using comments
ROOT chose [Doxygen](https://www.doxygen.nl){:target="_blank"} for its code documentation:
please refer to
[this page]({{'for_developers/docs' | relative_url}}) for all the details.

## Source file layout

Each source file, header or implementation file starts with a module identification line and an author line, e.g.:

{% highlight C++ %}
/ @(#)root/net / Author: Fons Rademakers 18/12/96
{% endhighlight %}

Where in the module identification line the file package is described by `root/package`, in this case the `net` package.

### Header file layout

Each header file has the following layout:

*   Module identification line
*   Author line
*   Copyright notice
*   Multiple inclusion protection macro
*   Headers file includes
*   Forward declarations
*   Actual class definition

For a typical example see [TObject.h](https://root.cern/doc/master/TObject_8h_source.html){:target="_blank"}.

Note the explicit checks to avoid unnecessarily opening already included header files. For large systems this kind of defensive measures can make quite a difference in compile time. Also never include a header file when a forward declaration is enough. On include header files for base classes or classes that are used by value in the class definition.

### Implementation file layout

Each implementation file has the following layout:

*   Module identification line
*   Author line
*   Copyright notice
*   Class description comments (see above)
*   Header file includes
*   Actual method implementation

For a typical example see [TObject.cxx](https://root.cern/doc/master/TObject_8cxx_source.html){:target="_blank"}.
Note the mandatory method separator line:
{% highlight C++ %}
////////////////////////////////////////
{% endhighlight %}
exactly 80 characters long.

## ClangFormat
ClangFormat is a Clang tool which allows you to format your code. All new contributions to the ROOT codebase **must** be formatted with the repository's clang-format style.

Here is how to format your code with ClangFormat:

1. install `clang-format` from your package manager (or downloading the executable if you're on Windows);
2. after you finished writing your code:
```
git add <my_code>
git clang-format # formats only the new code added
git add <my_code> # adds any modifications done by clang-format
# ... git commit and all the usual ...
```

ClangFormat should pick up the proper style to use from the `.clang-format` file in the [ROOT GitHub repository](https://github.com/root-project/root/blob/master/.clang-format).

Most code editors allow you to integrate clang-format directly while writing code (e.g. with format on save). This is handy, but you must make sure that you don't format other previously-present code while doing so: otherwise your commit will contain a mix of formatting changes and "real" changes.
If you want to do this, *first* format the document and make a commit with only the formatting changes, *then* add your new changes.

### About the coding style
***NOTE**: this paragraph is for people interested in the choices over the coding style. If all you care about is having proper formatting, clang-format will automatically apply all the rules described here.*

Coding style is very personal and we don't want to force our views on anybody. But for any contributions to the ROOT system that we have to maintain we would like you to follow our coding style.

#### Indentation
To be able to keep as much code as possible in the visible part of the editor of to avoid over abundant line wrapping we use indentation of 3 spaces. No tabs since they give the code always a different look depending on the tab settings of the original coder. If everything looks nicely lined up with a tab setting of 4 spaces, it does not look so nicely anymore when the tab setting is changed to 3, 5, etc. spaces.

#### Braces and spaces
The styling of braces and spaces follows the Kernighan and Ritchie rules: statements have their opening brace on the same line, whereas functions have it on the next line:
{% highlight C++ %}
if (x == y) {
   doY();
}

int function(int x)
{
   body of function
}
{% endhighlight %}

Rationale: it minimizes the number of empty (or almost empty) lines, without any loss of readability. Functions are special (you can't nest them in C/C++) so they get an exception to the rule.
Also notice that all statements have a space before the opening parenthesis, but function names and function calls don't.
There is no hard rule for placing braces around single-statement blocks (e.g. for and `if` with a body consisting of a single line). Use your judgement.

## Where to go from here
For the rest read the
[Taligent Guide](https://root.cern/TaligentDocs/TaligentOnline/DocumentRoot/1.0/Docs/books/WM/WM_1.html){:target="_blank"}
and use common sense.
