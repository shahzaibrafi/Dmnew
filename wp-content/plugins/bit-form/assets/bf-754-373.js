var A=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&_(e,n,t[n]);if(j)for(var n of j(t))S.call(t,n)&&_(e,n,t[n]);return e};import{c as v,d as N,_ as p,u as T,j as c,y as V,$ as C}from"./main-677.js";import{S as w}from"./bf-648-122.js";import{M as q}from"./bf-878-130.js";const O=(e,t,n,l)=>{const s=d({},n);s[e].splice(t,0,{}),l(d({},s))},z=(e,t,n,l)=>{const s=d({},n);s[e].length>1&&s[e].splice(t,1),l(d({},s))},b=(e,t,n,l,s)=>{const o=d({},l);o[e][n][t.target.name]=t.target.value,s(d({},o))},G=e=>!((e!=null&&e.post_map?e.post_map.filter(n=>!n.formField&&n.postField&&n.required):[]).length>0),U=e=>!((e!=null&&e.acf_map?e.acf_map.filter(n=>!n.formField&&n.acfField&&n.required):[]).length>0),B=(e,t,n)=>{const l=v({post_type:e==null?void 0:e.post_type},"bitforms_get_custom_field").then(s=>{var o,i,m,u;return s!==void 0&&s.success&&((o=s==null?void 0:s.data)!=null&&o.acfFields&&t(s.data.acfFields),(i=s==null?void 0:s.data)!=null&&i.acfFile&&n(s.data.acfFile)),((m=s==null?void 0:s.data)==null?void 0:m.acfFields.length)!==0||((u=s==null?void 0:s.data)==null?void 0:u.acfFile.length)!==0?"Successfully refresh ACF Fields.":"ACF Fields not found"});N.promise(l,{success:s=>s,error:p("Error Occured"),loading:p("Loading ACF Fields...")})},H=(e,t)=>{const n=v({},"bitforms_get_post_type").then(l=>{var s,o,i;if(l&&l.success){let m=d({},e);return(s=l==null?void 0:l.data)!=null&&s.post_types&&(m=Object.values((o=l==null?void 0:l.data)==null?void 0:o.post_types),t(m)),((i=l==null?void 0:l.data)==null?void 0:i.post_types.length)!==0?"Successfully refresh Post Types.":" Post Types not found"}});N.promise(n,{success:l=>l,error:p("Error Occured"),loading:p("Loading Post Types...")})};function J({i:e,type:t,formFields:n,field:l,dataConf:s,setDataConf:o,customFields:i,fieldType:m}){var y;const u={acf:{propName:"acf_map",fldName:"acfField"},post:{propName:"post_map",fldName:"postField"},acfFile:{propName:"acf_file_map",fldName:"acfFileUpload"}},k=T(C),{isPro:F}=k,{propName:r,fldName:h}=u[t],$=(a,M)=>{const g=d({},s);g[r][M].customValue=a.target.value,o(g)},x=!!i.find(a=>a.key===l[h]&&a.required),f=["file-up","advanced-file-up"];return c.jsxs("div",{className:"flx mt-2 mr-1",children:[c.jsxs("div",{className:"flx integ-fld-wrp",children:[c.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:a=>b(r,a,e,s,o),children:[c.jsx("option",{value:"",children:p("Select Field")}),c.jsx("optgroup",{label:"Form Fields",children:t==="post"?c.jsxs(c.Fragment,{children:[n.map(a=>!f.includes(a.type)&&c.jsx("option",{value:a.key,children:a.name},`ff-zhcrm-${a.key}`)),c.jsx("option",{value:"custom",children:p("Custom...")})]}):c.jsxs(c.Fragment,{children:[m==="file"?n.map(a=>f.includes(a.type)&&c.jsx("option",{value:a.key,children:a.name},`ff-zhcrm-${a.key}`)):n.map(a=>!f.includes(a.type)&&c.jsx("option",{value:a.key,children:a.name},`ff-zhcrm-${a.key}`)),m!=="file"&&c.jsx("option",{value:"custom",children:p("Custom...")})]})}),c.jsx("optgroup",{label:`General Smart Codes ${F?"":"(PRO)"}`,children:F&&((y=w)==null?void 0:y.map(a=>c.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),l.formField==="custom"&&c.jsx(q,{onChange:a=>$(a,e),label:p("Custom Value"),className:"mr-2",type:"text",value:l.customValue,placeholder:p("Custom Value")}),c.jsxs("select",{className:"btcd-paper-inp",name:h,value:l[h]||"",onChange:a=>b(r,a,e,s,o),disabled:x,defaultValue:"0",children:[c.jsx("option",{value:"0",children:p("Select Field")}),i==null?void 0:i.map(a=>c.jsx("option",{value:a.key,children:`${a.name}`},`${a.key}-1`))]})]}),!x&&c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>O(r,e,s,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),c.jsx("button",{onClick:()=>z(r,e,s,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:c.jsx(V,{})})]})]})}export{J as F,O as a,U as b,G as c,H as d,B as r};
