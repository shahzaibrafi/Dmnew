import{r as t,a as R,j as s,E as H,I as P,s as T,bp as $}from"./main-677.js";import{C as k}from"./bf-99-111.js";import{B}from"./bf-183-126.js";import{P as O}from"./bf-311-113.js";function z({title:c,customTitle:f,subtitle:r,children:m,titleEditable:i,onTitleChange:h,cls:g,notScroll:D,header:j,onExpand:l,onCollapse:d,toggle:p,action:v,checked:b,isPro:y,proProperty:N}){const[e,E]=t.useState(!1),[w,n]=t.useState(0),u=t.useRef(null),o=t.useRef(null),{css:S}=R(),x=a=>{a.target.classList.contains("edit")||E(!e)},C=a=>{a.stopPropagation(),u.current.focus()},A=()=>{n("auto"),l&&l()},I=()=>{n(o.current.offsetHeight),d&&d()};return s.jsxs("div",{className:`btcd-accr sh-sm ${g}`,children:[s.jsxs("div",{className:`btcd-accr-btn ${e&&"blue active"} flx flx-between`,onClick:x,onKeyDown:x,role:"button",tabIndex:0,children:[s.jsxs("div",{className:"btcd-accr-title w-10",children:[s.jsxs("div",{className:S({flx:"align-center"}),children:[f,c!==void 0&&s.jsx("input",{"aria-label":"accrodions",title:c,ref:u,className:i&&"edit",style:{color:e?"white":"inherit"},type:"text",onChange:h,value:c,readOnly:i===void 0}),i&&s.jsx("button",{type:"button",className:"edit-icn",onClick:C,"aria-label":"focus edit",style:{color:e?"white":"gray"},children:s.jsx(H,{size:16})}),!e&&j,y&&!P&&s.jsx(O,{proProperty:N})]}),r!==void 0&&s.jsx("small",{children:r})]}),p&&s.jsx(T,{action:v,checked:b||!1,className:"flx"}),s.jsx(B,{icn:!0,children:s.jsx(k,{size:"20",rotate:!!e})})]}),s.jsx("div",{className:`o-h ${e&&"delay-overflow"}`,style:{height:w,transition:"height 300ms"},children:s.jsx($,{nodeRef:o,in:e,timeout:300,onEntering:()=>n(o.current.offsetHeight),onEntered:A,onExiting:()=>n(0),onExit:I,unmountOnExit:!0,children:s.jsx("div",{className:"p-2",ref:o,children:m})})})]})}var q=t.memo(z);export{q as A};
