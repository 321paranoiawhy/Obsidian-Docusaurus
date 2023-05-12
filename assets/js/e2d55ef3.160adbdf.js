"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9845],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return t?r.createElement(d,p(p({ref:n},c),{},{components:t})):r.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},p="Vue 3",i={unversionedId:"Vue/Snippets",id:"Vue/Snippets",title:"Vue 3",description:"\u6302\u8f7d\u5168\u5c40\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u7ec4\u4ef6",source:"@site/docs/Vue/Snippets.md",sourceDirName:"Vue",slug:"/Vue/Snippets",permalink:"/Obsidian-Docusaurus/docs/Vue/Snippets",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Vue/Snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$event",permalink:"/Obsidian-Docusaurus/docs/Vue/$event"},next:{title:"nextTick",permalink:"/Obsidian-Docusaurus/docs/Vue/nextTick"}},l={},u=[{value:"\u6302\u8f7d\u5168\u5c40\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u7ec4\u4ef6",id:"\u6302\u8f7d\u5168\u5c40\u5c5e\u6027\u65b9\u6cd5\u548c\u7ec4\u4ef6",level:2}],c={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue-3"},"Vue 3"),(0,o.kt)("h2",{id:"\u6302\u8f7d\u5168\u5c40\u5c5e\u6027\u65b9\u6cd5\u548c\u7ec4\u4ef6"},"\u6302\u8f7d\u5168\u5c40\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from 'vue'\nimport App from './App.vue'\nconst app = createApp(App)\n\nimport GlobalComponent from '@/components/GlobalComponent.vue'\n\n// \u6302\u8f7d\u5168\u5c40\u5c5e\u6027\napp.config.globalProperties.$globalName = 'I am a global name.'\n\n//\u6302\u8f7d\u5168\u5c40\u65b9\u6cd5\napp.config.globalProperties.$globalMethod = () => {\n    console.log('I am a global anonymous function')\n}\n\n// \u6302\u8f7d\u5168\u5c40\u7ec4\u4ef6\n// https://vuejs.org/guide/components/registration.html#global-registration\napp.component('GlobalComponent', GlobalComponent)\n\napp.mount('#app')\n")),(0,o.kt)("p",null,"\u83b7\u53d6\u5168\u5c40\u5c5e\u6027\u548c\u65b9\u6cd5:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"example.vue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<script setup lang='ts'>\nimport { getCurrentInstance } from \"vue\";\n\nconst { proxy } = getCurrentInstance();\n\n// \u83b7\u53d6\u5168\u5c40\u5c5e\u6027\nconsole.log(proxy.$globalName); // 'I am a global name.'\n// \u83b7\u53d6\u5168\u5c40\u65b9\u6cd5\nproxy.$globalMethod(); // 'I am a global anonymous function'\n\n<\/script>\n")))}m.isMDXComponent=!0}}]);