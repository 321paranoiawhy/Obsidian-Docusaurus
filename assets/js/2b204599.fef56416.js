"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={title:"800. Styling","date created":"Thursday, November 24th 2022, 2:58:06 pm","date modified":"Thursday, November 24th 2022, 3:41:28 pm"},o="800. Styling",s={unversionedId:"Frameworks/Nextjs/Styling",id:"Frameworks/Nextjs/Styling",title:"800. Styling",description:"- Different options to styling",source:"@site/docs/Frameworks/Nextjs/800. Styling.md",sourceDirName:"Frameworks/Nextjs",slug:"/Frameworks/Nextjs/Styling",permalink:"/Obsidian-Docusaurus/docs/Frameworks/Nextjs/Styling",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Frameworks/Nextjs/800. Styling.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{title:"800. Styling","date created":"Thursday, November 24th 2022, 2:58:06 pm","date modified":"Thursday, November 24th 2022, 3:41:28 pm"},sidebar:"tutorialSidebar",previous:{title:"700. API Routes",permalink:"/Obsidian-Docusaurus/docs/Frameworks/Nextjs/API routes"},next:{title:"900. More on Nextjs",permalink:"/Obsidian-Docusaurus/docs/Frameworks/Nextjs/More on nextjs"}},i={},u=[{value:"Global Styles",id:"global-styles",level:2},{value:"Component Level Styles",id:"component-level-styles",level:2},{value:"CSS-in-JS",id:"css-in-js",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"800-styling"},"800. Styling"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Different options to styling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Global styles"),(0,l.kt)("li",{parentName:"ul"},"Component styles"),(0,l.kt)("li",{parentName:"ul"},"SASS or SCSS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nextjs by default supports SASS, all you need to do is install the library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/built-in-css-support#sass-support"},"sass-support")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/_14sPRuHcYw?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH"},"SASS-support video")))),(0,l.kt)("li",{parentName:"ul"},"CSS-in-JS")))),(0,l.kt)("h2",{id:"global-styles"},"Global Styles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"by default defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"styles->global.css"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"global styles must be imported in ",(0,l.kt)("inlineCode",{parentName:"li"},"_app.js")," to work")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import '../styles/globals.css'\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}\n\nexport default MyApp\n")),(0,l.kt)("h2",{id:"component-level-styles"},"Component Level Styles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"styles that only apply to components and won't conflict with one another"),(0,l.kt)("li",{parentName:"ul"},"usually named ",(0,l.kt)("inlineCode",{parentName:"li"},"component.module.css"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:"about.module.css","about.module.css":!0},".highlighted{\n    border-bottom: 2px solid yellow;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"about.js","about.js":!0},"import styles from '../styles/about.module.css';\n\nfunction About() {\n    return <h2 className={styles.highlighted}>About us page here</h2>\n}\n\nexport default About;\n")),(0,l.kt)("h2",{id:"css-in-js"},"CSS-in-JS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inline styles")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function About(){\n    return <h2 style={{color: 'red'}}>Hello this is ... </h2>\n}\nexport default About;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More popular options",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js"},"Nextjs css-in-js")," ex: styles-components")))))}m.isMDXComponent=!0}}]);