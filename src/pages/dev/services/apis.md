---
sidebar_position: 2
description: Specifying protocol buffers
---

# APIs

## Versioning

If the service is generally available in production, then do not make breaking changes to the API. That is, while it is possible to add services, messages, and fields, do not remove or change existing attributes if already published and in use.

If change is not backwards compatible then create a new internal version.

If you need to make a breaking change, create a new version of the proto, handler, and store packages. Add appropriate references for the new version the `.circleci/helm-values.yaml`.

## Protobuf design

Use Buf's linting.

Add support for HTTP transcoding using [gRPC-Gateway](https://github.com/grpc-ecosystem/grpc-gateway)

If you need to make a change to the service's API (rpc methods or messages), start by changing the relevant`.proto`file. Once the `.proto` has been updated, run `make proto`.

## Routes and permissions

Update routes and permissions applied by Istio in `./circleci/helm-values.yaml`

## Frontend

Manually copy any Javascript files to the relevant location(s) in the web frontend (this is a candidate for automation in the future).
