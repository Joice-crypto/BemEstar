(()=>{var e={};e.id=156,e.ids=[156],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},394:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(7096),o=r(6132),n=r(7284),a=r.n(n),l=r(2564),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let c=["",{children:["sono",{children:["delete",{children:["[delete]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,675)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/sono/delete/[delete]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4631)),"/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/home/joice/\xc1rea de Trabalho/Bem-Estar/web/nextjs-blog/src/app/sono/delete/[delete]/page.tsx"],u="/sono/delete/[delete]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/sono/delete/[delete]/page",pathname:"/sono/delete/[delete]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6529:(e,t,r)=>{Promise.resolve().then(r.bind(r,7732))},7732:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>DeleteSono});var s=r(784),o=r(2479),n=r(7114);function DeleteSono(){let e=(0,n.useRouter)(),t=(0,n.useParams)(),r=o.Z.get("token");async function DeleteS(s){s.preventDefault(),await fetch(`http://localhost:3333/sono/${t.delete}`,{headers:{Authorization:`Bearer ${r}`},next:{revalidate:30}}),alert("Item excluido com sucesso!"),e.push("/sono/view")}return(0,s.jsxs)("div",{children:[s.jsx("p",{className:"p-5 mt-6 text-center text-xl",children:"Excluir Sono"}),s.jsx("div",{className:"flex justify-center mt-2",children:(0,s.jsxs)("form",{onSubmit:DeleteS,children:[s.jsx("p",{className:"pl-10",children:"Tem certeza que deseja exlcuir?"}),s.jsx("button",{type:"submit",className:"bg-red-500 w-28 mb-64 mr-5 h-6 mt-10 text-white-Light",children:"Excluir"}),(0,s.jsxs)("a",{href:"/sono/view",children:[" ",s.jsx("button",{type:"button",className:"bg-green-500 w-36 mb-64 h-6 mt-10 text-white-Light",children:"Voltar ao Inicio"})]})]})})]})}},675:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});var s=r(5153);let o=(0,s.createProxy)(String.raw`/home/joice/Área de Trabalho/Bem-Estar/web/nextjs-blog/src/app/sono/delete/[delete]/page.tsx`),{__esModule:n,$$typeof:a}=o,l=o.default,i=l}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6,39,121,707],()=>__webpack_exec__(394));module.exports=r})();