(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{8484:function(e,t,r){Promise.resolve().then(r.t.bind(r,2882,23)),Promise.resolve().then(r.bind(r,7233)),Promise.resolve().then(r.t.bind(r,3303,23)),Promise.resolve().then(r.t.bind(r,6891,23)),Promise.resolve().then(r.bind(r,7346)),Promise.resolve().then(r.t.bind(r,8326,23))},4688:function(e,t,r){"use strict";r.d(t,{gK:function(){return c},kh:function(){return i},lI:function(){return s}});var a=r(663);let n=(0,a.oM)({name:"basketData",initialState:{products:[]},reducers:{addProduct:(e,t)=>{let{photo_url:r,price:a,name:n,id:c,category:i}=t.payload;e.products.push({category:i,name:n,price:a,photo_url:r,id:c})},removeProduct:(e,t)=>{let r=t.payload;-1!==r&&e.products.splice(r,1)},removeProductByCategoryId:(e,t)=>{let{category:r,id:a}=t.payload,n=e.products.findIndex(e=>e.category===r&&e.id===a);-1!==n&&(e.products.splice(n,1),console.log("\uD83D\uDE80 ~ state.products:",e.products))}}}),{addProduct:c,removeProduct:i,removeProductByCategoryId:s}=n.actions;t.ZP=n.reducer},4420:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var a=r(663);let n=(0,a.oM)({name:"favsData",initialState:{products:[]},reducers:{addFavProduct:(e,t)=>{let{id:r,availability:a,category:n,price:c,name:i,discount:s,tag:u,photo_url:d}=t.payload,o=e.products.findIndex(e=>e.id===r&&e.category===n);-1!==o?e.products.splice(o,1):e.products.push({name:i,id:r,availability:a,category:n,price:c,discount:s,tag:u,photo_url:d})}}}),{addFavProduct:c}=n.actions;t.Z=n.reducer},2138:function(e,t,r){"use strict";r.d(t,{iq:function(){return i}});var a=r(663);let n=(0,a.oM)({name:"historyProductsData",initialState:{products:[]},reducers:{addHistoryProduct:(e,t)=>{let{id:r,category:a}=t.payload,n=e.products.findIndex(e=>e.id===r);-1===n&&(e.products.length>=10&&e.products.pop(),e.products.unshift({id:r,category:a}))},removeHistoryProduct:(e,t)=>{let r=t.payload;-1!==r&&e.products.splice(r,1)}}}),{removeHistoryProduct:c,addHistoryProduct:i}=n.actions;t.ZP=n.reducer},6510:function(e,t,r){"use strict";r.d(t,{Cw:function(){return u},Wj:function(){return s},a_:function(){return c},vh:function(){return i}});var a=r(663);let n=(0,a.oM)({name:"filteredData",initialState:{data:{data:[]},queryArr:[],type:""},reducers:{setData:(e,t)=>{e.data=t.payload},setQueryArr:(e,t)=>{e.queryArr=t.payload},setType:(e,t)=>{e.type=t.payload},setDefaultDataAndQueryArr:e=>{e.data={data:[]},e.queryArr=[]}}}),{setData:c,setQueryArr:i,setDefaultDataAndQueryArr:s,setType:u}=n.actions;t.ZP=n.reducer},8099:function(e,t,r){"use strict";r.d(t,{kh:function(){return i},yK:function(){return c}});var a=r(663);let n=(0,a.oM)({name:"searchHistoryData",initialState:{matrix:[],battery:[],hdd:[],keyboard:[],ram:[],"power-unit":[]},reducers:{addProducts:(e,t)=>{let{key:r,products:a}=t.payload;e[r]&&(e[r]=[...e[r],...a])},removeProduct:(e,t)=>{Object.keys(e).forEach(t=>{e[t]=[]})}}}),{addProducts:c,removeProduct:i}=n.actions;t.ZP=n.reducer},4831:function(e,t,r){"use strict";r.d(t,{CG:function(){return v},Dj:function(){return h},TL:function(){return y}});var a=r(7373),n=r(663),c=r(5456),i=r(1267),s=r(3198),u=r(6510),d=r(4688),o=r(8099),l=r(4420),f=r(2138);let m=(0,c.Z)("local"),p=(0,a.UY)({queryReducer:u.ZP,basketReducer:d.ZP,searchReducer:o.ZP,favsReducer:l.Z,historyProductsReducer:f.ZP}),b=(0,i.OJ)({key:"root",storage:m},p),g=(0,n.xC)({reducer:b,middleware:e=>e({serializableCheck:{ignoredActions:[i._P,i.I2,i.E7,i.ex,i.e,i.Nz]}}),devTools:!0}),h=(0,i.p5)(g),y=s.I0,v=s.v9;t.ZP=g},7233:function(e,t,r){"use strict";let a,n,c,i,s,u;r.r(t),r.d(t,{default:function(){return v}});var d=r(7437),o=r(2265);r(7193);var l=r(413),f=r(1396),m=r.n(f),p=r(4831),b=r(6510);function g(e){let{res:t,image:r,query:a,text:n}=e,c=(0,p.TL)();return(0,d.jsxs)("div",{className:"catalogue-item",children:[(0,d.jsx)("div",{className:"catalogue-item__top",children:(0,d.jsxs)(m(),{href:"catalogue/filter-page/".concat(a.match(/^([^\s?]+)(?=\?)/)[0]),children:[(0,d.jsx)("p",{className:"catalogue-item__text",children:n}),(0,d.jsx)("div",{className:"catalogue-item__img-wr",children:(0,d.jsx)(l.Image,{className:"catalogue-item__top_img",fill:!0,sizes:"100vw",priority:!0,src:r,alt:"catalogue-item"})})]})}),(0,d.jsx)("div",{className:"catalogue-item__main",children:(0,d.jsx)("ul",{className:"catalogue-item__main_ul",children:(null==t?void 0:t.data)?t.data.map(e=>(0,d.jsx)(m(),{href:"catalogue/filter-page/".concat(a.match(/^([^\s?]+)(?=\?)/)[0]),onClick:()=>{c((0,b.vh)([{searchParam:"brand",searchParamKeys:[e.attributes.brand]}]))},children:(0,d.jsx)("li",{"data-modal":e.id,className:"catalogue-item__main_li",children:e.attributes.brand},e.id)},e.id)):""})})]})}var h=r(4926),y=r(380),v=()=>{let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(),[f,m]=(0,o.useState)(),[p,b]=(0,o.useState)(),[v,x]=(0,o.useState)(),[P,_]=(0,o.useState)(),[j,D]=(0,o.useState)();return((0,o.useEffect)(()=>{let e=async()=>{let e=await (0,h.MD)("matrices?fields[0]=brand"),r=(0,h.MD)("batteries?fields[0]=brand"),d=(0,h.MD)("hdds?fields[0]=brand"),o=(0,h.MD)("keyboards?fields[0]=brand"),f=(0,h.MD)("rams?fields[0]=brand"),p=(0,h.MD)("power-Supplies?fields[0]=brand");[a,n,c,i,s,u]=await Promise.all([e,r,d,o,f,p]),l(a),m(n),b(c),x(i),_(s),D(u),t(!0)};e()},[]),e)?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{res:r,text:"Матрицы",image:"/img/catalogue/matrix.png",query:"matrices?fields[0]=brand"}),(0,d.jsx)(g,{res:f,text:"Аккумуляторы",image:"/img/catalogue/battery.png",query:"batteries?fields[0]=brand"}),(0,d.jsx)(g,{res:p,text:"Жесткие диски",image:"/img/catalogue/hdd.png",query:"hdds?fields[0]=brand"}),(0,d.jsx)(g,{res:v,text:"Клавиатуры",image:"/img/catalogue/keyboard.png",query:"keyboards?fields[0]=brand"}),(0,d.jsx)(g,{res:P,text:"Оперативная память",image:"/img/catalogue/ram.png",query:"rams?fields[0]=brand"}),(0,d.jsx)(g,{res:j,text:"Блок питания",image:"/img/catalogue/power.png",query:"power-Supplies?fields[0]=brand"})]}):(0,d.jsx)(y.Z,{})}},380:function(e,t,r){"use strict";var a=r(7437);r(2265);var n=r(4646);r(3560),t.Z=()=>(0,a.jsx)("div",{className:"loading",children:(0,a.jsx)(n.Z,{classname:"loading__item",white:!1})})},4646:function(e,t,r){"use strict";var a=r(7437);r(2265),r(5706),t.Z=e=>{let{classname:t,white:r=!1}=e;return(0,a.jsx)("div",{className:"".concat(t," spinner ").concat(r?"spinner_white":"")})}},4926:function(e,t,r){"use strict";r.d(t,{C:function(){return i},E1:function(){return s},FM:function(){return c},HD:function(){return l},MD:function(){return n},Tx:function(){return u},c7:function(){return f},sy:function(){return d},xD:function(){return o}}),r(5231),r(470);var a=r(1162),n=(0,a.$)("8be3971fa505d39a0342f6f2bb47f12f84e307e1"),c=(0,a.$)("3950b6122265189e18aa96d23ea703c062b19e8d"),i=(0,a.$)("ee8424affc7899cad984de7127e6f3bccf73f4cd"),s=(0,a.$)("05c9527f7bec54caccb0b8069e595aa83d6d0de3"),u=(0,a.$)("60f43dcb8fe61841a11c880216243e95a00ca509"),d=(0,a.$)("1e95512cd5356ec2b6c0d91f91775dd8ccda8e70"),o=(0,a.$)("9dd669479f364bfc1f7f942fd01035070b79a7e6"),l=(0,a.$)("f8198a3c6e6f2d358618345f0c227580fa39c18c"),f=(0,a.$)("f48fb5984b27702b88f7717375d61993631eb00c")},2882:function(){},7193:function(){},3560:function(){},5706:function(){},6891:function(){},3303:function(){},1162:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return n}});let a=r(5231);function n(e){let{createServerReference:t}=r(6671);return t(e,a.callServer)}},470:function(e,t){"use strict";Symbol.for("react.server.reference")},7346:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/sprites.19372370.svg",height:20,width:21,blurWidth:0,blurHeight:0}},1396:function(e,t,r){e.exports=r(8326)}},function(e){e.O(0,[326,413,885,971,472,744],function(){return e(e.s=8484)}),_N_E=e.O()}]);