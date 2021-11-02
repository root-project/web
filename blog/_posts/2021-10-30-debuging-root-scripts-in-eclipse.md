---
title: "Debugging CERN ROOT scripts and ROOT-based programs in Eclipse IDE"
layout: archive
author: Petr Stepanov
---

<center>
{% include figure_image
   img="/assets/images/setup-eclipse-ide-with-cern-root.jpg"
   style="width: 300px"
%}
</center>

A question about debugging ROOT scripts now and then arises in the ROOT community. I believe, many ROOT users experienced this unpleasant feeling when your ROOT script crashes with a SEGFAULT without leaving no stack trace in the output whatsoever. CERN ROOT is a framework and it does not provide an out-of-the-box solution for debugging ROOT scripts. Therefore, a programmer may spend quite a time trying to find that piece of code that leads to a crash. Without proper development tools, we are forced to use `cout`s and `TObject::Print()` methods.

In this blog post, I will share my experience with debugging CERN ROOT scripts and ROOT-based programs. We will utilize Eclipse CDT (C/C++ Development Tooling) Integrated Desktop Environment (IDE), a free software. Eclipse coupled with the GNU Debugger (GDB) provides enhanced code development infrastructure that includes code highlighting, easy navigation between C++ sources and headers, debugging your script as well as ROOT source code, and many more.

A few words about the operating system (OS). In this post, I will use Linux-based OS as a system of choice. The same process applies to macOS, but may require a code signing procedure. On Windows, a minGW installation is a prerequisite.

In principle one does not need any of these to invoke a debugger on a ROOT script. One can simply debug the `root.exe` binary with `gdb`:

```
gdb --args root.exe -l -b -q yourRootMacro.C
```

I will outline a more extensive approach of debugging a ROOT script, that contains three fundamental ingredients:

* **Get a copy of the ROOT source code on your computer**. Once attached to the project, this allows easy reading and navigation between your script and ROOT files within the IDE user interface. It also allows source lookup wheh debugging your program.
* **Compile ROOT with debug symbols**. This provides us ability to inspect variables, access data types and object members in the ROOT source code.
* **Install Eclipse IDE on your computer**. Eclipse is an all-in-one development solution that automates a lot of things: performs source highlighting and formatting, invokes the CMake build, lets user easily set breakpoints, attaches the debugger to the executable, and many more.


## Compiling ROOT with Debug Symbols

ROOT binaries with debug symbols are not provided for Linux and macOS. Therefore we will manually compile ROOT from the source on a local computer. This comes with benefits. Many potential issues can be eliminated: a mismatch between the compiler versions; inconsistency between Python versions. Additionally, when compiling ROOT from source, it is possible to turn on a few optional features that are not available in the pre-compiled executable version.

The steps required to compile ROOT from source are [outlined here](https://root.cern/install/build_from_source/). To compile ROOT with debug symbols, additionally pass the `-DCMAKE_BUILD_TYPE=Debug` or `-DCMAKE_BUILD_TYPE=RelWithDebInfo` option to CMake (the former for a slower ROOT that the debugger can work with without issues, the latter for a faster, optimized ROOT that still contains useful information for the debugger). Optionally it is useful to add `-Dall=ON` to compile ROOT with all optional features and components turned on.

To **simplify the install process on Ubuntu and Fedora-based systems** I created **unofficial one-liner scripts**. These scripts locate the latest ROOT version on the CERN servers, download the framework source code to the `~/Source/` folder, satisfy the dependencies, build ROOT framework with debug symbols and most common options turned on, install ROOT binaries under `~/Applications/` folder and set up necessary environment variables. Scripts can be invoked by the following commands:

```
mkdir -p ~/Downloads && cd ~/Downloads

# For Ubuntu-based systems use:
wget -O install-root-latest.sh https://raw.githubusercontent.com/petrstepanov/ubuntu-scripts/master/install-root-latest.sh

# For Fedora Linux use:
wget -O install-root-latest.sh https://raw.githubusercontent.com/petrstepanov/fedora-scripts/master/install-root-latest.sh

# Execute lines below:
chmod +x ./install-root-latest.sh
./install-root-latest.sh
```

Feel free to [reach out to me](https://petrstepanov.com/) concerning any issues with these scripts. Alternatively, open an issue in the corresponding GitHub repo.

## Installing and Tweaking Eclipse IDE

Refer to the [original documentation](https://wiki.eclipse.org/Eclipse/Installation) to install Eclipse IDE. On Fedora Linux, it is a one-liner: `sudo dnf -y install eclipse`. After the installation is complete, perform the following steps:

* Install CDT plugin. In menu Help > Install New Software... select "All Available Sites". Under "Programming Languages" select "C/C++ Development Tools". Restart Eclipse.
* Activate "C/C++" perspective in Window > Perspective > Open.
* Set Eclipse environment variables. In Window > Preferences > C/C++ > Environment specify the `LD_LIBRARY_PATH` variable for shared library include path. You can take the variable value from a terminal where ROOT is available with `echo $LD_LIBRARY_PATH`. Tip: on macOS, this variable is named `DYLD_LIBRARY_PATH`.
* Increase Eclipse initial and maximum heap limits. The screenshot below demonstrates the Eclipse heap use while indexing a ROOT and Geant4-based project. Memory use fluctuates between 1 and 2 GB.

<center>
{% include figure_image
   img="/assets/images/eclipse-heap-use.png"
   style="width: 100%"
   caption="Eclipse IDE memory use during the source code indexing operation. Obtained with VisualVm application."
%}
</center>

Therefore, we will limit the heap to 2 GB. Locate your `eclipse.ini` configuration file. On my Fedora machine, it is `/usr/lib/eclipse/eclipse.ini`. Sometimes `eclipse.ini` is located inside your Eclipse installation folder. With text editor set minimum and maximum heap limits respectively: `-Xms512m` and `-Xmx2048`. Alternatively one can use `sed` with `-r` REGEXP parameter (double-check your `eclipse.ini` location below):

```
sudo cp /usr/lib/eclipse/eclipse.ini /usr/lib/eclipse/eclipse.ini.bak
sudo sed -i -r "s;Xms[0-9]*m;Xms512m;" /usr/lib/eclipse/eclipse.ini
sudo sed -i -r "s;Xmx[0-9]*m;Xmx2048m;" /usr/lib/eclipse/eclipse.ini  
```

* Increase Eclipse indexer cache limits. In Eclipse menu: Window > Preferences > C/C++ > Indexer set the "Cache limits" to 75% and 2048 MB.
* Prevent workspace refreshes. In Window > Preferences > General > Workspace, uncheck "Refresh on access". Eclipse may randomly start refreshing the workspace upon the first run of a new Run/Debug configuration. Workspace refresh triggers the restart of an indexer. Additionally, for a CMake-managed project (not CDT managed) folder-specific Refresh Policy settings are unavailable. Our CMake project will refresh all the sources including ROOT sources (if attached). This is an expensive operation that usually takes quite some time. We want to prevent this from happening.

Last but not least, it is useful to turn on the indication of the current heap size used by Eclipse. This can be done in Window > Preferences > General > Show heap status. The heap size will be displayed in the status bar. If heap usage maxes out, increase it accordingly and restart Eclipse.

## Generating Eclipse Project

Technically it is possible to attach a debugger directly to the ROOT Cling interpreter `root.exe`. In my opinion, this approach is **rather confusing**, especially for a newcomer:

* Debug entry point will be outside of your program scope, namely in `rmain.cxx`.
* Your script C++ file is never compiled. Program flow is passed to the interpreter that reads and processes your file line-by-line. Therefore, **breakpoints set in your actual source C++ file will never fire up**.

A more straightforward solution would be **turning our ROOT script into a standalone ROOT-based C++ program** with `main()` function. This will ensure the correct entry point and provide an **intuitive debugging flow**.

If you are already taking advantage of CMake to build your ROOT-based project, feel free to skip to the next section. If not, you can refer to a template repository [hosted on my GitHub](https://github.com/petrstepanov/root-eclipse). This repository contains a trivial ROOT-based program code and `CMakeLists.txt` configuration file ready for debugging. Check out the repository in the desired location on your computer. For instance, we download it into `~/Development` folder.

```
mkdir -p ~/Development && cd ~/Development
git clone https://github.com/petrstepanov/root-eclipse
```

Next, we set up an Eclipse project. Thankfully CMake offers [IDE Build Tools Generators](https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html#id12) that automatically create projects for various IDEs. The Eclipse project is set up with the following command: `cmake -G"Eclipse CDT4 - Unix Makefiles" -DCMAKE_BUILD_TYPE=Debug source/folder/path`. Here `/source/folder/path` path must be the relative or absolute path of the project source folder containing CMake configuration file `CMakeLists.txt`. There are two options to carry out the build:
1. **In-source build**. Eclipse project files are located inside the original program folder. This is not a favorable option because Eclipse project files become a part of the Git tree. They need to be excluded in `.gitignore`. I also experienced Eclipse indexer issues using this method.
2. **Out-of-source build**. Eclipse project is located outside of the Git repository. This is a good practice and we will use this option.

First, we create a new folder located outside of the actual project Git tree. For instance, we will name it `root-eclipse-project`. Generally speaking, the project generator build is initialized via the following command:

```
mkdir root-eclipse-project && cd root-eclipse-project
cmake -G"Eclipse CDT4 - Unix Makefiles" -DCMAKE_BUILD_TYPE=Debug ../root-eclipse
```

CMake project generator will create an Eclipse project and link ROOT includes (header files) to the project. However, **extensive debugging requires access to ROOT source files**. We address this process in the next section.

## Attaching ROOT Sources to the Project

A legitimate way of attaching ROOT sources to the project is linking the original ROOT source folder as a library in our project's `CMakeLists.txt`. However, this will require re-building the ROOT from source for every new project we set up.

I propose an alternative approach (sort of a hack) that works for me. We will scan the original ROOT source folder and symlink all the sources into the project tree, under the `root-sources` folder. However, we exclude this folder from the built-in `CMakeLists.txt`. This way, source navigation and debug source lookup will work just fine without building ROOT from the source. The steps are following:
* Locate the original ROOT source package on your local computer. I usually keep ROOT sources under `~/Source/root-#.##.##` folder. Tip: to improve indexing performance on older hardware, store ROOT sources on the RAMDISK (hard drive in memory). This is explained later.
* Symlink all ROOT and Geant4 folders under the project's source folder. Tip: it is better if sources are arranged without nested directory structure. This greatly improves Eclipse indexing speed.

I wrote a [special Makefile function](https://stackoverflow.com/a/69463832) that implements the above functionality. This function is integrated into our project `CMakeLists.txt`. Pass the location of your ROOT sources to CMake via the `ROOT_SOURCE_LOCATION` variable:

```
cd ~/Development
mkdir root-eclipse-project && cd root-eclipse-project
cmake -G"Eclipse CDT4 - Unix Makefiles" \
      -DCMAKE_BUILD_TYPE=Debug \
      -DROOT_SOURCE_LOCATION="$HOME/ramdisk-persistent/current/root*/" \
      -DCMAKE_ECLIPSE_GENERATE_LINKED_RESOURCES=OFF \
      ../root-eclipse
```

Take care to replace my ROOT library path with the correct one on your file system. Here `-DCMAKE_ECLIPSE_GENERATE_LINKED_RESOURCES=OFF` [disables creation](https://gitlab.kitware.com/cmake/cmake/-/issues/19107) of the `[Subprojects]` Eclipse project folder for out-of-source CMake build. The presence of this folder duplicates all project source files and dramatically slows down the indexer.

<center>
{% include figure_image
   img="/assets/images/eclipse-folder-structure.png"
   style="width: 100%"
   caption="Project structure outlined graphically."
%}
</center>

Finally open Eclipse and go to File > Open Projects from File System... Specify the project location in the modal dialog by clicking the "Directory..." button. Locate the `~/Development/root-eclipse-project` project folder. Click "Finish".

<center>
{% include figure_image
   img="/assets/images/eclipse-01-open-project.png"
   style="width: 100%"
   caption="Open project generated by the CMake generator in Eclipse IDE."
%}
</center>

Eclipse will automatically start indexing the project. Please kill this process because Eclipse will refresh the workspace and re-index all projects again after the first launch of a Debug configuration.

<center>
{% include figure_image
   img="/assets/images/eclipse-02-stop-indexer.png"
   style="width: 100%"
   caption="Stop indexing operation. The indexer will restart after the Debug configuration is created."
%}
</center>

## Setting up Eclipse Debug and Run Configurations

We will start by setting up the main Debug configuration for Geant4 `root-eclipse` program.

<center>
{% include figure_image
   img="/assets/images/eclipse-03-build.png"
   style="width: 100%"
   caption="Expand 'Build Targets' and invoke 'all' target. Executable will be compiled."
%}
</center>

1. Expand 🎯 Build Targets under the main project node in the Project Explorer window. Double-click "All" to compile the executable.
2. In the menu "Run" open "Debug configurations". Right-click "C/C++ Application" and select "New Configuration".
3. Click "Browse" next to the "Project" field. Select "root-eclipse-Debug@eclipse" in the modal dialog.
4. Click "Search Project" next to the "C/C++ Application" field. Specify the "root-eclipse" executable built earlier.

<center>
{% include figure_image
   img="/assets/images/eclipse-04-debug-configuration.png"
   style="width: 100%"
   caption="Set up a new Debug configuration."
%}
</center>

Finally, we can run the project in Debug mode. In Eclipse menu select `Run → Debug`. Eclipse will run the project and simultaneously start indexing all ROOT source files. Depending on the speed of your hard drive and memory indexing will require from several minutes to about one hour.

## Debugging Your Personal Script

Now that our template project is set up and built, we integrate your ROOT script into it. Copy your ROOT script code and place it in the `yourRootScritCode()` function in the `src/main.cpp`.

For the build to succeed, we need to ensure a few more criteria:

* As opposed to running your ROOT script with Cling interpreter, standalone build requires to include headers `#include <...>` to be explicitly defined in the `src/main.cpp` file for every class used in the program.
* Depending on your script code, extra ROOT libraries may need to be specified in `CMakeLists.txt` with CMake `list(APPEND LIB_NAMES "<root-library-name>")` command. List of available extra ROOT libraries [can be found here](https://cliutils.gitlab.io/modern-cmake/chapters/packages/ROOT.html#the-right-way-targets).
* Some of the ROOT classes require library generation. These are GUI classes that utilize signals and slots functionality, custom RooFit PDF classes inherited from RooAbsPdf, etc. For every such class, add a corresponding line in the `src/LinkDef.h` file: `#pragma link C++ class MyClassThatRequiresLibrary`.
* If you want to add more C++ and header files to the project, place them under the `src/` folder. Every time a new file is added, `rebuild_cache` target needs to be invoked from the Project Explorer > Build Targets window.

Now we are ready to debug your ROOT script. Save changes in all modified source files. In Eclipse menu select Project > Build All (or run the `all` target under the Build Targets in the "Project Explorer" window). Finally, to start debugging run the previously created debug configuration in Run > Debug menu item.

If not yet familiar, you can learning fundamental Eclipse CDT hotkeys and debugging capabilities [on YouTube](https://www.youtube.com/results?search_query=eclispe+cdt+debug). Good luck with your projects!

## RAMDISK for Older Computers

On modern computers with NVMe hard drives Eclipse indexer will crawl ROOT sources fairly quickly. However, the indexing process can take about one hour on older computers SATA3 interface or magnetic disk drives (HDD). Please refer to the [RAMDISK section here](https://github.com/petrstepanov/root-eclipse#ramdisk-for-older-computers) if you are interested in improving your indexing speed.

## Summary

In this post, we learned how to set up and apply Eclipse IDE software for in-depth debugging of the CERN ROOT scripts. It was a process, so let's draw a line and summarize what we learned today:

* Touched base about compiling ROOT with debug symbols.
* Learned how to install and tweak the Eclipse IDE for the development of a ROOT-based program.
* Downloaded a template code with a CMake configuration file that builds a standalone ROOT program.
* Used CMake Eclipse project generator to create Eclipse project files.
* Got a little familiar with Eclipse IDE user interface. We built the project, created and run the Debug configuration.
* Learned a few discrepancies between a basic ROOT script and a standalone ROOT-based application, such as linking details and library generation.

I hope you enjoyed this technical note. Feel free to [reach out to me](https://petrstepanov.com/) if you have any questions or recommendations.
