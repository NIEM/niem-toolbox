import{_ as m}from"./page-header.3794ece8.js";import{_ as p}from"./nuxt-link.dbab755e.js";import{g as h}from"./pages.b69801a5.js";import{a as f,o as e,b as s,e as i,f as o,F as x,r as k,u as b,h as c,w as y,i as r,t as n,j as v}from"./entry.05f85438.js";const g={class:"list-group icon-list"},N={key:0},w={key:1,class:"item-link item-link-unavailable"},B=["aria-label"],C={id:"schedule"},V={key:2,class:"small text-muted item-description"},$={__name:"index",setup(F){const l=h("home");function _(a){switch(a){case"future":return"app-secondary";case"in progress":return"app-warning";case"completed":return"app-success"}}return(a,L)=>{const d=m,u=p;return e(),s("div",null,[i(d,{id:"home"}),o("ul",g,[(e(!0),s(x,null,k(b(l),t=>(e(),s("li",{key:t.title,class:"list-group-item list-group-item-action"},[o("i",{class:c(`bi bi-${t.icon} item-icon`),"aria-hidden":"true"},null,2),t.link?(e(),s("b",N,[i(u,{to:t.link,class:"item-link"},{default:y(()=>[r(n(t.title),1)]),_:2},1032,["to"])])):(e(),s("a",w,n(t.title),1)),o("span",{class:c(`float-end badge ${_(t.status)}`),role:"status","aria-label":t.status},[r(n(t.draft)+" | ",1),o("span",C,n(t.schedule),1)],10,B),t.description?(e(),s("div",V,n(t.description),1)):v("",!0)]))),128))])])}}},E=f($,[["__scopeId","data-v-9380bd75"]]);export{E as default};
