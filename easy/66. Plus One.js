function plusOne(digits) {
  let res = (BigInt(digits.join('')) + 1n)
    .toString()
    .split('')
    .map((el) => +el);

  return res;
}

let result = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

console.log(result);
