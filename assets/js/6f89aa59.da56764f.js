"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Object is possibly 'null'.",p={unversionedId:"TypeScript/Snippets",id:"TypeScript/Snippets",title:"Object is possibly 'null'.",description:"- What's the Return Type for setTimeout() in Typescript",source:"@site/docs/TypeScript/Snippets.md",sourceDirName:"TypeScript",slug:"/TypeScript/Snippets",permalink:"/Obsidian-Docusaurus/docs/TypeScript/Snippets",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/TypeScript/Snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u671f\u9009\u62e9\u5668",permalink:"/Obsidian-Docusaurus/docs/Tools/\u7ec4\u4ef6\u5e93"},next:{title:"First of Array",permalink:"/Obsidian-Docusaurus/docs/TypeScript/Type-Challenges"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-is-possibly-null"},"Object is possibly 'null'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const element = document.querySelector<HTMLElement>('.element');\n// 1. if\nif(element !== null) {\n    element.style.color = 'red';\n}\n\n// 2. TS !. \u975e\u7a7a\u65ad\u8a00\nelement!.style.color = 'red';\n\n// 3. &&\nelement && (element!.style.color = 'red');\n")),(0,a.kt)("h1",{id:"setinterval-type"},"setInterval Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://bobbyhadz.com/blog/typescript-settimeout-type"},"What's the Return Type for setTimeout() in Typescript"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript/issues/1053"},"setInterval - Type 'Timer' is not assignable to type 'number' #1053"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setInterval")," \u5176\u8fd4\u56de\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeJS.Timer"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/010a8de/types/node/timers.d.ts#L73-L76"},"\u6e90\u7801"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.setInterval")," \u5176\u8fd4\u56de\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", \u4f46\u4f1a\u5728\u670d\u52a1\u7aef\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR (Server Side Render)")," \u51fa\u73b0\u95ee\u9898"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setInterval, clearInterval } from 'timers';\n\n// \u81ea\u52a8\u63a8\u65ad\u4e3a NodeJS.Timer\nconst nodeInterval = setInterval(() => {\n  // do something\n}, 1000);\n\nclearInterval(nodeInterval);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const windowInterval: number = window.setInterval(() => {\n  // do something\n}, 1000);\n\nclearInterval(windowInterval);\n")),(0,a.kt)("p",null,"\u6216\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ReturnType")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"typeof"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const nodeInterval: ReturnType<typeof setInterval> = setInterval(() => {\n  // do something\n}, 1000);\n")),(0,a.kt)("admonition",{title:"Go to Type Definition",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"VS Code")," \u4e2d\u53f3\u952e ",(0,a.kt)("inlineCode",{parentName:"p"},"setInterval")," \u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Go to Type Definition")," \u5373\u53ef\u8df3\u8f6c\u81f3\u7c7b\u578b\u5b9a\u4e49\u6e90\u6587\u4ef6\u3002")))}m.isMDXComponent=!0}}]);