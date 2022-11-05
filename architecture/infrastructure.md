# Infrastructure

The bulk of our platform is, in one way or another, hosted on Azure. Where practical, third-party services are also hosted on Azure (MongoDB, Elacticsearch) and co-located in the same region.

By dint of its [cloud-native](https://www.cncf.io/about/faq/) nature, the platform is loosely coupled to its infrastructure.

## Core components

![](../img/assets/Infrastructure.jpg)

The heart of Avid's infrastructure is [Azure Kubernetes Service](https://azure.microsoft.com/en-in/services/kubernetes-service/). It hosts backend microservices, restarts failed services, and auto-scales to meet demand.

The [Istio service mesh](https://istio.io/latest/about/service-mesh/) moderates access to services. It provides a secure, "trustless" framework within which they can safely operate. Much of microservices plumbing is offloaded to Istio.

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) stores and manages the majority of application data. We favour MongoDB due to its natural fit with protobuf messages.

[Elastic Cloud](https://www.elastic.co/cloud/) is used to store and analyse transaction data. Its advanced query capability and anomaly detection will play a role in AML-related transaction monitoring and analysis.

[Azure Storage](https://azure.microsoft.com/en-gb/services/storage/blobs/) stores application blob data — uploaded documents and other files.

[Contentful](https://www.contentful.com) — a headless CMS — is used to manage frontend static text resources such as headings, labels, and menu items. The text is stored in the form of dynamic [microcopy](https://www.contentful.com/help/dynamic-microcopy/). This allows us to

[Auth0](https://auth0.com) provides IAM services for end-users. It provides authentication services (via OIDC) and manages permissions and resulting roles for users.

[NATS](https://nats.io) provides messaging and event-broking services. It is not widely used at this stage.

## Terraform

We use Terraform to provision almost all shared infrastructure.
