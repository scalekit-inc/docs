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

```js showLineNumbers
import { ScalekitClient } from '@scalekit-sdk/node';

// scalekit client takes care of authentication behind the scenes.
const scalekit = new ScalekitClient(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const options = {};
// use one of the below strategies below to determine how to log the user in.

// If you would like to authenticate the user via connection_id
options.connectionId = 'conn_1242242';

// If you would like to authenticate the user via organization_id
options.organizationId = 'org_12442';

// If you would like to authenticate the user via their email address
// Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection
options.loginHint = '<user@example.com>';

// Authorization URL with connection ID parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  connectionId: 'conn_1242242',
});

// redirect the user to the authorization url
```

</TabItem>

<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions

scalekit_client = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)


options = AuthorizationUrlOptions()
# use one of the below strategies below to determine how to log the user in.

# If you would like to authenticate the user via connection_id
options.connection_id = 'conn_1242242'

# If you would like to authenticate the user via organization_id
options.organization_id = 'org_12442'

# If you would like to authenticate the user via their email address
# Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection
options.login_hint = '<user@example.com>'

authorization_url = scalekit_client.get_authorization_url(
  redirect_uri=<redirect_uri>,
  options=options
)

# redirect the user to the authorization url
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
import (
  "github.com/scalekit/scalekit-sdk-go"
)

func main() {
  sc := scalekit.NewScalekitClient(
    SCALEKIT_ENVIRONMENT_URL,
    SCALEKIT_CLIENT_ID,
    SCALEKIT_CLIENT_SECRET
  )

  options := scalekit.AuthorizationUrlOptions{}
  // use one of the strategies below to determine how to log the user in.

  // If you would like to authenticate the user via connection_id
  options.ConnectionId = "conn_1242242"

  // If you would like to authenticate the user via organization_id
  options.OrganizationId = "org_12442"

  // If you would like to authenticate the user via their email address
  // Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection
  options.LoginHint = "<user@example.com>"

  authorizationURL := sc.GetAuthorizationUrl(
    redirectUrl,
    options,
  )

  // redirect the user to the authorization url
}

```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
package com.scalekit;

import com.scalekit.ScalekitClient;
import com.scalekit.internal.http.AuthorizationUrlOptions;

public class Main {
  public static void main(
String[] args) {
    ScalekitClient scalekitClient =
      new ScalekitClient(
        "SCALEKIT_ENVIRONMENT_URL",
        "SCALEKIT_CLIENT_ID",
        "SCALEKIT_CLIENT_SECRET"
      );
    AuthorizationUrlOptions options = new AuthorizationUrlOptions();
    // use one of the strategies below to determine how to log the user in.
      
      // If you would like to authenticate the user via organization_id
    options.setOrganizationId("org_13388706786312310");

      // If you would like to authenticate the user via connection_id
    options.setConnectionId("con_13388706786312310");
    
      // If you would like to authenticate the user via their email address
      // Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection
    options.setLoginHint("<user@example.com>");
    try {
      String url = scalekitClient.authentication()
        .getAuthorizationUrl(redirectUrl, options)
        .toString();
        // redirect the user to the authorization url
    } catch (Exception e) {
      // handle errors
    }
  }
}
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

User will be redirected to the appropriate Identity provider's login page based on either organization_id, or connection_id or domain.

</CodeWithHeader>
