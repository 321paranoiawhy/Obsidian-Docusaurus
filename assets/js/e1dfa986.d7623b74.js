"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"900. More on Nextjs","date created":"Thursday, November 24th 2022, 4:05:09 pm","date modified":"Thursday, December 8th 2022, 2:55:57 pm"},l="900. More on Nextjs",i={unversionedId:"Frameworks/Nextjs/More on nextjs",id:"Frameworks/Nextjs/More on nextjs",title:"900. More on Nextjs",description:"Layout",source:"@site/docs/Frameworks/Nextjs/900. More on nextjs.md",sourceDirName:"Frameworks/Nextjs",slug:"/Frameworks/Nextjs/More on nextjs",permalink:"/obsidian/docs/Frameworks/Nextjs/More on nextjs",draft:!1,editUrl:"https://github.com/zekaryas1/notes/blob/main/docs/Frameworks/Nextjs/900. More on nextjs.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{title:"900. More on Nextjs","date created":"Thursday, November 24th 2022, 4:05:09 pm","date modified":"Thursday, December 8th 2022, 2:55:57 pm"},sidebar:"tutorialSidebar",previous:{title:"800. Styling",permalink:"/obsidian/docs/Frameworks/Nextjs/Styling"},next:{title:"1000. Authentication",permalink:"/obsidian/docs/Frameworks/Nextjs/Authentication"}},s={},p=[{value:"Layout",id:"layout",level:2},{value:"Component Level Layouts",id:"component-level-layouts",level:3},{value:"Single Layout",id:"single-layout",level:2},{value:"Head Component",id:"head-component",level:2},{value:"Image Component",id:"image-component",level:2},{value:"Remote Images",id:"remote-images",level:3},{value:"Absolute Imports &amp; Module Paths",id:"absolute-imports--module-paths",level:2},{value:"Redirects",id:"redirects",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Prefetching",id:"prefetching",level:2},{value:"Important Next.js Typescript Snippets",id:"important-nextjs-typescript-snippets",level:2},{value:"Rendering",id:"rendering",level:3},{value:"API Request and Response",id:"api-request-and-response",level:3},{value:"config.json",id:"configjson",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"900-more-on-nextjs"},"900. More on Nextjs"),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"define the layout components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex: Header and footer"))),(0,r.kt)("li",{parentName:"ul"},"define the styles for the layout components"),(0,r.kt)("li",{parentName:"ul"},"use the components in ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"header.js","header.js":!0},'function Header() {\n    return <h2 className="header">Header - Lorem ipsum dolor.</h2>\n}\n\nexport default Header;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"layout.css","layout.css":!0},".footer {\n    padding: 20px;\n    text-align: center;\n    background-color: tomato;\n}\n\n.header {\n    padding: 20px;\n    text-align: center;\n    background-color: teal;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"_app.js","_app.js":!0},"import '../styles/globals.css'\nimport Header from \"../components/header\";\nimport Footer from \"../components/footer\";\nimport '../styles/layout.css';\n\nfunction MyApp({Component, pageProps}) {\n    return <>\n        <Header/>\n            <Component {...pageProps} />\n        <Footer/>\n    </>\n}\n\nexport default MyApp\n")),(0,r.kt)("h3",{id:"component-level-layouts"},"Component Level Layouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"what if you don't want the Header component to show up in certain pages"),(0,r.kt)("li",{parentName:"ul"},"How to",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"define the desired layout in the specific page"),(0,r.kt)("li",{parentName:"ul"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.js")," to consider pages with different layout")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"about.js","about.js":!0},'import Footer from "../components/footer";\n\nfunction About() {\n    return <h2>Lorem ipsum dolor sit amet?</h2>\n}\n\nexport default About;\n\nAbout.getLayout = function PageLayout(page) {\n    return (\n        <>\n            {page}\n            <Footer/>\n        </>\n    )\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import '../styles/globals.css'\nimport Header from \"../components/header\";\nimport Footer from \"../components/footer\";\nimport '../styles/layout.css';\n\nfunction MyApp({Component, pageProps}) {\n\n    if (Component.getLayout) {\n        return Component.getLayout(<Component {...pageProps} />)\n    }\n\n    return <>\n        <Header/>\n        <Component {...pageProps} />\n        <Footer/>\n    </>\n}\n\nexport default MyApp\n")),(0,r.kt)("h2",{id:"single-layout"},"Single Layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we can use a single layout file to define our main website structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"layout.jsx","layout.jsx":!0},"function Layout({children}){\n    return <>\n        <Header/>\n          {children}\n        <Footer/>\n    </>\n\n}\nexport default Layout;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"_app.js","_app.js":!0},"import '../styles/globals.css'\nimport Footer from \"../components/Layout\";\nimport '../styles/layout.css';\n\nfunction MyApp({Component, pageProps}) {\n\n    if (Component.getLayout) {\n        return Component.getLayout(<Component {...pageProps} />)\n    }\n\n    return <>\n        <Layout>\n            <Component {...pageProps} />\n        <Layout/>\n    </>\n}\n\nexport default MyApp\n")),(0,r.kt)("h2",{id:"head-component"},"Head Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"built-in component for appending elements to the head of the page")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import Head from \"next/head\";\n\nfunction About() {\n    return <>\n        <Head>\n            <title>Amazon ecommerce</title>\n            <meta name={'description'} content={'One stop solution to all your needs'}/>\n        </Head>\n        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, reiciendis?</h2>\n    </>\n}\n\nexport default About;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can define a global head section in ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"child components can override properties defined in parent component i.e ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.js"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import \'../styles/globals.css\'\nimport Header from "../components/header";\nimport Footer from "../components/footer";\nimport \'../styles/layout.css\';\nimport Head from "next/head";\n\nfunction MyApp({Component, pageProps}) {\n\n    if (Component.getLayout) {\n        return Component.getLayout(<Component {...pageProps} />)\n    }\n\n    return <>\n        <Head>\n            <title>Amazon gift card</title>\n            <meta name={\'description\'} content={\'One stop solution to all your needs\'}/>\n            <link rel="icon" href="/favicon.ico" />\n        </Head>\n        <Header/>\n        <Component {...pageProps} />\n        <Footer/>\n    </>\n}\n\nexport default MyApp\n\n')),(0,r.kt)("h2",{id:"image-component"},"Image Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"why use image component over native ",(0,r.kt)("inlineCode",{parentName:"li"},"img"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"generate & servers images with the right format, saving considerable size -> space -> loading time"),(0,r.kt)("li",{parentName:"ul"},"serve the images in ",(0,r.kt)("inlineCode",{parentName:"li"},"webp")," format, which is the preferred format of web"),(0,r.kt)("li",{parentName:"ul"},"lazy loads the image, which increases page load.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"only load images that are visible in the view-port."))),(0,r.kt)("li",{parentName:"ul"},"adds a placeholder while image is loading",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this preserves layout, good for clean , non-distributing layout"),(0,r.kt)("li",{parentName:"ul"},"to use place holder you need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"static path"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Image from \"next/image\";\nimport image1 from '../public/images/1.jpg';\n\nfunction Images() {\n    return (<>\n\n            //static image\n            <Image src={image1} placeholder={\"blur\"} alt={\"static image\"} height={400} width={400}/>\n\n            //dynamic images\n            <div style={{display: 'flex'}}>\n                {\n                    ['1', '2', '3', '4'].map(value => {\n                        return <Image key={value} src={'/images/' + value + \".jpg\"} alt=\"my images\" height='300'\n                                      width='300'/>\n                    })\n\n                }\n            < /div>\n        </>\n    )\n}\n\nexport default Images;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Common props to use with Image component, in addition to src, width, alt and height",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fill",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next/image#fill"},"https://nextjs.org/docs/api-reference/next/image#fill")),(0,r.kt)("li",{parentName:"ul"},"A boolean that causes the image to fill the parent element instead of setting width and height."),(0,r.kt)("li",{parentName:"ul"},'The parent element must assign position: "relative", position: "fixed", or position: "absolute" style.'),(0,r.kt)("li",{parentName:"ul"},"use object-fit and object-position css property to change the default behaviour",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"},"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position")))))),(0,r.kt)("li",{parentName:"ul"},"sizes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A string that provides information about how wide the image will be at different breakpoints."),(0,r.kt)("li",{parentName:"ul"},"The value of sizes will greatly affect performance for images using fill or which are styled to have a responsive size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/learn/design/responsive-images/#sizes"},"https://web.dev/learn/design/responsive-images/#sizes")))),(0,r.kt)("li",{parentName:"ul"},"placeholder",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next/image#placeholder"},"https://nextjs.org/docs/api-reference/next/image#placeholder")),(0,r.kt)("li",{parentName:"ul"},"A placeholder to use while the image is loading. Possible values are blur or empty. Defaults to empty.")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'    <Image\n      src="/example.png"\n      placeholder="blur"\n      fill\n      sizes="(max-width: 768px) 100vw,\n              (max-width: 1200px) 50vw,\n              33vw"\n    />\n')),(0,r.kt)("h3",{id:"remote-images"},"Remote Images"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next/image#remote-patterns"},"remote-patterns")),(0,r.kt)("li",{parentName:"ul"},"When using an external URL, you must add it to remotePatterns in next.config.js.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  images: {\n    domains: ['assets.acme.com'],\n  },\n}\n\n")),(0,r.kt)("h2",{id:"absolute-imports--module-paths"},"Absolute Imports & Module Paths"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A better way to organize your imports")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@layout/*": [\n        "components/layout/*"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on this configuration,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl")," specify all our paths start from the root directory"),(0,r.kt)("li",{parentName:"ul"},"inside path we are aliasing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@layout -> components/layout")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"_app.js before","_app.js":!0,before:!0},'//before\nimport \'../styles/globals.css\'\nimport Header from "../components/header";\nimport Footer from "../components/footer";\nimport \'../styles/layout.css\';\nimport Head from "next/head";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"_app.js after","_app.js":!0,after:!0},'//after\nimport \'styles/globals.css\'\nimport Header from "@layout/header";\nimport Footer from "@layout/footer";\nimport \'styles/layout.css\';\nimport Head from "next/head";\n')),(0,r.kt)("h2",{id:"redirects"},"Redirects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/redirects"},"Next.js redirects")),(0,r.kt)("li",{parentName:"ul"},"Redirects allow you to redirect an incoming request path to a different destination path."),(0,r.kt)("li",{parentName:"ul"},"To use Redirects you can use the redirects key in ",(0,r.kt)("inlineCode",{parentName:"li"},"next.config.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"next.config.js","next.config.js":!0},"module.exports = {\n  reactStrictMode: true,\n  async redirects() {\n    return [\n      {\n        source: '/about',\n        destination: '/',\n        permanent: true,\n      },\n    ]\n  },\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redirects with different matching",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"path matching"),(0,r.kt)("li",{parentName:"ul"},"wildcard path matching"),(0,r.kt)("li",{parentName:"ul"},"regex path matching"),(0,r.kt)("li",{parentName:"ul"},"header, cookie and query matching"),(0,r.kt)("li",{parentName:"ul"},"redirects with base-path support"),(0,r.kt)("li",{parentName:"ul"},"redirects with i18n support")))),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to define environment variables",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"at project root create a file called ",(0,r.kt)("inlineCode",{parentName:"li"},".env.local")),(0,r.kt)("li",{parentName:"ul"},"add the environment variables"),(0,r.kt)("li",{parentName:"ul"},"to access the variables use ",(0,r.kt)("inlineCode",{parentName:"li"},"process.env.[variable]"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"touch .env.local\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:".env.local",".env.local":!0},"DB_USER=root\nDB_PASSWORD=1234\n\nNEXT_PUBLIC_ANALYTIC_KEY = 13RF2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export async function getServerSideProps(){\n    const db_user = process.env.DB_USER;\n    const dv_password = process.env.DB_PASSWORD;\n}\n\nexport default function HomeComponent(){\n    console.log(process.env.NEXT_PUBLIC_ANALYTIC_KEY);\n    return <p>Home component </p>\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by default environment variables are server side only. meaning they won't be available in front-e end",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"but if you want variables to be on front-end as well, prefix the variables with ",(0,r.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLI_[variable_name]")),(0,r.kt)("li",{parentName:"ul"},"but be careful though not to include secret variables in the font-end end: i.e db_password, token_key")))),(0,r.kt)("h2",{id:"prefetching"},"Prefetching"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefetch pages for faster client-side transitions. This method is only useful for navigations without next/link, as next/link takes care of prefetching pages automatically."),(0,r.kt)("li",{parentName:"ul"},"Let's say you have a login page, and after a login, you redirect the user to the dashboard. For that case, we can prefetch the dashboard to make a faster transition, like in the following example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useCallback, useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Login() {\n  const router = useRouter()\n  const handleSubmit = useCallback((e) => {\n    e.preventDefault()\n\n    //const result = post(\"/login\").data(data)\n    //id result ok... move user to next destination\n    router.push('/dashboard')\n  }, [])\n\n  useEffect(() => {\n    // Prefetch the dashboard page\n    router.prefetch('/dashboard')\n  }, [])\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Form fields */}\n      <button type=\"submit\">Login</button>\n    </form>\n  )\n}\n\n")),(0,r.kt)("h2",{id:"important-nextjs-typescript-snippets"},"Important Next.js Typescript Snippets"),(0,r.kt)("h3",{id:"rendering"},"Rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'\n\nexport const getStaticProps: GetStaticProps = async (context) => {\n  // ...\n}\n\nexport const getStaticPaths: GetStaticPaths = async () => {\n  // ...\n}\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"api-request-and-response"},"API Request and Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\ntype Data = {\n  name: string\n}\n\nexport default (req: NextApiRequest, res: NextApiResponse<Data>) => {\n  res.status(200).json({ name: 'John Doe' })\n}\n")),(0,r.kt)("h3",{id:"configjson"},"config.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/**\n * @type {import('next').NextConfig}\n **/\nconst nextConfig = {\n  /* config options here */\n}\n\nmodule.exports = nextConfig\n")))}c.isMDXComponent=!0}}]);