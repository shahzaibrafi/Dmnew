var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var D=(t,e,o)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))z.call(e,o)&&D(t,o,e[o]);if(g)for(var o of g(e))S.call(e,o)&&D(t,o,e[o]);return t};import{_ as c,bz as I,$ as y,c as u,d$ as R}from"./main-677.js";const v=(t,e,o,l,r,s,i,a,n)=>{let h=d({},e);if(i){const p=d({},a);p[t.target.name]="",n(d({},p))}switch(h[t.target.name]=t.target.value,t.target.name){case"template":h=C(h,l,o,r,s);break}o(d({},h))},C=(t,e,o,l,r)=>{var i,a;const s=d({},t);return s.table="",s.field_map=[{formField:"",zohoFormField:""}],delete s.templateActions,(a=(i=s==null?void 0:s.default)==null?void 0:i.templateDetails)!=null&&a[t.template]||k(e,s,o,l,r),s},E=(t,e,o,l,r)=>{l(!0);const s={formID:t,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};u(s,"bitforms_zsign_refresh_templates").then(i=>{if(i&&i.success){const a=d({},e);a.default||(a.default={}),i.data.templates&&(a.default.templates=i.data.templates),i.data.tokenDetails&&(a.tokenDetails=i.data.tokenDetails),r({show:!0,msg:c("Templates refreshed")}),o(d({},a))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?r({show:!0,msg:R(c("Templates refresh failed Cause: %s. please try again"),i.data.data||i.data)}):r({show:!0,msg:c("Templates refresh failed. please try again")});l(!1)}).catch(()=>l(!1))},k=(t,e,o,l,r)=>{const{template:s}=e;l(!0);const i={formID:t,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,template:s};u(i,"bitforms_zsign_refresh_template_details").then(a=>{if(a&&a.success){const n=d({},e);n.default||(n.default={}),n.default.templateDetails||(n.default.templateDetails={}),a.data.templateDetails&&(n.default.templateDetails[s]=a.data.templateDetails),a.data.tokenDetails&&(n.tokenDetails=a.data.tokenDetails),r({show:!0,msg:c("Template Details refreshed")}),o(d({},n))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?r({show:!0,msg:R(c("Template Details refresh failed Cause: %s. please try again"),a.data.data||a.data)}):r({show:!0,msg:c("Template Details refresh failed. please try again")});l(!1)}).catch(()=>l(!1))},P=t=>{const e={},l=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");l&&l.forEach(r=>{const s=r.split("=");s[1]&&(e[s[0]]=s[1])}),localStorage.setItem(`__bitforms_${t}`,JSON.stringify(e)),window.close()},q=(t,e,o,l,r,s)=>{if(!t.dataCenter||!t.clientId||!t.clientSecret){o({dataCenter:t.dataCenter?"":c("Data center cann't be empty"),clientId:t.clientId?"":c("Client ID cann't be empty"),clientSecret:t.clientSecret?"":c("Secret key cann't be empty")});return}const i=I(y);r(!0);const a="ZohoSign.templates.CREATE,ZohoSign.templates.READ,ZohoSign.templates.UPDATE",n=`https://accounts.zoho.${t.dataCenter}/oauth/v2/auth?scope=${a}&response_type=code&client_id=${t.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(i.zohoRedirectURL)}`,h=window.open(n,"zohoSign","width=400,height=609,toolbar=off"),p=setInterval(()=>{if(h.closed){clearInterval(p);let f={},w=!1;const _=localStorage.getItem("__bitforms_zohoSign");if(_&&(w=!0,f=JSON.parse(_),localStorage.removeItem("__bitforms_zohoSign")),!f.code||f.error||!f||!w){const m=f.error?`Cause: ${f.error}`:"";s({show:!0,msg:`${c("Authorization failed")} ${m}. ${c("please try again")}`}),r(!1)}else{const m=d({},t);m.accountServer=f["accounts-server"],b(f,m,e,l,r,s)}}},500)},b=(t,e,o,l,r,s)=>{const i=I(y),a=d({},t);a.dataCenter=e.dataCenter,a.clientId=e.clientId,a.clientSecret=e.clientSecret,a.redirectURI=encodeURIComponent(i.zohoRedirectURL),u(a,"bitforms_zsign_generate_token").then(n=>n).then(n=>{if(n&&n.success){const h=d({},e);h.tokenDetails=n.data,o(h),l(!0),s({show:!0,msg:c("Authorized Successfully")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?s({show:!0,msg:`${c("Authorization failed Cause:")}${n.data.data||n.data}. ${c("please try again")}`}):s({show:!0,msg:c("Authorization failed. please try again")});r(!1)})};export{k as a,q as b,v as h,E as r,P as s};
