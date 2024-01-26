---
title: GitHub Actions
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "for_developers"
---

The ROOT project uses a GitHub Actions for continuous integration and delivery.


## About

For building the Docker images we use GitHub's runners.
For everything else, [runners are hosted at CERN](https://github.com/root-project/root/settings/actions/runners).
Linux runners are Docker images; macOS and Windows are native (mac minis / OpenStack VMs).

## Nightly builds, on-merge builds, PR builds, building releases

All builds share the same infrastructure.
Nighly builds are triggered (`schedule:`); this only works for `master` and needs a wrapper (`.github/workflows/all-branches.yml`) to then trigger nightly builds for the relevant branches (to be implemented).
PR builds are incremental builds that grab the last on-merge build's build artifacts (source + build dir), apply the PR's source changes, build and test.

On-merge builds are full builds that update the build artifacts: before running roottest, the source and build directories are uploaded to [OpenStack's S3 storage](https://openstack.cern.ch/project/containers/container/ROOT-build-artifacts) (project `ROOT-build-artifacts`).
These build artifacts use the hash of the cmake invocation as key: if the on-merge build and the PR builds are using different CMake invocations, the PR build will be a full build, not an incremental one, because no build artifacts can be found for its CMake configuration.

Release builds can be [triggered by hand](https://github.com/root-project/root/actions/workflows/root-ci.yml) ("Run workflow").
They produce binary releases that get linked at the bottom of the Action's build page; GitHub stores them for 90 days.
Due to a [limitation in the GitHub artifact upload](https://github.com/actions/upload-artifact#zip-archives), each job can only upload a single file; multiple files will get combined and compressed.
This means that e.g. macOS artifacts (producing `.tar.gz` and `.pkg` binaries in one go) will need to be decompressed before uploading to `root.cern`.

## Registering a machine as a GitHub Actions Runner:

**For Linux runners** see: [Adding Linux runners](#addingconfiguring-linux-runners)_

Open <https://github.com/root-project/root/settings/actions/runners>.
Click the "New self-hosted runner" button and follow the instructions.
([Or click here](https://github.com/root-project/root/settings/actions/runners/new))

Runner requirements
 - Python 3
 - [openstacksdk](https://pypi.org/project/openstacksdk/)
 - [ROOT dependencies](/install/dependencies/) - but better start from an existing `packages` file.


### MacOS

Install the runner as a system service by following the instructions at the
[GitHub docs](https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)
([click here for archive link](https://web.archive.org/web/20230326064042/https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service))


### Windows

When asked to install the runner as a service, enter `yes`.


## Adding/Configuring Linux runners

Our Linux runners just start a Docker container.
This section documents the configuration of these Docker containers and of their underlying hosts (runners).

### Configuring Docker containers

Python packages or distro package dependencies are added not to runners but to the Docker images they run, see <https://github.com/root-project/root-ci-images>.
They can use a python3-venv / python3-virtualenv if set up at `/py-venv/ROOT-CI`.

These images are built on a daily basis; updated images are uploaded to CERN's [Harbor](https://registry.cern.ch/harbor/projects/3531/repositories) registry.

### Linux runners

The following is for managing the machines themselves.

--> [TL;DR FOR CREATING A RUNNER HERE](#creating-a-new-runner) <--

Linux runners are configured using [Puppet](https://www.puppet.com/docs/puppet/5.5/puppet_index.html)
and managed with [Foreman](https://theforeman.org/). The most relevant
documentation for configuration can be found on [ConfigDocs](https://configdocs.web.cern.ch/index.html).

The Puppet configuration of the runners are stored on GitLab at:
<https://gitlab.cern.ch/ai/it-puppet-hostgroup-lcgapp/>

We use podman, not docker; this and a bug in GH runners requires us to use a
[podman-docker-wrapper](https://gitlab.cern.ch/ai/it-puppet-hostgroup-lcgapp/-/blob/master/code/files/github_ci/wrapper.py?ref_type=heads) script.

Although using management tools is annoying (even awful), they simplify batch
operations and ensure uniformity. Here are some examples of common tasks to show
the strengths of Foreman/Puppet.


### Creating a new runner

```sh
# Node management has to be done in aiadm
ssh aiadm.cern.ch

# Switch to appropriate project
eval $(ai-rc 'PH LCGAA')

# Create a foreman managed cs8 runner with 16 vcpus, 32 GB ram
ai-bs --nova-flavor m2.2xlarge \
      -g lcgapp/build/root \
      --alma8 \
      --foreman-environment production \
      githubci-lcgapp-XX
```

Note that no further setup is needed. It takes **about 20-30 minutes** for the new
runner to come online.

To subsequently remove a runner, run `ai-kill githubci-lcgapp-XX`.

### Runner secrets

The runner authenticates to GitHub using a token for adding new runners.
The runner uses a script `configure_install_runner.sh` to do query GitHub for that "new runner" token, using the GitHub API.
To be authorized to use that API, the script needs a token; Puppet retrieves that from Teigi (you can see it with `tbag show --hg lcgapp/build/root github_pat_root`) and stores it in `/pat.txt`.
To define Teigi secrets, follow [the doc](https://configdocs.web.cern.ch/secrets/adding.html).

The current secret is a Personal Access Token; it needs `repo` scope.
You can just create your own and replace the original one.

### Adding a script to clean old containers

The following is intended as an example to show how to change behavior of the
runners (outside of the containers). In a perfect world, this will never have to
be touched.

Clone the configuration repository in aiadm, edit the CI runners config:

```sh
git clone https://gitlab.cern.ch/ai/it-puppet-hostgroup-lcgapp.git

cd it-puppet-hostgroup-lcgapp

$EDITOR code/manifests/build/root.pp
```

Add cleanup script and cronjob to run it:
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

Update github actions environment:

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

Now it usually takes about 1 hour for the changes to show up. To immediately
have a node pull the changes to verify that the new feature is functional, we
can ssh into one of the nodes and run `puppet agent -t`.

Here is a utility script for running `puppet agent -t` on all machines.
```sh
# First machine's number
start=0

# Last machine's number
end=20

pullChange() {
    echo "refreshing $1"
    ssh -oStrictHostKeyChecking=no -f "$1" 'puppet agent -t'
}

for i in $(seq -f "%02g" $start $end); do
    pullChange root@githubci-lcgapp-$i &
    sleep 1
done
```

