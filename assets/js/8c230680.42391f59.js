"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5201],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>p});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,p=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?t.createElement(p,i(i({ref:r},s),{},{components:n})):t.createElement(p,i({ref:r},s))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},106:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(7462),a=(n(7294),n(3905));const o={tags:["tree","dfs"],"date created":"Monday, July 25th 2022, 9:07:22 pm","date modified":"Saturday, August 20th 2022, 12:24:34 pm",title:"968 Binary Tree Cameras"},i="968 Binary Tree Cameras",c={unversionedId:"Algo/Coding Practice/Tree/968 Binary Tree Cameras",id:"Algo/Coding Practice/Tree/968 Binary Tree Cameras",title:"968 Binary Tree Cameras",description:"Solution",source:"@site/docs/Algo/Coding Practice/Tree/968 Binary Tree Cameras.md",sourceDirName:"Algo/Coding Practice/Tree",slug:"/Algo/Coding Practice/Tree/968 Binary Tree Cameras",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Tree/968 Binary Tree Cameras",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Coding Practice/Tree/968 Binary Tree Cameras.md",tags:[{label:"tree",permalink:"/Obsidian-Docusaurus/docs/tags/tree"},{label:"dfs",permalink:"/Obsidian-Docusaurus/docs/tags/dfs"}],version:"current",frontMatter:{tags:["tree","dfs"],"date created":"Monday, July 25th 2022, 9:07:22 pm","date modified":"Saturday, August 20th 2022, 12:24:34 pm",title:"968 Binary Tree Cameras"},sidebar:"tutorialSidebar",previous:{title:"863 All Nodes Distance K in Binary Tree",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Tree/863 All Nodes Distance K in Binary Tree"},next:{title:"987 Vertical Order Traversal of a Binary Tree",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Tree/987 Vertical Order Traversal of a Binary Tree"}},l={},d=[{value:"Solution",id:"solution",level:2}],s={toc:d},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"968-binary-tree-cameras"},"968 Binary Tree Cameras"),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/2Gh5WPjAgJk"},"Video Source"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minCameraCover(self, root: Optional[TreeNode]) -> int:\n        #0:- not covered\n        #1:- covered with camera\n        #2:- has camera\n        cam = 0\n        def dfs(node):\n            nonlocal cam\n            if node:\n                left = dfs(node.left)\n                right = dfs(node.right)\n                \n                if left==0 or right ==0:\n                    cam += 1\n                    return 2\n                elif left == 2 or right == 2:\n                    return 1\n                return 0\n                \n            else:\n                #left node\n                return 1\n        \n        return cam+1 if dfs(root)==0 else cam\n\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Other decent solution                  \nmemo = set()\nmemo.add(None)\ncam = 0\n        \ndef dfs(node,parent):\n    nonlocal cam\n    if node:\n        dfs(node.left, node)\n        dfs(node.right, node)\n                \n        # if node is root or node middle node::: add camera\n        if (not parent and node not in memo) or (node.left not in memo or node.right not in memo):\n                memo.add(node)\n                memo.add(parent)\n                memo.add(node.left)\n                memo.add(node.right)\n                cam += 1\n\ndfs(root, None)\nreturn cam\n")))}m.isMDXComponent=!0}}]);