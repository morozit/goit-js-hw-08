import data from './gallery-items';
import { modalImg } from './open-modal';


// ▶ Пролистывание изображений галереи в открытом
// модальном окне клавишами "влево" и "вправо".
const originLinks = data.map(({ original }) => original);

export function onArrowsKeydown(evt) {
  if (evt.code === "ArrowRight") {
    onArrowRightKeydown()
  } else if (evt.code === "ArrowLeft") {
    onArrowLeftKeydown()
  }
}

function onArrowRightKeydown() {
  for (let i = 0; i < originLinks.length; i += 1) {
      if (modalImg.src === originLinks[Number(`${originLinks.length}`) -1]) {
        modalImg.src = `${originLinks[0]}`;
        return;
      } else if (modalImg.src === originLinks[i]) {
        modalImg.src = `${originLinks[i + 1]}`;
        return;
      }
    }
}

function onArrowLeftKeydown() {
  for (let i = 0; i < originLinks.length; i += 1) {
      if (modalImg.src === originLinks[0]) {
        modalImg.src = `${originLinks[Number(`${originLinks.length}`) -1]}`;
        return;
      } else if (modalImg.src === originLinks[i]) {
        modalImg.src = `${originLinks[i - 1]}`;
        return;
      }
    }
}