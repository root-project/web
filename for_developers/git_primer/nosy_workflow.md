---
title: A suggested work flow for distributed projects, NoSY
layout: single
sidebar:
  nav: "for_developers"
toc: true
toc_sticky: true
---

## Overview

Building on the tips and other points explained elsewhere, this workflow has the following
advantages relative to always working on the master branch:

*   It is easy to keep track of upstream changes even when working on a protracted task.
*   The change tree remains simple, easy to understand at a glance and even (mostly) linear (revision trees with multiple developers can quickly start looking like a train switch yard)
*   Unsightly "merge with branch" commits are minimized.
*   It is easy to keep separate unrelated tasks upon which you may be working simultaneously.
*   Commits related to each other can be kept together or merged for increased clarity.

For the purposes of having an easy-to-remember label, I will refer to this workflow as the
"No Switch Yard" **(NoSY)** workflow.

## Details of NoSY

For each **specific, well-defined task**:

1. Create a local branch and switch to it:
```
git checkout -b <local-branch>
```
2. Work on the branch, both committing regularly and keeping up-to-date with the remote (eg):
```
git fetch origin; git rebase origin/master
```
3. When ready to push back to the main remote, squash related commits (see above).
4. Change back to your master branch:
```
git checkout master
```
5. Make sure your master is up-to-date:
```
git pull
```
6. Merge with the branch:
```
git merge --ff-only <local-branch>
```
7. If this operation fails:
8. Swap back to the other branch
```
git checkout <local-branch>
```
9. Rebase again (upstream must have changed since your last rebase):
```
git rebase origin/master
```
10. Go back to step 4.
11. Push changes to the master:
```
git push
```
12. Delete the branch:
```
git branch -d <local-branch>
```

Converting to NoSY half-way through a given set of changes.

Imagine that you have been making some commits to your local repository on the master branch, and you realize (perhaps because your project is turning out to be a bit more involved than you thought, or because a slew of changes have just appeared upstream) that you might have been better using NoSY. It's actually quite easy to swap to using NoSY without any disruption to your already-committed changes. Starting from your current position on the master branch:

Stash your current changes if appropriate:
```
git stash
```
Create (but do not switch to) a branch which will contain all your local commits up to this point:
```
git branch <local-branch>
```
Download the latest metadata from the remote:
```
git fetch origin
```
Now, reset your local master branch directly to the current state of origin/master:
```
git reset --hard origin/master
```
Note that you have not lost your local commits: they are on your local branch already.
Switch to your local branch:
```
git checkout <local-branch>
```
Do an initial sync between your local branch and the remote, resolving conflicts if necessary:
```
git rebase origin/master
```
Apply your stash, again, resolving conflicts if necessary:
```
git stash pop
```
Pick up at step 2 of the NoSY workflow above.
Reproduced with permission from the following page: https://cdcvs.fnal.gov/redmine/projects/cet-is-public/wiki/GitTipsAndTricks
