(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{9174:function(e,s,i){Promise.resolve().then(i.t.bind(i,6891,23)),Promise.resolve().then(i.bind(i,1605)),Promise.resolve().then(i.bind(i,5)),Promise.resolve().then(i.bind(i,4674)),Promise.resolve().then(i.bind(i,6489)),Promise.resolve().then(i.bind(i,6128)),Promise.resolve().then(i.bind(i,7895)),Promise.resolve().then(i.t.bind(i,3303,23)),Promise.resolve().then(i.t.bind(i,7440,23)),Promise.resolve().then(i.t.bind(i,918,23)),Promise.resolve().then(i.t.bind(i,4388,23)),Promise.resolve().then(i.bind(i,7346)),Promise.resolve().then(i.bind(i,3382)),Promise.resolve().then(i.t.bind(i,413,23)),Promise.resolve().then(i.t.bind(i,8326,23)),Promise.resolve().then(i.bind(i,1647)),Promise.resolve().then(i.bind(i,3685)),Promise.resolve().then(i.bind(i,8410))},5:function(e,s,i){"use strict";i.r(s);var t=i(7437),r=i(2265),a=i(4831),c=i(2138);s.default=e=>{let{category:s,id:i}=e,n=(0,a.TL)(),l={category:s,id:i};return(0,r.useEffect)(()=>{n((0,c.iq)(l))},[]),(0,t.jsx)(t.Fragment,{})}},4674:function(e,s,i){"use strict";i.r(s);var t=i(7437),r=i(2265),a=i(4890);i(7440);var c=i(6691),n=i.n(c),l=i(6750),d=i(4831),o=i(4688),u=i(4420),m=i(2945),h=i(4825);s.default=e=>{let{category:s,id:i,tag:c,price:v,discount:_,product:p}=e,b=(0,d.TL)(),[x,g]=(0,r.useState)(1),[f,j]=(0,r.useState)(""),N=(e,s)=>{e.photo_url=e.photo.data[0].attributes.url;for(let i=0;i<s;i++)b((0,o.gK)(e))},w=e=>{b((0,u.p)(e))},k=(0,d.CG)(e=>e.basketReducer.products),P=(0,d.CG)(e=>e.favsReducer.products),y=k.find(e=>e.name===p.name),C=P.find(e=>e.name===p.name),Z=()=>{g(x+1)},S=()=>{x>1&&g(x-1)},B=e=>{j(e)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"product-interactive-elems",children:[(0,t.jsxs)("div",{className:"product-interactive-elems__price-fav",children:[(0,t.jsxs)("div",{className:"product-interactive-elems__price-container",children:["discount"===c&&(0,t.jsxs)("div",{className:"product-interactive-elems__discount",children:[_," ₴"]}),(0,t.jsxs)("div",{className:"product-interactive-elems__price",children:[v*x," грн"]})]}),(0,t.jsxs)("div",{className:"product-interactive-elems__favs-container",onClick:()=>{w(p)},children:[(0,t.jsx)("div",{className:"product-interactive-elems__fav-box",children:C?(0,t.jsx)(a.Z,{id:"header-heart-sign"}):(0,t.jsx)(a.Z,{id:"features-fav-sign"})}),"В избранное"]})]}),(0,t.jsxs)("div",{className:"product-interactive-elems__counter-buy",children:[(0,t.jsxs)("div",{className:"product-interactive-elems__counter",children:[(0,t.jsx)(n(),{className:"product-interactive-elems__counter-icon",alt:"product-hero__image",src:m.Z,onClick:()=>{S()}}),(0,t.jsx)("div",{className:"product-interactive-elems__line"}),x,(0,t.jsx)("div",{className:"product-interactive-elems__line"}),(0,t.jsx)(n(),{className:"product-interactive-elems__counter-icon",alt:"product-hero__image",src:h.Z,onClick:()=>{Z()}})]}),(0,t.jsxs)("button",{className:"product-interactive-elems__buy-button",onClick:()=>{N(p,x)},children:[y?"Add more":"Купить",(0,t.jsx)(a.Z,{id:"basket-icon"})]})]}),(0,t.jsxs)("div",{className:"product-interactive-elems__buy-now",children:[(0,t.jsx)(l.HH,{type:"tel",displayType:"input",format:"+(380) | ## ### ####",valueIsNumericString:!0,allowEmptyFormatting:!0,mask:"_",className:"product-interactive-elems__input",onValueChange:(e,s)=>{B(e.value)}}),(0,t.jsx)("button",{className:"product-interactive-elems__one-click-button",children:"Купить в один клик"})]})]})})}},6489:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return c}});var t=i(7437);i(2265),i(4388);var r=i(4831),a=i(4688);function c(e){let{firstObj:s,secondObj:i}=e,c=(0,r.TL)(),n=()=>{s.photo_url=s.photo.data[0].attributes.url,i.photo_url=i.photo.data[0].attributes.url,c((0,a.gK)(s)),c((0,a.gK)(i))},l=(0,r.CG)(e=>e.basketReducer.products),d=l.find(e=>e.name===s.name),o=l.find(e=>e.name===i.name);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"discount-pair__buy-buttom",onClick:()=>{n()},children:d&&o?"Купить еще комплект":"Купить комплект"})})}},6128:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return d}});var t=i(7437),r=i(2265),a=i(6691),c=i.n(a),n=i(8278),l=i(1533);function d(e){let{images:s}=e,[i,a]=(0,r.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.tq,{spaceBetween:10,thumbs:{swiper:i&&!i.destroyed?i:null},modules:[l.o3],className:"images-slider",children:null==s?void 0:s.map((e,s)=>(0,t.jsx)(n.o5,{className:"images-slider__slide",children:(0,t.jsx)(c(),{src:e.attributes.url,height:e.attributes.height,width:e.attributes.width,alt:"Product image ".concat(s),className:"images-slider__image"})},e.id))}),(0,t.jsx)(n.tq,{onSwiper:a,spaceBetween:10,slidesPerView:4,modules:[l.o3],className:"images-slider__thumb",children:null==s?void 0:s.map((e,s)=>(0,t.jsx)(n.o5,{className:"images-slider__slide-thumb",children:(0,t.jsx)(c(),{src:e.attributes.url,height:e.attributes.height,width:e.attributes.width,alt:"Product image ".concat(s),className:"images-slider__image-thumb"})},e.id))})]})}i(8020),i(8691)},7895:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return j}});var t=i(7437),r=i(2265);i(3222);var a=i(6691),c=i.n(a),n=i(4831),l=i(4890);i(6286);var d=i(4033),o=i(4688),u=i(4420),m=i(3009),h=i(6225),v={src:"/_next/static/media/white-heart.19d5c42b.svg",height:18,width:20,blurWidth:0,blurHeight:0},_=e=>{let{product:s,isBought:i,isFav:r}=e,a=(0,n.TL)();(0,d.useRouter)();let _=s.name.length>60?"".concat(s.name.slice(0,40),"..."):s.name,p=e=>{a((0,o.gK)(e))},b=e=>{a((0,u.p)(e))};return(0,t.jsxs)("div",{className:"similar-products-card",children:[(0,t.jsx)("div",{className:"similar-products-card__fav-button ".concat(r?"active":""),onClick:()=>{b(s)},children:r?(0,t.jsx)(c(),{src:v,alt:"whiteHeart",className:"white-heart"}):(0,t.jsx)(l.Z,{id:"features-fav-sign"})}),(0,t.jsx)("div",{className:"similar-products-card__image-wrapper",children:s.photo_url?(0,t.jsx)(c(),{fill:!0,src:s.photo_url,alt:"photo_url",className:"similar-products-card__image",sizes:"(max-width: 600px) 147px, 230px"}):(0,t.jsx)(c(),{fill:!0,src:h.Z,alt:"photo_url",className:"similar-products-card__image"})}),(0,t.jsx)("div",{className:"similar-products-card__name",children:_}),(0,t.jsxs)("div",{className:"similar-products-card__price",children:[null!==s.discount&&(0,t.jsx)("div",{className:"similar-products-card__discount",children:(0,t.jsx)(m.Z,{amount:s.discount})}),(0,t.jsxs)("div",{className:"similar-products-card__price-text",children:[s.price," грн"]})]}),(0,t.jsxs)("div",{className:"similar-products-card__buttons",children:[(0,t.jsxs)("div",{className:"similar-products-card__basket-button",onClick:()=>{p(s)},children:[i?"Add more":"Купить",(0,t.jsx)(l.Z,{id:"header-basket-sign"})]}),(0,t.jsx)("div",{className:"similar-products-card__buy-button",children:"Купить в 1 клик"})]})]})},p=i(4646),b=i(4926),x=i(8278),g=i(1533);i(8020);var f=i(9059),j=e=>{let{productType:s}=e,[i,a]=(0,r.useState)([]),l=(0,n.CG)(e=>e.basketReducer.products),d=(0,n.CG)(e=>e.favsReducer.products);(0,r.useEffect)(()=>{let e=async()=>{try{let e=await (0,b.sy)(s);a(e)}catch(e){console.error("Error getting product data:",e)}};e()},[s,b.sy,a]);let o=(0,r.useRef)(),[u,m]=(0,r.useState)(!1),[h,v]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{var e,s;m(null===(e=o.current)||void 0===e?void 0:e.isEnd),v(null===(s=o.current)||void 0===s?void 0:s.isBeginning)};e(),setInterval(e,500)},[o]),(0,t.jsx)("div",{className:"similar-products__wrapper",children:(0,t.jsxs)("div",{className:"similar-products",children:[(0,t.jsxs)("div",{className:"similar-products__top",children:[(0,t.jsx)("div",{className:"similar-products__title",children:"Похожие товары"}),(0,t.jsxs)("div",{className:"similar-products__nav",children:[(0,t.jsx)("button",{onClick:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.slidePrev()},className:"similar-products__nav-button ".concat(h?"disabled":""),children:(0,t.jsx)(c(),{src:f.Z,alt:"swiperArrow",className:"similar-products__nav-icon prev"})}),(0,t.jsx)("button",{onClick:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.slideNext()},className:"similar-products__nav-button ".concat(u?"disabled":""),children:(0,t.jsx)(c(),{src:f.Z,alt:"swiperArrow",className:"similar-products__nav-icon"})})]})]}),(0,t.jsxs)("div",{className:"similar-products__content",children:[i.length>0?(0,t.jsx)(x.tq,{spaceBetween:40,slidesPerView:3,breakpoints:{5:{slidesPerView:"auto",spaceBetween:24},600:{slidesPerView:"auto",spaceBetween:30},1440:{slidesPerView:3,spaceBetween:40}},modules:[g.W_],onBeforeInit:e=>{o.current=e},className:"similar-products__slider",children:i.map((e,s)=>{let i=l.find(s=>s.name===e.name),r=d.find(s=>s.name===e.name);return(0,t.jsx)(x.o5,{className:"similar-products__slide",children:(0,t.jsx)(_,{product:e,isBought:!!i,isFav:!!r},s)},e.id)})}):(0,t.jsx)(p.Z,{classname:"similar-products__spinner",white:!0}),(0,t.jsx)("div",{className:"similar-products__whitie"})]})]})})}},3382:function(e,s,i){"use strict";i.r(s);var t=i(7437);i(2265),i(7034);var r=i(4890);s.default=e=>{let{type:s}=e;return(0,t.jsxs)("div",{className:"product-availability ".concat("available"===s?"available":"ending"===s?"ending":"outOfStock"===s?"outOfStock":""),children:["available"===s?(0,t.jsx)("div",{className:"product-availability__icon-wrapper green",children:(0,t.jsx)(r.Z,{id:"available-sign"})}):"ending"===s?(0,t.jsx)("div",{className:"product-availability__icon-wrapper orange",children:(0,t.jsx)(r.Z,{id:"ending-sign"})}):"outOfStock"===s?(0,t.jsx)("div",{className:"product-availability__icon-wrapper red",children:(0,t.jsx)(r.Z,{id:"out-of-stock-sign"})}):"no type provided","available"===s?"В наличии":"ending"===s?"Заканчивается":"outOfStock"===s?"Нет в наличии":"no type provided"]})}},7440:function(){},4388:function(){},8691:function(){},918:function(){},6286:function(){},7034:function(){},1647:function(e,s,i){"use strict";i.r(s),s.default={src:"/_next/static/media/big-equals.1973ce3c.svg",height:38,width:61,blurWidth:0,blurHeight:0}},3685:function(e,s,i){"use strict";i.r(s),s.default={src:"/_next/static/media/big-plus.13b25d1e.svg",height:59,width:55,blurWidth:0,blurHeight:0}},8410:function(e,s,i){"use strict";i.r(s),s.default={src:"/_next/static/media/discount-pair-sticker.fa244402.svg",height:96,width:127,blurWidth:0,blurHeight:0}},2945:function(e,s){"use strict";s.Z={src:"/_next/static/media/minus-icon.bd729b7d.svg",height:4,width:19,blurWidth:0,blurHeight:0}},4825:function(e,s){"use strict";s.Z={src:"/_next/static/media/plus-icon.735c2a4c.svg",height:16,width:16,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[326,413,885,750,153,464,971,472,744],function(){return e(e.s=9174)}),_N_E=e.O()}]);