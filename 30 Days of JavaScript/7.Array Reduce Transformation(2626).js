// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation:
// val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until
// every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

function reduce(nums, fn, init) {
  let nums_length_check = 0 <= nums.length && nums.length <= 1000;
  let init_check = 0 <= nums.length && nums.length <= 1000;

  if (!(nums_length_check || init_check))
    throw new Error('Array length and Init should be within 0 and 1000');

  let result = 0;
  let fn_call = 1;

  if (nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (fn_call === 1) {
        result += fn(init, nums[i]);
        fn_call++;
      } else {
        result = fn(result, nums[i]);
        fn_call++;
      }
    }
  } else {
    result = init;
  }

  return result;
}

const sum_1 = (accumulator, current) => accumulator + current;
const sum_2 = (accumulator, current) => accumulator + current * current;
const sum_3 = (accumulator, current) => 0;

console.log(reduce([1, 2, 3, 4], sum_1, 0));
console.log(reduce([1, 2, 3, 4], sum_2, 100));
console.log(reduce([], sum_3, 25));
