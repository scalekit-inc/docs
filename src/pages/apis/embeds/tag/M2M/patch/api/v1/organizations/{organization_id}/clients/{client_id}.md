<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/clients/{client_id}">

<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl 'https://$ENV_URL/api/v1/organizations/{organization_id}/clients/{client_id}' \
  --request PATCH \
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

update_m2m_client = OrganizationClient(
    description="Service account for GitHub Actions to deploy applications to production_eu",
    custom_claims=[
        {"key": "github_repository", "value": "acmecorp/inventory"},
        {"key": "environment", "value": "production_eu"}
    ]
)

response = scalekit_client.m2m_client.update_organization_client(
    organization_id=org_id,
    client_id=client_id,
    m2m_client=update_m2m_client
)
```
