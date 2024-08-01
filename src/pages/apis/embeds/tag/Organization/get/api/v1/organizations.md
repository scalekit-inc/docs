<CodeWithHeader method="get" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request GET \
  --url 'https://$env_url/api/v1/organizations'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

const organizations = await sc.organization.listOrganization({
  pageSize: 10,
});
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

options = ListOrganizationOptions()
options.page_size = 10

organizations = sc.organization.list_organizations(
  options=options
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

organizations, err := sc.Organization.ListOrganizations(
  ctx,
  &scalekit.ListOrganizationOptions{
    PageSize: 10,
  }
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

ListOrganizationsResponse organizations = scalekitClient
  .organizations()
  .listOrganizations(10, "");

```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "next_page_token": "…",
  "organizations": [
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
  ],
  "total_size": 1
}
```

</CodeWithHeader>
