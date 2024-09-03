import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=r=>fetch(`https://pixabay.com/api/?key=45720835-cd950b20c56733b9244c71a24&image_type=photo&orientation=horizontal&q=${r}&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),d=r=>`<li class="gallery-item">
  <a class="img-link" href="${r.largeImageURL}">
  <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" width="360" height="200"/>
  </a>
  <div class="inf-box">
  <b class="img-prop">Likes: <span class="img-prop-value">${r.likes}</span></b>
  <b class="img-prop">Views: <span class="img-prop-value">${r.views}</span></b>
  <b class="img-prop">Comments: <span class="img-prop-value">${r.comments}</span></b>
  <b class="img-prop">Downloads: <span class="img-prop-value">${r.downloads}</span></b>
  </div>
  </li>`,g=(r,t)=>{t.innerHTML=r},f=r=>{r.innerHTML=""},y=new u(".gallery-item a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),n=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".form-section span");n.addEventListener("submit",r=>{r.preventDefault();const t=n.elements.user_query.value.trim();f(c),p.classList.add("loader"),m(t).then(o=>{o.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"});const a=o.hits.map(e=>d(e)).join("");g(a,c),y.refresh()}).catch(o=>{l.error({message:`Oops! Something went wrong. Erorr: ${o}`})}).finally(()=>{p.classList.remove("loader")})});
//# sourceMappingURL=index.js.map
