---
title: ROOT versioning scheme 
layout: single
toc: false
sidebar:
  nav: "about"
---

The naming convention for ROOT versions is `v<MAJOR>.<MINOR>/<PATCH>` (e.g. `v6.20/04`).

Minor version numbers that are even (e.g. `v6.18`, `v6.20`) indicate *stable* branches, typically available as a release. Odd minor version numbers (e.g. `v6.19`, `v6.21`) are *development* branches and are never released. Patch versions follow a similar convention: all releases have even patch version number, e.g. `v6.20/02` or `v6.18/04`. Always make sure to use the latest patch release for your ROOT version to benefit from the latest bug fixes.

# Backward and forward compatibility

Major version changes in ROOT are exceedingly rare, and indicate large backward incompatibilities between library versions. For example, between v5 and v6, ROOT changed the implementation of its C++ interpreter, the core engine of ROOT I/O and many other features, from CINT to CLING.

**Across all versions**, ROOT guarantees **I/O backward and forward compatibility**: any file written by older ROOT versions must be readable by newer ROOT versions, and any file written by newer ROOT versions should be readable by older ROOT versions (more precisely, because of possible introduction of new compression algorithms: by the latest release of any of the active previous ROOT versions).

**Across minor versions** ROOT guarantees **source backward compatibility**, i.e. "your source code will still compile". You can expect that any breakage to existing code should be called out in the release notes, and it will most commonly be preceded by deprecation warnings. If not, please [report the problem](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin%3Asummary-page) as a bug. We reserve the right to add default parameters to function signatures and make other minor changes to APIs that will not break the vast majority of client code.

**ROOT does not guarantee ABI backward compatibility** across versions.
