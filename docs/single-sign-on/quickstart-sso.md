---
slug: /
---
import InstallSDK from './../templates/install-sdk.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {SimpleCode} from '@site/src/components/custom';


# SSO Quick Start

This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit’s intuitive APIs.

Scalekit facilitates seamless integration between your application and a multitude of Identity Providers (IdPs) supporting SAML or OIDC protocols. Acting as an authentication middleware, Scalekit abstracts the complexities associated with SAML, OIDC, and OAuth 2.0, enabling you to focus on delivering a top-notch user experience.

<figure>![How Scalekit works](SSO%20Quick%20Start%204e17d8bce9ab46c0a604aaf82da33187/How_Scalekit_connects_(1).png)
<figcaption>How Scalekit works</figcaption></figure>

## What you'll build

By following this guide, you’ll implement an SSO solution that simplifies your user authentication process and securely connects to customers' IdPs.

The sequence diagram below explains the SSO workflow between your application, Scalekit, and identity providers in your customers organizations.

<figure>![Sequence Diagram for SSO Workflow](SSO%20Quick%20Start%204e17d8bce9ab46c0a604aaf82da33187/How_SSO_works_(3).png)
<figcaption>Sequence Diagram for SSO Workflow</figcaption></figure>

Here's a description of how it works:

1. A user initiates a login to your application.
2. Your application recognizes the need for SSO and redirects the user to Scalekit's Authorization URL and pass their unique identifier, which could be user's email address or the organization ID.
3. Based on the user details provided, Scalekit determines the appropriate SSO configuration and redirects the user to the organization’s identity provider
4. The user is authenticated by their IdP using either SAML or OIDC.
5. Post-authentication, the IdP sends the user's profile details to Scalekit.
6. Scalekit will redirect the user to the Redirect URI that is configured as part of Authorization URL (in Step 2) with a one-time code.
7. Your application exchanges the one-time code along with your API credentials to fetch the user details shared by the IdP
8. Based on the user details received from Scalekit, your application will create a session, login the user to your product, and allow the user to access the resource(s).

## Implement Single Sign-on

### 0. Prerequisites

Before you get started: 

- Ensure you're logged into your [Scalekit account](https://app.scalekit.com) and have your API credentials ready
- Access to your codebase is also necessary to implement and test changes


### 1. Install SDK

Scalekit provides SDKs for various languages to quickly add SSO in your application.

Install the relevant SDK using the command below:

<InstallSDK />

### 2. Configure your Secrets


Set up your API credentials, found on your Scalekit dashboard, as environment variables for secure API communication.

**API Credentials:**

- **Environment URL**: this is the base url of the environment to which all your API calls are made to. This URL is unique to an environment, so that you can route the API requests to the appropriate environment.
- **Client ID**: A unique, alpha-numeric string that your application will use for all communications with Scalekit.
- **Client Secret**: Randomly generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. See [here](/docs/best-practices/manage-client-secrets.md) to learn best practices on how to manage Client Secret.

Now, go to your Scalekit Dashboard, choose the "Development" environment and select “API Config” to access these configuration details. 

We recommend you to store these credentials as environment variables (in your .env file). 

```jsx
SCALEKIT_ENVIRONMENT_URL="<https://yoursaas-dev.scalekit.com>"
SCALEKIT_CLIENT_ID="skc_122056050118122349527"
SCALEKIT_CLIENT_SECRET="test_CbGfKxzwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN"
```

### 3. Initiate the Authorization URL

The endpoint to initiate SSO is crucial for the authentication workflow. The SSO integration starts after you redirect the user to Scalekit Authorization URL.

**Redirect URI**<br/>A redirect URI is the endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider.

After a successful user authentication, Scalekit provides a temporary code value to the redirect_uri you configured. You'll need to POST this code back to Scalekit with your client secret in order to retrieve user details.

There are also a few configuration options that can be send to Scalekit in the Authorization URL:

1. **<SimpleCode>organization_id</SimpleCode>**(optional): Organization ID that the user belongs to. This is the preferred parameter for SAML and OIDC connections.  Example: <SimpleCode>org_12434341</SimpleCode>


2. **<SimpleCode>connection_id</SimpleCode>**(optional): You can also use the Connection ID for the specific SSO connection. Example: <SimpleCode>conn_121414141</SimpleCode>

3. **<SimpleCode>domain</SimpleCode>**(optional): If your application enforces SSO for all users that belong to a particular email domain, this attribute can be useful to detect the appropriate SSO connection. Example: <SimpleCode>google.com or yourcustomerdomain.com</SimpleCode>


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
// init client
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const authorizationURL = scalekit.getAuthorizationUrl(redirectUri)

// Authorization URL with optional login hint parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  loginHint: "user@example.com",
})

// Authorization URL with optional organization ID parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  connectionId: connectionId,
})

// next step is to redirect the user to this authorizationURL
```

</TabItem>
<!-- <TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem> -->
</Tabs>


### 4. Fetch User Details

After Scalekit completes SSO authentication, it sends a unique authorization code to the redirect_uri that is sent as part of the authorization URL above. You will need to send this `code` and `redirect_uri` to get the authenticated user's profile information.

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const {code, error, error_description} = req.query;

// handle errors, if any

// authenticate with the code
const res = await sc.authenticateWithCode({
  code: code,
  redirectUri: redirectUri
});

// res.user has the authenticated user's details 
const userEmail = res.user.email;


/** next step is to create a session for this user and 
redirect the user to your application.
**/
```

</TabItem>
<!-- <TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem> -->
</Tabs>



## Onboarding Enterprise Customers

Once SSO is implemented, you’ll want to thoroughly test the setup and go through a production checklist to ensure your application is secure and ready for enterprise use.

- [Test SSO](/docs/single-sign-on/testing-sso.md)
- [Production Check-list](/docs/single-sign-on/golive-checklist.md)


Explore more. Check out:

- [Node.js SDK](https://github.com/scalekit-inc/scalekit-sdk-node) - Reference the SDK used in this guide for a deep dive into its capabilities
- [Sample Node.js App](https://github.com/scalekit-inc/scalekit-demos/tree/main/your-saas-app) - Download and explore a fully functional sample app to jumpstart your implementation


Now that you have a working SSO integration with Scalekit, you're ready to provide a seamless authentication experience for your users. Happy coding!
