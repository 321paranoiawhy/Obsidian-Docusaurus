"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,k=c["".concat(s,".").concat(p)]||c[p]||d[p]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:58:46 am",title:"Volumes"},l="Volumes",i={unversionedId:"Containerization/Docker/volumes",id:"Containerization/Docker/volumes",title:"Volumes",description:"Why We Need Volumes",source:"@site/docs/Containerization/Docker/5. volumes.md",sourceDirName:"Containerization/Docker",slug:"/Containerization/Docker/volumes",permalink:"/obsidian/docs/Containerization/Docker/volumes",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Containerization/Docker/5. volumes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{"date created":"Thursday, June 16th 2022, 1:47:45 pm","date modified":"Sunday, July 3rd 2022, 11:58:46 am",title:"Volumes"},sidebar:"tutorialSidebar",previous:{title:"What is a Container",permalink:"/obsidian/docs/Containerization/Docker/containers"},next:{title:"What is Docker Compose?",permalink:"/obsidian/docs/Containerization/Docker/docker compose"}},s={},u=[{value:"Why We Need Volumes",id:"why-we-need-volumes",level:2},{value:"What Are Volumes",id:"what-are-volumes",level:2},{value:"Bind Mounts",id:"bind-mounts",level:3},{value:"Named Volumes",id:"named-volumes",level:3},{value:"List Volumes",id:"list-volumes",level:2},{value:"Create Volume",id:"create-volume",level:2},{value:"Remove a Volume",id:"remove-a-volume",level:2},{value:"Remove Unused Volume",id:"remove-unused-volume",level:3},{value:"Volume Detail",id:"volume-detail",level:2}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"volumes"},"Volumes"),(0,r.kt)("h2",{id:"why-we-need-volumes"},"Why We Need Volumes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, all the changes inside the container are lost when the container stops. If we want to keep data between runs,\xa0Docker volumes and bind mounts can help."),(0,r.kt)("li",{parentName:"ul"},"Usually used with database systems such as MySQL, MongoDB\u2026")),(0,r.kt)("h2",{id:"what-are-volumes"},"What Are Volumes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The purpose of using Docker volumes is to persist data outside the container so it can be backed up or shared."),(0,r.kt)("li",{parentName:"ul"},"Multiple containers can mount the same volume."),(0,r.kt)("li",{parentName:"ul"},"There are main 2 ways of doing this",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bind mount",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bind to local folder Managed by user"))),(0,r.kt)("li",{parentName:"ul"},"Named volumes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bind to volume managed by docker")))))),(0,r.kt)("h3",{id:"bind-mounts"},"Bind Mounts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connection from the container to a directory on the host machine.\xa0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"It allows the host to share its own file system with the container"),", which can be made read-only or read-write."),(0,r.kt)("li",{parentName:"ul"},"Absolute path is required when using bind volumes with docker run. aka ==pwd== is required",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"However, We can use relative path when using with docker-compose")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name nginx -p 8080:80 -v $(pwd)/target:/usr/share/nginx/html nginx\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#docker-compose.yml\nversion: "3.2"\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - 8080:80\n    volumes:\n      - ./target:/usr/share/nginx/html  #relative path being used\n')),(0,r.kt)("h3",{id:"named-volumes"},"Named Volumes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike bind mount, where you can mount any directory from your host, volumes are stored in a single location",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(most likely ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/docker/volumes/"),"\xa0on unix systems)"))),(0,r.kt)("li",{parentName:"ul"},"Greatly facilitates managing data (backup, restore, and migration). Docker volumes can safely be shared between several running containers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name nginx -p 8080:80 -v demo:/usr/share/nginx/html nginx\n\n#if the path{demo} is a name, Docker recognizes it as a named volume and tries to create it if it doesn't exist\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose"),", volumes must be declared at the same level as\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"services"),". Then you can refer to them by their name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#docker-compose.yml\nversion: "3.2"\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - 8080:80\n    volumes:\n      - html_files:/usr/share/nginx/html\nvolumes:\n  html_files:\n')),(0,r.kt)("h2",{id:"list-volumes"},"List Volumes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume ls\n")),(0,r.kt)("h2",{id:"create-volume"},"Create Volume"),(0,r.kt)("p",null,"Volumes are created automatically if they don't exist but can also be explicitly created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create --name jupiter-riding\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to use the above volume")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name nginx -p 8080:80 -v jupiter-riding:/usr/share/nginx/html nginx\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#need to use external: true when using explicit volumes with docker-compose\nversion: "3.2"\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - 8080:80\n    volumes:\n      - jupiter-riding:/usr/share/nginx/html\n \nvolumes:\n  jupiter-riding:\n    external: true  #if the volume doesn\'t exist docker will throw an error\n')),(0,r.kt)("h2",{id:"remove-a-volume"},"Remove a Volume"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume rm jupiter-riding\n")),(0,r.kt)("h3",{id:"remove-unused-volume"},"Remove Unused Volume"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume prune\n")),(0,r.kt)("h2",{id:"volume-detail"},"Volume Detail"),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume inspect"),"\xa0command to view the data volume details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume inspect [volume_name]\n")))}d.isMDXComponent=!0}}]);