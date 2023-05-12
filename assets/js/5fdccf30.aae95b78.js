"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i="Overview",o={unversionedId:"You-Do-Not-Know-Algorithms/Shuffle",id:"You-Do-Not-Know-Algorithms/Shuffle",title:"Overview",description:"* Fisher-Yates Shuffle \u53ef\u89c6\u5316",source:"@site/docs/You-Do-Not-Know-Algorithms/Shuffle.md",sourceDirName:"You-Do-Not-Know-Algorithms",slug:"/You-Do-Not-Know-Algorithms/Shuffle",permalink:"/Obsidian-Docusaurus/docs/You-Do-Not-Know-Algorithms/Shuffle",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/You-Do-Not-Know-Algorithms/Shuffle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001",permalink:"/Obsidian-Docusaurus/docs/Vue/\u52a8\u6001"},next:{title:"Example",permalink:"/Obsidian-Docusaurus/docs/You-Do-Not-Know-Design-Patterns/Example"}},m={},s=[{value:"<code>JavaScript</code> Implement",id:"javascript-implement",level:2},{value:"<code>JavaScript</code> Implement",id:"javascript-implement-1",level:2},{value:"<code>Dart</code> Implement",id:"dart-implement",level:2},{value:"<code>Python</code> Implement",id:"python-implement",level:2},{value:"<code>Rust</code> Implement",id:"rust-implement",level:2},{value:"<code>Golang</code> Implement",id:"golang-implement",level:2},{value:"<code>C</code> Implement",id:"c-implement",level:2},{value:"<code>C++</code> Implement",id:"c-implement-1",level:2},{value:"<code>Haskell</code> Implement",id:"haskell-implement",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},(0,a.kt)("inlineCode",{parentName:"h1"},"Overview")),(0,a.kt)("h1",{id:"fisher-yates-shuffle"},(0,a.kt)("inlineCode",{parentName:"h1"},"Fisher-Yates Shuffle")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/haoyang/pen/jMvMQq"},"Fisher-Yates Shuffle \u53ef\u89c6\u5316"))),(0,a.kt)("h2",{id:"javascript-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"JavaScript")," Implement"),(0,a.kt)("h1",{id:"knuth-durstenfeld-shuffle"},(0,a.kt)("inlineCode",{parentName:"h1"},"Knuth-Durstenfeld Shuffle")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s?__biz=MzU4NTIxODYwMQ==&mid=2247484310&idx=1&sn=916f92afff6016256648cfb3c7fd83e7&chksm=fd8cacd0cafb25c670587f22524b111d74b4ddd9954070930b6ef6efb1bd8fba13d4250e57d8&token=885428195&lang=zh_CN#rd"},"\u795e\u4e00\u6837\u7684\u968f\u673a\u7b97\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/"},"Fisher\u2013Yates shuffle \u6d17\u724c\u7b97\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lujiaying.github.io/posts/2016/08/Python-random-2/"},"Python \u968f\u673a\u6570\u6807\u51c6\u5e93(2) \u2013 shuffle()"))),(0,a.kt)("h2",{id:"javascript-implement-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"JavaScript")," Implement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n *\n * @param array \u5f85\u4e71\u5e8f\u7684\u6570\u7ec4\n * @returns \u4e71\u5e8f\u540e\u7684\u6570\u7ec4\n */\nexport const shuffle = (array: Array<number>) => {\n  for (let index = array.length - 1; index > 0; index--) {\n    // prettier-ignore\n    // random index from 0 to index\n    const randomIndex = Math.floor(Math.random() * (index + 1));\n\n    // prettier-ignore\n    // swap elements array[index] and array[randomIndex]\n    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];\n  }\n  return array\n}\n")),(0,a.kt)("h2",{id:"dart-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"Dart")," Implement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void shuffle(List elements, [int start = 0, int? end, Random? random]) {\n  random ??= Random();\n  end ??= elements.length;\n  var length = end - start;\n  while (length > 1) {\n    var pos = random.nextInt(length);\n    length--;\n    var temp = elements[start + pos];\n    elements[start + pos] = elements[start + length];\n    elements[start + length] = temp;\n  }\n}\n")),(0,a.kt)("h2",{id:"python-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"Python")," Implement"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/m00nlight/b3f7a4e4fb9ee9ddd1dd"},"Python Knuth-Durstenfeld Shuffle Algorithm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def knuth_shuffle(items):\n\n"""\n\nFisher-Yates shuffle or Knuth shuffle which name is more famous.\n\nSee <http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle> for detail\n\nType : [a] -> None (shuffle inplace)\n\nPost constrain: Should be list\n\nPost constrain: return array of the same length of input\n\n"""\n\n    for i in range(len(items)):\n        j = randrange(i, len(items))\n        items[i], items[j] = items[j], items[i]\n')),(0,a.kt)("h2",{id:"rust-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"Rust")," Implement"),(0,a.kt)("h2",{id:"golang-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"Golang")," Implement"),(0,a.kt)("h2",{id:"c-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"C")," Implement"),(0,a.kt)("h2",{id:"c-implement-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"C++")," Implement"),(0,a.kt)("h2",{id:"haskell-implement"},(0,a.kt)("inlineCode",{parentName:"h2"},"Haskell")," Implement"))}u.isMDXComponent=!0}}]);