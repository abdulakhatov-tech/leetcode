// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
// evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

function filter(arr, fn) {
  // Checking whether arr length within 0 and 1000 or not
  if (!(0 <= arr.length && arr.length <= 1000))
    throw new Error('Array length should be within 0 and 1000');

  // declaring filteredArr
  let filteredArr = [];

  // iteration
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr = [...filteredArr, arr[i]];
    }
  }

  return filteredArr;
}

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

console.log(filter([0, 10, 20, 30], greaterThan10));
console.log(filter([1, 2, 3], firstIndex));
console.log(filter([-2, -1, 0, 1, 2], plusOne));
