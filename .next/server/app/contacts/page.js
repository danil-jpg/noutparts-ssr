(()=>{var e={};e.id=613,e.ids=[613],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},29008:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>m,pages:()=>u,routeModule:()=>p,tree:()=>l});var r=s(67096),a=s(16132),n=s(37284),i=s.n(n),c=s(32564),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);s.d(t,o);let l=["",{children:["contacts",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,83993)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\contacts\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,62872)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,8295)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\contacts\\page.tsx"],m="/contacts/page",d={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/contacts/page",pathname:"/contacts",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},11742:(e,t,s)=>{Promise.resolve().then(s.bind(s,13651)),Promise.resolve().then(s.bind(s,70467)),Promise.resolve().then(s.t.bind(s,67490,23))},13651:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ContactsForm:()=>u});var r=s(53854);s(14194);var a=s(77754),n=s(34218),i=s(51830),c=s(41683),o=s(4126),l=s(30220);function u(){let[e,t]=(0,n.useState)(""),[s,u]=(0,n.useState)(""),[m,d]=(0,n.useState)(""),[p,x]=(0,n.useState)(""),[_,h]=(0,n.useState)(!1),[f,j]=(0,n.useState)(!1);return(0,r.jsxs)("form",{action:()=>{e&&m&&(h(!0),async function(){await (0,c.HD)({data:{name:e,tel:m,email:s,appeal:p}})}(),setTimeout(()=>{h(!1),t(""),u(""),d(""),x(""),j(!0),alert("Ваше сообщение успешно отправлено")},1e3)),f&&alert("Сообщение уже отправлено")},className:"contacts-form",name:"contact-form",children:[(0,r.jsxs)("div",{className:"contacts-form__body",children:[r.jsx(a.Z,{type:"text",setValue:t,placeholder:"Имя",label:"  Ваше имя "}),r.jsx(a.Z,{type:"email",setValue:u,placeholder:"Email",label:" Ваш email (необязательно) "}),r.jsx(a.Z,{type:"tel",setValue:d,placeholder:"Телефон",label:" Ваш номер телефона"}),r.jsx(i.Z,{label:"Что вас интересует? ",setValue:x,classname:"contacts-form__appeal"})]}),r.jsx(o.Z,{type:"default",text:"Отправить",htmlType:"submit",className:"contacts-form__btn"}),_?r.jsx(l.Z,{}):""]})}},30220:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(53854);s(34218);var a=s(21735);s(65989);let n=()=>r.jsx("div",{className:"loading",children:r.jsx(a.Z,{classname:"loading__item",white:!1})})},21735:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(53854);s(34218),s(13621);let a=({classname:e,white:t=!1})=>r.jsx("div",{className:`${e} spinner ${t?"spinner_white":""}`})},4126:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(53854);s(34218),s(15873);let a=({text:e,htmlType:t,type:s="default",icon:a,className:n,onClick:i,props:c})=>(0,r.jsxs)("button",{type:t||"button",className:`primaryBtn ${s} ${n}`,onClick:i,...c,children:[e||"",a||""]})},84976:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(4656),a=s(24353),n=s.n(a),i=s(53023),c=s(19426);function o({breadcrumbs:e,classname:t=""}){return r.jsx("nav",{"aria-label":"Breadcrumb",className:`${t} breadcrumbs`,children:(0,r.jsxs)("ul",{className:"breadcrumbs__ul",children:[r.jsx("li",{className:"breadcrumbs__li",children:(0,r.jsxs)(n(),{href:"/",children:[r.jsx(c.Z,{id:"home-icon"}),r.jsx("span",{className:"breadcrumbs__separator",children:"/"})]})},(0,i.Z)()),e.map((t,s)=>(0,r.jsxs)("li",{"aria-current":t.active,className:function(){for(var e,t,s=0,r="";s<arguments.length;)(e=arguments[s++])&&(t=function e(t){var s,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(s=0;s<t.length;s++)t[s]&&(r=e(t[s]))&&(a&&(a+=" "),a+=r);else for(s in t)t[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(r&&(r+=" "),r+=t);return r}("breadcrumbs__li",t.active?"breadcrumbs__li_active":""),children:[r.jsx(n(),{href:t.href,children:t.label}),s<e.length-1?r.jsx("span",{className:"breadcrumbs__separator",children:"/"}):null]},t.href))]})})}s(93646)},19426:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(4656);s(3542),s(67853);let a=({id:e,className:t="",...s})=>r.jsx("svg",{...s,className:`${e} ${t}`,children:r.jsx("use",{href:`/_next/static/media/sprites.19372370.svg#${e}`})})},83993:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(4656),a=s(84976),n=s(19426);s(88129);var i=s(95153);let c=(0,i.createProxy)(String.raw`D:\Front-End\AVADA_MEDIA\noutparts-ssr\app\common\components\ContactForms\ContactForms.tsx`),{__esModule:o,$$typeof:l}=c;c.default;let u=(0,i.createProxy)(String.raw`D:\Front-End\AVADA_MEDIA\noutparts-ssr\app\common\components\ContactForms\ContactForms.tsx#ContactsForm`);function m(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{breadcrumbs:[{href:"/contacts",label:"Контакты",active:!0}],classname:"container  contacts__breadcrumbs"}),r.jsx("div",{className:"contacts",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"contacts__row",children:[r.jsx("p",{className:"contacts__title",children:"Контакты"}),r.jsx("p",{className:"contacts__text",children:"У вас остались вопросы? Пожалуйста оставьте свои данные и мы свяжемся с вами!"}),(0,r.jsxs)("div",{className:"contacts__body",children:[(0,r.jsxs)("ul",{className:"info-contacts",children:[(0,r.jsxs)("li",{className:"info-contacts__item",children:[(0,r.jsxs)("p",{className:"info-contacts__item-title",children:[r.jsx(n.Z,{id:"point-icon"}),"Адрес:"]}),r.jsx("p",{className:"info-contacts__item-value",children:"Город, ул. 12, д.1"})]}),(0,r.jsxs)("li",{className:"info-contacts__item",children:[(0,r.jsxs)("p",{className:"info-contacts__item-title",children:[r.jsx(n.Z,{id:"phone-icon"}),"Телефон:"]}),r.jsx("a",{href:"tel:066 388-88 95",className:"info-contacts__item-value info-contacts__item-value_link",children:"(066) 388-88 95"})]}),(0,r.jsxs)("li",{className:"info-contacts__item",children:[(0,r.jsxs)("p",{className:"info-contacts__item-title",children:[r.jsx(n.Z,{id:"clock-icon"}),"Мы работаем:"]}),(0,r.jsxs)("div",{className:"info-contacts__item-value",children:["Пн-Пт 10:00 - 19:00",r.jsx("br",{})," Сб-Вс 10:00 - 18:00"]})]}),(0,r.jsxs)("li",{className:"info-contacts__item",children:[(0,r.jsxs)("p",{className:"info-contacts__item-title",children:[r.jsx(n.Z,{id:"mail-icon"}),"E-mail:"]}),r.jsx("a",{href:"mailto:shop@gmail.com",className:"info-contacts__item-value  info-contacts__item-value_link",children:"shop@gmail.com"})]})]}),r.jsx(u,{})]})]})})})]})}},24353:(e,t,s)=>{"use strict";e.exports=s(52300)},14194:()=>{},65989:()=>{},13621:()=>{},93646:()=>{},67853:()=>{},15873:()=>{},88129:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,197,752],()=>s(29008));module.exports=r})();