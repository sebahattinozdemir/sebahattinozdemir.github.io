/*! For license information please see 9378.41e649b9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[879,2283,3260,4140,4163,4601,4664,6997,9378],{4601:(t,e,r)=>{r.r(e),r.d(e,{i:()=>i});var i=function(t){return t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},4163:(t,e,r)=>{r.r(e),r.d(e,{G:()=>u});var i=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){var e;return new n(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach((function(t){n=Math.max(n,t)})),n===r){this.capturedId=e,i.clear();var a=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(a),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(o)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(o)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),n=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),o="backdrop-no-scroll",u=new i},3260:(t,e,r)=>{r.r(e),r.d(e,{a:()=>d,b:()=>f,c:()=>o,d:()=>w,e:()=>y,f:()=>m,g:()=>v,h:()=>b,i:()=>l,j:()=>x,k:()=>s,l:()=>S,m:()=>u,n:()=>p,o:()=>g,p:()=>E,q:()=>Y,r:()=>h,s:()=>T,t:()=>n,u:()=>_,v:()=>X});var i=r(6326),n=function(t,e){return void 0===e&&(e=0),new Promise((function(r){a(t,e,r)}))},a=function(t,e,r){var i,n;void 0===e&&(e=0);var a={passive:!0},o=function(){i&&i()},u=function(e){void 0!==e&&t!==e.target||(o(),r(e))};return t&&(t.addEventListener("webkitTransitionEnd",u,a),t.addEventListener("transitionend",u,a),n=setTimeout(u,e+500),i=function(){void 0!==n&&(clearTimeout(n),n=void 0),t.removeEventListener("webkitTransitionEnd",u,a),t.removeEventListener("transitionend",u,a)}),o},o=function(t,e){t.componentOnReady?t.componentOnReady().then((function(t){return e(t)})):h((function(){return e(t)}))},u=function(t){return void 0!==t.componentOnReady},s=function(t,e){void 0===e&&(e=[]);var r={};return e.forEach((function(e){t.hasAttribute(e)&&(null!==t.getAttribute(e)&&(r[e]=t.getAttribute(e)),t.removeAttribute(e))})),r},c=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],l=function(t,e){var r=c;return e&&e.length>0&&(r=r.filter((function(t){return!e.includes(t)}))),s(t,r)},d=function(t,e,r,i){var n;if("undefined"!==typeof window){var a=window,o=null===(n=null===a||void 0===a?void 0:a.Ionic)||void 0===n?void 0:n.config;if(o){var u=o.get("_ael");if(u)return u(t,e,r,i);if(o._ael)return o._ael(t,e,r,i)}}return t.addEventListener(e,r,i)},f=function(t,e,r,i){var n;if("undefined"!==typeof window){var a=window,o=null===(n=null===a||void 0===a?void 0:a.Ionic)||void 0===n?void 0:n.config;if(o){var u=o.get("_rel");if(u)return u(t,e,r,i);if(o._rel)return o._rel(t,e,r,i)}}return t.removeEventListener(e,r,i)},v=function(t,e){return void 0===e&&(e=t),t.shadowRoot||e},h=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)},p=function(t){return!!t.shadowRoot&&!!t.attachShadow},b=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},m=function(t){if(t.focus(),t.classList.contains("ion-focusable")){var e=t.closest("ion-app");e&&e.setFocus([t])}},y=function(t,e){var r,i=t.getAttribute("aria-labelledby"),n=t.id,a=null!==i&&""!==i.trim()?i:e+"-lbl",o=null!==i&&""!==i.trim()?document.getElementById(i):b(t);return o?(null===i&&(o.id=a),r=o.textContent,o.setAttribute("aria-hidden","true")):""!==n.trim()&&(o=document.querySelector('label[for="'.concat(n,'"]')))&&(""!==o.id?a=o.id:o.id=a="".concat(n,"-lbl"),r=o.textContent),{label:o,labelId:a,labelText:r}},w=function(t,e,r,i,n){if(t||p(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=n,a.name=r,a.value=i||""}},S=function(t,e,r){return Math.max(t,Math.min(e,r))},g=function(t,e){if(!t){var r="ASSERT: "+e;throw console.error(r),new Error(r)}},_=function(t){return t.timeStamp||Date.now()},X=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var r=e[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},E=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'.concat(t,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},x=function(t,e){var r=t._original||t;return{_original:t,emit:Y(r.emit.bind(r),e)}},Y=function(t,e){var r;return void 0===e&&(e=0),function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];clearTimeout(r),r=setTimeout.apply(void 0,(0,i.fX)([t,e],n,!1))}},T=function(t,e){if(null!==t&&void 0!==t||(t={}),null!==e&&void 0!==e||(e={}),t===e)return!0;var r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(var i=0,n=r;i<n.length;i++){var a=n[i];if(!(a in e))return!1;if(t[a]!==e[a])return!1}return!0}},2283:(t,e,r)=>{r.r(e),r.d(e,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>s});var i,n=r(4163),a=function(t,e,r,i){var n,a,u=o(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(n="addEventListener",a="removeEventListener"),t[n](e,r,u),function(){t[a](e,r,u)}},o=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){i=!1}return!!i},u=function(t){return t instanceof Document?t:t.ownerDocument},s=function(t){var e=!1,r=!1,i=!0,o=!1,s=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),f=s.canStart,v=s.onWillStart,h=s.onStart,p=s.onEnd,b=s.notCaptured,m=s.onMove,y=s.threshold,w=s.passive,S=s.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},_=function(t,e,r){var i=r*(Math.PI/180),n="x"===t,a=Math.cos(i),o=e*e,u=0,s=0,c=!1,l=0;return{start:function(t,e){u=t,s=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var r=t-u,i=e-s,d=r*r+i*i;if(d<o)return!1;var f=Math.sqrt(d),v=(n?r:i)/f;return l=v>a?1:v<-a?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(s.direction,s.threshold,s.maxAngle),X=n.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(o=!1,m&&m(g))},x=function(){return!!X.capture()&&(e=!0,i=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,v?v(g).then(Y):Y(),!0)},Y=function(){S&&function(){if("undefined"!==typeof document){var t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}}(),h&&h(g),i=!0},T=function(){e=!1,r=!1,o=!1,i=!0,X.release()},G=function(t){var r=e,n=i;T(),n&&(c(g,t),r?p&&p(g):b&&b(g))},L=function(t,e,r,i,n){var o,s,c,l,d,f,v,h=0,p=function(i){h=Date.now()+2e3,e(i)&&(!s&&r&&(s=a(t,"touchmove",r,n)),c||(c=a(i.target,"touchend",m,n)),l||(l=a(i.target,"touchcancel",m,n)))},b=function(i){h>Date.now()||e(i)&&(!f&&r&&(f=a(u(t),"mousemove",r,n)),v||(v=a(u(t),"mouseup",y,n)))},m=function(t){w(),i&&i(t)},y=function(t){S(),i&&i(t)},w=function(){s&&s(),c&&c(),l&&l(),s=c=l=void 0},S=function(){f&&f(),v&&v(),f=v=void 0},g=function(){w(),S()},_=function(e){void 0===e&&(e=!0),e?(o||(o=a(t,"touchstart",p,n)),d||(d=a(t,"mousedown",b,n))):(o&&o(),d&&d(),o=d=void 0,g())};return{enable:_,stop:g,destroy:function(){_(!1),i=r=e=void 0}}}(s.el,(function(t){var e=d(t);return!(r||!i)&&(l(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!f||!1!==f(g))&&(X.release(),!!X.start()&&(r=!0,0===y?x():(_.start(g.startX,g.startY),!0))))}),(function(t){e?!o&&i&&(o=!0,c(g,t),requestAnimationFrame(E)):(c(g,t),_.detect(g.currentX,g.currentY)&&(_.isGesture()&&x()||k()))}),G,{capture:!1,passive:w}),k=function(){T(),L.stop(),b&&b(g)};return{enable:function(t){void 0===t&&(t=!0),t||(e&&G(void 0),T()),L.enable(t)},destroy:function(){X.destroy(),L.destroy()}}},c=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.currentTime;l(e,t);var a=t.currentX,o=t.currentY,u=(t.currentTime=d(e))-n;if(u>0&&u<100){var s=(a-r)/u,c=(o-i)/u;t.velocityX=.7*s+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=a-t.startX,t.deltaY=o-t.startY,t.event=e}},l=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var a=n[0];r=a.clientX,i=a.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},d=function(t){return t.timeStamp||Date.now()}},9378:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>o});var i=r(3260),n=r(4601),a=r(2283),o=(r(4163),function(t,e,r,o,u){var s=t.ownerDocument.defaultView,c=(0,n.i)(t),l=function(t){return c?-t.deltaX:t.deltaX},d=function(t){return c?-t.velocityX:t.velocityX};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:function(r){return c=(0,n.i)(t),function(t){var e=t.startX;return c?e>=s.innerWidth-50:e<=50}(r)&&e()},onStart:r,onMove:function(t){var e=l(t)/s.innerWidth;o(e)},onEnd:function(t){var e=l(t),r=s.innerWidth,n=e/r,a=d(t),o=a>=0&&(a>.2||e>r/2),c=(o?1-n:n)*r,f=0;if(c>5){var v=c/Math.abs(a);f=Math.min(v,540)}u(o,n<=0?.01:(0,i.l)(0,n,.9999),f)}})})}}]);
//# sourceMappingURL=9378.41e649b9.chunk.js.map