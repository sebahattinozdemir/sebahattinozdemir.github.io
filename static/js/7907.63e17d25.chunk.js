/*! For license information please see 7907.63e17d25.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[879,1536,3260,7907,9155],{3260:(e,r,n)=>{n.r(r),n.d(r,{a:()=>d,b:()=>f,c:()=>a,d:()=>y,e:()=>w,f:()=>h,g:()=>v,h:()=>b,i:()=>s,j:()=>k,k:()=>l,l:()=>g,m:()=>u,n:()=>p,o:()=>_,p:()=>T,q:()=>q,r:()=>m,s:()=>A,t:()=>i,u:()=>x,v:()=>E});var t=n(6326),i=function(e,r){return void 0===r&&(r=0),new Promise((function(n){o(e,r,n)}))},o=function(e,r,n){var t,i;void 0===r&&(r=0);var o={passive:!0},a=function(){t&&t()},u=function(r){void 0!==r&&e!==r.target||(a(),n(r))};return e&&(e.addEventListener("webkitTransitionEnd",u,o),e.addEventListener("transitionend",u,o),i=setTimeout(u,r+500),t=function(){void 0!==i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",u,o),e.removeEventListener("transitionend",u,o)}),a},a=function(e,r){e.componentOnReady?e.componentOnReady().then((function(e){return r(e)})):m((function(){return r(e)}))},u=function(e){return void 0!==e.componentOnReady},l=function(e,r){void 0===r&&(r=[]);var n={};return r.forEach((function(r){e.hasAttribute(r)&&(null!==e.getAttribute(r)&&(n[r]=e.getAttribute(r)),e.removeAttribute(r))})),n},c=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],s=function(e,r){var n=c;return r&&r.length>0&&(n=n.filter((function(e){return!r.includes(e)}))),l(e,n)},d=function(e,r,n,t){var i;if("undefined"!==typeof window){var o=window,a=null===(i=null===o||void 0===o?void 0:o.Ionic)||void 0===i?void 0:i.config;if(a){var u=a.get("_ael");if(u)return u(e,r,n,t);if(a._ael)return a._ael(e,r,n,t)}}return e.addEventListener(r,n,t)},f=function(e,r,n,t){var i;if("undefined"!==typeof window){var o=window,a=null===(i=null===o||void 0===o?void 0:o.Ionic)||void 0===i?void 0:i.config;if(a){var u=a.get("_rel");if(u)return u(e,r,n,t);if(a._rel)return a._rel(e,r,n,t)}}return e.removeEventListener(r,n,t)},v=function(e,r){return void 0===r&&(r=e),e.shadowRoot||r},m=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},p=function(e){return!!e.shadowRoot&&!!e.attachShadow},b=function(e){var r=e.closest("ion-item");return r?r.querySelector("ion-label"):null},h=function(e){if(e.focus(),e.classList.contains("ion-focusable")){var r=e.closest("ion-app");r&&r.setFocus([e])}},w=function(e,r){var n,t=e.getAttribute("aria-labelledby"),i=e.id,o=null!==t&&""!==t.trim()?t:r+"-lbl",a=null!==t&&""!==t.trim()?document.getElementById(t):b(e);return a?(null===t&&(a.id=o),n=a.textContent,a.setAttribute("aria-hidden","true")):""!==i.trim()&&(a=document.querySelector('label[for="'.concat(i,'"]')))&&(""!==a.id?o=a.id:a.id=o="".concat(i,"-lbl"),n=a.textContent),{label:a,labelId:o,labelText:n}},y=function(e,r,n,t,i){if(e||p(r)){var o=r.querySelector("input.aux-input");o||((o=r.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),r.appendChild(o)),o.disabled=i,o.name=n,o.value=t||""}},g=function(e,r,n){return Math.max(e,Math.min(r,n))},_=function(e,r){if(!e){var n="ASSERT: "+r;throw console.error(n),new Error(n)}},x=function(e){return e.timeStamp||Date.now()},E=function(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var n=r[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},T=function(e){var r="rtl"===document.dir;switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},k=function(e,r){var n=e._original||e;return{_original:e,emit:q(n.emit.bind(n),r)}},q=function(e,r){var n;return void 0===r&&(r=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,(0,t.fX)([e,r],i,!1))}},A=function(e,r){if(null!==e&&void 0!==e||(e={}),null!==r&&void 0!==r||(r={}),e===r)return!0;var n=Object.keys(e);if(n.length!==Object.keys(r).length)return!1;for(var t=0,i=n;t<i.length;t++){var o=i[t];if(!(o in r))return!1;if(e[o]!==r[o])return!1}return!0}},9155:(e,r,n)=>{n.r(r),n.d(r,{a:()=>o,b:()=>a,p:()=>i});var t=n(6326),i=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return console.warn.apply(console,(0,t.fX)(["[Ionic Warning]: ".concat(e)],r,!1))},o=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return console.error.apply(console,(0,t.fX)(["[Ionic Error]: ".concat(e)],r,!1))},a=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return console.error("<".concat(e.tagName.toLowerCase(),"> must be used inside ").concat(r.join(" or "),"."))}},7907:(e,r,n)=>{n.r(r),n.d(r,{I:()=>u,a:()=>d,b:()=>a,c:()=>m,d:()=>b,f:()=>f,g:()=>s,i:()=>c,p:()=>p,r:()=>h,s:()=>v});var t=n(6326),i=n(3260),o=n(9155),a="ion-content",u=".ion-content-scroll-host",l="".concat(a,", ").concat(u),c=function(e){return"ION-CONTENT"===e.tagName},s=function(e){return(0,t.sH)(void 0,void 0,void 0,(function(){return(0,t.YH)(this,(function(r){switch(r.label){case 0:return c(e)?[4,new Promise((function(r){return(0,i.c)(e,r)}))]:[3,2];case 1:return r.sent(),[2,e.getScrollElement()];case 2:return[2,e]}}))}))},d=function(e){var r=e.querySelector(u);return r||e.querySelector(l)},f=function(e){return e.closest(l)},v=function(e,r){return c(e)?e.scrollToTop(r):Promise.resolve(e.scrollTo({top:0,left:0,behavior:r>0?"smooth":"auto"}))},m=function(e,r,n,t){return c(e)?e.scrollByPoint(r,n,t):Promise.resolve(e.scrollBy({top:n,left:r,behavior:t>0?"smooth":"auto"}))},p=function(e){return(0,o.b)(e,a)},b=function(e){if(c(e)){var r=e,n=r.scrollY;return r.scrollY=!1,n}return e.style.setProperty("overflow","hidden"),!0},h=function(e,r){c(e)?e.scrollY=r:e.style.removeProperty("overflow")}}}]);
//# sourceMappingURL=7907.63e17d25.chunk.js.map