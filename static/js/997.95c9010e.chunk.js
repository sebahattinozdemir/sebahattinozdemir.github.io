/*! For license information please see 997.95c9010e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[997,2721,5102],{997:(n,t,i)=>{i.r(t),i.d(t,{c:()=>m});var o,e=i(6326),r=i(5102),a=i(3260),f=function(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},u=function(n){if(void 0===o){var t=void 0!==n.style.animationName,i=void 0!==n.style.webkitAnimationName;o=!t&&i?"-webkit-":""}return o},c=function(n,t,i){var o=t.startsWith("animation")?u(n):"";n.style.setProperty(o+t,i)},d=function(n,t){var i=t.startsWith("animation")?u(n):"";n.style.removeProperty(i+t)},s=[],l=function(n,t){if(void 0===n&&(n=[]),void 0!==t){var i=Array.isArray(t)?t:[t];return(0,e.fX)((0,e.fX)([],n,!0),i,!0)}return n},m=function(n){var t,i,o,m,v,h,p,g,y,E,w,A,b,C=[],k=[],T=[],S=!1,D={},L=[],P=[],R={},F=0,N=!1,O=!1,W=!0,X=!1,x=!0,I=!1,K=n,j=[],M=[],$=[],_=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"===typeof AnimationEffect||void 0!==r.w&&"function"===typeof r.w.AnimationEffect,U="function"===typeof Element&&"function"===typeof Element.prototype.animate&&Q,V=function(){return J},Y=function(n){en(),n&&rn()},nn=function(n,t){var i=t.findIndex((function(t){return t.c===n}));i>-1&&t.splice(i,1)},tn=function(n,t){return((null===t||void 0===t?void 0:t.oneTimeCallback)?M:j).push({c:n,o:t}),b},on=function(){return j.length=0,M.length=0,b},en=function(){if(U)J.forEach((function(n){n.cancel()})),J.length=0;else{var n=_.slice();(0,a.r)((function(){n.forEach((function(n){d(n,"animation-name"),d(n,"animation-duration"),d(n,"animation-timing-function"),d(n,"animation-iteration-count"),d(n,"animation-delay"),d(n,"animation-play-state"),d(n,"animation-fill-mode"),d(n,"animation-direction")}))}))}},rn=function(){z.forEach((function(n){(null===n||void 0===n?void 0:n.parentNode)&&n.parentNode.removeChild(n)})),z.length=0},an=function(){return void 0!==v?v:p?p.getFill():"both"},fn=function(){return void 0!==y?y:void 0!==h?h:p?p.getDirection():"normal"},un=function(){return N?"linear":void 0!==o?o:p?p.getEasing():"linear"},cn=function(){return O?0:void 0!==E?E:void 0!==i?i:p?p.getDuration():0},dn=function(){return void 0!==m?m:p?p.getIterations():1},sn=function(){return void 0!==w?w:void 0!==t?t:p?p.getDelay():0},ln=function(n){U?V().forEach((function(t){var i=t.effect;if(i.setKeyframes)i.setKeyframes(n);else{var o=new KeyframeEffect(i.target,n,i.getTiming());t.effect=o}})):vn()},mn=function(){0!==F&&0===--F&&(!function(){bn(),G.forEach((function(n){return n()})),H.forEach((function(n){return n()}));var n=W?1:0,t=L,i=P,o=R;_.forEach((function(n){var e=n.classList;for(var r in t.forEach((function(n){return e.add(n)})),i.forEach((function(n){return e.remove(n)})),o)o.hasOwnProperty(r)&&c(n,r,o[r])})),E=void 0,y=void 0,w=void 0,j.forEach((function(t){return t.c(n,b)})),M.forEach((function(t){return t.c(n,b)})),M.length=0,x=!0,W&&(X=!0),W=!0}(),p&&p.animationFinish())},vn=function(t){void 0===t&&(t=!0),rn();var i=function(n){return n.forEach((function(n){for(var t in n)if(n.hasOwnProperty(t)){var i,o=n[t];"easing"===t?(n[i="animation-timing-function"]=o,delete n[t]):(i=f(t))!==t&&(n[i]=o,delete n[t])}})),n}(C);_.forEach((function(o){if(i.length>0){var e=function(n){return void 0===n&&(n=[]),n.map((function(n){var t=n.offset,i=[];for(var o in n)n.hasOwnProperty(o)&&"offset"!==o&&i.push("".concat(o,": ").concat(n[o],";"));return"".concat(100*t,"% { ").concat(i.join(" ")," }")})).join(" ")}(i);A=void 0!==n?n:function(n){var t=s.indexOf(n);return t<0&&(t=s.push(n)-1),"ion-animation-".concat(t)}(e);var r=function(n,t,i){var o,e=function(n){var t=void 0!==n.getRootNode?n.getRootNode():n;return t.head||t}(i),r=u(i),a=e.querySelector("#"+n);if(a)return a;var f=(null!==(o=i.ownerDocument)&&void 0!==o?o:document).createElement("style");return f.id=n,f.textContent="@".concat(r,"keyframes ").concat(n," { ").concat(t," } @").concat(r,"keyframes ").concat(n,"-alt { ").concat(t," }"),e.appendChild(f),f}(A,e,o);z.push(r),c(o,"animation-duration","".concat(cn(),"ms")),c(o,"animation-timing-function",un()),c(o,"animation-delay","".concat(sn(),"ms")),c(o,"animation-fill-mode",an()),c(o,"animation-direction",fn());var f=dn()===1/0?"infinite":dn().toString();c(o,"animation-iteration-count",f),c(o,"animation-play-state","paused"),t&&c(o,"animation-name","".concat(r.id,"-alt")),(0,a.r)((function(){c(o,"animation-name",r.id||null)}))}}))},hn=function(n){void 0===n&&(n=!0),function(){Z.forEach((function(n){return n()})),B.forEach((function(n){return n()}));var n=k,t=T,i=D;_.forEach((function(o){var e=o.classList;for(var r in n.forEach((function(n){return e.add(n)})),t.forEach((function(n){return e.remove(n)})),i)i.hasOwnProperty(r)&&c(o,r,i[r])}))}(),C.length>0&&(U?(_.forEach((function(n){var t=n.animate(C,{id:K,delay:sn(),duration:cn(),easing:un(),iterations:dn(),fill:an(),direction:fn()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=function(){mn()})):vn(n)),S=!0},pn=function(n){if(n=Math.min(Math.max(n,0),.9999),U)J.forEach((function(t){t.currentTime=t.effect.getComputedTiming().delay+cn()*n,t.pause()}));else{var t="-".concat(cn()*n,"ms");_.forEach((function(n){C.length>0&&(c(n,"animation-delay",t),c(n,"animation-play-state","paused"))}))}},gn=function(n){J.forEach((function(n){n.effect.updateTiming({delay:sn(),duration:cn(),easing:un(),iterations:dn(),fill:an(),direction:fn()})})),void 0!==n&&pn(n)},yn=function(n,t){void 0===n&&(n=!0),(0,a.r)((function(){_.forEach((function(i){c(i,"animation-name",A||null),c(i,"animation-duration","".concat(cn(),"ms")),c(i,"animation-timing-function",un()),c(i,"animation-delay",void 0!==t?"-".concat(t*cn(),"ms"):"".concat(sn(),"ms")),c(i,"animation-fill-mode",an()||null),c(i,"animation-direction",fn()||null);var o=dn()===1/0?"infinite":dn().toString();c(i,"animation-iteration-count",o),n&&c(i,"animation-name","".concat(A,"-alt")),(0,a.r)((function(){c(i,"animation-name",A||null)}))}))}))},En=function(n,t,i){return void 0===n&&(n=!1),void 0===t&&(t=!0),n&&q.forEach((function(o){o.update(n,t,i)})),U?gn(i):yn(t,i),b},wn=function(){S&&(U?J.forEach((function(n){n.pause()})):_.forEach((function(n){c(n,"animation-play-state","paused")})),I=!0)},An=function(){g=void 0,mn()},bn=function(){g&&clearTimeout(g)},Cn=function(){_.forEach((function(n){d(n,"animation-duration"),d(n,"animation-delay"),d(n,"animation-play-state")}))},kn=function(n){return new Promise((function(t){(null===n||void 0===n?void 0:n.sync)&&(O=!0,tn((function(){return O=!1}),{oneTimeCallback:!0})),S||hn(),X&&(U?(pn(0),gn()):yn(),X=!1),x&&(F=q.length+1,x=!1);var i=function(){nn(o,M),t()},o=function(){nn(i,$),t()};tn(o,{oneTimeCallback:!0}),function(n,t){$.push({c:n,o:t})}(i,{oneTimeCallback:!0}),q.forEach((function(n){n.play()})),U?(J.forEach((function(n){n.play()})),0!==C.length&&0!==_.length||mn()):function(){if(bn(),(0,a.r)((function(){_.forEach((function(n){C.length>0&&c(n,"animation-play-state","running")}))})),0===C.length||0===_.length)mn();else{var n=sn()||0,t=cn()||0,i=dn()||1;isFinite(i)&&(g=setTimeout(An,n+t*i+100)),function(n,t){var i,o={passive:!0},e=function(){i&&i()},r=function(i){n===i.target&&(e(),t(i))};n&&(n.addEventListener("webkitAnimationEnd",r,o),n.addEventListener("animationend",r,o),i=function(){n.removeEventListener("webkitAnimationEnd",r,o),n.removeEventListener("animationend",r,o)})}(_[0],(function(){bn(),(0,a.r)((function(){Cn(),(0,a.r)(mn)}))}))}}(),I=!1}))},Tn=function(n,t){var i,o=C[0];return void 0===o||void 0!==o.offset&&0!==o.offset?C=(0,e.fX)([(i={offset:0},i[n]=t,i)],C,!0):o[n]=t,b};return b={parentAnimation:p,elements:_,childAnimations:q,id:K,animationFinish:mn,from:Tn,to:function(n,t){var i,o=C[C.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?C=(0,e.fX)((0,e.fX)([],C,!0),[(i={offset:1},i[n]=t,i)],!1):o[n]=t,b},fromTo:function(n,t,i){return Tn(n,t).to(n,i)},parent:function(n){return p=n,b},play:kn,pause:function(){return q.forEach((function(n){n.pause()})),wn(),b},stop:function(){q.forEach((function(n){n.stop()})),S&&(en(),S=!1),N=!1,O=!1,x=!0,y=void 0,E=void 0,w=void 0,F=0,X=!1,W=!0,I=!1,$.forEach((function(n){return n.c(0,b)})),$.length=0},destroy:function(n){return q.forEach((function(t){t.destroy(n)})),Y(n),_.length=0,q.length=0,C.length=0,on(),S=!1,x=!0,b},keyframes:function(n){var t=C!==n;return C=n,t&&ln(C),b},addAnimation:function(n){if(null!=n)if(Array.isArray(n))for(var t=0,i=n;t<i.length;t++){var o=i[t];o.parent(b),q.push(o)}else n.parent(b),q.push(n);return b},addElement:function(n){if(null!=n)if(1===n.nodeType)_.push(n);else if(n.length>=0)for(var t=0;t<n.length;t++)_.push(n[t]);else console.error("Invalid addElement value");return b},update:En,fill:function(n){return v=n,En(!0),b},direction:function(n){return h=n,En(!0),b},iterations:function(n){return m=n,En(!0),b},duration:function(n){return U||0!==n||(n=1),i=n,En(!0),b},easing:function(n){return o=n,En(!0),b},delay:function(n){return t=n,En(!0),b},getWebAnimations:V,getKeyframes:function(){return C},getFill:an,getDirection:fn,getDelay:sn,getIterations:dn,getEasing:un,getDuration:cn,afterAddRead:function(n){return G.push(n),b},afterAddWrite:function(n){return H.push(n),b},afterClearStyles:function(n){void 0===n&&(n=[]);for(var t=0,i=n;t<i.length;t++){var o=i[t];R[o]=""}return b},afterStyles:function(n){return void 0===n&&(n={}),R=n,b},afterRemoveClass:function(n){return P=l(P,n),b},afterAddClass:function(n){return L=l(L,n),b},beforeAddRead:function(n){return Z.push(n),b},beforeAddWrite:function(n){return B.push(n),b},beforeClearStyles:function(n){void 0===n&&(n=[]);for(var t=0,i=n;t<i.length;t++){var o=i[t];D[o]=""}return b},beforeStyles:function(n){return void 0===n&&(n={}),D=n,b},beforeRemoveClass:function(n){return T=l(T,n),b},beforeAddClass:function(n){return k=l(k,n),b},onFinish:tn,isRunning:function(){return 0!==F&&!I},progressStart:function(n,t){return void 0===n&&(n=!1),q.forEach((function(i){i.progressStart(n,t)})),wn(),N=n,S||hn(),En(!1,!0,t),b},progressStep:function(n){return q.forEach((function(t){t.progressStep(n)})),pn(n),b},progressEnd:function(n,t,i){return N=!1,q.forEach((function(o){o.progressEnd(n,t,i)})),void 0!==i&&(E=i),X=!1,W=!0,0===n?("reverse"===(y="reverse"===fn()?"normal":"reverse")&&(W=!1),U?(En(),pn(1-t)):(w=(1-t)*cn()*-1,En(!1,!1))):1===n&&(U?(En(),pn(t)):(w=t*cn()*-1,En(!1,!1))),void 0===n||p||kn(),b}}}},5102:(n,t,i)=>{i.r(t),i.d(t,{d:()=>e,w:()=>o});var o="undefined"!==typeof window?window:void 0,e="undefined"!==typeof document?document:void 0}}]);
//# sourceMappingURL=997.95c9010e.chunk.js.map