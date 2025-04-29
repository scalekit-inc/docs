<CodeWithHeader method="delete" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}' \
  --request DELETE
```

</TabItem>
<TabItem value="python" label="Python">

```python showLineNumbers
# Get client ID from environment variables
org_id = 'SCALEKIT_ORGANIZATION_ID'
client_id = os.environ['SCALEKIT_CLIENT_ID']

# Delete the specified client from the organization
response = scalekit_client.m2m_client.delete_organization_client(
    organization_id=org_id,
    client_id=client_id
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
