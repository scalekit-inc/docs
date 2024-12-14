<CodeWithHeader method="put" endpoint="/api/v1/organizations/{id}/portal_links">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PUT 'https://$ENV_URL/api/v1/organizations/{id}/portal_links' \
--header 'Authorization: Bearer {access_token}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js
const link = await sc.organization.generatePortalLink(organization_id);
```

</TabItem>
<TabItem value="py" label="Python">

```python
link = sc.organization.generate_portal_link(
  organization_id
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go
link, err := sc.Organization.GeneratePortalLink(
  ctx,
  organizationId
)
```

</TabItem>
<TabItem value="java" label="Java">

```java showLineNumbers
Link response = scalekitClient.organizations().generatePortalLink(organizationId);
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "link": {
    "id": "lnk_123123123123123",
    "location": "https://scalekit.com/portal/lnk_123123123123123",
    "expire_time": "2024-02-06T14:48:00.000Z"
  }
}} />

</CodeWithHeader>
