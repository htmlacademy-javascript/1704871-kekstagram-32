const checkStrokeLength = (stroke, count) => stroke.length >= count;

checkStrokeLength('я помню чудное мгновенье', 20);

const isPalindrome = (stroke) => {
  stroke = stroke.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= stroke.length - 1 / 2; i++) {
    if (stroke[i] !== stroke[stroke.length - i - 1]) {
      return false;
    }
  }
  return true;
};

isPalindrome('Ле2ша на полке клопа нашел');

const convertToInteger = (stroke) => Math.round(Number(stroke.replace(/[^+\d]/g, '')));

convertToInteger('агент 007');
