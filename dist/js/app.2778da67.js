(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"95f74cc8"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"b46cfb3e"}[t]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/mb/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a88":function(t,e,n){},"2877f":function(t,e,n){"use strict";n("5697")},5697:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}]},[n("v-main",{staticClass:"pa-0 ma-0"},[n("Menu",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]}),n("MobileMenu",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}]}),n("router-view"),n("Footer")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"menu-container ma-0 pa-0"},[n("router-link",{staticClass:"menu_link menu-link",attrs:{to:t.home.url,exact:""}},[n("img",{staticClass:"main-logo",attrs:{src:t.home.icon,alt:t.home.altText}}),t._v(" "+t._s(t.home.text)+" ")]),n("v-spacer"),n("div",{staticClass:"menu-wrapper"},t._l(t.links,(function(e){return n("div",{key:e.id,staticClass:"menu_link-wrapper"},[n("router-link",{staticClass:"menu_link menu-link",attrs:{to:e.url,exact:""}},[t._v(t._s(e.text))])],1)})),0)],1)},s=[],l={data:function(){return{windowSize:{x:0,y:0},drawer:!1,group:null,maxWidth:1024}},mounted:function(){this.onResize()},beforeDestroy:function(){this.onResize()},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}}},computed:{isMobile:function(){return console.log(this.windowSize.x<this.maxWidth),this.windowSize.x<this.maxWidth}},watch:{group:function(){this.drawer=!1}}},c=l,u=n("f309");a["default"].use(u["a"]);var f=new u["a"]({}),d={vuetify:f,mixins:[c],props:{home:{type:Object,default:function(){return{altText:"MB LOGO",icon:"data/img/logo/MBblack.png",url:"/",text:"Start"}}},links:{type:Array,default:function(){return[{id:1,text:"O mnie",icon:"fa-solid fa-user-tie",url:"/owner"},{id:2,text:"Kancelaria",icon:"fa-solid fa-building-columns",url:"/firm"},{id:3,text:"Kontakt",icon:"fa-solid fa-phone-flip",url:"/contact"}]}}},computed:{function:function(){return this.isMobile()}}},p=d,m=(n("bb78"),n("2877")),b=n("6544"),h=n.n(b),v=n("40dc"),g=n("2fa4"),w=Object(m["a"])(p,i,s,!1,null,null,null),_=w.exports;h()(w,{VAppBar:v["a"],VSpacer:g["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden mobile-menu_container"},[n("div",{staticClass:"mobile-menu_burger"},[n("v-btn",{attrs:{color:t.btnColor,elevation:"4",fab:"",small:""},on:{click:function(e){t.active=!t.active}}},[n("font-awesome-icon",{staticClass:"mobile-menu_burger-icon",attrs:{icon:"fa-solid fa-bars"}})],1)],1),n("v-bottom-navigation",{attrs:{fixed:"",grow:"","input-value":t.active,color:"indigo"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.links,(function(e){return n("div",{key:e.id,staticClass:"mobile-menu_wrapper"},[n("router-link",{staticClass:"mobile-menu_link menu-link",attrs:{to:e.url}},[e.img?n("v-img",{attrs:{src:e.img,"aspect-ratio":1,width:t.width}}):t._e(),e.icon?n("font-awesome-icon",{attrs:{icon:e.icon}}):t._e()],1)],1)})),0)],1)},y=[],k={data:function(){return{value:1,active:!1,width:24,btnColor:"#69b9ff"}},props:{links:{type:Array,default:function(){return[{id:1,img:"data/img/logo/MBblack.png",url:"/",text:"Start"},{id:2,text:"O mnie",icon:"fa-solid fa-user-tie",url:"/owner"},{id:3,text:"Kancelaria",icon:"fa-solid fa-building-columns",url:"/firm"},{id:4,text:"Kontakt",icon:"fa-solid fa-phone-flip",url:"/contact"}]}}}},C=k,O=(n("2877f"),n("b81c")),j=n("8336"),M=n("adda"),S=Object(m["a"])(C,x,y,!1,null,null,null),z=S.exports;h()(S,{VBottomNavigation:O["a"],VBtn:j["a"],VImg:M["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-8 d-flex flex-column justify-space-between",attrs:{color:t.footerColor,height:t.height,padless:""}},[n("div",{staticClass:"footer__contact-container ma-0 pa-0"},[n("v-container",{staticClass:"footer__contact-wrapper pa-0 d-flex flex-column justify-space-around align-center"},[n("h3",{staticClass:"section-small-subtitle"},[t._v(t._s(t.contact.title))]),n("strong",{staticClass:"section-text"},[t._v(t._s(t.contact.subtitle))]),n("div",{staticClass:"footer-contact__links"},[n("a",{staticClass:"section-small-subtitle link-reset footer__link",attrs:{href:"mailto:"+t.contact.email}},[t._v(t._s(t.contact.emailText))]),n("a",{staticClass:"section-small-subtitle link-reset footer__link",attrs:{href:"tel:"+t.contact.phone}},[t._v(t._s(t.contact.phoneText))]),n("router-link",{staticClass:"section-small-subtitle link-reset footer__link",attrs:{to:t.contact.address,exact:""}},[t._v(t._s(t.contact.addressText))])],1)])],1),n("v-col",{staticClass:"text-center footer-text footer__copy pa-0 d-flex align-center justify-center",attrs:{cols:"12"}},[n("span",[t._v("©")]),t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v(t._s(t.title))])])],1)},E=[],A={data:function(){return{footerColor:"#192024",copy:"data/img/svg/copyright-solid.svg",height:250}},props:{title:{type:String,default:"Michał Buzar"},contact:{type:Object,default:function(){return{title:"Potrzebujesz pomocy?",subtitle:"Skontaktuj się z nami?",email:"xcd@cxcv.pl",emailText:"Napisz",phone:"123-456-789",phoneText:"Zadzwóń",address:"/contact",addressText:"Odwiedź nas"}}}}},P=A,V=(n("bda6"),n("62ad")),B=n("a523"),N=n("553a"),F=Object(m["a"])(P,T,E,!1,null,"0c98ee65",null),L=F.exports;h()(F,{VCol:V["a"],VContainer:B["a"],VFooter:N["a"]});var R={components:{Menu:_,MobileMenu:z,Footer:L},mixins:[c],name:"App",computed:{function:function(){return this.isMobile()}},data:function(){return{}}},K=R,$=n("7496"),D=n("f6c4"),W=n("269a"),H=n.n(W),q=n("dc22"),I=Object(m["a"])(K,o,r,!1,null,null,null),J=I.exports;h()(I,{VApp:$["a"],VMain:D["a"]}),H()(I,{Resize:q["a"]});n("d3b7"),n("3ca3"),n("ddb0");var G=n("8c4f");a["default"].use(G["a"]);var U=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/owner",name:"Owner",component:function(){return n.e("about").then(n.bind(null,"32c1"))}},{path:"/firm",name:"Firm",component:function(){return n.e("about").then(n.bind(null,"851d"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}],Y=new G["a"]({mode:"history",base:"/mb/",routes:U}),Z=Y,Q=n("ecee"),X=n("c074"),tt=n("ad3d"),et=n("7212"),nt=n.n(et),at=(n("f4bd"),n("cffa"));Q["c"].add(X["b"],X["e"],X["g"],X["c"],X["d"],X["f"],X["a"]),a["default"].component("font-awesome-icon",tt["a"]),a["default"].use(nt.a),a["default"].use(at["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Z,VueAwesomeSwiper:nt.a,vuetify:f,render:function(t){return t(J)}}).$mount("#app")},"6fa3":function(t,e,n){},bb78:function(t,e,n){"use strict";n("6fa3")},bda6:function(t,e,n){"use strict";n("1a88")}});
//# sourceMappingURL=app.2778da67.js.map