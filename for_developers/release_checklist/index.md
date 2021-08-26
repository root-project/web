---
title: Release Checklist
layout: single
sidebar:
  nav: "for_developers"
---

### What this covers

We use the following versioning scheme `v6.MM/PP` (text) or `v6-MM-PP` (git tag):
  - production releases have even numbers `MM`; development releases have odd numbers `MM`
  - releases always have even numbers `PP`; ROOT outside a tag has odd numbers `PP`
  - release candidates have `-rcN` attached, with `N` starting with 1 and counting up, e.g. `v6-22-00-rc1` is the first release candidate for v6.22/00.

See also [ROOT versioning scheme]({{ 'about/versioning/' | relative_url }}) for a more public-facing description.

This page covers the following:
- Creation of release branches: production releases (`v6.22/06`) are always tags on a release branch (`v6-22-00-patches`).
- Releases: tags and binaries.

### Create a production release branch from `master`

This assumes you try to create `v6-22-00-patches`, adjust accordingly.

  1. Create the branch point
      - check out `master`
      - this requires a new development release, follow "Produce a new ROOT release" below
      - tag the most recent version update on `master` (`"Update ROOT version files to v6.23/01."`) as `v6-23-01` to give some context to `git describe`.
  1. Create the release branch
      - for root.git:
        * check out the development release tag: `git checkout v6-23-02`
        * create the branch: `git switch -c v6-22-00-patches`
      - for roottest.git:
        * check out master
        * create the branch: `git checkout -b v6-22-00-patches`
  1. Update version number
      - Change `build/version_number` to `6.21/99` in preparation of `v6.22/00`.
      - Run from the build directory `$ cmake .; make version`
  1. Tag the release candidate: `git tag -a v6-22-00-rc1`
  1. Push tags and branches
      - `git push origin v6-22-00-patches` (for root.git and roottest.git)
      - `git push origin v6-23-01`
      - `git push origin v6-22-00-rc1`
  1. Create the Jenkins procedures
      - on [New Release Job](https://lcgapp-services.cern.ch/root-jenkins/view/Releases/newJob) state `root-release-6.22` as "item name" and set (all the way at the bottom) "Copy from" to the release before (`root-release-6.20` in the v6-22 example case); "Add to current view" should be set.
        * in "This project is parametrized" / "Validating String Parameter" / "VERSION", put "v6-22-00-patches" as "Default Value"
        * in "Configuration Matrix" / "User-defined Axis" / "V", put "6-22" as "Values"
        * adjust `Node/Label` / `Labels` as needed, update the "Matrix Combination Parameter" `COMBINATIONS` accordingly (you need to click "Advanced..." to actually see it)
      - on [New Nightly Job](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/newJob) state `root-nightly-v6-22-00-patches` as "item name" and set (all the way at the bottom) "Copy from" to the release before (`root-nightly-v6-20-00-patches` in the v6-22 example case); "Add to current view" should be set.
        * Update its values as for the release procedure.

### Produce a new ROOT release

  1. Get the 'green' light from all main developers
  1. Check that all the [Jenkins nightlies](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/){:target="_blank"} and [Jenkins release builds](https://lcgapp-services.cern.ch/root-jenkins/view/Releases/){:target="_blank"} builds are green
  1. Run with `valgrind` on `python tutorials/pyroot/hsimple.py`, `tree/dataframe/test/dataframe_concurrency`, and `./roofit/roofit/test/testRooParamHistFunc`; make sure no memory errors are reported after applying `--suppressions=$ROOTSYS/etc/valgrind-root.supp` and `--suppressions=$ROOTSYS/etc/valgrind-root-python.supp`
  1. Verify that no performance regressions exist in the [benchmark system](https://rootbnch-grafana-test.cern.ch/){:target="_blank"}
  1. If this is not a development release nor a release candidate, update the release notes in `README/ReleaseNotes/vXXX/index.md`. If this is a patch release, edit release notes patches section at the end of the document.
      - Insert the list of fixed bugs and enhancements etc behind the general release announcement for that version. They come from both Jira and Github:
      - Jira project management
        * Create the next patch ("6.22/02") or major ("6.24/00") version in the [project configuration](https://sft.its.cern.ch/jira/plugins/servlet/project-config/ROOT/versions){:target="_blank"}
        * 'Release' the version you want to release, assigning open issues to the next patch or major release.
        * From the [list the versions in JIRA](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page&status=released){:target="_blank"}, select the version and then 'release notes'
      - GitHub project management
        * TODO: show how to collect GitHub issues
        * Go to this version's [GitHub project](https://github.com/root-project/root/projects/) (e.g. [Fixed in 6.22/08](https://github.com/root-project/root/projects/10) when releasing 6.22/08). On the right column header, click "<" until the column header reads "Menu" with a hamburger menu next to it. Below, to the right, you see "...". Click, select "Copy", and enter the name of the *next* production or patch release (don't forget to remove the leading "[COPY]"!)
        * In "..." next to the currently to-be-released version's [GitHub project](https://github.com/root-project/root/projects/), hit "Close project". (No more bugs will be fixed in it: we are releasing it!)
      - Commit your new release notes: `git commit README/ReleaseNotes/v622/index.md`
  1. Update version number
      - Edit `build/version_number`. For release candidates, leave the version number at the development release number corresponding to the `-rc1` candidate.
      - Run from the build directory `$ cmake . && make && make version`
  1. Tag main ROOT repository
      - `git tag -a v6-22-02`
  1. Git pull and git tag ROOTTEST repository
  1. Make source tar file and copy to ftp area on root.cern
      - Run from the build directory `$ make distsrc` _[not on a MacOS machine](https://superuser.com/questions/318809/linux-os-x-tar-incompatibility-tarballs-created-on-os-x-give-errors-when-unt){:target="_blank"}_
      - `scp ../root_vX.YY.ZZ.source.tar.gz sftnight@root:/var/www/root/download/`
  1. For non-patch releases, create new release notes in `README/ReleaseNotes/vXXX+1/index.md`
      - Copy from `README/ReleaseNotes/empty.md`, adjust version numbers.
      - `git commit README/ReleaseNotes/vXXX/index.md`
  1. Update to the next development version
      - Edit build/version_number (odd patch number)
      - `$ cmake . && make version`
  1. Fix build errors!
      - Deprecations will now create build errors, fix them
      - `make` must succeed
  1. Push to GitHub
      - `git push origin v6-22-02`
  1. Update the stable branch. Users that have cloned this branch will receive updates as a fast-forward via `git pull`
      - `LATEST_STABLE=v6-xx-yy    # e.g. v6-22-02`
      - `$ git update-ref refs/heads/latest-stable $(git commit-tree $LATEST_STABLE^{tree} -p refs/heads/latest-stable -p $LATEST_STABLE^{commit} -m "Updated 'latest-stable' branch to $LATEST_STABLE")`
      - `$ git push origin latest-stable`
  1. Produce binary tar-files (optional for development releases and release candidates)
      - Start the procedure [root-release-6.22](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-6.22/){:target="_blank"} (or whichever branch) in Jenkins
  1. Install binaries to CVMFS (optional for development releases and release candidates)
      - Install release binaries to CVMFS with the Jenkins procedure [root-release-CVMFS](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-CVMFS/){:target="_blank"}
  1. Update the release pages (optional for development releases and release candidates)
      - Generate the release notes with the Jenkins procedure called [root-releasenotes](https://lcgapp-services.cern.ch/root-jenkins/job/root-releasenotes/){:target="_blank"} with `v6-22-00-patches` or similar as version. They'd show up [here for v6.22](https://root.cern/doc/v622/release-notes.html).
      - Wait until the files show up on a machine with cvmfs, e.g. lxplus, in `/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.22.02`.
      - On that machine with cvmfs, create a new release web page with the script `python3 _releases/make-release-page.py _releases/release-62202.md` in ROOT's website repo.
      - Add a 'highlights' section in the generated release page.
      - If this applies, mark the release as `state: latest` and remove the attribute to the one previously holding it (`git grep "state: latest" -- _releases/`)
      - Create a PR against `root-project/web`.
  1. Announcements
      - Send mail to the following mailing lists: root-planning@cern.ch, root-dev@cern.ch, roottalk@cern.ch, root-ambassadors@cern.ch
      - Write announcement in RootTalk [forum news](https://root-forum.cern.ch/c/news){:target="_blank"} (optional for development releases and release candidates)
      - For new major releases, consider writing a blog post for https://root.cern announcing the highlights.
