import{r as a}from"./index.03be2d59.js";import{c as v}from"./cn.5beeaabb.js";import{j as h}from"./jsx-runtime.b9e88e07.js";import{r as w}from"./resolve-element.f8ac943f.js";import{m as E}from"./motion.86f98872.js";const I={some:0,all:1};function p(e,t,{root:s,margin:l,amount:i="some"}={}){const c=w(e),o=new WeakMap,f=u=>{u.forEach(n=>{const m=o.get(n.target);if(n.isIntersecting!==!!m)if(n.isIntersecting){const d=t(n);typeof d=="function"?o.set(n.target,d):r.unobserve(n.target)}else m&&(m(n),o.delete(n.target))})},r=new IntersectionObserver(f,{root:s,rootMargin:l,threshold:typeof i=="number"?i:I[i]});return c.forEach(u=>r.observe(u)),()=>r.disconnect()}function g(e,{root:t,margin:s,amount:l,once:i=!1}={}){const[c,o]=a.useState(!1);return a.useEffect(()=>{if(!e.current||i&&c)return;const f=()=>(o(!0),i?void 0:()=>o(!1)),r={root:t&&t.current||void 0,margin:s,amount:l};return p(e.current,f,r)},[t,e,s,i]),c}const O=e=>{const t=a.useRef(null),s=g(t,{once:!0});return a.useEffect(()=>{console.log("Element is in view: ",s)},[s]),h.jsx("div",{ref:t,className:v("text-slate-900",e.className),children:h.jsx(E.div,{initial:"hidden",animate:"visible",transition:{duration:1,delay:e.delay},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:100}},className:"w-full",children:e.children})})};export{O as ItemInViewAnimation};
