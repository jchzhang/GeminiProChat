import"./Layout.astro_astro_type_script_index_0_lang.a657d0a3.js";async function m(){const e=localStorage.getItem("pass");(await(await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:e})})).json()).code!==0&&(window.location.href="/password")}m();const h=document.getElementById("themeToggle"),a=document.querySelector(".theme_toggle_circle1"),i=document.querySelector(".theme_toggle_circle2"),n=()=>{document.documentElement.classList.contains("dark")??localStorage.getItem("theme")==="dark"?(a.setAttribute("r","9"),i.setAttribute("r","9")):(a.setAttribute("r","5"),i.setAttribute("r","5"))},p=()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");e.addEventListener("change",()=>{document.documentElement.classList.toggle("dark",e.matches),n()})};p();n();const g=({x:e,y:t})=>{const o=document.documentElement,s=o.classList.contains("dark");if(localStorage.setItem("theme",s?"light":"dark"),!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches))n(),o.classList.toggle("dark");else{const r=Math.hypot(Math.max(e,innerWidth-e),Math.max(t,innerHeight-t));document.startViewTransition(()=>{o.classList.toggle("dark"),n()}).ready.then(()=>{const c=[`circle(0px at ${e}px ${t}px)`,`circle(${r}px at ${e}px ${t}px)`],d=s?[...c].reverse():c,l=s?"::view-transition-old(root)":"::view-transition-new(root)";document.documentElement.animate({clipPath:d},{duration:500,easing:"ease-in",pseudoElement:l})})}};h.addEventListener("click",g);
