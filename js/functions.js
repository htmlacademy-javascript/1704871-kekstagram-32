const checkStrokeLength = (stroke, count) => stroke.length > count || stroke.length === count;

checkStrokeLength('я помню чудное мгновенье', 20);

const isPalindrome = (stroke) => stroke.replaceAll(' ', '').split('').reverse().join('').toLowerCase() === stroke.toLowerCase();

isPalindrome('довод1');

const convertToInteger = (stroke) => Math.round(Number(stroke.replace(/[^+\d]/g, '')));

convertToInteger('агент 007');

