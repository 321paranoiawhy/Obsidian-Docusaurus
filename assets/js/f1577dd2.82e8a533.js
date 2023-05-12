"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const p={},o="Python SimpleHTTPServer",l={unversionedId:"HTTP/Server",id:"HTTP/Server",title:"Python SimpleHTTPServer",description:"- Python SimpleHTTPServer - Python HTTP Server",source:"@site/docs/HTTP/Server.md",sourceDirName:"HTTP",slug:"/HTTP/Server",permalink:"/Obsidian-Docusaurus/docs/HTTP/Server",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/HTTP/Server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fetch",permalink:"/Obsidian-Docusaurus/docs/HTTP/POST"},next:{title:"Slang-in-English",permalink:"/Obsidian-Docusaurus/docs/Interest/Slang-in-English"}},i={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-simplehttpserver"},"Python SimpleHTTPServer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/python-simplehttpserver-http-server"},"Python SimpleHTTPServer - Python HTTP Server"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8000")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"python 3")," \u4ee5\u524d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"python -m SimpleHTTPServer 9000\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!error]","\n\u5982\u679c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"python 3")," \u4ee5\u540e\u8fd0\u884c\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u62a5\u9519\u5982\u4e0b:\nNo module named SimpleHTTPServer")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"python 3"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m http.server 9000\n")),(0,a.kt)("h1",{id:"node-http-server"},"Node http-server"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-server"},"http-server")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install http-server -g\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http-server -c-1 -p 9000\n")),(0,a.kt)("h1",{id:"dart-dhttpd"},"Dart dhttpd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pub.flutter-io.cn/packages/dhttpd"},"dhttpd")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dhttpd --path build/web/\n")),(0,a.kt)("h1",{id:"rust-miniserver"},"Rust miniserver"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/svenstaro/miniserve"},"miniserver")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")))}m.isMDXComponent=!0}}]);