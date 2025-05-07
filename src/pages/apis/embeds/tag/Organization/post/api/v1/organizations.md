<CodeWithHeader method="post" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
  "display_name": "<string>",
  "external_id": "<string>",
  "metadata": {
    "esse47": "<string>"
  }
}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const organization = await sc.organization.createOrganization(name, {
  externalId: 'externalId',
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
options = CreateOrganizationOptions()
options.external_id = "externalId"
organization = sc.organization.create_organization(
  name,
  options=options
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
organization, err := sc.Organization.CreateOrganization(
  ctx,
  name,
  scalekit.CreateOrganizationOptions{
    ExternalID: "externalId",
  },
)
```

</TabItem>

<TabItem value="java" label="Java">

```java
CreateOrganization createOrganization = CreateOrganization.newBuilder().setDisplayName("Test Org").build();

Organization createdOrganization = scalekitClient.organizations().create(createOrganization);
```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
using Scalekit.SDK;
using Scalekit.SDK.Models;

ScalekitClient scalekitClient = new ScalekitClient(
    Environment.GetEnvironmentVariable("SCALEKIT_ENV_URL"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_ID"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_SECRET")
);

CreateOrganizationResponse createOrganization = await scalekitClient.Organization.CreateOrganization(
    organizationName,
    new CreateOrganizationOptions {
        ExternalId = "externalId"
    }
);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "create_time": "2024-01-05T14:48:00.000Z",
  "display_name": "Acme Corp",
  "external_id": "my_unique_id",
  "id": "org_2123312131125533",
  "metadata": {
    "someKey": "…"
  },
  "region_code": "US",
  "update_time": "…"
}} />

</CodeWithHeader>
