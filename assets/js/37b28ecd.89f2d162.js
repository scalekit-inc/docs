"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[4965],{3311:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"integrations/auth0","title":"Integrating Scalekit with Auth0 for Seamless Single Sign-on Authentication","description":"Learn how to integrate Scalekit with Auth0 applications for seamless Single Sign-on Authentication. This guide provides steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant.","source":"@site/docs/integrations/auth0.mdx","sourceDirName":"integrations","slug":"/integrations/auth0","permalink":"/integrations/auth0","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Integrating Scalekit with Auth0 for Seamless Single Sign-on Authentication","description":"Learn how to integrate Scalekit with Auth0 applications for seamless Single Sign-on Authentication. This guide provides steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant.","keywords":["Scalekit","Auth0","Single Sign-on","SSO","OpenID Connect","OIDC","Enterprise Connections","Identity Management","Authentication"],"pagination_next":null,"pagination_prev":null,"displayed_sidebar":"integrationsSidebar"},"sidebar":"integrationsSidebar"}');var s=i(4848),o=i(8453);const a={title:"Integrating Scalekit with Auth0 for Seamless Single Sign-on Authentication",description:"Learn how to integrate Scalekit with Auth0 applications for seamless Single Sign-on Authentication. This guide provides steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant.",keywords:["Scalekit","Auth0","Single Sign-on","SSO","OpenID Connect","OIDC","Enterprise Connections","Identity Management","Authentication"],pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar"},r="Auth0",c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Before getting started",id:"before-getting-started",level:2},{value:"Integrate Scalekit with Auth0",id:"integrate-scalekit-with-auth0",level:2},{value:"1. Add Scalekit as OIDC connection",id:"1-add-scalekit-as-oidc-connection",level:3},{value:"2. Add Redirect URI in Scalekit",id:"2-add-redirect-uri-in-scalekit",level:3},{value:"2a. Copy Callback URL from Auth0",id:"2a-copy-callback-url-from-auth0",level:4},{value:"2b. Set Redirect URI in Scalekit API Config",id:"2b-set-redirect-uri-in-scalekit-api-config",level:4},{value:"3. Onboarding Single Sign-on customers in Scalekit",id:"3-onboarding-single-sign-on-customers-in-scalekit",level:3},{value:"4. Update Home Realm Discovery in Auth0",id:"4-update-home-realm-discovery-in-auth0",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Subtitle:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"auth0",children:"Auth0"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(n.p,{children:"Learn how to integrate Scalekit with Auth0 via OpenID Connect (OIDC)"})}),"\n",(0,s.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"This guide is designed to provide you a walkthrough of integrating Scalekit with Auth0, thereby facilitating seamless Single Sign-on (SSO) authentication for your application's users. We demonstrate how to configure Scalekit so that Auth0 can allow some of your enterprise users to login via Scalekit and still continue to act as the identity management solution for your users and manage the login, session management functionality."}),"\n",(0,s.jsx)(n.p,{children:"To begin, here is an overview of the SSO workflow."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Scalekit - Auth0\nIntegration",src:i(8538).A+"",width:"3270",height:"954"}),"\n",(0,s.jsx)("figcaption",{children:"Scalekit - Auth0 Integration"})]})}),"\n",(0,s.jsx)(n.p,{children:"Scalekit is designed as a fully compatible OpenID Connect (OIDC) provider, thus streamlining the integration. As Auth0 continues to act as your identity management system, you'll be able to seamlessly integrate Single Sign-On into your application without having to write code."}),"\n",(0,s.jsx)(n.h2,{id:"before-getting-started",children:"Before getting started"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," that Auth0 classifies OpenID Connect as Enterprise Connection and this feature is available only in the paid plans of Auth0. Please check whether your current plan has access to creating Enterprise Connections with OpenID Connect providers."]}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"access to Auth0's Authenticate dashboard. You need to have a role as an 'Admin' or 'Editor - Connections' to create and edit OIDC connections on Auth0."}),"\n",(0,s.jsx)(n.li,{children:"access to your Scalekit dashboard."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"integrate-scalekit-with-auth0",children:"Integrate Scalekit with Auth0"}),"\n",(0,s.jsx)(n.h3,{id:"1-add-scalekit-as-oidc-connection",children:"1. Add Scalekit as OIDC connection"}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:["Because of an ",(0,s.jsx)(n.a,{href:"https://community.auth0.com/t/creating-an-oidc-connection-fails-with-options-issuer-is-required-error/128189",children:"existing issue"})," in adding OIDC connections via Auth0 Management Console, you need to use Auth0 API to create OIDC connection."]})}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://auth0.com/docs/api/management/v2/connections/post-connections",children:"Auth0 Connections API"})," to create Scalekit as a OpenID connection for your tenant. Sample curl command below:"]}),"\n",(0,s.jsx)(n.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,s.jsxs)(n.code,{className:"language-bash",children:[(0,s.jsx)(n.span,{className:"line"}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"curl"}),(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --request"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" POST"}),(0,s.jsx)(n.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  --url"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'https://<AUTH0_TENANT_DOMAIN>.us.auth0.com/api/v2/connections'"}),(0,s.jsx)(n.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Content-Type: application/json'"}),(0,s.jsx)(n.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Accept: application/json'"}),(0,s.jsx)(n.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  --header"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'authorization: Bearer <API_TOKEN>'"}),(0,s.jsx)(n.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  --data-raw"}),(0,s.jsx)(n.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' \'{ "strategy": "oidc", "name": "Scalekit", "options": { "type": "back_channel", "discovery_url": "<SCALEKIT_ENV_URL>/.well-known/openid-configuration", "client_secret" : "<SCALEKIT_CLIENT_SECRET>", "client_id" : "<SCALEKIT_CLIENT_ID>",  "scopes": "openid profile" } }\''})]}),"\n",(0,s.jsx)(n.span,{className:"line"}),"\n",(0,s.jsx)(n.span,{className:"line"})]})}),"\n",(0,s.jsx)(n.p,{children:"Use the table below to find out more about how to get the relevant information and replace the variables in the above command."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AUTH0_TENANT_DOMAIN"}),(0,s.jsxs)(n.td,{children:["This is your Auth0 tenant url. Typically, looks like https:",(0,s.jsx)("span",{}),"//yourapp.us.auth0.com"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API_TOKEN"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://auth0.com/docs/secure/tokens/access-tokens/management-api-access-tokens",children:"Generate an API token"})," from your Auth0 dashboard and use it to authenticate your Auth0 API calls."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SCALEKIT_ENV_URL"}),(0,s.jsxs)(n.td,{children:["Find this in your ",(0,s.jsx)(n.a,{href:"https://app.scalekit.com",children:"API config"})," section of Scalekit Dashboard"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SCALEKIT_CLIENT_SECRET"}),(0,s.jsxs)(n.td,{children:["Generate a new client secret in your ",(0,s.jsx)(n.a,{href:"https://app.scalekit.com",children:"API config"})," section of Scalekit Dashboard and use that here"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SCALEKIT_CLIENT_ID"}),(0,s.jsxs)(n.td,{children:["Find this in your ",(0,s.jsx)(n.a,{href:"https://app.scalekit.com",children:"API config"})," section of Scalekit Dashboard"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["After the successful execution of the above API call, you will see a new OpenID connection created in your Auth0 tenant. To confirm this, you can navigate to ",(0,s.jsx)(n.a,{href:"https://auth0.com/docs/authenticate/enterprise-connections#view-enterprise-connections",children:"Enterprise Connections"})," in your Auth0 dashboard."]}),"\n",(0,s.jsx)(n.h3,{id:"2-add-redirect-uri-in-scalekit",children:"2. Add Redirect URI in Scalekit"}),"\n",(0,s.jsx)(n.p,{children:"After creating Scalekit as a new OIDC connection, you need to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copy the Callback URL from your Auth0 Dashboard"}),"\n",(0,s.jsx)(n.li,{children:"Add it as a new Redirect URI in your Scalekit API Config section."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2a-copy-callback-url-from-auth0",children:"2a. Copy Callback URL from Auth0"}),"\n",(0,s.jsx)(n.p,{children:'In your Auth0 dashboard, go to Authentication > Enterprise > OpenID Connect > Scalekit > Settings.\nCopy the "Callback URL" that\'s available in the General section of settings.'}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Copy Callback URL from Auth0\nDashboard",src:i(4723).A+"",width:"3154",height:"2154"}),"\n",(0,s.jsx)("figcaption",{children:"Copy Callback URL from your Auth0 Dashboard"})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h4,{id:"2b-set-redirect-uri-in-scalekit-api-config",children:"2b. Set Redirect URI in Scalekit API Config"}),"\n",(0,s.jsxs)(n.p,{children:['Go to your Scalekit dashboard. Select environment as Development or Production. Navigate to the "API Config" in the Settings (left nav). In the Redirect URIs section, select ',(0,s.jsx)(n.strong,{children:"Add new URI"}),". Paste the Callback URL that you copied from Auth0 dashboard. Click on Add button."]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Add new Redirect URI in Scalekit\nDashboard",src:i(6392).A+"",width:"2728",height:"1530"}),"\n",(0,s.jsx)("figcaption",{children:"Add new Redirect URI in Scalekit Dashboard"})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"3-onboarding-single-sign-on-customers-in-scalekit",children:"3. Onboarding Single Sign-on customers in Scalekit"}),"\n",(0,s.jsx)(n.p,{children:"To onboard new enterprise customers using Single Sign-on login, you need to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create an Organization"})," in Scalekit"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Generate Admin Portal link"})," to allow your customers configure SSO settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configure Domain"})," in the Scalekit dashboard for that Organization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Update Home Realm Discovery"})," settings in your Auth0 tenant with this Organization's domain."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-update-home-realm-discovery-in-auth0",children:"4. Update Home Realm Discovery in Auth0"}),"\n",(0,s.jsx)(n.p,{children:"In step 2, you have successfully configured Scalekit as an OIDC connection in your Auth0 tenant. It's time to enable Home Realm Discovery for your enterprise customers in Auth0. This configuration will help Auth0 determine which users to be routed to login via Single Sign-on."}),"\n",(0,s.jsx)(n.p,{children:'In your Auth0 dashboard, go to Authentication > Enterprise > OpenID Connect > Scalekit > Login Experience.\nNavigate to "Home Realm Discovery" in the Login Experience Customization section.'}),"\n",(0,s.jsx)(n.p,{children:"In the Identity Provider domains, add the comma separated list of domains that need to be authenticated with Single Sign-on via Scalekit. Auth0 uses this configuration to compare the users email domain at the time of login:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If there is a match in the configured domains, users will be redirected to the Scalekit's Single Sign-on"}),"\n",(0,s.jsx)(n.li,{children:"If there is no match, users will be prompted to login via other authentication methods like password or passwordless login based on your Auth0 configuration."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you would like users from three Organizations (FooCorp, BarCorp, AcmeCorp) to access your application using their respective identity providers, you need to add them as a comma separated list foocorp.com, barcorp.com, acmecorp.com. Screenshot below for reference"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Add domains for Home Realm Discovery in\nAuth0",src:i(4785).A+"",width:"2796",height:"1670"}),"\n",(0,s.jsx)("figcaption",{children:"Add domains for Home Realm Discovery in Auth0"})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Press Save"})," to save Home Realm Discovery settings."]}),"\n",(0,s.jsx)(n.p,{children:"You have now successfully integrated Scalekit with Auth0, thereby facilitating seamless SSO authentication for your application's users."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8538:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/0-8f04a01f5ff3db223c4b0b519bc4d82d.png"},4723:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-a15f7568e982282d5dfae3b739d69a1e.png"},6392:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2-0ad080db0bffab065ba1af81cd2d9533.png"},4785:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/3-86843be27e41ded6a5708b3388f1d811.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);