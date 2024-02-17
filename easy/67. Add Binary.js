function addBinary(a, b) {
  let num1 = parseInt(a, 2);
  let num2 = parseInt(b, 2);

  let sum = num1 + num2;

  return sum.toString(2);
}

let result = addBinary('11', '1');
console.log(result);
