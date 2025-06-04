---
 title: "Make ROOT your own on macOS with Nix"
 layout: archive
 author: Jonas Rembser
---

In this blog post, you will learn how to reproducibly build ROOT from source with Nix on macOS or Linux, getting you started quickly with hacking the ROOT source code and participate in ROOTs open development.

## Introduction to Nix

If you’ve ever tried building a complex C++ project like ROOT on macOS, you’ve probably wrestled with dependencies that have to be installed with Homebrew, Xcode’s quirks, and subtle differences in compiler behavior.
While these tools are powerful in their own domains, they aren’t always ideal for development environments that require fine-grained control, reproducibility, and consistency across systems.

That's where [Nix](https://nixos.org) shines.

Nix is a cross-platform package manager that sets itself apart from e.g. Conda, Homebrew, or apt by enforcing fully **reproducible environments** that **don't pollute your system**.
With most package managers, one can install and delete packages at will and one has to manually configure the system on top of that.
It's easy to lose track of how the environment looks like and how it can be reproduced.
Nix solves this problem by allowing you to define *exactly* what dependencies, compilers, and configuration flags are used, all in a declarative `shell.nix` file.
When someone else enters the same nix-shell, they get the same environment.

Also, installing development libraries globally with Homebrew or relying on Xcode's SDK can clutter your system and lead to conflicts.
Nix isolates your development environment in a pure sandbox shell, keeping your system unpolluted.
Packages are only loaded when you enter a given nix shell, with no trace after you exit the shell other than cached artifacts that can be garbage collected whenever you want.

Since Nix is cross platform, this post actually applies to **any** Linux distribution as well — including of course [NixOS](https://en.wikipedia.org/wiki/NixOS), where the whole system is declared in a single `configuration.nix` file.
Still, this post marketed towards Mac users, because since there is no official package manager on macOS, building ROOT on that platform can be particularly challenging.

One downside of Nix is that it's not compliant with Linux Standard Base (LSB), so you might often have to patch code to use the paths that Nix expects.
Fortunately, once you have figured out what the right patch is, you will never have to solve the same problem again because the solution is set in stone in your nix configuration files.
Still, in the beginning there can be a steep learning curve, and even though building individual packages like ROOT with Nix as described in this blog post is easy, things can be more complicated when you want to build more interdependent packages in the same environment.

On a personal note: I have transitioned to Nix for all my development work about a year ago and don't have any reason to go back.
Especially for working on ROOTs build system, the ability to test ROOT in different environments just by changing a line in my `shell.nix` without any manual bookkeeping of what packages are installed on my system is golden.
Using Docker might also give you the reproducibility, but for development, Docker can be quite clunky because of the boundary between the host and the Docker image, and Nix gives you a faster turnaround by caching the environment at the package level and not the image level.

## Installing Nix

Installing Nix should always be done using the [official download instructions](https://nixos.org/download/), performing the recommended multi-user installation.

## Setting up your ROOT development environment

It's good to do your ROOT development in a separate directory, for example called `root`. You can create the directory from the terminal:

```bash
mkdir root
cd root
```

Now, it's time to create the `shell.nix` file in that directory.

Here is a suggested `shell.nix` file for building ROOT with debug info and tests:

```nix
# Content of root/shell.nix

{
  pkgs ? import <nixpkgs> { },
}:

let

  # We want to have these Python packages in our environment to use together
  # with ROOT and test the pythonizations.
  python3Packages = with pkgs.python3.pkgs; [
    matplotlib
    numba
    numpy
    pandas
    pytest
    scikit-learn
    xgboost
  ];

in
pkgs.mkShell {

  # For all the build inputs, we inherit the package lists from the official
  # nix ROOT package, plus adding some packages that we need for testing
  # (gtest, etc.) and faster building (ccache).

  nativeBuildInputs =
    with pkgs;
    [
      ccache
    ]
    ++ pkgs.root.nativeBuildInputs;

  propagatedBuildInputs = pkgs.root.propagatedBuildInputs;

  buildInputs =
    with pkgs;
    [
      gtest
      libuuid # required for testing
    ]
    ++ python3Packages
    ++ pkgs.root.buildInputs;

  # Define aliases for quick configuration and build
  shellHook = ''
    alias configure="cmake \
        -DClang_DIR=${pkgs.root.clang}/lib/cmake/clang/ \
        -DCMAKE_BUILD_TYPE=RelWithDebInfo \
        -DCMAKE_CXX_FLAGS='-fno-omit-frame-pointer' \
        -DCMAKE_C_FLAGS='-fno-omit-frame-pointer' \
        -DCMAKE_INSTALL_PREFIX=../root_install \
        -Dbuiltin_clang=OFF \
        -Dbuiltin_llvm=OFF \
        -Dccache=ON \
        -Dfail-on-missing=ON \
        -Dfftw3=ON \
        -Dfitsio=OFF \
        -Dgnuinstall=ON \
        -Dmathmore=ON \
        -Droottest=ON \
        -Druntime_cxxmodules=${if pkgs.stdenv.isDarwin then "OFF" else "ON"} \
        -Dsqlite=OFF \
        -Dtesting=ON \
        -Dvdt=OFF \
        -Dwebgui=OFF \
        ../root_src"

    alias build-and-install="cmake --build . --target install -j12"
  '';
}
```

A few more explanations:

  * In several places, we refer to `pkgs.root`. This points to the [official ROOT package in the nixpkgs repository](https://github.com/NixOS/nixpkgs/blob/master/pkgs/by-name/ro/root/package.nix). Think of `nixpkgs` of a single huge data structure that declares how to build any package, and your `shell.nix` environments are querying this huge data structure to instantiate specific environments. That means we can re-use any variables that are declared in the `nixpkgs` world at any time! In our `shell.nix`, we reuse the variables from `pkgs.root` that list the dependencies, also including `pkgs.root.clang`, which is the patched Clang version that ROOT requires. This means we don't have to rebuild the patched Clang ourselves, as it's already in the Nix cache.
      * *Side note*: the fact that all package recipes are in a single repository, written in the common domain-specific Nix language that is basically JSON on steroids is one of the great strengths of Nix.
  * The `nativeBuildInputs`, `propagatedBuildInputs`, and `buildInputs` serve slightly different purposes:
      * `nativeBuildInputs` lists the build-time dependencies
      * `buildInputs` lists the runtime dependencies
      * `propagatedBuildInputs` declares runtime dependencies that should automatically be passed to anything that depends on your package

    If you just use the `nix-shell` environment to build, test and use ROOT all in one, then there is not a practical difference, but it becomes important if you want to write `package.nix` files that declare individual packages that you plan to re-use.
  * The Python packages in the environment are not strictly needed for building ROOT, but these are the packages that are commonly used together with ROOT, also in the unit tests and tutorials. So it's good to have them.
  * The `shellHook` variable contains bash code that is run when opening the `nix-shell`. We use it to define aliases for configuring ROOT with the desired CMake configuration flags, and then later to build and install ROOT with the desired number of threads (12 threads in our example).
  * In the CMake command, we set `-DCMAKE_INSTALL_PREFIX=../root_install` such that the install directory sits nicely next to the `root_src` and `root_build` directories.
  * See the page about [installing ROOT from source](http://127.0.0.1:4000/base/install/build_from_source/#all-build-options) for more info on the ROOT-specific CMake flags. Depending on what ROOT feature you want to develop, you have to toggle, add, or remove flags.
  * This blog post is not updated. So if the environment doesn't work anymore, please reach out to us, optimally by opening a [GitHub issue](https://github.com/root-project/root/issues) requesing a working `shell.nix` example for ROOT development.

If your `shell.nix` file is in the `root` directory and you changed to that directory in your terminal,
you activate the environment by running:
```bash
shell-nix
```
It will take some time to download the dependencies to the Nix cache if you enter the environment for the first time.
To exit the environment later, run the `exit` command in the shell.

## Building ROOT

Have you entered the `nix-shell` environment with the configuration file above? Very good! If successful, you should now have the green `nix-shell` prompt in your terminal.

Time to clone the ROOT repository:
```bash
git clone https://github.com/root-project/root.git root_src
```
Create and enter the build directory:
```bash
mkdir root_build
cd root_build
```
Configure the build with the command defined in the `shellHook`, which takes about half a minute:
```bash
configure
```
Finally, build and install ROOT, which takes about 15 minutes running the first time on my Mac Mini M1 with 16 GB:
```bash
build-and-install
```
Are you still in the build directory? Then you can source the ROOT installation as follows:
```bash
source ../root_install/bin/thisroot.sh
```
If you want to test the installation, you can try to start the `root` prompt, or maybe open a `python` interpreter and try to `import ROOT`. Or, if you are adventuruos, maybe run a ROOT Python tutorial:
```bash
python -i ../root_src/tutorials/roofit/roofit/rf101_basics.py
```
The `-i` flag means that the Python interpreter will keep running at the end of the script such that the plot remains opened, but it also means you have to manually quit the Python interpreter with `Ctrl+D`.

## Make ROOT your own by changing the source code

You have now a clean directory structure for ROOT development. The content of your ROOT directory should look like this:
```
root_src
root_build
root_install
shell.nix
```

We have spent quite some time in the `root_build`, but it's time to change the ROOT source code and see if you can rebuild ROOT after doing some modifications!

As an example, let's modify the [core/rint/src/TRint.cxx](https://github.com/root-project/root/blob/master/core/rint/src/TRint.cxx#L519) file in the source code (which is in `root_src`).
You can use your preferred code editor, for example Visual Studio Code or Neovim.
The file has a line that contains the string `"Welcome to ROOT"`, which is printed when starting the ROOT interpreter.
You can try to modify ROOT by replacing the string with `"Welcome to my modified ROOT"`, as a test.

Back in the `root_build` directory, you can use again the `build-and-install` alias from our `shell.nix` to rebuild and install.
Thanks to CMakes caching and `ccache`, the rebuild should take less than a minute.

If you now start the `root` command prompt you will see:
```
   ------------------------------------------------------------------
  | Welcome to my modified ROOT 6.37.01            https://root.cern |
  | (c) 1995-2025, The ROOT Team; conception: R. Brun, F. Rademakers |
  | Built for macosxarm64 on Jan 01 1980, 00:00:00                   |
  | From heads/master@v6-37-01-6844-g7bfa4867a6                      |
  | With clang version 19.1.7                                        |
  | Try '.help'/'.?', '.demo', '.license', '.credits', '.quit'/'.q'  |
   ------------------------------------------------------------------
```

## Conclusion

**Congratulations** on building ROOT from source with Nix and making it your own by hacking the source code!

Of course, we didn't just write this blog post for the fun of it :-)
Hopefully, this knowledge will reduce the barrier of entry to ROOT development for some interested users, so that they can make the changes that they always wanted to make to ROOT, following our [contributor guidelines](https://root.cern/contribute/) and opening a [pull request on GitHub](https://github.com/root-project/root/pulls).

We hope to see you over there!
