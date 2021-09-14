---
title: "ROOT macros and shared libraries"
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


A ROOT macro contains pure C++ code, which additionally can contain ROOT classes and other
ROOT objects (→ see [ROOT classes, data types and global variables]({{ '/manual/root_architecture_and_components' | relative_url }})). A ROOT macro can consist of simple or multi-line commands, but also of arbitrarily complex class and function definitions.

You can save a ROOT macro in a file and execute it at the ROOT prompt or the system prompt (→ see [Creating ROOT macros](#creating-root-macros)).

You also can compile a ROOT macro with ACLiC (→ see [Compiling ROOT macros with ACLiC](#compiling-root-macros-with-aclic)).

ROOT provides many tutorials that are available as ROOT macros (→ see [ROOT tutorial page](https://root.cern/doc/master/group__Tutorials.html)).


## Creating ROOT macros

The name of the ROOT macro and the file name (without file extension) in which the macro is saved must match.

1. Create a new file in your preferred text editor.

2. Use the following general structure for the ROOT macro, preferably with a function that has the same name as the file:

{% highlight C++ %}
      void MacroName() {
         ...

         your lines of C++ code
         code line ends with ;
         ...
      }
{% endhighlight %}

3. Save the file ROOT macro, using the macro name as file name: **MacroName**.C

### Executing ROOT macros

You can execute a ROOT macro in one of three ways:


1. Execute a ROOT macro at the system prompt:

   ```
   $ root MacroName.C
   ```

2. Execute a macro at the ROOT prompt:

   ```
   root [0] .x MacroName.C
   ```

3. Load a macro from within a ROOT session and then call the function:

   ```
   root [0] .L MacroName.C
   root [1] MacroName()
   ```

   > **Note**
   >
   > You can load multiple ROOT macros, as each ROOT macro has a unique name in the ROOT namespace.

It is also possible to pass parameters directly to the macro function:
```
$ root 'MacroName.C("some String", 12)'
```

In addition, you can execute a ROOT macro from a ROOT macro.

 - [execute a ROOT macro from the invocation of ROOT](#executing-a-root-macro-from-the-invocation-of-root)

<p><a name="executing-a-ROOT-macro-from-a ROOT-macro"></a></p>
**Executing a ROOT macro from a ROOT macro**

You can execute a ROOT macro conditionally inside another ROOT macro.

- Call the interpreter [TROOT::ProcessLine()](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5){:target="_blank"}.

`ProcessLine()` takes a parameter, which is a pointer to an `int` or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
This contains the error as defined in enum `TInterpreter::EErrorCode` with `TInterpreter::kSuccess`
as being the value for a successful execution.

_**Example**_

The example {% include tutorial name="cernstaff" %} calls a ROOT macro to build a ROOT file, if it does not exist.

{% highlight C++ %}
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
      gROOT->ProcessLine(".x cernbuild.C");
   }
{% endhighlight %}


## Compiling ROOT macros with ACLiC

ROOT macros are by default just-in-time compiled with Cling based on the Clang compiler. Alternatively, you can use ACLiC to compile your macro from within a ROOT session to a shard library using the system compiler such as gcc.

ACLiC is implemented in [TSystem::CompileMacro()](https://root.cern/doc/master/classTSystem.html#ac557d8f24d067a9b89d2b8fb261d7e18). When using ACLiC, ROOT checks what library really needs to be build and calls your system's C++ compiler, linker and dictionary generator.

ACLiC executes the following steps:

1. Calling `rootcling` to create automatically a dictionary.
<br/>For creating a dictionary manually, → see [Using rootcling to generate dictionaries manually]({{ '/manual/root_io/#using-rootcling-to-generate-dictionaries-manually' | relative_url }}).

2. Calling the system's C++ compiler to build the shared library.

3. Load the shared library and optionally execute the macro.

ACLiC adds the classes and functions declared in included files with the same name as the
ROOT macro files with one of following extensions: `.h`, `.hh`, `.hpp`, `.hxx`,` .hPP`, `.hXX`.
This means that, by default, you cannot combine ROOT macros from different files into one
library by using `#include` statements; you will need to compile each ROOT macro separately.

### Compiling a ROOT macro with ACLiC

Before you can compile your interpreted ROOT macro, you need to add the include statements for
the classes used in the ROOT macro. Only then you can build and load a shared library containing your ROOT macro.

You can compile a ROOT macro with:

  - default optimizations

  - different optimizations

  - debug symbols

Compilation ensures that the shared library is rebuilt.

> **Note**
>
> Do not call ACLiC with a ROOT macro that has a function called `main()`.

To compile a ROOT macro and build a shared library, type:

```
root [0] .L MyScript.C+
```

The `+` option compiles the code and generates a shared library. The name of the shared library is the filename
where the dot before the extension is replaced by an underscore. In addition, the shared library
extension is added.

_**Example**_

On most platforms, `hsimple.cxx` will generate `hsimple_cxx.so`.

The `+` command rebuilds the library only if the ROOT macro or any of the files it includes
are newer than the library. To force recompiling the library in any case, use `++`:

```
root [0] .L MyScript.C++
```

By default, the library will be built with the same optimizations as your ROOT libraries.

To force compilation with optimizations, type:

```
root [0] .L MyScript.C+O
```

To force compilation with debug symbols, type:

```
root [0] .L MyScript.C+g
```

### Setting the include path

The `$ROOTSYS/include` directory is automatically appended to the include path.

To get the include path, type:

```
root [0] .include
```

To append the include path, type:

```
root [0] .include $HOME/mypackage/include
```

Add the following line in the ROOT macro to append a new path to the existing include paths:

```
gSystem->AddIncludePath(" -I$HOME/mypackage/include")
```

To overwrite an existing include path, type:

```
gSystem->SetIncludePath(" -I$HOME/mypackage/include")
```

To add a static library that should be used during linking, type:

```
gSystem->AddLinkedLibs("-L/my/path -l*anylib*");
```

For adding a shared library, you can load it before you compile the ROOT macros, by

```
gSystem->Load("mydir/mylib");
```


## Developing portable ROOT macros

Portable ROOT macros run both with the Cling interpreter and ACLiC (*Compiling Your Code*).

Therefore, it is recommended not to use the Cling extensions and program around the Cling limitations.

If it is not possible to program around the Cling limitations, use the C preprocessor symbols
defined for Cling and `rootcling`:

- `__CLING__` is defined for both ROOT and `rootcling`.

- `__ROOTCLING__` (and `__MAKECINT__` for backward compatibility) is only defined in rootcling.

Use `!defined(__CLING__) || defined(__ROOTCLING__)` to bracket code that needs to be seen by
the compiler and `rootcling`, but will be invisible to the interpreter.

-- or ­--

Use `!defined(__CLING__)` to bracket code that should be seen only by the compiler and not by Cling nor `rootcling`.

_**Example**_

Hiding the declaration and initialization of the array `gArray` from both Cling and `rootcling`:

{% highlight C++ %}
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #endif
{% endhighlight %}

Cling and `rootcling` will ignore all statements between the `#if !defined (__CLING__)`
and `#endif`. Because ACLiC calls `rootcling` to build a dictionary, the declaration of
`gArray` will not be included in the dictionary, and consequently, `gArray` will not be
available at the command line even if ACLiC is used.

If you want use the ROOT macro in the interpreter, you have to bracket the usage of `gArray`
between the `#if`'s, since the definition is not visible.

{% highlight C++ %}
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #elif defined(__ROOTCLING__)
   int gArray[];
   #endif
{% endhighlight %}

`gArray` will be visible to `rootcling`, but still not visible to Cling. If you use ACLiC, `gArray` will be available at the command line.

### Included header files

It is recommended to write ROOT macros with all the needed include statements. Only a few header files are not handled correctly by Cling.

You can include following types of headers in the interpreted and compiled mode:

- The subset of standard C/C++ headers defined in `$ROOTSYS/Cling/include`.

- Headers of classes defined in a previously loaded library (including ROOT own library). The defined class must have a name known to ROOT (this is a class with a `ClassDef`).

Hiding header files from `rootcling` that are necessary for the compiler but optional for the interpreter can lead to a fatal error.

_**Example**_

{% highlight C++ %}
   #ifndef __CLING__
   #include "TTree.h"
   #else
   class TTree;
   #endif
   class subTree : public TTree {
   };
{% endhighlight %}

In this case, `rootcling` does not have enough information about the {% include ref class="TTree" %} class to produce the correct
dictionary file.

If you try this, `rootcling` and compiling will be error free. However, instantiating a
`subTree` object from the Cling command line will cause a fatal error.

In general, it is recommended to let `rootcling` see as many header files as possible.
