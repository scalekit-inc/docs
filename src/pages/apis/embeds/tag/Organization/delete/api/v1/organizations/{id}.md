<CodeWithHeader method="delete" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" queryString>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request DELETE 'https://$ENV_URL/api/v1/organizations/{id}' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
await sc.organization.deleteOrganization(organizationId);
```

</TabItem>
<TabItem value="py" label="Python">

```python
sc.organization.delete_organization(organization_id)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
err := sc.Organization.DeleteOrganization(
  ctx,
  organizationId
)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

scalekitClient.organizations().deleteById(organizationId);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={ {} } />

</CodeWithHeader>
