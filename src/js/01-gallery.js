// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryContainer = document.querySelector("div.gallery");


const previewGalleryList = galleryItems.map( ({preview, original, description}) => {
    
 return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
}).join("");

galleryContainer.insertAdjacentHTML("beforeend", previewGalleryList)

galleryContainer.addEventListener("click", getBigImageUrl)

let lightbox = new SimpleLightbox('.gallery__link');

function getBigImageUrl (event) {
  event.preventDefault()
if(event.target.nodeName !== "IMG") {
  return;
}


// lightbox.on('show.simplelightbox', function () {
// 	console.log("object");
// });

// const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}">
// `)

// instance.show();


window.document.addEventListener("keydown", setModalListener);

function setModalListener (e) {
  console.dir(e.code)
  if(e.code === "Escape"){
    instance.close()
    removeCloseListener()
}

function removeCloseListener () {
  window.document.removeEventListener("keydown", setModalListener)
}}}
