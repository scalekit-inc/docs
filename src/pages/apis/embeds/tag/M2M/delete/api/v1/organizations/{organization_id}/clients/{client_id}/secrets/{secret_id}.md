<CodeWithHeader method="delete" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}/secrets/{secret_id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}/secrets/{secret_id}' \
  --request DELETE
```

</TabItem>
<TabItem value="python" label="Python">

```python showLineNumbers
# Get client and secret IDs from environment variables
org_id = 'SCALEKIT_ORGANIZATION_ID'
client_id = os.environ['SCALEKIT_CLIENT_ID']
secret_id = os.environ['SCALEKIT_M2M_SECRET_ID']

# Remove the specified secret from the client
response = scalekit_client.m2m_client.remove_organization_client_secret(
    organization_id=org_id,
    client_id=client_id,
    secret_id=secret_id
)
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```
{}
```

</CodeWithHeader>
