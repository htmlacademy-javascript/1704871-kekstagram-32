import { renderMiniatures } from './render-miniatures.js';

renderMiniatures();

import { thumbnails } from './render-miniatures.js';

const miniatures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const socialCaption = document.querySelector('.social__caption');
const commentsContainer = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentsCount = document.querySelector('.social__comment-count');
const cancelButton = document.querySelector('.big-picture__cancel');

const addComments = (index) => {
  commentsContainer.innerHTML = '';
  for (const comment of thumbnails[index].comments) {
    const commentContainer = document.createElement('li');
    const commentAvatar = document.createElement('img');
    const commentText = document.createElement('p');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.width = '35';
    commentAvatar.height = '35';
    commentAvatar.alt = comment.message;
    commentText.classList.add('comment__text');
    commentText.textContent = comment.message;
    commentContainer.classList.add('social__comment');
    commentContainer.append(commentAvatar);
    commentContainer.append(commentText);
    commentsContainer.append(commentContainer);
  }
};

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

const hideComments = () => {
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
};

const openModal = (indexof) => {
  renderBigPicture(indexof);
  hideComments();
  addComments(indexof);
  bigPicture.classList.remove('hidden');
  cancelButton.addEventListener('click', hideModal);
};

for (const item of miniatures) {
  item.addEventListener('click', (event) => (
    openModal(event.target.parentElement.dataset.id - 1)
  ));
}
