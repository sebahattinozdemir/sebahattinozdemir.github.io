/*! For license information please see 8250.35da8804.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[879,1536,3260,8250,9155],{3455:(n,e,t)=>{t.r(e),t.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>l,OVERLAY_BACK_BUTTON_PRIORITY:()=>s,blockHardwareBackButton:()=>u,shouldUseCloseWatcher:()=>a,startHardwareBackButton:()=>c});var r=t(6326),i=t(5102),o=t(301),a=(t(7425),function(){return o.c.get("experimentalCloseWatcher",!1)&&void 0!==i.w&&"CloseWatcher"in i.w}),u=function(){document.addEventListener("backbutton",(function(){}))},c=function(){var n=document,e=!1,t=function(){if(!e){var t=0,i=[],o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,e){i.push({priority:n,handler:e,id:t++})}}});n.dispatchEvent(o);var a=function(){if(i.length>0){var n={priority:Number.MIN_SAFE_INTEGER,handler:function(){},id:-1};i.forEach((function(e){e.priority>=n.priority&&(n=e)})),e=!0,i=i.filter((function(e){return e.id!==n.id})),function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e,t;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),(null===n||void 0===n?void 0:n.handler)?null==(e=n.handler(a))?[3,2]:[4,e]:[3,2];case 1:r.sent(),r.label=2;case 2:return[3,4];case 3:return t=r.sent(),console.error(t),[3,4];case 4:return[2]}}))}))}(n).then((function(){return e=!1}))}};a()}};if(a()){var o,u=function(){null===o||void 0===o||o.destroy(),(o=new i.w.CloseWatcher).onclose=function(){t(),u()}};u()}else n.addEventListener("backbutton",t)},s=100,l=99},3260:(n,e,t)=>{t.r(e),t.d(e,{a:()=>d,b:()=>f,c:()=>a,d:()=>g,e:()=>w,f:()=>b,g:()=>v,h:()=>p,i:()=>l,j:()=>T,k:()=>c,l:()=>E,m:()=>u,n:()=>m,o:()=>y,p:()=>H,q:()=>A,r:()=>h,s:()=>O,t:()=>i,u:()=>_,v:()=>x});var r=t(6326),i=function(n,e){return void 0===e&&(e=0),new Promise((function(t){o(n,e,t)}))},o=function(n,e,t){var r,i;void 0===e&&(e=0);var o={passive:!0},a=function(){r&&r()},u=function(e){void 0!==e&&n!==e.target||(a(),t(e))};return n&&(n.addEventListener("webkitTransitionEnd",u,o),n.addEventListener("transitionend",u,o),i=setTimeout(u,e+500),r=function(){void 0!==i&&(clearTimeout(i),i=void 0),n.removeEventListener("webkitTransitionEnd",u,o),n.removeEventListener("transitionend",u,o)}),a},a=function(n,e){n.componentOnReady?n.componentOnReady().then((function(n){return e(n)})):h((function(){return e(n)}))},u=function(n){return void 0!==n.componentOnReady},c=function(n,e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){n.hasAttribute(e)&&(null!==n.getAttribute(e)&&(t[e]=n.getAttribute(e)),n.removeAttribute(e))})),t},s=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],l=function(n,e){var t=s;return e&&e.length>0&&(t=t.filter((function(n){return!e.includes(n)}))),c(n,t)},d=function(n,e,t,r){var i;if("undefined"!==typeof window){var o=window,a=null===(i=null===o||void 0===o?void 0:o.Ionic)||void 0===i?void 0:i.config;if(a){var u=a.get("_ael");if(u)return u(n,e,t,r);if(a._ael)return a._ael(n,e,t,r)}}return n.addEventListener(e,t,r)},f=function(n,e,t,r){var i;if("undefined"!==typeof window){var o=window,a=null===(i=null===o||void 0===o?void 0:o.Ionic)||void 0===i?void 0:i.config;if(a){var u=a.get("_rel");if(u)return u(n,e,t,r);if(a._rel)return a._rel(n,e,t,r)}}return n.removeEventListener(e,t,r)},v=function(n,e){return void 0===e&&(e=n),n.shadowRoot||e},h=function(n){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(n):"function"===typeof requestAnimationFrame?requestAnimationFrame(n):setTimeout(n)},m=function(n){return!!n.shadowRoot&&!!n.attachShadow},p=function(n){var e=n.closest("ion-item");return e?e.querySelector("ion-label"):null},b=function(n){if(n.focus(),n.classList.contains("ion-focusable")){var e=n.closest("ion-app");e&&e.setFocus([n])}},w=function(n,e){var t,r=n.getAttribute("aria-labelledby"),i=n.id,o=null!==r&&""!==r.trim()?r:e+"-lbl",a=null!==r&&""!==r.trim()?document.getElementById(r):p(n);return a?(null===r&&(a.id=o),t=a.textContent,a.setAttribute("aria-hidden","true")):""!==i.trim()&&(a=document.querySelector('label[for="'.concat(i,'"]')))&&(""!==a.id?o=a.id:a.id=o="".concat(i,"-lbl"),t=a.textContent),{label:a,labelId:o,labelText:t}},g=function(n,e,t,r,i){if(n||m(e)){var o=e.querySelector("input.aux-input");o||((o=e.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),e.appendChild(o)),o.disabled=i,o.name=t,o.value=r||""}},E=function(n,e,t){return Math.max(n,Math.min(e,t))},y=function(n,e){if(!n){var t="ASSERT: "+e;throw console.error(t),new Error(t)}},_=function(n){return n.timeStamp||Date.now()},x=function(n){if(n){var e=n.changedTouches;if(e&&e.length>0){var t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},H=function(n){var e="rtl"===document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'.concat(n,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},T=function(n,e){var t=n._original||n;return{_original:n,emit:A(t.emit.bind(t),e)}},A=function(n,e){var t;return void 0===e&&(e=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(t),t=setTimeout.apply(void 0,(0,r.fX)([n,e],i,!1))}},O=function(n,e){if(null!==n&&void 0!==n||(n={}),null!==e&&void 0!==e||(e={}),n===e)return!0;var t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(var r=0,i=t;r<i.length;r++){var o=i[r];if(!(o in e))return!1;if(n[o]!==e[o])return!1}return!0}},8250:(n,e,t)=>{t.r(e),t.d(e,{m:()=>h});var r=t(6326),i=t(5102),o=t(3455),a=t(9155),u=t(3260),c=t(301),s=t(997),l=function(n){return(0,s.c)().duration(n?400:300)},d=function(n){var e,t,r=n.width+8,i=(0,s.c)(),o=(0,s.c)();n.isEndSide?(e=r+"px",t="0px"):(e=-r+"px",t="0px"),i.addElement(n.menuInnerEl).fromTo("transform","translateX(".concat(e,")"),"translateX(".concat(t,")"));var a="ios"===(0,c.b)(n),u=a?.2:.25;return o.addElement(n.backdropEl).fromTo("opacity",.01,u),l(a).addAnimation([i,o])},f=function(n){var e,t,r=(0,c.b)(n),i=n.width;n.isEndSide?(e=-i+"px",t=i+"px"):(e=i+"px",t=-i+"px");var o=(0,s.c)().addElement(n.menuInnerEl).fromTo("transform","translateX(".concat(t,")"),"translateX(0px)"),a=(0,s.c)().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(e,")")),u=(0,s.c)().addElement(n.backdropEl).fromTo("opacity",.01,.32);return l("ios"===r).addAnimation([o,a,u])},v=function(n){var e=(0,c.b)(n),t=n.width*(n.isEndSide?-1:1)+"px",r=(0,s.c)().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(t,")"));return l("ios"===e).addAnimation(r)},h=function(){var n=new Map,e=[],t=function(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return(0,r.sH)(void 0,(0,r.fX)([n],t,!0),void 0,(function(n,t){var i,o,u;return void 0===t&&(t=!1),(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,b()];case 1:if(r.sent(),"start"===n||"end"===n){if((i=e.filter((function(e){return e.side===n&&!e.disabled}))).length>=1)return i.length>1&&t&&(0,a.p)('menuController queried for a menu on the "'.concat(n,'" side, but ').concat(i.length," menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."),i.map((function(n){return n.el}))),[2,i[0].el];if((o=e.filter((function(e){return e.side===n}))).length>=1)return o.length>1&&t&&(0,a.p)('menuController queried for a menu on the "'.concat(n,'" side, but ').concat(o.length," menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."),o.map((function(n){return n.el}))),[2,o[0].el]}else if(null!=n)return[2,p((function(e){return e.menuId===n}))];return u=p((function(n){return!n.disabled})),u?[2,u]:[2,e.length>0?e[0].el:void 0]}}))}))},c=function(){return(0,r.sH)(void 0,void 0,void 0,(function(){return(0,r.YH)(this,(function(n){switch(n.label){case 0:return[4,b()];case 1:return n.sent(),[2,l()]}}))}))},s=function(e,t){n.set(e,t)},l=function(){return p((function(n){return n._isOpen}))},h=function(){return e.map((function(n){return n.el}))},m=function(){return e.some((function(n){return n.isAnimating}))},p=function(n){var t=e.find(n);if(void 0!==t)return t.el},b=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(n){return new Promise((function(e){return(0,u.c)(n,e)}))})))};return s("reveal",v),s("push",f),s("overlay",d),null===i.d||void 0===i.d||i.d.addEventListener("ionBackButton",(function(n){var e=l();e&&n.detail.register(o.MENU_BACK_BUTTON_PRIORITY,(function(){return e.close()}))})),{registerAnimation:s,get:t,getMenus:function(){return(0,r.sH)(void 0,void 0,void 0,(function(){return(0,r.YH)(this,(function(n){switch(n.label){case 0:return[4,b()];case 1:return n.sent(),[2,h()]}}))}))},getOpen:c,isEnabled:function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,t(n)];case 1:return(e=r.sent())?[2,!e.disabled]:[2,!1]}}))}))},swipeGesture:function(n,e){return(0,r.sH)(void 0,void 0,void 0,(function(){var i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,t(e)];case 1:return(i=r.sent())&&(i.swipeGesture=n),[2,i]}}))}))},isAnimating:function(){return(0,r.sH)(void 0,void 0,void 0,(function(){return(0,r.YH)(this,(function(n){switch(n.label){case 0:return[4,b()];case 1:return n.sent(),[2,m()]}}))}))},isOpen:function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return null==n?[3,2]:[4,t(n)];case 1:return[2,void 0!==(e=r.sent())&&e.isOpen()];case 2:return[4,c()];case 3:return[2,void 0!==(e=r.sent())]}}))}))},enable:function(n,e){return(0,r.sH)(void 0,void 0,void 0,(function(){var i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,t(e)];case 1:return(i=r.sent())&&(i.disabled=!n),[2,i]}}))}))},toggle:function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,t(n,!0)];case 1:return(e=r.sent())?[2,e.toggle()]:[2,!1]}}))}))},close:function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,void 0!==n?t(n,!0):c()];case 1:return void 0!==(e=r.sent())?[2,e.close()]:[2,!1]}}))}))},open:function(n){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,t(n,!0)];case 1:return(e=r.sent())?[2,e.open()]:[2,!1]}}))}))},_getOpenSync:l,_createAnimation:function(e,t){var r=n.get(e);if(!r)throw new Error("animation not registered");return r(t)},_register:function(n){e.indexOf(n)<0&&e.push(n)},_unregister:function(n){var t=e.indexOf(n);t>-1&&e.splice(t,1)},_setOpen:function(n,e,t){return(0,r.sH)(void 0,void 0,void 0,(function(){var i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return m()?[2,!1]:e?[4,c()]:[3,3];case 1:return(i=r.sent())&&n.el!==i?[4,i.setOpen(!1,!1)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,n._setOpen(e,t)]}}))}))}}}()},9155:(n,e,t)=>{t.r(e),t.d(e,{a:()=>o,b:()=>a,p:()=>i});var r=t(6326),i=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return console.warn.apply(console,(0,r.fX)(["[Ionic Warning]: ".concat(n)],e,!1))},o=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return console.error.apply(console,(0,r.fX)(["[Ionic Error]: ".concat(n)],e,!1))},a=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return console.error("<".concat(n.tagName.toLowerCase(),"> must be used inside ").concat(e.join(" or "),"."))}}}]);
//# sourceMappingURL=8250.35da8804.chunk.js.map