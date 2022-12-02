---
title: ROOT 7
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

For the first time since 20 year (i.e. ever), the ROOT team plans to introduce backward incompatible changes for crucial interfaces.
ROOT won't actually *break* backward compatibility: old interfaces will simply stay frozen.
You will need to migrate your code to those new interfaces to benefit from their new features.
This new major version of ROOT will make ROOT much simpler and safer to use: we want to increase clarity and usability.

The ROOT team will be releasing parts of ROOT 7 throughout the coming years.
Previews will gradually sneak into the ROOT sources, in the `namespace ROOT::Experimental` for those parts that are not yet cast in stone, and in the `namespace ROOT` for those that are.
We will use standard C++ types, standard interface behavior (e.g. with respect to ownership and thread safety), good documentation and tests.

## Building ROOT 7
### Pre-requisites
Support for the c++17 standard is required. Usage of g++ >= 7 or clang >= 5 is recommended.
### Relevant cmake variables
ROOT 7 will be built if at least one of these conditions is satisfied:
- the `CMAKE_CXX_STANDARD` cmake variable is set to at least `17`
- the `root7` cmake variable is set to `ON`

Building from source would look similar to this:

    $ mkdir root7_build
    $ cd root7_build
    $ cmake -DCMAKE_CXX_STANDARD=17 path/to/root/source
    $ cmake --build . -- -j4

## ROOT 7 Features

ROOT's new interface personality is already in production with {% include ref class="RDataFrame" namespace="ROOT" %}.
Next up is the `TTree` successor {% include ref struct="RNTuple" namespace="ROOT::Experimental" %}.


Still in the design phase are ROOT's new graphics and histogram packages, with tutorials such as
for [ROOT 7 graphics](https://github.com/root-project/root/tree/master/tutorials/rcanvas),
for [histograms and ntuple](https://github.com/root-project/root/tree/master/tutorials/v7),
and specifically for [drawing and styling the new histograms](https://github.com/root-project/root/blob/master/tutorials/rcanvas/rh1.cxx).

## RBrowser

Starting from ROOT version 6.26/00, {% include ref class="RBrowser" namespace="ROOT::Experimental" %} is the first web-based component used by default when ROOT is built with `root7`.
It is automatically invoked with `new TBrowser`.
We recommend to install the `chrome/chromium` web browser, but all other web browsers should do the job.

If for any reasons `RBrowser` does not provide required functionality, one always can disable it.
Either by specifying `root --web=off` when starting ROOT or by setting `Browser.Name: TRootBrowser` in rootrc file.
Please report your case at the [ROOT Forum](https://root-forum.cern.ch) so we can address it!

## RBrowser on remote node

To efficiently use {% include ref class="RBrowser" namespace="ROOT::Experimental" %} on a remote node,
it is advised to use the `ssh` port forwarding and run
the user interface on the localhost with the default web browser. In the provided example
the remote http port 8899 will be mapped to the local 8877 port.

When logging on the remote host, configure also the port forwarding:

    [shell] ssh -L 8877:remotehost:8899 username@remotehost

Configure ROOT the shell environment and start root with the `--web=server:8899` option:

    [shell] call /path/to/root/bin/thisroot.sh
    [shell] root --web=server:8899 $ROOTSYS/tutorials/v7/browser.cxx

Open the url provided by ROOT on the localhost, replacing port number 8899 by 8877:

    [shell] firefox http://localhost:8877/win1/



## Use of `rootssh` script to run ROOT web widgets on remote nodes

Starting from ROOT 6.28 version, one can use `rootssh` script for automatic configuration of ssh tunnel,
necessary for web widgets. It can be used instead of normal `ssh` like:

    [localhost] rootssh username@remotenode

As with regular `ssh`, one can specify command which should be run on remote node:

    [localhost] rootssh username@remotenode "root --web -e 'new TBrowser'"

Script automatically creates tunnel and configures several shell variables in remote session. These are:

- `ROOT_WEBGUI_SOCKET` - unix socket which will be used by ROOT `THttpServer` in webgui
- `ROOT_LISTENER_SOCKET` - unix socket which gets messages from ROOT when new web widgets are started

When in ROOT session new web widget is created, default web browser will be started on the local node.

It is highly recommended to use `rootssh` script on public nodes like `lxplus`. Unix sockets, which are created on
the remote session, are configured with `0700` file mode - means only user allowed to access them.

One can provide `--port number` parameter to configure port number on local node and `--browser <name>` to specify
web browser executable to display web widgets. Like:

   [localhost] rootssh --port 8877 --browser chromium username@remotenode

Also any kind of normal `ssh` arguments can be specified:

   [localhost] rootssh -Y -E file.log username@remotenode

`rootssh` script can be [download](https://raw.githubusercontent.com/root-project/root/master/config/rootssh)
and used independently from ROOT installation - it is only required that supported ROOT version installed on remote node.


We highly appreciate your feedback!

