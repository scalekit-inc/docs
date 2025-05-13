<CodeWithHeader method="get" endpoint="/api/v1/connections">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request GET \
  --url 'https://$env_url/api/v1/connections'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const connections = await sc.connection.listConnections(organizationId);
```

</TabItem>
<TabItem value="py" label="Python">

```python
connections = sc.connection.list_connections(
  organization_id
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
connections, err := sc.Connection.ListConnections(
  ctx,
  organizationId
)
```

</TabItem>

<TabItem value="java" label="Java">

```java
ListConnectionsResponse response = scalekitClient.connections().listConnectionsByOrganization(organizationId);
```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
ListConnectionsResponse connections = await scalekitClient.Connection.ListConnections(organizationId);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "connections": [
    {
      "id": "conn_2123312131125533",
      "organization_id": "org_1232434",
      "provider": "OKTA",
      "type": "SAML",
      "status": "COMPLETED",
      "enabled": true,
      "debug_enabled": false,
      "configuration_type": "MANUAL",
      "saml_config": {
        "sp_entity_id": "https://yourapp.com/service/saml",
        "sp_assertion_url": "https://youridp.com/service/saml/assertion",
        "sp_metadata_url": "https://youridp.com/service/saml/metadata",
        "idp_metadata_url": "https://youridp.com/service/idp/metadata",
        "idp_sso_url": "https://youridp.com/sso/saml"
      },
      "attribute_mapping": {
        "email": "email",
        "family_name": "lastName",
        "given_name": "firstName",
        "sub": "nameid"
      },
      "create_time": "2024-01-05T14:48:00.000Z"
    }
  ]
}} />

</CodeWithHeader>
