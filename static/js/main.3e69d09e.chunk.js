(this["webpackJsonpimages-grid"]=this["webpackJsonpimages-grid"]||[]).push([[0],{174:function(e){e.exports=JSON.parse('{"app.grid-config":"Konfiguracja planszy","app.render":"Generuj","grid-config.presets":"Ustawienia domy\u015blne","grid-config.columns":"Liczba kolumn","grid-config.margins":"Odst\u0119py","grid-config.box-width":"Szeroko\u015b\u0107 kafelka","grid-config.box-height":"Wysoko\u015b\u0107 kafelka","grid-config.items-count":"Liczba kafelek","grid-config.color":"Kolor t\u0142a","slide.next":"Nast\u0119pny","slide.prev":"Poprzedni","slide.add":"Dodaj","slide.delete":"Skasuj","slide.copy":"Skopiuj"}')},175:function(e){e.exports=JSON.parse('{"app.grid-config":"Surface config","app.render":"Render","grid-config.presets":"Presets","grid-config.columns":"Columns","grid-config.margins":"Margins","grid-config.box-width":"Box width","grid-config.box-height":"Box height","grid-config.items-count":"Boxes count","grid-config.color":"Color","slide.next":"Next","slide.prev":"Previous","slide.add":"Add","slide.delete":"Delete","slide.copy":"Copy"}')},184:function(e,t,n){e.exports=n(379)},189:function(e,t,n){},190:function(e,t,n){},357:function(e,t,n){},364:function(e,t){},366:function(e,t){},379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=n(434),l=n(10),s=n(16),u=n(13),d=n(423),f=n(3),m=n(437),g=n(428),p=n(429),b=n(427),h=n(430),O=n(432),j=n(426),E=n(171),v=n.n(E),w=n(172),y=n.n(w),x=n(173),S=n.n(x),P=n(436),k=n(160),C=n.n(k),N=n(161),D=n.n(N),R=n(162),B=n.n(R),L=(n(189),function(e){var t=e.width,n=e.height,c=e.margin,i=e.content,o=e.srcPhoto,l=e.srcCrop,s=e.onPhotoLoad,d=Object(a.useState)(o),f=Object(u.a)(d,2),m=f[0],g=f[1],p=Object(a.useState)(l),b=Object(u.a)(p,2),h=b[0],O=b[1],j=Object(a.useRef)(),E=Object(a.useCallback)((function(){j.current&&B.a.crop(j.current,{width:t,height:n}).then((function(e){O(e.topCrop),s(m,h)}))}),[t,n,m,h,s]);return Object(a.useEffect)(E,[t,n,m]),r.a.createElement("div",{className:"item",style:{width:t,height:n,marginRight:c,marginBottom:c}},r.a.createElement("div",{className:"item-content",onDrop:function(e){if(e.dataTransfer&&0!==e.dataTransfer.files.length){var t=new FileReader,n=e.dataTransfer.files[0];t.onloadend=function(){g(t.result)},t.readAsDataURL(n)}}},m&&r.a.createElement("img",{src:m,ref:j,style:{display:"none"},alt:""}),h&&r.a.createElement("div",{className:"item-crop-wrap",style:{width:h.width,height:h.height,transform:"scale(".concat((t>=n?100*t/h.width:100*n/h.height)/100,")")}},r.a.createElement("img",{src:m,alt:"",className:"item-crop-img",style:{top:-1*h.y,left:-1*h.x}})),!m&&i))});L.defaultProps={margin:0,width:10,height:10};var z=L,A=(n(190),function(e){var t=e.cols,n=e.margin,c=e.width,i=e.height,o=e.colorBackground,l=e.items,d=e.render,f=e.srcPhotos,m=e.onRenderComplete,g=e.onPhotosChanged,p=Object(a.useState)(t),b=Object(u.a)(p,2),h=b[0],O=b[1],j=Object(a.useState)(n),E=Object(u.a)(j,2),v=E[0],w=E[1],y=Object(a.useState)(c),x=Object(u.a)(y,2),S=x[0],P=x[1],k=Object(a.useState)(i),N=Object(u.a)(k,2),R=N[0],B=N[1],L=Object(a.useState)(l),A=Object(u.a)(L,2),I=A[0],T=A[1],U=Object(a.useState)(o),W=Object(u.a)(U,2),F=W[0],J=W[1],G=Object(a.useState)(f),H=Object(u.a)(G,2),K=H[0],M=H[1];Object(a.useEffect)((function(){O(t),V()}),[t]),Object(a.useEffect)((function(){w(n),V()}),[n]),Object(a.useEffect)((function(){P(c),V()}),[c]),Object(a.useEffect)((function(){B(i),V()}),[i]),Object(a.useEffect)((function(){T(l),setTimeout((function(){var e=[];if(l>I){for(var t=I;t<l;t+=1)e.push($.current.children[t]);Y.current.add(e)}else V()}),0)}),[l,I]),Object(a.useEffect)((function(){return J(o)}),[o]);var V=function(){"undefined"!==typeof Y.current&&setTimeout((function(){Y.current.refreshItems(),Y.current.layout()}),0)},Q=function(e){e.preventDefault()},Y=Object(a.useRef)(),$=Object(a.useRef)(),_=Object(a.useRef)();Object(a.useEffect)((function(){return Y.current=new C.a($.current,{dragEnabled:!0,dragPlaceholder:{enabled:!0,duration:400,createElement:function(e){return e.getElement().cloneNode(!0)}}}),Y.current.on("dragReleaseEnd",(function(){return Y.current.synchronize()})),window.addEventListener("dragover",Q),window.addEventListener("drop",Q),function(){Y.current.destroy(),window.removeEventListener("dragover",Q),window.removeEventListener("drop",Q)}}),[]),Object(a.useEffect)((function(){d&&D()(_.current).then((function(e){m(e)}))}),[d,m]);var q=Object(s.a)(Array(I).keys()).map((function(e){return r.a.createElement(z,{key:e,width:S,height:R,margin:v,content:"".concat(e+1),srcPhoto:K[e]?K[e].photo:null,srcCrop:K[e]?K[e].crop:null,onPhotoLoad:function(t,n){return function(e,t,n){var a=Object(s.a)(K);a[n]={photo:e,crop:t},M(a),g(a)}(t,n,e)}})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:_,className:"grid-outer",style:{width:h*S+h*v+v,paddingTop:v,paddingLeft:v,background:F}},r.a.createElement("div",{className:"grid",ref:$},q)))});A.defaultProps={cols:1,margin:0,width:10,height:10,items:0,colorBackground:"#ddd",render:!1,srcPhotos:[],onRenderComplete:function(){},onPhotosChanged:function(){}};var I=A,T=n(440),U=n(438),W=n(439),F=n(421),J=n(433),G=n(163),H=n(164),K=Object(H.a)((function(e){return{slider:{marginBottom:e.spacing(1)},formControl:{marginBottom:e.spacing(4),width:"100%"}}}));function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=[{label:"columns",name:"cols",min:1,max:10,default:4,unit:"px"},{label:"margins",name:"margin",min:0,max:50,default:10,unit:"px"},{label:"box-width",name:"width",min:50,max:500,default:100,unit:"px"},{label:"box-height",name:"height",min:50,max:500,default:100,unit:"px"},{label:"items-count",name:"items",min:1,max:50,default:8,unit:""}],Y=[{name:"120 x 600",values:{margin:5,cols:1,width:110,height:144,items:4}},{name:"300 x 250",values:{margin:5,cols:2,width:142,height:118,items:4}},{name:"300 x 600",values:{margin:7,cols:2,width:140,height:141,items:8}},{name:"750 x 100",values:{margin:5,cols:5,width:144,height:90,items:5}},{name:"750 x 200",values:{margin:5,cols:5,width:144,height:190,items:5}}],$=function(e){var t=e.onValuesChanged,n=void 0===t?function(){}:t,c=K(),i=Object(a.useState)(""),o=Object(u.a)(i,2),s=o[0],f=o[1],m=Object.fromEntries(Q.map((function(e){return[e.name,e.default]}))),g=Object(a.useState)(m),p=Object(u.a)(g,2),b=p[0],h=p[1],O=Object(a.useState)("#fff"),j=Object(u.a)(O,2),E=j[0],v=j[1];return Object(a.useEffect)((function(){n(V({},b,{colorBackground:E}))}),[b,E,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{className:c.formControl},r.a.createElement(U.a,{id:"select-preset-label"},r.a.createElement(d.a,{id:"grid-config.presets"})),r.a.createElement(J.a,{labelId:"select-preset-label",id:"select-preset",value:s,onChange:function(e){var t=e.target.value;f(t),h(V({},b,{},Y[t].values))}},Y.map((function(e,t){return r.a.createElement(W.a,{key:t,value:t},e.name)})))),Q.map((function(e){return r.a.createElement("div",{className:c.slider,key:e.name},r.a.createElement(U.a,null,r.a.createElement(d.a,{id:"grid-config.".concat(e.label)})),r.a.createElement(T.a,{value:b[e.name],"aria-labelledby":"discrete-slider",step:1,name:e.name,min:e.min,max:e.max,valueLabelDisplay:"auto",onChange:function(t,n){return a=n,r=e.name,void(b[r]!==a&&(f(""),h(V({},b,Object(l.a)({},r,a)))));var a,r},marks:[{value:e.min,label:"".concat(e.min," ").concat(e.unit)},{value:e.max,label:"".concat(e.max," ").concat(e.unit)}]}))})),r.a.createElement(U.a,null,r.a.createElement(d.a,{id:"grid-config.color"})),r.a.createElement("br",null),r.a.createElement(G.CirclePicker,{color:E,width:"100%",circleSize:26,onChange:function(e){return v(e.hex)},colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","#ffffff"]}))};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=Object(H.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(350,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:350},title:{flexGrow:1},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350},drawerHeader:q({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"}),drawerBody:{overflowY:"auto",padding:25},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Z=n(166),ee=n.n(Z),te=n(167),ne=n.n(te),ae=n(168),re=n.n(ae),ce=n(170),ie=n.n(ce),oe=n(169),le=n.n(oe),se=(n(357),function(e){var t=e.currentSlide,n=e.countAllSlides,a=e.onAdd,c=e.onCopy,i=e.onDelete,o=e.onNext,l=e.onPrev;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"slide.prev"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",disabled:1===t,onClick:l},r.a.createElement(ee.a,null)))),t," / ",n,r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"slide.next"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",disabled:n===t,onClick:o},r.a.createElement(ne.a,null)))),r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"slide.add"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",onClick:a},r.a.createElement(re.a,null)))),r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"slide.copy"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",onClick:c},r.a.createElement(le.a,null)))),r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"slide.delete"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",disabled:1===n,onClick:i},r.a.createElement(ie.a,null)))))});se.defaultProps={currentSlide:1,countAllSlides:1};var ue=se,de=n(441),fe=n(431);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=n(359),be=r.a.memo((function(e){var t=e.gridConfig,n=e.render,a=e.photos,c=e.onRenderComplete,i=e.onPhotosChanged;return r.a.createElement(I,Object.assign({},t,{render:n,srcPhotos:a,onRenderComplete:c,onPhotosChanged:i}))}),(function(e,t){return e.render===t.render&&(n=e.gridConfig,a=t.gridConfig,Object.keys(n).length===Object.keys(a).length&&Object.keys(n).every((function(e){return n[e]===a[e]})));var n,a})),he=function(){var e=X(),t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),E=Object(u.a)(o,2),w=E[0],x=E[1],k=Object(a.useState)([]),C=Object(u.a)(k,2),N=C[0],D=C[1],R=Object(a.useState)({}),B=Object(u.a)(R,2),L=B[0],z=B[1],A=Object(a.useState)({}),I=Object(u.a)(A,2),T=I[0],U=I[1],W=Object(a.useState)(""),F=Object(u.a)(W,2),J=F[0],G=F[1],H=Object(a.useState)(1),K=Object(u.a)(H,2),M=K[0],V=K[1],Q=Object(a.useState)(1),Y=Object(u.a)(Q,2),_=Y[0],q=Y[1],Z=Object(a.useState)(["id-".concat(Date.now())]),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useCallback)((function(){J&&(q(_+1),ne([].concat(Object(s.a)(te),[J])))}),[_,J,te]);Object(a.useEffect)(ae,[J]);Object(a.useEffect)((function(){if(N.length>0&&N.length===_){var e=N[0],t=e.width,n=e.height,a=new pe(t,n);a.setRepeat(0),a.setDelay(1e3),a.start(),N.forEach((function(e){return a.addFrame(e.getContext("2d"))})),a.finish();var r=document.createElement("a");r.download="".concat(t,"x").concat(n,".gif"),r.href=URL.createObjectURL(new Blob([new Uint8Array(a.out.data)],{type:"image/gif"})),r.click(),x(!1),D([])}}),[N,_]);var re=te.map((function(e,t){var n=t+1===M||w?{}:{position:"absolute",visibility:"hidden",pointerEvents:"none"};return r.a.createElement("div",{style:n,key:e},r.a.createElement(be,{gridConfig:L,render:w,onRenderComplete:function(e){return function(e,t){D((function(t){return[].concat(Object(s.a)(t),[e])}))}(e)},photos:T[e]||[],onPhotosChanged:function(t){return function(e,t){U((function(n){return ge({},n,Object(l.a)({},t,e))}))}(t,e)}}))}));return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,null),r.a.createElement(g.a,{position:"fixed",className:Object(f.a)(e.appBar,Object(l.a)({},e.appBarShift,c))},r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"h6",noWrap:!0,className:e.title},"MossaIQ"),r.a.createElement(ue,{currentSlide:M,countAllSlides:_,onAdd:function(){q(_+1),ne([].concat(Object(s.a)(te),["id-".concat(Date.now())]))},onCopy:function(){var e=te[M-1],t="id-".concat(Date.now());if(T[e]){var n=ge({},T,Object(l.a)({},t,T[e]));U(n)}G(t)},onDelete:function(){ne(te.filter((function(e){return e!==te[M-1]}))),_===M&&V(M-1),q(_-1)},onNext:function(){V(M+1)},onPrev:function(){V(M-1)}}),r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"app.render"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",disabled:w>0,onClick:function(){return x(!0)},className:Object(f.a)(c&&e.hide)},r.a.createElement(v.a,null)))),r.a.createElement(P.a,{title:r.a.createElement(d.a,{id:"app.grid-config"})},r.a.createElement("span",null,r.a.createElement(j.a,{color:"inherit",edge:"end",disabled:w>0,onClick:function(){return i(!0)},className:Object(f.a)(c&&e.hide)},r.a.createElement(y.a,null)))))),r.a.createElement(de.a,{className:e.backdrop,open:w},r.a.createElement(fe.a,{color:"inherit"})),r.a.createElement("main",{className:Object(f.a)(e.content,Object(l.a)({},e.contentShift,c))},r.a.createElement("div",{className:e.drawerHeader}),re),r.a.createElement(m.a,{className:e.drawer,variant:"persistent",anchor:"right",open:c,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(j.a,{onClick:function(){return i(!1)}},r.a.createElement(S.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0},r.a.createElement(d.a,{id:"app.grid-config"}))),r.a.createElement(O.a,null),r.a.createElement("div",{className:e.drawerBody},r.a.createElement($,{onValuesChanged:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(174),je=n(175),Ee=(n(378),{pl:Oe,en:je}),ve=navigator.language.split(/[-_]/)[0];i.a.render(r.a.createElement(o.a,{locale:ve,key:ve,messages:Ee[ve]||Ee.en},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[184,1,2]]]);
//# sourceMappingURL=main.3e69d09e.chunk.js.map