---
title: GitHub Actions Users Guide
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---


## The CI overview

The overview for the ROOT CI is available under the "Actions" tab

![GitHub Toolbar](/assets/images/github-toolbar.png)

Here a screenshot of the overview showing common states of jobs.
 - Orange dot: Queued
 - Bright circle: Running
 - Green checkmark: Successful run
 - Red cross: Failed job

![CI Overview](/assets/images/ROOTCI-overview.png)

Each job displays a link to the branch or pull request that triggered the job,
as well as the time spent on the job:

![Job Info](/assets/images/ROOTCI-job-info.png)

### Run workflow manually

The `Run workflow` button on the top right be used to manually start the CI.
Its parameters are:

**Use workflow from** Do not change this, the CI is only available in the
master branch.

**rebase from ...** The base ref for the job. Branch names like `master` and
full ref names like `refs/pull/12/head` are valid.

**... to ...** Same as above. Target branch/ref for the job. If same as former
option, or empty, the job will only build the base ref.

**do incremental** True: Download previous build artifacts to speed up
build. False: Do a clean build


## Job overview

Clicking on any job sends you to the job overview. This contains a useless
graph, a list of sub-jobs on the side and information about the job on the top.

![CI Job Overview](/assets/images/ROOTCI-job-overview.png)

### Annotations

The job also produces annotations at the bottom of the page. This contains
information such as failed tests and exit codes

![CI Job Annotations](/assets/images/ROOTCI-job-overview-annotations.png)

### Test results

The `Test Results` tab contains a summary of test results and an annotation
for each failed test. Each annotation contains the full raw output of the failed
test.

![CI Test Results](/assets/images/ROOTCI-test-results.png)


