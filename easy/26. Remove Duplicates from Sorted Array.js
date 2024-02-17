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
