import{a as c,f as n,g as d,h as m,o as u,c as f,b as e,t as g,l as i,i as h,w as _}from"./index-GhIcbde0.js";import{c as k}from"./index-Cs4vUlKH.js";import{u as w}from"./cachedJokes-DVjak2zg.js";import"./utils-DpEvt0WC.js";const j="/assets/twitter-icon-CuBCt906.avif",v={class:"flex flex-col justify-center"},y={class:"flex flex-col md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto"},b={class:"text-xl my-6"},C={class:"flex justify-left md:flex-wrap lg:flex-wrap xl:flex-wrap sm:justify-end md:justify-end lg:justify-end xl:justify-end gap-1 md:gap-3 lg:gap-3 xl:gap-3 pt-4"},J=["href"],S=["href"],V={__name:"Joke",setup(B){const r=w(),s=c(),a=n(),o=n("https://icanhazdadjoke.com/j");d(async()=>{await p(s.params.id)});async function p(l){const t=await k(l);t||(a.value="Something went wrong.."),a.value=t.joke,r.storeJoke(t)}return(l,t)=>{const x=m("router-link");return u(),f("div",v,[e("div",y,[e("div",b,g(a.value),1),e("div",C,[e("a",{target:"_blank",href:`https://x.com/intent/tweet?url=${o.value}/${i(s).params.id}/amp&text=Check+out+this+#dadjoke&via=icanhazdadjoke`},t[0]||(t[0]=[e("button",{class:"flex px-2 md:px-4 lg:px-4 xl:px-4"},[e("span",{class:"pr-1 text-almost-light"},"Share on"),e("img",{src:j,alt:"X app logo",width:"20",height:"20"})],-1)]),8,J),e("a",{target:"_blank",href:`${o.value}/${i(s).params.id}`},t[1]||(t[1]=[e("button",{class:"px-2 md:px-4 lg:px-4 xl:px-4"},"Permalink",-1)]),8,S),h(x,{class:"text-almost-light",to:"/"},{default:_(()=>t[2]||(t[2]=[e("button",{class:"px-2 md:px-4 lg:px-4 xl:px-4"},"Random",-1)])),_:1})])])])}}};export{V as default};
