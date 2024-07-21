import { renderMiniatures, thumbnails } from './render-miniatures.js';

renderMiniatures();

const miniatures = document.querySelectorAll('.picture');

const createMiniaturesId = () => {
let miniatureId = 1;
  for (let miniature of miniatures) {
    miniature.dataset.id = miniatureId++;
  }
};

createMiniaturesId();

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const socialCaption = document.querySelector('.social__caption');
const commentsContainer = document.querySelector('.social__comments');
const comment = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const commentsCount = document.querySelector('.social__comment-count');
const cancelButton = document.querySelector('.big-picture__cancel');

const renderBigPicture = (index) => {
  bigPictureImg.src = thumbnails[index].url;
  likesCount.textContent = thumbnails[index].likes;
  commentsShown.textContent = 5;
  commentsTotalCount.textContent = thumbnails[index].comments.length;
  socialCaption.textContent = thumbnails[index].description;
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  cancelButton.removeEventListener('click', hideModal);
};

const openModal = (indexof) => {
  renderBigPicture(indexof);
  hideComments();
  createMiniaturesId();
  bigPicture.classList.remove('hidden');
  cancelButton.addEventListener('click', hideModal);
};

const hideComments = () => {
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
}

console.log(miniatures);

for (let item of miniatures) {
  item.addEventListener('click', function(event) {
    openModal(event.target.parentElement.dataset.id - 1);
  })
}
