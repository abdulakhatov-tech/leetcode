// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
  let result = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (result === target) {
  //       result = nums[i] + nums[i + 1];
  //       return [i, i + 1];
  //     }
  //   }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 3, 4, 2, 5, 1, 6, 9, 6], 15));
console.log(twoSum([2, 5, 5, 11], 10));
