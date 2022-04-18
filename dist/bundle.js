var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function a(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function r(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function d(t){h=t}const g=[],m=[],$=[],w=[],b=Promise.resolve();let v=!1;function k(t){$.push(t)}const y=new Set;let x=0;function I(){const t=h;do{for(;x<g.length;){const t=g[x];x++,d(t),_(t.$$)}for(d(null),g.length=0,x=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];y.has(n)||(y.add(n),n())}$.length=0}while(g.length);for(;w.length;)w.pop()();v=!1,y.clear(),d(t)}function _(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const E=new Set;function T(t,n){t&&t.i&&(E.delete(t),t.i(n))}function M(t,n,e,a){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),a&&(e&&t.d(1),a())})),t.o(n)}}function j(t){t&&t.c()}function A(t,e,o,i){const{fragment:r,on_mount:c,on_destroy:l,after_update:u}=t.$$;r&&r.m(e,o),i||k((()=>{const e=c.map(n).filter(s);l?l.push(...e):a(e),t.$$.on_mount=[]})),u.forEach(k)}function S(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function C(t,n){-1===t.$$.dirty[0]&&(g.push(t),v||(v=!0,b.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,s,o,i,r,l,u,p=[-1]){const f=h;d(n);const g=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:s.target||f.$$.root};u&&u(g.root);let m=!1;if(g.ctx=o?o(n,s.props||{},((t,e,...a)=>{const s=a.length?a[0]:e;return g.ctx&&r(g.ctx[t],g.ctx[t]=s)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](s),m&&C(n,t)),e})):[],g.update(),m=!0,a(g.before_update),g.fragment=!!i&&i(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();s.intro&&T(n.$$.fragment),A(n,s.target,s.anchor,s.customElement),I()}d(f)}class J{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(n){let e,a,s,o,h,d,g,m,$,w,b,v,k,y,x,I,_,E,T,M;return{c(){e=l("div"),a=l("div"),s=l("div"),o=l("span"),o.textContent="👋",h=p(),d=l("span"),g=l("span"),m=l("span"),m.textContent=`Hello! I am ${F}`,$=p(),w=l("br"),b=p(),v=l("span"),k=l("span"),k.textContent=`${N}`,y=u(",\n                    "),x=l("a"),I=u(R),_=u(","),E=p(),T=u(B),M=u("."),f(o,"class","hello-hand svelte-4dfgv2"),f(m,"class","hello-text svelte-4dfgv2"),f(x,"class","cta"),f(x,"target","_blank"),f(x,"href",q),f(s,"class","about-me svelte-4dfgv2"),f(a,"class","introduction svelte-4dfgv2"),f(e,"class","section")},m(t,n){r(t,e,n),i(e,a),i(a,s),i(s,o),i(s,h),i(s,d),i(d,g),i(g,m),i(d,$),i(d,w),i(d,b),i(d,v),i(v,k),i(v,y),i(v,x),i(x,I),i(v,_),i(d,E),i(d,T),i(d,M)},p:t,i:t,o:t,d(t){t&&c(e)}}}const F="Jatin Tiwari",N="Software Engineer",R="Atlassian",q="https://www.google.com/search?q=atlassian";let B="India";class O extends J{constructor(t){super(),H(this,t,null,L,o,{})}}function P(n){let e;return{c(){e=l("section"),e.innerHTML='<section class="container"><section><span class="tomato text-italic">I am passionately curious!</span> \n            <span>These days I am making lamps during my free time. I ❤️ dogs and like to train them 🦮.</span> \n            <span>I have learnt cooking from youtube and now I sometimes feel like a Chef. I do cardio on Ted talks.</span> \n            <span>I sometimes play video games over weekend.</span></section> \n        <p>I am also avidly looking out for building projects on <span class="highlight">Raspberry Pi</span>.</p> \n        <p>I like reading tech books and articles. I aspire to write a blog to simplify the technology.</p></section>',f(e,"class","section passion-container")},m(t,n){r(t,e,n)},p:t,i:t,o:t,d(t){t&&c(e)}}}class D extends J{constructor(t){super(),H(this,t,null,P,o,{})}}function U(n){let e,a,s,o,u,h,d,g,m,$,w,b,v;return{c(){e=l("section"),a=l("section"),s=l("p"),s.textContent=`I have ~${n[0]} years of experience in frontend development. For ~5.5 years I have worked with e-commerce companies.`,o=p(),u=l("p"),u.textContent="I have advance knowledge in Web and App development.",h=p(),d=l("p"),d.innerHTML='I have expertise in <span class="text-bold">Javascript</span>. These days I am using\n            <span class="highlight">React JS</span>. I also have prior experience with <span class="highlight">Angular JS</span> and <span class="highlight">Backbone JS</span>.',g=p(),m=l("p"),m.innerHTML='I am enthusiastic about <span class="highlight">Puppeteer JS</span> and can very quickly build a scalable API in\n            <span class="highlight">NodeJS</span>. While working with\n            <a class="cta" href="https://en.wikipedia.org/wiki/Flipkart" target="_blank">Flipkart</a>, I had created a Visual Regression tool which\n            was able to take screenshots of all the app workflows and then assert baseline with checkpoint images.',$=p(),w=l("p"),w.innerHTML='I ❤️ <span class="text-italic">building apps from scratch</span> and then scale them to serve millions of cusomters. I also believe\n            that it takes time to build such apps and use of technology is as per need basis.',b=p(),v=l("p"),v.innerHTML='I have helped a few friends to kick off their startup dream with native apps in <span class="highlight">Flutter</span>\n            and <span class="highlight">React native</span>.',f(a,"class","container"),f(e,"class","section")},m(t,n){r(t,e,n),i(e,a),i(a,s),i(a,o),i(a,u),i(a,h),i(a,d),i(a,g),i(a,m),i(a,$),i(a,w),i(a,b),i(a,v)},p:t,i:t,o:t,d(t){t&&c(e)}}}function W(t){const n=new Date,e=new Date("July 21, 2014");return[n.getFullYear()-e.getFullYear()-(n.getMonth()>e.getMonth()?0:1)]}class Y extends J{constructor(t){super(),H(this,t,W,U,o,{})}}function G(t,n,e){const a=t.slice();return a[2]=n[e],a}function K(n){let e,a,s,o,h,d=n[2]+"";return{c(){e=l("span"),a=l("a"),s=u(d),h=p(),f(a,"class","cta"),f(a,"target","_blank"),f(a,"href",o=n[0][n[2]])},m(t,n){r(t,e,n),i(e,a),i(a,s),i(e,h)},p:t,d(t){t&&c(e)}}}function V(n){let e,a,s,o,u=n[1],h=[];for(let t=0;t<u.length;t+=1)h[t]=K(G(n,u,t));return{c(){e=l("div"),a=l("div"),a.innerHTML="<p>I will be happy to connect for new opportunities or consultation✌🏽</p>",s=p(),o=l("div");for(let t=0;t<h.length;t+=1)h[t].c();f(a,"class","container text-center"),f(o,"class","container contacts svelte-1lqwcht"),f(e,"class","section")},m(t,n){r(t,e,n),i(e,a),i(e,s),i(e,o);for(let t=0;t<h.length;t+=1)h[t].m(o,null)},p(t,[n]){if(3&n){let e;for(u=t[1],e=0;e<u.length;e+=1){const a=G(t,u,e);h[e]?h[e].p(a,n):(h[e]=K(a),h[e].c(),h[e].m(o,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=u.length}},i:t,o:t,d(t){t&&c(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(h,t)}}}function z(t){const n={LINKEDIN:"https://www.linkedin.com/in/jatin-tiwari-3783aa50",GITHUB:"https://www.github.com/jatintiwari",EMAIL:"mailto:mail@jatintiwari.com",RESUME:"https://www.jatintiwari.com/knowmore"};return[n,Object.keys(n)]}class Q extends J{constructor(t){super(),H(this,t,z,V,o,{})}}function X(n){let e,a,s,o,u,h,d,g,m;return a=new O({}),o=new Y({}),h=new D({}),g=new Q({}),{c(){e=l("main"),j(a.$$.fragment),s=p(),j(o.$$.fragment),u=p(),j(h.$$.fragment),d=p(),j(g.$$.fragment),f(e,"id","app"),f(e,"class","svelte-blhg4c")},m(t,n){r(t,e,n),A(a,e,null),i(e,s),A(o,e,null),i(e,u),A(h,e,null),i(e,d),A(g,e,null),m=!0},p:t,i(t){m||(T(a.$$.fragment,t),T(o.$$.fragment,t),T(h.$$.fragment,t),T(g.$$.fragment,t),m=!0)},o(t){M(a.$$.fragment,t),M(o.$$.fragment,t),M(h.$$.fragment,t),M(g.$$.fragment,t),m=!1},d(t){t&&c(e),S(a),S(o),S(h),S(g)}}}const Z=document.getElementById("jatintiwari");return new class extends J{constructor(t){super(),H(this,t,null,X,o,{})}}({target:Z,props:{}})}();
//# sourceMappingURL=bundle.js.map
