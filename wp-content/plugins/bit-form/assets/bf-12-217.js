var S=Object.defineProperty;var l=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(e,s,a)=>s in e?S(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,f=(e,s)=>{for(var a in s||(s={}))N.call(s,a)&&c(e,a,s[a]);if(l)for(var a of l(s))w.call(s,a)&&c(e,a,s[a]);return e};import{v as y,t as C,r as m,j as t,S as R,_ as d}from"./main-677.js";import{b as k}from"./bf-67-72.js";import{I as _}from"./bf-888-333.js";import{h as u,c as E}from"./bf-882-366.js";import{R as L}from"./bf-861-367.js";import"./bf-648-122.js";import"./bf-878-130.js";function B({formFields:e,setIntegration:s,integrations:a,allIntegURL:h}){const x=y(),{id:p,formID:g}=C(),[n,i]=m.useState(f({},a[p])),[j,I]=m.useState(!1),[b,r]=m.useState({show:!1}),v=()=>{if(!E(n)){r({show:!0,msg:d("Please map mandatory fields")});return}k(a,s,h,n,x,p,1)};return t.jsxs("div",{style:{width:900},children:[t.jsx(R,{snack:b,setSnackbar:r}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>u(o,n,i),name:"name",value:n.name,type:"text",placeholder:d("Integration Name...")})]}),t.jsx("br",{}),t.jsx(L,{formID:g,formFields:e,handleInput:o=>u(o,n,i),rapidmailConf:n,setRapidmailConf:i,isLoading:j,setIsLoading:I,setSnackbar:r}),t.jsx(_,{edit:!0,saveConfig:v,disabled:n.field_map.length<1}),t.jsx("br",{})]})}export{B as default};
