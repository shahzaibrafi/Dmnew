var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,f=(s,e)=>{for(var t in e||(e={}))C.call(e,t)&&u(s,t,e[t]);if(p)for(var t of p(e))S.call(e,t)&&u(s,t,e[t]);return s};import{v as _,r as l,a as I,j as a,S as N,B as G,w,_ as F,d as B}from"./main-677.js";/* empty css          */import{B as L}from"./bf-8-69.js";import{S as P}from"./bf-63-135.js";import{b as E}from"./bf-67-72.js";import{I as T}from"./bf-888-333.js";import M from"./bf-265-272.js";import{G as R,h as z,c as A}from"./bf-38-369.js";import"./bf-610-73.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-320-401.js";import"./bf-526-402.js";import"./bf-743-127.js";import"./bf-648-122.js";import"./bf-878-130.js";function re({formFields:s,setIntegration:e,integrations:t,allIntegURL:y}){const g=_(),[n,d]=l.useState(!1),[i,c]=l.useState(1),[b,h]=l.useState({show:!1}),{css:k}=I(),x=[{key:"name",label:"Name",required:!1},{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone",required:!1},{key:"gender",label:"Gender",required:!1},{key:"country",label:"Country",required:!1},{key:"city",label:"City",required:!1},{key:"company_name",label:"Company Name",required:!1},{key:"industry",label:"Industry",required:!1},{key:"job_title",label:"Job Title",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"postal_code",label:"Postal Code",required:!1},{key:"state",label:"State",required:!1}],[r,o]=l.useState({name:"Getgist",type:"Getgist",api_key:"",field_map:[{formField:"",getgistFormField:""}],actions:{},gistFields:x}),j=()=>{E(t,e,y,r,g)},q=m=>{if(!A(r)){B.error("Please map mandatory fields");return}r.field_map.length>0&&c(m)};return document.querySelector(".btcd-s-wrp").scrollTop=0,a.jsxs("div",{children:[a.jsx(N,{snack:b,setSnackbar:h}),a.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:a.jsx(P,{step:3,active:i})}),a.jsx(M,{getgistConf:r,setGetgistConf:o,step:i,setstep:c,isLoading:n,setIsLoading:d}),a.jsxs("div",{className:"btcd-stp-page",style:f({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(R,{formFields:s,handleInput:m=>z(m,r,o),getgistConf:r,setGetgistConf:o,isLoading:n,setIsLoading:d}),a.jsxs(G,{onClick:()=>q(3),className:k(w.ftRight),type:"button",children:[F("Next")," ",a.jsx(L,{className:"ml-1 rev-icn"})]})]}),a.jsx(T,{step:i,saveConfig:()=>j(),isLoading:n,dataConf:r,setDataConf:o,formFields:s})]})}export{re as default};
