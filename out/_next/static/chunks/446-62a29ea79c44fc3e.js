(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{4217:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every(e=>"string"==typeof e))}function l(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every(e=>"string"==typeof e._key))&&"children"in e&&Array.isArray(e.children)&&e.children.every(e=>"object"==typeof e&&"_type"in e)}function a(e){return l(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function s(e){return"@list"===e._type}function c(e){return"@span"===e._type}function u(e){return"@text"===e._type}n.d(t,{YI:function(){return W}});let f=["strong","em","code","underline","strike-through"];function d(e,t,n){if(!o(e)||!e.marks||!e.marks.length)return[];let r=e.marks.slice(),i={};return r.forEach(e=>{i[e]=1;for(let r=t+1;r<n.length;r++){let l=n[r];if(l&&o(l)&&Array.isArray(l.marks)&&-1!==l.marks.indexOf(e))i[e]++;else break}}),r.sort((e,t)=>(function(e,t,n){let r=e[t],i=e[n];if(r!==i)return i-r;let o=f.indexOf(t),l=f.indexOf(n);return o!==l?o-l:t.localeCompare(n)})(i,e,t))}function p(e,t,n){return{_type:"@list",_key:"".concat(e._key||"".concat(t),"-parent"),mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function y(e,t){let n=t.level||1,r=t.listItem||"normal",i="string"==typeof t.listItem;if(s(e)&&(e.level||1)===n&&i&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;let l=e.children[e.children.length-1];return l&&!o(l)?y(l,t):void 0}var m=n(5893),h=n(7294);let g=["block","list","listItem","marks","types"],v=["listItem"],b=["_key"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e,t,n){let r=t[n],i=e[n];return"function"==typeof r||r&&"function"==typeof i?r:r?k(k({},i),r):i}let O=e=>{let{children:t,value:n}=e;return(0,m.jsx)("a",{href:null==n?void 0:n.href,children:t})},_={textDecoration:"underline"},I=e=>{let{children:t}=e;return(0,m.jsx)("li",{children:t})},E=(e,t)=>"[@portabletext/react] Unknown ".concat(e,", specify a component for it in the `components.").concat(t,"` prop"),S=e=>E('block type "'.concat(e,'"'),"types"),P=e=>E('mark type "'.concat(e,'"'),"marks"),C=e=>E('block style "'.concat(e,'"'),"block"),z=e=>E('list style "'.concat(e,'"'),"list"),A=e=>E('list item style "'.concat(e,'"'),"listItem");function R(e){console.warn(e)}let D={display:"none"},L=e=>{let{value:t,isInline:n}=e,r=S(t._type);return n?(0,m.jsx)("span",{style:D,children:r}):(0,m.jsx)("div",{style:D,children:r})},N=e=>{let{markType:t,children:n}=e;return(0,m.jsx)("span",{className:"unknown__pt__mark__".concat(t),children:n})},M=e=>{let{children:t}=e;return(0,m.jsx)("p",{children:t})},T=e=>{let{children:t}=e;return(0,m.jsx)("ul",{children:t})},q=e=>{let{children:t}=e;return(0,m.jsx)("li",{children:t})},B=()=>(0,m.jsx)("br",{}),F={types:{},block:{normal(e){let{children:t}=e;return(0,m.jsx)("p",{children:t})},blockquote(e){let{children:t}=e;return(0,m.jsx)("blockquote",{children:t})},h1(e){let{children:t}=e;return(0,m.jsx)("h1",{children:t})},h2(e){let{children:t}=e;return(0,m.jsx)("h2",{children:t})},h3(e){let{children:t}=e;return(0,m.jsx)("h3",{children:t})},h4(e){let{children:t}=e;return(0,m.jsx)("h4",{children:t})},h5(e){let{children:t}=e;return(0,m.jsx)("h5",{children:t})},h6(e){let{children:t}=e;return(0,m.jsx)("h6",{children:t})}},marks:{em(e){let{children:t}=e;return(0,m.jsx)("em",{children:t})},strong(e){let{children:t}=e;return(0,m.jsx)("strong",{children:t})},code(e){let{children:t}=e;return(0,m.jsx)("code",{children:t})},underline(e){let{children:t}=e;return(0,m.jsx)("span",{style:_,children:t})},"strike-through"(e){let{children:t}=e;return(0,m.jsx)("del",{children:t})},link:O},list:{number(e){let{children:t}=e;return(0,m.jsx)("ol",{children:t})},bullet(e){let{children:t}=e;return(0,m.jsx)("ul",{children:t})}},listItem:I,hardBreak:B,unknownType:L,unknownMark:N,unknownList:T,unknownListItem:q,unknownBlockStyle:M};function W(e){let{value:t,components:n,listNestingMode:r,onMissingComponent:o=R}=e,l=o||G,s=Array.isArray(t)?t:[t],c=function(e,t){let n;let r=[];for(let o=0;o<e.length;o++){let l=e[o];if(l){var s;if(!a(l)){r.push(l),n=void 0;continue}if(!n){n=p(l,o,t),r.push(n);continue}if(s=n,(l.level||1)===s.level&&l.listItem===s.listItem){n.children.push(l);continue}if((l.level||1)>n.level){let c=p(l,o,t);if("html"===t){let u=n.children[n.children.length-1],f=i(i({},u),{},{children:[...u.children,c]});n.children[n.children.length-1]=f}else n.children.push(c);n=c;continue}if((l.level||1)<n.level){let d=r[r.length-1],m=d&&y(d,l);if(m){(n=m).children.push(l);continue}n=p(l,o,t),r.push(n);continue}if(l.listItem!==n.listItem){let h=r[r.length-1],g=h&&y(h,{level:l.level||1});if(g&&g.listItem===l.listItem){(n=g).children.push(l);continue}n=p(l,o,t),r.push(n);continue}console.warn("Unknown state encountered for block",l),r.push(l)}}return r}(s,r||"html"),u=(0,h.useMemo)(()=>n?function(e,t){let{block:n,list:r,listItem:i,marks:o,types:l}=t,a=j(t,g);return k(k({},e),{},{block:x(e,t,"block"),list:x(e,t,"list"),listItem:x(e,t,"listItem"),marks:x(e,t,"marks"),types:x(e,t,"types")},a)}(F,n):F,[n]),f=(0,h.useMemo)(()=>Z(u,l),[u,l]),d=c.map((e,t)=>f({node:e,index:t,isInline:!1,renderNode:f}));return(0,m.jsx)(m.Fragment,{children:d})}let Z=(e,t)=>function n(r){let{node:i,index:o,isInline:f}=r,d=i._key||"node-".concat(o);return s(i)?function(r,i,o){let l=r.children.map((e,t)=>n({node:e._key?e:k(k({},e),{},{_key:"li-".concat(i,"-").concat(t)}),index:i,isInline:!1,renderNode:n})),a=e.list,s="function"==typeof a?a:a[r.listItem],c=s||e.unknownList;if(c===e.unknownList){let u=r.listItem||"bullet";t(z(u),{nodeType:"listStyle",type:u})}return(0,m.jsx)(c,{value:r,index:i,isInline:!1,renderNode:n,children:l},o)}(i,o,d):a(i)?function(r,i,o){let l=U({node:r,index:i,isInline:!1,renderNode:n}),a=e.listItem,s="function"==typeof a?a:a[r.listItem],c=s||e.unknownListItem;if(c===e.unknownListItem){let u=r.listItem||"bullet";t(A(u),{type:u,nodeType:"listItemStyle"})}let f=l.children;if(r.style&&"normal"!==r.style){let{listItem:d}=r,p=j(r,v);f=n({node:p,index:i,isInline:!1,renderNode:n})}return(0,m.jsx)(c,{value:r,index:i,isInline:!1,renderNode:n,children:f},o)}(i,o,d):c(i)?function(r,i,o){let{markDef:l,markType:a,markKey:s}=r,f=e.marks[a]||e.unknownMark,d=r.children.map((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n}));return f===e.unknownMark&&t(P(a),{nodeType:"mark",type:a}),(0,m.jsx)(f,{text:function e(t){let n="";return t.children.forEach(t=>{u(t)?n+=t.text:c(t)&&(n+=e(t))}),n}(r),value:l,markType:a,markKey:s,renderNode:n,children:d},o)}(i,0,d):l(i)?function(r,i,o,l){let a=U({node:r,index:i,isInline:l,renderNode:n}),{_key:s}=a,c=j(a,b),u=c.node.style||"normal",f="function"==typeof e.block?e.block:e.block[u],d=f||e.unknownBlockStyle;return d===e.unknownBlockStyle&&t(C(u),{nodeType:"blockStyle",type:u}),(0,m.jsx)(d,k(k({},c),{},{value:c.node,renderNode:n}),o)}(i,o,d,f):u(i)?function(t,n){if("\n"===t.text){let r=e.hardBreak;return r?(0,m.jsx)(r,{},n):"\n"}return t.text}(i,d):function(r,i,o,l){let a=e.types[r._type],s={value:r,isInline:l,index:i,renderNode:n};if(a)return(0,m.jsx)(a,k({},s),o);t(S(r._type),{nodeType:"block",type:r._type});let c=e.unknownType;return(0,m.jsx)(c,k({},s),o)}(i,o,d,f)};function U(e){let{node:t,index:n,isInline:r,renderNode:i}=e,l=function(e){var t;let{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];let i=n.map(d),l={_type:"@span",children:[],markType:"<unknown>"},a=[l];for(let s=0;s<n.length;s++){let c=n[s];if(!c)continue;let u=i[s]||[],f=1;if(a.length>1)for(;f<a.length;f++){let p=(null==(t=a[f])?void 0:t.markKey)||"",y=u.indexOf(p);if(-1===y)break;u.splice(y,1)}let m=(a=a.slice(0,f))[a.length-1];if(m){for(let h of u){let g=r.find(e=>e._key===h),v=g?g._type:h,b={_type:"@span",_key:c._key,children:[],markDef:g,markType:v,markKey:h};m.children.push(b),a.push(b),m=b}if(o(c)){let w=c.text.split("\n");for(let k=w.length;k-- >1;)w.splice(k,0,"\n");m.children=m.children.concat(w.map(e=>({_type:"@text",text:e})))}else m.children=m.children.concat(c)}}return l.children}(t),a=l.map((e,t)=>i({node:e,isInline:!0,index:t,renderNode:i}));return{_key:t._key||"block-".concat(n),children:a,index:n,isInline:r,node:t}}function G(){}},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,o=n(1598).Z,l=n(7273).Z,a=o(n(7294)),s=i(n(3121)),c=n(2675),u=n(139),f=n(8730);n(7238);var d=i(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,i,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if(null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let g=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:f,isLazy:d,fill:p,placeholder:y,loading:m,srcString:g,config:v,unoptimized:b,loader:w,onLoadRef:k,onLoadingCompleteRef:j,onLoad:x,onError:O}=e,_=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=d?"lazy":m,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},_,n,{width:o,height:i,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:m,style:r({},u,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,g,k,j,b))},[g,k,j,O,b,t]),onLoad(e){let t=e.currentTarget;h(t,g,k,j,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===y&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),O&&O(e)}})))}),v=a.forwardRef((e,t)=>{let n,i;var o,{src:h,sizes:v,unoptimized:b=!1,priority:w=!1,loading:k,className:j,quality:x,width:O,height:_,fill:I,style:E,onLoad:S,onLoadingComplete:P,placeholder:C="empty",blurDataURL:z,layout:A,objectFit:R,objectPosition:D,lazyBoundary:L,lazyRoot:N}=e,M=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=a.useContext(f.ImageConfigContext),q=a.useMemo(()=>{let e=p||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[T]),B=M,F=B.loader||d.default;if(delete B.loader,"__next_img_default"in F){if("custom"===q.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=F;F=e=>{let{config:t}=e,n=l(e,["config"]);return W(n)}}if(A){"fill"===A&&(I=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];Z&&(E=r({},E,Z));let U={responsive:"100vw",fill:"100vw"}[A];U&&!v&&(v=U)}let G="",H=m(O),V=m(_);if("object"==typeof(o=h)&&(y(o)||void 0!==o.src)){let J=y(h)?h.default:h;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,i=J.blurHeight,z=z||J.blurDataURL,G=J.src,!I){if(H||V){if(H&&!V){let X=H/J.width;V=Math.round(J.height*X)}else if(!H&&V){let K=V/J.height;H=Math.round(J.width*K)}}else H=J.width,V=J.height}}let Y=!w&&("lazy"===k||void 0===k);((h="string"==typeof h?h:G).startsWith("data:")||h.startsWith("blob:"))&&(b=!0,Y=!1),q.unoptimized&&(b=!0);let $=m(x),Q=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:D}:{},{color:"transparent"},E),ee="blur"===C&&z?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:V,blurWidth:n,blurHeight:i,blurDataURL:z}),'")')}:{},et=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let o=/(^|\s)(1?\d?\d)vw/g,l=[];for(let a;a=o.exec(n);a)l.push(parseInt(a[2]));if(l.length){let s=.01*Math.min(...l);return{widths:i.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,l),u=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,r)=>"".concat(a({config:t,src:n,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:n,quality:o,width:s[u]})}}({config:q,src:h,unoptimized:b,width:H,quality:$,sizes:v,loader:F}),en=h,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:B.crossOrigin},ei=a.useRef(S);a.useEffect(()=>{ei.current=S},[S]);let eo=a.useRef(P);a.useEffect(()=>{eo.current=P},[P]);let el=r({isLazy:Y,imgAttributes:et,heightInt:V,widthInt:H,qualityInt:$,className:j,imgStyle:Q,blurStyle:ee,loading:k,config:q,fill:I,unoptimized:b,placeholder:C,loader:F,srcString:en,onLoadRef:ei,onLoadingCompleteRef:eo},B);return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,Object.assign({},el,{ref:t})),w?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o}=e,l=r||t,a=i||n,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},6409:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var r=n(7294),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},l=!1,a=(0,r.forwardRef)(function(e,t){var n=e.style,a=o(e,["style"]),c=s();!l&&(null==n?void 0:n.height)&&(l=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=i(i({},n),{height:c?c+"px":"100vh"});return r.createElement("div",i({ref:t,style:u},a))});function s(){var e,t,n,i=(0,r.useState)(c),o=i[0],l=i[1],a=(t=(e=(0,r.useState)(!1))[0],n=e[1],(0,r.useEffect)(function(){u()&&n(!0)},[]),t);return(0,r.useEffect)(function(){if(a)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){l(c())}},[a]),a?o:null}function c(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}a.displayName="Div100vh",t.ZP=a},7005:function(e,t,n){var r=n(7294),i=r&&"object"==typeof r&&"default"in r?r:{default:r},o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'),t.Z=function(e){var t,n,l,a,s=e.style,c=e.className,u=e.play,f=void 0===u||u,d=e.pauseOnHover,p=void 0!==d&&d,y=e.pauseOnClick,m=void 0!==y&&y,h=e.direction,g=void 0===h?"left":h,v=e.speed,b=void 0===v?20:v,w=e.delay,k=void 0===w?0:w,j=e.loop,x=void 0===j?0:j,O=e.gradient,_=e.gradientColor,I=void 0===_?[255,255,255]:_,E=e.gradientWidth,S=void 0===E?200:E,P=e.onFinish,C=e.onCycleComplete,z=e.children,A=r.useState(0),R=A[0],D=A[1],L=r.useState(0),N=L[0],M=L[1],T=r.useState(!1),q=T[0],B=T[1],F=r.useRef(null),W=r.useRef(null);r.useEffect(function(){if(q){var e=function(){W.current&&F.current&&(D(F.current.getBoundingClientRect().width),M(W.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}},[q]),r.useEffect(function(){B(!0)},[]);var Z="rgba("+I[0]+", "+I[1]+", "+I[2],U=N<R?R/b:N/b;return i.default.createElement(r.Fragment,null,q?i.default.createElement("div",{ref:F,style:o(o({},void 0===s?{}:s),((t={})["--pause-on-hover"]=!f||p?"paused":"running",t["--pause-on-click"]=!f||p&&!m||m?"paused":"running",t)),className:(void 0===c?"":c)+" marquee-container"},(void 0===O||O)&&i.default.createElement("div",{style:((n={})["--gradient-color"]=Z+", 1), "+Z+", 0)",n["--gradient-width"]="number"==typeof S?S+"px":S,n),className:"overlay"}),i.default.createElement("div",{ref:W,style:((l={})["--play"]=f?"running":"paused",l["--direction"]="left"===g?"normal":"reverse",l["--duration"]=U+"s",l["--delay"]=k+"s",l["--iteration-count"]=x?""+x:"infinite",l),className:"marquee",onAnimationIteration:C,onAnimationEnd:P},z),i.default.createElement("div",{style:((a={})["--play"]=f?"running":"paused",a["--direction"]="left"===g?"normal":"reverse",a["--duration"]=U+"s",a["--delay"]=k+"s",a["--iteration-count"]=x?""+x:"infinite",a),className:"marquee","aria-hidden":"true"},z)):null)}}}]);