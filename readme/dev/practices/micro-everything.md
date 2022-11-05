---
sidebar_position: 4
description: Anybody can safely deliver working software within a day of starting.
---

# Micro-everything

We actively work to keep everything small — from user stories to deliverables to components — the building blocks. This approach supports building and delivering the platform in small increments, piece by piece.

## Micro-components

There are several advantages to breaking the platform down into small, self-contained components.

#### Easier to comprehend

A small component, out of necessity, focuses on solving a particular problem. Its scope is limited by dint of its size. This makes it easier to learn and reason about, making it easier to get started, especially for developers unfamiliar with the component.

#### Easier to modify

Because the scope is contained and well known, making changes is safer, allowing development to progress more rapidly.

Additionally, smaller components usually have fewer dependencies, so they are easier to test and debug when developing.

#### Prevent inadvertent coupling

Micro-components can only use other components through their (well-defined) external interfaces. This makes it harder to inadvertently couple disparate parts of the application.

#### Parallel development

By conserving and versioning component interfaces, developers can work on components in isolation. This allows for parallel development effort at scale. Teams can contribute to the platform without merge conflicts or significant coordination.

### Micro Frontends

The web application is composed into a seamless whole from independently testable and deployable micro frontends.

### Microservices
