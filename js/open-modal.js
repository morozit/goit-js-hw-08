import { onEscKeydown } from './close-modal';
import { onArrowsKeydown } from './arrows-keydown';
// ▶ Реализация делегирования на галерее ul.js-gallery
// и получение url большого изображения.
// ▶ Открытие модального окна по клику на элементе
// галереи.
// ▶ Подмена значения атрибута src элемента
// img.lightbox__image.

export const modal = document.querySelector('div.js-lightbox')
export const modalImg = document.querySelector('img.lightbox__image')

export function openModal(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  modal.classList.add('is-open');
  changeModalImgAttributes(evt);

  window.addEventListener('keydown', onEscKeydown)
  window.addEventListener('keydown', onArrowsKeydown)
}

function changeModalImgAttributes(evt) {
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
}