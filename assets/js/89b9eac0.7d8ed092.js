"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"More on Typescript","date created":"Monday, January 23rd 2023, 2:41:42 pm","date modified":"Sunday, April 9th 2023, 9:19:15 am"},l="More on Typescript",i={unversionedId:"Programming langs/TypeScript/More on Typescript",id:"Programming langs/TypeScript/More on Typescript",title:"More on Typescript",description:"Type Narrowing",source:"@site/docs/Programming langs/TypeScript/More on Typescript.md",sourceDirName:"Programming langs/TypeScript",slug:"/Programming langs/TypeScript/More on Typescript",permalink:"/Obsidian-Docusaurus/docs/Programming langs/TypeScript/More on Typescript",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Programming langs/TypeScript/More on Typescript.md",tags:[],version:"current",frontMatter:{title:"More on Typescript","date created":"Monday, January 23rd 2023, 2:41:42 pm","date modified":"Sunday, April 9th 2023, 9:19:15 am"},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/Obsidian-Docusaurus/docs/Programming langs/TypeScript/Fundamentals"},next:{title:"WEB (HTML + CSS)",permalink:"/Obsidian-Docusaurus/docs/Programming langs/WEB"}},p={},s=[{value:"Type Narrowing",id:"type-narrowing",level:2},{value:"Typeof for Primitives",id:"typeof-for-primitives",level:3},{value:"instanceOf for Objects",id:"instanceof-for-objects",level:3},{value:"Property in Object",id:"property-in-object",level:3},{value:"Utility Types",id:"utility-types",level:2},{value:"Partial",id:"partial",level:3},{value:"Required",id:"required",level:3},{value:"Readonly",id:"readonly",level:3},{value:"DeepReadonly",id:"deepreadonly",level:4},{value:"Record&lt;Keys, Type&gt;",id:"recordkeys-type",level:3},{value:"Pick&lt;Type, Keys&gt;",id:"picktype-keys",level:3},{value:"Omit&lt;Type, Keys&gt;",id:"omittype-keys",level:3},{value:"ReturnType",id:"returntype",level:3},{value:"Awaited",id:"awaited",level:3},{value:"Parameters",id:"parameters",level:3},{value:"NonNullable",id:"nonnullable",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"more-on-typescript"},"More on Typescript"),(0,a.kt)("h2",{id:"type-narrowing"},"Type Narrowing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type narrowing is just what it sounds like narrowing down a general type into something more precise.")),(0,a.kt)("h3",{id:"typeof-for-primitives"},"Typeof for Primitives"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"if(typeof input  === 'string'){\n    console.log(input.toUpperCase());\n}\n")),(0,a.kt)("h3",{id:"instanceof-for-objects"},"instanceOf for Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"if(input instanceOf Array){\n    //do sth\n}\n\nif(input instanceOf MyClass){\n    //do sth\n}\n")),(0,a.kt)("h3",{id:"property-in-object"},"Property in Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const output = getResult(req);\nif("error" in output){\n    consol.error(output.error)\n}\n')),(0,a.kt)("h2",{id:"utility-types"},"Utility Types"),(0,a.kt)("h3",{id:"partial"},"Partial"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs a type with all properties of Type set to optional."),(0,a.kt)("li",{parentName:"ul"},"This utility will return a type that represents all subsets of a given type.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\n \nconst todo1 = {\n  title: "organize desk",\n  description: "clear clutter",\n};\n \nconst todo2 = updateTodo(todo1, {\n  description: "throw out trash",\n});\n')),(0,a.kt)("h3",{id:"required"},"Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs a type consisting of all properties of Type set to required."),(0,a.kt)("li",{parentName:"ul"},"The opposite of ",(0,a.kt)("a",{parentName:"li",href:"#Partial"},"Partial"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Props {\n  a?: number;\n  b?: string;\n}\n \nconst obj: Props = { a: 5 };\n \nconst obj2: Required<Props> = { a: 5 };  //error => b is required\n")),(0,a.kt)("h3",{id:"readonly"},"Readonly"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs a type with all properties of ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"readonly"),", meaning the properties of the constructed type cannot be reassigned.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n}\n \nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n \ntodo.title = "Hello";  //error cannot reassign\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"readonly can be useful when working with react -> hooks, to inform states being immutable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function EditEvent() {\n  const [event, setEvent] = useState<Event>()\n  \n  event.title = 'Sth' //not error, but bad practice \n  setEvent(event);  \n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function EditEvent() {\n  const [event, setEvent] = useState<Readonly<Event>>()\n\n  event.title = 'Sth' //error, cannot assign to readonly\n\n  //better, do\n  setEvent({...event, title: event.target.value})\n}\n")),(0,a.kt)("h4",{id:"deepreadonly"},"DeepReadonly"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"consider the following code where readonly doesn't meet our need.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Event = {\n    title: string,\n    body: string,\n    members: string[]\n}\n\nconst readonlyEvent: Readonly<Event> = {\n    title: 'event title',\n    body:  'event body',\n    members: ['m1', 'm2']\n}\n\n//since readonly we can't edit title and body of readonlyEvent\nreadonlyEvent.title = 'event title 2' //error\n\n//but we can update, members\nreadonlyEvent.memebers.push('m3');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is because",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Readonly only applies to top level properties of an object. We can still mutate nested properties and arrays without errors."),(0,a.kt)("li",{parentName:"ul"},"To prevent this use DeepReadonly, ",(0,a.kt)("em",{parentName:"li"},"which is a custom snippet not found in typescript utility types"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type DeepReadonly<T> =\n  T extends Primitive ? T :\n  T extends Array<infer U> ? DeepReadonlyArray<U> :\n  DeepReadonlyObject<T>\n\ntype Primitive = \n  string | number | boolean | undefined | null\n\ninterface DeepReadonlyArray<T> \n  extends ReadonlyArray<DeepReadonly<T>> {}\n\ntype DeepReadonlyObject<T> = {\n  readonly [P in keyof T]: DeepReadonly<T[P]>\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const readonlyEvent: DeepReadonly<Event> = {\n    title: 'event title',\n    body:  'event body',\n    members: ['m1', 'm2']\n}\n\n//since readonly we can't edit title and body of readonlyEvent\nreadonlyEvent.title = 'event title 2' //error\n\n//but we can update, members\nreadonlyEvent.memebers.push('m3'); //error\n")),(0,a.kt)("h3",{id:"recordkeys-type"},"Record<Keys, Type>"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs an object type whose property keys are ",(0,a.kt)("inlineCode",{parentName:"li"},"Keys")," and whose property values are ",(0,a.kt)("inlineCode",{parentName:"li"},"Type"),"."),(0,a.kt)("li",{parentName:"ul"},"This utility can be used to map the properties of a type to another type.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface CatInfo {\n  age: number;\n  breed: string;\n}\n \ntype CatName = "miffy" | "boris" | "mordred";\n \nconst cats: Record<CatName, CatInfo> = {\n  miffy: { age: 10, breed: "Persian" },\n  boris: { age: 5, breed: "Maine Coon" },\n  mordred: { age: 16, breed: "British Shorthair" },\n};\n \nconsole.log(cats.boris);\n')),(0,a.kt)("h3",{id:"picktype-keys"},"Pick<Type, Keys>"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n \ntype TodoPreview = Pick<Todo, "title" | "completed">; //equivalent to => i want just these\n \nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n\n')),(0,a.kt)("h3",{id:"omittype-keys"},"Omit<Type, Keys>"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructs a type by picking all properties from ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," and then removing ",(0,a.kt)("inlineCode",{parentName:"li"},"Keys")," (string literal or union of string literals).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n  createdAt: number;\n}\n\ntype TodoInfo = Omit<Todo, "completed" | "createdAt">;  //all except this\n \nconst todoInfo: TodoInfo = {\n  title: "Pick up kids",\n  description: "Kindergarten closes at 5pm",\n};\n \ntodoInfo;\n')),(0,a.kt)("h3",{id:"returntype"},"ReturnType"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To grab the type returned from a function, we can use the ReturnType utility",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"this is useful when the library/package we're using doesn't provide typescript types"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a: number, b: number): number {\n  return a + b;\n}\n\ntype AddReturnType = ReturnType<typeof add>;\n// type AddReturnType = number;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function featchData(a: number, b: number): Promise<number> {\n  return //...;\n}\n\ntype AddReturnType = ReturnType<typeof featchData>;\n// type AddReturnType = Promise<number>;\n")),(0,a.kt)("h3",{id:"awaited"},"Awaited"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"now in the above second ",(0,a.kt)("a",{parentName:"li",href:"#ReturnType"},"ReturnType")," example the ",(0,a.kt)("inlineCode",{parentName:"li"},"featchData")," type was an async function.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"the return type will be promise, which we don't want")),(0,a.kt)("li",{parentName:"ul"},"to fix this we can use the Awaited type to unwrap the promise and get the type of what the promise resolves to:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function featchData(a: number, b: number): Promise<number> {\n  return //...;\n}\n\ntype AddReturnType = Awaited<ReturnType<typeof featchData>>\n// type AddReturnType = number;\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Same as ",(0,a.kt)("a",{parentName:"li",href:"#ReturnType"},"ReturnType"),", we can use ",(0,a.kt)("inlineCode",{parentName:"li"},"Parameters")," to get the parameter types of a function."),(0,a.kt)("li",{parentName:"ul"},"Parameters gives you a tuple of the argument types, and you can pull out a specific parameter type by index like so:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function sum(a: number, b?:number){\n    //...\n}\n\ntype SumParams = Parameters<typeof sum>\n[number, number | undefined]\n\ntype param1 = SumParams[0]; //param1 is now type number\ntype params2 = SumParams[1]; //param2 is now type number | undefined\n")),(0,a.kt)("h3",{id:"nonnullable"},"NonNullable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in the above example ",(0,a.kt)("a",{parentName:"li",href:"#Parameters"},"Parameters"),", what if we want params2 to be type number not ",(0,a.kt)("inlineCode",{parentName:"li"},"number | undefined")),(0,a.kt)("li",{parentName:"ul"},"we can use the NonNullable utility type, to exclude any null or undefined values from a union type.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type params2 = NonNullable<SumParams[1]>; //param2 is now type number\n\n//or\ntype params2 = NonNullable<Parameters<typeof Sum>[1]>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type NullableString = string | null | undefined;\n\ntype NonNullableString = NonNullable<NullableString>;\n// type NonNullableString = string;\n")))}c.isMDXComponent=!0}}]);