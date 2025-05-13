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
const organizations = await scalekit.organization.listOrganization({
  pageSize: 10,
});
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
options = ListOrganizationOptions()
options.page_size = 10

organizations = sc.organization.list_organizations(
  options=options
)

```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
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
ListOrganizationsResponse organizations = scalekitClient.organizations().listOrganizations(10, "");
```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
ListOrganizationsResponse organizations = await scalekitClient.Organization.ListOrganizations(10);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "next_page_token": "JvcmdfMzgwNjUzMDM1NDM4NzQxMjciXQ==",
    "total_size": 15,
    "organizations": [
        {
            "id": "org_47238744531515510",
            "create_time": "2024-05-11T05:41:40.451680Z",
            "update_time": "2024-06-16T13:41:44.862631Z",
            "display_name": "Acme Corp",
            "region_code": "US",
            "metadata": {}
        },
        {
            "id": "org_28928219836430847",
            "create_time": "2024-07-02T09:41:32.108169Z",
            "update_time": "2024-01-16T08:54:03.205252Z",
            "display_name": "Megasoft Inc",
            "region_code": "US",
            "metadata": {}
        },
        {
            "id": "org_90351241147198526",
            "create_time": "2024-05-12T13:00:41.531746Z",
            "update_time": "2024-06-26T08:50:46.353011Z",
            "display_name": "Wayne Enterprises",
            "region_code": "US",
            "metadata": {}
        },
        {
            "id": "org_73190319580462594",
            "create_time": "2024-06-01T13:48:47.714119Z",
            "update_time": "2024-01-02T07:47:32.783253Z",
            "display_name": "Loony Labs",
            "region_code": "US",
            "metadata": {}
        },
        {
            "id": "org_55052141401739308",
            "create_time": "2024-07-05T18:56:37.281630Z",
            "update_time": "2024-08-11T16:03:00.669470Z",
            "display_name": "Krusty Krab Corp",
            "region_code": "US",
            "metadata": {}
        }
    ],
    "prev_page_token": ""
}} />

</CodeWithHeader>
