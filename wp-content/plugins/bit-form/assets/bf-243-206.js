var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,x=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&h(s,t,e[t]);if(f)for(var t of f(e))w.call(e,t)&&h(s,t,e[t]);return s};import{v as k,t as M,r,j as o,S as _,_ as d}from"./main-677.js";import{b as E}from"./bf-67-72.js";import{I as L}from"./bf-888-333.js";import{h as g,c as R}from"./bf-848-343.js";import{Z}from"./bf-986-344.js";import"./bf-41-74.js";import"./bf-743-127.js";import"./bf-102-76.js";import"./bf-680-336.js";import"./bf-648-122.js";import"./bf-878-130.js";function O({formFields:s,setIntegration:e,integrations:t,allIntegURL:j}){const b=k(),{id:c,formID:l}=M(),[a,i]=r.useState(x({},t[c])),[I,u]=r.useState(!1),[C,n]=r.useState({show:!1}),[m,S]=r.useState(0),v=()=>{if(!R(a)){n({show:!0,msg:d("Please map mandatory fields")});return}E(t,e,j,a,b,c,1)};return o.jsxs("div",{style:{width:900},children:[o.jsx(_,{snack:C,setSnackbar:n}),o.jsxs("div",{className:"flx mt-3",children:[o.jsx("b",{className:"wdt-100 d-in-b",children:d("Integration Name:")}),o.jsx("input",{className:"btcd-paper-inp w-7",onChange:p=>g(p,m,a,i),name:"name",value:a.name,type:"text",placeholder:d("Integration Name...")})]}),o.jsx(Z,{tab:m,settab:S,formID:l,formFields:s,handleInput:p=>g(p,m,a,i,l,u,n),crmConf:a,setCrmConf:i,isLoading:I,setisLoading:u,setSnackbar:n}),o.jsx(L,{edit:!0,saveConfig:v,disabled:a.module===""||a.layout===""||a.field_map.length<1}),o.jsx("br",{})]})}export{O as default};