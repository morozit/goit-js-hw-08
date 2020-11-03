import galleryItems from './gallery-items.js';


const galleryRefsList = document.querySelector('.js-gallery');
// TODO: створення розмітки
const galleryMarkup = createGalleryMarkup(galleryItems);

const modal = document.querySelector('div.lightbox');
const modalImg = document.querySelector('.lightbox__image');

function createGalleryMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a
                  class="gallery__link"
                  href="${original}"
                >
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </li>`;
  }).join("");
}

galleryRefsList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRefsList.addEventListener('click', openModal);

function openModal(event) { 
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  changeModalImgAttributes(event);
  modal.classList.add('is-open'); 
  
  window.addEventListener('keydown', keyboardPres);  
  modal.addEventListener('click', closeModal);
}

function changeModalImgAttributes(event) {
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
}

function closeModal(event) {
  if(event.target.tagName === "IMG") {
    return;
  }
  modal.classList.remove('is-open');
  modalImg.src = '';
  window.removeEventListener('keydown', keyboardPres);
  modal.removeEventListener('click', closeModal);
}

function keyboardPres(event) {
  const UrlsArr = galleryItems.map((img) => img.original);
  if (event.code === "ArrowRight") {
    if (modalImg.src === UrlsArr[8]) {
      modalImg.src = UrlsArr[0];
      return;
    }
    modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) + 1];
    return;
  }
  if (event.code === "ArrowLeft") {
    if (modalImg.src === UrlsArr[0]) {
      modalImg.src = UrlsArr[8];
      return;
    }
    modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) - 1];
    return;
  }
    if (event.code === "Escape") {
      closeModal(event);
  }
}