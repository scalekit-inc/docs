<CodeWithHeader method="get" endpoint="/oauth/authorize">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request GET \
  --url 'https://$env_url/oauth/authorize
  ?client_id=skc_12344
  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri
  &response_type=code
  &state=hf68uyjh2189iuhj56789
  &scope=openid email profile'
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
import { ScalekitClient } from '@scalekit-sdk/node';

// Initialize the SDK client
const scalekit = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

const options = {};

// Option 1: Authorization URL with the organization ID
options.organizationId = 'org_15421144869927830';

// Option 2: Authorization URL with login hint
options.connectionId = 'conn_15696105471768821';

// Option 3: Authorization URL with login hint
options.loginHint = 'user@example.com';

const authorizationURL = scalekit.getAuthorizationUrl(redirectUrl, options);

// TODO: Redirect the user to this authorization URL
```

</TabItem>

<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions

# Initialize the SDK client
scalekit_client = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

options = AuthorizationUrlOptions()


# Option 1: Authorization URL with the organization ID
options.organization_id = 'org_15421144869927830'

# Option 2: Authorization URL with login hint
options.login_hint = 'user@example.com'

# Option 3: Authorization URL with the connection ID
options.connection_id = 'conn_15696105471768821'

authorization_url = scalekit_client.get_authorization_url(
  redirect_uri=<redirect_uri>,
  options=options
)

# TODO: Redirect the user to this authorizationURL
```

</TabItem>

<TabItem value="golang" label="Go">

```go showLineNumbers
import (
  "github.com/scalekit/scalekit-sdk-go"
)

func main() {
  // Initialize the SDK client
  sc := scalekit.NewScalekitClient(
    <SCALEKIT_ENVIRONMENT_URL>,
    <SCALEKIT_CLIENT_ID>,
    <SCALEKIT_CLIENT_SECRET>
  )

  options := scalekit.AuthorizationUrlOptions{}
  // use one of the three strategies below to determine how to log the user in.

  // Option 1: Authorization URL with the organization ID
  options.OrganizationId = "org_15421144869927830"

  // Option 2: Authorization URL with the connection ID
  options.ConnectionId = "conn_15696105471768821"

  // Option 3: Authorization URL with Login Hint
  // User's email domain detects the correct enterprise SSO connection.
  options.LoginHint = "user@example.com"

  authorizationURL := sc.GetAuthorizationUrl(
    redirectUrl,
    options,
  )
  // next step is to redirect the user to this authorizationURL
}

// TODO: Redirect the user to this authorizationURL
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
package com.scalekit;
import com.scalekit.ScalekitClient;
import com.scalekit.internal.http.AuthorizationUrlOptions;

public class Main {
  public static void main(String[] args) {
    // Initialize the SDK client
    ScalekitClient scalekitClient = new ScalekitClient(
      "<SCALEKIT_ENVIRONMENT_URL>",
      "<SCALEKIT_CLIENT_ID>",
      "<SCALEKIT_CLIENT_SECRET>"
    );
    AuthorizationUrlOptions options = new AuthorizationUrlOptions();
    // Option 1: Authorization URL with the organization ID
    options.setOrganizationId("org_13388706786312310");
    // Option 2: Authorization URL with the connection ID
    options.setConnectionId("con_13388706786312310");
    // Option 3: Authorization URL with Login Hint
    // User's email domain detects the correct enterprise SSO connection.
    options.setLoginHint("user@example.com");
    try {
      String url = scalekitClient.authentication().getAuthorizationUrl(
        redirectUrl, options).toString();
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}

// TODO: Redirect the user to this authorizationURL
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

User will be redirected to the appropriate Identity provider's login page based on either organization_id, or connection_id or domain.

</CodeWithHeader>
