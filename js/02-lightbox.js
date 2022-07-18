import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');
const imageMaker = createImageGallery(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imageMaker);

imageGallery.addEventListener('click', onImageGalleryClick);


function onImageGalleryClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
        var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
            captionDelay: 250,
        captionPosition: 'bottom',
    });
     
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
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
        .join('');
};
