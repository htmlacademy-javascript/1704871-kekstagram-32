const POSTS_COUNT = 25;
const PHOTO_URL_MIN_COUNT = 1;
const PHOTO_URL_MAX_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MIN_COUNT = 0;
const COMMENTS_MAX_COUNT = 30;
let ID = 0;


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const DESCRIPTIONS = [
  'Удалось выбраться на отдых',
  'Как вам моя новая камера?',
  'Случайно сфотографировал',
  'Отпуск, отдыхаем и наслаждаемся жизнью',
];

const NAMES = [
  'Артем',
  'Настя',
  'Лена',
  'Ребекка',
  'Денис',
  'Дима',
  'Эля',
  'Лиза',
  'Фекла',
];

const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const generatePostComment = () => {
  const userPostComment = {};
  userPostComment.id = getRandomInteger(1, 99999);
  // eslint-disable-next-line prefer-template
  userPostComment.avatar = 'img/avatar' + getRandomInteger(1, 6) + '.svg';
  userPostComment.message = COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
  userPostComment.name = NAMES[getRandomInteger(0, NAMES.length - 1)];
  return userPostComment;
};

const generatePostComments = () => {
  const commentsCount = getRandomInteger(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT);
  const userPostComments = Array(commentsCount).fill('1');
  userPostComments.forEach((value, index, array) => {
    array[index] = generatePostComment();
  });
  return userPostComments;
};


const generatePost = () => {
  const userPost = {};
  userPost.id = (ID += 1);
  // eslint-disable-next-line prefer-template
  userPost.url = 'photos/' + getRandomInteger(PHOTO_URL_MIN_COUNT, PHOTO_URL_MAX_COUNT) + '.jpg';
  userPost.description = DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)];
  userPost.likes = getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT);
  userPost.comments = generatePostComments();
  return userPost;
};

const generatePosts = () => {
  const userPosts = Array(POSTS_COUNT).fill('1');
  userPosts.forEach((value, index, array) => {
    array[index] = generatePost();
  });
  return userPosts;
};

generatePosts();
