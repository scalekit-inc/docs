<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/directories">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations/{organizations_id}/directories'\
--header 'Authorization: Bearer <ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
await scalekit.directory.listDirectories('<organization_id>');
```

</TabItem>
<TabItem value="py" label="Python">

```python
directories_list = sc.directory.list_directories(
	organization_id='<organization_id>'
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
directories,err := sc.Directory().ListDirectories(ctx, organizationId)
```

</TabItem>

<TabItem value="java" label="Java">

```java
ListDirectoriesResponse response = scalekitClient.directories().listDirectories(organizationId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "directories": [
        {
            "id": "dir_38073376857652839",
            "name": "",
            "directory_type": "SCIM",
            "organization_id": "org_3373370096435791",
            "source": "",
            "enabled": true,
            "directory_provider": "OKTA",
            "status": "IN_PROGRESS",
            "mappings": [],
            "last_synced_at": "2024-09-19T16:26:17.814923Z",
            "directory_endpoint": "https://<SCALEKIT_ENVIRONMENT_URL>/directory/<directory_id>/scim/v2",
            "total_users": 4,
            "total_groups": 3,
            "secrets": [
                {
                    "id": "sec_40648348968943986",
                    "create_time": "2024-10-07T10:05:04.010Z",
                    "secret_suffix": "cw1v",
                    "status": "ACTIVE",
                    "expire_time": "0001-01-01T00:00:00Z",
                    "last_used_time": "0001-01-01T00:00:00Z",
                    "directory_id": "dir_38073376857653839"
                }
            ],
            "stats": {
                "total_users": 4,
                "total_groups": 3,
                "group_updated_at": "2024-09-19T16:26:18.573597Z",
                "user_updated_at": "2024-09-19T15:56:16.954861Z"
            }
        }
    ]
}} />

</CodeWithHeader>
