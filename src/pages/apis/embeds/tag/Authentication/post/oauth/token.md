<CodeWithHeader method="post" endpoint="/oauth/token">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request POST \
  --url 'https://$env_url/oauth/token
  ?code=jhasd72
  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri
  &client_id=skc_12344
  &client_secret=skc_prod_12441kjasad
  &grant_type=authorization_code'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
import { ScalekitClient } from "@scalekit-sdk/node";

const scalekit = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

// Handle the oauth redirect
const { code, error, error_description } = req.query;
if (error) {
  // Handle error
  return throw new Error(error_description);
}

// Fetch user details by exchanding the code received in the request params
const { user } = await scalekit.authenticateWithCode(
  code,
  <redirectUri>
);

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

# Handle oauth redirect_url, fetch code and error_description from request params
code = request.args.get('code')
error = request.args.get('error')
error_description = request.args.get('error_description')

if error:
    raise Exception(error_description)

result = scalekit_client.authenticate_with_code(
  code,
  <redirect_uri>
)
# result.user has the authenticated user's details
user_email = result.user.email

# Create a session and redirect the user to your dashboard
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
import (
  "github.com/scalekit/scalekit-sdk-go"
)
sc := scalekit.NewScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

// Handle the oauth redirect
code := r.URL.Query().Get("code")
err := r.URL.Query().Get("error")
errorDescription := r.URL.Query().Get("error_description")
if err != "" {
  return errors.New(errorDescription)
}

// Fetch user details by exchanding the code received in the request params
user, err := sc.AuthenticateWithCode(
  code,
  <redirectUri>
)
// `user` has the authenticated user's details
userEmail := user.Email
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

String code = request.getParameter("code");
String error = request.getParameter("error");
String errorDescription = request.getParameter("error_description");

if(error != null && !error.isEmpty()) {
    // Handle errors
    return;
}
try {
    AuthenticationResponse res = scalekitClient.authentication().authenticateWithCode(code, redirectUrl);
    // res.getIdTokenClaims() has the authenticated user's details
    String userEmail = res.getIdTokenClaims().getEmail();

} catch (Exception e) {
    // Handle errors
}
```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "access_token": "ey ... vPnyWBQ",
  "expires_in": 899,
  "id_token": "eyJhbGc ... ar79GwZg",
  "token_type": "Bearer"
}
```

</CodeWithHeader>
