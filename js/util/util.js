const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const isEscape = (evt) => evt.key === 'Escape';

export {getRandomInteger, isEscape};
