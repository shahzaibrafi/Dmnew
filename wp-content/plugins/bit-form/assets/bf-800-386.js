var I=Object.defineProperty;var N=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(a,i,e)=>i in a?I(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e,o=(a,i)=>{for(var e in i||(i={}))V.call(i,e)&&y(a,e,i[e]);if(N)for(var e of N(i))M.call(i,e)&&y(a,e,i[e]);return a};import{u as $,j as l,_ as m,y as S,$ as k}from"./main-677.js";import{C as R}from"./bf-149-112.js";import{d as q}from"./bf-67-72.js";import{S as T}from"./bf-648-122.js";import{M as O}from"./bf-878-130.js";function z({i:a,formFields:i,field:e,enchargeConf:t,setEnchargeConf:p}){var b,v,F,h;const u=e.required,r=((b=t==null?void 0:t.default)==null?void 0:b.fields)&&Object.values((v=t==null?void 0:t.default)==null?void 0:v.fields).filter(s=>!s.required),c=$(k),{isPro:x}=c,w=s=>{const d=o({},t);d.field_map.splice(s,0,{}),p(d)},_=s=>{const d=o({},t);d.field_map.length>1&&d.field_map.splice(s,1),p(d)},j=(s,d)=>{const n=o({},t);n.field_map[d][s.target.name]=s.target.value,s.target.value==="custom"&&(n.field_map[d].customValue=""),p(n)},f=(s,d)=>{const n=o({},t);n.field_map[d].customValue=s.target.value,p(n)};return l.jsxs("div",{className:u?"mt-2 mr-1 flx w-9":"flx flx-around mt-2 mr-1",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:s=>j(s,a),defaultValue:"0",children:[l.jsx("option",{value:"0",children:m("Select Field")}),l.jsx("optgroup",{label:"Form Fields",children:i.map(s=>s.type!=="file-up"&&l.jsx("option",{value:s.key,children:s.name},`ff-zhcrm-${s.key}`))}),l.jsx("option",{value:"custom",children:m("Custom...")}),l.jsx("optgroup",{label:`General Smart Codes ${x?"":"(PRO)"}`,children:x&&((F=T)==null?void 0:F.map(s=>l.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),e.formField==="custom"&&l.jsx(O,{onChange:s=>f(s,a),label:m("Custom Value"),className:"mr-2",type:"text",value:e.customValue,placeholder:m("Custom Value")}),l.jsxs("select",{className:"btcd-paper-inp",name:"enChargeFields",value:e.enChargeFields,onChange:s=>j(s,a),disabled:u,defaultValue:"0",children:[l.jsx("option",{value:"0",children:m("Select Field")}),u?((h=t==null?void 0:t.default)==null?void 0:h.fields)&&Object.values(t.default.fields).map(s=>l.jsx("option",{value:s.fieldId,children:s.fieldName},`${s.fieldId}-1`)):r&&r.map(s=>l.jsx("option",{value:s.fieldId,children:s.fieldName},`${s.fieldId}-1`))]}),!u&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>w(a),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),l.jsx("button",{onClick:()=>_(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:l.jsx(S,{})})]})]})}function E({formID:a,formFields:i,enchargeConf:e,setEnchargeConf:t}){var u;const p=r=>{const c=o({},e);c[r.target.name]=r.target.value,t(c)};return l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:m("Tags:")}),l.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:p,name:"tags",value:e.tags||"",type:"text",placeholder:m("tag-1, tag-2")}),l.jsx(R,{width:250,icnSize:17,className:"ml-2",children:l.jsx("div",{className:"txt-body",children:"Tags separate with comma"})})]}),((u=e==null?void 0:e.default)==null?void 0:u.fields)!==0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mt-4",children:l.jsx("b",{className:"wdt-100",children:m("Map Fields")})}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:m("Form Fields")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:m("Encharge Fields")})})]}),e.field_map.map((r,c)=>l.jsx(z,{i:c,field:r,enchargeConf:e,formFields:i,setEnchargeConf:t},`sendinblue-m-${c+9}`)),l.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:l.jsx("button",{onClick:()=>q(e.field_map.length,e,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),l.jsx("br",{}),l.jsx("br",{})]})]})}export{E};
