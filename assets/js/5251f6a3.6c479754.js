"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7164],{4706:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(4848),s=i(8453);const r={sidebar_position:1},o="Go-live Checklist",c={id:"single-sign-on/golive-checklist",title:"Go-live Checklist",description:"As you prepare to take your Single Sign-On (SSO) implementation live, it\u2019s crucial to ensure every aspect is tuned for a secure and smooth production environment. Below is a checklist designed to guide developers through the essential steps:",source:"@site/docs/single-sign-on/golive-checklist.md",sourceDirName:"single-sign-on",slug:"/single-sign-on/golive-checklist",permalink:"/single-sign-on/golive-checklist",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714489061e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testing Single Sign-on",permalink:"/single-sign-on/testing-sso"},next:{title:"Integrate Admin Portal",permalink:"/admin-portal/quickstart-admin-portal"}},l={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"go-live-checklist",children:"Go-live Checklist"}),"\n",(0,t.jsx)(n.p,{children:"As you prepare to take your Single Sign-On (SSO) implementation live, it\u2019s crucial to ensure every aspect is tuned for a secure and smooth production environment. Below is a checklist designed to guide developers through the essential steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use appropriate environment variables"})}),"\n",(0,t.jsx)(n.p,{children:"Switch from development to production credentials, including the Client ID, Client Secret, and Environment URL. Your .env file should reflect these production values, distinct from your test settings. Sample .env file is below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title=".env"',children:'SCALEKIT_ENV_URL="https://acmecorp.scalekit.com"\nSCALEKIT_CLIENT_ID="12wedfgt567898uyg"\nSCALEKIT_CLIENT_SECRET="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Secure the Client Secret"})}),"\n",(0,t.jsxs)(n.p,{children:["Your client secret is akin to a key to your application. Secure it with the utmost care. Follow our ",(0,t.jsx)(n.a,{href:"/best-practices/manage-client-secrets",children:"Manage Client Secrets"})," guide for industry-standard practices in safeguarding this sensitive information."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Verify Redirect URI Configuration"})}),"\n",(0,t.jsxs)(n.p,{children:["Double-check your Redirect URI settings in the production environment to ensure they point to the correct endpoints. For guidelines on valid configurations, visit our Redirect URI configuration ",(0,t.jsx)(n.a,{href:"/best-practices/redirect-uri",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Finalize Branding & Theming"})}),"\n",(0,t.jsx)(n.p,{children:"For a consistent and professional user experience, confirm your branding\u2014logos, accent colors, etc.\u2014is applied to the SSO authentication and admin interface."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Review Customer Portal URL"})}),"\n",(0,t.jsxs)(n.p,{children:["Customize the admin portal URL to match your domain (https",(0,t.jsx)("nolink",{}),"://sso.yourdomain.com) for a seamless brand experience. Remember to update this in your .env file post-CNAME configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Graceful Error Handling"})}),"\n",(0,t.jsxs)(n.p,{children:["Test your integration thoroughly across all possible edge cases, including incomplete, invalid, or duplicate data submissions. Review our ",(0,t.jsx)(n.a,{href:"/best-practices/error-handling",children:"error handling documentation"})," to ensure your application manages errors elegantly and informs users accordingly."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Completing these steps is pivotal to a successful launch. While our SDK covers many bases, vigilance is the key to a secure and user-friendly SSO implementation. Good luck with your launch!"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);