import galleryItems from './gallery-items.js';


const galleryRefsList = document.querySelector('.js-gallery');
// TODO: створення розмітки
const galleryMarkup = createGalleryMarkup(galleryItems);
const modal = document.querySelector('div.lightbox');
const modalImg = document.querySelector('.lightbox__image');

function createGalleryMarkup(img) {
	return img
		.map(({
			preview,
			original,
			description
		}) => {
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

// TODO: Додатква ф-еція для зміни шляху та "альт"
function changeModalImgAttributes(event) {
	modalImg.src = event.target.dataset.source;
	modalImg.alt = event.target.alt;
}

// TODO: Відкриття модалки, , добавлення слухачів
function openModal(event) {
	event.preventDefault();
	if (event.target.nodeName !== 'IMG') {
		return;
	}
	changeModalImgAttributes(event);
	modal.classList.add('is-open');
	window.addEventListener('keydown', keyboardPress);
  modal.addEventListener('click', closeModal);
  pressArrows.addEventListener('click', mousePress);
}
// ! не працює якщо передати ф-цію
// function eventTarget(event) {
//   if (event.target.tagName === "IMG") {
//     return;
//   }
//   // else if (event.target.id === 'lightbox__container-img--btn') return;
//   else if (event.target.tagName === "BUTTON") {
//     return;
//   }
//   return;
// }

function closeModal(event) {
  if (event.target.tagName === "IMG") {
    return;
  }

  else if (event.target.classList.contains ("lightbox__container-img--btn")) {
    return;
  }


	modal.classList.remove('is-open');
	modalImg.src = '';
	window.removeEventListener('keydown', keyboardPress);
  modal.removeEventListener('click', closeModal);
  pressArrows.removeEventListener('click', mousePress);
}

const UrlsArr = galleryItems.map((img) => img.original);
const UrlsArrLength = UrlsArr.length - 1;

function keyboardPress(event) {
	// TODO:
	if (event.code === "ArrowLeft") {
		if (toggleSlide(0, UrlsArrLength)) return
		modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) - 1];
		return
	}
	if (event.code === "ArrowRight") {
		if (toggleSlide(UrlsArrLength, 0)) return;
		modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) + 1];
		return
	}
	// TODO: ESC
	if (event.code === "Escape") {
		closeModal(event);
	}
}
function toggleSlide(par1, par2) {
	if (modalImg.src === UrlsArr[par1]) {
		modalImg.src = UrlsArr[par2];
		return true;
	}
}

const pressArrows = document.querySelector('[data-action="lightbox-button-press"]');

function mousePress(event) {
  if (event === pressArrows.click) {
		if (toggleSlide(0, UrlsArrLength)) return
		modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) - 1];
		return
  }
  
	// if (event === pressArrows) {
	// 	if (toggleSlide(UrlsArrLength, 0)) return;
	// 	modalImg.src = UrlsArr[UrlsArr.indexOf(modalImg.src) + 1];
	// 	return
	// }
  
}
console.log(mousePress(event));