var I=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var l=(a,s,e)=>s in a?I(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,p=(a,s)=>{for(var e in s||(s={}))v.call(s,e)&&l(a,e,s[e]);if(d)for(var e of d(s))S.call(s,e)&&l(a,e,s[e]);return a};import{v as N,t as C,r as n,j as t,S as T,_ as c}from"./main-677.js";import{b as w}from"./bf-67-72.js";import{I as y}from"./bf-888-333.js";import{h as _}from"./bf-270-382.js";import{T as k}from"./bf-140-383.js";import"./bf-743-127.js";import"./bf-102-76.js";import"./bf-647-118.js";import"./bf-648-122.js";function F({formFields:a,setIntegration:s,integrations:e,allIntegURL:x}){const f=N(),{id:o,formID:g}=C(),[r,i]=n.useState(p({},e[o])),[u,h]=n.useState(!1),[j,m]=n.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(T,{snack:j,setSnackbar:m}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:")}),t.jsx("input",{className:"btcd-paper-inp w-7",onChange:b=>_(b,r,i),name:"name",value:r.name,type:"text",placeholder:c("Integration Name...")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(k,{formID:g,formFields:a,telegramConf:r,setTelegramConf:i,isLoading:u,setisLoading:h,setSnackbar:m}),t.jsx(y,{edit:!0,saveConfig:()=>w(e,s,x,r,f,o,1),disabled:r.chat_id===""}),t.jsx("br",{})]})}export{F as default};