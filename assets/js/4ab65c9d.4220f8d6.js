"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(s,".").concat(m)]||d[m]||k[m]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={"date created":"Tuesday, August 23rd 2022, 3:43:43 pm","date modified":"Tuesday, August 23rd 2022, 4:44:02 pm",title:"7. Docker Compose Networking"},i="7. Docker Compose Networking",l={unversionedId:"Containerization/Docker/docker compose networking",id:"Containerization/Docker/docker compose networking",title:"7. Docker Compose Networking",description:"- Source",source:"@site/docs/Containerization/Docker/7. docker compose networking.md",sourceDirName:"Containerization/Docker",slug:"/Containerization/Docker/docker compose networking",permalink:"/obsidian/docs/Containerization/Docker/docker compose networking",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Containerization/Docker/7. docker compose networking.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{"date created":"Tuesday, August 23rd 2022, 3:43:43 pm","date modified":"Tuesday, August 23rd 2022, 4:44:02 pm",title:"7. Docker Compose Networking"},sidebar:"tutorialSidebar",previous:{title:"Miscellaneous",permalink:"/obsidian/docs/Containerization/Docker/Miscellaneous"},next:{title:"100. Intro to Next.js",permalink:"/obsidian/docs/Frameworks/Nextjs/Intro to Next.js"}},s={},p=[{value:"HOST_PORT Vs CONTAINER_PORT",id:"host_port-vs-container_port",level:2},{value:"Links",id:"links",level:2},{value:"Specify Custom Networks",id:"specify-custom-networks",level:2},{value:"More",id:"more",level:2}],c={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"7-docker-compose-networking"},"7. Docker Compose Networking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/networking/"},"Source")),(0,r.kt)("li",{parentName:"ul"},"By default Compose sets up a single network for your app.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each container for a service joins the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," network and is both reachable by other containers on that network, and discover-able by them at a host-name identical to the container name."))),(0,r.kt)("li",{parentName:"ul"},"For example, suppose your app is in a directory called ",(0,r.kt)("inlineCode",{parentName:"li"},"myapp"),", and your ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," looks like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"\nservices:\n  web:\n    build: .\n    ports:\n      - "8000:8000"\n  db:\n    image: postgres\n    ports:\n      - "8001:5432"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose up"),", the following happens:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A network called ",(0,r.kt)("inlineCode",{parentName:"li"},"myapp_default")," is created."),(0,r.kt)("li",{parentName:"ul"},"A container is created using web\u2019s configuration. It joins the network ",(0,r.kt)("inlineCode",{parentName:"li"},"myapp_default")," under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),"."),(0,r.kt)("li",{parentName:"ul"},"A container is created using db\u2019s configuration. It joins the network ",(0,r.kt)("inlineCode",{parentName:"li"},"myapp_default")," under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"db"),".")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each container can now look up the host-name ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," and get back the appropriate container\u2019s IP address. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),"\u2019s application code could connect to the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres://db:5432")," and start using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Postgres")," database.")),(0,r.kt)("h2",{id:"host_port-vs-container_port"},"HOST_PORT Vs CONTAINER_PORT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For db, the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST_PORT")," is 8001 and the container port is ",(0,r.kt)("inlineCode",{parentName:"li"},"5432")," (",(0,r.kt)("inlineCode",{parentName:"li"},"postgres")," default).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Outside applications use ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST_PORT")," and inside{inside container} applications use ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_PORT")))),(0,r.kt)("li",{parentName:"ul"},"Networked service-to-service communication uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_PORT"),". When ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST_PORT")," is defined, the service is accessible outside the swarm as well."),(0,r.kt)("li",{parentName:"ul"},"Within the ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," container, your connection string to db would look like ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres://db:5432"),", and from the host machine, the connection string would look like ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres://{DOCKER_IP}:8001"),".")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Links allow you to define extra aliases by which a service is reachable from another service."),(0,r.kt)("li",{parentName:"ul"},"They are not required to enable services to communicate - by default, any service can reach any other service at that service\u2019s name."),(0,r.kt)("li",{parentName:"ul"},"In the following example, ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," is reachable from web at the ",(0,r.kt)("inlineCode",{parentName:"li"},"hostnames")," both ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"database"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"\nservices:\n  web:\n    build: .\n    links:\n      - "db:database"\n  db:\n    image: postgres\n')),(0,r.kt)("h2",{id:"specify-custom-networks"},"Specify Custom Networks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instead of just using the default app network, you can specify your own networks with the top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"networks")," key."),(0,r.kt)("li",{parentName:"ul"},"This lets you create more complex ",(0,r.kt)("inlineCode",{parentName:"li"},"topologies")," and specify custom network drivers and options."),(0,r.kt)("li",{parentName:"ul"},"Each service can specify what ",(0,r.kt)("inlineCode",{parentName:"li"},"networks")," to connect to with the service-level ",(0,r.kt)("inlineCode",{parentName:"li"},"networks")," key, which is a list of names referencing entries under the top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"networks")," key.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"\n\nservices:\n  proxy:\n    build: ./proxy\n    networks:  # specify which custom network to connect to at service level networks key\n      - frontend \n  app:\n    build: ./app\n    networks:\n      - frontend\n      - backend\n  db:\n    image: postgres\n    networks:\n      - backend\n\nnetworks:  # define your custom networks at top level networks key\n  frontend: \n  backend:\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Based on the above custom network definition",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," service is isolated from the ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," service, because they do not share a network in common - only ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," can talk to both.")))),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/networking/#use-a-pre-existing-network"},"You can connect to external networks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is useful if you need to connect two docker-compose networks"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://accesto.com/blog/docker-networks-explained-part-2/"},"docker-networks-explained"))))}k.isMDXComponent=!0}}]);