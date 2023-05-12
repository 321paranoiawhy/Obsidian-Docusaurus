"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Navigator.push",l={unversionedId:"Flutter-&-Dart/Flutter/\u8def\u7531",id:"Flutter-&-Dart/Flutter/\u8def\u7531",title:"Navigator.push",description:"Navigator.push",source:"@site/docs/Flutter-&-Dart/Flutter/\u8def\u7531.md",sourceDirName:"Flutter-&-Dart/Flutter",slug:"/Flutter-&-Dart/Flutter/\u8def\u7531",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Flutter/\u8def\u7531",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Flutter-&-Dart/Flutter/\u8def\u7531.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u5c4f\u5e55\u5bbd\u5ea6\u548c\u9ad8\u5ea6",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Flutter/\u5c4f\u5e55"},next:{title:"\u4fee\u6539\u5e94\u7528\u540d\u79f0",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Flutter/\u914d\u7f6e"}},p={},u=[{value:"\u8def\u7531\u8868",id:"\u8def\u7531\u8868",level:2},{value:"onUnknownRoute",id:"onunknownroute",level:2},{value:"\u8df3\u8f6c\u5177\u540d\u8def\u7531",id:"\u8df3\u8f6c\u5177\u540d\u8def\u7531",level:2},{value:"\u8fd4\u56de\u6307\u5b9a\u5177\u540d\u8def\u7531",id:"\u8fd4\u56de\u6307\u5b9a\u5177\u540d\u8def\u7531",level:2},{value:"\u5177\u540d\u8def\u7531\u4f20\u53c2",id:"\u5177\u540d\u8def\u7531\u4f20\u53c2",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigatorpush"},"Navigator.push"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Navigator/push.html"},"Navigator.push")),(0,r.kt)("p",null,"\u8df3\u8f6c\u81f3\u67d0\u4e00\u9875\u9762:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.push(context,\n        MaterialPageRoute(builder: (BuildContext buildContext) {\n    return const toPage();\n}));\n    ```\n\n```dart\n@optionalTypeArgs\nFuture<T?> push<T extends Object?>(\nBuildContext context,\nRoute<T> route\n)\n")),(0,r.kt)("p",null,"\u8df3\u8f6c\u8def\u7531\u5e76\u63a5\u6536\u5176\u8fd4\u56de\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void _getResult() async {\n  await Navigator.push(context,\n      MaterialPageRoute(builder: (BuildContext buildContext) {\n    return const toPage();\n  }));\n}\n")),(0,r.kt)("h1",{id:"navigatorpop"},"Navigator.pop"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Navigator/pop.html"},"Navigator.pop")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@optionalTypeArgs\nvoid pop<T extends Object?>(\nBuildContext context,\n[T? result]\n)\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e0a\u4e00\u7ea7\u9875\u9762:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.pop(context);\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9875\u9762\u6808\u4e2d\u4ec5\u5269\u5f53\u524d\u9875\u9762, \u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.pop(context)")," \u5c06\u9000\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"APP"),"\u3002")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e0a\u4e00\u7ea7\u9875\u9762\u540c\u65f6\u8fd4\u56de\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.pop(context, true);\n")),(0,r.kt)("h1",{id:"navigatorpages"},"Navigator.pages"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Navigator/pages.html"},"Navigator.pages")),(0,r.kt)("p",null,"\u83b7\u53d6\u8def\u7531\u6808 (\u540e\u8fdb\u5148\u51fa):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.pages;\n")),(0,r.kt)("h1",{id:"navigatorcanpop"},"Navigator.canPop"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Navigator/canPop.html"},"Navigator.canPop")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"bool canPop(\nBuildContext context\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"bool canPop = Navigator.canPop(context);\n")),(0,r.kt)("h1",{id:"\u8def\u7531\u8868\u548c\u5177\u540d\u8def\u7531"},"\u8def\u7531\u8868\u548c\u5177\u540d\u8def\u7531"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/cookbook/navigation/named-routes"},"Navigate with named routes"))),(0,r.kt)("h2",{id:"\u8def\u7531\u8868"},"\u8def\u7531\u8868"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/main.dart")," \u4e2d\u6309\u5982\u4e0b\u65b9\u5f0f\u5b9a\u4e49\u8def\u7531\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"MaterialApp(\n  title: 'Named Routes Demo',\n  // Start the app with the \"/\" named route. In this case, the app starts\n  // on the FirstScreen widget.\n  initialRoute: '/',\n  routes: {\n    // When navigating to the \"/\" route, build the FirstScreen widget.\n    '/': (context) => const FirstScreen(),\n    // When navigating to the \"/second\" route, build the SecondScreen widget.\n    '/second': (context) => const SecondScreen(),\n  },\n)\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"When using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"initialRoute"),",\xa0",(0,r.kt)("strong",{parentName:"p"},"don\u2019t"),"\xa0define a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"home"),"\xa0property.\n\u5f53\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRoute")," \u5c5e\u6027\u65f6, \u4e0d\u8981\u518d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," \u5c5e\u6027\u3002\n\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," \u5c5e\u6027\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRoute")," \u5c5e\u6027\u4f1a\u51b2\u7a81, \u9009\u62e9\u4e00\u4e2a\u5c5e\u6027\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"onunknownroute"},"onUnknownRoute"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," \u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u8def\u7531\u65f6, \u4f1a\u8df3\u8f6c\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"onUnknownRoute")," \u914d\u7f6e\u7684\u9875\u9762:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'onUnknownRoute: (RouteSettings setting) {\n    String name = setting.name;\n    print("onUnknownRoute: $name");\n    return new MaterialPageRoute(builder: (context) {\n        return new NotFoundPage();\n    });\n},\n')),(0,r.kt)("h2",{id:"\u8df3\u8f6c\u5177\u540d\u8def\u7531"},"\u8df3\u8f6c\u5177\u540d\u8def\u7531"),(0,r.kt)("p",null,"\u8df3\u8f6c\u81f3\u67d0\u4e00\u5177\u540d\u8def\u7531:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.pushNamed(context, '/second');\n")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u6307\u5b9a\u5177\u540d\u8def\u7531"},"\u8fd4\u56de\u6307\u5b9a\u5177\u540d\u8def\u7531"),(0,r.kt)("p",null,"\u8fd4\u56de\u81f3\u6307\u5b9a\u7684\u5177\u540d\u8def\u7531:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'Navigator.popUntil(context, ModalRoute.withName("/specificPage"));\n')),(0,r.kt)("h2",{id:"\u5177\u540d\u8def\u7531\u4f20\u53c2"},"\u5177\u540d\u8def\u7531\u4f20\u53c2"))}d.isMDXComponent=!0}}]);