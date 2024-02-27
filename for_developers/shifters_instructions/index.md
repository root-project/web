---
title: Shifter's Instructions
layout: single
sidebar:
  nav: "for_developers"
---

## Shifter's duties
The members of the ROOT team have shift duties. A shift lasts for one week, from Monday to Monday.
The hand-over between shifters happens at the ROOT Project meeting on Mondays, and it has to be carefully handled.

### Keeping the builds green
The primary responsibility of the shifter is to "keep builds green", all tests need to succeed, all the time.
With top priority, the Shifter needs to fix the broken tests in the incremental and nightly builds and/or involve the relevant
experts to make that happen.

### Forum Posts
All forum posts have to be followed up. Some hours can be given to the community
to discuss the questions but an answer from the ROOT team must be given within 24 hours or less.
It is responsibility of the shifter to make sure this happens, either answering or
involving the relevant expert.

### Open pull requests
The shifter has the responsibility to follow up PRs if the relevant expert did not,
either interacting with the contributor or involving the relevant expert. Again,
feedback needs to be given within 24 hours after the PR submission. Simple PRs should
be reviewed. For simple PRs submitted by a contributor, the shifter should merge them
immediately if they are acceptable (i.e. passing continuous integration and shifter's review).

### Incoming issues
The shifter should check incoming issues for completeness and do an assignment where it is clear.
For each unassigned issue, the shifter should assign to the relevant people and add labels, e.g. type of issue, related ROOT components, priority,
affected branches.

### Links to check daily

- [Nightly builds](https://github.com/root-project/root/actions/workflows/root-ci.yml?query=event%3Aschedule)
- [Nightly builds (old CI)](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/)
- [Forum](https://root-forum.cern.ch/latest)
- [Unassigned issues](https://github.com/root-project/root/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee)
- [Unassigned pull requests](https://github.com/root-project/root/pulls?q=is%3Aopen+is%3Apr+no%3Aassignee)
