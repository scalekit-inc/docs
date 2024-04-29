---
slug: /
---
import InstallSDK from './../templates/install-sdk.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {SimpleCode} from '@site/src/components/custom';


# SSO Quick Start

Scalekit’s SSO solution is compatible with any Identity Provider that supports SAML (Security Assertion Markup Language) or OIDC (OpenID Connect) protocols, adhering to the OAuth 2.0 framework. This setup abstracts the complex authentication interactions between various IdPs, providing a streamlined user authentication process across different platforms.

Scalekit acts as federated authentication middleware between your application and your enterprise customers’ identity provider technologies. Scalekit eliminates the hassle of integrating with these Identity Providers and handling authentication protocols like SAML, OIDC, or OAuth 2. You can integrate with Scalekit in a few hours and enable SSO-based authentication in your application. 

<figure>![How Scalekit works](SSO%20Quick%20Start%204e17d8bce9ab46c0a604aaf82da33187/How_Scalekit_connects_(1).png)
<figcaption>How Scalekit works</figcaption></figure>

## What you'll build

By the end of this guide, you would implement Enterprise SSO in your application through Scalekit APIs. 

The sequence diagram below explains the SSO workflow between your application, Scalekit, and identity providers in your customers organizations.

<figure>![Sequence Diagram for SSO Workflow](SSO%20Quick%20Start%204e17d8bce9ab46c0a604aaf82da33187/How_SSO_works_(3).png)
<figcaption>Sequence Diagram for SSO Workflow</figcaption></figure>

Here's a description of how it works:

1. The user attempts to login to your application and access resources.
2. Based on the user’s unique identity (typically, this is email address, but can be any unique id), your application detects that this user needs to be authenticated via Single Sign-on. Your application will redirect the user to Scalekit’s Authorization URL and pass the user’s email address or the organization ID. 
3. Based on the user details provided, Scalekit detects the SSO configuration and redirects the user to the respective organization’s identity provider (using SAML or OIDC)
4. The identity provider authenticates the user in the identity system
5. Once authenticated, the identity provider securely sends the user profile details to Scalekit.
6. Scalekit will redirect the user to the Redirect URI that is configured as part of Authorization URL (in Step 2) with a one-time code.
7. Your application will send the one-time code along with your API credentials to fetch the user identity and profile information (that’s shared by the identity provider)
8. Based on the user details received from Scalekit, your application will create a session, login the user to your product, and allow the user to access the resource(s).

## Implement Single Sign-on

### 0. Prerequisites

Before you get started, make sure 

- you are logged into your [Scalekit account](https://app.scalekit.com) and keep API credentials handy
- you have local access to your codebase to make changes and deploy in a test environment


### 1. Install SDK

Scalekit offers SDKs to quickly build SSO authentication mechanism in your application. 

Install the SDK using the command below:

<InstallSDK />

### 2. Configure your Secrets


To make the API calls to Scalekit, you need to add the API credentials that are found in your Scalekit dashboard. 

**API Credentials:**

- **Environment URL**: this is the base url of the environment to which all your API calls are made to. This URL is unique to an environment, so that you can route the API requests to the appropriate environment.
- **Client ID**: A unique, alpha-numeric string that your application will use for all communications with Scalekit.
- **Client Secret**: Randomly generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. See [here](/docs/best-practices/manage-client-secrets.md) to learn best practices on how to manage Client Secret.

Now, go to your Scalekit Dashboard, choose the "Development" environment and select “API Config” to access these configuration details. 

We recommend you to store these credentials as environment variables (in your .env file). 

```jsx
SCALEKIT_ENVIRONMENT_URL="<https://yoursaas-dev.scalekit.com>"
SCALEKIT_CLIENT_ID="skc_122056050118122349527"
SCALEKIT_CLIENT_SECRET="test_CbGfKxzfIipiY7RHuDkchgLdwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN"
```

### 3. Initiate the Authorization URL

The endpoint to initiate SSO via the Scalekit API is crucial for the authentication workflow. The SSO integration starts after you redirect the user to Scalekit Authorization URL.

There are a few configuration options to send the Authorization URL to Scalekit:

1. **<SimpleCode>organization_id</SimpleCode>**: Organization ID that the user belongs to. This is the preferred parameter for SAML and OIDC connections.  Example: <SimpleCode>org_12434341</SimpleCode>


2. **<SimpleCode>connection_id</SimpleCode>**: You can also use the Connection ID for the specific SSO connection. Example: <SimpleCode>conn_121414141</SimpleCode>

3. **<SimpleCode>domain</SimpleCode>**: If your application enforces SSO for all users that belong to a particular email domain, this attribute can be useful to detect the appropriate SSO connection. Example: <SimpleCode>google.com or yourcustomerdomain.com</SimpleCode>


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript showLineNumbers
// init client
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
        loginHint: "user@example.com",
        //connectionId: "conn_1223231234124",
        //domain: "example.com",
        organizationId: "org_123235245"
      })

// next step is to redirect the user to this authorizationURL
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>

**Redirect URI**<br/>A redirect URI is the endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider.

After a successful user authentication, Scalekit provides a temporary code value to the redirect_uri you configured. You'll need to POST this code back to Scalekit with your client secret in order to retrieve user details.

### 4. Fetch User Details

After the user has successfully authenticated with their Identity Provider, Scalekit sends a unique authorization code to the redirect_uri that is sent as part of the authorization URL above. You will need to send this `code` and `redirect_uri` to get the authenticated user's profile information.

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript showLineNumbers
const {code} = req.query;

// handle errors, if any

const res = await sc.authenticateWithCode({
        code: code,
        redirectUri: redirectUri
      });

// res.user has the authenticated user's details 
// const user_email = res.user.email;


// next step is to create a session for this user and redirect the user to your application.
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>



## Onboarding Enterprise Customers

Excellent! You have successfully implemented Single Sign-on via Scalekit. But, before you onboard enterprise customers, make sure you go through these next steps so that your application is secure and production ready.

- [Test SSO](/docs/single-sign-on/testing-sso.md)
- [Production Check-list](/docs/single-sign-on/golive-checklist.md)

But, this is not all. You can do so much more with Scalekit. To learn more about what you can do with Scalekit, check out:

- [Node.js SDK](https://github.com/scalekit-inc/scalekit-sdk-node) - the SDK reference used in this quick start guide
- [Sample Node.js App](https://github.com/scalekit-inc/scalekit-demos/tree/main/your-saas-app) - Download our fully functional sample app and kicstart a running code