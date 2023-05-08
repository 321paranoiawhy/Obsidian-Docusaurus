"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={tags:["dp","sub_sequence"],"date created":"Sunday, August 7th 2022, 3:20:15 pm","date modified":"Wednesday, August 10th 2022, 11:20:54 am",title:"1143 Longest Common Sub-sequence"},i="1143 Longest Common Sub-sequence",u={unversionedId:"Algo/Coding Practice/DP/1143 Longest Common Subsequence",id:"Algo/Coding Practice/DP/1143 Longest Common Subsequence",title:"1143 Longest Common Sub-sequence",description:"Solution",source:"@site/docs/Algo/Coding Practice/DP/1143 Longest Common Subsequence.md",sourceDirName:"Algo/Coding Practice/DP",slug:"/Algo/Coding Practice/DP/1143 Longest Common Subsequence",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/DP/1143 Longest Common Subsequence",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Coding Practice/DP/1143 Longest Common Subsequence.md",tags:[{label:"dp",permalink:"/Obsidian-Docusaurus/docs/tags/dp"},{label:"sub_sequence",permalink:"/Obsidian-Docusaurus/docs/tags/sub-sequence"}],version:"current",frontMatter:{tags:["dp","sub_sequence"],"date created":"Sunday, August 7th 2022, 3:20:15 pm","date modified":"Wednesday, August 10th 2022, 11:20:54 am",title:"1143 Longest Common Sub-sequence"},sidebar:"tutorialSidebar",previous:{title:"191 Number of 1 Bits",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Binary/191 Number of 1 Bits"},next:{title:"300 Longest Increasing Sub-sequence",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/DP/300 Longest Increasing Subsequence"}},s={},c=[{value:"Solution",id:"solution",level:2}],l={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1143-longest-common-sub-sequence"},"1143 Longest Common Sub-sequence"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.programiz.com/sites/tutorial2program/files/lcs-Table-4.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Formula",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the letters match, the value will be {1 +  top-left neighbor}"),(0,o.kt)("li",{parentName:"ul"},"if the letters do not match, the value is maximum of left and up neighbors")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = defaultdict(int)\n        \n        for r in range(len(text1)):\n            for c in range(len(text2)):\n                if text1[r] == text2[c]:\n                    dp[(r,c)] = 1 + dp[(r-1,c-1)]\n                else:\n                    dp[(r,c)] = max(dp[(r-1,c)], dp[(r,c-1)])\n        \n        \n        return max(dp.values())\n")))}p.isMDXComponent=!0}}]);