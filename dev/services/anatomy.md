---
description: Packages and structures common to all services
---

# Anatomy

While not mandated, the following elements have emerged as fundamental to the structure of almost all services.

## Key Packages

### proto

Proto files and generated code

### server

gRPC and HTTP servers

Entry point for all requests

### handler

Handles API requests

Requests are routed from `server`

### store

Persistence/data access logic

### flag

Wraps and simplifies LaunchDarkly use

### .tests

Unit tests

### .circleci

Pipeline configuration

Kubernetes and Istio config - routes and permissions

## Versioning
