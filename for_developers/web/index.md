---
title: Editing the ROOT website
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT team has adopted [Jekyll](https://jekyllrb.com/){:target="_blank"} for generating
the ROOT website. The ROOT website uses [a forked copy of the
"Minimal-Mistakes" theme](https://github.com/root-project/minimal-mistakes){:target="_blank"}.
Many scripts and functionalities have been added compared to this original theme.

This page provides instructions to generate a local running version of this website.
The informations presented here are largely inspired from the
[quick start page of the Jekyll website](https://jekyllrb.com/docs/){:target="_blank"}.

## Generate a local running version of the ROOT website

### Prerequisites

The prerequisites/requirements are the same presented on the
[jekyll site](https://jekyllrb.com/docs/installation/#requirements){:target="_blank"}.

### Install instructions

The install instructions differ a bit from the ones you can find on the
[Jekyll website](https://jekyllrb.com/docs/){:target="_blank"}
as you do not need to create a new website but instead
get it from GitHub. So the steps are:

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/){:target="_blank"}.
There might be compatibility issues with Ruby 3. If that is the version that comes with your system package manager,
you can install Ruby 2.7 next to it using tools like `rbenv`.

2. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler){:target="_blank"}
   [gems](https://jekyllrb.com/docs/ruby-101/#gems){:target="_blank"}.
```
gem install jekyll bundler
```

3. Get the ROOT website source from GitHub.
```
git clone https://github.com/root-project/web.git
```
You can also use your own fork, of course, but see
[Get modifications upstream](https://github.com/root-project/web/#get-modifications-upstream) below.

4. Change into your new directory.
```
cd web
```
You will notice that the current git branch is `main`
```
% git checkout
Your branch is up to date with 'origin/main'.
```
This branch is the one from which the official website is built. You can create a
new branch with your work, which you can use to create a pull request to update
`root-project/web/main`.

6. Some missing gems might need to be installed. The following command, run
   in the `web` directory, does it:
```
bundle install
```
If you'd rather install the packages in a local directory, configure `bundle` to do so
before running `bundle install`. This can be done with:
```
bundle config set --local path 'vendor/bundle'
```
Note: to update all the gem dependencies to their latest versions you can run `bundle update`.

7. Build the site and make it available on a local server.
```
bundle exec jekyll serve --baseurl="/base"
```
If you only plan to make minor modifications, you can append the `--incremental` flag
to speed up the rebuild process.

6. After about 30 seconds you should get an output similar to
```
Configuration file: /path/to/the/directory/_config.yml
            Source: /path/to/the/directory
       Destination: /path/to/the/directory/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 21.638 seconds.
 Auto-regeneration: enabled for /path/to/the/directory
    Server address: https://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

8. Your server is now running. As shown above, the website can be accessed using a URL
similar to `https://127.0.0.1:4000/`.

9. Work on the website.
   Each time you create a new file or save a modified version of a file
   the server will notice it and will regenerate the website. You will get an output
   similar to:
```
Regenerating: 1 file(s) changed at 2020-02-19 10:40:02
              for_developers/index.md
 Jekyll Feed: Generating feed for posts
              ...done in 9.877795 seconds.
```
once "`... done`" is displayed you can reload the website from your browser to see your
changes. Remember the `--incremental` can speed up serving times considerably.

It is not necessary to restart the server each time you do a modification except if you
modify the file `web/_config.yml`

You may notice that the command `bundle exec jekyll serve --baseurl="/base"` generates a folder `_site` in
the `/path/to/the/directory/web/` folder. This is the html version of the website. Do not
modify or create files in that folder. This folder is ignored by git.


## Get modifications upstream

Once you are happy with your modifications, you can publish them via a
["Pull Request"]({{ 'for_developers/creating_pr' | relative_url}}). You
can either push a branch to your fork of the website repository, and create the pull
request from your fork to [https://github.com/root-project/web](https://github.com/root-project/web), or
if you have write access to the `root-project/web` repository, you can directly push a new branch upstream.

Note that only pull requests that originate from branches that belong to the upstream repo (not forks) benefit from the
[test deployment of pull requests](https://github.com/root-project/web/#test-deployment-of-pull-requests): a preview
website with the changes contained in the PR is served from `https://root.cern/<PRNumber>` after the CI job for the PR
completes.

When a pull request is merged, [`https://root.cern`](https://root.cern/) will be updated automatically
after a short while.
