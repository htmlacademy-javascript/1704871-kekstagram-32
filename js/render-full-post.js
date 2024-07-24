import { thumbnails } from './render-miniatures.js';

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

const COMMENTS_SHOWN_COUNT = 5;

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

const closeModal = () => {
  bigPicture.classList.add('hidden');
  cancelButton.removeEventListener('click', closeModal);
};

const hideCommentCounts = () => {
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  cancelButton.addEventListener('click', closeModal);
};

const renderBigPicture = (index) => {
  bigPictureImg.src = thumbnails[index].url;
  likesCount.textContent = thumbnails[index].likes;
  commentsShown.textContent = COMMENTS_SHOWN_COUNT;
  commentsTotalCount.textContent = thumbnails[index].comments.length;
  socialCaption.textContent = thumbnails[index].description;
  addComments(index);
  hideCommentCounts();
  openModal(index);
};

export {renderBigPicture};
