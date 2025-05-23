<CodeWithHeader method="post" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}/secrets">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}/secrets' \
  --request POST
```

</TabItem>
<TabItem value="python" label="Python">

```python showLineNumbers
# Get client ID from environment variables
org_id = 'SCALEKIT_ORGANIZATION_ID'
client_id = os.environ['M2M_CLIENT_ID']

# Add a new secret to the specified client
response = sc.m2m_client.add_organization_client_secret(
    organization_id=org_id,
    client_id=client_id
)

# Extract the secret ID from the response
secret_id = response[0].secret.id
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "plain_secret": "test_random_secret_u5y0",
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
