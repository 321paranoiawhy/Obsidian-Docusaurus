"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"700. API Routes","date created":"Wednesday, November 16th 2022, 4:43:46 pm","date modified":"Saturday, November 19th 2022, 4:38:42 pm"},s="700. API Routes",l={unversionedId:"Frameworks/Nextjs/API routes",id:"Frameworks/Nextjs/API routes",title:"700. API Routes",description:"- API routes allow you to create RESTful endpoints as part of your Next.js application folder structure",source:"@site/docs/Frameworks/Nextjs/700. API routes.md",sourceDirName:"Frameworks/Nextjs",slug:"/Frameworks/Nextjs/API routes",permalink:"/obsidian/docs/Frameworks/Nextjs/API routes",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Frameworks/Nextjs/700. API routes.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{title:"700. API Routes","date created":"Wednesday, November 16th 2022, 4:43:46 pm","date modified":"Saturday, November 19th 2022, 4:38:42 pm"},sidebar:"tutorialSidebar",previous:{title:"600. Client Side Data Fetching",permalink:"/obsidian/docs/Frameworks/Nextjs/Client side data fetching"},next:{title:"800. Styling",permalink:"/obsidian/docs/Frameworks/Nextjs/Styling"}},i={},u=[{value:"API Basic",id:"api-basic",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"700-api-routes"},"700. API Routes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API routes allow you to create RESTful endpoints as part of your Next.js application folder structure"),(0,a.kt)("li",{parentName:"ul"},"Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size."),(0,a.kt)("li",{parentName:"ul"},"How to handle, API requests",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET,POST and DELETE requests"),(0,a.kt)("li",{parentName:"ul"},"Dynamic API routes"),(0,a.kt)("li",{parentName:"ul"},"Catch all API routes"))),(0,a.kt)("li",{parentName:"ul"},"Within the ",(0,a.kt)("inlineCode",{parentName:"li"},"api")," folder, you can define all the APIs for your application")),(0,a.kt)("h2",{id:"api-basic"},"API Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default function handler(req, res) {\n    return res.status(200).json({name: 'Hello Mexico'})\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To handle different HTTP methods in an API route, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"req.method")," in your request handler, like so:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n    //const blog = req.body.blogs;\n  } else {\n    // Handle any other HTTP method\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To handle dynamic api routes,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"blogid.js","blogid.js":!0},"//[blogid].js\nimport {Blogs} from \"../../../data/blogs\";\n\nexport default function handler(req, res) {\n    const {blogid} = req.query;\n    if (req.method === 'GET') {\n        const blog = Blogs.filter(blog => blog.id === parseInt(blogid));\n        res.status(200).json(blog);\n    }else if(req.method === 'DELETE'){\n        const index = Blogs.findIndex(blog => blog.id === parseInt(blogid));\n        Blogs.splice(index, 1);\n        res.status(200);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Catch all api routes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"[...params].js","[...params].js":!0},"//[...params].js\nexport default function handler(req,res){\n    const params = req.query.params\n    console.log(params); //or\n    return res.status(200).json(params)\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Don't call your own next API routes  for pre-rendering content, either directly access the data{DB, json file, headless CMS}, unless using consistent api for all platforms.")))}d.isMDXComponent=!0}}]);