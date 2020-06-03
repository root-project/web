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

### [Code Owners]({{'/for_developers/code_owners' | relative_url}})
ROOT consists of several loosely coupled but consistently designed parts. The "code owners"
of these parts are experts that review pull requests and guide these packages over a couple
of years.

### [Release Checklist]({{'/for_developers/release_checklist' | relative_url}})
Steps to be followed to produce a new ROOT release.

### [Shifter's Instructions]({{'/for_developers/shifters_instructions' | relative_url}})
The aspects the shifter shall keep under control.

### [Git Primer]({{'/for_developers/git_primer' | relative_url}})
The minimal amount of knowledge about git a ROOT contributor needs to know:
   - [Creating a Pull Request]({{'/for_developers/git_primer/creating_pr' | relative_url}})
   - [GitHub ssh key]({{'/for_developers/git_primer/github_ssh_key' | relative_url}})
   - [Git Tips and Trick]({{'/for_developers/git_primer/git_tips_and_tricks' | relative_url}})
   - [Git How Tos]({{'/for_developers/git_primer/git_how_tos' | relative_url}})
   - [NoSY Worlflow]({{'/for_developers/git_primer/nosy_workflow' | relative_url}})

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

### [Doxygen in ROOT]({{'/for_developers/doxygen' | relative_url}})
[Doxygen](http://www.stack.nl/~dimitri/doxygen/){:target="_blank"} is used for generating
the [Reference Guide](https://root.cern/doc/master/){:target="_blank"}.

### [Editing the ROOT web site]({{'/for_developers/web' | relative_url}})
Jekyll is used for generating the ROOT web site.

### [Benchmarks](https://rootbnch-grafana-test.cern.ch)
### [ROOT Logos](https://root.cern.ch/img/logos/ROOT_Logo/)
