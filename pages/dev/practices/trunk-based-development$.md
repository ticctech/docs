---
sidebar_position: 2
description: Merging small, frequent updates to the core “trunk” or main branch.
---

# Trunk-based Development

## Zero branching

Each developer splits the work to be done into small batches and merges into `main` (or **trunk**) multiple times a day. We don't work on a feature branch and merge back into the trunk. We commit _directly_ into the **trunk** without branches.

When it makes more sense to branch, the branch should be short-lived (1 - 2 days maximum) and limited to a single developer. The branch can be merged using a self-approved PR or by a reviewer if deemed important enough.

## Feature flags

Because the CI/CD pipeline deploys every successful commit to the production environment changesets are normally deployed behind a feature flag until the complete feature is ready to be released.

The benefit of this approach is we are always developing and testing against the latest version of our code AND our code remains "releasable" at all times. If you are used to feature branching this might seem unusual and risky at first. However, there are a number of practices that help mitigate that risk:

1. Feature-flag every change — hide every new feature or update behind a feature flag (instead of a feature branch). Feature flags can be set up to make changes available to a test tenant while hiding them from standard users.
2. CI integration tests — every feature should have a number of end-to-end integration tests that are run to as a part of the normal deployment process. The build should fail if the test fail after the Staging deploy step.

[Read more](https://github.com/avidaml/docs/tree/30cb490add2fc71e00228d94211b8589c1c2810d/practices/feature-flagging/README.md) about how to release a change using a feature flag.

Read more about [trunk-based development](https://trunkbaseddevelopment.com).
