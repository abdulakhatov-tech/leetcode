// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const key = fn(cur);
    acc[key] = acc[key] || [];
    acc[key].push(cur);

    return acc;
  }, {});
};

let arr_1 = [{ id: '1' }, { id: '1' }, { id: '2' }];
let arr_2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
let arr_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn = function (item) {
  return item.id;
};

fn2 = function (list) {
  return String(list[0]);
};

fn3 = function (n) {
  return String(n > 5);
};

console.log(arr_1.groupBy(fn));
console.log(arr_2.groupBy(fn2));
console.log(arr_3.groupBy(fn3));
