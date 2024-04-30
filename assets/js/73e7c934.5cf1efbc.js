"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[4724],{9829:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(4848),s=i(8453),o=i(6365);const a={sidebar_position:2,title:"Okta - SAML",description:"SSO Configuration Guide for Okta"},r="Okta - SAML",c={id:"integrations/okta-saml",title:"Okta - SAML",description:"SSO Configuration Guide for Okta",source:"@site/docs/integrations/okta-saml.md",sourceDirName:"integrations",slug:"/integrations/okta-saml",permalink:"/integrations/okta-saml",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713878825e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Okta - SAML",description:"SSO Configuration Guide for Okta"},sidebar:"tutorialSidebar",previous:{title:"Microsoft Entra ID (Azure AD) - SAML",permalink:"/integrations/azure-ad-saml"},next:{title:"OneLogin - SAML",permalink:"/integrations/onelogin-saml"}},l={},d=[{value:"1. Create Enterprise Application",id:"1-create-enterprise-application",level:3},{value:"2. SAML Configuration",id:"2-saml-configuration",level:3},{value:"3. Attribute Mapping",id:"3-attribute-mapping",level:3},{value:"4. Assign User/Group",id:"4-assign-usergroup",level:3},{value:"5. Finalize App",id:"5-finalize-app",level:3},{value:"6. Upload IdP Metadata URL",id:"6-upload-idp-metadata-url",level:3},{value:"7. Test Connection",id:"7-test-connection",level:3},{value:"8. Enable connection",id:"8-enable-connection",level:3}];function g(n){const e={br:"br",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"okta---saml",children:"Okta - SAML"}),"\n",(0,t.jsx)(o.A,{children:"Step-by-step guide to configure Single Sign-on with Okta as the Identity Provider. "}),"\n",(0,t.jsx)(e.h3,{id:"1-create-enterprise-application",children:"1. Create Enterprise Application"}),"\n",(0,t.jsxs)(e.p,{children:["Login to your ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"}),". Go to ",(0,t.jsx)(e.strong,{children:"Applications\u2192 Applications."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Locate Applications",src:i(918).A+"",width:"1542",height:"892"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Applications"})]}),"\n",(0,t.jsxs)(e.p,{children:["In the ",(0,t.jsx)(e.strong,{children:"Applications"})," tab, click on ",(0,t.jsx)(e.strong,{children:"Create App Integration."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Click on Create App Integration",src:i(727).A+"",width:"1406",height:"922"}),"\n",(0,t.jsx)("figcaption",{children:"Click on Create App Integration"})]}),"\n",(0,t.jsxs)(e.p,{children:["Choose ",(0,t.jsx)(e.strong,{children:"SAML 2.0,"})," and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Select SAML 2.0 ",src:i(5644).A+"",width:"1840",height:"1108"}),"\n",(0,t.jsx)("figcaption",{children:"Select SAML 2.0 "})]}),"\n",(0,t.jsxs)(e.p,{children:["Give your app a name, choose your app visibility settings, and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"General Settings for SAML integration",src:i(9509).A+"",width:"1368",height:"1084"}),"\n",(0,t.jsx)("figcaption",{children:"General Settings for SAML integration"})]}),"\n",(0,t.jsx)(e.h3,{id:"2-saml-configuration",children:"2. SAML Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["Copy the ",(0,t.jsx)(e.strong,{children:"SSO URL"})," from the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),". Paste this link in the space for ",(0,t.jsx)(e.strong,{children:"SSO URL"})," on the ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"}),"."]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Copy SSO URL on Configuration Portal",src:i(4842).A+"",width:"2292",height:"1116"}),"\n",(0,t.jsx)("figcaption",{children:"Copy SSO URL on Configuration Portal"})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Paste SSO URL on Okta Admin Console",src:i(5603).A+"",width:"1894",height:"1398"}),"\n",(0,t.jsx)("figcaption",{children:"Paste SSO URL on Okta Admin Console"})]}),"\n",(0,t.jsxs)(e.p,{children:["Similarly, copy the ",(0,t.jsx)(e.strong,{children:"Audience URI (SP Entity ID)"})," from the SSO Configuration Portal, and paste it in your ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"})," in the space for ",(0,t.jsx)(e.strong,{children:"Audience URI."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Copy Audience URI on SSO Configuration Portal",src:i(1112).A+"",width:"2292",height:"1116"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Audience URI on SSO Configuration Portal"})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Paste Audience URI on Okta Admin Console",src:i(3825).A+"",width:"1898",height:"1400"}),"\n",(0,t.jsx)("figcaption",{children:"Paste Audience URI on Okta Admin Console "})]}),"\n",(0,t.jsx)(e.p,{children:"You can leave the Default Relay State as blank. Similarly, select your preferences for the Name ID format, Application Username, and Update application username on fields."}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Selecting preferences on Okta Admin Console",src:i(7670).A+"",width:"1496",height:"696"}),"\n",(0,t.jsx)("figcaption",{children:"Selecting preferences on Okta Admin Console"})]}),"\n",(0,t.jsx)(e.h3,{id:"3-attribute-mapping",children:"3. Attribute Mapping"}),"\n",(0,t.jsxs)(e.p,{children:["Check the ",(0,t.jsx)(e.strong,{children:"Attribute Mapping"})," section in the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),", and carefully map the same attributes on your Okta Admin Console.\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Attribute mapping on SSO Configuration Portal ",src:i(2767).A+"",width:"2206",height:"752"}),"\n",(0,t.jsx)("figcaption",{children:"Attribute mapping on SSO Configuration Portal"})]})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Attribute mapping on Okta Admin Console ",src:i(9223).A+"",width:"1516",height:"786"}),"\n",(0,t.jsx)("figcaption",{children:"Attribute mapping on Okta Admin Console"})]}),"\n",(0,t.jsx)(e.h3,{id:"4-assign-usergroup",children:"4. Assign User/Group"}),"\n",(0,t.jsxs)(e.p,{children:["Go to the ",(0,t.jsx)(e.strong,{children:"Assignments"})," tab.\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Locate Assignments tab",src:i(3646).A+"",width:"1682",height:"874"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Assignments tab"})]})]}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Assign"})," on the top navigation bar, select ",(0,t.jsx)(e.strong,{children:"Assign to People/Groups."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Select Assign to People or Groups ",src:i(4005).A+"",width:"1204",height:"478"}),"\n",(0,t.jsx)("figcaption",{children:"Select Assign to People or Groups"})]}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Assign"})," next to the people you want to assign it to. Click on ",(0,t.jsx)(e.strong,{children:"Save and Go Back"}),", and click on ",(0,t.jsx)(e.strong,{children:"Done."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Assign specific individuals or groups to app",src:i(1116).A+"",width:"1218",height:"1070"}),"\n",(0,t.jsx)("figcaption",{children:"Assign specific individuals or groups to app"})]}),"\n",(0,t.jsx)(e.h3,{id:"5-finalize-app",children:"5. Finalize App"}),"\n",(0,t.jsxs)(e.p,{children:["Preview your SAML Assertion generated, and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Preview SAML Assertion",src:i(5987).A+"",width:"1542",height:"706"}),"\n",(0,t.jsx)("figcaption",{children:"Preview SAML Assertion"})]}),"\n",(0,t.jsxs)(e.p,{children:["Fill the feedback form, and click on ",(0,t.jsx)(e.strong,{children:"Finish"})," once done."]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Feedback form after configuring SAML",src:i(7130).A+"",width:"1680",height:"1358"}),"\n",(0,t.jsx)("figcaption",{children:"Feedback form after configuring SAML"})]}),"\n",(0,t.jsx)(e.h3,{id:"6-upload-idp-metadata-url",children:"6. Upload IdP Metadata URL"}),"\n",(0,t.jsxs)(e.p,{children:["On the ",(0,t.jsx)(e.strong,{children:"Sign On"})," tab copy the ",(0,t.jsx)(e.strong,{children:"Metadata URL"})," from the ",(0,t.jsx)(e.strong,{children:"Metadata Details"})," section on ",(0,t.jsx)(e.strong,{children:"Okta Admin Console."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Copy Metadata URL from Okta Admin Console",src:i(1361).A+"",width:"1198",height:"1332"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Metadata URL from Okta Admin Console"})]}),"\n",(0,t.jsxs)(e.p,{children:["Under ",(0,t.jsx)(e.strong,{children:"Identify Provider Configuration,"})," select ",(0,t.jsx)(e.strong,{children:"Configure using Metadata URL,"})," and paste it under ",(0,t.jsx)(e.strong,{children:"App Federation Metadata URL"})," on the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal."})]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Paste Metadata URL on SSO Configuration Portal",src:i(232).A+"",width:"2180",height:"672"}),"\n",(0,t.jsx)("figcaption",{children:"Paste Metadata URL on SSO Configuration Portal"})]}),"\n",(0,t.jsx)(e.h3,{id:"7-test-connection",children:"7. Test Connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Test Connection."})," If everything is done correctly, you will see a ",(0,t.jsx)(e.strong,{children:"Success"})," response as shown below."]}),"\n",(0,t.jsxs)(e.p,{children:["If the connection fails, you\u2019ll see an error, the reason for the error, and a way to solve that error right on the screen.",(0,t.jsx)(e.br,{}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Test SSO configuration",src:i(5183).A+"",width:"2198",height:"978"}),"\n",(0,t.jsx)("figcaption",{children:"Test SSO configuration"})]})]}),"\n",(0,t.jsx)(e.h3,{id:"8-enable-connection",children:"8. Enable connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Enable Connection."})," This will let all your selected users login to the new application via your Okta SSO.\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.img,{alt:"Enable SSO on Okta Admin Console",src:i(6166).A+"",width:"2194",height:"250"}),"\n",(0,t.jsx)("figcaption",{children:"Enable SSO on Okta Admin Console"})]})]}),"\n",(0,t.jsx)(e.p,{children:"With this, we are done configuring your Okta application for an SSO login setup."})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}},6365:(n,e,i)=>{i.d(e,{A:()=>o,I:()=>s});i(6540);var t=i(4848);function s(n){let{children:e}=n;return(0,t.jsx)("code",{className:"simple_code",children:e})}function o(n){let{children:e}=n;return(0,t.jsx)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:e})}},727:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 1-99c62d8e9b1e624888e659455462a823.png"},9223:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 10-cecbeffc35d18e0aec48c9239554fa52.png"},3646:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 11-fcf9b305ea934b51d0bc0ba8919e9475.png"},4005:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 12-c2a68c21b93a6a3bbb34474f207e552f.png"},1116:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 13-4ef88fdc39b2abbfb9a209da4f6bd39c.png"},5987:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 14-e81a166d9753c13bc3188d8a51662587.png"},7130:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 15-bb4f10c702a4b07491de7bf9e5bc6a74.png"},1361:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 16-21781c4b4947fb5d473eb77ef0522677.png"},232:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 17-02399e0c690e2bbfed79b04163f0341b.png"},5183:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 18-d927059d4de4f9d360023b673934ddf4.png"},6166:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 19-c3ed9eeb03fbebe0f3cb7e367df38f3f.png"},5644:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 2-8ea985fbad29a9527a34531c1edc0172.png"},9509:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 3-4758cee172fdd912d7395b9a5498003a.png"},4842:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 4-f5493400aefef1abc1c07a4b79cf5b5e.png"},5603:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 5-02122f8506a72e67367209dadbdda6e3.png"},1112:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 6-67169890bcaf9f65da524cf006e67da6.png"},3825:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 7-267878e9d39ad18bad7c8f18f2d1d75e.png"},7670:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 8-8162eabfb1574510a2a9415013afa5a2.png"},2767:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled 9-3ce7432f49f9d47abadb109bd21590e5.png"},918:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/Untitled-888641ad5c91bb2695accb96e9f02b25.png"},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);