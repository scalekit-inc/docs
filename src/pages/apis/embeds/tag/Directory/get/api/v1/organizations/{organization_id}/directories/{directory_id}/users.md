<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/directories/{directory_id}/users">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://<SCALEKIT_ENVIRONMENT_URL>/api/v1/organizations/<organization_id>/directories/<directory_id>/users' \
--header 'Authorization: Bearer <SCALEKIT_ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const { users } = await scalekit.directory.listDirectoryUsers(
  '<organization_id>',
  '<directory_id>'
);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
directory_users = sc.directory.list_directory_users(
  directory_id='<directory_id>', organization_id='<organization_id>'
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
options := &ListDirectoryUsersOptions{
		PageSize: 10,
		PageToken: "",
	}
directoryUsers,err := sc.Directory().ListDirectoryUsers(ctx, organizationId, directoryId, options)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
var options = ListDirectoryResourceOptions.builder()
  .pageSize(10)
  .pageToken("")
  .includeDetail(true)
  .build();

ListDirectoryUsersResponse usersResponse = scalekitClient
  .directories()
  .listDirectoryUsers(directory.getId(), organizationId, options);
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

var options = new ListDirectoryUsersOptions
{
    PageSize = 10,
    PageToken = "",
    IncludeDetail = true
};

ListDirectoryUsersResponse directoryUsers = await scalekitClient.Directory.ListDirectoryUsers(organizationId, directoryId, options);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "users": [
        {
            "id": "diruser_38074510863303247",
            "email": "bar@acmecorp.com",
            "preferred_username": "bar@acmecorp.com",
            "given_name": "Bar",
            "family_name": "Man",
            "updated_at": "2024-09-19T15:56:16.954861Z",
            "emails": [
                "bar@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074475882742351",
                    "display_name": "Skyflow Users",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074510846460495",
            "email": "fandom@acmecorp.com",
            "preferred_username": "fandom@acmecorp.com",
            "given_name": "Fandom",
            "family_name": "Utopia",
            "updated_at": "2024-09-19T15:56:16.940714Z",
            "emails": [
                "fandom@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074475882742351",
                    "display_name": "Skyflow Users",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074504135639631",
            "email": "foo@acmecorp.com",
            "preferred_username": "foo@acmecorp.com",
            "given_name": "Foo",
            "family_name": "Girl",
            "updated_at": "2024-09-19T15:56:12.947990Z",
            "emails": [
                "foo@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074465715814991",
                    "display_name": "Skyflow Managers",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074497626079823",
            "email": "john@acmecorp.com",
            "preferred_username": "john@acmecorp.com",
            "given_name": "John",
            "family_name": "Doe",
            "updated_at": "2024-09-19T15:56:09.069591Z",
            "emails": [
                "john@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074458115670607",
                    "display_name": "Skyflow Admins",
                    "total_users": 0
                }
            ]
        }
    ],
    "total_size": 4,
    "next_page_token": "",
    "prev_page_token": ""
}} />

</CodeWithHeader>
