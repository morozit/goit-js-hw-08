function onKeyboardPress(event) {
  
  const UrlsArr = gallery.map((img) =>
    img.original);
  
  if (event.code === "ArrowRight") {
    console.dir(event.code);
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (openModalRef.src === UrlsArr[8]) {
        openModalRef.src = `${UrlsArr[0]}`;
        return;
      } else if (openModalRef.src === UrlsArr[i]) {
        openModalRef.src = `${UrlsArr[i + 1]}`;
        return;
      }
    }
  } else if (event.code === "ArrowLeft") {
    console.dir(event.code);
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (openModalRef.src === UrlsArr[0]) {
        openModalRef.src = `${UrlsArr[8]}`;
        return;
      } else if (openModalRef.src === UrlsArr[i]) {
        openModalRef.src = `${UrlsArr[i - 1]}`;
        return;
      }
    }
  }
}