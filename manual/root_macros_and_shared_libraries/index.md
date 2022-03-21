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

> **Note**
>
> It's not necessary to `#include` anything in the ROOT macros.
> Everything in the include paths is automatically included.
> Note that you can type `.I` in the ROOT prompt to see the include paths, and `.I [path]` to add an extra path.

### Executing ROOT macros

You can execute a ROOT macro in one of three ways:


1. Execute a ROOT macro at the system prompt:

   ```
   $ root MacroName.C
   ```
   
   > **Note**
   >
   > By adding further space-separated file names to the line above, you can sequentially execute multiple
   > macros in the same ROOT session, as long as they don't share the same name.

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
   > You can load multiple macros in the same ROOT session (one .L statement for each),
   > as long as they don't have the same name.

It is also possible to pass parameters directly to the macro function:
```
$ root 'MacroName.C("some String", 12)'
```

The same structure applies when executing from the ROOT prompt, but single quotes are no longer necessary:
```
root [0] .x MacroName.C("some String", 12)
```
If you preload the library, specify the function arguments on the call to the macro name,
rather than on the first line.

```
root [0] .L MacroName.C
root [1] MacroName("some String", 12)
```

In addition, you can execute a ROOT macro from a ROOT macro.

<p><a name="executing-a-ROOT-macro-from-a ROOT-macro"></a></p>
**Executing a ROOT macro from a ROOT macro**

You can execute a ROOT macro conditionally inside another ROOT macro by calling directly the interpreter using
[TROOT::ProcessLine()](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5){:target="_blank"}.

`ProcessLine()` takes in addition to the code to be executed an optional parameter, which is a pointer to an `int` or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
It returns the return value of the called macro casted to a `Longptr_t`.

_**Example**_

The example {% include tutorial name="cernstaff" %} calls another macro `cernbuild.C` to build a ROOT file, if it does not exist.
The function in the `cernbuild.C` macro returns an error code that we get as the return value from `ProcessLine()`.

{% highlight C++ %}
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
         int errorCode = gROOT->ProcessLine(".x cernbuild.C");
      }
   }
{% endhighlight %}


## Compiling ROOT macros with ACLiC

ROOT macros are by default just-in-time compiled with Cling, ROOT's C++ interpreter. Alternatively, you can use ACLiC to compile your macro to a shared library from within a ROOT session. Using ACLiC, the code is compiled with the system compiler rather than Cling. This has the following advantages:

- full compiler optimizations can be enabled
- code can be compiled with debug symbols
- compiled code is cached across ROOT sessions
- dictionaries for C++ classes in the compiled code are automatically generated (see also [Storing data with ROOT]({{ 'manual/io_custom_classes' | relative_url }}))

ACLiC is implemented in [TSystem::CompileMacro()](https://root.cern/doc/master/classTSystem.html#ac557d8f24d067a9b89d2b8fb261d7e18). When using ACLiC, ROOT checks what library really needs to be built and calls your system's C++ compiler, linker and dictionary generator.

ACLiC executes the following steps:

1. Calling `rootcling` to create automatically a dictionary.
<br/>For what a dictionary is used for, → see [I/O of custom classes]({{ '/manual/io_custom_classes' | relative_url }}).

2. Calling the system's C++ compiler to build the shared library.

3. Load the shared library and optionally execute the macro.

Before you can compile your interpreted ROOT macro, you need to add the include statements for
the classes used in the ROOT macro. Only then you can build and load a shared library containing your ROOT macro.

You can tweak for instance the compilation's optimization and debug symbols; see the documentation of [TSystem::CompileMacro()](https://root.cern/doc/master/classTSystem.html#ac557d8f24d067a9b89d2b8fb261d7e18).

_**Example**_

To compile a ROOT macro and build a shared library, type:

```
root [0] .L MyScript.C+
```

The `+` option compiles the code and generates a shared library `MyScript_C.so` (`MyScript_C.dll` on Windows).
The `+` command rebuilds the library only if the ROOT macro or any of the files it includes
are newer than the library. To force a recompilation of the library, use `++`.

You can also compile, build and run with arguments in a one-liner using:

```
root [0] .x MyScript.C+("some String", 12)
```
or from the command line (outside the ROOT prompt):
```
$ root 'MyScript.C+("some String", 12)'
```
And variations thereof with `++`. 


_**Example**_

To force compilation with debug symbols, type:

```
root [0] .L MyScript.C+g
```

To see the full list of possible flags, see the [TSystem::CompileMacro](https://root.cern/doc/master/classTSystem.html#ac557d8f24d067a9b89d2b8fb261d7e18) documentation.

> **Note**
>
> When a ROOT macro has a function called `main()` your can compile the macro with ACLiC or the Cling ROOT interpreter, but you cannot execute the `main()` function from within the ROOT session.

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

{% highlight C++ %}
gSystem->AddIncludePath(" -I$HOME/mypackage/include")
{% endhighlight %}

To overwrite an existing include path, type:

{% highlight C++ %}
gSystem->SetIncludePath(" -I$HOME/mypackage/include")
{% endhighlight %}

To add any static or shared library that should be used during linking, type:

{% highlight C++ %}
gSystem->AddLinkedLibs("-L/my/path -l*anylib*");
{% endhighlight %}

If the library is a shared library, you can also load it before compiling the macro:

{% highlight C++ %}
gSystem->Load("mydir/mylib");
{% endhighlight %}
