import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  ssoSidebar: [
    {
      type: 'link',
      label: 'Back to overview',
      href: '/',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Getting started</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Understand SSO basics',
      id: 'sso/overview',
    },
    {
      type: 'doc',
      label: 'SSO quickstart',
      id: 'sso/quickstart',
    },
    {
      type: 'doc',
      label: 'Admin Portal',
      id: 'sso/quickstart-admin-portal',
    },
    {
      type: 'doc',
      label: 'Test SSO integration',
      id: 'sso/test-sso',
    },
    {
      type: 'doc',
      label: 'Launch checklist',
      id: 'sso/launch-checklist',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Social authentication</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Social logins quickstart',
      id: 'sso/social-login',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Implementation guides</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Add SSO to login page',
      id: 'sso/guides/setup-sso/build-login-page',
    },
    {
      type: 'doc',
      label: 'Customize admin portal',
      id: 'sso/domain-and-theme-customization',
    },
    {
      type: 'doc',
      label: 'Implement IdP-initiated SSO',
      id: 'sso/guides/setup-sso/implement-idp-initiated-sso',
    },
    {
      type: 'doc',
      label: 'Handle SSO errors',
      id: 'sso/guides/setup-sso/error-handling',
    },
    {
      type: 'doc',
      label: 'Customize user attributes',
      id: 'sso/guides/setup-sso/customize-user-attributes',
    },
    {
      type: 'doc',
      label: 'Test SSO with Okta',
      id: 'sso/guides/test-your-integration/using-okta',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Integration resources</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Integrate with Auth0',
      id: 'sso/guides/integrate-with-your-auth-system/auth0',
    },
    {
      type: 'doc',
      label: 'Integrate with Firebase',
      id: 'sso/guides/integrate-with-your-auth-system/firebase',
    },
    {
      type: 'doc',
      label: 'Integrate with AWS Cognito',
      id: 'sso/guides/integrate-with-your-auth-system/cognito',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Key concepts</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Understand authorization URL',
      id: 'sso/guides/key-concepts/authorization-url',
    },
    {
      type: 'doc',
      label: 'Configure redirect URI',
      id: 'sso/guides/key-concepts/redirect-uri',
    },
    {
      type: 'doc',
      label: 'Manage ID token claims',
      id: 'sso/guides/key-concepts/idtoken-claims',
    },
    {
      type: 'doc',
      label: 'Work with user profiles',
      id: 'sso/guides/key-concepts/user-profile',
    },
    {
      type: 'doc',
      label: 'Manage client secrets',
      id: 'sso/guides/key-concepts/manage-client-secrets',
    },
  ],
  scimSidebar: [
    {
      type: 'link',
      label: 'Back to overview',
      href: '/',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Getting started</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'SCIM quickstart',
      id: 'scim/quickstart',
    },
    {
      type: 'doc',
      label: 'Explore sample apps',
      id: 'scim/explore-sample-apps',
    },
    {
      type: 'doc',
      label: 'Admin Portal',
      id: 'scim/admin-portal',
    },
    {
      type: 'doc',
      label: 'Launch checklist',
      id: 'scim/checklist',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Implementation guides</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Automate role assignment',
      id: 'scim/automatically-assign-roles',
    },
    {
      type: 'doc',
      label: 'Customize admin portal',
      id: 'scim/domain-and-theme-customization',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Learning resources</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Understand SCIM provisioning',
      id: 'scim/basics',
    },
    {
      type: 'doc',
      label: 'Learn SCIM protocol details',
      id: 'scim/scim-protocol',
    },
    {
      type: 'doc',
      label: 'Follow webhook best practices',
      id: 'scim/webhooks',
    },
  ],
  integrationsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'integrations/integrations',
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>SSO integrations</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Okta SAML',
      id: 'integrations/okta-saml',
    },
    {
      type: 'doc',
      label: 'Microsoft Entra ID SAML',
      id: 'integrations/azure-ad-saml',
    },
    {
      type: 'doc',
      label: 'OneLogin SAML',
      id: 'integrations/onelogin-saml',
    },
    {
      type: 'doc',
      label: 'JumpCloud SAML',
      id: 'integrations/jumpcloud-saml',
    },
    {
      type: 'doc',
      label: 'Google Workspace SAML',
      id: 'integrations/google-saml',
    },
    {
      type: 'doc',
      label: 'PingIdentity SAML',
      id: 'integrations/pingidentity-saml',
    },
    {
      type: 'doc',
      label: 'Microsoft AD FS SAML',
      id: 'integrations/adfs-saml',
    },
    {
      type: 'doc',
      label: 'Generic SAML provider',
      id: 'integrations/saml',
    },
    {
      type: 'doc',
      label: 'Generic OIDC provider',
      id: 'integrations/oidc',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>SCIM integrations</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Okta SCIM',
      id: 'integrations/okta-scim',
    },
    {
      type: 'doc',
      label: 'Microsoft Entra ID SCIM',
      id: 'integrations/azure-scim',
    },
    {
      type: 'doc',
      label: 'Google Workspace',
      id: 'integrations/scim-connections/google-dir-sync',
    },
    {
      type: 'doc',
      label: 'JumpCloud SCIM',
      id: 'integrations/scim-connections/jumpcloud',
    },
    {
      type: 'doc',
      label: 'OneLogin SCIM',
      id: 'integrations/onelogin-scim',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Auth systems</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Auth0',
      id: 'integrations/auth0',
    },
    {
      type: 'doc',
      label: 'Firebase',
      id: 'integrations/firebase',
    },
    {
      type: 'doc',
      label: 'AWS Cognito',
      id: 'integrations/cognito',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Social connections</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Google',
      id: 'integrations/social-connections/google',
    },
    {
      type: 'doc',
      label: 'GitHub',
      id: 'integrations/social-connections/github',
    },
    {
      type: 'doc',
      label: 'GitLab',
      id: 'integrations/social-connections/gitlab',
    },
    {
      type: 'doc',
      label: 'Microsoft',
      id: 'integrations/social-connections/microsoft',
    },
    {
      type: 'doc',
      label: 'Salesforce',
      id: 'integrations/social-connections/salesforce',
    },
    {
      type: 'doc',
      label: 'LinkedIn',
      id: 'integrations/social-connections/linkedin',
    },
  ],
  guidesSidebar: [
    {
      type: 'link',
      label: 'Back to home',
      href: '/',
    },
    {
      type: 'doc',
      label: 'Explore',
      id: 'sso/guides/index',
    },
  ],
  homeSidebar: [
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Introduction</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Overview',
      id: 'index',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Quickstarts</span>",
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'SSO quickstart',
      href: '/sso/quickstart',
    },
    {
      type: 'link',
      label: 'SCIM quickstart',
      href: '/scim/quickstart',
    },
    {
      type: 'link',
      label: 'Social logins quickstart',
      href: '/sso/social-login',
    },
    {
      type: 'link',
      label: 'Machine-2-machine quickstart',
      href: '/m2m/quickstart',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Config and admin</span>",
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'Admin Portal',
      href: '/sso/quickstart-admin-portal',
    },
    {
      type: 'link',
      label: 'Auth integrations',
      href: '/integrations',
    },
    {
      type: 'link',
      label: 'Custom domains',
      href: '/sso/domain-and-theme-customization#custom-domain',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Support</span>",
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'View glossary',
      href: 'manage-scalekit/glossary',
    },
    {
      type: 'link',
      label: 'Contact us',
      href: '/contact-us',
    },
    {
      type: 'link',
      label: 'View status page',
      href: 'https://scalekit.statuspage.io/',
    },
  ],
  m2mSidebar: [
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Getting started</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Overview',
      id: 'm2m/overview',
    },
    {
      type: 'doc',
      label: 'M2M quickstart',
      id: 'm2m/quickstart',
    },
    {
      type: 'link',
      label: 'View code examples',
      href: 'https://github.com/scalekit-developers/gists/tree/main/m2m',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Learn M2M concepts</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Understand M2M authentication',
      id: 'm2m/m2m-basics',
    },
    {
      type: 'doc',
      label: 'Authenticate M2M clients',
      id: 'm2m/api-auth-for-m2m-clients',
    },
    {
      type: 'html',
      value: '<div />',
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text uppercasetext--light sidenav-category-heading'>How-to guides</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Authenticate with Scalekit API',
      id: 'm2m/authenticate-scalekit-api',
    },
    {
      type: 'doc',
      label: 'Manage organization identifiers',
      id: 'm2m/external-ids-and-metadata',
    },
    {
      type: 'doc',
      label: 'Configure client scopes',
      id: 'm2m/scopes',
    },
  ],
};

export default sidebars;
