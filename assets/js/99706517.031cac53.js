"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5187],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,y=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(y,p(p({ref:n},u),{},{components:t})):r.createElement(y,p({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={},p="\u5bf9\u8c61\u7c7b\u578b",i={unversionedId:"TypeScript/intro",id:"TypeScript/intro",title:"\u5bf9\u8c61\u7c7b\u578b",description:"\u53ef\u4ee5\u4f7f\u7528 interface \u6216 type:",source:"@site/docs/TypeScript/intro.md",sourceDirName:"TypeScript",slug:"/TypeScript/intro",permalink:"/Obsidian-Docusaurus/docs/TypeScript/intro",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/TypeScript/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"generics",permalink:"/Obsidian-Docusaurus/docs/TypeScript/generics"},next:{title:"union types",permalink:"/Obsidian-Docusaurus/docs/TypeScript/unions"}},o={},s=[{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:2},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:2},{value:"\u53bb\u9664\u53ef\u9009\u5c5e\u6027\u6216\u53ea\u8bfb\u5c5e\u6027",id:"\u53bb\u9664\u53ef\u9009\u5c5e\u6027\u6216\u53ea\u8bfb\u5c5e\u6027",level:2},{value:"\u5c06\u6240\u6709\u53ef\u9009\u5c5e\u6027\u90fd\u53d8\u4e3a\u5fc5\u987b\u5c5e\u6027:",id:"\u5c06\u6240\u6709\u53ef\u9009\u5c5e\u6027\u90fd\u53d8\u4e3a\u5fc5\u987b\u5c5e\u6027",level:3},{value:"\u5c06\u6240\u6709\u53ea\u8bfb\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u53d8\u5c5e\u6027:",id:"\u5c06\u6240\u6709\u53ea\u8bfb\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u53d8\u5c5e\u6027",level:3},{value:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ea\u8bfb\u5c5e\u6027:",id:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ea\u8bfb\u5c5e\u6027",level:3},{value:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u9009\u5c5e\u6027:",id:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u9009\u5c5e\u6027",level:3},{value:"\u53d6\u51fa\u90e8\u5206\u5c5e\u6027:",id:"\u53d6\u51fa\u90e8\u5206\u5c5e\u6027",level:3},{value:"\u6269\u5c55\u7c7b\u578b",id:"\u6269\u5c55\u7c7b\u578b",level:2},{value:"\u5e76\u96c6",id:"\u5e76\u96c6",level:2}],u={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bf9\u8c61\u7c7b\u578b"},"\u5bf9\u8c61\u7c7b\u578b"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string;\n  age: number;\n}\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7c7b\u578b\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7b49\u4ef7\u4e8e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Person = {\n  name: string;\n  age: number;\n};\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5b9a\u4e49\u76f8\u8f83\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," \u5b9a\u4e49\u82b1\u62ec\u53f7\u524d\u591a\u4e86\u4e2a\u7b49\u4e8e\u53f7 ",(0,a.kt)("strong",{parentName:"p"},"="),"\u3002"),(0,a.kt)("h2",{id:"\u53ef\u9009\u5c5e\u6027"},"\u53ef\u9009\u5c5e\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties"},"Optional Properties"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  username?: string; // username \u4e3a\u53ef\u9009\u5c5e\u6027\n  email: string;\n}\n")),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u53ef\u9009\u5c5e\u6027\u65f6\u987b\u68c0\u67e5\u5176\u662f\u5426\u5b58\u5728:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const findUserBy = (user: User): User => {\n  return typeof user.username === "undefined"\n    ? { email: user.email }\n    : { username: user.username, email: user.email };\n};\n')),(0,a.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u68c0\u67e5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"user.username === undefined\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/3390635"},'How can I check for "undefined" in JavaScript?')),(0,a.kt)("h2",{id:"\u53ea\u8bfb\u5c5e\u6027"},"\u53ea\u8bfb\u5c5e\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties"},(0,a.kt)("inlineCode",{parentName:"a"},"readonly")," Properties"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface readonlyProperty {\n  readonly prop: string;\n}\n\nconst readonlyProperty: readonlyProperty = {\n  prop: "prop",\n};\n\n// OK: \u8bfb\u53d6\u5c5e\u6027\nconsole.log(readonlyProperty.prop); // "prop"\n\n// Error: Cannot assign to \'prop\' because it is a read-only property.\nreadonlyProperty.prop = "new prop";\n')),(0,a.kt)("p",null,"\u5173\u4e8e\u4e0d\u53ef\u53d8:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://immutable-js.com/"},"immutable-js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"Immer"))),(0,a.kt)("h2",{id:"\u53bb\u9664\u53ef\u9009\u5c5e\u6027\u6216\u53ea\u8bfb\u5c5e\u6027"},"\u53bb\u9664\u53ef\u9009\u5c5e\u6027\u6216\u53ea\u8bfb\u5c5e\u6027"),(0,a.kt)("h3",{id:"\u5c06\u6240\u6709\u53ef\u9009\u5c5e\u6027\u90fd\u53d8\u4e3a\u5fc5\u987b\u5c5e\u6027"},"\u5c06\u6240\u6709\u53ef\u9009\u5c5e\u6027\u90fd\u53d8\u4e3a\u5fc5\u987b\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u542b username \u53ef\u9009\u5c5e\u6027\ntype UserWithOptionalUsername = {\n  username?: string;\n  email: string;\n};\n\n// \u53bb\u9664\u6240\u6709\u53ef\u9009\u5c5e\u6027\ntype RemoveAllOptionalKeys<T> = {\n  [key in keyof T]-?: T[key];\n};\n\n// username \u7531\u53ef\u9009\u5c5e\u6027\u53d8\u4e3a\u5fc5\u987b\u5c5e\u6027\ntype UserWithoutOptionalUsername =\n  RemoveAllOptionalKeys<UserWithOptionalUsername>;\n// type UserWithoutOptionalUsername = {\n//   username: string;\n//   email: string;\n// };\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RemoveAllOptionalKeys")," \u6b63\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype"},"Required")," \u7684\u5b9e\u73b0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Required<T> = {\n  [P in keyof T]-?: T[P];\n};\n")),(0,a.kt)("h3",{id:"\u5c06\u6240\u6709\u53ea\u8bfb\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u53d8\u5c5e\u6027"},"\u5c06\u6240\u6709\u53ea\u8bfb\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u53d8\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u542b username \u53ea\u8bfb\u5c5e\u6027\ntype UserWithReadonlyUsername = {\n  readonly username: string;\n  email: string;\n};\n\n// \u53bb\u9664\u6240\u6709\u53ea\u8bfb\u5c5e\u6027\ntype RemoveAllReadonlyKeys<T> = {\n  -readonly [key in keyof T]: T[key];\n};\n\n// username \u7531\u53ea\u8bfb\u5c5e\u6027\u53d8\u4e3a\u53ef\u53d8\u5c5e\u6027\ntype UserWithoutReadonlyUsername =\n  RemoveAllReadonlyKeys<UserWithReadonlyUsername>;\n\n// type UserWithoutReadonlyUsername = {\n//   username: string;\n//   email: string;\n// };\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveAllReadonlyKeys")," \u53ef\u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Mutable<T> = {\n  -readonly [P in keyof T]: T[P];\n};\n")),(0,a.kt)("h3",{id:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ea\u8bfb\u5c5e\u6027"},"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ea\u8bfb\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type _Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\n// \u542b\u6709 name \u548c age \u4e24\u4e2a\u5c5e\u6027\ntype User = {\n  name: string;\n  age: number;\n};\n\n// name \u548c age \u4e24\u4e2a\u5c5e\u6027\u4e3a\u53ea\u8bfb\u5c5e\u6027\ntype UserAllKeysAreReadonly = _Readonly<User>;\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6b63\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype"},"Readonly")," \u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u9009\u5c5e\u6027"},"\u5c06\u6240\u6709\u5c5e\u6027\u90fd\u53d8\u4e3a\u53ef\u9009\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type _Partial<T> = {\n  [P in keyof T]?: T[P] | undefined;\n};\n\n// \u542b\u6709 name \u548c age \u4e24\u4e2a\u5fc5\u987b\u5c5e\u6027\ntype User = {\n  name: string;\n  age: number;\n};\n\n// name \u548c age \u4e24\u4e2a\u5c5e\u6027\u4e3a\u53ef\u9009\u5c5e\u6027\ntype UserAllKeysAreOptional = _Partial<User>;\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6b63\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype"},"Partial")," \u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"\u53d6\u51fa\u90e8\u5206\u5c5e\u6027"},"\u53d6\u51fa\u90e8\u5206\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type _Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n\n// \u542b\u6709 name \u548c age \u4e24\u4e2a\u5c5e\u6027\ntype User = {\n  name: string;\n  age: number;\n};\n\n// \u4ec5\u542b\u6709 name \u5c5e\u6027\u7684 User\ntype UserOnlyHaveName = _Pick<User, "name">;\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6b63\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys"},"Pick")," \u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55\u7c7b\u578b"},"\u6269\u5c55\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types"},"Extending Types"))),(0,a.kt)("p",null,"\u6269\u5c55\u7c7b\u578b\u5c06\u62e5\u6709\u88ab\u6269\u5c55\u7c7b\u578b\u7684\u6240\u6709\u7279\u6027, \u53ef",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u589e\u7279\u6027"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u7ef4\u6301\u539f\u7279\u6027"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  name: string;\n}\n\n// \u65b0\u589e age \u952e, \u5176\u503c\u7684\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\ninterface UserWithAge extends User {\n  age: string;\n}\n\n// \u7ef4\u6301\u539f\u7279\u6027, \u4fdd\u6301\u4e0d\u53d8\ninterface AnotherUser extends User {}\n")),(0,a.kt)("p",null,"\u591a\u7ee7\u627f(\u6269\u5c55):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  name: string;\n}\n\ninterface UserWithAge extends User {\n  age: string;\n}\n\ninterface UserWithAgeAndSex extends User, UserWithAge {\n  sex: string;\n}\n")),(0,a.kt)("h2",{id:"\u5e76\u96c6"},"\u5e76\u96c6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types"},"Intersection Types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections"},"Interfaces vs. Intersections"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Colorful {\n  color: string;\n}\ninterface Circle {\n  radius: number;\n}\n\ntype ColorfulCircle = Colorful & Circle;\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," \u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ColorfulCircle extends Colorful, Circle {}\n")),(0,a.kt)("h1",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"Array")," Type"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Array<T>")," \u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"T[]"),", \u540e\u8005\u4e3a\u524d\u8005\u7684\u7b80\u5199\u8bed\u6cd5\u3002")),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u6570\u7ec4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const arr1: Array<string> = ['1'];\nconst arr2: string[] = ['1'];\n")),(0,a.kt)("p",null,"\u53ea\u8bfb\u6570\u7ec4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const readonlyArray: ReadonlyArray<string> = ['1'];\nconst readonlyArray2: readonly string[] = ['1'];\n")),(0,a.kt)("h1",{id:"\u5143\u7ec4\u7c7b\u578b"},"\u5143\u7ec4\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types"},"Tuple Types"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type fixedArray = [string, number];\n\n// OK\nconst arr: fixedArray = ['0', 1];\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"fixedArray")," \u540e, \u5176\u7d22\u5f15 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u5904\u7684\u5143\u7d20\u5fc5\u987b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", \u7d22\u5f15 ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u5904\u7684\u5143\u7d20\u5fc5\u987b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", \u4e14\u6570\u7ec4\u7684\u957f\u5ea6\u662f\u56fa\u5b9a\u7684 (",(0,a.kt)("inlineCode",{parentName:"p"},"2"),")\u3002"),(0,a.kt)("p",null,"\u5143\u7ec4\u4e2d\u4e5f\u53ef\u4ee5\u6709\u53ef\u9009\u5143\u7d20:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type tupleWithOptionalElement = [string, number?];\n\n// OK\nconst arr1:tupleWithOptionalElement = ['0'];\n// OK\nconst arr2:tupleWithOptionalElement = ['0', 1];\n")),(0,a.kt)("p",null,"\u53ea\u8bfb\u5143\u7ec4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const readonlyTuple: readonly [string, number] = [\"0\", 1];\n// Cannot assign to '0' because it is a read-only property.\nreadonlyTuple[0] = '1';\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u65e0\u6cd5\u5bf9\u5143\u7ec4\u4e2d\u90e8\u5206\u5143\u7d20\u9650\u5b9a\u53ea\u8bfb:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u7d22\u5f15 1 \u5904\u7684\u5143\u7d20\u53ea\u8bfb\n// 'readonly' type modifier is only permitted on array and tuple literal types.\nconst readonlyElementAtIndexOne: [string, readonly number] = [\"1\", 1];\n"))),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"as const")," \u7c7b\u578b\u65ad\u8a00\u5c06\u6570\u7ec4\u8f6c\u6362\u4e3a\u53ea\u8bfb\u5143\u7ec4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const point = [1, 2] as const;\n\n// \u7b49\u4ef7\u4e8e\nconst point: readonly [number, number] = [3, 4];\n")))}c.isMDXComponent=!0}}]);