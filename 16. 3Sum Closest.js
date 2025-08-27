var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // sort ascending
    let n = nums.length;
    let closestSum = Infinity;
  
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
  
        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];
  
            if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
                closestSum = currSum;
            }
  
            if (currSum < target) {
                left++;
            } else if (currSum > target) {
                right--;
            } else {
                return currSum; // exact match
            }
        }
    }
  
    return closestSum;
  };
  
  const result = threeSumClosest([-1,2,1,-4], 1);
  console.log(result); // Output: 2