/*! For license information please see 1985.e97dd872.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[506,879,1536,1985,3260,7907,9155],{506:(n,i,e)=>{e.r(i),e.d(i,{E:()=>f,I:()=>c,a:()=>t,g:()=>u,s:()=>d});var t=function(n){try{if(n instanceof c)return n.value;if(!a()||"string"!==typeof n||""===n)return n;if(n.includes("onload="))return"";var i=document.createDocumentFragment(),e=document.createElement("div");i.appendChild(e),e.innerHTML=n,s.forEach((function(n){for(var e=i.querySelectorAll(n),t=e.length-1;t>=0;t--){var a=e[t];a.parentNode?a.parentNode.removeChild(a):i.removeChild(a);for(var l=o(a),s=0;s<l.length;s++)r(l[s])}}));for(var t=o(i),l=0;l<t.length;l++)r(t[l]);var d=document.createElement("div");d.appendChild(i);var u=d.querySelector("div");return null!==u?u.innerHTML:d.innerHTML}catch(n){return console.error(n),""}},r=function(n){if(!n.nodeType||1===n.nodeType)if("undefined"===typeof NamedNodeMap||n.attributes instanceof NamedNodeMap){for(var i=n.attributes.length-1;i>=0;i--){var e=n.attributes.item(i),t=e.name;if(l.includes(t.toLowerCase())){var a=e.value,s=n[t];(null!=a&&a.toLowerCase().includes("javascript:")||null!=s&&s.toLowerCase().includes("javascript:"))&&n.removeAttribute(t)}else n.removeAttribute(t)}var c=o(n);for(i=0;i<c.length;i++)r(c[i])}else n.remove()},o=function(n){return null!=n.children?n.children:n.childNodes},a=function(){var n,i=window,e=null===(n=null===i||void 0===i?void 0:i.Ionic)||void 0===n?void 0:n.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},l=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"],c=function(n){this.value=n},d=function(n){var i=window,e=i.Ionic;if(!e||!e.config||"Object"===e.config.constructor.name)return i.Ionic=i.Ionic||{},i.Ionic.config=Object.assign(Object.assign({},i.Ionic.config),n),i.Ionic.config},u=function(){var n,i=window,e=null===(n=null===i||void 0===i?void 0:i.Ionic)||void 0===n?void 0:n.config;return e?e.mode?e.mode:e.get("mode"):"md"},f=!1},3260:(n,i,e)=>{e.r(i),e.d(i,{a:()=>u,b:()=>f,c:()=>a,d:()=>y,e:()=>b,f:()=>g,g:()=>h,h:()=>m,i:()=>d,j:()=>L,k:()=>s,l:()=>x,m:()=>l,n:()=>v,o:()=>w,p:()=>k,q:()=>S,r:()=>p,s:()=>_,t:()=>r,u:()=>E,v:()=>T});var t=e(6326),r=function(n,i){return void 0===i&&(i=0),new Promise((function(e){o(n,i,e)}))},o=function(n,i,e){var t,r;void 0===i&&(i=0);var o={passive:!0},a=function(){t&&t()},l=function(i){void 0!==i&&n!==i.target||(a(),e(i))};return n&&(n.addEventListener("webkitTransitionEnd",l,o),n.addEventListener("transitionend",l,o),r=setTimeout(l,i+500),t=function(){void 0!==r&&(clearTimeout(r),r=void 0),n.removeEventListener("webkitTransitionEnd",l,o),n.removeEventListener("transitionend",l,o)}),a},a=function(n,i){n.componentOnReady?n.componentOnReady().then((function(n){return i(n)})):p((function(){return i(n)}))},l=function(n){return void 0!==n.componentOnReady},s=function(n,i){void 0===i&&(i=[]);var e={};return i.forEach((function(i){n.hasAttribute(i)&&(null!==n.getAttribute(i)&&(e[i]=n.getAttribute(i)),n.removeAttribute(i))})),e},c=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],d=function(n,i){var e=c;return i&&i.length>0&&(e=e.filter((function(n){return!i.includes(n)}))),s(n,e)},u=function(n,i,e,t){var r;if("undefined"!==typeof window){var o=window,a=null===(r=null===o||void 0===o?void 0:o.Ionic)||void 0===r?void 0:r.config;if(a){var l=a.get("_ael");if(l)return l(n,i,e,t);if(a._ael)return a._ael(n,i,e,t)}}return n.addEventListener(i,e,t)},f=function(n,i,e,t){var r;if("undefined"!==typeof window){var o=window,a=null===(r=null===o||void 0===o?void 0:o.Ionic)||void 0===r?void 0:r.config;if(a){var l=a.get("_rel");if(l)return l(n,i,e,t);if(a._rel)return a._rel(n,i,e,t)}}return n.removeEventListener(i,e,t)},h=function(n,i){return void 0===i&&(i=n),n.shadowRoot||i},p=function(n){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(n):"function"===typeof requestAnimationFrame?requestAnimationFrame(n):setTimeout(n)},v=function(n){return!!n.shadowRoot&&!!n.attachShadow},m=function(n){var i=n.closest("ion-item");return i?i.querySelector("ion-label"):null},g=function(n){if(n.focus(),n.classList.contains("ion-focusable")){var i=n.closest("ion-app");i&&i.setFocus([n])}},b=function(n,i){var e,t=n.getAttribute("aria-labelledby"),r=n.id,o=null!==t&&""!==t.trim()?t:i+"-lbl",a=null!==t&&""!==t.trim()?document.getElementById(t):m(n);return a?(null===t&&(a.id=o),e=a.textContent,a.setAttribute("aria-hidden","true")):""!==r.trim()&&(a=document.querySelector('label[for="'.concat(r,'"]')))&&(""!==a.id?o=a.id:a.id=o="".concat(r,"-lbl"),e=a.textContent),{label:a,labelId:o,labelText:e}},y=function(n,i,e,t,r){if(n||v(i)){var o=i.querySelector("input.aux-input");o||((o=i.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),i.appendChild(o)),o.disabled=r,o.name=e,o.value=t||""}},x=function(n,i,e){return Math.max(n,Math.min(i,e))},w=function(n,i){if(!n){var e="ASSERT: "+i;throw console.error(e),new Error(e)}},E=function(n){return n.timeStamp||Date.now()},T=function(n){if(n){var i=n.changedTouches;if(i&&i.length>0){var e=i[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},k=function(n){var i="rtl"===document.dir;switch(n){case"start":return i;case"end":return!i;default:throw new Error('"'.concat(n,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},L=function(n,i){var e=n._original||n;return{_original:n,emit:S(e.emit.bind(e),i)}},S=function(n,i){var e;return void 0===i&&(i=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,(0,t.fX)([n,i],r,!1))}},_=function(n,i){if(null!==n&&void 0!==n||(n={}),null!==i&&void 0!==i||(i={}),n===i)return!0;var e=Object.keys(n);if(e.length!==Object.keys(i).length)return!1;for(var t=0,r=e;t<r.length;t++){var o=r[t];if(!(o in i))return!1;if(n[o]!==i[o])return!1}return!0}},9155:(n,i,e)=>{e.r(i),e.d(i,{a:()=>o,b:()=>a,p:()=>r});var t=e(6326),r=function(n){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];return console.warn.apply(console,(0,t.fX)(["[Ionic Warning]: ".concat(n)],i,!1))},o=function(n){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];return console.error.apply(console,(0,t.fX)(["[Ionic Error]: ".concat(n)],i,!1))},a=function(n){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];return console.error("<".concat(n.tagName.toLowerCase(),"> must be used inside ").concat(i.join(" or "),"."))}},7907:(n,i,e)=>{e.r(i),e.d(i,{I:()=>l,a:()=>u,b:()=>a,c:()=>p,d:()=>m,f:()=>f,g:()=>d,i:()=>c,p:()=>v,r:()=>g,s:()=>h});var t=e(6326),r=e(3260),o=e(9155),a="ion-content",l=".ion-content-scroll-host",s="".concat(a,", ").concat(l),c=function(n){return"ION-CONTENT"===n.tagName},d=function(n){return(0,t.sH)(void 0,void 0,void 0,(function(){return(0,t.YH)(this,(function(i){switch(i.label){case 0:return c(n)?[4,new Promise((function(i){return(0,r.c)(n,i)}))]:[3,2];case 1:return i.sent(),[2,n.getScrollElement()];case 2:return[2,n]}}))}))},u=function(n){var i=n.querySelector(l);return i||n.querySelector(s)},f=function(n){return n.closest(s)},h=function(n,i){return c(n)?n.scrollToTop(i):Promise.resolve(n.scrollTo({top:0,left:0,behavior:i>0?"smooth":"auto"}))},p=function(n,i,e,t){return c(n)?n.scrollByPoint(i,e,t):Promise.resolve(n.scrollBy({top:e,left:i,behavior:t>0?"smooth":"auto"}))},v=function(n){return(0,o.b)(n,a)},m=function(n){if(c(n)){var i=n,e=i.scrollY;return i.scrollY=!1,e}return n.style.setProperty("overflow","hidden"),!0},g=function(n,i){c(n)?n.scrollY=i:n.style.removeProperty("overflow")}},1985:(n,i,e)=>{e.r(i),e.d(i,{ion_infinite_scroll:()=>s,ion_infinite_scroll_content:()=>c});var t=e(6326),r=e(7425),o=e(7907),a=e(301),l=e(506),s=function(){function n(n){var i=this;(0,r.r)(this,n),this.ionInfinite=(0,r.d)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=function(){var n=i.scrollEl;if(!n||!i.canStart())return 1;var e=i.el.offsetHeight;if(0===e)return 2;var t=n.scrollTop,r=n.scrollHeight,o=n.offsetHeight,a=0!==i.thrPc?o*i.thrPc:i.thrPx;return("bottom"===i.position?r-e-t-a-o:t-e-a)<0&&!i.didFire?(i.isLoading=!0,i.didFire=!0,i.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return n.prototype.thresholdChanged=function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.connectedCallback=function(){return(0,t.sH)(this,void 0,void 0,(function(){var n,i,e=this;return(0,t.YH)(this,(function(t){switch(t.label){case 0:return(n=(0,o.f)(this.el))?(i=this,[4,(0,o.g)(n)]):((0,o.p)(this.el),[2]);case 1:return i.scrollEl=t.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&(0,r.w)((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)})),[2]}}))}))},n.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},n.prototype.complete=function(){return(0,t.sH)(this,void 0,void 0,(function(){var n,i,e=this;return(0,t.YH)(this,(function(t){return n=this.scrollEl,this.isLoading&&n?(this.isLoading=!1,"top"===this.position?(this.isBusy=!0,i=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){(0,r.e)((function(){var t=n.scrollHeight-i;requestAnimationFrame((function(){(0,r.w)((function(){n.scrollTop=t,e.isBusy=!1,e.didFire=!1}))}))}))}))):this.didFire=!1,[2]):[2]}))}))},n.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},n.prototype.enableScrollEvents=function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},n.prototype.render=function(){var n,i=(0,a.b)(this),e=this.disabled;return(0,r.h)(r.H,{key:"c2248d06232dd7771dd155693ec75f9258dc969e",class:(n={},n[i]=!0,n["infinite-scroll-loading"]=this.isLoading,n["infinite-scroll-enabled"]=!e,n)})},Object.defineProperty(n.prototype,"el",{get:function(){return(0,r.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(n,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),n}();s.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var c=function(){function n(n){(0,r.r)(this,n),this.customHTMLEnabled=a.c.get("innerHTMLTemplatesEnabled",l.E),this.loadingSpinner=void 0,this.loadingText=void 0}return n.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var n=(0,a.b)(this);this.loadingSpinner=a.c.get("infiniteLoadingSpinner",a.c.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.renderLoadingText=function(){var n=this.customHTMLEnabled,i=this.loadingText;return n?(0,r.h)("div",{class:"infinite-loading-text",innerHTML:(0,l.a)(i)}):(0,r.h)("div",{class:"infinite-loading-text"},this.loadingText)},n.prototype.render=function(){var n,i=(0,a.b)(this);return(0,r.h)(r.H,{key:"2f4afb07bcfe3e12528eb9cee8646a097e0b359f",class:(n={},n[i]=!0,n["infinite-scroll-content-".concat(i)]=!0,n)},(0,r.h)("div",{key:"af038177bf10c88c8970682487a4328689aaa5f2",class:"infinite-loading"},this.loadingSpinner&&(0,r.h)("div",{key:"1da5d419bc6a978b6a509fdab47dae347fc8d221",class:"infinite-loading-spinner"},(0,r.h)("ion-spinner",{key:"60cc5c64e0a317ac0005d5afe42c4bb8da58136f",name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))},n}();c.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);
//# sourceMappingURL=1985.e97dd872.chunk.js.map