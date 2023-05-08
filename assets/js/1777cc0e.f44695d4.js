"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4456],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const l={"date created":"Sunday, July 31st 2022, 3:13:22 pm","date modified":"Friday, November 18th 2022, 12:58:24 pm",title:"Built-in Functions"},a="Built-in Functions",o={unversionedId:"Algo/Python Tips & Tricks/built-in list functions",id:"Algo/Python Tips & Tricks/built-in list functions",title:"Built-in Functions",description:"Zip",source:"@site/docs/Algo/Python Tips & Tricks/built-in list functions.md",sourceDirName:"Algo/Python Tips & Tricks",slug:"/Algo/Python Tips & Tricks/built-in list functions",permalink:"/Obsidian-Docusaurus/docs/Algo/Python Tips & Tricks/built-in list functions",draft:!1,editUrl:"https://github.com/321paranoiawhy/321paranoiawhy.github.io/blob/main/docs/Algo/Python Tips & Tricks/built-in list functions.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, July 31st 2022, 3:13:22 pm","date modified":"Friday, November 18th 2022, 12:58:24 pm",title:"Built-in Functions"},sidebar:"tutorialSidebar",previous:{title:"Python Collections Module",permalink:"/Obsidian-Docusaurus/docs/Algo/Python Tips & Tricks/Useful Python Collections module"},next:{title:"Topological Sort Kahns Algorithm",permalink:"/Obsidian-Docusaurus/docs/Algo/Tree & Graph/Graph/Topological Sort Kahns Algorithm"}},s={},u=[{value:"Zip",id:"zip",level:2},{value:"All",id:"all",level:2},{value:"Any",id:"any",level:2},{value:"Filter",id:"filter",level:2},{value:"Map",id:"map",level:2},{value:"Iter",id:"iter",level:2}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"built-in-functions"},"Built-in Functions"),(0,i.kt)("h2",{id:"zip"},"Zip"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"zip()"),"\xa0function takes ",(0,i.kt)("inlineCode",{parentName:"li"},"iterables")," (can be zero or more), aggregates them in a tuple, and returns it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"languages = ['Java', 'Python', 'JavaScript']\nversions = [14, 3, 6]\n\nresult = zip(languages, versions) #result = zip object\n\nprint(list(result))\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If two ",(0,i.kt)("inlineCode",{parentName:"li"},"iterables")," are passed to\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"zip()"),"; one ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," containing three(3) and other containing five(5) elements.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Then, the returned iterator will contain three tuples. It's because the iterator stops when the shortest ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," is exhausted.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"numbersList = [1, 2, 3]\nnumbers_tuple = ('ONE', 'TWO', 'THREE', 'FOUR')\n\n# Notice, the size of numbersList and numbers_tuple is different\nresult = zip(numbersList, numbers_tuple)\n\n# Converting to set\nresult_set = set(result)\nprint(result_set)\n")),(0,i.kt)("h2",{id:"all"},"All"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"\xa0if all elements in the given ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," are true. If not, it returns\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,i.kt)("li",{parentName:"ul"},"Empty ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," return ",(0,i.kt)("inlineCode",{parentName:"li"},"True"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"boolean_list = ['True', 'True', 'True']\n\n# check if all elements are true\nresult = all(boolean_list)\nprint(result)\n\nprint(all([0, True])) # 0 is considered false\n")),(0,i.kt)("h2",{id:"any"},"Any"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"\xa0if any element of an ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"True"),". If not, it returns\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,i.kt)("li",{parentName:"ul"},"Empty ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," return ",(0,i.kt)("inlineCode",{parentName:"li"},"False"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"boolean_list = ['False', 'True', 'False']\n\n# check if all elements are true\nresult = any(boolean_list)\nprint(result)\n\nprint(any([0, True])) # 0 is considered false\n")),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extracts elements from an ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," (list, tuple etc.) for which a function returns\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"True"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# returns True if number is even\ndef check_even(number):\n    if number % 2 == 0:\n          return True  \n\n    return False\n\n# Extract elements from the numbers list for which check_even() returns True\neven_numbers_iterator = filter(check_even, numbers)\n\n# converting to list\nprint(list(even_numbers_iterator))\n\n# Output: [2, 4, 6, 8, 10]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\neven_numbers_iterator = filter(lambda x: x%2 == 0, numbers)\nprint(list(even_numbers_iterator))\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"\xa0is used as the first argument to the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"filter()"),"\xa0function, all elements that are ",(0,i.kt)("inlineCode",{parentName:"li"},"truthy")," values (gives\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"\xa0if converted to boolean) are extracted.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# random list\nrandom_list = [1, 'a', 0, False, True, '0']\n\nfiltered_iterator = filter(None, random_list)\n\n#converting to list\nfiltered_list = list(filtered_iterator)\n\nprint(filtered_list)\n")),(0,i.kt)("h2",{id:"map"},"Map"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Function applies a given function to each item of an ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable")," (list, tuple etc.) and returns an iterator.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [2, 4, 6, 8, 10]\n\n# returns square of a number\ndef square(number):\n  return number * number\n\n# apply square() function to each item of the numbers list\nsquared_numbers_iterator = map(square, numbers)\n\n# converting to list\nprint(list(squared_numbers_iterator))\n\n# Output: [4, 16, 36, 64, 100]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [2, 4, 6, 8, 10]\nsquared_numbers_iterator = map(lambda x: x**2, numbers)\nprint(list(squared_numbers_iterator))\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Passing Multiple Iterators to map()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"num1 = [4, 5, 6]\nnum2 = [5, 6, 7]\n\nresult = map(lambda n1, n2: n1+n2, num1, num2)\nprint(list(result)) #[9, 11, 13]\n")),(0,i.kt)("h2",{id:"iter"},"Iter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The iter() method returns an iterator for the given argument.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# list of vowels\nphones = ['apple', 'samsung', 'oneplus']\nphones_iter = iter(phones)\n\nprint(next(phones_iter))   \nprint(next(phones_iter))    \nprint(next(phones_iter))    \n\n# Output:\n# apple\n# samsung\n# oneplus\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Iterator yields items that was not yielded in previous iteration.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"or not visited on previous iteration")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"it = iter([1,2,3,4])\nfor x in it:\n     print(x)\n     break\n#1\nfor x in it:  # `1` is yielded in previous iteration. It's not yielded here.\n     print(x)\n#2\n#3\n#4\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"phones = ['apple', 'samsung', 'oneplus']\nphones_iter = iter(phones)\n\nprint(\"samsung\" in phones_iter) #True, visited/iterated upto samsung\n\nfor elt in phones_iter: #prints after samsung\n    print(elt)\n\n#output\n    #oneplus\n")))}c.isMDXComponent=!0}}]);