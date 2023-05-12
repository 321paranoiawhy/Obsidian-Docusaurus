"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},l="\u5206\u522b\u8fd0\u884c",o={unversionedId:"Docker/Projects/backend-api-portal",id:"Docker/Projects/backend-api-portal",title:"\u5206\u522b\u8fd0\u884c",description:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",source:"@site/docs/Docker/Projects/backend-api-portal.md",sourceDirName:"Docker/Projects",slug:"/Docker/Projects/backend-api-portal",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-api-portal",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Docker/Projects/backend-api-portal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5355\u72ec\u8fd0\u884c",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-api-gateway"},next:{title:"redis",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-project-kt6562"}},p={},m=[{value:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",id:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",level:2},{value:"redis",id:"redis",level:3},{value:"Rabbitmq",id:"rabbitmq",level:3},{value:"MySQL",id:"mysql",level:3},{value:"\u5728 Dockerfile \u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728-dockerfile-\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:2},{value:"\u8fd0\u884c\u5230\u5bb9\u5668",id:"\u8fd0\u884c\u5230\u5bb9\u5668",level:2},{value:"\u6a21\u62df\u8bf7\u6c42",id:"\u6a21\u62df\u8bf7\u6c42",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"MYSQL_ROOT_PASSWORD",id:"mysql_root_password",level:2},{value:"MYSQL_ALLOW_EMPTY_PASSWORD",id:"mysql_allow_empty_password",level:2},{value:"MYSQL_RANDOM_ROOT_PASSWORD",id:"mysql_random_root_password",level:2},{value:"Rabbitmq \u63d2\u4ef6",id:"rabbitmq-\u63d2\u4ef6",level:2},{value:"MySQL",id:"mysql-1",level:2}],d={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5206\u522b\u8fd0\u884c"},"\u5206\u522b\u8fd0\u884c"),(0,r.kt)("h2",{id:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56"},"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Maven")," \u5b89\u88c5\u4f9d\u8d56:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'& mvn install -f "d:\\work\\backend\\\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u9879\u76ee\u6709\u4e09\u4e2a\u524d\u7f6e\u4f9d\u8d56:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rabbitmq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MySQL")))),(0,r.kt)("h3",{id:"redis"},"redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/redis"},"redis docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name redis -p 6379:6379 -d redis\n")),(0,r.kt)("h3",{id:"rabbitmq"},"Rabbitmq"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/rabbitmq"},"Rabbitmq - docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Rabbitmq")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --hostname my-rabbit -p 5672:5672 --name some-rabbit rabbitmq:3\n")),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/mysql"},"MySQL - docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"6379")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rabbitmq")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"5672")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mysql")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"3306")))),(0,r.kt)("h2",{id:"\u5728-dockerfile-\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728 Dockerfile \u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"k8s\\deployment.yaml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'containers:\n      - env:\n        - name: SPRING_REDIS_DATABASE\n          value: "2"\n        - name: SPRING_REDIS_HOST\n          value: redis\n        - name: SPRING_REDIS_PORT\n          value: "6379"\n\n        - name: SPRING_RABBITMQ_ADDRESSES\n          value: "amqp://rabbitmq-server-0.rabbitmq-nodes:5672/,amqp://rabbitmq-server-1.rabbitmq-nodes:5672/,amqp://rabbitmq-server-2.rabbitmq-nodes:5672/"\n        - name: SPRING_RABBITMQ_USERNAME\n          value: cereb-user\n        - name: SPRING_RABBITMQ_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: rabbitmq-secret\n              key: cereb-user-password\n        - name: RABBITMQ_TOPIC_EXCHANGENAME\n          value: amq.topic\n\n        - name: INFLUXDB_URL\n          value: http://influxdb-0.influxdb:8086\n        - name: INFLUXDB_TOKEN\n          value: cereb-influx-token\n        - name: INFLUXDB_ORG\n          value: cereb-org\n        - name: INFLUXDB_BUCKET\n          value: device_data\n        - name: LOGGING_LEVEL_COM_SQUARECOOKY\n          value: debug\n')),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s\\deployment.yaml")," \u4e2d\u73af\u5883\u53d8\u91cf\u7684\u8bbe\u7f6e\u76f8\u5e94\u7684\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM openjdk:8u131-jre-alpine\n\nMAINTAINER Wu Pei Hong\n\nENV SPRING_REDIS_DATABASE="2"\nENV SPRING_REDIS_HOST=10.10.21.86\nENV SPRING_REDIS_PORT="6379"\nENV SPRING_RABBITMQ_ADDRESSES="amqp://10.10.21.86:5672/"\n\nENV SPRING_RABBITMQ_USERNAME=guest\nENV SPRING_RABBITMQ_PASSWORD=guest\n\nENV RABBITMQ_TOPIC_EXCHANGENAME=amq.topic\nENV INFLUXDB_URL=http://10.10.21.86:8086\nENV INFLUXDB_TOKEN=cereb-influx-token\nENV INFLUXDB_ORG=cereb-org\nENV INFLUXDB_BUCKET=device_data\nENV LOGGING_LEVEL_COM_SQUARECOOKY=debug\n\nWORKDIR /usr/local/apps/cereb/\n\nCOPY ./target/backend-api-data-0.0.1-SNAPSHOT.jar ./data-0.1.jar\n\nEXPOSE 8080\n\nENTRYPOINT exec java -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -jar data-0.1.jar\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u5c06\u4ee5\u4e0b\u53d8\u91cf\u503c\u4e2d\u7684\u5730\u5740\u66f4\u6362\u4e3a\u672c\u673a ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," (",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.21.86"),") :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_REDIS_HOST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_ADDRESSES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INFLUXDB_URL"),"\n\u540c\u65f6\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_USERNAME")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_PASSWORD")," \u7684\u503c\u5747\u66f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"guest"),"\u3002"))),(0,r.kt)("p",null,"\u53c2\u8003:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yeasy.gitbook.io/docker_practice/image/dockerfile/env"},"ENV \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"))),(0,r.kt)("h2",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t backend-api-data .\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u6b21\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u540e\u90fd\u9700\u8981\u91cd\u65b0",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa\u955c\u50cf"),"\u540e\u518d\u5c06\u955c\u50cf",(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u5230\u5bb9\u5668"),"\u3002\n\u5982\u679c\u53ea\u91cd\u65b0\u8fd0\u884c\u5230\u5bb9\u5668, \u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u7684\u53d8\u66f4\u4e0d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u5230\u5bb9\u5668"},"\u8fd0\u884c\u5230\u5bb9\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name backend-api-data -p 1234:8080 -d backend-api-data\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"1234:8080")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5192\u53f7\u524d\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")," \u8868\u793a\u4f7f\u7528\u7684\u672c\u5730\u7684\u7aef\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5192\u53f7\u540e\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")," \u987b\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"EXPOSE")," \u7684\u503c, \u8fd9\u91cc\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")," \u3002"))),(0,r.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42"},"\u6a21\u62df\u8bf7\u6c42"),(0,r.kt)("p",null,"\u5b9e\u9645\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\main\\java\\com\\cereb\\devicedata\\controller\\DeviceDataController.java")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/data/devices/devices_batch/live")\nList<DeviceData> queryLiveDataByBatch(@RequestParam String[] deviceKeys) {\n    return deviceDataDao.queryLiveDataByBatch(deviceKeys);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u62df\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"li"},"URL")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:1234/data/devices/devices_batch/live")),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," \u53c2\u6570\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"deviceKeys")," , \u6d4b\u8bd5\u65f6\u53c2\u6570\u503c\u53ef\u4efb\u610f, \u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"test")),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 100,\n    "msg": "unknown error",\n    "source": "api-data"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e5f\u53ef\u5728\u6d4f\u89c8\u5668\u91cc\u76f4\u63a5\u8f93\u5165\u94fe\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/data/devices/devices_batch/live?deviceKeys=test")," , \u9875\u9762\u5c06\u663e\u793a\u4e0a\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u3002")),(0,r.kt)("h1",{id:"docker-compose"},"docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\n\nservices:\n  # redis\n  redis:\n    image: "redis:alpine"\n\n  # Rabbitmq\n  Rabbitmq:\n    image: "rabbitmq:3"\n\n  # influxdb\n  influxdb:\n    image: "influxdb:2.3-alpine"\n\n  # java\n  java:\n    build: .\n    ports:\n      - "1234:8080"\n    environment:\n      - SPRING_REDIS_DATABASE=2\n      - SPRING_REDIS_HOST=10.10.21.86\n      - SPRING_REDIS_PORT=6379\n      - SPRING_RABBITMQ_ADDRESSES=amqp://10.10.21.86:5672/\n      - SPRING_RABBITMQ_USERNAME=guest\n      - SPRING_RABBITMQ_PASSWORD=guest\n      - RABBITMQ_TOPIC_EXCHANGENAME=amq.topic\n      - INFLUXDB_URL=http://10.10.21.86:8086\n      - INFLUXDB_TOKEN=cereb-influx-token\n      - INFLUXDB_ORG=cereb-org\n      - INFLUXDB_BUCKET=device_data\n      - LOGGING_LEVEL_COM_SQUARECOOKY=debug\n    depends_on:\n      - redis\n      - Rabbitmq\n      - influxdb\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," (",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.21.86"),") \u53ef\u66ff\u6362\u6210\u76f8\u5e94\u7684\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"SPRING_REDIS_HOST=redis\nSPRING_RABBITMQ_ADDRESSES=amqp://Rabbitmq:5672/\nINFLUXDB_URL=http://influxdb:8086\n")),(0,r.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h1",{id:"docker-rabbitmq-cluster"},"docker-rabbitmq-cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pardahlman/docker-rabbitmq-cluster"},"Cluster RabbitMQ"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"docker-rabbitmq-cluster-rabbitmq2-1  | exec /usr/local/bin/cluster-entrypoint.sh: no such file or directory\ndocker-rabbitmq-cluster-rabbitmq3-1  | exec /usr/local/bin/cluster-entrypoint.sh: no such file or directory\ndocker-rabbitmq-cluster-rabbitmq1-1  | 2023-02-10 02:25:52.725516+00:00 ","[warning]"," <0.132.0> Overriding Erlang cookie using the value set in the environment\ndocker-rabbitmq-cluster-rabbitmq2-1 exited with code 1\ndocker-rabbitmq-cluster-rabbitmq3-1 exited with code 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cluster-entrypoint.sh")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Select End of Line Sequence")," \u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"CRLF")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LF")),(0,r.kt)("h1",{id:"clustering-rabbitmq-docker-containers"},"Clustering RabbitMQ Docker containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create rabbitmq-cluster\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network ls\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network rm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MingxuanHu/RabbitMQ-Docker-cluster"},"RabbitMQ-Docker-cluster - GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/network_create/"},"docker network create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/network_ls/"},"docker network ls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/network_rm/"},"docker network rm"))),(0,r.kt)("admonition",{title:"MySQL",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"[ERROR][Entrypoint]",": Database is uninitialized and password option is not specified\nYou need to specify one of the following as an environment variable:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"MYSQL_ROOT_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"MYSQL_ALLOW_EMPTY_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"MYSQL_RANDOM_ROOT_PASSWORD"))),(0,r.kt)("h2",{id:"mysql_root_password"},"MYSQL_ROOT_PASSWORD"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This variable is mandatory and specifies the password that will be set for the MySQL root superuser account. In the above example, it was set to my\u2014secret\u2014pw.")),(0,r.kt)("h2",{id:"mysql_allow_empty_password"},"MYSQL_ALLOW_EMPTY_PASSWORD"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is an optional variable. Set to a non\u2014empty value, like yes, to allow the container to be started with a blank password for the root user. NOTE: Setting this variable to yes is not recommended unless you really know what you are doing, since this will leave your MySQL instance completely unprotected, allowing anyone to gain complete superuser access.")),(0,r.kt)("h2",{id:"mysql_random_root_password"},"MYSQL_RANDOM_ROOT_PASSWORD"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is an optional variable. Set to a non\u2014empty value, like yes, to generate a random initial password for the root user (using pwgen). The generated root password will be printed to stdout (GENERATED ROOT PASSWORD: .....).")),(0,r.kt)("h2",{id:"rabbitmq-\u63d2\u4ef6"},"Rabbitmq \u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Enable-Rabbitmq-Plugins-Dockerfile")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM rabbitmq:3.8-management\nRUN rabbitmq-plugins enable rabbitmq_mqtt rabbitmq_federation_management rabbitmq_stomp\n")),(0,r.kt)("p",null,"\u7531\u4e0a\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable-Rabbitmq-Plugins-Dockerfile")," \u6587\u4ef6\u6784\u5efa\u5e26\u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Rabbitmq")," \u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"rabbitmq_with_plugins")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -f Enable-Rabbitmq-Plugins-Dockerfile -t rabbitmq_with_plugins .\n")),(0,r.kt)("h2",{id:"mysql-1"},"MySQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://downloads.mysql.com/archives/community/"},"MySQL Community Server Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5.7.10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/81801548"},"MySQL \u4e0b\u8f7d\u4e0e\u5b89\u88c5"))),(0,r.kt)("p",null,"\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," \u73af\u5883\u53d8\u91cf:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MYSQL_HOME")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"D:\\Software\\mysql-5.7.10-winx64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," : \u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"li"},"%MYSQL_HOME%\\bin"))),(0,r.kt)("p",null,"\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u5bc6\u7801:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Enter password: ****\n")))}c.isMDXComponent=!0}}]);