<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:disable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:disable' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

await sc.connection.disableConnection(organizationId, connectionId);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers

sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

sc.connection.disable_connection(
  organization_id,
  connection_id
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

err := sc.Connection.DisableConnection(
  ctx,
  organizationId,
  connectionId,
)
```

</TabItem>
<TabItem value="java" label="Java">

```java showLineNumbers
ScalekitClient scalekitClient = new ScalekitClient(
  "ENVIRONMENT_URL",
  "CLIENT_ID",
  "CLIENT_SECRET"
);

ToggleConnectionResponse response = client.connections()
  .disableConnection(connectionId, organizationId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "enabled": false,
  "error_message": ""
}
```

</CodeWithHeader>
