(()=>{var e={};e.id=778,e.ids=[778],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},47249:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var t=r(67096),a=r(16132),i=r(37284),l=r.n(i),o=r(32564),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(s,n);let c=["",{children:["order",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,45814)),"D:\\Projects\\noutparts-ssr\\app\\order\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,62872)),"D:\\Projects\\noutparts-ssr\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,8295)),"D:\\Projects\\noutparts-ssr\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Projects\\noutparts-ssr\\app\\order\\page.tsx"],u="/order/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/order/page",pathname:"/order",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},39781:(e,s,r)=>{Promise.resolve().then(r.bind(r,52320))},52320:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>b});var t=r(53854),a=r(83847),i=r(34218);r(38934);var l=r(41956),o=r.n(l),n=r(67490),c=r.n(n),d=r(69878),u=r(66933),p=r(21735),m=r(77754),_=r(51830);r(92415);let h=({texts:e=[],descriptions:s=[],type:r="row",setChosenRadio:a,heading:l})=>{let[o,n]=(0,i.useState)(null),c=s=>{o!==s&&(n(s),a(e[s]))};return(0,t.jsxs)("div",{className:"basic-radio__container",children:[l&&(0,t.jsxs)("div",{className:"basic-radio__heading",children:[t.jsx("span",{children:"*"}),l]}),t.jsx("div",{className:`basic-radio ${"row"===r?"row":"col"}`,children:e?e.map((e,r)=>(0,t.jsxs)("div",{className:`basic-radio__item ${o===r?"active":""}`,onClick:()=>c(r),children:[(0,t.jsxs)("div",{className:"basic-radio__text-block",children:[t.jsx("div",{className:`basic-radio__radio-name ${s[r]?"with-desc":""}`,children:e}),s[r]&&t.jsx("div",{className:"basic-radio__radio-description",children:s[r]})]}),t.jsx("div",{className:`basic-radio__radio-circle outer ${o===r?"active":""}`,children:t.jsx("div",{className:`basic-radio__radio-circle inner ${o===r?"active":""}`})})]},r)):"There are no redios provided in props"})]})},x={src:"/_next/static/media/map-icon.d22c49bb.svg",height:20,width:16,blurWidth:0,blurHeight:0};r(66353);let v=({data:e,type:s,setValue:r})=>{let[a,l]=(0,i.useState)(""),[n,c]=(0,i.useState)(!1),d=(0,i.useRef)(null),u=e=>{r(e),l(e),c(!1)},p=""===a?e:e.filter(e=>e.toLowerCase().includes(a.toLowerCase())),m=e.slice(0,5);(0,i.useEffect)(()=>(document.addEventListener("click",_),()=>{document.removeEventListener("click",_)}),[]);let _=e=>{d.current&&!d.current.contains(e.target)&&c(!1)};return(0,t.jsxs)("div",{className:"town-input__container",children:[(0,t.jsxs)("label",{htmlFor:`${s}Input`,className:"town-input__label",children:[t.jsx("span",{children:"*"}),"towns"===s?"Город":"Отделение почты"]}),(0,t.jsxs)("div",{className:"town-input__input-box",children:[t.jsx("input",{className:"town-input__input",type:"text",id:`${s}Input`,value:a,onChange:e=>{r(e.target.value),l(e.target.value),c(!0)},placeholder:"towns"===s?"Город доставки":"Отделение почты"}),"filials"===s&&t.jsx(o(),{src:x,alt:"",className:"town-input__map-icon",onClick:()=>{c(!n)}})]}),"towns"===s&&t.jsx("div",{className:"town-input__5-buttons",children:m.map((e,s)=>t.jsx("button",{className:"town-input__5-buttons-item",onClick:()=>{u(e)},children:e},s))}),n&&t.jsx("ul",{ref:d,className:"town-input__dropdown",children:p.map((e,s)=>t.jsx("li",{className:"town-input__dropdown-item",onClick:()=>u(e),children:e},s))})]})},j={src:"/_next/static/media/check-icon.49932854.svg",height:9,width:10,blurWidth:0,blurHeight:0};function b(){let e=[{label:`Корзина`,href:"/basket",active:!1},{label:`Оформление заказа`,href:"/order",active:!0}],[s,r]=(0,i.useState)(!1),l=(0,d.CG)(e=>e.basketReducer.products),[n,x]=(0,i.useState)(""),[b,N]=(0,i.useState)(!1),[f,w]=(0,i.useState)(""),[g,y]=(0,i.useState)(""),[k,q]=(0,i.useState)(""),[P,S]=(0,i.useState)("+380"+k);(0,i.useEffect)(()=>{S("+380"+k)},[k]);let[C,E]=(0,i.useState)(""),[Z,$]=(0,i.useState)(""),[A,F]=(0,i.useState)(""),[G,D]=(0,i.useState)(""),[L,T]=(0,i.useState)(""),[V,R]=(0,i.useState)(""),I=l.map(e=>({name:e.name,price:e.price,photo_url:e.photo_url})),M=JSON.stringify(I[0]),O=async()=>{try{if(console.log("processing"),r(!0),!M){alert("There are no chosen products in your basket");return}let e={data:{first_name:f,last_name:g,tel:P,delivery:A,payment:G,town:L,filial:V,chosen_product:M}};Z&&(e.data.comment=Z),C&&(e.data.email=C);let s=await a.Z.post("http://localhost:1337/api/orders",e),t=new Date().toLocaleString("en-GB");x(t),z(!0),console.log("Response Info:",s)}catch(e){console.log("info creation error: ",e)}finally{r(!1)}},[W,z]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{W?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),document.body.style.overflow="auto"}},[W]);let[B,H]=(0,i.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[s&&t.jsx("div",{className:"order-processing__background",children:t.jsx(p.Z,{classname:"order-processing__spinner"})}),t.jsx("div",{className:"breadcrumb-all-page__wrapper",children:t.jsx("div",{className:"breadcrumb-all-page",children:t.jsx(u.Z,{breadcrumbs:e,classname:"product__breadcrumbs"})})}),W&&t.jsx("div",{className:"order-popup__wrapper",children:(0,t.jsxs)("div",{className:"order-popup",children:[(0,t.jsxs)("div",{className:"order-popup__top",children:[t.jsx("div",{className:"order-popup__check",children:t.jsx("div",{className:"order-popup__check-inner",children:t.jsx(o(),{src:j,alt:"checkIcon",className:"order-popup__check-icon"})})}),(0,t.jsxs)("div",{className:"order-popup__titles",children:[t.jsx("div",{className:"order-popup__title",children:"Спасибо!"}),t.jsx("div",{className:"order-popup__undertitle",children:"Ваш заказ принят, мы свяжемся с Вами в ближайшее время"})]})]}),(0,t.jsxs)("div",{className:"order-popup__time",children:["Время заказа: ",n]}),(0,t.jsxs)("div",{className:"order-popup__contents",children:[(0,t.jsxs)("div",{className:"order-popup__col",children:[t.jsx("div",{className:"order-popup__col-heading",children:"Детали заказа"}),(0,t.jsxs)("div",{className:"order-popup__col-rows",children:[(0,t.jsxs)("div",{className:"order-popup__row",children:[f," ",g]}),t.jsx("div",{className:"order-popup__row",children:P}),t.jsx("div",{className:"order-popup__row",children:C||"No email"})]})]}),(0,t.jsxs)("div",{className:"order-popup__col",children:[t.jsx("div",{className:"order-popup__col-heading",children:"Адрес доставки"}),(0,t.jsxs)("div",{className:"order-popup__col-rows",children:[t.jsx("div",{className:"order-popup__row",children:L}),(0,t.jsxs)("div",{className:"order-popup__row",children:[A,", ",V]}),t.jsx("div",{className:"order-popup__row",children:G})]})]}),t.jsx(c(),{href:"/",children:t.jsx("div",{className:"order-popup__button",children:"На главную"})})]})]})}),t.jsx("div",{className:"order__wrapper",children:(0,t.jsxs)("div",{className:"order",children:[t.jsx("div",{className:"order__title",children:"Оформление заказа"}),(0,t.jsxs)("div",{className:"order__main",children:[(0,t.jsxs)("div",{className:"order__block",children:[(0,t.jsxs)("div",{className:"order__block-head",children:[t.jsx("div",{className:"order__num",children:"1"}),"Контактные данные"]}),(0,t.jsxs)("div",{className:"order__block-content",children:[(0,t.jsxs)("div",{className:"order__left",children:[(0,t.jsxs)("div",{className:"order__small-inputs",children:[t.jsx(m.Z,{type:"text",placeholder:"Имя",label:"Имя",setValue:w}),t.jsx(m.Z,{type:"text",placeholder:"Фамилия",label:"Фамилия",setValue:y})]}),t.jsx(m.Z,{type:"tel",placeholder:"Номер телефона",label:"Номер телефона",setValue:q}),t.jsx(m.Z,{type:"email",placeholder:"E-mail почта (необязательно)",label:"E-mail почта (необязательно)",setValue:E})]}),t.jsx("div",{className:"order__right",children:t.jsx(_.Z,{label:"Комментарий (необязательно)",setValue:$})})]})]}),t.jsx("div",{className:"order__line"}),(0,t.jsxs)("div",{className:"order__block",children:[(0,t.jsxs)("div",{className:"order__block-head",children:[t.jsx("div",{className:"order__num",children:"2"}),"Адрес доставки и способ оплаты"]}),(0,t.jsxs)("div",{className:"order__block-content wide",children:[(0,t.jsxs)("div",{className:"order__left wide",children:[t.jsx(v,{data:["Town 1","Town 2","Town 3","Town 4"],type:"towns",setValue:T}),t.jsx(h,{texts:["Новая почта","Укр. почта"],type:"row",setChosenRadio:F,heading:"Куда отправляем?"}),t.jsx(v,{data:["Filial 1","Filial 2","Filial 3","Filial 4"],type:"filials",setValue:R})]}),(0,t.jsxs)("div",{className:"order__right",children:[t.jsx(h,{texts:["Безналичный расчёт","Оплата наличными"],descriptions:["Оплата картой онлайн","При получении товара"],type:"col",setChosenRadio:D}),(0,t.jsxs)("div",{className:"order__buttons-container",children:[(0,t.jsxs)("div",{className:"order__user-agreement",onClick:()=>{N(!b)},children:[t.jsx("div",{className:"order__user-agreement-radio",children:t.jsx(o(),{className:`order__user-agreement-radio-arrow ${b&&"active"}`,src:j,alt:"radioArrow"})}),(0,t.jsxs)("div",{className:"order__user-agreement-text",children:["Подтверждая заказ я принимаю ",t.jsx("span",{children:"условия пользователя"})]})]}),t.jsx("button",{className:"order__buy-button",onClick:()=>{f&&g&&k&&A&&G&&L&&V&&b?O():H("Please fill in all required fields.")},children:"Заказ подтверждаю"}),B&&t.jsx("div",{className:"order__error-message",children:B})]})]})]})]})]})]})})]})}},21735:(e,s,r)=>{"use strict";r.d(s,{Z:()=>a});var t=r(53854);r(34218),r(13621);let a=({classname:e,white:s=!1})=>t.jsx("div",{className:`${e} spinner ${s?"spinner_white":""}`})},66933:(e,s,r)=>{"use strict";r.d(s,{Z:()=>c});var t=r(53854),a=r(29395),i=r(75548),l=r.n(i),o=r(95790),n=r(15981);function c({breadcrumbs:e,classname:s=""}){return t.jsx("nav",{"aria-label":"Breadcrumb",className:`${s} breadcrumbs`,children:(0,t.jsxs)("ul",{className:"breadcrumbs__ul",children:[t.jsx("li",{className:"breadcrumbs__li",children:(0,t.jsxs)(l(),{href:"/",children:[t.jsx(n.Z,{id:"home-icon"}),t.jsx("span",{className:"breadcrumbs__separator",children:"/"})]})},(0,o.Z)()),e.map((s,r)=>(0,t.jsxs)("li",{"aria-current":s.active,className:(0,a.W)("breadcrumbs__li",s.active?"breadcrumbs__li_active":""),children:[t.jsx(l(),{href:s.href,children:s.label}),r<e.length-1?t.jsx("span",{className:"breadcrumbs__separator",children:"/"}):null]},s.href))]})})}r(52407)},95790:(e,s,r)=>{"use strict";let t,a;r.d(s,{Z:()=>p});var i=r(6113),l=r.n(i);let o=new Uint8Array(256),n=o.length,c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));let d=0,u=0,p=function(e,s,r){let i=s&&r||0,p=s||Array(16),m=(e=e||{}).node||t,_=void 0!==e.clockseq?e.clockseq:a;if(null==m||null==_){let s=e.random||(e.rng||function(){return n>o.length-16&&(l().randomFillSync(o),n=0),o.slice(n,n+=16)})();null==m&&(m=t=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==_&&(_=a=(s[6]<<8|s[7])&16383)}let h=void 0!==e.msecs?e.msecs:Date.now(),x=void 0!==e.nsecs?e.nsecs:u+1,v=h-d+(x-u)/1e4;if(v<0&&void 0===e.clockseq&&(_=_+1&16383),(v<0||h>d)&&void 0===e.nsecs&&(x=0),x>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");d=h,u=x,a=_,h+=122192928e5;let j=((268435455&h)*1e4+x)%4294967296;p[i++]=j>>>24&255,p[i++]=j>>>16&255,p[i++]=j>>>8&255,p[i++]=255&j;let b=h/4294967296*1e4&268435455;p[i++]=b>>>8&255,p[i++]=255&b,p[i++]=b>>>24&15|16,p[i++]=b>>>16&255,p[i++]=_>>>8|128,p[i++]=255&_;for(let e=0;e<6;++e)p[i+e]=m[e];return s||function(e,s=0){return c[e[s+0]]+c[e[s+1]]+c[e[s+2]]+c[e[s+3]]+"-"+c[e[s+4]]+c[e[s+5]]+"-"+c[e[s+6]]+c[e[s+7]]+"-"+c[e[s+8]]+c[e[s+9]]+"-"+c[e[s+10]]+c[e[s+11]]+c[e[s+12]]+c[e[s+13]]+c[e[s+14]]+c[e[s+15]]}(p)}},45814:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var t=r(4656);r(3542);var a=r(95153);let i=(0,a.createProxy)(String.raw`D:\Projects\noutparts-ssr\app\common\components\Order\Order.tsx`),{__esModule:l,$$typeof:o}=i,n=i.default;function c(){return t.jsx(t.Fragment,{children:t.jsx(n,{})})}},38934:()=>{},66353:()=>{},13621:()=>{},52407:()=>{},92415:()=>{},29395:(e,s,r)=>{"use strict";function t(){for(var e,s,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(s=function e(s){var r,t,a="";if("string"==typeof s||"number"==typeof s)a+=s;else if("object"==typeof s){if(Array.isArray(s))for(r=0;r<s.length;r++)s[r]&&(t=e(s[r]))&&(a&&(a+=" "),a+=t);else for(r in s)s[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(t&&(t+=" "),t+=s);return t}r.d(s,{W:()=>t,Z:()=>a});let a=t}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[271,197,546],()=>r(47249));module.exports=t})();