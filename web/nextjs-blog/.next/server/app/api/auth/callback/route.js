"use strict";(()=>{var e={};e.id=292,e.ids=[292],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9491:e=>{e.exports=require("assert")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},3275:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>x,originalPathname:()=>q,requestAsyncStorage:()=>n,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var a={};t.r(a),t.d(a,{GET:()=>GET}),t(8976);var o=t(884),i=t(6132),s=t(7787);let u=s.Z.create({baseURL:"0.0.0.0:8080"});var p=t(5798);async function GET(e){let{searchParams:r}=new URL(e.url),t=r.get("code"),a=e.cookies.get("redirectTo")?.value,o=await u.post("/register",{code:t}),{token:i}=o.data,s=a??new URL("https://clownfish-app-3x9ir.ondigitalocean.app/inicio",e.url);return p.Z.redirect(s,{headers:{"Set-cookie":`token=${i}; Path=/; max-age=2592000`}})}let c=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/auth/callback/route",pathname:"/api/auth/callback",filename:"route",bundlePath:"app/api/auth/callback/route"},resolvedPagePath:"/home/joice/\xc1rea de Trabalho/BemEstar/BemEstar/web/nextjs-blog/src/app/api/auth/callback/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:n,staticGenerationAsyncStorage:l,serverHooks:d,headerHooks:x,staticGenerationBailout:h}=c,q="/api/auth/callback/route"}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[6,550,787],()=>__webpack_exec__(3275));module.exports=t})();