<CodeWithHeader method="patch" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{id}' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
  "display_name": "<string>",
  "external_id": "<string>",
  "metadata": {
    "culpa_561": "<string>"
  }
}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const organization = await sc.organization.updateOrganization(organization_id, {
  displayName: 'displayName',
  externalId: 'externalId',
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
organization = sc.organization.update_organization(organization_id, {
  display_name: "display_name",
  external_id: "external_id"
})
```

</TabItem>
<TabItem value="golang" label="Go">

```go
organization, err := sc.Organization.UpdateOrganization(
  ctx,
  organizationId,
  &scalekit.UpdateOrganization{
    DisplayName: "displayName",
    ExternalId: "externalId",
  },
)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
UpdateOrganization updateOrganization = UpdateOrganization.newBuilder()
  .setDisplayName("Updated Organization Name")
  .build();

Organization updatedOrganizationById = scalekitClient.organizations().updateById(organizationId, updateOrganization);
```

</TabItem>

<TabItem value="dotnet" label=".NET">

```csharp showLineNumbers
UpdateOrganizationResponse updateOrganization = await scalekitClient.Organization.UpdateOrganization(
    organizationId,
    new UpdateOrganization {
        DisplayName = "displayName",
        ExternalId = "externalId"
    }
);
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "create_time": "2024-01-05T14:48:00.000Z",
  "display_name": "Acme Corp",
  "external_id": "my_unique_id",
  "id": "org_2123312131125533",
  "metadata": {
    "someKey": "…"
  },
  "region_code": "US",
  "update_time": "…"
}} />

</CodeWithHeader>
