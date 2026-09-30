
(()=>{try{
 const t=localStorage.getItem("awc-theme");
 if(t==="dark")document.documentElement.classList.add("dark");
 if(t==="light")document.documentElement.classList.remove("dark");
 document.documentElement.style.colorScheme=t==="dark"?"dark":"light";
}catch{}})();
