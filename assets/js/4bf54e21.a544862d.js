"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Friday, November 18th 2022, 1:35:45 pm",title:"Stack and Queue"},o="Stack and Queue",u={unversionedId:"Algo/Fundamental Algorithms/Linked List/Stack & Queue",id:"Algo/Fundamental Algorithms/Linked List/Stack & Queue",title:"Stack and Queue",description:"Stack {LAST IN FIRST OUT}",source:"@site/docs/Algo/Fundamental Algorithms/Linked List/Stack & Queue.md",sourceDirName:"Algo/Fundamental Algorithms/Linked List",slug:"/Algo/Fundamental Algorithms/Linked List/Stack & Queue",permalink:"/obsidian/docs/Algo/Fundamental Algorithms/Linked List/Stack & Queue",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Algo/Fundamental Algorithms/Linked List/Stack & Queue.md",tags:[],version:"current",frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Friday, November 18th 2022, 1:35:45 pm",title:"Stack and Queue"},sidebar:"tutorialSidebar",previous:{title:"What is Linked List",permalink:"/obsidian/docs/Algo/Fundamental Algorithms/Linked List/"},next:{title:"Merge Intervals",permalink:"/obsidian/docs/Algo/Fundamental Algorithms/Misc/Intervals/Merge intervals"}},l={},p=[{value:"Stack {LAST IN FIRST OUT}",id:"stack-last-in-first-out",level:2},{value:"Queue {FIRST IN FIRST OUT}",id:"queue-first-in-first-out",level:2},{value:"Priority Queue",id:"priority-queue",level:2},{value:"Priority Queue 2 { Heapq }",id:"priority-queue-2--heapq-",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stack-and-queue"},"Stack and Queue"),(0,r.kt)("h2",{id:"stack-last-in-first-out"},"Stack {LAST IN FIRST OUT}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike an array, a stack does not offer constant-time access to the nth item. However, it does allow constant time adds and removes, as it doesn't require shifting elements around.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.programiz.com/sites/tutorial2program/files/stack.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#regular list can be used as stack\nstack = []\nstack.append(12)\nstack.append(45)\nprint(stack[-1])  #45 last in first out\n\n")),(0,r.kt)("h2",{id:"queue-first-in-first-out"},"Queue {FIRST IN FIRST OUT}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A queue can also be implemented with a linked list. In fact, they are essentially the same thing, as long as items are added and removed from opposite sides."),(0,r.kt)("li",{parentName:"ul"},"Enqueue = Add, Dequeue(POP)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1200px-Data_Queue.svg.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\nd = deque()\nd.append(12)\nd.append(13)\n\nprint(d.popleft())  #12 first in first out\n\n")),(0,r.kt)("h2",{id:"priority-queue"},"Priority Queue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("strong",{parentName:"li"},"priority queue"),"\xa0is an advanced type of the Queue\xa0data structure. Instead of dequeuing the oldest element, a priority queue sorts and dequeues elements based on their\xa0",(0,r.kt)("em",{parentName:"li"},"priorities"),"."),(0,r.kt)("li",{parentName:"ul"},"Priority queues are used to handle scheduling problems where some tasks are prioritized over others.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# the item with the lowest value is removed first\nfrom queue import PriorityQueue\n\nq = PriorityQueue()\n\nq.put(4)\nq.put(2)\nq.put(5)\nq.put(1)\nq.put(3)\n\nwhile not q.empty():\n    next_item = q.get()\n    print(next_item)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# we can add items alogside the priorite numbers\nfrom queue import PriorityQueue  \n\nq = PriorityQueue()\n\nq.put([4, 'Read'])\nq.put([2, 'Play'])\nq.put([5, 'Write'])\nq.put([1, 'Code'])\nq.put([3, 'Study'])\nq.put([4, 's'])\n\n\nwhile not q.empty():\n    next_item = q.get()\n    print(next_item)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# we can multiply with negative to get the defualt out put in reverse\nfrom queue import PriorityQueue  \n\nq = PriorityQueue()\n\nq.put((-4, 'Read'))\nq.put((-2, 'Play'))\nq.put((-5, 'Write'))\nq.put((-1, 'Code'))\nq.put((-3, 'Study'))\n\nwhile not q.empty():\n    next_item = q.get()\n    print(next_item)\n")),(0,r.kt)("h2",{id:"priority-queue-2--heapq-"},"Priority Queue 2 { Heapq }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/heap-queue-or-heapq-in-python/"},"heapq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heapify"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function is used to\xa0",(0,r.kt)("strong",{parentName:"li"},"convert the iterable into a heap"),"\xa0data structure."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heappush"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function is used to\xa0",(0,r.kt)("strong",{parentName:"li"},"insert the element"),"\xa0mentioned in its arguments into heap."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heappop"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function is used to\xa0",(0,r.kt)("strong",{parentName:"li"},"remove and return the smallest element"),"\xa0from heap.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\nminHeap = []\n\n# to add element\nheapq.heappush(minHeap, 1)\nheapq.heappush(minHeap, 13)\n\nprint(minHeap) #sorted array\nprint(minHeap[0]) #get the top max\n\n# to remove elt\nprint(heapq.heappop(minHeap))\nprint(heapq.heappop(minHeap))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# if you already have an array populated with elts, use heapify\nimport heapq\nminHeap = [4,5,6,7,8]\nheapq.heapify(minHeap)\nprint(minHeap)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/36991716/whats-the-difference-between-heapq-and-priorityqueue-in-python"},"Priority Queue vs Heapq")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian/docs/Algo/Python%20Tips%20&%20Tricks/More%20on%20heapq"},"More on heapq")))))}d.isMDXComponent=!0}}]);