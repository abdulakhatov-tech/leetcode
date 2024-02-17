function addBinary(a, b) {
  let num1 = BigInt('0b' + a); // Convert binary strings to BigInt
  let num2 = BigInt('0b' + b);

  let sum = num1 + num2;

  return sum.toString(2);
}

let result = addBinary('11', '1');
console.log(result);
