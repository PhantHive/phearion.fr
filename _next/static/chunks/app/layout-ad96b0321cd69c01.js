(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9748:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4475,23)),Promise.resolve().then(r.bind(r,4285)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.bind(r,8985)),Promise.resolve().then(r.bind(r,4370)),Promise.resolve().then(r.bind(r,1488))},4285:(e,t,r)=>{"use strict";r.d(t,{GoogleAnalytics:()=>n});var s=r(2115),a=r(6658);function n(){let e=(0,a.usePathname)();return(0,s.useEffect)(()=>{let t=window.location.search;window.dataLayer=window.dataLayer||[],window.gtag||(window.gtag=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];window.dataLayer.push(t)});let r=document.createElement("script");return r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=G-E5E8HN8117",document.head.appendChild(r),window.gtag("js",new Date),window.gtag("config","G-E5E8HN8117",{page_path:e+(t||"")}),()=>{document.head.removeChild(r)}},[e]),null}},8985:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(5155),a=r(2115);function n(){let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{localStorage.getItem("cookiePreference")||t(!0)},[]),e)?(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75",children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto",children:[(0,s.jsx)("video",{className:"mb-4",src:"/videos/zumi-wave.mp4",autoPlay:!0,loop:!0,muted:!0}),(0,s.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Cookie Notice"}),(0,s.jsx)("p",{className:"text-gray-800 mb-6",children:"We use cookies to analyze traffic and see if we have any visitors aha. By clicking OK, you agree to our use of cookies. By clicking no, you will be redirected to the best youtube song ever :)"}),(0,s.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,s.jsx)("button",{onClick:()=>{localStorage.setItem("cookiePreference","accepted"),t(!1)},className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"OK"}),(0,s.jsx)("button",{onClick:()=>{window.location.href="https://www.youtube.com/watch?v=1iZC69TAcfc&list=RDeqjFmsZGBSc&index=2"},className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",children:"No"})]})]})}):null}},4370:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(5155),a=r(5565),n=r(2115);let i=()=>{let[e,t]=(0,n.useState)("");return(0,n.useEffect)(()=>{t(new Date().getFullYear().toString())},[]),(0,s.jsx)("footer",{className:"bg-gray-900 text-white py-12",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center gap-2 mb-6",children:[(0,s.jsx)("div",{className:"relative w-8 h-8",children:(0,s.jsx)(a.default,{src:"/images/logo.png",alt:"Phearion Logo",fill:!0,style:{objectFit:"contain"}})}),(0,s.jsx)("span",{className:"text-xl font-semibold",children:"Phearion"})]}),(0,s.jsx)("p",{className:"text-gray-400 mb-8",children:"Creating digital solutions that matter"}),(0,s.jsxs)("a",{href:"https://github.com/phearion",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors",children:[(0,s.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),"GitHub"]}),(0,s.jsxs)("p",{className:"mt-8 text-gray-500",children:["\xa9 ",e," Phearion. All rights reserved."]})]})})})}},1488:(e,t,r)=>{"use strict";r.d(t,{default:()=>C});var s=r(5155),a=r(8173),n=r.n(a),i=r(5565),l=r(1714),o=r(2115),c=r(9656),d=r(9234),h=r(7249);class u extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function m(e){let{children:t,isPresent:r}=e,a=(0,o.useId)(),n=(0,o.useRef)(null),i=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,o.useContext)(h.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:o}=i.current;if(r||!n.current||!e||!t)return;n.current.dataset.motionPopId=a;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(s,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[r]),(0,s.jsx)(u,{isPresent:r,childRef:n,sizeRef:i,children:o.cloneElement(t,{ref:n})})}let x=e=>{let{children:t,initial:r,isPresent:a,onExitComplete:n,custom:i,presenceAffectsLayout:l,mode:h}=e,u=(0,d.M)(p),x=(0,o.useId)(),g=(0,o.useCallback)(e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;n&&n()},[u,n]),f=(0,o.useMemo)(()=>({id:x,initial:r,isPresent:a,custom:i,onExitComplete:g,register:e=>(u.set(e,!1),()=>u.delete(e))}),l?[Math.random(),g]:[a,g]);return(0,o.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[a]),o.useEffect(()=>{a||u.size||!n||n()},[a]),"popLayout"===h&&(t=(0,s.jsx)(m,{isPresent:a,children:t})),(0,s.jsx)(c.t.Provider,{value:f,children:t})};function p(){return new Map}var g=r(4710),f=r(5107);let b=e=>e.key||"";function y(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var v=r(5403);let w=e=>{let{children:t,exitBeforeEnter:r,custom:a,initial:n=!0,onExitComplete:i,presenceAffectsLayout:l=!0,mode:c="sync"}=e;(0,f.V)(!r,"Replace exitBeforeEnter with mode='wait'");let h=(0,o.useMemo)(()=>y(t),[t]),u=h.map(b),m=(0,o.useRef)(!0),p=(0,o.useRef)(h),w=(0,d.M)(()=>new Map),[j,N]=(0,o.useState)(h),[k,C]=(0,o.useState)(h);(0,v.E)(()=>{m.current=!1,p.current=h;for(let e=0;e<k.length;e++){let t=b(k[e]);u.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[k,u.length,u.join("-")]);let P=[];if(h!==j){let e=[...h];for(let t=0;t<k.length;t++){let r=k[t],s=b(r);u.includes(s)||(e.splice(t,0,r),P.push(r))}"wait"===c&&P.length&&(e=P),C(y(e)),N(h);return}let{forceRender:E}=(0,o.useContext)(g.L);return(0,s.jsx)(s.Fragment,{children:k.map(e=>{let t=b(e),r=h===k||u.includes(t);return(0,s.jsx)(x,{isPresent:r,initial:(!m.current||!!n)&&void 0,custom:r?void 0:a,presenceAffectsLayout:l,mode:c,onExitComplete:r?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==E||E(),C(p.current),i&&i())},children:e},t)})})};var j=r(7401);let N=(0,j.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),k=(0,j.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),C=()=>{let[e,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let c=()=>{a(!1)};return(0,s.jsx)("header",{className:"fixed w-full z-50 transition-all duration-300 ".concat(e?"bg-white/80 backdrop-blur-md py-4 shadow-lg":"bg-transparent py-6"),children:(0,s.jsxs)("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[(0,s.jsx)(l.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},className:"flex items-center gap-3",children:(0,s.jsxs)(n(),{href:"/",className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"relative w-12 h-12",children:(0,s.jsx)(i.default,{src:"/images/logo.png",alt:"Phearion Logo",fill:!0,style:{objectFit:"contain"},priority:!0})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent",children:"Phearion"}),(0,s.jsx)("span",{className:"text-sm text-gray-600 hidden sm:block",children:"Creating Digital Magic"})]})]})}),(0,s.jsxs)(l.P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"hidden md:flex gap-8 items-center",children:[(0,s.jsxs)(n(),{href:"#projects",className:"relative group text-gray-700 hover:text-amber-600 transition-colors text-lg",children:[(0,s.jsx)("span",{children:"Projects"}),(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"})]}),(0,s.jsxs)(n(),{href:"#team",className:"relative group text-gray-700 hover:text-amber-600 transition-colors text-lg",children:[(0,s.jsx)("span",{children:"Team"}),(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"})]}),(0,s.jsxs)(n(),{href:"#mission",className:"relative group text-gray-700 hover:text-amber-600 transition-colors text-lg",children:[(0,s.jsx)("span",{children:"Mission"}),(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"})]}),(0,s.jsx)("a",{href:"https://github.com/phearion",target:"_blank",rel:"noopener noreferrer",className:"px-6 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300",children:"GitHub"})]}),(0,s.jsx)("button",{onClick:()=>a(!r),className:"md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors","aria-label":"Toggle menu",children:r?(0,s.jsx)(N,{size:24}):(0,s.jsx)(k,{size:24})}),(0,s.jsx)(w,{children:r&&(0,s.jsx)(l.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},className:"absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl md:hidden",children:(0,s.jsxs)("div",{className:"flex flex-col p-4 gap-4",children:[(0,s.jsx)(n(),{href:"#projects",onClick:c,className:"text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50",children:"Projects"}),(0,s.jsx)(n(),{href:"#team",onClick:c,className:"text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50",children:"Team"}),(0,s.jsx)(n(),{href:"#mission",onClick:c,className:"text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50",children:"Mission"}),(0,s.jsx)("a",{href:"https://github.com/phearion",target:"_blank",rel:"noopener noreferrer",onClick:c,className:"text-center py-2 px-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-md transition-all",children:"GitHub"})]})})})]})})}},347:()=>{},4475:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[725,565,338,173,441,517,358],()=>t(9748)),_N_E=e.O()}]);