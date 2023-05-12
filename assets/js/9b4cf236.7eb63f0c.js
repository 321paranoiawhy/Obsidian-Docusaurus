"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},l="parse",o={unversionedId:"Flutter-&-Dart/Dart/DateTime/DateTime",id:"Flutter-&-Dart/Dart/DateTime/DateTime",title:"parse",description:"parse static method",source:"@site/docs/Flutter-&-Dart/Dart/DateTime/DateTime.md",sourceDirName:"Flutter-&-Dart/Dart/DateTime",slug:"/Flutter-&-Dart/Dart/DateTime/",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/DateTime/",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Flutter-&-Dart/Dart/DateTime/DateTime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dart \u5b9e\u73b0",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/Collection/shuffle"},next:{title:"JSON",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Dart/JSON/"}},p={},c=[{value:"<code>showDateRangePicker</code>",id:"showdaterangepicker",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parse"},(0,n.kt)("inlineCode",{parentName:"h1"},"parse")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/DateTime/parse.html"},"parse static method")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime parse(String formattedString)\n")),(0,n.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'// \u7ed3\u679c\u5747\u4e3a DateTime \u6807\u51c6\u683c\u5f0f 2023-01-06 00:00:00.000\nDateTime.parse("2023-01-06");\nDateTime.parse("20230106");\nDateTime.parse("+20230106");\n\nDateTime.parse("2023-01-06 00:00:00");\nDateTime.parse("2023-01-06 00:00:00.000");\n')),(0,n.kt)("h1",{id:"tryparse"},(0,n.kt)("inlineCode",{parentName:"h1"},"tryParse")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/DateTime/tryParse.html"},"tryParse static method")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime? tryParse(String formattedString)\n")),(0,n.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime"),", \u5982\u679c\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u6709\u9519\u8bef\u5219\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"static DateTime? tryParse(String formattedString) { \n// TODO: Optimize to avoid throwing. \n    try { \n        return parse(formattedString); \n    } on FormatException { \n        return null; \n    } \n}\n")),(0,n.kt)("h1",{id:"millisecondssinceepoch"},(0,n.kt)("inlineCode",{parentName:"h1"},"millisecondsSinceEpoch")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/DateTime/millisecondsSinceEpoch.html"},"millisecondsSinceEpoch property")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"external int get millisecondsSinceEpoch;\n")),(0,n.kt)("p",null,"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime")," \u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Unix")," \u6beb\u79d2\u65f6\u95f4\u6233:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'DateTime.parse("2023-01-06").millisecondsSinceEpoch; // 1672934400000\n')),(0,n.kt)("p",null,"\u4e0e\u4e4b\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"microsecondsSinceEpoch"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'DateTime.parse("2023-01-06").microsecondsSinceEpoch; // 1672934400000000\n')),(0,n.kt)("h1",{id:"frommillisecondssinceepoch"},(0,n.kt)("inlineCode",{parentName:"h1"},"fromMillisecondsSinceEpoch")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/DateTime/DateTime.fromMillisecondsSinceEpoch.html"},"DateTime.fromMillisecondsSinceEpoch\xa0constructor")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime.fromMillisecondsSinceEpoch(\n    int millisecondsSinceEpoch,\n    {bool isUtc = false}\n)\n")),(0,n.kt)("p",null,"\u5c06\u6beb\u79d2\u65f6\u95f4\u6233\u8f6c\u6210 ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime.fromMillisecondsSinceEpoch(1672934400000); // 2023-01-06 00:00:00.000\n")),(0,n.kt)("p",null,"\u4e0e\u4e4b\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"fromMicrosecondsSinceEpoch"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime.fromMillisecondsSinceEpoch(1672934400000000); // 2023-01-06 00:00:00.000\n")),(0,n.kt)("h1",{id:"datetimerange"},(0,n.kt)("inlineCode",{parentName:"h1"},"DateTimeRange")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTimeRange({\n    required this.start,\n    required this.end, \n}) : assert(start != null),\n     assert(end != null),\n     assert(!start.isAfter(end));\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'DateTimeRange dateTimeRange = DateTimeRange("2023-01-06", "2023-01-07");\ndateTimeRange.start; // \ndateTimeRange.end; // \n')),(0,n.kt)("h2",{id:"showdaterangepicker"},(0,n.kt)("inlineCode",{parentName:"h2"},"showDateRangePicker")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/material/showDateRangePicker.html"},"showDateRangePicker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/flutter-taipei/%E4%BE%86%E5%90%A7-flutter-12-datepicker-daterangepicker-timepicker-f3c5ac473865"},"DatePicker, DateRangePicker, TimePicker"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTimeRange? range = await showDateRangePicker(\n    context: context,\n    initialDate: DateTime.now(), // \u521d\u59cb\u65f6\u95f4\n    firstDate: DateTime(2023, 01), // \u5f00\u59cb\u65f6\u95f4, \u4e0d\u80fd\u9009\u62e9\u6b64\u524d\u7684\u65f6\u95f4\n    lastDate: DateTime(2100, 12) // \u7ed3\u675f\u65f6\u95f4, \u4e0d\u80fd\u9009\u62e9\u6b64\u540e\u7684\u65f6\u95f4\n);\n")))}u.isMDXComponent=!0}}]);