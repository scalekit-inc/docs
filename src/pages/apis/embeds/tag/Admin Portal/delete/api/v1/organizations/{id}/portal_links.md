<CodeWithHeader method="delete" endpoint="/api/v1/organizations/{id}/portal_links/{link_id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request DELETE 'https://$ENV_URL/api/v1/organizations/{id}/portal_links' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
await sc.organization.deletePortalLink(organizationId, linkId);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
sc.organization.delete_portal_link(
  organization_id,
  link_id
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
err := sc.Organization.DeletePortalLink(
  ctx,
  organizationId,
  linkId
)
```

</TabItem>

<TabItem value="java" label="Java">

```java
// Hang in there. Coming soon! (Vroom! Vroom!)

```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{}} />

</CodeWithHeader>
