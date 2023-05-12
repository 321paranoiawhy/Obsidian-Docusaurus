"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="CSS @font-face",i={unversionedId:"FrontEnd/\u5b57\u4f53\u52a0\u8f7d",id:"FrontEnd/\u5b57\u4f53\u52a0\u8f7d",title:"CSS @font-face",description:"- @font-face \u81ea\u5b9a\u4e49\u5b57\u4f53",source:"@site/docs/FrontEnd/\u5b57\u4f53\u52a0\u8f7d.md",sourceDirName:"FrontEnd",slug:"/FrontEnd/\u5b57\u4f53\u52a0\u8f7d",permalink:"/Obsidian-Docusaurus/docs/FrontEnd/\u5b57\u4f53\u52a0\u8f7d",draft:!1,editUrl:"https://github.com/321paranoiawhy/Obsidian-Docusaurus/edit/dev/docs/FrontEnd/\u5b57\u4f53\u52a0\u8f7d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opacity",permalink:"/Obsidian-Docusaurus/docs/Flutter-&-Dart/Flutter/\u9690\u85cf\u9875\u9762"},next:{title:"APIDOC",permalink:"/Obsidian-Docusaurus/docs/HTTP/API-Doc"}},s={},c=[{value:"link",id:"link",level:2},{value:"@import",id:"import",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-font-face"},"CSS @font-face"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tsejx.github.io/css-guidebook/concept/rules/font-face/"},"@font-face \u81ea\u5b9a\u4e49\u5b57\u4f53"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* 400 \u5b57\u91cd Helvetica Neue CE 55 Roman */\n/* 500 \u5b57\u91cd Helvetica Neue CE 75 Bold */\n/* public \u8def\u5f84\u4e0b\u4e0d\u4f1a\u88ab\u7f16\u8bd1, \u5426\u5219\u4f1a 404 */\n@font-face {\n  font-family: 'Helvetica Neue CE';\n  src: url('/fonts/Helvetica Neue CE 55 Roman.ttf');\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Helvetica Neue CE';\n  src: url('/fonts/Helvetica Neue CE 75 Bold.ttf');\n  font-weight: 500;\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"p.w400 {\n    font-family: 'Helvetica Neue CE';\n    font-weight: 400;\n}\n\np.w500 {\n    font-family: 'Helvetica Neue CE';\n    font-weight: 500;\n}\n")),(0,a.kt)("h1",{id:"html-link"},"html link"),(0,a.kt)("p",null,"\u6700\u4f73\u5b9e\u8df5 --- \u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," \u6807\u7b7e\u653e\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," \u6807\u7b7e\u5185:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link\nrel="preload"\nhref="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"\nas="font"\ncrossOrigin="anonymous"\n/>\n')),(0,a.kt)("h1",{id:"google-fonts"},"Google Fonts"),(0,a.kt)("h2",{id:"link"},"link"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet">\n')),(0,a.kt)("p",null,"\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"p {\n    font-family: 'Merriweather', serif;\n}\n")),(0,a.kt)("h2",{id:"import"},"@import"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," \u6587\u4ef6\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<style>\n  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');\n</style>\n")),(0,a.kt)("p",null,"\u6216\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," \u6587\u4ef6\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import url('https://fonts.googleapis.com/css2family=Merriweather:wght@300&display=swap');\n")),(0,a.kt)("p",null,"\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"p {\n    font-family: 'Merriweather', serif;\n}\n")),(0,a.kt)("h1",{id:"javascript"},"JavaScript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API"},"CSS Font Loading API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/font-loading"},"CSS Font Loading - caniuse"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Define a FontFace\nconst font = new FontFace("myfont", "url(myfont.woff)");\n\n// Add to the document.fonts (FontFaceSet)\ndocument.fonts.add(font);\n\n// Load the font\nfont.load();\n\n// Wait until the fonts are all loaded\ndocument.fonts.ready.then(() => {\n  // Use the font to render text (for example, in a canvas)\n});\n')))}f.isMDXComponent=!0}}]);