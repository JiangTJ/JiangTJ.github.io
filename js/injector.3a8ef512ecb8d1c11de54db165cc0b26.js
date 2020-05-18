HTMLElement.prototype.outerHeight=function(e){var t=this.offsetHeight;if(!e)return t;var o=window.getComputedStyle(this);return t+=parseInt(o.marginTop,10)+parseInt(o.marginBottom,10)},HTMLElement.prototype.css=function(e){Object.assign(this.style,e)},HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils=NexT.$u={registerActiveMenuItem:function(){document.querySelectorAll(".menu .menu-item").forEach(e=>{var t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=t.pathname!==CONFIG.root&&0===location.pathname.indexOf(t.pathname);t.hostname===location.hostname&&(o||n)&&e.classList.add("menu-item-active")}),document.querySelectorAll("#sub-menu .menu-item").forEach(e=>{var t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");t.hostname===location.hostname&&o&&e.classList.add("menu-item-active")})},registerScrollSave:function(){if(!CONFIG.scroll.save)return;let e,t="scroll:"+location.pathname;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout((function(){localStorage.setItem(t,window.scrollY)}),250)});let o=localStorage.getItem(t);void 0!==o&&window.scroll({top:o})},registerSidebarTOC:function(){const e=document.querySelectorAll(".post-toc li"),t=[...e].map(e=>{var t=e.querySelector("a.nav-link");return t.addEventListener("click",e=>{e.preventDefault();var t=document.getElementById(e.currentTarget.getAttribute("href").replace("#","")).getBoundingClientRect().top+window.scrollY+1;window.scroll({top:t,behavior:"smooth"})}),document.getElementById(t.getAttribute("href").replace("#",""))});var o=document.querySelector(".post-toc-wrap");!function n(r){r=Math.floor(r+1e4);let a=new IntersectionObserver((a,c)=>{let i=document.documentElement.scrollHeight+100;if(i>r)return c.disconnect(),void n(i);let l=function(e){let o=0,n=e[o];if(n.boundingClientRect.top>0)return o=t.indexOf(n.target),0===o?0:o-1;for(;o<e.length;o++){if(!(e[o].boundingClientRect.top<=0))return t.indexOf(n.target);n=e[o]}return t.indexOf(n.target)}(a);!function(e){if(!e.classList.contains("active-current")){document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current");for(var t=e.parentNode;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;o.scroll({top:o.scrollTop-o.offsetHeight/2+e.getBoundingClientRect().top-o.getBoundingClientRect().top,behavior:"smooth"})}}(e[l])},{rootMargin:r+"px 0px -100% 0px",threshold:0});t.forEach(e=>a.observe(e))}(document.documentElement.scrollHeight)},registerReward:function(){let e=document.querySelector(".reward-box");document.querySelectorAll(".reward-button").forEach(t=>{t.addEventListener("mouseover",()=>{e.childNodes.forEach(e=>{1===e.nodeType&&(e.style.display="none")});let o=t.classList[1];e.querySelector("."+o).style.display="block",e.classList.add("active")})});let t=document.querySelector(".reward-container");t&&t.addEventListener("mouseleave",()=>{e.classList.remove("active")})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.wrap(t)})},loadComments:function(e,t){let o=new IntersectionObserver((e,o)=>{e[0].isIntersecting&&(t(),o.disconnect())});return o.observe(e),o}},NexT.boot={},NexT.boot.registerEvents=function(){document.querySelector(".site-nav-toggle button").addEventListener("click",()=>{document.querySelector(".site-nav").classList.toggle("site-nav-on")}),document.querySelectorAll(".sidebar-nav li").forEach((e,t)=>{e.addEventListener("click",e=>{var o=e.currentTarget;if(!o.classList.contains("sidebar-nav-active")){var n=document.querySelectorAll(".sidebar-panel"),r=n[t];n[1-t].classList.remove("sidebar-panel-active"),r.classList.add("sidebar-panel-active"),[...o.parentNode.children].forEach(e=>{e.classList.remove("sidebar-nav-active")}),o.classList.add("sidebar-nav-active")}})}),window.addEventListener("hashchange",()=>{var e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){var t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}})},NexT.boot.refresh=function(){NexT.utils.registerActiveMenuItem(),NexT.utils.registerSidebarTOC(),NexT.utils.registerScrollSave(),NexT.utils.registerReward(),NexT.utils.wrapTableWithBox()},window.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh()});"use strict";((e,t)=>{const o=function(){const o=t.documentElement.offsetHeight,n=t.documentElement.scrollHeight,r=t.documentElement.scrollTop||e.pageYOffset||t.body.scrollTop;let a=Math.round(r/(n-o)*100);a>100&&(a=100);const c=t.querySelector(".moon-menu-icon"),i=t.querySelector(".moon-menu-text");a?(c.style.display="none",i.style.display="block",i.innerHTML=a+"%"):(a=0,c.style.display="block",i.style.display="none");t.querySelector(".moon-menu-border").style.strokeDasharray=196*a/100+" 196"};e.addEventListener("load",()=>{o()}),e.addEventListener("scroll",o),t.querySelector(".moon-menu-button").addEventListener("click",()=>{t.querySelector(".moon-menu-icon").classList.toggle("active");const e=t.querySelector(".moon-menu-items");e.classList.toggle("active");const o=t.querySelectorAll(".moon-menu-item");if(e.classList.contains("active"))for(let e=0;e<o.length;e++)o[e].style.top=-3-3*e+"em",o[e].style.opacity=.9;else for(let e=0;e<o.length;e++)o[e].style.top="1em",o[e].style.opacity=0})})(window,document);var back2top=()=>{window.scroll({top:0,behavior:"smooth"})},back2bottom=()=>{const e=document.documentElement.offsetHeight,t=document.documentElement.scrollHeight;window.scroll({top:t-e,behavior:"smooth"})};