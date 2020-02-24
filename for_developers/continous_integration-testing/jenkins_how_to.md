---
title: How to use the ROOT Jenkins
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT project uses a [Jenkins instance](https://epsft-jenkins.cern.ch/view/ROOT/){:target="_blank"} to
schedule a number of software development procedures (nightly builds, production of releases,
documentation generation, etc.). Practical information about the service can be found here.
The purpose of this page is to document the different existing procedures for the ROOT
project and basic interaction with them to obtain most of the information.

## SFT Jenkins Service

### Access and accounts

Everybody with a CERN account has automatically read access to Jenkins service instance.
For write access (e.g. to be able to stop and launch new jobs) please send a request to
Patricia Mendez to obtain an account.

### ROOT jobs

Each project in the SFT Jenkins has a specific 'tab' for the defined project jobs. The ROOT
tab contains all the defined jobs for ROOT. They are organized as follow:

- **nightly builds**: The jobs are named `root-nightly-<version>` and they are implemented
  as multi-configuration project. They are run once a day (around after midnight CET) but they
  can be started by hand at any time of the day (see later) and select for what configurations to run.

- **incremental builds**: The jobs are named `root-incremental-<version>` and they are
  implemented as multi-configuration project. They are run as soon new commits appear in
  the ROOT git repository and the builds are incremental by default. A full re-build can be
  triggered by checking the option EMPTY_BINARY.

- **documentation generation**. The jobs are named `root-makedoc-<version>`. They are started
  automatically once a day during the day.

- **testing installations**. The job is named `root-install` and builds ROOT for a number
  of platforms, produces the installation tar-file or installation kit, installs it in a
  different place nd runs the tests against the installation (needed to delete the build
  and source area).

- **building releases**. The job is named `root-release-<version>` and is multi-configuration
  job. It builds ROOT for a given 'tagged' version using the source distribution tar-file and
  produces binaries for a number of configurations, which are installed automatically in
  the download ROOT server.

- **other procedures**
  - cling-periodic
  - cling-clone-repo
  - cling-repo-sync
  - root-test
  - root-staticAnalysis-master

## Basic operations

### Understanding information for a single build

The Status shows a summary for the build. In case of multi-configuration jobs it it also
show the configuration matrix that can be used to select a contrete configuration. See the
following figure:

<center>
<img src="{{'for_developers/continous_integration-testing/Jenkins-figure1-10.png' | relative_url}}">
</center>

For each individual build (select one cell in the matrix) the following information is provided:

- **Status**. Shows a summary of the build (changes, errors, warnings, git revision, test results, etc.)
- **Changes**. Shows the details about the changes since the last build.
- **Console Output/View as plain text**.  Shows the full log of the build including all the steps (checkout, configuration, build, running tests, etc.)
- **Parsed Console Output**. The same as previous but with warnings and errors selected.
- **Parameters**. The parameters used for the job.
- **Environment variables**. A table with all the environment variables defined for the job.
- **Test Result**. An interface to the CTest tests results. All test, failing and not failing can be shown with their output.

### Starting and stopping jobs

- New jobs can be launched at any time independently of their automatic scheduling (time based or triggered by changes in the GIT repository). This is done by selecting **Build with Parameters** from the selected project page. This only enabled when your are logged in. Typically the default parameters should be sufficient unless you want to launch a special job.
- Jobs (single or multi-configuration) can be stopped by pressing the small cross in the job build history or in the job status page.