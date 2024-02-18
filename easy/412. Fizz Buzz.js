function fizzBuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
}

// let result = fizzBuzz(3);
// let result = fizzBuzz(5);
let result = fizzBuzz(15);
console.log(result);
