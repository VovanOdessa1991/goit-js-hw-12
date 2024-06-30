import{A as v,S as b,i as g}from"./assets/vendor-4b9d9ce9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const i={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader"),nextImg:document.querySelector(".nextImg")};function m(r){const e=r.map(({webformatURL:s,views:l,comments:t,likes:o,downloads:n}=r)=>`<li class="galery__item">
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
                  <p class="galeri__ingo-footer">${o}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${l}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${t}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${n}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`).join("");i.galery.insertAdjacentHTML("beforeend",e)}function f(r){r.innerHTML="";//!  Old methods
}async function u(r,e="1",s=15){let l=v.create({baseURL:"https://pixabay.com/api/",headers:{},params:{key:"44446882-f589529ab68d1d31e6487214d",q:r,page:e,per_page:s}});try{return(await l.get("")).data}catch(t){console.log(t)}}y();let h=1,c,a="";const _=15;i.formIMG.addEventListener("submit",I);i.nextImg.addEventListener("click",w);let p=new b(".galery__list a");async function I(r){if(r.preventDefault(),a=r.target.name.value.trim(),a===""){f(i.galery),g.info({title:"Пустой РЯДОК!!"});return}S();try{const e=await u(a);if(e.hits.length==0){y(),g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),f(i.galery),a="",c=0,i.nextImg.classList.add("hidden");return}h++,f(i.galery),c=e.totalHits,m(e.hits),d(),p.refresh(),x(),r.target.name.value=""}catch(e){console.log(e)}}async function w(){try{if(c<=i.galery.childNodes.length+_){g.error({title:"Error",message:"УСЕ!"});const e=c-i.galery.childNodes.length;if(e<=0){g.error({title:"Error",message:"STOP!"}),d();return}const s=await u(a,h++,e);m(s.hits),p.refresh(),L(),d();return}const r=await u(a,h++,_);m(r.hits),p.refresh(),L();//! обновление галереи
d()}catch(r){console.log(r)}}function x(){const r=document.querySelectorAll("img, video");let e=0;Array.from(r).forEach(s=>{s.onload=()=>{e++,e===r.length-2&&y()}})}function S(){i.loader.classList.remove("hidden"),i.preLoader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden"),i.preLoader.classList.add("hidden")}function d(){c===i.galery.childNodes.length?i.nextImg.classList.add("hidden"):i.nextImg.classList.remove("hidden")}async function L(){if(!i.galery.children[0]){window.scrollBy({top:500,behavior:"smooth"});return}let r=i.galery.children[0];//! dblft 480
const e=r.getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
