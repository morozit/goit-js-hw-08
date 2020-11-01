// ▶ Создание и рендер разметки по массиву данных и
// предоставленному шаблону.
export const gallery = document.querySelector('ul.js-gallery');

export function createGalleryMarkup(listItems) {
  return listItems.map(({ preview, original, description }) => {
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
          </li>`
  }).join('');
}

/*Ссылка на оригинальное изображение должна храниться
в data-атрибуте source на элементе img, и
указываться в href ссылки(это необходимо для
доступности): ⬇⬇⬇
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
