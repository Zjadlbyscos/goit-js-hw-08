import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line
const gallery = document.querySelector(".gallery");
let picArray = [];
galleryItems.forEach((galleryItem) => {
  const liItem = document.createElement("li");

  const innerString = `<a class="gallery__item" href="${galleryItem.original}">
<img
  class="gallery__image"
  src="${galleryItem.preview}"
  alt="${galleryItem.description}"
/>
</a>`;
  liItem.insertAdjacentHTML("beforeend", innerString);

  picArray.push(liItem);
});

gallery.append(...picArray);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);