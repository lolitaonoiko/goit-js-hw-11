// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

import { requestFetch } from './js/pixabay-api';
import { createGallery, addElToHTML, cleanElHTML } from './js/render-functions';

const form = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');
const loaderSpan = document.querySelector('.form-section span');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = form.elements.user_query.value.trim();

  cleanElHTML(galleryList);
  loaderSpan.classList.add('loader');
  requestFetch(inputValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      const gallery = data.hits
        .map(imgInform => createGallery(imgInform))
        .join('');

      addElToHTML(gallery, galleryList);

      lightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        message: `Oops! Something went wrong. Erorr: ${err}`,
      });
    })
    .finally(() => {
      loaderSpan.classList.remove('loader');
    });
});
