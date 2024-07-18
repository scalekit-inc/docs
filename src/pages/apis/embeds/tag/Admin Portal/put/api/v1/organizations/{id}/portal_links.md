
<CodeWithHeader method="put" endpoint="/api/v1/organizations/{id}/portal_links">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PUT 'https://$ENV_URL/api/v1/organizations/{id}/portal_links' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
// scalekit client takes care of authentication behind the scenes.
const sc = new ScalekitClient(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const link = await sc.organization.generatePortalLink(
  organization_id
)

```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
# scalekit client takes care of authentication behind the scenes.
sc = ScalekitClient(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
)

link = sc.organization.generate_portal_link(
  organization_id
)

```

</TabItem>
<TabItem value="golang" label="Go">
  
  ```go showLineNumbers
  // scalekit client takes care of authentication behind the scenes.
  sc := scalekit.NewScalekitClient(
    SCALEKIT_ENVIRONMENT_URL,
    SCALEKIT_CLIENT_ID,
    SCALEKIT_CLIENT_SECRET
  )

  link, err := sc.Organization.GeneratePortalLink(
    ctx,
    organizationId
  )

  ```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "link": {
    "id": "lnk_123123123123123",
    "location": "https://scalekit.com/portal/lnk_123123123123123",
    "expire_time": "2024-02-06T14:48:00.000Z"
  }
}
```

</CodeWithHeader>
