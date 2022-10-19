---
sidebar_position: 3
description: >-
  Deploy and test software in production before releasing — in a controlled
  manner — to users
---

# Testing in Production

We favour improving our platform by frequently releasing small changes to users. In other words, continuous delivery. In support of this our pipeline delivers each and every change to production where they safely accumulate behind a feature flag until being released to end-users.

"Testing in production" is not about running a series of pre-determined test scripts — we automate much of this prior to production deployment. Rather, it is about gradually, safely, releasing our software to an ever-wider group of users who provide feedback (directly or indirectly) on the quality of our platform.

Our experience has shown that many technical issues never show up until a feature is in the hands of real users. A lot of what might go wrong simply cannot be properly tested in a development or staging environment.

## Quality assurance ecosystem

The quality of our software is dependent on an ecosystem of tools and processes. It encompasses far more than a suite of test scripts. The range of tools at our disposal includes:

* Small components to isolate the impact of change
* Small changesets to limit the scope of a change
* Code reviews
* Automated testing (unit tests, integration tests)
* Observability tools (infrastructure, service telemetry, Javascript errors, )
* Feature-flagging (A/B testing, canary releases)

## Final thoughts

One final thought on the downside of staged releases — or making code available based on deploying it — is how it changes our behaviour as a team. It can subtly encourage us to undertake larger initiatives with the attendant risk of breaking changes.
