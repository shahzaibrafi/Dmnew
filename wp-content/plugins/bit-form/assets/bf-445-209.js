var v=Object.defineProperty;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(s,t,e)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,g=(s,t)=>{for(var e in t||(t={}))S.call(t,e)&&f(s,e,t[e]);if(u)for(var e of u(t))N.call(t,e)&&f(s,e,t[e]);return s};import{v as w,t as y,r as d,j as n,S as C,_ as l}from"./main-677.js";import{b as M}from"./bf-67-72.js";import{I as H}from"./bf-888-333.js";import{h,c as _}from"./bf-649-349.js";import{Z as E}from"./bf-796-350.js";import"./bf-648-122.js";import"./bf-878-130.js";function z({formFields:s,setIntegration:t,integrations:e,allIntegURL:x}){const b=w(),{id:p,formID:r}=y(),[a,i]=d.useState(g({},e[p])),[j,c]=d.useState(!1),[I,o]=d.useState({show:!1}),k=()=>{if(!_(a)){o({show:!0,msg:l("Please map mandatory fields")});return}M(e,t,x,a,b,p,1)};return n.jsxs("div",{style:{width:900},children:[n.jsx(C,{snack:I,setSnackbar:o}),n.jsxs("div",{className:"flx mt-3",children:[n.jsx("b",{className:"wdt-100 d-in-b",children:l("Integration Name:")}),n.jsx("input",{className:"btcd-paper-inp w-7",onChange:m=>h(m,r,a,i),name:"name",value:a.name,type:"text",placeholder:l("Integration Name...")})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(E,{formID:r,formFields:s,handleInput:m=>h(m,r,a,i,c,o),marketingHubConf:a,setMarketingHubConf:i,isLoading:j,setisLoading:c,setSnackbar:o}),n.jsx(H,{edit:!0,saveConfig:k,disabled:a.list===""||a.table===""||a.field_map.length<1})]})}export{z as default};