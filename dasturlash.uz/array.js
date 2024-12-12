// =================================== ( 1 ) ===================================
const fn1 = (arr) => {
  let max = 0;

  for (let i of arr) {
    if (max < i) {
      max = i;
    }
  }

  return max;
};

// console.log(fn1([12, 21, 36, 71, 24, 85, 12, 30, 25]));

// =================================== ( 2 ) ===================================
const fn2 = (arr) => {
  let min = arr[0];

  for (let i of arr) {
    if (min > i) {
      min = i;
    }
  }

  return min;
};

// console.log(fn2([12, 21, 36, 71, 24, 85, 12, 30, 3, 25]));

// =================================== ( 3 ) ===================================
const fn3 = (arr) => {
  let average = 0;

  for (let i of arr) {
    average += i;
  }

  return parseInf(average / arr.length);
};

// console.log(fn3([6, 25, 91, 23, 72, 9, 18, 6]));

// =================================== ( 4 ) ===================================
const fn4 = (arr, n) => {
  for (let i of arr) {
    if (i === n) {
      return true;
    }
  }

  return false;
};

// console.log(fn4([6, 25, 91, 23, 72, 9, 18, 6], 23));

// =================================== ( 4 ) ===================================
const fn5 = (arr, n) => {
  if (n >= arr.length || n < 0) {
    return 0;
  }

  return arr[n];
};

// console.log(fn5([6, 25, 91, 23, 72, 9, 18, 6], 2));

// =================================== ( 5 ) ===================================
const fn6 = (arr, n) => {
  arr[arr.length] = n;

  return arr;
};

// console.log(fn6([6, 25, 91, 23, 72, 9, 18, 6], 2));

// =================================== ( 5 ) ===================================
const fn7 = (arr, n) => {
  let newArr = [];

  newArr[0] = n;

  for (let i = 1; i <= arr.length; i++) {
    newArr[i] = arr[i - 1];
  }

  return newArr;
};

// console.log(fn7([6, 25, 91, 23, 72, 9, 18, 6], 2));

// =================================== ( 6 ) ===================================
const fn8 = (arr, a, b) => {
  let newArr = [];
  let count = false;

  for (let k = 0; k <= arr.length; k++) {
    if (k === a) {
      count = true;
      newArr[k] = b;
    } else {
      if (count) {
        newArr[k] = arr[k - 1];
      } else {
        newArr[k] = arr[k];
      }
    }
  }

  return newArr;
};

console.log(fn8([4, 5, 6, 7], 1, 9));
console.log(fn8([4, 5, 6, 7, 10], 2, '&'));

// =================================== ( 7 ) ===================================
// =================================== ( 8 ) ===================================
// =================================== ( 9 ) ===================================
// =================================== ( 10 ) ===================================
