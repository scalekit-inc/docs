<CodeWithHeader method="get" endpoint="/api/v1/organizations/{id}">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request GET \
  --url 'https://$env_url/api/v1/organizations/{id}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

const organization = await sc.organization.getOrganization(organization_id);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

organization = sc.organization.get_organization(
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

organization, err := sc.Organization.GetOrganization(
  ctx,
  organizationId
)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

Organization organization = scalekitClient
  .organizations()
  .getById(organizationId);

```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "create_time": "2024-01-05T14:48:00.000Z",
  "display_name": "Acme Corp",
  "external_id": "my_unique_id",
  "id": "org_2123312131125533",
  "metadata": {
    "someKey": "…"
  },
  "region_code": "US",
  "update_time": "…"
}
```

</CodeWithHeader>
