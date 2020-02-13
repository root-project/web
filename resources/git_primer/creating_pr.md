---
title: Creating a Pull Request
layout: single
sidebar:
  nav: "resources"
toc: true
toc_sticky: true
---

## Prerequisites

 - You have set up git on our system
 - You have registered a GitHub account and forked the ROOT repository
 - You have cloned your forked ROOT repository using git clone https://github.com/<your GitHub username>/root

After you have cloned the repository, you will be on the master branch. Do not make
changes to the master branch, as this branch will contain the newest changes in ROOT
we will later pull in to our feature branch.

## Making your changes

Before implementing your changes, create a new branch that we will work on in
isolation from master. In this case, we will name it histogram-race-condition-fix,
but you may name it differently according to what your contribution will be.

```
git checkout -b histogram-race-condition-fix
```

After implementing your changes, add and commit your changes (More about how to use git here):

```
git add hist/hist/somefile.cxx
git commit -m "Avoid race condition on Ubuntu 16.04"
git push --set-upstream origin histogram-race-condition-fix
```

Your changes are now in your forked repository on GitHub. We will now make the pull request.

## Making the pull request on GitHub

If you go to `https://github.com/<your GitHub username>/root`, you will see a
notification saying "Your recently pushed branches: histogram-race-condition-fix
(some minutes ago)":

<img src="{{'resources/git_primer/pr_submission_view.png' | relative_url}}">

You can now hit the green "Compare & pull request" button which lets you create
the pull request.

Fill in a reasonable description of what your new feature is, and hit
"Create pull request". A project member will later initiate a build of your pull
request and then review your pull request before giving feedback and in the end
hopefully merge it. More about how what happens after submitting the pull request
can be found in the contributing readme.

## Pulling the last changes from upstream/master

Often, there might have been changes in the upstream/master repository that you
want to have together with your new changes. This section will describe how to
pull the new changes.

Add the ROOT repository upstream as a remote:

```
git remote add upstream https://github.com/root-project/root
```

Make sure you are on the master branch locally and pull the latest changes from upstream:

```
git checkout master
git pull upstream master
```

Go back to your local branch and rebase the last changes from master:

```
git checkout histogram-race-condition-fix
git rebase master
```

Push your new updated local branch to your GitHub repository (origin):

```
git push --force
```

## Summary

<center>
<img src="{{'resources/git_primer/pr_workflow.png' | relative_url}}">
</center>


The entire workflow is summarized in the image above. First, we cloned root-
project/root, and cloned it to our local machine. Then after making the commit,
we pushed the change to origin. Optionally, we can pull down the last changes
from upstream and rebase our branch onto the current master and force-push this
to origin. After this, we create a pull request on GitHub from origin. It is
important to note that it is not necessary to fork and clone for each contribution.

## Merging a pull request locally

If the pull request does not have any conflicts with the master branch, it is
possible to apply the changes locally by downloading a patch and piping it to git am with

```
wget -qO- https://github.com/root-project/root/pull/<PR#>.patch | git am
```

If you have conflicts, the preferred method is to rebase your branch onto master:

```
git remote update && git checkout master && git pull && git rebase master <your branch>
```

When a conflict exists with a commit, git will interrupt the rebase and let you
resolve them by editing your files. Once the conflict is resolved, use

```
git add <conflicting files> && git rebase --continue
```

to continue the rebasing process. After all conflicts have been resolved, you can
check that your changes are really what you want with `git log -p master..<your branch>`
then push the result (without using --force).

## Resources

 - [GitHub and Git Foundations (YouTube)](https://www.youtube.com/playlist?list=PL0lo9MOBetEHhfG9vJzVCTiDYcbhAiEqL){:target="_blank"}