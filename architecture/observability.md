# Observability

Adopting cloud-native services means observability practices and tooling can focus on application performance management rather than infrastructure management.

The telemetry and tooling employed are designed to deliver the context needed to ensure optimum application performance and take intelligent actions when required.

![](../img/assets/Observability.jpg)

## Telemetry

Both web frontend and backend services are instrumented to log trace data — key event and timing information — and issues directly to [Instana](https://www.instana.com). Instana also monitors core infrastructure components such as Kubernetes and MongoDB so that application issues can be correlated with infrastructure issues when needed.

## Logging

Instana also supports the logging of custom messages to make analysing issues easier.
