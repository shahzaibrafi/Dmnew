var w=Object.defineProperty;var u=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var j=(l,e,a)=>e in l?w(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,m=(l,e)=>{for(var a in e||(e={}))N.call(e,a)&&j(l,a,e[a]);if(u)for(var a of u(e))y.call(e,a)&&j(l,a,e[a]);return l};import{r as k,j as s,T as M,_ as d,n as T,l as L,o as _,p as A}from"./main-677.js";import{u as F}from"./bf-743-127.js";import{C as b}from"./bf-102-76.js";import{T as H}from"./bf-647-118.js";import{r as S}from"./bf-270-382.js";function f({formFields:l,telegramConf:e,setTelegramConf:a}){var r;const[h,o]=k.useState({show:!1}),x=c=>{const n=L(e);c.target.value!==""?n.actions.attachments=c.target.value:delete n.actions.attachments,a(m({},n))};return s.jsxs("div",{className:"pos-rel",children:[s.jsx("div",{className:"d-flx flx-wrp",children:s.jsx(M,{onChange:()=>o({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:d("Attachments"),subTitle:d("Add attachments from BitForm to send Telegram.")})}),s.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:h.show==="attachments",close:()=>o({show:!1}),action:()=>o({show:!1}),title:d("Select Attachment"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),s.jsx("div",{className:"mt-2",children:d("Please select file upload fields")}),s.jsxs("select",{onChange:c=>x(c),name:"attachments",value:(r=e.actions)==null?void 0:r.attachments,className:"btcd-paper-inp w-10 mt-2",children:[s.jsx("option",{value:"",children:d("Select file upload field")}),l.filter(c=>c.type==="file-up").map(c=>s.jsx("option",{value:c.key,children:c.name},c.key+1))]})]})]})}function O({formFields:l,telegramConf:e,setTelegramConf:a,isLoading:h,setisLoading:o,setSnackbar:x}){var p;const r=t=>{const i=m({},e);i[t.target.name]=t.target.value,a(i)},c=t=>{a(i=>A(i,v=>{v.body=t}))},n=t=>{const i=m({},e);i!=null&&i.body&&(i.body=""),i.parse_mode=t.target.value,a(i)};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-150 d-in-b",children:d("Chat List: ")}),s.jsxs("select",{onChange:r,name:"chat_id",value:e.chat_id,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:d("Select Chat List")}),((p=e==null?void 0:e.default)==null?void 0:p.telegramChatLists)&&Object.keys(e.default.telegramChatLists).map(t=>s.jsx("option",{value:e.default.telegramChatLists[t].id,children:e.default.telegramChatLists[t].name},t))]}),s.jsx("button",{onClick:()=>S(e,a,o,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Telegram List")}'`},type:"button",disabled:h,children:"↻"})]}),h&&s.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.chat_id)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx mt-4",children:[s.jsx("b",{className:"wdt-150 d-in-b",children:d("Parse Mode: ")}),s.jsx(b,{radio:!0,onChange:t=>n(t),name:"HTML",title:s.jsx("small",{className:"txt-dp",children:d("HTML")}),checked:e.parse_mode==="HTML",value:"HTML"}),s.jsx(b,{radio:!0,onChange:t=>n(t),name:"MarkdownV2",title:s.jsx("small",{className:"txt-dp",children:d("Markdown v2")}),checked:e.parse_mode==="MarkdownV2",value:"MarkdownV2"})]}),s.jsxs("div",{className:"flx mt-4",children:[s.jsx("b",{className:"wdt-150 d-in-b",children:d("Messages: ")}),(e==null?void 0:e.parse_mode)==="HTML"?s.jsx(H,{formFields:l,value:e.body,onChangeHandler:c,width:"100%",toolbarMnu:"bold italic underline strikethrough | link | code | addFormField | addSmartField"}):s.jsxs(s.Fragment,{children:[s.jsx("textarea",{className:"w-7",onChange:r,name:"body",rows:"5",value:e.body}),s.jsx(F,{options:l.filter(t=>t.type!=="file-up").map(t=>({label:t.name,value:`\${${t.key}}`})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:t=>c(t)})]})]}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:d("Actions")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(f,{telegramConf:e,setTelegramConf:a,formFields:l})]})]})}export{O as T};
