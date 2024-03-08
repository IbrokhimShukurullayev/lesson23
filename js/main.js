import {
  daraja,
  repeat,
  placticCard,
  add,
  positiveNumbers,
  addNumber,
  mean,
  areaCircle,
} from "./method.js";

console.log(daraja(5));

let number = [1, -2, 3, -4, 5];
const positive = positiveNumbers(number);
console.log(positive);

console.log(addNumber(6));

console.log(add(5, 9));

console.log(repeat(9, 8));

console.log(placticCard("8600 0000 0000 2540"));

let resuslt = mean(12, 48);
console.log(resuslt);

console.log(areaCircle(4));
