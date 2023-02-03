---
description: Third-party platform dependencies
---

# Systems

We support a total of three environments — local, staging, and production. Each environment serves a specific need and is used in a specific way.

### Local

A local environment is the one created (following this guide) locally for the purposes of component development.

Developers work on a single component at a time — making, testing, and deploying changes independently of any other component. Each component is almost entirely self-contained. It has mocks of Avid services it depends on and connects to any external services it requires (such as a data source).

Getting started is as simple as cloning a single component from GitHub. There is no need to run any dependent components locally.

### Staging

The staging environment exists solely for automated testing and manual testing of infrastructure changes. It is not intended to be used for manual, exploratory testing prior to releasing software.

When developing a frontend component it will usually load any dependent micro frontends from the staging environment and call staging APIs if it depends on backend services.

## System Access

Developers require access to a number of systems to debug, test, and deploy changes. Before getting started, confirm you can access each of the following:

* _Owner_ access to [Avid GitHub repos](https://github.com/avidaml)
* Staging Azure Kubernetes Service - Azure login
* [Avid pipelines](https://app.circleci.com/pipelines/github/avidaml) in CircleCI - use GitHub login
* Avid 1Password _Development_ directory
* [LaunchDarkly](https://app.launchdarkly.com)
* Auth0 login
* Slack
* [Instana](https://lavender-luna0zpavv.instana.io)
* MongoDB Staging clusters
* Terraform(only needed when you configure infrastructure)

**Turn on MFA for all platforms!!**
