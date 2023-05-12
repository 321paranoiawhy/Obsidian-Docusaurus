"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},p=void 0,i={unversionedId:"Tools/grep",id:"Tools/grep",title:"grep",description:"- GNU Grep",source:"@site/docs/Tools/grep.md",sourceDirName:"Tools",slug:"/Tools/grep",permalink:"/Obsidian-Docusaurus/docs/Tools/grep",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Tools/grep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u5e8a",permalink:"/Obsidian-Docusaurus/docs/Tools/Websites/\u56fe\u5e8a"},next:{title:"oh-my-posh",permalink:"/Obsidian-Docusaurus/docs/Tools/oh-my-posh"}},l={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#grep"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/grep/grep.html"},"GNU Grep")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/grep/manual/"},"Grep Manual")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gnuwin32.sourceforge.net/packages/grep.htm"},"Grep Download")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/shenxiaolin/p/16662793.html"},"windows \u4e0b grep \u7684\u5b89\u88c5\u4e0e\u4f7f\u7528"))),(0,o.kt)("p",null,"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"D:\\GnuWin32\\bin")," \u5230 \u7cfb\u7edf\u53d8\u91cf\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," \u4e2d\u3002"),(0,o.kt)("p",null,"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grep\n")),(0,o.kt)("admonition",{title:"grep",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Usage: D:\\GnuWin32\\bin\\grep.exe ","[OPTION]","... PATTERN ","[FILE]","...\nTry `D:\\GnuWin32\\bin\\grep.exe --help' for more information.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node |grep -E '((Name|Roles):\\s{6,})|(\\s+(memory|cpu)\\s+[0-9]+\\w{0,2}.+%\\))'\n")))}m.isMDXComponent=!0}}]);