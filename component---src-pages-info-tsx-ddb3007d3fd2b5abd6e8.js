"use strict";(self.webpackChunktobyhogan_space=self.webpackChunktobyhogan_space||[]).push([[171],{3020:function(e,t,a){var r=a(758);t.A=function(){return r.createElement("div",{className:""},r.createElement("p",{className:"text-center my-12 font-bold"},"© tobyhogan.space 2024 :)"))}},6942:function(e,t,a){var r=a(758),n=a(9789),l=a(2474),o=a(1336);t.A=function(){const{0:e,1:t}=(0,r.useState)(!1),a=(0,r.useRef)(null);var c;c=a,(0,r.useEffect)((()=>{function e(e){c.current&&!c.current.contains(e.target)&&t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[c]);const{0:s,1:m}=(0,r.useState)(!1);(0,r.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),m(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),m(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),m(!0))}),[]);const i=r.createElement(r.Fragment,null,r.createElement(n.Link,{to:"/",className:"underline hover:bg-grayNew-275"},"HOME"),r.createElement(n.Link,{to:"/blog",className:"underline hover:bg-grayNew-275"},"BLOG"),r.createElement(n.Link,{to:"/patch-notes",className:"underline hover:bg-grayNew-275"},"PATCHES"),r.createElement(n.Link,{to:"/resources",className:"underline hover:bg-grayNew-275"},"RESOURCES"),r.createElement(n.Link,{to:"/personal",className:"underline hover:bg-grayNew-275"},"ME"),r.createElement(n.Link,{to:"/info",className:"underline hover:bg-grayNew-275"},"INFO"));return r.createElement("div",{className:"flex flex-row mx-auto w-fit mb-8"},r.createElement(n.Link,{to:"/",className:"mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline"},"tobyhogan.space"),r.createElement("div",{className:"FullNav"},r.createElement("ul",{className:"my-auto pt-5 [&>a]:ml-5 text-md tracking-wide list-none"},i)),r.createElement("div",{className:"ToggleNav"},r.createElement("button",{onClick:()=>{t((e=>!e))}},r.createElement(o.vIB,{className:"ml-4 mt-5",size:24})),e?r.createElement("div",{ref:a,className:"border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm"},r.createElement("ul",{className:"flex flex-col text-start ml-3 [&>a]:mb-1"},i)):null),r.createElement("button",{onClick:function(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),m(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),m(!1))},className:"mt-3 ml-8"},r.createElement(l.afO,{size:22})))}},6191:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return s}});var r=a(758),n=a(6942),l=a(3020),o=a(1336);const c=e=>{let{text:t}=e;const{0:a,1:n}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,!1,r.createElement("button",{onClick:function(){navigator.clipboard.writeText(t),n(!0)},className:"flex flex-row ml-1 mt-1 hover:bg-black hover:bg-opacity-10 rounded-md pl-2 pr-3"},r.createElement(o.kn0,null)))};var s=()=>r.createElement("main",{className:""},r.createElement(n.A,null),r.createElement("div",{className:"mx-auto w-fit flex flex-col"},r.createElement("h1",{className:"text-center text-3xl font-bold mb-3"},"Information"),r.createElement("h3",{className:"text-center mt-4"},"Contact & Profiles:"),r.createElement("div",{className:"InfoLinks ml-10 mt-2 text-start flex flex-col"},r.createElement("p",{className:"mt-4 flex flex-row"},"- ",r.createElement("b",null,"Email:")," tobyhogan44@gmail.com",r.createElement(c,{text:"tobyhogan44@gmail.com"})),r.createElement("p",{className:"flex flex-row"},"- ",r.createElement("b",null,"Discord: "),"@tobyh_dev",r.createElement(c,{text:"tobyh_dev"})),r.createElement("p",{className:"LContainer1"},"- ",r.createElement("b",null,"YouTube: "),r.createElement("a",{href:"https://www.youtube.com/@tobyhogann",target:"_blank",className:"Link1"},"@",r.createElement("u",null,"tobyhogann"))),r.createElement("p",{className:"LContainer1"},"- ",r.createElement("b",null,"GitHub: "),r.createElement("a",{href:"https://github.com/tobyhogan",target:"_blank",className:"Link1"},"@",r.createElement("u",null,"tobyhogan"))),r.createElement("p",{className:"LContainer1"},"- ",r.createElement("b",null,"IndieHackers: "),r.createElement("a",{href:"https://www.indiehackers.com/Dev_TobyH",target:"_blank",className:"Link1"},"@",r.createElement("u",null,"Dev_TobyH"))),r.createElement("p",{className:"LContainer1"},"- ",r.createElement("b",null,"Mastodon: "),r.createElement("a",{href:"https://mastodon.social/@tobyhogan",target:"_blank",className:"Link1"},"@",r.createElement("u",null,"tobyhogan"))),r.createElement("p",{className:"LContainer1"},"-",r.createElement("b",null," Stack Overflow: "),r.createElement("a",{href:"https://stackoverflow.com/users/14429974/toby-hogan",target:"_blank",className:"Link1"},r.createElement("u",null,"user:14429974"))))),r.createElement(l.A,null));const m=()=>r.createElement("title",null,"Info Page")},1714:function(e,t,a){a.d(t,{k5:function(){return d}});var r=a(758),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),o=["attr","size","title"];function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){return e&&e.map(((e,t)=>r.createElement(e.tag,i({key:t},e.attr),b(e.child))))}function d(e){return t=>r.createElement(f,s({attr:i({},e.attr)},t),b(e.child))}function f(e){var t=t=>{var a,{attr:n,size:l,title:m}=e,u=c(e,o),b=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),m&&r.createElement("title",null,m),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-info-tsx-ddb3007d3fd2b5abd6e8.js.map