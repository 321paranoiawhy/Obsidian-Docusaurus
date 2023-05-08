"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={tags:["graph","dfs"],"date created":"Wednesday, August 3rd 2022, 10:03:52 am","date modified":"Sunday, August 14th 2022, 11:40:02 am",title:"178 Graph Valid"},o="178 Graph Valid",l={unversionedId:"Algo/Coding Practice/Graph/178 Graph Valid",id:"Algo/Coding Practice/Graph/178 Graph Valid",title:"178 Graph Valid",description:"- The Question is freely available on Lintcode",source:"@site/docs/Algo/Coding Practice/Graph/178 Graph Valid.md",sourceDirName:"Algo/Coding Practice/Graph",slug:"/Algo/Coding Practice/Graph/178 Graph Valid",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Graph/178 Graph Valid",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Coding Practice/Graph/178 Graph Valid.md",tags:[{label:"graph",permalink:"/Obsidian-Docusaurus/docs/tags/graph"},{label:"dfs",permalink:"/Obsidian-Docusaurus/docs/tags/dfs"}],version:"current",frontMatter:{tags:["graph","dfs"],"date created":"Wednesday, August 3rd 2022, 10:03:52 am","date modified":"Sunday, August 14th 2022, 11:40:02 am",title:"178 Graph Valid"},sidebar:"tutorialSidebar",previous:{title:"130. Surrounded Regions",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Graph/Surrounded Regions"},next:{title:"417 Pacific Atlantic Water Flow",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Graph/417 Pacific Atlantic Water Flow"}},u={},c=[{value:"Question",id:"question",level:2},{value:"Solution",id:"solution",level:2}],d={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"178-graph-valid"},"178 Graph Valid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Question is freely available on ",(0,r.kt)("a",{parentName:"li",href:"https://lintcode.com"},"Lintcode"))),(0,r.kt)("h2",{id:"question"},"Question"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Given\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\xa0nodes labeled from\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\xa0to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"n - 1"),"\xa0and a list of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"undirected"),"\xa0edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check a given graph is a valid tree")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Every tree can be a graph but not vice versa"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For a graph to be a valid tree it needs to satisfy the following",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"has root"),(0,r.kt)("li",{parentName:"ul"},"contains no cycle"),(0,r.kt)("li",{parentName:"ul"},"Must have one component = has one root"))),(0,r.kt)("li",{parentName:"ul"},"Solution:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/bXsUuownnoQ"},"Video solution")),(0,r.kt)("li",{parentName:"ul"},"Check there is only one component and no cycle"),(0,r.kt)("li",{parentName:"ul"},"How to count number of components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run DFS \u21fe count the visited nodes and compare with the given total number of components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If visited 4 and total is 5, we know there are multiple components"))))),(0,r.kt)("li",{parentName:"ul"},"How to check no cycle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Again run DFS and if you encounter a visited node along the search, you know you have found a loop/cycle."))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    """\n    @param n: An integer\n    @param edges: a list of undirected edges\n    @return: true if it\'s a valid tree, or false\n    """\n    def valid_tree(self, n: int, edges: List[List[int]]) -> bool:\n        # write your code here\n        if not n:\n            return True\n        graph = defaultdict(list)\n\n        for n1, n2 in edges:\n            graph[n1].append(n2)\n            graph[n2].append(n1)\n\n        visited = set()\n        def isCyclic(node, prev_node):\n            if node in visited:\n                return True\n            \n            visited.add(node)\n\n            for n in graph[node]:\n                if n == prev_node:\n                    continue\n                if isCyclic(n, node):\n                    return True\n            return False\n        \n        return not isCyclic(0, -1) and len(visited)==n\n')))}s.isMDXComponent=!0}}]);