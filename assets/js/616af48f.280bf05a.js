"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(p,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="redis",l={unversionedId:"Docker/Projects/backend-project-kt6562",id:"Docker/Projects/backend-project-kt6562",title:"redis",description:"- redis -docker hub",source:"@site/docs/Docker/Projects/backend-project-kt6562.md",sourceDirName:"Docker/Projects",slug:"/Docker/Projects/backend-project-kt6562",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-project-kt6562",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Docker/Projects/backend-project-kt6562.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u522b\u8fd0\u884c",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-api-portal"},next:{title:"\u542f\u52a8",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend"}},p={},d=[{value:"\u5b89\u88c5 redis",id:"\u5b89\u88c5-redis",level:2},{value:"\u5728 Docker \u4e2d\u8fd0\u884c redis",id:"\u5728-docker-\u4e2d\u8fd0\u884c-redis",level:2},{value:"\u5728\u672c\u5730\u8fd0\u884c redis",id:"\u5728\u672c\u5730\u8fd0\u884c-redis",level:2},{value:"\u5b89\u88c5 Python",id:"\u5b89\u88c5-python",level:2},{value:"\u67e5\u770b Python \u7248\u672c",id:"\u67e5\u770b-python-\u7248\u672c",level:2},{value:"\u67e5\u770b Python \u5b89\u88c5\u8def\u5f84",id:"\u67e5\u770b-python-\u5b89\u88c5\u8def\u5f84",level:2},{value:"\u5b89\u88c5 pipreqs",id:"\u5b89\u88c5-pipreqs",level:2},{value:"\u751f\u6210 requirements.txt \u6587\u4ef6:",id:"\u751f\u6210-requirementstxt-\u6587\u4ef6",level:2},{value:"\u5b89\u88c5\u76f8\u5e94\u4f9d\u8d56",id:"\u5b89\u88c5\u76f8\u5e94\u4f9d\u8d56",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:2},{value:"\u8fd0\u884c\u5230\u5bb9\u5668",id:"\u8fd0\u884c\u5230\u5bb9\u5668",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"\u5b9e\u65f6\u67e5\u770b\u8fd0\u884c\u8f93\u51fa:",id:"\u5b9e\u65f6\u67e5\u770b\u8fd0\u884c\u8f93\u51fa",level:2},{value:"\u7ec8\u6b62",id:"\u7ec8\u6b62",level:2}],s={toc:d},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis"},"redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/redis"},"redis -docker hub"))),(0,r.kt)("h2",{id:"\u5b89\u88c5-redis"},"\u5b89\u88c5 redis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name some-redis -d redis\n")),(0,r.kt)("h2",{id:"\u5728-docker-\u4e2d\u8fd0\u884c-redis"},"\u5728 Docker \u4e2d\u8fd0\u884c redis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name redis -p 6379:6379 -d redis\n")),(0,r.kt)("h2",{id:"\u5728\u672c\u5730\u8fd0\u884c-redis"},"\u5728\u672c\u5730\u8fd0\u884c redis"),(0,r.kt)("p",null,"#TODO"),(0,r.kt)("h1",{id:"python"},"Python"),(0,r.kt)("h2",{id:"\u5b89\u88c5-python"},"\u5b89\u88c5 Python"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!imporant]"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-3913/"},"Python 3.9.13")),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"li"},"3.9")," \u7248\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"python")),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows installer (64-bit)")),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u65f6\u52fe\u9009 ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Python 3.9 to Path")))),(0,r.kt)("p",null,"\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," \u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," \u4ea4\u4e92\u6a21\u5f0f, \u53ef\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u9000\u51fa\u8be5\u6a21\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u67e5\u770b-python-\u7248\u672c"},"\u67e5\u770b Python \u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -V # python --version\n# Python 3.9.13\n")),(0,r.kt)("h2",{id:"\u67e5\u770b-python-\u5b89\u88c5\u8def\u5f84"},"\u67e5\u770b Python \u5b89\u88c5\u8def\u5f84"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," \u4e0b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"where"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"where python\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," \u4e0b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"where.exe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"where.exe python\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," \u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Where-Object")," \u7684\u522b\u540d (",(0,r.kt)("inlineCode",{parentName:"p"},"alias"),"), \u56e0\u800c\u987b\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"where.exe")," \u67e5\u627e ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," \u5b89\u88c5\u8def\u5f84\u3002\n\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Get-Command where")," \u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," \u547d\u4ee4\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("h1",{id:"\u5b89\u88c5-yapf-\u683c\u5f0f\u5316\u5de5\u5177"},"\u5b89\u88c5 yapf \u683c\u5f0f\u5316\u5de5\u5177"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install yapf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"VS Code")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Setting.json"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"python.formatting.provider": "yapf",\n'))),(0,r.kt)("h1",{id:"\u5b89\u88c5-python-\u4f9d\u8d56"},"\u5b89\u88c5 Python \u4f9d\u8d56"),(0,r.kt)("p",null,"\u5217\u51fa\u5df2\u6709\u4f9d\u8d56\u5305:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5-pipreqs"},"\u5b89\u88c5 pipreqs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pipreqs\n")),(0,r.kt)("h2",{id:"\u751f\u6210-requirementstxt-\u6587\u4ef6"},"\u751f\u6210 requirements.txt \u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipreqs .\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"UnicodeDecodeError: 'gbk' codec can't decode byte 0x80 in position 1854: illegal multibyte sequence")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u62a5\u9519\u539f\u56e0\u662f\u7f16\u7801\u65b9\u5f0f, \u53ef\u6307\u5b9a\u7f16\u7801\u65b9\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"utf8")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipreqs . --encoding=utf8\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"INFO: Successfully saved requirements file in .\\requirements.txt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," \u5185\u5bb9\u793a\u610f:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!example]"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"aiohttp==3.8.3\naioredis==2.0.1\njaydebeapi==1.2.3\nJPype1==1.4.1\nPyJWT==2.6.0\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"WARNING: requirements.txt already exists, use --force to overwrite it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipreqs . --encoding=utf8 --force\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5e94\u4f9d\u8d56"},"\u5b89\u88c5\u76f8\u5e94\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6839\u636e\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," \u6587\u4ef6\u5b89\u88c5\u76f8\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," \u4f9d\u8d56:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/wintest/p/12813246.html"},"Python \u9879\u76ee\u5982\u4f55\u751f\u6210 requirements.txt \u6587\u4ef6"))),(0,r.kt)("h1",{id:"\u672c\u5730\u8fd0\u884c-python-\u9879\u76ee"},"\u672c\u5730\u8fd0\u884c Python \u9879\u76ee"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u672c\u5730\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," \u9879\u76ee\u4e4b\u524d, \u987b\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," \u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# redis \u914d\u7f6e\nREDIS_URL = os.environ.get('REDIS_URL', 'redis://localhost:6379')\n\nweb.run_app(app, host='localhost', port=8080, access_log=None)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VS Code")," \u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py"),", \u53f3\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"Run Code (Ctrl + Alt + N)")," \u5373\u53ef\u3002"),(0,r.kt)("h1",{id:"\u5728-docker-\u4e2d\u8fd0\u884c-python-\u9879\u76ee"},"\u5728 Docker \u4e2d\u8fd0\u884c Python \u9879\u76ee"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker")," \u4e2d\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," \u9879\u76ee\u4e4b\u524d, \u987b\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," \u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," \u5e94\u4fee\u6539\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# redis \u914d\u7f6e\n# REDIS_URL = os.environ.get('REDIS_URL', 'redis://localhost:6379')\nREDIS_URL = os.environ.get('REDIS_URL', 'redis://10.10.21.86:6379')\n\n# web.run_app(app, host='localhost', port=8080, access_log=None)\nweb.run_app(app, host='0.0.0.0', port=8080, access_log=None)\n")),(0,r.kt)("h2",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t python .\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".")," \u8868\u793a\u4e0a\u4e0b\u6587 ",(0,r.kt)("inlineCode",{parentName:"li"},"context"),", \u4e0d\u53ef\u7b80\u5355\u7406\u89e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u989d\u5916\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u8def\u5f84, ",(0,r.kt)("inlineCode",{parentName:"li"},"Docker")," \u4f1a\u5c06\u4e0a\u4e0b\u6587\u76ee\u5f55\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"--file")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"-f"),"\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u6587\u4ef6\u4e0d\u9700\u8981\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Docker")," \u5f15\u64ce, \u53ef\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},".dockerignore")," \u4e2d\u8fdb\u884c\u914d\u7f6e"))),(0,r.kt)("h2",{id:"\u8fd0\u884c\u5230\u5bb9\u5668"},"\u8fd0\u884c\u5230\u5bb9\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name python -p 8080:8080 -d python\n")),(0,r.kt)("h1",{id:"\u4f7f\u7528-docker-composeyml"},"\u4f7f\u7528 docker-compose.yml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/compose#quick-start"},"Quick Start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yeasy.gitbook.io/docker_practice/compose/usage"},"Docker Compose \u4f7f\u7528"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\n\nservices:\n  # redis\n  redis:\n    image: "redis:alpine"\n\n  # python\n  python:\n    build: .\n    ports:\n      - "8080:8080"\n    environment:\n      - REDIS_URL=redis://10.10.21.86:6379\n    depends_on:\n      - redis\n')),(0,r.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h2",{id:"\u5b9e\u65f6\u67e5\u770b\u8fd0\u884c\u8f93\u51fa"},"\u5b9e\u65f6\u67e5\u770b\u8fd0\u884c\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f CONTAINER\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--follow")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"-f")," \u8868\u793a\u5b9e\u65f6\u8ddf\u968f\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl + C")," \u5173\u95ed\u9000\u51fa\u5b9e\u65f6\u67e5\u770b\u8f93\u51fa\u4f1a\u8bdd, \u6216\u8005\u76f4\u63a5\u5173\u95ed\u7ec8\u7aef"))),(0,r.kt)("h2",{id:"\u7ec8\u6b62"},"\u7ec8\u6b62"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose\n")),(0,r.kt)("h1",{id:"\u672c\u5730\u8c03\u7528-api"},"\u672c\u5730\u8c03\u7528 api"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u767b\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," \u4e3a\u4f8b, \u8bf7\u6c42\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," \u5e94\u4e3a:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/login")),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8bf7\u6c42\u540c\u7406\u3002"))),(0,r.kt)("h1",{id:"another-redis-desktop-manager"},"Another Redis Desktop Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/qishibo/AnotherRedisDesktopManager"},"Another Redis Desktop Manager - Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/qishibo/AnotherRedisDesktopManager/releases"},"releases"))))}m.isMDXComponent=!0}}]);