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
import { createGallery, addElToHTML } from './render-functions';

export const requestFetch = (galleryList, loaderSpan, inputValueRequest) => {
  fetch(
    `https://pixabay.com/api/?key=45720835-cd950b20c56733b9244c71a24&image_type=photo&orientation=horizontal&q=${inputValueRequest}&safesearch=true&per_page=9`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
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
};
