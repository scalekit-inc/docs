"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6640],{5361:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"sso/guides/test-your-integration/using-okta","title":"Testing SSO Integration with Okta and Scalekit","description":"Learn how to verify your SSO connection using Okta as the identity provider. Follow our comprehensive guide to test and validate Single Sign-On scenarios with Scalekit, ensuring seamless integration for your enterprise customers.","source":"@site/docs/sso/guides/test-your-integration/using-okta.mdx","sourceDirName":"sso/guides/test-your-integration","slug":"/sso/guides/test-your-integration/using-okta","permalink":"/sso/guides/test-your-integration/using-okta","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Testing SSO Integration with Okta and Scalekit","description":"Learn how to verify your SSO connection using Okta as the identity provider. Follow our comprehensive guide to test and validate Single Sign-On scenarios with Scalekit, ensuring seamless integration for your enterprise customers.","keywords":["SSO Testing","Okta Integration","Scalekit","Single Sign-On","SP Initiated SSO","IdP Initiated SSO","Identity Provider","SSO Scenarios","Error Handling","SSO Validation"]},"sidebar":"ssoSidebar","previous":{"title":"Customize User Attributes","permalink":"/sso/guides/setup-sso/customize-user-attributes"},"next":{"title":"Integrate with Auth0","permalink":"/sso/guides/integrate-with-your-auth-system/auth0"}}');var s=t(4848),r=t(8453);t(3032),t(9802);const o={title:"Testing SSO Integration with Okta and Scalekit",description:"Learn how to verify your SSO connection using Okta as the identity provider. Follow our comprehensive guide to test and validate Single Sign-On scenarios with Scalekit, ensuring seamless integration for your enterprise customers.",keywords:["SSO Testing","Okta Integration","Scalekit","Single Sign-On","SP Initiated SSO","IdP Initiated SSO","Identity Provider","SSO Scenarios","Error Handling","SSO Validation"]},a="Test SSO",d={},l=[{value:"Setup your environment for testing",id:"setup-your-environment-for-testing",level:2},{value:"Single Sign-on Scenarios to validate",id:"single-sign-on-scenarios-to-validate",level:2},{value:"Scenario 1: SP Initiated SSO",id:"scenario-1-sp-initiated-sso",level:3},{value:"Scenario 2: IdP Initiated SSO",id:"scenario-2-idp-initiated-sso",level:3},{value:"Scenario 3: Handling Errors",id:"scenario-3-handling-errors",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components},{Subtitle:n,TermTip:o}=i;return n||u("Subtitle",!0),o||u("TermTip",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"test-sso",children:"Test SSO"})}),"\n",(0,s.jsx)(n,{children:"Verify SSO Connection using Okta as the identity provider"}),"\n",(0,s.jsxs)(i.p,{children:["Using our ",(0,s.jsx)(i.a,{href:"/sso/quickstart",children:"Quickstart guide"}),", you would have integrated Scalekit and implemented the SSO authentication\nin your sandbox environment. Now, it's time to test your SSO integration for all possible customer scenarios."]}),"\n",(0,s.jsxs)(i.p,{children:["Before getting started, we recommend you signup for an ",(0,s.jsx)(i.a,{href:"https://developer.okta.com/signup/",children:"Okta developer account"})," so\nthat you can test and verify SSO integration with Scalekit."]}),"\n",(0,s.jsx)(i.h2,{id:"setup-your-environment-for-testing",children:"Setup your environment for testing"}),"\n",(0,s.jsx)(i.p,{children:"For effective testing purposes, lets simulate a real scenario of onboarding an enterprise organization to your\napplication. Assume the organization uses Okta as identity provider and is expecting to Single Sign-on with Okta."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Create an organization in the ",(0,s.jsx)(i.a,{href:"https://app.scalekit.com",children:"Scalekit Dashboard"})," with a name that reflects your customer."]}),"\n",(0,s.jsxs)(i.li,{children:["Generate an ",(0,s.jsx)(o,{jargon:"Admin Portal"})," link in the overview section of the created organization."]}),"\n",(0,s.jsxs)(i.li,{children:["Open the Admin Portal link and follow our ",(0,s.jsx)(i.a,{href:"/integrations/okta-saml",children:"Okta Integration guide"})," to setup an active SSO\nconnection using Okta."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["You can ",(0,s.jsx)(i.a,{href:"/sso/domain-and-theme-customization",children:"customize the admin portal"})," and theme it according to your\napplication's brand guidelines to give a more polished experience."]})}),"\n",(0,s.jsx)(i.p,{children:"Now that you have an active SSO connection, make sure that you have successfully validated the below scenarios."}),"\n",(0,s.jsx)(i.h2,{id:"single-sign-on-scenarios-to-validate",children:"Single Sign-on Scenarios to validate"}),"\n",(0,s.jsx)(i.h3,{id:"scenario-1-sp-initiated-sso",children:"Scenario 1: SP Initiated SSO"}),"\n",(0,s.jsx)(i.p,{children:"In this scenario, user starts the Single Sign-on flow from your application's login page."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"SP initiated SSO workflow",src:t(8849).A+"",width:"4936",height:"3744"}),"\n",(0,s.jsx)("figcaption",{children:"SP initiated SSO workflow"})]})}),"\n",(0,s.jsx)(i.p,{children:"Validate the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Scalekit redirects the user to the appropriate identity provider based on the\n",(0,s.jsx)(i.a,{href:"/sso/guides/key-concepts/authorization-url",children:"Authorization URL"})," you provided."]}),"\n",(0,s.jsxs)(i.li,{children:["Your application can retrieve the user details by exchanging the ",(0,s.jsx)(i.code,{children:"code"})," you received in the above step."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"scenario-2-idp-initiated-sso",children:"Scenario 2: IdP Initiated SSO"}),"\n",(0,s.jsx)(i.p,{children:"In this scenario, user is logged in the identity provider and selects your application. The SSO flow gets initiated from\nthe identity provider (IdP). Diagram below explains the workflow"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Scalekit&#39;s recommended workflow for IdP initiated SSO",src:t(9807).A+"",width:"4936",height:"4432"}),"\n",(0,s.jsx)("figcaption",{children:"Scalekit's recommended workflow for IdP initiated SSO"})]})}),"\n",(0,s.jsx)(i.p,{children:"Validate the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"User is redirected to the default Redirect URI with request parameters. This Redirect URI is configured in the\nScalekit dashboard."}),"\n",(0,s.jsxs)(i.li,{children:["Your application detects this as IdP-initiated SSO (based on the request parameters) and initiates the SP-initiated\nSSO. For step-by-step details, check out this guide on the\n",(0,s.jsx)(i.a,{href:"/sso/guides/setup-sso/implement-idp-initiated-sso",children:"implementing Idp-initiated SSO"})]}),"\n",(0,s.jsx)(i.li,{children:"User is redirected to the appropriate identity provider based on the Authorization URL provided."}),"\n",(0,s.jsxs)(i.li,{children:["After the user is authenticated by the identity provider, they are navigated to the Redirect URI with a one time\n",(0,s.jsx)(i.code,{children:"code"})," along with the ",(0,s.jsx)(i.code,{children:"state"})," parameter sent in the Authorization URL."]}),"\n",(0,s.jsxs)(i.li,{children:["Your application can retrieve the user details by exchanging the ",(0,s.jsx)(i.code,{children:"code"})," you received in the above step."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"scenario-3-handling-errors",children:"Scenario 3: Handling Errors"}),"\n",(0,s.jsx)(i.p,{children:"Sometimes, SSO login could fail due to improper SSO configuration, incomplete user profiles, or integration issues with\nScalekit."}),"\n",(0,s.jsxs)(i.p,{children:["Handle errors and display appropriate error messages to your users. Go through the possible\n",(0,s.jsx)(i.a,{href:"/sso/guides/setup-sso/error-handling",children:"error codes"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(i.p,{children:["After validating all scenarios, you are ready to go live. Visit our ",(0,s.jsx)(i.a,{href:"/sso/launch-checklist",children:"Launch Checklist"})," guide\nbefore you start onboarding real customers in your production environment."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3032:(e,i,t)=>{t.d(i,{A:()=>p});t(6540);var n=t(4164);const s="container_P0xw",r="header_GUoD",o="icon_SuAj",a="title_Lvs4",d="description_lOXy",l="links_GW4l";var c=t(8774),h=t(4848);const u=e=>{let{href:i,children:t,disableCardClick:r}=e;return i&&!r?(0,h.jsx)(c.A,{to:i,className:(0,n.A)(s),children:(0,h.jsx)(h.Fragment,{children:t})}):(0,h.jsx)("div",{className:(0,n.A)(s),children:t})},p=e=>{let{href:i,title:t,description:s,linkText:c,icon:p,children:g,disableCardClick:S}=e;return(0,h.jsxs)(u,{href:i,disableCardClick:S,children:[(0,h.jsxs)("div",{className:(0,n.A)(r),children:[p&&(0,h.jsx)("div",{className:(0,n.A)(o),children:p}),t&&(0,h.jsx)("h5",{className:(0,n.A)(a),children:t})]}),s&&(0,h.jsx)("p",{className:(0,n.A)(d),children:s}),(0,h.jsx)("div",{className:(0,n.A)(l),children:g})]})}},9802:(e,i,t)=>{t.d(i,{A:()=>d});t(6540);var n=t(4164);const s="cardList_oEf8",r="small_V_hA",o="medium_as7B";var a=t(4848);const d=e=>{let{size:i="medium",children:t}=e;return(0,a.jsx)("div",{className:(0,n.A)(s,"medium"===i&&o,"small"===i&&r),children:t})}},8849:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/how-sso-works-de15f3ce77c845566eb50fd560d12a28.png"},9807:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/idp_initiated_sso_with_scalekit-8c490e6db4b35a7ac94c517726b182b2.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(6540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);