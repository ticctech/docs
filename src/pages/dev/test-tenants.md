---
sidebar_position: 2
title: Test Tenants
---

# Test Tenants

We have 3 tenants (or organisations) used for testing and demo-ing the application. Each tenant serves a different purpose with different expectations of its data.

## Exploratory testing

This tenant's data set is expected to be volatile — it will change as developers (and others) manually check their work while building new features

* Tenant: `67ca3e58-9536-4a70-b30e-6d8c15f87234`
* Primary login: N/A
* Organisation: `Test Organisation`

## Automated testing

This tenant's data set is expected to be "immutable". That is, it can be relied on to return the same outputs for a given set of inputs. This means automated tests can be created against predictable data.

Service automated testing:

* Tenant: `0c6521a7-de23-46d8-941b-8d2875386f75`
* Primary login: `svc.test@avidaml.com`
* Organisation: `Automated Testing`

Web automated testing:

* Tenant: `446f5b77-bfd0-4140-80d0-7daf7991dbcd`
* Primary login: `web.test@avidaml.com`
* Organisation: `Automated Testing`

## System demos

This tenant's data set is curated for the express purpose of providing interesting and meaningful application demos. While it will change, this tenant's data should only be changed as demos require.

* Tenant: `63d3f310-0fae-49ed-89ce-cf14c23c657c`
* Primary login: `daniel@avidaml.com`
* Organisation: `Avid AML Demo`
