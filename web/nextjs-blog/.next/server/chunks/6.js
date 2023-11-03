"use strict";exports.id=6,exports.ids=[6],exports.modules={989:e=>{var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,s={};function stringifyCookie(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean);return`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}; ${r.join("; ")}`}function parseCookie(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[i,o]=[r.slice(0,e),r.slice(e+1)];try{t.set(i,decodeURIComponent(null!=o?o:"true"))}catch{}}return t}function parseSetCookie(e){var t,r;if(!e)return;let[[i,o],...s]=parseCookie(e),{domain:p,expires:l,httponly:u,maxage:f,path:h,samesite:c,secure:m,priority:d}=Object.fromEntries(s.map(([e,t])=>[e.toLowerCase(),t])),g={name:i,value:decodeURIComponent(o),domain:p,...l&&{expires:new Date(l)},...u&&{httpOnly:!0},..."string"==typeof f&&{maxAge:Number(f)},path:h,...c&&{sameSite:n.includes(t=(t=c).toLowerCase())?t:void 0},...m&&{secure:!0},...d&&{priority:a.includes(r=(r=d).toLowerCase())?r:void 0}};return function(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}(g)}((e,r)=>{for(var i in r)t(e,i,{get:r[i],enumerable:!0})})(s,{RequestCookies:()=>p,ResponseCookies:()=>l,parseCookie:()=>parseCookie,parseSetCookie:()=>parseSetCookie,stringifyCookie:()=>stringifyCookie}),e.exports=((e,s,n,a)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let n of i(s))o.call(e,n)||void 0===n||t(e,n,{get:()=>s[n],enumerable:!(a=r(s,n))||a.enumerable});return e})(t({},"__esModule",{value:!0}),s);var n=["strict","lax","none"],a=["low","medium","high"],p=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t){let e=parseCookie(t);for(let[t,r]of e)this._parsed.set(t,{name:t,value:r})}}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let i="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===i).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,i=this._parsed;return i.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(i).map(([e,t])=>stringifyCookie(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>stringifyCookie(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},l=class{constructor(e){var t,r,i;this._parsed=new Map,this._headers=e;let o=null!=(i=null!=(r=null==(t=e.getSetCookie)?void 0:t.call(e))?r:e.get("set-cookie"))?i:[],s=Array.isArray(o)?o:function(e){if(!e)return[];var t,r,i,o,s,n=[],a=0;function skipWhitespace(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,s=!1;skipWhitespace();)if(","===(r=e.charAt(a))){for(i=a,a+=1,skipWhitespace(),o=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(s=!0,a=o,n.push(e.substring(t,i)),t=a):a=i+1}else a+=1;(!s||a>=e.length)&&n.push(e.substring(t,e.length))}return n}(o);for(let e of s){let t=parseSetCookie(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let i="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===i)}has(e){return this._parsed.has(e)}set(...e){let[t,r,i]=1===e.length?[e[0].name,e[0].value,e[0]]:e,o=this._parsed;return o.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...i})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=stringifyCookie(r);t.append("set-cookie",e)}}(o,this._headers),this}delete(...e){let[t,r,i]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:r,domain:i,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(stringifyCookie).join("; ")}}},6132:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},6449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RequestCookies:function(){return i.RequestCookies},ResponseCookies:function(){return i.ResponseCookies}});let i=r(989)}};