var M=Object.defineProperty;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var N=(t,s,l)=>s in t?M(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,r=(t,s)=>{for(var l in s||(s={}))A.call(s,l)&&N(t,l,s[l]);if(v)for(var l of v(s))V.call(s,l)&&N(t,l,s[l]);return t};import{r as F,j as e,T as k,_ as u,n as y,o as T,u as I,y as L,$}from"./main-677.js";import{u as _}from"./bf-743-127.js";import{g as R,a as q}from"./bf-965-370.js";import{M as B}from"./bf-878-130.js";import{S as O}from"./bf-648-122.js";function P({elasticEmailConf:t,setElasticEmailConf:s,formFields:l}){var a;const[d,n]=F.useState({show:!1,action:()=>{}}),[p,i]=F.useState(!1),m=(o,x)=>{var g;const h=r({},t);x==="status"&&(o.target.checked?(h.actions[x]=!0,n({show:x})):((g=h.actions)==null||delete g[x],h==null||delete h[x])),s(r({},h))},c=()=>{n({show:!1})},b=[{value:"Transactional",label:"Transactional"},{value:"Engaged",label:"Engaged"},{value:"Active",label:"Active"},{value:"Bounced",label:"Bounced"},{value:"Unsubscribed",label:"Unsubscribed"},{value:"Abuse",label:"Abuse"},{value:"Inactive",label:"Inactive"},{value:"Stale",label:"Stale"},{value:"NotConfirmed",label:"NotConfirmed"}],j=(o,x)=>{const h=r({},t);h[x]=o,s(r({},h))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(k,{checked:((a=t==null?void 0:t.actions)==null?void 0:a.status)||!1,onChange:o=>m(o,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:u("Status"),subTitle:u("Add Status to contact")}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:u("Ok"),show:d.show==="status",close:c,action:c,title:u("Status"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),p?e.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(_,{className:"msl-wrp-options",defaultValue:t==null?void 0:t.status,options:b==null?void 0:b.map(o=>({label:o.label,value:o.value.toString()})),onChange:o=>j(o,"status"),customValue:!0,singleSelect:!0})})]})]})}const S=(t,s,l)=>{const d=r({},s);d.field_map.splice(t,0,{}),l(r({},d))},U=(t,s,l)=>{const d=r({},s);d.field_map.length>1&&d.field_map.splice(t,1),l(r({},d))},w=(t,s,l,d)=>{const n=r({},l);n.field_map[s][t.target.name]=t.target.value,t.target.value==="custom"&&(n.field_map[s].customValue=""),d(r({},n))},z=(t,s,l,d)=>{const n=r({},l);n.field_map[s].customValue=t.target.value,d(r({},n))};function G({i:t,formFields:s,field:l,elasticEmailConf:d,setElasticEmailConf:n}){var b,j;if(((b=d==null?void 0:d.field_map)==null?void 0:b.length)===1&&l.elasticEmailField===""){const a=r({},d),o=R(a);a.field_map=o,n(a)}const p=(d==null?void 0:d.elasticEmailFields.filter(a=>a.required===!0))||[],i=(d==null?void 0:d.elasticEmailFields.filter(a=>a.required===!1))||[],m=I($),{isPro:c}=m;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",defaultValue:"0",onChange:a=>w(a,t,d,n),children:[e.jsx("option",{selected:!0,disabled:!0,value:"0",children:u("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(a=>e.jsx("option",{value:a.key,children:a.name},`ff-rm-${a.key}`))}),e.jsx("option",{value:"custom",children:u("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${c?"":"(PRO)"}`,children:c&&((j=O)==null?void 0:j.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),l.formField==="custom"&&e.jsx(B,{onChange:a=>z(a,t,d,n),label:u("Custom Value"),className:"mr-2",type:"text",value:l.customValue,placeholder:u("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<p.length,defaultValue:"0",name:"elasticEmailField",value:t<p.length?p[t].label||"":l.elasticEmailField||"",onChange:a=>w(a,t,d,n),children:[e.jsx("option",{selected:!0,disabled:!0,value:"0",children:u("Select Field")}),t<p.length?e.jsx("option",{value:p[t].key,children:p[t].label},p[t].key):i.map(({key:a,label:o})=>e.jsx("option",{value:a,children:o},a))]})]}),t>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(t,d,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsxs("button",{onClick:()=>U(t,d,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:[e.jsx("span",{className:"btcd-icn icn-trash-2"}),e.jsx(L,{size:"15"})]})]})]})})}function X({formFields:t,elasticEmailConf:s,setElasticEmailConf:l,isLoading:d,setIsLoading:n,setSnackbar:p}){var m;const i=c=>{const b=r({},s);b.list_id=c?c.split(","):[],l(r({},b))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:u("Lists:")}),e.jsx(_,{defaultValue:s.list_id,className:"btcd-paper-drpdwn w-5",options:((m=s==null?void 0:s.default)==null?void 0:m.lists)&&s.default.lists.map(c=>({label:c.listName,value:c.listName.toString()})),onChange:c=>i(c)}),e.jsx("button",{onClick:()=>q(s,l,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Fetch All Recipients")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:u("Field Map")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:u("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:u("Elastic Email Fields")})})]}),s.list_id&&(s==null?void 0:s.field_map.map((c,b)=>e.jsx(G,{i:b,field:c,elasticEmailConf:s,formFields:t,setElasticEmailConf:l,setSnackbar:p},`rp-m-${b+9}`))),e.jsx("div",{className:"txt-center mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>S(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),(s==null?void 0:s.list_id)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:u("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(P,{elasticEmailConf:s,setElasticEmailConf:l,formFields:t})]})]})}export{X as E};