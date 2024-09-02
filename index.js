import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=r=>`<li class="gallery-item">
  <a class="img-link" href="${r.largeImageURL}">
  <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" width="360" height="200"/>
  </a>
  <div class="inf-box">
  <b class="img-prop">Likes: <span class="img-prop-value">${r.likes}</span></b>
  <b class="img-prop">Views: <span class="img-prop-value">${r.views}</span></b>
  <b class="img-prop">Comments: <span class="img-prop-value">${r.comments}</span></b>
  <b class="img-prop">Downloads: <span class="img-prop-value">${r.downloads}</span></b>
  </div>
  </li>`,d=(r,o)=>{o.innerHTML=r},g=r=>{r.innerHTML=""},f=new u(".gallery-item a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),y=(r,o,a)=>{fetch(`https://pixabay.com/api/?key=45720835-cd950b20c56733b9244c71a24&image_type=photo&orientation=horizontal&q=${a}&safesearch=true&per_page=9`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{s.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"});const e=s.hits.map(t=>m(t)).join("");d(e,r),f.refresh()}).catch(s=>{l.error({message:`Oops! Something went wrong. Erorr: ${s}`})}).finally(()=>{o.classList.remove("loader")})},n=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".form-section span");n.addEventListener("submit",r=>{r.preventDefault();const o=n.elements.user_query.value.trim();g(c),p.classList.add("loader"),y(c,p,o)});
//# sourceMappingURL=index.js.map
