// Given an integer n, return a counter function. This counter function initially returns
// n and then returns 1 more than the previous value every subsequent time it is called
// (n, n + 1, n + 2, etc).

function createCounter(n) {
  let fnCall = 0;

  return function () {
    fnCall++;

    if (fnCall === 1) {
      return n;
    } else {
      n++;
      return n;
    }
  };
}

let fn = createCounter(10);

console.log(fn());
console.log(fn());
console.log(fn());
