---
title: Release Checklist
layout: single
sidebar:
  nav: "for_developers"
---

### Steps to be followed to produce a new ROOT release are:

  1. Get the 'green' light from all main developers
  1. Check that all the [Jenkins nightlies](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/){:target="_blank"} and [Jenkins release builds](https://lcgapp-services.cern.ch/root-jenkins/view/Releases/){:target="_blank"} builds are green
  1. Verify that no performance regressions exist in the [benchmark system](https://rootbnch-grafana-test.cern.ch/){:target="_blank"}
  1. Update versions in JIRA
      - Create the next patch ("6.24/02") or major ("6.26/00") and development ("6.27/00") version in the [project configuration](https://sft.its.cern.ch/jira/plugins/servlet/project-config/ROOT/versions){:target="_blank"}
      - 'Release' the version you want to release, assigning open issues to the next patch or major release.
  1. Update the release notes in `README/ReleaseNotes/vXXX/index.md`
      - Edit release notes patches section
      - From the [list the versions in JIRA](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page&status=released){:target="_blank"}, select the version and then 'release notes'
      - `git commit README/ReleaseNotes/vXXX/index.md`
  1. Update version number
      - Edit `build/version_number` (even patch number for releases)
      - Run from the build directory `$ cmake . && make && make version`
  1. Tag main ROOT repository
      - `git tag -a vX-YY-ZZ`
  1. Tag ROOTTEST repository
  1. Make source tar file and copy to ftp area on root.cern
      - Run from the build directory `$ make distsrc` _[not on a MacOS machine](https://superuser.com/questions/318809/linux-os-x-tar-incompatibility-tarballs-created-on-os-x-give-errors-when-unt){:target="_blank"}_
      - `scp ../root_vX.YY.ZZ.source.tar.gz sftnight@root:/home/www/root/download/`
  1. For non-patch releases, create new release notes in `README/ReleaseNotes/vXXX+1/index.md`
      - Copy from `README/ReleaseNotes/empty.md`
      - `git commit README/ReleaseNotes/vXXX/index.md`
  1. Update to the next development version
      - Edit build/version_number (odd patch number)
      - `$ cmake . && make version`
  1. Push to github
      - `git push origin vX-YY-00-patches`
      - `git push origin vX-YY-ZZ`
  1. Produce binary tarfiles
      - Start the procedure [root-release-6.22](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-6.22/){:target="_blank"} (or whichever branch) in Jenkins
      - tarfiles and other artifacts are copied to `/var/www/root/download/nightly/` on `root.cern:`; move them to `/var/www/root/download/` (i.e. `../`)
  1. Install binaries to CVMFS
      - Install release binaries to CVMFS with the Jenkins procedure [root-release-CVMFS](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-CVMFS/){:target="_blank"}
  1. Update the release pages
      - Generate the release notes with the Jenkins procedure called [root-releasenotes](https://lcgapp-services.cern.ch/root-jenkins/job/root-releasenotes/){:target="_blank"} with `v6-22-00-patches` or similar as version. They'd show up [here for master](https://root.cern/doc/master/release-notes.html); instead of `master`, put e.g. `v622`.
      - Create a new release web page with the Jenkins procedure called [root-release-webpage](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-webpage/){:target="_blank"}
      - Edit the commented 'highlights' section in the generated release page.
      - If this applies, mark the release as `state: latest` and remove the attribute to the one previously holding it (`get grep "state: latest" -- _releases/`)
  1. Announcements
      - Send mail to the following mailing lists: root-planning@cern.ch, root-dev@cern.ch, roottalk@cern.ch
      - Write announcement in RootTalk [forum news](https://root-forum.cern.ch/c/news){:target="_blank"}
      - For new major releases, consider writing a blog post for https://root.cern announcing the highlights.
