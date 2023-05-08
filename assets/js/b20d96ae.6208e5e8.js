"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[724],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),l=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},m=function(e){var r=l(e.components);return a.createElement(o.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,d=p["".concat(o,".").concat(f)]||p[f]||c[f]||i;return t?a.createElement(d,u(u({ref:r},m),{},{components:t})):a.createElement(d,u({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,u=new Array(i);u[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var l=2;l<i;l++)u[l]=t[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1866:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const i={tags:["prefix","prefixSum"],title:"What is Prefix Sum","date created":"Sunday, November 6th 2022, 5:46:32 pm","date modified":"Saturday, February 4th 2023, 3:33:56 pm"},u="What is Prefix Sum",s={unversionedId:"Algo/Fundamental Algorithms/Misc/Prefix sum/Prefix sum",id:"Algo/Fundamental Algorithms/Misc/Prefix sum/Prefix sum",title:"What is Prefix Sum",description:"- GeeksforGeeks prefix sum",source:"@site/docs/Algo/Fundamental Algorithms/Misc/Prefix sum/Prefix sum.md",sourceDirName:"Algo/Fundamental Algorithms/Misc/Prefix sum",slug:"/Algo/Fundamental Algorithms/Misc/Prefix sum/",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Misc/Prefix sum/",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Fundamental Algorithms/Misc/Prefix sum/Prefix sum.md",tags:[{label:"prefix",permalink:"/Obsidian-Docusaurus/docs/tags/prefix"},{label:"prefixSum",permalink:"/Obsidian-Docusaurus/docs/tags/prefix-sum"}],version:"current",frontMatter:{tags:["prefix","prefixSum"],title:"What is Prefix Sum","date created":"Sunday, November 6th 2022, 5:46:32 pm","date modified":"Saturday, February 4th 2023, 3:33:56 pm"},sidebar:"tutorialSidebar",previous:{title:"Monotonic Decreasing Queue",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Misc/Monotonic/Monotonic queue"},next:{title:"Algorithms You Should Know",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Recommendations/Algorithms you should know"}},o={},l=[{value:"Implement Prefix Sum",id:"implement-prefix-sum",level:2},{value:"Application of Prefix Sum",id:"application-of-prefix-sum",level:2}],m={toc:l},p="wrapper";function c(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-prefix-sum"},"What is Prefix Sum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/"},"GeeksforGeeks prefix sum")),(0,n.kt)("li",{parentName:"ul"},"In computer science, the prefix sum, (cumulative sum), is a second sequence of numbers ",(0,n.kt)("inlineCode",{parentName:"li"},"y0, y1, y2"),",\u2026, the sums of prefixes (previous numbers) of the input sequence:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://www.cs.utexas.edu/~rossbach/cs380p-fall2019/lab/pfxsum.png",alt:"prefix sum"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"y0 = x0\ny1 = x0 + x1\ny2 = x0 + x1+ x2\n\ninput numbers   \xa01  \xa02  \xa03  \xa04  \xa05  \xa06  ...\nprefix sums     \xa01  \xa03  \xa06  10  15  21  ... \n")),(0,n.kt)("h2",{id:"implement-prefix-sum"},"Implement Prefix Sum"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"arr = [1,2,3,4,5]\ncurr_res = 0\nres = []\nfor i in range(len(arr)):\n    curr_res += arr[i]\n    res.append(curr_res)\nprint(res)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Suffix sum is running the above loop in reverse order, resulting prefix sum starting from the end to the start.")),(0,n.kt)("h2",{id:"application-of-prefix-sum"},"Application of Prefix Sum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prefix sum is a technique we can use to speed certain algorithm implementations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Using pre\ufb01x (or su\ufb03x) sums allows us to calculate the total of any slice of the array very quickly=O(n)."))),(0,n.kt)("li",{parentName:"ul"},"moreover, prefix sums are usually used in questions including",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"subarray sum with x condition")),(0,n.kt)("li",{parentName:"ul"},"maximum sub-array sub"))),(0,n.kt)("li",{parentName:"ul"},"Examples",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Obsidian-Docusaurus/docs/Algo/Coding%20Practice/Array/2256%20Minimum%20Average%20Difference"},"2256 Minimum Average Difference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Obsidian-Docusaurus/docs/Algo/Coding%20Practice/Array/Subarray%20Sums%20Divisible%20by%20K"},"974. Subarray Sums Divisible by K")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Obsidian-Docusaurus/docs/Algo/Coding%20Practice/Array/560%20Subarray%20Sum%20Equals%20K"},"560 Subarray Sum Equals K")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/product-of-array-except-self"},"https://leetcode.com/problems/product-of-array-except-self")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/minimum-size-subarray-sum"},"https://leetcode.com/problems/minimum-size-subarray-sum"))))))}c.isMDXComponent=!0}}]);