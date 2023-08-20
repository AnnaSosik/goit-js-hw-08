import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line


const simpleLightbox = require('simplelightbox');
const galleryGrid = document.querySelector(`.gallery`);

const galleryMap = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
  )
  .join('');

  console.log(galleryMap);

  galleryGrid.insertAdjacentHTML('beforeend', galleryMap); 


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});


console.log(galleryItems);