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
  index += 1;
  if (index == pictures.length) {
    index = 0;
  };
  const toNextImage = pictures[index].original;
  modalImg.setAttribute("src", toNextImage);
};