"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1061],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"Tools/NVM",id:"Tools/NVM",title:"NVM",description:"Windows",source:"@site/docs/Tools/NVM.md",sourceDirName:"Tools",slug:"/Tools/NVM",permalink:"/Obsidian-Docusaurus/docs/Tools/NVM",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Tools/NVM.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image",permalink:"/Obsidian-Docusaurus/docs/Tools/Image"},next:{title:"\u591a\u5f69\u6807\u7b7e",permalink:"/Obsidian-Docusaurus/docs/Tools/Obsidian/CSS-Snippets"}},l={},c=[{value:"<code>Windows</code>",id:"windows",level:2},{value:"<code>MacOS</code>",id:"macos",level:2},{value:"<code>Windows</code>",id:"windows-1",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#NVM"),(0,o.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("h2",{id:"windows"},(0,o.kt)("inlineCode",{parentName:"h2"},"Windows")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"NVM for Windows - GitHub"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows/releases"},"NVM for Windows - Releases"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.casper.tw/development/2022/01/10/install-nvm/"},"\u5361\u65af\u4f2f's Blog")),(0,o.kt)("h2",{id:"macos"},(0,o.kt)("inlineCode",{parentName:"h2"},"MacOS")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"# Node Version Manager - GitHub")),(0,o.kt)("h1",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,o.kt)("h2",{id:"windows-1"},(0,o.kt)("inlineCode",{parentName:"h2"},"Windows")),(0,o.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d nvm \u7248\u672c\nnvm -v # nvm --version\n# \n\n# \u5b89\u88c5\u6307\u5b9a\u7684 node \u7248\u672c\nnvm install 14.15.5 # nvm i 14.15.5\n\n# \u5217\u51fa\u5df2\u5b89\u88c5\u7684 node \u7248\u672c\nnvm list # nvm ls\n# * 16.18.0 (Currently using 64-bit executable)\n# 8 14.15.5\n\n# \u5217\u51fa\u6240\u6709\u53ef\u7528\u7684 node \u7248\u672c\nnvm list avaiable # nvm ls avaiable\n\n# \u5217\u51fa\u8fdc\u7aef\u53ef\u7528\u7684 node \u7248\u672c\nnvm list-remote # nvm ls-remote\n\n# \u4f7f\u7528 14.15.5 \u7248\u672c\u7684 node\nnvm use 14.15.5 # Now using node v14.15.5 (64-bit)\n\nnode -v # node --version\n# v14.15.5\n")))}d.isMDXComponent=!0}}]);