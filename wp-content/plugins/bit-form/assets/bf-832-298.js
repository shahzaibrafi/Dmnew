import{r as e,aH as h,v as u,t as b,j as t,S as v}from"./main-677.js";/* empty css          */import{S as g,W as j}from"./bf-63-135.js";import{b as k}from"./bf-67-72.js";import"./bf-288-77.js";import"./bf-44-197.js";import"./bf-610-73.js";const S=e.lazy(()=>h(()=>import("./bf-901-201.js"),["./bf-901-201.js","./main-677.js","./main-677.css","./bf-743-127.js","./bf-8-69.js","./bf-610-73.js","./bf-496-416.css","./bf-924-415.css","./bf-183-126.js","./bf-720-421.css"],import.meta.url));function I({formFields:r,setIntegration:i,integrations:n,allIntegURL:c}){const m=u(),{formID:p}=b(),[s,d]=e.useState(1),[l,o]=e.useState({show:!1}),[a,x]=e.useState({name:"Web Hooks",type:"Web Hooks",method:"POST",url:""});return t.jsxs("div",{children:[t.jsx(v,{snack:l,setSnackbar:o}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(g,{step:2,active:s})}),t.jsx("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"100%"},children:t.jsx(S,{formID:p,formFields:r,webHooks:a,setWebHooks:x,step:s,setstep:d,setSnackbar:o,create:!0})}),t.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,minHeight:s===2&&"900px"},children:t.jsx(j,{step:s,saveConfig:()=>k(n,i,c,a,m)})})]})}export{I as default};
