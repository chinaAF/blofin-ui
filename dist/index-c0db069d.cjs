"use strict";const Hr=require("react");var _r={exports:{}},nr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr;function Ie(){if(Yr)return nr;Yr=1;var e=Hr,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(s,f,p){var g,v={},y=null,_=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(_=f.ref);for(g in f)a.call(f,g)&&!u.hasOwnProperty(g)&&(v[g]=f[g]);if(s&&s.defaultProps)for(g in f=s.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:t,type:s,key:y,ref:_,props:v,_owner:c.current}}return nr.Fragment=o,nr.jsx=l,nr.jsxs=l,nr}var or={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur;function Me(){return Ur||(Ur=1,process.env.NODE_ENV!=="production"&&function(){var e=Hr,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),P=Symbol.iterator,S="@@iterator";function T(r){if(r===null||typeof r!="object")return null;var n=P&&r[P]||r[S];return typeof n=="function"?n:null}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(r){{for(var n=arguments.length,i=new Array(n>1?n-1:0),d=1;d<n;d++)i[d-1]=arguments[d];sr("error",r,i)}}function sr(r,n,i){{var d=O.ReactDebugCurrentFrame,h=d.getStackAddendum();h!==""&&(n+="%s",i=i.concat([h]));var x=i.map(function(m){return String(m)});x.unshift("Warning: "+n),Function.prototype.apply.call(console[r],console,x)}}var X=!1,lr=!1,ur=!1,cr=!1,dr=!1,B;B=Symbol.for("react.module.reference");function H(r){return!!(typeof r=="string"||typeof r=="function"||r===a||r===u||dr||r===c||r===p||r===g||cr||r===_||X||lr||ur||typeof r=="object"&&r!==null&&(r.$$typeof===y||r.$$typeof===v||r.$$typeof===l||r.$$typeof===s||r.$$typeof===f||r.$$typeof===B||r.getModuleId!==void 0))}function Z(r,n,i){var d=r.displayName;if(d)return d;var h=n.displayName||n.name||"";return h!==""?i+"("+h+")":i}function Q(r){return r.displayName||"Context"}function I(r){if(r==null)return null;if(typeof r.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case a:return"Fragment";case o:return"Portal";case u:return"Profiler";case c:return"StrictMode";case p:return"Suspense";case g:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case s:var n=r;return Q(n)+".Consumer";case l:var i=r;return Q(i._context)+".Provider";case f:return Z(r,r.render,"ForwardRef");case v:var d=r.displayName||null;return d!==null?d:I(r.type)||"Memo";case y:{var h=r,x=h._payload,m=h._init;try{return I(m(x))}catch{return null}}}return null}var G=Object.assign,F=0,rr,q,N,er,V,D,j;function Pr(){}Pr.__reactDisabledLog=!0;function le(){{if(F===0){rr=console.log,q=console.info,N=console.warn,er=console.error,V=console.group,D=console.groupCollapsed,j=console.groupEnd;var r={configurable:!0,enumerable:!0,value:Pr,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}F++}}function ue(){{if(F--,F===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:G({},r,{value:rr}),info:G({},r,{value:q}),warn:G({},r,{value:N}),error:G({},r,{value:er}),group:G({},r,{value:V}),groupCollapsed:G({},r,{value:D}),groupEnd:G({},r,{value:j})})}F<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var hr=O.ReactCurrentDispatcher,yr;function fr(r,n,i){{if(yr===void 0)try{throw Error()}catch(h){var d=h.stack.trim().match(/\n( *(at )?)/);yr=d&&d[1]||""}return`
`+yr+r}}var xr=!1,pr;{var ce=typeof WeakMap=="function"?WeakMap:Map;pr=new ce}function Or(r,n){if(!r||xr)return"";{var i=pr.get(r);if(i!==void 0)return i}var d;xr=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=hr.current,hr.current=null,le();try{if(n){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(W){d=W}Reflect.construct(r,[],m)}else{try{m.call()}catch(W){d=W}r.call(m.prototype)}}else{try{throw Error()}catch(W){d=W}r()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var b=W.stack.split(`
`),A=d.stack.split(`
`),E=b.length-1,k=A.length-1;E>=1&&k>=0&&b[E]!==A[k];)k--;for(;E>=1&&k>=0;E--,k--)if(b[E]!==A[k]){if(E!==1||k!==1)do if(E--,k--,k<0||b[E]!==A[k]){var M=`
`+b[E].replace(" at new "," at ");return r.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",r.displayName)),typeof r=="function"&&pr.set(r,M),M}while(E>=1&&k>=0);break}}}finally{xr=!1,hr.current=x,ue(),Error.prepareStackTrace=h}var K=r?r.displayName||r.name:"",Dr=K?fr(K):"";return typeof r=="function"&&pr.set(r,Dr),Dr}function de(r,n,i){return Or(r,!1)}function fe(r){var n=r.prototype;return!!(n&&n.isReactComponent)}function gr(r,n,i){if(r==null)return"";if(typeof r=="function")return Or(r,fe(r));if(typeof r=="string")return fr(r);switch(r){case p:return fr("Suspense");case g:return fr("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case f:return de(r.render);case v:return gr(r.type,n,i);case y:{var d=r,h=d._payload,x=d._init;try{return gr(x(h),n,i)}catch{}}}return""}var vr=Object.prototype.hasOwnProperty,jr={},Ar=O.ReactDebugCurrentFrame;function br(r){if(r){var n=r._owner,i=gr(r.type,r._source,n?n.type:null);Ar.setExtraStackFrame(i)}else Ar.setExtraStackFrame(null)}function pe(r,n,i,d,h){{var x=Function.call.bind(vr);for(var m in r)if(x(r,m)){var b=void 0;try{if(typeof r[m]!="function"){var A=Error((d||"React class")+": "+i+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}b=r[m](n,m,d,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(E){b=E}b&&!(b instanceof Error)&&(br(h),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",i,m,typeof b),br(null)),b instanceof Error&&!(b.message in jr)&&(jr[b.message]=!0,br(h),w("Failed %s type: %s",i,b.message),br(null))}}}var ge=Array.isArray;function wr(r){return ge(r)}function ve(r){{var n=typeof Symbol=="function"&&Symbol.toStringTag,i=n&&r[Symbol.toStringTag]||r.constructor.name||"Object";return i}}function be(r){try{return Ir(r),!1}catch{return!0}}function Ir(r){return""+r}function Mr(r){if(be(r))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ve(r)),Ir(r)}var tr=O.ReactCurrentOwner,me={key:!0,ref:!0,__self:!0,__source:!0},zr,Gr,Rr;Rr={};function he(r){if(vr.call(r,"ref")){var n=Object.getOwnPropertyDescriptor(r,"ref").get;if(n&&n.isReactWarning)return!1}return r.ref!==void 0}function ye(r){if(vr.call(r,"key")){var n=Object.getOwnPropertyDescriptor(r,"key").get;if(n&&n.isReactWarning)return!1}return r.key!==void 0}function xe(r,n){if(typeof r.ref=="string"&&tr.current&&n&&tr.current.stateNode!==n){var i=I(tr.current.type);Rr[i]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(tr.current.type),r.ref),Rr[i]=!0)}}function we(r,n){{var i=function(){zr||(zr=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(r,"key",{get:i,configurable:!0})}}function Re(r,n){{var i=function(){Gr||(Gr=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(r,"ref",{get:i,configurable:!0})}}var Ee=function(r,n,i,d,h,x,m){var b={$$typeof:t,type:r,key:n,ref:i,props:m,_owner:x};return b._store={},Object.defineProperty(b._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(b,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(b,"_source",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.freeze&&(Object.freeze(b.props),Object.freeze(b)),b};function Ce(r,n,i,d,h){{var x,m={},b=null,A=null;i!==void 0&&(Mr(i),b=""+i),ye(n)&&(Mr(n.key),b=""+n.key),he(n)&&(A=n.ref,xe(n,h));for(x in n)vr.call(n,x)&&!me.hasOwnProperty(x)&&(m[x]=n[x]);if(r&&r.defaultProps){var E=r.defaultProps;for(x in E)m[x]===void 0&&(m[x]=E[x])}if(b||A){var k=typeof r=="function"?r.displayName||r.name||"Unknown":r;b&&we(m,k),A&&Re(m,k)}return Ee(r,b,A,h,d,tr.current,m)}}var Er=O.ReactCurrentOwner,Fr=O.ReactDebugCurrentFrame;function J(r){if(r){var n=r._owner,i=gr(r.type,r._source,n?n.type:null);Fr.setExtraStackFrame(i)}else Fr.setExtraStackFrame(null)}var Cr;Cr=!1;function kr(r){return typeof r=="object"&&r!==null&&r.$$typeof===t}function Wr(){{if(Er.current){var r=I(Er.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function ke(r){{if(r!==void 0){var n=r.fileName.replace(/^.*[\\\/]/,""),i=r.lineNumber;return`

Check your code at `+n+":"+i+"."}return""}}var Nr={};function _e(r){{var n=Wr();if(!n){var i=typeof r=="string"?r:r.displayName||r.name;i&&(n=`

Check the top-level render call using <`+i+">.")}return n}}function Vr(r,n){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var i=_e(n);if(Nr[i])return;Nr[i]=!0;var d="";r&&r._owner&&r._owner!==Er.current&&(d=" It was passed a child from "+I(r._owner.type)+"."),J(r),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,d),J(null)}}function $r(r,n){{if(typeof r!="object")return;if(wr(r))for(var i=0;i<r.length;i++){var d=r[i];kr(d)&&Vr(d,n)}else if(kr(r))r._store&&(r._store.validated=!0);else if(r){var h=T(r);if(typeof h=="function"&&h!==r.entries)for(var x=h.call(r),m;!(m=x.next()).done;)kr(m.value)&&Vr(m.value,n)}}}function Se(r){{var n=r.type;if(n==null||typeof n=="string")return;var i;if(typeof n=="function")i=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===f||n.$$typeof===v))i=n.propTypes;else return;if(i){var d=I(n);pe(i,r.props,"prop",d,r)}else if(n.PropTypes!==void 0&&!Cr){Cr=!0;var h=I(n);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",h||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Te(r){{for(var n=Object.keys(r.props),i=0;i<n.length;i++){var d=n[i];if(d!=="children"&&d!=="key"){J(r),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),J(null);break}}r.ref!==null&&(J(r),w("Invalid attribute `ref` supplied to `React.Fragment`."),J(null))}}function Lr(r,n,i,d,h,x){{var m=H(r);if(!m){var b="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var A=ke(h);A?b+=A:b+=Wr();var E;r===null?E="null":wr(r)?E="array":r!==void 0&&r.$$typeof===t?(E="<"+(I(r.type)||"Unknown")+" />",b=" Did you accidentally export a JSX literal instead of a component?"):E=typeof r,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,b)}var k=Ce(r,n,i,h,x);if(k==null)return k;if(m){var M=n.children;if(M!==void 0)if(d)if(wr(M)){for(var K=0;K<M.length;K++)$r(M[K],r);Object.freeze&&Object.freeze(M)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else $r(M,r)}return r===a?Te(k):Se(k),k}}function Pe(r,n,i){return Lr(r,n,i,!0)}function Oe(r,n,i){return Lr(r,n,i,!1)}var je=Oe,Ae=Pe;or.Fragment=a,or.jsx=je,or.jsxs=Ae}()),or}process.env.NODE_ENV==="production"?_r.exports=Ie():_r.exports=Me();var Zr=_r.exports;function Qr(e){var t,o,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=Qr(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function re(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=Qr(e))&&(a&&(a+=" "),a+=t);return a}function ze(){for(var e=0,t,o,a="";e<arguments.length;)(t=arguments[e++])&&(o=ee(t))&&(a&&(a+=" "),a+=o);return a}function ee(e){if(typeof e=="string")return e;for(var t,o="",a=0;a<e.length;a++)e[a]&&(t=ee(e[a]))&&(o&&(o+=" "),o+=t);return o}var Tr="-";function Ge(e){var t=We(e),o=e.conflictingClassGroups,a=e.conflictingClassGroupModifiers,c=a===void 0?{}:a;function u(s){var f=s.split(Tr);return f[0]===""&&f.length!==1&&f.shift(),te(f,t)||Fe(s)}function l(s,f){var p=o[s]||[];return f&&c[s]?[].concat(p,c[s]):p}return{getClassGroupId:u,getConflictingClassGroupIds:l}}function te(e,t){var l;if(e.length===0)return t.classGroupId;var o=e[0],a=t.nextPart.get(o),c=a?te(e.slice(1),a):void 0;if(c)return c;if(t.validators.length!==0){var u=e.join(Tr);return(l=t.validators.find(function(s){var f=s.validator;return f(u)}))==null?void 0:l.classGroupId}}var Br=/^\[(.+)\]$/;function Fe(e){if(Br.test(e)){var t=Br.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function We(e){var t=e.theme,o=e.prefix,a={nextPart:new Map,validators:[]},c=Ve(Object.entries(e.classGroups),o);return c.forEach(function(u){var l=u[0],s=u[1];Sr(s,a,l,t)}),a}function Sr(e,t,o,a){e.forEach(function(c){if(typeof c=="string"){var u=c===""?t:qr(t,c);u.classGroupId=o;return}if(typeof c=="function"){if(Ne(c)){Sr(c(a),t,o,a);return}t.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(function(l){var s=l[0],f=l[1];Sr(f,qr(t,s),o,a)})})}function qr(e,t){var o=e;return t.split(Tr).forEach(function(a){o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o}function Ne(e){return e.isThemeGetter}function Ve(e,t){return t?e.map(function(o){var a=o[0],c=o[1],u=c.map(function(l){return typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(function(s){var f=s[0],p=s[1];return[t+f,p]})):l});return[a,u]}):e}function $e(e){if(e<1)return{get:function(){},set:function(){}};var t=0,o=new Map,a=new Map;function c(u,l){o.set(u,l),t++,t>e&&(t=0,a=o,o=new Map)}return{get:function(l){var s=o.get(l);if(s!==void 0)return s;if((s=a.get(l))!==void 0)return c(l,s),s},set:function(l,s){o.has(l)?o.set(l,s):c(l,s)}}}var ne="!";function Le(e){var t=e.separator||":",o=t.length===1,a=t[0],c=t.length;return function(l){for(var s=[],f=0,p=0,g,v=0;v<l.length;v++){var y=l[v];if(f===0){if(y===a&&(o||l.slice(v,v+c)===t)){s.push(l.slice(p,v)),p=v+c;continue}if(y==="/"){g=v;continue}}y==="["?f++:y==="]"&&f--}var _=s.length===0?l:l.substring(p),P=_.startsWith(ne),S=P?_.substring(1):_,T=g&&g>p?g-p:void 0;return{modifiers:s,hasImportantModifier:P,baseClassName:S,maybePostfixModifierPosition:T}}}function De(e){if(e.length<=1)return e;var t=[],o=[];return e.forEach(function(a){var c=a[0]==="[";c?(t.push.apply(t,o.sort().concat([a])),o=[]):o.push(a)}),t.push.apply(t,o.sort()),t}function Ye(e){return{cache:$e(e.cacheSize),splitModifiers:Le(e),...Ge(e)}}var Ue=/\s+/;function Be(e,t){var o=t.splitModifiers,a=t.getClassGroupId,c=t.getConflictingClassGroupIds,u=new Set;return e.trim().split(Ue).map(function(l){var s=o(l),f=s.modifiers,p=s.hasImportantModifier,g=s.baseClassName,v=s.maybePostfixModifierPosition,y=a(v?g.substring(0,v):g),_=!!v;if(!y){if(!v)return{isTailwindClass:!1,originalClassName:l};if(y=a(g),!y)return{isTailwindClass:!1,originalClassName:l};_=!1}var P=De(f).join(":"),S=p?P+ne:P;return{isTailwindClass:!0,modifierId:S,classGroupId:y,originalClassName:l,hasPostfixModifier:_}}).reverse().filter(function(l){if(!l.isTailwindClass)return!0;var s=l.modifierId,f=l.classGroupId,p=l.hasPostfixModifier,g=s+f;return u.has(g)?!1:(u.add(g),c(f,p).forEach(function(v){return u.add(s+v)}),!0)}).reverse().map(function(l){return l.originalClassName}).join(" ")}function qe(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a,c,u,l=s;function s(p){var g=t[0],v=t.slice(1),y=v.reduce(function(_,P){return P(_)},g());return a=Ye(y),c=a.cache.get,u=a.cache.set,l=f,f(p)}function f(p){var g=c(p);if(g)return g;var v=Be(p,a);return u(p,v),v}return function(){return l(ze.apply(null,arguments))}}function R(e){var t=function(a){return a[e]||[]};return t.isThemeGetter=!0,t}var oe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Je=/^\d+\/\d+$/,Ke=new Set(["px","full","screen"]),Xe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,He=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Ze=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(e){return Y(e)||Ke.has(e)||Je.test(e)||L(e)}function L(e){return U(e,"length",ot)}function Qe(e){return U(e,"size",ae)}function rt(e){return U(e,"position",ae)}function et(e){return U(e,"url",at)}function mr(e){return U(e,"number",Y)}function Y(e){return!Number.isNaN(Number(e))}function tt(e){return e.endsWith("%")&&Y(e.slice(0,-1))}function ar(e){return Jr(e)||U(e,"number",Jr)}function C(e){return oe.test(e)}function ir(){return!0}function $(e){return Xe.test(e)}function nt(e){return U(e,"",it)}function U(e,t,o){var a=oe.exec(e);return a?a[1]?a[1]===t:o(a[2]):!1}function ot(e){return He.test(e)}function ae(){return!1}function at(e){return e.startsWith("url(")}function Jr(e){return Number.isInteger(Number(e))}function it(e){return Ze.test(e)}function st(){var e=R("colors"),t=R("spacing"),o=R("blur"),a=R("brightness"),c=R("borderColor"),u=R("borderRadius"),l=R("borderSpacing"),s=R("borderWidth"),f=R("contrast"),p=R("grayscale"),g=R("hueRotate"),v=R("invert"),y=R("gap"),_=R("gradientColorStops"),P=R("gradientColorStopPositions"),S=R("inset"),T=R("margin"),O=R("opacity"),w=R("padding"),sr=R("saturate"),X=R("scale"),lr=R("sepia"),ur=R("skew"),cr=R("space"),dr=R("translate"),B=function(){return["auto","contain","none"]},H=function(){return["auto","hidden","clip","visible","scroll"]},Z=function(){return["auto",t]},Q=function(){return["",z]},I=function(){return["auto",Y,C]},G=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},F=function(){return["solid","dashed","dotted","double","none"]},rr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},q=function(){return["start","end","center","between","around","evenly","stretch"]},N=function(){return["","0",C]},er=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[Y,mr]},D=function(){return[Y,C]};return{cacheSize:500,theme:{colors:[ir],spacing:[z],blur:["none","",$,L],brightness:V(),borderColor:[e],borderRadius:["none","","full",$,L],borderSpacing:[t],borderWidth:Q(),contrast:V(),grayscale:N(),hueRotate:D(),invert:N(),gap:[t],gradientColorStops:[e],gradientColorStopPositions:[tt,L],inset:Z(),margin:Z(),opacity:V(),padding:[t],saturate:V(),scale:V(),sepia:N(),skew:D(),space:[t],translate:[t]},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":er()}],"break-before":[{"break-before":er()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(G(),[C])}],overflow:[{overflow:H()}],"overflow-x":[{"overflow-x":H()}],"overflow-y":[{"overflow-y":H()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ar]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",ar]}],"grid-cols":[{"grid-cols":[ir]}],"col-start-end":[{col:["auto",{span:[ar]},C]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[ir]}],"row-start-end":[{row:["auto",{span:[ar]},C]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal"].concat(q())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(q(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(q(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[cr]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[cr]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",t]}],"min-w":[{"min-w":["min","max","fit",z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[$]},$,L]}],h:[{h:[t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z]}],"max-h":[{"max-h":[t,"min","max","fit"]}],"font-size":[{text:["base",$,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mr]}],"font-family":[{font:[ir]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",L]}],"line-clamp":[{"line-clamp":["none",Y,mr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(F(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[t]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(G(),[rt])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Qe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},et]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[].concat(F(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:F()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:[""].concat(F())}],"outline-offset":[{"outline-offset":[z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",$,nt]}],"shadow-color":[{shadow:[ir]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":rr()}],"bg-blend":[{"bg-blend":rr()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[a]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",$,C]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[v]}],saturate:[{saturate:[sr]}],sepia:[{sepia:[lr]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[sr]}],"backdrop-sepia":[{"backdrop-sepia":[lr]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[X]}],"scale-x":[{"scale-x":[X]}],"scale-y":[{"scale-y":[X]}],rotate:[{rotate:[ar,C]}],"translate-x":[{"translate-x":[dr]}],"translate-y":[{"translate-y":[dr]}],"skew-x":[{"skew-x":[ur]}],"skew-y":[{"skew-y":[ur]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[t]}],"scroll-mx":[{"scroll-mx":[t]}],"scroll-my":[{"scroll-my":[t]}],"scroll-ms":[{"scroll-ms":[t]}],"scroll-me":[{"scroll-me":[t]}],"scroll-mt":[{"scroll-mt":[t]}],"scroll-mr":[{"scroll-mr":[t]}],"scroll-mb":[{"scroll-mb":[t]}],"scroll-ml":[{"scroll-ml":[t]}],"scroll-p":[{"scroll-p":[t]}],"scroll-px":[{"scroll-px":[t]}],"scroll-py":[{"scroll-py":[t]}],"scroll-ps":[{"scroll-ps":[t]}],"scroll-pe":[{"scroll-pe":[t]}],"scroll-pt":[{"scroll-pt":[t]}],"scroll-pr":[{"scroll-pr":[t]}],"scroll-pb":[{"scroll-pb":[t]}],"scroll-pl":[{"scroll-pl":[t]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,mr]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var lt=qe(st);function ie(...e){return lt(re(e))}const Kr=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Xr=re,se=(e,t)=>o=>{var a;if((t==null?void 0:t.variants)==null)return Xr(e,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:c,defaultVariants:u}=t,l=Object.keys(c).map(p=>{const g=o==null?void 0:o[p],v=u==null?void 0:u[p];if(g===null)return null;const y=Kr(g)||Kr(v);return c[p][y]}),s=o&&Object.entries(o).reduce((p,g)=>{let[v,y]=g;return y===void 0||(p[v]=y),p},{}),f=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((p,g)=>{let{class:v,className:y,..._}=g;return Object.entries(_).every(P=>{let[S,T]=P;return Array.isArray(T)?T.includes({...u,...s}[S]):{...u,...s}[S]===T})?[...p,v,y]:p},[]);return Xr(e,l,f,o==null?void 0:o.class,o==null?void 0:o.className)},ut=e=>{const t={dark:{primary:"bg-dark-badge-primary-bg text-dark-primary",secondary:"bg-dark-badge-secondary-bg text-dark-secondary",danger:"bg-dark-badge-danger-bg text-dark-danger",success:"bg-dark-badge-success-bg text-dark-success",warning:"bg-dark-badge-warning-bg text-dark-warning",info:"bg-dark-badge-info-bg text-dark-label-tertiary"},light:{primary:"bg-light-badge-primary-bg text-light-primary",secondary:"bg-light-badge-secondary-bg text-light-secondary",danger:"bg-light-badge-danger-bg text-light-danger",success:"bg-light-badge-success-bg text-light-success",warning:"bg-light-badge-warning-bg text-light-warning",info:"bg-light-badge-info-bg text-light-label-tertiary"}},{theme:o="light"}=e;return se("rounded px-[10px] py-[5px] text-[12px]",{variants:{color:{primary:t[o].primary,secondary:t[o].secondary,danger:t[o].danger,success:t[o].success,warning:t[o].warning,info:t[o].info}},defaultVariants:{color:"primary"}})(e)},ct=({theme:e="light",color:t="primary",decoration:o=!0,label:a})=>Zr.jsxs("span",{className:`${ie(ut({theme:e,color:t}))}`,children:[o&&"• ",a]});exports.Badge=ct;exports.cn=ie;exports.cva=se;exports.jsxRuntimeExports=Zr;
//# sourceMappingURL=index-c0db069d.cjs.map
