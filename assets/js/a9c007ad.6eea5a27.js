"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={"date created":"Sunday, August 14th 2022, 12:01:05 pm","date modified":"Sunday, August 14th 2022, 12:32:37 pm",title:"Check is a Tree is"},o="Check is a Tree is",l={unversionedId:"Algo/Coding Practice/Tree/Check is a tree is",id:"Algo/Coding Practice/Tree/Check is a tree is",title:"Check is a Tree is",description:"Sample Code",source:"@site/docs/Algo/Coding Practice/Tree/Check is a tree is.md",sourceDirName:"Algo/Coding Practice/Tree",slug:"/Algo/Coding Practice/Tree/Check is a tree is",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Tree/Check is a tree is",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Coding Practice/Tree/Check is a tree is.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, August 14th 2022, 12:01:05 pm","date modified":"Sunday, August 14th 2022, 12:32:37 pm",title:"Check is a Tree is"},sidebar:"tutorialSidebar",previous:{title:"987 Vertical Order Traversal of a Binary Tree",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Tree/987 Vertical Order Traversal of a Binary Tree"},next:{title:"What is Algorithm Analysis",permalink:"/Obsidian-Docusaurus/docs/Algo/Fundamental Algorithms/Algorithm analysis"}},c={},s=[{value:"Sample Code",id:"sample-code",level:2},{value:"Binary Search Tree",id:"binary-search-tree",level:2},{value:"958 Complete Binary Tree",id:"958-complete-binary-tree",level:2},{value:"Full Binary Tree",id:"full-binary-tree",level:2},{value:"Perfect Binary Tree",id:"perfect-binary-tree",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-is-a-tree-is"},"Check is a Tree is"),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def count_nodes(node):\n    if not node:\n        return 0\n    else:\n        return 1 + count_nodes(node.left) + count_nodes(node.right)\n")),(0,a.kt)("h2",{id:"binary-search-tree"},"Binary Search Tree"),(0,a.kt)("h2",{id:"958-complete-binary-tree"},"958 Complete Binary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://scaler.com/topics/images/array-representation-of-a-complete-binary-tree-one.webp",alt:null})),(0,a.kt)("li",{parentName:"ul"},"Notes on complete binary tree",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"complete binary tree can easily be represented with array"),(0,a.kt)("li",{parentName:"ul"},"nodes are inserted from left to right"),(0,a.kt)("li",{parentName:"ul"},"in respect to parent node index",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"left child = ",(0,a.kt)("inlineCode",{parentName:"li"},"2*parent_index + 1")),(0,a.kt)("li",{parentName:"ul"},"right child = ",(0,a.kt)("inlineCode",{parentName:"li"},"2*parent_index + 2")))))),(0,a.kt)("li",{parentName:"ul"},"The point is following the above index guideline",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The last node in complete binary tree will be equal to the size of the array or tree,"),(0,a.kt)("li",{parentName:"ul"},"however for non-complete tree this guideline will be violated, a certain node index will be greater than the size of the tree/array")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:\n        \n        def count_nodes(node):\n            if not node:\n                return 0\n            else:\n                return 1 + count_nodes(node.left) + count_nodes(node.right)\n        \n        \n        def isComplete(node, index, length):\n            if not node:\n                return True\n                \n            if index >= length:\n                return False\n            \n            return isComplete(node.left, index*2+1, length) and isComplete(node.right, index*2+2, length)\n        \n        \n        length = count_nodes(root)\n        return isComplete(root, 0, length)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.programiz.com/dsa/full-binary-tree"},"https://www.programiz.com/dsa/full-binary-tree")),(0,a.kt)("h2",{id:"full-binary-tree"},"Full Binary Tree"),(0,a.kt)("h2",{id:"perfect-binary-tree"},"Perfect Binary Tree"))}p.isMDXComponent=!0}}]);