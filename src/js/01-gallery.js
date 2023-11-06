import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImages = document.querySelector(".gallery");

function createListImagesEl(images) {
  return images
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}"  target="_self">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    })
    .join("");
}

const listImgMarkap = createListImagesEl(galleryItems);
listImages.insertAdjacentHTML("afterbegin", listImgMarkap);

listImages.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const originalSizeImg = basicLightbox.create(
    `<img src='${e.target.dataset.source}'>`
  );
  originalSizeImg.show();
}
