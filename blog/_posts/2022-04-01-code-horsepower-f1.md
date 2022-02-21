---
title: "Coding in ROOT with the horsepower of an F1"
layout: archive
author: Fernando Hueso-González
---



# Coding in ROOT with the horsepower of an F1

If you've ever rubbed your eyes trying to decrypt C++ compilation errors from a terminal, tracing those back to the line in the ROOT script you were just typing in your text editor, then googling "CERN ROOT TTree" to fix the signature of that function you just used incorrectly, or even have barely faced the intimidating logs of valgrind output for memory detection, or manually run gdb, you should definitely keep reading.

If on top of that, your office colleague sitting next you has a fancy MATLAB installation, does everything quicker than you, and only needs to hover the mouse on a function and press F1 to access all important help, while you painfully have to google, copy-paste, rebuild project, etc, then this post is also spot on for you.

In the physics predoc student circles, many tend to repeat that "ROOT" is not your friend, as it is full of tiny hacks, cumbersome conventions, recipes and rules. It makes really easy for you very hard taks, and really complicated the most easy ones, like [zooming a graph](https://root.cern/manual/graphs/#zooming-a-graph). And it always surprises you with one or the other bug or instability. Many tend to avoid it, others learn to cope with it. With this post, I believe you'll get more acquainted with ROOT by learning how to efficiently deal with it and even start liking it.

## Errors are development tools, not silly mistakes

There is a natural tendency to look at compilation or conceptual errors as unwanted accidents or mistakes that only happen rarely, because of my own inexperience, and that surely will not happen next time. As such, we are not explictly prepared nor trained to deal with them systematically. We just tackle them as a contingency and try to solve them quickly with whatever tools at hand. Yet experience tells us that errors (in programming, in mathematics, in jugdment biases) are not an exception, but rather the rule. In fact, most of the time in (robust) development is spent on debugging, either passively by looking at whatever problem pops up, or actively, by creating robust software architecture from its concepation, as well as a suite of tests that prevent these in the future in as many virtual scenarios as possible. It is not uncommon that you can write an analysis software in 5 hours, but then spend 5 days tracking down why the heck it's giving wrong results, or crashing once every 100 times, or even more worryingly, leading you silently to wrong scientific conclusions or errors in other links of your analysis chain, that are far away from its original source and thus hard to trace back.
Yet, despite knowing the forefront impact on your workflow, scientific robustness, many of us physicist are not trained to deal with errors with the proper tools, and we still deploy inefficient and manual ways to hack them "as quickly as possible", hoping (with uncertainty and fear) that they "won't come back". Because we will encounter errors much more frequently than we might think at first place, it makes sense to invest some "initial setup time" to create a robust platform for tackling and fixing these in a systematic way. Rather than reacting with insecurity to these or keeping them in the back of the mind as a passive or transient threat, let's assume they will be an important key player in our development, a learning tool that will appear continuously and is worth optimizing. In the same way that one does no longer use a pen if one wants to send 10000 letters, compared to only 10.

## IDEs to the rescue
Integrated Desktop Environment (IDE) softwares are very powerful tools to detect errors (thanks e.g. to Clang), trace them back to the right point in the source code, and even automatically suggest the solution. ROOT scripts, as well as standalone C++ programs relying on ROOT libraries, can be integrated with minimum effort into these. Examples on the steps to follow are nicely explained in older blog posts for the [Visual Studio](https://root.cern/blog/root-on-vscode/) and [Eclipse](https://root.cern/blog/debuging-root-scripts-in-eclipse/) IDEs, as well as in the [Twiki](https://twiki.cern.ch/twiki/bin/view/CMSPublic/BristolEclipseTutorial) and [other blogs](
https://petrstepanov.wordpress.com/2015/11/15/compile-cern-root-program-with-roofit-in-eclipse/). In this post, I will focus on a third option, the open-source [QtCreator IDE](https://www.qt.io/download-open-source).

## QtCreator

Note: while optimized for Qt applications, QtCreator is totally generic, it can compile and run any C++ program, CMake project, Makefile, etc. You don't even need to know what Qt means. You don't need to use QMake either. Your project will be equally compilable from a terminal with Make / CMake than via QtCreator, which just acts as a non-invasive interface.

### Installation steps

You can find (usually) outdated versions of QtCreator in your package manager, but I recommend to use the [online installer](https://www.qt.io/download-open-source), which then periodically checks for updates at program start. If you prefer not to open a user account with them, you can use the [offline installer](https://www.qt.io/offline-installers/?hsLang=en). While installing, I recommend to deactivate all Qt library options, newer CMake versions or Ninja. You will just need QtCreator.

### Open a C++ CMake project

You can open any CMake project you have on your computer by clicking on "File", "Open File or Project", and double-clicking on your "CMakeLists.txt". Pretty simple. Or directly from the command line, run as `qtcreator my/folder/CMakeLists.txt &`.

If you rather use Makefiles, that's also supported via the [Import](https://doc.qt.io/qtcreator/creator-project-generic.html#importing-a-generic-project) menu, by clicking on "File", "New File or Project", "Import Project", "Import Existing Project", "Choose", and then select the source files you want to see in your tree (or just click on select all and deactivate those that are images, etc.). The Makefile will be automatically detected.

Let me load into QtCreator the [simplest CMake example](https://cmake.org/cmake/help/latest/guide/tutorial/A%20Basic%20Starting%20Point.html). After "Open File or Project", you can specify in what folder to build your program. The option "Manage Kits" allows you to tune your compiler version. "Tools, Options, Build, Default Properties" allows you to setup a default directory. Once you "Configure Project", CMake will be run. In the "Projects" Pane, you can tune any CMake flag as needed, as well as specify command line arguments when running. The "Build" icon compiles your project, and the "Run" one executes it.

You will not need to re-do all these configuration steps later on for this project, as QtCreator will store these settings in a file called CMakeLists.txt.user and recognize it automatically the next time you open the project.

### The Power of F1

Let's assume now that you have forgotten what class "std::cout" has. Luckily, Qt has an in-built (offline) help support system. For a first-time configuration, you will just need to download the Help Book of your library, in this case the std library from [cppreference](https://en.cppreference.com/w/Cppreference:Archives#Qt_help_book) or via your package manager (sudo apt install cppreference-doc-en-qch). Then, in "Tools", "Options", "Help", "Documentation", you can add the downloaded (or /usr/share/ installed) ".qch" file.

Once this is set, you can either CTRL+Click on your function to immediately go the source code definition (file will open in another tab), or press F1, and the HTML documentation will appear on your right side without having to type / search anything online.

![tutorial](https://user-images.githubusercontent.com/10653970/153931729-271fbefd-c73a-4739-8ff3-39bec7c35eec.png)

If you use and compile LLVM yourself, you can also get your Qt Help file file [as described here](https://reviews.llvm.org/D2967).

The ROOT framework also has a ".qch" Help Book available [for download](https://root.cern/reference/), thus you'll be able to quickly consult any documentation using the F1 key, rather than searching online, which can be useful in case you are traveling and have no Internet access.

![f1root](https://user-images.githubusercontent.com/10653970/154870916-28e4009d-eb70-46df-a52b-da81cfe3c97f.png)

You can not only check the documentation with F1, but fully opening the full HTML reference on the left pane, on the Help icon, as shown below.

![roothelp](https://user-images.githubusercontent.com/10653970/154870717-6f0ffdf4-084b-45d6-92d3-dc2a948f27b5.png)

Alternatively, you can also open the Help Books and search it using [Qt Assistant](https://doc.qt.io/qt-5/assistant-details.html). Linux apt packages are qt4-dev-tools or qt5-assistant, and the executables are assistant-qt4 and assistant, respectively. (qt6 version is not yet in the package manager.) You will have to add the .qch file to its database by going to Edit, Preferences, Documentation, Add.

And if you use other IDEs or OS ? In addition to [inline HTML searching](https://www.doxygen.nl/manual/searching.html), the building of the (ROOT) doxygen documentation can be configured to output a format that is compatible with MacOS - [Xcode](https://www.doxygen.nl/manual/config.html#cfg_generate_docset), Windows - [VSstudio](https://www.doxygen.nl/manual/config.html#cfg_generate_htmlhelp), or [Eclipse](https://www.doxygen.nl/manual/config.html#cfg_generate_eclipsehelp). ROOT [only provides for download](https://root.cern/reference/) the Qt help files (.qch) for the moment, but you can [build the documentation yourself](https://root.cern/for_developers/doxygen/) adapting those flags in the Doxyfile.

### The Power of Clang

Grown over many years and standards, larger software projects have plenty of legacy code that is not as safe as the one someone would write today. Not surprisingly, there are still some bugs here and there, and instabilities that haven't been solved. Some of these bugs and potential style improvements can be detected thanks to the *Clang-analyzer*, which performs code analysis based on some settings.

Qt-Creator bundles perfectly with Clang-Analyzer, see left pane, "Debug" icon, then "Debugger" dropdown menu, "Clang Tidy and Clazy". It parses its output warnings and takes you directly to where the code needs to be changed.
In addition, it even lets you apply "fixits" by a mouse-click: if Clang knows how to correct the problem, he will change the code automatically for you.

To give an example, analyzing the "core" of ROOT yields several diagnostics, and this can be quite useful for tracing in case you are seeing some memory leak when your application is deploying ROOT libraries:

![clangtidy](https://user-images.githubusercontent.com/10653970/153959440-a2fb89c8-3459-49ae-9248-37283fefeb9a.png)

If, for example, you would like to modernize your code syntax to the latest C++ standard, you can configure the Clang settings in "Tools", "Analyzer", "Default checks", and enable the modernize option. For example, with a single click, you can change NULL to nullptr across your whole codebase.

### Formatting your code

Whether you like 4 spaces, 2 spaces, 1 tab, braces in the beginning or in the end... it does not matter what your taste is. What's important is that you do not spend your valuable time on formatting things by hand. QtCreator can be helpful in this regard, too, if you activate the [Beautifier plugin](https://doc.qt.io/qtcreator/creator-beautifier.html) as well as install clang-format.

For example, let's suppose you want to submit a pull request of one of your functions to ROOT, which has its own formatting guidelines. The easiest is to copy the .clang-format configuration file from the [repository](https://github.com/root-project/root/blob/master/.clang-format) or the [website](https://root.cern/contribute/coding_conventions/#using-clangformat-or-astyle-in-your-preferred-editor) and then go to "Tools", "Options", "Beautifier", "Clang Format", and specify the file. (Or if you are building ROOT itself, specify "File", it will auto-detect the one in the source tree).

You can also define a [keyboard shortcut](https://doc.qt.io/qtcreator/creator-keyboard-shortcuts.html) to format the file, by going to "Tools", "Environment", "Keyboard", search for "format" and assign e.g. CTRL+Alt+F.

Once that is configured, you can enable to auto-format your file when saving, or apply changes manually via CTRL+Alt+F. Here a snippet before and after "CTRL+Alt+F":

```cpp
int main(int argc, char* argv[])
{
```
```cpp
int main(int argc, char *argv[]) {
```

### git version control
For one of your projects, or even for the ROOT codebase, you might be using git for version control. QtCreator integrates seamlessly with the typical git commands, and can show you a visual diff of the current changes, as well as commit (Alt+G, Alt+C) and push your changes using its GUI, or pull the latest version from the remote repository.

![git](https://user-images.githubusercontent.com/10653970/154095599-849e5dcf-79a1-4b80-a44d-8ff35506e068.png)


### Why bother with QtCreator when I am pro with emacs and vim?

You can get the best of both worlds by using the [FakeVim mode](https://doc.qt.io/qtcreator/creator-editor-fakevim.html) or the [emacs plugin](https://machinekoder.com/running-qt-creator-in-emacs-mode/). Just give it a try ;)

And if you just need column-editing, you don't need any of those, QtCreator supports that [natively](https://forum.qt.io/topic/46348/qt-creator-column-edit).

### CTests

If you've built ROOT enabling the "testing" CMake flag, or if your project contains CTests, Boost Tests, etc. for ensuring that new changes you apply don't break older functionality, QtCreator has a platform to visually run and check the results of all those tests. No need to scroll in a terminal to find which one failed.

Beware:

- Go first to "Tools", "Options", "Testing", "General", and adapt the "Timeout" to allow running all tests at once.
- Be sure that the option "CTest" is active under "Active Frameworks" of that same menu.

![ctest](https://user-images.githubusercontent.com/10653970/154115506-96c9c1da-ca66-4dbc-87cf-47c1c60ef215.png)

### To gild the lily

QtCreator not only lets you find compilation errors, but also documentation errors, by interfacing with warnings issued by doxygen. This metawarning function can prove extremely useful for detecting outdated or incorrect documentation and going to the right spot in the source code in just one click, rather than diving through [thousands of lines of output](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT/job/root-makedoc-master/lastBuild/consoleText) and tracing it manually.

To give it a try, take a look at importing the [ROOT documentation project](https://root.cern/for_developers/doxygen/) into QtCreator. Then click on "Build". Below a screenshot of the errors and the points in the source code found by just clicking on those issues.

![doxywarnings](https://user-images.githubusercontent.com/10653970/155034554-ca488395-8c6d-4635-ba66-a70c06a262cd.png)

If you want even more verbose warnings about undocumented parameters, try setting `WARN_NO_PARAMDOC` to `YES` in the Doxyfile and `EXTRACT_ALL` to `NO`. This will account for many much more weak points of your documentation and let you pinpoint your efforts on the right spot. And while it can be burdensome to write all this extra missing documentation, QtCreator also simplifies the task by typing three magic characters on top a function. Then, it will [autocomplete all the skeleton](https://stackoverflow.com/questions/17955686/using-automatic-documentation-of-my-own-function-with-qt-creator) in doxygen format. Check first if "Tools", "Text editor", "Completion", "Enable Doxygen blocks" is enabled.

Consider also enabling [this spell-checking plugin](https://github.com/CJCombrink/SpellChecker-Plugin) for detecting typos in your documentation. This can be done by simply downloading the release file and unzipping into into your qtcreator folder. Then, under "Tools", "Options", "Spellchecker", you can configure which dictionary or language(s) to use.

## Debugging tools

If you need to debug your ROOT scripts, or the ROOT library itself, I recommend building ROOT [from its sources](https://root.cern/install/build_from_source/), but using the "Debug" flag.

### Building ROOT in Debug Mode

To do this:

- Clone the ROOT git repository
- Open QtCreator
- "File", "Open File or Project" and double click on the main "CMakeLists.txt" file.
- In the "Configure Project" kit dialog, activate the "Debug" and deactivate "Release" and press on "Configure". The Debug mode will internally set the CMAKE_BUILD_TYPE to Debug, as you would do from a command line.
- Specify the folder where it will be built
- If you've already built ROOT using debug mode via your command line, then you can "import" your preexisting build, to not recompile it and save your time.
- At the bottom of the "Key" dialog, deactivate or activate submodules of ROOT as needed. This acts as passing -Dmodule=ON via the CLI.
- Consider enabling "testing" to run all ROOT tests.
- In the "Build steps", click on "Details", and specify -j8 on the "CMake arguments" or whatever other number, to speed up the build.
- On the left, click on the "Build" icon, and ROOT will be compiled.
- Once built, on the left Kit pane, click on the "Run" line, and select which executable you want to run.
- You can run it from the big "Play" icon on the left.

### Debugging your ROOT scripts or executables with GDB

To debug your script, on the Kit-Run settings, specify your executable (your own standalone application, or root.exe) and your CLI arguments, e.g. the name of the script you want to run as well as their parameters. If you want to precompile instead of interpret with cling, consider using the debug flag `g` when passing the argument (`yourScript.C+g`)

Click then on the "Play-Bug" icon on the left, and your script will run in Debug mode. Breakpoints can be set interactively on your code. F5 will pause or resume your process, as well as show you a workspace of the active variables and threads.

As an example, below a screenshot while debugging [a deadlock in the TThread class](https://github.com/root-project/root/issues/8365).

![debugging](https://user-images.githubusercontent.com/10653970/154860214-0afc206e-ce7b-4645-b5d8-62ac9901b0d4.png)


### Memory error detection

To check for memory leaks and corruption, QtCreator offers a seamless integration with valgrind (or [heob on Windows](https://doc.qt.io/qtcreator/creator-analyzer.html)), making the backtrace of your errors fully interactive. To run it, press on the big "Debug button" on the left. Then, on the dropdown menu, change from "Debugger" to "Memcheck" and click on the small play button.

If you need extra arguments for valgrind, you will need to specify those under "Tools", "Options", "Analyzer", "Valgrind".
There, I also recommend to click on "Add", "etc/valgrind-root.supp" from your cloned repository, to suppress spurious warnings.

The resulting warnings can be easily clicked to bring you to the right spot in your code, or in the ROOT codebase, where the issue is arising from.

![valgrind](https://user-images.githubusercontent.com/10653970/124675469-04769e80-debd-11eb-95d0-595f613c4689.png)

Often, you will also find helpful to run the static clang-analyzer, which is able to detect many unsafe parts of your code that might be leading to memory leaks. It's in the same dropdown menu, under Clang-Tidy and Clazy. 

### Data race detection

First, I recommend to click on "Tools", "Options", "Analyzer", "Valgrind", "Add", "etc/valgrind-root.supp" from your git repository. Then, on the dropdown menu, change from "Debugger" to "Memcheck" and click on the small play button.

Helgrind cannot be run yet directly from QtCreator. The background is to run root.exe or your executable from your command line, with the flags (--tool=helgrind --xml=yes --xml-file=yourfile.xml). Then, you can "load" the result using the small "open" button right from the dropdown menu. The parsing tool works great and takes you the relevant location in your code.

### Performance analysis

In case you want to optimize the [performance of your code](https://doc.qt.io/qtcreator/creator-cache-profiler.html), you can select from the debugger dropdown menu between Callgrind or the [Performance Analyzer](https://doc.qt.io/qtcreator/creator-cpu-usage-analyzer.html). If you use callgrind, consider installing also kcachegrind for visualization.

### Other approaches

There are other tricks to boost your development in a way that's integrated with your IDE. For example:

- If you use a standalone application that uses ROOT libraries and GUI, but not it's terminal, you might want to check the [TGCommandPlugin](https://root.cern/doc/master/classTGCommandPlugin.html) window. With it, you can nicely interact with your internal C++ classes while your program is executing, without having to build in Debug mode, which has sometimes downsides due to its slow performance. To make ROOT aware of your C++ object, you need to call within your program:
gROOT->ProcessLine(
      static_cast<TString>(
          "MyClassType* const fMyInstance = reinterpret_cast<MyClasstype*>(") +
      static_cast<std::ostringstream &>(std::ostringstream("") << fMyInstance)
          .str() +
      ");"); 
And then, of course, creating a TGCommandPlugin window. From there, typing fMyInstance->MyMethod() will execute binary code interactively.
  
- [This VS Studio plugin](https://marketplace.visualstudio.com/items?itemName=albertopdrf.root-file-viewer) allows for a nice integration of a ROOT file browser. Maybe it will come [at some point](https://root-forum.cern.ch/t/rbrowser-plugin-for-qtcreator/48807) for QtCreator, too.
  
- Interfaces between [Cling and Qt](https://github.com/herrgahr/qling) have been attemped before.

## Quick recipe Summary

- Optional: install valgrind, kcachegrind
- [Install QtCreator](https://www.qt.io/download-open-source) deactivating all extra options
- Download Std Help Book from [cppreference](https://en.cppreference.com/w/Cppreference:Archives#Qt_help_book) or package manager (sudo apt install cppreference-doc-en-qch)
- Download [ROOT Help Book](https://root.cern/reference/)
- Add both ".qch" files via "Tools", "Options", "Help", "Documentation"
- "Tools", "Options", "Analyzer", "Default checks", configure as needed.
- Install the [Beautifier plugin](https://doc.qt.io/qtcreator/creator-beautifier.html), potentially download the [ROOT](https://github.com/root-project/root/blob/master/.clang-format) one.
- "Tools", "Options", "Beautifier", "Clang", "Use predefined style", "File"
- If you enable "testing" flag in CMake, adapt "Timeout" in "Tools", "Options", "Testing".
- Be sure that the option "CTest" is active under "Active Frameworks" of that same menu.
- Optional: Check that "Tools", "Text editor", "Completion", "Enable Doxygen blocks" is enabled.
- Optional: Install [a spellchecker plugin](https://github.com/CJCombrink/SpellChecker-Plugin) by unzipping the release file into your QtCreator installation folder. Configure then your dictionary under "Tools", "Options", "Spellchecker".
- Clone the [ROOT git repository](https://github.com/root-project/root/) and open main CMakeLists.txt with QtCreator
- Optional: configure your default's "Kit" build directory to e.g. ~/builds/
- Specify -j8 on your Kit build settings, and root.exe as your executable in the run settings.
- "Tools", "Options", "Analyzer", "Valgrind", "Add", "etc/valgrind-root.supp" and "etc/helgrind-root.supp" from your cloned repository.

Setting up all this platform requires some initial effort, but once it is running, it will smooth your development and bug hunting, and once you've get used to it, you will find it much more tiring to program without it ;) .
      
Fernando Hueso-González
IFIC - Instituto de Física Corpuscular (CSIC / Universitat de València) 
