import{j as e}from"./jsx-runtime.b9e88e07.js";import{u as i,A as n}from"./useBodyLock.86f3d15f.js";import{r as t}from"./index.03be2d59.js";import m from"./Image.20e91ff1.js";import{m as c}from"./motion.045bac02.js";const f={src:"/_astro/gear.4468d95b.svg",width:108,height:108,format:"svg"};function p(){const[s,r]=t.useState(!0),[d,o]=t.useState(!1);i(s);const a=setTimeout(()=>{o(!0)},500);return t.useEffect(()=>{clearTimeout(a),r(!1),document.body.classList.remove("fixed")},[]),e.jsx(n,{children:s&&e.jsxs(c.div,{animate:{y:"0%"},exit:{y:"-100%"},transition:{duration:1,delay:.5},className:"w-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 h-screen text-4xl",children:[e.jsx(m,{"client:load":!0,metadata:f,alt:"Loading Gear"}),e.jsx("div",{className:"text-sm",children:"Please refresh if loading for too long."})]})})}export{p as default};
