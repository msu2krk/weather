(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();let d=document.querySelector(".weather__form"),i=document.querySelector(".weather__city"),u="http://api.weatherapi.com/v1/current.json?key=4feda2f012924810b53171957221512&aqi=yes&q=",l=document.querySelector(".weather__data"),a=document.querySelector(".weather__loader");d.addEventListener("submit",o=>{let n=i.value;if(n.length<=3)i.classList.add("weather__city--error");else{i.classList.remove("weather__city--error");let s=u+n;_(),fetch(s).then(t=>t.status===200?t.json():h()).then(t=>{f();let e="";e+=`<div class="weather__location">${t.location.name} - ${t.location.country}</div>`,e+='<div class="weather__info">',e+=`<div class="weather__icon"><img src="${t.current.condition.icon}" alt="${t.current.condition.text}"></div>`,e+=`<div class="weather__temp">
                            <span class="weather__num">${t.current.temp_c}</span>
                            <span class="weather__unit">&deg;C</span>
                        </div>`,e+=`<div class="weather__desc">
                    <p class="weather__text">The amount of rainfall: ${t.current.precip_mm} mm</p>
                    <p class="weather__text">Humidity: ${t.current.humidity} %</p>
                    <p class="weather__text">Wind: ${t.current.wind_kph} kph</p>
                </div>`,e+="</div >",l.innerHTML=e})}o.preventDefault()});i.addEventListener("keyup",()=>{i.value.length<=3?i.classList.add("weather__city--error"):i.classList.remove("weather__city--error")});let h=()=>{l.innerHTML='<div class="weather__error">City not found, or problem with API</div>'},_=()=>{a.style.display="block"};const f=()=>{a.style.display="none"};
