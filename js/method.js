export function daraja(number) {
  return number ** 2;
}

export function positiveNumbers(numbers) {
  return numbers.filter((num) => num > 0);
}

export function addNumber(number) {
  let add = 0;

  for (let i = 1; i <= number; i++) {
    add += i;
  }

  return add;
}

export function add(a, b) {
  let number = a + b;
  return number;
}

export function repeat(a, b) {
  return +a.toString().repeat(b);
}

export function placticCard(cardNumber) {
  let [firstSection, , , lastSection] = cardNumber.split(" ");
  return `${firstSection} **** **** ${lastSection}`;
}

export function mean(a, b) {
  let res1 = (a + b) / 2;
  let res2 = Math.sqrt(a * b);
  return {res1, res2}
}


export function areaCircle(R) {
  const PI = 3.14;
  let S = PI * R ** 2;
  return S;
}

