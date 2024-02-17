function searchInsert(nums, target) {
  let res = nums.indexOf(target);

  if (res !== -1) return res;

  nums.push(target);
  let newArr = nums.sort((x, y) => x - y).indexOf(target);

  return newArr;
}

// let result = searchInsert([1, 3, 5, 6], 2);
let result = searchInsert([3, 5, 7, 9, 10], 8);
console.log(result);
