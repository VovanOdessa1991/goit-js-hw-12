import{a as v,S as I,i as f}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const t={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader"),nextImg:document.querySelector(".nextImg")};function u(i){const e=i.map(({webformatURL:s,views:a,comments:r,likes:o,downloads:n}=i)=>`<li class="galery__item">
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
                  <p class="galeri__ingo-footer">${a}</p>
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
        </li>`).join("");t.galery.insertAdjacentHTML("beforeend",e)}function m(i){i.innerHTML="";//!  Old methods
}let b=v.create({baseURL:"https://pixabay.com/api/",headers:{},params:{key:"44446882-f589529ab68d1d31e6487214d",orientation:"horizontal",safesearch:"true",image_type:"photo"}});async function h(i,e="1",s=15){const a={q:i,page:e,per_page:s};try{return(await b.get("",{params:a})).data}catch(r){console.log(r)}}y();let c=1,d,l="";const _=15;t.formIMG.addEventListener("submit",x);t.nextImg.addEventListener("click",w);let p=new I(".galery__list a");async function x(i){if(c=1,i.preventDefault(),l=i.target.name.value.trim(),l===""){m(t.galery),f.info({title:"Пустой РЯДОК!!"}),t.nextImg.classList.add("hidden");return}q();try{const e=await h(l);if(e.hits.length==0){y(),f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),m(t.galery),l="",d=0,t.nextImg.classList.add("hidden");return}m(t.galery),d=e.totalHits,u(e.hits),g(),p.refresh(),S(),i.target.name.value=""}catch(e){console.log(e)}}async function w(){try{if(d<=t.galery.childNodes.length+_){const e=d-t.galery.childNodes.length;if(e<=2){t.nextImg.classList.remove("hidden"),f.error({title:"Error",message:"STOP!"}),g();return}f.error({title:"Error",message:"Последняя запись!"}),c+=1;const s=await h(l,c,e);u(s.hits),p.refresh(),L(),g();return}c+=1;const i=await h(l,c,_);u(i.hits),p.refresh(),L(),g()}catch(i){console.log(i)}}function S(){const i=document.querySelectorAll("img, video");let e=0;Array.from(i).forEach(s=>{s.onload=()=>{e++,e===i.length-2&&y()}})}function q(){t.loader.classList.remove("hidden"),t.preLoader.classList.remove("hidden")}function y(){t.loader.classList.add("hidden"),t.preLoader.classList.add("hidden")}function g(){d<=t.galery.childNodes.length+2?t.nextImg.classList.add("hidden"):t.nextImg.classList.remove("hidden")}async function L(){if(!t.galery.children[0]){window.scrollBy({top:500,behavior:"smooth"});return}const e=t.galery.children[0].getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
