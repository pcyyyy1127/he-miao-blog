import{H as E,a0 as B,_ as N,d as q,u as D,i as f,m as R,n as V,p as z,U as A,o as l,e as c,w as h,f as H,T as W,h as s,b as j,x as P,l as O,v as U,s as L,q as M,j as Y,V as G}from"./app.51a93867.js";import{A as I,P as J}from"./Page.14836c05.js";import{u as K,C as Q}from"./Common.1d32177d.js";import{P as X}from"./Pager.6650d387.js";import"./resolveTime.03fcdd5f.js";const x=({headers:k,activeLink:n})=>{const r=E();return B("ul",{class:{catalog:!0}},k.map(o=>B("li",{class:{active:n===o.slug,[`level-${o.level}`]:!0,[`toc-link-${o.slug}`]:!0},key:o.title,onClick:()=>{r.currentRoute.value.hash!==`#${o.slug}`&&r.push(`#${o.slug}`)}},o.title)))};x.displayName="Catalog";x.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const m=40,S=80,Z=q({__name:"Post",setup(k){const n=Y(),r=D(),o=E(),_=G(),b=_.resolve,$=_.pending,i=K(),F=f(()=>i.value?n.value.headers:[]),w=t=>t.children.length>0?[t].concat(...t.children.map(w)):t,u=f(()=>[].concat(...F.value.map(w))),e=R({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=()=>{for(let a=u.value.length-1;a>=0;a--){const T=u.value[a].slug,C=document.querySelector(`#${T}`);if((C?C.getBoundingClientRect().top:0)<=100){e.activeLink=T;break}}window.pageYOffset>e.headerHeight+m-S?(e.isFixed=!0,e.catalogTop=S):(e.isFixed=!1,e.catalogTop=e.headerHeight+m)},d=()=>{const t=document.querySelector(".post-header");e.headerHeight=t?t.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.catalogTop=e.headerHeight+m};let y;V(()=>{window.addEventListener("scroll",p),d(),window.onresize=()=>(()=>{d(),p()})(),y=o.afterEach(()=>{d()})}),z(()=>{window.removeEventListener("scroll",p),y()});const{post:g}=A(),v=f(()=>{if(!g.value)return{};const t=g.value.info.next;t&&(t.text=r.value.postNext);const a=g.value.info.prev;return a&&(a.text=r.value.postPrev),{next:t,prev:a}});return(t,a)=>(l(),c(Q,null,{page:h(()=>[H(W,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(b),onBeforeLeave:s($)},{default:h(()=>[j("div",{class:P(["post-wrapper",{"show-catalog":s(i)}])},[O(H(I,{class:"post-header"},null,512),[[U,s(n).title]]),(l(),c(J,{key:s(n).path,class:"post-content"},{bottom:h(()=>[v.value.next||v.value.prev?(l(),c(X,{key:0,data:v.value},null,8,["data"])):L("",!0)]),_:1})),s(i)?(l(),c(s(x),{key:0,headers:u.value,"active-link":e.activeLink,class:P({fixed:e.isFixed}),style:M({top:`${e.catalogTop}px`})},null,8,["headers","active-link","class","style"])):L("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var re=N(Z,[["__file","Post.vue"]]);export{re as default};
