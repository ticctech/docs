---
sidebar_position: 5
description: Testing microservices
---

# Testing

## Internal Unit Testing

At this stage, we have decided against the over-investing in low-level, internal unit tests. The business logic for most services is so "thin" as to be non-existent and thus unlikely to be subject to logic errors. This can be revisited when services (and the application) become more stable.

## External Unit Testing

On the other hand, as there is always the possibility of a logic error arising in the data access layer, it is worth creating service-specific external unit tests. Each service is responsible for its own tests, which can be run locally and in the CD pipeline.

Use Go testing framework — but **avoid mock data dependencies**.

Test via external interfaces.

Mock services the microservice depends on.

## Unit testing

Manual unit testing uses VS Code's built-in interactive debugger. Simply launch the debugger and use gRPC UI to call any of the service's protobuf methods.

It is possible to debug services on Kubernetes using a "remote attach" but we have found this to be a bit buggy, resource intensive and largely unnecessary.
