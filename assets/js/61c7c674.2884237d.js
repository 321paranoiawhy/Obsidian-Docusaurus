"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9691],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>s});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,s=g["".concat(i,".").concat(d)]||g[d]||m[d]||l;return t?n.createElement(s,o(o({ref:a},u),{},{components:t})):n.createElement(s,o({ref:a},u))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[g]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5785:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={"date created":"Sunday, July 24th 2022, 11:11:54 pm","date modified":"Sunday, July 24th 2022, 11:16:09 pm",title:"Package Management"},o="Package Management",c={unversionedId:"Linux/Package management",id:"Linux/Package management",title:"Package Management",description:"Install Package",source:"@site/docs/Linux/Package management.md",sourceDirName:"Linux",slug:"/Linux/Package management",permalink:"/obsidian/docs/Linux/Package management",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Linux/Package management.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, July 24th 2022, 11:11:54 pm","date modified":"Sunday, July 24th 2022, 11:16:09 pm",title:"Package Management"},sidebar:"tutorialSidebar",previous:{title:"Crontab",permalink:"/obsidian/docs/Linux/Crontab"},next:{title:"Remote Connection",permalink:"/obsidian/docs/Linux/Remote connection"}},i={},p=[{value:"Install Package",id:"install-package",level:2},{value:"Install .deb Package",id:"install-deb-package",level:3},{value:"Remove Package",id:"remove-package",level:2},{value:"Autoremove",id:"autoremove",level:3},{value:"Get Update",id:"get-update",level:2},{value:"Get Upgrade",id:"get-upgrade",level:2}],u={toc:p},g="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(g,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"package-management"},"Package Management"),(0,r.kt)("h2",{id:"install-package"},"Install Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install package-name\n")),(0,r.kt)("h3",{id:"install-deb-package"},"Install .deb Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dpkg -i packagename.deb\n")),(0,r.kt)("h2",{id:"remove-package"},"Remove Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get remove package-name\napt-get purge package-name\n")),(0,r.kt)("h3",{id:"autoremove"},"Autoremove"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove all unwanted packages on Debian based distributions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get autoremove\n")),(0,r.kt)("h2",{id:"get-update"},"Get Update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\n")),(0,r.kt)("h2",{id:"get-upgrade"},"Get Upgrade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get upgrade  #upgraed all\napt-get upgrade package-name\n")))}m.isMDXComponent=!0}}]);