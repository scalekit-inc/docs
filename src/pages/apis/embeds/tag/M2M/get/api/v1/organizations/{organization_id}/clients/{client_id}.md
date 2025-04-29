<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}'
```

</TabItem>
<TabItem value="python" label="Python">

```python showLineNumbers
# Get organization and client IDs from environment variables
org_id = os.environ['SCALEKIT_ORG_ID']
client_id = os.environ['SCALEKIT_CLIENT_ID']

# Fetch client details for the specified organization
response = scalekit_client.m2m_client.get_organization_client(
    organization_id=org_id,
    client_id=client_id
)
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "client": {
        "client_id": "m2morg_68315758685323697",
        "secrets": [
            {
                "id": "sks_68315758802764209",
                "create_time": "2025-04-16T06:56:05.360Z",
                "update_time": "2025-04-16T06:56:05.367190Z",
                "secret_suffix": "UZ0X",
                "status": "ACTIVE",
                "last_used_time": "2025-04-16T06:56:05.360Z"
            },
            {
                "id": "sks_68317787721826737",
                "create_time": "2025-04-16T07:16:14.690Z",
                "update_time": "2025-04-16T07:16:14.699725Z",
                "secret_suffix": "Wpe5",
                "status": "ACTIVE",
                "last_used_time": "2025-04-16T07:16:14.690Z"
            }
        ],
        "name": "GitHub Actions Deployment Service",
        "description": "Service account for GitHub Actions to deploy applications to production",
        "organization_id": "org_59615193906282635",
        "create_time": "2025-04-16T06:56:05.290Z",
        "update_time": "2025-04-16T07:53:38.847754Z",
        "scopes": [
            "deploy:applications",
            "read:deployments"
        ],
        "audience": [
            "https://api.example.com/api/analytics",
            "https://deployment-api.acmecorp.com"
        ],
        "custom_claims": [
            {
                "key": "environment",
                "value": "production"
            },
            {
                "key": "service",
                "value": "deployment"
            }
        ]
    }
}} />

</CodeWithHeader>
