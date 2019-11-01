---
title: Getting started with ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

> **Note**
>
> Before using ROOT, it must be installed successfully and all environment variables must be set.
> → See [Installation Guide]({{ '/Resources/Building_ROOT' | relative_url }}).

## Starting and quitting a ROOT session

**Starting ROOT**

You start ROOT at the system prompt.

Type at the system prompt:
```
$ root
```

The ROOT prompt is displayed.

```
   ------------------------------------------------------------------
  | Welcome to ROOT 6.20/00                        https://root.cern |
  | (c) 1995-2019, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for macosx64 on Oct 30 2019, 08:24:09                      |
  | From heads/master@v6-19-01-1850-gab67fd5a5d                      |
  | Try '.help', '.demo', '.license', '.credits', '.quit'/'.q'       |
   ------------------------------------------------------------------

root [0]
```

**Starting ROOT with command line options**

You can start ROOT with the following command line options:

`-b`  
ROOT session runs in batch mode, without graphics display. This mode is useful in case you do not want to set the DISPLAY.

`-n`  
Does not execute the logon script and logoff script as specified in .rootrc.

`-q`  
Exits after processing the command line macro files.

`-l`  
Does not show the splash screen.

`-x`  
Exit on exception.

`dir`  
If dir is a valid directory, change to it (cd) before executing ROOT.

`-?`  
Print usage.

`-h`  
Print usage.

`--help`  
Print usage.

`-config`  
Print ./configure options.

`-memstat`  
Run ROOT with memory usage monitoring.

**Quitting ROOT**

Type at the ROOT prompt:  
```
.q
```

## Using the interactive C++ interpreter Cling

ROOT uses the interactive C++ interpreter Cling that is built on top of the
**L**ow **L**evel **V**irtual **M**achine ([LLVM](https://llvm.org/)) and the [Clang libraries](https://clang.llvm.org/).  
Cling provides command line prompt and a just-in-time (JIT) compiler for compilation.

> **Note**
>
> When using the interactive interpreter Cling, unlike to pure C++ language, no semicolon (;) is required at the end of the line.

### Simple commands

You can use ROOT to execute simple commands on the ROOT prompt.
Every command typed at the ROOT prompt is stored in the `.root_hist` file in your home directory.

**Examples**

Simple operations:
```
   root[0] 21+21
   (int) 42
```
```
   root[1] sqrt(42)
   6.4807407
```
Relational operators:
```
   root [2] 42 > 98
   false
```

Calling a function from a ROOT class like [TMath](https://root.cern/doc/master/namespaceTMath.html).
```
   root [3] Math::Pi()
   3.1415927
```

### Multi-line commands

You can use ROOT to execute multi-line commands on the ROOT prompt.

1.  Type at the ROOT prompt:  
   	`{`  
    to begin a multi-line command.

2.  Type one command per line.

3.  Type:  
    `}`  
    to end the multi-line command.

**Example**

```
   root [0] {
   root [1] Int_t j = 0;
   root [2] for (Int_t i = 0; i < 3; i++)
   root [3] {
   root [4] j= j + i;
   root [5] cout << "i = " << i << ", j = " << j << endl;
   root [6] }
   root [7] }
   i = 0, j = 0
   i = 1, j = 1
   i = 2, j = 3
```
### ROOT macros

A ROOT macro contains pure C++ code, which additionally can contain ROOT classes and other
ROOT objects (→ see *ROOT classes*). A ROOT macro can consist of simple or multi-line commands,
but also of arbitrarily complex class and function definitions.

ROOT provides a lot of tutorials that are available as ROOT macros
(→ see [ROOT tutorials]({{ '/Manual/getting_started_with_root/root_tutorials' | relative_url }}))

You can save a ROOT macro in a file and execute it at the ROOT prompt or the system prompt.

#### Creating a ROOT macro

The name of the ROOT macro and the file name (without file extension) in which the macro
is saved must match.

1. Create a new file in your preferred text editor.

2. Use the following general structure for the ROOT macro:

   ```
      void MacroName() {
         ...

         your lines of C++ code
         code line ends with ;
         ...
      }
   ```

3.  Save the file ROOT macro, using the macro name as file name: **MacroName**.C

#### Executing a ROOT macro

You can execute a ROOT macro:

  - at the system prompt,
  - at the ROOT prompt,
  - by loading it to a ROOT session.

1.  To execute a ROOT macro at the system prompt, type:

   ```
   root MacroName.C
   ```
   
-- or --

1.  To execute a ROOT macro at the ROOT prompt, type:

   ```
   .x MacroName.C`
   ```
-- or --

1.  To load a ROOT macro to a ROOT session, type (at the ROOT prompt):

   ```
   .L MacroName.C
   MacroName()
   ```

> **Note**
>
> You can load multiple ROOT macros, as each ROOT macro has a unique name in the ROOT name space.

#### Executing a ROOT macro from a ROOT macro

You can execute a RROT macro conditionally inside another ROOT macro.

Call the interpreter [TROOT::ProcessLine()](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5).

`ProcessLine()` takes a parameter, which is a pointer to an int or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
This contains the error as defined in enum `TInterpreter::EErrorCode` with `TInterpreter::kSuccess`
as being the value for a successful execution.

**Example**

The example `$ROOTSYS/tutorials/tree/cernstaff.C` calls a macro to build a ROOT file, if it does not exist.

```
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
      gROOT->ProcessLine(".x cernbuild.C");
   }
```
#### Executing a ROOT macro from the invocation of ROOT

You can pass a macro to ROOT in its invocation.

** Example **

```
   $ root -l -b 'myCode.C("some String", 12)'
```

The exact kind of quoting depends on the used shell. This example works for bash-like shells.

#### Compiling a ROOT macro with ACLiC into libraries

You can compile, link and dynamically load a macro using the C++ compiler and linker.

Using the compiler allows using language constructs that are not fully supported by Cling.

ACLiC (*Compiling Your Code*) will build a dictionary and a shared library from your C++ macro,
using the compiler and the compiler options that were used to compile the ROOT executable.

You do not have to write a Makefile remembering the correct compiler options, and you do not
have to exit ROOT.

**Building a shared library**

Before you can compile your interpreted macro, you need to add the include statements for
the classes used in the macro. Only then you can build and load a shared library containing
your macro.

To build a shared library from a ROOT macro, type:

```
   root[] .L MyScript.C+
```

The `+` option generates a shared library. The name of the shared library is the filename
where the dot before the extension is replaced by an underscore and the shared library
extension is added.

**Example**
 
On most platforms, `hsimple.cxx` will generate `hsimple_cxx.so`.

The `+` command rebuilds the library only if the ROOT macro or any of the files it includes
are newer than the library.

When checking the timestamp, ACLiC generates a dependency file, which name is the same as
the library name, just replacing the 'so' extension by the extension '`d`'.

**Example**

On most platforms, `hsimple.cxx ` will generate `hsimple_cxx.d`.

**Setting the include path**

The `$ROOTSYS/include` directory is automatically appended to the include path.

To get the include path, type:

```
   root[] .include
```

To append the include path, type:
```
   root[] .include $HOME/mypackage/include
```

Append the following line in the ROOT macro to include the include path:

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

**Generating dictionaries**

You can define what is added to the dictionary generated by ACLiC.

Add the following line and the end of the ROOT macro:

```
      #if defined(__ROOTCLING__)
      #pragma link C++ class MyOtherClass;
      #endif
```

**Compiling a ROOT macro**

You can compile a ROOT macro with:

  - default optimizations

  - optimizations

  - debug symbols

Compilation ensures that the shared library is rebuilt.

> **Note**
>
> Do not call ACLiC with a ROOT macro that has a function called `main()`.

To compile a ROOT macro with default optimizations, type:

```
      root[] .L MyScript.C++g
```

To compile a ROOT macro with optimizations, type:
```
      root[] .L MyScript.C++O
```

To compile a ROOT macro with debug symbols, type:

```
      root[] .L MyScript.C++
```

ACLiC executes the following steps:

  1. Calling `rootcling` to create a dictionary.

  2. Calling the compiler to build the shared library from the ROOT macro.

  3. If there are errors, it calls the compiler to build a dummy executable to clearly
     report the unresolved symbols.

ACLiC adds the classes and functions declared in included files with the same name as the
ROOT macro files with one of following extensions: `.h`, `.hh`, `.hpp`, `.hxx`,` .hPP`, `.hXX`.
This means that, by default, you cannot combine ROOT macros from different files into one
library by using `#include` statements; you will need to compile each ROOT macro separately.

#### Developing portable ROOT macros

Portable ROOT macros run both with the Cling interpreter and ACLiC (*Compiling Your Code*).

Therefore, it recommended not to use the Cling extensions and program around the Cling limitations.

If it is not possible to program around the Cling limitations, use the C preprocessor symbols
defined for Cling and `rootcling`:

  - `__CLING__` is defined for both ROOT and `rootcling`.

  - `__ROOTCLING__` (and `__MAKECINT__` for backward compatibility) is only defined in rootcling.

Use `!defined(__CLING__) || defined(__ROOTCLING__)` to bracket code that needs to be seen by
the compiler and `rootcling`, but will be invisible to the interpreter.

-- or ­--

Use `!defined(__CLING__)` to bracket code that should be seen only by the compiler and not by Cling nor `rootcling`.

**Example**

Hiding the declaration and initialization of the array `gArray `from both Cling and `rootcling`:

```
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #endif
```

Cling and `rootcling` will ignore all statements between the `#if !defined (__CLING__)`
and `#endif`. Because ACLiC calls `rootcling` to build a dictionary, the declaration of
`gArray` will not be included in the dictionary, and consequently, `gArray` will not be
available at the command line even if ACLiC is used.

if you want use the ROOT macro in the interpreter, you have to bracket the usage of `gArray`
between the `#if`'s, since the definition is not visible.

```
   #if !defined(__CLING__)
   int gArray[] = { 2, 3, 4};
   #elif defined(__ROOTCLING__)
   int gArray[];
   #endif
```

`gArray` will be visible to `rootcling`, but still not visible to Cling. If you use ACLiC,
`gArray` will be available at the command line.

**Included header files**

It is recommended to write ROOT macros with the needed include statements, even a few header
files are not handled correctly by Cling.

You can include following types of headers in the interpreted and compiled mode:

  - The subset of standard C/C++ headers defined in `$ROOTSYS/Cling/include`.

  - Headers of classes defined in a previously loaded library (including ROOT own). The
  defined class must have a name known to ROOT (i.e. a class with a `ClassDef`).

Hiding header files from `rootcling` that are necessary for the compiler but optional for
the interpreter can lead to a fatal error.

**Example**

```
   #ifndef __CLING__
   #include "TTree.h"
   #else
   class TTree;
   #endif
   class subTree : public TTree {
   };
```

In this case, `rootcling` does not have enough information about the
[TTree](https://root.cern/doc/master/classTTree.html) class to produce the correct
dictionary file.

If you try this, `rootcling` and compiling will be error free. However, instantiating a
subTree object from the Cling command line will cause a fatal error.

In general, it is recommended to let `rootcling` see as many header files as possible.

### ROOT tutorials

A ROOT tutorial is a ROOT macro that demonstrates ROOT specific features.

There are tutorials for the following topics, among others:

  - Containers
  - Data Frames
  - Fast Fourier Transforms
  - Fitting histograms, graphs, etc.
  - FITS files interface
  - FOAM (multi-dimensional general-purpose Monte Carlo event generator)
  - Geometry
  - OpenGL
  - Graphics
  - Graphs
  - GUI
  - Histograms
  - HTTP interface
  - Images (using TImage class)
  - Input/Output
  - Mathematics, matrixes, etc
  - Monte Carlo simulations
  - Multicore (multithreading and multiprocessing)
  - Physics
  - PROFF
  - PyRoot
  - Quadratic programming package
  - R
  - RooFit
  - RooStats (statistics)
  - SQL
  - Trees
  - UNURAN
  - ROOT 7
  - Vectors
  - XML
  - and many more

When you install ROOT, a tutorials directory is created, containing all ROOT tutorials listed on
[https://root.cern/doc/master/group__Tutorials.html](https://root.cern/doc/master/group__Tutorials.html).

> **Note**
>
> You need write permissions to the `tutorials` directory to execute the tutorials.

**Starting with hsimple.C**

It is recommended to start with the `hsimple.C` macro first. It creates a `hsimple.root`
file, which is used by many other macros.

To execute the `hsimple.C` macro at the ROOT prompt, type:

```
root[0] .x hsimple.C
```

**Executing demos with demos.C**

There are a lot of demos available in the `demos.C` macro.

To execute the `demos.C` macro at the ROOT prompt, type:

```
root[0] .x demos.C
```

A window is displayed. Here you can try out different demos.

**Source code of ROOT tutorials**

To check the source code of a ROOT macro, open it in your favorite text editor.

**Example**

`graph.C` tutorial from `$ROOTSYS/tutorials/graphs`

```
   void graph() {
      TCanvas *c1 = new TCanvas("c1","A Simple Graph Example",200,10,700,500);
      c1->SetGrid();
      const Int_t n = 20;
      Double_t x[n], y[n];

      for (Int_t i=0;i<n;i++) {
         x[i] = i*0.1;
         y[i] = 10*sin(x[i]+0.2);
         printf(" i %i %f %f \n",i,x[i],y[i]);
      }

      TGraph *gr = new TGraph(n,x,y);
      gr->SetLineColor(2);
      gr->SetLineWidth(4);
      gr->SetMarkerColor(4);
      gr->SetMarkerStyle(21);
      gr->SetTitle("a simple graph");
      gr->GetXaxis()->SetTitle("X title");
      gr->GetYaxis()->SetTitle("Y title\");
      gr->Draw("ACP");

      // TCanvas::Update() draws the frame, after which one can change it
      c1->Update();
      c1->GetFrame()->SetBorderSize(12);
      c1->Modified();
   }
```

### Regular expressions

You can use the following meta-characters in regular expressions:

`ˆ`  
start-of-line anchor

`$`  
end-of-line anchor

`.`  
matches any character

`[`  
start a character class

`]`  
end a character class

`ˆ`  
negates character class if first character

`*`  
Kleene closure (matches 0 or more)

`+`  
Positive closure (1 or more)

`?`  
Optional closure (0 or 1)

When using wildcards, the regular expression is assumed to be preceded by a `ˆ `(BOL) and terminated by `$` (EOL).

All `*` (closures) are assumed to be preceded by a `.` , i.e. any character, except slash `/`. Its special treatment allows the easy matching of pathnames.

**Example**

`*.root` will match `aap.root`, but not `pipo/aap.root`

The escape characters are:

`\`  
backslash

`b`  
backspace

`f`  
form feed

`n`  
new line

`r`  
carriage return

`s`  
space

`t`  
tab

`e`  
ASCII ESC character ('033')

`DDD`  
number formed of 1-3 octal digits

`xDD`  
number formed of 1-2 hex digits

`ˆC`  
C = any letter. Control code

You can use the [TRegexp](https://root.cern/doc/master/classTRegexp.html) class to create a regular expression from an input string. If wildcard is true then the input string contains a wildcard expression.

**Example**

```
   TRegexp(const char *re, Bool_t wildcard)
```

Regular expression and wildcards can be easily used in methods like:

`Ssiz_t Index(const TString& string,Ssiz_t* len,Ssiz_t i) const`

The method finds the first occurrence of the regular expression in the string and returns its position.


## Using Cling commands to control ROOT

You can pass commands directly to ROOT by placing a dot before the command.

1.  Type at the ROOT prompt: 
```
   .<command>
``` 

`.q`   
Quit ROOT.

`.?`  
Provides a list of all commands.

`.!<OS_command>`  
Access the shell of the operating system. For example .!ls or .!pwd.

`.x <file_name>`  
Execute a macro.

`.L <file_name>`  
Load a macro or library.

`.L <file_name>+`  
Compile a macro.

`.help`  
Provides a list of all commands.

`.class`  
List the available ROOT classes.