"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},i="Object",o={unversionedId:"Flutter-&-Dart/Dart/All-about-the-Class-in-dart",id:"Flutter-&-Dart/Dart/All-about-the-Class-in-dart",title:"Object",description:"* \u8d85\u7ea7\u7236\u7c7b Object: \u6240\u6709 \u7c7b \u90fd\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u81ea Object;",source:"@site/docs/Flutter-&-Dart/Dart/All-about-the-Class-in-dart.md",sourceDirName:"Flutter-&-Dart/Dart",slug:"/Flutter-&-Dart/Dart/All-about-the-Class-in-dart",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Class-in-dart",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Flutter-&-Dart/Dart/All-about-the-Class-in-dart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Numbers",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-Types-in-dart"},next:{title:"All-about-the-Function-in-dart",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Function-in-dart"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"object"},(0,n.kt)("inlineCode",{parentName:"h1"},"Object")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d85\u7ea7\u7236\u7c7b ",(0,n.kt)("inlineCode",{parentName:"li"},"Object"),": \u6240\u6709 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u7c7b")," \u90fd\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u81ea ",(0,n.kt)("inlineCode",{parentName:"li"},"Object"),";"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u5207\u7686\u5bf9\u8c61;")),(0,n.kt)("h1",{id:"\u83b7\u53d6\u5bf9\u8c61\u7c7b\u578b"},"\u83b7\u53d6\u5bf9\u8c61\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"List list = [];\nlist.runtimeType; // List<dynamic>\n")),(0,n.kt)("h1",{id:"callable-class"},"Callable Class"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dart.dev/guides/language/language-tour#callable-classes"},"Callable classes - dart.dev")),(0,n.kt)("p",null,"Implement ",(0,n.kt)("inlineCode",{parentName:"p"},"call()")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'class CallableClass {\n    String call(String a, String b, String c) => "$a $b $c!";\n}\n\nvoid main() => print(CallableClass()("Hi", "there", "dart"));\n')))}d.isMDXComponent=!0}}]);