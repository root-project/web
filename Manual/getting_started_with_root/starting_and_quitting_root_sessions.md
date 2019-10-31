---
title: Starting and quitting a ROOT session
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


##  Starting ROOT

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

## Starting ROOT with command line options

You can start ROOT with the following command line options:

`-b`
ROOT session runs in batch mode, without graphics display. This mode is useful in case you do not want to set the DISPLAY.

`-n`
Does not execute the logon script and logoff script as specified in .rootrc.

`-q`
Exits after processing the command line macro files.

`-l`
Does not show the splash screen.

`-x `
Exit on exception.

`dir`
If dir is a valid directory, change to it (cd) before executing ROOT.

`-? `
Print usage.

`-h `
Print usage.

`--help`
Print usage.

`-config`
Print ./configure options.

`-memstat`
Run ROOT with memory usage monitoring.

## Quitting ROOT

Type at the ROOT prompt:
    `.q`