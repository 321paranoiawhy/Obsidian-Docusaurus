"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:32:46 am",title:"What is Recursion"},l="What is Recursion",o={unversionedId:"Algo/Fundamental Algorithms/Recursion/Recursion",id:"Algo/Fundamental Algorithms/Recursion/Recursion",title:"What is Recursion",description:"- Recursion is a process for solving problems by subdividing a larger problem into smaller cases of the problem itself and then solving the smaller, more trivial parts.",source:"@site/docs/Algo/Fundamental Algorithms/Recursion/Recursion.md",sourceDirName:"Algo/Fundamental Algorithms/Recursion",slug:"/Algo/Fundamental Algorithms/Recursion/",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Recursion/",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Fundamental Algorithms/Recursion/Recursion.md",tags:[],version:"current",frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:32:46 am",title:"What is Recursion"},sidebar:"tutorialSidebar",previous:{title:"Which Algo to Select, Pattern Based Answer",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Recommendations/Which algo to select, pattern based answer"},next:{title:"What is Backtracking",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Recursion/Backtracking"}},u={},s=[{value:"Factorial",id:"factorial",level:2},{value:"Fibonacci",id:"fibonacci",level:2},{value:"Types of Recursion",id:"types-of-recursion",level:2},{value:"Recursive Runtime",id:"recursive-runtime",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-recursion"},"What is Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recursion is a process for solving problems by subdividing a larger problem into smaller cases of the problem itself and then solving the smaller, more trivial parts."),(0,a.kt)("li",{parentName:"ul"},"An algorithm can be implemented recursively if it can be expressed in smaller version of itself.")),(0,a.kt)("h2",{id:"factorial"},"Factorial"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The factorial of a positive integer n can be used to calculate the number of permutations of n elements. The function is defined as",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"n! = n  ",(0,a.kt)("em",{parentName:"li"}," (n -1) ")," (n2) ",(0,a.kt)("em",{parentName:"li"},"\u2026"),"1"),(0,a.kt)("li",{parentName:"ul"},"6! = 6",(0,a.kt)("em",{parentName:"li"},"5"),"4",(0,a.kt)("em",{parentName:"li"},"3"),"2*1")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def factorial(n):\n    if n==1:\n        return 1\n    else:\n        return n * factorial(n-1)\nprint(factorial(6))\n")),(0,a.kt)("h2",{id:"fibonacci"},"Fibonacci"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Fibonacci sequence is a sequence of integer values in which the first two values are both 1 and each subsequent value is the sum of the two previous values. The first 11 terms of the sequence are..",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1; 1; 2; 3; 5; 8; 13; 21; 34; 55; 89; : : :"),(0,a.kt)("li",{parentName:"ul"},"The nth Fibonacci number can be computed as follow")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def fibo(n):\n    if n <= 2:\n        return 1\n    else:\n        return fibo(n-1) + fibo(n-1)\nprint(fibo(5))\n")),(0,a.kt)("h2",{id:"types-of-recursion"},"Types of Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linear",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One function call"),(0,a.kt)("li",{parentName:"ul"},"Have a linear recursion trace."))),(0,a.kt)("li",{parentName:"ul"},"Binary",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Two function call"),(0,a.kt)("li",{parentName:"ul"},"Have binary tree recursion trace"))),(0,a.kt)("li",{parentName:"ul"},"Multiple",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Multiple function call")))),(0,a.kt)("h2",{id:"recursive-runtime"},"Recursive Runtime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O( branches ** depth ), where branches is the number of times each recursive call branches.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For example Fibonacci ( return fib(n-1) + fib(n-2))"),(0,a.kt)("li",{parentName:"ul"},"Has a runtime of 2**N (since two branch)")))))}p.isMDXComponent=!0}}]);