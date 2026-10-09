---
title: Useful Parameters
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Evnironment Variables
The behaviour of ROOT can be steered with the usage of environment variables. The table below, summarises their names, types and purpose.

| **Name**                                  | **Type or Value**                                          | **Description**                                                                                                                                                                          |
|-------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JSROOTSYS                                 | path                                                       | Location of JSROOT. Used for notebooks integration, RWebDisplayHandle and THttpServer.                                                                                                   |
| ROOT_BATCH                                | -                                                          | If defined, enable ROOT's batch mode                                                                                                                                                     |
| ROOT_DISABLE_TCLASS_GET_CLASS_AUTOPARSING | -                                                          | if defined, disable auto-parsing                                                                                                                                                         |
| ROOT_EXPERIMENTAL_EXPORT_RNTUPLE_METRICS  | path                                                       | Location of RNTuple's exported metrics                                                                                                                                                   |
| ROOT_HIST                                 | string                                                     | Of the form "N1:N2", N1 and N2 are integers. N1: maximum number of lines to be kept in the .roothist file; N2 (optional): once the lines saved are N1, the last N2 lines will be removed |
| ROOT_LISTENER_SOCKET                      | path                                                       | Location of the unix socket for remote connections                                                                                                                                       |
| ROOT_MAX_THREADS                          | unsigned int                                               | Cap the size of the implicit multi threading thread pool                                                                                                                                 |
| ROOT_OBJECT_AUTO_REGISTRATION             | bool                                                       | Set ROOT7 mode for object auto registration                                                                                                                                              |
| ROOT_RNTUPLE_CLUSTERBUNCHSIZE             | int                                                        | Set the number of clusters the reader should prefetch or queue up at once                                                                                                                |
| ROOT_TTREECACHE_PREFILL                   | bool                                                       | Set ttree cache filling by reading all branch baskets at entry 0                                                                                                                         |
| ROOT_WEBDISPLAY                           | off/batch/native/chromechromium/firefox/edge/server/qt6... | Set backend for web-graphics windows' handling. At the command line that would be specified with the switch `--web=XYZ`                                                                  |
| ROOT_WEBGUI_SOCKET                        | url or path                                                | Set socket, e.g. TCP or Linux, for the internal web-graphics server                                                                                                                      |
| ROOTDEBUG                                 | 1,2,3,4                                                    | Set verbosity level, the higher the more verbose                                                                                                                                         |
| ROOTENV_NO_HOME                           | -                                                          | If defined, ignore .rootrc file in the home directory                                                                                                                                    |
| ROOTENV_USER_PATH                         | path                                                       | If defined, location of .rootrc instead of the one in the home directory                                                                                                                 |
| ROOTIGNOREPREFIX                          | bool                                                       | If true, force ROOT to use the $ROOTSYS path instead of a hardcoded, system-wide installation prefix                                                                                     |
| ROOTSYS                                   | path                                                       | Location of ROOT’s build or install directory (being abandoned)                                                                                                                          |
| ROOTUI5SYS                                | path                                                       | If defined, location of ui5                                                                                                                                                              |

