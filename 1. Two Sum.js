const twoSum = (nums, target) => {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const subtraction = target - nums[i];

        if(map.has(subtraction)) {
            return [map.get(subtraction), i]
        } else {
            map.set(nums[i], i)
        }
    }

}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
