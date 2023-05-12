"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"Python/AIOHTTP",id:"Python/AIOHTTP",title:"AIOHTTP",description:"AIOHTTP",source:"@site/docs/Python/AIOHTTP.md",sourceDirName:"Python",slug:"/Python/AIOHTTP",permalink:"/Obsidian-Docusaurus/docs/Python/AIOHTTP",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Python/AIOHTTP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u817e\u8baf\u4e91\u670d\u52a1\u5668",permalink:"/Obsidian-Docusaurus/docs/Publish/\u817e\u8baf\u4e91\u670d\u52a1\u5668"},next:{title:"Python-\u51fd\u6570\u5f0f\u7f16\u7a0b",permalink:"/Obsidian-Docusaurus/docs/Python/Python-\u51fd\u6570\u5f0f\u7f16\u7a0b"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#Python #AIOHTTP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aiohttp.org/en/stable/"},"AIPHTTP Docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aio-libs/aiohttp"},"aiohttp GitHub"))),(0,a.kt)("h1",{id:"client-example"},(0,a.kt)("inlineCode",{parentName:"h1"},"Client Example")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aiohttp.org/en/stable/client.html#aiohttp-client"},"aiohttp Client API"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import aiohttp\nimport asyncio\n\nasync def main():\n\n    async with aiohttp.ClientSession() as session:\n        async with session.get(\'http://python.org\') as response:\n\n            print("Status:", response.status)\n            print("Content-type:", response.headers[\'content-type\'])\n\n            html = await response.text()\n            print("Body:", html[:15], "...")\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n')),(0,a.kt)("admonition",{title:"DeprecationWarning",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"DeprecationWarning: There is no current event loop\nloop = asyncio.get_event_loop()")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/73361664/asyncio-get-event-loop-deprecationwarning-there-is-no-current-event-loop"},"\u53c2\u8003 stackoverflow"),",\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"loop = asyncio.get_event_loop()")," \u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"loop = asyncio.new_event_loop()")," \u5373\u53ef\u3002"),(0,a.kt)("h1",{id:"server-example"},(0,a.kt)("inlineCode",{parentName:"h1"},"Server Example")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aiohttp.org/en/stable/web.html#aiohttp-web"},"aiohttp Server API"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from aiohttp import web\n\nasync def handle(request):\n    name = request.match_info.get('name', \"Anonymous\")\n    text = \"Hello, \" + name\n    return web.Response(text=text)\n\napp = web.Application()\napp.add_routes([web.get('/', handle),\n                web.get('/{name}', handle)])\n\nif __name__ == '__main__':\n    web.run_app(app)\n")),(0,a.kt)("h1",{id:"middlewares"},(0,a.kt)("inlineCode",{parentName:"h1"},"Middlewares")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aiohttp.org/en/stable/web_advanced.html#aiohttp-web-middlewares"},"aiohttp Middlewares"))))}m.isMDXComponent=!0}}]);