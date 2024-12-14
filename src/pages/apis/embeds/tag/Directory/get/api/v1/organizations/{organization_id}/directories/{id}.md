<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/directories/{id}">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations/{organizations_id}/directories/{directory_id}' \
--header 'Authorization: Bearer <ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const { directory } = await scalekit.directory.getDirectory(
  organizationId,
  directoryId
);
```

</TabItem>
<TabItem value="py" label="Python">

```python
directory = scalekit_client.directory.get_directory(
  directory_id='<directory_id>', organization_id='<organization_id>'
)
print(f'Directory details: {directory}')
```

</TabItem>

<TabItem value="golang" label="Go">

```go
directory, err := sc.Directory().GetDirectory(ctx, organizationId, directoryId)
```

</TabItem>

<TabItem value="java" label="Java">

```java
Directory directory = scalekitClient.directories().getDirectory(directoryId, organizationId);
```

</TabItem>

</Tabs>
</CodeWithHeader>

<CodeWithHeader title="Get Primary Directory (Alternative)">

<Tabs groupId="tech-stack" querystring>
<TabItem value="nodejs" label="Node.js">

```js
const { directory } = await scalekit.directory.getPrimaryDirectoryByOrganizationId(
  organizationId
  );
```

</TabItem>

<TabItem value="py" label="Python">

```python
primary_directory = scalekit_client.directory.get_primary_directory_by_organization_id(
  organization_id='<organization_id>'
)
```

</TabItem>

<TabItem value="golang" label="Go">

```go
directory,err := sc.Directory().GetPrimaryDirectoryByOrganizationId(ctx, organizationId)
```

</TabItem>

<TabItem value="java" label="Java">

```java
Directory directory = client.directories().getPrimaryDirectoryByOrganizationId(organizationId);
```

</TabItem>
</Tabs>

</CodeWithHeader>

<CodeWithHeader title="Response">

<JsonViewer src={{
    "directory": {
        "id": "dir_38073376857653839",
        "name": "",
        "directory_type": "SCIM",
        "organization_id": "org_38073370096435791",
        "source": "",
        "enabled": true,
        "directory_provider": "OKTA",
        "status": "IN_PROGRESS",
        "mappings": [],
        "last_synced_at": "2024-09-19T16:26:17.814923Z",
        "directory_endpoint": "https://leering-black-rhinoceros.scalekit.cloud/directory/dir_38073376857653839/scim/v2",
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
}} />

</CodeWithHeader>
