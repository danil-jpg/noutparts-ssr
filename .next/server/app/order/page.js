(()=>{var e={};e.id=778,e.ids=[778],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},54794:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>_,tree:()=>c});var t=s(67096),a=s(16132),i=s(37284),l=s.n(i),n=s(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(r,o);let c=["",{children:["order",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,45814)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\order\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,62872)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,8295)),"D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Front-End\\AVADA_MEDIA\\noutparts-ssr\\app\\order\\page.tsx"],u="/order/page",p={require:s,loadChunk:()=>Promise.resolve()},_=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/order/page",pathname:"/order",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},57293:(e,r,s)=>{Promise.resolve().then(s.bind(s,52320))},52320:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>b});var t=s(53854),a=s(83847),i=s(34218);s(38934);var l=s(41956),n=s.n(l),o=s(67490),c=s.n(o),d=s(69878),u=s(66933),p=s(21735),_=s(77754),m=s(51830);s(92415);let h=({texts:e=[],descriptions:r=[],type:s="row",setChosenRadio:a,heading:l})=>{let[n,o]=(0,i.useState)(null),c=r=>{n!==r&&(o(r),a(e[r]))};return(0,t.jsxs)("div",{className:"basic-radio__container",children:[l&&(0,t.jsxs)("div",{className:"basic-radio__heading",children:[t.jsx("span",{children:"*"}),l]}),t.jsx("div",{className:`basic-radio ${"row"===s?"row":"col"}`,children:e?e.map((e,s)=>(0,t.jsxs)("div",{className:`basic-radio__item ${n===s?"active":""}`,onClick:()=>c(s),children:[(0,t.jsxs)("div",{className:"basic-radio__text-block",children:[t.jsx("div",{className:`basic-radio__radio-name ${r[s]?"with-desc":""}`,children:e}),r[s]&&t.jsx("div",{className:"basic-radio__radio-description",children:r[s]})]}),t.jsx("div",{className:`basic-radio__radio-circle outer ${n===s?"active":""}`,children:t.jsx("div",{className:`basic-radio__radio-circle inner ${n===s?"active":""}`})})]},s)):"There are no redios provided in props"})]})},x={src:"/_next/static/media/map-icon.d22c49bb.svg",height:20,width:16,blurWidth:0,blurHeight:0};s(66353);let v=({data:e,type:r,setValue:s})=>{let[a,l]=(0,i.useState)(""),[o,c]=(0,i.useState)(!1),d=(0,i.useRef)(null),u=e=>{s(e),l(e),c(!1)},p=""===a?e:e.filter(e=>e.toLowerCase().includes(a.toLowerCase())),_=e.slice(0,5);(0,i.useEffect)(()=>(document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[]);let m=e=>{d.current&&!d.current.contains(e.target)&&c(!1)};return(0,t.jsxs)("div",{className:"town-input__container",children:[(0,t.jsxs)("label",{htmlFor:`${r}Input`,className:"town-input__label",children:[t.jsx("span",{children:"*"}),"towns"===r?"Город":"Отделение почты"]}),(0,t.jsxs)("div",{className:"town-input__input-box",children:[t.jsx("input",{className:"town-input__input",type:"text",id:`${r}Input`,value:a,onChange:e=>{s(e.target.value),l(e.target.value),c(!0)},placeholder:"towns"===r?"Город доставки":"Отделение почты"}),"filials"===r&&t.jsx(n(),{src:x,alt:"",className:"town-input__map-icon",onClick:()=>{c(!o)}})]}),"towns"===r&&t.jsx("div",{className:"town-input__5-buttons",children:_.map((e,r)=>t.jsx("button",{className:"town-input__5-buttons-item",onClick:()=>{u(e)},children:e},r))}),o&&t.jsx("ul",{ref:d,className:"town-input__dropdown",children:p.map((e,r)=>t.jsx("li",{className:"town-input__dropdown-item",onClick:()=>u(e),children:e},r))})]})},j={src:"/_next/static/media/check-icon.49932854.svg",height:9,width:10,blurWidth:0,blurHeight:0};function b(){let e=[{label:`Корзина`,href:"/basket",active:!1},{label:`Оформление заказа`,href:"/order",active:!0}],[r,s]=(0,i.useState)(!1),l=(0,d.CG)(e=>e.basketReducer.products),[o,x]=(0,i.useState)(""),[b,N]=(0,i.useState)(!1),[f,w]=(0,i.useState)(""),[g,y]=(0,i.useState)(""),[k,A]=(0,i.useState)(""),[q,E]=(0,i.useState)("+380"+k);(0,i.useEffect)(()=>{E("+380"+k)},[k]);let[S,P]=(0,i.useState)(""),[D,C]=(0,i.useState)(""),[Z,F]=(0,i.useState)(""),[V,$]=(0,i.useState)(""),[I,M]=(0,i.useState)(""),[G,L]=(0,i.useState)(""),T=l.map(e=>({name:e.name,price:e.price,photo_url:e.photo_url})),R=JSON.stringify(T[0]),O=async()=>{try{if(console.log("processing"),s(!0),!R){alert("There are no chosen products in your basket");return}let e={data:{first_name:f,last_name:g,tel:q,delivery:Z,payment:V,town:I,filial:G,chosen_product:R}};D&&(e.data.comment=D),S&&(e.data.email=S);let r=await a.Z.post("https://noutparts-strapi.onrender.com/api/orders",e),t=new Date().toLocaleString("en-GB");x(t),z(!0),console.log("Response Info:",r)}catch(e){console.log("info creation error: ",e)}finally{s(!1)}},[W,z]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{W?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),document.body.style.overflow="auto"}},[W]);let[B,H]=(0,i.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[r&&t.jsx("div",{className:"order-processing__background",children:t.jsx(p.Z,{classname:"order-processing__spinner",white:!0})}),t.jsx("div",{className:"breadcrumb-all-page__wrapper",children:t.jsx("div",{className:"breadcrumb-all-page",children:t.jsx(u.Z,{breadcrumbs:e,classname:"product__breadcrumbs"})})}),W&&t.jsx("div",{className:"order-popup__wrapper",children:(0,t.jsxs)("div",{className:"order-popup",children:[(0,t.jsxs)("div",{className:"order-popup__top",children:[t.jsx("div",{className:"order-popup__check",children:t.jsx("div",{className:"order-popup__check-inner",children:t.jsx(n(),{src:j,alt:"checkIcon",className:"order-popup__check-icon"})})}),(0,t.jsxs)("div",{className:"order-popup__titles",children:[t.jsx("div",{className:"order-popup__title",children:"Спасибо!"}),t.jsx("div",{className:"order-popup__undertitle",children:"Ваш заказ принят, мы свяжемся с Вами в ближайшее время"})]})]}),(0,t.jsxs)("div",{className:"order-popup__time",children:["Время заказа: ",o]}),(0,t.jsxs)("div",{className:"order-popup__contents",children:[(0,t.jsxs)("div",{className:"order-popup__col",children:[t.jsx("div",{className:"order-popup__col-heading",children:"Детали заказа"}),(0,t.jsxs)("div",{className:"order-popup__col-rows",children:[(0,t.jsxs)("div",{className:"order-popup__row",children:[f," ",g]}),t.jsx("div",{className:"order-popup__row",children:q}),t.jsx("div",{className:"order-popup__row",children:S||"No email"})]})]}),(0,t.jsxs)("div",{className:"order-popup__col",children:[t.jsx("div",{className:"order-popup__col-heading",children:"Адрес доставки"}),(0,t.jsxs)("div",{className:"order-popup__col-rows",children:[t.jsx("div",{className:"order-popup__row",children:I}),(0,t.jsxs)("div",{className:"order-popup__row",children:[Z,", ",G]}),t.jsx("div",{className:"order-popup__row",children:V})]})]}),t.jsx(c(),{href:"/",children:t.jsx("div",{className:"order-popup__button",children:"На главную"})})]})]})}),t.jsx("div",{className:"order__wrapper",children:(0,t.jsxs)("div",{className:"order",children:[t.jsx("div",{className:"order__title",children:"Оформление заказа"}),(0,t.jsxs)("div",{className:"order__main",children:[(0,t.jsxs)("div",{className:"order__block",children:[(0,t.jsxs)("div",{className:"order__block-head",children:[t.jsx("div",{className:"order__num",children:"1"}),"Контактные данные"]}),(0,t.jsxs)("div",{className:"order__block-content",children:[(0,t.jsxs)("div",{className:"order__left",children:[(0,t.jsxs)("div",{className:"order__small-inputs",children:[t.jsx(_.Z,{type:"text",placeholder:"Имя",label:"Имя",setValue:w}),t.jsx(_.Z,{type:"text",placeholder:"Фамилия",label:"Фамилия",setValue:y})]}),t.jsx(_.Z,{type:"tel",placeholder:"Номер телефона",label:"Номер телефона",setValue:A}),t.jsx(_.Z,{type:"email",placeholder:"E-mail почта (необязательно)",label:"E-mail почта (необязательно)",setValue:P})]}),t.jsx("div",{className:"order__right",children:t.jsx(m.Z,{label:"Комментарий (необязательно)",setValue:C})})]})]}),t.jsx("div",{className:"order__line"}),(0,t.jsxs)("div",{className:"order__block",children:[(0,t.jsxs)("div",{className:"order__block-head",children:[t.jsx("div",{className:"order__num",children:"2"}),"Адрес доставки и способ оплаты"]}),(0,t.jsxs)("div",{className:"order__block-content wide",children:[(0,t.jsxs)("div",{className:"order__left wide",children:[t.jsx(v,{data:["Town 1","Town 2","Town 3","Town 4"],type:"towns",setValue:M}),t.jsx(h,{texts:["Новая почта","Укр. почта"],type:"row",setChosenRadio:F,heading:"Куда отправляем?"}),t.jsx(v,{data:["Filial 1","Filial 2","Filial 3","Filial 4"],type:"filials",setValue:L})]}),(0,t.jsxs)("div",{className:"order__right",children:[t.jsx(h,{texts:["Безналичный расчёт","Оплата наличными"],descriptions:["Оплата картой онлайн","При получении товара"],type:"col",setChosenRadio:$}),(0,t.jsxs)("div",{className:"order__buttons-container",children:[(0,t.jsxs)("div",{className:"order__user-agreement",onClick:()=>{N(!b)},children:[t.jsx("div",{className:"order__user-agreement-radio",children:t.jsx(n(),{className:`order__user-agreement-radio-arrow ${b&&"active"}`,src:j,alt:"radioArrow"})}),(0,t.jsxs)("div",{className:"order__user-agreement-text",children:["Подтверждая заказ я принимаю ",t.jsx("span",{children:"условия пользователя"})]})]}),t.jsx("button",{className:"order__buy-button",onClick:()=>{f&&g&&k&&Z&&V&&I&&G&&b?O():H("Please fill in all required fields.")},children:"Заказ подтверждаю"}),B&&t.jsx("div",{className:"order__error-message",children:B})]})]})]})]})]})]})})]})}},21735:(e,r,s)=>{"use strict";s.d(r,{Z:()=>a});var t=s(53854);s(34218),s(13621);let a=({classname:e,white:r=!1})=>t.jsx("div",{className:`${e} spinner ${r?"spinner_white":""}`})},66933:(e,r,s)=>{"use strict";s.d(r,{Z:()=>c});var t=s(53854),a=s(29395),i=s(75548),l=s.n(i),n=s(95790),o=s(15981);function c({breadcrumbs:e,classname:r=""}){return t.jsx("nav",{"aria-label":"Breadcrumb",className:`${r} breadcrumbs`,children:(0,t.jsxs)("ul",{className:"breadcrumbs__ul",children:[t.jsx("li",{className:"breadcrumbs__li",children:(0,t.jsxs)(l(),{href:"/",children:[t.jsx(o.Z,{id:"home-icon"}),t.jsx("span",{className:"breadcrumbs__separator",children:"/"})]})},(0,n.Z)()),e.map((r,s)=>(0,t.jsxs)("li",{"aria-current":r.active,className:(0,a.W)("breadcrumbs__li",r.active?"breadcrumbs__li_active":""),children:[t.jsx(l(),{href:r.href,children:r.label}),s<e.length-1?t.jsx("span",{className:"breadcrumbs__separator",children:"/"}):null]},r.href))]})})}s(52407)},95790:(e,r,s)=>{"use strict";let t,a;s.d(r,{Z:()=>p});var i=s(6113),l=s.n(i);let n=new Uint8Array(256),o=n.length,c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));let d=0,u=0,p=function(e,r,s){let i=r&&s||0,p=r||Array(16),_=(e=e||{}).node||t,m=void 0!==e.clockseq?e.clockseq:a;if(null==_||null==m){let r=e.random||(e.rng||function(){return o>n.length-16&&(l().randomFillSync(n),o=0),n.slice(o,o+=16)})();null==_&&(_=t=[1|r[0],r[1],r[2],r[3],r[4],r[5]]),null==m&&(m=a=(r[6]<<8|r[7])&16383)}let h=void 0!==e.msecs?e.msecs:Date.now(),x=void 0!==e.nsecs?e.nsecs:u+1,v=h-d+(x-u)/1e4;if(v<0&&void 0===e.clockseq&&(m=m+1&16383),(v<0||h>d)&&void 0===e.nsecs&&(x=0),x>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");d=h,u=x,a=m,h+=122192928e5;let j=((268435455&h)*1e4+x)%4294967296;p[i++]=j>>>24&255,p[i++]=j>>>16&255,p[i++]=j>>>8&255,p[i++]=255&j;let b=h/4294967296*1e4&268435455;p[i++]=b>>>8&255,p[i++]=255&b,p[i++]=b>>>24&15|16,p[i++]=b>>>16&255,p[i++]=m>>>8|128,p[i++]=255&m;for(let e=0;e<6;++e)p[i+e]=_[e];return r||function(e,r=0){return c[e[r+0]]+c[e[r+1]]+c[e[r+2]]+c[e[r+3]]+"-"+c[e[r+4]]+c[e[r+5]]+"-"+c[e[r+6]]+c[e[r+7]]+"-"+c[e[r+8]]+c[e[r+9]]+"-"+c[e[r+10]]+c[e[r+11]]+c[e[r+12]]+c[e[r+13]]+c[e[r+14]]+c[e[r+15]]}(p)}},45814:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c});var t=s(4656);s(3542);var a=s(95153);let i=(0,a.createProxy)(String.raw`D:\Front-End\AVADA_MEDIA\noutparts-ssr\app\common\components\Order\Order.tsx`),{__esModule:l,$$typeof:n}=i,o=i.default;function c(){return t.jsx(t.Fragment,{children:t.jsx(o,{})})}},38934:()=>{},66353:()=>{},13621:()=>{},52407:()=>{},92415:()=>{},29395:(e,r,s)=>{"use strict";function t(){for(var e,r,s=0,t="";s<arguments.length;)(e=arguments[s++])&&(r=function e(r){var s,t,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r))for(s=0;s<r.length;s++)r[s]&&(t=e(r[s]))&&(a&&(a+=" "),a+=t);else for(s in r)r[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(t&&(t+=" "),t+=r);return t}s.d(r,{W:()=>t,Z:()=>a});let a=t}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[271,197,707],()=>s(54794));module.exports=t})();