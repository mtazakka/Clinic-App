(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{4019:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=function(t,e,n,o){return!1};("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7942:function(t,e,n){"use strict";var o=n(5696);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(2648).Z,r=n(7273).Z,a=i(n(7294)),l=n(4957),s=n(7995),u=n(647),c=n(1992),f=n(639),d=n(4019),h=n(227),p={};function v(t,e,n,o){if(t&&l.isLocalURL(e)){Promise.resolve(t.prefetch(e,n,o)).catch((function(t){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:t&&t.locale;p[e+"%"+n+(i?"%"+i:"")]=!0}}var y=a.default.forwardRef((function(t,e){var n,i=t.href,y=t.as,m=t.children,b=t.prefetch,g=t.passHref,C=t.replace,w=t.shallow,E=t.scroll,S=t.locale,x=t.onClick,M=t.onMouseEnter,k=t.onTouchStart,A=t.legacyBehavior,O=void 0===A?!0!==Boolean(!1):A,_=r(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!O||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var L=!1!==b,N=a.default.useContext(u.RouterContext),j=a.default.useContext(c.AppRouterContext);j&&(N=j);var P,T=a.default.useMemo((function(){var t=l.resolveHref(N,i,!0),e=o(t,2),n=e[0],r=e[1];return{href:n,as:y?l.resolveHref(N,y):r||n}}),[N,i,y]),H=T.href,R=T.as,I=a.default.useRef(H),U=a.default.useRef(R);O&&(P=a.default.Children.only(n));var z=O?P&&"object"===typeof P&&P.ref:e,B=f.useIntersection({rootMargin:"200px"}),D=o(B,3),W=D[0],q=D[1],V=D[2],K=a.default.useCallback((function(t){U.current===R&&I.current===H||(V(),U.current=R,I.current=H),W(t),z&&("function"===typeof z?z(t):"object"===typeof z&&(z.current=t))}),[R,z,H,V,W]);a.default.useEffect((function(){var t=q&&L&&l.isLocalURL(H),e="undefined"!==typeof S?S:N&&N.locale,n=p[H+"%"+R+(e?"%"+e:"")];t&&!n&&v(N,H,R,{locale:e})}),[R,H,q,S,L,N]);var F={ref:K,onClick:function(t){O||"function"!==typeof x||x(t),O&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(t),t.defaultPrevented||function(t,e,n,o,i,r,s,u,c,f){if("A"!==t.currentTarget.nodeName.toUpperCase()||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&l.isLocalURL(n)){t.preventDefault();var d=function(){"beforePopState"in e?e[i?"replace":"push"](n,o,{shallow:r,locale:u,scroll:s}):e[i?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(d):d()}}(t,N,H,R,C,w,E,S,Boolean(j),L)},onMouseEnter:function(t){O||"function"!==typeof M||M(t),O&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(t),!L&&j||l.isLocalURL(H)&&v(N,H,R,{priority:!0})},onTouchStart:function(t){O||"function"!==typeof k||k(t),O&&P.props&&"function"===typeof P.props.onTouchStart&&P.props.onTouchStart(t),!L&&j||l.isLocalURL(H)&&v(N,H,R,{priority:!0})}};if(!O||g||"a"===P.type&&!("href"in P.props)){var Z="undefined"!==typeof S?S:N&&N.locale,G=N&&N.isLocaleDomain&&d.getDomainLocale(R,Z,N.locales,N.domainLocales);F.href=G||h.addBasePath(s.addLocale(R,Z,N&&N.defaultLocale))}return O?a.default.cloneElement(P,F):a.default.createElement("a",Object.assign({},_,F),n)}));e.default=y,("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},639:function(t,e,n){"use strict";var o=n(5696);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,u=t.disabled||!a,c=i.useState(!1),f=o(c,2),d=f[0],h=f[1],p=i.useState(null),v=o(p,2),y=v[0],m=v[1];i.useEffect((function(){if(a){if(u||d)return;if(y&&y.tagName){var t=function(t,e,n){var o=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},o=s.find((function(t){return t.root===n.root&&t.margin===n.margin}));if(o&&(e=l.get(o)))return e;var i=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return e={id:n,observer:r,elements:i},s.push(n),l.set(n,e),e}(n),i=o.id,r=o.observer,a=o.elements;return a.set(t,e),r.observe(t),function(){if(a.delete(t),r.unobserve(t),0===a.size){r.disconnect(),l.delete(i);var e=s.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&s.splice(e,1)}}}(y,(function(t){return t&&h(t)}),{root:null==e?void 0:e.current,rootMargin:n});return t}}else if(!d){var o=r.requestIdleCallback((function(){return h(!0)}));return function(){return r.cancelIdleCallback(o)}}}),[y,u,n,e,d]);var b=i.useCallback((function(){h(!1)}),[]);return[m,d,b]};var i=n(7294),r=n(6286),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1992:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),i=o.default.createContext(null);e.AppRouterContext=i;var r=o.default.createContext(null);e.LayoutRouterContext=r;var a=o.default.createContext(null);e.GlobalLayoutRouterContext=a;var l=o.default.createContext(null);e.TemplateContext=l},1664:function(t,e,n){t.exports=n(7942)},5541:function(){(function(){var t,e,n,o,i,r=function(t,e){return function(){return t.apply(e,arguments)}},a=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in e)o=e[n],null==t[n]&&(t[n]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,o){var i;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(i=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,o):null!=document.createEventObject?(i=document.createEventObject()).eventType=t:i.eventName=t,i},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,o,i;for(e=n=0,o=(i=this.keys).length;n<o;e=++n)if(i[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,o,i,r;for(n=o=0,i=(r=this.keys).length;o<i;n=++o)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!==typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!==typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,(function(t,e){return e.toUpperCase()})),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},i.prototype.start=function(){var e,n,o,i,r;if(this.stopped=!1,this.boxes=function(){var t,n,o,i;for(i=[],t=0,n=(o=this.element.querySelectorAll("."+this.config.boxClass)).length;t<n;t++)e=o[t],i.push(e);return i}.call(this),this.all=function(){var t,n,o,i;for(i=[],t=0,n=(o=this.boxes).length;t<n;t++)e=o[t],i.push(e);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,o=(i=this.boxes).length;n<o;n++)e=i[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((r=this,function(t){var e,n,o,i,a;for(a=[],e=0,n=t.length;e<n;e++)i=t[e],a.push(function(){var t,e,n,r;for(r=[],t=0,e=(n=i.addedNodes||[]).length;t<e;t++)o=n[t],r.push(this.doSync(o));return r}.call(r));return a})).observe(document.body,{childList:!0,subtree:!0})},i.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},i.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},i.prototype.doSync=function(t){var e,n,o,i,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,o=(i=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<o;n++)e=i[n],a.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},i.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},i.prototype.applyStyle=function(t,e){var n,o,i,r;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),i=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,o,n,i)}))},i.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},i.prototype.resetStyle=function(){var t,e,n,o,i;for(i=[],e=0,n=(o=this.boxes).length;e<n;e++)t=o[e],i.push(t.style.visibility="visible");return i},i.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},i.prototype.customStyle=function(t,e,n,o,i){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),i&&this.vendorSet(t.style,{animationIterationCount:i}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,o,i,r;for(n in o=[],e)i=e[n],t[""+n]=i,o.push(function(){var e,o,a,l;for(l=[],e=0,o=(a=this.vendors).length;e<o;e++)r=a[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=i);return l}.call(this));return o},i.prototype.vendorCSS=function(t,e){var n,i,r,a,l,s;for(a=(l=o(t)).getPropertyCSSValue(e),n=0,i=(r=this.vendors).length;n<i;n++)s=r[n],a=a||l.getPropertyCSSValue("-"+s+"-"+e);return a},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},i.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,o,i;for(i=[],e=0,n=(o=this.boxes).length;e<n;e++)(t=o[e])&&(this.isVisible(t)?this.show(t):i.push(t));return i}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},i.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,n,o,i,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,i=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(o=this.offsetTop(t))+t.clientHeight,o<=i&&e>=r},i.prototype.util=function(){return null!=this._util?this._util:this._util=new e},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(this)}}]);