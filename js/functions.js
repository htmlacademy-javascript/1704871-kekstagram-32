let l = console.log();

/**
 * @description функция, которая проверяет длину строки.
 * Если длина больше или равна значению count,
 * то функция возвращает true. В остальных случаях - false.
 * @param {string} stroke - значение исходной строки
 * @param {number} count - проверямая длина строки
 */

const checkStrokeLength = (stroke, count) => stroke.length >= count;

console.log(checkStrokeLength('я помню чудное мгновенье', 20));

/**
 * @description функция проверки строки на палиндром
 * @param {string} stroke - значение исходной строки
 */

const isPalindrome = (stroke) => {
  stroke = stroke.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= stroke.length - 1 / 2; i++) {
    console.log('сравниваю букву ' + stroke[i] + ' с буквой ' + stroke[stroke.length - i - 1])
    if (stroke[i] != stroke[stroke.length - i - 1]) {
      return false;
    }
  };
  return true;
};

console.log(isPalindrome('Ле2ша на полке клопа нашел'));

/**
 * @description функция возвращает целое число из строки
 * @param {string} stroke - значение исходной строки
 */

const convertToInteger = (stroke) => Math.round(Number(stroke.replace(/[^+\d]/g, '')));

console.log(convertToInteger('агент 007'));
