"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,u={unversionedId:"Flutter-&-Dart/Dart/All-about-the-Function-in-dart",id:"Flutter-&-Dart/Dart/All-about-the-Function-in-dart",title:"All-about-the-Function-in-dart",description:"Functions - dart.dev",source:"@site/docs/Flutter-&-Dart/Dart/All-about-the-Function-in-dart.md",sourceDirName:"Flutter-&-Dart/Dart",slug:"/Flutter-&-Dart/Dart/All-about-the-Function-in-dart",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Function-in-dart",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Flutter-&-Dart/Dart/All-about-the-Function-in-dart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Class-in-dart"},next:{title:"String \u2194 int / double",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Type-Cast-in-dart"}},i={},c=[{value:"\u666e\u901a\u51fd\u6570",id:"\u666e\u901a\u51fd\u6570",level:2},{value:"\u7bad\u5934\u51fd\u6570 (<code>arrow syntax</code>)",id:"\u7bad\u5934\u51fd\u6570-arrow-syntax",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/guides/language/language-tour#functions"},"Functions - dart.dev"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/2.18.5/dart-core/Function-class.html"},"Function class - api.dart.dev")),(0,a.kt)("h1",{id:"\u57fa\u672c\u7ed3\u6784"},"\u57fa\u672c\u7ed3\u6784"),(0,a.kt)("h2",{id:"\u666e\u901a\u51fd\u6570"},"\u666e\u901a\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// \u5224\u65ad\u8f93\u5165\u53c2\u6570\u662f\u5426\u4e3a null\nbool isNull(dynamic parameter) {\n    return parameter == null;\n}\n// \u4e0a\u9762\u7684 bool \u548c dynamic \u7c7b\u578b\u6807\u6ce8\u53ef\u7701\u7565, dart \u4f1a\u81ea\u52a8\u63a8\u65ad\u5176\u7c7b\u578b\nisNull(parameter) {\n    return parameter == null;\n}\n")),(0,a.kt)("p",null,"\u7c7b\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"function isNull(parameter) {\n    return parameter === null;\n}\n")),(0,a.kt)("h2",{id:"\u7bad\u5934\u51fd\u6570-arrow-syntax"},"\u7bad\u5934\u51fd\u6570 (",(0,a.kt)("inlineCode",{parentName:"h2"},"arrow syntax"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// \u5224\u65ad\u8f93\u5165\u53c2\u6570\u662f\u5426\u4e3a null\nbool isNull(dynamic parameter) => parameter == null;\n")),(0,a.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u662f\u4e00\u79cd\u7b80\u5199\u8bed\u6cd5, \u7bad\u5934\u51fd\u6570\u5185\u53ea\u80fd\u6709\u4e00\u4e2a\u8bed\u53e5 (",(0,a.kt)("inlineCode",{parentName:"p"},"experssion"),") \u800c\u4e0d\u80fd\u662f\u4e00\u4e2a\u5757 (",(0,a.kt)("inlineCode",{parentName:"p"},"statement"),"), \u4ee5\u4e0b\u5199\u6cd5\u6709\u8bef:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// A value of type 'Set<bool>' can't be returned from the function 'isNull'\n// because it has a return type of 'bool'.\nbool isNull(dynamic parameter) => {\n    return parameter == null;\n}\n")),(0,a.kt)("p",null,"\u7c7b\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// \u7701\u7565\u5927\u62ec\u53f7\nconst isNull = (parameter) => parameter === null;\n// \u4e0d\u7701\u7565\u5927\u62ec\u53f7\nconst isNull = (parameter) => {\n    return parameter === null;\n}\n")))}d.isMDXComponent=!0}}]);