import{A as v,S as b,i as u}from"./assets/vendor-4b9d9ce9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const o={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader"),nextImg:document.querySelector(".nextImg")};function h(e){const t=e.map(({webformatURL:s,views:l,comments:r,likes:i,downloads:n}=e)=>`<li class="galery__item">
          <div class="galery__item-div">
            <a href="${s}">
              <img
                class="galery-img"
                src = "${s}"
                alt=""

              />
            </a>
            <div class="galery__info">
              <ul class="gallery__info-list">
                <!-- ! подпись под карточкой -->

                <li class="galeri__info-item">
                  <p class="galeri__info-header">Likes</p>
                  <p class="galeri__ingo-footer">${i}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${l}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${r}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${n}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`).join("");o.galery.insertAdjacentHTML("beforeend",t)}function m(e){e.innerHTML="";//!  Old methods
}const I=v.create({baseURL:"https://pixabay.com/api/",headers:{},params:{key:"44446882-f589529ab68d1d31e6487214d"}});async function p(e,t="1",s=15){const l={param:e,page:t,pages:s};try{return(await I.get("",l)).data}catch(r){console.log(r)}}_();let y=1,c,a="";const L=15;o.formIMG.addEventListener("submit",w);o.nextImg.addEventListener("click",x);let d=new b(".galery__list a");function w(e){if(e.preventDefault(),a=e.target.name.value.trim(),a===""){m(o.galery),u.info({title:"Пустой РЯДОК!!"});return}E(),p(a).then(t=>{if(t.hits.length==0){_(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),m(o.galery),a="",c=0,o.nextImg.classList.add("hidden");return}y++,m(o.galery),c=t.totalHits,h(t.hits),g(),d.refresh(),S()}),e.target.name.value=""}function x(){if(c<=o.galery.childNodes.length+L){u.error({title:"Error",message:"УСЕ!"});const e=c-o.galery.childNodes.length;if(e<=0){u.error({title:"Error",message:"STOP!"}),g();return}p(a,y++,e).then(t=>h(t.hits)),d.refresh(),d.refresh(),g(),f();return}p(a,y++,L).then(e=>h(e.hits)),console.log("ЧоМУЖ не скролиить?"),f(),window.scrollBy({top:100,left:100,behavior:"smooth"}),scrollBy(3e3,0);//! обновление галереи
d.refresh(),f(),g()}function S(){const e=document.querySelectorAll("img, video");let t=0;Array.from(e).forEach(s=>{s.onload=()=>{t++,t===e.length-2&&_()}})}function E(){o.loader.classList.remove("hidden"),o.preLoader.classList.remove("hidden")}function _(){o.loader.classList.add("hidden"),o.preLoader.classList.add("hidden")}function g(){c===o.galery.childNodes.length?o.nextImg.classList.add("hidden"):o.nextImg.classList.remove("hidden")}setTimeout(()=>{console.log("Delayed for 1 second."),f(),console.log("Прокрутка scrollEl() Через таймаут!")},15e3);async function f(){if(!o.galery.children[0]){window.scrollBy({top:500,behavior:"smooth"});return}const t=o.galery.children[0].getBoundingClientRect().height*2;console.log("СКРОЛ"),window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
