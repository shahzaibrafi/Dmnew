import{v as d,t as x,r as s,j as t,S as f}from"./main-677.js";/* empty css          */import{t as i}from"./bf-44-197.js";import{S as k,T as j,W as b}from"./bf-63-135.js";import{b as S}from"./bf-67-72.js";import g from"./bf-901-201.js";import"./bf-288-77.js";import"./bf-610-73.js";import"./bf-743-127.js";import"./bf-8-69.js";import"./bf-183-126.js";function E({formFields:r,setIntegration:l,integrations:p,allIntegURL:m}){const n=d(),{formID:c}=x(),[o,h]=s.useState(1),[u,e]=s.useState({show:!1}),[a,w]=s.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return t.jsxs("div",{children:[t.jsx(f,{snack:u,setSnackbar:e}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(k,{step:2,active:o})}),t.jsx(j,{title:i.zohoFlow.title,youTubeLink:i.zohoFlow.link}),t.jsx("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"100%"},children:t.jsx(g,{formID:c,formFields:r,webHooks:a,setWebHooks:w,step:o,setstep:h,setSnackbar:e,create:!0})}),t.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&900,minHeight:o===2&&"900px"},children:t.jsx(b,{step:o,saveConfig:()=>S(p,l,m,a,n)})})]})}export{E as default};
