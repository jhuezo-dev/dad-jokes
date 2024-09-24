import{d as M,_ as x,u as R,a as B,o as i,c as d,b as e,t as S,e as P,F as I,r as L,f as k,g as F,h as N,i as h,w as T,j as $,k as D,n as J,l as v,m as U,p as E}from"./index-DUBjzGzY.js";import{s as O}from"./utils-DpEvt0WC.js";import{g as C,a as W}from"./index-Cs4vUlKH.js";const A="/assets/logo-djpNt2kk.png",V=M({id:"search",state:()=>({modal_open:!1}),actions:{toggleModalOpen(){this.modal_open=!this.modal_open,O("modal_open",this.modal_open)}}}),q={class:"text-lg"},G={__name:"NavItem",props:{text:{type:String,default:"Link"},path:{type:String,default:"/"}},emits:["clicked"],setup(u,{emit:s}){const o=u,l=s,c=R();B();function p(){l("clicked"),o.path&&c.push(o.path)}return(m,a)=>(i(),d("div",{class:"nav-link",onClick:p},[e("span",q,S(u.text),1)]))}},j=x(G,[["__scopeId","data-v-34bc7834"]]),H={class:"flex p-4 justify-center md:gap-1 lg:gap-1 xl:gap-1 rounded-b-lg"},K=["disabled"],Q=["disabled"],X=["onClick"],Y=["disabled"],Z=["disabled"],ee={__name:"Pagination",props:{maxButtons:{type:Number,default:2},totalPages:{type:Number},perPage:{type:Number},currentPage:{type:Number}},emits:["pageUpdate","limitUpdate"],setup(u,{emit:s}){const o=P(()=>a.currentPage==1?a.currentPage:a.currentPage==a.totalPages?a.totalPages-a.maxButtons:a.currentPage-1),l=s,c=P(()=>{let g=[];for(let n=o.value;n<Math.min(o.value+a.maxButtons-1,a.totalPages);n++)g.push({index:n});return g}),p=P(()=>a.currentPage==1),m=P(()=>a.currentPage==a.totalPages),a=u;function y(){l("pageUpdate",1)}function w(){l("pageUpdate",a.totalPages)}function f(){l("pageUpdate",a.currentPage+1)}function b(){l("pageUpdate",a.currentPage-1)}function r(g){l("pageUpdate",g)}function t(g){l("limitUpdate",g.target.value)}return(g,n)=>(i(),d("ul",H,[e("li",null,[e("button",{class:"p-2",onClick:n[0]||(n[0]=_=>y()),disabled:p.value},"First",8,K)]),e("li",null,[e("button",{class:"p-2",onClick:n[1]||(n[1]=_=>b()),disabled:p.value},"Prev",8,Q)]),(i(!0),d(I,null,L(c.value,_=>(i(),d("li",{key:_},[e("button",{class:"p-2",onClick:Fe=>r(_.index)},S(_.index),9,X)]))),128)),e("li",null,[e("button",{class:"p-2",onClick:n[2]||(n[2]=_=>f()),disabled:m.value},"Next",8,Y)]),e("li",null,[e("button",{class:"p-2",onClick:n[3]||(n[3]=_=>w()),disabled:m.value},"Last",8,Z)]),e("select",{class:"p-2 rounded-lg",name:"limit",id:"limit",onChange:n[4]||(n[4]=_=>t(_))},n[5]||(n[5]=[e("option",{value:"20",selected:""},"20",-1),e("option",{value:"30"},"30",-1)]),32)]))}},te={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},se={class:"fixed bottom-20 inset-0 z-10 w-screen overflow-y-auto"},oe={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},ae={class:"modal_card sm:my-8 sm:w-full sm:max-w-lg"},ne={class:"modal_inner px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},le={class:"sm:flex sm:items-start"},ie={class:"w-full mt-3 text-center sm:mt-0 sm:text-left"},re={class:"mt-2"},ce={class:"mt-2 max-h-40 md:max-h-64 lg:max-h-64 xl:max-h-96 overflow-y-auto rounded-t-lg"},de={key:0},ue={class:"bg-almost-light rounded-t-lg"},pe={class:"flex w-full gap-4"},me={class:"inline-block whitespace-nowrap overflow-hidden text-ellipsis pl-4 mr-auto"},_e={key:1},ge={__name:"Search",setup(u){const s=k([]),o=V(),l=k(),c=k(1),p=k(20);F(async()=>{await m()});async function m(){const r=await C();r||(s.value=[]),l.value=r,s.value=r.results}async function a(r){const t=await C(r);t||console.log("error in updating page number"),f(t)}async function y(r){const t=await C(c.value,r);t||console.log("error in updating limit"),f(t)}async function w(r){const t=await W(r.target.value);t||console.log("error searching term"),f(t)}function f(r){l.value=r,p.value=r.limit,c.value=r.current_page,s.value=r.results}function b(){o.toggleModalOpen()}return(r,t)=>{const g=N("router-link");return i(),d("div",te,[t[5]||(t[5]=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1)),e("div",se,[e("div",oe,[e("div",ae,[e("div",ne,[e("div",le,[e("div",ie,[t[3]||(t[3]=e("h3",{class:"text-left leading-6 font-medium",id:"modal-title"},"Search for terms",-1)),e("div",re,[e("input",{type:"text",class:"w-full",placeholder:"Enter text here...",onChange:w},null,32)]),t[4]||(t[4]=e("h4",{class:"font-medium pt-4 text-left"},"Jokes",-1)),e("div",ce,[s.value.length>0?(i(),d("div",de,[e("ul",ue,[(i(!0),d(I,null,L(s.value,n=>(i(),d("li",{key:n.id,class:"border-y py-2"},[e("div",pe,[e("span",me,S(n.joke),1),h(g,{to:`/jokes/${n.id}`,onClick:t[0]||(t[0]=_=>b())},{default:T(()=>t[1]||(t[1]=[e("span",{class:"inline-block whitespace-nowrap pr-4"},"View Full",-1)])),_:2},1032,["to"])])]))),128))])])):(i(),d("div",_e,t[2]||(t[2]=[e("span",null,"We didn't find any jokes that match, try another search!",-1)])))]),l.value&&s.value.length>0?(i(),$(ee,{key:0,maxButtons:3,totalPages:l.value.total_pages,perPage:p.value,currentPage:c.value,onPageUpdate:a,onLimitUpdate:y},null,8,["totalPages","perPage","currentPage"])):D("",!0)])])]),e("div",{class:"modal_footer flex px-4 py-3 sm:px-6"},[e("button",{class:"ml-auto",onClick:b},"Cancel")])])])])])}}},he=x(ge,[["__scopeId","data-v-452428ff"]]),ve={class:"top_navbar"},fe={class:"nav_card"},ke={class:"nav_wrapper"},xe={__name:"Navigation",setup(u){const s=B(),o=V(),l=k();function c(){o.toggleModalOpen()}return(p,m)=>{const a=N("router-link");return i(),d("div",ve,[e("div",fe,[h(a,{to:"/",class:"logo_wrapper"},{default:T(()=>m[1]||(m[1]=[e("img",{src:A,alt:"Website logo",class:"w-8 h-8 logo"},null,-1),e("div",{class:"text-xl pl-2"},"Dad Jokes",-1)])),_:1}),e("div",ke,[e("div",{class:J(`nav_items ${l.value?"show_mobile_nav":""}`)},[h(j,{text:"Jokes",path:"/jokes"}),h(j,{text:"Search",path:`${v(s).path}`,onClick:m[0]||(m[0]=y=>c())},null,8,["path"]),v(o).modal_open?(i(),$(he,{key:0})):D("",!0)],2)])])])}}},ye=x(xe,[["__scopeId","data-v-3e68791d"]]),z=M({id:"theme",state:()=>({theme:"light"}),getters:{getTheme:u=>u.theme},actions:{setTheme(u){this.theme=u,O("theme",this.theme)}}}),be="/assets/moon-CiCVeT2P.png",Pe="/assets/sun-BDlSuj_m.png",$e={key:0},we=["src"],Ce={key:1},Se=["src"],Ne={__name:"ThemeSwitcher",setup(u){const s=z();function o(l){s.setTheme(l)}return(l,c)=>v(s).theme=="dark"?(i(),d("div",$e,[e("img",{src:v(Pe),alt:"Sun icon",class:"w-7 h-7",onClick:c[0]||(c[0]=p=>o("light"))},null,8,we)])):(i(),d("div",Ce,[e("img",{src:v(be),alt:"Moon icon",class:"w-7 h-7",onClick:c[1]||(c[1]=p=>o("dark"))},null,8,Se)]))}},Te={class:"footer"},Ue={class:"footer_wrapper"},je={class:"flex justify-end"},Me={__name:"Foooter",setup(u){return(s,o)=>(i(),d("div",Te,[e("div",Ue,[o[0]||(o[0]=e("div",{class:"flex justify-center"},[U("Made with "),e("span",{style:{color:"red",margin:"0px 2px"}},"❤"),U(" by Jessica")],-1)),e("div",je,[h(Ne)])])]))}},Be=x(Me,[["__scopeId","data-v-909c41d8"]]),Ie={class:"content_wrapper"},Le={__name:"Layout",setup(u){const s=z();return F(async()=>{const o=JSON.parse(localStorage.getItem("jokes"));o.theme?s.setTheme(o.theme):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?s.setTheme("dark"):s.setTheme("light")}),(o,l)=>{const c=N("router-view");return i(),d("div",{class:J([`${v(s).theme=="dark"?"dark":""}`,"layout"])},[h(ye),e("div",Ie,[(i(),$(c,{key:o.$route.fullPath},{default:T(({Component:p})=>[(i(),$(E(p),{class:"content_bg"}))]),_:1}))]),h(Be)],2)}}},Ve=x(Le,[["__scopeId","data-v-9ed601d3"]]);export{Ve as default};
