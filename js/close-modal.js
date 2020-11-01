import { modal, modalImg } from './open-modal';
import { onArrowsKeydown } from './arrows-keydown';

// ▶ Закрытие модального окна по клику на кнопку
// button[data - action= "close-lightbox"].
// ▶ Очистка значения атрибута src элемента
// img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.

export const btnCloseModal = document.querySelector('button[data-action="close-lightbox"]');

export function closeModal() {
  window.removeEventListener('keydown', onEscKeydown)
  window.removeEventListener('keydown', onArrowsKeydown)
  modal.classList.remove('is-open');
  modalImg.src = '';
}

// Дополнительно
// Следующий функционал не обязателен при сдаче
// задания, но будет хорошей практикой по работе с
// событиями:
// ▶ Закрытие модального окна по клику на
// div.lightbox__overlay.
export const modalBackdrop = document.querySelector('div.lightbox__overlay');

// ▶ Закрытие модального окна по нажатию клавиши ESC.
export function onEscKeydown(evt) {
  if (evt.code === 'Escape') {
    closeModal()
  }
}