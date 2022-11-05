# Service Mesh

We use Istio service mesh to secure access to our microservices. It transparently provides security, routing, load-balancing and can even aid with observability.

![](../img/assets/ServiceMesh.jpg)

Access to every service is sufficiently secured that the service can expose itself directly outside the mesh — in principle, a trustless architecture.

Under the hood, the mesh comprises Envoy proxies and a control plane to manage their configuration. As the term suggests, the proxies handle communication on behalf of the services, allowing security and routing plumbing to be offloaded.

## Main benefits

### SSL offload

SSL is terminated at the Istio ingress gateway allowing traffic to be inspected and routed accordingly. Internally, Istio supports mTLS to secure communication between services.

### JWT validation

Web frontend traffic uses JWT for authentication and authorisation to services. Istio is configured to validate tokens and extract their permission claims.

### Routing and access control

Each service specifies (via YAML configuration) the routes it exposes and access control requirements of each route. The primary method of access control is based on permissions coming from JWT claims.

### HTTP/2 load balancing

Unlike other HTTP proxies, Envoy is HTTP/2 and gRPC-aware. Security concerns aside, its main benefit is the ability to load-balance long-lived HTTP/2 connections between Kubernetes pods.
