import{b as l}from"./index-Cs4vUlKH.js";import{u as r}from"./cachedJokes-DVjak2zg.js";import{_ as m,f as i,g as u,o as d,c as f,b as e,t as _}from"./index-GhIcbde0.js";import"./utils-DpEvt0WC.js";const x={class:"flex flex-col justify-center"},k={class:"flex flex-col md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto"},p={class:"mr-auto text-xl my-6"},v={__name:"Home",setup(h){const t=r(),a=i("");u(async()=>{await s()});async function s(){const o=await l();o||(a.value="Something went wrong.."),a.value=o,await c(a.value)}async function c(o){t.jokes.includes(o)||t.storeJoke(o)}return(o,n)=>(d(),f("div",x,[e("div",k,[n[0]||(n[0]=e("h1",{class:"mr-auto font-medium"},"Wanna hear a funny joke?",-1)),e("div",p,_(a.value.joke),1),e("div",{class:"ml-auto"},[e("button",{class:"button",onClick:s},"Wanna hear another?")])])]))}},b=m(v,[["__scopeId","data-v-e7eb4081"]]);export{b as default};
