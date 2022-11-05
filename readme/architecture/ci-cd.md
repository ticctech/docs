---
sidebar_position: 2
title: CI/CD Pipelines
---

# CI/CD Pipelines

Avid's CI/CD pipelines are an intrinsic part of the platform. The ability to continuously deliver improvements is integral to the healthy operation of the system.

Avid uses CircleCI to orchestrate simple pipelines. Every pipeline operates on the premise that each commit will result in a change deployed to production (but not released to end-users).

Once deployed, changes can be safely reviewed and gradually released to a wider circle of users.

## Service pipeline

![](/img/assets/ServicesPipeline.jpg)

## Frontend pipeline

![](/img/assets/FrontendPipeline.jpg)
