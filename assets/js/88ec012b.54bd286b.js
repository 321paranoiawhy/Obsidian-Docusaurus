"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Monday, July 4th 2022, 5:07:18 pm",title:"What is a Container"},i="What is a Container",l={unversionedId:"Containerization/Docker/containers",id:"Containerization/Docker/containers",title:"What is a Container",description:"- Docker containers are often compared to virtual machines but they are actually just processes running on your host OS.",source:"@site/docs/Containerization/Docker/4. containers.md",sourceDirName:"Containerization/Docker",slug:"/Containerization/Docker/containers",permalink:"/Obsidian-Docusaurus/docs/Containerization/Docker/containers",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Containerization/Docker/4. containers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Monday, July 4th 2022, 5:07:18 pm",title:"What is a Container"},sidebar:"tutorialSidebar",previous:{title:"What is an Image",permalink:"/Obsidian-Docusaurus/docs/Containerization/Docker/images"},next:{title:"Volumes",permalink:"/Obsidian-Docusaurus/docs/Containerization/Docker/volumes"}},s={},c=[{value:"Run Containers",id:"run-containers",level:2},{value:"Run Containers in the Foreground",id:"run-containers-in-the-foreground",level:3},{value:"What Happens in the Above Command?",id:"what-happens-in-the-above-command",level:3},{value:"Run Container in the Background",id:"run-container-in-the-background",level:3},{value:"Naming Containers",id:"naming-containers",level:3},{value:"Run Containers with Environment",id:"run-containers-with-environment",level:3},{value:"List Containers",id:"list-containers",level:2},{value:"List Only Running Container",id:"list-only-running-container",level:3},{value:"List All Containers Either Running or Not Running",id:"list-all-containers-either-running-or-not-running",level:3},{value:"Stop Container",id:"stop-container",level:2},{value:"Stop All Running Containers",id:"stop-all-running-containers",level:3},{value:"Remove Container",id:"remove-container",level:2},{value:"Remove Multiple Containers",id:"remove-multiple-containers",level:3},{value:"Force Remove a Running Container",id:"force-remove-a-running-container",level:3},{value:"Remove All Containers",id:"remove-all-containers",level:3},{value:"Journey Inside Containers",id:"journey-inside-containers",level:2},{value:"Logs",id:"logs",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-container"},"What is a Container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker containers are often compared to virtual machines but they are actually just processes running on your host OS.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"A container is an isolated (namespaces) and restricted (cgroups, capabilities, seccomp) process."))))),(0,r.kt)("li",{parentName:"ul"},"On Linux you can run ==ps aux== and see the process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iximiuz.com/en/posts/container-learning-path/"},"Detailed explanation on containers"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-content.gitlab-static.net/1f3ecb847e636cdec7d9db76f7c262e73d836ad9/68747470733a2f2f626c61636b666973682e6769746c61622e696f2f626c61636b666973682f696d616765732f646f636b65722d70726f642e6a7067",alt:null})),(0,r.kt)("h2",{id:"run-containers"},"Run Containers"),(0,r.kt)("h3",{id:"run-containers-in-the-foreground"},"Run Containers in the Foreground"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -it -p 80:80 Nginx\n# -it = interactive\n# -p = port mapping public_port:container_exposed_port\n")),(0,r.kt)("h3",{id:"what-happens-in-the-above-command"},"What Happens in the Above Command?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Look for an image called Nginx in the image cache"),(0,r.kt)("li",{parentName:"ul"},"If not found in the cache, it looks to the default image repo on Dockerhub"),(0,r.kt)("li",{parentName:"ul"},"Pulls it down (latest version), store it in the image cache"),(0,r.kt)("li",{parentName:"ul"},"Started it in a new container"),(0,r.kt)("li",{parentName:"ul"},"We specified to take port 80 on the host and forward to port 80 on the container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We would do ==$ docker container run -d -p 8000:80 nginx== to use port 8000"))),(0,r.kt)("li",{parentName:"ul"},'We can specify versions like "nginx:1.09"')),(0,r.kt)("h3",{id:"run-container-in-the-background"},"Run Container in the Background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -d -p 80:80 nginx  \n#-d = run in detached mode => no showing log**\n")),(0,r.kt)("h3",{id:"naming-containers"},"Naming Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -d -p 27017:27017 --name my_awsome_mongo mongo\n\ndocker container run -d -p --name my_awsome_mongo 27017:27017 mongo\n\n")),(0,r.kt)("h3",{id:"run-containers-with-environment"},"Run Containers with Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql\n\n#then we would be able to access process.env.MYSQL_ROOT_PASSWORD inside the code\n")),(0,r.kt)("h2",{id:"list-containers"},"List Containers"),(0,r.kt)("h3",{id:"list-only-running-container"},"List Only Running Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("h3",{id:"list-all-containers-either-running-or-not-running"},"List All Containers Either Running or Not Running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n# -a = all\n")),(0,r.kt)("h2",{id:"stop-container"},"Stop Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop [container_id]\n")),(0,r.kt)("h3",{id:"stop-all-running-containers"},"Stop All Running Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop $(docker ps -aq)\n")),(0,r.kt)("h2",{id:"remove-container"},"Remove Container"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"First stop the container as you can not remove a running container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm [container_id]\n")),(0,r.kt)("h3",{id:"remove-multiple-containers"},"Remove Multiple Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm [container_id1] [container_id2]\n")),(0,r.kt)("h3",{id:"force-remove-a-running-container"},"Force Remove a Running Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm -f [container_id]\n")),(0,r.kt)("h3",{id:"remove-all-containers"},"Remove All Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm $(docker ps -aq)\n")),(0,r.kt)("h2",{id:"journey-inside-containers"},"Journey Inside Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#docker container exec -it [container_name] bash\ndocker container exec -it MySQL bash\n")),(0,r.kt)("h2",{id:"logs"},"Logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Print the last 100 lines of a container\u2019s logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container logs --tail 100 [container_name]\n")))}d.isMDXComponent=!0}}]);