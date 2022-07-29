# ROOT Web Site

The website is deployed at https://root.cern.

This new web site is based on [jekyll](https://jekyllrb.com/).

It uses [a modified version](https://github.com/root-project/minimal-mistakes) of the ["Minimal-Mistakes" theme](https://mmistakes.github.io/minimal-mistakes/).

## Test deployment of pull requests

Pull requests from branches in the root-project/web repo itself are deployed at `https://root.cern/<PRNUMBER>`.
Pull requests from forks of this repository will not be deployed.
Note that whenever a new version of the website is deployed, all PR deployments are deleted. Simply re-run the github workflow for the PR to re-deploy it.

