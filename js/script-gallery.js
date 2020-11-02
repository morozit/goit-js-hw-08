import galleryItems from './gallery-items.js';

const galleryRefsList = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
const modal = document.querySelector('div.lightbox');
const modalImg = document.querySelector('.lightbox__image');
const btnCloseModal = document.querySelector('button[data-action="close-lightbox"]');
const modalBackdrop = document.querySelector('div.lightbox__overlay');

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





function openModal(evt) { 
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  
  modal.classList.add('is-open');  
  changeModalImgAttributes(evt);
  

  window.addEventListener('keydown', escKeyPress);
  window.addEventListener('keydown', keyboardPres);  

  // modal.addEventListener('click', closeModal, { once:true});

  btnCloseModal.addEventListener('click', closeModal, { once:true});  
  modalBackdrop.addEventListener('click', closeModal, { once: true });
    
}

function changeModalImgAttributes(evt) {
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
}



function closeModal(evt) {
  if(evt.target.tagName === "IMG") {
    return;
  }
  modal.classList.remove('is-open');
  modalImg.src = '';
  window.removeEventListener('keydown', escKeyPress);
}

function escKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModal(evt)
  }
}



function keyboardPres(event) {
  
  const UrlsArr = galleryItems.map((img) =>
    img.original);
  
  if (event.code === "ArrowRight") {
    // console.dir(event.code);
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (modalImg.src === UrlsArr[8]) {
        modalImg.src = `${UrlsArr[0]}`;
        return;
      } else if (modalImg.src === UrlsArr[i]) {
        modalImg.src = `${UrlsArr[i + 1]}`;
        return;
      }
    }
  } else if (event.code === "ArrowLeft") {
    // console.dir(event.code);
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (modalImg.src === UrlsArr[0]) {
        modalImg.src = `${UrlsArr[8]}`;
        return;
      } else if (modalImg.src === UrlsArr[i]) {
        modalImg.src = `${UrlsArr[i - 1]}`;
        return;
      }
    }
  }
}