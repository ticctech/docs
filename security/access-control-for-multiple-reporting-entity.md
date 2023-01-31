# Access control for multiple reporting entity

It is a common for a user that belongs to one tenant and has access to multiple reporting entities. The tenant is the whole company/corporate, and reporting entities could be branches of the company. Take Ray White as example, Ray White would be the tenant, each branch would be the reporting entity.&#x20;

The solution would handle following scenarios:

1. If I am an admin/teller of a reporting entity, I should be able to write/read the resources of that reporting entity.&#x20;
2. If I am an admin/teller of a tenant, I should be able to write/read the resources of all the reporting entities of that tenant.&#x20;

Solution:

1. We use auth service to store the accessible reporting entities for a user (add a new property in the collection: user).
2. We use Ory Keto relationship to specify the relationship and access rules. A sample relationship could be found in [https://github.com/ticctech/auth/blob/main/.keto/multi-reportingEntity.namespace.keto.ts](https://github.com/ticctech/auth/blob/main/.keto/multi-reportingEntity.namespace.keto.ts).
3. Every request from portal to the service will contain a header of request reporting entity id. The interceptor in grpcsdk will call Keto API to verify if user has access to the resource of the report entity or not.&#x20;

The design diagram could be found in here: [https://miro.com/app/board/uXjVPtu-jaY=/](https://miro.com/app/board/uXjVPtu-jaY=/)





