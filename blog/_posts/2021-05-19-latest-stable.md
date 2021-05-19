---
title: "New 'latest-stable' branch in git repository"
layout: archive
author: Javier Lopez Gomez
---

This post is a must-read for advanced users that build ROOT from source. Starting with 6.24, we provide a new branch named `latest-stable` that will be regularly updated after each release. If you want to know more, keep reading!

We have listened to you! This is for people who want the latest - without trying out things before they are released: a new major version twice a year, else bug fixes, i.e. always the latest version that went through the release validation.

Before this change, the instructions to [build from source]({{'/install/build_from_source' | relative_url}}) suggested to clone the latest tagged release (or patches branch). This turns out to be inconvenient, as the tag/branch names for the latest available version change after each release, e.g., as of this writing, the latest tagged release is `v6-24-00` that will soon be superseded by `v6-26-00`. As a consequence, a user that wants to build from source the latest release, had to check the tag/branch name before issuing the `git clone` command.

Starting with the 6.24 release, we created the `latest-stable` branch, which is targeted at users that regularly build ROOT from source. Furthermore, we will automatically provide updates to the latest tagged release to users that already checked out this branch.

## Great! How do I use it?
Before getting hands-on, keep in mind that building from source is for advanced users. The preferred method for regular users to install ROOT is via pre-compiled packages. More on that can be found in the [install]({{'/install' | relative_url}}) guide.

That said, our aim was to make this really simple for those who are used to build ROOT from source. And that's now as simple as:
```bash
$ git clone --branch latest-stable https://github.com/root-project/root.git root_src
```

Then, you can follow the rest of the instructions in [build from source]({{'/install/build_from_source' | relative_url}}) as usual.

But we didn't stop there. This branch will be updated regularly after each release, which means that you can easily upgrade ROOT to the latest release by simply:
```bash
$ git pull
$ cd <empty build dir>
$ # build as usual
```

## Summary
We hope that this change saves time (and avoids issues) for users that build ROOT from source. If you face any problem while using this new branch, please feel free to report it [here](https://github.com/root-project/root/issues).

Special thanks go to Jonas Hahnfeld for our discussions on the optimal approach, and to the rest of the ROOT team for providing useful feedback.