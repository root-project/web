---
title: Release Checklist
layout: single
sidebar:
  nav: "for_developers"
---

### What this covers

We use the following versioning scheme `v6.MM/PP` (text) or `v6-MM-PP` (git tag):
  - `MM`: even numbers for production releases; odd for development releases
  - `PP`: even for releases; odd for ROOT commits outside a tag
  - release candidates are development releases.

See also [ROOT versioning scheme]({{ 'about/versioning/' | relative_url }}) for a more public-facing description.

This page covers the following:
- Creation of release branches: production releases (`v6.32/06`) are always tags on a release branch (`v6-32-00-patches`).
- Releases: tags and binaries.

### Create a production release branch from `master`

This assumes you try to create `v6-32-00-patches`, adjust accordingly.

  1. Create the branch point
      - check out `master`
      - this requires a new development release as release candidate, follow "Produce a new ROOT release" below
      - tag the most recent version update on `master` (`"Update ROOT version files to v6.33/01."`) as `v6-33-01` to give some context to `git describe`.
  1. Create the release branch
      - for root.git:
        * check out the development release tag: `git checkout v6-33-02`
        * create the branch: `git switch -c v6-32-00-patches`
      - for roottest.git:
        * check out master
        * create the branch: `git checkout -b v6-32-00-patches`
  1. Update the reference guide build procedure
      - in `documentation/doxygen/Doxyfile` set `GENERATE_QHP          = NO`
      - in `documentation/doxygen/Makefile` remove the line `gzip $(DOXYGEN_IMAGE_PATH)/ROOT.qch`
      - in the web site repository, in the file [`reference/index.md`]({{'reference' | relative_url }}),
        add the line corresponding to this release.
  1. Update version number
      - Since 6.30:
        - Change `core/foundation/inc/ROOT/RVersion.hxx` to `6.31.99` in preparation of `v6.32.00`.
      - Before 6.30:
        - Change `build/version_number` to `6.31/99` in preparation of `v6.32/00`.
        - Run from the build directory `$ cmake .; make version`
  1. Tag the release candidate: `git tag -a v6-32-00-rc1`
  1. Push tags and branches
      - `git push origin v6-32-00-patches` (for root.git and roottest.git)
      - `git push origin v6-33-01`
  1. Create the Jenkins procedures
      - on [New Release Job](https://lcgapp-services.cern.ch/root-jenkins/view/Releases/newJob) state `root-release-6.32` as "item name" and set (all the way at the bottom) "Copy from" to the release before (`root-release-6.30` in the v6-32 example case); "Add to current view" should be set.
        * in "This project is parametrized" / "Validating String Parameter" / "VERSION", put "v6-32-00-patches" as "Default Value"
        * in "Configuration Matrix" / "User-defined Axis" / "V", put "6-32" as "Values"
        * adjust `Node/Label` / `Labels` as needed, update the "Matrix Combination Parameter" `COMBINATIONS` accordingly (you need to click "Advanced..." to actually see it)
      - on [New Nightly Job](https://lcgapp-services.cern.ch/root-jenkins/view/ROOT%20Nightly/newJob) state `root-nightly-v6-32-00-patches` as "item name" and set (all the way at the bottom) "Copy from" to the release before (`root-nightly-v6-30-00-patches` in the v6-32 example case); "Add to current view" should be set.
        * Update its values as for the release procedure.

### Produce a new ROOT release

  1. Get the 'green' light from all main developers
  1. Check that all the [nightlies](https://github.com/root-project/root/actions?query=event%3Aschedule){:target="_blank"} builds are green
  1. Run with `valgrind` on `python tutorials/pyroot/hsimple.py`, `tree/dataframe/test/dataframe_concurrency`, and `./roofit/roofit/test/testRooParamHistFunc`; make sure no memory errors are reported after applying `--suppressions=$ROOTSYS/etc/valgrind-root.supp` and `--suppressions=$ROOTSYS/etc/valgrind-root-python.supp`
  1. Verify that no performance regressions exist in the [benchmark system](https://rootbnch-grafana-test.cern.ch/){:target="_blank"}
  1. **MUST** update the potentially security relevant builtin externals: `openssl` (see `builtins/openssl/CMakeLists.txt`), `net/http/civetweb`, xrootd (see `builtins/xrootd/CMakeLists.txt`), davix (see `builtins/davix/CMakeLists.txt`).
  1. Should update other builtin externals, see `builtins/`
  1. If this is not a development release nor a release candidate, update the release notes in `README/ReleaseNotes/vXXX/index.md`. If this is a patch release, edit release notes patches section at the end of the document.
      - Insert the list of fixed bugs and enhancements etc behind the general release announcement for that version. They come from both Jira and Github:
      - Jira project management
        * Create the next patch ("6.32.02") or major ("6.24/00") version in the [project configuration](https://sft.its.cern.ch/jira/plugins/servlet/project-config/ROOT/versions){:target="_blank"}
        * 'Release' the version you want to release, assigning open issues to the next patch or major release.
        * From the [list the versions in JIRA](https://sft.its.cern.ch/jira/projects/ROOT?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page&status=released){:target="_blank"}, select the version and then 'release notes'
      - GitHub project management
        * Run `python3 ./get_solved_issues.py --project-name v6.32.00` to copy and paste the fixed GitHub issues into the release notes.
        * Go to this version's [GitHub project](https://github.com/root-project/root/projects/) (e.g. [Fixed in 6.32.08](https://github.com/root-project/root/projects/10) when releasing 6.32.08). On the right column header, click "<" until the column header reads "Menu" with a hamburger menu next to it. Below, to the right, you see "...". Click, select "Copy", and enter the name of the *next* production or patch release. Don't forget to remove the leading "[COPY]"! Owner is `root-project/root`.
        * In "..." next to the currently to-be-released version's [GitHub project](https://github.com/root-project/root/projects/), hit "Close project". (No more bugs will be fixed in it: we are releasing it!)
      - Commit your new release notes: `git commit README/ReleaseNotes/v632/index.md`
  1. Update the version number
      - Since 6.30: edit `core/foundation/inc/ROOT/RVersion.hxx`.
      - Before 6.30:
        - Edit `build/version_number`. For release candidates, leave the version number at the development release number corresponding to the `-rc1` candidate.
        - Run from the build directory `$ cmake . && make && make version`
  1. Tag and push main ROOT repository
        - `git tag -a v6-32-02`
        - `git push upstream v6-32-02`
  1. Tag and push ROOTTEST repository
        - `git tag -a v6-32-02`
        - `git push upstream v6-32-02`
  1. Produce binary tar-files (optional for development releases and release candidates)
      - Go to the [`Actions` tab on the root repository page](https://github.com/root-project/root/actions)
      - Select the `ROOT CI` workflow
      - Click on the `Run workflow button`
      - Select the branch for which the release is being made. For example select `v6-32-00-patches` if you are releasing `6.32.16`
      - Select for the fields `rebase from` and `... to ...` the name of the tag for the release, e.g. `v6-32-16` (this information will be used for the checkout)
      - De-select the `Do incremental build` radio button
      - Select the `Create binary packages and upload them as artifacts` button
      - Select for the `The CMAKE_BUILD_TYPE to use for non-Windows` radio-button the value `Release`
  1. Make source tar file and copy onto the download area _[not on a MacOS machine](https://superuser.com/questions/318809/linux-os-x-tar-incompatibility-tarballs-created-on-os-x-give-errors-when-unt){:target="_blank"}_:
      - `git clone --depth 1 --branch v6-32-06 https://github.com/root-project/root`
      - `mkdir build && cd build && cmake -Dminimal=ON -DCMAKE_BUILD_TYPE="Debug" ../root; make distsrc` 
      - `scp ../root_vX.YY.ZZ.source.tar.gz usr@srv:/var/www/root/download/`
  1. Update to the next development version
      - Since 6.30, edit `core/foundation/inc/ROOT/RVersion.hxx` (odd patch number)
      - Before 6.30, edit `build/version_number` (odd patch number); `$ cmake . && make version`
  1. Push to the the changes and unlock the branch, both in the `root` and `roottest` repositories.
  1. Fix build errors!
      - `make` must succeed
      - Deprecations will now create build errors, fix them
  1. Update the stable branch. The command below creates a commit that appears as a merge to git porcelain commands, but that directly points to the tree given by the `LATEST_STABLE` commit-ish. Users that have cloned this branch will receive updates as a fast-forward via `git pull`
      - `$ LATEST_STABLE=v6-xx-yy    # e.g. v6-32-02`
      - `$ git fetch upstream latest-stable:latest-stable`
      - `$ git update-ref refs/heads/latest-stable $(git commit-tree $LATEST_STABLE^{tree} -p refs/heads/latest-stable -p $LATEST_STABLE^{commit} -m "Updated 'latest-stable' branch to $LATEST_STABLE")`
      - `$ git push upstream latest-stable`
  1. Install binaries to CVMFS (optional for development releases and release candidates)
      - Install release binaries to CVMFS with the Jenkins procedure [root-release-CVMFS](https://lcgapp-services.cern.ch/root-jenkins/job/root-release-CVMFS/){:target="_blank"}
  1. Create a release page on GitHub, pointing to the release page on the website and the associated release notes, and upload all the relevant artifacts (sources and binaries).
  1. Update the release pages (optional for development releases and release candidates)
      - Generate the release notes with the Jenkins procedure called [root-releasenotes](https://lcgapp-services.cern.ch/root-jenkins/job/root-releasenotes/){:target="_blank"} with `v6-32-00-patches` or similar as version. They'd show up [here for v6.32](https://root.cern/doc/v632/release-notes.html).
      - Wait until the files show up on a machine with cvmfs, e.g. lxplus, in `/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/6.32.02`.
      - On that machine with cvmfs, create a new release web page with the script `python3 _releases/make-release-page.py _releases/release-63202.md` in ROOT's website repo.
      - Add a 'highlights' section in the generated release page.
      - If this applies, mark the release as `state: latest` and remove the attribute to the one previously holding it (`git grep "state: latest" -- _releases/`)
      - Create a PR against `root-project/web`.
  1. Update the list of [build options](https://root.cern/install/build_from_source/#all-build-options)
      - `cd` into main directory of the `root-project/web` repository.
      - Run `bash _releases/generateBuildOptions.sh v6-32-00-patches`. This creates the file `_includes/build_options_v6-32-00-patches.md`.
      - Modify the `install/build_from_source.md` file, appending the created file above to the list of build options dropdown items. Look for tags like `<details markdown="1"><summary markdown="span">` and add the file at the end.
      - Run `git checkout -b build-options-v632; git add _includes/build_options_v6-32-00-patches.md install/build_from_source.md; git commit; git push` and open a PR on the `web` repository.
  1. Announcements
      - Example announcement [here](https://root-forum.cern.ch/t/root-v6-26-16-is-out/58606)
      - Send mail to the following mailing lists: root-planning@cern.ch, root-dev@cern.ch, roottalk@cern.ch, root-ambassadors@cern.ch
      - Write announcement in RootTalk [forum news](https://root-forum.cern.ch/c/news){:target="_blank"} (optional for development releases and release candidates)
      - For new major releases, consider writing a blog post for https://root.cern announcing the highlights.