"use strict";(self.webpackChunktobyhogan_space=self.webpackChunktobyhogan_space||[]).push([[414],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("div",{className:""},n.createElement("p",{className:"text-center my-12 font-bold"},"© tobyhogan.space 2024 :)"))}},4556:function(e,t,r){r.d(t,{A:function(){return s}});var n=r(758),a=r(9789);var l=function(e){let{children:t,to:r,setNavOpen:l}=e;return n.createElement("button",{className:"Link2 underline hover:bg-grayNew-275",onClick:()=>{console.log("working"),(0,a.navigate)(r),l(!1)}},t)},o=r(2474),c=r(1336);var s=function(){const{0:e,1:t}=(0,n.useState)(!1),r=(0,n.useRef)(null),s=(0,n.useRef)(null);var i,m;i=r,m=s,(0,n.useEffect)((()=>{function e(e){!i.current||i.current.contains(e.target)||m.current.contains(e.target)||t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[i,m]);const{0:u,1:d}=(0,n.useState)(!1);(0,n.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),d(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),d(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","light"),document.body.classList.add("light"),d(!1))}),[]);const f=n.createElement(n.Fragment,null,n.createElement(l,{to:"/",setNavOpen:t},"HOME"),n.createElement(l,{to:"/blog",setNavOpen:t},"BLOG"),n.createElement(l,{to:"/patch-notes",setNavOpen:t},"PATCHES"),n.createElement(l,{to:"/demo-projects",setNavOpen:t},"DEMOS"),n.createElement(l,{to:"/personal",setNavOpen:t},"ME"),n.createElement(l,{to:"/info",setNavOpen:t},"INFO"));return n.createElement("div",{className:"flex flex-row mx-auto w-fit mb-8"},n.createElement(a.Link,{to:"/",className:"mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline"},"tobyhogan.space"),n.createElement("div",{className:"FullNav"},n.createElement("ul",{className:"my-auto pt-5 [&>*]:ml-5 text-md tracking-wide list-none"},f)),n.createElement("div",{className:"ToggleNav"},n.createElement("button",{ref:s,onClick:()=>{t((e=>!e))}},n.createElement(c.vIB,{className:"ml-4 mt-5",size:24})),e?n.createElement("div",{ref:r,className:"border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm"},n.createElement("ul",{className:"flex flex-col [&>*]:text-start ml-3 [&>*]:mb-1"},f)):null),n.createElement("button",{onClick:function(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),d(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),d(!1))},className:"mt-3 ml-8"},n.createElement(o.afO,{size:22})))}},7660:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var n=r(758),a=r(4556),l=r(3020);t.default=()=>n.createElement("main",{className:""},n.createElement(a.A,null),n.createElement("div",null,n.createElement("h1",{className:"mb-3"},"Resources"),n.createElement("h4",{className:"mt-5 text-center"},"Founders Exchange KZ"),n.createElement("p",{className:"mt-3 text-center"},n.createElement("a",{href:"https://discord.gg/bQuEmWJ5dn"},n.createElement("u",null,"Discord Invite Link"))," -> (bQuEmWJ5dn)")),n.createElement(l.A,null));const o=()=>n.createElement("title",null,"Blog Page")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var n=r(758),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>n.createElement(g,s({attr:m({},e.attr)},t),d(e.child))}function g(e){var t=t=>{var r,{attr:a,size:l,title:i}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-resources-tsx-d5863d0bcb5355c10967.js.map