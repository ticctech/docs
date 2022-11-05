
---
title: Micro Frontend
--- 
# Micro Frontend

In this tutorial, you will be changing the `customer-web` micro frontend, deploying the change and reviewing the change, in production, behind its feature flag.

## 1. Clone service

```
git clone https://github.com/avidaml/customer-web.git
```

## 2. Add a new customer

Dynamically (in code) add a new customer to the list of customers.

## 3. Add a feature flag

Wrap your change in a [feature flag](/docs/dev/feature-flags) so that the newly added customer will only be visible to you.

## 4. Run integration tests

Run mabl customer test plan locally.

The tests should fail because the customer count has changed. Fix the broken test and rerun.

## 5. Commit changes

Commit your changes to trigger the build and deployment pipeline. If your tests pass, the change will be deployed to production.

## 6. Test change in production

Test with the feature flag on and off.

## 7. Revert changes

Revert your changes and redeploy. Remove the feature flag.
