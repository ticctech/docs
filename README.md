---
description: Setting up development environment
---

# Quick Start

## VS Code

At a minimum, we use the following extensions in VS Code:\


* Buf
* Dapr
* Go
* vscode-proto3

## Backend Development

### Go

Install Go

Install VS Code

Install Buf CLI

#### Private repo access

Configure Go to use private GitHub repos.

```bash
go env -w GOPRIVATE="buf.build/*,github.com/ticctech/*"
```

Save private repo credentials locally to `.netrc`.&#x20;

```bash
echo "machine github.com login <GitHub username> password <GitHub PAT>" >> ~/.netrc
```

### Buf

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



## Frontend Development

This web application uses [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) to provide information for the Amlify internal development team.

Add documentation as markdown files inside the pages folder. Commit and push to the main branch to publish changes.

**Getting Started**

Run `yarn` to install all dependencies

`yarn dev` to view the local develop environment.

Edit `pages/page1$.tsx` or other source files, the playground will inflect your change instantly.

`npm run build` The app are built and served.

`npm run ssr` The app are built into a static site (Static-Site Generation) and served.

***
