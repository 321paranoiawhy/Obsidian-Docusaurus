"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Thursday, July 28th 2022, 12:39:35 am",title:"Python Collections Module"},l="Python Collections Module",a={unversionedId:"Algo/Python Tips & Tricks/Useful Python Collections module",id:"Algo/Python Tips & Tricks/Useful Python Collections module",title:"Python Collections Module",description:"Deque",source:"@site/docs/Algo/Python Tips & Tricks/Useful Python Collections module.md",sourceDirName:"Algo/Python Tips & Tricks",slug:"/Algo/Python Tips & Tricks/Useful Python Collections module",permalink:"/Obsidian-Docusaurus/docs/Algo/Python Tips & Tricks/Useful Python Collections module",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Python Tips & Tricks/Useful Python Collections module.md",tags:[],version:"current",frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Thursday, July 28th 2022, 12:39:35 am",title:"Python Collections Module"},sidebar:"tutorialSidebar",previous:{title:"String Operations",permalink:"/Obsidian-Docusaurus/docs/Algo/Python Tips & Tricks/String"},next:{title:"Built-in Functions",permalink:"/Obsidian-Docusaurus/docs/Algo/Python Tips & Tricks/built-in list functions"}},s={},u=[{value:"Deque",id:"deque",level:2},{value:"Defaultdict",id:"defaultdict",level:2},{value:"orderedDict",id:"ordereddict",level:2},{value:"Counter",id:"counter",level:2},{value:"ChainMap",id:"chainmap",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-collections-module"},"Python Collections Module"),(0,o.kt)("h2",{id:"deque"},"Deque"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Obsidian-Docusaurus/docs/Algo/Fundamental%20Algorithms/Linked%20List/Stack%20&%20Queue"},"Stack & Queue"))),(0,o.kt)("h2",{id:"defaultdict"},"Defaultdict"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dictionary subclass that accepts a callable in its constructor whose return value will be used if a requested key cannot be found.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from collections import defaultdict\nd = defaultdict(int)  #we can insert int(defulat-0), list(defualt-[]),set(default-new Set()/{}),\n\nd["dog"] = d["dog"] + 1  #defualt value 0 + 1 = 1\nprint(d["dog"])\nprint(d["cat"])  #returns zero default value\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nd = defaultdict(lambda: 1) #use this syntax to provide your own custom vallue\nprint(d['cat'])\n")),(0,o.kt)("h2",{id:"ordereddict"},"orderedDict"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dictionary subclass that remembers the insertion order of keys added to it: collections.OrderedDict")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#same as dict but keeps the order\nfrom collections import OrderedDict\nd = OrderedDict(one=1, two=2, three=3)\nprint(d)\nd['four'] = 4\nprint(d)\nprint(d.keys())\n")),(0,o.kt)("h2",{id:"counter"},"Counter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dictionary to count several different objects at once. In this case, the keys will store individual objects, and the values will hold the number of repetitions of a given object, or the object\u2019s\xa0",(0,o.kt)("strong",{parentName:"li"},"count"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from collections import Counter\nletters = Counter("mississippi")\nprint(letters)\nprint(letters["m"])  #the output of Counter is dictionary\nprint(letters.keys())\n\nprint(letters.most_common(1)) #get one most common\n')),(0,o.kt)("h2",{id:"chainmap"},"ChainMap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The collections.ChainMap data structure groups multiple dictionaries into a single mapping."),(0,o.kt)("li",{parentName:"ul"},"Lookups search the underlying mappings one by one until a key is found."),(0,o.kt)("li",{parentName:"ul"},"Insertions, updates, and deletions only affect the first mapping added to the chain.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import ChainMap\ndict1 = {'one': 1, 'two': 2}\ndict2 = {'three': 3, 'four': 4}\nchain = ChainMap(dict1, dict2)\nprint(chain)\nchain[\"five\"] = 5 #insertion is only on first dictionary\nprint(chain)\n")))}p.isMDXComponent=!0}}]);