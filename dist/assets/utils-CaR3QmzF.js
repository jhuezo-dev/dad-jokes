function o(t,s){const e=JSON.parse(localStorage.getItem("jokes"));e?(e[t]=s,localStorage.setItem("jokes",JSON.stringify(e))):localStorage.setItem("jokes",JSON.stringify({[t]:s}))}export{o as s};
