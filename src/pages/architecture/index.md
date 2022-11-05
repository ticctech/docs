# Architecture

## Introduction

The Avid platform is built using [cloud-native](https://github.com/cncf/toc/blob/main/DEFINITION.md) techniques. We use such things as containers, service meshes, microservices, immutable infrastructure, and declarative APIs to deliver a resilient, manageable, and observable platform.

At its simplest, the Avid platform is architectured as a set of micro frontends, Kubernetes workloads, and third-party services.

![](../../../img/assets/Overview.jpg)

While our component-based approach supports mixed languages, current frontends are written in React and backend services in Go.

## Micro frontends

Micro frontends are deployed as standalone web apps and integrated using Webpack 5's module federation. That means each component has a unique hostname and is served from its own endpoint.

As a developer, you will typically only need to work with a single module at a time — loading dependencies from staging or production environments as needed. Developers can deploy modules independently of each other (as long as external interfaces are conserved).

## Microservices

Microservices are built as Docker containers and deployed to Kubernetes. Each microservice has responsibility for its own deployment and, like frontend components, is deployed independently of any other component.

Services can be (roughly) categorised into two classes; core services and "orchestrators". Core services are responsible for data-centric operations in a narrow, well-defined domain. For example, the`customer`is responsible for maintaining customer data. On the other hand, an orchestrator is responsible for coordinating several core services to achieve a business outcome — more in line with a "backend for frontends" (BFF) pattern.

Each service is deployed into an [Istio-based service mesh](https://istio.io/latest/about/service-mesh/) that controls access and routing, both externally and between services. Effectively, services can be pared back to business logic while security concerns are largely externalised.

The primary communication protocol for services is [gRPC](https://grpc.io), with a fallback option to REST where needed. Interfaces are defined using [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto3), and the web frontend uses gRPC-web to communicate with services.

## Third-party services

Our preference is to use third-party services over hosting third-party software. For example, we use Elastic Cloud rather than deploying (and managing) Elasticsearch. This means that almost all dependencies are external services and developers focus on deploying and maintaining software core to our business.

Key external services include:

* Auth0 - authentication
* MongoDB - document-centric data management
* Elasticsearch - transaction data management
* Azure Storage - blob store
* Stripe - payments
