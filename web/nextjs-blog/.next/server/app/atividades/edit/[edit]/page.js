(()=>{var e={};e.id=407,e.ids=[407],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6094:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>d.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>x,tree:()=>c});var i=r(7096),s=r(6132),a=r(7284),d=r.n(a),o=r(2564),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(t,n);let c=["",{children:["atividades",{children:["edit",{children:["[edit]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4874)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/atividades/edit/[edit]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4631)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],l=["/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/atividades/edit/[edit]/page.tsx"],u="/atividades/edit/[edit]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/atividades/edit/[edit]/page",pathname:"/atividades/edit/[edit]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3663:(e,t,r)=>{Promise.resolve().then(r.bind(r,5749))},5749:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EditAtividadeForm:()=>EditAtividadeForm});var i=r(784),s=r(5035),a=r(2479),d=r(7114);function EditAtividadeForm(){let e=(0,d.useRouter)(),t=(0,d.useParams)(),r=a.Z.get("token");async function handleEditAtividade(i){i.preventDefault();let a=new FormData(i.currentTarget);await s.h.put(`/atividades/edit/${t.edit}`,{nome:a.get("nome"),quando:a.get("quando"),descricao:a.get("descricao")},{headers:{Authorization:`Bearer ${r}`}}),e.push("/atividades/view")}return i.jsx("div",{children:(0,i.jsxs)("form",{className:"grid grid-rows-1 place-content-center gap-4 pt-5",onSubmit:handleEditAtividade,children:[i.jsx("label",{htmlFor:"",children:"Nome da Atividade:"}),i.jsx("input",{className:"rouded-md",name:"nome",type:"text"}),i.jsx("label",{htmlFor:"",children:"Quando"}),i.jsx("input",{className:"rouded-md",name:"quando",type:"datetime-local"}),i.jsx("label",{htmlFor:"",children:"Descri\xe7\xe3o:"}),i.jsx("input",{className:"rouded-md",name:"descricao",type:"text"}),i.jsx("button",{type:"submit",className:"my-5 text-white-Light rounded-md bg-green-Dark",children:"Enviar"})]})})}r(9885)},5035:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});var i=r(3258);let s=i.Z.create({baseURL:"http://localhost:3333"})},4874:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>EditAtividade});var i=r(4656),s=r(5153);let a=(0,s.createProxy)(String.raw`/home/joice/Área de Trabalho/Bem-Estar/web/nextjs-blog/src/components/EditAtividadeForm.tsx`),{__esModule:d,$$typeof:o}=a;a.default;let n=(0,s.createProxy)(String.raw`/home/joice/Área de Trabalho/Bem-Estar/web/nextjs-blog/src/components/EditAtividadeForm.tsx#EditAtividadeForm`);async function EditAtividade(){return(0,i.jsxs)("div",{children:[i.jsx("p",{className:"p-5 text-center text-xl",children:" Editar Atividade Fisica"}),i.jsx("div",{className:"w-2/5 ml-96 bg-white-Normal",children:i.jsx(n,{})})]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6,340,371,707],()=>__webpack_exec__(6094));module.exports=r})();