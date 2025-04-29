<CodeWithHeader method="post" endpoint="/api/v1/organizations/{organization_id}/clients">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients' \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
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
  ],
  "description": "Service account for GitHub Actions to deploy applications to production",
  "expiry": 3600,
  "name": "GitHub Actions Deployment Service",
  "scopes": [
    "deploy:applications",
    "read:deployments"
  ]
}'
```

</TabItem>

<TabItem value="python" label="Python">

```python showLineNumbers
from scalekit.v1.clients.clients_pb2 import OrganizationClient

m2m_client = OrganizationClient(
    name="GitHub Actions Deployment Service",
    description="Service account for GitHub Actions to deploy applications to production",
    custom_claims=[
        {"key": "github_repository", "value": "acmecorp/inventory-service"},
        {"key": "environment", "value": "production_us"}
    ],
    scopes=["deploy:applications", "read:deployments"],
    audience=["deployment-api.acmecorp.com"],
    expiry=3600
)

response = scalekit_client.m2m_client.create_organization_client(
    organization_id=org_id,
    m2m_client=m2m_client
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
                "update_time": "2025-04-16T06:56:05.367190455Z",
                "secret_suffix": "UZ0X",
                "status": "ACTIVE",
                "last_used_time": "2025-04-16T06:56:05.360Z"
            }
        ],
        "name": "GitHub Actions Deployment Service",
        "description": "Service account for GitHub Actions to deploy applications to production",
        "organization_id": "org_59615193906282635",
        "create_time": "2025-04-16T06:56:05.290Z",
        "update_time": "2025-04-16T06:56:05.292145150Z",
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
    },
    "plain_secret": "test_****************************UZ0X"
}} />

</CodeWithHeader>
