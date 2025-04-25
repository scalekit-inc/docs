<CodeWithHeader method="post" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}/secrets">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}/secrets' \
  --request POST
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "plain_secret": "test_****************************u5y0",
    "secret": {
        "id": "sks_68320656441213544",
        "create_time": "2025-04-16T07:44:44.580Z",
        "update_time": "2025-04-16T07:44:44.584552069Z",
        "secret_suffix": "u5y0",
        "status": "ACTIVE",
        "last_used_time": "2025-04-16T07:44:44.580Z"
    }
}} />

</CodeWithHeader>
