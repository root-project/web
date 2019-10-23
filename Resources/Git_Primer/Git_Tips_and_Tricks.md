---
title: Git Tips and Tricks
layout: single
sidebar:
  nav: "resources"
toc: true
---

## Overview

This page gives some helpful hints and tricks on using git, along with a suggested work-flow, with an explanation of its motivation and details.

## Some pertinent Git details

It is assumed at this point that you have a passing familiarity with CVS and/or Subversion; and that you have at least obtained a local copy (cloned) of a remote repository.

*   Unlike CVS and SVN, every local working area is also a repository.
*   Unlike CVS and SVN, repositories are _not_ sub-divisible: in the former systems, one can easily check out only a subsection of a package; with git, it's all-or-nothing.
*   A repository may have zero or more remote repositories to which items may be pushed (or from which they may be retrieved): Git is a truly distributed system.
*   Branches are easy to create, merge and destroy.
*   The, "unit of change" is a commit, labeled by its SHA1 hash. A tree's, "state" is a collection of commits. Merging branches multiple times is therefore trivial because it consists of comparing commit lists.
*   Git commit trees do **not** record history: they record changes. A simple change has one parent. Creating a branch creates another child of the parent commit; and a non-trivial merge joins two branches -- the resulting commit has two parents.

## Git (very) basics

### Getting help

*   `man git`
*   `git help <command>`
*   `man git-<command>`
*   [The git community book](http://book.git-scm.com/index.html)
*   [Pragmatic Guide to Git](http://www.pragprog.com/titles/pg_git/pragmatic-guide-to-git)
*   [Google](http://www.google.com/)

### Glossary

*   **Add**: put a file (or particular changes thereto) into the index ready for a commit operation. Optional for modifications to tracked files; mandatory for hitherto un-tracked files.
*   **Alias** shorthand for a git (or external) command, stored in a `.gitconfig` file.
*   **Branch**: a divergent change tree (eg a patch branch) which can me merged either wholesale or piecemeal with the master tree.
*   **Commit**: save the current state of the index and/or other specified files to the local repository.
*   **Commit object**: an object which contains the information about a particular revision, such as parents, committer, author, date and the tree object which corresponds to the top directory of the stored revision.
*   **Dirty**: a working area that contains uncommitted changes.
*   **Fast-forward**: an update operation consisting only of the application of a linear part of the change tree in sequence.
*   **Fetch**: update your local repository database (**not** your working area) with the latest changes from a remote.
*   **HEAD**: the latest state of the current branch.
*   **Index**: a collection of files with stat information, whose contents are stored as objects. The index is a stored version of your working tree. Files may be staged to an index prior to committing.
*   **Master**: the main branch: known as the trunk in other SCM systems.
*   **Merge**: join two trees. A commit is made if this is not a fast-forward operations (or one is requested explicitly.
*   **Object**: the unit of storage in git. It is uniquely identified by the SHA1 hash of its contents. Consequently, an object can not be changed.
*   **Origin**: the default remote, usually the source for the clone operation that created the local repository.
*   **Plumbing**: the low level core of git.
*   **Porcelain**: higher level, user-visible interfaces to the plumbing.
*   **Pull**: shorthand for a fetch followed by a merge (or rebase if `--rebase` option is used).
*   **Push**: transfer the state of the current branch to a remote tracking branch. This must be a fast-forward operation (see merge).
*   **Rebase**: a merge-like operation in which the change tree is rewritten (see Rebasing below). Used to turn non-trivial merges into fast-forward operations.
*   **Ref**: a 40-byte hex representation of a SHA1 or a name that denotes a particular object.
*   **Remote**: another repository known to this one. If the local repository was created with "clone" then there is at least one remote, usually called, "origin."
*   **Stage**: to add a file or selected changes therefrom to the index in preparation for a commit.
*   **Stash**: a stack onto which the current set of uncommitted changes can be put (eg in order to switch to or synchronize with another branch) as a patch for retrieval later. Also the act of putting changes onto this stack.
*   **Tag**: human-readable label for a particular state of the tree. Tags may be simple (in which case they are actually branches) or annotated (analogous to a CVS tag), with an associated SHA1 hash and message. Annotated tags are preferable in general.
*   **Tracking branch**: a branch on a remote which is the default source / sink for pull / push operations respectively for the current branch. For instance, origin/master is the tracking branch for the local master in a local repository.
*   **Tree-ish**: a ref pointing to either a commit object, a tree object, or a tag object pointing to a tag or commit or tree object.
*   **Un-tracked**: not known currently to git.

### Initializing a repository

    git clone <repository-spec> <local-dir>

or

    mkdir <local-dir>
    cd <local-dir>
    git init

<span>or (FNAL Redmine-specific)</span>

    rclone [-r <repo>] <project> <local-name>

where `rclone` is defined in cet-chg:export:unix-admin/profile.d/rclone.sh

### Basic log information.

    git log [<tree-ish>]

*   **Important tip**: log messages have an optional structure, since many git commands only look at the first line. Get into the habit of putting only a short synopsis on the first line of a log message and putting more detailed information on subsequent lines. You can omit the `-m` option entirely and an editor (as specified with `VISUAL` or `EDITOR`) will be started.
*   This command is _extremely_ versatile. You may want to have a couple of aliases defined in your .gitconfig file (see attached [gitconfig](https://cdcvs.fnal.gov/redmine/attachments/download/4738) for ideas).

### Working in your local repository

*   Obtain differences with

        git status

*   Move files from one part of your directory tree to another:

        git mv <old-path> <new-path>

*   Delete unwanted tracked files:

        git rm <path>

*   Add un-tracked files:

        git add <un-tracked-file>

*   Stage a modified file for commit:

        git add <file>

*   Commit currently-staged files:

        git commit -m <log-message>

*   Commit only specific files (regardless of what is staged):

        git commit -m <log-message>

*   Commit all modified files:

        git commit -a -m <log-message>

*   Un-stage a previously staged (but not yet committed) file:

        git reset HEAD <file>

*   Examine a representation of your change tree with log files and patch descriptions:

        gitk

*   Get differences with respect to the committed (or staged) version of a file:

        git diff <file>

*   Get differences between local file and committed version:

        git diff --cached <file>

### Basic interaction with local branches

*   Create (but do **not** switch to) a new local branch based on the current branch:

        git branch <new-branch>

*   Create and switch to a local branch based on the current branch:

        git checkout -b <new-branch>

*   Change to an existing local branch:

        git checkout <branch>

*   Examine the list of commits in the current branch **not** reflected in another branch:

        git cherry -v <branch>

*   Merge another branch into the current one:

        git merge <branch>

*   Delete a local branch (eg after merging):

        git branch -d <branch>

    OR (if changes have not been completely merged but you're sure you want to delete anyway):

        git branch -D <branch>

### Basic interaction with a remote branch

Assuming you created your local repository with `git clone`, there is already one configured remote _origin_ and you will have a local branch for each remote branch that existed at the time of your last `pull` or `clone`.

*   Get the current list of remotes (including URIs) with

        git remote -v

*   Get the current list of defined branches with

        git branch -a

*   Change to (creating if necessary) a local branch tracking an existing remote branch of the same name:

        git checkout <branch>

*   Update your local repository ref database without altering the current working area:

        git fetch <remote>

*   Update your current local branch with respect to your repository's current idea of a remote branch's status:

        git merge <branch>

*   Pull remote ref information from all remotes and merge local branches with their remote tracking branches (if applicable):

        git pull

*   Examine changes to the current local branch with respect to its tracking branch:

        git cherry -v

*   Push changes to the remote tracking branch:

        git push

*   Push all changes to all tracking branches:

        git push --all

## Some more advanced operations

*   **Important tip**: if you're going to do a git operation the outcome of which is _even remotely_ uncertain to be the desired one: **make a copy of your repository**:

        mkdir -p <path-to-safe-dir>
        tar -cf - . | tar -xC <path-to-safe-dir>

    Disk space is cheap and `rm -rf` is easy. Note that you must copy the **entire** repository, since all the important information is in the `.git` directory tree at the top level.

### Stashing

This is a good way quickly to get a clean tree if you want to `merge` or `rebase` (see below) to import changes from a branch without having to commit your current work.

*   Save uncommitted changes to the current working area to the stash (**not** a commit operation):

        git stash

*   Apply previously-saved stash:

        git stash pop

    (pops off the changes and applies them to the current working area) or

        git stash apply

    which applies the changes but retains them on the stack.
*   Examine the current state of the stash:

        git stash list

*   Clear the entire stash:

        git stash clear

### Rebasing

Rebasing is **changing history**, if you think that git stores history. As mentioned above, it doesn't: it saves objects with parent, child and other (eg date, author, etc) information. In a truly distributed environment, the actual history will be different for every repository depending exactly how and when changes were fetched, merged or pushed.

Rebasing is a good way to do a couple of things:

1.  "Squash" related commits in your local repository prior to a push (eg, "Implement feature X," "Tests for feature X" and, "Fix bugs found while testing feature X").
2.  Simplify merging branches and keeping up-to-date with remote changes during long periods between pushes.

*   **Important tip**: do not attempt to `rebase` anything that has already been pushed to a remote repository. Your next push will almost certainly fail (and quite right too).

#### Squashing related commits:

*   Squash some of the last few commits in your current branch:

        git rebase -i HEAD~5

    Your configured editor (`VISUAL` or `EDITOR`) will be started and contain a list of your last five commits (most recent at the bottom) along with instructions on what to do. Commits can have their log messages reworded; commits can be removed entirely, combined with other commits or re-ordered. If you specified any rewording or squashing, you will be taken to an edit session for the commit message(s) after saving and exiting the current edit session.
*   Squash, re-order or reword commits since divergence from <branch>:

        git rebase -i <branch>

#### Keep up to date with remote branches without merging.

    git pull --rebase

or

    git fetch <remote>
    git rebase <remote>/<branch>

### Resolving conflicts

Any `pull`, `merge`, or `rebase` operation can result in a conflict during the application of a particular change from the remote branch. Follow the on-screen instructions to resolve problems. This will usually consist of doing a `git status` to list conflicts, editing the files and using `git add` to mark each conflict resolved. The process **must** either be allowed to continue by issuing a `git rebase --continue` or `git merge --continue` command, or the operation can be reverted with `--abort` instead of `--continue`. If in doubt, **copy your repository**.

### Making a new remote branch

*   Create a new **local** branch based on an existing one:

        git checkout -b <branch>

*   Do stuff.
*   Push the branch to the remote:

        git push <remote> <local-branch-name>[:<new-remote-branch-name>]

### Tagging

*   Tag the current state of a branch (eg for release):

        git tag -am <message> <version>.

    Note that the `-a` creates an `annotated` tag, which is itself a commit with a hash and a commit message. This is the closest analogue to the CVS tag command. Omitting the `-a` option will create a, "simple tag" which is actually a branch. In general, you will probably prefer annotated tags with version-branches created explicitly as desired.
*   Push the tag to the remote:

        git push --tags

#### Special notes on mis-tagging.

There are several things that can go wrong with tagging:

1.  One can omit an intended `-a` option;
2.  One can misspell the tag; or
3.  One can omit or (horror!) fix a file and wish to update the tag.

_If you have not pushed tags yet_ (See above) then the fix is trivial: for the first two cases, remove the erroneous tag with `git tag -d <tag>`; for the third, re-tag with `git tag -am <mesasge> [<tree-ish>]`. **However**, if you have already pushed tags, there are wider consequences. For this reason, altering pushed tags is _emphatically_ discouraged: create a new tag. However, since you're going to ignore me and do it anyway, here's how to do what you want without getting into too much of a mess:

1.  To remove an erroneous tag, someone with the manager rôle on the project must log into `cdcvs `directly as the repository user (_e.g._ `p-art`), `cd` to the bare repository with `cd /cvs/projects/<project>` and then remove the tag with `git tag -d <tag>`.
2.  Back in your working directory, tag correctly and then push tags.
3.  Now, you **must** alert all your developers that, if they have pulled the erroneous tag to their local repository, they will need to remove the tag from their local repository with `git -d <tag>` and then re-pull from the repository. Otherwise, deleted tags will keep re-appearing in the remote repository and/or users will be unable to pull or push to the remote.

### Undo the last commit:

*   Undo the commit:

        git reset --soft HEAD^

*   Do stuff.
*   Recommit:

        git commit -a -m <message> -c ORIG_HEAD

    Note that the `-c ORIG_HEAD` clause causes git to use the meta-data from the previous HEAD (author, etc) with the exception of the commit message. Changing the `-c` to `-C` and omitting the `-m` option will cause git to reuse the commit message too.

### Recover deleted (committed files)

*   Get a list of all commits with deleted files:

        git log --diff-filter=D --summary | less

*   Find your file and note the SHA1 hash for that commit.
*   Recover it:

        git checkout <commit>^ -- file

### Stage selected changes within a file

*   git add --patch <file>

*   Follow the on-screen directions.

## Tig: a simple and colored text-mode interface for Git

Tig is a command line tool that wraps many Git browse operations (like log, diff, show, status) in a colored text-mode interface based on ncurses. Tig has been written by Jonas Fonseca.

See the [full Tig manual](http://jonas.nitro.dk/tig/manual.html) for a detailed description.

### Obtaining Tig

Tig is available as package from many Linux distributions. On Debian/Ubuntu it is available with the package name tig from the default repositories.

On RHEL-based systems it is available from the additional repository [RepoForge](http://repoforge.org/).

On OS X it is easily installed via Homebrew:

    brew install tig

### Tig pager mode

Many git commands can be piped into tig. When tig is invoked this way, it is in **pager mode**: output will be colored according to the input format, and colored.

For instance it is possible to pipe the differences of one file like this: 

    git diff path/to/file.cxx | tig

or see the changes of one revision like this:

    git show b204d4c87 | tig

The most important interactive tig commands are:

*   'h': opens the help screen
*   'q': closes current window
*   'Q': closes all windows and exits

### Log view

Tig invoked without any argument spawns a full log view with one line per commit including author, date and log message. Heads of the different branches are clearly indicated. To see a graph view indicating branching graphically (just like <tt>git log --oneline --graph</tt>), do:

    tig --all

[![tig --all](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-main-all.png)](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-main-all.png)

A log can be selected with Enter to see the revision changes.

An example of useful application of the log view is interactive cherry-picking: just press 'C' to cherry-pick currently selected commit into your current branch.

### Blame view

Blame view is extremely useful to see which lines were committed by whom. It is an improved version of the standard git blame command with a much clearer and interactive output.

Each line can be selected to display the associated full commit log and diff.

[![tig blame](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-blame.png)](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-blame.png)

Usage:

    tig blame path/to/file.cxx

### Interactive staging and current status

<span style="font-family: 'Courier New';">tig status</span> opens an interactive display to quickly select files to be staged. Move over the file and press 'u' to (un)stage it.

[![tig status](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-status.png)](http://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/u2/tig-status.png)

## The .gitconfig file

This file contains global (`~/.gitconfig`) or repository-local configuration settings. You can (eg):

*   Set user and email information to label commits usefully:

        git config --global user.name "Chris Green" 
        git config --global user.email <email-address>

*   Set colors for various types of command output.
*   Set which local branches track which remote branches.
*   Set pull behavior for branches to be rebase rather than merge.
*   Define aliases as shortcuts for internal or external commands.

See the attached .gitconfig example. Have fun!

Reproduced with permission from the following page:  [https://cdcvs.fnal.gov/redmine/projects/cet-is-public/wiki/GitTipsAndTri...](https://cdcvs.fnal.gov/redmine/projects/cet-is-public/wiki/GitTipsAndTricks#A-suggested-work-flow-for-distributed-projects-NoSY) by <span class="author">Chris Green</span>