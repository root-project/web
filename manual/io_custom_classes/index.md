---
title: "I/O of custom classes"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

This page describes how to read and write C++ objects to/from ROOT files.

Before you read this page, make sure you have read [ROOT files]({{ '/manual/root_files' | relative_url }}).

When storing data with ROOT, data contained in your C++ objects is written in a platform-independent
format to files on disk. This is what we call the "ROOT file format".

ROOT's I/O system is tailored to the needs of the high-energy physics community.
In particular, it has the following notable features:

- support for object-wise (row-wise) and column-wise I/O
- arbitrary C++ objects can be written/read without the need of user-defined I/O code
- automatic handling of changes in the class data members and their types over time ("schema evolution")
- data is compressed and decompressed transparently and users have access to a number of different compression algorithms
- transparent remote I/O
- the technology is tuned for very large datasets

In order to store your C++ types, ROOT needs to know about its data members and their types.
ROOT can extract that information from your header files with the help of its C++ interpreter, Cling, and store it in **ROOT dictionaries**.
A dictionary ("reflection database") contains information about the types and functions that are available in a library in the form of C++ code that can be linked into your application.
These dictionaries can be generated automatically by ROOT in a few different ways, which we describe in the following section.

> **Note**
>
> Dictionaries are _not_ required to use a given C++ type in the ROOT interpreter (e.g. in the ROOT prompt, via PyROOT or in Jupyter notebooks). They are only required to perform I/O of user-defined classes.


## Generating dictionaries

A dictionary consists of a C++ source file, which contains the type information needed by Cling and ROOT's I/O subsystem. This source file needs to be generated from the library's headers and then compiled and linked to the application that needs to perform I/O of the included classes.

There are three ways to generate a dictionary:

- [using ACLiC](#using-aclic): use this method to generate class dictionaries for quick prototyping and interactive development.
- [using `rootcling`](#using-rootcling): this is a low level command line tool to generate dictionaries. You can invoke `rootcling` e.g. from a Makefile or a shell script.
- [using CMake](#using-cmake): use this method to integrate ROOT I/O in your C++ framework build system.

### Using ACLiC

When you compile code from the ROOT prompt using [ACLiC]({{ '/manual/root_macros_and_shared_libraries/#compiling-root-macros-with-aclic' | relative_url }}), ROOT automatically generates the dictionaries for the types defined in that code and compiles them into a shared library.

For a standalone source file `MyClass.cxx`, we can interactively compile the source file into a library and, at the same time, create dictionaries for the types defined in it, with:

{% highlight C++ %}
root[] .L MyClass.cxx+
{% endhighlight %}

At this point, the ROOT interpreter has loaded all the information required to perform I/O of the types in `MyClass.cxx`:

{% highlight C++ %}
MyClass c;
TFile f("myfile.root", "RECREATE"); // create a file called `f.root`
f.WriteObjectAny(&c, "MyClass", "c"); // write object `c` as key `c` into the file
{% endhighlight %}

The library containing the compiled dictionary will be called `MyClass_cxx.so` (and, by default, the generated dictionary source file is automatically deleted).
Extra metadata that ROOT uses to find back dictionaries at runtime is stored in files with extensions `.d` and `.pcm`.

If instead our code is available as a header file and a pre-compiled shared object, we can load them in the interpreter and create dictionaries from the header like so:

{% highlight C++ %}
root[] gSystem->Load("libMyClass") // load the library first
root[] .L MyClass.h+ // then generate the dictionary from the header
{% endhighlight %}

### Using rootcling

You can manually create a dictionary by using `rootcling`:

{% highlight shell %}
rootcling -f DictOutput.cxx -c <OPTIONS> Header1.h Header2.h ... Linkdef.h
{% endhighlight %}

- `DictOutput.cxx` Specifies the output file that will contain the dictionary. It will be accompanied by a header file `DictOutput.h`.

- `<OPTIONS>` are:

	- `-I<HEADER_DIRECTORY>`: Adding an include path, so that `rootcling` can find the files included in `Header1.h`, `Header2.h`, etc.

    - `-D<SOMETHING>`: Define a preprocessor macro, which is sometimes needed to parse the header files.

- `Header1.h Header2.h...`: The header files.

- `Linkdef.h`: Tells `rootcling` which classes should be added to the dictionary, → see [Selecting dictionary entries: Linkdef.h](#selecting-dictionary-entries-linkdefh).


> **Note**
>
> Dictionaries that are used within the same library must have unique names, even if they reside in separate directories.

#### Embedding the rootcling call into a GNU Makefile

We recommend usage of the [CMake build system generator](#using-cmake), but if you need to use a GNU Makefile, there is the following rule for generating a dictionary (see code snippet below). It will create a new source file, which you should
compile like all the other sources in your library. In addition, you need to
add the include path for ROOT, and you might have to link against ROOT's libraries (we do so by means of `root-config --libs`, which outputs the necessary compiler flags).

This rule generates the `rootcling` dictionary for the headers `$(HEADERS)` and a library
containing the dictionary and the compiled `$(SOURCES)`:

{% highlight make %}
MyDict.cxx: $(HEADERS) Linkdef.h
[TAB]     rootcling -f $@ -c $(CXXFLAGS) -p $^
libMyLib.so: MyDict.cxx $(SOURCES)
[TAB]     g++ -shared -o$@ $(CXXFLAGS) -I$(ROOTSYS)/include $^ `root-config --ldflags --libs`
{% endhighlight %}


### Using CMake

For information on integrating ROOT into your CMake project, see [this page]({{ '/manual/integrate_root_into_my_cmake_project/' | relative_url }}).

ROOT also provides the `ROOT_GENERATE_DICTIONARY` `CMake` function to generate dictionaries as part of a `CMake` project build. It is a convenient wrapper on top of the `rootcling` command that we discussed above.

{% highlight cmake %}
ROOT_GENERATE_DICTIONARY( dictionary headerfiles ...
   LINKDEF linkdeffile
   [MODULE target]
   [DEPENDENCIES dep1 dep2 ...]
   [OPTIONS opt1 opt2 ...] )
{% endhighlight %}

Files named `${dictionary}.cxx` and `${dictionary}.pcm` are created from the provided headers and the `linkdef` file, calling the `rootcling` command. See [the following section](#selecting-dictionary-entries-linkdefh) for more details on the `linkdef` file.

The `MODULE` option is used to attach the dictionary to an existing `CMake` target: the dictionary will inherit the library and header dependencies of the specified `MODULE` target; `CMake` will also link the generated dictionary to the target.

Here is a complete example usage:

{% highlight cmake %}
add_executable(myapp myapp.cpp)
target_link_libraries(myapp ROOT::RIO)

# Attach dictionaries to the executable. First, tell it where to look for headers required by the dictionaries:
target_include_directories(myapp PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
# Then generate dictionaries and add them as a dependency of the executable (via the MODULE parameter):
ROOT_GENERATE_DICTIONARY(myapp_dict myapp.h MODULE myapp LINKDEF LinkDef.h)
{% endhighlight %}


## Selecting dictionary entries: Linkdef.h

A "linkdef file" selects which types will be described by a dictionary generated by `rootcling`.
The file name must end with `Linkdef.h, LinkDef.h`, or `linkdef.h`. For example, `My_Linkdef.h` is correct, `Linkdef_mine.h` is not.

Here is an example linkdef file:

{% highlight C++ %}
#ifdef __CLING__
#pragma link C++ nestedclasses;
#pragma link C++ nestedtypedefs;
#pragma link C++ class MyClass+;
#pragma link C++ namespace Some::Nested::Namespace;
#endif
{% endhighlight %}

The `rootcling` directives are in the form of `#pragma` statements.

The `nestedclasses` directive tells `rootcling` to also generate dictionaries for nested classes of selected outer classes, like in the following snippet:

{% highlight C++ %}
class Outer {
public:
  class Inner {
    // we want a dictionary for this one, too!
    ...
  };
};
{% endhighlight %}

The namespace directive instructs `rootcling` to include every type in the selected namespace in the dictionary.

> **Note**
>
> The `+` after the class name enables extra features and performance improvements in the I/O of the type. Remember to always add it to your linkdef directives.

> **Note**
>
> In the past, linkdef files also contained directives for global variables, functions and enums: these directives are ignored since ROOT version 6.

### Selection by file name

Sometimes it is desirable to create a dictionary for everything defined in a given header file.To that end, the following directive is available:

{% highlight C++ %}
#pragma link C++ defined_in "path/to/MyHeader.h";
{% endhighlight %}

Make sure that `path/to/MyHeader.h` corresponds to one of the header files that is passed to the `rootcling` invocation.


## Choosing between row-wise and columnar storage

ROOT data is very often stored inside {% include ref class="TTree" %} objects (which are in turn stored inside ROOT files, often manipulated via the {% include ref class="TFile" %} class), but it is also possible to store your custom types directly inside a TFile. To pick one or the other option, think of TFiles as directories and TTrees as databases or datasets: if you want to save a single object to a ROOT file, you can store it directly in the TFile (e.g. via TFile::WriteObjectAny); if you want to store several different values of a given type and later access all of those values as part of a single dataset/database, then it's probably better to use a TTree.

For more information on ROOT files, see [ROOT files]({{ '/manual/root_files' | relative_url }}).<br>
For more information on TTree, see [Trees]({{ '/manual/trees' | relative_url }}).


## The `ClassDef` macro

The `ClassDef` macro can be inserted in a class definition to add some reflection capabilities to it. It also attaches a "version number" to the class that can be used for [schema evolution]({{ '/manual/io/#dealing-with-changes-in-class-layouts-schema-evolution' | relative_url }}).

Having a `ClassDef` is mandatory for classes inheriting from `TObject`, otherwise it is an optional ROOT I/O performance optimization.

The syntax is:

{% highlight C++ %}
ClassDef(<ClassName>, <VersionNumber>)
{% endhighlight %}

The version number identifies this particular version of the class. A version number equal to 0 tells ROOT to not store the class in a root file, but only its base classes (if any).

`ClassDef` injects some methods in the class definition useful for runtime reflection.
Here are the most important ones:

- `static const char *Class_Name()`: returns the class name as a C-string
- `static TClass *Class()`: returns a [`TClass`](https://root.cern/doc/master/classTClass.html) instance that can be used to query information about the class
- `MAYBE_VIRTUAL TClass *IsA() const MAYBE_OVERRIDE`: same as `Class()`, but it returns the `TClass` corresponding to the concrete type in case of a pointer to a base
- `MAYBE_VIRTUAL void ShowMembers(TMemberInspector &insp) const MAYBE_OVERRIDE`: useful to query the list of members of a class at runtime (see [`TMemberInspector`](https://root.cern/doc/master/classTMemberInspector.html))

Use `ClassDefOverride` to include the `override` keyword in the appropriate injected methods.<br>
Use `ClassDefNV` to not mark any of the injected methods as `virtual`.

_**Example**_

{% highlight C++ %}
class MyClass {
   // Note that the initial version number should be greater than the number of previously, unnumbered (i.e. lacking a
   // explicit `ClassDef`) versions of the class. If unsure, `3` is typically a good compromise.
   ClassDef(MyClass, 3)
};
{% endhighlight %}

> _**Note**_
> The class version number _must_ be increased whenever the class layout changes, i.e. when
> the class data members are modified.

## Restrictions on types ROOT I/O can handle

For ROOT to be able to store a class, it must have a public default constructor or a special I/O constructor (see the documentation of [`TClass::New`](https://root.cern/doc/master/classTClass.html) for more details and examples).

ROOT currently does not support I/O of `std::shared_ptr`, `std::optional`, `std::variant` and classes with data members of these types (unless they are marked as "transient").

ROOT can store and retrieve data members of pointer type but not reference type.

Data members, and in particular pointer data members, _must_ be initialized by the class constructor used by ROOT I/O (most typically, the default constructor):

{% highlight C++ %}
class MyClass {
   std::string *fStr = nullptr;
   ...
};
{% endhighlight %}
