---
title: For Developers
layout: single
sidebar:
  nav: "for_developers"
toc: true
toc_sticky: true
---

The links in this section are intended for **the ROOT developers** and for people who want
to [contribute]({{'contribute' | relative_url}}) to the ROOT system.

### [Program of Work]({{'/for_developers/program_of_work' | relative_url}})
The program of work is guided by the project vision laid out [here](https://indico.cern.ch/event/710739/contributions/2920120/attachments/1619048/2574778/ROOT_Vision_2020_-_SFT.pdf){:target="_blank"},
and documented for the relevant years in the following documents:

### [Code Owners](code_owners)
ROOT consists of several loosely coupled but consistently designed parts. The "code owners"
of these parts are experts that review pull requests and guide these packages over a couple
of years.

### [Release Checklist](release_checklist)
Steps to be followed to produce a new ROOT release.

### [Shifter's Instructions](shifters_instructions)
The aspects the shifter shall keep under control.

### [Git Primer](git_primer)
The minimal amount of knowledge about git a ROOT contributor needs to know:
   - [Creating a Pull Request](git_primer/creating_pr)
   - [GitHub ssh key](git_primer/github_ssh_key)
   - [Git Tips and Trick](git_primer/git_tips_and_tricks)
   - [Git How Tos](git_primer/git_how_tos)
   - [NoSY Worlflow](git_primer/nosy_workflow)

### [Browse Sources](https://github.com/root-project/root)
The official GitHub repository for ROOT.

### [Meetings](meetings)
All ROOT-related meetings can be found in [ROOT's Indico category](https://indico.cern.ch/category/526/).

### [ROOT 7](root7)
This new major version of ROOT will make ROOT much simpler and safer to use.

### [Run the Tests](run_the_tests)
Running all ROOT tests on at least a platform before sending a PR or before pushing anything to the ROOT repository is *mandatory*.
The ROOT continuous integration infrastructure allows to automatically check the PR also on a battery of platform, for example including macos and linux boxes.

### [Setup externals from AFS/CVMFS](setup_externals_from_afs-cvmfs)
Instructions for setting up an environment with all the required
ROOT externals coming from the central installations in AFS or CVMFS.

### Continous Integration / Testing
   - [Jenkins Service](https://lcgapp-services.cern.ch/root-jenkins/)
   - [Jenkins How To](continous_integration-testing/jenkins_how_to)
   - [CDash](http://cdash.cern.ch/index.php?project=ROOT)
   - [Coverity](https://coverity.cern.ch/login/login.htm)
   - [GitHub](https://github.com/root-project/root)
   - [GitWeb](https://root.cern.ch/gitweb/?p=root.git;a=summary)
   - [Jira](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin%3Asummary-page)
   - [ROOTBinder Checklist](continous_integration-testing/rootbinder_checklist)

### [Doxygen in ROOT](doxygen)
[Doxygen](http://www.stack.nl/~dimitri/doxygen/){:target="_blank"} is used for generating
the [Reference Guide](https://root.cern/doc/master/){:target="_blank"}.

### [Editing the ROOT web site](web)
Jekyll is used for generating the ROOT web site.
   - [Web Site To-Do list](web/todo)

### [Benchmarks](https://rootbnch-grafana-test.cern.ch)
### [ROOT Logos](https://root.cern.ch/img/logos/ROOT_Logo/)
