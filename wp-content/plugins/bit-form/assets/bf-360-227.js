var b=Object.defineProperty;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&c(e,a,t[a]);if(p)for(var a of p(t))I.call(t,a)&&c(e,a,t[a]);return e};import{v as S,t as N,r as i,j as s,S as w,ds as l}from"./main-677.js";import{b as y}from"./bf-67-72.js";import{I as A}from"./bf-888-333.js";import{h as k}from"./bf-884-380.js";import{A as E}from"./bf-126-381.js";import"./bf-743-127.js";import"./bf-648-122.js";import"./bf-878-130.js";function B({formFields:e,setIntegration:t,integrations:a,allIntegURL:f}){const g=S(),{id:o,formID:x}=N(),[n,r]=i.useState(d({},a[o])),[u,h]=i.useState(!1),[j,m]=i.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(w,{snack:j,setSnackbar:m}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:v=>k(v,n,r),name:"name",value:n.name,type:"text",placeholder:l("Integration Name...")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(E,{formID:x,formFields:e,activeCampaingConf:n,setActiveCampaingConf:r,isLoading:u,setisLoading:h,setSnackbar:m}),s.jsx(A,{edit:!0,saveConfig:()=>y(a,t,f,n,g,o,1),disabled:n.field_map.length<1}),s.jsx("br",{})]})}export{B as default};
