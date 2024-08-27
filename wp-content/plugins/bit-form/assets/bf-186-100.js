import{r as _,a as $e,k as L,t as Ae,ba as k,j as e,w as N,_ as P,b0 as we,a$ as je,aq as ke,p as I,z as E,dj as ee,bl as se,aU as U,bd as H,be as G,bf as Ne,bg as Ve}from"./main-677.js";import{C as V,$ as oe}from"./bf-417-108.js";import{N as Y}from"./bf-769-109.js";import{S as _e,G as ae,a as te}from"./bf-493-110.js";import"./bf-8-69.js";import"./bf-610-73.js";import"./bf-99-111.js";import"./bf-149-112.js";import"./bf-311-113.js";function Be({stateObjName:T,propertyPath:t,hslaPaths:r,canSetVariable:re,id:C,fldKey:p}){const{css:n}=$e(),[z,ne]=L(we),[o,v]=_.useState(),{element:B,fieldKey:F}=Ae(),[,J]=_.useTransition(),le=typeof o=="string",[y,ce]=_.useState(le?"Var":"Custom"),[A,ie]=L(je),[me,D]=L(ke),be=[{label:"Custom",icn:"Custom color",show:["icn"],tip:"Custom color"},{label:"Var",icn:"Variables",show:["icn"],tip:"Variable color"}],{"--global-bg-color":ge,"--global-fld-bdr-clr":de,"--global-fld-bg-color":ue,"--global-font-color":xe,"--global-accent-color":fe}=A,M=Array.isArray(t)?t[0]:t;_.useEffect(()=>{var l;switch(T){case"themeColors":const h=k(A,t);v(Y(h));break;case"themeVars":const $=k(z,t);v(Y($));break;case"styles":const w=Array.isArray(t)?t[0]:t,c=k(me,w);let b=c;if(((l=c==null?void 0:c.match(/var/gi))==null?void 0:l[0])==="var"){const a=c==null?void 0:c.replace(/\(|var|,.*|\)|(!important)|\s/gi,"");b=z[a]?z[a]:A[a]}c!=null&&c.match(/(!important)/gi)&&(b=c==null?void 0:c.replace(/(!important)|\s/gi,"")),v(Y(b));break;case"field-accent-color":const g=k(A,t);v(Y(g));break}},[C]);const Q=(l,h,$,w,c="")=>{const[b,g,a,j,d]=Ve(l,h,$,w);switch(T){case"themeColors":ie(u=>I(u,s=>{if(s[t]=d,r&&("h"in r&&(s[r.h]=b),"s"in r&&(s[r.s]=`${g}%`),"l"in r&&(s[r.l]=`${a}%`),"a"in r&&(s[r.a]=`${j}%`)),t==="--global-accent-color"){const m=ee(b,g,a),x=se(m);s["--fld-focs-i-fltr"]=x.filter}if(t==="--global-bg-color"){for(let m=0;m<105;m+=5){let x="";a>50&&a-m<=0?x=`hsl(${Math.round(b)}, ${Math.round(g)}%, 0%)`:a<50&&a+m>=100?x=`hsl(${Math.round(b)}, ${Math.round(g)}%, 100%)`:x=`hsl(${Math.round(b)}, ${Math.round(g)}%, ${Math.round(a>50?a-m:a+m)}%)`,s[`--bg-${m}`]=x}console.log("g bg color",s["--gbg-5"])}})),U(H(B,F,M,d,{themeColors:G("themeColors")}));break;case"themeVars":ne(u=>I(u,s=>{s[t]=d,r&&("h"in r&&(s[r.h]=b),"s"in r&&(s[r.s]=`${g}%`),"l"in r&&(s[r.l]=`${a}%`),"a"in r&&(s[r.a]=`${j}%`))})),U(H(B,F,M,d,{themeVars:G("themeVars")}));break;case"field-accent-color":D(u=>I(u,s=>{const m=`${d}!important`,x=`0px 0px 0px 3px hsla(${b}, ${g}%, ${a}%, 0.30)!important`;s.fields[p].classes[`.${p}-fld:focus`]["border-color"]=m,s.fields[p].classes[`.${p}-fld:focus`]["box-shadow"]=x,s.fields[p].classes[`.${p}-fld:hover`]["border-color"]=m})),U(H(B,F,M,d,{styles:G("styles")}));break;case"styles":D(u=>I(u,s=>{var Z;let m=d;const x=Array.isArray(t)?t[0]:t,R=k(s,x),he=(Z=R==null?void 0:R.match(/(!important)/gi))==null?void 0:Z[0],Ce=`0px 0px 0px 3px hsla(${b}, ${g}%, ${a}%, 0.30) !important`;he&&(m=`${m} !important`);const X=c||m;Array.isArray(t)?t.forEach(S=>{const q=S.split("->"),O=q.length-1;if(q[O]==="box-shadow")E(s,S,Ce);else if(q[O]==="filter"){const pe=ee(b,g,a),ve=se(pe);E(s,S,ve.filter)}else E(s,S,X)}):E(s,t,X)})),U(H(B,F,M,d,{styles:G("styles")}));break}},f=l=>{if(typeof l=="object")v(l),J(()=>{Q(l.h,l.s,l.v,l.a)});else{const h=`var(${l})`,$=A[l];if($){const[w,c,b,g]=$.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/gi),[a,j,d,u]=Ne(w,c,b,g);v({h:a,s:j,v:d,a:u}),J(()=>{Q(a,j,d,u,h)})}else J(()=>{Q("","","","",h)})}},W=l=>{const h={h:0,s:0,v:0,a:0};l.target.checked?f(h):f("--global-accent-color")},K=()=>(o==null?void 0:o.h)===0&&(o==null?void 0:o.s)===0&&(o==null?void 0:o.v)===0&&(o==null?void 0:o.a)===0;return e.jsx("div",{className:n(i.preview_wrp),children:re?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n(i.mb),children:e.jsx(_e,{square:!0,noShadow:!0,defaultActive:"Custom",options:be,size:60,component:"button",onChange:l=>ce(l),show:["icn"],variant:"lightgray",width:"100%",wideTab:!0})}),e.jsx(ae,{open:y==="Var",children:e.jsxs("div",{className:n(i.varClr),children:[e.jsxs("button",{className:`${n(i.clrItem)} ${n(o==="--global-bg-color"&&i.active)}`,type:"button",onClick:()=>f("--global-bg-color"),"data-testid":`${C}-g-bg-c`,children:[e.jsx(V,{bg:ge,className:n(N.mr2)}),e.jsx("span",{children:"Background Color"})]}),e.jsxs("button",{className:n(i.clrItem,o==="--global-accent-color"&&i.active),type:"button",onClick:()=>f("--global-accent-color"),"data-testid":`${C}-g-a-c`,children:[e.jsx(V,{bg:fe,className:n(N.mr2)}),e.jsx("span",{children:"Background Accent Color"})]}),e.jsxs("button",{className:n(i.clrItem,o==="--global-font-color"&&i.active),type:"button",onClick:()=>f("--global-font-color"),"data-testid":`${C}-g-f-c`,children:[e.jsx(V,{bg:xe,className:n(N.mr2)}),e.jsx("span",{children:"Font Color"})]}),e.jsxs("button",{className:n(i.clrItem,o==="--global-fld-bdr-clr"&&i.active),type:"button",onClick:()=>f("--global-fld-bdr-clr"),"data-testid":`${C}-g-f-b`,children:[e.jsx(V,{bg:de,className:n(N.mr2)}),e.jsx("span",{children:"Field Border Color"})]}),e.jsxs("button",{className:n(i.clrItem,o==="--global-fld-bg-color"&&i.active),type:"button",onClick:()=>f("--global-fld-bg-color"),"data-testid":`${C}-g-f-bg-c`,children:[e.jsx(V,{bg:ue,className:n(N.mr2)}),e.jsx("span",{children:"Field Background Color"})]})]})}),e.jsx(ae,{open:y==="Custom",children:e.jsxs("div",{className:n(i.container),children:[e.jsx("div",{className:n(i.subContainer),children:e.jsx(te,{title:P("Transparent"),action:W,isChecked:K(),id:"color-transparent"})}),e.jsx(oe,{showParams:!0,showPreview:!0,onChange:f,value:o})]})})]}):e.jsxs("div",{className:n(i.container),children:[e.jsx("div",{className:n(i.subContainer),children:e.jsx(te,{title:P("Transparent"),action:W,isChecked:K(),id:"color-transparent"})}),e.jsx(oe,{showParams:!0,showPreview:!0,onChange:f,value:o})]})})}var ze=_.memo(Be);const i={preview_wrp:{w:248,'& div[role="group"]':{p:4,b:0},"& input":{brs:8,b:"1px solid lightgray",p:"3px 8px",mnh:"10px !important",fs:12,mb:3,bs:"none",":focus":{focusShadow:1,b:"1px solid var(--b-50)"}},"& .common-module_transBackground__2AOKu":{brs:8,ow:"hidden"}},container:{dy:"flex",fd:"column","& .styles-module_container__2LiHz":{w:"100%"}},subContainer:{m:5,"& span":{fs:12},"& input":{m:0}},color:{w:30,h:30,brs:8,mr:10},bggrid:{bi:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)"},varClr:{my:5,w:"100%"},active:{bcr:"var(--b-50) !important",bd:"#f3f8ff"},clrItem:{dy:"block",flx:"align-center",bd:"transparent",b:"2px solid var(--white-0-93)",p:3,mb:8,brs:10,fs:12,cur:"pointer",w:"100%",tn:"background .3s",":hover":{bd:"var(--white-0-97)"}},m:{mr:15},mb:{mb:5}};export{ze as default};