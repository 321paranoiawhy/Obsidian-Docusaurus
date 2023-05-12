"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8843],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={},l="Numbers",o={unversionedId:"Flutter-&-Dart/Dart/All-about-Types-in-dart",id:"Flutter-&-Dart/Dart/All-about-Types-in-dart",title:"Numbers",description:"Numbers \u53ef\u7531 num \u3001 int \u548c double \u5b9a\u4e49, \u5176\u4e2d num \u5305\u542b int \u6574\u5f62 \u548c double \u6d6e\u70b9\u6570\u4e24\u79cd\u7c7b\u578b:",source:"@site/docs/Flutter-&-Dart/Dart/All-about-Types-in-dart.md",sourceDirName:"Flutter-&-Dart/Dart",slug:"/Flutter-&-Dart/Dart/All-about-Types-in-dart",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-Types-in-dart",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Flutter-&-Dart/Dart/All-about-Types-in-dart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/Obsidian-Docusaurus/docs/Docker/\u6570\u636e\u6301\u4e45\u5316"},next:{title:"Object",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/All-about-the-Class-in-dart"}},p={},u=[],s={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"numbers"},(0,a.kt)("inlineCode",{parentName:"h1"},"Numbers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Numbers")," \u53ef\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"double")," \u5b9a\u4e49, \u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," \u6574\u5f62 \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"double")," \u6d6e\u70b9\u6570\u4e24\u79cd\u7c7b\u578b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"num a = 1;\nint b = 1;\ndouble c = 1.0;\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"int")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"double")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u7684\u5b50\u7c7b\u3002")),(0,a.kt)("h1",{id:"string"},(0,a.kt)("inlineCode",{parentName:"h1"},"String")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"String a = 'a';\nString b = \"b\";\n\nString c = 'c\"c\"';\nString d = 'd\"d\"';\n// \u591a\u884c\u5b57\u7b26\u4e32\nString e = '''\ne\ne\n''';\nString f = \"\"\"\nf\nf\n\"\"\";\n")),(0,a.kt)("h1",{id:"bool"},(0,a.kt)("inlineCode",{parentName:"h1"},"bool")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bool")," \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"bool a = true;\nbool b = false;\n")),(0,a.kt)("h1",{id:"list"},(0,a.kt)("inlineCode",{parentName:"h1"},"List")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"List list = [1, 2, 3];\nlist is List; // true\n")),(0,a.kt)("h1",{id:"map"},(0,a.kt)("inlineCode",{parentName:"h1"},"Map")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'Map map = {\n    "name": "unknown",\n};\nmap is Map; // true\n')),(0,a.kt)("h1",{id:"set"},(0,a.kt)("inlineCode",{parentName:"h1"},"Set")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Set")," \u7c7b\u4f3c\u6570\u5b66\u4e2d\u7684\u96c6\u5408, \u5176\u5143\u7d20\u4e0d\u53ef\u91cd\u590d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'Set<String> set = {"name", "age"};\n')),(0,a.kt)("h1",{id:"queue"},(0,a.kt)("inlineCode",{parentName:"h1"},"Queue")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:collection';\n")),(0,a.kt)("h1",{id:"symbol"},(0,a.kt)("inlineCode",{parentName:"h1"},"Symbol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'// # \u7b26\u53f7\u58f0\u660e, \u81ea\u52a8\u8f6c\u6362\u4e3a Symbol\n#symbolOne;\n#symbolOne is Symbol; // true\nSymbol symbolTwo = Symbol("symbolTwo");\nsymbolTwo is Symbol; // true\n')),(0,a.kt)("h1",{id:"enum"},(0,a.kt)("inlineCode",{parentName:"h1"},"Enum")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'enum Status { \n   none, \n   running, \n   stopped, \n   paused \n}\n\n// \u83b7\u53d6 running \u7684\u7d22\u5f15\nStatus.running.index; // 1\n// \u83b7\u53d6\u6240\u6709\u679a\u4e3e\u503c\nStatus.values; // [Status.none, Status.running, Status.stopped, Status.paused]\nStatus.values is List; // true\n\nvar running = Status.running;\nswitch(running) {\n    case none: print("none");\n    break;\n    case running: print("running");\n    break;\n    case stopped: print("stopped");\n    break;\n    case paused: print("paused");\n    break;\n} // running\n')),(0,a.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u6709\u5982\u4e0b\u9650\u5236:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5b50\u7c7b\u5316 (",(0,a.kt)("inlineCode",{parentName:"li"},"subclass"),")\uff0c\u6df7\u5408 (",(0,a.kt)("inlineCode",{parentName:"li"},"mixin"),") \u6216\u5b9e\u73b0 (",(0,a.kt)("inlineCode",{parentName:"li"},"implement"),") \u679a\u4e3e;"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u663e\u5f0f\u5b9e\u4f8b\u5316\u4e00\u4e2a\u679a\u4e3e\u7c7b\u3002")),(0,a.kt)("h1",{id:"\u7c7b\u578b\u68c0\u67e5"},"\u7c7b\u578b\u68c0\u67e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"int a = 1;\n// is\nprint(a is int); // true\n// is !\nprint(a is !String); // true\n")))}d.isMDXComponent=!0}}]);