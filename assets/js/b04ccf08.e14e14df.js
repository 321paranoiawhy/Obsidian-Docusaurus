"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={tags:["merge_intervals"],"date created":"Friday, August 5th 2022, 11:33:39 am","date modified":"Wednesday, August 10th 2022, 5:53:33 pm",title:"Merge Intervals"},i="Merge Intervals",o={unversionedId:"Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals",id:"Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals",title:"Merge Intervals",description:"Intro to Merge Interval",source:"@site/docs/Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals.md",sourceDirName:"Algo/Fundamental Algorithms/Misc/Intervals",slug:"/Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals.md",tags:[{label:"merge_intervals",permalink:"/Obsidian-Docusaurus/docs/tags/merge-intervals"}],version:"current",frontMatter:{tags:["merge_intervals"],"date created":"Friday, August 5th 2022, 11:33:39 am","date modified":"Wednesday, August 10th 2022, 5:53:33 pm",title:"Merge Intervals"},sidebar:"tutorialSidebar",previous:{title:"Stack and Queue",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Linked List/Stack & Queue"},next:{title:"Monotonic Stack",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Misc/Monotonic/Monotonic Stack"}},s={},u=[{value:"Intro to Merge Interval",id:"intro-to-merge-interval",level:2},{value:"Sample Question",id:"sample-question",level:2},{value:"Solution",id:"solution",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge-intervals"},"Merge Intervals"),(0,a.kt)("h2",{id:"intro-to-merge-interval"},"Intro to Merge Interval"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Merge Intervals pattern is an efficient technique to deal with overlapping\xa0intervals. In a lot of problems involving intervals, you either need to find overlapping intervals or merge intervals if they overlap."),(0,a.kt)("li",{parentName:"ul"},"The pattern works like this:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Given two intervals (\u2018a\u2019 and \u2018b\u2019), there will be six different ways the two intervals can relate to each other:"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FG9YRlqC9joZNTWsi1ul7tRkO6tv1-8mh13wm9.jpg&w=828&q=75",alt:null}))),(0,a.kt)("h2",{id:"sample-question"},"Sample Question"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-intervals/"},"Sample question from Leetcode"))),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first thing is to sort the input, so we can sequentially process the stream of data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://www.interviewbit.com/blog/wp-content/uploads/2021/11/merge-overlapping-intervals-951x1024.png",alt:null})),(0,a.kt)("li",{parentName:"ul"},"We start from the second input and check",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the start of the second input is inside the last input, if true, we will merge them as ","[start_of_last_input, max(current_end, last_end)]"),(0,a.kt)("li",{parentName:"ul"},"if they don't overlap we can treat them as a separate sequence.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        result = []\n        \n        intervals.sort(key= lambda x : x[0])\n    \n        result.append(intervals[0])\n        \n        \n        for i in range(1, len(intervals)):\n            elt = intervals[i]\n            lastInterval = result[-1]\n            if elt[0] >= lastInterval[0] and elt[0]<=lastInterval[1]:\n                result[-1][1] = max(elt[1], result[-1][1])\n            else:\n                result.append(elt)\n        return result\n")),(0,a.kt)("h2",{id:""}))}m.isMDXComponent=!0}}]);