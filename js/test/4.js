import pictures from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const close = document.querySelector('[data-action="close-lightbox"]');
const modalImg = document.querySelector('.lightbox__image');

const galleryOfPictures = pictures.map(({preview, original, description}) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryOfPictures);

gallery.addEventListener('click', isModalOpen);
modal.addEventListener('click', clickOnBackdrop);
window.addEventListener('keydown', downOnESC);

function isModalOpen (evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  close.addEventListener('click', isModalClose, {once:true});
  evt.preventDefault();
  modal.classList.add('is-open');
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
  // window.addEventListener('keydown', onKeyLeafDown);
  window.addEventListener('keydown', toPreviousImage);
  window.addEventListener('keydown', toNextImage);
}

function isModalClose () {
  modal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
};

function clickOnBackdrop (evt) {
  if (evt.target.nodeName !== 'DIV') {
    return;
  };
  isModalClose ();
};

function downOnESC(evt) {
  if (evt.code !== 'Escape') {
    return;
  };
  isModalClose ();
};


function toPreviousImage(evt) {
  if (evt.code !== "ArrowLeft") {
    return;
  }
  let index = pictures.findIndex((el) => {
    return el.original === modalImg.getAttribute("src");
  });
  if (index === 0) {
    index = pictures.length;
  }
  index -= 1;
  const toPreviousImage = pictures[index].original;
  modalImg.setAttribute("src", toPreviousImage);
};

function toNextImage (evt) {
  if (evt.code !== "ArrowRight") {
    return;
  }
  let index = pictures.findIndex((el) => {
    return el.original === modalImg.getAttribute("src");``
  });
  
  if (index == pictures.length) {
    index = 0;
  };
  index += 1;
  const toNextImage = pictures[index].original;
  modalImg.setAttribute("src", toNextImage);
};