/*! For license information please see 7214.77ea2b15.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[879,2721,3260,5102,7214],{3260:(e,n,t)=>{t.r(n),t.d(n,{a:()=>s,b:()=>f,c:()=>o,d:()=>y,e:()=>h,f:()=>w,g:()=>v,h:()=>b,i:()=>c,j:()=>A,k:()=>l,l:()=>g,m:()=>u,n:()=>p,o:()=>_,p:()=>k,q:()=>T,r:()=>m,s:()=>q,t:()=>r,u:()=>x,v:()=>E});var i=t(6326),r=function(e,n){return void 0===n&&(n=0),new Promise((function(t){a(e,n,t)}))},a=function(e,n,t){var i,r;void 0===n&&(n=0);var a={passive:!0},o=function(){i&&i()},u=function(n){void 0!==n&&e!==n.target||(o(),t(n))};return e&&(e.addEventListener("webkitTransitionEnd",u,a),e.addEventListener("transitionend",u,a),r=setTimeout(u,n+500),i=function(){void 0!==r&&(clearTimeout(r),r=void 0),e.removeEventListener("webkitTransitionEnd",u,a),e.removeEventListener("transitionend",u,a)}),o},o=function(e,n){e.componentOnReady?e.componentOnReady().then((function(e){return n(e)})):m((function(){return n(e)}))},u=function(e){return void 0!==e.componentOnReady},l=function(e,n){void 0===n&&(n=[]);var t={};return n.forEach((function(n){e.hasAttribute(n)&&(null!==e.getAttribute(n)&&(t[n]=e.getAttribute(n)),e.removeAttribute(n))})),t},d=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],c=function(e,n){var t=d;return n&&n.length>0&&(t=t.filter((function(e){return!n.includes(e)}))),l(e,t)},s=function(e,n,t,i){var r;if("undefined"!==typeof window){var a=window,o=null===(r=null===a||void 0===a?void 0:a.Ionic)||void 0===r?void 0:r.config;if(o){var u=o.get("_ael");if(u)return u(e,n,t,i);if(o._ael)return o._ael(e,n,t,i)}}return e.addEventListener(n,t,i)},f=function(e,n,t,i){var r;if("undefined"!==typeof window){var a=window,o=null===(r=null===a||void 0===a?void 0:a.Ionic)||void 0===r?void 0:r.config;if(o){var u=o.get("_rel");if(u)return u(e,n,t,i);if(o._rel)return o._rel(e,n,t,i)}}return e.removeEventListener(n,t,i)},v=function(e,n){return void 0===n&&(n=e),e.shadowRoot||n},m=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},p=function(e){return!!e.shadowRoot&&!!e.attachShadow},b=function(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null},w=function(e){if(e.focus(),e.classList.contains("ion-focusable")){var n=e.closest("ion-app");n&&n.setFocus([e])}},h=function(e,n){var t,i=e.getAttribute("aria-labelledby"),r=e.id,a=null!==i&&""!==i.trim()?i:n+"-lbl",o=null!==i&&""!==i.trim()?document.getElementById(i):b(e);return o?(null===i&&(o.id=a),t=o.textContent,o.setAttribute("aria-hidden","true")):""!==r.trim()&&(o=document.querySelector('label[for="'.concat(r,'"]')))&&(""!==o.id?a=o.id:o.id=a="".concat(r,"-lbl"),t=o.textContent),{label:o,labelId:a,labelText:t}},y=function(e,n,t,i,r){if(e||p(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=r,a.name=t,a.value=i||""}},g=function(e,n,t){return Math.max(e,Math.min(n,t))},_=function(e,n){if(!e){var t="ASSERT: "+n;throw console.error(t),new Error(t)}},x=function(e){return e.timeStamp||Date.now()},E=function(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},k=function(e){var n="rtl"===document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},A=function(e,n){var t=e._original||e;return{_original:e,emit:T(t.emit.bind(t),n)}},T=function(e,n){var t;return void 0===n&&(n=0),function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];clearTimeout(t),t=setTimeout.apply(void 0,(0,i.fX)([e,n],r,!1))}},q=function(e,n){if(null!==e&&void 0!==e||(e={}),null!==n&&void 0!==n||(n={}),e===n)return!0;var t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(var i=0,r=t;i<r.length;i++){var a=r[i];if(!(a in n))return!1;if(e[a]!==n[a])return!1}return!0}},5102:(e,n,t)=>{t.r(n),t.d(n,{d:()=>r,w:()=>i});var i="undefined"!==typeof window?window:void 0,r="undefined"!==typeof document?document:void 0},7214:(e,n,t)=>{t.r(n),t.d(n,{c:()=>a});var i=t(5102),r=t(3260),a=function(e,n,t){var a,o=function(){return void 0!==n()&&void 0===e.label&&null!==t()},u=function(){var r=n();if(void 0!==r)if(o()){var l=t().scrollWidth;if(0===l&&null===r.offsetParent&&void 0!==i.w&&"IntersectionObserver"in i.w){if(void 0!==a)return;var d=a=new IntersectionObserver((function(e){1===e[0].intersectionRatio&&(u(),d.disconnect(),a=void 0)}),{threshold:.01,root:e});d.observe(r)}else r.style.setProperty("width","".concat(.75*l,"px"))}else r.style.removeProperty("width")};return{calculateNotchWidth:function(){o()&&(0,r.r)((function(){u()}))},destroy:function(){a&&(a.disconnect(),a=void 0)}}}}}]);
//# sourceMappingURL=7214.77ea2b15.chunk.js.map