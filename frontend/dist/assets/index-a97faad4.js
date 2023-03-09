function zv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function jv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oi={},Bv={get exports(){return oi},set exports(e){oi=e}},La={},I={},$v={get exports(){return I},set exports(e){I=e}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),af=Symbol.iterator;function Zv(e){return e===null||typeof e!="object"?null:(e=af&&e[af]||e["@@iterator"],typeof e=="function"?e:null)}var Rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ah=Object.assign,Lh={};function xr(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Rh}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dh(){}Dh.prototype=xr.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Rh}var Ru=Ou.prototype=new Dh;Ru.constructor=Ou;Ah(Ru,xr.prototype);Ru.isPureReactComponent=!0;var sf=Array.isArray,Mh=Object.prototype.hasOwnProperty,Au={current:null},Uh={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Mh.call(t,r)&&!Uh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Li,type:e,key:o,ref:a,props:i,_owner:Au.current}}function ey(e,t){return{$$typeof:Li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Li}function ty(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function ms(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ty(""+e.key):t.toString(36)}function To(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Li:case Hv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ms(a,0):r,sf(i)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),To(i,t,n,"",function(u){return u})):i!=null&&(Lu(i)&&(i=ey(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(lf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",sf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ms(o,s);a+=To(o,t,n,l,i)}else if(l=Zv(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ms(o,s++),a+=To(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zi(e,t,n){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ny(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},No={transition:null},ry={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:No,ReactCurrentOwner:Au};z.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!Lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=xr;z.Fragment=Wv;z.Profiler=Gv;z.PureComponent=Ou;z.StrictMode=Vv;z.Suspense=qv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ah({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Au.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Mh.call(t,l)&&!Uh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Li,type:e.type,key:i,ref:o,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:Yv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kv,_context:e},e.Consumer=e};z.createElement=Fh;z.createFactory=function(e){var t=Fh.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Qv,render:e}};z.isValidElement=Lu;z.lazy=function(e){return{$$typeof:Xv,_payload:{_status:-1,_result:e},_init:ny}};z.memo=function(e,t){return{$$typeof:Jv,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return ke.current.useCallback(e,t)};z.useContext=function(e){return ke.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};z.useEffect=function(e,t){return ke.current.useEffect(e,t)};z.useId=function(){return ke.current.useId()};z.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ke.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};z.useRef=function(e){return ke.current.useRef(e)};z.useState=function(e){return ke.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ke.current.useTransition()};z.version="18.2.0";(function(e){e.exports=z})($v);const dr=jv(I),sl=zv({__proto__:null,default:dr},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=I,oy=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),sy=Object.prototype.hasOwnProperty,ly=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uy={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sy.call(t,r)&&!uy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:oy,type:e,key:o,ref:a,props:i,_owner:ly.current}}La.Fragment=ay;La.jsx=zh;La.jsxs=zh;(function(e){e.exports=La})(Bv);const tr=oi.Fragment,_=oi.jsx,A=oi.jsxs;var ll={},ul={},cy={get exports(){return ul},set exports(e){ul=e}},De={},cl={},fy={get exports(){return cl},set exports(e){cl=e}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var F=P.length;P.push(D);e:for(;0<F;){var ne=F-1>>>1,ce=P[ne];if(0<i(ce,D))P[ne]=D,P[F]=ce,F=ne;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],F=P.pop();if(F!==D){P[0]=F;e:for(var ne=0,ce=P.length,Ji=ce>>>1;ne<Ji;){var fn=2*(ne+1)-1,ps=P[fn],dn=fn+1,Xi=P[dn];if(0>i(ps,F))dn<ce&&0>i(Xi,ps)?(P[ne]=Xi,P[dn]=F,ne=dn):(P[ne]=ps,P[fn]=F,ne=fn);else if(dn<ce&&0>i(Xi,F))P[ne]=Xi,P[dn]=F,ne=dn;else break e}}return D}function i(P,D){var F=P.sortIndex-D.sortIndex;return F!==0?F:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,ds(k);else{var D=n(u);D!==null&&hs(w,D.startTime-P)}}function k(P,D){v=!1,y&&(y=!1,p(R),R=-1),g=!0;var F=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||P&&!We());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ce=ne(f.expirationTime<=D);D=e.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var Ji=!0;else{var fn=n(u);fn!==null&&hs(w,fn.startTime-D),Ji=!1}return Ji}finally{f=null,h=F,g=!1}}var b=!1,C=null,R=-1,j=5,M=-1;function We(){return!(e.unstable_now()-M<j)}function Or(){if(C!==null){var P=e.unstable_now();M=P;var D=!0;try{D=C(!0,P)}finally{D?Rr():(b=!1,C=null)}}else b=!1}var Rr;if(typeof d=="function")Rr=function(){d(Or)};else if(typeof MessageChannel<"u"){var of=new MessageChannel,Fv=of.port2;of.port1.onmessage=Or,Rr=function(){Fv.postMessage(null)}}else Rr=function(){x(Or,0)};function ds(P){C=P,b||(b=!0,Rr())}function hs(P,D){R=x(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ds(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var F=h;h=D;try{return P()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=h;h=P;try{return D()}finally{h=F}},e.unstable_scheduleCallback=function(P,D,F){var ne=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ne+F:ne):F=ne,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=F+ce,P={id:c++,callback:D,priorityLevel:P,startTime:F,expirationTime:ce,sortIndex:-1},F>ne?(P.sortIndex=F,t(u,P),n(l)===null&&P===n(u)&&(y?(p(R),R=-1):y=!0,hs(w,F-ne))):(P.sortIndex=ce,t(l,P),v||g||(v=!0,ds(k))),P},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(P){var D=h;return function(){var F=h;h=D;try{return P.apply(this,arguments)}finally{h=F}}}})(jh);(function(e){e.exports=jh})(fy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh=I,Le=cl;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $h=new Set,ai={};function Dn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(ai[e]=t,e=0;e<t.length;e++)$h.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},cf={};function hy(e){return fl.call(cf,e)?!0:fl.call(uf,e)?!1:dy.test(e)?cf[e]=!0:(uf[e]=!0,!1)}function py(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function my(e,t,n,r){if(t===null||typeof t>"u"||py(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Mu);me[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Mu);me[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Mu);me[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(my(t,n,i,r)&&(n=null),r||i===null?hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Hh=Symbol.for("react.provider"),Wh=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,gs;function $r(e){if(gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var vs=!1;function ys(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function gy(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=ys(e.type,!1),e;case 11:return e=ys(e.type.render,!1),e;case 1:return e=ys(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case jn:return"Portal";case dl:return"Profiler";case Fu:return"StrictMode";case hl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wh:return(e.displayName||"Context")+".Consumer";case Hh:return(e._context.displayName||"Context")+".Provider";case zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yy(e){var t=Gh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){e._valueTracker||(e._valueTracker=yy(e))}function Kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yh(e,t){t=t.checked,t!=null&&Uu(e,"checked",t,!1)}function vl(e,t){Yh(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Hr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Qh(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,Jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wy=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){wy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Xh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Zh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sy=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(Sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,rr=null,ir=null;function gf(e){if(e=Ui(e)){if(typeof xl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=za(t),xl(e.stateNode,e.type,t))}}function ep(e){rr?ir?ir.push(e):ir=[e]:rr=e}function tp(){if(rr){var e=rr,t=ir;if(ir=rr=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function np(e,t){return e(t)}function rp(){}var ws=!1;function ip(e,t,n){if(ws)return e(t,n);ws=!0;try{return np(e,t,n)}finally{ws=!1,(rr!==null||ir!==null)&&(rp(),tp())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var bl=!1;if(St)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{bl=!1}function _y(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Yr=!1,Xo=null,Zo=!1,Il=null,Ey={onError:function(e){Yr=!0,Xo=e}};function ky(e,t,n,r,i,o,a,s,l){Yr=!1,Xo=null,_y.apply(Ey,arguments)}function xy(e,t,n,r,i,o,a,s,l){if(ky.apply(this,arguments),Yr){if(Yr){var u=Xo;Yr=!1,Xo=null}else throw Error(E(198));Zo||(Zo=!0,Il=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function op(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vf(e){if(Mn(e)!==e)throw Error(E(188))}function by(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vf(i),e;if(o===r)return vf(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function ap(e){return e=by(e),e!==null?sp(e):null}function sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sp(e);if(t!==null)return t;e=e.sibling}return null}var lp=Le.unstable_scheduleCallback,yf=Le.unstable_cancelCallback,Iy=Le.unstable_shouldYield,Cy=Le.unstable_requestPaint,re=Le.unstable_now,Ty=Le.unstable_getCurrentPriorityLevel,$u=Le.unstable_ImmediatePriority,up=Le.unstable_UserBlockingPriority,ea=Le.unstable_NormalPriority,Ny=Le.unstable_LowPriority,cp=Le.unstable_IdlePriority,Da=null,it=null;function Py(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Ay,Oy=Math.log,Ry=Math.LN2;function Ay(e){return e>>>=0,e===0?32:31-(Oy(e)/Ry|0)|0}var ro=64,io=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Wr(s):(o&=a,o!==0&&(r=Wr(o)))}else a=n&~i,a!==0?r=Wr(a):o!==0&&(r=Wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-qe(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Ly(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fp(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function Ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function My(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hp,Wu,pp,mp,gp,Tl=!1,oo=[],Wt=null,Vt=null,Gt=null,ui=new Map,ci=new Map,Ut=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return Wt=Dr(Wt,e,t,n,r,i),!0;case"dragenter":return Vt=Dr(Vt,e,t,n,r,i),!0;case"mouseover":return Gt=Dr(Gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ui.set(o,Dr(ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ci.set(o,Dr(ci.get(o)||null,e,t,n,r,i)),!0}return!1}function vp(e){var t=gn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=op(n),t!==null){e.blockedOn=t,gp(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=Ui(n),t!==null&&Wu(t),e.blockedOn=n,!1;t.shift()}return!0}function Sf(e,t,n){Po(e)&&n.delete(t)}function zy(){Tl=!1,Wt!==null&&Po(Wt)&&(Wt=null),Vt!==null&&Po(Vt)&&(Vt=null),Gt!==null&&Po(Gt)&&(Gt=null),ui.forEach(Sf),ci.forEach(Sf)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,zy)))}function fi(e){function t(i){return Mr(i,e)}if(0<oo.length){Mr(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&Mr(Wt,e),Vt!==null&&Mr(Vt,e),Gt!==null&&Mr(Gt,e),ui.forEach(t),ci.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)vp(n),n.blockedOn===null&&Ut.shift()}var or=Tt.ReactCurrentBatchConfig,na=!0;function jy(e,t,n,r){var i=H,o=or.transition;or.transition=null;try{H=1,Vu(e,t,n,r)}finally{H=i,or.transition=o}}function By(e,t,n,r){var i=H,o=or.transition;or.transition=null;try{H=4,Vu(e,t,n,r)}finally{H=i,or.transition=o}}function Vu(e,t,n,r){if(na){var i=Nl(e,t,n,r);if(i===null)Ps(e,t,r,ra,n),wf(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(wf(e,r),t&4&&-1<Uy.indexOf(e)){for(;i!==null;){var o=Ui(i);if(o!==null&&hp(o),o=Nl(e,t,n,r),o===null&&Ps(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var ra=null;function Nl(e,t,n,r){if(ra=null,e=Bu(r),e=gn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=op(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case $u:return 1;case up:return 4;case ea:case Ny:return 16;case cp:return 536870912;default:return 16}default:return 16}}var jt=null,Gu=null,Oo=null;function wp(){if(Oo)return Oo;var e,t=Gu,n=t.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function _f(){return!1}function Me(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:_f,this.isPropagationStopped=_f,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=Me(br),Mi=Z({},br,{view:0,detail:0}),$y=Me(Mi),_s,Es,Ur,Ma=Z({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(_s=e.screenX-Ur.screenX,Es=e.screenY-Ur.screenY):Es=_s=0,Ur=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),Ef=Me(Ma),Hy=Z({},Ma,{dataTransfer:0}),Wy=Me(Hy),Vy=Z({},Mi,{relatedTarget:0}),ks=Me(Vy),Gy=Z({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Me(Gy),Yy=Z({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qy=Me(Yy),qy=Z({},br,{data:0}),kf=Me(qy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zy[e])?!!t[e]:!1}function Yu(){return e0}var t0=Z({},Mi,{key:function(e){if(e.key){var t=Jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n0=Me(t0),r0=Z({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Me(r0),i0=Z({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),o0=Me(i0),a0=Z({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=Me(a0),l0=Z({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=Me(l0),c0=[9,13,27,32],Qu=St&&"CompositionEvent"in window,Qr=null;St&&"documentMode"in document&&(Qr=document.documentMode);var f0=St&&"TextEvent"in window&&!Qr,Sp=St&&(!Qu||Qr&&8<Qr&&11>=Qr),bf=String.fromCharCode(32),If=!1;function _p(e,t){switch(e){case"keyup":return c0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function d0(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(If=!0,bf);case"textInput":return e=t.data,e===bf&&If?null:e;default:return null}}function h0(e,t){if($n)return e==="compositionend"||!Qu&&_p(e,t)?(e=wp(),Oo=Gu=jt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p0[e.type]:t==="textarea"}function kp(e,t,n,r){ep(r),t=ia(t,"onChange"),0<t.length&&(n=new Ku("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,di=null;function m0(e){Lp(e,0)}function Ua(e){var t=Vn(e);if(Kh(t))return e}function g0(e,t){if(e==="change")return t}var xp=!1;if(St){var xs;if(St){var bs="oninput"in document;if(!bs){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),bs=typeof Tf.oninput=="function"}xs=bs}else xs=!1;xp=xs&&(!document.documentMode||9<document.documentMode)}function Nf(){qr&&(qr.detachEvent("onpropertychange",bp),di=qr=null)}function bp(e){if(e.propertyName==="value"&&Ua(di)){var t=[];kp(t,di,e,Bu(e)),ip(m0,t)}}function v0(e,t,n){e==="focusin"?(Nf(),qr=t,di=n,qr.attachEvent("onpropertychange",bp)):e==="focusout"&&Nf()}function y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua(di)}function w0(e,t){if(e==="click")return Ua(t)}function S0(e,t){if(e==="input"||e==="change")return Ua(t)}function _0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:_0;function hi(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,t){var n=Pf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cp(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E0(e){var t=Cp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ip(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Of(n,o);var a=Of(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var k0=St&&"documentMode"in document&&11>=document.documentMode,Hn=null,Pl=null,Jr=null,Ol=!1;function Rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||Hn==null||Hn!==Jo(r)||(r=Hn,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&hi(Jr,r)||(Jr=r,r=ia(Pl,"onSelect"),0<r.length&&(t=new Ku("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Is={},Tp={};St&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Fa(e){if(Is[e])return Is[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tp)return Is[e]=t[n];return e}var Np=Fa("animationend"),Pp=Fa("animationiteration"),Op=Fa("animationstart"),Rp=Fa("transitionend"),Ap=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Ap.set(e,t),Dn(t,[e])}for(var Cs=0;Cs<Af.length;Cs++){var Ts=Af[Cs],x0=Ts.toLowerCase(),b0=Ts[0].toUpperCase()+Ts.slice(1);sn(x0,"on"+b0)}sn(Np,"onAnimationEnd");sn(Pp,"onAnimationIteration");sn(Op,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Rp,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function Lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xy(r,t,void 0,e),e.currentTarget=null}function Lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,s,u),o=l}}}if(Zo)throw e=Il,Zo=!1,Il=null,e}function G(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(Dp(t,e,2,!1),n.add(r))}function Ns(e,t,n){var r=0;t&&(r|=4),Dp(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[lo]){e[lo]=!0,$h.forEach(function(n){n!=="selectionchange"&&(I0.has(n)||Ns(n,!1,e),Ns(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Ns("selectionchange",!1,t))}}function Dp(e,t,n,r){switch(yp(t)){case 1:var i=jy;break;case 4:i=By;break;default:i=Vu}n=i.bind(null,t,n,e),i=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=gn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}ip(function(){var u=o,c=Bu(n),f=[];e:{var h=Ap.get(e);if(h!==void 0){var g=Ku,v=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=n0;break;case"focusin":v="focus",g=ks;break;case"focusout":v="blur",g=ks;break;case"beforeblur":case"afterblur":g=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=o0;break;case Np:case Pp:case Op:g=Ky;break;case Rp:g=s0;break;case"scroll":g=$y;break;case"wheel":g=u0;break;case"copy":case"cut":case"paste":g=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xf}var y=(t&4)!==0,x=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=li(d,p),w!=null&&y.push(mi(d,w,m)))),x)break;d=d.return}0<y.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==kl&&(v=n.relatedTarget||n.fromElement)&&(gn(v)||v[_t]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?gn(v):null,v!==null&&(x=Mn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Ef,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=xf,w="onPointerLeave",p="onPointerEnter",d="pointer"),x=g==null?h:Vn(g),m=v==null?h:Vn(v),h=new y(w,d+"leave",g,n,c),h.target=x,h.relatedTarget=m,w=null,gn(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=m,y.relatedTarget=x,w=y),x=w,g&&v)t:{for(y=g,p=v,d=0,m=y;m;m=Fn(m))d++;for(m=0,w=p;w;w=Fn(w))m++;for(;0<d-m;)y=Fn(y),d--;for(;0<m-d;)p=Fn(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=Fn(y),p=Fn(p)}y=null}else y=null;g!==null&&Df(f,h,g,y,!1),v!==null&&x!==null&&Df(f,x,v,y,!0)}}e:{if(h=u?Vn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=g0;else if(Cf(h))if(xp)k=S0;else{k=y0;var b=v0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=w0);if(k&&(k=k(e,u))){kp(f,k,n,c);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&yl(h,"number",h.value)}switch(b=u?Vn(u):window,e){case"focusin":(Cf(b)||b.contentEditable==="true")&&(Hn=b,Pl=u,Jr=null);break;case"focusout":Jr=Pl=Hn=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Rf(f,n,c);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Rf(f,n,c)}var C;if(Qu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else $n?_p(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Sp&&n.locale!=="ko"&&($n||R!=="onCompositionStart"?R==="onCompositionEnd"&&$n&&(C=wp()):(jt=c,Gu="value"in jt?jt.value:jt.textContent,$n=!0)),b=ia(u,R),0<b.length&&(R=new kf(R,e,null,n,c),f.push({event:R,listeners:b}),C?R.data=C:(C=Ep(n),C!==null&&(R.data=C)))),(C=f0?d0(e,n):h0(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(c=new kf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}Lp(f,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=li(e,n),o!=null&&r.unshift(mi(e,o,i)),o=li(e,t),o!=null&&r.push(mi(e,o,i))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=li(n,o),l!=null&&a.unshift(mi(n,l,s))):i||(l=li(n,o),l!=null&&a.push(mi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var C0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(T0,"")}function uo(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error(E(425))}function oa(){}var Rl=null,Al=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(O0)}:Dl;function O0(e){setTimeout(function(){throw e})}function Os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),tt="__reactFiber$"+Ir,gi="__reactProps$"+Ir,_t="__reactContainer$"+Ir,Ml="__reactEvents$"+Ir,R0="__reactListeners$"+Ir,A0="__reactHandles$"+Ir;function gn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[tt])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[tt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function za(e){return e[gi]||null}var Ul=[],Gn=-1;function ln(e){return{current:e}}function Y(e){0>Gn||(e.current=Ul[Gn],Ul[Gn]=null,Gn--)}function V(e,t){Gn++,Ul[Gn]=e.current,e.current=t}var tn={},we=ln(tn),Te=ln(!1),In=tn;function pr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function aa(){Y(Te),Y(we)}function zf(e,t,n){if(we.current!==tn)throw Error(E(168));V(we,t),V(Te,n)}function Mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,vy(e)||"Unknown",i));return Z({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,In=we.current,V(we,e),V(Te,Te.current),!0}function jf(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Mp(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,Y(Te),Y(we),V(we,e)):Y(Te),V(Te,n)}var ct=null,ja=!1,Rs=!1;function Up(e){ct===null?ct=[e]:ct.push(e)}function L0(e){ja=!0,Up(e)}function un(){if(!Rs&&ct!==null){Rs=!0;var e=0,t=H;try{var n=ct;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,ja=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),lp($u,un),i}finally{H=t,Rs=!1}}return null}var Kn=[],Yn=0,la=null,ua=0,Fe=[],ze=0,Cn=null,pt=1,mt="";function hn(e,t){Kn[Yn++]=ua,Kn[Yn++]=la,la=e,ua=t}function Fp(e,t,n){Fe[ze++]=pt,Fe[ze++]=mt,Fe[ze++]=Cn,Cn=e;var r=pt;e=mt;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pt=1<<32-qe(t)+i|n<<i|r,mt=o+e}else pt=1<<o|n<<i|r,mt=e}function Ju(e){e.return!==null&&(hn(e,1),Fp(e,1,0))}function Xu(e){for(;e===la;)la=Kn[--Yn],Kn[Yn]=null,ua=Kn[--Yn],Kn[Yn]=null;for(;e===Cn;)Cn=Fe[--ze],Fe[ze]=null,mt=Fe[--ze],Fe[ze]=null,pt=Fe[--ze],Fe[ze]=null}var Ae=null,Re=null,q=!1,Ye=null;function zp(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Re=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Re=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(q){var t=Re;if(t){var n=t;if(!Bf(e,t)){if(Fl(e))throw Error(E(418));t=Kt(n.nextSibling);var r=Ae;t&&Bf(e,t)?zp(r,n):(e.flags=e.flags&-4097|2,q=!1,Ae=e)}}else{if(Fl(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Ae=e}}}function $f(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function co(e){if(e!==Ae)return!1;if(!q)return $f(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=Re)){if(Fl(e))throw jp(),Error(E(418));for(;t;)zp(e,t),t=Kt(t.nextSibling)}if($f(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ae?Kt(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=Re;e;)e=Kt(e.nextSibling)}function mr(){Re=Ae=null,q=!1}function Zu(e){Ye===null?Ye=[e]:Ye.push(e)}var D0=Tt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=ln(null),fa=null,Qn=null,ec=null;function tc(){ec=Qn=fa=null}function nc(e){var t=ca.current;Y(ca),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){fa=e,ec=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(fa===null)throw Error(E(308));Qn=e,fa.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var vn=null;function rc(e){vn===null?vn=[e]:vn.push(e)}function Bp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=a,e.lanes=a,e.memoizedState=f}}function Wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Hp=new Bh.Component().refs;function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=qt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(Je(t,e,i,r),Ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=qt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(Je(t,e,i,r),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=qt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(Je(t,e,r,n),Ao(t,e,r))}};function Vf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,o):!0}function Wp(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=Ne(t)?In:we.current,r=t.contextTypes,o=(r=r!=null)?pr(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hp,ic(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=Ne(t)?In:we.current,i.context=pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ba.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Hp&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kf(e){var t=e._init;return t(e._payload)}function Vp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Jt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,w){return d===null||d.tag!==6?(d=zs(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var k=m.type;return k===Bn?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dt&&Kf(k)===d.type)?(w=i(d,m.props),w.ref=Fr(p,d,m),w.return=p,w):(w=zo(m.type,m.key,m.props,null,p.mode,w),w.ref=Fr(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=js(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,k){return d===null||d.tag!==7?(d=kn(m,p.mode,w,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case eo:return m=zo(d.type,d.key,d.props,null,p.mode,m),m.ref=Fr(p,null,d),m.return=p,m;case jn:return d=js(d,p.mode,m),d.return=p,d;case Dt:var w=d._init;return f(p,w(d._payload),m)}if(Hr(d)||Ar(d))return d=kn(d,p.mode,m,null),d.return=p,d;fo(p,d)}return null}function h(p,d,m,w){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return m.key===k?l(p,d,m,w):null;case jn:return m.key===k?u(p,d,m,w):null;case Dt:return k=m._init,h(p,d,k(m._payload),w)}if(Hr(m)||Ar(m))return k!==null?null:c(p,d,m,w,null);fo(p,m)}return null}function g(p,d,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(d,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case eo:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,k);case jn:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,k);case Dt:var b=w._init;return g(p,d,m,b(w._payload),k)}if(Hr(w)||Ar(w))return p=p.get(m)||null,c(d,p,w,k,null);fo(d,w)}return null}function v(p,d,m,w){for(var k=null,b=null,C=d,R=d=0,j=null;C!==null&&R<m.length;R++){C.index>R?(j=C,C=null):j=C.sibling;var M=h(p,C,m[R],w);if(M===null){C===null&&(C=j);break}e&&C&&M.alternate===null&&t(p,C),d=o(M,d,R),b===null?k=M:b.sibling=M,b=M,C=j}if(R===m.length)return n(p,C),q&&hn(p,R),k;if(C===null){for(;R<m.length;R++)C=f(p,m[R],w),C!==null&&(d=o(C,d,R),b===null?k=C:b.sibling=C,b=C);return q&&hn(p,R),k}for(C=r(p,C);R<m.length;R++)j=g(C,p,R,m[R],w),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?R:j.key),d=o(j,d,R),b===null?k=j:b.sibling=j,b=j);return e&&C.forEach(function(We){return t(p,We)}),q&&hn(p,R),k}function y(p,d,m,w){var k=Ar(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var b=k=null,C=d,R=d=0,j=null,M=m.next();C!==null&&!M.done;R++,M=m.next()){C.index>R?(j=C,C=null):j=C.sibling;var We=h(p,C,M.value,w);if(We===null){C===null&&(C=j);break}e&&C&&We.alternate===null&&t(p,C),d=o(We,d,R),b===null?k=We:b.sibling=We,b=We,C=j}if(M.done)return n(p,C),q&&hn(p,R),k;if(C===null){for(;!M.done;R++,M=m.next())M=f(p,M.value,w),M!==null&&(d=o(M,d,R),b===null?k=M:b.sibling=M,b=M);return q&&hn(p,R),k}for(C=r(p,C);!M.done;R++,M=m.next())M=g(C,p,R,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?R:M.key),d=o(M,d,R),b===null?k=M:b.sibling=M,b=M);return e&&C.forEach(function(Or){return t(p,Or)}),q&&hn(p,R),k}function x(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:e:{for(var k=m.key,b=d;b!==null;){if(b.key===k){if(k=m.type,k===Bn){if(b.tag===7){n(p,b.sibling),d=i(b,m.props.children),d.return=p,p=d;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dt&&Kf(k)===b.type){n(p,b.sibling),d=i(b,m.props),d.ref=Fr(p,b,m),d.return=p,p=d;break e}n(p,b);break}else t(p,b);b=b.sibling}m.type===Bn?(d=kn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=zo(m.type,m.key,m.props,null,p.mode,w),w.ref=Fr(p,d,m),w.return=p,p=w)}return a(p);case jn:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=js(m,p.mode,w),d.return=p,p=d}return a(p);case Dt:return b=m._init,x(p,d,b(m._payload),w)}if(Hr(m))return v(p,d,m,w);if(Ar(m))return y(p,d,m,w);fo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=zs(m,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return x}var gr=Vp(!0),Gp=Vp(!1),Fi={},ot=ln(Fi),vi=ln(Fi),yi=ln(Fi);function yn(e){if(e===Fi)throw Error(E(174));return e}function oc(e,t){switch(V(yi,t),V(vi,e),V(ot,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}Y(ot),V(ot,t)}function vr(){Y(ot),Y(vi),Y(yi)}function Kp(e){yn(yi.current);var t=yn(ot.current),n=Sl(t,e.type);t!==n&&(V(vi,e),V(ot,n))}function ac(e){vi.current===e&&(Y(ot),Y(vi))}var J=ln(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function sc(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var Lo=Tt.ReactCurrentDispatcher,Ls=Tt.ReactCurrentBatchConfig,Tn=0,X=null,oe=null,fe=null,pa=!1,Xr=!1,wi=0,M0=0;function ge(){throw Error(E(321))}function lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function uc(e,t,n,r,i,o){if(Tn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?j0:B0,e=n(r,i),Xr){o=0;do{if(Xr=!1,wi=0,25<=o)throw Error(E(301));o+=1,fe=oe=null,t.updateQueue=null,Lo.current=$0,e=n(r,i)}while(Xr)}if(Lo.current=ma,t=oe!==null&&oe.next!==null,Tn=0,fe=oe=X=null,pa=!1,t)throw Error(E(300));return e}function cc(){var e=wi!==0;return wi=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?X.memoizedState=fe=e:fe=fe.next=e,fe}function He(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=fe===null?X.memoizedState:fe.next;if(t!==null)fe=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},fe===null?X.memoizedState=fe=e:fe=fe.next=e}return fe}function Si(e,t){return typeof t=="function"?t(e):t}function Ds(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Tn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,X.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Xe(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ms(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Xe(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yp(){}function Qp(e,t){var n=X,r=He(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,fc(Xp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,_i(9,Jp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(E(349));Tn&30||qp(n,t,i)}return i}function qp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,r){t.value=n,t.getSnapshot=r,Zp(t)&&em(e)}function Xp(e,t,n){return n(function(){Zp(t)&&em(e)})}function Zp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function em(e){var t=Et(e,1);t!==null&&Je(t,e,1,-1)}function Yf(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,X,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tm(){return He().memoizedState}function Do(e,t,n,r){var i=et();X.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function $a(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&lc(r,a.deps)){i.memoizedState=_i(t,n,o,r);return}}X.flags|=e,i.memoizedState=_i(1|t,n,o,r)}function Qf(e,t){return Do(8390656,8,e,t)}function fc(e,t){return $a(2048,8,e,t)}function nm(e,t){return $a(4,2,e,t)}function rm(e,t){return $a(4,4,e,t)}function im(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function om(e,t,n){return n=n!=null?n.concat([e]):null,$a(4,4,im.bind(null,t,e),n)}function dc(){}function am(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sm(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lm(e,t,n){return Tn&21?(Xe(n,t)||(n=fp(),X.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function U0(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ls.transition;Ls.transition={};try{e(!1),t()}finally{H=n,Ls.transition=r}}function um(){return He().memoizedState}function F0(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cm(e))fm(t,n);else if(n=Bp(e,t,n,r),n!==null){var i=Ee();Je(n,e,r,i),dm(n,t,r)}}function z0(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cm(e))fm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Xe(s,a)){var l=t.interleaved;l===null?(i.next=i,rc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Bp(e,t,i,r),n!==null&&(i=Ee(),Je(n,e,r,i),dm(n,t,r))}}function cm(e){var t=e.alternate;return e===X||t!==null&&t===X}function fm(e,t){Xr=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}var ma={readContext:$e,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},j0={readContext:$e,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Qf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,im.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Yf,useDebugValue:dc,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Yf(!1),t=e[0];return e=U0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=et();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),de===null)throw Error(E(349));Tn&30||qp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qf(Xp.bind(null,r,o,e),[e]),r.flags|=2048,_i(9,Jp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=de.identifierPrefix;if(q){var n=mt,r=pt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:$e,useCallback:am,useContext:$e,useEffect:fc,useImperativeHandle:om,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:sm,useReducer:Ds,useRef:tm,useState:function(){return Ds(Si)},useDebugValue:dc,useDeferredValue:function(e){var t=He();return lm(t,oe.memoizedState,e)},useTransition:function(){var e=Ds(Si)[0],t=He().memoizedState;return[e,t]},useMutableSource:Yp,useSyncExternalStore:Qp,useId:um,unstable_isNewReconciler:!1},$0={readContext:$e,useCallback:am,useContext:$e,useEffect:fc,useImperativeHandle:om,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:sm,useReducer:Ms,useRef:tm,useState:function(){return Ms(Si)},useDebugValue:dc,useDeferredValue:function(e){var t=He();return oe===null?t.memoizedState=e:lm(t,oe.memoizedState,e)},useTransition:function(){var e=Ms(Si)[0],t=He().memoizedState;return[e,t]},useMutableSource:Yp,useSyncExternalStore:Qp,useId:um,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=gy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Us(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function hm(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){va||(va=!0,Zl=r),Hl(e,t)},n}function pm(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=r1.bind(null,e,t,n),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var W0=Tt.ReactCurrentOwner,Ce=!1;function _e(e,t,n,r){t.child=e===null?Gp(t,null,n,r):gr(t,e.child,n,r)}function Zf(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=uc(e,t,n,r,o,i),n=cc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(q&&n&&Ju(t),t.flags|=1,_e(e,t,r,i),t.child)}function ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mm(e,t,o,r,i)):(e=zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(a,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function mm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,kt(e,t,i)}return Wl(e,t,n,r,i)}function gm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Jn,Oe),Oe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Jn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(Jn,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(Jn,Oe),Oe|=r;return _e(e,t,i,n),t.child}function vm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,i){var o=Ne(n)?In:we.current;return o=pr(t,o),ar(t,i),n=uc(e,t,n,r,o,i),r=cc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(q&&r&&Ju(t),t.flags|=1,_e(e,t,n,i),t.child)}function td(e,t,n,r,i){if(Ne(n)){var o=!0;sa(t)}else o=!1;if(ar(t,i),t.stateNode===null)Mo(e,t),Wp(t,n,r),$l(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=Ne(n)?In:we.current,u=pr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Gf(t,a,r,u),Mt=!1;var h=t.memoizedState;a.state=h,da(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Te.current||Mt?(typeof c=="function"&&(Bl(t,n,c,r),l=t.memoizedState),(s=Mt||Vf(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$p(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ge(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=Ne(n)?In:we.current,l=pr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Gf(t,a,r,l),Mt=!1,h=t.memoizedState,a.state=h,da(t,r,a,i);var v=t.memoizedState;s!==f||h!==v||Te.current||Mt?(typeof g=="function"&&(Bl(t,n,g,r),v=t.memoizedState),(u=Mt||Vf(t,n,u,r,h,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,o,i)}function Vl(e,t,n,r,i,o){vm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jf(t,n,!1),kt(e,t,o);r=t.stateNode,W0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,s,o)):_e(e,t,s,o),t.memoizedState=r.state,i&&jf(t,n,!0),t.child}function ym(e){var t=e.stateNode;t.pendingContext?zf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zf(e,t.context,!1),oc(e,t.containerInfo)}function nd(e,t,n,r,i){return mr(),Zu(i),t.flags|=256,_e(e,t,n,r),t.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function wm(e,t,n){var r=t.pendingProps,i=J.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(J,i&1),e===null)return zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Va(a,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Kl(n),t.memoizedState=Gl,e):hc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return V0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Jt(s,o):(o=kn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Kl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Gl,r}return o=e.child,e=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hc(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Zu(r),gr(t,e.child,null,n),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Us(Error(E(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Va({mode:"visible",children:r.children},i,0,null),o=kn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gr(t,e.child,null,a),t.child.memoizedState=Kl(a),t.memoizedState=Gl,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=Us(o,r,void 0),ho(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ce||s){if(r=de,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),Je(r,e,i,-1))}return wc(),r=Us(Error(E(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=i1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=Kt(i.nextSibling),Ae=t,q=!0,Ye=null,e!==null&&(Fe[ze++]=pt,Fe[ze++]=mt,Fe[ze++]=Cn,pt=e.id,mt=e.overflow,Cn=t),t=hc(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G0(e,t,n){switch(t.tag){case 3:ym(t),mr();break;case 5:Kp(t);break;case 1:Ne(t.type)&&sa(t);break;case 4:oc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?wm(e,t,n):(V(J,J.current&1),e=kt(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,gm(e,t,n)}return kt(e,t,n)}var _m,Yl,Em,km;_m=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};Em=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yn(ot.current);var o=null;switch(n){case"input":i=gl(e,i),r=gl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=wl(e,i),r=wl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}_l(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};km=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function K0(e,t,n){var r=t.pendingProps;switch(Xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&aa(),ve(t),null;case 3:return r=t.stateNode,vr(),Y(Te),Y(we),sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(nu(Ye),Ye=null))),Yl(e,t),ve(t),null;case 5:ac(t);var i=yn(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Em(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=yn(ot.current),co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[gi]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Vr.length;i++)G(Vr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":df(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":pf(r,o),G("invalid",r)}_l(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),i=["children",""+s]):ai.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":to(r),hf(r,o,!0);break;case"textarea":to(r),mf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[tt]=t,e[gi]=r,_m(e,t,!1,!1),t.stateNode=e;e:{switch(a=El(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vr.length;i++)G(Vr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":df(e,r),i=gl(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),G("invalid",e);break;case"textarea":pf(e,r),i=wl(e,r),G("invalid",e);break;default:i=r}_l(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Zh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&si(e,l):typeof l=="number"&&si(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",e):l!=null&&Uu(e,o,l,a))}switch(n){case"input":to(e),hf(e,r,!1);break;case"textarea":to(e),mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nr(e,!!r.multiple,o,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=yn(yi.current),yn(ot.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(o=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Re!==null&&t.mode&1&&!(t.flags&128))jp(),mr(),t.flags|=98560,o=!1;else if(o=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[tt]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Ye!==null&&(nu(Ye),Ye=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):wc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return vr(),Yl(e,t),e===null&&pi(t.stateNode.containerInfo),ve(t),null;case 10:return nc(t.type._context),ve(t),null;case 17:return Ne(t.type)&&aa(),ve(t),null;case 19:if(Y(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)zr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ha(e),a!==null){for(t.flags|=128,zr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>wr&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ha(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>wr&&n!==1073741824&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return yc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Y0(e,t){switch(Xu(t),t.tag){case 1:return Ne(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),Y(Te),Y(we),sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ac(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return vr(),null;case 10:return nc(t.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var po=!1,ye=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,N=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){ee(e,t,r)}}var id=!1;function q0(e,t){if(Rl=na,e=Cp(),qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},na=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ge(t.type,y),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=id,id=!1,v}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ql(t,n,o)}i=i.next}while(i!==r)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xm(e){var t=e.alternate;t!==null&&(e.alternate=null,xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[gi],delete t[Ml],delete t[R0],delete t[A0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bm(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var he=null,Ke=!1;function Ot(e,t,n){for(n=n.child;n!==null;)Im(e,t,n),n=n.sibling}function Im(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 5:ye||qn(n,t);case 6:var r=he,i=Ke;he=null,Ot(e,t,n),he=r,Ke=i,he!==null&&(Ke?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ke?(e=he,n=n.stateNode,e.nodeType===8?Os(e.parentNode,n):e.nodeType===1&&Os(e,n),fi(e)):Os(he,n.stateNode));break;case 4:r=he,i=Ke,he=n.stateNode.containerInfo,Ke=!0,Ot(e,t,n),he=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ql(n,t,a),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!ye&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ot(e,t,n),ye=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q0),t.forEach(function(r){var i=o1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Ke=!1;break e;case 3:he=s.stateNode.containerInfo,Ke=!0;break e;case 4:he=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(he===null)throw Error(E(160));Im(o,a,i),he=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}function Cm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Zr(3,e,e.return),Ha(3,e)}catch(y){ee(e,e.return,y)}try{Zr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Yh(i,o),El(s,a);var u=El(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Zh(i,f):c==="dangerouslySetInnerHTML"?Jh(i,f):c==="children"?si(i,f):Uu(i,c,f,u)}switch(s){case"input":vl(i,o);break;case"textarea":Qh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?nr(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?nr(i,!!o.multiple,o.defaultValue,!0):nr(i,!!o.multiple,o.multiple?[]:"",!1))}i[gi]=o}catch(y){ee(e,e.return,y)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ee(e,e.return,y)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gc=re())),r&4&&ad(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,Ve(t,e),ye=u):Ve(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:Zr(4,h,h.return);break;case 1:qn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:qn(h,h.return);break;case 22:if(h.memoizedState!==null){ld(f);continue}}g!==null?(g.return=h,N=g):ld(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Xh("display",a))}catch(y){ee(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&ad(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var o=od(e);Xl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=od(e);Jl(e,s,a);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J0(e,t,n){N=e,Tm(e)}function Tm(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||po;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ye;s=po;var u=ye;if(po=a,(ye=l)&&!u)for(N=i;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?ud(i):l!==null?(l.return=a,N=l):ud(i);for(;o!==null;)N=o,Tm(o),o=o.sibling;N=i,po=s,ye=u}sd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):sd(e)}}function sd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ye||t.flags&512&&ql(t)}catch(h){ee(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ld(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ud(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{ql(t)}catch(l){ee(t,o,l)}break;case 5:var a=t.return;try{ql(t)}catch(l){ee(t,a,l)}}}catch(l){ee(t,t.return,l)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var X0=Math.ceil,ga=Tt.ReactCurrentDispatcher,pc=Tt.ReactCurrentOwner,Be=Tt.ReactCurrentBatchConfig,$=0,de=null,ie=null,pe=0,Oe=0,Jn=ln(0),ae=0,Ei=null,Nn=0,Wa=0,mc=0,ei=null,be=null,gc=0,wr=1/0,ut=null,va=!1,Zl=null,Qt=null,mo=!1,Bt=null,ya=0,ti=0,eu=null,Uo=-1,Fo=0;function Ee(){return $&6?re():Uo!==-1?Uo:Uo=re()}function qt(e){return e.mode&1?$&2&&pe!==0?pe&-pe:D0.transition!==null?(Fo===0&&(Fo=fp()),Fo):(e=H,e!==0||(e=window.event,e=e===void 0?16:yp(e.type)),e):1}function Je(e,t,n,r){if(50<ti)throw ti=0,eu=null,Error(E(185));Di(e,n,r),(!($&2)||e!==de)&&(e===de&&(!($&2)&&(Wa|=n),ae===4&&Ft(e,pe)),Pe(e,r),n===1&&$===0&&!(t.mode&1)&&(wr=re()+500,ja&&un()))}function Pe(e,t){var n=e.callbackNode;Dy(e,t);var r=ta(e,e===de?pe:0);if(r===0)n!==null&&yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yf(n),t===1)e.tag===0?L0(cd.bind(null,e)):Up(cd.bind(null,e)),P0(function(){!($&6)&&un()}),n=null;else{switch(dp(r)){case 1:n=$u;break;case 4:n=up;break;case 16:n=ea;break;case 536870912:n=cp;break;default:n=ea}n=Mm(n,Nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nm(e,t){if(Uo=-1,Fo=0,$&6)throw Error(E(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=ta(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wa(e,r);else{t=r;var i=$;$|=2;var o=Om();(de!==e||pe!==t)&&(ut=null,wr=re()+500,En(e,t));do try{t1();break}catch(s){Pm(e,s)}while(1);tc(),ga.current=o,$=i,ie!==null?t=0:(de=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Cl(e),i!==0&&(r=i,t=tu(e,i))),t===1)throw n=Ei,En(e,0),Ft(e,r),Pe(e,re()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z0(i)&&(t=wa(e,r),t===2&&(o=Cl(e),o!==0&&(r=o,t=tu(e,o))),t===1))throw n=Ei,En(e,0),Ft(e,r),Pe(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:pn(e,be,ut);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=gc+500-re(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dl(pn.bind(null,e,be,ut),t);break}pn(e,be,ut);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-qe(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*X0(r/1960))-r,10<r){e.timeoutHandle=Dl(pn.bind(null,e,be,ut),r);break}pn(e,be,ut);break;case 5:pn(e,be,ut);break;default:throw Error(E(329))}}}return Pe(e,re()),e.callbackNode===n?Nm.bind(null,e):null}function tu(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=wa(e,t),e!==2&&(t=be,be=n,t!==null&&nu(t)),e}function nu(e){be===null?be=e:be.push.apply(be,e)}function Z0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~mc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function cd(e){if($&6)throw Error(E(327));sr();var t=ta(e,0);if(!(t&1))return Pe(e,re()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=Ei,En(e,0),Ft(e,t),Pe(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,be,ut),Pe(e,re()),null}function vc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(wr=re()+500,ja&&un())}}function Pn(e){Bt!==null&&Bt.tag===0&&!($&6)&&sr();var t=$;$|=1;var n=Be.transition,r=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=r,Be.transition=n,$=t,!($&6)&&un()}}function yc(){Oe=Jn.current,Y(Jn)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,N0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:vr(),Y(Te),Y(we),sc();break;case 5:ac(r);break;case 4:vr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:nc(r.type._context);break;case 22:case 23:yc()}n=n.return}if(de=e,ie=e=Jt(e.current,null),pe=Oe=t,ae=0,Ei=null,mc=Wa=Nn=0,be=ei=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}vn=null}return e}function Pm(e,t){do{var n=ie;try{if(tc(),Lo.current=ma,pa){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pa=!1}if(Tn=0,fe=oe=X=null,Xr=!1,wi=0,pc.current=null,n===null||n.return===null){ae=1,Ei=t,ie=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jf(a);if(g!==null){g.flags&=-257,Xf(g,a,s,o,t),g.mode&1&&qf(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){qf(o,u,t),wc();break e}l=Error(E(426))}}else if(q&&s.mode&1){var x=Jf(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Xf(x,a,s,o,t),Zu(yr(l,s));break e}}o=l=yr(l,s),ae!==4&&(ae=2),ei===null?ei=[o]:ei.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=hm(o,l,t);Hf(o,p);break e;case 1:s=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=pm(o,s,t);Hf(o,w);break e}}o=o.return}while(o!==null)}Am(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Om(){var e=ga.current;return ga.current=ma,e===null?ma:e}function wc(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(Nn&268435455)&&!(Wa&268435455)||Ft(de,pe)}function wa(e,t){var n=$;$|=2;var r=Om();(de!==e||pe!==t)&&(ut=null,En(e,t));do try{e1();break}catch(i){Pm(e,i)}while(1);if(tc(),$=n,ga.current=r,ie!==null)throw Error(E(261));return de=null,pe=0,ae}function e1(){for(;ie!==null;)Rm(ie)}function t1(){for(;ie!==null&&!Iy();)Rm(ie)}function Rm(e){var t=Dm(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Am(e):ie=t,pc.current=null}function Am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Y0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=K0(n,t,Oe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function pn(e,t,n){var r=H,i=Be.transition;try{Be.transition=null,H=1,n1(e,t,n,r)}finally{Be.transition=i,H=r}return null}function n1(e,t,n,r){do sr();while(Bt!==null);if($&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(My(e,o),e===de&&(ie=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Mm(ea,function(){return sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var a=H;H=1;var s=$;$|=4,pc.current=null,q0(e,n),Cm(n,e),E0(Al),na=!!Rl,Al=Rl=null,e.current=n,J0(n),Cy(),$=s,H=a,Be.transition=o}else e.current=n;if(mo&&(mo=!1,Bt=e,ya=i),o=e.pendingLanes,o===0&&(Qt=null),Py(n.stateNode),Pe(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(va)throw va=!1,e=Zl,Zl=null,e;return ya&1&&e.tag!==0&&sr(),o=e.pendingLanes,o&1?e===eu?ti++:(ti=0,eu=e):ti=0,un(),null}function sr(){if(Bt!==null){var e=dp(ya),t=Be.transition,n=H;try{if(Be.transition=null,H=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,ya=0,$&6)throw Error(E(331));var i=$;for($|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Zr(8,c,o)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,g=c.return;if(xm(c),c===u){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){a=N;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,N=m;else e:for(a=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ha(9,s)}}catch(k){ee(s,s.return,k)}if(s===a){N=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,N=w;break e}N=s.return}}if($=i,un(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Da,e)}catch{}r=!0}return r}finally{H=n,Be.transition=t}}return!1}function fd(e,t,n){t=yr(n,t),t=hm(e,t,1),e=Yt(e,t,1),t=Ee(),e!==null&&(Di(e,1,t),Pe(e,t))}function ee(e,t,n){if(e.tag===3)fd(e,e,n);else for(;t!==null;){if(t.tag===3){fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=yr(n,e),e=pm(t,e,1),t=Yt(t,e,1),e=Ee(),t!==null&&(Di(t,1,e),Pe(t,e));break}}t=t.return}}function r1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>re()-gc?En(e,0):mc|=n),Pe(e,t)}function Lm(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Ee();e=Et(e,t),e!==null&&(Di(e,t,n),Pe(e,n))}function i1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lm(e,n)}function o1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Lm(e,n)}var Dm;Dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,G0(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,q&&t.flags&1048576&&Fp(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mo(e,t),e=t.pendingProps;var i=pr(t,we.current);ar(t,n),i=uc(null,t,r,e,i,n);var o=cc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,sa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ic(t),i.updater=Ba,t.stateNode=i,i._reactInternals=t,$l(t,r,e,n),t=Vl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Ju(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s1(r),e=Ge(r,e),i){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=Zf(null,t,r,e,n);break e;case 14:t=ed(null,t,r,Ge(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),td(e,t,r,i,n);case 3:e:{if(ym(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$p(e,t),da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yr(Error(E(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(E(424)),t),t=nd(e,t,r,n,i);break e}else for(Re=Kt(t.stateNode.containerInfo.firstChild),Ae=t,q=!0,Ye=null,n=Gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=kt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Kp(t),e===null&&zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ll(r,i)?a=null:o!==null&&Ll(r,o)&&(t.flags|=32),vm(e,t),_e(e,t,a,n),t.child;case 6:return e===null&&zl(t),null;case 13:return wm(e,t,n);case 4:return oc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Zf(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,V(ca,r._currentValue),r._currentValue=a,o!==null)if(Xe(o.value,a)){if(o.children===i.children&&!Te.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),jl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=$e(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=Ge(r,t.pendingProps),i=Ge(r.type,i),ed(e,t,r,i,n);case 15:return mm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Mo(e,t),t.tag=1,Ne(r)?(e=!0,sa(t)):e=!1,ar(t,n),Wp(t,r,i),$l(t,r,i,n),Vl(null,t,r,!0,e,n);case 19:return Sm(e,t,n);case 22:return gm(e,t,n)}throw Error(E(156,t.tag))};function Mm(e,t){return lp(e,t)}function a1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new a1(e,t,n,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zu)return 11;if(e===ju)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Sc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Bn:return kn(n.children,i,o,t);case Fu:a=8,i|=8;break;case dl:return e=je(12,n,t,i|2),e.elementType=dl,e.lanes=o,e;case hl:return e=je(13,n,t,i),e.elementType=hl,e.lanes=o,e;case pl:return e=je(19,n,t,i),e.elementType=pl,e.lanes=o,e;case Vh:return Va(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hh:a=10;break e;case Wh:a=9;break e;case zu:a=11;break e;case ju:a=14;break e;case Dt:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=je(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Va(e,t,n,r){return e=je(22,e,r,t),e.elementType=Vh,e.lanes=n,e.stateNode={isHidden:!1},e}function zs(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ss(0),this.expirationTimes=Ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(e,t,n,r,i,o,a,s,l){return e=new l1(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(o),e}function u1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Um(e){if(!e)return tn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Mp(e,n,t)}return t}function Fm(e,t,n,r,i,o,a,s,l){return e=_c(n,r,!0,e,i,o,a,s,l),e.context=Um(null),n=e.current,r=Ee(),i=qt(n),o=yt(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,Di(e,i,r),Pe(e,r),e}function Ga(e,t,n,r){var i=t.current,o=Ee(),a=qt(i);return n=Um(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,a),e!==null&&(Je(e,i,a,o),Ao(e,i,a)),a}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ec(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function c1(){return null}var zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function kc(e){this._internalRoot=e}Ka.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ga(e,t,null,null)};Ka.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Ga(null,e,null,null)}),t[_t]=null}};function Ka(e){this._internalRoot=e}Ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=mp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&vp(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hd(){}function f1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Sa(a);o.call(u)}}var a=Fm(t,r,e,0,null,!1,!1,"",hd);return e._reactRootContainer=a,e[_t]=a.current,pi(e.nodeType===8?e.parentNode:e),Pn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Sa(l);s.call(u)}}var l=_c(e,0,!1,null,null,!1,!1,"",hd);return e._reactRootContainer=l,e[_t]=l.current,pi(e.nodeType===8?e.parentNode:e),Pn(function(){Ga(t,l,n,r)}),l}function Qa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Sa(a);s.call(l)}}Ga(t,a,e,i)}else a=f1(n,t,e,i,r);return Sa(a)}hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(Hu(t,n|1),Pe(t,re()),!($&6)&&(wr=re()+500,un()))}break;case 13:Pn(function(){var r=Et(e,1);if(r!==null){var i=Ee();Je(r,e,1,i)}}),Ec(e,1)}};Wu=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ee();Je(t,e,134217728,n)}Ec(e,134217728)}};pp=function(e){if(e.tag===13){var t=qt(e),n=Et(e,t);if(n!==null){var r=Ee();Je(n,e,t,r)}Ec(e,t)}};mp=function(){return H};gp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};xl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=za(r);if(!i)throw Error(E(90));Kh(r),vl(r,i)}}}break;case"textarea":Qh(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};np=vc;rp=Pn;var d1={usingClientEntryPoint:!1,Events:[Ui,Vn,za,ep,tp,vc]},jr={findFiberByHostInstance:gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h1={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ap(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Da=go.inject(h1),it=go}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(E(200));return u1(e,t,null,n)};De.createRoot=function(e,t){if(!xc(e))throw Error(E(299));var n=!1,r="",i=zm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_c(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,pi(e.nodeType===8?e.parentNode:e),new kc(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ap(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Pn(e)};De.hydrate=function(e,t,n){if(!Ya(t))throw Error(E(200));return Qa(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!xc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fm(t,null,e,1,n??null,i,!1,o,a),e[_t]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ka(t)};De.render=function(e,t,n){if(!Ya(t))throw Error(E(200));return Qa(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(E(40));return e._reactRootContainer?(Pn(function(){Qa(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};De.unstable_batchedUpdates=vc;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ya(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Qa(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=De})(cy);var pd=ul;ll.createRoot=pd.createRoot,ll.hydrateRoot=pd.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const md="popstate";function p1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return ru("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jm(i)}return g1(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function m1(){return Math.random().toString(36).substr(2,8)}function gd(e,t){return{usr:e.state,key:e.key,idx:t}}function ru(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||m1()})}function jm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=$t.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(ki({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=$t.Pop;let x=c(),p=x==null?null:x-u;u=x,l&&l({action:s,location:y.location,delta:p})}function h(x,p){s=$t.Push;let d=ru(y.location,x,p);n&&n(d,x),u=c()+1;let m=gd(d,u),w=y.createHref(d);try{a.pushState(m,"",w)}catch{i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function g(x,p){s=$t.Replace;let d=ru(y.location,x,p);n&&n(d,x),u=c();let m=gd(d,u),w=y.createHref(d);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function v(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:jm(x);return se(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return s},get location(){return e(i,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(md,f),l=x,()=>{i.removeEventListener(md,f),l=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(x){return a.go(x)}};return y}var vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vd||(vd={}));function v1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cr(t):t,i=Hm(r.pathname||"/",n);if(i==null)return null;let o=Bm(e);y1(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=C1(o[s],P1(i));return a}function Bm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=xn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:b1(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of $m(o.path))i(o,a,l)}),t}function $m(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=$m(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function y1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w1=/^:\w+$/,S1=3,_1=2,E1=1,k1=10,x1=-2,yd=e=>e==="*";function b1(e,t){let n=e.split("/"),r=n.length;return n.some(yd)&&(r+=x1),t&&(r+=_1),n.filter(i=>!yd(i)).reduce((i,o)=>i+(w1.test(o)?S1:o===""?E1:k1),r)}function I1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function C1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=T1({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:xn([i,c.pathname]),pathnameBase:M1(xn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=xn([i,c.pathnameBase]))}return o}function T1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=O1(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function N1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function P1(e){try{return decodeURI(e)}catch(t){return bc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function O1(e,t){try{return decodeURIComponent(e)}catch(n){return bc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Hm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:A1(n,t):t,search:U1(r),hash:F1(i)}}function A1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=ki({},e),se(!i.pathname||!i.pathname.includes("?"),Bs("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Bs("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Bs("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=R1(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),M1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const j1=["post","put","patch","delete"];[...j1];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function B1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $1=typeof Object.is=="function"?Object.is:B1,{useState:H1,useEffect:W1,useLayoutEffect:V1,useDebugValue:G1}=sl;function K1(e,t,n){const r=t(),[{inst:i},o]=H1({inst:{value:r,getSnapshot:t}});return V1(()=>{i.value=r,i.getSnapshot=t,$s(i)&&o({inst:i})},[e,r,t]),W1(()=>($s(i)&&o({inst:i}),e(()=>{$s(i)&&o({inst:i})})),[e]),G1(r),r}function $s(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!$1(n,r)}catch{return!0}}function Y1(e,t,n){return t()}const Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q1=!Q1,J1=q1?Y1:K1;"useSyncExternalStore"in sl&&(e=>e.useSyncExternalStore)(sl);const Wm=I.createContext(null),Ic=I.createContext(null),Cc=I.createContext(null),qa=I.createContext(null),zi=I.createContext({outlet:null,matches:[]}),Vm=I.createContext(null);function ji(){return I.useContext(qa)!=null}function Gm(){return ji()||se(!1),I.useContext(qa).location}function Ja(){ji()||se(!1);let{basename:e,navigator:t}=I.useContext(Cc),{matches:n}=I.useContext(zi),{pathname:r}=Gm(),i=JSON.stringify(L1(n).map(s=>s.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=D1(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:xn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function X1(e,t){ji()||se(!1);let{navigator:n}=I.useContext(Cc),r=I.useContext(Ic),{matches:i}=I.useContext(zi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Gm(),u;if(t){var c;let y=typeof t=="string"?Cr(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||se(!1),u=y}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",g=v1(e,{pathname:h}),v=nw(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:xn([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:xn([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&v?I.createElement(qa.Provider,{value:{location:iu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$t.Pop}},v):v}function Z1(){let e=aw(),t=z1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}class ew extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(zi.Provider,{value:this.props.routeContext},I.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Wm);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(zi.Provider,{value:t},r)}function nw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||se(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||I.createElement(Z1,null):null,c=t.concat(r.slice(0,s+1)),f=()=>I.createElement(tw,{match:a,routeContext:{outlet:o,matches:c}},l?u:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||s===0)?I.createElement(ew,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var wd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(wd||(wd={}));var _a;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(_a||(_a={}));function rw(e){let t=I.useContext(Ic);return t||se(!1),t}function iw(e){let t=I.useContext(zi);return t||se(!1),t}function ow(e){let t=iw(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function aw(){var e;let t=I.useContext(Vm),n=rw(_a.UseRouteError),r=ow(_a.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function sw(e){let{to:t,replace:n,state:r,relative:i}=e;ji()||se(!1);let o=I.useContext(Ic),a=Ja();return I.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function jo(e){se(!1)}function lw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:a=!1}=e;ji()&&se(!1);let s=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Cr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=I.useMemo(()=>{let y=Hm(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:g}},[s,u,c,f,h,g]);return v==null?null:I.createElement(Cc.Provider,{value:l},I.createElement(qa.Provider,{children:n,value:{location:v,navigationType:i}}))}function uw(e){let{children:t,location:n}=e,r=I.useContext(Wm),i=r&&!t?r.router.routes:ou(t);return X1(i,n)}var Sd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Sd||(Sd={}));new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,ou(r.props.children,t));return}r.type!==jo&&se(!1),!r.props.index||!r.props.children||se(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=ou(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cw(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=p1({window:r,v5Compat:!0}));let o=i.current,[a,s]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(s),[o]),I.createElement(lw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}var _d;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(_d||(_d={}));var Ed;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ed||(Ed={}));const Km=()=>A("div",{className:" w-full p-5 flex justify-between md:px-10",children:[_("p",{className:"text-sm text-input",children:"Mariano Conchillo"}),_("p",{className:"text-sm text-input",children:"devchallenges.io"})]});function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ea(e){return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function fw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dw(e,t,n){return t&&xd(e.prototype,t),n&&xd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tc(e,t){return pw(e)||gw(e,t)||Ym(e,t)||yw()}function Bi(e){return hw(e)||mw(e)||Ym(e)||vw()}function hw(e){if(Array.isArray(e))return au(e)}function pw(e){if(Array.isArray(e))return e}function mw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function Ym(e,t){if(e){if(typeof e=="string")return au(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return au(e,t)}}function au(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bd=function(){},Nc={},Qm={},qm=null,Jm={mark:bd,measure:bd};try{typeof window<"u"&&(Nc=window),typeof document<"u"&&(Qm=document),typeof MutationObserver<"u"&&(qm=MutationObserver),typeof performance<"u"&&(Jm=performance)}catch{}var ww=Nc.navigator||{},Id=ww.userAgent,Cd=Id===void 0?"":Id,nn=Nc,Q=Qm,Td=qm,vo=Jm;nn.document;var Nt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Xm=~Cd.indexOf("MSIE")||~Cd.indexOf("Trident/"),yo,wo,So,_o,Eo,xt="___FONT_AWESOME___",su=16,Zm="fa",eg="svg-inline--fa",On="data-fa-i2svg",lu="data-fa-pseudo-element",Sw="data-fa-pseudo-element-pending",Pc="data-prefix",Oc="data-icon",Nd="fontawesome-i2svg",_w="async",Ew=["HTML","HEAD","STYLE","SCRIPT"],tg=function(){try{return!0}catch{return!1}}(),K="classic",te="sharp",Rc=[K,te];function $i(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var xi=$i((yo={},le(yo,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(yo,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),yo)),bi=$i((wo={},le(wo,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(wo,te,{solid:"fass",regular:"fasr"}),wo)),Ii=$i((So={},le(So,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(So,te,{fass:"fa-solid",fasr:"fa-regular"}),So)),kw=$i((_o={},le(_o,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(_o,te,{"fa-solid":"fass","fa-regular":"fasr"}),_o)),xw=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,ng="fa-layers-text",bw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Iw=$i((Eo={},le(Eo,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Eo,te,{900:"fass",400:"fasr"}),Eo)),rg=[1,2,3,4,5,6,7,8,9,10],Cw=rg.concat([11,12,13,14,15,16,17,18,19,20]),Tw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ci=new Set;Object.keys(bi[K]).map(Ci.add.bind(Ci));Object.keys(bi[te]).map(Ci.add.bind(Ci));var Nw=[].concat(Rc,Bi(Ci),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wn.GROUP,wn.SWAP_OPACITY,wn.PRIMARY,wn.SECONDARY]).concat(rg.map(function(e){return"".concat(e,"x")})).concat(Cw.map(function(e){return"w-".concat(e)})),ni=nn.FontAwesomeConfig||{};function Pw(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ow(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Rw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rw.forEach(function(e){var t=Tc(e,2),n=t[0],r=t[1],i=Ow(Pw(n));i!=null&&(ni[r]=i)})}var ig={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zm,replacementClass:eg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ni.familyPrefix&&(ni.cssPrefix=ni.familyPrefix);var Sr=T(T({},ig),ni);Sr.autoReplaceSvg||(Sr.observeMutations=!1);var O={};Object.keys(ig).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){Sr[e]=n,ri.forEach(function(r){return r(O)})},get:function(){return Sr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){Sr.cssPrefix=t,ri.forEach(function(n){return n(O)})},get:function(){return Sr.cssPrefix}});nn.FontAwesomeConfig=O;var ri=[];function Aw(e){return ri.push(e),function(){ri.splice(ri.indexOf(e),1)}}var Rt=su,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lw(e){if(!(!e||!Nt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var Dw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ti(){for(var e=12,t="";e-- >0;)t+=Dw[Math.random()*62|0];return t}function Tr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ac(e){return e.classList?Tr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function og(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mw(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(og(e[n]),'" ')},"").trim()}function Xa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Lc(e){return e.size!==nt.size||e.x!==nt.x||e.y!==nt.y||e.rotate!==nt.rotate||e.flipX||e.flipY}function Uw(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Fw(e){var t=e.transform,n=e.width,r=n===void 0?su:n,i=e.height,o=i===void 0?su:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&Xm?l+="translate(".concat(t.x/Rt-r/2,"em, ").concat(t.y/Rt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Rt,"em), calc(-50% + ").concat(t.y/Rt,"em)) "):l+="translate(".concat(t.x/Rt,"em, ").concat(t.y/Rt,"em) "),l+="scale(".concat(t.size/Rt*(t.flipX?-1:1),", ").concat(t.size/Rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ag(){var e=Zm,t=eg,n=O.cssPrefix,r=O.replacementClass,i=zw;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Pd=!1;function Hs(){O.autoAddCss&&!Pd&&(Lw(ag()),Pd=!0)}var jw={mixout:function(){return{dom:{css:ag,insertCss:Hs}}},hooks:function(){return{beforeDOMElementCreation:function(){Hs()},beforeI2svg:function(){Hs()}}}},bt=nn||{};bt[xt]||(bt[xt]={});bt[xt].styles||(bt[xt].styles={});bt[xt].hooks||(bt[xt].hooks={});bt[xt].shims||(bt[xt].shims=[]);var Qe=bt[xt],sg=[],Bw=function e(){Q.removeEventListener("DOMContentLoaded",e),ka=1,sg.map(function(t){return t()})},ka=!1;Nt&&(ka=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),ka||Q.addEventListener("DOMContentLoaded",Bw));function $w(e){Nt&&(ka?setTimeout(e,0):sg.push(e))}function Hi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?og(e):"<".concat(t," ").concat(Mw(r),">").concat(o.map(Hi).join(""),"</").concat(t,">")}function Od(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hw=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Ws=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?Hw(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function Ww(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function uu(e){var t=Ww(e);return t.length===1?t[0].toString(16):null}function Vw(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function cu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Rd(t);typeof Qe.hooks.addPack=="function"&&!i?Qe.hooks.addPack(e,Rd(t)):Qe.styles[e]=T(T({},Qe.styles[e]||{}),o),e==="fas"&&cu("fa",t)}var ko,xo,bo,Xn=Qe.styles,Gw=Qe.shims,Kw=(ko={},le(ko,K,Object.values(Ii[K])),le(ko,te,Object.values(Ii[te])),ko),Dc=null,lg={},ug={},cg={},fg={},dg={},Yw=(xo={},le(xo,K,Object.keys(xi[K])),le(xo,te,Object.keys(xi[te])),xo);function Qw(e){return~Nw.indexOf(e)}function qw(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Qw(i)?i:null}var hg=function(){var t=function(o){return Ws(Xn,function(a,s,l){return a[l]=Ws(s,o,{}),a},{})};lg=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),ug=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),dg=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Xn||O.autoFetchSvg,r=Ws(Gw,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});cg=r.names,fg=r.unicodes,Dc=Za(O.styleDefault,{family:O.familyDefault})};Aw(function(e){Dc=Za(e.styleDefault,{family:O.familyDefault})});hg();function Mc(e,t){return(lg[e]||{})[t]}function Jw(e,t){return(ug[e]||{})[t]}function Sn(e,t){return(dg[e]||{})[t]}function pg(e){return cg[e]||{prefix:null,iconName:null}}function Xw(e){var t=fg[e],n=Mc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rn(){return Dc}var Uc=function(){return{prefix:null,iconName:null,rest:[]}};function Za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=xi[r][e],o=bi[r][e]||bi[r][i],a=e in Qe.styles?e:null;return o||a||null}var Ad=(bo={},le(bo,K,Object.keys(Ii[K])),le(bo,te,Object.keys(Ii[te])),bo);function es(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},le(t,K,"".concat(O.cssPrefix,"-").concat(K)),le(t,te,"".concat(O.cssPrefix,"-").concat(te)),t),a=null,s=K;(e.includes(o[K])||e.some(function(u){return Ad[K].includes(u)}))&&(s=K),(e.includes(o[te])||e.some(function(u){return Ad[te].includes(u)}))&&(s=te);var l=e.reduce(function(u,c){var f=qw(O.cssPrefix,c);if(Xn[c]?(c=Kw[s].includes(c)?kw[s][c]:c,a=c,u.prefix=c):Yw[s].indexOf(c)>-1?(a=c,u.prefix=Za(c,{family:s})):f?u.iconName=f:c!==O.replacementClass&&c!==o[K]&&c!==o[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=a==="fa"?pg(u.iconName):{},g=Sn(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Xn.far&&Xn.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Uc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(Xn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=Sn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=rn()||"fas"),l}var Zw=function(){function e(){fw(this,e),this.definitions={}}return dw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),a[s]),cu(s,a[s]);var l=Ii[K][s];l&&cu(l,a[s]),hg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Ld=[],Zn={},lr={},eS=Object.keys(lr);function tS(e,t){var n=t.mixoutsTo;return Ld=e,Zn={},Object.keys(lr).forEach(function(r){eS.indexOf(r)===-1&&delete lr[r]}),Ld.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ea(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Zn[a]||(Zn[a]=[]),Zn[a].push(o[a])})}r.provides&&r.provides(lr)}),n}function fu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Zn[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Zn[e]||[];i.forEach(function(o){o.apply(null,n)})}function It(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return lr[e]?lr[e].apply(null,t):void 0}function du(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rn();if(t)return t=Sn(n,t)||t,Od(mg.definitions,n,t)||Od(Qe.styles,n,t)}var mg=new Zw,nS=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Rn("noAuto")},rS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nt?(Rn("beforeI2svg",t),It("pseudoElements2svg",t),It("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,$w(function(){oS({autoReplaceSvgRoot:n}),Rn("watch",t)})}},iS={icon:function(t){if(t===null)return null;if(Ea(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Sn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Za(t[0]);return{prefix:r,iconName:Sn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(xw))){var i=es(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||rn(),iconName:Sn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=rn();return{prefix:o,iconName:Sn(o,t)||t}}}},Ue={noAuto:nS,config:O,dom:rS,parse:iS,library:mg,findIconDefinition:du,toHtml:Hi},oS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Qe.styles).length>0||O.autoFetchSvg)&&Nt&&O.autoReplaceSvg&&Ue.dom.i2svg({node:r})};function ts(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Hi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Nt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function aS(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Lc(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Xa(T(T({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function sS(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:a}),children:r}]}]}function Fc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,y=v.width,x=v.height,p=i==="fak",d=[O.replacementClass,o?"".concat(O.cssPrefix,"-").concat(o):""].filter(function(j){return f.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(f.classes).join(" "),m={children:[],attributes:T(T({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(x)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/x*16*.0625,"em")}:{};g&&(m.attributes[On]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ti())},children:[l]}),delete m.attributes.title);var k=T(T({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:T(T({},w),f.styles)}),b=r.found&&n.found?It("generateAbstractMask",k)||{children:[],attributes:{}}:It("generateAbstractIcon",k)||{children:[],attributes:{}},C=b.children,R=b.attributes;return k.children=C,k.attributes=R,s?sS(k):aS(k)}function Dd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=T(T(T({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[On]="");var c=T({},a.styles);Lc(i)&&(c.transform=Fw({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Xa(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function lS(e){var t=e.content,n=e.title,r=e.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Xa(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Vs=Qe.styles;function hu(e){var t=e[0],n=e[1],r=e.slice(4),i=Tc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(wn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(wn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var uS={found:!1,width:512,height:512};function cS(e,t){!tg&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pu(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=rn()),new Promise(function(r,i){if(It("missingIconAbstract"),n==="fa"){var o=pg(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Vs[t]&&Vs[t][e]){var a=Vs[t][e];return r(hu(a))}cS(e,t),r(T(T({},uS),{},{icon:O.showMissingIcons&&e?It("missingIconAbstract")||{}:{}}))})}var Md=function(){},mu=O.measurePerformance&&vo&&vo.mark&&vo.measure?vo:{mark:Md,measure:Md},Gr='FA "6.3.0"',fS=function(t){return mu.mark("".concat(Gr," ").concat(t," begins")),function(){return gg(t)}},gg=function(t){mu.mark("".concat(Gr," ").concat(t," ends")),mu.measure("".concat(Gr," ").concat(t),"".concat(Gr," ").concat(t," begins"),"".concat(Gr," ").concat(t," ends"))},zc={begin:fS,end:gg},Bo=function(){};function Ud(e){var t=e.getAttribute?e.getAttribute(On):null;return typeof t=="string"}function dS(e){var t=e.getAttribute?e.getAttribute(Pc):null,n=e.getAttribute?e.getAttribute(Oc):null;return t&&n}function hS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function pS(){if(O.autoReplaceSvg===!0)return $o.replace;var e=$o[O.autoReplaceSvg];return e||$o.replace}function mS(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function gS(e){return Q.createElement(e)}function vg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mS:gS:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(vg(a,{ceFn:r}))}),i}function vS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $o={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(vg(i),n)}),n.getAttribute(On)===null&&O.keepOriginalSource){var r=Q.createComment(vS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ac(n).indexOf(O.replacementClass))return $o.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return Hi(s)}).join(`
`);n.setAttribute(On,""),n.innerHTML=a}};function Fd(e){e()}function yg(e,t){var n=typeof t=="function"?t:Bo;if(e.length===0)n();else{var r=Fd;O.mutateApproach===_w&&(r=nn.requestAnimationFrame||Fd),r(function(){var i=pS(),o=zc.begin("mutate");e.map(i),o(),n()})}}var jc=!1;function wg(){jc=!0}function gu(){jc=!1}var xa=null;function zd(e){if(Td&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Bo:t,r=e.nodeCallback,i=r===void 0?Bo:r,o=e.pseudoElementsCallback,a=o===void 0?Bo:o,s=e.observeMutationsRoot,l=s===void 0?Q:s;xa=new Td(function(u){if(!jc){var c=rn();Tr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ud(f.addedNodes[0])&&(O.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Ud(f.target)&&~Tw.indexOf(f.attributeName))if(f.attributeName==="class"&&dS(f.target)){var h=es(Ac(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Pc,g||c),v&&f.target.setAttribute(Oc,v)}else hS(f.target)&&i(f.target)})}}),Nt&&xa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yS(){xa&&xa.disconnect()}function wS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function SS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=es(Ac(e));return i.prefix||(i.prefix=rn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Jw(i.prefix,e.innerText)||Mc(i.prefix,uu(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function _S(e){var t=Tr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Ti()):(t["aria-hidden"]="true",t.focusable="false")),t}function ES(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=SS(e),r=n.iconName,i=n.prefix,o=n.rest,a=_S(e),s=fu("parseNodeAttributes",{},e),l=t.styleParser?wS(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var kS=Qe.styles;function Sg(e){var t=O.autoReplaceSvg==="nest"?jd(e,{styleParser:!1}):jd(e);return~t.extra.classes.indexOf(ng)?It("generateLayersText",e,t):It("generateSvgReplacementMutation",e,t)}var on=new Set;Rc.map(function(e){on.add("fa-".concat(e))});Object.keys(xi[K]).map(on.add.bind(on));Object.keys(xi[te]).map(on.add.bind(on));on=Bi(on);function Bd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(Nd,"-").concat(f))},i=function(f){return n.remove("".concat(Nd,"-").concat(f))},o=O.autoFetchSvg?on:Rc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(kS));o.includes("fa")||o.push("fa");var a=[".".concat(ng,":not([").concat(On,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(On,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Tr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zc.begin("onTree"),u=s.reduce(function(c,f){try{var h=Sg(f);h&&c.push(h)}catch(g){tg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){yg(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function xS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sg(e).then(function(n){n&&yg([n],t)})}function bS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:du(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:du(i||{})),e(r,T(T({},n),{},{mask:i}))}}var IS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nt:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,y=n.classes,x=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var k=t.prefix,b=t.iconName,C=t.icon;return ts(T({type:"icon"},t),function(){return Rn("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?d["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||Ti()):(d["aria-hidden"]="true",d.focusable="false")),Fc({icons:{main:hu(C),mask:l?hu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:T(T({},nt),i),symbol:a,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:w,classes:x}})})}},CS={mixout:function(){return{icon:bS(IS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bd,n.nodeCallback=xS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,a=o===void 0?function(){}:o;return Bd(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([pu(i,s),c.iconName?pu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var x=Tc(y,2),p=x[0],d=x[1];g([n,Fc({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=Xa(s);l.length>0&&(i.style=l);var u;return Lc(a)&&(u=It("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},TS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ts({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Bi(o)).join(" ")},children:a}]})}}}},NS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ts({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),lS({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Bi(s))}})})}}}},PS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?nt:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return ts({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),Dd({content:n,transform:T(T({},nt),o),title:s,extra:{attributes:f,styles:g,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Bi(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(Xm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Dd({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},OS=new RegExp('"',"ug"),$d=[1105920,1112319];function RS(e){var t=e.replace(OS,""),n=Vw(t,0),r=n>=$d[0]&&n<=$d[1],i=t.length===2?t[0]===t[1]:!1;return{value:uu(i?t[0]:t),isSecondary:r||i}}function Hd(e,t){var n="".concat(Sw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Tr(e.children),a=o.filter(function(C){return C.getAttribute(lu)===t})[0],s=nn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(bw),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:K,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bi[h][l[2].toLowerCase()]:Iw[h][u],v=RS(f),y=v.value,x=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Mc(g,y),m=d;if(p){var w=Xw(y);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!x&&(!a||a.getAttribute(Pc)!==g||a.getAttribute(Oc)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var k=ES(),b=k.extra;b.attributes[lu]=t,pu(d,g).then(function(C){var R=Fc(T(T({},k),{},{icons:{main:C,mask:Uc()},prefix:g,iconName:m,extra:b,watchable:!0})),j=Q.createElement("svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=R.map(function(M){return Hi(M)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function AS(e){return Promise.all([Hd(e,"::before"),Hd(e,"::after")])}function LS(e){return e.parentNode!==document.head&&!~Ew.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wd(e){if(Nt)return new Promise(function(t,n){var r=Tr(e.querySelectorAll("*")).filter(LS).map(AS),i=zc.begin("searchPseudoElements");wg(),Promise.all(r).then(function(){i(),gu(),t()}).catch(function(){i(),gu(),n()})})}var DS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;O.searchPseudoElements&&Wd(i)}}},Vd=!1,MS={mixout:function(){return{dom:{unwatch:function(){wg(),Vd=!0}}}},hooks:function(){return{bootstrap:function(){zd(fu("mutationObserverCallbacks",{}))},noAuto:function(){yS()},watch:function(n){var r=n.observeMutationsRoot;Vd?gu():zd(fu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},US={mixout:function(){return{parse:{transform:function(n){return Gd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(a/2*-1," -256)")},g={outer:s,inner:f,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Gs={x:0,y:0,width:"100%",height:"100%"};function Kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function FS(e){return e.tag==="g"?e.children:[e]}var zS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?es(i.split(" ").map(function(a){return a.trim()})):Uc();return o.prefix||(o.prefix=rn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,h=a.icon,g=Uw({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:T(T({},Gs),{},{fill:"white"})},y=c.children?{children:c.children.map(Kd)}:{},x={tag:"g",attributes:T({},g.inner),children:[Kd(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},y))]},p={tag:"g",attributes:T({},g.outer),children:[x]},d="mask-".concat(s||Ti()),m="clip-".concat(s||Ti()),w={tag:"mask",attributes:T(T({},Gs),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:FS(h)},w]};return r.push(k,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Gs)}),{children:r,attributes:i}}}},jS={provides:function(t){var n=!1;nn.matchMedia&&(n=nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=T(T({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},BS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},$S=[jw,CS,TS,NS,PS,DS,MS,US,zS,jS,BS];tS($S,{mixoutsTo:Ue});Ue.noAuto;Ue.config;Ue.library;Ue.dom;var vu=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var HS=Ue.icon;Ue.layer;Ue.text;Ue.counter;var U={},WS={get exports(){return U},set exports(e){U=e}},VS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GS=VS,KS=GS;function _g(){}function Eg(){}Eg.resetWarningCache=_g;var YS=function(){function e(r,i,o,a,s,l){if(l!==KS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Eg,resetWarningCache:_g};return n.PropTypes=n,n};WS.exports=YS();function Yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yd(Object(n),!0).forEach(function(r){er(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ba(e){return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}function er(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qS(e,t){if(e==null)return{};var n=QS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yu(e){return JS(e)||XS(e)||ZS(e)||e_()}function JS(e){if(Array.isArray(e))return wu(e)}function XS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ZS(e,t){if(e){if(typeof e=="string")return wu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wu(e,t)}}function wu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function e_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,x=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},er(t,"fa-".concat(p),typeof p<"u"&&p!==null),er(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),er(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),er(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function n_(e){return e=e-0,e===e}function kg(e){return n_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var r_=["style"];function i_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=kg(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[i_(i)]=o:t[i]=o,t},{})}function xg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return xg(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=o_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[kg(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=qS(n,r_);return i.attrs.style=Ht(Ht({},i.attrs.style),a),e.apply(void 0,[t.tag,Ht(Ht({},i.attrs),s)].concat(yu(r)))}var bg=!1;try{bg=!0}catch{}function a_(){if(!bg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qd(e){if(e&&ba(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vu.icon)return vu.icon(e);if(e===null)return null;if(e&&ba(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ks(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?er({},e,t):{}}var Ie=dr.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=Qd(n),c=Ks("classes",[].concat(yu(t_(e)),yu(o.split(" ")))),f=Ks("transform",typeof e.transform=="string"?vu.transform(e.transform):e.transform),h=Ks("mask",Qd(r)),g=HS(u,Ht(Ht(Ht(Ht({},c),f),h),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!g)return a_("Could not find icon",u),null;var v=g.abstract,y={ref:t};return Object.keys(e).forEach(function(x){Ie.defaultProps.hasOwnProperty(x)||(y[x]=e[x])}),s_(v[0],y)});Ie.displayName="FontAwesomeIcon";Ie.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};Ie.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var s_=xg.bind(null,dr.createElement),l_={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},u_={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},c_={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Ig={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},f_={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},d_={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},h_={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},p_={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},m_={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},g_={prefix:"fas",iconName:"angle-left",icon:[256,512,[8249],"f104","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Cg=e=>{const[t,n]=I.useState(e);return{state:t,initState:t,onChange:(i,o)=>{n({...t,[o]:i})}}};function Ia(e){return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia(e)}function Io(e,t,n,r){if(Ia(n)!==r)throw new TypeError("Invalid prop '".concat(t,"' of type '").concat(Ia(n),"' supplied to '").concat(e,"', expected '").concat(r,"'."))}function v_(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var y_="Ring-module_container__1mCd7";function w_(e){var t=e.size,n=t===void 0?40:t,r=e.color,i=r===void 0?"black":r,o=e.lineWeight,a=o===void 0?5:o,s=e.speed,l=s===void 0?2:s;return Io("Ring","size",n,"number"),Io("Ring","color",i,"string"),Io("Ring","lineWeight",a,"number"),Io("Ring","speed",l,"number"),dr.createElement("svg",{height:n,width:n,className:y_,viewBox:"25 25 50 50",style:{"--uib-size":n+"px","--uib-color":i,"--uib-speed":l+"s"}},dr.createElement("circle",{cx:"50",cy:"50",r:"20",strokeWidth:a}))}v_(".Ring-module_container__1mCd7{animation:Ring-module_rotate__RBwLl var(--uib-speed) linear infinite;height:var(--uib-size);transform-origin:center;vertical-align:middle;width:var(--uib-size);will-change:transform}.Ring-module_container__1mCd7 circle{fill:none;stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:Ring-module_stretch__L-1Qd calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}@keyframes Ring-module_rotate__RBwLl{to{transform:rotate(1turn)}}@keyframes Ring-module_stretch__L-1Qd{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-124px}}");const Tg=()=>_("div",{className:"flex justify-center my-5",children:_(w_,{size:40,lineWeight:5,speed:2,color:"#2F80ED"})}),Un=I.createContext({}),S_=({loginForm:e})=>{const{state:t,onChange:n}=Cg({email:"",password:""}),{login:r,register:i,userState:o}=I.useContext(Un),[a,s]=I.useState(!0),l=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return A("form",{className:"flex flex-col space-y-6 w-full",children:[A("div",{className:"flex flex-col space-y-3",children:[A("div",{className:"w-full flex items-center py-3 border rounded-lg px-5 space-x-3",children:[_(Ie,{icon:d_,size:"lg",className:"text-input"}),_("input",{placeholder:"Email",className:"w-full bg-transparent focus:outline-none",type:"email",onChange:c=>n(c.target.value,"email")})]}),A("div",{className:"w-full flex items-center py-3 border rounded-lg px-5 space-x-3",children:[_(Ie,{icon:u_,size:"lg",className:"text-input"}),_("input",{placeholder:"Password",className:"w-full bg-transparent focus:outline-none",type:"password",onChange:c=>n(c.target.value,"password")})]})]}),_("button",{className:"rounded-lg py-1.5 bg-blueButton text-white font-bold",onClick:c=>{c.preventDefault(),l.test(t.email)?(s(!0),e?r(t.email,t.password):i(t.email,t.password)):s(!1)},disabled:t.email===""||t.password==="",children:e?"Login":"Start coding now"}),o.isLoading&&_(Tg,{}),o.error&&a&&_("p",{className:"text-sm mt-5 text-red-500 text-center",children:o.error}),!a&&_("p",{className:"text-sm text-red-500 text-center",children:"Please enter a valid email address"})]})},Ng=()=>{const{userState:{user:e},logout:t}=I.useContext(Un),[n,r]=I.useState(!1),i=Ja(),o=()=>{t(),i("/login")};return A("div",{className:"w-full pt-5 px-5 flex justify-between md:px-10",children:[_("img",{className:"inline ",src:"/images/devchallenges.svg",alt:"DevChallenges logo"}),e&&A("div",{className:"relative w-full flex justify-end space-y-14",children:[A("div",{className:"flex items-center space-x-3",children:[e!=null&&e.pictureUrl?_("img",{className:"h-9 w-9 rounded md:pointer-events-none",src:e.pictureUrl,onClick:()=>r(!n)}):_("div",{className:"border px-3 py-2 rounded-lg",children:_(Ie,{icon:Ig,size:"lg",className:"text-input"})}),A("div",{className:"hidden md:flex items-center space-x-5",children:[_("h4",{className:"text-sm font-semibold opacity-90",children:e==null?void 0:e.name}),_(Ie,{onClick:()=>r(!n),icon:n?f_:p_,color:"#333333",cursor:"pointer"})]})]}),n&&A("div",{className:"block right-0 py-1 shadow absolute mt-3 border rounded-lg divide-y divide-gray-100 bg-white",children:[A("ul",{className:"text-sm text-gray-700",children:[A("li",{className:"px-4 py-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5",children:[_(Ie,{icon:m_,size:"lg"}),_("p",{children:"My Profile"})]}),A("li",{className:"px-4 py-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5",children:[_(Ie,{icon:c_}),_("p",{children:"Group Chat"})]})]}),_("div",{className:"text-sm text-red-500",children:A("button",{className:"px-4 py-2 w-full rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5",onClick:o,children:[_(Ie,{icon:l_,size:"lg"}),_("p",{children:"Logout"})]})})]})]})]})},__=()=>{const e=Ja(),{userState:{user:t},loginWithGoogle:n,loginWithFacebook:r,loginWithGithub:i}=I.useContext(Un);I.useEffect(()=>{t&&e("/profile")},[t,e]);const[o,a]=I.useState(!0);return _("div",{className:"md:p-5",children:A("div",{className:"container min-h-fit mx-auto md:flex-none md:border md:rounded-lg md:w-2/3 lg:w-2/5",children:[_(Ng,{}),_("div",{className:"mb-5 md:mb-0",children:A("div",{className:"container px-5 w-full flex flex-col items-center",children:[_("div",{className:"my-7 w-full",children:o?_("h3",{className:"self-start font-semibold text-font text-lg leading-6",children:"Login"}):A(tr,{children:[_("h3",{className:"font-semibold text-font text-lg leading-6 mb-3.5",children:"Join thousands of learners from around the world"}),_("p",{className:"text-font leading-6",children:"Master web development by making real-life projects. There are multiple paths for you to choose"})]})}),_(S_,{loginForm:o}),A("div",{className:"mt-10 flex flex-col space-y-5",children:[_("p",{className:"text-sm text-input",children:"or continue with these social profile"}),A("div",{className:"flex justify-between",children:[_("img",{src:"/images/Google.svg",alt:"Google SVG Image",className:"cursor-pointer",onClick:n}),_("img",{src:"/images/Facebook.svg",alt:"Google SVG Image",className:"cursor-pointer",onClick:r}),_("img",{src:"/images/Twitter.svg",alt:"Google SVG Image",className:"cursor-pointer"}),_("img",{src:"/images/Gihub.svg",alt:"Google SVG Image",className:"cursor-pointer",onClick:i})]}),_("button",{className:"text-sm text-input text-center",onClick:()=>a(!o),children:o?A(tr,{children:["Don't have an account yet?"," ",_("span",{className:"text-login",children:"Register"})]}):A(tr,{children:["Already a member?"," ",_("span",{className:"text-login",children:"Login"})]})})]})]})}),_(Km,{})]})})},E_=({setEdit:e})=>{var l,u,c,f;const{userState:t,updateProfile:n}=I.useContext(Un),{state:r,onChange:i}=Cg({name:((l=t.user)==null?void 0:l.name)||"",bio:((u=t.user)==null?void 0:u.bio)||"",phone:((c=t.user)==null?void 0:c.phone)||"",password:""}),o=async h=>{h.preventDefault();const{name:g,bio:v,phone:y,password:x}=r,p=new FormData;p.append("file",a),p.append("name",g),p.append("bio",v),p.append("phone",y),p.append("password",x),await n(p),s(null)},[a,s]=I.useState(null);return A(tr,{children:[A("button",{className:"px-5 mt-5 mb-10 flex items-center space-x-3 cursor-pointer md:container md:mx-auto md:px-0 lg:w-3/5",onClick:()=>e(!1),children:[_(Ie,{icon:g_,color:"#2D9CDB"}),_("p",{className:"",style:{color:"#2D9CDB"},children:"Back"})]}),A("div",{className:"px-5 space-y-5 md:container md:border md:rounded-lg md:mx-auto md:px-10 md:py-5 lg:w-3/5 ",children:[A("div",{className:"flex flex-col items-start space-y-2",children:[_("h2",{className:"font-medium text-xl text-center",children:"Change Info"}),_("h4",{className:"text-input font-medium",children:"Changes will be reflected to every services"})]}),A("form",{className:"flex flex-col space-y-5",children:[A("div",{className:"flex items-center space-x-5",children:[(f=t.user)!=null&&f.pictureUrl?_("img",{className:"h-24 w-24 rounded",src:t.user.pictureUrl}):_(Ie,{icon:h_,size:"2x",className:"text-input"}),A("label",{className:"block cursor-pointer",children:[_("span",{className:"text-input",children:"CHANGE PHOTO"}),_("input",{type:"file",className:"opacity-0 pointer-events-none absolute top-0 left-0 w-full h-full",onChange:h=>{var g;return s(((g=h.target.files)==null?void 0:g[0])||null)}})]}),a&&_("h4",{className:"text-input italic text-sm",children:a.name})]}),A("div",{children:[_("label",{className:"text-label font-medium text-sm",children:"Name"}),_("input",{placeholder:"Enter your name...",className:"mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm",type:"text",value:r.name,onChange:h=>i(h.target.value,"name")})]}),A("div",{children:[_("label",{className:"text-label font-medium text-sm",children:"Bio"}),_("textarea",{placeholder:"Enter your bio...",className:"mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm resize-none",rows:4,value:r.bio,onChange:h=>i(h.target.value,"bio")})]}),A("div",{children:[_("label",{className:"text-label font-medium text-sm",children:"Phone"}),_("input",{placeholder:"Enter your phone...",className:"mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm",type:"text",value:r.phone,onChange:h=>i(h.target.value,"phone")})]}),A("div",{children:[_("label",{className:"text-label font-medium text-sm",children:"Password"}),_("input",{placeholder:"Enter your new password...",className:"mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm",type:"password",onChange:h=>i(h.target.value,"password")})]}),_("button",{className:"rounded-lg py-2 px-10 bg-blueButton text-white font-bold self-center md:self-start",onClick:o,disabled:r.name===""&&r.bio===""&&r.phone===""&&r.password==="",children:"Save"}),t.isLoading&&_(Tg,{}),t.error&&_("p",{className:"text-sm mt-5 text-red-500 text-center",children:t.error})]})]})]})},k_=({setEdit:e})=>{const{userState:{user:t}}=I.useContext(Un);return A(tr,{children:[A("div",{className:"mt-5 mb-10 space-y-2",children:[_("h2",{className:"font-medium text-2xl text-center",children:"Personal info"}),_("h3",{className:"font-extralight text-lg text-center ",children:"Basic info, like your name and photo"})]}),A("div",{className:"w-full px-5 flex flex-col divide-y space-y-3 lg:w-3/5 md:container md:border md:rounded-lg md:mx-auto md:px-10 md:pt-5",children:[A("div",{className:"flex justify-between items-center h-20",children:[A("div",{className:"flex flex-col items-start space-y-2",children:[_("h2",{className:"font-medium text-xl text-center",children:"Profile"}),_("h4",{className:"text-input font-medium text-sm md:text-base",children:"Some info may be visible to other people"})]}),_("div",{className:"flex flex-col items-end justify-center !border-t-0",children:_("button",{className:"text-font font-medium border-2 rounded-xl px-8 py-2 text-sm md:text-base",onClick:()=>e(!0),children:"Edit"})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"PHOTO"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:t!=null&&t.pictureUrl?_("img",{className:"h-16 w-16 rounded mt-1.5",src:t.pictureUrl}):_(Ie,{icon:Ig,size:"lg",className:"text-input border-2 rounded-lg px-8 py-2"})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"NAME"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:_("h4",{className:"font-medium opacity-90 text-end",children:t==null?void 0:t.name})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"BIO"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:_("h4",{className:"font-medium opacity-90",children:t==null?void 0:t.bio})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"PHONE"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:_("h4",{className:"font-medium opacity-90",children:t==null?void 0:t.phone})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"EMAIL"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:_("h4",{className:"font-medium opacity-90",children:t==null?void 0:t.email})})]}),A("div",{className:"flex justify-between items-center h-20 text-sm md:text-base",children:[_("h4",{className:"text-input font-medium opacity-60",children:"PASSWORD"}),_("div",{className:"flex flex-col items-end md:items-start justify-center",children:_("h4",{className:"font-medium opacity-90",children:"**********"})})]})]})]})},x_=()=>{const e=Ja(),[t,n]=I.useState(!1),{userState:{user:r}}=I.useContext(Un);return I.useEffect(()=>{r||e("/login")},[r,e]),A(tr,{children:[_(Ng,{}),_("div",{className:"my-10",children:t?_(E_,{setEdit:n}):_(k_,{setEdit:n})}),_(Km,{})]})};function b_(){return _(cw,{children:A(uw,{children:[_(jo,{path:"/profile",element:_(x_,{})}),_(jo,{path:"/login",element:_(__,{})}),_(jo,{path:"/",element:_(sw,{to:"/profile",replace:!0})})]})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},I_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,a||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):I_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw new C_;const h=o<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class C_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T_=function(e){const t=Pg(e);return Og.encodeByteArray(t,!0)},Rg=function(e){return T_(e).replace(/\./g,"")},Ag=function(e){try{return Og.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=()=>N_().__FIREBASE_DEFAULTS__,O_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},R_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ag(e[1]);return t&&JSON.parse(t)},Bc=()=>{try{return P_()||O_()||R_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},A_=e=>{var t,n;return(n=(t=Bc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},L_=()=>{var e;return(e=Bc())===null||e===void 0?void 0:e.config},Lg=e=>{var t;return(t=Bc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function U_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z_(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function j_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="FirebaseError";class cn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$_,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?H_(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new cn(i,s,r)}}function H_(e,t){return e.replace(W_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const W_=/\{\$([^}]+)}/g;function V_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ca(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(qd(o)&&qd(a)){if(!Ca(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G_(e,t){const n=new K_(e,t);return n.subscribe.bind(n)}class K_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ys),i.error===void 0&&(i.error=Ys),i.complete===void 0&&(i.complete=Ys);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new D_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(J_(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(e){return e===mn?void 0:e}function J_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Q_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const Z_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},eE=W.INFO,tE={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},nE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=tE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dg{constructor(t){this.name=t,this._logLevel=eE,this._logHandler=nE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Z_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const rE=(e,t)=>t.some(n=>e instanceof n);let Jd,Xd;function iE(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oE(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,Su=new WeakMap,Ug=new WeakMap,Qs=new WeakMap,$c=new WeakMap;function aE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Xt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Mg.set(n,e)}).catch(()=>{}),$c.set(t,e),t}function sE(e){if(Su.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Su.set(e,t)}let _u={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Su.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ug.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lE(e){_u=e(_u)}function uE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qs(this),t,...n);return Ug.set(r,t.sort?t.sort():[t]),Xt(r)}:oE().includes(e)?function(...t){return e.apply(qs(this),t),Xt(Mg.get(this))}:function(...t){return Xt(e.apply(qs(this),t))}}function cE(e){return typeof e=="function"?uE(e):(e instanceof IDBTransaction&&sE(e),rE(e,iE())?new Proxy(e,_u):e)}function Xt(e){if(e instanceof IDBRequest)return aE(e);if(Qs.has(e))return Qs.get(e);const t=cE(e);return t!==e&&(Qs.set(e,t),$c.set(t,e)),t}const qs=e=>$c.get(e);function fE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=Xt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Xt(a.result),l.oldVersion,l.newVersion,Xt(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const dE=["get","getKey","getAll","getAllKeys","count"],hE=["put","add","delete","clear"],Js=new Map;function Zd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Js.get(t))return Js.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=hE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dE.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Js.set(t,o),o}lE(e=>({...e,get:(t,n,r)=>Zd(t,n)||e.get(t,n,r),has:(t,n)=>!!Zd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Eu="@firebase/app",eh="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Dg("@firebase/app"),gE="@firebase/app-compat",vE="@firebase/analytics-compat",yE="@firebase/analytics",wE="@firebase/app-check-compat",SE="@firebase/app-check",_E="@firebase/auth",EE="@firebase/auth-compat",kE="@firebase/database",xE="@firebase/database-compat",bE="@firebase/functions",IE="@firebase/functions-compat",CE="@firebase/installations",TE="@firebase/installations-compat",NE="@firebase/messaging",PE="@firebase/messaging-compat",OE="@firebase/performance",RE="@firebase/performance-compat",AE="@firebase/remote-config",LE="@firebase/remote-config-compat",DE="@firebase/storage",ME="@firebase/storage-compat",UE="@firebase/firestore",FE="@firebase/firestore-compat",zE="firebase",jE="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="[DEFAULT]",BE={[Eu]:"fire-core",[gE]:"fire-core-compat",[yE]:"fire-analytics",[vE]:"fire-analytics-compat",[SE]:"fire-app-check",[wE]:"fire-app-check-compat",[_E]:"fire-auth",[EE]:"fire-auth-compat",[kE]:"fire-rtdb",[xE]:"fire-rtdb-compat",[bE]:"fire-fn",[IE]:"fire-fn-compat",[CE]:"fire-iid",[TE]:"fire-iid-compat",[NE]:"fire-fcm",[PE]:"fire-fcm-compat",[OE]:"fire-perf",[RE]:"fire-perf-compat",[AE]:"fire-rc",[LE]:"fire-rc-compat",[DE]:"fire-gcs",[ME]:"fire-gcs-compat",[UE]:"fire-fst",[FE]:"fire-fst-compat","fire-js":"fire-js",[zE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map,xu=new Map;function $E(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ni(e){const t=e.name;if(xu.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;xu.set(t,e);for(const n of Ta.values())$E(n,e);return!0}function Fg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Wi("app","Firebase",HE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=jE;function zg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ku,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=L_()),!n)throw Zt.create("no-options");const o=Ta.get(i);if(o){if(Ca(n,o.options)&&Ca(r,o.config))return o;throw Zt.create("duplicate-app",{appName:i})}const a=new X_(i);for(const l of xu.values())a.addComponent(l);const s=new WE(n,r,a);return Ta.set(i,s),s}function VE(e=ku){const t=Ta.get(e);if(!t&&e===ku)return zg();if(!t)throw Zt.create("no-app",{appName:e});return t}function ur(e,t,n){var r;let i=(r=BE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(s.join(" "));return}Ni(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebase-heartbeat-database",KE=1,Pi="firebase-heartbeat-store";let Xs=null;function jg(){return Xs||(Xs=fE(GE,KE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pi)}}}).catch(e=>{throw Zt.create("idb-open",{originalErrorMessage:e.message})})),Xs}async function YE(e){try{return(await jg()).transaction(Pi).objectStore(Pi).get(Bg(e))}catch(t){if(t instanceof cn)An.warn(t.message);else{const n=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(n.message)}}}async function th(e,t){try{const r=(await jg()).transaction(Pi,"readwrite");return await r.objectStore(Pi).put(t,Bg(e)),r.done}catch(n){if(n instanceof cn)An.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function Bg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=1024,qE=30*24*60*60*1e3;class JE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=qE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nh(),{heartbeatsToSend:n,unsentEntries:r}=XE(this._heartbeatsCache.heartbeats),i=Rg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nh(){return new Date().toISOString().substring(0,10)}function XE(e,t=QE){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),rh(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rh(e){return Rg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e){Ni(new _r("platform-logger",t=>new pE(t),"PRIVATE")),Ni(new _r("heartbeat",t=>new JE(t),"PRIVATE")),ur(Eu,eh,e),ur(Eu,eh,"esm2017"),ur("fire-js","")}ek("");function Hc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $g(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tk=$g,Hg=new Wi("auth","Firebase",$g());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Dg("@firebase/auth");function Ho(e,...t){ih.logLevel<=W.ERROR&&ih.error(`Auth (${ns}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,...t){throw Wc(e,...t)}function at(e,...t){return Wc(e,...t)}function Wg(e,t,n){const r=Object.assign(Object.assign({},tk()),{[t]:n});return new Wi("auth","Firebase",r).create(t,{appName:e.name})}function nk(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&lt(e,"argument-error"),Wg(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Hg.create(e,...t)}function L(e,t,...n){if(!e)throw Wc(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ho(t),new Error(t)}function Ct(e,t){e||gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;function vt(e){Ct(e instanceof Function,"Expected a class definition");let t=oh.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,oh.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(e,t){const n=Fg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ca(o,t??{}))return i;lt(i,"already-initialized")}return n.initialize({options:t})}function ik(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ok(){return ah()==="http:"||ah()==="https:"}function ah(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||U_()||"connection"in navigator)?navigator.onLine:!0}function sk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=M_()||F_()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new Gi(3e4,6e4);function ck(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rs(e,t,n,r,i={}){return Gg(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=Vi(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Vg.fetch()(Kg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Gg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},lk),t);try{const i=new dk(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Co(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Co(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Co(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wg(e,c,u);lt(e,c)}}catch(i){if(i instanceof cn)throw i;lt(e,"internal-error",{message:String(i)})}}async function fk(e,t,n,r,i={}){const o=await rs(e,t,n,r,i);return"mfaPendingCredential"in o&&lt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Kg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Vc(e.config,i):`${e.config.apiScheme}://${i}`}class dk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),uk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(e,t){return rs(e,"POST","/v1/accounts:delete",t)}async function pk(e,t){return rs(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mk(e,t=!1){const n=Nr(e),r=await n.getIdToken(t),i=Gc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ii(Zs(i.auth_time)),issuedAtTime:ii(Zs(i.iat)),expirationTime:ii(Zs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Zs(e){return Number(e)*1e3}function Gc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ag(n);return i?JSON.parse(i):(Ho("Failed to decode base64 JWT payload"),null)}catch(i){return Ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gk(e){const t=Gc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof cn&&vk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Oi(e,pk(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?_k(o.providerUserInfo):[],s=Sk(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Yg(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function wk(e){const t=Nr(e);await Na(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function _k(e){return e.map(t=>{var{providerId:n}=t,r=Hc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(e,t){const n=await Gg(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=Kg(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Vg.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ek(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Ri;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class bn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Hc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mk(this,t)}reload(){return wk(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Oi(this,hk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:b,stsTokenManager:C}=n;L(m&&C,t,"internal-error");const R=Ri.fromJSON(this.name,C);L(typeof m=="string",t,"internal-error"),At(f,t.name),At(h,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof k=="boolean",t,"internal-error"),At(g,t.name),At(v,t.name),At(y,t.name),At(x,t.name),At(p,t.name),At(d,t.name);const j=new bn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:R,createdAt:p,lastLoginAt:d});return b&&Array.isArray(b)&&(j.providerData=b.map(M=>Object.assign({},M))),x&&(j._redirectEventId=x),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ri;i.updateFromServerResponse(n);const o=new bn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Na(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qg.type="NONE";const sh=Qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e,t,n){return`firebase:${e}:${t}:${n}`}class cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Wo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Wo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?bn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cr(vt(sh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||vt(sh);const a=Wo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=bn._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new cr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new cr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ev(t))return"Blackberry";if(tv(t))return"Webos";if(Kc(t))return"Safari";if((t.includes("chrome/")||Jg(t))&&!t.includes("edge/"))return"Chrome";if(Zg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(e=Se()){return/firefox\//i.test(e)}function Kc(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jg(e=Se()){return/crios\//i.test(e)}function Xg(e=Se()){return/iemobile/i.test(e)}function Zg(e=Se()){return/android/i.test(e)}function ev(e=Se()){return/blackberry/i.test(e)}function tv(e=Se()){return/webos/i.test(e)}function is(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kk(e=Se()){var t;return is(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function xk(){return z_()&&document.documentMode===10}function nv(e=Se()){return is(e)||Zg(e)||tv(e)||ev(e)||/windows phone/i.test(e)||Xg(e)}function bk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(e,t=[]){let n;switch(e){case"Browser":n=lh(Se());break;case"Worker":n=`${lh(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uh(this),this.idTokenSubscription=new uh(this),this.beforeStateQueue=new Ik(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Na(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Nr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Wi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return L(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function os(e){return Nr(e)}class uh{constructor(t){this.auth=t,this.observer=null,this.addObserver=G_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Tk(e,t,n){const r=os(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=iv(t),{host:a,port:s}=Nk(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pk()}function iv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Nk(e){const t=iv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ch(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ch(a)}}}function ch(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(t){return gt("not implemented")}_linkToIdToken(t,n){return gt("not implemented")}_getReauthenticationResolver(t){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t){return fk(e,"POST","/v1/accounts:signInWithIdp",ck(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="http://localhost";class Ln extends ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Hc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ln(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fr(t,n)}buildRequest(){const t={requestUri:Ok,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Ki{constructor(){super("facebook.com")}static credential(t){return Ln._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ft.credentialFromTaggedObject(t)}static credentialFromError(t){return ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ft.credential(t.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ln._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dt.credentialFromTaggedObject(t)}static credentialFromError(t){return dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Ki{constructor(){super("github.com")}static credential(t){return Ln._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ht.credentialFromTaggedObject(t)}static credentialFromError(t){return ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ht.credential(t.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ki{constructor(){super("twitter.com")}static credential(t,n){return Ln._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await bn._fromIdTokenResponse(t,r,i),a=fh(r);return new Er({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=fh(r);return new Er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function fh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends cn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Pa(t,n,r,i)}}function av(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(e,o,t,r):o})}async function Rk(e,t,n=!1){const r=await Oi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Er._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Oi(e,av(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=Gc(o.idToken);L(a,r,"internal-error");const{sub:s}=a;return L(e.uid===s,r,"user-mismatch"),Er._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(e,t,n=!1){const r="signIn",i=await av(e,r,t),o=await Er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function Dk(e,t,n,r){return Nr(e).onIdTokenChanged(t,n,r)}function Mk(e,t,n){return Nr(e).beforeAuthStateChanged(t,n)}const Oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(){const e=Se();return Kc(e)||is(e)}const Fk=1e3,zk=10;class lv extends sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uk()&&bk(),this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);xk()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,zk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}lv.type="LOCAL";const jk=lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}uv.type="SESSION";const cv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new as(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await Bk(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=Qc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function Hk(e){st().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Wk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Gk(){return fv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",Kk=1,Ra="firebaseLocalStorage",hv="fbase_key";class Yi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(e,t){return e.transaction([Ra],t?"readwrite":"readonly").objectStore(Ra)}function Yk(){const e=indexedDB.deleteDatabase(dv);return new Yi(e).toPromise()}function Iu(){const e=indexedDB.open(dv,Kk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ra,{keyPath:hv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ra)?t(r):(r.close(),await Yk(),t(await Iu()))})})}async function dh(e,t,n){const r=ss(e,!0).put({[hv]:t,value:n});return new Yi(r).toPromise()}async function Qk(e,t){const n=ss(e,!1).get(t),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function hh(e,t){const n=ss(e,!0).delete(t);return new Yi(n).toPromise()}const qk=800,Jk=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Jk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(Gk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Wk(),!this.activeServiceWorker)return;this.sender=new $k(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Iu();return await dh(t,Oa,"1"),await hh(t,Oa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Qk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ss(i,!1).getAll();return new Yi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const Xk=pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function e2(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=at("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Zk().appendChild(r)})}function t2(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(e,t){return t?vt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends ov{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function n2(e){return Lk(e.auth,new qc(e),e.bypassAuthState)}function r2(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),Ak(n,new qc(e),e.bypassAuthState)}async function i2(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),Rk(n,new qc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return n2;case"linkViaPopup":case"linkViaRedirect":return i2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:lt(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new Gi(2e3,1e4);async function el(e,t,n){const r=os(e);nk(e,t,Yc);const i=mv(r,n);return new _n(r,"signInViaPopup",t,i).executeNotNull()}class _n extends gv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,o2.get())};t()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="pendingRedirect",Vo=new Map;class s2 extends gv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vo.get(this.auth._key());if(!t){try{const r=await l2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vo.set(this.auth._key(),t)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(e,t){const n=f2(t),r=c2(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function u2(e,t){Vo.set(e._key(),t)}function c2(e){return vt(e._redirectPersistence)}function f2(e){return Wo(a2,e.config.apiKey,e.name)}async function d2(e,t,n=!1){const r=os(e),i=mv(r,t),a=await new s2(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=10*60*1e3;class p2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!m2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=h2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(t))}saveEventToCache(t){this.cachedEventUids.add(ph(t)),this.lastProcessedEventTime=Date.now()}}function ph(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function m2(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(e,t={}){return rs(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y2=/^https?/;async function w2(e){if(e.config.emulator)return;const{authorizedDomains:t}=await g2(e);for(const n of t)try{if(S2(n))return}catch{}lt(e,"unauthorized-domain")}function S2(e){const t=bu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!y2.test(n))return!1;if(v2.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Gi(3e4,6e4);function mh(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function E2(e){return new Promise((t,n)=>{var r,i,o;function a(){mh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mh(),n(at(e,"network-request-failed"))},timeout:_2.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=st().gapi)===null||o===void 0)&&o.load)a();else{const s=t2("iframefcb");return st()[s]=()=>{gapi.load?a():n(at(e,"network-request-failed"))},e2(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Go=null,t})}let Go=null;function k2(e){return Go=Go||E2(e),Go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Gi(5e3,15e3),b2="__/auth/iframe",I2="emulator/auth/iframe",C2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N2(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vc(t,I2):`https://${e.config.authDomain}/${b2}`,r={apiKey:t.apiKey,appName:e.name,v:ns},i=T2.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function P2(e){const t=await k2(e),n=st().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:N2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C2,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=at(e,"network-request-failed"),s=st().setTimeout(()=>{o(a)},x2.get());function l(){st().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R2=500,A2=600,L2="_blank",D2="http://localhost";class gh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M2(e,t,n,r=R2,i=A2){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},O2),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Se().toLowerCase();n&&(s=Jg(u)?L2:n),qg(u)&&(t=t||D2,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(kk(u)&&s!=="_self")return U2(t||"",s),new gh(null);const f=window.open(t||"",s,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new gh(f)}function U2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2="__/auth/handler",z2="emulator/auth/handler";function vh(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ns,eventId:i};if(t instanceof Yc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",V_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof Ki){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${j2(e)}?${Vi(s).slice(1)}`}function j2({config:e}){return e.emulator?Vc(e,z2):`https://${e.authDomain}/${F2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class B2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=d2,this._overrideRedirectResult=u2}async _openPopup(t,n,r,i){var o;Ct((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=vh(t,n,r,bu(),i);return M2(t,a,Qc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Hk(vh(t,n,r,bu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await P2(t),r=new p2(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tl,{type:tl},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[tl];a!==void 0&&n(!!a),lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||Kc()||is()}}const $2=B2;var yh="@firebase/auth",wh="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function V2(e){Ni(new _r("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(e)},c=new Ck(s,l,u);return ik(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ni(new _r("auth-internal",t=>{const n=os(t.getProvider("auth").getImmediate());return(r=>new H2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(yh,wh,W2(e)),ur(yh,wh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=5*60,K2=Lg("authIdTokenMaxAge")||G2;let Sh=null;const Y2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K2)return;const i=n==null?void 0:n.token;Sh!==i&&(Sh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q2(e=VE()){const t=Fg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=rk(e,{popupRedirectResolver:$2,persistence:[Xk,jk,cv]}),r=Lg("authTokenSyncURL");if(r){const o=Y2(r);Mk(n,o,()=>o(n.currentUser)),Dk(n,a=>o(a))}const i=A_("auth");return i&&Tk(n,`http://${i}`),n}V2("Browser");function yv(e,t){return function(){return e.apply(t,arguments)}}const{toString:wv}=Object.prototype,{getPrototypeOf:Jc}=Object,Xc=(e=>t=>{const n=wv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Pt=e=>(e=e.toLowerCase(),t=>Xc(t)===e),ls=e=>t=>typeof t===e,{isArray:Pr}=Array,Ai=ls("undefined");function q2(e){return e!==null&&!Ai(e)&&e.constructor!==null&&!Ai(e.constructor)&&an(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Sv=Pt("ArrayBuffer");function J2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Sv(e.buffer),t}const X2=ls("string"),an=ls("function"),_v=ls("number"),Zc=e=>e!==null&&typeof e=="object",Z2=e=>e===!0||e===!1,Ko=e=>{if(Xc(e)!=="object")return!1;const t=Jc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ex=Pt("Date"),tx=Pt("File"),nx=Pt("Blob"),rx=Pt("FileList"),ix=e=>Zc(e)&&an(e.pipe),ox=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||wv.call(e)===t||an(e.toString)&&e.toString()===t)},ax=Pt("URLSearchParams"),sx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Pr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function Ev(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const kv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xv=e=>!Ai(e)&&e!==kv;function Cu(){const{caseless:e}=xv(this)&&this||{},t={},n=(r,i)=>{const o=e&&Ev(t,i)||i;Ko(t[o])&&Ko(r)?t[o]=Cu(t[o],r):Ko(r)?t[o]=Cu({},r):Pr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Qi(arguments[r],n);return t}const lx=(e,t,n,{allOwnKeys:r}={})=>(Qi(t,(i,o)=>{n&&an(i)?e[o]=yv(i,n):e[o]=i},{allOwnKeys:r}),e),ux=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},fx=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Jc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hx=e=>{if(!e)return null;if(Pr(e))return e;let t=e.length;if(!_v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},px=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Jc(Uint8Array)),mx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vx=Pt("HTMLFormElement"),yx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),_h=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wx=Pt("RegExp"),bv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Qi(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Sx=e=>{bv(e,(t,n)=>{if(an(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(an(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_x=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Pr(e)?r(e):r(String(e).split(t)),n},Ex=()=>{},kx=(e,t)=>(e=+e,Number.isFinite(e)?e:t),nl="abcdefghijklmnopqrstuvwxyz",Eh="0123456789",Iv={DIGIT:Eh,ALPHA:nl,ALPHA_DIGIT:nl+nl.toUpperCase()+Eh},xx=(e=16,t=Iv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bx(e){return!!(e&&an(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ix=e=>{const t=new Array(10),n=(r,i)=>{if(Zc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Pr(r)?[]:{};return Qi(r,(a,s)=>{const l=n(a,i+1);!Ai(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},S={isArray:Pr,isArrayBuffer:Sv,isBuffer:q2,isFormData:ox,isArrayBufferView:J2,isString:X2,isNumber:_v,isBoolean:Z2,isObject:Zc,isPlainObject:Ko,isUndefined:Ai,isDate:ex,isFile:tx,isBlob:nx,isRegExp:wx,isFunction:an,isStream:ix,isURLSearchParams:ax,isTypedArray:px,isFileList:rx,forEach:Qi,merge:Cu,extend:lx,trim:sx,stripBOM:ux,inherits:cx,toFlatObject:fx,kindOf:Xc,kindOfTest:Pt,endsWith:dx,toArray:hx,forEachEntry:mx,matchAll:gx,isHTMLForm:vx,hasOwnProperty:_h,hasOwnProp:_h,reduceDescriptors:bv,freezeMethods:Sx,toObjectSet:_x,toCamelCase:yx,noop:Ex,toFiniteNumber:kx,findKey:Ev,global:kv,isContextDefined:xv,ALPHABET:Iv,generateString:xx,isSpecCompliantForm:bx,toJSONObject:Ix};function B(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Cv=B.prototype,Tv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Tv[e]={value:e}});Object.defineProperties(B,Tv);Object.defineProperty(Cv,"isAxiosError",{value:!0});B.from=(e,t,n,r,i,o)=>{const a=Object.create(Cv);return S.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),B.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const Cx=null;function Tu(e){return S.isPlainObject(e)||S.isArray(e)}function Nv(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function kh(e,t,n){return e?e.concat(t).map(function(i,o){return i=Nv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Tx(e){return S.isArray(e)&&!e.some(Tu)}const Nx=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function us(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!S.isUndefined(x[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(S.isDate(v))return v.toISOString();if(!l&&S.isBlob(v))throw new B("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(v)||S.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,y,x){let p=v;if(v&&!x&&typeof v=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(S.isArray(v)&&Tx(v)||(S.isFileList(v)||S.endsWith(y,"[]"))&&(p=S.toArray(v)))return y=Nv(y),p.forEach(function(m,w){!(S.isUndefined(m)||m===null)&&t.append(a===!0?kh([y],w,o):a===null?y:y+"[]",u(m))}),!1}return Tu(v)?!0:(t.append(kh(x,y,o),u(v)),!1)}const f=[],h=Object.assign(Nx,{defaultVisitor:c,convertValue:u,isVisitable:Tu});function g(v,y){if(!S.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),S.forEach(v,function(p,d){(!(S.isUndefined(p)||p===null)&&i.call(t,p,S.isString(d)?d.trim():d,y,h))===!0&&g(p,y?y.concat(d):[d])}),f.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return g(e),t}function xh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ef(e,t){this._pairs=[],e&&us(e,this,t)}const Pv=ef.prototype;Pv.append=function(t,n){this._pairs.push([t,n])};Pv.toString=function(t){const n=t?function(r){return t.call(this,r,xh)}:xh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Px(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ov(e,t,n){if(!t)return e;const r=n&&n.encode||Px,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new ef(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ox{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const bh=Ox,Rv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rx=typeof URLSearchParams<"u"?URLSearchParams:ef,Ax=typeof FormData<"u"?FormData:null,Lx=typeof Blob<"u"?Blob:null,Dx=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mx=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),rt={isBrowser:!0,classes:{URLSearchParams:Rx,FormData:Ax,Blob:Lx},isStandardBrowserEnv:Dx,isStandardBrowserWebWorkerEnv:Mx,protocols:["http","https","file","blob","url","data"]};function Ux(e,t){return us(e,new rt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return rt.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Fx(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Av(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,l?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=zx(i[a])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(Fx(r),i,n,0)}),n}return null}const jx={"Content-Type":void 0};function Bx(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const cs={transitional:Rv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(Av(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ux(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return us(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Bx(t)):t}],transformResponse:[function(t){const n=this.transitional||cs.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?B.from(s,B.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(t){cs.headers[t]={}});S.forEach(["post","put","patch"],function(t){cs.headers[t]=S.merge(jx)});const tf=cs,$x=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hx=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&$x[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ih=Symbol("internals");function Br(e){return e&&String(e).trim().toLowerCase()}function Yo(e){return e===!1||e==null?e:S.isArray(e)?e.map(Yo):String(e)}function Wx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Vx(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function rl(e,t,n,r,i){if(S.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Gx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kx(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class fs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=Br(l);if(!c)throw new Error("header name must be a non-empty string");const f=S.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Yo(s))}const a=(s,l)=>S.forEach(s,(u,c)=>o(u,c,l));return S.isPlainObject(t)||t instanceof this.constructor?a(t,n):S.isString(t)&&(t=t.trim())&&!Vx(t)?a(Hx(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Br(t),t){const r=S.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Wx(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Br(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||rl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Br(a),a){const s=S.findKey(r,a);s&&(!n||rl(r,r[s],s,n))&&(delete r[s],i=!0)}}return S.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||rl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return S.forEach(this,(i,o)=>{const a=S.findKey(r,o);if(a){n[a]=Yo(i),delete n[o];return}const s=t?Gx(o):String(o).trim();s!==o&&delete n[o],n[s]=Yo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ih]=this[Ih]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=Br(a);r[s]||(Kx(i,a),r[s]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}}fs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.freezeMethods(fs.prototype);S.freezeMethods(fs);const wt=fs;function il(e,t){const n=this||tf,r=t||n,i=wt.from(r.headers);let o=r.data;return S.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Lv(e){return!!(e&&e.__CANCEL__)}function qi(e,t,n){B.call(this,e??"canceled",B.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(qi,B,{__CANCEL__:!0});function Yx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Qx=rt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),S.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),S.isString(o)&&l.push("path="+o),S.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function qx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Jx(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Dv(e,t){return e&&!qx(t)?Jx(e,t):t}const Xx=rt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=S.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Zx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function eb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const g=c&&u-c;return g?Math.round(h*1e3/g):void 0}}function Ch(e,t){let n=0;const r=eb(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const tb=typeof XMLHttpRequest<"u",nb=tb&&function(e){return new Promise(function(n,r){let i=e.data;const o=wt.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}S.isFormData(i)&&(rt.isStandardBrowserEnv||rt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+v))}const c=Dv(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ov(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const g=wt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:e,request:u};Yx(function(p){n(p),l()},function(p){r(p),l()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new B("Request aborted",B.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new B("Network Error",B.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Rv;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new B(v,y.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,u)),u=null},rt.isStandardBrowserEnv){const g=(e.withCredentials||Xx(c))&&e.xsrfCookieName&&Qx.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&S.forEach(o.toJSON(),function(v,y){u.setRequestHeader(y,v)}),S.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ch(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ch(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=g=>{u&&(r(!g||g.type?new qi(null,e,u):g),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=Zx(c);if(h&&rt.protocols.indexOf(h)===-1){r(new B("Unsupported protocol "+h+":",B.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Qo={http:Cx,xhr:nb};S.forEach(Qo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rb={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=S.isString(n)?Qo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new B(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(S.hasOwnProp(Qo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!S.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Qo};function ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qi(null,e)}function Th(e){return ol(e),e.headers=wt.from(e.headers),e.data=il.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rb.getAdapter(e.adapter||tf.adapter)(e).then(function(r){return ol(e),r.data=il.call(e,e.transformResponse,r),r.headers=wt.from(r.headers),r},function(r){return Lv(r)||(ol(e),r&&r.response&&(r.response.data=il.call(e,e.transformResponse,r.response),r.response.headers=wt.from(r.response.headers))),Promise.reject(r)})}const Nh=e=>e instanceof wt?e.toJSON():e;function kr(e,t){t=t||{};const n={};function r(u,c,f){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:f},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u,c,f){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!S.isUndefined(c))return r(void 0,c)}function a(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(Nh(u),Nh(c),!0)};return S.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,h=f(e[c],t[c],c);S.isUndefined(h)&&f!==s||(n[c]=h)}),n}const Mv="1.3.4",nf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{nf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ph={};nf.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Mv+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new B(i(a," has been removed"+(n?" in "+n:"")),B.ERR_DEPRECATED);return n&&!Ph[a]&&(Ph[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function ib(e,t,n){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new B("option "+o+" must be "+l,B.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}}const Nu={assertOptions:ib,validators:nf},Lt=Nu.validators;class Aa{constructor(t){this.defaults=t,this.interceptors={request:new bh,response:new bh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=kr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Nu.assertOptions(r,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),i!==void 0&&Nu.assertOptions(i,{encode:Lt.function,serialize:Lt.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&S.merge(o.common,o[n.method]),a&&S.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=wt.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,h;if(!l){const v=[Th.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),h=v.length,c=Promise.resolve(n);f<h;)c=c.then(v[f++],v[f++]);return c}h=s.length;let g=n;for(f=0;f<h;){const v=s[f++],y=s[f++];try{g=v(g)}catch(x){y.call(this,x);break}}try{c=Th.call(this,g)}catch(v){return Promise.reject(v)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=kr(this.defaults,t);const n=Dv(t.baseURL,t.url);return Ov(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){Aa.prototype[t]=function(n,r){return this.request(kr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(kr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Aa.prototype[t]=n(),Aa.prototype[t+"Form"]=n(!0)});const qo=Aa;class rf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new qi(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new rf(function(i){t=i}),cancel:t}}}const ob=rf;function ab(e){return function(n){return e.apply(null,n)}}function sb(e){return S.isObject(e)&&e.isAxiosError===!0}const Pu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pu).forEach(([e,t])=>{Pu[t]=e});const lb=Pu;function Uv(e){const t=new qo(e),n=yv(qo.prototype.request,t);return S.extend(n,qo.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Uv(kr(e,i))},n}const ue=Uv(tf);ue.Axios=qo;ue.CanceledError=qi;ue.CancelToken=ob;ue.isCancel=Lv;ue.VERSION=Mv;ue.toFormData=us;ue.AxiosError=B;ue.Cancel=ue.CanceledError;ue.all=function(t){return Promise.all(t)};ue.spread=ab;ue.isAxiosError=sb;ue.mergeConfig=kr;ue.AxiosHeaders=wt;ue.formToJSON=e=>Av(S.isHTMLForm(e)?new FormData(e):e);ue.HttpStatusCode=lb;ue.default=ue;const ub=ue,zn=ub.create({baseURL:"https://authentication-app-production-b8f5.up.railway.app/api/"});var cb="firebase",fb="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur(cb,fb,"app");const db={apiKey:"AIzaSyDW47Wmth5j6Ftozwthp5Ub_pv0_nHwzi0",authDomain:"authenticationapp-ebbb3.firebaseapp.com",projectId:"authenticationapp-ebbb3",storageBucket:"authenticationapp-ebbb3.appspot.com",messagingSenderId:"24244631391",appId:"1:24244631391:web:2b69f088bdca260de6a8ea"},hb=zg(db),al=Q2(hb),pb=(e,t)=>{switch(t.type){case"LOGIN_REQUEST":return{...e,isLoading:!0};case"LOGIN_SUCCESS":return{...e,isLoading:!1,user:t.payload.user,error:null};case"LOGIN_FAILURE":return{...e,isLoading:!1,user:null,error:t.payload.error};case"SIGNUP_SUCCESS":return{...e,isLoading:!1,user:t.payload.user,error:null};case"SIGNUP_REQUEST":return{...e,isLoading:!0};case"SIGNUP_FAILURE":return{...e,isLoading:!1,user:null,error:t.payload.error};case"UPDATE_REQUEST":return{...e,isLoading:!0};case"UPDATE_SUCCESS":return{...e,isLoading:!1,user:t.payload.user,error:null};case"UPDATE_FAILURE":return{...e,isLoading:!1,user:null,error:t.payload.error};case"LOGOUT":return{...e,user:null};default:return e}},Oh=localStorage.getItem("user"),mb=Oh?JSON.parse(Oh):null,gb={user:mb,isLoading:!1,error:null},vb=({children:e})=>{const[t,n]=I.useReducer(pb,gb),r=async(c,f)=>{try{n({type:"LOGIN_REQUEST"});const h={email:c,password:f},{data:g}=await zn.post("/users/login",h);localStorage.setItem("user",JSON.stringify(g)),n({type:"LOGIN_SUCCESS",payload:{user:g}})}catch(h){n({type:"LOGIN_FAILURE",payload:{error:h.response.data.msg}})}},i=async()=>{try{n({type:"LOGIN_REQUEST"});const c=new dt,{user:f}=await el(al,c),h={displayName:f.displayName||"",email:f.email||"",phoneNumber:f.phoneNumber||"",uid:f.uid},{data:g}=await zn.post("/users/loginFirebase",h);localStorage.setItem("user",JSON.stringify(g)),n({type:"LOGIN_SUCCESS",payload:{user:g}})}catch(c){n({type:"LOGIN_FAILURE",payload:{error:c.response.data.msg}})}},o=async()=>{try{n({type:"LOGIN_REQUEST"});const c=new ft,{user:f}=await el(al,c),h={displayName:f.displayName||"",email:f.email||"",phoneNumber:f.phoneNumber||"",uid:f.uid},{data:g}=await zn.post("/users/loginFirebase",h);localStorage.setItem("user",JSON.stringify(g)),n({type:"LOGIN_SUCCESS",payload:{user:g}})}catch(c){n({type:"LOGIN_FAILURE",payload:{error:c.response.data.msg}})}},a=async()=>{try{n({type:"LOGIN_REQUEST"});const c=new ht,{user:f}=await el(al,c),h={displayName:f.displayName||"",email:f.email||"",phoneNumber:f.phoneNumber||"",uid:f.uid},{data:g}=await zn.post("/users/loginFirebase",h);localStorage.setItem("user",JSON.stringify(g)),n({type:"LOGIN_SUCCESS",payload:{user:g}})}catch(c){n({type:"LOGIN_FAILURE",payload:{error:c.response.data.msg}})}},s=async(c,f)=>{try{n({type:"SIGNUP_REQUEST"});const h={email:c,password:f},{data:g}=await zn.post("/users",h);localStorage.setItem("user",JSON.stringify(g)),n({type:"SIGNUP_SUCCESS",payload:{user:g}})}catch(h){n({type:"SIGNUP_FAILURE",payload:{error:h.response.data.msg}})}},l=async c=>{var f,h;try{n({type:"UPDATE_REQUEST"});const v={headers:{Authorization:`Bearer ${((f=t.user)==null?void 0:f.token)||""}`}},{data:y}=await zn.patch(`/users/${(h=t.user)==null?void 0:h._id}`,c,v);localStorage.setItem("user",JSON.stringify(y)),n({type:"UPDATE_SUCCESS",payload:{user:y}})}catch(g){n({type:"UPDATE_FAILURE",payload:{error:g.response.data.msg}})}},u=()=>{localStorage.removeItem("user"),n({type:"LOGOUT"})};return _(Un.Provider,{value:{userState:t,login:r,loginWithGoogle:i,loginWithFacebook:o,loginWithGithub:a,register:s,updateProfile:l,logout:u},children:e})};ll.createRoot(document.getElementById("root")).render(_(dr.StrictMode,{children:_(vb,{children:_(b_,{})})}));
