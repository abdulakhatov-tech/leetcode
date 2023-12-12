// Given an integer array arr and a mapping function fn, return a new array
// with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = [...newArr, fn(arr[i], i)];
  }
  return newArr;
}

// Example fn 1
function plusone(n) {
  return n + 1;
}

// Example fn 2
function plusI(n, i) {
  return n + i;
}

// Example fn 3
function constant() {
  return 42;
}

console.log(map([1, 2, 3], plusone));
console.log(map([1, 2, 3], plusI));
console.log(map([1, 2, 3], constant));
