"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(d,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"146. LRU Cache","date created":"Thursday, November 3rd 2022, 12:01:07 pm","date modified":"Thursday, November 3rd 2022, 12:30:55 pm"},l="146. LRU Cache",o={unversionedId:"Algo/Coding Practice/LinkedList/LRU Cache",id:"Algo/Coding Practice/LinkedList/LRU Cache",title:"146. LRU Cache",description:"Solution",source:"@site/docs/Algo/Coding Practice/LinkedList/146. LRU Cache.md",sourceDirName:"Algo/Coding Practice/LinkedList",slug:"/Algo/Coding Practice/LinkedList/LRU Cache",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/LinkedList/LRU Cache",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Coding Practice/LinkedList/146. LRU Cache.md",tags:[],version:"current",sidebarPosition:146,frontMatter:{title:"146. LRU Cache","date created":"Thursday, November 3rd 2022, 12:01:07 pm","date modified":"Thursday, November 3rd 2022, 12:30:55 pm"},sidebar:"tutorialSidebar",previous:{title:"57 Insert Interval",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Intervals/57 Insert Interval"},next:{title:"22 Generate Parentheses",permalink:"/Obsidian-Docusaurus/docs/Algo/Coding Practice/Stack/22 Generate Parentheses"}},d={},s=[{value:"Solution",id:"solution",level:2}],m={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"146-lru-cache"},"146. LRU Cache"),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The required operations are",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"find the element in the cache and return the value"),(0,r.kt)("li",{parentName:"ul"},"this operation will make the element ",(0,r.kt)("inlineCode",{parentName:"li"},"most recent element")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"put"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add element to cache, making it the ",(0,r.kt)("inlineCode",{parentName:"li"},"most recent element")),(0,r.kt)("li",{parentName:"ul"},"after adding if the cache capacity is exceed we need to remove ",(0,r.kt)("inlineCode",{parentName:"li"},"least recent element")))),(0,r.kt)("li",{parentName:"ul"},"based on the above two main operations we also have two more operations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"remove ",(0,r.kt)("inlineCode",{parentName:"li"},"least recent element")),(0,r.kt)("li",{parentName:"ul"},"update/make element ",(0,r.kt)("inlineCode",{parentName:"li"},"most recent element")))),(0,r.kt)("li",{parentName:"ul"},"all operations must be O(1)"))),(0,r.kt)("li",{parentName:"ul"},"approach",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"intuitively we can think of ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionary")," to store elements with key, value pair"),(0,r.kt)("li",{parentName:"ul"},"how can we keep track of elements frequency",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"we can use heap{min, max} but that will not be O(1)"),(0,r.kt)("li",{parentName:"ul"},"Think of a linear data-structure with two ends{head, tail}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"head == ",(0,r.kt)("inlineCode",{parentName:"li"},"least recent element")),(0,r.kt)("li",{parentName:"ul"},"tail == ",(0,r.kt)("inlineCode",{parentName:"li"},"most recent element")),(0,r.kt)("li",{parentName:"ul"},"with adding and removing from edges with O(1) time complexity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when an element is added or accessed it will be moved to the ",(0,r.kt)("inlineCode",{parentName:"li"},"tail"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"==",(0,r.kt)("strong",{parentName:"li"},"elements with most frequency will be in front"),"=="))),(0,r.kt)("li",{parentName:"ul"},"when a capacity is full we will remove from ",(0,r.kt)("inlineCode",{parentName:"li"},"head")))),(0,r.kt)("li",{parentName:"ul"},"The data-structure is ==doubly linked list==,"),(0,r.kt)("li",{parentName:"ul"},"singly linked list wouldn't work because we want a DS, where",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"removing from head and adding to tail to be O(1)")))))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#node for doubly linked list\nclass Node:\n    def __init__(self, key, value):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\nclass LRUCache:\n\n    def __init__(self, capacity: int):\n        self.memo = {}\n        self.capacity = capacity\n\n        #we will be using sentinal nodes for head and tail\n        self.head,self.tail = Node(0,0), Node(0,0)\n\n        #connect the head and tail initially \n        self.head.next, self.tail.prev = self.tail, self.head\n    \n    # remove node from double linked list\n    def remove(self,node):\n        prev, nxt = node.prev, node.next\n        prev.next, nxt.prev = nxt, prev\n    \n    #insert at the front = tail\n    def insert(self, node):\n        prev, nxt = self.tail.prev, self.tail\n        \n        prev.next, nxt.prev = node, node\n        node.prev, node.next = prev, nxt\n        \n        \n    def get(self, key: int) -> int:\n        if key in self.memo:\n            node = self.memo[key]\n\n            #remove wherever the node is\n            self.remove(node)\n\n            #add the node before tail\n            self.insert(node)\n            return self.memo[key].value\n        \n        return -1\n        \n\n    def put(self, key: int, value: int) -> None:\n\n        #remove the node wherever it is\n        if key in self.memo:\n            node = self.memo[key]\n            self.remove(node)\n        #add the node before tail\n        self.memo[key] = Node(key,value)\n        self.insert(self.memo[key])\n        \n        if len(self.memo) > self.capacity:\n            #if the capacity has been reached remove the head node{LRU}\n            node = self.head.next\n            self.remove(node)\n            del self.memo[node.key]\n")))}p.isMDXComponent=!0}}]);