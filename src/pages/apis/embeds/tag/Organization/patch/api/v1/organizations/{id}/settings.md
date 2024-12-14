<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/settings">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organizations_id}/settings' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>'\
--data '{
    "features":
    [
        {
            "name": "sso",
            "enabled": false
        },
        {
            "name": "dir_sync",
            "enabled": true
        }
    ]
}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const settings = {
  features: [{
    name: 'sso',
    enabled: true
  },
  {
    name: 'dir_sync',
    enabled: true
    },
  ],
}

await sc.organization.updateOrganizationSettings('<organization_id>', settings);
```

</TabItem>
<TabItem value="py" label="Python">

```python
settings = [
        {
            "name": "sso",
            "enabled": true
        },
        {
            "name": "dir_sync",
            "enabled": true
        }
    ]

scalekit_client.organization.update_organization_settings(
  organization_id='<organization_id>', settings=settings
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
settings := OrganizationSettings{
		Features: []Feature{
			{
				Name:    "sso",
				Enabled: true,
			},
			{
				Name:    "dir_sync",
				Enabled: true,
			},
		},
	}

organization,err := sc.Organization().UpdateOrganizationSettings(ctx, organizationId, settings)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
 OrganizationSettingsFeature featureSSO = OrganizationSettingsFeature.newBuilder()
                .setName("sso")
                .setEnabled(true)
                .build();

OrganizationSettingsFeature featureDirectorySync = OrganizationSettingsFeature.newBuilder()
                .setName("dir_sync")
                .setEnabled(true)
                .build();

updatedOrganization = scalekitClient.organizations()
                .updateOrganizationSettings(organization.getId(), List.of(featureSSO, featureDirectorySync));
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "organization": {
    "create_time": "2024-01-05T14:48:00.000Z",
    "display_name": "Acme Corp",
    "external_id": "my_unique_id",
    "id": "org_2123312131125533",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "region_code": "US",
    "settings": {
      "features": [
        {
          "enabled": true,
          "name": "string"
        }
      ]
    },
    "update_time": "2019-08-24T14:15:22Z"
  }
}} />

</CodeWithHeader>
