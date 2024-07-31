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
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

const links = sc.organization.getPortalLinks(organization_id);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers

sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

links = sc.organization.get_portal_links(
  organization_id
)

```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
sc := scalekit.NewScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

links, err := sc.Organization.GetPortalLinks(
  ctx,
  organizationId
)

```

</TabItem>

<TabItem value="java" label="Java">

```java
ScalekitClient scalekitClient = new ScalekitClient(
  "ENVIRONMENT_URL",
  "CLIENT_ID",
  "CLIENT_SECRET");
Link response = scalekitClient.organizations().generatePortalLink(
  organizationId);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "links": [
    {
      "id": "lnk_123123123123123",
      "location": "https://scalekit.com/portal/lnk_123123123123123",
      "expire_time": "2024-02-06T14:48:00.000Z"
    }
  ]
}
```

</CodeWithHeader>
