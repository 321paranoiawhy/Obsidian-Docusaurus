"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={"date created":"Sunday, July 24th 2022, 9:15:13 pm","date modified":"Saturday, September 3rd 2022, 6:53:44 pm",title:"Crontab"},l="Crontab",i={unversionedId:"Linux/Crontab",id:"Linux/Crontab",title:"Crontab",description:"- Video tutorial",source:"@site/docs/Linux/Crontab.md",sourceDirName:"Linux",slug:"/Linux/Crontab",permalink:"/obsidian/docs/Linux/Crontab",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Linux/Crontab.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, July 24th 2022, 9:15:13 pm","date modified":"Saturday, September 3rd 2022, 6:53:44 pm",title:"Crontab"},sidebar:"tutorialSidebar",previous:{title:"Common Commands",permalink:"/obsidian/docs/Linux/Common Commands"},next:{title:"Package Management",permalink:"/obsidian/docs/Linux/Package management"}},s={},u=[{value:"List Crontabs",id:"list-crontabs",level:2},{value:"Save Crontab",id:"save-crontab",level:2},{value:"Remove Crontab",id:"remove-crontab",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Tools",id:"tools",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crontab"},"Crontab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=QZJ1drMQz1A&t=16s&ab_channel=CoreySchafer"},"Video tutorial")),(0,a.kt)("li",{parentName:"ul"},"The cron table is the list of tasks scheduled to run at regular time intervals on the system.")),(0,a.kt)("h2",{id:"list-crontabs"},"List Crontabs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"crontab -l\n# list all crontab for the currently logged in user  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"crontab -u admin -l  \n# list all crontab for user admin**\n")),(0,a.kt)("h2",{id:"save-crontab"},"Save Crontab"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"crontab - e  \n# open the file where you can edit/save crontab.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"crontab -u admin -e  \n# edit crontab for user admin**\n")),(0,a.kt)("h2",{id:"remove-crontab"},"Remove Crontab"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"crontab -r  \n# remove all cron jobs\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://linuxhint.com/wp-content/uploads/2020/12/word-image-77.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# asterisk (*) is used to match every value, ex: every day.  \n30 * * * * rsync ... every 30 minutes of any day, 1:30,2:30  \n30 5 1 * * rsync ... every 1(first) day at 5:30,  \n0 0 * * *\xa0 rsync ... every midnight this will run.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# use , for multiple values  \n0 0 1,15 * *\xa0 rsync ... every midnight on the first and 15th day of any month.  \n# use / for intervals, ex: interval of ten = 10, 20, 30...  \n*/10 * * *\xa0 * rsync ... every 10 min interval  \n  \n# use - for range, ex: 0-5 = 0,1,2,3,4,5  \n0 0-5 * * * rsync\xa0 ... every minute from midnight to 5 AM every day.\n")),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"Crontab.guru")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crontab.guru/examples.html"},"Cron examples - Crontab.guru"))))}p.isMDXComponent=!0}}]);