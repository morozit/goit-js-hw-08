function nextImage(e) {
  if (!(e.key === "ArrowRight")) {
    return;
  }

  let index = items.findIndex((el) => {
    return el.original === imageInModal.getAttribute("src");
  });

  if (index === items.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  const nextPic = items[index].original;
  const nextDescr = items[index].description;

  imageInModal.setAttribute("src", nextPic);
  imageInModal.setAttribute("alt", nextDescr);
}

function previousImage(e) {
  if (!(e.key === "ArrowLeft")) {
    return;
  }

  let index = items.findIndex((el) => {
    return el.original === imageInModal.getAttribute("src");
  });

  if (index === 0) {
    index = items.length;
  }

  index -= 1;

  const previousPic = items[index].original;
  const previousDescr = items[index].description;

  imageInModal.setAttribute("src", previousPic);
  imageInModal.setAttribute("alt", previousDescr);
}