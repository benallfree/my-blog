import{s as W,i as at,n as I,a as A,e as rt}from"./scheduler.SWM7tKXe.js";import{S as X,i as Y,e as c,c as f,n as v,b as h,d as o,p as U,q as E,r as B,u,C as ut,v as ct,f as F,h as J,m as K,t as P,j as Q,k as V,s as T,g as L,a as k}from"./index.BasOd9_s.js";import{g as ft,a as it}from"./spread.CgU5AtxT.js";import{M as dt}from"./mdsvex.xUPuBVKO.js";function mt(i){let t,l;return{c(){t=c("img"),this.h()},l(n){t=f(n,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){at(t.src,l=i[0])||v(t,"src",l),v(t,"alt",i[1]),v(t,"loading","lazy")},m(n,a){h(n,t,a)},p(n,[a]){a&1&&!at(t.src,l=n[0])&&v(t,"src",l),a&2&&v(t,"alt",n[1])},i:I,o:I,d(n){n&&o(t)}}}function _t(i,t,l){let{src:n}=t,{alt:a}=t;return i.$$set=e=>{"src"in e&&l(0,n=e.src),"alt"in e&&l(1,a=e.alt)},[n,a]}class ht extends X{constructor(t){super(),Y(this,t,_t,mt,W,{src:0,alt:1})}}function vt(i){let t,l,n,a;return{c(){t=c("button"),l=U(i[0])},l(e){t=f(e,"BUTTON",{});var r=E(t);l=B(r,i[0]),r.forEach(o)},m(e,r){h(e,t,r),u(t,l),n||(a=ut(t,"click",i[1]),n=!0)},p(e,[r]){r&1&&ct(l,e[0])},i:I,o:I,d(e){e&&o(t),n=!1,a()}}}function pt(i,t,l){let n=0;return[n,()=>l(0,n+=1)]}class gt extends X{constructor(t){super(),Y(this,t,pt,vt,W,{})}}function xt(i){let t,l="Table of Contents",n,a,e="Svelte",r,p,m,G,y,Z="static",N,M,tt="/",R,_,w,et="But if you arrange routes in <code>src/routes/post/[slug]</code> form, the static media will be served from <code>../</code>.",z,x,nt='<input type="checkbox" disabled=""/> Research this',D,H,$,j,g,st="Counter",q,C,O;return $=new ht({props:{src:"../favicon.png",alt:"Svelte"}}),C=new gt({}),{c(){t=c("h1"),t.textContent=l,n=T(),a=c("h2"),a.textContent=e,r=T(),p=c("ul"),m=c("li"),G=U("Media inside the "),y=c("strong"),y.textContent=Z,N=U(" folder is served from "),M=c("code"),M.textContent=tt,R=U(` normally.
`),_=c("ul"),w=c("li"),w.innerHTML=et,z=T(),x=c("li"),x.innerHTML=nt,D=T(),H=c("li"),F($.$$.fragment),j=T(),g=c("h2"),g.textContent=st,q=T(),F(C.$$.fragment),this.h()},l(s){t=f(s,"H1",{id:!0,"data-svelte-h":!0}),L(t)!=="svelte-1ihjw6w"&&(t.textContent=l),n=k(s),a=f(s,"H2",{id:!0,"data-svelte-h":!0}),L(a)!=="svelte-em4gby"&&(a.textContent=e),r=k(s),p=f(s,"UL",{});var d=E(p);m=f(d,"LI",{});var b=E(m);G=B(b,"Media inside the "),y=f(b,"STRONG",{"data-svelte-h":!0}),L(y)!=="svelte-kxgo52"&&(y.textContent=Z),N=B(b," folder is served from "),M=f(b,"CODE",{"data-svelte-h":!0}),L(M)!=="svelte-3m7v69"&&(M.textContent=tt),R=B(b,` normally.
`),_=f(b,"UL",{class:!0});var S=E(_);w=f(S,"LI",{"data-svelte-h":!0}),L(w)!=="svelte-hswg98"&&(w.innerHTML=et),z=k(S),x=f(S,"LI",{class:!0,"data-svelte-h":!0}),L(x)!=="svelte-185ilwm"&&(x.innerHTML=nt),D=k(S),H=f(S,"LI",{});var lt=E(H);J($.$$.fragment,lt),lt.forEach(o),S.forEach(o),b.forEach(o),d.forEach(o),j=k(s),g=f(s,"H2",{id:!0,"data-svelte-h":!0}),L(g)!=="svelte-7fd3by"&&(g.textContent=st),q=k(s),J(C.$$.fragment,s),this.h()},h(){v(t,"id","table-of-contents"),v(a,"id","svelte"),v(x,"class","task-list-item"),v(_,"class","contains-task-list"),v(g,"id","counter")},m(s,d){h(s,t,d),h(s,n,d),h(s,a,d),h(s,r,d),h(s,p,d),u(p,m),u(m,G),u(m,y),u(m,N),u(m,M),u(m,R),u(m,_),u(_,w),u(_,z),u(_,x),u(_,D),u(_,H),K($,H,null),h(s,j,d),h(s,g,d),h(s,q,d),K(C,s,d),O=!0},p:I,i(s){O||(P($.$$.fragment,s),P(C.$$.fragment,s),O=!0)},o(s){Q($.$$.fragment,s),Q(C.$$.fragment,s),O=!1},d(s){s&&(o(t),o(n),o(a),o(r),o(p),o(j),o(g),o(q)),V($),V(C,s)}}}function $t(i){let t,l;const n=[i[0],ot];let a={$$slots:{default:[xt]},$$scope:{ctx:i}};for(let e=0;e<n.length;e+=1)a=A(a,n[e]);return t=new dt({props:a}),{c(){F(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){K(t,e,r),l=!0},p(e,[r]){const p=r&1?ft(n,[r&1&&it(e[0]),r&0&&it(ot)]):{};r&2&&(p.$$scope={dirty:r,ctx:e}),t.$set(p)},i(e){l||(P(t.$$.fragment,e),l=!0)},o(e){Q(t.$$.fragment,e),l=!1},d(e){V(t,e)}}}const ot={title:"Second",description:"Second post.",date:"2023-4-16",categories:["sveltekit","svelte"],published:!0};function Ct(i,t,l){return i.$$set=n=>{l(0,t=A(A({},t),rt(n)))},t=rt(t),[t]}class wt extends X{constructor(t){super(),Y(this,t,Ct,$t,W,{})}}export{wt as default,ot as metadata};
