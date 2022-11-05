# Developing Services

Most of the useful commands you will need have been captured as targets in each service's `Makefile`. For example, after modifying a `.proto` file simply run `make proto` to regenerate the Go server and client as well as the Javascript client.

### Deploying

All changes are automatically deployed (to production) on commit. If you do not want to trigger a deployment, add `[skip ci]` or `[ci skip]` to your commit message. This can be combined with `make deploy` to deploy to staging only.

### Approach

Internally version protobuf, handler, and repository packages.

TODO: Elaborate on specifics of approach. Add examples.

## Testing
