import{a as N,t as L,k as g,l as R,j as e,_ as n,w as _,p as j,aU as u,aq as w,ab as P}from"./main-677.js";import{S,T as D,f as k,h as I}from"./bf-485-83.js";import{s as y}from"./bf-542-156.js";import{F as l}from"./bf-336-157.js";import{S as K}from"./bf-493-110.js";import{a as m}from"./bf-526-189.js";import{F as H,b as U}from"./bf-290-93.js";import"./bf-8-69.js";import"./bf-610-73.js";import"./bf-489-107.js";import"./bf-417-108.js";import"./bf-769-109.js";import"./bf-99-111.js";import"./bf-149-112.js";import"./bf-311-113.js";import"./bf-108-114.js";import"./bf-937-115.js";import"./bf-713-125.js";import"./bf-134-124.js";import"./bf-419-81.js";import"./bf-873-116.js";import"./bf-372-117.js";import"./bf-367-71.js";import"./bf-352-145.js";/* empty css          */function he(){var x;const{css:i}=N(),{fieldKey:s}=L(),[c,b]=g(w),[h,v]=g(P),a=R(h[s]),{theme:C,size:F}=a.config,z=(x=c==null?void 0:c.fields)==null?void 0:x[s],{fieldType:q,classes:T}=z,p=`.${s}-fld-wrp`,{"justify-content":$}=T[p]||"";function f(t,r){a.config[t]=r;const o=j(h,d=>{d[s]=a});v(o),u({event:`${t[0].toUpperCase()+t.slice(1)} changed to ${r} : ${a.adminLbl||s}`,type:`${t}_change`,state:{fields:o,fldKey:s}})}const A=(t,r)=>{const o=j(c,d=>{d.fields[s].classes[p].display="flex",d.fields[s].classes[p][r]=t});b(o),u({event:`Position alignment to "${t}" : ${a.adminLbl||s}`,type:"position_alignment_change",state:{styles:o,fldKey:s}})};return e.jsxs(e.Fragment,{children:[e.jsx(H,{title:"Field Settings",subtitle:a.typ,fieldKey:s}),e.jsx(U,{}),e.jsx(m,{}),e.jsx(S,{id:"thm-stng",title:n("Theme"),className:i(l.fieldSection),open:!0,children:e.jsx("div",{className:i(l.placeholder),children:e.jsxs("select",{"data-testid":"thm-slct",className:i(l.input),"aria-label":"Theme for ReCaptcha Field",placeholder:"Select Theme here...",value:C,onChange:t=>f("theme",t.target.value),children:[e.jsx("option",{value:"dark",children:n("Dark")}),e.jsx("option",{value:"light",children:n("Light")})]})})}),e.jsx(m,{}),e.jsx(S,{id:"siz-stng",title:n("Size"),className:i(l.fieldSection),open:!0,children:e.jsx("div",{className:i(l.placeholder),children:e.jsxs("select",{"data-testid":"siz-slct",className:i(l.input),"aria-label":"Size for ReCaptcha Field",placeholder:"Select Size here...",value:F,onChange:t=>f("size",t.target.value),children:[e.jsx("option",{value:"normal",children:n("Normal")}),e.jsx("option",{value:"compact",children:n("Compact")})]})})}),e.jsx(m,{}),e.jsx("div",{className:i(l.fieldSection),children:e.jsxs("div",{className:i(_.flxcb),children:[e.jsx("span",{className:i(y.label),children:"Position Alignment"}),e.jsx(K,{show:["icn"],tipPlace:"bottom",className:i(y.segment),options:[{icn:e.jsx(D,{size:"17"}),label:"left",tip:"Left"},{icn:e.jsx(k,{size:"17"}),label:"center",tip:"Center"},{icn:e.jsx(I,{size:"17"}),label:"right",tip:"Right"}],onChange:t=>A(t,"justify-content"),defaultActive:$})]})}),e.jsx(m,{})]})}export{he as default};