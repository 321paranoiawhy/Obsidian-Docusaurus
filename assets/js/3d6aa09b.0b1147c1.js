"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9313],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={"date created":"Monday, July 25th 2022, 8:52:37 pm","date modified":"Monday, July 25th 2022, 8:58:20 pm",title:"Random"},i="Random",l={unversionedId:"Algo/Python Tips & Tricks/Random",id:"Algo/Python Tips & Tricks/Random",title:"Random",description:"Randint",source:"@site/docs/Algo/Python Tips & Tricks/Random.md",sourceDirName:"Algo/Python Tips & Tricks",slug:"/Algo/Python Tips & Tricks/Random",permalink:"/obsidian/docs/Algo/Python Tips & Tricks/Random",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Python Tips & Tricks/Random.md",tags:[],version:"current",frontMatter:{"date created":"Monday, July 25th 2022, 8:52:37 pm","date modified":"Monday, July 25th 2022, 8:58:20 pm",title:"Random"},sidebar:"tutorialSidebar",previous:{title:"Matrix Iteration Methods",permalink:"/obsidian/docs/Algo/Python Tips & Tricks/More on matrix"},next:{title:"Sets - Intersection, Union and More",permalink:"/obsidian/docs/Algo/Python Tips & Tricks/Sets - intersection, union and more"}},p={},c=[{value:"Randint",id:"randint",level:2},{value:"Choice",id:"choice",level:2},{value:"Shuffle",id:"shuffle",level:2},{value:"Sample",id:"sample",level:2}],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"random"},"Random"),(0,a.kt)("h2",{id:"randint"},"Randint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return a random integer\xa0",(0,a.kt)("em",{parentName:"li"},"N"),"\xa0such that\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"a\xa0<=\xa0N\xa0<=\xa0b"),". Alias for\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"randrange(a,\xa0b+1)"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\n# random number between [0 and 9]\nres = random.randint(0,9)\nprint(res)\n")),(0,a.kt)("h2",{id:"choice"},"Choice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return a random element from the non-empty sequence\xa0",(0,a.kt)("em",{parentName:"li"},"seq"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\n# random choice\nres = random.choice(['apple', 'pear', 'banana'])\nprint(res)\n")),(0,a.kt)("h2",{id:"shuffle"},"Shuffle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shuffle the sequence\xa0",(0,a.kt)("em",{parentName:"li"},"x"),"\xa0in place.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\n# random choice\nres = ['apple', 'pear', 'banana']\nrandom.shuffle(res)\nprint(res)\n")),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return a\xa0",(0,a.kt)("em",{parentName:"li"},"k"),"\xa0length list of unique elements chosen from the population sequence or set. Used for random sampling without replacement.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\n# give me random n choices\nres = random.sample(range(100), 10)\nprint(res)\n")))}d.isMDXComponent=!0}}]);