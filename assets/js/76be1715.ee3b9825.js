"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"HTTP/CORS",id:"HTTP/CORS",title:"CORS",description:"JSONP",source:"@site/docs/HTTP/CORS.md",sourceDirName:"HTTP",slug:"/HTTP/CORS",permalink:"/Obsidian-Docusaurus/docs/HTTP/CORS",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/HTTP/CORS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"APIDOC",permalink:"/Obsidian-Docusaurus/docs/HTTP/API-Doc"},next:{title:"\u7981\u7528\u7f13\u5b58",permalink:"/Obsidian-Docusaurus/docs/HTTP/GET"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#CORS #JSONP"),(0,o.kt)("h1",{id:"jsonp"},(0,o.kt)("inlineCode",{parentName:"h1"},"JSONP")),(0,o.kt)("h1",{id:"fetch-jsonp"},(0,o.kt)("inlineCode",{parentName:"h1"},"Fetch JSONP")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/camsong/fetch-jsonp"},"Fetch JSONP"))),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u540c ",(0,o.kt)("inlineCode",{parentName:"p"},"JSONP")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"Fetch JSONP")," \u4e5f\u53ea\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u3002")),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const GistURL = "https://gist.github.com/5149b8848cb05f20efbc21fa750d7d2e.json";\n \nconst fetchGist = async (url: string) => {\n    const response = await fetchJSONP(url);\n    console.log("response", response, response.ok);\n    if (response.ok) {\n        const result: GistResponse = await response.json();\n        console.log("result", result);\n    } else {\n    \xa0 \xa0 console.log("error");\n    }\n};\n\nfetchGist(GistURL);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gist"},"5149b8848cb05f20efbc21fa750d7d2e\n")))}f.isMDXComponent=!0}}]);