(()=>{var e={};e.id=744,e.ids=[744],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6740:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(7096),i=r(6132),a=r(7284),o=r.n(a),n=r(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["alimentacao",{children:["edit",{children:["[edit]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3127)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/alimentacao/edit/[edit]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4631)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],c=["/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/alimentacao/edit/[edit]/page.tsx"],u="/alimentacao/edit/[edit]/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/alimentacao/edit/[edit]/page",pathname:"/alimentacao/edit/[edit]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3136:(e,t,r)=>{Promise.resolve().then(r.bind(r,9384))},9384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EditAlimentoForm:()=>EditAlimentoForm});var s=r(784),i=r(7114),a=r(2479),o=r(5035),n=r(6714);function EditAlimentoForm(){let e=(0,i.useRouter)(),t=(0,i.useParams)(),r=a.Z.get("token");async function hundleEditAlimento(s){s.preventDefault();let i=new FormData(s.currentTarget),a=i.get("fotoUrl"),n="";if(a){let e=new FormData;e.set("file",a);let t=await o.h.post("/upload",e);n=t.data.fileURL}await o.h.put(`alimentacao/edit/${t.edit}`,{fotoUrl:n,nome:i.get("nome"),quando:i.get("quando")},{headers:{Authorization:`Bearer ${r}`}}),e.push("/alimentacao/view")}return(0,s.jsxs)("form",{className:"grid grid-rows-1 place-content-center gap-4 pt-5",onSubmit:hundleEditAlimento,children:[s.jsx("label",{htmlFor:"",children:"Nome:"}),s.jsx("input",{name:"nome",type:"text",className:"rounded-md"}),s.jsx("label",{htmlFor:"",children:"Data:"}),s.jsx("input",{name:"quando",type:"datetime-local",className:"rounded-md"}),s.jsx("label",{htmlFor:"",children:"Anexar Imagem"}),s.jsx(n.K,{}),s.jsx("button",{type:"submit",className:"my-5 text-white-Light rounded-md bg-green-Dark",children:"Enviar"})]})}},3127:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>EditAlimento});var s=r(4656),i=r(5153);let a=(0,i.createProxy)(String.raw`/home/joice/Área de Trabalho/Bem-Estar/web/nextjs-blog/src/components/EditAlimentoForm.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let l=a.EditAlimentoForm;async function EditAlimento(){return(0,s.jsxs)("div",{children:[s.jsx("p",{className:"p-5 text-center text-xl",children:"Editar Alimenta\xe7\xe3o"}),s.jsx("div",{className:"w-2/5 ml-96 bg-white-Normal",children:s.jsx(l,{})})]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6,39,121,258,78,707,592],()=>__webpack_exec__(6740));module.exports=r})();