import{r as b,j as s}from"./main-677.js";function l({id:r,className:c,disabled:n,checked:o,onChange:p,radio:a,name:x,title:t,value:e,sqr:i,tip:m}){const d=x||b.useId();return s.jsxs("label",{title:m,"data-testid":`${r}-chk`,className:`btcd-ck-wrp ${c}`,children:[s.jsx("input",{"aria-label":e||t,type:a?"radio":"checkbox",checked:o,onChange:p,name:d,value:e,disabled:n}),s.jsx("span",{className:`btcd-mrk ${!i&&"br-50"} ${a?"rdo":"ck"}`}),t]})}export{l as C};
