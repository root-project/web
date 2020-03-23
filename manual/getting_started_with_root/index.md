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
> → See [Download and Installation Guide]({{ '/download' | relative_url }}).
>
> In particular it is recommended to put the following command into the `.profile` or `.login`
> file in order to have the environment variables  properly defined at each login.
> ```
> source /path/to/install-or-build/dir/bin/thisroot.sh
> ```

## Starting and quitting a ROOT session

### Starting ROOT

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

To see a list of ROOT commands, type:

```
.help
```

A list of ROOT commands is displayed.

```
  Cling (C/C++ interpreter) meta commands usage
  All commands must be preceded by a '.', except
  for the evaluation statement { }
  ==============================================================================
  Syntax: .Command [arg0 arg1 ... argN]

   .L <filename>              - Load the given file or library

   .(x|X) <filename>[args]    - Same as .L and runs a function with
                                signature: ret_type filename(args)

   .> <filename>              - Redirect command to a given file
      '>' or '1>'             - Redirects the stdout stream only
      '2>'                    - Redirects the stderr stream only
      '&>' (or '2>&1')        - Redirects both stdout and stderr
      '>>'                    - Appends to the given file

   .undo [n]                  - Unloads the last 'n' inputs lines

   .U <filename>              - Unloads the given file

   .I [path]                  - Shows the include path. If a path is given -
                                adds the path to the include paths

   .O <level>                 - Sets the optimization level (0-3)
                                (not yet implemented)

   .class <name>              - Prints out class <name> in a CINT-like style

   .files                     - Prints out some CINT-like file statistics

   .fileEx                    - Prints out some file statistics

   .g                         - Prints out information about global variable
                               'name' - if no name is given, print them all

   .@                         - Cancels and ignores the multiline input

   .rawInput [0|1]            - Toggle wrapping and printing the
                                execution results of the input

   .dynamicExtensions [0|1]   - Toggles the use of the dynamic scopes and the
                                late binding

   .printDebug [0|1]          - Toggles the printing of input's corresponding
                                state changes

   .storeState <filename>     - Store the interpreter's state to a given file

   .compareState <filename>   - Compare the interpreter's state with the one
                                saved in a given file

   .stats [name]              - Show stats for internal data structures
                                'ast'  abstract syntax tree stats
                                'asttree [filter]'  abstract syntax tree layout
                                'decl' dump ast declarations
                                'undo' show undo stack

   .help                      - Shows this information

   .q                         - Exit the program


ROOT special commands.
==========================================================================
   .pwd                : show current directory, pad and style
   .ls                 : list contents of current directory
   .which [file]       : shows path of macro file
   .help Class         : opens the reference guide for that class
   .help Class::Member : opens the reference guide for function/member
```

### Starting ROOT with command line options

You can start ROOT with the following command line options:

`-b` <br>
ROOT session runs in batch mode, without graphics display. This mode is useful in case you do not want to set the DISPLAY.

`-n` <br>
Does not execute the logon script and logoff script as specified in `.rootrc`.

`-q` <br>
Exits after processing the command line macro files.

`-l` <br>
Do not show the ROOT banner.

`-a` <br>
Show the ROOT splash screen.

`-x` <br>
Exit on exception.

`dir` <br>
If `dir` is a valid directory, change to it (cd) before executing ROOT.

`-?` <br>
Print usage.

`-h` <br>
Print usage.

`--help` <br>
Print usage.

`-config` <br>
Print `./configure` options.

`-memstat` <br>
Run ROOT with memory usage monitoring.

### Quitting ROOT

Type at the ROOT prompt:
```
.q
```

## Using the interactive C++ interpreter Cling

ROOT uses the interactive C++ interpreter Cling that is built on top of the
**L**ow **L**evel **V**irtual **M**achine ([LLVM](https://llvm.org/){:target="_blank"}) and the [Clang libraries](https://clang.llvm.org/){:target="_blank"}.
Cling provides command line prompt and a just-in-time (JIT) compiler for compilation.

> **Note**
>
> When using the interactive interpreter Cling, unlike to pure C++ language, no semicolon
> (`;`) is required at the end of the line.

### Simple commands

You can use ROOT to execute simple commands on the ROOT prompt.
Every command typed at the ROOT prompt is stored in the `.root_hist` file in your home directory.

_**Examples**_

Simple operations:

{% highlight C++ %}
   root[0] 21+21
   (int) 42
{% endhighlight %}

{% highlight C++ %}
   root[1] sqrt(42)
   6.4807407
{% endhighlight %}

Relational operators:
{% highlight C++ %}
   root [2] 42 > 98
   false
{% endhighlight %}

Calling a function from a ROOT class like {% include ref class="TMath" %}.
{% highlight C++ %}
   root [3] Math::Pi()
   3.1415927
{% endhighlight %}

### Multi-line commands

You can use ROOT to execute multi-line commands on the ROOT prompt.

1.  To begin a multi-line command, type at the ROOT prompt: `{`

2.  Type one command per line.

3.  To end the multi-line command, type:`}`


_**Example**_

{% highlight C++ %}
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
{% endhighlight %}

## ROOT macros

A ROOT macro contains pure C++ code, which additionally can contain ROOT classes and other
ROOT objects (→ see [ROOT classes, data types and global variables]({{ '/manual/root_classes_data_types_and_global_variables' | relative_url }})). A ROOT macro can consist of simple or multi-line commands,
but also of arbitrarily complex class and function definitions.

ROOT provides a lot of tutorials that are available as ROOT macros (→ see [ROOT tutorials](#root-tutorials)).

You can save a ROOT macro in a file and execute it at the ROOT prompt or the system prompt.

### Creating a ROOT macro

The name of the ROOT macro and the file name (without file extension) in which the macro
is saved must match.

1. Create a new file in your preferred text editor.

2. Use the following general structure for the ROOT macro:

{% highlight C++ %}
      void MacroName() {
         ...

         your lines of C++ code
         code line ends with ;
         ...
      }
{% endhighlight %}

3.  Save the file ROOT macro, using the macro name as file name: **MacroName**.C

### Executing a ROOT macro

You can execute a ROOT macro:

  - at the system prompt,
  - at the ROOT prompt,
  - by loading it to a ROOT session.

- To execute a ROOT macro at the system prompt, type:

   ```
   root MacroName.C
   ```

   --or--

- To execute a ROOT macro at the ROOT prompt, type:

   ```
   .x MacroName.C`
   ```

   -- or --

- To load a ROOT macro to a ROOT session, type (at the ROOT prompt):

   ```
   .L MacroName.C
   MacroName()
   ```

> **Note**
>
> You can load multiple ROOT macros, as each ROOT macro has a unique name in the ROOT name space.

### Executing a ROOT macro from a ROOT macro

You can execute a RROT macro conditionally inside another ROOT macro.

- Call the interpreter [TROOT::ProcessLine()](https://root.cern/doc/master/classTROOT.html#a32fc66033a13d1415e0ad523994dd0e5){:target="_blank"}.

`ProcessLine()` takes a parameter, which is a pointer to an int or to a
`TInterpreter::EErrorCode` to let you access the interpreter error code after an attempt to interpret.
This contains the error as defined in enum `TInterpreter::EErrorCode` with `TInterpreter::kSuccess`
as being the value for a successful execution.

_**Example**_

The example `$ROOTSYS/tutorials/tree/cernstaff.C` calls a ROOT macro to build a ROOT file, if it does not exist.

{% highlight C++ %}
   void cernstaff() {
      if (gSystem->AccessPathName("cernstaff.root")) {
      gROOT->ProcessLine(".x cernbuild.C");
   }
{% endhighlight %}

### Executing a ROOT macro from the invocation of ROOT

You can pass a macro to ROOT in its invocation.

_**Example**_

The exact kind of quoting depends on the used shell. This example works for bash-like shells.

```
   $ root -l -b 'myCode.C("some String", 12)'
```

### Compiling ROOT macros with ACLiC

You can use ACLiC (*Compiling Your Code*) to compile your code and build a dictionary and a shared library from your ROOT macro. ACliC is implemented in [TSystem::CompileMacro()](https://root.cern.ch/doc/master/classTSystem.html).

When using ACliC, ROOT checks what library really needs to be build and calls your system's C++ compiler, linker and dictionary generator. Then ROOT loads a native shared library.

ACLiC executes the following steps:

1. Calling `rootcling` to create a dictionary.

2. Calling the the system's C++ compiler to build the shared library.

3. If there are errors, it calls the C++ compiler to build a dummy executable to clearly report the unresolved symbols.

ACLiC adds the classes and functions declared in included files with the same name as the
ROOT macro files with one of following extensions: `.h`, `.hh`, `.hpp`, `.hxx`,` .hPP`, `.hXX`.
This means that, by default, you cannot combine ROOT macros from different files into one
library by using `#include` statements; you will need to compile each ROOT macro separately.

#### Compiling a ROOT macro

Before you can compile your interpreted ROOT macro, you need to add the include statements for
the classes used in the ROOT macro. Only then you can build and load a shared library containing
your ROOT macro.

You can compile a ROOT macro with:

  - default optimizations

  - optimizations

  - debug symbols

Compilation ensures that the shared library is rebuilt.

> **Note**
>
> Do not call ACLiC with a ROOT macro that has a function called `main()`.

To compile a ROOT macro and build a shared library, type:

```
   root[] .L MyScript.C+
```

The `+` option compiles the code and generates a shared library. The name of the shared library is the filename
where the dot before the extension is replaced by an underscore. In addition, the shared library
extension is added.

_**Example**_

On most platforms, `hsimple.cxx` will generate `hsimple_cxx.so`.

The `+` command rebuilds the library only if the ROOT macro or any of the files it includes
are newer than the library.

When checking the timestamp, ACLiC generates a dependency file, which name is the same as
the library name, just replacing the `so` extension by the extension `d`.


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

#### Generating dictionaries

A dictionary ("reflection database") contains information about the types and functions that are available in a library.

With a dictionary you can call functions inside libraries. They are also needed to write a class into a ROOT file.

A dictionary consists of a source file, which contains the type information needed by Cling and ROOT's I/O subsystem. This source file needs to be generated from the library's headers and then compiled, linked and loaded. Only then does Cling and ROOT know what is inside a library.

There are two ways to generate a dictionary:

- using ACLiC

- using `rootcling`

**Using ACLiC to generate dictionaries**

With a given header file `MyHeader.h`, ACliC automatically generates a dictionary:

```
      root[] .L MyHeader.h+
```

**Using rootcling to generate dictionaries**

You can manually create a dictionary by using `rootcling`:

{% highlight C++ %}
   rootcling -f DictOutput.cxx -c OPTIONS Header1.h Header2.h ... Linkdef.h
{% endhighlight %}

- `DictOutput.cxx` specifies the output file that will contain the dictionary. It will be accompanied by a header file `DictOutput.h`.

- `OPTIONS` are:

	- `Isomething`: Adding an include path, so that `rootcling` can find the files included in `Header1.h`, `Header2.h`, etc.

    - `DSOMETHING`: Define a preprocessor macro, which is sometimes needed to parse the header files.

- `Header1.h Header2.h...`: The headers files.

- `Linkdef.h`: Tells `rootcling`, which classes should be added to the dictionary.

> **Note**
>
> Dictionaries that are used within the same project must have unique names.
>
> Compiled object files relative to dictionary source files cannot reside in the same library or in two libraries loaded by the same application if the original source files have the same name.

_**Example**_

In the first step, a `TEvent` and a `TTrack` class is defined. Next an event object is created to add tracks to it. The track objects have a pointer to their event. This shows that the I/O system correctly handles circular references.

In the second step, the `TEvent `and the `TTrack` call are implemented. After that you can use `rootcling` to generate the directory. This generates the `eventdict.cxx` file.

**The TEvent.h header**
{% highlight C++ %}
#ifndef __TEvent__
#define __TEvent__
#include "TObject.h"
class TCollection;
class TTrack;

class TEvent : public TObject {
private:
   Int_t fId; // Event sequential id
   Float_t fTotalMom; // Total momentum
   TCollection *fTracks; // Collection of tracks
public:
   TEvent() { fId = 0; fTracks = 0; }
   TEvent(Int_t id);
   ~TEvent();
   void AddTrack(TTrack *t);
   Int_t GetId() const { return fId; }
   Int_t GetNoTracks() const;
   void Print(Option_t *opt="");
   Float_t TotalMomentum();
   ClassDef(TEvent,1); //Simple event class
};
{% endhighlight %}

**The TTrack.h header**

{% highlight C++ %}
#ifndef __TTrack __
#define __TTrack__
#include "TObject.h"

class TEvent;
class TTrack : public TObject {
private:
   Int_t fId; //Track sequential id
   TEvent *fEvent; //tvent to which track belongs
   Float_t fPx; //x part of track momentum
   Float_t fPy; //y part of track momentum
   Float_t fPz; //z part of track momentum
public:
   TTrack() { fId = 0; fEvent = 0; fPx = fPy = fPz = 0; }
   TTrack(Int_t id, Event *ev, Float_t px,Float_t py,Float_t pz);
   Float_t Momentum() const;
   TEvent *GetEvent() const { return fEvent; }
   void Print(Option_t *opt="");
   ClassDef (TTrack,1); //Simple track class
};
{% endhighlight %}

**Implementation of TEvent and TTrack class**

{% highlight C++ %}
TEvent.cxx:
#include <iostream.h>
#include "TOrdCollection.h"
#include "TEvent.h"
#include "TTrack.h"
ClassImp(TEvent)
...

TTrack.cxx:
#include <iostream.h>
#include "TMath.h"
#include "Track.h"
#include "Event.h"
ClassImp(TTrack)
...
{% endhighlight %}

**Using rootcling to generate the dictionaries**

{% highlight C++ %}
rootcling eventdict.cxx -c TEvent.h TTrack.h
{% endhighlight %}

**eventdict.cxx - the generated dictionary**

{% highlight C++ %}
void TEvent::Streamer(TBuffer &R__b) {
   // Stream an object of class TEvent.
   if (R__b.IsReading()) {
      Version_t R__v = R__b.ReadVersion();
      TObject::(R__b);
      R__b >> fId;
      R__b >> fTotalMom;
      R__b >> fTracks;
   } else {
      R__b.WriteVersion(TEvent::IsA());
      TObject::Streamer(R__b);
      R__b << fId;
      R__b << fTotalMom;
      R__b << fTracks;
   }
}
{% endhighlight %}

#### Setting the include path

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


### Developing portable ROOT macros

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

#### Included header files

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
subTree object from the Cling command line will cause a fatal error.

In general, it is recommended to let `rootcling` see as many header files as possible.

## ROOT tutorials

A ROOT tutorial is a ROOT macro that demonstrates ROOT specific features.

There are tutorials for the following topics, among others:

  - Containers
  - Data Frames
  - Fast Fourier Transforms
  - Fitting histograms, graphs, etc.
  - FITS files interface
  - FOAM (multi-dimensional general-purpose Monte Carlo event generator)
  - Geometry
  - Graphics
  - Graphs
  - Graphical User Interface (GUI)
  - Histograms
  - HTTP interface
  - Images (using TImage class)
  - Input/Output
  - Mathematics, matrixes, etc
  - Monte Carlo simulations
  - Multicore (multithreading and multiprocessing)
  - Physics
  - PyRoot
  - Quadratic programming package
  - R
  - RooFit
  - RooStats (statistics)
  - SQL
  - Trees
  - UNURAN
  - Vectors
  - XML
  - and many more

When you install ROOT, a tutorials directory is created, containing all ROOT tutorials listed on [reference guide tutorial page](https://root.cern/doc/master/group__Tutorials.html).

> **Note**
>
> You need write permissions to the `tutorials` directory to execute the tutorials.

### Starting with hsimple.C

It is recommended to start with the `hsimple.C` macro first. It creates the ROOT file `hsimple.root`, which is used by many other macros.
`hsimple.root` contains four histograms `hpx`, `hpx;1`, `hpxpy;1`` and ``hprof;1`.

For detailed information on ROOT files, see → [Storing ROOT objects]({{ '/manual/storing_root_objects' | relative_url }}).

To execute the `hsimple.C` macro at the ROOT prompt, type:

```
root[0] .x hsimple.C
```

### Executing demos with demos.C

There are a lot of demos available in the `demos.C` macro.

To execute the `demos.C` macro at the ROOT prompt, type:

```
root[0] .x demos.C
```

A window is displayed. Here you can try out the different demos.

### Source code of ROOT tutorials

To check the source code of a ROOT macro, open it in your favorite text editor.

_**Example**_

`graph.C` tutorial from `$ROOTSYS/tutorials/graphs`

{% highlight C++ %}
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
{% endhighlight %}

## Regular expressions

You can use the following meta-characters in regular expressions:

`ˆ`: Start-of-line anchor.

`$`: End-of-line anchor.

`.`: Matches any character.

`[`: Start a character class.

`]`: End a character class.

`ˆ`: Negates character class if first character.

`*`: Kleene closure (matches 0 or more).

`+`: Positive closure (1 or more).

`?`: Optional closure (0 or 1).

When using wildcards, the regular expression is assumed to be preceded by a `ˆ` (BOL) and terminated by `$` (EOL).

All `*` (closures) are assumed to be preceded by a `.` , this is any character, except slash `/`. Its special treatment allows the easy matching of pathnames.

_**Example**_

`*.root` will match `aap.root`, but not `pipo/aap.root`

The escape characters are:

`\`: Backslash.

`b`: Backspace.

`f`: Form feed.

`n`: New line.

`r`: Carriage return.

`s`: Space.

`t`: Tab.

`e`: ASCII ESC character ('033').

`DDD`: number formed of 1-3 octal digits.

`xDD`: number formed of 1-2 hex digits.

`ˆC`: C = any letter. Control code.

You can use the {% include ref class="TRegexp" %} class to create a regular expression from an input string. If the wildcard is true, then the input string contains a wildcard expression.

_**Example**_

```
   TRegexp(const char *re, Bool_t wildcard)
```

Regular expression and wildcards can be easily used in methods like:

`Ssiz_t Index(const TString& string,Ssiz_t* len,Ssiz_t i) const`

The method finds the first occurrence of the regular expression in the string and returns its position.

## Using Cling commands to control ROOT

You can pass commands directly to ROOT by placing a dot before the command.

   Type at the ROOT prompt:
```
   .<command>
```

`.q`: Quits ROOT.

`.?`: Provides a list of all commands.

`.!<OS_command>`: Accesses the shell of the operating system. For example `.!ls` or `.!pwd`.

`.x <file_name>`: Executes a ROOT macro.

`.U <file_name>`: Unloads a file.

`.L <file_name>`: Loads a ROOT macro or library.

`.L <file_name>+`: Compiles a ROOT macro.

`.help`: Provides a list of all commands.

`.class`: Lists the available ROOT classes.

`.class X`: Shows what cling knows about class `X`.

`.files`: Shows all loaded files.

`.include`: Shows the include paths.

`.I path`: Adds an include path.

`.printAST`: Shows the abstract syntax tree after each processed entity.
