(()=>{var e={};e.id=228,e.ids=[228],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2799:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>u,routeModule:()=>d,tree:()=>c});var s=r(7096),a=r(6132),n=r(7284),o=r.n(n),i=r(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["alimentacao",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4459)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/alimentacao/new/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4631)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],u=["/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/alimentacao/new/page.tsx"],m="/alimentacao/new/page",p={require:r,loadChunk:()=>Promise.resolve()},d=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/alimentacao/new/page",pathname:"/alimentacao/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3877:(e,t,r)=>{Promise.resolve().then(r.bind(r,7112))},7112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NewAlimentoForm:()=>NewAlimentoForm});var s=r(784),a=r(5035),n=r(6714),o=r(2479),i=r(7114);function NewAlimentoForm(){let e=(0,i.useRouter)();async function hundleCreateAlimento(t){t.preventDefault();let r=new FormData(t.currentTarget),s=r.get("fotoUrl"),n="";if(s){let e=new FormData;e.set("file",s);let t=await a.h.post("/upload",e);n=t.data.fileURL}let i=o.Z.get("token");await a.h.post("/alimentacao",{fotoUrl:n,nome:r.get("nome"),quando:r.get("quando")},{headers:{Authorization:`Bearer ${i}`}}),e.push("/inicio")}return s.jsx("div",{className:"mb-28 ",children:(0,s.jsxs)("form",{onSubmit:hundleCreateAlimento,className:"grid grid-rows-1 place-content-center gap-4 pt-5",children:[s.jsx("label",{htmlFor:"nome",children:"Nome"}),s.jsx("input",{type:"text",name:"nome",className:"rounded-full"}),s.jsx("label",{htmlFor:"",children:"Data"}),s.jsx("input",{className:"rounded-full",name:"quando",type:"datetime-local"}),s.jsx(n.K,{}),s.jsx("button",{type:"submit",className:"mt-16 mb-5 text-white-Light rounded-full bg-green-Dark",children:"Enviar"})]})})}},4459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>NewAlimento});var s=r(4656),a=r(5153);let n=(0,a.createProxy)(String.raw`/home/joice/Área de Trabalho/Bem-Estar/web/nextjs-blog/src/components/NewAlimentoForm.tsx`),{__esModule:o,$$typeof:i}=n;n.default;let l=n.NewAlimentoForm;function NewAlimento(){return(0,s.jsxs)("div",{children:[s.jsx("p",{className:"p-5 text-center text-xl",children:"Alimenta\xe7\xe3o"}),s.jsx("div",{className:"w-2/5 ml-96 bg-white-Normal",children:s.jsx(l,{})})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6,39,121,258,78,707,592],()=>__webpack_exec__(2799));module.exports=r})();