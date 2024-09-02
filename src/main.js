import { requestFetch } from './js/pixabay-api';
import { cleanElHTML } from './js/render-functions';

const form = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');
const loaderSpan = document.querySelector('.form-section span');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = form.elements.user_query.value.trim();

  cleanElHTML(galleryList);
  loaderSpan.classList.add('loader');
  requestFetch(galleryList, loaderSpan, inputValue);
});
