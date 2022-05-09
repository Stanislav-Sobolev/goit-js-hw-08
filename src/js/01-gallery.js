// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

const previewGalleryList = galleryItems.map( ({preview, original, description}) => {
    
 return `<a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
</a>`
}).join("");

galleryContainer.insertAdjacentHTML("beforeend", previewGalleryList);

galleryContainer.addEventListener("click", clickToImg);

function clickToImg (event) {
    event.preventDefault()
  if(event.target.nodeName !== "IMG") {
    return;
  }
};

const lightbox = new SimpleLightbox('.gallery__item', 
{captionsData: "alt", captionDelay: 250,});