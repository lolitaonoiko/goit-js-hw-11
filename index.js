import{S as p,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m=e=>`<li class="gallery-item">
  <a class="img-link" href="${e.largeImageURL}">
  <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"/>
  </a>
  <div class="inf-box">
  <b class="img-prop">Likes: <span class="img-prop-value">${e.likes}</span></b>
  <b class="img-prop">Views: <span class="img-prop-value">${e.views}</span></b>
  <b class="img-prop">Comments: <span class="img-prop-value">${e.comments}</span></b>
  <b class="img-prop">Downloads: <span class="img-prop-value">${e.downloads}</span></b>
  </div>
  </li>`,d=(e,o)=>{o.innerHTML=e},f=e=>{e.innerHTML=""},g=new p(".gallery-item a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),y=e=>{e.classList.add("loader")},h=e=>{e.classList.remove("loader")},b=(e,o,a)=>{fetch(`https://pixabay.com/api/?key=45720835-cd950b20c56733b9244c71a24&image_type=photo&orientation=horizontal&q=${a}&safesearch=true&per_page=9`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{s.total===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!"});const t=s.hits.map(r=>m(r)).join("");d(t,e),g.refresh()}).catch(s=>{console.log(s)}).finally(()=>{h(o)})},l=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".form-section span");l.addEventListener("submit",e=>{e.preventDefault();const o=l.elements.user_query.value.trim();f(n),y(c),b(n,c,o)});
//# sourceMappingURL=index.js.map
