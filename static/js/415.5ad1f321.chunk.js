"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[415],{415:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>E});var o=n(6326),i=n(5102),r=n(7907),a=n(3260),u=n(3377),d=(n(1412),new WeakMap),c=function(e,t,n,o,i){void 0===o&&(o=0),void 0===i&&(i=!1),d.has(e)!==n&&(n?s(e,t,o,i):l(e,t))},s=function(e,t,n,o){void 0===o&&(o=!1);var i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),d.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=d.get(e);n&&(d.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f="input, textarea, [no-blur], [contenteditable]",v=function(e,t,n,o){var i=e.top,r=e.bottom,a=t.top,u=a+15,d=Math.min(t.bottom,o-n)-50-r,c=u-i,s=Math.round(d<0?-d:c>0?-c:0),l=Math.min(s,i-a),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(i-u)}},w="$ionPaddingTimer",h=function(e,t,n){var o=e[w];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e[w]=setTimeout((function(){e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},m=function(e,t,n){e.addEventListener("focusout",(function(){t&&h(t,0,n)}),{once:!0})},b=0,p="data-ionic-skip-scroll-assist",y=function(e){document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},g=function(e,t,n,i,u,d){for(var s=[],l=6;l<arguments.length;l++)s[l-6]=arguments[l];return(0,o.sH)(void 0,(0,o.fX)([e,t,n,i,u,d],s,!0),void 0,(function(e,t,n,i,u,d,s,l,f){var w,p,g,E,S,L;return void 0===s&&(s=!1),void 0===l&&(l=0),void 0===f&&(f=!0),(0,o.YH)(this,(function(H){switch(H.label){case 0:return n||i?(w=function(e,t,n,o){var i,r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),n,o)}(e,n||i,u,l),n&&Math.abs(w.scrollAmount)<4?(y(t),d&&null!==n&&(h(n,b),m(t,n,(function(){return b=0}))),[2]):(c(e,t,!0,w.inputSafeY,s),y(t),(0,a.r)((function(){return e.click()})),d&&n&&(b=w.scrollPadding,h(n,b)),"undefined"===typeof window?[3,3]:(g=function(){return(0,o.sH)(void 0,void 0,void 0,(function(){return(0,o.YH)(this,(function(o){switch(o.label){case 0:return void 0!==p&&clearTimeout(p),window.removeEventListener("ionKeyboardDidShow",E),window.removeEventListener("ionKeyboardDidShow",g),n?[4,(0,r.c)(n,0,w.scrollAmount,w.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return c(e,t,!1,w.inputSafeY),y(t),d&&m(t,n,(function(){return b=0})),[2]}}))}))},E=function(){window.removeEventListener("ionKeyboardDidShow",E),window.addEventListener("ionKeyboardDidShow",g)},n?[4,(0,r.g)(n)]:[3,2]))):[2];case 1:if(S=H.sent(),L=S.scrollHeight-S.clientHeight,f&&w.scrollAmount>L-S.scrollTop)return"password"===t.type?(w.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",E)):window.addEventListener("ionKeyboardDidShow",g),p=setTimeout(g,1e3),[2];H.label=2;case 2:g(),H.label=3;case 3:return[2]}}))}))},E=function(e,t){return(0,o.sH)(void 0,void 0,void 0,(function(){var n,d,s,l,v,w,h,m,b,y,E,S,L,H,D,k;return(0,o.YH)(this,(function(A){switch(A.label){case 0:return void 0===i.d?[2]:(n="ios"===t,d="android"===t,s=e.getNumber("keyboardHeight",290),l=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",n),w=e.getBoolean("inputBlurring",n),h=e.getBoolean("scrollPadding",!0),m=Array.from(i.d.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,y=new WeakMap,[4,u.K.getResizeMode()]);case 1:for(E=A.sent(),S=function(e){return(0,o.sH)(void 0,void 0,void 0,(function(){var t,n,f,w,m;return(0,o.YH)(this,(function(S){switch(S.label){case 0:return[4,new Promise((function(t){return(0,a.c)(e,t)}))];case 1:return S.sent(),t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),f=(0,r.f)(e),w=f?null:e.closest("ion-footer"),n?(f&&v&&!b.has(e)&&(m=function(e,t,n){if(!n||!t)return function(){};var o=function(n){(function(e){return e===e.getRootNode().activeElement})(t)&&c(e,t,n)},i=function(){return c(e,t,!1)},r=function(){return o(!0)},u=function(){return o(!1)};return(0,a.a)(n,"ionScrollStart",r),(0,a.a)(n,"ionScrollEnd",u),t.addEventListener("blur",i),function(){(0,a.b)(n,"ionScrollStart",r),(0,a.b)(n,"ionScrollEnd",u),t.removeEventListener("blur",i)}}(e,n,f),b.set(e,m)),"date"===n.type||"datetime-local"===n.type||!f&&!w||!l||y.has(e)||(m=function(e,t,n,r,a,d,c,s){void 0===s&&(s=!1);var l=d&&(void 0===c||c.mode===u.a.None),f=!1,v=void 0!==i.w?i.w.innerHeight:0,w=function(o){!1!==f?g(e,t,n,r,o.detail.keyboardHeight,l,s,v,!1):f=!0},h=function(){f=!1,null===i.w||void 0===i.w||i.w.removeEventListener("ionKeyboardDidShow",w),e.removeEventListener("focusout",h)},m=function(){return(0,o.sH)(void 0,void 0,void 0,(function(){return(0,o.YH)(this,(function(o){return t.hasAttribute(p)?(t.removeAttribute(p),[2]):(g(e,t,n,r,a,l,s,v),null===i.w||void 0===i.w||i.w.addEventListener("ionKeyboardDidShow",w),e.addEventListener("focusout",h),[2])}))}))};return e.addEventListener("focusin",m),function(){e.removeEventListener("focusin",m),null===i.w||void 0===i.w||i.w.removeEventListener("ionKeyboardDidShow",w),e.removeEventListener("focusout",h)}}(e,n,f,w,s,h,E,d),y.set(e,m)),[2]):[2]}}))}))},L=function(e){var t;v&&((t=b.get(e))&&t(),b.delete(e));l&&((t=y.get(e))&&t(),y.delete(e))},w&&function(){var e=!0,t=!1,n=document,o=function(){t=!0},i=function(){e=!0},r=function(o){if(t)t=!1;else{var i=n.activeElement;if(i&&!i.matches(f)){var r=o.target;r!==i&&(r.matches(f)||r.closest(f)||(e=!1,setTimeout((function(){e||i.blur()}),50)))}}};(0,a.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",r,!1)}(),H=0,D=m;H<D.length;H++)k=D[H],S(k);return i.d.addEventListener("ionInputDidLoad",(function(e){S(e.detail)})),i.d.addEventListener("ionInputDidUnload",(function(e){L(e.detail)})),[2]}}))}))}}}]);
//# sourceMappingURL=415.5ad1f321.chunk.js.map