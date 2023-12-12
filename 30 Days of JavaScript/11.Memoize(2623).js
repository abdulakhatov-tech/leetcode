// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs.
// Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
  // Create a Map for caching
  const cacheMap = new Map();

  return function (...args) {
    let arr = JSON.stringify(args);

    if (cacheMap.has(arr)) {
      return cacheMap.get(arr);
    } else {
      // data is not in cache, call fn it
      const data = fn(args[0], args[1]);

      // cache the data
      cacheMap.set(arr, data);

      return data;
    }
  };
}

const sum = (a, b) => a + b;

let callCount = 0;
const memoizedSum = memoize(function (a, b) {
  callCount++;
  return a + b;
});

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
console.log(callCount);
