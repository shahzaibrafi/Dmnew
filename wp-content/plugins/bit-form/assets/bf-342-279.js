import{v as j,t as S,r as o,j as t,S as v}from"./main-677.js";/* empty css          */import{S as M}from"./bf-63-135.js";import{a as I,b}from"./bf-67-72.js";import{I as w}from"./bf-888-333.js";import{N as Z}from"./bf-526-402.js";import y from"./bf-412-258.js";import{Z as N}from"./bf-398-348.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-610-73.js";import"./bf-8-69.js";import"./bf-320-401.js";import"./bf-390-347.js";import"./bf-743-127.js";import"./bf-647-118.js";import"./bf-648-122.js";function K({formFields:n,setIntegration:m,integrations:c,allIntegURL:p}){const l=j(),{formID:f}=S(),[h,x]=o.useState(!1),[s,a]=o.useState(1),[d,i]=o.useState({show:!1}),[e,r]=o.useState({name:"Zoho Mail API",type:"Zoho Mail",clientId:"",clientSecret:"",actions:{},to:"",cc:"",bcc:"",subject:"",body:""});o.useEffect(()=>{window.opener&&I("zohoMail")},[]);const u=g=>{a(g)};return t.jsxs("div",{children:[t.jsx(v,{snack:d,setSnackbar:i}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(M,{step:3,active:s})}),t.jsx(y,{formID:f,mailConf:e,setMailConf:r,step:s,setstep:a,isLoading:h,setisLoading:x,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(N,{formFields:n,mailConf:e,setMailConf:r}),t.jsx(Z,{nextPageHandler:()=>u(3)})]}),t.jsx(w,{step:s,saveConfig:()=>b(c,m,p,e,l)})]})}export{K as default};
