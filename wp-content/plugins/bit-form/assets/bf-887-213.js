var N=Object.defineProperty;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(a,s,t)=>s in a?N(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,u=(a,s)=>{for(var t in s||(s={}))C.call(s,t)&&l(a,t,s[t]);if(d)for(var t of d(s))y.call(s,t)&&l(a,t,s[t]);return a};import{v as k,t as E,r as n,j as e,S as L,_ as f}from"./main-677.js";import{b as M}from"./bf-67-72.js";import{I as Z}from"./bf-888-333.js";import{h as _}from"./bf-89-357.js";import{Z as R}from"./bf-67-358.js";import"./bf-743-127.js";/* empty css          */import"./bf-501-79.js";import"./bf-647-118.js";import"./bf-648-122.js";function K({formFields:a,setIntegration:s,integrations:t,allIntegURL:h}){const x=k(),{id:r,formID:g}=E(),[j,S]=n.useState(!1),[o,c]=n.useState(u({},t[r])),[b,m]=n.useState({show:!1}),[I,v]=n.useState({show:!1}),w=()=>{var i,p;if((i=o.actions)!=null&&i.update&&((p=o.actions)==null?void 0:p.update.criteria)===""&&I.show!=="criteria"){v({show:"criteria"});return}M(t,s,h,o,x,r,1)};return e.jsxs("div",{style:{width:900},children:[e.jsx(L,{snack:b,setSnackbar:m}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-100 d-in-b",children:f("Integration Name:")}),e.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>_(i,o,c),name:"name",value:o.name,type:"text",placeholder:f("Integration Name...")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(R,{formID:g,formFields:a,signConf:o,setSignConf:c,isLoading:j,setisLoading:S,setSnackbar:m}),e.jsx(Z,{edit:!0,saveConfig:w,disabled:o.template===""}),e.jsx("br",{})]})}export{K as default};
