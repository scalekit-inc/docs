"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8053],{4139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=r(4848),i=r(8453),a=r(6365),s=r(1470),o=r(9365);const l={},c="Authorization URL",u={id:"best-practices/authorization-url",title:"Authorization URL",description:"As mentionined in the SSO Basics document, the first step of initiating login with SSO via Scalekit is to send the Authorization URL request.",source:"@site/docs/best-practices/authorization-url.md",sourceDirName:"best-practices",slug:"/best-practices/authorization-url",permalink:"/best-practices/authorization-url",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:17147428e5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage Client Secrets",permalink:"/best-practices/manage-client-secrets"},next:{title:"Redirect URI",permalink:"/best-practices/redirect-uri"}},d={},h=[{value:"Authorization URL Endpoint",id:"authorization-url-endpoint",level:3},{value:"Possible Authorization URL Parameters",id:"possible-authorization-url-parameters",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"authorization-url",children:"Authorization URL"}),"\n",(0,n.jsxs)(t.p,{children:["As mentionined in the ",(0,n.jsx)(t.a,{href:"/best-practices/single-sign-on",children:"SSO Basics"})," document, the first step of initiating login with SSO via Scalekit is to send the ",(0,n.jsx)(t.strong,{children:"Authorization URL"})," request."]}),"\n",(0,n.jsx)(t.p,{children:"In this document, we will detail all the parameters accepted by us and the corresponding behaviour of these request parameters."}),"\n",(0,n.jsx)(t.h3,{id:"authorization-url-endpoint",children:"Authorization URL Endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Before we talk about all the possible request parameters accepted, let's see an example of how the authorization URL endpoint."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"https://<environment_domain>/oauth/authorize?\n    response_type=code&\n    client_id=skc_1234&\n    scope=openid%20profile&\n    redirect_uri=https%3A%2F%2Fyoursaas.com%2Fcallback&\n    organization_id=org_1243412&\n    state=aHR0cHM6Ly95b3Vyc2Fhcy5jb20vZGVlcGxpbms%3D\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can use our SDK to generate this authorization URL."}),"\n",(0,n.jsx)(s.A,{groupId:"tech-stack",children:(0,n.jsx)(o.A,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:'// init client\nconst scalekit = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nconst authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n        loginHint: "user@example.com",\n        //connectionId: "conn_1223231234124",\n        //domain: "example.com",\n        organizationId: "org_123235245"\n      })\n\n// next step is to redirect the user to this authorizationURL\n'})})})}),"\n",(0,n.jsx)(t.h3,{id:"possible-authorization-url-parameters",children:"Possible Authorization URL Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"client_id"})}),(0,n.jsx)(t.td,{children:"REQUIRED"}),(0,n.jsx)(t.td,{children:"The client ID string that you obtain from the API Credentials page"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"nonce"})}),(0,n.jsx)(t.td,{children:"OPTIONAL"}),(0,n.jsx)(t.td,{children:"A random value generated by your app that enables replay protection."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"organization_id"})}),(0,n.jsx)(t.td,{children:"REQUIRED *"}),(0,n.jsx)(t.td,{children:"Organization ID for which the SSO flow must be initiated for. Based on the organization ID supplied, the user will be redirected to the SSO connection's identity provider configured for that organization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"connection_id"})}),(0,n.jsx)(t.td,{children:"REQUIRED *"}),(0,n.jsxs)(t.td,{children:["Connection ID for which the SSO flow must be initiated for. If the Connection's status is ",(0,n.jsx)(t.code,{children:"active"}),", the user will be redirected to the SSO Connection's identity provider configured."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"domain"})}),(0,n.jsx)(t.td,{children:"REQUIRED *"}),(0,n.jsx)(t.td,{children:"domain part of the email address that is configured for an organization. Example: yourcustomer.com"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"* one of organization_id, connection_id or domain must be sent as a request parameter to determine which SSO connection needs to be used to initiate the SSO flow."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"response_type"})}),(0,n.jsx)(t.td,{children:"REQUIRED"}),(0,n.jsxs)(t.td,{children:["value must be ",(0,n.jsx)(t.code,{children:"code"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"redirect_uri"})}),(0,n.jsx)(t.td,{children:"REQUIRED"}),(0,n.jsxs)(t.td,{children:["Determines where the response is sent. The value of this parameter must exactly match one of the authorized redirect values that you set in the API Credentials page (including the HTTP or HTTPS scheme, case, and trailing '/', if any). ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," Click ",(0,n.jsx)("a",{href:"/best-practices/redirect-uri",target:"_blank",children:"here to read more"})," about redirect_uri"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"scope"})}),(0,n.jsx)(t.td,{children:"REQUIRED"}),(0,n.jsxs)(t.td,{children:["value must be ",(0,n.jsx)(t.code,{children:"openid profile"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"state"})}),(0,n.jsx)(t.td,{children:"OPTIONAL, but strongly recommended"}),(0,n.jsxs)(t.td,{children:["An opaque string that is round-tripped in the protocol; that is to say, it is returned back as-is as a URI parameter in the Basic flow. The state can be useful for correlating requests and responses. Because your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request initiated by your app. ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),"State will be useful if you would like to retain some information about the user that you would like to use at the end of the login flow - for example: deep link URL in your product to redirect the user to after a successful login. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If you generate a random string or encode the hash of some client state (e.g., a cookie) in this state variable, you can validate the response to additionally ensure that the request and response originated in the same browser. This additional validation offers protection against attacks such as cross-site request forgery."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(a.Iu,{children:"login_hint"})}),(0,n.jsx)(t.td,{children:"OPTIONAL"}),(0,n.jsx)(t.td,{children:"When your app knows the email address of the user it is trying to authenticate, it can provide this parameter as a hint to the authentication server and Scalekit will pass this information to your customer's identity provider. Some identity providers prefill the login box with this value to make the login experience easier for the end user."})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const i={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(6540),i=r(4164),a=r(3104),s=r(6347),o=r(205),l=r(7485),c=r(1682),u=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,a=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:r,groupId:i}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),i=o[r].value;i!==n&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function I(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},6365:(e,t,r)=>{r.d(t,{Ay:()=>s,Iu:()=>i,Wu:()=>a});r(6540);var n=r(4848);function i(e){let{children:t}=e;return(0,n.jsx)("code",{className:"simple_code",children:t})}function a(e){let{url:t,imageSrc:r,title:i,description:a}=e;return(0,n.jsx)("article",{className:"col col--4 margin-bottom--lg",children:(0,n.jsxs)("a",{className:"card padding--lg cardContainer",href:t,children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("img",{alt:i,src:r}),(0,n.jsx)("p",{children:i})]}),(0,n.jsx)("p",{children:a})]})})}function s(e){let{children:t}=e;return(0,n.jsxs)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:[" ",t," "]})}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(6540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);