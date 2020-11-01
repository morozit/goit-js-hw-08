'use strict';
import gallery from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  btnCloseModal: document.querySelector('button[data-action="close-lightbox"]'),
  modalLinkImage: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
};

function createGalleryMarkup(gallery) {
  // TODO: Используем .map чтобы пройти по базе данных gallery и получить массив galleryMark всех параметров 'li' 'a' 'img'
  const galleryMark = gallery.map(image => {
    // TODO: Создает HTML-элемент по указаному имени тега и возвращает ссылку на него как результат своего выполнения
    const itemGallery = document.createElement('li');
    // TODO: добавляет клас до елементу
    itemGallery.classList.add('gallery__item');

    const linkGallery = document.createElement('a');
    linkGallery.classList.add('gallery__link');
    linkGallery.href = image.original;

    const imagesGallery = document.createElement('img');
    imagesGallery.classList.add('gallery__image');
    imagesGallery.src = image.preview;
    imagesGallery.dataset.source = image.original;
    imagesGallery.alt = image.description;

    // TODO: Добавляет linkGallery в конец дочерних элементов itemGallery
    itemGallery.appendChild(linkGallery);
    // TODO: Добавляет imagesGallery в конец дочерних элементов linkGallery
    linkGallery.appendChild(imagesGallery);
    

    return itemGallery;
  });

// TODO: append - Добавляет galleryMark в конец дочерних элементов gallery
// ? ... spred  ?
  refs.gallery.append(...galleryMark);
}

createGalleryMarkup(gallery);




refs.gallery.addEventListener('click', onGallaryClick);
refs.btnCloseModal.addEventListener('click', onCloseModal);

function onGallaryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bigImageURL = event.target.dataset.source;
  onOpenModal(bigImageURL);
  // closeInOverlay();
}

function onOpenModal(url) {
  refs.overlay.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
      onCloseModal();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  });

  refs.modal.classList.add('is-open');
  refs.modalLinkImage.src = url;
}

function onCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.modalLinkImage.src = '';
}
