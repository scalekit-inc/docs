<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/directories/{id}:enable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organizations_id}/directories/{directory_id}:enable'\
--header 'Authorization: Bearer <ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
await sc.directory.enableDirectory('<organization_id>', '<directory_id>');
```

</TabItem>
<TabItem value="py" label="Python">

```python
directory_response = sc.directory.enable_directory(
  directory_id='<directory_id>', organization_id='<organization_id>'
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
enable,err := sc.Directory().EnableDirectory(ctx, organizationId, directoryId)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
ToggleDirectoryResponse directoryResponse = scalekitClient.directories().enable(directoryId, organizationId);
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

ToggleDirectoryResponse directoryResponse = await scalekitClient.Directory.EnableDirectory(organizationId, directoryId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
   "enabled": true
}} />

</CodeWithHeader>
