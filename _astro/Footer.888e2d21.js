import{j as e}from"./jsx-runtime.b9e88e07.js";import{r}from"./index.03be2d59.js";import{W as h}from"./Wrapper.1bcada84.js";import"./cn.5beeaabb.js";const t={name:"Qianhui Zhao",description:"I'm Qianhui, a passionate front-end developer and HCI researcher currently based in Notre Dame, Indiana, the US.",email:"zqh0421@hotmail.com",url:"https://zqh0421.github.io",links:{github:"https://github.com/zqh0421",instagram:"https://www.instagram.com/chloe_zqh/",linkedin:"https://www.linkedin.com/in/qianhui-zhao-741722189/",red:"https://www.xiaohongshu.com/user/profile/61b80580000000001000a8fa"}},m=[{label:"GITHUB",href:t.links.github},{label:"INSTAGRAM",href:t.links.instagram},{label:"LINKEDIN",href:t.links.linkedin},{label:"RED",href:t.links.red,icon:"Red"},{label:"EMAIL",href:t.email,icon:"EMail"}];function f(){const[s]=r.useState(()=>new Date().getFullYear()),[l]=r.useState(()=>new Date().getUTCMonth()),[i]=r.useState(()=>new Date().getUTCDate()),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.jsx("footer",{"aria-label":"Primary",className:"relative z-10 w-full bg-neutral-900 py-10",children:e.jsxs(h,{children:[e.jsx("hr",{className:"h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent"}),e.jsx("ul",{"aria-label":"social-media",className:"flex flex-col items-center md:flex-row md:justify-center gap-x-6 py-12",children:m.map(({label:a,href:n},c)=>e.jsxs("li",{children:[e.jsx("a",{href:a==="EMAIL"?`mailto:${n}`:n,title:a,rel:"noreferrer",target:"_blank",className:"text-neutral-300 transition-colors hover:text-neutral-50 focus-visible:text-neutral-50",children:a}),a!=="EMAIL"?e.jsx("span",{className:"block text-center md:inline-block md:pl-6",children:"·"}):null]},c))}),e.jsx("hr",{className:"h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent"}),e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("small",{className:"text-xs/5 text-neutral-300",children:"Made with Astro & React by QIANHUI ZHAO"}),e.jsxs("small",{className:"text-xs/5 text-neutral-300",children:["Last Updated: ",o[l]," ",i,", ",s]})]})]})})}export{f as default};
