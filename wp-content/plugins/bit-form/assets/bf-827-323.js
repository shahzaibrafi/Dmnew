import{t as u,k as g,a as _,j as l,_ as y,I as F,p as v,aU as D,ab as x}from"./main-677.js";import{F as s}from"./bf-336-157.js";import{t as S}from"./bf-526-189.js";import{a as h}from"./bf-493-110.js";function I({cls:o,tip:j}){const{fieldKey:e}=u(),[i,r]=g(x),n=i[e].valid.disabled||!1,{css:f}=_(),c=p=>{if(!F)return;const{checked:t}=p.target,a=v(i,m=>{const d=m[e];t?d.valid.disabled=!0:delete d.valid.disabled}),b=t?"on":"off";r(a),D({event:`Disabled field ${b}`,type:"disabled_field_on_off",state:{fields:a,fldKey:e}})};return l.jsx("div",{className:`${f(s.fieldSection,s.hover_tip,s.singleOption)} ${o}`,children:l.jsx(h,{id:"fld-dsbl-stng",tip:S.disabled,title:y("Disabled"),action:c,isChecked:n,isPro:!0,proProperty:"disabled"})})}export{I as F};
