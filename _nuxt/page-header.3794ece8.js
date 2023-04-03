import{o as _,b as p,m as I,l as u,h as g,a as v,f as a,e as t,t as h,p as q,k as x,q as B,w as i,u as y,j as C}from"./entry.05f85438.js";import{a as k}from"./pages.b69801a5.js";const $={__name:"icon-any",props:{icon:{type:String,required:!0},ariaLabel:{type:String,required:!1,default:null}},setup(e){const n=e;function s(){return n.ariaLabel?`aria-label='${n.ariaLabel}'`:"aria-hidden='true'"}return(l,b)=>(_(),p("i",I({class:`bi bi-${e.icon}`},s),null,16))}},L=["id","aria-controls"],E={__name:"collapsible-tab",props:{id:{type:String,required:!0}},setup(e){return(n,s)=>(_(),p("button",{id:"tab-"+e.id,class:g("btn btn-tab page-header-tab nav-item"),role:"tab","aria-controls":"pane-"+e.id,"aria-selected":!1},[u(n.$slots,"default")],8,L))}};const P=e=>(q("data-v-6ba6603d"),e=e(),x(),e),w=["id","aria-labelledby"],N=P(()=>a("hr",null,null,-1)),A={class:"page-header-pane-title mb-3"},j={__name:"collapsible-pane",props:{id:{type:String,required:!0},icon:{type:String,required:!0},title:{type:String,required:!0}},setup(e){return(n,s)=>{const l=$;return _(),p("div",{id:"pane-"+e.id,class:g("tab-pane page-header-pane fade show"),role:"tabpanel","aria-labelledby":"tab-"+e.id},[N,a("div",A,[t(l,{icon:e.icon},null,8,["icon"]),a("span",null,h(e.title),1)]),u(n.$slots,"default",{},void 0,!0)],8,w)}}},D=v(j,[["__scopeId","data-v-6ba6603d"]]),T={},U={class:"card"},V={class:"card-body"},z={class:"card-text"};function H(e,n){return _(),p("div",U,[a("div",V,[a("div",z,[u(e.$slots,"default")])])])}const M=v(T,[["render",H]]);const F={id:"header-row"},G={id:"header-buttons",class:"nav float-end"},J={class:"mb-3"},K={key:0},O={__name:"page-header",props:{id:{type:String,required:!0,default:null},closed:{type:Boolean,required:!1,default:!1}},setup(e){const s=k(e.id);let l,b;B(()=>{l=document.getElementsByClassName("page-header-tab"),b=document.getElementsByClassName("page-header-pane");for(const o of l)o.addEventListener("click",S)});function S(o){const m=o.currentTarget.id,c="pane-"+m.replace("tab-",""),d=document.getElementById(m),r=document.getElementById(c);if(r.style.display==="block")r.style.display="none",d.classList.remove("active","current");else{for(const f of b)f.style.display="none";for(const f of l)f.classList.remove("active","current");r.style.display="block",d.classList.add("active","current")}}return(o,m)=>{const c=$,d=E,r=D,f=M;return _(),p("div",null,[t(f,{class:g({closed:e.closed})},{default:i(()=>[a("div",F,[t(c,{icon:y(s).icon},null,8,["icon"]),a("span",null,h(y(s).title),1),a("span",G,[t(d,{id:"user"},{default:i(()=>[t(c,{icon:"info-circle","aria-label":"User information"})]),_:1}),t(d,{id:"developer"},{default:i(()=>[t(c,{icon:"journal-code","aria-label":"Developer information"})]),_:1}),t(d,{id:"preferences"},{default:i(()=>[t(c,{icon:"sliders2","aria-label":"User information"})]),_:1})])]),a("div",J,[t(r,{id:"user",icon:"info-circle",title:"User information"},{default:i(()=>[a("p",null,h(y(s).description),1),u(o.$slots,"user",{},void 0,!0)]),_:3}),t(r,{id:"developer",icon:"journal-code",title:"Developer information"},{default:i(()=>[u(o.$slots,"developer",{},void 0,!0)]),_:3}),t(r,{id:"preferences",icon:"sliders2",title:"Preferences"},{default:i(()=>[u(o.$slots,"preferences",{},void 0,!0)]),_:3})])]),_:3},8,["class"]),e.closed?C("",!0):(_(),p("br",K))])}}},W=v(O,[["__scopeId","data-v-1ee5002e"]]);export{W as _,$ as a};