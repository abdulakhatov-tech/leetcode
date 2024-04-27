<<<<<<< HEAD
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique
//  element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order
// they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

function removeDuplicates(nums) {
  let result = [];

  nums.forEach((element) => {
    if (!result.includes(element)) {
      result = [...result, element];
    }
  });

  return result;
}

let result1 = removeDuplicates([1, 1, 2]);
let result2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(result1);
console.log(result2);
console.assert()
=======
function removeDuplicates(nums) {
  if (!nums.length) {
    return 0;
  }

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

let result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(result);
>>>>>>> 10ef7a3bb265e7960c5706504bd1a268882d0502
