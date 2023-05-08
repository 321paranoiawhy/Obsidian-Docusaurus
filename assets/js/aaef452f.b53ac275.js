"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"200. Create New next.js App","date created":"Wednesday, November 2nd 2022, 2:45:14 pm","date modified":"Wednesday, December 7th 2022, 9:55:08 pm"},i="200. Create New next.js App",p={unversionedId:"Frameworks/Nextjs/how to create-build-run a new app",id:"Frameworks/Nextjs/how to create-build-run a new app",title:"200. Create New next.js App",description:"Create New App",source:"@site/docs/Frameworks/Nextjs/200. how to create-build-run a new app.md",sourceDirName:"Frameworks/Nextjs",slug:"/Frameworks/Nextjs/how to create-build-run a new app",permalink:"/obsidian/docs/Frameworks/Nextjs/how to create-build-run a new app",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Frameworks/Nextjs/200. how to create-build-run a new app.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"200. Create New next.js App","date created":"Wednesday, November 2nd 2022, 2:45:14 pm","date modified":"Wednesday, December 7th 2022, 9:55:08 pm"},sidebar:"tutorialSidebar",previous:{title:"100. Intro to Next.js",permalink:"/obsidian/docs/Frameworks/Nextjs/Intro to Next.js"},next:{title:"300. Routing",permalink:"/obsidian/docs/Frameworks/Nextjs/Routing"}},l={},s=[{value:"Create New App",id:"create-new-app",level:2},{value:"Create with Typescript",id:"create-with-typescript",level:3},{value:"Add Typescript to Existing App",id:"add-typescript-to-existing-app",level:3},{value:"Build and Server Nextjs Production",id:"build-and-server-nextjs-production",level:2},{value:"Serving Options",id:"serving-options",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"200-create-new-nextjs-app"},"200. Create New next.js App"),(0,a.kt)("h2",{id:"create-new-app"},"Create New App"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app hello-world\nnpm run dev\n")),(0,a.kt)("h3",{id:"create-with-typescript"},"Create with Typescript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app hello-world --typescript\nnpm run dev\n")),(0,a.kt)("h3",{id:"add-typescript-to-existing-app"},"Add Typescript to Existing App"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd app_root\ntouch tsconfig.json\nnpm run dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The above last command(",(0,a.kt)("inlineCode",{parentName:"li"},"npm run dev"),") will install all the necessary libraries needed or install it yourself with the below code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D typescript @types/react @types/node\nnpm run dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"finally change any .js files to .ts")),(0,a.kt)("h2",{id:"build-and-server-nextjs-production"},"Build and Server Nextjs Production"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build #creates or update next folder\n")),(0,a.kt)("h3",{id:"serving-options"},"Serving Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suitable for all cases of next.js rendering",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"can be used in all cases of next.js {SSG,SSR,ISR, Client side fetching}"),(0,a.kt)("li",{parentName:"ul"},"Requires node.js server")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nnpm run start #next start\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if your applications is using SSG or Client side fetching only",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"==cannot be used in ISR or SSR=="),(0,a.kt)("li",{parentName:"ul"},"exports all your pages to static HTML files that you can serve without the need of a node.js server")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nnext export\n#then point the static server to index.html or main html page\n")))}d.isMDXComponent=!0}}]);