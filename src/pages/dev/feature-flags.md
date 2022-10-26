---
sidebar_position: 3
title: Using Feature Flags
---

# Using Feature Flags

Fully committing to continuous delivery requires the ability to deliver small changes often (in other words continuously). This means reducing the number of places where new code is held up in its journey to production.

One of the biggest bottlenecks under a more traditional regime is manual testing in a dedicated test environment. Under continuous delivery, the pipeline effectively becomes blocked and changes start to back up, releases become more serious events and need careful orchestration.

Our approach is to perform manual testing in production — [testing in production](/docs/dev/practices/test-in-production). To do so safely we use feature flags to prevent untested changes from being released to end-users.

## Best practices

### Do you need a flag?

While feature flags enable continuous delivery, they increase the complexity of the codebase. Before introducing a new flag, determine the risk a particular change presents:

* What is the impact if something goes wrong?
* How many users will be impacted?
* Can this change be grouped with other changes behind a single flag (e.g. a monthly release flag)?

### Use a single flag at a time

Using several flags in a single component at one time can lead to a combinatorial explosion of code paths to test. This can be ameliorated by restricting changes to a single flag per component.

### Keep flags short-lived

Plan a flag's entire lifecycle to keep it in operation for the shortest possible time. As above, the more flags in use at any particular time the more complex the platform becomes.

Actively remove flags from code and LaunchDarkly as soon as practically possible.

## Adding a flag

#### 1. Add flag

* Add a new flag, use a current flag, or recycle an archived flag in LaunchDarkly. Turn the flag on in Staging and off for Production.
* Add the flag to related Trello cards so it is easier to track which stories are behind a particular flag.

#### 2. Write code

* Don't start on a card until it has a (valid) feature flag. Implement the feature flag before making code changes.
* Use the feature flag to restrict the visibility of changes to test scripts and test users (using user segment).

#### 3. Write tests

Update unit tests to test code with the flag both turned on and off.

#### 4. Run tests

Run manually locally. Validate data, etc. Run tests with feature flag on and off to ensure no regression issues have leaked out from behind the feature flag

#### 5. Deploy to staging

The CD pipeline will automatically deploy changes to the staging environment. If tests all pass, changes will be deployed to production.

#### 6. Deploy to production

Once deployed, the system should be monitored to ensure automated tests run using `TestRunner` service all pass.

If tests pass, make available to alpha, the beta user groups Keep running tests. Monitor logs, etc. If no issues then make feature available to all.
