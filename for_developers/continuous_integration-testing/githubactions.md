---
title: GitHub Actions
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT project uses a GitHub Actions for continuous integration and delivery.

## Node ("runners") configuration

For building Docker images we use GitHub's runners.
For everything else, [runners are hosted at CERN](https://github.com/root-project/root/settings/actions/runners).
Hit the "New self-hosted runner" button to add a runner.

## MacOS

To install the Runner service, execute run `./run.sh install`.

## Linux

Linux runners are configured using [Puppet](https://www.puppet.com/docs/puppet/5.5/puppet_index.html)
and managed with [Foreman](https://theforeman.org/). The most relevant
documentation for configuration can be found [here](https://configdocs.web.cern.ch/index.html).

The Puppet configuration of the runners are stored on GitLab at:
https://gitlab.cern.ch/ai/it-puppet-hostgroup-lcgapp/-/tree/rootci_test

Although management tools add a lot of complexity, they also simplify batch
operations and ensure uniformity. Here are some examples of common tasks.

### Adding 10 extra runners with identical config

Let's imagine we currently have 21 runners from `githubci-lcgapp-00` to
`github-lcgapp-20`. To add 10 new runners from 21 to 30 we do:

```bash
# The following has only been tested with bash

# Switch to relevant project
eval $(ai-rc 'PH LCGAA')

# Set relevant configuration (here are sensible defaults)
flavor='m2.2xlarge' # 16 vcpus, 32 GB ram
name_prefix='githubci-lcgapp'
node='lcgapp/build/root' # where the runner configuration is
environment='rootci_test' # which branch the config is on

# Create runners from 21 to 30
for i in $(seq -f "%02g" 21 30); do
    ai-bs \
        --nova-flavor $flavor \
        -g            $node   \
        --cs8                 \
        --foreman-environment $environment \
        "${name}-${i}"
done
```


### Adding a pre-run script to clean old containers to all runners

Clone the configuration repository in aiadm, edit the CI runners config

```sh
ssh aiadm@cern.ch

git clone https://gitlab.cern.ch/ai/it-puppet-hostgroup-lcgapp.git

cd it-puppet-hostgroup-lcgapp

$EDITOR code/manifests/build/root.pp
```

Add cleanup script and cronjob to run it
```puppet
#code/manifests/build/root.pp
  # Add cleanup script for github runners
  # https://docs.github.com/en/actions/hosting-your-own-runners/running-scripts-before-or-after-a-job

  file { '/cleanup_script.sh':
    ensure  => file,
    mode    => '0500',
    owner   => $runner_uid,
    content => '#!/bin/sh
podman system prune --force --volumes',
  }

  -> cron { 'clean-job':
    ensure  => present,
    command => '/clean-job.sh',
    user    => rootci,
    hour    => 2,
    minute  => 0,
  }
```

Update github actions environment

```sh
$EDITOR data/hostgroup/lcgapp/build/root.yaml
```

```diff
 github_actions_runner::group: 'rootci'
+github_actions_runner::env:
+  ACTIONS_RUNNER_HOOK_JOB_STARTED: "/cleanup_script.sh"
 github_actions_runner::instances:
   root_instance2:
     repo_name: root
```
