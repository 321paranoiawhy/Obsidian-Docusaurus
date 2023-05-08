"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:04:15 am",title:"Selection Sort"},o="Selection Sort",l={unversionedId:"Algo/Fundamental Algorithms/Sorting algos/Selection Sort",id:"Algo/Fundamental Algorithms/Sorting algos/Selection Sort",title:"Selection Sort",description:"- Runtime 0 (1)",source:"@site/docs/Algo/Fundamental Algorithms/Sorting algos/1. Selection Sort.md",sourceDirName:"Algo/Fundamental Algorithms/Sorting algos",slug:"/Algo/Fundamental Algorithms/Sorting algos/Selection Sort",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Sorting algos/Selection Sort",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Fundamental Algorithms/Sorting algos/1. Selection Sort.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:04:15 am",title:"Selection Sort"},sidebar:"tutorialSidebar",previous:{title:"Boundary Binary Search",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Searching algos/Binary search-Find boundary"},next:{title:"Insertion Sort",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Sorting algos/Insertion sort"}},s={},c=[],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"selection-sort"},"Selection Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Runtime: O( n**2) Average and Worst Case. Memory: 0 (1)"),(0,a.kt)("li",{parentName:"ul"},"Find the smallest element using a linear scan and move it to the front (swapping it with the front element)."),(0,a.kt)("li",{parentName:"ul"},"Then, find the second smallest and move it, again doing a linear scan. Continue doing this until all the elements are in place.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*l5skal1-UC-GtSc8ORE-2A.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The selection-sort algorithm is a poor choice in any application, since it runs in ",(0,a.kt)("em",{parentName:"li"},"O")," ( ",(0,a.kt)("em",{parentName:"li"},"n**")," 2) time even in the best case.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def SortWithSelection(array):\n    last = len(array)\n    for i in range(0, last):\n        minimum = findMin(array, i, last)\n        indexMin = array.index(minimum)\n        array[i], array[indexMin] = array[indexMin], array[i]\n    return array\n\n\ndef findMin(array, intial, last):\n    minimum = array[intial]\n    for i in range(intial, last):\n        if array[i] < minimum:\n            minimum = array[i]\n    return minimum\n\nprint(SortWithSelection([7, 6, 5, 4, 3, 2, 1]))\n")))}d.isMDXComponent=!0}}]);