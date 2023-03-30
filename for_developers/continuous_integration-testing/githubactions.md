---
title: GitHub Actions
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT project uses a GitHub Actions for continuous integration and delivery.

## Node ("runners") configuration

For building Docker images we use GitHub's runners.
For everything else, [runners are hosted at CERN](https://github.com/root-project/root/settings/actions/runners).
Hit the "New self-hosted runner" button to add a runner.

### MacOS

To install the Runner service, execute run `./run.sh install`.
