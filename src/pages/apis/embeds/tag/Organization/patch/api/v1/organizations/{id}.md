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

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

const organization = await sc.organization.updateOrganization(organization_id, {
  displayName: 'displayName',
  externalId: 'externalId',
});
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

organization = sc.organization.update_organization(organization_id, {
  display_name: "display_name",
  external_id: "external_id"
})
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
sc := scalekit.NewScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

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
ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

UpdateOrganization updateOrganization =
  UpdateOrganization.newBuilder()
    .setDisplayName("Updated Organization Name")
    .build();

Organization updatedOrganizationById = scalekitClient
  .organizations()
  .updateById(organizationId, updateOrganization);

```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
    "create_time": "2024-01-05T14:48:00.000Z",
    "display_name": "Acme Corp",
    "external_id": "my_unique_id",
    "id": "org_2123312131125533",
    "metadata": {
        "someKey": "…"
    },
    "region_code": "US",
    "update_time": "…"
}
```

</CodeWithHeader>
