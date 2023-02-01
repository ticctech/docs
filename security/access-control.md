---
description: Role-based access control
---

# Access Control

## Concepts

### Business Unit Hierarchy

The primary organising principle for platform resources and data is an AML Reporting Entity.  For billing purposes, a Reporting Entity belongs to a single account (tenant), with more than one Reporting Entity being able to belong to the same account.&#x20;

<img src="../.gitbook/assets/file.excalidraw (1).svg" alt="multiple Reporting Entities per tenant" class="gitbook-drawing">

For example, Ray White New Zealand has a single Amlify account with each branch being a separate AML Reporting Entity.

### Role-based Access

The platform uses roles to determine a user's access to resources. A role can specify _read_ or _write_ access for a resource. If not specified, the default is to _deny_ resource access.

<img src="../.gitbook/assets/file.excalidraw (5).svg" alt="role-based resource access" class="gitbook-drawing">

Roles are established and provisioned at the Reporting Entity level. That is, each Reporting Entity will use roles to determine access to its resources.&#x20;

### Reporting Entity Access

User access to a reporting entity (and thereby, a tenant) is mediated by the role they have been assigned within the Reporting Entity. No role equates to no access.

<img src="../.gitbook/assets/file.excalidraw (6).svg" alt="Reporting Entity access" class="gitbook-drawing">

Users can be associated with multiple tenants simply by being assigned to a role within a Reporting Entity.

### Tenant 'Switching' (??)

Is there any need for this?

## Access Scenarios

The solution would handle following scenarios:

1. If I am an admin/teller of a reporting entity, I should be able to write/read the resources of that reporting entity.&#x20;
2. If I am an admin/teller of a tenant, I should be able to write/read the resources of all the reporting entities of that tenant.&#x20;

## Implementation

### API Manager

API manager configuration required to translate identity information to headers needed to support access control in subsequent layers...

### Keto Permissions

Keto relationship tuples required to support scenarios above...

```typescript
import { Namespace, SubjectSet, Context } from "@ory/permission-namespace-types"

//This is the keto namespace for relationships defined to handle tenant and multiple reproting entity senarios.

class User implements Namespace { }

// Role could be admin or teller
class Role implements Namespace {
  related: {
    member: User[]
  }
}

// Resource Group could be reporting entity, which has parent of tenant. Or tenant
class ResourceGroup implements Namespace {
  related: {
    parent: ResourceGroup[]
    reader: SubjectSet<Role, "member">[]
    writer: SubjectSet<Role, "member">[]
  }

  permits = {
    read: (ctx: Context): boolean =>
      this.related.reader.includes(ctx.subject) ||
      this.related.writer.includes(ctx.subject) ||
      this.related.parent.traverse(p => p.permits.read(ctx)),

    write: (ctx: Context) =>
      this.related.writer.includes(ctx.subject) ||
      this.related.parent.traverse(p => p.permits.write(ctx)),
  }
}

class Resource implements Namespace {
  related: {
    parent: ResourceGroup[]
  }

  permits = {
    read: (ctx: Context): boolean =>
      this.related.parent.traverse(p => p.permits.read(ctx)),
    write: (ctx: Context): boolean =>
      this.related.parent.traverse(p => p.permits.write(ctx))
  }
}
```

### Data Access

MongoDB data storage and retrieval...

```json
{
  "tenantId": "44cbb6d7-8155-48bf-970c-efb6600e8e07",
  "updatedBy": "30b0c1bf-0f5f-442d-ab0b-f8c820837ae3",
  "updatedAt": {
    "$date": {
      "$numberLong": "1672356186008"
    }
  },
  "<proto message>": {
    ...
  }
}
```



### Solution

1. Every request from portal to the service will contain a header of request reporting entity id. The interceptor in grpcsdk will call Keto API to verify if user has access to the resource of the report entity or not.
2. We use Ory Keto relationship to specify the relationship and access rules. A sample relationship could be found in [https://github.com/ticctech/auth/blob/main/.keto/multi-reportingEntity.namespace.keto.ts](https://github.com/ticctech/auth/blob/main/.keto/multi-reportingEntity.namespace.keto.ts).
3. We use auth service to store the accessible reporting entities for a user (add a new property in the collection: user).
4. auth service:
   1. create or update users, there is a function called addToRole in user.go. Need to update this function to add the roles for users.
   2. create or update user, set the accessible reporting entity in user collection.
5. reportingentity service:
   1. Create reporting entity, update Ory relationship to set the tenant as the parent of reporting entity.
   2. Create reporting entity, update Ory relationship to set the resource of a reporting entity, such as reportingentity123/check, reportingentity123/policy.
6. grpcsdk:
   1. authz.go: update interceptor to check permissions from Ory.&#x20;
7. portal:
   1. update portal to show accessible reporting entity.
   2. include reporting entity id in requests to backend.
8. Migrate existing data:
   1. Add reporting entity to existing mongodb data.
   2. Migrate existing Org relationships.&#x20;
9. Update postman request with reporting entity id.
