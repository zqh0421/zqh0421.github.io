import{j as g}from"./jsx-runtime.b9e88e07.js";import{a as V,c as y}from"./cn.5beeaabb.js";import{r as h}from"./index.03be2d59.js";const v=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,x=V,j=(t,a)=>e=>{var l;if(a?.variants==null)return x(t,e?.class,e?.className);const{variants:o,defaultVariants:r}=a,u=Object.keys(o).map(s=>{const i=e?.[s],c=r?.[s];if(i===null)return null;const d=v(i)||v(c);return o[s][d]}),n=e&&Object.entries(e).reduce((s,i)=>{let[c,d]=i;return d===void 0||(s[c]=d),s},{}),b=a==null||(l=a.compoundVariants)===null||l===void 0?void 0:l.reduce((s,i)=>{let{class:c,className:d,...k}=i;return Object.entries(k).every(G=>{let[m,f]=G;return Array.isArray(f)?f.includes({...r,...n}[m]):{...r,...n}[m]===f})?[...s,c,d]:s},[]);return x(t,u,b,e?.class,e?.className)},N=j("relative isolate flex justify-center items-center select-none overflow-hidden rounded-sm border-2 align-middle transition-all duration-500 before:absolute before:-left-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70",{variants:{foreground:{default:"border-neutral-50",primary:"border-neutral-50",callout:"border-blue-500"},background:{default:"",primary:"",callout:"border-blue-500"},size:{small:"px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-base",medium:"px-6 py-3 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]",large:"px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]"},isGhost:{true:""}},compoundVariants:[{isGhost:!1,foreground:"primary",className:"bg-primary hover:[&:not(:disabled)]:text-slate-900 focus-visible:text-slate-900"},{isGhost:!0,background:"primary",className:"hover:[&:not(:disabled)]:text-slate-900 focus-visible:text-neutral-50"},{isGhost:!0,foreground:"primary",className:"text-slate-900 before:bg-neutral-50"},{isGhost:!0,background:"callout",className:"hover:[&:not(:disabled)]:text-neutral-50 focus-visible:text-neutral-50"},{isGhost:!0,foreground:"callout",className:"text-blue-500 before:bg-blue-500"},{isGhost:!1,background:"primary",className:"text-slate-900 before:bg-neutral-50"},{isGhost:!1,foreground:"default",className:"bg-slate-900 hover:[&:not(:disabled)]:text-slate-900 focus-visible:text-slate-900"},{isGhost:!0,background:"default",className:"hover:[&:not(:disabled)]:text-slate-900 focus-visible:text-slate-900"},{isGhost:!0,foreground:"default",className:"text-neutral-50 before:bg-neutral-50"},{isGhost:!1,background:"default",className:"text-slate-900 before:bg-slate-900"}],defaultVariants:{foreground:"default",background:"default",size:"medium",isGhost:!1}}),p=h.forwardRef(({foreground:t,background:a,size:e,isGhost:l,children:o,className:r,type:u,...n},b)=>g.jsx("button",{type:u??"button",className:y(N({foreground:t,background:a,size:e,isGhost:l,className:r})),ref:b,...n,children:o}));p.displayName="Button";const w=h.forwardRef(({foreground:t,background:a,size:e,isGhost:l,children:o,className:r,...u},n)=>g.jsx("a",{className:y(N({foreground:t,background:a,size:e,isGhost:l,className:r})),ref:n,...u,children:o}));w.displayName="ButtonLink";export{w as B};
