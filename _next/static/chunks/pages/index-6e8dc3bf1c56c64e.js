(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(8754),o=r._(n(7294)),u=n(4532),l=n(3353),f=n(1410),i=n(9064),a=n(370),c=n(9955),s=n(4224),d=n(508),p=n(1516),h=n(4266),_=n(3991),b=new Set;function y(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(b.has(u))return;b.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:b,children:g,prefetch:O=null,passHref:m,replace:E,shallow:P,scroll:j,locale:C,onClick:T,onMouseEnter:M,onTouchStart:k,legacyBehavior:R=!1,...A}=e;n=g,R&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let x=!1!==O,I=null===O?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,N=o.default.useContext(c.RouterContext),L=o.default.useContext(s.AppRouterContext),S=null!=N?N:L,w=!N,{href:U,as:F}=o.default.useMemo(()=>{if(!N){let e=v(f);return{href:e,as:b?v(b):e}}let[e,t]=(0,u.resolveHref)(N,f,!0);return{href:e,as:b?(0,u.resolveHref)(N,b):t||e}},[N,f,b]),K=o.default.useRef(U),H=o.default.useRef(F);R&&(r=o.default.Children.only(n));let D=R?r&&"object"==typeof r&&r.ref:t,[V,X,q]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(H.current!==F||K.current!==U)&&(q(),H.current=F,K.current=U),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[F,D,U,q,V]);o.default.useEffect(()=>{S&&X&&x&&y(S,U,F,{locale:C},{kind:I},w)},[F,U,X,C,x,null==N?void 0:N.locale,S,w,I]);let B={ref:z,onClick(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,u,f,i,a,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:a,scroll:i}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?o.default.startTransition(h):h()}(e,S,U,F,E,P,j,C,w,x)},onMouseEnter(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(x||!w)&&y(S,U,F,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},w)},onTouchStart(e){R||"function"!=typeof k||k(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(x||!w)&&y(S,U,F,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},w)}};if((0,i.isAbsoluteUrl)(F))B.href=F;else if(!R||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(F,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);B.href=t||(0,h.addBasePath)((0,a.addLocale)(F,e,null==N?void 0:N.defaultLocale))}return R?o.default.cloneElement(r,B):o.default.createElement("a",{...A,...B},n)}),O=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(29),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6616:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1664),u=n.n(o);let l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"Welcome to Next.js!"}),(0,r.jsx)(u(),{href:"/nextjs-github-pages-sample/linkSample",children:"link Sample Page"})]});t.default=l},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);