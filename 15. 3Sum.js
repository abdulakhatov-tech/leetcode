
var threeSum = function(nums) {
  nums.sort((a, b) => a - b) // sort to handle duplicates & use two pointers
  const result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue // skip duplicates

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}


const result = threeSum([-1,0,1,2,-1,-4])
console.log('result :>> ', result)
