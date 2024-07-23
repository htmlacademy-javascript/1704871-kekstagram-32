import {generatePosts} from './data.js';

const container = document.querySelector('.pictures');

const template = document.querySelector('#picture').content.querySelector('.picture');

const thumbnails = generatePosts();

const fragment = document.createDocumentFragment();

let miniatureId = 1;

thumbnails.forEach(({url, likes, comments}) => {
  const pictureItem = template.cloneNode(true);
  pictureItem.querySelector('.picture__img').src = url;
  pictureItem.querySelector('.picture__likes').textContent = likes;
  pictureItem.querySelector('.picture__comments').textContent = comments.length;
  pictureItem.dataset.id = miniatureId++;
  fragment.append(pictureItem);
});

const renderMiniatures = () => {
  container.append(fragment);
  return thumbnails;
};

export {renderMiniatures, thumbnails};
