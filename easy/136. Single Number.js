function singleNumber(nums) {
  let target = null;

  for (let num of nums) {
    target ^= num;
  }

  return target;
}

let result = singleNumber([4, 1, 2, 1, 2]);

console.log(result);
