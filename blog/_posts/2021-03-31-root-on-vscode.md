---
title: "How to run ROOT Macros in VS Code"
layout: archive
author: Alberto Pérez de Rada Fiol
---

[Visual Studio Code](https://code.visualstudio.com/) offers some great functionalities when it comes to coding, such as IntelliSense, debugging, built-in Git, and many more through extensions. In this blog post I'm going to show how to configure VS Code in order to use all of these awesome features when creating and editing ROOT Macros!

A few weeks ago, I published a [blog post]({{ 'blog/vscode-extension-announcement/' | relative_url }}) about [ROOT File Viewer](https://marketplace.visualstudio.com/items?itemName=albertopdrf.root-file-viewer), an extension to view ROOT Files directly in VS Code. On the discussion of said post the question of how to run ROOT Macros in VS Code arose, and I came up with an [example repository](https://github.com/AlbertoPdRF/root-on-vscode) to show how that can be accomplished. Let us now walk through this example repository and see how everything works.

## Get it running

To get started, we will start cloning and opening the repository. This can be done from the command line with:

```sh
git clone https://github.com/AlbertoPdRF/root-on-vscode.git
cd root-on-vscode
code .
```

After this is done, we need to manually set the path to our local ROOT installation in two files. We can do that quickly with the editor's convenient global search and replace functionality:

1. Toggle the global `Search` view with `Ctrl + Shift + F` or clicking on the `Search` icon in the `Activity Bar`
2. Search for `/home/apdrf/programs/root-6.22/install`, two occurrences should show up
3. `Toggle Replace` by clicking on the caret on the left of the `Search` input box
4. Write the path to your local ROOT installation directory on the `Replace` input box
5. Replace the two occurrences with `Ctrl + Alt + Enter` or clicking on `Replace All` on the right of the input box

We are almost ready to see everything in action, so let us open the workspace and get to it! There's a few ways to do that, but probably the simplest one to do it is to:

1. Open the file `root-on-vscode.code-workspace`, which is located inside the `.vscode` folder
2. Click on the blue button at the bottom right of the editor that reads `Open Workspace`

After we have opened the workspace, a toast notification will appear at the bottom right of the editor asking us if we want to install the recommended extensions for the repository. Clicking on the `Install` button will install both the [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) and [ROOT File Viewer](https://marketplace.visualstudio.com/items?itemName=albertopdrf.root-file-viewer) extensions. Please note that the second one is not strictly required for everything to work, it is just listed as a recommendation for convenience.

And that is everything that is needed! Just press `F5` and see it for yourself: the example `hsimple.C` ROOT Macro will run and the `hsimple.root` file will be recreated.

With everything running, we can now take advantage of some of the awesome functionalities that we mentioned before to develop our ROOT Macros, for instance:

- Use IntelliSense's smart completions to easily create and edit macros without fear of getting the syntax wrong
- Debug the macros right from the editor setting break points, seeing call stacks, and with an interactive console available
- Use the integrated `clang-format` to always get our code styled as we want it
- And there's much more!

But I know this all feels like magic, so if you want to know how everything works, keep reading!

## How it works

What we do in this example is to define a VS Code Workspace with the necessary configuration for everything to work, so let us first see what a workspace is and how it is configured.

A VS Code Workspace is simply a collection of (one or more) folders that are opened in a VS Code instance (a window). For this example, we have defined a `root-on-vscode` workspace through the `root-on-vscode.code-workspace` JSON file located on the `.vscode` folder. Said file contains the following configuration:

- `folders`: here we define the path to our workspace folder(s), relative to the location of this same file
- `settings`: through this object we tell VS Code to treat files with the `.C` extension as C++ files and the path where it has to search for our header files, which in this case is ROOT's `include` directory
- `extensions`: here is were we recommend for the `C/C++` and `ROOT File Viewer` extensions to be installed for this workspace

Apart from configuring the settings of the workspace, we have also defined a launch configuration, which is how we are going to be able to run ROOT Macros directly within VS Code. This is done in the `launch.json` file, also located on the `.vscode` folder. From this file I will just mention a few of its key points:

- We will use the `gdb` debugger under the hood
- The program that we will launch is the `root.exe` executable
- We will pass everything necessary to ROOT's executable as arguments (which of course can be tweaked at will), as we would do on the command line:
  - `-l` to avoid showing ROOT's banner
  - `-q` so the program quits after it finishes processing the macro
  - `hsimple.C+g` to tell the program which macro to run and to compile it with debugging symbols -- this is what allows us to set break points through the macro

And this is basically it, the rest of the things that the repository includes are:

- A very basic `.gitignore` file to not commit compilation artifacts to the repository
- The `hsimple.C` macro from ROOT Tutorials
- The resulting `hsimple.root` file
- And a `README.md` file with some basic information

## Summary

With this blog post I just wanted to quickly illustrate how we can configure VS Code to run ROOT Macros directly in it. Doing so allows us to take advantage of some great functionalities of the editor that will make our lives way easier, and this way we can focus on what truly matters!
