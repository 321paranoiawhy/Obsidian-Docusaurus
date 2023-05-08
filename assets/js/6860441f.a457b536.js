"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={"date created":"Wednesday, August 24th 2022, 4:11:39 pm","date modified":"Wednesday, August 24th 2022, 4:15:23 pm",title:"191 Number of 1 Bits"},a="191 Number of 1 Bits",s={unversionedId:"Algo/Coding Practice/Binary/191 Number of 1 Bits",id:"Algo/Coding Practice/Binary/191 Number of 1 Bits",title:"191 Number of 1 Bits",description:"Solution",source:"@site/docs/Algo/Coding Practice/Binary/191 Number of 1 Bits.md",sourceDirName:"Algo/Coding Practice/Binary",slug:"/Algo/Coding Practice/Binary/191 Number of 1 Bits",permalink:"/obsidian/docs/Algo/Coding Practice/Binary/191 Number of 1 Bits",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Coding Practice/Binary/191 Number of 1 Bits.md",tags:[],version:"current",frontMatter:{"date created":"Wednesday, August 24th 2022, 4:11:39 pm","date modified":"Wednesday, August 24th 2022, 4:15:23 pm",title:"191 Number of 1 Bits"},sidebar:"tutorialSidebar",previous:{title:"190 Reverse Bits",permalink:"/obsidian/docs/Algo/Coding Practice/Binary/190 Reverse Bits"},next:{title:"1143 Longest Common Sub-sequence",permalink:"/obsidian/docs/Algo/Coding Practice/DP/1143 Longest Common Subsequence"}},l={},c=[{value:"Solution",id:"solution",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"191-number-of-1-bits"},"191 Number of 1 Bits"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Iterate through the bits and add the last bit to result ",(0,o.kt)("a",{parentName:"li",href:"/obsidian/docs/Algo/Fundamental%20Algorithms/Bit%20manipulation"},"Bit manipulation"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0\n        while n:\n            last_bit = n & 1\n            res = res + last_bit\n            n = n >> 1\n        return res\n            \n")))}m.isMDXComponent=!0}}]);