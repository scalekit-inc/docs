<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:disable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:disable' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
await sc.connection.disableConnection(organizationId, connectionId);
```

</TabItem>
<TabItem value="py" label="Python">

```python
sc.connection.disable_connection(
  organization_id,
  connection_id
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
err := sc.Connection.DisableConnection(
  ctx,
  organizationId,
  connectionId,
)
```

</TabItem>
<TabItem value="java" label="Java">

```java showLineNumbers
scalekitClient.connections().disable(connectionId, organizationId);
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
ToggleConnectionResponse connectionResponse = await scalekitClient.Connection.DisableConnection(organizationId, connectionId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "enabled": false,
  "error_message": ""
}} />

</CodeWithHeader>
