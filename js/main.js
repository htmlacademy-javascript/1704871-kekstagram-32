import { renderMiniatures, thumbnails } from './render-miniatures.js';

renderMiniatures();

const miniatures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const commentsContainer = document.querySelector('.social__comments');
const comment = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const commentsCount = document.querySelector('.social__comment-count');

console.log(bigPicture);

const hideComments = () => {
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
}

const createMiniaturesId = () => {
  let miniatureId = 1;
  for (let miniature of miniatures) {
    miniature.dataset.id = miniatureId++;
  }
}

const clickMiniature = () => {
  hideComments();
  createMiniaturesId();
  bigPicture.classList.remove('hidden');
};

clickMiniature();

