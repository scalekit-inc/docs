"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[4606],{9479:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"type":"mdx","permalink":"/apis/embeds/tag/Directory/patch/api/v1/organizations/%7Borganization_id%7D/directories/%7Bid%7D%3Adisable","source":"@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:disable.md","description":"<JsonViewer src={{","frontMatter":{},"unlisted":false}');var a=i(4848),l=i(8453);const n={},o=void 0,c={},d=[];function t(s){const e={code:"code",pre:"pre",span:"span",...(0,l.R)(),...s.components},{CodeWithHeader:i,JsonViewer:r,TabItem:n,Tabs:o}=e;return i||k("CodeWithHeader",!0),r||k("JsonViewer",!0),n||k("TabItem",!0),o||k("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{method:"patch",endpoint:"/api/v1/organizations/{organization_id}/directories/{id}:disable",children:(0,a.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,a.jsx)(n,{value:"curl",label:"cURL",children:(0,a.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"curl"}),(0,a.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --location"}),(0,a.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --request"}),(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" PATCH"}),(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'https://$ENV_URL/api/v1/organizations/{organizations_id}/directories/{directory_id}:disable'"}),(0,a.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:"\\"})]}),"\n",(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"--header "}),(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Authorization: Bearer <ACCESS_TOKEN>'"})]}),"\n",(0,a.jsx)(e.span,{className:"line"})]})})}),(0,a.jsx)(n,{value:"nodejs",label:"Node.js",children:(0,a.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"await"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"directory"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"disableDirectory"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  '<organization_id>'"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,a.jsx)(e.span,{className:"line",children:(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  '<directory_id>'"})}),"\n",(0,a.jsx)(e.span,{className:"line",children:(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,a.jsx)(e.span,{className:"line"})]})})}),(0,a.jsx)(n,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,a.jsxs)(e.code,{className:"language-python",children:[(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"directory_response "}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit_client.directory.disable_directory("})]}),"\n",(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#FFAB70"},children:"  directory_id"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'<directory_id>'"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,a.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#FFAB70"},children:"organization_id"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,a.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'<organization_id>'"})]}),"\n",(0,a.jsx)(e.span,{className:"line",children:(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,a.jsx)(e.span,{className:"line"})]})})}),(0,a.jsx)(n,{value:"golang",label:"Go",children:(0,a.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,a.jsxs)(e.code,{className:"language-go",children:[(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"disable"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" sc"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Directory"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"DisableDirectory"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"ctx"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"organizationId"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"directoryId"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,a.jsx)(e.span,{className:"line"})]})})}),(0,a.jsx)(n,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,a.jsxs)(e.code,{className:"language-java",children:[(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"ToggleDirectoryResponse"}),(0,a.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" disableResponse "}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekitClient"})]}),"\n",(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  ."}),(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"directories"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,a.jsxs)(e.span,{className:"line",children:[(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  ."}),(0,a.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"disableDirectory"}),(0,a.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(directoryId, organizationId);"})]}),"\n",(0,a.jsx)(e.span,{className:"line"})]})})})]})}),"\n",(0,a.jsx)(i,{title:"Response",children:(0,a.jsx)(r,{src:{enabled:!1}})})]})}function h(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(t,{...s})}):t(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,e,i)=>{i.d(e,{R:()=>n,x:()=>o});var r=i(6540);const a={},l=r.createContext(a);function n(s){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:n(s.components),r.createElement(l.Provider,{value:e},s.children)}}}]);