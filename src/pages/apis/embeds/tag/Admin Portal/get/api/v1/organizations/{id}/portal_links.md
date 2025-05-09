<CodeWithHeader method="get" endpoint="/api/v1/organizations/{id}/portal_links">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations/{id}/portal_links' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const links = sc.organization.getPortalLinks(organization_id);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
links = sc.organization.get_portal_links(
  organization_id
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
links, err := sc.Organization.GetPortalLinks(
  ctx,
  organizationId
)
```

</TabItem>

<TabItem value="java" label="Java">

```java
Link portalLink = client
  .organizations()
  .generatePortalLink(organizationId, Arrays.asList(Feature.sso, Feature.dir_sync));

```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
using Scalekit.SDK;
using Scalekit.SDK.Models;

ScalekitClient scalekitClient = new ScalekitClient(
    Environment.GetEnvironmentVariable("SCALEKIT_ENVIRONMENT_URL"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_ID"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_SECRET")
);

Link link = await scalekitClient.Organization.GeneratePortalLink(organizationId);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "links": [
    {
      "id": "lnk_123123123123123",
      "location": "https://scalekit.com/portal/lnk_123123123123123",
      "expire_time": "2024-02-06T14:48:00.000Z"
    }
  ]
}} />

</CodeWithHeader>
