---
title: ROOT versioning scheme 
layout: single
toc: false
sidebar:
  nav: "about"
---

The naming convention for ROOT versions is `v<MAJOR>.<MINOR>/<PATCH>` (e.g. `v6.20/04`).

Minor version numbers that are even (e.g. `v6.28`, `v6.30`) indicate *stable* branches, typically available as a release. Odd minor version numbers (e.g. `v6.29`, `v6.31`) are *development* branches and are never released. Patch versions follow a similar convention: all releases have even patch version number, e.g. `v6.30.02` or `v6.28.10`. Always make sure to use the latest patch release for your ROOT version to benefit from the latest bug fixes.

# Backward and forward compatibility

Major version changes in ROOT are exceedingly rare, and indicate large backward incompatibilities between library versions. For example, between v5 and v6, ROOT changed the implementation of its C++ interpreter, the core engine of ROOT I/O and many other features, from CINT to CLING.

**Across all versions**, ROOT guarantees **I/O backward and forward compatibility**: any file written by older ROOT versions must be readable by newer ROOT versions, and any file written by newer ROOT versions should be readable by older ROOT versions (more precisely, because of possible introduction of new compression algorithms: by the latest release of any of the active previous ROOT versions).

**Across minor versions** (e.g. between 6.28 and 6.30) ROOT does not fully guarantee **user code backward compatibility**, i.e. "your source code might not compile in some cases". You can expect that any such breakage to existing code should be called out in the release notes, and it will most commonly be preceded by deprecation warnings. If not, please [report the problem](https://github.com/root-project/root/issues/new/choose) as a bug.

**Across patch releases** ROOT guarantees **user code backward compatibility**, i.e. "your source code will still compile". If not, please [report the problem](https://github.com/root-project/root/issues/new/choose) as a bug. We reserve the right to add default parameters to function signatures and make other minor changes to APIs that will not break the vast majority of client code.

**ROOT does not guarantee ABI backward compatibility** across versions.
