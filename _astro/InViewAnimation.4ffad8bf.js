import{j as c}from"./jsx-runtime.b9e88e07.js";import{r as a}from"./index.03be2d59.js";import{c as v}from"./cn.4dfcb6fd.js";import{r as I}from"./resolve-element.72893661.js";import{m as x}from"./motion.045bac02.js";const b={some:0,all:1};function E(e,t,{root:s,margin:r,amount:n="some"}={}){const d=I(e),o=new WeakMap,u=f=>{f.forEach(i=>{const m=o.get(i.target);if(i.isIntersecting!==!!m)if(i.isIntersecting){const h=t(i);typeof h=="function"?o.set(i.target,h):l.unobserve(i.target)}else m&&(m(i),o.delete(i.target))})},l=new IntersectionObserver(u,{root:s,rootMargin:r,threshold:typeof n=="number"?n:b[n]});return d.forEach(f=>l.observe(f)),()=>l.disconnect()}function w(e,{root:t,margin:s,amount:r,once:n=!1}={}){const[d,o]=a.useState(!1);return a.useEffect(()=>{if(!e.current||n&&d)return;const u=()=>(o(!0),n?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:s,amount:r};return E(e.current,u,l)},[t,e,s,n,r]),d}const y=e=>{const t=a.useRef(null),s=w(t),[r,n]=a.useState("visible");return a.useState({}),a.useEffect(()=>{console.log(s),n(s?"visible":"hidden")},[s]),c.jsxs("div",{className:v("text-slate-900",e.className),children:[c.jsx("div",{ref:t}),c.jsx("div",{className:"h-20"}),c.jsx(x.div,{initial:"hidden",animate:r,transition:{duration:1,delay:e.delay},variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:-100}},className:"w-full",children:e.children})]})},A=e=>{const t=a.useRef(null);return w(t,{once:!0}),c.jsx("div",{className:v("text-slate-900",e.className),children:c.jsx(x.div,{initial:"hidden",animate:"visible",transition:{duration:1,delay:e.delay},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:100}},className:"w-full",children:e.children})})};export{A as ItemInViewAnimation,y as ListInViewAnimation};
