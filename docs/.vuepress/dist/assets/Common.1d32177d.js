import{u as O,i as y,j as we,d as x,o as a,c as v,b as u,h as r,_ as C,k as ye,r as R,l as H,v as F,f as $,m as Se,n as X,p as J,t as A,q as de,e as I,s as L,x as P,w as D,y as T,T as Te,z as ve,A as B,B as Q,C as pe,F as q,D as j,E as z,G as Z,H as Y,I as ge,J as Ie,K as Le,L as xe,M as Ce,N as Ne,O as Be,P as Ve,g as Me,Q as me,R as Oe}from"./app.51a93867.js";const ce=p=>decodeURI(p).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ee=(p,n)=>{if(n.hash===p)return!0;const e=ce(n.path),o=ce(p);return e===o},he=(p,n)=>p.link&&Ee(p.link,n)?!0:p.children?p.children.some(e=>he(e,n)):!1,Re=()=>{const p=O(),n=we();return y(()=>n.value.frontmatter.layout==="Post"&&n.value.frontmatter.catalog!==!1&&(p.value.catalog||n.value.frontmatter.catalog)&&n.value.headers.length>0)},De={class:"footer"},Pe=["innerHTML"],He=x({__name:"Footer",setup(p){const e=O().value.footer;return(o,s)=>(a(),v("footer",De,[u("span",{innerHTML:r(e)},null,8,Pe)]))}});var Fe=C(He,[["__file","Footer.vue"]]);const Ae=["title"],qe=x({__name:"ToggleColorModeButton",setup(p){const n=["light","dark","auto"],e=O(),{currentMode:o}=ye(),s=()=>{const w=(n.indexOf(o.value)+1)%n.length;o.value=n[w]};return(h,w)=>{const g=R("VIcon");return a(),v("div",{title:r(e).toggleColorMode,onClick:s},[H($(g,{name:"fa-sun"},null,512),[[F,r(o)==="light"]]),H($(g,{name:"fa-moon"},null,512),[[F,r(o)==="dark"]]),H($(g,{name:"fa-magic"},null,512),[[F,r(o)==="auto"]])],8,Ae)}}});var We=C(qe,[["__file","ToggleColorModeButton.vue"]]);const Ke=["title"],ze=x({__name:"ToggleSidebarButton",emits:["toggle"],setup(p){const n=O();return(e,o)=>{const s=R("VIcon");return a(),v("div",{class:"toggle-sidebar-button",title:r(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:o[0]||(o[0]=h=>e.$emit("toggle"))},[$(s,{name:"bi-layout-sidebar-inset"})],8,Ke)}}});var je=C(ze,[["__file","ToggleSidebarButton.vue"]]);const Ye={class:"menu-btn-wrapper"},Ge={class:"menu-btn-icon"},Ue=u("span",null,null,-1),Xe=u("span",null,null,-1),Je=u("span",null,null,-1),Qe=[Ue,Xe,Je],Ze={class:"menu-progress"},et={class:"menu-btn-child-wrapper"},tt=x({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(p){const n=O(),e=Se({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});X(()=>{window.addEventListener("scroll",o)}),J(()=>{window.removeEventListener("scroll",o)});const o=()=>{const l=window.pageYOffset,_=g(),t=document.documentElement.clientHeight;let i=l/(_-t)*100;i>100&&(i=100),isNaN(i)||Math.round(i)<=0?(i=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(i)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(i||0)+"% 314.15926%"},s=()=>{e.isMenuOpen=!e.isMenuOpen},h=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=()=>{window.scrollTo({top:g(),behavior:"smooth"})},g=()=>{const l=document.querySelector(".theme-container");return l?l.offsetHeight:0},b=Re();return(l,_)=>{const t=R("VIcon");return a(),v("div",{class:P(["menu-btn-container",{open:e.isMenuOpen}])},[u("div",Ye,[u("div",{class:"menu-btn",onClick:s},[H(u("div",Ge,Qe,512),[[F,e.isBtnIconVisible]]),H(u("div",{class:"menu-text"},A(e.menuText),513),[[F,e.isTextVisible]]),(a(),v("svg",Ze,[u("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:de({"stroke-dasharray":e.borderLen})},null,4)]))]),u("div",et,[r(n).colorModeSwitch?(a(),I(We,{key:0,class:"menu-btn-child"})):L("",!0),u("div",{class:"menu-btn-child",onClick:w},[$(t,{name:"fa-chevron-down"})]),u("div",{class:"menu-btn-child",onClick:h},[$(t,{name:"fa-chevron-up"})]),r(b)?(a(),v("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:_[0]||(_[0]=i=>l.$emit("toggle-catalog"))},[$(t,{name:"fa-list-ul"})])):L("",!0),$(je,{class:"menu-btn-child menu-btn-sidebar",onToggle:_[1]||(_[1]=i=>l.$emit("toggle-sidebar"))})])])],2)}}});var nt=C(tt,[["__file","Menu.vue"]]);const at=x({__name:"DropdownTransition",setup(p){const n=o=>{o.style.height=o.scrollHeight+"px"},e=o=>{o.style.height=""};return(o,s)=>(a(),I(Te,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:D(()=>[T(o.$slots,"default")]),_:3}))}});var be=C(at,[["__file","DropdownTransition.vue"]]);const st=["aria-label"],ot={class:"title"},lt={key:0,class:"nav-icon"},rt=u("span",{class:"arrow down"},null,-1),it=["aria-label"],ut={class:"title"},ct={key:0,class:"nav-icon"},dt={class:"navbar-dropdown"},vt={class:"navbar-dropdown-subtitle"},pt={key:1},gt={class:"navbar-navbar-dropdown-subitem-wrapper"},mt=x({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(p){const n=p,{item:e}=ve(n),o=y(()=>e.value.ariaLabel||e.value.text),s=B(!1),h=Q();pe(()=>h.path,()=>{s.value=!1});const w=b=>{b.detail===0?s.value=!s.value:s.value=!1},g=(b,l)=>l[l.length-1]===b;return(b,l)=>{const _=R("VIcon");return a(),v("div",{class:P(["navbar-dropdown-wrapper",{open:s.value}])},[u("button",{class:"navbar-dropdown-title",type:"button","aria-label":o.value,onClick:w},[u("span",ot,[r(e).icon?(a(),v("span",lt,[$(_,{name:r(e).icon},null,8,["name"])])):L("",!0),u("span",null,A(r(e).text),1)]),rt],8,st),u("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":o.value,onClick:l[0]||(l[0]=t=>s.value=!s.value)},[u("span",ut,[r(e).icon?(a(),v("span",ct,[$(_,{name:r(e).icon},null,8,["name"])])):L("",!0),u("span",null,A(r(e).text),1)]),u("span",{class:P(["arrow",s.value?"down":"right"])},null,2)],8,it),$(be,null,{default:D(()=>[H(u("ul",dt,[(a(!0),v(q,null,j(r(e).children,t=>(a(),v("li",{key:t.text,class:"navbar-dropdown-item"},[t.children?(a(),v(q,{key:0},[u("h4",vt,[t.link?(a(),I(z,{key:0,item:t,onFocusout:i=>g(t,r(e).children)&&t.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(a(),v("span",pt,A(t.text),1))]),u("ul",gt,[(a(!0),v(q,null,j(t.children,i=>(a(),v("li",{key:i.link,class:"navbar-dropdown-subitem"},[$(z,{item:i,onFocusout:f=>g(i,t.children)&&g(t,r(e).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),I(z,{key:1,item:t,onFocusout:i=>g(t,r(e).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[F,s.value]])]),_:1})],2)}}});var ht=C(mt,[["__file","NavbarDropdown.vue"]]);const bt={key:0,class:"navbar-items"},_t={key:0,class:"navbar-item"},ft={key:0,class:"nav-icon"},$t=x({__name:"NavbarItems",emits:["toggle-search"],setup(p){const n=()=>{const t=Y(),i=Ie(),f=Le(),k=O();return y(()=>{var d,S,M,W,K,ee;const N=Object.keys(f.value.locales);if(N.length<2)return[];const E=(d=t==null?void 0:t.currentRoute)==null?void 0:d.value.path,V=(S=t==null?void 0:t.currentRoute)==null?void 0:S.value.fullPath,m=(M=t==null?void 0:t.currentRoute)==null?void 0:M.value.hash;return[{text:(W=k.value.selectLanguageText)!=null?W:"unknown language",ariaLabel:(ee=(K=k.value.selectLanguageAriaLabel)!=null?K:k.value.selectLanguageText)!=null?ee:"unknown language",icon:k.value.langIcon,children:N.map(G=>{var ae,se,oe,le,re,ie;const fe=(se=(ae=f.value.locales)==null?void 0:ae[G])!=null?se:{},te=(le=(oe=k.value.locales)==null?void 0:oe[G])!=null?le:{},ne=`${fe.lang}`,$e=(re=te.selectLanguageName)!=null?re:ne;let U;if(ne===f.value.lang)U=V;else{const ue=E.replace(i.value,G);t.getRoutes().some(ke=>ke.path===ue)?U=`${ue}${m}`:U=(ie=te.home)!=null?ie:G}return{text:$e,link:U}})}]})},e=t=>xe(t)?Ce(t):t.children?{...t,children:t.children.map(e)}:t,s=(()=>{const t=O();return y(()=>(t.value.navbar||[]).map(e))})(),h=n(),w=y(()=>[...s.value,...b.value?h.value:[]]),g=Z(),b=y(()=>{var f;const i=(f=Y().currentRoute)==null?void 0:f.value.path;return g.value.layout===void 0&&i.indexOf("/page/")===-1&&ge.value.path!==""}),l=O(),_=y(()=>l.value.search&&g.value.search!==!1);return(t,i)=>{const f=R("VIcon");return w.value.length?(a(),v("nav",bt,[(a(!0),v(q,null,j(w.value,k=>(a(),v("div",{key:k.text,class:"navbar-item"},[k.children?(a(),I(ht,{key:0,item:k},null,8,["item"])):(a(),I(z,{key:1,item:k},null,8,["item"]))]))),128)),_.value?(a(),v("div",_t,[u("a",{style:{cursor:"pointer"},onClick:i[0]||(i[0]=k=>t.$emit("toggle-search"))},[r(l).searchIcon?(a(),v("span",ft,[$(f,{name:r(l).searchIcon},null,8,["name"])])):L("",!0),u("span",null,A(r(l).searchText),1)])])):L("",!0)])):L("",!0)}}});var _e=C($t,[["__file","NavbarItems.vue"]]);const kt={class:"site-name"},wt=x({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(p){const n=O(),e=Z(),o=Y(),s=B(null),h=B(null),w=y(()=>n.value.home||"/"),g=y(()=>n.value.navbarTitle),b=B(0),l=y(()=>b.value?{maxWidth:b.value+"px"}:{}),_=B(0),t=B(!1),i=B(!1),f=B(!0),k=()=>{const m=window.pageYOffset;m<_.value?m>0&&t.value?i.value=!0:(i.value=!1,t.value=!1):(i.value=!1,s.value&&m>s.value.offsetHeight&&(t.value=!0)),_.value=m},N=()=>{let m=!1;e.value.layout==="HomePage"&&(m=!0),e.value.layout==="Post"&&e.value.useHeaderImage&&(m=!0),e.value.layout==="Tags"&&n.value.pages&&n.value.pages.tags&&n.value.pages.tags.bgImage&&(m=!0),e.value.layout==="Links"&&n.value.pages&&n.value.pages.links&&n.value.pages.links.bgImage&&(m=!0),f.value=m};let E;X(()=>{const c=V(s.value,"paddingLeft")+V(s.value,"paddingRight"),d=()=>{var S;window.innerWidth<=719||!s.value?b.value=0:b.value=s.value.offsetWidth-c-(((S=h.value)==null?void 0:S.offsetWidth)||0)};d(),window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),N(),E=o.afterEach(()=>{N()}),window.addEventListener("scroll",k)}),J(()=>{window.removeEventListener("scroll",k),E()});function V(m,c){var M,W,K;const d=(K=(W=(M=m==null?void 0:m.ownerDocument)==null?void 0:M.defaultView)==null?void 0:W.getComputedStyle(m,null))==null?void 0:K[c],S=Number.parseInt(d,10);return Number.isNaN(S)?0:S}return(m,c)=>{const d=R("RouterLink"),S=R("NavbarSearch");return a(),v("header",{ref_key:"navbar",ref:s,class:P(["navbar",{"is-fixed":t.value||p.isSidebar,"is-visible":i.value||p.isSidebar,invert:f.value}])},[u("span",{ref_key:"navbarBrand",ref:h},[$(d,{to:w.value},{default:D(()=>[u("span",kt,A(g.value),1)]),_:1},8,["to"])],512),u("div",{class:"navbar-items-wrapper",style:de(l.value)},[T(m.$slots,"before"),$(_e,{class:"can-hide",onToggleSearch:c[0]||(c[0]=M=>m.$emit("toggle-search"))}),T(m.$slots,"after"),$(S)],4)],2)}}});var yt=C(wt,[["__file","Navbar.vue"]]);const St={class:"sidebar-item-children"},Tt=x({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(p){const n=p,{item:e,depth:o}=ve(n),s=Q(),h=Y(),w=y(()=>he(e.value,s)),g=y(()=>({"sidebar-item":!0,"sidebar-heading":o.value===0,active:w.value,collapsible:e.value.collapsible})),b=y(()=>e.value.collapsible?w.value:!0),[l,_]=Ne(b.value),t=f=>{e.value.collapsible&&(f.preventDefault(),_())},i=h.afterEach(f=>{Be(()=>{l.value=b.value})});return J(()=>{i()}),(f,k)=>{var E;const N=R("SidebarItem",!0);return a(),v("li",null,[r(e).link?(a(),I(z,{key:0,class:P(g.value),item:r(e)},null,8,["class","item"])):(a(),v("p",{key:1,tabindex:"0",class:P(g.value),onClick:t,onKeydown:Ve(t,["enter"])},[Me(A(r(e).text)+" ",1),r(e).collapsible?(a(),v("span",{key:0,class:P(["arrow",r(l)?"down":"right"])},null,2)):L("",!0)],34)),(E=r(e).children)!=null&&E.length?(a(),I(be,{key:2},{default:D(()=>[H(u("ul",St,[(a(!0),v(q,null,j(r(e).children,V=>(a(),I(N,{key:`${r(o)}${V.text}${V.link}`,item:V,depth:r(o)+1},null,8,["item","depth"]))),128))],512),[[F,r(l)]])]),_:1})):L("",!0)])}}});var It=C(Tt,[["__file","SidebarItem.vue"]]);const Lt={key:0,class:"sidebar-items"},xt=x({__name:"SidebarItems",setup(p){const n=Q(),e=me();return X(()=>{pe(()=>n.hash,o=>{const s=document.querySelector(".sidebar");if(!s)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${o}"]`);if(!h)return;const{top:w,height:g}=s.getBoundingClientRect(),{top:b,height:l}=h.getBoundingClientRect();b<w?h.scrollIntoView(!0):b+l>w+g&&h.scrollIntoView(!1)})}),(o,s)=>r(e).length?(a(),v("ul",Lt,[(a(!0),v(q,null,j(r(e),h=>(a(),I(It,{key:`${h.text}${h.link}`,item:h},null,8,["item"]))),128))])):L("",!0)}});var Ct=C(xt,[["__file","SidebarItems.vue"]]);const Nt={class:"sidebar"},Bt=x({__name:"Sidebar",emits:["toggle-search"],setup(p){return(n,e)=>(a(),v("aside",Nt,[$(_e,{onToggleSearch:e[0]||(e[0]=o=>n.$emit("toggle-search"))}),T(n.$slots,"top"),$(Ct),T(n.$slots,"bottom")]))}});var Vt=C(Bt,[["__file","Sidebar.vue"]]);const Mt={class:"page-content"},Ot=x({__name:"Common",setup(p){const n=Z(),e=O(),o=Y(),s=y(()=>n.value.navbar!==!1&&e.value.navbar!==!1),h=y(()=>ge.value.path===""),w=me(),g=y(()=>w.value.length>0&&!h.value),b=B(!1),l=c=>{b.value=typeof c=="boolean"?c:!b.value},_={x:0,y:0},t=c=>{_.x=c.changedTouches[0].clientX,_.y=c.changedTouches[0].clientY},i=c=>{const d=c.changedTouches[0].clientX-_.x,S=c.changedTouches[0].clientY-_.y;Math.abs(d)>Math.abs(S)&&Math.abs(d)>40&&(d>0&&_.x<=80?l(!0):l(!1))},f=B(!1),k=c=>{f.value=typeof c=="boolean"?c:!f.value;const d=document.querySelector("html");f.value?d==null||d.classList.add("fixed"):d==null||d.classList.remove("fixed"),f.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},N=B(!1),E=c=>{N.value=typeof c=="boolean"?c:!N.value},V=y(()=>[{"no-navbar":!s.value,"no-sidebar":!g.value,"sidebar-open":b.value,"catalog-open":N.value,"search-open":f.value},n.value.pageClass]);let m;return X(()=>{m=o.afterEach(()=>{l(!1),k(!1)})}),Oe(()=>{m()}),(c,d)=>{const S=R("GungnirSearchPage");return a(),v("div",{class:P(["theme-container",V.value]),onTouchstart:t,onTouchend:i},[T(c.$slots,"navbar",{},()=>[s.value?(a(),I(yt,{key:0,"is-sidebar":g.value,onToggleSearch:d[0]||(d[0]=M=>k(!0))},{before:D(()=>[T(c.$slots,"navbar-before")]),after:D(()=>[T(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):L("",!0)]),u("div",{class:"sidebar-mask",onClick:d[1]||(d[1]=M=>l(!1))}),T(c.$slots,"sidebar",{},()=>[$(Vt,{onToggleSearch:d[2]||(d[2]=M=>k(!0))},{top:D(()=>[T(c.$slots,"sidebar-top")]),bottom:D(()=>[T(c.$slots,"sidebar-bottom")]),_:3})]),u("div",Mt,[T(c.$slots,"page")]),$(S,{onToggleSearch:d[3]||(d[3]=M=>k(!1))}),$(nt,{onToggleSidebar:l,onToggleCatalog:E}),g.value?L("",!0):(a(),I(Fe,{key:0}))],34)}}});var Rt=C(Ot,[["__file","Common.vue"]]);export{Rt as C,Re as u};
