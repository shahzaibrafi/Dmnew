var T=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var w=(a,d,e)=>d in a?T(a,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[d]=e,n=(a,d)=>{for(var e in d||(d={}))A.call(d,e)&&w(a,e,d[e]);if(N)for(var e of N(d))$.call(d,e)&&w(a,e,d[e]);return a};import{c as k,_ as r,j as s,T as M,u as V,y as q,$ as R,o as L}from"./main-677.js";import{u as _}from"./bf-743-127.js";import{d as O}from"./bf-67-72.js";import{S}from"./bf-648-122.js";import{M as P}from"./bf-878-130.js";const z=(a,d,e,l)=>{e(!0),k({},"bitforms_autonami_lists_and_tags").then(i=>{if(i&&i.success){const c=n({},a);c.default||(c.default={}),i.data.autonamiList&&(c.default.autonamiList=i.data.autonamiList),i.data.autonamiTags&&(c.default.autonamiTags=i.data.autonamiTags),l({show:!0,msg:r("Autonami lists and tags refreshed")}),d(n({},c))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?l({show:!0,msg:`${r("Autonami lists and tags refresh failed Cause:")}${i.data.data||i.data}. ${r("please try again")}`}):l({show:!0,msg:r("Autonami lists and tags refresh failed. please try again")});e(!1)}).catch(()=>e(!1))},B=(a,d,e,l,i=!1)=>{k({},"bitforms_autonami_fields").then(c=>{if(c&&c.success){const p=n({},a);if(p.default||(p.default={}),c.data.autonamiFields){if(p.default.fields=c.data.autonamiFields,!i){const{fields:x}=p.default;p.field_map=Object.values(x).filter(o=>o.required).map(o=>({formField:"",autonamiField:o.key,required:!0}))}l({show:!0,msg:r("Autonami fields refreshed")})}else l({show:!0,msg:r("No Autonami fields found. Try changing the header row number or try again")});d(n({},p))}else l({show:!0,msg:r("Autonami fields refresh failed. please try again")});e(!1)}).catch(()=>e(!1))},U=(a,d,e)=>{const l=n({},d);l.name=a.target.value,e(n({},l))},W=a=>!((a!=null&&a.field_map?a.field_map.filter(e=>!e.formField&&e.autonamiField&&e.required):[]).length>0);function D({autonamiConf:a,setAutonamiConf:d,formFields:e}){var i;const l=(c,p)=>{const x=n({},a);p==="exists"&&(c.target.checked?x.actions.skip_if_exists=!0:delete x.actions.skip_if_exists),d(n({},x))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(M,{checked:((i=a.actions)==null?void 0:i.skip_if_exists)||!1,onChange:c=>l(c,"exists"),className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:r("Skip exist Contact"),subTitle:r("Skip if contact already exist in Autonami")})})}function E({i:a,formFields:d,field:e,autonamiConf:l,setAutonamiConf:i}){var f,F,y,v;const c=e.required,p=((f=l==null?void 0:l.default)==null?void 0:f.fields)&&Object.values((F=l==null?void 0:l.default)==null?void 0:F.fields).filter(t=>!t.required),x=V(R),{isPro:o}=x,g=t=>{const u=n({},l);u.field_map.splice(t,0,{}),i(u)},b=t=>{const u=n({},l);u.field_map.length>1&&u.field_map.splice(t,1),i(u)},m=(t,u)=>{const j=n({},l);j.field_map[u][t.target.name]=t.target.value,t.target.value==="custom"&&(j.field_map[u].customValue=""),i(j)},h=(t,u)=>{const j=n({},l);j.field_map[u].customValue=t.target.value,i(j)};return s.jsxs("div",{className:"flx mt-2 mr-1",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:t=>m(t,a),children:[s.jsx("option",{value:"",children:r("Select Field")}),s.jsx("optgroup",{label:"Form Fields",children:d.map(t=>t.type!=="file-up"&&s.jsx("option",{value:t.key,children:t.name},`ff-zhcrm-${t.key}`))}),s.jsx("option",{value:"custom",children:r("Custom...")}),s.jsx("optgroup",{label:`General Smart Codes ${o?"":"(PRO)"}`,children:o&&((y=S)==null?void 0:y.map(t=>s.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),e.formField==="custom"&&s.jsx(P,{onChange:t=>h(t,a),label:r("Custom Value"),className:"mr-2",type:"text",value:e.customValue,placeholder:r("Custom Value")}),s.jsxs("select",{className:"btcd-paper-inp",name:"autonamiField",value:e.autonamiField,onChange:t=>m(t,a),disabled:c,children:[s.jsx("option",{value:"",children:r("Select Field")}),c?((v=l==null?void 0:l.default)==null?void 0:v.fields)&&Object.values(l.default.fields).map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`)):p&&p.map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`))]})]}),!c&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>g(a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>b(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(q,{})})]})]})}function X({formID:a,formFields:d,autonamiConf:e,setAutonamiConf:l,isLoading:i,setIsLoading:c,setSnackbar:p}){var g,b;const x=m=>{const h=n({},e);h.tags=m?m.split(","):[],l(n({},h))},o=m=>{const h=n({},e);h.lists=m?m.split(","):[],l(n({},h)),console.log(h)};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Autonami Lists:")}),s.jsx(_,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-5",options:((g=e==null?void 0:e.default)==null?void 0:g.autonamiList)&&Object.keys(e.default.autonamiList).map(m=>({label:e.default.autonamiList[m].title,value:e.default.autonamiList[m].id.toString()})),onChange:m=>o(m)}),s.jsx("button",{onClick:()=>z(e,l,c,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Autonami Lists And Tags")}'`},type:"button",disabled:i,children:"↻"})]}),s.jsxs("div",{className:"flx mt-5",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Autonami Tags: ")}),s.jsx(_,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-5",options:((b=e==null?void 0:e.default)==null?void 0:b.autonamiTags)&&Object.keys(e.default.autonamiTags).map(m=>({label:e.default.autonamiTags[m].title,value:e.default.autonamiTags[m].id.toString()})),onChange:m=>x(m)})]}),i&&s.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:r("Map Fields")}),s.jsx("button",{onClick:()=>B(e,l,c,p,!0),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Autonami Fields")}'`},type:"button",disabled:i,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Form Fields")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Autonami Fields")})})]}),e.field_map.map((m,h)=>s.jsx(E,{i:h,field:m,autonamiConf:e,formFields:d,setAutonamiConf:l},`autonami-m-${h+9}`)),s.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:s.jsx("button",{onClick:()=>O(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:r("Actions")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(D,{autonamiConf:e,setAutonamiConf:l,setIsLoading:c,setSnackbar:p})]})}export{X as A,W as c,B as g,U as h};
