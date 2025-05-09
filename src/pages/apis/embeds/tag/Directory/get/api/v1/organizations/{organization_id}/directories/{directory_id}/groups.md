<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/directories/{directory_id}/groups">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://<SCALEKIT_ENVIRONMENT_URL>/api/v1/organizations/<organization_id>/directories/<directory_id>/groups' \
--header 'Authorization: Bearer <SCALEKIT_ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const { groups } = await scalekit.directory.listDirectoryGroups(
  '<organization_id>',
  '<directory_id>'
);
```

</TabItem>
<TabItem value="py" label="Python">

```python
directory_groups = sc.directory.list_directory_groups(
  directory_id='<directory_id>', organization_id='<organization_id>'
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
options := &ListDirectoryGroupsOptions{
		PageSize: 10,
		PageToken:"",
	}

directoryGroups, err := sc.Directory().ListDirectoryGroups(ctx, organizationId, directoryId, options)
```

</TabItem>

<TabItem value="java" label="Java">

```java
var options = ListDirectoryResourceOptions.builder()
  .pageSize(10)
  .pageToken("")
  .includeDetail(true)
  .build();

ListDirectoryGroupsResponse groupsResponse = scalekitClient
  .directories()
  .listDirectoryGroups(directory.getId(), organizationId, options);
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

var options = new ListDirectoryGroupsOptions
{
    PageSize = 10,
    PageToken = "",
    IncludeDetail = true
};

ListDirectoryGroupsResponse directoryGroups = await scalekitClient.Directory.ListDirectoryGroups(organizationId, directoryId, options);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "groups": [
        {
            "id": "dirgroup_38074475882742351",
            "display_name": "Skyflow Users",
            "total_users": 2,
            "updated_at": "2024-09-19T16:26:18.573597Z"
        },
        {
            "id": "dirgroup_38074465715814991",
            "display_name": "Skyflow Managers",
            "total_users": 1,
            "updated_at": "2024-09-19T16:26:14.842673Z"
        },
        {
            "id": "dirgroup_38074458115670607",
            "display_name": "Skyflow Admins",
            "total_users": 1,
            "updated_at": "2024-09-19T16:26:11.532534Z"
        }
    ],
    "total_size": 3,
    "next_page_token": "",
    "prev_page_token": ""
}} />

</CodeWithHeader>
