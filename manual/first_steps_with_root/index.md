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
> Before you can use ROOT, you must have a working ROOT installation.
> → See [Installation Guide]({{ '/install' | relative_url }}).

## Working with an interactive ROOT session

### Starting and quitting ROOT

ROOT can be started at the system prompt. To that end, you can type:

{% highlight bash %}
$ root
{% endhighlight %}

and the ROOT prompt is displayed:

```
   ------------------------------------------------------------------
  | Welcome to ROOT 6.27/01                        https://root.cern |
  | (c) 1995-2022, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for linuxx8664gcc on Apr 07 2022, 13:00:54                 |
  | From heads/master@v6-25-01-3805-ge505630f86                      |
  | With c++ (Ubuntu 8.4.0-1ubuntu1~18.04) 8.4.0                     |
  | Try '.help'/'.?', '.demo', '.license', '.credits', '.quit'/'.q'  |
   ------------------------------------------------------------------

root [0]
```

To display a list of ROOT commands, type `.help` (or `.?`):

```
root [0] .help
```

To quit the ROOT prompt, type `.q` (or `.quit` or `.exit`):

```
root [0] .q
```

#### Command line options

These are some command line options you can use when starting ROOT:

`-b`: ROOT session runs in batch mode, without graphics display. This mode is useful in case you do not want to set the DISPLAY.

`-n`: Does not execute the logon script and logoff script as specified in `.rootrc`.

`-q`: Exits after processing the command line macro files.

`-l`: Does not show the ROOT banner.

`-a`: Displays the ROOT splash screen.

`-x`: Exits on exception.

`dir`: If `dir` is a valid directory, change to it (`cd`) before executing ROOT.

`-?`, `-h`, `--help`: Prints usage.

`-config`: Prints the `cmake` configure options.

### Running C++ code

ROOT uses the interactive C++ interpreter Cling that is built on top of the
**L**ow **L**evel **V**irtual **M**achine ([LLVM](https://llvm.org/){:target="_blank"}) and the [Clang libraries](https://clang.llvm.org/){:target="_blank"}.
Cling provides a command line prompt and a just-in-time (JIT) compiler for compilation.<br/>
For more information on Cling, → see [Cling]({{ '/cling' | relative_url }}).

> **Note**
>
> Cling provides a user experience that is closer to a typical interpreter, e.g. [IPython](https://ipython.org/){:target="_blank"}.
> Therefore, unlike pure C++ language, no semicolon (`;`) is required at the end of the line.

#### Simple commands

You can use ROOT to execute simple commands at the ROOT prompt.
Every command typed at the ROOT prompt is stored in the `.root_hist` file in your home directory.

_**Examples**_

Simple operations:

{% highlight C++ %}
root [0] 21+21
(int) 42
{% endhighlight %}

{% highlight C++ %}
root [1] sqrt(42)
(double) 6.4807407
{% endhighlight %}

Relational operators:
{% highlight C++ %}
root [2] 42 > 98
(bool) false
{% endhighlight %}

Calling a function from a ROOT class like `TMath::Pi`:
{% highlight C++ %}
root [3] TMath::Pi()
(double) 3.1415927
{% endhighlight %}

#### Multi-line commands

You can use ROOT to execute multi-line commands at the ROOT prompt.

1.  To start a multi-line command, type at the ROOT prompt:`{`

2.  Type one command per line.

3.  To end the multi-line command, type:`}`


_**Example**_

{% highlight C++ %}
root [0] {
root [1]   int j = 0;
root [2]   for (int i = 0; i < 3; i++)
root [3]   {
root [4]     j = j + i;
root [5]     std::cout << "i = " << i << ", j = " << j << std::endl;
root [6]   }
root [7] }
i = 0, j = 0
i = 1, j = 1
i = 2, j = 3
{% endhighlight %}

You can also write the commands to a file, called a ROOT macro, and then execute and compile it. For more information on ROOT macros, → see [ROOT macros and shared libraries]({{ '/manual/root_macros_and_shared_libraries' | relative_url }}).

### Special interpreter commands

ROOT provides a set of commands to perform special actions from the ROOT prompt. They are all prefixed by a dot:

```
root [0] .<command>
```

Here a selection of commands:

`.?`: Provides the full list of all commands. (Also `.help`)

`.? edit`: Prints a list of keyboard shortcuts for editing the input text at the ROOT prompt.

`.!<OS_command>`: Accesses the shell of the operating system. For example `.!ls` or `.!pwd`.

`.x <file_name>`: Executes a ROOT macro.

`.U <file_name>`: Unloads a file.

`.L <file_name>`: Loads a ROOT macro or library.

`.L <file_name>+`: Compiles a ROOT macro.

`.class`: Lists the available ROOT classes.

`.Class X`: Shows what cling knows about class `X`.

`.files`: Shows all loaded files.

`.include`: Shows the include paths.

`.I path`: Adds an include path.

## ROOT command line tools

ROOT also provides many command line tools at the system prompt for simple file operations or automating common operations performed on ROOT classes. → See [ROOT command line tools]({{ '/manual/root_files/#root-command-line-tools' | relative_url }})

## Using ROOT from Python

ROOT provides Python bindings, called [PyROOT]({{ '/manual/python' | relative_url }}), which allow to access all the ROOT C++ functionality from Python.

Therefore, ROOT can be used interactively from the Python prompt. The first step consists in importing the ROOT module:

{% highlight Python %}
$ python
>>> import ROOT
{% endhighlight %}

After that, we can use ROOT as we did from C++. The global C++ namespace is accessible via the ROOT module, e.g.:

{% highlight Python %}
>>> ROOT.TMath.Pi()
3.141592653589793
{% endhighlight %}

## ROOT tutorials

ROOT tutorials are available online on the [Reference Guide tutorial page](https://root.cern/doc/master/group__Tutorials.html){:target="_blank"}.

Moreover, when you install ROOT, a `tutorials` directory is created, containing all ROOT tutorials.

### Starting with a simple tutorial

A good tutorial to start with is {% include tutorial name="df000_simple" %}, which shows a simple usage of {% include ref class="RDataFrame" namespace="ROOT" %}. To execute it, type at the ROOT prompt:

```
root [0] .x df000_simple.C
```

A window with the plot of a histogram should appear as a result.

The same tutorial is also available in Python → {% include tutorial_py name="df000_simple" %}.

A more thorough introduction to RDataFrame can be found → [here]({{ '/manual/data_frame' | relative_url }}).

### Browsing through the rest of tutorials

The [Reference Guide tutorial page](https://root.cern/doc/master/group__Tutorials.html){:target="_blank"} groups tutorials by topic. For example, dataframe tutorials can be found →  [here](https://root.cern/doc/master/group__tutorial__dataframe.html){:target="_blank"}.

Tutorials are written in C++, Python or both. For instance, the following dataframe tutorial is available in both languages:
- C++ ROOT macro →  [example](https://root.cern/doc/master/df001__introduction_8C.html){:target="_blank"}
- Python script →  [example](https://root.cern/doc/master/df001__introduction_8py.html){:target="_blank"}

Moreover, some tutorials are also published in the form of [Jupyter](https://jupyter.org/){:target="_blank"} notebooks. If that is the case, below the tutorial link there are two buttons to open the notebook statically (`View notebook`) or in [SWAN](https://swan.cern.ch){:target="_blank"} (`Open in SWAN`). Please note that SWAN is an online notebook service that requires a CERN account.

