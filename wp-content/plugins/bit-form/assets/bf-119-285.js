import{v as g,t as u,r as s,j as t,S as k}from"./main-677.js";/* empty css          */import{S as j}from"./bf-63-135.js";import{a as S,b as D}from"./bf-67-72.js";import{I as w}from"./bf-888-333.js";import{N as I}from"./bf-526-402.js";import W from"./bf-252-264.js";import{Z}from"./bf-810-360.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-610-73.js";import"./bf-8-69.js";import"./bf-320-401.js";import"./bf-359-359.js";import"./bf-743-127.js";import"./bf-680-336.js";function q({formFields:c,setIntegration:d,integrations:f,allIntegURL:l}){const h=g(),{formID:i}=u(),[a,n]=s.useState(!1),[o,m]=s.useState(1),[x,r]=s.useState({show:!1}),[e,p]=s.useState({name:"Zoho WorkDrive API",type:"Zoho WorkDrive",clientId:"",clientSecret:"",team:"",folder:"",folderMap:[],actions:{}});s.useEffect(()=>{window.opener&&S("zohoWorkDrive")},[]);const v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.team!==""&&e.folder!==""&&m(3)};return t.jsxs("div",{children:[t.jsx(k,{snack:x,setSnackbar:r}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(j,{step:3,active:o})}),t.jsx(W,{formID:i,workDriveConf:e,setWorkDriveConf:p,step:o,setstep:m,isLoading:a,setisLoading:n,setSnackbar:r}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[t.jsx(Z,{formID:i,formFields:c,workDriveConf:e,setWorkDriveConf:p,isLoading:a,setisLoading:n,setSnackbar:r}),t.jsx(I,{nextPageHandler:()=>v(),disabled:e.team===""||e.folder===""})]}),t.jsx(w,{step:o,saveConfig:()=>D(f,d,l,e,h)})]})}export{q as default};