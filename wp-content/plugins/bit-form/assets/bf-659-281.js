import{v as g,t as P,r,j as t,S as I,_ as S}from"./main-677.js";/* empty css          */import{S as v}from"./bf-63-135.js";import{a as w,b as Z}from"./bf-67-72.js";import{I as k}from"./bf-888-333.js";import{N as y}from"./bf-526-402.js";import N from"./bf-715-260.js";import{h as b,c as C}from"./bf-718-351.js";import{Z as _}from"./bf-721-352.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-610-73.js";import"./bf-8-69.js";import"./bf-320-401.js";import"./bf-743-127.js";import"./bf-102-76.js";import"./bf-648-122.js";import"./bf-878-130.js";function U({formFields:d,setIntegration:f,integrations:l,allIntegURL:h}){const j=g(),{formID:a}=P(),[c,i]=r.useState(!1),[o,m]=r.useState(1),[u,s]=r.useState({show:!1}),[e,n]=r.useState({name:"Zoho Projects API",type:"Zoho Projects",clientId:"",clientSecret:"",portalId:"",event:"",field_map:{},actions:{}});r.useEffect(()=>{window.opener&&w("zohoProjects")},[]);const x=p=>{if(p===3){if(!C(e,s)){s({show:!0,msg:S("Please map mandatory fields")});return}m(3)}};return t.jsxs("div",{children:[t.jsx(I,{snack:u,setSnackbar:s}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(v,{step:3,active:o})}),t.jsx(N,{formID:a,projectsConf:e,setProjectsConf:n,step:o,setstep:m,isLoading:c,setisLoading:i,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[t.jsx(_,{formID:a,formFields:d,handleInput:p=>b(p,e,n,a,i,s),projectsConf:e,setProjectsConf:n,isLoading:c,setisLoading:i,setSnackbar:s}),t.jsx(y,{nextPageHandler:()=>x(3),disabled:e.portalId===""||e.event===""})]}),t.jsx(k,{step:o,saveConfig:()=>Z(l,f,h,e,j)})]})}export{U as default};
