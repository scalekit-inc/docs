<CodeWithHeader
method="get"
endpoint="/api/v1/organizations/{organization_id}/directories/{id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const connection = await sc.connection.getConnection(
  organizationId,
  connectionId
);
```

</TabItem>
<TabItem value="py" label="Python">

```python
connection = sc.connection.get_connection(
  organization_id,
  connection_id,
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
connection, err := sc.Connection.GetConnection(
  ctx,
  organizationId,
  connectionId,
)
```

</TabItem>

<TabItem value="java" label="Java">

```java
Connection connection = client.connections().getConnectionById(connectionId, organizationId);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "id": "conn_2123312131125533",
  "organization_id": "org_1232434",
  "provider": "OKTA",
  "type": "SAML",
  "status": "COMPLETED",
  "enabled": true,
  "debug_enabled": false,
  "configuration_type": "MANUAL",
  "saml_config":{
    "sp_entity_id": "https://yourapp.com/service/saml",
    "sp_assertion_url": "https://youridp.com/service/saml/assertion",
    "sp_metadata_url": "https://youridp.com/service/saml/metadata",
    "idp_metadata_url": "https://youridp.com/service/idp/metadata",
    "idp_sso_url": "https://youridp.com/sso/saml",
  },
  "attribute_mapping":{
    "email": "email",
    "family_name": "lastName",
    "given_name": "firstName",
    "sub": "nameid",
  },
  "create_time": "2024-01-05T14:48:00.000Z"
}} />

</CodeWithHeader>
