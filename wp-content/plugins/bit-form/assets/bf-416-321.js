import{j as l}from"./main-677.js";import{ah as m,ai as n,ag as u,aj as c,ak as d,al as x,an as y,am as g}from"./bf-706-86.js";import"./bf-352-145.js";import"./bf-311-113.js";import"./bf-610-73.js";import"./bf-434-119.js";import"./bf-207-123.js";import"./bf-134-124.js";import"./bf-713-125.js";import"./bf-8-69.js";import"./bf-288-77.js";import"./bf-183-126.js";import"./bf-743-127.js";/* empty css          */import"./bf-818-129.js";import"./bf-878-130.js";import"./bf-554-131.js";/* empty css          */import"./bf-149-112.js";u([c,d,x,y,g]);function C({dataList:r,field:f,title:b,viewType:e}){const s=r.map(i=>i.value),o=r.map(i=>i.label),t={type:"category",data:o,axisTick:{alignWithLabel:!0}},a={type:"value"};e==="vBar"&&(t.type="value",delete t.data,a.type="category",a.data=o);const p={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:t,yAxis:a,series:[{name:"Total",type:"bar",barWidth:"60%",data:s}]};return l.jsx(m,{echarts:n,option:p,notMerge:!0,lazyUpdate:!0})}export{C as default};