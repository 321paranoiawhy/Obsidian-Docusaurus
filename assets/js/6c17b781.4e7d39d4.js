"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1848],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>p});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,p=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return t?n.createElement(p,o(o({ref:r},m),{},{components:t})):n.createElement(p,o({ref:r},m))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6923:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={title:"2256. Minimum Average Difference","date created":"Sunday, December 4th 2022, 5:22:11 pm","date modified":"Saturday, December 17th 2022, 12:34:32 pm"},o="2256. Minimum Average Difference",l={unversionedId:"Algo/Coding Practice/Array/2256 Minimum Average Difference",id:"Algo/Coding Practice/Array/2256 Minimum Average Difference",title:"2256. Minimum Average Difference",description:"- Solution",source:"@site/docs/Algo/Coding Practice/Array/2256 Minimum Average Difference.md",sourceDirName:"Algo/Coding Practice/Array",slug:"/Algo/Coding Practice/Array/2256 Minimum Average Difference",permalink:"/obsidian/docs/Algo/Coding Practice/Array/2256 Minimum Average Difference",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Coding Practice/Array/2256 Minimum Average Difference.md",tags:[],version:"current",frontMatter:{title:"2256. Minimum Average Difference","date created":"Sunday, December 4th 2022, 5:22:11 pm","date modified":"Saturday, December 17th 2022, 12:34:32 pm"},sidebar:"tutorialSidebar",previous:{title:"974. Subarray Sums Divisible by K",permalink:"/obsidian/docs/Algo/Coding Practice/Array/Subarray Sums Divisible by K"},next:{title:"560 Subarray Sum Equals K",permalink:"/obsidian/docs/Algo/Coding Practice/Array/560 Subarray Sum Equals K"}},u={},c=[],m={toc:c},s="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2256-minimum-average-difference"},"2256. Minimum Average Difference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solution",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if you think about the brute force solution",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"we would need to calculate the sum before and after each index, and take the average"),(0,i.kt)("li",{parentName:"ul"},"this would cost us O(N^2^) time complexity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it is O(N^2) because we iterate over each index of the input array and at each index, and again we iterate on all elements to calculate averages of two parts, which takes O(n)","*","O(n) time."))))),(0,i.kt)("li",{parentName:"ul"},"taking the brute force a step forward, if we can know the left and right sum before hand it will reduce our time complexity down to O(n).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the formula will be ",(0,i.kt)("inlineCode",{parentName:"li"},"abs(left_sum/n - right_sum/m)")),(0,i.kt)("li",{parentName:"ul"},"the technique we can use to pre-calculate left and right sums will be ",(0,i.kt)("a",{parentName:"li",href:"/obsidian/docs/Algo/Fundamental%20Algorithms/Misc/Prefix%20sum/"},"Prefix sum"))))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from collections import defaultdict\nclass Solution:\n    def minimumAverageDifference(self, nums: List[int]) -> int:\n        left = defaultdict(int)\n        right = defaultdict(int)\n\n        #prefix sum\n        res = 0\n        index = 1\n        for num in nums:\n            res += num\n            left[index] = res\n            index += 1\n\n        #suffix sum\n        res = 0\n        index = len(nums)\n        for num in reversed(nums):\n            res += num\n            right[index] = res\n            index -= 1            \n        \n        res = [float("inf"), 0]\n        for key in left:\n            left_value = left[key]\n            right_value = right[key+1]\n            \n            \n            left_av = left_value // key\n            right_av = 0 if right_value==0 else right_value // (len(nums)-key)\n            \n            curr_av = abs(left_av-right_av)\n            \n            if curr_av < res[0]:\n                res = [curr_av, key-1]\n            elif curr_av == res[0]:\n                res = [curr_av, min(key-1, res[1])]\n            \n        return res[1]\n            \n')))}f.isMDXComponent=!0}}]);