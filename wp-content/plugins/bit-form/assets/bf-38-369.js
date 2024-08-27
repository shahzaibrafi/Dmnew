var k=Object.defineProperty;var _=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(a,s,l)=>s in a?k(a,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[s]=l,i=(a,s)=>{for(var l in s||(s={}))f.call(s,l)&&w(a,l,s[l]);if(_)for(var l of _(s))V.call(s,l)&&w(a,l,s[l]);return a};import{c as I,d as S,_ as n,r as M,j as e,T as L,n as A,o as $,u as q,y as U,$ as P}from"./main-677.js";import{d as R}from"./bf-67-72.js";import{u as E}from"./bf-743-127.js";/* empty css          */import{S as O}from"./bf-648-122.js";import{M as B}from"./bf-878-130.js";const G=(a,s,l,c)=>{const u=i({},s);u.name=a.target.value,l(i({},u))},g=a=>!((a!=null&&a.field_map?a.field_map.filter(l=>!l.formField||!l.getgistFormField||!l.formField==="custom"&&!l.customValue):[]).length>0),T=(a,s,l)=>{l(!0);const c={apiKey:a.api_key},u=I(c,"bitforms_getgist_tags").then(p=>{if(p&&p.success){const x=i({},a);return x.default||(x.default={}),x.default.tags=p.data,s(i({},x)),l(!1),"Tags refreshed successfully"}return l(!1),"Tags refresh failed. Please, try again"});S.promise(u,{success:p=>p,error:n("Error Occurred"),loading:n("Loading Tags...")})},H=a=>{const s=a==null?void 0:a.gistFields.filter(l=>l.required===!0);return s.length>0?s.map(l=>({formField:"",getgistFormField:l.key})):[{formField:"",getgistFormField:""}]};function K({getgistConf:a,setGetgistConf:s}){var j,h,d;const[l,c]=M.useState(!1),[u,p]=M.useState({show:!1,action:()=>{}}),x=(m,t)=>{const b=i({},a);m.target.checked?(t==="tags"&&T(a,s,c),b.actions[t]=!0,p({show:t})):(p({show:!1}),delete b.actions[t]),s(i({},b))},F=()=>{p({show:!1})},N=(m,t)=>{const b=i({},a);b[t]=m,s(i({},b))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(L,{checked:((j=a==null?void 0:a.actions)==null?void 0:j.tags)||!1,onChange:m=>x(m,"tags"),className:"wdt-200 mt-4 mr-2",value:"tags",title:n("Tags"),subTitle:n("Add tags to contact")}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:n("Ok"),show:u.show==="tags",close:F,action:F,title:n("Tags"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),l?e.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(E,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.tags,options:(d=(h=a.default)==null?void 0:h.tags)==null?void 0:d.map(m=>({label:m.tagName,value:m.tagName.toString()})),onChange:m=>N(m,"tags")}),e.jsx("button",{onClick:()=>T(a,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Tags")}'`},type:"button",disabled:l,children:"↻"})]})]})]})}function z({i:a,formFields:s,field:l,getgistConf:c,setGetgistConf:u}){var t,b,y;const p=q(P),{isPro:x}=p;if(((t=c==null?void 0:c.field_map)==null?void 0:t.length)===1&&(l==null?void 0:l.getgistFormField)===""){const r=i({},c),o=H(r);r.field_map=o,u(r)}const F=r=>{const o=i({},c);o.field_map.splice(r,0,{}),u(o)},N=r=>{const o=i({},c);o.field_map.length>1&&o.field_map.splice(r,1),u(o)},j=(r,o)=>{const v=i({},c);v.field_map[o][r.target.name]=r.target.value,r.target.value==="custom"&&(v.field_map[o].customValue=""),u(v)},h=(r,o)=>{const v=i({},c);v.field_map[o].customValue=r.target.value,u(v)},d=(c==null?void 0:c.gistFields.filter(r=>r.required===!0))||[],m=(c==null?void 0:c.gistFields.filter(r=>r.required===!1))||[];return e.jsxs("div",{className:"flx mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:r=>j(r,a),defaultValue:"0",children:[e.jsx("option",{disabled:!0,selected:!0,value:"0",children:n("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:s.map(r=>r.type!=="file"&&e.jsx("option",{value:r.key,children:r.name},`ff-getgist-${r.key}`))}),e.jsx("option",{value:"custom",children:n("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${x?"":"(PRO)"}`,children:x&&((b=O)==null?void 0:b.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),l.formField==="custom"&&e.jsx(B,{onChange:r=>h(r,a),label:n("Custom Value"),className:"mr-2",type:"text",value:l.customValue,placeholder:n("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<d.length,name:"getgistFormField",value:a<d.length?((y=d[a])==null?void 0:y.key)||"":l.getgistFormField||"",onChange:r=>j(r,a),defaultValue:"0",children:[e.jsx("option",{disabled:!0,value:"0",children:n("Select Field")}),a<d.length?e.jsx("option",{value:d[a].key,children:d[a].label},d[a].key):m.map(({key:r,label:o})=>e.jsx("option",{value:r,children:o},r))]})]}),a>=(d==null?void 0:d.length)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(a),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>N(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(U,{})})]})]})}function C({formFields:a,getgistConf:s,setGetgistConf:l,isLoading:c,setIsLoading:u,error:p,setError:x}){const F=[{key:"User",label:"User"},{key:"Lead",label:"Lead"}],N=()=>Math.floor((1+Math.random())*4294967296).toString(16).substring(1),j=h=>{const{name:d,value:m}=h.target,t=i({},s);t[d]=m,m==="User"?(m==="User"&&(t.userId=N()),t.field_map=[{formField:"",getgistFormField:"email"}]):(t!=null&&t.userId&&delete t.userId,t.field_map=[{formField:"",getgistFormField:"email"}]),l(i({},t))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("User Type:")}),e.jsxs("select",{onChange:j,name:"user_type",value:s==null?void 0:s.user_type,className:"btcd-paper-inp w-5",defaultValue:"0",children:[e.jsx("option",{selected:!0,disabled:!0,value:"0",children:n("Select User Type")}),F.map(({key:h,label:d})=>e.jsx("option",{value:h,children:d},h))]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Fields")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Gist Fields")})})]}),s==null?void 0:s.field_map.map((h,d)=>e.jsx(z,{i:d,field:h,getgistConf:s,formFields:a,setGetgistConf:l},`getgist-m-${d+9}`)),e.jsx("div",{className:"txt-center mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>R(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),(s==null?void 0:s.user_type)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(K,{getgistConf:s,setGetgistConf:l,formFields:a})]})]})}export{C as G,g as c,G as h};
