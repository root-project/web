---
title: Shifter's Instructions
layout: single
sidebar:
  nav: "for_developers"
---

## These are the aspects the shifter shall keep under control
The shifter summarises the events of the week during the ROOT meeting. The hand-over
to the next shifter must be carefully handled.

### Forum Posts
All forum posts have to be followed up. Some hours can be given to the community
to discuss the questions but an answer from the ROOT team must be given within 24 hours.
It is responsibility of the shifter to make sure this happens, either answering or
involving the relevant expert.

### Failing tests
The shifter has the responsibility to "keep the builds green". He/she needs to fix
the broken tests in the incremental and nightly builds and/or involve the relevant
experts to make that happen.

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

- [Forum](https://root-forum.cern.ch/latest)
- [Nightly builds](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/)
- [Unassigned issues](https://github.com/root-project/root/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee)
- [Unassigned pull requests](https://github.com/root-project/root/pulls?q=is%3Aopen+is%3Apr+no%3Aassignee)
