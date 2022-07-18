
import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector('.gallery');
const imageMaker = createImageGallery(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imageMaker);

imageGallery.addEventListener('click', onImageGalleryClick);


function onImageGalleryClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
        const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
      modal.show();
     
  window.addEventListener('keydown', onEscapeButtonClick);
      function onEscapeButtonClick(e) {
        if (e.code === 'Escape') {
          window.removeEventListener('keydown', onEscapeButtonClick);
          modal.close();
        }
  }
  };
};

function createImageGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
        .join('');
};
