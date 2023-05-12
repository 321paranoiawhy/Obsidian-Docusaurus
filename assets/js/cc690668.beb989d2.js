"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5917],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>s});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,s=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return a?t.createElement(s,l(l({ref:n},m),{},{components:a})):t.createElement(s,l({ref:n},m))}));function s(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},546:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const i={},l="\u5206\u522b\u8fd0\u884c",o={unversionedId:"Docker/Projects/backend-api-data",id:"Docker/Projects/backend-api-data",title:"\u5206\u522b\u8fd0\u884c",description:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",source:"@site/docs/Docker/Projects/backend-api-data.md",sourceDirName:"Docker/Projects",slug:"/Docker/Projects/backend-api-data",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-api-data",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/Docker/Projects/backend-api-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728 Docker \u4e2d\u8fd0\u884c",permalink:"/Obsidian-Docusaurus/docs/Docker/Pre-Denpendency/RabbitMQ"},next:{title:"\u5355\u72ec\u8fd0\u884c",permalink:"/Obsidian-Docusaurus/docs/Docker/Projects/backend-api-device"}},p={},d=[{value:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",id:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56",level:2},{value:"redis",id:"redis",level:3},{value:"Rabbitmq",id:"rabbitmq",level:3},{value:"influxdb",id:"influxdb",level:3},{value:"\u5728 Dockerfile \u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728-dockerfile-\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:2},{value:"\u8fd0\u884c\u5230\u5bb9\u5668",id:"\u8fd0\u884c\u5230\u5bb9\u5668",level:2},{value:"\u6a21\u62df\u8bf7\u6c42",id:"\u6a21\u62df\u8bf7\u6c42",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}],m={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5206\u522b\u8fd0\u884c"},"\u5206\u522b\u8fd0\u884c"),(0,r.kt)("h2",{id:"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56"},"\u542f\u52a8\u524d\u7f6e\u4f9d\u8d56"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Maven")," \u5b89\u88c5\u4f9d\u8d56:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'& mvn install -f "d:\\work\\backend\\\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u9879\u76ee\u6709\u4e09\u4e2a\u524d\u7f6e\u4f9d\u8d56:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rabbitmq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"influxdb")))),(0,r.kt)("h3",{id:"redis"},"redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/redis"},"redis docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name redis -p 6379:6379 -d redis\n")),(0,r.kt)("h3",{id:"rabbitmq"},"Rabbitmq"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/rabbitmq"},"Rabbitmq - docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Rabbitmq")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --hostname my-rabbit -p 5672:5672 --name some-rabbit rabbitmq:3\n")),(0,r.kt)("h3",{id:"influxdb"},"influxdb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/influxdb"},"influxdb - docker hub"))),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"influxdb")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8086:8086 -v myInfluxVolume:/var/lib/influxdb2 influxdb:2.3-alpine\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"6379")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rabbitmq")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"5672")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"influxdb")," \u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"8086")))),(0,r.kt)("h2",{id:"\u5728-dockerfile-\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728 Dockerfile \u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"k8s\\deployment.yaml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'containers:\n      - env:\n        - name: SPRING_REDIS_DATABASE\n          value: "2"\n        - name: SPRING_REDIS_HOST\n          value: redis\n        - name: SPRING_REDIS_PORT\n          value: "6379"\n\n        - name: SPRING_RABBITMQ_ADDRESSES\n          value: "amqp://rabbitmq-server-0.rabbitmq-nodes:5672/,amqp://rabbitmq-server-1.rabbitmq-nodes:5672/,amqp://rabbitmq-server-2.rabbitmq-nodes:5672/"\n        - name: SPRING_RABBITMQ_USERNAME\n          value: cereb-user\n        - name: SPRING_RABBITMQ_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: rabbitmq-secret\n              key: cereb-user-password\n        - name: RABBITMQ_TOPIC_EXCHANGENAME\n          value: amq.topic\n\n        - name: INFLUXDB_URL\n          value: http://influxdb-0.influxdb:8086\n        - name: INFLUXDB_TOKEN\n          value: cereb-influx-token\n        - name: INFLUXDB_ORG\n          value: cereb-org\n        - name: INFLUXDB_BUCKET\n          value: device_data\n        - name: LOGGING_LEVEL_COM_SQUARECOOKY\n          value: debug\n')),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s\\deployment.yaml")," \u4e2d\u73af\u5883\u53d8\u91cf\u7684\u8bbe\u7f6e\u76f8\u5e94\u7684\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM openjdk:8u131-jre-alpine\n\nMAINTAINER Wu Pei Hong\n\nENV SPRING_REDIS_DATABASE="2"\nENV SPRING_REDIS_HOST=10.10.21.86\nENV SPRING_REDIS_PORT="6379"\nENV SPRING_RABBITMQ_ADDRESSES="amqp://10.10.21.86:5672/"\n\nENV SPRING_RABBITMQ_USERNAME=guest\nENV SPRING_RABBITMQ_PASSWORD=guest\n\nENV RABBITMQ_TOPIC_EXCHANGENAME=amq.topic\nENV INFLUXDB_URL=http://10.10.21.86:8086\nENV INFLUXDB_TOKEN=cereb-influx-token\nENV INFLUXDB_ORG=cereb-org\nENV INFLUXDB_BUCKET=device_data\nENV LOGGING_LEVEL_COM_SQUARECOOKY=debug\n\nWORKDIR /usr/local/apps/cereb/\n\nCOPY ./target/backend-api-data-0.0.1-SNAPSHOT.jar ./data-0.1.jar\n\nEXPOSE 8080\n\nENTRYPOINT exec java -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -jar data-0.1.jar\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u5c06\u4ee5\u4e0b\u53d8\u91cf\u503c\u4e2d\u7684\u5730\u5740\u66f4\u6362\u4e3a\u672c\u673a ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," (",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.21.86"),") :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_REDIS_HOST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_ADDRESSES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INFLUXDB_URL"),"\n\u540c\u65f6\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_USERNAME")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_RABBITMQ_PASSWORD")," \u7684\u503c\u5747\u66f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"guest"),"\u3002"))),(0,r.kt)("p",null,"\u53c2\u8003:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yeasy.gitbook.io/docker_practice/image/dockerfile/env"},"ENV \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"))),(0,r.kt)("h2",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t backend-api-data .\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u6b21\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u540e\u90fd\u9700\u8981\u91cd\u65b0",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa\u955c\u50cf"),"\u540e\u518d\u5c06\u955c\u50cf",(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u5230\u5bb9\u5668"),"\u3002\n\u5982\u679c\u53ea\u91cd\u65b0\u8fd0\u884c\u5230\u5bb9\u5668, \u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u7684\u53d8\u66f4\u4e0d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u5230\u5bb9\u5668"},"\u8fd0\u884c\u5230\u5bb9\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name backend-api-data -p 1234:8080 -d backend-api-data\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"1234:8080")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5192\u53f7\u524d\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")," \u8868\u793a\u4f7f\u7528\u7684\u672c\u5730\u7684\u7aef\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5192\u53f7\u540e\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")," \u987b\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"EXPOSE")," \u7684\u503c, \u8fd9\u91cc\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")," \u3002"))),(0,r.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42"},"\u6a21\u62df\u8bf7\u6c42"),(0,r.kt)("p",null,"\u5b9e\u9645\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\main\\java\\com\\cereb\\devicedata\\controller\\DeviceDataController.java")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/data/devices/devices_batch/live")\nList<DeviceData> queryLiveDataByBatch(@RequestParam String[] deviceKeys) {\n    return deviceDataDao.queryLiveDataByBatch(deviceKeys);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u62df\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"li"},"URL")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:1234/data/devices/devices_batch/live")),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," \u53c2\u6570\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"deviceKeys")," , \u6d4b\u8bd5\u65f6\u53c2\u6570\u503c\u53ef\u4efb\u610f, \u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"test")),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 100,\n    "msg": "unknown error",\n    "source": "api-data"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e5f\u53ef\u5728\u6d4f\u89c8\u5668\u91cc\u76f4\u63a5\u8f93\u5165\u94fe\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/data/devices/devices_batch/live?deviceKeys=test")," , \u9875\u9762\u5c06\u663e\u793a\u4e0a\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u3002")),(0,r.kt)("h1",{id:"docker-compose"},"docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\n\nservices:\n  # redis\n  redis:\n    image: "redis:alpine"\n\n  # Rabbitmq\n  Rabbitmq:\n    image: "rabbitmq:3"\n\n  # influxdb\n  influxdb:\n    image: "influxdb:2.3-alpine"\n\n  # java\n  java:\n    build: .\n    ports:\n      - "1234:8080"\n    environment:\n      - SPRING_REDIS_DATABASE=2\n      - SPRING_REDIS_HOST=10.10.21.86\n      - SPRING_REDIS_PORT=6379\n      - SPRING_RABBITMQ_ADDRESSES=amqp://10.10.21.86:5672/\n      - SPRING_RABBITMQ_USERNAME=guest\n      - SPRING_RABBITMQ_PASSWORD=guest\n      - RABBITMQ_TOPIC_EXCHANGENAME=amq.topic\n      - INFLUXDB_URL=http://10.10.21.86:8086\n      - INFLUXDB_TOKEN=cereb-influx-token\n      - INFLUXDB_ORG=cereb-org\n      - INFLUXDB_BUCKET=device_data\n      - LOGGING_LEVEL_COM_SQUARECOOKY=debug\n    depends_on:\n      - redis\n      - Rabbitmq\n      - influxdb\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," (",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.21.86"),") \u53ef\u66ff\u6362\u6210\u76f8\u5e94\u7684\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"SPRING_REDIS_HOST=redis\nSPRING_RABBITMQ_ADDRESSES=amqp://Rabbitmq:5672/\nINFLUXDB_URL=http://influxdb:8086\n")),(0,r.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")))}u.isMDXComponent=!0}}]);