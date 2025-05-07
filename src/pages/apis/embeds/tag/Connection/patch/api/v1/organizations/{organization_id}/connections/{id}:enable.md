<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:enable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:enable' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
await sc.connection.enableConnection(organizationId, connectionId);
```

</TabItem>
<TabItem value="py" label="Python">

```python
sc.connection.enable_connection(
  organization_id,
  connection_id,
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
err := sc.Connection.EnableConnection(
  ctx,
  organizationId,
  connectionId,
)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
scalekitClient.connections().enable(connectionId, organizationId);
```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
using Scalekit.SDK;
using Scalekit.SDK.Models;

ScalekitClient scalekitClient = new ScalekitClient(
    Environment.GetEnvironmentVariable("SCALEKIT_ENV_URL"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_ID"),
    Environment.GetEnvironmentVariable("SCALEKIT_CLIENT_SECRET")
);

ToggleConnectionResponse connectionResponse = await scalekitClient.Connection.EnableConnection(organizationId, connectionId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "enabled": true,
  "error_message": ""
}} />

</CodeWithHeader>
