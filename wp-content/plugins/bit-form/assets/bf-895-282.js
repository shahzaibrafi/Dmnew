import{v as I,t as R,r as s,j as e,S as v,_ as w}from"./main-677.js";/* empty css          */import{S as b}from"./bf-63-135.js";import{a as y,b as Z}from"./bf-67-72.js";import{I as _}from"./bf-888-333.js";import{N as k}from"./bf-526-402.js";import N from"./bf-72-261.js";import{h as P,c as C}from"./bf-751-353.js";import{Z as E}from"./bf-492-354.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-610-73.js";import"./bf-8-69.js";import"./bf-320-401.js";import"./bf-41-74.js";import"./bf-648-122.js";import"./bf-878-130.js";function V({formFields:d,setIntegration:l,integrations:u,allIntegURL:f}){const h=I(),{formID:i}=R(),[m,r]=s.useState(!1),[o,c]=s.useState(1),[g,a]=s.useState({show:!1}),[p,x]=s.useState(0),[t,n]=s.useState({name:"Zoho Recruit API",type:"Zoho Recruit",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});s.useEffect(()=>{window.opener&&y("zohoRecruit")},[]);const S=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!C(t)){a({show:!0,msg:w("Please map mandatory fields")});return}t.module!==""&&t.field_map.length>0&&c(3)};return e.jsxs("div",{children:[e.jsx(v,{snack:g,setSnackbar:a}),e.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:e.jsx(b,{step:3,active:o})}),e.jsx(N,{formID:i,recruitConf:t,setRecruitConf:n,step:o,setstep:c,isLoading:m,setisLoading:r,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[e.jsx(E,{tab:p,settab:x,formID:i,formFields:d,handleInput:j=>P(j,p,t,n,i,r,a),recruitConf:t,setRecruitConf:n,isLoading:m,setisLoading:r,setSnackbar:a}),e.jsx(k,{nextPageHandler:()=>S(),disabled:t.module===""||t.field_map.length<1})]}),e.jsx(_,{step:o,saveConfig:()=>Z(u,l,f,t,h)})]})}export{V as default};