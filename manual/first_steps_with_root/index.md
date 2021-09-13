---
title: First steps with ROOT
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

> **Note**
>
> Before you can use ROOT, it must be successfully installed and all environment variables must be set.
> → See [Installation Guide]({{ '/install' | relative_url }}).
>
> In particular, it is recommended to add the following command to the `.profile` or `.login`
> file so that the environment variables are properly defined at each login.
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
  | Welcome to ROOT 6.22/02                        https://root.cern |
  | (c) 1995-2020, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for macosx64 on Aug 17 2020, 12:46:52                      |
  | From tags/v6-22-02@v6-22-02                                      |
  | Try '.help', '.demo', '.license', '.credits', '.quit'/'.q'       |
   ------------------------------------------------------------------

root [0]
```

To display a list of ROOT commands, type:

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

> **ROOT command line tools**
>
> ROOT also provides many command line tools at the system prompt for simple file operations or automating common operations performed on ROOT classes. → See [ROOT command line tools]({{ '/manual/storing_root_objects/#root-command-line-tools' | relative_url }})

You can start ROOT with the following command line options:

`-b`: ROOT session runs in batch mode, without graphics display. This mode is useful in case you do not want to set the DISPLAY.

`-n`: Does not execute the logon script and logoff script as specified in `.rootrc`.

`-q`: Exits after processing the command line macro files.

`-l`: Does not show the ROOT banner.

`-a`: Displays the ROOT splash screen.

`-x`: Exits on exception.

`dir`: If `dir` is a valid directory, change to it (`cd`) before executing ROOT.

`-?`, `-h`, `--help`: Prints usage.

`-config`: Prints the `cmake` configure options.


### Quitting ROOT

Type at the ROOT prompt:
```
.q
```

## Using the interactive C++ interpreter Cling

ROOT uses the interactive C++ interpreter Cling that is built on top of the
**L**ow **L**evel **V**irtual **M**achine ([LLVM](https://llvm.org/){:target="_blank"}) and the [Clang libraries](https://clang.llvm.org/){:target="_blank"}.
Cling provides a command line prompt and a just-in-time (JIT) compiler for compilation.<br/>
For more information on Cling, → see [Cling]({{ '/cling' | relative_url }}).

> **Note**
>
> When using the interactive interpreter Cling, unlike to pure C++ language, no semicolon
> (`;`) is required at the end of the line.

### Simple commands

You can use ROOT to execute simple commands at the ROOT prompt.
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

Calling a function from a ROOT class like `TMath::Pi`:
{% highlight C++ %}
   root [3] Math::Pi()
   3.1415927
{% endhighlight %}

### Multi-line commands

You can use ROOT to execute multi-line commands at the ROOT prompt.

1.  To start a multi-line command, type at the ROOT prompt:`{`

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

You can also write the commands to a file, called a ROOT macro, and then execute and compile it. For more information on ROOT macros, → see [ROOT macros and shared libraries]({{ '/manual/root_macros_and_shared_libraries' | relative_url }}).

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

Regular expressions and wildcards can be easily used in methods like:

`Ssiz_t Index(const TString& string,Ssiz_t* len,Ssiz_t i) const`

The method finds the first occurrence of the regular expression in the string and returns its position.

## Using Cling commands to control ROOT

You can pass commands directly to ROOT by putting a dot before the command.

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

## ROOT tutorials

A ROOT tutorial is a ROOT macro that demonstrates ROOT specific features.

When you install ROOT, a `tutorials` directory is created, containing all ROOT tutorials listed on [Reference Guide tutorial page](https://root.cern/doc/master/group__Tutorials.html){:target="_blank"}.

> **Note**
>
> You need write permissions to the `tutorials` directory to execute the tutorials.



### Starting with hsimple.C

It is recommended to start with the {% include tutorial name="hsimple" %} macro first. It creates the ROOT file `hsimple.root`, which is used by many other macros.
`hsimple.root` contains the four histograms `hpx`, `hpx;1`, `hpxpy;1` and `hprof;1`.

For more information on ROOT files, see → [ROOT files]({{ '/manual/storing_root_objects' | relative_url }}).

To execute the {% include tutorial name="hsimple" %}  macro at the ROOT prompt, type:

```
root[0] .x hsimple.C
```

### Executing demos with demos.C

There are a lot of demos available in the {% include tutorial name="demos" %} macro.

To execute the {% include tutorial name="demos" %} macro at the ROOT prompt, type:

```
root[0] .x demos.C
```

A window is displayed. Here you can try out the different demos.

### Source code of ROOT tutorials

To check the source code of a ROOT macro, open it in your favorite text editor.

_**Example**_

{% include tutorial name="graph" %} tutorial from `$ROOTSYS/tutorials/graphs`

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


