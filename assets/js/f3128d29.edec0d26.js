"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7120],{8852:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(4848),n=t(8453),s=t(6365);const o={},a="Error Handling",c={id:"best-practices/error-handling",title:"Error Handling",description:"If there are any configuration or application issues while the user tries to login with Single Sign-on via Scalekit, your application's redirect uri will receive the details of the error via the request parameters: errorcode, errordescription.",source:"@site/docs/best-practices/error-handling.md",sourceDirName:"best-practices",slug:"/best-practices/error-handling",permalink:"/best-practices/error-handling",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714227404e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced SAML",permalink:"/best-practices/advanced-saml"},next:{title:"Troubleshooting SSO Errors",permalink:"/best-practices/troubleshooting-sso"}},d={},l=[];function h(e){const r={h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"error-handling",children:"Error Handling"}),"\n","\n",(0,i.jsx)(r.p,{children:"If there are any configuration or application issues while the user tries to login with Single Sign-on via Scalekit, your application's redirect uri will receive the details of the error via the request parameters: error_code, error_description."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Error Code"}),(0,i.jsx)(r.th,{children:"Error Details"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(s.I,{children:"invalid_redirect_uri"})}),(0,i.jsx)(r.td,{children:"Redirect URI is not part of the pre-approved list of Redirect URIs. If this is a valid URL, you need to add it in the Scalekit Dashboard before using it."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(s.I,{children:"invalid_organization_id"})}),(0,i.jsx)(r.td,{children:"Organization ID is not valid"})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6365:(e,r,t)=>{t.d(r,{A:()=>s,I:()=>n});t(6540);var i=t(4848);function n(e){let{children:r}=e;return(0,i.jsx)("code",{className:"simple_code",children:r})}function s(e){let{children:r}=e;return(0,i.jsx)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:r})}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var i=t(6540);const n={},s=i.createContext(n);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);