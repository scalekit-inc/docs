---
sidebar_position: 1
---
import InstallSDK from './../templates/install-sdk.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrate Admin Portal

## Overview
Admin Portal is a self-service interface that empowers your customers' IT admins to configure SSO on their own. Designed to streamline the SSO setup process, it reduces the demand on your engineering resources and provides comprehensive IdP-specific documentation. Fully hosted and managed by Scalekit, the Admin Portal simplifies the SSO config experience, ensuring a fast and secure integration with only a few lines of code.

Depending on your architecture and UX preferences, you can choose one of the two methods to integrate the Admin Portal into your application:

1. Integration via API
2. Integration via Shareable Link

## 1. Integration via API

### Configure SDK
Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal.
<InstallSDK />

### Generate Magic Link
Utilize our API to generate an Admin Portal link that is uniquely keyed to an organization.


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const link = await sc.organization.generateCustomerPortalLink(organizationId);
```

 </TabItem>
<!--<TabItem value="py" label="Python">

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

Note: 
- This link is designed for one-time use, expiring after 5 minutes or upon its initial access.
- Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete.
- Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product.


## 2. Integration via Shareable Link

Log in to your Scalekit Dashboard and navigate to the desired organization's overview section.

### Generate Link
<!-- <Show screenshot> -->
Click 'Generate Link' to create a new, shareable Admin Portal link. 
- This link is valid for 7 days but can be revoked at any time from the dashboard for security purposes.
- The link can be distributed through communication channels such as email, Slack, etc
- Exercise caution, as anyone with this link can view and update their organization's SSO settings
