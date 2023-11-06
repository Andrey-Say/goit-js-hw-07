import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listImages = document.querySelector(".gallery");
const listImgMarkap = createListImagesEl(galleryItems);
listImages.insertAdjacentHTML("afterbegin", listImgMarkap);

function createListImagesEl(images) {
  return images
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}" target="_self">
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
