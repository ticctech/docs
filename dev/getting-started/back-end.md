---
description: Setting up for back-end service development
---

# Back-end

The Avid back end is largely composed of Go-based microservices that run on Kubernetes and a [service mesh](../../docs/architecture/service-mesh/). This [architectural overview](../../docs/architecture/) should help you get acquainted with the most significant components of the system.

If you are new to Go please read (at a minimum) these articles on crafting idiomatic Go:

* [How to Write Go Code](https://golang.org/doc/code)
* [Effective Go](https://golang.org/doc/effective\_go.html)
* [Idiomatic Go](https://dmitri.shuralyov.com/idiomatic-go)

As most microservices are accessed using [protobuf](https://developers.google.com/protocol-buffers/) interfaces over [gRPC](https://grpc.io), it would make sense to familiarise yourself with these technologies.

Finally, while not critical to day-to-day development, you should acquaint yourself with key concepts for Kubernetes and [Istio service mesh](https://istio.io/latest/docs/concepts/what-is-istio/).

## Environment setup

While it is possible to use other IDEs, VS Code is the team's preferred tool. Our developer workflow uses features of VS Code, and it supports both back-end and front-end development.

### Install Go

Download the official installer from [https://golang.org/dl](https://golang.org/dl/).

{% hint style="info" %}
Please read [How to Write Go Code](https://golang.org/doc/code) for instructions on how to get started with Go.
{% endhint %}

### Configure Go Modules access to GitHub private repos

Create a [GitHub Personal access token](https://github.com/settings/tokens). Replace `<github-user-name>` and `<token>` in the following command and run to create a `.netrc` file for Go to use:

```
echo "machine github.com login <github-user-name> password <token> >> ~/.netrc
```

Let Go know the repo is private:

```
go env -w GOPRIVATE="buf.build/*,github.com/ticctech/*"
```

### VS Code

[Download](https://code.visualstudio.com/Download) and install VS Code.

The following VS Code extensions (in order) are useful:

* _Go_ (by Go Team at Google)
* _Buf_ (by Buf)
* _Docker_ (by Microsoft)
* _vscode-proto3_ (by zxh404)
* _YAML_ (by Red Hat)
* _Kubernetes_ (by Microsoft)
* _Azure Kubernetes Service_ (by Microsoft)
* _HashiCorp Terraform_ (by HashiCorp)
* _ESLint_ (by Dirk Baeumer)
* ENV (by Jakka Prihatna)
* _Todo Tree_ (by Gruntfuggly)

The default location for Avid Go projects is `~/go/src/github.com/avidaml/`.

### Azure CLI

[Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli). While you should not need to use this directly, it is a pre-requisite for using`kubectl`.

### Kubectl

[Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/). This command-line tool is used to run commands against a Kubernetes cluster. It is also used to set up port-forwarding from desktop to cluster services.

```
brew install kubectl
```

Connect kubectl to the Avid AML _Staging_ Kubernetes cluster — `aks-avid-stg`. Before proceeding, make sure you have an Azure user account with permission to access the _Staging_ subscription.

```
  az login
  az account set --subscription f2a191d1-fb7c-4628-b631-2161c04f50a0
  az aks get-credentials --resource-group backend --name aks-avid-stg
```

{% hint style="info" %}
Ensure you have an Azure Staging login before trying to log in from the Azure CLI.
{% endhint %}

### gRPC UI

[gRPC UI](https://github.com/fullstorydev/grpcui) is a browser-based framework for unit testing gRPC microservices. Think Postman for gRPC.

```
  go install github.com/fullstorydev/grpcui/cmd/grpcui@latest
```

Or use brew:

```
brew install grpcui
```

### PM2

[PM2](https://pm2.keymetrics.io) is used to run `kubectl` port-forwarding as a background process when running a service in interactive debug mode. Launching the VS Code debugger will initiate port-forwarding to dependent services running in staging.

```
  su <username> npm install pm2 -g
```

#### Confirm installation

Test the package is available globally using:

```
echo 'require("pm2")' | node
```

If the package cannot be found, you may need to create a symlink to the global `node_modules` directory from your `$HOME` directory:

```
ln -vs "$(npm root -g)" "$HOME"/.node_modules
```

PM2 uses global node packages which require [nvm](http://nvm.sh).

### Buf

Buf is used to compile proto files and generate code dependencies.

The quickest way to get set up is to install using Homebrew:

```
brew tap bufbuild/buf
brew install buf
```

Add an entry for Avid's Buf repository to your `.netrc` file so that Buf can push proto builds to our Buf repo:

> machine buf.build password `Buf API key` machine go.buf.build login avid-aml password `Buf API key`

#### protoc-gen-xxx components

Install code generation components used by Buf:

```
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
go install github.com/envoyproxy/protoc-gen-validate
```

See [https://docs.buf.build/installation](https://docs.buf.build/installation).

### Env vars

All environment variables are externalised into a single`.env`file. To make it easier to share common env vars between services, locate this file at the root of your project:

```
<project root>/.env
```

An up-to-date copy of all env vars is located in 1Password.

### NATS server

The platform uses [NATS](https://nats.io) for event-based messaging between services. As we are not using port-forwarding for this, you'll need to set up a local server. Download the NATS Docker image:

```
docker pull nats:latest
```

And add the following entry to your `/etc/hosts` file:

```
127.0.0.1    nats.nats.svc.cluster.local
```

### MongoDB Compass

Optionally, install [MongoDB compass](https://www.mongodb.com/try/download/compass) to view staging data.

Connection string:

`mongodb+srv://<username>:<password>@app.0g7ho.mongodb.net/test?authSource=admin&replicaSet=atlas-13p5f0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`
