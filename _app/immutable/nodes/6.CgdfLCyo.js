import{s as U,n as L}from"../chunks/scheduler.CIBC4Cea.js";import{S as B,i as F,s as P,e as v,w as G,d as u,a as j,c as g,p as b,o as d,b as O,q as p,C as H,r as w,u as y,v as C}from"../chunks/index.CG7IgqAH.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{f as A}from"../chunks/utils.3InfNRpA.js";import{t as J}from"../chunks/config.B41CU4rj.js";import{b as D}from"../chunks/paths.D6K2Q__u.js";async function K({fetch:n}){return{posts:await(await n("api/posts")).json()}}const x=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function M(n,t,l){const o=n.slice();return o[1]=t[l],o}function N(n){let t,l,o=n[1].title+"",r,a,s,c,e=A(n[1].date)+"",h,_,m,E=n[1].description+"",S,k;return{c(){t=v("li"),l=v("a"),r=w(o),s=P(),c=v("p"),h=w(e),_=P(),m=v("p"),S=w(E),k=P(),this.h()},l(f){t=g(f,"LI",{class:!0});var i=b(t);l=g(i,"A",{href:!0,class:!0});var q=b(l);r=y(q,o),q.forEach(u),s=j(i),c=g(i,"P",{class:!0});var z=b(c);h=y(z,e),z.forEach(u),_=j(i),m=g(i,"P",{class:!0});var I=b(m);S=y(I,E),I.forEach(u),k=j(i),i.forEach(u),this.h()},h(){d(l,"href",a=D+"/post/"+n[1].slug),d(l,"class","title svelte-1h06h1m"),d(c,"class","date svelte-1h06h1m"),d(m,"class","description svelte-1h06h1m"),d(t,"class","post svelte-1h06h1m")},m(f,i){O(f,t,i),p(t,l),p(l,r),p(t,s),p(t,c),p(c,h),p(t,_),p(t,m),p(m,S),p(t,k)},p(f,i){i&1&&o!==(o=f[1].title+"")&&C(r,o),i&1&&a!==(a=D+"/post/"+f[1].slug)&&d(l,"href",a),i&1&&e!==(e=A(f[1].date)+"")&&C(h,e),i&1&&E!==(E=f[1].description+"")&&C(S,E)},d(f){f&&u(t)}}}function Q(n){let t,l,o;document.title=J;let r=T(n[0].posts),a=[];for(let s=0;s<r.length;s+=1)a[s]=N(M(n,r,s));return{c(){t=P(),l=v("section"),o=v("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){G("svelte-fbczdu",document.head).forEach(u),t=j(s),l=g(s,"SECTION",{});var e=b(l);o=g(e,"UL",{class:!0});var h=b(o);for(let _=0;_<a.length;_+=1)a[_].l(h);h.forEach(u),e.forEach(u),this.h()},h(){d(o,"class","posts svelte-1h06h1m")},m(s,c){O(s,t,c),O(s,l,c),p(l,o);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(o,null)},p(s,[c]){if(c&1){r=T(s[0].posts);let e;for(e=0;e<r.length;e+=1){const h=M(s,r,e);a[e]?a[e].p(h,c):(a[e]=N(h),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=r.length}},i:L,o:L,d(s){s&&(u(t),u(l)),H(a,s)}}}function R(n,t,l){let{data:o}=t;return n.$$set=r=>{"data"in r&&l(0,o=r.data)},[o]}class ee extends B{constructor(t){super(),F(this,t,R,Q,U,{data:0})}}export{ee as component,x as universal};
