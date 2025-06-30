
function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const subscription = target - nums[i];

        if(map.has(subscription)) {
            return [map.get(subscription), i];
        } else {
            map.set(nums[i], i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
