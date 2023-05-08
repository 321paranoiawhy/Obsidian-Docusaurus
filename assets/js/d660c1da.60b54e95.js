"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={"date created":"Sunday, July 24th 2022, 1:23:21 pm","date modified":"Saturday, February 4th 2023, 2:37:19 pm",title:"Union Find"},i="Union Find",l={unversionedId:"Algo/Tree & Graph/Tree/Union find",id:"Algo/Tree & Graph/Tree/Union find",title:"Union Find",description:"- A\xa0disjoint-set data structure\xa0is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.",source:"@site/docs/Algo/Tree & Graph/Tree/Union find.md",sourceDirName:"Algo/Tree & Graph/Tree",slug:"/Algo/Tree & Graph/Tree/Union find",permalink:"/Obsidian-Docusaurus/docs/Algo/Tree & Graph/Tree/Union find",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Tree & Graph/Tree/Union find.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, July 24th 2022, 1:23:21 pm","date modified":"Saturday, February 4th 2023, 2:37:19 pm",title:"Union Find"},sidebar:"tutorialSidebar",previous:{title:"Trie Data Structure",permalink:"/Obsidian-Docusaurus/docs/Algo/Tree & Graph/Tree/Trie data structure"},next:{title:"General Step to Dockerizing a Project",permalink:"/Obsidian-Docusaurus/docs/Containerization/Docker/General step to dockerizing a project"}},s={},p=[{value:"The Two Useful Operations",id:"the-two-useful-operations",level:2},{value:"Union Find Path Compression",id:"union-find-path-compression",level:2},{value:"Application of Union Find",id:"application-of-union-find",level:2},{value:"Template for Union Find",id:"template-for-union-find",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union-find"},"Union Find"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A\xa0",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Disjoint-set_data_structure"},(0,a.kt)("em",{parentName:"a"},"disjoint-set data structure")),"\xa0is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets."),(0,a.kt)("li",{parentName:"ul"},"A\xa0",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Disjoint-set_data_structure"},(0,a.kt)("em",{parentName:"a"},"union-find algorithm")),"\xa0is an algorithm that performs two useful operations on such a data structure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("iframe",{title:"Union Find in 5 minutes \u2014 Data Structures & Algorithms",src:"https://www.youtube.com/embed/ayW5B2W9hfo?start=200&feature=oembed",allowfullscreen:"",allow:"fullscreen",height:"200",width:"354"}))),(0,a.kt)("h2",{id:"the-two-useful-operations"},"The Two Useful Operations"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://algs4.cs.princeton.edu/15uf/images/quick-union-overview.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find Operation: O(N)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Used to find which component a particular element belongs to"),(0,a.kt)("li",{parentName:"ul"},"Find the root of the component by following the parent nodes until a self loop is reached(a node who's parent is itself)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On the picture you can see ","[8 is paired with 8]",", ","[1 is paired with 1]")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find(x):\n    if Parent[x] != x:  #not self-loop\n        return find(Parent[x])\n    return x\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Union Operation: O(N)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Used to unify two elements"),(0,a.kt)("li",{parentName:"ul"},"Find which are the root nodes of each component and if the root nodes are different make one of the root nodes be the parent of the other.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def union(x,y):\n    Parent[find(y)] = find(x)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#Example check whether or not the elments x and y are in the same components\ndef connected(x,y):\n    return find(x) == find(y)\n")),(0,a.kt)("h2",{id:"union-find-path-compression"},"Union Find Path Compression"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The previous operation on worst case performs O(n) since we will need to hop n times to reach the root.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("iframe",{src:"https://www.youtube.com/embed/VHRhJWacxis?list=PLDV1Zeh2NRsBI1C-mR6ZhHTyfoEJWlxvq",height:"200",width:"354",allowfullscreen:"",allow:"fullscreen"}))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://hideoushumpbackfreak.com/algorithms/images/union-find-path-compression.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://courses.cs.washington.edu/courses/cse326/00wi/handouts/lecture18/img035.gif",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Path compression",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The idea is to flatten the tree when\xa0",(0,a.kt)("em",{parentName:"li"},"find()"),"\xa0is called."),(0,a.kt)("li",{parentName:"ul"},"Path compression is to make the found root as parent of x so that we don\u2019t have to traverse all intermediate nodes again."),(0,a.kt)("li",{parentName:"ul"},"If x is root of a subtree, then path (to root) from all nodes under x also compresses.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find(x):\n    root = x\n    while Parent[root] != root:\n        root = Parent[root]\n\n    while x != root:\n        Parent[x], x = root, Parent[x]\n    return root\n")),(0,a.kt)("h2",{id:"application-of-union-find"},"Application of Union Find"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solved problems",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Obsidian-Docusaurus/docs/Algo/Coding%20Practice/Tree/1061%20Lexicographically%20Smallest%20Equivalent%20String"},"1061 Lexicographically Smallest Equivalent String")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-if-path-exists-in-graph"},"https://leetcode.com/problems/find-if-path-exists-in-graph")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/regions-cut-by-slashes/"},"https://leetcode.com/problems/regions-cut-by-slashes/")))),(0,a.kt)("li",{parentName:"ul"},"Check whether an un-directed graph contains cycle or not"),(0,a.kt)("li",{parentName:"ul"},"Find Number of components"),(0,a.kt)("li",{parentName:"ul"},"Find common ancestor in trees")),(0,a.kt)("h2",{id:"template-for-union-find"},"Template for Union Find"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"Parent = {}  #use dictionary to store parent -> child relationship\n\ndef findParent(x):\n    #initially parent of elt it is iteself\n    #setdefault only set elt if key doesn't exist\n    Parent.setdefault(x, x)  \n    \n    root = x\n    while root != Parent[root]:\n        root = Parent[root]\n\n    #perform path compression(...optional)\n    while x != root:\n        Parent[x], x = root, Parent[x]\n\n    return root\n\n\ndef union(x1, x2):\n    parentX1, parentX2 = findParent(x1), findParent(x2)\n    Parent[parentX1] = Parent[parentX2]\n")))}d.isMDXComponent=!0}}]);