import{r as e}from"./index.03be2d59.js";import{u as k,f as K,a as $,P as A,L as O}from"./motion.045bac02.js";function I(){const t=e.useRef(!1);return k(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function S(){const t=I(),[s,n]=e.useState(0),r=e.useCallback(()=>{t.current&&n(s+1)},[s]);return[e.useCallback(()=>K.postRender(r),[r]),s]}class U extends e.Component{getSnapshotBeforeUpdate(s){const n=this.props.childRef.current;if(n&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:t,isPresent:s}){const n=e.useId(),r=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:d,height:l,top:f,left:h}=m.current;if(s||!r.current||!d||!l)return;r.current.dataset.motionPopId=n;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${l}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[s]),e.createElement(U,{isPresent:s,childRef:r,sizeRef:m},e.cloneElement(t,{ref:r}))}const P=({children:t,initial:s,isPresent:n,onExitComplete:r,custom:m,presenceAffectsLayout:d,mode:l})=>{const f=$(T),h=e.useId(),a=e.useMemo(()=>({id:h,initial:s,isPresent:n,custom:m,onExitComplete:o=>{f.set(o,!0);for(const c of f.values())if(!c)return;r&&r()},register:o=>(f.set(o,!1),()=>f.delete(o))}),d?void 0:[n]);return e.useMemo(()=>{f.forEach((o,c)=>f.set(c,!1))},[n]),e.useEffect(()=>{!n&&!f.size&&r&&r()},[n]),l==="popLayout"&&(t=e.createElement(B,{isPresent:n},t)),e.createElement(A.Provider,{value:a},t)};function T(){return new Map}function D(t){return e.useEffect(()=>()=>t(),[])}const p=t=>t.key||"";function G(t,s){t.forEach(n=>{const r=p(n);s.set(r,n)})}function H(t){const s=[];return e.Children.forEach(t,n=>{e.isValidElement(n)&&s.push(n)}),s}const _=({children:t,custom:s,initial:n=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:d=!0,mode:l="sync"})=>{const f=e.useContext(O).forceRender||S()[0],h=I(),a=H(t);let o=a;const c=e.useRef(new Map).current,R=e.useRef(o),y=e.useRef(new Map).current,g=e.useRef(!0);if(k(()=>{g.current=!1,G(a,y),R.current=o}),D(()=>{g.current=!0,y.clear(),c.clear()}),g.current)return e.createElement(e.Fragment,null,o.map(u=>e.createElement(P,{key:p(u),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:d,mode:l},u)));o=[...o];const x=R.current.map(p),w=a.map(p),L=x.length;for(let u=0;u<L;u++){const i=x[u];w.indexOf(i)===-1&&!c.has(i)&&c.set(i,void 0)}return l==="wait"&&c.size&&(o=[]),c.forEach((u,i)=>{if(w.indexOf(i)!==-1)return;const M=y.get(i);if(!M)return;const b=x.indexOf(i);let E=u;if(!E){const F=()=>{c.delete(i);const v=Array.from(y.keys()).filter(C=>!w.includes(C));if(v.forEach(C=>y.delete(C)),R.current=a.filter(C=>{const z=p(C);return z===i||v.includes(z)}),!c.size){if(h.current===!1)return;f(),r&&r()}};E=e.createElement(P,{key:p(M),isPresent:!1,onExitComplete:F,custom:s,presenceAffectsLayout:d,mode:l},M),c.set(i,E)}o.splice(b,0,E)}),o=o.map(u=>{const i=u.key;return c.has(i)?u:e.createElement(P,{key:p(u),isPresent:!0,presenceAffectsLayout:d,mode:l},u)}),e.createElement(e.Fragment,null,c.size?o:o.map(u=>e.cloneElement(u)))};function j(t){e.useEffect(()=>{const s=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=t?"hidden":s,()=>{document.body.style.overflow=s}},[t])}export{_ as A,D as a,j as u};