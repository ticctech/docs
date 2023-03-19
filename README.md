---
description: Setting up development environment
---

# Setup

## Quick Start

Install Go - [https://go.dev/dl/](https://go.dev/dl/)

Install VS Code - [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

Install Buf CLI - [https://docs.buf.build/installation](https://docs.buf.build/installation)

### Configuration

#### VS Code

At a minimum, we use the following extensions in VS Code:

* Buf
* Dapr
* Go
* vscode-proto3

#### Go

Configure Go to use private GitHub repos.

```bash
go env -w GOPRIVATE="buf.build/*,github.com/ticctech/*"
```

Save private repo credentials locally to `.netrc`.&#x20;

```bash
echo "machine github.com login <GitHub username> password <GitHub PAT>" >> ~/.netrc
```

#### Buf

```bash
echo "machine go.buf.build login <Buf username> password <Buf PAT>" >> ~/.netrc
```

### Git Commits

To skip a deployment of a Go microservice:

```
commit -m "[skip] my commit will not be deployed"
```

For the build to push a breaking change to the proto schema you will need to consciously add a commit comment:

```
commit -m "[breaking] my commit includes a breaking change to the proto schema"
```

Unlike the Go services, the UI (react portal project) will not automatically deploy. To consciously deploy you will need to using a tagging comment:

```
commit -m "[tag:patch] my commit is a deploying a patch change"
```

(You can use `patch`, `minor` or `major` here, but we usually just push patches for now).&#x20;

### Mongo Compass



This web application uses [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) to provide information for the Amlify internal development team.

Add documentation as markdown files inside the pages folder. Commit and push to the main branch to publish changes.



***
