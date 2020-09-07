var NexT=window.NexT||{},CONFIG={root:"/"};localsearch={path:"/search.json",options:{trigger:"auto",top_n_per_article:1,unescape:!1}},HTMLElement.prototype.outerHeight=function(e){let t=this.offsetHeight;if(!e)return t;const o=window.getComputedStyle(this);return t+=parseInt(o.marginTop,10)+parseInt(o.marginBottom,10),t},HTMLElement.prototype.css=function(e){Object.assign(this.style,e)},HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={registerActiveMenuItem:function(){document.querySelectorAll(".menu .menu-item").forEach(e=>{const t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=t.pathname!==CONFIG.root&&0===location.pathname.indexOf(t.pathname);t.hostname===location.hostname&&(o||n)&&e.classList.add("menu-item-active")}),document.querySelectorAll("#sub-menu .menu-item").forEach(e=>{const t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");t.hostname===location.hostname&&o&&e.classList.add("menu-item-active")})},registerSidebarTOC:function(){const e=document.querySelectorAll(".post-toc li"),t=[...e].map(e=>{const t=e.querySelector("a.nav-link"),o=document.getElementById(decodeURI(t.getAttribute("href").replace("#","")));return t.addEventListener("click",e=>{e.preventDefault();const t=o.getBoundingClientRect().top+window.scrollY+1;window.scroll({top:t,behavior:"smooth"})}),o}),o=document.querySelector(".post-toc-wrap");!function n(r){r=Math.floor(r+1e4);const i=new IntersectionObserver((i,a)=>{const c=document.documentElement.scrollHeight+100;if(c>r)return a.disconnect(),void n(c);const l=function(e){let o=0,n=e[o];if(n.boundingClientRect.top>0)return o=t.indexOf(n.target),0===o?0:o-1;for(;o<e.length;o++){if(!(e[o].boundingClientRect.top<=0))return t.indexOf(n.target);n=e[o]}return t.indexOf(n.target)}(i);!function(e){if(e.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current");let t=e.parentNode;for(;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;o.scroll({top:o.scrollTop-o.offsetHeight/2+e.getBoundingClientRect().top-o.getBoundingClientRect().top,behavior:"smooth"})}(e[l])},{rootMargin:r+"px 0px -100% 0px",threshold:0});t.forEach(e=>i.observe(e))}(document.documentElement.scrollHeight)},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.wrap(t)})},loadComments:function(e,t){const o=new IntersectionObserver((e,o)=>{e[0].isIntersecting&&(t(),o.disconnect())});return o.observe(e),o}},NexT.boot={},NexT.boot.registerEvents=function(){document.querySelector(".site-nav-toggle button").addEventListener("click",()=>{document.querySelector(".site-nav").classList.toggle("site-nav-on")}),document.querySelectorAll(".sidebar-nav li").forEach((e,t)=>{e.addEventListener("click",e=>{const o=e.currentTarget,n="sidebar-nav-active",r="sidebar-panel-active";if(o.classList.contains(n))return;const i=document.querySelectorAll(".sidebar-panel"),a=i[t];i[1-t].classList.remove(r),a.classList.add(r),[...o.parentNode.children].forEach(e=>{e.classList.remove(n)}),o.classList.add(n)})}),window.addEventListener("hashchange",()=>{const e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){const t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}})},NexT.boot.refresh=function(){NexT.utils.registerActiveMenuItem(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox()},window.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh()}),
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.lozad=t()}(this,(function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var o=t.querySelector("img"),n=!1;null===o&&(o=document.createElement("img"),n=!0),e&&t.getAttribute("data-iesrc")&&(o.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(o.alt=t.getAttribute("data-alt")),n&&t.append(o)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,i=void 0,a=0;a<=r.length-1;a++)(i=r[a].getAttribute("data-src"))&&(r[a].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var c=",";if(t.getAttribute("data-background-delimiter")&&(c=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(c),s=l[0].substr(0,l[0].indexOf(" "))||l[0];s=-1===s.indexOf("url(")?"url("+s+")":s,1===l.length?t.style.backgroundImage=s:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+s+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function o(e){e.setAttribute("data-loaded",!0)}function n(e){e.getAttribute("data-placeholder-background")&&(e.style.background=e.getAttribute("data-placeholder-background"))}var r=function(e){return"true"===e.getAttribute("data-loaded")},i=function(e,t){return function(n,i){n.forEach((function(n){(n.intersectionRatio>0||n.isIntersecting)&&(i.unobserve(n.target),r(n.target)||(e(n.target),o(n.target),t(n.target)))}))}},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,c),s=l.root,d=l.rootMargin,u=l.threshold,m=l.load,p=l.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver(i(m,p),{root:s,rootMargin:d,threshold:u}));for(var h=a(e,s),f=0;f<h.length;f++)n(h[f]);return{observe:function(){for(var t=a(e,s),n=0;n<t.length;n++)r(t[n])||(g?g.observe(t[n]):(m(t[n]),o(t[n]),p(t[n])))},triggerLoad:function(e){r(e)||(m(e),o(e),p(e))},observer:g}}})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,(function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},r=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},i=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},a=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,a=e.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=o+c+"px",a.style.left=n+l+"px",a.style.width=r+"px",a.style.height=i+"px",a.style.transform="",a},c=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(l){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==O?-1!==C.indexOf(t)&&z({target:t}):E()},m=function(){if(!A&&q.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(k-e)>H.scrollOffset&&setTimeout(E,150)}},p=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(O.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},H.container,t.container)),t.template){var r=o(t.template)?t.template:document.querySelector(t.template);n.template=r}return H=e({},H,n),C.forEach((function(e){e.dispatchEvent(c("medium-zoom:update",{detail:{zoom:M}}))})),M},h=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},H,o))},f=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,r(t))}),[]);return n.filter((function(e){return-1===C.indexOf(e)})).forEach((function(e){C.push(e),e.classList.add("medium-zoom-image")})),T.forEach((function(e){var t=e.type,o=e.listener,r=e.options;n.forEach((function(e){e.addEventListener(t,o,r)}))})),M},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];q.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,r(t))}),[]):C;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(c("medium-zoom:detach",{detail:{zoom:M}}))})),C=C.filter((function(e){return-1===n.indexOf(e)})),M},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return C.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),T.push({type:"medium-zoom:"+e,listener:t,options:o}),M},b=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return C.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),T=T.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),M},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.target,i=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},r=void 0,i=void 0;if(H.container)if(H.container instanceof Object)r=(t=e({},t,H.container)).width-t.left-t.right-2*H.margin,i=t.height-t.top-t.bottom-2*H.margin;else{var a=(o(H.container)?H.container:document.querySelector(H.container)).getBoundingClientRect(),c=a.width,l=a.height,s=a.left,d=a.top;t=e({},t,{width:c,height:l,left:s,top:d})}r=r||t.width-2*H.margin,i=i||t.height-2*H.margin;var u=q.zoomedHd||q.original,m=n(u)?r:u.naturalWidth||r,p=n(u)?i:u.naturalHeight||i,g=u.getBoundingClientRect(),h=g.top,f=g.left,v=g.width,y=g.height,b=Math.min(m,r)/v,L=Math.min(p,i)/y,E=Math.min(b,L),z="scale("+E+") translate3d("+((r-v)/2-f+H.margin+t.left)/E+"px, "+((i-y)/2-h+H.margin+t.top)/E+"px, 0)";q.zoomed.style.transform=z,q.zoomedHd&&(q.zoomedHd.style.transform=z)};return new d((function(e){if(r&&-1===C.indexOf(r))e(M);else if(q.zoomed)e(M);else{if(r)q.original=r;else{if(!(C.length>0))return void e(M);var t=C;q.original=t[0]}if(q.original.dispatchEvent(c("medium-zoom:open",{detail:{zoom:M}})),k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,q.zoomed=a(q.original),document.body.appendChild(O),H.template){var n=o(H.template)?H.template:document.querySelector(H.template);q.template=document.createElement("div"),q.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(q.template)}if(document.body.appendChild(q.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),q.original.classList.add("medium-zoom-image--hidden"),q.zoomed.classList.add("medium-zoom-image--opened"),q.zoomed.addEventListener("click",E),q.zoomed.addEventListener("transitionend",(function t(){A=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(c("medium-zoom:opened",{detail:{zoom:M}})),e(M)})),q.original.getAttribute("data-zoom-src")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("srcset"),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.src=q.zoomed.getAttribute("data-zoom-src"),q.zoomedHd.onerror=function(){clearInterval(l),console.warn("Unable to reach the zoom image target "+q.zoomedHd.src),q.zoomedHd=null,i()};var l=setInterval((function(){q.zoomedHd.complete&&(clearInterval(l),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",E),document.body.appendChild(q.zoomedHd),i())}),10)}else if(q.original.hasAttribute("srcset")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.removeAttribute("loading");var s=q.zoomedHd.addEventListener("load",(function(){q.zoomedHd.removeEventListener("load",s),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",E),document.body.appendChild(q.zoomedHd),i()}))}else i()}}))},E=function(){return new d((function(e){!A&&q.original?(A=!0,document.body.classList.remove("medium-zoom--opened"),q.zoomed.style.transform="",q.zoomedHd&&(q.zoomedHd.style.transform=""),q.template&&(q.template.style.transition="opacity 150ms",q.template.style.opacity=0),q.original.dispatchEvent(c("medium-zoom:close",{detail:{zoom:M}})),q.zoomed.addEventListener("transitionend",(function t(){q.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(q.zoomed),q.zoomedHd&&document.body.removeChild(q.zoomedHd),document.body.removeChild(O),q.zoomed.classList.remove("medium-zoom-image--opened"),q.template&&document.body.removeChild(q.template),A=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(c("medium-zoom:closed",{detail:{zoom:M}})),q.original=null,q.zoomed=null,q.zoomedHd=null,q.template=null,e(M)}))):e(M)}))},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return q.original?E():L({target:t})},w=function(){return H},S=function(){return C},x=function(){return q.original},C=[],T=[],A=!1,k=0,H=s,q={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(l)?H=l:(l||"string"==typeof l)&&f(l),H=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},H);var O=i(H.background);document.addEventListener("click",u),document.addEventListener("keyup",p),document.addEventListener("scroll",m),window.addEventListener("resize",E);var M={open:L,close:E,toggle:z,update:g,clone:h,attach:f,detach:v,on:y,off:b,getOptions:w,getImages:S,getZoomedImage:x};return M}})),window.addEventListener("DOMContentLoaded",()=>{let e,t=!1,o=!0;const n=localsearch.path;/json$/i.test(n)&&(o=!1);const r=document.getElementById("search-input"),i=document.getElementById("search-result"),a=document.querySelector(".search-pop-overlay"),c=document.querySelector(".search-popup"),l=(e,t,o)=>{let n=e.length;if(0===n)return[];let r=0,i=[],a=[];for(o||(t=t.toLowerCase(),e=e.toLowerCase());(i=t.indexOf(e,r))>-1;)a.push({position:i,word:e}),r=i+n;return a},s=(e,t,o,n)=>{let r=o[o.length-1],i=r.position,a=r.word,c=[],l=0;for(;i+a.length<=t&&0!==o.length;){a===n&&l++,c.push({position:i,length:a.length});let e=i+a.length;for(o.pop();0!==o.length&&(r=o[o.length-1],i=r.position,a=r.word,e>i);)o.pop()}return{hits:c,start:e,end:t,searchTextCount:l}},d=(e,t)=>{let o="",n=t.start;return t.hits.forEach(t=>{o+=e.substring(n,t.position);let r=t.position+t.length;o+=`<b class="search-keyword">${e.substring(t.position,r)}</b>`,n=r}),o+=e.substring(n,t.end),o},u=()=>{if(!t)return;let o=r.value.trim().toLowerCase(),n=o.split(/[-\s]+/);n.length>1&&n.push(o);let a=[];if(o.length>0&&e.forEach(e=>{if(!e.title)return;let t=0,r=e.title.trim(),i=r.toLowerCase(),c=e.content?e.content.trim().replace(/<[^>]+>/g,""):"";localsearch.options.unescape&&(c=String(c).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t)).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));let u=c.toLowerCase(),m=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),p=[],g=[];if(n.forEach(e=>{p=p.concat(l(e,i,!1)),g=g.concat(l(e,u,!1))}),p.length>0||g.length>0){let e=p.length+g.length;[p,g].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let n=[];if(0!==p.length){let e=s(0,r.length,p,o);t+=e.searchTextCountInSlice,n.push(e)}let i=[];for(;0!==g.length;){let e=g[g.length-1],n=e.position,r=e.word,a=n-20,l=n+80;a<0&&(a=0),l<n+r.length&&(l=n+r.length),l>c.length&&(l=c.length);let d=s(a,l,g,o);t+=d.searchTextCountInSlice,i.push(d)}i.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);let l=parseInt(localsearch.options.top_n_per_article,10);l>=0&&(i=i.slice(0,l));let u="";0!==n.length?u+=`<li><a href="${m}" class="search-result-title">${d(r,n[0])}</a>`:u+=`<li><a href="${m}" class="search-result-title">${r}</a>`,i.forEach(e=>{u+=`<a href="${m}"><p class="search-result">${d(c,e)}...</p></a>`}),u+="</li>",a.push({item:u,searchTextCount:t,hitCount:e,id:a.length})}}),1===n.length&&""===n[0])i.innerHTML='<div class="no-keywords">Type a new keyword(s) and press Enter to search!</div>';else if(0===a.length)i.innerHTML='<div class="no-result">No Result!</div>';else{a.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let e='<ul class="search-result-list">';a.forEach(t=>{e+=t.item}),e+="</ul>",i.innerHTML=e}},m=()=>{var l;a.style.display="block",c.style.display="block",r.focus(),i.innerHTML='<div class="loading-data">Loading ...</div>',l=u,t?l():fetch(n).then(e=>e.text()).then(n=>{t=!0,e=o?[...(new DOMParser).parseFromString(n,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").innerHTML,content:e.querySelector("content").innerHTML,url:e.querySelector("url").innerHTML})):JSON.parse(n),l&&l()})};"auto"===localsearch.options.trigger?r.addEventListener("input",u):(document.querySelector(".search-icon").addEventListener("click",u),r.addEventListener("keypress",e=>{13===e.keyCode&&u()})),document.querySelectorAll(".popup-trigger").forEach(e=>e.addEventListener("click",m));const p=()=>{a.style.display="none",c.style.display="none"};a.addEventListener("click",p),document.querySelector(".popup-btn-close").addEventListener("click",p)}),lozad("[data-src]").observe(),mediumZoom('.post-body img:not([data-zoomable="false"]), [data-zoomable]:not([data-zoomable="false"])',{background:"var(--bg-color, #fff)"}),(e=>{const t=e.querySelector(".reward-box");e.querySelectorAll(".reward-button").forEach(e=>{e.addEventListener("mouseover",()=>{t.childNodes.forEach(e=>{1===e.nodeType&&(e.style.display="none")});const o=e.classList[1];t.querySelector("."+o).style.display="block",t.classList.add("active")})});const o=e.querySelector(".reward-container");o&&o.addEventListener("mouseleave",()=>{t.classList.remove("active")})})(document),(e=>{const t=e.querySelectorAll(".comment-button");if(t.length>0){t.forEach(o=>{const n=o.classList[2];o.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active")),o.classList.add("active"),e.querySelectorAll(".comment-body").forEach(e=>e.classList.remove("active")),e.querySelector(".comment-body."+n).classList.add("active"),localStorage.setItem("comments_active",n)})});const o=localStorage.getItem("comments_active")||t[0].classList[2],n=e.querySelector(".comment-button."+o);n&&n.click()}})(document),(e=>{let t=localStorage.getItem("font_size_value")||14;const o=()=>{e.querySelector("body").style.fontSize=t+"px",e.querySelector(".font-size-ol-value").innerHTML=t,localStorage.setItem("font_size_value",t)};14!==t&&o(),e.querySelector(".font-size-ol-plus").addEventListener("click",()=>{t++,o()}),e.querySelector(".font-size-ol-sub").addEventListener("click",()=>{t--,o()})})(document);let openGitter=function(){};document.addEventListener("gitter-sidecar-instance-started",e=>{openGitter=()=>{e.detail.chat.toggleChat(!0)}}),((e,t)=>{const o=function(){const o=t.documentElement.offsetHeight,n=t.documentElement.scrollHeight,r=t.documentElement.scrollTop||e.pageYOffset||t.body.scrollTop;let i=Math.round(r/(n-o)*100);i>100&&(i=100);const a=t.querySelector(".moon-menu-icon"),c=t.querySelector(".moon-menu-text");i?(a.style.display="none",c.style.display="block",c.innerHTML=i+"%"):(i=0,a.style.display="block",c.style.display="none");t.querySelector(".moon-menu-border").style.strokeDasharray=196*i/100+" 196"};e.addEventListener("load",()=>{o()}),e.addEventListener("scroll",o),t.querySelector(".moon-menu-button").addEventListener("click",()=>{t.querySelector(".moon-menu-icon").classList.toggle("active");const e=t.querySelector(".moon-menu-items");e.classList.toggle("active");const o=t.querySelectorAll(".moon-menu-item");if(e.classList.contains("active"))for(let e=0;e<o.length;e++)o[e].style.top=-3-3*e+"em",o[e].style.opacity=.9;else for(let e=0;e<o.length;e++)o[e].style.top="1em",o[e].style.opacity=0})})(window,document);var back2top=()=>{window.scroll({top:0,behavior:"smooth"})},back2bottom=()=>{const e=document.documentElement.offsetHeight,t=document.documentElement.scrollHeight;window.scroll({top:t-e,behavior:"smooth"})};const exclamationSVG='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>',timesSVG='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>',initServerList=e=>{e.querySelector(".more").addEventListener("click",()=>{e.remove();const t=document.createElement("div");t.classList.add("server-list-bg"),document.body.append(t);const o=document.createElement("div");o.classList.add("server-list-container"),document.body.append(o);const n=document.createElement("div");n.classList.add("server-list-card","card"),n.innerHTML=`<div><h1>详情<span class="close">${timesSVG}</span></h1></div>`,o.append(n);const r=document.createElement("div");r.innerHTML="正在获取数据...",n.append(r),fetch("/server-list.html").then(e=>e.text()).then(e=>{r.innerHTML=e}),n.querySelector(".close").addEventListener("click",()=>{t.remove(),o.remove()})})};function print_nav_timing_data(){const e=performance.getEntriesByType("navigation");if(e)for(let t=0;t<e.length;t++){const o=e[t];if(o.domComplete>1e4){console.log("DOM complete = "+o.domComplete);const e=document.createElement("div");e.classList.add("server-list-top"),e.innerHTML=exclamationSVG+' Sorry 服务器刚刚走神了！ <span class="more">详情</span>',document.body.prepend(e),initServerList(e)}}}if(["dnocm.com","jiangtj.com","zh.jiangtj.com","dnocm.netlify.app","jiangtj.gitlab.io"].indexOf(window.location.hostname)<0){const e=document.createElement("div");e.classList.add("server-list-top"),e.innerHTML=exclamationSVG+' 您访问的是非正式的站点！ <span class="more">详情</span>',document.body.prepend(e),initServerList(e)}else window.onload=print_nav_timing_data;