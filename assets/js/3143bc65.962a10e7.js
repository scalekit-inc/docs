"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[5922],{4557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"integrations/social-connections/google","title":"Google as Your Sign In Option","description":"Easily add Google Sign In to your app with Scalekit","source":"@site/docs/integrations/social-connections/google.mdx","sourceDirName":"integrations/social-connections","slug":"/integrations/social-connections/google","permalink":"/integrations/social-connections/google","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"integrationsSidebar","previous":{"title":"Firebase","permalink":"/integrations/firebase"},"next":{"title":"Github","permalink":"/integrations/social-connections/github"}}');var o=i(4848),s=i(8453);const l={},c="Google as Your Sign In Option",r={},a=[{value:"Overview",id:"overview",level:2},{value:"Connect Google with Scalekit",id:"connect-google-with-scalekit",level:2},{value:"Configure OAuth settings",id:"configure-oauth-settings",level:2},{value:"Get Google OAuth Client Credentials",id:"get-google-oauth-client-credentials",level:3},{value:"Test the Connection",id:"test-the-connection",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SimpleCode:t,Subtitle:l}=n;return t||g("SimpleCode",!0),l||g("Subtitle",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"google-as-your-sign-in-option",children:"Google as Your Sign In Option"})}),"\n",(0,o.jsx)(l,{children:"Easily add Google Sign In to your app with Scalekit"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:'Scalekit enables apps to easily let users sign in using Google as their social connector. This guide\nwalks you through the process of setting up the connection between Scalekit and Google, and using\nthe Scalekit SDK to add "Sign in with Google" to your application.'}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Overview Diagram",src:i(7180).A+"",width:"5776",height:"1924"})}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(n.p,{children:'A diagram showing "Your Application" connecting to "Scalekit" via OpenID Connect, which links to\nGoogle using OAuth 2.0.'})})]}),"\n",(0,o.jsx)(n.p,{children:"By the end of this guide, you will be able to:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Set up an OAuth 2.0 connection between Scalekit and Google"}),"\n",(0,o.jsx)(n.li,{children:'Scalekit SDK to add "Sign in with Google" to your application'}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"connect-google-with-scalekit",children:"Connect Google with Scalekit"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Navigate to Social Login settings"})}),"\n",(0,o.jsx)(n.p,{children:"Open your Scalekit dashboard and navigate to Social Login under the Authentication section."}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Scalekit dashboard showcasing social login setup with various platform integration\noptions.",src:i(5640).A+"",width:"2622",height:"908"})}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(n.p,{children:"Scalekit dashboard showcasing social login setup with various platform integration options."})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Add a new Google connection"})}),"\n",(0,o.jsx)(n.p,{children:'Click the "+ Add Connection" button and select Google from the list of available options.'}),"\n",(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Add social login connections: Google, Microsoft, GitHub, GitLab,\nSalesforce.",src:i(2283).A+"",width:"2554",height:"914"}),"\n",(0,o.jsx)("figcaption",{children:"Add social login connections: Google"})]})}),"\n",(0,o.jsx)(n.h2,{id:"configure-oauth-settings",children:"Configure OAuth settings"}),"\n",(0,o.jsx)(n.p,{children:"The OAuth Configuration details page helps you set up the connection:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Note the ",(0,o.jsx)(n.strong,{children:"Redirect URI"})," provided for your app. You'll use this URL to register with Google."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client ID"})," and ",(0,o.jsx)(n.strong,{children:"Client Secret"})," are generated by Google when you register an OAuth App. They\nenable Scalekit to authenticate your app and establish trust with Google."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"get-google-oauth-client-credentials",children:"Get Google OAuth Client Credentials"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Platform Console"}),". From the projects\nlist, select an existing project or create a new one."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the\n",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/auth/overview",children:"Google Auth Platform's overview page"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Get Started"})," and provide details such as app information, audience, and contact\ninformation. Complete the process by clicking ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['On the "Overview" page, click the ',(0,o.jsx)(n.strong,{children:"Create OAuth Client"})," button to start setting up your app's\nOAuth client."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Choose the appropriate application type (e.g., web application) from the dropdown menu."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the redirect URI from your Google Social Login configuration and paste it into the\n",(0,o.jsx)(n.strong,{children:"Authorized Redirect URIs"})," field. The URI should follow this format (for development\nenvironment): ",(0,o.jsx)(t,{children:" https://[YOUR_ENV_ID].scalekit.dev "}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Save and Retrieve Credentials"}),": Click ",(0,o.jsx)(n.strong,{children:"Save"})," to finalize the setup. You will be redirected\nto a list of Google OAuth Clients. Select the newly created client and copy the ",(0,o.jsx)(n.strong,{children:"Client ID"}),"\nand ",(0,o.jsx)(n.strong,{children:"Client Secret"})," from the additional information section."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enter Credentials in Social Login Configuration"}),": Paste the copied client credentials into\ntheir respective fields on your Google Social Login page."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Test Connection"})," to simulate and verify the Google Sign-In flow."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Explore options like branding, audience, clients, and data access to customize your OAuth consent\nscreen for your application's needs."}),"\n",(0,o.jsx)(n.li,{children:"Ensure your app's verification status with Google is complete before enabling social login\nfeatures for users to ensure trustworthiness."}),"\n"]})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, refer to ",(0,o.jsx)(n.a,{href:"https://support.google.com/cloud/answer/6158849",children:"Google's OAuth Guide"}),"."]}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Configure OAuth\nsettings",src:i(7201).A+"",width:"2892",height:"1537"})}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(n.p,{children:"Google OAuth configuration in Scalekit, showing redirect URI, client credentials, and scopes for\nsocial login setup."})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use the Redirect URI from Scalekit as the Callback URL in Google's setup"}),"\n",(0,o.jsx)(n.li,{children:"Copy the generated Client ID and Client Secret into the Scalekit Dashboard"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'After completing the setup, click "Save Changes" in Scalekit for the changes to take effect.'}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Google OAuth configuration for social login, showing redirect URI, client ID, and scopes for\nauthentication.",src:i(2449).A+"",width:"2818",height:"1594"})}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(n.p,{children:"Google OAuth configuration for social login, showing redirect URI, client ID, and scopes for\nauthentication."})})]}),"\n",(0,o.jsx)(n.h2,{id:"test-the-connection",children:"Test the Connection"}),"\n",(0,o.jsx)(n.p,{children:'Click the "Test Connection" button in Scalekit. You will be redirected to the Google Consent screen\nto authorize access. A summary table will show the information that will be sent to your app.'}),"\n",(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Test connection\nsuccess",src:i(8145).A+"",width:"2922",height:"1812"}),"\n",(0,o.jsx)("figcaption",{children:"Test connection success, showing the consent screen and summary table."})]})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(n.p,{children:["Once the connection is set up, refer to our ",(0,o.jsx)(n.a,{href:"/sso/social-login",children:"Quickstart guide"})," to learn how to\nintegrate this connection into your app using the Scalekit SDK."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5640:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-navigate-to-social-logins-9e10cb4180800caeb2ec155513cdee74.png"},2283:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2-list-social-logins-4af5343315c2eea7a53cb4370d28e61d.png"},7201:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/3-google-oauth-config-eff6333e47c87a3b61643669448cbcf5.png"},2449:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4-after-oauth-config-49857ba21a0134d07482d32a3516aaf7.png"},8145:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/5-successful-test-connection-d8fef6b3723decf7247bb58042a41aab.png"},7180:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/scalekit_social-a3766a0389271c05739c72d7875dd680.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);