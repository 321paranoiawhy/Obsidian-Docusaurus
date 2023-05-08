"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={"date created":"Sunday, July 24th 2022, 11:20:41 pm","date modified":"Monday, August 1st 2022, 10:42:47 am",title:"Remote Connection"},i="Remote Connection",l={unversionedId:"Linux/Remote connection",id:"Linux/Remote connection",title:"Remote Connection",description:"SSH",source:"@site/docs/Linux/Remote connection.md",sourceDirName:"Linux",slug:"/Linux/Remote connection",permalink:"/obsidian/docs/Linux/Remote connection",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Linux/Remote connection.md",tags:[],version:"current",frontMatter:{"date created":"Sunday, July 24th 2022, 11:20:41 pm","date modified":"Monday, August 1st 2022, 10:42:47 am",title:"Remote Connection"},sidebar:"tutorialSidebar",previous:{title:"Package Management",permalink:"/obsidian/docs/Linux/Package management"},next:{title:"Shebang (#!)",permalink:"/obsidian/docs/Linux/Shebang"}},s={},c=[{value:"SSH",id:"ssh",level:2},{value:"SCP",id:"scp",level:2},{value:"Rsync",id:"rsync",level:2},{value:"Public Key",id:"public-key",level:2},{value:"Access Public Key",id:"access-public-key",level:3},{value:"Generate Ssh Key",id:"generate-ssh-key",level:3},{value:"How To Set Up SSH Key Pair",id:"how-to-set-up-ssh-key-pair",level:2},{value:"Steps to SSH Key Pair",id:"steps-to-ssh-key-pair",level:2},{value:"Disabling Password-based SSH Authentication (Optional)",id:"disabling-password-based-ssh-authentication-optional",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-connection"},"Remote Connection"),(0,r.kt)("h2",{id:"ssh"},"SSH"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to a remote server"),(0,r.kt)("li",{parentName:"ul"},"syntax user@ip-address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh root@198.77.56.221\n")),(0,r.kt)("h2",{id:"scp"},"SCP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0scp(secure copy)\xa0command copies files or directories between a local and a remote system or between two remote systems.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scp filename root@198.77.56.221:/path/\n")),(0,r.kt)("h2",{id:"rsync"},"Rsync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories"},"Source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Rsync"),", which stands for\xa0",(0,r.kt)("em",{parentName:"li"},"remote sync"),", is a remote and local file synchronization tool."),(0,r.kt)("li",{parentName:"ul"},"It uses an algorithm to minimize the amount of data copied by only moving the portions of files that have changed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -av -e ssh --exclude='*.env' --exclude='node_modules' local-folder-name root@198.58.173.149:/var/www/folder-name\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-a = archive",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This flag syncs recursively and preserves symbolic links, special and device files, modification times, groups, owners, and permissions."),(0,r.kt)("li",{parentName:"ul"},"Recommended than -r"))),(0,r.kt)("li",{parentName:"ul"},"-v = verbose"),(0,r.kt)("li",{parentName:"ul"},"-e = specify the remote shell to use"),(0,r.kt)("li",{parentName:"ul"},"--exclude = ignore")),(0,r.kt)("h2",{id:"public-key"},"Public Key"),(0,r.kt)("h3",{id:"access-public-key"},"Access Public Key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/.ssh/id_rsa.pub\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3828164/how-do-i-access-my-ssh-public-key"},"How do I access my SSH public key? - Stack Overflow"),"\xa0")),(0,r.kt)("h3",{id:"generate-ssh-key"},"Generate Ssh Key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -o\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key"},"Git - Generating Your SSH Public Key"))),(0,r.kt)("h2",{id:"how-to-set-up-ssh-key-pair"},"How To Set Up SSH Key Pair"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04"},"Source")),(0,r.kt)("li",{parentName:"ul"},"Though SSH supports password-based authentication, it is generally recommended that you use\xa0",(0,r.kt)("em",{parentName:"li"},"SSH keys"),"\xa0instead."),(0,r.kt)("li",{parentName:"ul"},"SSH keys are a more secure method of logging into an SSH server, because they are not vulnerable to common brute-force password hacking attacks.")),(0,r.kt)("h2",{id:"steps-to-ssh-key-pair"},"Steps to SSH Key Pair"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate SSH key ",(0,r.kt)("a",{parentName:"li",href:"/obsidian/docs/Linux/Remote%20connection#Generate%20Ssh%20Key"},"Generate Ssh Key")),(0,r.kt)("li",{parentName:"ul"},"Copy the key to the server you want to connect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id username@your_server_address\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#if you the key with other name and path\nssh-copy-id -i .ssh/githubKey.pub user@server\n")),(0,r.kt)("h2",{id:"disabling-password-based-ssh-authentication-optional"},"Disabling Password-based SSH Authentication (Optional)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/ssh/sshd_config\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This command will open up the file within the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nano"),"\xa0text editor. Find the line in the file that includes\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication"),"\xa0(or create the line if it doesn\u2019t exist), make sure it is not commented out with a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"#"),"\xa0at the beginning of the line, and change it to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"no"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"PasswordAuthentication no\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reload the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"sshd"),"\xa0service to put these changes into effect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl reload sshd\n")))}m.isMDXComponent=!0}}]);