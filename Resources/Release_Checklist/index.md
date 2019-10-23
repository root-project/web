---
title: Release Checklist
layout: single
sidebar:
  nav: "resources"
---

### Steps to be followed to produce a new ROOT release are:

  1. Get the 'green' light from all main developers
  2. Check that all the [Jenkins builds](https://epsft-jenkins.cern.ch/view/ROOT/) / [CDash](http://cdash.cern.ch/index.php?project=ROOT) builds are green
  3. Verify that no performance regressions exist in the [benchmark system](https://rootbnch-grafana-test.cern.ch/)
  4. Update versions in JIRA
      - 'Release' the version in the [project configuration](https://sft.its.cern.ch/jira/plugins/servlet/project-config/ROOT/versions)
      - Eventually create the next development version
  5. Update the release notes in `README/ReleaseNotes/vXXX/index.md`
      - Edit release notes patches section
      - From the [list the versions in JIRA](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page&status=released), select the version and then 'release notes'
      - `git commit README/ReleaseNotes/vXXX/index.md`
  6. Modify version number and modify all necessary files
      - edit `build/version_number` (even patch number for releases)
      - if before 6.04: change PROJECT_NUMBER in `documentation/doxygen/Doxyfile`
      - Run from the build directory `$ make version`
  7. Tag main ROOT repository
      - `$ git tag -a vX-YY-ZZ`
  8. Update the release notes in `README/ReleaseNotes/vXXX/index.md` again
      - edit `README/ReleaseNotes/vXXX/index.md`; possibly copying from `README/ReleaseNotes/empty.md` if this is not a patch release
      - `git commit README/ReleaseNotes/vXXX/index.md`
  9. Update to the next development version
      - edit build/version_number (odd patch number)
      - make version, check in
  10. Push to github
      - `$ git push origin vX-YY-00-patches`
      - `$ git push origin vX-YY-ZZ`
  11. Tag ROOTTEST repository
  12. Make source tar file and copy to ftp area on root.cern.ch
      - Run from the build directory `$ make distsrc` _[not on a MacOS machine](http://superuser.com/questions/318809/linux-os-x-tar-incompatibility-tarballs-created-on-os-x-give-errors-when-unt)_
      - `$ scp ../root_vX.YY.ZZ.source.tar.gz sftnight@root:/home/www/root/download`
  13. Produce binary tarfiles
      - start the procedure [root-release-6.12](https://epsft-jenkins.cern.ch/view/ROOT/job/root-release-6.12/) (or whichever branch) in Jenkins
      - tarfiles and other artifacts are copied to final destination
  14. Install binaries to CVMFS
      - Install release binaries to CVMFS with the Jenkins procedure [root-release-CVMFS](https://epsft-jenkins.cern.ch/view/ROOT/job/root-release-CVMFS/)
  15. Update the release pages
      - Generate the release notes with the Jenkins procedure called [root-releasenotes](https://epsft-jenkins.cern.ch/view/ROOT/job/root-releasenotes/)
      - Update the releases xml with the Jenkins procedure called [root-release-makeReleasesXml/](https://epsft-jenkins.cern.ch/view/ROOT/job/root-release-makeReleasesXml/)
      - Once authenticated, import the releases xml in the site clicking import [here](http://cern.ch/go/6Dc8) __(Be reminded: this works for authenticated users only!)__.
      - Eventually edit the 'highlights' section, which is currently commented, in the generated release page.
      - If this applies, mark the release as Pro or Old and remove the attribute to the one previously holding it. There are radio buttons exposed by Drupal when editing a release's page.
      - If not a patch release edit [reference-guide](reference_guide) page to add the new reference guide for the release.
  16. Announcements
      - send mail to the following mailing lists: root-planning@cern.ch, root-dev@cern.ch, roottalk@cern.ch
      - write announcement in RootTalk [forum news](https://root-forum.cern.ch/c/news)