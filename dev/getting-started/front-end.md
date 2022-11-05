---
description: Frontend development
---

# Front-end

The Avid front end is composed of several React micro frontends hosted on Azure. The application makes use of Webpack 5 module federation, React hooks, and gRPC-web to connect to back-end application services.

We use Yarn as our package manager.

If you are new to React hooks please read [this introductory article](https://reactjs.org/docs/hooks-intro.html).

## Environment setup

Yarn

Node

Create React App

### Developing

We develop and unit test locally but connect to a back end running on the AKS Staging cluster. This means developers do not need to deploy or run microservices locally when doing front-end development.
