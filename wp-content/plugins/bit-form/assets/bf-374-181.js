import{a as w,t as L,k as x,l as P,j as e,_ as n,w as D,p as j,aU as S,aq as I,ab as R}from"./main-677.js";import{S as h,T as _,f as K,h as U}from"./bf-485-83.js";import{s as v}from"./bf-542-156.js";import{F as i}from"./bf-336-157.js";import{S as E}from"./bf-493-110.js";import{a as o}from"./bf-526-189.js";import{F as B,b as H}from"./bf-290-93.js";import"./bf-8-69.js";import"./bf-610-73.js";import"./bf-489-107.js";import"./bf-417-108.js";import"./bf-769-109.js";import"./bf-99-111.js";import"./bf-149-112.js";import"./bf-311-113.js";import"./bf-108-114.js";import"./bf-937-115.js";import"./bf-713-125.js";import"./bf-134-124.js";import"./bf-419-81.js";import"./bf-873-116.js";import"./bf-372-117.js";import"./bf-367-71.js";import"./bf-352-145.js";/* empty css          */var O=[{code:"auto",name:"Default"},{code:"ar-eg",name:"Arabic (Egypt)"},{code:"ar",name:"Arabic"},{code:"de",name:"German"},{code:"en",name:"English"},{code:"es",name:"Spanish"},{code:"fa",name:"Farsi"},{code:"fr",name:"French"},{code:"id",name:"Indonesian"},{code:"it",name:"Italian"},{code:"ja",name:"Japanese"},{code:"ko",name:"Korean"},{code:"nl",name:"Dutch"},{code:"pl",name:"Polish"},{code:"pt",name:"Portuguese"},{code:"pt-br",name:"Portuguese (Brazil)"},{code:"ru",name:"Russian"},{code:"tlh",name:"Klingon"},{code:"tr",name:"Turkish"},{code:"uk",name:"Ukrainian"},{code:"uk-ua",name:"Ukrainian (Ukraine)"},{code:"zh",name:"Chinese"},{code:"zh-cn",name:"Chinese (Simplified)"},{code:"zh-tw",name:"Chinese (Traditional)"}];function fe(){var f;const{css:t}=w(),{fieldKey:s}=L(),[r,y]=x(I),[g,b]=x(R),l=P(g[s]),{theme:C,size:z,language:F,appearance:T}=l.config,N=(f=r==null?void 0:r.fields)==null?void 0:f[s],{fieldType:q,classes:A}=N,u=`.${s}-fld-wrp`,{"justify-content":k}=A[u]||"",d=(a,m)=>{l.config[a]=m;const c=j(g,p=>{p[s]=l});b(c),S({event:`${a[0].toUpperCase()+a.slice(1)} changed to ${m} : ${l.adminLbl||s}`,type:`${a}_change`,state:{fields:c,fldKey:s}})},$=(a,m)=>{const c=j(r,p=>{p.fields[s].classes[u].display="flex",p.fields[s].classes[u][m]=a});y(c),S({event:`Position alignment to "${a}" : ${l.adminLbl||s}`,type:"position_alignment_change",state:{styles:c,fldKey:s}})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Field Settings",subtitle:l.typ,fieldKey:s}),e.jsx(H,{}),e.jsx(o,{}),e.jsx(h,{id:"thm-stng",title:n("Theme"),className:t(i.fieldSection),open:!0,children:e.jsx("div",{className:t(i.placeholder),children:e.jsxs("select",{"data-testid":"thm-slct",className:t(i.input),"aria-label":"Theme for ReCaptcha Field",placeholder:"Select Theme here...",value:C,onChange:a=>d("theme",a.target.value),children:[e.jsx("option",{value:"auto",children:n("Auto")}),e.jsx("option",{value:"dark",children:n("Dark")}),e.jsx("option",{value:"light",children:n("Light")})]})})}),e.jsx(o,{}),e.jsx(h,{id:"siz-stng",title:n("Size"),className:t(i.fieldSection),open:!0,children:e.jsx("div",{className:t(i.placeholder),children:e.jsxs("select",{"data-testid":"siz-slct",className:t(i.input),"aria-label":"Size for ReCaptcha Field",placeholder:"Select Size here...",value:z,onChange:a=>d("size",a.target.value),children:[e.jsx("option",{value:"normal",children:n("Normal")}),e.jsx("option",{value:"compact",children:n("Compact")})]})})}),e.jsx(o,{}),e.jsx(h,{id:"language-stng",title:n("Language"),className:t(i.fieldSection),open:!0,children:e.jsx("div",{className:t(i.placeholder),children:e.jsx("select",{"data-testid":"turnstile-language",className:t(i.input),"aria-label":"Size for Turnstile Field",placeholder:"Select Size here...",value:F,onChange:a=>d("language",a.target.value),children:O.map(a=>e.jsx("option",{value:a.code,children:a.name},a.code))})})}),e.jsx(o,{}),e.jsx(h,{id:"language-stng",title:n("Appearance"),className:t(i.fieldSection),open:!0,children:e.jsx("div",{className:t(i.placeholder),children:e.jsxs("select",{"data-testid":"turnstile-appearance",className:t(i.input),"aria-label":"appearance for Turnstile Field",placeholder:"Select appearance here...",value:T,onChange:a=>d("appearance",a.target.value),children:[e.jsx("option",{value:"always",children:"Always (default)"}),e.jsx("option",{value:"interaction-only",children:"Interaction Only"})]})})}),e.jsx(o,{}),e.jsx("div",{className:t(i.fieldSection),children:e.jsxs("div",{className:t(D.flxcb),children:[e.jsx("span",{className:t(v.label),children:"Position Alignment"}),e.jsx(E,{show:["icn"],tipPlace:"bottom",className:t(v.segment),options:[{icn:e.jsx(_,{size:"17"}),label:"left",tip:"Left"},{icn:e.jsx(K,{size:"17"}),label:"center",tip:"Center"},{icn:e.jsx(U,{size:"17"}),label:"right",tip:"Right"}],onChange:a=>$(a,"justify-content"),defaultActive:k})]})}),e.jsx(o,{})]})}export{fe as default};