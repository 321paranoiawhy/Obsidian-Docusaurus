"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8860],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(t),f=n,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return t?a.createElement(d,o(o({ref:r},p),{},{components:t})):a.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[c]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5972:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const i={tags:["prefix","prefixSum","subarray"],title:"560 Subarray Sum Equals K","date created":"Saturday, February 4th 2023, 2:49:51 pm","date modified":"Saturday, February 4th 2023, 3:22:58 pm"},o="560 Subarray Sum Equals K",u={unversionedId:"Algo/Coding Practice/Array/560 Subarray Sum Equals K",id:"Algo/Coding Practice/Array/560 Subarray Sum Equals K",title:"560 Subarray Sum Equals K",description:"Solution",source:"@site/docs/Algo/Coding Practice/Array/560 Subarray Sum Equals K.md",sourceDirName:"Algo/Coding Practice/Array",slug:"/Algo/Coding Practice/Array/560 Subarray Sum Equals K",permalink:"/obsidian/docs/Algo/Coding Practice/Array/560 Subarray Sum Equals K",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Coding Practice/Array/560 Subarray Sum Equals K.md",tags:[{label:"prefix",permalink:"/obsidian/docs/tags/prefix"},{label:"prefixSum",permalink:"/obsidian/docs/tags/prefix-sum"},{label:"subarray",permalink:"/obsidian/docs/tags/subarray"}],version:"current",frontMatter:{tags:["prefix","prefixSum","subarray"],title:"560 Subarray Sum Equals K","date created":"Saturday, February 4th 2023, 2:49:51 pm","date modified":"Saturday, February 4th 2023, 3:22:58 pm"},sidebar:"tutorialSidebar",previous:{title:"2256. Minimum Average Difference",permalink:"/obsidian/docs/Algo/Coding Practice/Array/2256 Minimum Average Difference"},next:{title:"78 Subsets",permalink:"/obsidian/docs/Algo/Coding Practice/Array/78 Subsets"}},l={},s=[{value:"Solution",id:"solution",level:2}],p={toc:s},c="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"560-subarray-sum-equals-k"},"560 Subarray Sum Equals K"),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-example"},"array  = [5, 5,  2,  3,  7]\nprefix = [5, 10, 12, 15, 22]\nk = 10\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for this problem we will use prefix sum",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"keep adding values to get current prefix",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"store the prefixes at each stage to memo"))),(0,n.kt)("li",{parentName:"ul"},"check ",(0,n.kt)("inlineCode",{parentName:"li"},"current Pref - k")," in previous prefixes we saw",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if yes add +1 to our results",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"or +the number of previous sub array that has ",(0,n.kt)("inlineCode",{parentName:"li"},"current Pref-k")))),(0,n.kt)("li",{parentName:"ul"},"this works because if we can find ",(0,n.kt)("inlineCode",{parentName:"li"},"(currPref-k)")," in our memo it means there is a ",(0,n.kt)("inlineCode",{parentName:"li"},"previous Subarray")," we can remove/chop to get a sum of k"),(0,n.kt)("li",{parentName:"ul"},"ex: ",(0,n.kt)("em",{parentName:"li"},"consider prefix","[3]"," which is 15"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we calculate ",(0,n.kt)("inlineCode",{parentName:"li"},"(currPref-k)")," which is 15-10 = 5, is there a subarray sum equal to 5, yes at index 0, if we remove that our value will be k"))),(0,n.kt)("li",{parentName:"ul"},"ex2: ",(0,n.kt)("em",{parentName:"li"},"consider prefix","[2]"," which is 10"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"10 - 10 is zero"),", but zero is not in previous prefixes,"),(0,n.kt)("li",{parentName:"ul"},"but we can see from the array, the first two ",(0,n.kt)("inlineCode",{parentName:"li"},"elts[5,5]")," can make up 10"),(0,n.kt)("li",{parentName:"ul"},"for this to work we need to pre-populate our memo with zero"))),(0,n.kt)("li",{parentName:"ul"},"how did we get the formula ",(0,n.kt)("inlineCode",{parentName:"li"},"currPref-k"))))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- at each step we're getting a prefix\n    - currPref\n- we ask is there a previus portion we can remove from this prefix that can give me k\n    - currPref - ? = k\n- the portion can be in memo to check that, interchange the above quation to\n    - currPref - k = ?\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        memo = defaultdict(int)\n        memo[0] = 1  #prepopulate memo with zero\n        \n        res = 0\n        curr = 0\n        \n        for n in nums:\n            curr += n  #calculate currPref\n            prefix = curr-k  #out formula\n            res += memo[prefix]  #+ no previous subarray with desired prefix\n            \n            memo[curr] += 1  #add curr pref to memo\n        return res\n")))}m.isMDXComponent=!0}}]);