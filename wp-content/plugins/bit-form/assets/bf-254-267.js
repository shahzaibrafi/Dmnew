var f=Object.defineProperty;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(a,e,r)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))v.call(e,r)&&j(a,r,e[r]);if(x)for(var r of x(e))z.call(e,r)&&j(a,r,e[r]);return a};import{r as b,j as t,_ as s}from"./main-677.js";import{t as g}from"./bf-44-197.js";import{T as _}from"./bf-63-135.js";import{A as y}from"./bf-320-401.js";import{N as w}from"./bf-526-402.js";import{a as E,f as S}from"./bf-239-391.js";/* empty css          */import"./bf-288-77.js";import"./bf-67-72.js";import"./bf-610-73.js";import"./bf-8-69.js";function M({acumbamailConf:a,setAcumbamailConf:e,step:r,setstep:k,isLoading:A,setIsLoading:l,setSnackbar:B,isInfo:n}){const[m,N]=b.useState(!1),[d,c]=b.useState({dataCenter:"",clientId:""}),T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2),S(a,e,l)},h=i=>{const p=o({},a),u=o({},d);u[i.target.name]="",p[i.target.name]=i.target.value,c(u),e(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[t.jsx(_,{title:g.acumbamail.title,youTubeLink:g.acumbamail.link}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:a.name,type:"text",placeholder:s("Integration Name..."),disabled:n}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Auth token, Please Visit")," ",t.jsx("a",{className:"btcd-link",href:"https://acumbamail.com/en/apidoc/",target:"_blank",rel:"noreferrer",children:s("Acumbamail documentation")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Auth Token:")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"auth_token",value:a.auth_token,type:"text",placeholder:s("Auth Token..."),disabled:n}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.auth_token}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(y,{isAuthorized:m,isLoading:A,handleAuthorize:()=>E(a,e,c,N,l)}),t.jsx("br",{}),t.jsx(w,{nextPageHandler:()=>T(),disabled:!m})]})]})}export{M as default};
