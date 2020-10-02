---
title: "Google warns about root.cern"
layout: archive
author: Axel Naumann
---

Thank you for your reports of Google warning about some pages on https://root.cern. Let me give you some background:

We have investigated virus scanner reports on some of ROOT's binaries. The ROOT team has invested about 2.5 work days into this investigation: we took this seriously. On top of that, CERN IT's security team has investigated this independently, and also invested a notable amount of working hours. We were able to create binaries that were diagnosed as infected, by building `hadd.exe` "from scratch". We are convinced that these reports are false positives. We found out that upgrading the compiler works around the issue. 

We could report this as false positive to the vendors whose virus scanner was reporting some of ROOT's binaries. This has a high latency, especially when adding the latency between the virus scanner engines tweaking their patterns and Google removing root.cern from the list of flagged sites.

We could argue with Google. This does not seem like a fast track option either.

Instead, we have removed the file in question. We are upgrading the compiler on our build machines, which means that we cannot create Windows binaries for new patch releases of ROOT 6.20 and before: only newer ROOT versions can be built with the newest Visual Studio version.

Given the removal of the file reported by Google, we have asked Google for a review of root.cern. As [Google puts it](https://support.google.com/webmasters/answer/9044101#harmful_downloads), "A review can take from a few days to a few weeks to complete."

If you have ideas how to further improve the situation, please let us know by adding a comment below.

Please rest assured that we build our binaries on always up-to-date Windows installations running updated virus scanners, and that we do whatever we can to keep our binaries clean. This is the second time in 20+ years that ROOT files have been misdiagnosed as infected. To address this, we will scan binaries proactively on [VirusTotal](https://www.virustotal.com) from here on, before offering them for download, to avoid false positives affecting us again.

Axel, for the ROOT team.
